/**
 * Quiz Attempt Service (Feature 005)
 *
 * Handles quiz attempt lifecycle: creation, loading, answer submission, and scoring.
 */

import { prisma } from '@/lib/db/client';
import { selectQuestions, prepareRandomizedQuestions } from './quiz-randomization-service';
import { generateSeed } from '@/lib/utils/shuffle';
import type {
  QuizQuestionData,
  QuizOptionData,
  QuizRandomizationConfig,
  RandomizedQuestion,
  AttemptQuestion,
  DisplayChoice,
  ChoiceMapping,
} from '@/types/quiz';
import type { QuizAttemptStatus } from '@/generated/prisma';

// ============================================
// CREATE ATTEMPT
// ============================================

interface CreateAttemptParams {
  userId: string;
  lessonId: string;
  progressionId: string;
  seed?: string;
}

interface CreateAttemptResult {
  attemptId: string;
  questions: AttemptQuestion[];
  config: QuizRandomizationConfig & { threshold: number };
}

/**
 * Create a new quiz attempt with randomized questions.
 */
export async function createAttempt(params: CreateAttemptParams): Promise<CreateAttemptResult> {
  const { userId, lessonId, progressionId, seed } = params;

  // Load lesson with questions and options
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      questions: {
        orderBy: { order: 'asc' },
        include: {
          choices: {
            orderBy: { order: 'asc' },
          },
        },
      },
    },
  });

  if (!lesson) {
    throw new Error('Lesson not found');
  }

  // Build configuration
  const config: QuizRandomizationConfig = {
    questionsToShow: lesson.questionsToShow,
    shuffleQuestions: lesson.shuffleQuestions,
    shuffleAnswers: lesson.shuffleAnswers,
  };

  // Convert to internal format
  const questionsData: QuizQuestionData[] = lesson.questions.map((q) => ({
    id: q.id,
    questionText: q.questionText,
    questionType: q.questionType,
    feedback: q.feedback,
    linkedTheorySection: q.linkedTheorySection,
    order: q.order,
    choices: q.choices.map(
      (c): QuizOptionData => ({
        id: c.id,
        text: c.text,
        isCorrect: c.isCorrect,
        order: c.order,
      })
    ),
  }));

  // Generate seed for reproducibility (if not provided)
  const attemptSeed = seed ?? generateSeed();

  // Select and randomize questions
  const selectedQuestions = selectQuestions(questionsData, config, attemptSeed);
  const randomizedQuestions = prepareRandomizedQuestions(selectedQuestions, config, attemptSeed);

  // Create attempt in database
  const attempt = await prisma.quizAttempt.create({
    data: {
      progressionId,
      lessonId,
      status: 'IN_PROGRESS',
      questionsToShowSnapshot: config.questionsToShow,
      shuffleQuestionsSnapshot: config.shuffleQuestions,
      shuffleAnswersSnapshot: config.shuffleAnswers,
      seed: attemptSeed,
      questions: {
        create: randomizedQuestions.map((rq) => ({
          questionId: rq.question.id,
          position: rq.position,
          // Prisma requires explicit handling for null JSON values
          choiceMappingJson: rq.choiceMapping ?? undefined,
        })),
      },
    },
    include: {
      questions: true,
    },
  });

  // Format response
  const attemptQuestions = formatAttemptQuestions(randomizedQuestions, attempt.questions);

  return {
    attemptId: attempt.id,
    questions: attemptQuestions,
    config: {
      ...config,
      threshold: lesson.quizThreshold,
    },
  };
}

// ============================================
// LOAD ATTEMPT
// ============================================

/**
 * Load an existing attempt with all question data.
 */
