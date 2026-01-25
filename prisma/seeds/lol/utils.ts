/**
 * League of Legends Training - Seed Utilities
 * Types, interfaces, and helper functions for creating LoL training content
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface QuizOption {
  id: 'a' | 'b' | 'c' | 'd';
  text: string;
}

export interface QuizQuestionData {
  text: string;
  options: [QuizOption, QuizOption, QuizOption, QuizOption]; // Exactly 4 options
  correctAnswer: string | string[]; // Single or multiple correct answers
  feedback?: string;
  linkedTheorySection?: string;
}

export interface ModuleData {
  name: string;
  slug: string;
  description: string;
  order: number;
  theoryContent: string;
  practiceInstructions: string;
  practiceType: 'IN_GAME';
  practiceTimerDuration?: number; // Default: 300 (5 minutes)
  questions: QuizQuestionData[];
  // Quiz configuration (Feature 005)
  questionsToShow: 5;
  shuffleQuestions: true;
  shuffleAnswers: true;
}

export interface DisciplineData {
  name: string;
  slug: string;
  description: string;
  order: number;
  modules: ModuleData[];
}

// ============================================================================
// VALIDATORS
// ============================================================================

/**
 * Validates that a module has the required structure
 */
export function validateModule(module: ModuleData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check theory content has at least 5 slides (## headings)
  const slideCount = (module.theoryContent.match(/^## /gm) || []).length;
  if (slideCount < 5) {
    errors.push(`Module "${module.name}" has only ${slideCount} slides (minimum 5 required)`);
  }

  // Check questions count
  if (module.questions.length !== 10) {
    errors.push(`Module "${module.name}" has ${module.questions.length} questions (exactly 10 required)`);
  }

  // Check each question has exactly 4 options
  module.questions.forEach((q, i) => {
    if (q.options.length !== 4) {
      errors.push(`Module "${module.name}" question ${i + 1} has ${q.options.length} options (exactly 4 required)`);
    }
    // Check options have correct IDs
    const expectedIds = ['a', 'b', 'c', 'd'];
    const actualIds = q.options.map(o => o.id);
    if (!expectedIds.every((id, idx) => actualIds[idx] === id)) {
      errors.push(`Module "${module.name}" question ${i + 1} options must have IDs 'a', 'b', 'c', 'd' in order`);
    }
  });

  // Check practice instructions has required sections
  const requiredSections = ['## Objectif', '## Étapes', '## Critère'];
  requiredSections.forEach(section => {
    if (!module.practiceInstructions.includes(section)) {
      errors.push(`Module "${module.name}" practice is missing section "${section}"`);
    }
  });

  return { valid: errors.length === 0, errors };
}

/**
 * Validates an entire discipline
 */
export function validateDiscipline(discipline: DisciplineData): { valid: boolean; errors: string[] } {
  const allErrors: string[] = [];

  if (discipline.modules.length === 0) {
    allErrors.push(`Discipline "${discipline.name}" has no modules`);
  }

  discipline.modules.forEach(module => {
    const { errors } = validateModule(module);
    allErrors.push(...errors);
  });

  return { valid: allErrors.length === 0, errors: allErrors };
}

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Creates a quiz question with proper structure
 */
export function createQuestion(
  text: string,
  optionA: string,
  optionB: string,
  optionC: string,
  optionD: string,
  correctAnswer: 'a' | 'b' | 'c' | 'd' | ('a' | 'b' | 'c' | 'd')[],
  feedback?: string,
  linkedTheorySection?: string
): QuizQuestionData {
  return {
    text,
    options: [
      { id: 'a', text: optionA },
      { id: 'b', text: optionB },
      { id: 'c', text: optionC },
      { id: 'd', text: optionD },
    ],
    correctAnswer,
    feedback,
    linkedTheorySection,
  };
}

/**
 * Creates a module with default quiz configuration
 */
export function createModule(
  name: string,
  slug: string,
  description: string,
  order: number,
  theoryContent: string,
  practiceInstructions: string,
  questions: QuizQuestionData[],
  practiceTimerDuration: number = 300
): ModuleData {
  return {
    name,
    slug,
    description,
    order,
    theoryContent,
    practiceInstructions,
    practiceType: 'IN_GAME',
    practiceTimerDuration,
    questions,
    questionsToShow: 5,
    shuffleQuestions: true,
    shuffleAnswers: true,
  };
}

/**
 * Creates a discipline with proper structure
 */
export function createDiscipline(
  name: string,
  slug: string,
  description: string,
  order: number,
  modules: ModuleData[]
): DisciplineData {
  return {
    name,
    slug,
    description,
    order,
    modules,
  };
}

// ============================================================================
// CONSTANTS
// ============================================================================

export const PACK_INFO = {
  name: 'League of Legends - Formation Complète',
  slug: 'lol-complete-training',
  description: 'Formation complète League of Legends : De débutant à joueur professionnel. 26 disciplines, ~298 modules couvrant tous les aspects du jeu.',
};

export const DOMAIN_SLUG = 'gaming';
