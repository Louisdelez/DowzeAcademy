'use client';

import { useReducer, useCallback, useMemo, useEffect, useRef } from 'react';
import type {
  SlideState,
  SlidePhase,
  SlideDirection,
  SlideNavigationState,
  TheorySlide,
  QuizSlide,
  PracticeSlide,
} from '@/types/slides';

// ============================================
// TYPES
// ============================================

interface UseSlideNavigationOptions {
  moduleId: string;
  theorySlides: TheorySlide[];
  quizQuestions: QuizSlide[];
  practiceSlides: PracticeSlide[];
  initialState?: SlideState | null;
  quizThreshold: number;
}

interface UseSlideNavigationReturn {
  state: SlideNavigationState;
  currentSlide: TheorySlide | QuizSlide | PracticeSlide | null;
  phase: SlidePhase;

  // Navigation
  goNext: () => void;
  goPrevious: () => void;
  goToSlide: (phase: SlidePhase, index: number) => void;
  goToTheorySlide: (slideIndex: number) => void;

  // Quiz
  setAnswer: (questionId: string, answer: string | string[]) => void;
  submitAnswer: () => void;
  retryQuiz: () => void;

  // Status
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLoading: boolean;

  // Progress info
  totalTheorySlides: number;
  totalQuizQuestions: number;
  totalPracticeSlides: number;

  // Results
  quizResult: { score: number; passed: boolean } | null;
  wrongQuestions: QuizSlide[];

  // For persistence
  getSlideState: () => SlideState;
}

// ============================================
// ACTION TYPES
// ============================================

type SlideAction =
  | { type: 'GO_NEXT' }
  | { type: 'GO_PREVIOUS' }
  | { type: 'GO_TO_SLIDE'; payload: { phase: SlidePhase; index: number } }
  | { type: 'GO_TO_THEORY_FOR_REVIEW'; payload: { slideIndex: number } }
  | { type: 'RETURN_TO_QUIZ' }
  | { type: 'SET_ANSWER'; payload: { questionId: string; answer: string | string[] } }
  | { type: 'SUBMIT_ANSWER' }
  | { type: 'HIDE_FEEDBACK' }
  | { type: 'COMPLETE_QUIZ'; payload: { score: number; passed: boolean } }
  | { type: 'RETRY_QUIZ' }
  | { type: 'SET_LOADING'; payload: boolean };

interface ReducerContext {
  theoryCount: number;
  quizCount: number;
  practiceCount: number;
  quizThreshold: number;
  quizQuestions: QuizSlide[];
}

// ============================================
// INITIAL STATE
// ============================================

function createInitialState(
  initialSlideState: SlideState | null | undefined
): SlideNavigationState {
  if (initialSlideState) {
    return {
      phase: initialSlideState.lastPhase,
      theoryIndex: initialSlideState.theoryIndex,
      quizIndex: initialSlideState.quizIndex,
      practiceIndex: initialSlideState.practiceIndex,
      direction: 'forward',
      quizAnswers: initialSlideState.quizAnswers,
      showFeedback: false,
      quizResult: null,
      returnToQuizIndex: null,
    };
  }

  return {
    phase: 'theory',
    theoryIndex: 0,
    quizIndex: 0,
    practiceIndex: 0,
    direction: 'forward',
    quizAnswers: {},
    showFeedback: false,
    quizResult: null,
    returnToQuizIndex: null,
  };
}

// ============================================
// REDUCER
// ============================================

