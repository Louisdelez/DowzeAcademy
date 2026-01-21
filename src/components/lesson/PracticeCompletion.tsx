'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useNetworkStatus } from '@/lib/hooks/useNetworkStatus';

interface PracticeCompletionProps {
  moduleId: string;
  onComplete: () => void;
}

export function PracticeCompletion({ moduleId, onComplete }: PracticeCompletionProps) {
  const { isOnline } = useNetworkStatus();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConfirm = async () => {
    if (!isOnline) {
      setError('Vous devez être connecté à Internet pour valider la pratique.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/progression/module/${moduleId}/practice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to mark practice as complete');
      }

      onComplete();
    } catch (err) {
      setError('Erreur lors de la validation. Veuillez réessayer.');
      setIsSubmitting(false);
    }
  };

  if (!isConfirming) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
        <p className="text-gray-700 mb-4">
          Une fois que vous avez terminé la pratique, cliquez sur le bouton ci-dessous pour valider.
        </p>
        <Button onClick={() => setIsConfirming(true)} size="lg">
          J&apos;ai terminé la pratique
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
      <h4 className="text-lg font-semibold text-yellow-800 mb-2">Confirmation</h4>
      <p className="text-yellow-700 mb-4">
        Êtes-vous sûr d&apos;avoir terminé toutes les instructions de pratique ?
        Cette action marquera le module comme complété.
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={() => setIsConfirming(false)}
          disabled={isSubmitting}
        >
          Annuler
        </Button>
        <Button onClick={handleConfirm} isLoading={isSubmitting}>
          Oui, valider ma pratique
        </Button>
      </div>
    </div>
  );
}
