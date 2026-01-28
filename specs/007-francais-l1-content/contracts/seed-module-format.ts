/**
 * Contract: Format des modules pour le seed Français L1 9CO
 * Feature: 007-francais-l1-content
 *
 * Ce fichier définit les interfaces TypeScript pour la création
 * du contenu pédagogique via le script de seed.
 */

import { QuestionType, PracticeType, ContentStatus, LessonMode } from '@prisma/client';

// ============================================
// INTERFACES PRINCIPALES
// ============================================

/**
 * Option de réponse pour une question de quiz
 */
export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

/**
 * Question de quiz avec ses options et feedback
 */
export interface QuizQuestion {
  text: string;
  options: [QuizOption, QuizOption, QuizOption, QuizOption]; // Exactement 4 options
  feedback: string;
  linkedTheorySection: string; // Titre de la slide liée
}

/**
 * Contenu d'un module (point de chapitre)
 */
export interface ModuleContent {
  /** Nom du module (point de chapitre) */
  name: string;

  /** Description courte du module */
  description?: string;

  /** Contenu théorique en Markdown (15-25 slides délimitées par ##) */
  theory: string;

  /** 25 questions de quiz */
  questions: QuizQuestion[];

  /** Instructions pour l'exercice pratique */
  practiceInstructions: string;

  /** Durée de l'exercice pratique en secondes (600-1200) */
  practiceTimerDuration: number;
}

/**
 * Chapitre (discipline) avec ses modules
 */
export interface ChapterContent {
  /** Nom du chapitre */
  name: string;

  /** Description du chapitre */
  description: string;

  /** Modules du chapitre (points) */
  modules: ModuleContent[];
}

// ============================================
// CONFIGURATION PAR DÉFAUT
// ============================================

/**
 * Configuration par défaut pour tous les modules
 */
export const DEFAULT_MODULE_CONFIG = {
  lessonMode: LessonMode.SLIDES,
  quizThreshold: 70,
  shuffleQuestions: true,
  shuffleAnswers: true,
  questionsToShow: 15,
  practiceType: PracticeType.TIMED,
  status: ContentStatus.PUBLISHED,
} as const;

// ============================================
// VALIDATION HELPERS
// ============================================

/**
 * Compte le nombre de slides dans le contenu théorique
 */
export function countSlides(theory: string): number {
  const slideMatches = theory.match(/^## /gm);
  return slideMatches ? slideMatches.length : 0;
}

/**
 * Valide un module selon les critères de la spec
 */
export function validateModule(module: ModuleContent): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Validation du nombre de slides (15-25)
  const slideCount = countSlides(module.theory);
  if (slideCount < 15) {
    errors.push(`Slides insuffisantes: ${slideCount}/15 minimum`);
  }
  if (slideCount > 25) {
    errors.push(`Trop de slides: ${slideCount}/25 maximum`);
  }

  // Validation du nombre de questions (25)
  if (module.questions.length !== 25) {
    errors.push(`Questions incorrectes: ${module.questions.length}/25 attendues`);
  }

  // Validation des options par question (4)
  module.questions.forEach((q, i) => {
    if (q.options.length !== 4) {
      errors.push(`Question ${i + 1}: ${q.options.length}/4 options`);
    }
    const correctCount = q.options.filter((o) => o.isCorrect).length;
    if (correctCount === 0) {
      errors.push(`Question ${i + 1}: aucune réponse correcte`);
    }
    if (!q.feedback) {
      errors.push(`Question ${i + 1}: feedback manquant`);
    }
  });

  // Validation de la durée de pratique (600-1200 secondes)
  if (module.practiceTimerDuration < 600 || module.practiceTimerDuration > 1200) {
    errors.push(
      `Durée pratique invalide: ${module.practiceTimerDuration}s (600-1200 attendu)`
    );
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Valide un chapitre complet
 */
export function validateChapter(chapter: ChapterContent): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!chapter.name) {
    errors.push('Nom du chapitre manquant');
  }

  if (chapter.modules.length === 0) {
    errors.push('Aucun module dans le chapitre');
  }

  chapter.modules.forEach((module, i) => {
    const result = validateModule(module);
    if (!result.valid) {
      errors.push(`Module ${i + 1} (${module.name}):`);
      result.errors.forEach((e) => errors.push(`  - ${e}`));
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

// ============================================
// EXEMPLE DE STRUCTURE
// ============================================

/**
 * Exemple de structure d'un module complet
 */
export const EXAMPLE_MODULE: ModuleContent = {
  name: 'Le rôle du français au Cycle d\'orientation',
  description: 'Introduction au français comme langue d\'enseignement au CO',
  theory: `## Bienvenue au Cycle d'Orientation

Le Cycle d'Orientation marque une étape importante dans ton parcours scolaire.

## Le français : langue d'enseignement

Le français est la **langue d'enseignement**. Toutes les matières sont enseignées en français.

## Pourquoi le français est important

Le français te permet de:
- Comprendre les consignes
- Participer aux discussions
- Rédiger tes devoirs

## Les compétences fondamentales

En français, tu développeras quatre compétences:
1. **La lecture**
2. **L'écriture**
3. **L'oral**
4. **La réflexion sur la langue**

## Synthèse

Le français est au cœur de ta réussite scolaire au CO.
`,
  questions: [
    {
      text: 'Quelle est la langue d\'enseignement au Cycle d\'Orientation?',
      options: [
        { text: 'Le français', isCorrect: true },
        { text: 'L\'anglais', isCorrect: false },
        { text: 'L\'allemand', isCorrect: false },
        { text: 'L\'italien', isCorrect: false },
      ],
      feedback: 'Le français est la langue d\'enseignement principale au CO en Suisse romande.',
      linkedTheorySection: 'Le français : langue d\'enseignement',
    },
    // ... 24 autres questions
  ] as QuizQuestion[],
  practiceInstructions: `## Exercice pratique: Réflexion personnelle

Prends quelques minutes pour réfléchir à tes objectifs en français cette année.

**Consignes:**
1. Liste 3 domaines où tu souhaites progresser
2. Pour chaque domaine, écris un objectif concret
3. Identifie une action que tu peux faire dès cette semaine

**Temps alloué:** 10 minutes`,
  practiceTimerDuration: 600,
};
