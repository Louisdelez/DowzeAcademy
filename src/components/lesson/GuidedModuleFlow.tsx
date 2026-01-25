'use client';

import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { parseTheorySlides } from '@/lib/utils/theory-parser';
import { SlideProgress } from './SlideProgress';
import { SlideNavigation } from './SlideNavigation';
import { TheorySlide } from './slides/TheorySlide';
import { QuizSlide } from './QuizSlide';
import { PracticeSlide } from './PracticeSlide';
import { CompletionSlide } from './CompletionSlide';
import { SlideContainer } from './slides/SlideContainer';
import type { PracticeType, QuestionType, LessonMode } from '@/types/models';
import type { SlideState } from '@/types/slides';

interface Question {
  id: string;
  questionText: string;
  questionType: QuestionType;
  options: { id: string; text: string }[] | null;
  order: number;
  linkedTheorySection?: string | null;
  correctAnswer?: string;
  explanation?: string | null;
}

interface QuizFeedback {
  questionId: string;
  isCorrect: boolean;
  feedback: string;
}

interface LearningContext {
  domainName: string;
  disciplineName: string;
}

interface GuidedModuleFlowProps {
  moduleId: string;
  lessonId?: string; // Feature 005: Needed for quiz attempt API
  moduleName?: string;
  theoryContent: string;
  questions: Question[];
  quizThreshold: number;
  practiceType: PracticeType;
  practiceInstructions: string;
  practiceTimerDuration?: number;
  initialQuizPassed?: boolean;
  initialPracticeCompleted?: boolean;
  mode?: LessonMode;
  initialSlideState?: SlideState | null;
  // Feature 005: Randomization settings
  shuffleQuestions?: boolean;
  shuffleAnswers?: boolean;
  questionsToShow?: number | null;
  // AI Prompt context
  learningContext?: LearningContext;
}

type Phase = 'theory' | 'quiz' | 'practice' | 'complete';

