# Component Contracts: Slides Pedagogy V2

**Feature**: 004-slides-pedagogy-v2
**Date**: 2026-01-22

## Overview

Définition des props et interfaces pour les composants de la feature slides.

---

## Core Components

### SlideContainer

Container principal qui orchestre la navigation entre slides.

```typescript
interface SlideContainerProps {
  moduleId: string;
  lesson: Lesson;
  initialProgress?: SlideState;
  onComplete: () => void;
}

// Usage
<SlideContainer
  moduleId="abc-123"
  lesson={lesson}
  initialProgress={savedProgress}
  onComplete={handleModuleComplete}
/>
```

**Responsibilities**:
- Parse theory/practice content into slides
- Manage navigation state via `useSlideNavigation`
- Handle keyboard shortcuts
- Sync progress to server
- Render appropriate slide component based on phase

---

### SlideProgress

Indicateur de progression avec phases et barre de progression.

```typescript
interface SlideProgressProps {
  currentPhase: 'theory' | 'quiz' | 'practice' | 'complete';
  currentIndex: number;
  totalSlides: number;
  phases: {
    theory: { total: number; completed: boolean };
    quiz: { total: number; completed: boolean };
    practice: { total: number; completed: boolean };
  };
}

// Usage
<SlideProgress
  currentPhase="quiz"
  currentIndex={3}
  totalSlides={5}
  phases={{
    theory: { total: 7, completed: true },
    quiz: { total: 5, completed: false },
    practice: { total: 4, completed: false }
  }}
/>
```

**Visual Output**:
```
○ Théorie ── ● Quiz ── ○ Pratique
████████░░░░░░░░░░  3/5
```

---

### SlideNavigation

Footer de navigation avec boutons Précédent/Suivant.

```typescript
interface SlideNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  nextLabel?: string;  // Default: "Suivant"
  previousLabel?: string;  // Default: "Précédent"
  isLoading?: boolean;
}

// Usage
<SlideNavigation
  onPrevious={handlePrev}
  onNext={handleNext}
  canGoPrevious={currentIndex > 0}
  canGoNext={!isLastSlide || hasAnswered}
  nextLabel={isLastSlide ? "Terminer" : "Suivant"}
/>
```

---

### TheorySlide

Affiche une slide de théorie.

```typescript
interface TheorySlideProps {
  slide: TheorySlide;
  direction: 'forward' | 'backward';
}

interface TheorySlide {
  id: string;
  title: string;
  content: string;  // Markdown
  slideNumber: number;
  type: 'concept' | 'why' | 'example' | 'mistakes' | 'recap';
}

// Usage
<TheorySlide
  slide={{
    id: "slide-3",
    title: "Pourquoi c'est important",
    content: "Le contrôle de wave permet de...",
    slideNumber: 3,
    type: "why"
  }}
  direction="forward"
/>
```

---

### QuizSlide

Affiche une question de quiz avec options et feedback.

```typescript
interface QuizSlideProps {
  question: QuizQuestion;
  slideNumber: number;
  totalQuestions: number;
  selectedAnswer: string | string[] | null;
  showFeedback: boolean;
  isCorrect?: boolean;
  onSelectAnswer: (answer: string | string[]) => void;
  onSubmit: () => void;
  onReviewTheory?: (slideIndex: number) => void;
  linkedTheorySlide?: TheorySlide;
  direction: 'forward' | 'backward';
}

// Usage
<QuizSlide
  question={questions[currentIndex]}
  slideNumber={2}
  totalQuestions={5}
  selectedAnswer={answers[question.id]}
  showFeedback={hasSubmitted}
  isCorrect={checkAnswer(question, answers[question.id])}
  onSelectAnswer={(ans) => setAnswer(question.id, ans)}
  onSubmit={handleSubmit}
  onReviewTheory={handleReviewTheory}
  linkedTheorySlide={getLinkedSlide(question)}
  direction="forward"
/>
```

---

### FeedbackPanel

Panneau de feedback après réponse quiz.

```typescript
interface FeedbackPanelProps {
  isCorrect: boolean;
  explanation: string;
  linkedTheorySlide?: TheorySlide;
  onContinue: () => void;
  onReviewTheory?: () => void;
}

// Usage
<FeedbackPanel
  isCorrect={false}
  explanation="La bonne réponse est B car..."
  linkedTheorySlide={linkedSlide}
  onContinue={handleNext}
  onReviewTheory={() => goToTheorySlide(linkedSlide.slideNumber)}
/>
```

**Visual States**:
- Correct: Green border, checkmark icon, positive message
- Incorrect: Orange border, info icon, explanation + "Revoir la théorie" button

---

### PracticeSlide

Affiche une étape de pratique.

