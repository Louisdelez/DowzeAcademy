'use client';

import { Button } from '@/components/ui/Button';

interface CompletionSlideProps {
  quizScore: number;
  onNavigateBack: () => void;
}

export function CompletionSlide({ quizScore, onNavigateBack }: CompletionSlideProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div
        className="rounded-xl shadow-sm p-8 sm:p-12 text-center"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: 'var(--color-border-light)',
        }}
      >
        {/* Celebration emoji */}
        <div className="text-6xl mb-6">🎉</div>

        {/* Title */}
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: 'var(--color-text)' }}
        >
          Module terminé !
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg mb-8"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Félicitations ! Vous avez complété ce module avec succès.
        </p>

        {/* Stats */}
        <div
          className="rounded-lg p-6 mb-8"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--ctp-green) 15%, transparent)',
            borderWidth: '1px',
            borderColor: 'var(--ctp-green)',
          }}
        >
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: 'var(--ctp-green)' }}
              >
                {quizScore}%
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--ctp-green)' }}
              >
                Score du quiz
              </div>
            </div>
            <div
              className="h-12 w-px"
              style={{ backgroundColor: 'var(--ctp-green)' }}
            />
            <div className="text-center">
              <div className="text-3xl">✅</div>
              <div
                className="text-sm"
                style={{ color: 'var(--ctp-green)' }}
              >
                Pratique validée
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={onNavigateBack}>
            Retour à la discipline
          </Button>
        </div>
      </div>
    </div>
  );
}
