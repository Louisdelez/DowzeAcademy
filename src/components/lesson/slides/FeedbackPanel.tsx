'use client';

import { CheckCircle, XCircle, BookOpen } from 'lucide-react';
import type { TheorySlide } from '@/types/slides';

interface FeedbackPanelProps {
  isCorrect: boolean;
  explanation: string | null;
  linkedTheorySlide?: TheorySlide | null;
  onContinue: () => void;
  onReviewTheory?: () => void;
}

export function FeedbackPanel({
  isCorrect,
  explanation,
  linkedTheorySlide,
  onContinue,
  onReviewTheory,
}: FeedbackPanelProps) {
  return (
    <div
      className={`
        mt-6 p-4 rounded-lg border slide-fade-in
        ${isCorrect
          ? 'bg-[color-mix(in_srgb,var(--color-green)_10%,transparent)] border-[var(--color-green)]'
          : 'bg-[color-mix(in_srgb,var(--color-peach)_10%,transparent)] border-[var(--color-peach)]'
        }
      `}
      role="alert"
      aria-live="polite"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        {isCorrect ? (
          <CheckCircle
            className="w-6 h-6 shrink-0"
            style={{ color: 'var(--color-green)' }}
            aria-hidden="true"
          />
        ) : (
          <XCircle
            className="w-6 h-6 shrink-0"
            style={{ color: 'var(--color-peach)' }}
            aria-hidden="true"
          />
        )}
        <span
          className="font-semibold text-lg"
          style={{ color: isCorrect ? 'var(--color-green)' : 'var(--color-peach)' }}
        >
          {isCorrect ? 'Bonne réponse !' : 'Pas tout à fait...'}
        </span>
      </div>

      {/* Explanation */}
      {explanation && (
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          {explanation}
        </p>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Review theory button - only show when incorrect and has linked slide */}
        {!isCorrect && linkedTheorySlide && onReviewTheory && (
          <button
            type="button"
            onClick={onReviewTheory}
            className="
              flex items-center gap-2 px-4 py-2 rounded-lg
              text-sm font-medium transition-all duration-200
              bg-[var(--color-surface-1)] text-[var(--color-text)]
              hover:bg-[var(--color-surface-2)]
            "
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>Revoir: {linkedTheorySlide.title}</span>
          </button>
        )}

        {/* Continue button */}
        <button
          type="button"
          onClick={onContinue}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${isCorrect
              ? 'bg-[var(--color-green)] text-[var(--color-bg)] hover:opacity-90'
              : 'bg-[var(--color-primary)] text-[var(--color-bg)] hover:opacity-90'
            }
          `}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
