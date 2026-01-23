/**
 * Quiz Randomization Types (Feature 005)
 *
 * Types for quiz randomization, attempt tracking, and scoring.
 */

import type { QuestionType } from '@/generated/prisma';

// ============================================
// CONFIGURATION TYPES
// ============================================

export interface QuizRandomizationConfig {
  questionsToShow: number | null;
  shuffleQuestions: boolean;
  shuffleAnswers: boolean;
}

// ============================================
// OPTION & QUESTION TYPES
// ============================================

export interface QuizOptionData {
  id: string;
  text: string;
  isCorrect: boolean;
  order: number;
}

export interface QuizQuestionData {
  id: string;
  questionText: string;
  questionType: QuestionType;
  feedback: string | null;
  linkedTheorySection: string | null;
  order: number;
  choices: QuizOptionData[];
}

// ============================================
// CHOICE MAPPING TYPES
// ============================================

/**
 * Maps option UUIDs to display labels (A, B, C, D, etc.)
 * Example: { "uuid-1": "A", "uuid-2": "B", "uuid-3": "C", "uuid-4": "D" }
 */
export type ChoiceMapping = Record<string, string>;

/**
 * Display choice for frontend rendering
 */
export interface DisplayChoice {
  label: string; // "A", "B", "C", "D", etc.
  text: string;
  optionId: string; // Hidden from user, used for validation
}

// ============================================
// ATTEMPT TYPES
// ============================================

export interface AttemptQuestion {
  questionId: string;
  position: number;
  questionText: string;
  questionType: QuestionType;
  choices?: DisplayChoice[];
  userAnswer?: string | string[] | null;
  isCorrect?: boolean | null;
  feedback?: string | null;
  linkedTheorySection?: string | null;
}

export interface AttemptConfig {
  questionsToShow: number | null;
  shuffleQuestions: boolean;
  shuffleAnswers: boolean;
  threshold: number;
}

export interface QuizAttemptResponse {
  id: string;
  lessonId: string;
  status: 'IN_PROGRESS' | 'SUBMITTED' | 'ABANDONED';
  startedAt: string;
  submittedAt?: string | null;
  score?: number | null;
  passed?: boolean | null;
  questions: AttemptQuestion[];
  config: AttemptConfig;
}

// ============================================
// ANSWER TYPES
// ============================================

export interface AnswerRequest {
  questionId: string;
  selectedLabel?: string; // For SINGLE_CHOICE
  selectedLabels?: string[]; // For MULTIPLE_CHOICE
  textAnswer?: string; // For SHORT_TEXT
}

export interface AnswerResponse {
  questionId: string;
  recorded: boolean;
  answeredAt: string;
}

// ============================================
// RESULT TYPES
// ============================================

export interface QuestionResult {
  questionId: string;
  position: number;
  isCorrect: boolean;
  userAnswer: string | string[] | null;
  correctAnswer: string | string[];
  feedback: string | null;
  linkedTheorySection: string | null;
}

export interface QuizResultResponse {
  attemptId: string;
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctCount: number;
  threshold: number;
  questions: QuestionResult[];
}

// ============================================
// SERVICE TYPES
// ============================================

export interface RandomizedQuestion {
  question: QuizQuestionData;
  position: number;
  choiceMapping: ChoiceMapping | null;
}

export interface CreateAttemptResult {
  attemptId: string;
  questions: RandomizedQuestion[];
  config: AttemptConfig;
}
