import { prisma } from '@/lib/db/client';
import { getModuleLessonWithAnswers } from './content-service';
import type { QuizAnswer } from '@/types/models';

const DEFAULT_THRESHOLD = 70;

interface QuizGradingResult {
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctCount: number;
  feedback: { questionId: string; isCorrect: boolean; feedback?: string }[];
}

interface QuestionWithChoices {
  id: string;
  questionType: string;
  correctAnswer: unknown;
  feedback: string | null;
  choices?: { id: string; isCorrect: boolean }[];
}

/**
 * Grades a quiz submission and returns the result
 * Updated for Feature 005: Supports both legacy JSON options and new QuizOption model
 */
export async function gradeQuiz(
  moduleId: string,
  answers: QuizAnswer[]
): Promise<QuizGradingResult | null> {
  const lesson = await getModuleLessonWithAnswers(moduleId);

  if (!lesson) {
    return null;
  }

  const threshold = lesson.quizThreshold || DEFAULT_THRESHOLD;
  const questions = lesson.questions;
  const feedback: QuizGradingResult['feedback'] = [];

  // Load choices for all questions (Feature 005)
  const questionIds = questions.map((q) => q.id);
  const choicesData = await prisma.quizOption.findMany({
    where: { questionId: { in: questionIds } },
  });

  // Group choices by question
  const choicesByQuestion = new Map<string, { id: string; isCorrect: boolean }[]>();
  for (const choice of choicesData) {
    const existing = choicesByQuestion.get(choice.questionId) || [];
    existing.push({ id: choice.id, isCorrect: choice.isCorrect });
    choicesByQuestion.set(choice.questionId, existing);
  }

  let correctCount = 0;

  for (const question of questions) {
    const userAnswer = answers.find((a) => a.questionId === question.id);
    const choices = choicesByQuestion.get(question.id);

    // Use new optionId-based grading if choices exist, otherwise fall back to legacy
    const isCorrect = gradeQuestion(
      {
        id: question.id,
        questionType: question.questionType,
        correctAnswer: question.correctAnswer,
        feedback: question.feedback,
        choices,
      },
      userAnswer?.answer
    );

    if (isCorrect) {
      correctCount++;
    }

    feedback.push({
      questionId: question.id,
      isCorrect,
      feedback: question.feedback || undefined,
    });
  }

  const score = Math.round((correctCount / questions.length) * 100);
  const passed = score >= threshold;

  return {
    score,
    passed,
    totalQuestions: questions.length,
    correctCount,
    feedback,
  };
}

/**
 * Grade a single question using optionId-based scoring (Feature 005)
 * Falls back to legacy JSON-based scoring if no choices exist
 */
export function gradeQuestion(
  question: QuestionWithChoices,
  userAnswer: string | string[] | undefined
): boolean {
  if (!userAnswer) return false;

  // Use QuizOption model if choices exist (Feature 005)
  if (question.choices && question.choices.length > 0) {
    return gradeWithOptionIds(question.choices, userAnswer, question.questionType);
  }

  // Fall back to legacy JSON-based grading
  return checkAnswer(question.correctAnswer, userAnswer, question.questionType);
}

/**
 * Grade using QuizOption IDs (Feature 005)
 * This works regardless of display order (A/B/C/D) because we use stable option IDs
 */
function gradeWithOptionIds(
  choices: { id: string; isCorrect: boolean }[],
  userAnswer: string | string[],
  questionType: string
): boolean {
  const correctOptionIds = choices.filter((c) => c.isCorrect).map((c) => c.id);

  switch (questionType) {
    case 'SINGLE_CHOICE': {
      // User should have selected exactly the correct option
      const answerId = typeof userAnswer === 'string' ? userAnswer : userAnswer[0];
      return correctOptionIds.includes(answerId);
    }

    case 'MULTIPLE_CHOICE': {
      // User should have selected exactly all correct options
      const userAnswers = Array.isArray(userAnswer) ? userAnswer : [userAnswer];

      if (userAnswers.length !== correctOptionIds.length) {
        return false;
      }

      // Check all user answers are correct
      return userAnswers.every((id) => correctOptionIds.includes(id));
    }

    default:
      return false;
  }
}

/**
 * Checks if a user answer matches the correct answer
 */
function checkAnswer(
  correctAnswer: unknown,
  userAnswer: string | string[] | undefined,
  questionType: string
): boolean {
  if (!userAnswer) return false;

  switch (questionType) {
    case 'SINGLE_CHOICE': {
      // correctAnswer is a single string ID
      return userAnswer === correctAnswer;
    }

    case 'MULTIPLE_CHOICE': {
      // correctAnswer is an array of string IDs
      if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) {
        return false;
      }
      const sortedCorrect = [...correctAnswer].sort();
      const sortedUser = [...userAnswer].sort();
      return (
        sortedCorrect.length === sortedUser.length &&
        sortedCorrect.every((val, index) => val === sortedUser[index])
      );
    }

    case 'SHORT_TEXT': {
      // correctAnswer is text - do case-insensitive comparison
      if (typeof userAnswer !== 'string' || typeof correctAnswer !== 'string') {
        return false;
      }
      return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    }

    default:
      return false;
  }
}

/**
 * Records a quiz attempt in the database
 */
export async function recordQuizAttempt(
  progressionId: string,
  answers: QuizAnswer[],
  score: number,
  passed: boolean
) {
  return prisma.quizAttempt.create({
    data: {
      progressionId,
      answers: JSON.parse(JSON.stringify(answers)),
      score,
      passed,
    },
  });
}
