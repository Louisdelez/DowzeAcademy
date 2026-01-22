'use client';

import { useMemo } from 'react';
import { FeedbackPanel } from './FeedbackPanel';
import type { QuizSlide as QuizSlideType, SlideDirection, TheorySlide } from '@/types/slides';

interface QuizSlideProps {
  question: QuizSlideType;
  selectedAnswer: string | string[] | null;
  showFeedback: boolean;
  isCorrect?: boolean;
  onSelectAnswer: (answer: string | string[]) => void;
  onSubmit: () => void;
  onContinue: () => void;
  onReviewTheory?: (slideIndex: number) => void;
  linkedTheorySlide?: TheorySlide | null;
  direction: SlideDirection;
}

export function QuizSlide({
  question,
  selectedAnswer,
  showFeedback,
  isCorrect,
  onSelectAnswer,
  onSubmit,
  onContinue,
  onReviewTheory,
  linkedTheorySlide,
  direction,
}: QuizSlideProps) {
  const animationClass = direction === 'forward' ? 'slide-enter-forward' : 'slide-enter-backward';

  const isMultipleChoice = question.questionType === 'MULTIPLE_CHOICE';
  const isShortText = question.questionType === 'SHORT_TEXT';

  // Check if an option is selected
  const isOptionSelected = (option: string) => {
    if (!selectedAnswer) return false;
    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(option);
    }
    return selectedAnswer === option;
  };

  // Handle option click for single/multiple choice
  const handleOptionClick = (option: string) => {
    if (showFeedback) return;

    if (isMultipleChoice) {
      const currentAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : [];
      if (currentAnswers.includes(option)) {
        onSelectAnswer(currentAnswers.filter((a) => a !== option));
      } else {
        onSelectAnswer([...currentAnswers, option]);
      }
    } else {
      onSelectAnswer(option);
    }
  };

  // Handle text input change
  const handleTextChange = (value: string) => {
    if (showFeedback) return;
    onSelectAnswer(value);
  };

  // Handle review theory click
  const handleReviewTheory = () => {
    if (linkedTheorySlide && onReviewTheory) {
      onReviewTheory(linkedTheorySlide.slideNumber - 1);
    }
  };

  // Check if can submit
  const canSubmit = useMemo(() => {
    if (!selectedAnswer) return false;
    if (Array.isArray(selectedAnswer)) return selectedAnswer.length > 0;
    return selectedAnswer.toString().trim().length > 0;
  }, [selectedAnswer]);

  return (
    <div
      className={`max-w-2xl mx-auto px-4 py-6 ${animationClass}`}
      role="article"
      aria-label={`Question ${question.slideNumber} sur ${question.totalQuestions}`}
    >
      <div
        className="rounded-xl shadow-sm p-6 sm:p-8"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: 'var(--color-border-light)',
        }}
      >
        {/* Question number indicator */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-[var(--color-subtext)]">
            Question {question.slideNumber}/{question.totalQuestions}
          </span>
          {isMultipleChoice && (
            <span className="text-xs text-[var(--color-subtext)] bg-[var(--color-surface-1)] px-2 py-1 rounded">
              Plusieurs réponses possibles
            </span>
          )}
        </div>

        {/* Question text */}
        <h2
          className="text-xl font-semibold mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          {question.questionText}
        </h2>

        {/* Options or text input */}
        {isShortText ? (
          <div className="mb-4">
            <input
              type="text"
              value={selectedAnswer?.toString() || ''}
              onChange={(e) => handleTextChange(e.target.value)}
              disabled={showFeedback}
              placeholder="Votre réponse..."
              className="
                w-full px-4 py-3 rounded-lg
                bg-[var(--color-surface-1)] text-[var(--color-text)]
                border border-[var(--color-overlay)]
                focus:border-[var(--color-primary)] focus:outline-none
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-colors
              "
            />
          </div>
        ) : (
          <div
            className="space-y-3"
            role={isMultipleChoice ? 'group' : 'radiogroup'}
            aria-label="Options de réponse"
          >
            {question.options?.map((option, index) => {
              const isSelected = isOptionSelected(option);
              const optionLetter = String.fromCharCode(65 + index); // A, B, C, D...

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleOptionClick(option)}
                  disabled={showFeedback}
                  role={isMultipleChoice ? 'checkbox' : 'radio'}
                  aria-checked={isSelected}
                  className={`
                    w-full flex items-center gap-4 p-4 rounded-lg
                    text-left transition-all duration-200
                    disabled:cursor-not-allowed
                    ${isSelected
                      ? 'bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] border-2 border-[var(--color-primary)]'
                      : 'bg-[var(--color-surface-1)] border-2 border-transparent hover:border-[var(--color-overlay)]'
                    }
                    ${showFeedback ? 'opacity-80' : ''}
                  `}
                >
                  {/* Option letter/checkbox */}
                  <span
                    className={`
                      w-8 h-8 flex items-center justify-center rounded-lg shrink-0
                      font-medium text-sm transition-colors
                      ${isSelected
                        ? 'bg-[var(--color-primary)] text-[var(--color-bg)]'
                        : 'bg-[var(--color-surface-2)] text-[var(--color-subtext)]'
                      }
                    `}
                  >
                    {isMultipleChoice ? (isSelected ? '✓' : optionLetter) : optionLetter}
                  </span>

                  {/* Option text */}
                  <span
                    className={`flex-1 ${isSelected ? 'text-[var(--color-text)]' : 'text-[var(--color-text-secondary)]'}`}
                  >
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Submit button - only show when not showing feedback */}
        {!showFeedback && (
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canSubmit}
              className={`
                px-6 py-2.5 rounded-lg font-medium transition-all duration-200
                ${canSubmit
                  ? 'bg-[var(--color-primary)] text-[var(--color-bg)] hover:opacity-90'
                  : 'bg-[var(--color-surface-1)] text-[var(--color-overlay)] cursor-not-allowed'
                }
              `}
            >
              Valider
            </button>
          </div>
        )}

        {/* Feedback panel */}
        {showFeedback && isCorrect !== undefined && (
          <FeedbackPanel
            isCorrect={isCorrect}
            explanation={question.feedback}
            linkedTheorySlide={linkedTheorySlide}
            onContinue={onContinue}
            onReviewTheory={linkedTheorySlide ? handleReviewTheory : undefined}
          />
        )}
      </div>
    </div>
  );
}
