'use client';

import { useReducer, useCallback, useMemo, useEffect, useRef, useState } from 'react';
import type {
  SlideState,
  SlidePhase,
  SlideDirection,
  SlideNavigationState,
  TheorySlide,
  QuizSlide,
  PracticeSlide,
} from '@/types/slides';
import type { AttemptQuestion, DisplayChoice, QuizResultResponse, QuestionResult } from '@/types/quiz';

// ============================================
// TYPES
// ============================================

interface UseSlideNavigationOptions {
  moduleId: string;
  lessonId: string;
  theorySlides: TheorySlide[];
  quizQuestions: QuizSlide[];
  practiceSlides: PracticeSlide[];
  initialState?: SlideState | null;
  quizThreshold: number;
  isAdminMode?: boolean;
  useAttemptBasedQuiz?: boolean;
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

  // Feature 005: Quiz attempt data
  attemptId: string | null;
  attemptQuestions: AttemptQuestion[];
  currentAttemptQuestion: AttemptQuestion | null;
  initializeQuizAttempt: () => Promise<void>;
  submitQuizAttempt: () => Promise<QuizResultResponse | null>;
  // Feature 005: Server-side isCorrect values per questionId
  serverIsCorrect: Record<string, boolean>;

  // Admin mode
  isAdminMode: boolean;
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
  | { type: 'COMPLETE_QUIZ'; payload: { score: number; passed: boolean; wrongQuestionIds?: string[] } }
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
      wrongQuestionIds: [],
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
    wrongQuestionIds: [],
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
        const wrongIds = action.payload.wrongQuestionIds || [];
        if (action.payload.passed) {
          // Skip practice if no practice slides
          if (context.practiceCount === 0) {
            return {
              ...state,
              phase: 'complete',
              direction: 'forward',
              showFeedback: false,
              quizResult: { score: action.payload.score, passed: action.payload.passed },
              wrongQuestionIds: wrongIds,
            };
          }
          return {
            ...state,
            phase: 'practice',
            practiceIndex: 0,
            direction: 'forward',
            showFeedback: false,
            quizResult: { score: action.payload.score, passed: action.payload.passed },
            wrongQuestionIds: wrongIds,
          };
        }
        return {
          ...state,
          showFeedback: false,
          quizResult: { score: action.payload.score, passed: action.payload.passed },
          wrongQuestionIds: wrongIds,
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
          wrongQuestionIds: [],
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
  lessonId,
  theorySlides,
  quizQuestions,
  practiceSlides,
  initialState,
  quizThreshold,
  isAdminMode = false,
  useAttemptBasedQuiz = false,
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

  // Feature 005: Quiz attempt state
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [attemptQuestions, setAttemptQuestions] = useState<AttemptQuestion[]>([]);
  const [isAttemptLoading, setIsAttemptLoading] = useState(false);
  // Feature 005: Store server-side isCorrect values per question
  const [serverIsCorrect, setServerIsCorrect] = useState<Record<string, boolean>>({});

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
  const goNext = useCallback(async () => {
    // Admin mode: auto-select the correct answer on quiz questions (without submitting yet)
    if (isAdminMode && state.phase === 'quiz' && !state.showFeedback) {
      // Check if quiz attempt data is expected but not ready yet
      // This prevents setting text-based answers before the UI switches to optionId-based mode
      if (isAttemptLoading) {
        // Attempt data is loading - do nothing, user can press again when ready
        return;
      }

      // If we expect attempt-based quiz but data isn't loaded yet, wait
      if (useAttemptBasedQuiz && attemptQuestions.length === 0 && quizQuestions.length > 0) {
        // Attempt data expected but not loaded yet - do nothing, user can press again when ready
        return;
      }

      const currentAttemptQ = attemptQuestions[state.quizIndex];

      // When using attempt-based quiz (shuffled questions), use the attemptQuestion's questionId
      // to find the correct answer from the original quizQuestions array
      const questionId = currentAttemptQ?.questionId || quizQuestions[state.quizIndex]?.questionId;

      // Find the original question data which contains the correct answer
      const originalQuestion = quizQuestions.find(q => q.questionId === questionId) || quizQuestions[state.quizIndex];

      if (originalQuestion && questionId) {
        const hasAnswer = state.quizAnswers[questionId] !== undefined;

        if (!hasAnswer) {
          // Step 1: Auto-select the correct answer (visual selection only, no submit)
          let autoAnswer: string | string[];
          const correctAnswerValue = originalQuestion.correctAnswer;

          if (originalQuestion.questionType === 'SHORT_TEXT') {
            // For text questions, use the correct answer directly
            autoAnswer = correctAnswerValue as string;
          } else if (currentAttemptQ?.choices && currentAttemptQ.choices.length > 0) {
            // For choice questions with randomized choices, find the optionId matching the correct answer
            // Normalize strings for comparison (trim whitespace, normalize case)
            const normalize = (s: string) => s.trim().toLowerCase();

            if (originalQuestion.questionType === 'MULTIPLE_CHOICE' && Array.isArray(correctAnswerValue)) {
              // Multiple correct answers - find all matching optionIds
              autoAnswer = correctAnswerValue.map(correctText => {
                const normalizedCorrect = normalize(correctText);
                const matchingChoice = currentAttemptQ.choices?.find(c => normalize(c.text) === normalizedCorrect);
                return matchingChoice?.optionId || '';
              }).filter(id => id !== '');
            } else {
              // Single correct answer - find matching optionId
              const normalizedCorrect = normalize(String(correctAnswerValue));
              const matchingChoice = currentAttemptQ.choices.find(c => normalize(c.text) === normalizedCorrect);
              if (matchingChoice) {
                autoAnswer = matchingChoice.optionId;
              } else {
                // Fallback: use the correct answer text directly (legacy compatibility)
                autoAnswer = correctAnswerValue;
              }
            }
          } else if (originalQuestion.options && originalQuestion.options.length > 0) {
            // Legacy mode without randomized choices - use the correct answer directly
            autoAnswer = correctAnswerValue;
          } else {
            autoAnswer = correctAnswerValue;
          }

          // Only set the answer visually - don't submit yet
          // User will press arrow again to submit
          dispatch({ type: 'SET_ANSWER', payload: { questionId, answer: autoAnswer } });
          // Pre-mark as correct so feedback will show green when submitted
          setServerIsCorrect((prev) => ({
            ...prev,
            [questionId]: true,
          }));
          return;
        } else {
          // Step 2: Answer is already selected, now submit to show feedback
          dispatch({ type: 'SUBMIT_ANSWER' });
          return;
        }
      }
    }

    if (state.showFeedback) {
      // Check if we're on the last question and about to show results
      // Feature 005: Use attemptQuestions.length when available (respects questionsToShow)
      const effectiveQuizLength = attemptQuestions.length > 0 ? attemptQuestions.length : quizQuestions.length;
      const isLastQuestion = state.quizIndex >= effectiveQuizLength - 1;

      if (state.phase === 'quiz' && isLastQuestion) {
        // Admin mode: skip server submission and mark as passed
        if (isAdminMode) {
          dispatch({
            type: 'COMPLETE_QUIZ',
            payload: { score: 100, passed: true, wrongQuestionIds: [] }
          });
          return;
        }

        // Submit the attempt to get the server-calculated score
        if (attemptId) {
          try {
            const response = await fetch(`/api/quiz-attempts/${attemptId}/submit`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
              const result: QuizResultResponse = await response.json();
              // Extract wrong question IDs from server response
              const wrongQuestionIds = result.questions
                ?.filter((q) => !q.isCorrect)
                .map((q) => q.questionId) || [];
              // Use server's score instead of client-side calculation
              dispatch({
                type: 'COMPLETE_QUIZ',
                payload: { score: result.score, passed: result.passed, wrongQuestionIds }
              });
              return;
            }
          } catch (error) {
            console.error('Failed to submit quiz attempt:', error);
          }
        }

        // Fallback to client-side calculation if no attemptId or server error
        dispatch({ type: 'HIDE_FEEDBACK' });
      } else {
        // Not last question, just move to next
        dispatch({ type: 'HIDE_FEEDBACK' });
      }
    } else {
      dispatch({ type: 'GO_NEXT' });
    }
  }, [state.showFeedback, state.phase, state.quizIndex, state.quizAnswers, quizQuestions, attemptQuestions.length, attemptId, isAdminMode, isAttemptLoading, useAttemptBasedQuiz]);

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
    // Admin mode bypasses all restrictions
    if (isAdminMode) return state.phase !== 'complete';

    if (state.phase === 'complete') return false;
    if (state.showFeedback) return true; // Can dismiss feedback

    if (state.phase === 'quiz') {
      const currentQuestion = quizQuestions[state.quizIndex];
      const hasAnswer = currentQuestion && state.quizAnswers[currentQuestion.questionId] !== undefined;
      return hasAnswer;
    }

    return true;
  }, [state.phase, state.showFeedback, state.quizIndex, state.quizAnswers, quizQuestions, isAdminMode]);

  const canGoPrevious = useMemo(() => {
    // Admin mode allows going back from anywhere
    if (isAdminMode) return state.phase !== 'theory' || state.theoryIndex > 0;

    if (state.phase === 'theory' && state.theoryIndex === 0) return false;
    if (state.phase === 'complete') return false;
    return true;
  }, [state.phase, state.theoryIndex, isAdminMode]);

  // Wrong questions for retry suggestions
  const wrongQuestions = useMemo(() => {
    if (!state.quizResult) return [];
    // Use server-provided wrongQuestionIds when available (Feature 005)
    if (state.wrongQuestionIds.length > 0) {
      return quizQuestions.filter((q) =>
        state.wrongQuestionIds.includes(q.questionId)
      );
    }
    // Fallback to client-side calculation for legacy mode
    return quizQuestions.filter(
      (q) => !checkAnswer(q, state.quizAnswers[q.questionId])
    );
  }, [state.quizResult, state.wrongQuestionIds, quizQuestions, state.quizAnswers]);

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

  // Feature 005: Initialize quiz attempt when entering quiz phase
  const initializeQuizAttempt = useCallback(async () => {
    if (!lessonId || isAttemptLoading) return;

    setIsAttemptLoading(true);
    try {
      const response = await fetch(`/api/lessons/${lessonId}/quiz-attempts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      // Handle existing in-progress attempt (409 Conflict)
      if (response.status === 409 && data.attemptId) {
        // Load the existing attempt instead
        const loadResponse = await fetch(`/api/quiz-attempts/${data.attemptId}`);
        if (loadResponse.ok) {
          const existingAttempt = await loadResponse.json();
          setAttemptId(existingAttempt.id);
          setAttemptQuestions(existingAttempt.questions || []);
          return;
        }
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create quiz attempt');
      }

      setAttemptId(data.attemptId);
      setAttemptQuestions(data.questions || []);
    } catch (error) {
      console.error('Failed to initialize quiz attempt:', error);
    } finally {
      setIsAttemptLoading(false);
    }
  }, [lessonId, isAttemptLoading]);

  // Feature 005: Submit answer to attempt
  const submitAnswerToAttempt = useCallback(
    async (questionId: string, answer: string | string[]) => {
      if (!attemptId) return;

      const currentQuestion = attemptQuestions.find((q) => q.questionId === questionId);
      if (!currentQuestion) return;

      // Determine the request body based on question type
      let body: Record<string, unknown>;
      if (currentQuestion.questionType === 'SHORT_TEXT') {
        body = { questionId, textAnswer: answer as string };
      } else if (currentQuestion.questionType === 'MULTIPLE_CHOICE') {
        // For MULTIPLE_CHOICE, convert optionIds to labels
        const optionIds = Array.isArray(answer) ? answer : [answer];
        const labels = optionIds.map((optId) => {
          const choice = currentQuestion.choices?.find((c) => c.optionId === optId);
          return choice?.label ?? '';
        }).filter(Boolean);
        body = { questionId, selectedLabels: labels };
      } else {
        // For SINGLE_CHOICE, convert optionId to label
        const choice = currentQuestion.choices?.find((c) => c.optionId === answer);
        body = { questionId, selectedLabel: choice?.label ?? '' };
      }

      try {
        const response = await fetch(`/api/quiz-attempts/${attemptId}/answers`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          const result = await response.json();
          // Store the server's isCorrect value for this question
          if (result.isCorrect !== undefined) {
            setServerIsCorrect((prev) => ({
              ...prev,
              [questionId]: result.isCorrect,
            }));
          }
        }
      } catch (error) {
        console.error('Failed to submit answer:', error);
      }
    },
    [attemptId, attemptQuestions]
  );

  // Feature 005: Submit quiz attempt for scoring
  const submitQuizAttempt = useCallback(async (): Promise<QuizResultResponse | null> => {
    if (!attemptId) return null;

    try {
      const response = await fetch(`/api/quiz-attempts/${attemptId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to submit quiz attempt');
      }

      const result: QuizResultResponse = await response.json();
      return result;
    } catch (error) {
      console.error('Failed to submit quiz attempt:', error);
      return null;
    }
  }, [attemptId]);

  // Feature 005: Get current attempt question
  const currentAttemptQuestion = useMemo(() => {
    if (state.phase !== 'quiz' || attemptQuestions.length === 0) return null;
    return attemptQuestions[state.quizIndex] ?? null;
  }, [state.phase, state.quizIndex, attemptQuestions]);

  // Feature 005: Enhanced setAnswer that also submits to attempt
  const setAnswerWithAttempt = useCallback(
    async (questionId: string, answer: string | string[]) => {
      // Update local state
      dispatch({ type: 'SET_ANSWER', payload: { questionId, answer } });

      // Submit to attempt if available
      if (attemptId) {
        await submitAnswerToAttempt(questionId, answer);
      }
    },
    [attemptId, submitAnswerToAttempt]
  );

  // Feature 005: Reset attempt state on retry
  const retryQuizWithAttempt = useCallback(() => {
    dispatch({ type: 'RETRY_QUIZ' });
    setAttemptId(null);
    setAttemptQuestions([]);
    setServerIsCorrect({});
  }, []);

  return {
    state,
    currentSlide,
    phase: state.phase,

    goNext,
    goPrevious,
    goToSlide,
    goToTheorySlide,

    setAnswer: setAnswerWithAttempt,
    submitAnswer,
    retryQuiz: retryQuizWithAttempt,

    canGoNext,
    canGoPrevious,
    isLoading: isAttemptLoading,

    totalTheorySlides: theorySlides.length,
    totalQuizQuestions: quizQuestions.length,
    totalPracticeSlides: practiceSlides.length,

    quizResult: state.quizResult,
    wrongQuestions,

    getSlideState,

    // Feature 005: Quiz attempt exports
    attemptId,
    attemptQuestions,
    currentAttemptQuestion,
    initializeQuizAttempt,
    submitQuizAttempt,
    serverIsCorrect,

    // Admin mode
    isAdminMode,
  };
}