```typescript
interface PracticeSlideProps {
  slide: PracticeSlide;
  onMarkComplete?: () => void;
  checklist?: {
    items: string[];
    checked: boolean[];
    onToggle: (index: number) => void;
  };
  direction: 'forward' | 'backward';
}

interface PracticeSlide {
  id: string;
  title: string;
  content: string;
  slideNumber: number;
  type: 'brief' | 'setup' | 'step' | 'evaluation' | 'next';
  checklist?: string[];
}

// Usage
<PracticeSlide
  slide={{
    id: "practice-4",
    title: "Auto-évaluation",
    content: "Vérifiez que vous avez bien...",
    slideNumber: 4,
    type: "evaluation",
    checklist: ["J'ai fait X", "J'ai compris Y", "J'ai appliqué Z"]
  }}
  checklist={{
    items: slide.checklist,
    checked: [true, true, false],
    onToggle: handleChecklistToggle
  }}
  direction="forward"
/>
```

---

### CompletionSlide

Écran de fin avec suggestions de prochaine action.

```typescript
interface CompletionSlideProps {
  moduleName: string;
  score?: number;  // Quiz score percentage
  nextModuleId?: string;
  nextModuleName?: string;
  onGoToNextModule?: () => void;
  onBackToDiscipline: () => void;
}

// Usage
<CompletionSlide
  moduleName="Contrôle de wave"
  score={85}
  nextModuleId="def-456"
  nextModuleName="Trading en lane"
  onGoToNextModule={handleNextModule}
  onBackToDiscipline={handleBackToDiscipline}
/>
```

---

### QuizResultSlide

Résultat final du quiz avec suggestions de révision.

```typescript
interface QuizResultSlideProps {
  score: number;
  threshold: number;
  passed: boolean;
  wrongQuestions: QuizQuestion[];
  suggestedSlides: TheorySlide[];
  onRetry: () => void;
  onContinue: () => void;
  onReviewSlide: (slideIndex: number) => void;
}

// Usage
<QuizResultSlide
  score={60}
  threshold={70}
  passed={false}
  wrongQuestions={[q2, q4]}
  suggestedSlides={[slide3, slide5]}
  onRetry={handleRetryQuiz}
  onContinue={handleContinueAnyway}  // Disabled if not passed
  onReviewSlide={handleGoToTheorySlide}
/>
```

---

## Hooks

### useSlideNavigation

```typescript
interface UseSlideNavigationOptions {
  moduleId: string;
  theorySlides: TheorySlide[];
  quizQuestions: QuizQuestion[];
  practiceSlides: PracticeSlide[];
  initialState?: SlideState;
  quizThreshold: number;
}

interface UseSlideNavigationReturn {
  state: SlideState;
  currentSlide: TheorySlide | QuizQuestion | PracticeSlide;
  phase: 'theory' | 'quiz' | 'practice' | 'complete';

  // Navigation
  goNext: () => void;
  goPrevious: () => void;
  goToSlide: (phase: string, index: number) => void;

  // Quiz
  setAnswer: (questionId: string, answer: string | string[]) => void;
  submitAnswer: () => void;
  retryQuiz: () => void;

  // Status
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLoading: boolean;

  // Results
  quizResult?: { score: number; passed: boolean };
}

// Usage
const {
  state,
  currentSlide,
  phase,
  goNext,
  goPrevious,
  setAnswer,
  submitAnswer,
  canGoNext,
  quizResult
} = useSlideNavigation({
  moduleId: "abc-123",
  theorySlides,
  quizQuestions,
  practiceSlides,
  initialState: savedProgress,
  quizThreshold: 70
});
```

---

### useKeyboardNavigation

```typescript
interface UseKeyboardNavigationOptions {
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  enabled?: boolean;
}

// Usage
useKeyboardNavigation({
  onNext: handleNext,      // ArrowRight
  onPrevious: handlePrev,  // ArrowLeft
  onSubmit: handleSubmit,  // Enter
  enabled: !isModalOpen
});
```

**Key Bindings**:
| Key | Action |
|-----|--------|
| ArrowRight | Next slide |
| ArrowLeft | Previous slide |
| Enter | Submit / Continue |
| Escape | Close feedback panel |

---

## Animation Contracts

### Slide Transitions

```css
/* Forward transition */
.slide-enter-forward {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-active-forward {
  transform: translateX(0);
  opacity: 1;
  transition: transform 250ms ease-out, opacity 200ms ease-out;
}

/* Backward transition */
.slide-enter-backward {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-active-backward {
  transform: translateX(0);
  opacity: 1;
  transition: transform 250ms ease-out, opacity 200ms ease-out;
}
```

### Feedback Panel

```css
.feedback-enter {
  opacity: 0;
  transform: translateY(20px);
}
.feedback-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 200ms ease-out;
}
```

---

## Accessibility Contracts

| Component | ARIA | Keyboard |
|-----------|------|----------|
| SlideProgress | `role="progressbar"` `aria-valuenow` `aria-valuemax` | - |
| SlideNavigation | Button with `aria-label` | Tab, Enter, Space |
| QuizSlide options | `role="radiogroup"` or `role="group"` | Arrow keys, Space |
| FeedbackPanel | `role="alert"` `aria-live="polite"` | Escape to dismiss |
| TheorySlide | `role="article"` `aria-label="Slide N sur M"` | - |
