'use client';

import { Trophy, RefreshCw, BookOpen, ArrowRight } from 'lucide-react';
import type { QuizSlide, TheorySlide } from '@/types/slides';

interface QuizResultSlideProps {
  score: number;
  threshold: number;
  passed: boolean;
  wrongQuestions: QuizSlide[];
  suggestedSlides: TheorySlide[];
  onRetry: () => void;
  onContinue: () => void;
  onReviewSlide: (slideIndex: number) => void;
}

export function QuizResultSlide({
  score,
  threshold,
  passed,
  wrongQuestions,
  suggestedSlides,
  onRetry,
  onContinue,
  onReviewSlide,
}: QuizResultSlideProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 slide-fade-in">
      <div
        className="rounded-xl shadow-sm p-6 sm:p-8"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: 'var(--color-border-light)',
        }}
      >
        {/* Result header */}
        <div className="text-center mb-8">
          {passed ? (
            <>
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-green) 15%, transparent)' }}
              >
                <Trophy className="w-10 h-10" style={{ color: 'var(--color-green)' }} />
              </div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                Félicitations !
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Vous avez réussi le quiz avec un score de <span className="font-semibold text-[var(--color-green)]">{score}%</span>
              </p>
            </>
          ) : (
            <>
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-peach) 15%, transparent)' }}
              >
                <span className="text-4xl">💪</span>
              </div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                Presque !
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Votre score : <span className="font-semibold text-[var(--color-peach)]">{score}%</span>
                {' '}(minimum requis : {threshold}%)
              </p>
              <p className="text-sm text-[var(--color-subtext)] mt-2">
                Pas de panique, vous pouvez revoir la théorie et réessayer !
              </p>
            </>
          )}
        </div>

        {/* Score bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[var(--color-subtext)]">Score</span>
            <span className="font-medium text-[var(--color-text)]">{score}%</span>
          </div>
          <div
            className="h-3 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--color-surface-1)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${score}%`,
                backgroundColor: passed ? 'var(--color-green)' : 'var(--color-peach)',
              }}
            />
          </div>
          {/* Threshold marker */}
          <div className="relative h-1">
            <div
              className="absolute -top-4 w-0.5 h-4"
              style={{
                left: `${threshold}%`,
                backgroundColor: 'var(--color-subtext)',
              }}
            />
          </div>
        </div>

        {/* Wrong questions summary (Feature 005) */}
        {!passed && wrongQuestions.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-medium text-[var(--color-text)] mb-3">
              Questions à revoir ({wrongQuestions.length})
            </h3>
            <div className="space-y-3">
              {wrongQuestions.map((question, index) => (
                <div
                  key={question.id}
                  className="p-3 rounded-lg bg-[var(--color-surface-1)] border-l-4 border-[var(--color-peach)]"
                >
                  <p className="text-sm text-[var(--color-text)] font-medium mb-1">
                    Question {index + 1}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {question.questionText}
                  </p>
                  {question.feedback && (
                    <p className="text-xs text-[var(--color-subtext)] mt-2 italic">
                      💡 {question.feedback}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggested slides for review (when failed) */}
        {!passed && suggestedSlides.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-medium text-[var(--color-text)] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Sections à revoir
            </h3>
            <div className="space-y-2">
              {suggestedSlides.map((slide) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => onReviewSlide(slide.slideNumber - 1)}
                  className="
                    w-full flex items-center justify-between p-3 rounded-lg
                    bg-[var(--color-surface-1)] hover:bg-[var(--color-surface-2)]
                    text-left transition-colors
                  "
                >
                  <span className="text-[var(--color-text)]">{slide.title}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--color-subtext)]" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {!passed && (
            <button
              type="button"
              onClick={onRetry}
              className="
                flex-1 flex items-center justify-center gap-2
                px-6 py-3 rounded-lg font-medium
                bg-[var(--color-primary)] text-[var(--color-bg)]
                hover:opacity-90 transition-opacity
              "
            >
              <RefreshCw className="w-5 h-5" aria-hidden="true" />
              Réessayer le quiz
            </button>
          )}

          {passed && (
            <button
              type="button"
              onClick={onContinue}
              className="
                flex-1 flex items-center justify-center gap-2
                px-6 py-3 rounded-lg font-medium
                bg-[var(--color-green)] text-[var(--color-bg)]
                hover:opacity-90 transition-opacity
              "
            >
              Continuer vers la pratique
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
