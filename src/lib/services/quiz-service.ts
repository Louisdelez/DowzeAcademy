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

/**
 * Grades a quiz submission and returns the result
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

  let correctCount = 0;

  for (const question of questions) {
    const userAnswer = answers.find((a) => a.questionId === question.id);
    const isCorrect = checkAnswer(question.correctAnswer, userAnswer?.answer, question.questionType);

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
