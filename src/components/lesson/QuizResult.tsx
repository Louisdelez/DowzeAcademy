'use client';

import { Button } from '@/components/ui/Button';

interface QuizResultProps {
  score: number;
  passed: boolean;
  threshold: number;
  onRetry?: () => void;
}

export function QuizResult({ score, passed, threshold, onRetry }: QuizResultProps) {
  return (
    <div
      className={`rounded-lg p-8 text-center ${
        passed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
      }`}
    >
      <div className="mb-4">
        <span className="text-6xl">{passed ? '🎉' : '😔'}</span>
      </div>

      <h3 className={`text-2xl font-bold mb-2 ${passed ? 'text-green-800' : 'text-red-800'}`}>
        {passed ? 'Félicitations !' : 'Pas encore...'}
      </h3>

      <p className={`text-lg mb-4 ${passed ? 'text-green-700' : 'text-red-700'}`}>
        Votre score : <strong>{score}%</strong>
        <span className="text-sm ml-2">(seuil : {threshold}%)</span>
      </p>

      {passed ? (
        <p className="text-green-600">
          Vous avez réussi le quiz ! La section pratique est maintenant débloquée.
        </p>
      ) : (
        <div>
          <p className="text-red-600 mb-4">
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
