'use client';

import { useMemo, useCallback, useState, useEffect } from 'react';
import { useSlideNavigation } from '@/lib/hooks/useSlideNavigation';
import { useKeyboardNavigation } from '@/lib/hooks/useKeyboardNavigation';
import { useSwipeNavigation } from '@/lib/hooks/useSwipeNavigation';
import { useAdminMode } from '@/lib/hooks/useAdminMode';
import { parseTheorySlides } from '@/lib/utils/theory-parser';
import { SlideProgress } from './SlideProgress';
import { SlideNavigation } from './SlideNavigation';
import { TheorySlide } from './TheorySlide';
import { QuizSlide } from './QuizSlide';
import { QuizResultSlide } from './QuizResultSlide';
import { PracticeSlide } from './PracticeSlide';
import { CompletionSlide } from './CompletionSlide';
import { ExerciseTimerModal } from '../ExerciseTimerModal';
import { findTheorySlideByTitle } from '@/lib/utils/theory-parser';
import { parsePracticeSlides } from '@/lib/utils/practice-parser';
import type { SlideState, QuizSlide as QuizSlideType, TheorySlide as TheorySlideType, PracticeSlide as PracticeSlideType } from '@/types/slides';
import type { DisplayChoice } from '@/types/quiz';
import { Button } from '@/components/ui/Button';
import { AIPromptButton } from '../AIPromptButton';
import { SearchPromptButton } from '../SearchPromptButton';
import { NotesButton } from '../NotesButton';

interface Lesson {
  id: string;
  theory: string;
  practiceInstructions: string | null;
  practiceTimerDuration?: number;
  // Feature 005: Randomization settings
  shuffleQuestions?: boolean;
  shuffleAnswers?: boolean;
  questionsToShow?: number | null;
  quizQuestions: Array<{
    id: string;
    questionText: string;
    questionType: string;
    options: Array<{id: string; text: string}> | string[];
    correctAnswer: string;
    explanation: string | null;
    linkedTheorySection: string | null;
  }>;
}