function createReducer(context: ReducerContext) {
  return function slideReducer(
    state: SlideNavigationState,
    action: SlideAction
  ): SlideNavigationState {
    switch (action.type) {
      case 'GO_NEXT': {
        // If showing feedback, hide it and move to next
        if (state.showFeedback) {
          return { ...state, showFeedback: false };
        }

        switch (state.phase) {
          case 'theory': {
            if (state.theoryIndex < context.theoryCount - 1) {
              return {
                ...state,
                theoryIndex: state.theoryIndex + 1,
                direction: 'forward',
              };
            }
            // Move to next phase - skip quiz if no questions
            if (context.quizCount === 0) {
              // Skip quiz, go to practice or complete
              if (context.practiceCount === 0) {
                return {
                  ...state,
                  phase: 'complete',
                  direction: 'forward',
                };
              }
              return {
                ...state,
                phase: 'practice',
                practiceIndex: 0,
                direction: 'forward',
              };
            }
            // Move to quiz phase
            return {
              ...state,
              phase: 'quiz',
              quizIndex: 0,
              direction: 'forward',
            };
          }
          case 'quiz': {
            // If quiz result is shown and passed, move to practice or complete
            if (state.quizResult?.passed) {
              if (context.practiceCount === 0) {
                return {
                  ...state,
                  phase: 'complete',
                  direction: 'forward',
                };
              }
              return {
                ...state,
                phase: 'practice',
                practiceIndex: 0,
                direction: 'forward',
              };
            }
            // Can't advance without submitting answer
            return state;
          }
          case 'practice': {
            if (state.practiceIndex < context.practiceCount - 1) {
              return {
                ...state,
                practiceIndex: state.practiceIndex + 1,
                direction: 'forward',
              };
            }
            // Complete!
            return {
              ...state,
              phase: 'complete',
              direction: 'forward',
            };
          }
          default:
            return state;
        }
      }

      case 'GO_PREVIOUS': {
        // If showing feedback, just hide it
        if (state.showFeedback) {
          return { ...state, showFeedback: false };
        }

        switch (state.phase) {
          case 'theory': {
            if (state.theoryIndex > 0) {
              return {
                ...state,
                theoryIndex: state.theoryIndex - 1,
                direction: 'backward',
              };
            }
            return state;
          }
          case 'quiz': {
            if (state.quizIndex > 0) {
              return {
                ...state,
                quizIndex: state.quizIndex - 1,
                direction: 'backward',
                showFeedback: false,
              };
            }
            // Go back to last theory slide
            return {
              ...state,
              phase: 'theory',
              theoryIndex: context.theoryCount - 1,
              direction: 'backward',
            };
          }
          case 'practice': {
            if (state.practiceIndex > 0) {
              return {
                ...state,
                practiceIndex: state.practiceIndex - 1,
                direction: 'backward',
              };
            }
            return state;
          }
          default:
            return state;
        }
      }

      case 'GO_TO_SLIDE': {
        const { phase, index } = action.payload;
        return {
          ...state,
          phase,
          theoryIndex: phase === 'theory' ? index : state.theoryIndex,
          quizIndex: phase === 'quiz' ? index : state.quizIndex,
          practiceIndex: phase === 'practice' ? index : state.practiceIndex,
          direction: 'forward',
          showFeedback: false,
        };
      }

      case 'GO_TO_THEORY_FOR_REVIEW': {
        return {
          ...state,
          phase: 'theory',
          theoryIndex: action.payload.slideIndex,
          returnToQuizIndex: state.quizIndex,
          direction: 'backward',
          showFeedback: false,
        };
      }

      case 'RETURN_TO_QUIZ': {
        if (state.returnToQuizIndex === null) return state;
        return {
          ...state,
          phase: 'quiz',
          quizIndex: state.returnToQuizIndex,
          returnToQuizIndex: null,
          direction: 'forward',
          showFeedback: false,
        };
      }

      case 'SET_ANSWER': {
        return {
          ...state,
          quizAnswers: {
            ...state.quizAnswers,
            [action.payload.questionId]: action.payload.answer,
          },
        };
      }

      case 'SUBMIT_ANSWER': {
        return {
          ...state,
          showFeedback: true,
        };
      }

      case 'HIDE_FEEDBACK': {
        const currentQuestion = context.quizQuestions[state.quizIndex];
        const isCorrect = checkAnswer(
          currentQuestion,
          state.quizAnswers[currentQuestion?.questionId]
        );

        // Move to next question or show results
        if (state.quizIndex < context.quizCount - 1) {
          return {
            ...state,
            quizIndex: state.quizIndex + 1,
            direction: 'forward',
            showFeedback: false,
          };
        }

        // Calculate final score
        const score = calculateScore(context.quizQuestions, state.quizAnswers);
        const passed = score >= context.quizThreshold;

        return {
          ...state,
          showFeedback: false,
          quizResult: { score, passed },
        };
      }

      case 'COMPLETE_QUIZ': {
        if (action.payload.passed) {
          // Skip practice if no practice slides
          if (context.practiceCount === 0) {
            return {
              ...state,
              phase: 'complete',
              direction: 'forward',
              quizResult: action.payload,
            };
          }
          return {
            ...state,
            phase: 'practice',
            practiceIndex: 0,
            direction: 'forward',
            quizResult: action.payload,
          };
        }
        return {
          ...state,
          quizResult: action.payload,
        };
      }

      case 'RETRY_QUIZ': {
        return {
          ...state,
          phase: 'quiz',
          quizIndex: 0,
          quizAnswers: {},
          quizResult: null,
          showFeedback: false,
          direction: 'forward',
        };
      }

      default:
        return state;
    }
  };
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function checkAnswer(
  question: QuizSlide | undefined,
  answer: string | string[] | undefined
): boolean {
  if (!question || answer === undefined) return false;

  const correct = question.correctAnswer;

  if (Array.isArray(correct)) {
    if (!Array.isArray(answer)) return false;
    if (correct.length !== answer.length) return false;
    const sortedCorrect = [...correct].sort();
    const sortedAnswer = [...answer].sort();
    return sortedCorrect.every((val, idx) => val === sortedAnswer[idx]);
  }

  return correct === answer;
}

function calculateScore(
  questions: QuizSlide[],
  answers: Record<string, string | string[]>
): number {
  if (questions.length === 0) return 100;

  const correctCount = questions.filter((q) =>
    checkAnswer(q, answers[q.questionId])
  ).length;

  return Math.round((correctCount / questions.length) * 100);
}

// ============================================
// HOOK
// ============================================

export function useSlideNavigation({
  moduleId,
  theorySlides,
  quizQuestions,
  practiceSlides,
  initialState,
  quizThreshold,
}: UseSlideNavigationOptions): UseSlideNavigationReturn {
  const context: ReducerContext = useMemo(
    () => ({
      theoryCount: theorySlides.length,
      quizCount: quizQuestions.length,
      practiceCount: practiceSlides.length,
      quizThreshold,
      quizQuestions,
    }),
    [theorySlides.length, quizQuestions, practiceSlides.length, quizThreshold]
  );

  const reducer = useMemo(() => createReducer(context), [context]);

  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    createInitialState
  );

  // Current slide
  const currentSlide = useMemo(() => {
    switch (state.phase) {
      case 'theory':
        return theorySlides[state.theoryIndex] ?? null;
      case 'quiz':
        return quizQuestions[state.quizIndex] ?? null;
      case 'practice':
        return practiceSlides[state.practiceIndex] ?? null;
      default:
        return null;
    }
  }, [state.phase, state.theoryIndex, state.quizIndex, state.practiceIndex, theorySlides, quizQuestions, practiceSlides]);

  // Navigation actions
  const goNext = useCallback(() => {
    if (state.showFeedback) {
      dispatch({ type: 'HIDE_FEEDBACK' });
    } else {
      dispatch({ type: 'GO_NEXT' });
    }
  }, [state.showFeedback]);

  const goPrevious = useCallback(() => {
    dispatch({ type: 'GO_PREVIOUS' });
  }, []);

  const goToSlide = useCallback((phase: SlidePhase, index: number) => {
    dispatch({ type: 'GO_TO_SLIDE', payload: { phase, index } });
  }, []);

  const goToTheorySlide = useCallback((slideIndex: number) => {
    dispatch({ type: 'GO_TO_THEORY_FOR_REVIEW', payload: { slideIndex } });
  }, []);

  // Quiz actions
  const setAnswer = useCallback(
    (questionId: string, answer: string | string[]) => {
      dispatch({ type: 'SET_ANSWER', payload: { questionId, answer } });
    },
    []
  );

  const submitAnswer = useCallback(() => {
    dispatch({ type: 'SUBMIT_ANSWER' });
  }, []);

  const retryQuiz = useCallback(() => {
    dispatch({ type: 'RETRY_QUIZ' });
  }, []);

  // Can navigate?
  const canGoNext = useMemo(() => {
    if (state.phase === 'complete') return false;
    if (state.showFeedback) return true; // Can dismiss feedback

    if (state.phase === 'quiz') {
      const currentQuestion = quizQuestions[state.quizIndex];
      const hasAnswer = currentQuestion && state.quizAnswers[currentQuestion.questionId] !== undefined;
      return hasAnswer;
    }

    return true;
  }, [state.phase, state.showFeedback, state.quizIndex, state.quizAnswers, quizQuestions]);

  const canGoPrevious = useMemo(() => {
    if (state.phase === 'theory' && state.theoryIndex === 0) return false;
    if (state.phase === 'complete') return false;
    return true;
  }, [state.phase, state.theoryIndex]);

  // Wrong questions for retry suggestions
  const wrongQuestions = useMemo(() => {
    if (!state.quizResult) return [];
    return quizQuestions.filter(
      (q) => !checkAnswer(q, state.quizAnswers[q.questionId])
    );
  }, [state.quizResult, quizQuestions, state.quizAnswers]);

  // Get state for persistence
  const getSlideState = useCallback((): SlideState => {
    return {
      theoryIndex: state.theoryIndex,
      quizIndex: state.quizIndex,
      practiceIndex: state.practiceIndex,
      quizAnswers: state.quizAnswers,
      lastPhase: state.phase,
      updatedAt: new Date().toISOString(),
    };
  }, [state]);

  // Auto-save progress with debounce
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSavedRef = useRef<string>('');

  useEffect(() => {
    const slideState = getSlideState();
    const stateKey = `${slideState.lastPhase}-${slideState.theoryIndex}-${slideState.quizIndex}-${slideState.practiceIndex}`;

    // Don't save if nothing changed
    if (stateKey === lastSavedRef.current) return;

    // Clear previous timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Debounce save by 1 second
    saveTimeoutRef.current = setTimeout(async () => {
      try {
        // Save to localStorage as fallback
        localStorage.setItem(`slide-progress-${moduleId}`, JSON.stringify(slideState));

        // Save to server
        await fetch(`/api/progression/slide/${moduleId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slideState }),
        });

        lastSavedRef.current = stateKey;
      } catch (error) {
        console.error('Failed to save slide progress:', error);
      }
    }, 1000);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [moduleId, getSlideState, state.phase, state.theoryIndex, state.quizIndex, state.practiceIndex]);

  return {
    state,
    currentSlide,
    phase: state.phase,

    goNext,
    goPrevious,
    goToSlide,
    goToTheorySlide,

    setAnswer,
    submitAnswer,
    retryQuiz,

    canGoNext,
    canGoPrevious,
    isLoading: false,

    totalTheorySlides: theorySlides.length,
    totalQuizQuestions: quizQuestions.length,
    totalPracticeSlides: practiceSlides.length,

    quizResult: state.quizResult,
    wrongQuestions,

    getSlideState,
  };
}
