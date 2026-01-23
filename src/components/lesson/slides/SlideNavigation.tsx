'use client';

import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface SlideNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  nextLabel?: string;
  previousLabel?: string;
  isLoading?: boolean;
}

export function SlideNavigation({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  nextLabel = 'Suivant',
  previousLabel = 'Précédent',
  isLoading = false,
}: SlideNavigationProps) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 border-t border-[var(--ctp-surface0)] bg-[var(--ctp-base)]"
      role="navigation"
      aria-label="Navigation des slides"
    >
      {/* Previous button */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={!canGoPrevious || isLoading}
        className={`
          flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm
          transition-all duration-200 border-2
          ${
            canGoPrevious && !isLoading
              ? 'bg-[var(--ctp-surface0)] border-[var(--ctp-surface1)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)] hover:border-[var(--ctp-surface2)] active:scale-[0.98]'
              : 'bg-[var(--ctp-mantle)] border-[var(--ctp-surface0)] text-[var(--ctp-overlay0)] cursor-not-allowed opacity-50'
          }
        `}
        aria-label={`${previousLabel} - Raccourci clavier: flèche gauche`}
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        <span>{previousLabel}</span>
      </button>

      {/* Keyboard hint */}
      <div className="hidden md:flex items-center gap-4 text-xs text-[var(--ctp-subtext0)]">
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-[var(--ctp-surface0)] text-[var(--ctp-subtext1)] font-mono">←</kbd>
          <span>Précédent</span>
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-[var(--ctp-surface0)] text-[var(--ctp-subtext1)] font-mono">→</kbd>
          <span>Suivant</span>
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-[var(--ctp-surface0)] text-[var(--ctp-subtext1)] font-mono">Entrée</kbd>
          <span>Valider</span>
        </span>
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext || isLoading}
        className={`
          flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm
          transition-all duration-200
          ${
            canGoNext && !isLoading
              ? 'bg-[var(--ctp-mauve)] text-[var(--ctp-base)] hover:bg-[var(--ctp-pink)] active:scale-[0.98]'
              : 'bg-[var(--ctp-surface0)] text-[var(--ctp-overlay0)] cursor-not-allowed opacity-50'
          }
        `}
        aria-label={`${nextLabel} - Raccourci clavier: flèche droite ou Entrée`}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
        ) : (
          <>
            <span>{nextLabel}</span>
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </>
        )}
      </button>
    </div>
  );
}
