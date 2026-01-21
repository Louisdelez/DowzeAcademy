/**
 * Enums for the Hub Éducatif Modulaire
 * Mirrors Prisma schema enums for use in TypeScript code
 */

/** Publication status for content entities */
export enum ContentStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
}

/** Module progress status for learner progression */
export enum ModuleProgressStatus {
  LOCKED = 'LOCKED',
  AVAILABLE = 'AVAILABLE',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

/** Quiz question types */
export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  SHORT_TEXT = 'SHORT_TEXT',
}

/** Practice exercise types */
export enum PracticeType {
  IN_GAME = 'IN_GAME',
  EXERCICES = 'EXERCICES',
  PROJET = 'PROJET',
  AUTO_EVALUATION = 'AUTO_EVALUATION',
}

/** Practice validation modes */
export enum PracticeValidationMode {
  DECLARATIVE = 'DECLARATIVE',
  AUTO = 'AUTO',
}
