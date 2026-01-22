'use client';

import { Button } from '@/components/ui/Button';

interface QuizResultProps {
  score: number;
  passed: boolean;
  threshold: number;
  onRetry?: () => void;
}

export function QuizResult({ score, passed, threshold, onRetry }: QuizResultProps) {
  const color = passed ? 'var(--ctp-green)' : 'var(--ctp-red)';

  return (
    <div
      className="rounded-lg p-8 text-center"
      style={{
        backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
        borderWidth: '1px',
        borderColor: color,
      }}
    >
      <div className="mb-4">
        <span className="text-6xl">{passed ? '🎉' : '😔'}</span>
      </div>

      <h3 className="text-2xl font-bold mb-2" style={{ color }}>
        {passed ? 'Félicitations !' : 'Pas encore...'}
      </h3>

      <p className="text-lg mb-4" style={{ color }}>
        Votre score : <strong>{score}%</strong>
        <span className="text-sm ml-2">(seuil : {threshold}%)</span>
      </p>

      {passed ? (
        <p style={{ color }}>
          Vous avez réussi le quiz ! La section pratique est maintenant débloquée.
        </p>
      ) : (
        <div>
          <p className="mb-4" style={{ color }}>
            Vous n&apos;avez pas atteint le seuil requis. Révisez la théorie et réessayez !
          </p>
          {onRetry && (
            <Button onClick={onRetry} variant="outline">
              Réessayer le quiz
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
