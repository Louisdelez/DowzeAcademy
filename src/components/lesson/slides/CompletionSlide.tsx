'use client';

import { Trophy, ArrowRight, Home } from 'lucide-react';

interface CompletionSlideProps {
  moduleName: string;
  score?: number;
  nextModuleId?: string;
  nextModuleName?: string;
  onGoToNextModule?: () => void;
  onBackToDiscipline: () => void;
}

export function CompletionSlide({
  moduleName,
  score,
  nextModuleId,
  nextModuleName,
  onGoToNextModule,
  onBackToDiscipline,
}: CompletionSlideProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 slide-fade-in">
      <div
        className="rounded-xl shadow-sm p-8 text-center"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: 'var(--color-border-light)',
        }}
      >
        {/* Celebration icon */}
        <div
          className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-green) 15%, transparent)' }}
        >
          <Trophy className="w-12 h-12" style={{ color: 'var(--color-green)' }} />
        </div>

        {/* Congratulations message */}
        <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
          Module terminé !
        </h2>

        <p className="text-lg text-[var(--color-text-secondary)] mb-2">
          Vous avez complété <span className="font-semibold text-[var(--color-text)]">{moduleName}</span>
        </p>

        {/* Score display */}
        {score !== undefined && (
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: 'var(--color-surface-1)' }}
          >
            <span className="text-sm text-[var(--color-subtext)]">Score quiz:</span>
            <span className="font-bold text-[var(--color-green)]">{score}%</span>
          </div>
        )}

        {/* Achievement badges placeholder */}
        <div className="my-8 py-6 border-y border-[var(--color-border-light)]">
          <div className="flex justify-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: 'color-mix(in srgb, var(--color-yellow) 15%, transparent)' }}
              title="Module complété"
            >
              ✨
            </div>
            {score && score >= 90 && (
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)' }}
                title="Score excellent"
              >
                🏆
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={onBackToDiscipline}
            className="
              flex items-center justify-center gap-2
              px-6 py-3 rounded-lg font-medium
              bg-[var(--color-surface-1)] text-[var(--color-text)]
              hover:bg-[var(--color-surface-2)] transition-colors
            "
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Retour à la discipline
          </button>

          {nextModuleId && nextModuleName && onGoToNextModule && (
            <button
              type="button"
              onClick={onGoToNextModule}
              className="
                flex items-center justify-center gap-2
                px-6 py-3 rounded-lg font-medium
                bg-[var(--color-primary)] text-[var(--color-bg)]
                hover:opacity-90 transition-opacity
              "
            >
              Module suivant: {nextModuleName}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
