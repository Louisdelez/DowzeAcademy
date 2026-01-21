/**
 * TypeScript types derived from Prisma models
 * Re-exports Prisma types for use throughout the application
 */

export type {
  Domain,
  Pack,
  Discipline,
  Module,
  Lesson,
  QuizQuestion,
  User,
  AdminUser,
  UserProgression,
  QuizAttempt,
} from '@/generated/prisma';

export {
  ContentStatus,
  ModuleProgressStatus,
  QuestionType,
  PracticeType,
  PracticeValidationMode,
} from '@/generated/prisma';

/** Domain with included packs */
export type DomainWithPacks = import('@/generated/prisma').Domain & {
  packs: import('@/generated/prisma').Pack[];
};

/** Pack with included disciplines */
export type PackWithDisciplines = import('@/generated/prisma').Pack & {
  disciplines: import('@/generated/prisma').Discipline[];
  domain: import('@/generated/prisma').Domain;
};

/** Discipline with included modules */
export type DisciplineWithModules = import('@/generated/prisma').Discipline & {
  modules: ModuleWithLesson[];
  pack: import('@/generated/prisma').Pack;
};

/** Module with included lesson */
export type ModuleWithLesson = import('@/generated/prisma').Module & {
  lesson: LessonWithQuestions | null;
};

/** Lesson with included questions */
export type LessonWithQuestions = import('@/generated/prisma').Lesson & {
  questions: import('@/generated/prisma').QuizQuestion[];
};

/** User progression with attempts */
export type ProgressionWithAttempts = import('@/generated/prisma').UserProgression & {
  attempts: import('@/generated/prisma').QuizAttempt[];
  module: import('@/generated/prisma').Module;
};

/** Quiz option type for single/multiple choice questions */
export interface QuizOption {
  id: string;
  text: string;
}

/** Quiz answer for submission */
export interface QuizAnswer {
  questionId: string;
  answer: string | string[];
}

/** Progress stats for a discipline or pack */
export interface ProgressStats {
  total: number;
  completed: number;
  inProgress: number;
  available: number;
  locked: number;
  percentage: number;
}