export function GuidedModuleFlow({
  moduleId,
  lessonId,
  moduleName = 'Module',
  theoryContent,
  questions,
  quizThreshold,
  practiceType,
  practiceInstructions,
  practiceTimerDuration,
  initialQuizPassed = false,
  initialPracticeCompleted = false,
  mode = 'LEGACY',
  initialSlideState,
  shuffleQuestions,
  shuffleAnswers,
  questionsToShow,
  learningContext,
}: GuidedModuleFlowProps) {
  const router = useRouter();

  // If mode is SLIDES, use the new SlideContainer component
  if (mode === 'SLIDES') {
    return (
      <SlideContainer
        moduleId={moduleId}
        moduleName={moduleName}
        lesson={{
          id: lessonId || moduleId, // Feature 005: Use actual lessonId for quiz attempts
          theory: theoryContent,
          practiceInstructions: practiceInstructions,
          practiceTimerDuration: practiceTimerDuration,
          // Feature 005: Randomization settings
          shuffleQuestions,
          shuffleAnswers,
          questionsToShow,
          quizQuestions: questions.map((q) => ({
            id: q.id,
            questionText: q.questionText,
            questionType: q.questionType,
            options: q.options || [],
            correctAnswer: q.correctAnswer || '',
            explanation: q.explanation || null,
            linkedTheorySection: q.linkedTheorySection || null,
          })),
        }}
        initialProgress={initialSlideState}
        quizThreshold={quizThreshold}
        onComplete={() => router.back()}
        learningContext={learningContext}
      />
    );
  }

  // LEGACY mode - continue with existing implementation

  // Parse theory content into slides
  const theorySlides = useMemo(
    () => parseTheorySlides(theoryContent),
    [theoryContent]
  );

  // Determine initial phase based on progression
  const getInitialPhase = (): Phase => {
    if (initialPracticeCompleted) return 'complete';
    if (initialQuizPassed) return 'practice';
    return 'theory';
  };

  // State
  const [phase, setPhase] = useState<Phase>(getInitialPhase);
  const [theoryIndex, setTheoryIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizResult, setQuizResult] = useState<{
    score: number;
    passed: boolean;
    feedback: QuizFeedback[];
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompletingPractice, setIsCompletingPractice] = useState(false);

  // Computed values
  const currentQuestion = questions[quizIndex];
  const currentTheorySlide = theorySlides[theoryIndex];
  const isLastTheorySlide = theoryIndex === theorySlides.length - 1;
  const isLastQuizQuestion = quizIndex === questions.length - 1;

  const totalSlides = useMemo(() => {
    if (phase === 'theory') return theorySlides.length;
    if (phase === 'quiz') return questions.length;
    return 1;
  }, [phase, theorySlides.length, questions.length]);

  const currentSlide = useMemo(() => {
    if (phase === 'theory') return theoryIndex + 1;
    if (phase === 'quiz') return quizIndex + 1;
    return 1;
  }, [phase, theoryIndex, quizIndex]);

  // Check if current quiz question has an answer
  const hasAnswer = useCallback(() => {
    if (!currentQuestion) return false;
    const answer = answers[currentQuestion.id];
    if (!answer) return false;
    if (Array.isArray(answer)) return answer.length > 0;
    return answer.trim().length > 0;
  }, [currentQuestion, answers]);

  // Handle answer change
  const handleAnswerChange = useCallback((answer: string | string[]) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
    setShowFeedback(false);
  }, [currentQuestion]);

  // Submit quiz to API
  const submitQuiz = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/quiz/${moduleId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: Object.entries(answers).map(([questionId, answer]) => ({
            questionId,
            answer,
          })),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setQuizResult({
          score: result.score,
          passed: result.passed,
          feedback: result.feedback || [],
        });

        if (result.passed) {
          setPhase('practice');
        } else {
          // Allow retry - reset quiz state
          setQuizIndex(0);
          setAnswers({});
          setShowFeedback(false);
        }
      }
    } catch (error) {
      console.error('Failed to submit quiz:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Complete practice
  const handleCompletePractice = async () => {
    setIsCompletingPractice(true);
    try {
      const response = await fetch(
        `/api/progression/module/${moduleId}/practice`,
        { method: 'POST' }
      );

      if (response.ok) {
        setPhase('complete');
      }
    } catch (error) {
      console.error('Failed to complete practice:', error);
    } finally {
      setIsCompletingPractice(false);
    }
  };

  // Navigation handlers
  const handleBack = useCallback(() => {
    if (phase === 'theory' && theoryIndex > 0) {
      setTheoryIndex((prev) => prev - 1);
    } else if (phase === 'quiz' && quizIndex > 0) {
      setQuizIndex((prev) => prev - 1);
      setShowFeedback(false);
    }
  }, [phase, theoryIndex, quizIndex]);

  const handleNext = useCallback(() => {
    if (phase === 'theory') {
      if (isLastTheorySlide) {
        setPhase('quiz');
        setQuizIndex(0);
      } else {
        setTheoryIndex((prev) => prev + 1);
      }
    } else if (phase === 'quiz') {
      if (showFeedback) {
        // Already showed feedback, move to next question or submit
        if (isLastQuizQuestion) {
          submitQuiz();
        } else {
          setQuizIndex((prev) => prev + 1);
          setShowFeedback(false);
        }
      } else {
        // Show feedback for current answer
        setShowFeedback(true);
      }
    }
  }, [phase, isLastTheorySlide, isLastQuizQuestion, showFeedback]);

  // Get current feedback for quiz question
  const getCurrentFeedback = () => {
    if (!quizResult || !currentQuestion) return undefined;
    const feedback = quizResult.feedback.find(
      (f) => f.questionId === currentQuestion.id
    );
    return feedback;
  };

  // Determine navigation button state
  const getNextButtonConfig = () => {
    if (phase === 'theory') {
      return {
        label: isLastTheorySlide ? 'Commencer le quiz' : 'Continuer',
        disabled: false,
      };
    }
    if (phase === 'quiz') {
      if (showFeedback) {
        return {
          label: isLastQuizQuestion ? 'Voir les résultats' : 'Question suivante',
          disabled: false,
        };
      }
      return {
        label: 'Valider',
        disabled: !hasAnswer(),
      };
    }
    return { label: 'Continuer', disabled: false };
  };

  const canGoBack = () => {
    if (phase === 'theory') return theoryIndex > 0;
    if (phase === 'quiz') return quizIndex > 0 && !showFeedback;
    return false;
  };

  const { label: nextLabel, disabled: nextDisabled } = getNextButtonConfig();

  // Render quiz result screen when failed
  if (quizResult && !quizResult.passed && phase === 'quiz') {
    return (
      <div className="flex flex-col min-h-[calc(100vh-180px)]">
        <SlideProgress
          currentPhase={phase}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
        />

        <div className="flex-1 overflow-y-auto pb-40">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <div
              className="rounded-xl shadow-sm p-8 text-center"
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                borderWidth: '1px',
                borderColor: 'var(--color-border-light)',
              }}
            >
              <div className="text-5xl mb-4">😔</div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                Pas encore...
              </h2>
              <p
                className="mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Votre score : {quizResult.score}% (minimum requis : {quizThreshold}%)
              </p>
              <p
                className="mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Revoyez la théorie et réessayez le quiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setPhase('theory');
                    setTheoryIndex(0);
                    setQuizResult(null);
                  }}
                  className="px-6 py-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: 'var(--color-bg-tertiary)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Revoir la théorie
                </button>
                <button
                  onClick={() => {
                    setQuizResult(null);
                    setQuizIndex(0);
                    setAnswers({});
                  }}
                  className="px-6 py-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--ctp-base)',
                  }}
                >
                  Réessayer le quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-180px)]">
      <SlideProgress
        currentPhase={phase}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />

      <div className="flex-1 overflow-y-auto pb-40">
        {/* Theory slides */}
        {phase === 'theory' && currentTheorySlide && (
          <TheorySlide
            slide={currentTheorySlide}
            direction="forward"
          />
        )}

        {/* Quiz slides */}
        {phase === 'quiz' && currentQuestion && (
          <QuizSlide
            question={currentQuestion}
            questionNumber={quizIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={answers[currentQuestion.id] || null}
            onAnswerChange={handleAnswerChange}
            showFeedback={showFeedback}
            isCorrect={getCurrentFeedback()?.isCorrect}
            feedback={getCurrentFeedback()?.feedback}
          />
        )}

        {/* Practice slide */}
        {phase === 'practice' && (
          <PracticeSlide
            practiceType={practiceType}
            instructions={practiceInstructions}
            practiceTimerDuration={practiceTimerDuration}
            onComplete={handleCompletePractice}
            isCompleting={isCompletingPractice}
          />
        )}

        {/* Completion slide */}
        {phase === 'complete' && (
          <CompletionSlide
            quizScore={quizResult?.score || 100}
            onNavigateBack={() => router.back()}
          />
        )}
      </div>

      {/* Navigation footer - only show for theory and quiz */}
      {(phase === 'theory' || (phase === 'quiz' && !isSubmitting)) && (
        <SlideNavigation
          onBack={canGoBack() ? handleBack : null}
          onNext={handleNext}
          nextLabel={nextLabel}
          isNextDisabled={nextDisabled}
          isLoading={isSubmitting}
          showBack={canGoBack()}
        />
      )}
    </div>
  );
}
