// Slide components barrel export

// Phase 3: Theory Slides (US1)
export { TheorySlide } from './TheorySlide';
export { SlideProgress } from './SlideProgress';
export { SlideNavigation } from './SlideNavigation';
export { SlideContainer } from './SlideContainer';

// Phase 4: Quiz Slides (US2)
export { QuizSlide } from './QuizSlide';
export { FeedbackPanel } from './FeedbackPanel';
export { QuizResultSlide } from './QuizResultSlide';

// Phase 5: Practice Slides (US3)
export { PracticeSlide } from './PracticeSlide';
export { CompletionSlide } from './CompletionSlide';

// Re-export types for convenience
export type {
  SlideState,
  SlidePhase,
  SlideDirection,
  SlideNavigationState,
  TheorySlide as TheorySlideType,
  TheorySlideType as TheorySlideCategory,
  QuizSlide as QuizSlideType,
  PracticeSlide as PracticeSlideType,
  PracticeSlideType as PracticeSlideCategory,
} from '@/types/slides';