export async function loadAttempt(attemptId: string, userId: string) {
  const attempt = await prisma.quizAttempt.findUnique({
    where: { id: attemptId },
    include: {
      lesson: true,
      progression: true,
      questions: {
        orderBy: { position: 'asc' },
      },
    },
  });

  if (!attempt) {
    return null;
  }

  // Verify ownership
  if (attempt.progression.userId !== userId) {
    throw new Error('Unauthorized: Attempt belongs to another user');
  }

  // Load full question data for each attempt question
  const questionIds = attempt.questions.map((q) => q.questionId);
  const questions = await prisma.quizQuestion.findMany({
    where: { id: { in: questionIds } },
    include: {
      choices: {
        orderBy: { order: 'asc' },
      },
    },
  });

  const questionMap = new Map(questions.map((q) => [q.id, q]));

  // Format attempt questions with full data
  const attemptQuestions: AttemptQuestion[] = attempt.questions.map((aq) => {
    const question = questionMap.get(aq.questionId);
    if (!question) {
      throw new Error(`Question ${aq.questionId} not found`);
    }

    const choiceMapping = aq.choiceMappingJson as ChoiceMapping | null;

    // Format choices if MCQ
    let choices: DisplayChoice[] | undefined;
    if (choiceMapping && question.choices.length > 0) {
      choices = question.choices
        .map((c) => ({
          label: choiceMapping[c.id],
          text: c.text,
          optionId: c.id,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    }

    return {
      questionId: question.id,
      position: aq.position,
      questionText: question.questionText,
      questionType: question.questionType,
      choices,
      userAnswer: aq.userAnswerJson as string | string[] | null,
      isCorrect: aq.isCorrect,
      feedback: attempt.status === 'SUBMITTED' ? question.feedback : null,
      linkedTheorySection: question.linkedTheorySection,
    };
  });

  return {
    id: attempt.id,
    lessonId: attempt.lessonId,
    status: attempt.status,
    startedAt: attempt.startedAt.toISOString(),
    submittedAt: attempt.submittedAt?.toISOString() ?? null,
    score: attempt.score,
    passed: attempt.passed,
    questions: attemptQuestions,
    config: {
      questionsToShow: attempt.questionsToShowSnapshot,
      shuffleQuestions: attempt.shuffleQuestionsSnapshot,
      shuffleAnswers: attempt.shuffleAnswersSnapshot,
      threshold: attempt.lesson?.quizThreshold ?? 70,
    },
  };
}

// ============================================
// SAVE ANSWER
// ============================================

interface SaveAnswerParams {
  attemptId: string;
  questionId: string;
  answer: string | string[];
  userId: string;
}

/**
 * Save an answer for a question in an attempt.
 */
export async function saveAnswer(params: SaveAnswerParams) {
  const { attemptId, questionId, answer, userId } = params;

  // Load attempt and verify ownership
  const attempt = await prisma.quizAttempt.findUnique({
    where: { id: attemptId },
    include: {
      progression: true,
      questions: {
        where: { questionId },
      },
    },
  });

  if (!attempt) {
    throw new Error('Attempt not found');
  }

  if (attempt.progression.userId !== userId) {
    throw new Error('Unauthorized');
  }

  if (attempt.status !== 'IN_PROGRESS') {
    throw new Error('Cannot modify a submitted attempt');
  }

  const attemptQuestion = attempt.questions[0];
  if (!attemptQuestion) {
    throw new Error('Question not part of this attempt');
  }

  // Load question with choices to calculate isCorrect
  const question = await prisma.quizQuestion.findUnique({
    where: { id: questionId },
    include: {
      choices: {
        orderBy: { order: 'asc' },
      },
    },
  });

  // Calculate isCorrect using the same logic as submitAttempt
  let isCorrect = false;
  if (question) {
    isCorrect = gradeAnswer(
      {
        questionType: question.questionType,
        choices: question.choices.map((c) => ({ id: c.id, isCorrect: c.isCorrect })),
        correctAnswer: question.correctAnswer,
      },
      answer
    );
  }

  // Update the answer with isCorrect
  await prisma.quizAttemptQuestion.update({
    where: { id: attemptQuestion.id },
    data: {
      userAnswerJson: answer,
      answeredAt: new Date(),
      isCorrect,
    },
  });

  return {
    questionId,
    recorded: true,
    answeredAt: new Date().toISOString(),
    isCorrect,
  };
}

// ============================================
// SUBMIT ATTEMPT
// ============================================

/**
 * Finalize and score a quiz attempt.
 */
export async function submitAttempt(attemptId: string, userId: string) {
  // Load attempt with questions
  const attempt = await prisma.quizAttempt.findUnique({
    where: { id: attemptId },
    include: {
      progression: true,
      lesson: true,
      questions: {
        orderBy: { position: 'asc' },
      },
    },
  });

  if (!attempt) {
    throw new Error('Attempt not found');
  }

  if (attempt.progression.userId !== userId) {
    throw new Error('Unauthorized');
  }

  if (attempt.status !== 'IN_PROGRESS') {
    throw new Error('Attempt already submitted');
  }

  // Load full question data with correct answers
  const questionIds = attempt.questions.map((q) => q.questionId);
  const questions = await prisma.quizQuestion.findMany({
    where: { id: { in: questionIds } },
    include: {
      choices: true,
    },
  });

  const questionMap = new Map(questions.map((q) => [q.id, q]));

  // Score each question
  let correctCount = 0;
  const questionResults = [];

  for (const aq of attempt.questions) {
    const question = questionMap.get(aq.questionId);
    if (!question) continue;

    const userAnswer = aq.userAnswerJson as string | string[] | null;
    const isCorrect = gradeAnswer(question, userAnswer);

    if (isCorrect) {
      correctCount++;
    }

    // Update question with result
    await prisma.quizAttemptQuestion.update({
      where: { id: aq.id },
      data: { isCorrect },
    });

    // Get correct answer for result
    const correctAnswer = getCorrectAnswer(question);
    const choiceMapping = aq.choiceMappingJson as ChoiceMapping | null;

    questionResults.push({
      questionId: question.id,
      position: aq.position,
      isCorrect,
      userAnswer,
      correctAnswer,
      feedback: question.feedback,
      linkedTheorySection: question.linkedTheorySection,
      choiceMapping,
    });
  }

  // Calculate score
  const totalQuestions = attempt.questions.length;
  const score = Math.round((correctCount / totalQuestions) * 100);
  const threshold = attempt.lesson?.quizThreshold ?? 70;
  const passed = score >= threshold;

  // Update attempt
  await prisma.quizAttempt.update({
    where: { id: attemptId },
    data: {
      status: 'SUBMITTED',
      submittedAt: new Date(),
      score,
      passed,
    },
  });

  // Update progression if passed
  if (passed) {
    await prisma.userProgression.update({
      where: { id: attempt.progressionId },
      data: {
        quizPassedAt: new Date(),
      },
    });
  }

  return {
    attemptId,
    score,
    passed,
    totalQuestions,
    correctCount,
    threshold,
    questions: questionResults,
  };
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function formatAttemptQuestions(
  randomized: RandomizedQuestion[],
  attemptQuestions: { id: string; questionId: string; position: number; choiceMappingJson: unknown }[]
): AttemptQuestion[] {
  return randomized.map((rq) => {
    const aq = attemptQuestions.find((q) => q.questionId === rq.question.id);
    const choiceMapping = rq.choiceMapping;

    // Format choices if MCQ
    let choices: DisplayChoice[] | undefined;
    if (choiceMapping && rq.question.choices.length > 0) {
      choices = rq.question.choices
        .map((c) => ({
          label: choiceMapping[c.id],
          text: c.text,
          optionId: c.id,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    }

    return {
      questionId: rq.question.id,
      position: rq.position,
      questionText: rq.question.questionText,
      questionType: rq.question.questionType,
      choices,
      userAnswer: null,
      isCorrect: null,
      feedback: null,
      linkedTheorySection: rq.question.linkedTheorySection,
    };
  });
}

function gradeAnswer(
  question: { questionType: string; choices: { id: string; isCorrect: boolean }[]; correctAnswer: unknown },
  userAnswer: string | string[] | null
): boolean {
  if (!userAnswer) return false;

  // For questions with choices model, use choices
  if (question.choices.length > 0) {
    const correctOptionIds = question.choices.filter((c) => c.isCorrect).map((c) => c.id);

    if (question.questionType === 'SINGLE_CHOICE') {
      return correctOptionIds.includes(userAnswer as string);
    }

    if (question.questionType === 'MULTIPLE_CHOICE') {
      const userAnswers = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
      if (userAnswers.length !== correctOptionIds.length) return false;
      return correctOptionIds.every((id) => userAnswers.includes(id));
    }
  }

  // Fallback to legacy correctAnswer field for SHORT_TEXT or old data
  const correctAnswer = question.correctAnswer;

  if (question.questionType === 'SHORT_TEXT') {
    if (typeof userAnswer !== 'string' || typeof correctAnswer !== 'string') return false;
    return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
  }

  // Legacy JSON-based answer checking
  if (question.questionType === 'SINGLE_CHOICE') {
    return userAnswer === correctAnswer;
  }

  if (question.questionType === 'MULTIPLE_CHOICE') {
    if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
    if (userAnswer.length !== correctAnswer.length) return false;
    const sortedUser = [...userAnswer].sort();
    const sortedCorrect = [...(correctAnswer as string[])].sort();
    return sortedUser.every((v, i) => v === sortedCorrect[i]);
  }

  return false;
}

function getCorrectAnswer(question: {
  questionType: string;
  choices: { id: string; isCorrect: boolean }[];
  correctAnswer: unknown;
}): string | string[] {
  // Use choices model if available
  if (question.choices.length > 0) {
    const correctIds = question.choices.filter((c) => c.isCorrect).map((c) => c.id);
    if (question.questionType === 'SINGLE_CHOICE') {
      return correctIds[0] ?? '';
    }
    return correctIds;
  }

  // Fallback to legacy correctAnswer
  const ca = question.correctAnswer;
  if (Array.isArray(ca)) return ca as string[];
  if (typeof ca === 'string') return ca;
  return '';
}

/**
 * Check if user has an in-progress attempt for a lesson.
 */
export async function getInProgressAttempt(userId: string, lessonId: string) {
  const progression = await prisma.userProgression.findFirst({
    where: {
      userId,
      module: {
        lesson: {
          id: lessonId,
        },
      },
    },
    include: {
      attempts: {
        where: {
          lessonId,
          status: 'IN_PROGRESS',
        },
        orderBy: {
          startedAt: 'desc',
        },
        take: 1,
      },
    },
  });

  return progression?.attempts[0] ?? null;
}
