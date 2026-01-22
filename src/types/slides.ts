// Slide types for Feature 004: Slides Pedagogy V2

// ============================================
// SLIDE STATE (stored in UserProgression.slideState)
// ============================================

export interface SlideState {
  theoryIndex: number;
  quizIndex: number;
  practiceIndex: number;
  quizAnswers: Record<string, string | string[]>;
  lastPhase: 'theory' | 'quiz' | 'practice' | 'complete';
  updatedAt: string; // ISO timestamp
}

export type SlidePhase = SlideState['lastPhase'];

// ============================================
// THEORY SLIDES (parsed from theoryContent)
// ============================================

export type TheorySlideType =
  | 'concept'    // Concept clé
  | 'why'        // Pourquoi important
  | 'example'    // Exemple
  | 'mistakes'   // Erreurs fréquentes
  | 'recap';     // Mini-récap

export interface TheorySlide {
  id: string;           // Generated: `theory-slide-${index}`
  title: string;        // Extracted from ## heading
  content: string;      // Markdown content under heading
  slideNumber: number;  // 1-based index
  type: TheorySlideType;
}

// ============================================
// QUIZ SLIDES (derived from QuizQuestion)
// ============================================

export interface QuizSlide {
  id: string;
  questionId: string;
  questionText: string;
  questionType: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'SHORT_TEXT';
  options: string[] | null;
  correctAnswer: string | string[];
  feedback: string | null;
  linkedTheorySection: string | null;
  slideNumber: number;
  totalQuestions: number;
}

// ============================================
// PRACTICE SLIDES (parsed from practiceInstructions)
// ============================================

export type PracticeSlideType =
  | 'brief'       // Objectif
  | 'setup'       // Préparation
  | 'step'        // Étape d'action
  | 'evaluation'  // Auto-évaluation
  | 'next';       // Next action

export interface PracticeSlide {
  id: string;           // Generated: `practice-slide-${index}`
  title: string;
  content: string;
  slideNumber: number;
  type: PracticeSlideType;
  checklist?: string[];
}

// ============================================
// NAVIGATION STATE
// ============================================

export type SlideDirection = 'forward' | 'backward';

export interface SlideNavigationState {
  phase: SlidePhase;
  theoryIndex: number;
  quizIndex: number;
  practiceIndex: number;
  direction: SlideDirection;
  quizAnswers: Record<string, string | string[]>;
  showFeedback: boolean;
  quizResult: { score: number; passed: boolean } | null;
  returnToQuizIndex: number | null; // For theory review from quiz
}

// ============================================
// COMPONENT PROPS (partial definitions)
// ============================================

export interface SlideProgressPhases {
  theory: { total: number; completed: boolean };
  quiz: { total: number; completed: boolean };
  practice: { total: number; completed: boolean };
}

export interface QuizFeedbackData {
  isCorrect: boolean;
  explanation: string | null;
  linkedTheorySlide: TheorySlide | null;
}