// Helper to check quiz answers
function checkQuizAnswer(
  question: QuizSlideType,
  answer: string | string[] | undefined
): boolean {
  if (!answer) return false;

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

interface LearningContext {
  domainName: string;
  disciplineName: string;
}

interface SlideContainerProps {
  moduleId: string;
  moduleName: string;
  lesson: Lesson;
  initialProgress?: SlideState | null;
  quizThreshold?: number;
  onComplete: () => void;
  learningContext?: LearningContext;
}

export function SlideContainer({
  moduleId,
  moduleName,
  lesson,
  initialProgress,
  quizThreshold = 70,
  onComplete,
  learningContext,
}: SlideContainerProps) {
  // Parse theory content into slides
  const theorySlides = useMemo(() => {
    return parseTheorySlides(lesson.theory);
  }, [lesson.theory]);

  // Convert quiz questions to QuizSlide format
  const quizQuestions: QuizSlideType[] = useMemo(() => {
    const total = lesson.quizQuestions.length;
    return lesson.quizQuestions.map((q, index) => {
      // Options can be either [{id, text}] objects or string[] - normalize to string[]
      const rawOptions = q.options as Array<{id: string; text: string}> | string[] | null;
      let options: string[] = [];
      let correctAnswer: string | string[] = q.correctAnswer;

      if (rawOptions && rawOptions.length > 0) {
        if (typeof rawOptions[0] === 'object' && 'text' in rawOptions[0]) {
          // Options are objects - extract text values
          const optionObjects = rawOptions as Array<{id: string; text: string}>;
          options = optionObjects.map(o => o.text);

          // Convert correctAnswer from ID(s) to text value(s)
          if (Array.isArray(q.correctAnswer)) {
            correctAnswer = (q.correctAnswer as string[]).map(id => {
              const opt = optionObjects.find(o => o.id === id);
              return opt ? opt.text : id;
            });
          } else {
            const opt = optionObjects.find(o => o.id === q.correctAnswer);
            correctAnswer = opt ? opt.text : q.correctAnswer;
          }
        } else {
          // Options are already strings
          options = rawOptions as string[];
        }
      }

      return {
        id: `quiz-slide-${index}`,
        questionId: q.id,
        questionText: q.questionText,
        questionType: q.questionType === 'MULTIPLE_CHOICE' ? 'MULTIPLE_CHOICE' : q.questionType === 'SHORT_TEXT' ? 'SHORT_TEXT' : 'SINGLE_CHOICE' as const,
        options,
        correctAnswer,
        feedback: q.explanation,
        linkedTheorySection: q.linkedTheorySection,
        slideNumber: index + 1,
        totalQuestions: total,
      };
    });
  }, [lesson.quizQuestions]);

  // Parse practice content into slides
  const practiceSlides = useMemo(() => {
    if (!lesson.practiceInstructions) return [];
    return parsePracticeSlides(lesson.practiceInstructions);
  }, [lesson.practiceInstructions]);

  // Timer modal state
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isCompletingPractice, setIsCompletingPractice] = useState(false);
  const [practiceExerciseCompleted, setPracticeExerciseCompleted] = useState(false);

  // Admin mode
  const { isGameModeEnabled } = useAdminMode();

  // Feature 005: Track whether we're using attempt-based quiz flow
  const useAttemptBasedQuiz = lesson.shuffleQuestions !== false || lesson.shuffleAnswers !== false;

  // Initialize navigation hook
  const {
    state,
    currentSlide,
    phase,
    goNext,
    goPrevious,
    goToSlide,
    goToTheorySlide,
    setAnswer,
    submitAnswer,
    retryQuiz,
    canGoNext,
    canGoPrevious,
    isLoading,
    totalTheorySlides,
    totalQuizQuestions,
    totalPracticeSlides,
    quizResult,
    wrongQuestions,
    // Feature 005: Quiz attempt
    attemptId,
    attemptQuestions,
    currentAttemptQuestion,
    initializeQuizAttempt,
    serverIsCorrect,
  } = useSlideNavigation({
    moduleId,
    lessonId: lesson.id,
    theorySlides,
    quizQuestions,
    practiceSlides,
    initialState: initialProgress,
    quizThreshold,
    isAdminMode: isGameModeEnabled,
    useAttemptBasedQuiz,
  });

  const [attemptInitialized, setAttemptInitialized] = useState(false);

  // Feature 005: Initialize quiz attempt when entering quiz phase
  useEffect(() => {
    if (phase === 'quiz' && useAttemptBasedQuiz && !attemptInitialized && !attemptId) {
      initializeQuizAttempt().then(() => setAttemptInitialized(true));
    }
  }, [phase, useAttemptBasedQuiz, attemptInitialized, attemptId, initializeQuizAttempt]);

  // Feature 005: Reset attempt state when retrying
  useEffect(() => {
    if (phase === 'quiz' && state.quizIndex === 0 && !state.quizAnswers[quizQuestions[0]?.questionId]) {
      setAttemptInitialized(false);
    }
  }, [phase, state.quizIndex, state.quizAnswers, quizQuestions]);

  // Handle submit action
  const handleSubmit = useCallback(() => {
    if (phase === 'quiz' && !state.showFeedback) {
      submitAnswer();
    } else if (state.showFeedback) {
      goNext();
    } else {
      goNext();
    }
  }, [phase, state.showFeedback, submitAnswer, goNext]);

  // Setup keyboard navigation
  useKeyboardNavigation({
    onNext: goNext,
    onPrevious: goPrevious,
    onSubmit: handleSubmit,
    enabled: phase !== 'complete',
  });

  // Setup mobile swipe navigation
  useSwipeNavigation({
    onSwipeLeft: goNext,
    onSwipeRight: goPrevious,
    enabled: phase !== 'complete',
  });

  // Get current slide count based on phase
  // Feature 005: Use attemptQuestions.length for quiz when available (respects questionsToShow)
  const effectiveQuizCount = useAttemptBasedQuiz && attemptQuestions.length > 0
    ? attemptQuestions.length
    : totalQuizQuestions;

  const getCurrentSlideCount = () => {
    switch (phase) {
      case 'theory':
        return totalTheorySlides;
      case 'quiz':
        return effectiveQuizCount;
      case 'practice':
        return totalPracticeSlides;
      default:
        return 0;
    }
  };

  // Get current index based on phase
  const getCurrentIndex = () => {
    switch (phase) {
      case 'theory':
        return state.theoryIndex;
      case 'quiz':
        return state.quizIndex;
      case 'practice':
        return state.practiceIndex;
      default:
        return 0;
    }
  };

  // Determine next button label
  const getNextLabel = () => {
    if (state.showFeedback) return 'Continuer';
    if (phase === 'quiz' && !state.quizAnswers[quizQuestions[state.quizIndex]?.questionId]) {
      return 'Valider';
    }
    if (phase === 'theory' && state.theoryIndex === totalTheorySlides - 1) {
      // Skip to practice if no quiz questions
      return totalQuizQuestions === 0 ? 'Passer à la pratique' : 'Passer au quiz';
    }
    if (phase === 'practice' && state.practiceIndex === totalPracticeSlides - 1) {
      return 'Terminer';
    }
    return 'Suivant';
  };

  // Handle return to quiz from theory review
  const handleReturnToQuiz = useCallback(() => {
    if (state.returnToQuizIndex !== null) {
      goToSlide('quiz', state.returnToQuizIndex);
    }
  }, [state.returnToQuizIndex, goToSlide]);

  // Handle practice completion via timer modal
  const handlePracticeComplete = useCallback(async () => {
    setIsCompletingPractice(true);
    try {
      const response = await fetch(
        `/api/progression/module/${moduleId}/practice`,
        { method: 'POST' }
      );
      if (response.ok) {
        setIsTimerModalOpen(false);
        setPracticeExerciseCompleted(true);
        goNext(); // Move to complete phase
      }
    } catch (error) {
      console.error('Failed to complete practice:', error);
    } finally {
      setIsCompletingPractice(false);
    }
  }, [moduleId, goNext]);

  // Render the appropriate slide based on phase
  const renderSlide = () => {
    if (phase === 'theory' && currentSlide) {
      const theorySlide = currentSlide as TheorySlideType;
      return (
        <TheorySlide
          key={theorySlide.id}
          slide={theorySlide}
          direction={state.direction}
          isReviewMode={state.returnToQuizIndex !== null}
          onReturnToQuiz={state.returnToQuizIndex !== null ? handleReturnToQuiz : undefined}
        />
      );
    }

    // Quiz phase
    if (phase === 'quiz') {
      let quizSlide = currentSlide as QuizSlideType;

      // Feature 005: When using attempt-based quiz with shuffled questions,
      // use question data from currentAttemptQuestion to ensure correct matching
      if (useAttemptBasedQuiz && currentAttemptQuestion) {
        // Build quizSlide from attempt question data to ensure question/options match
        quizSlide = {
          id: `quiz-slide-${state.quizIndex}`,
          questionId: currentAttemptQuestion.questionId,
          questionText: currentAttemptQuestion.questionText,
          questionType: currentAttemptQuestion.questionType as 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'SHORT_TEXT',
          options: null, // Not used when randomizedChoices is provided
          correctAnswer: '', // Not needed for display, server handles validation
          feedback: currentAttemptQuestion.feedback ?? null,
          linkedTheorySection: currentAttemptQuestion.linkedTheorySection ?? null,
          slideNumber: state.quizIndex + 1,
          totalQuestions: attemptQuestions.length > 0 ? attemptQuestions.length : totalQuizQuestions,
        };
      }

      // Show quiz result slide if we have results
      if (quizResult) {
        // Find suggested theory slides based on wrong questions
        const suggestedSlides = wrongQuestions
          .map((q) => {
            if (q.linkedTheorySection) {
              return findTheorySlideByTitle(theorySlides, q.linkedTheorySection);
            }
            return null;
          })
          .filter((s): s is TheorySlideType => s !== null)
          // Remove duplicates
          .filter((slide, index, self) =>
            index === self.findIndex((s) => s.id === slide.id)
          );

        return (
          <QuizResultSlide
            score={quizResult.score}
            threshold={quizThreshold}
            passed={quizResult.passed}
            wrongQuestions={wrongQuestions}
            suggestedSlides={suggestedSlides}
            onRetry={retryQuiz}
            onContinue={goNext}
            onReviewSlide={goToTheorySlide}
          />
        );
      }

      if (!quizSlide) return null;

      // Find linked theory slide for current question
      const linkedTheorySlide = quizSlide.linkedTheorySection
        ? findTheorySlideByTitle(theorySlides, quizSlide.linkedTheorySection)
        : null;

      // Check if current answer is correct
      const currentAnswer = state.quizAnswers[quizSlide.questionId];

      // Feature 005: Get randomized choices from attempt if available
      let randomizedChoices: DisplayChoice[] | undefined;
      if (useAttemptBasedQuiz && currentAttemptQuestion?.choices) {
        randomizedChoices = currentAttemptQuestion.choices.map((c) => ({
          label: c.label,
          text: c.text,
          optionId: c.optionId,
        }));
      }

      // Feature 005: Use server-side isCorrect when available, otherwise fall back to client-side calculation
      let isCorrect: boolean;
      if (serverIsCorrect[quizSlide.questionId] !== undefined) {
        // Use the server's authoritative isCorrect value
        isCorrect = serverIsCorrect[quizSlide.questionId];
      } else if (randomizedChoices && currentAnswer) {
        // Fallback: Find the selected choice by optionId and compare its text to correctAnswer
        const selectedChoice = randomizedChoices.find(c => c.optionId === currentAnswer);
        const correctAnswerText = quizSlide.correctAnswer;
        isCorrect = selectedChoice?.text === correctAnswerText;
      } else {
        isCorrect = checkQuizAnswer(quizSlide, currentAnswer);
      }

      return (
        <QuizSlide
          key={quizSlide.id}
          question={quizSlide}
          selectedAnswer={currentAnswer ?? null}
          showFeedback={state.showFeedback}
          isCorrect={isCorrect}
          onSelectAnswer={(answer) => setAnswer(quizSlide.questionId, answer)}
          onSubmit={submitAnswer}
          onContinue={goNext}
          onReviewTheory={linkedTheorySlide ? goToTheorySlide : undefined}
          linkedTheorySlide={linkedTheorySlide}
          direction={state.direction}
          randomizedChoices={randomizedChoices}
        />
      );
    }

    // Practice phase
    if (phase === 'practice') {
      const practiceSlide = currentSlide as PracticeSlideType;
      if (!practiceSlide) return null;

      const isLastPracticeSlide = state.practiceIndex === totalPracticeSlides - 1;

      return (
        <>
          <PracticeSlide
            key={practiceSlide.id}
            slide={practiceSlide}
            direction={state.direction}
          />
          {isLastPracticeSlide && (
            <div className="flex justify-center py-6">
              <Button
                onClick={() => setIsTimerModalOpen(true)}
                size="lg"
                className="px-8 text-lg !bg-[var(--ctp-green)] !text-[var(--ctp-base)] hover:opacity-90"
              >
                🚀 Lancer l&apos;exercice
              </Button>
            </div>
          )}
          <ExerciseTimerModal
            isOpen={isTimerModalOpen}
            onClose={() => setIsTimerModalOpen(false)}
            onValidate={handlePracticeComplete}
            durationSeconds={lesson.practiceTimerDuration || 300}
            exerciseSummary={lesson.practiceInstructions || ''}
            isValidating={isCompletingPractice}
            isAdminMode={isGameModeEnabled}
          />
        </>
      );
    }

    // Complete phase
    if (phase === 'complete') {
      return (
        <CompletionSlide
          moduleName={moduleName}
          score={quizResult?.score}
          onBackToDiscipline={onComplete}
        />
      );
    }

    return null;
  };

  // Combine all theory slides content for the AI prompt
  const fullTheoryContent = useMemo(() => {
    return theorySlides.map(slide => `## ${slide.title}\n\n${slide.content}`).join('\n\n');
  }, [theorySlides]);

  return (
    <div className="flex flex-col h-full min-h-[calc(100vh-4rem)]">
      {/* Floating buttons - Show during theory, quiz, and practice phases */}
      {phase !== 'complete' && learningContext && (
        <>
          <AIPromptButton
            domainName={learningContext.domainName}
            disciplineName={learningContext.disciplineName}
            moduleName={moduleName}
            slideTitle={moduleName}
            slideContent={fullTheoryContent}
          />
          <SearchPromptButton
            domainName={learningContext.domainName}
            disciplineName={learningContext.disciplineName}
            moduleName={moduleName}
          />
          <NotesButton moduleId={moduleId} />
        </>
      )}

      {/* Progress indicator */}
      <SlideProgress
        currentPhase={phase}
        currentIndex={getCurrentIndex()}
        totalSlides={getCurrentSlideCount()}
        phases={{
          theory: {
            total: totalTheorySlides,
            completed: phase !== 'theory',
          },
          quiz: {
            total: effectiveQuizCount,
            completed: phase === 'practice' || phase === 'complete',
          },
          practice: {
            total: totalPracticeSlides,
            completed: phase === 'complete',
          },
        }}
      />

      {/* Slide content area */}
      <div className="flex-1 overflow-y-auto">
        {renderSlide()}
      </div>

      {/* Navigation footer */}
      {phase !== 'complete' && (
        <SlideNavigation
          onPrevious={goPrevious}
          onNext={goNext}
          canGoPrevious={canGoPrevious}
          canGoNext={
            // Disable "Terminer" button on last practice slide until exercise is completed
            phase === 'practice' && state.practiceIndex === totalPracticeSlides - 1
              ? practiceExerciseCompleted
              : canGoNext
          }
          nextLabel={getNextLabel()}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
