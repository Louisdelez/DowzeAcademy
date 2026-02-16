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
    } catch {
      setError('Erreur lors de la validation. Veuillez réessayer.');
      setIsSubmitting(false);
    }
  };

  if (!isConfirming) {
    return (
      <div
        className="rounded-lg p-6 text-center"
        style={{
          backgroundColor: 'var(--color-bg-tertiary)',
          borderWidth: '1px',
          borderColor: 'var(--color-border)',
        }}
      >
        <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          Une fois que vous avez terminé la pratique, cliquez sur le bouton ci-dessous pour valider.
        </p>
        <Button onClick={() => setIsConfirming(true)} size="lg">
          J&apos;ai terminé la pratique
        </Button>
      </div>
    );
  }

  return (
    <div
      className="rounded-lg p-6"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--ctp-yellow) 15%, transparent)',
        borderWidth: '1px',
        borderColor: 'var(--ctp-yellow)',
      }}
    >
      <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--ctp-yellow)' }}>
        Confirmation
      </h4>
      <p className="mb-4" style={{ color: 'var(--ctp-yellow)' }}>
        Êtes-vous sûr d&apos;avoir terminé toutes les instructions de pratique ? Cette action
        marquera le module comme complété.
      </p>

      {error && (
        <div
          className="rounded-lg p-3 mb-4"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--ctp-red) 15%, transparent)',
            borderWidth: '1px',
            borderColor: 'var(--ctp-red)',
          }}
        >
          <p className="text-sm" style={{ color: 'var(--ctp-red)' }}>
            {error}
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setIsConfirming(false)} disabled={isSubmitting}>
          Annuler
        </Button>
        <Button onClick={handleConfirm} isLoading={isSubmitting}>
          Oui, valider ma pratique
        </Button>
      </div>
    </div>
  );
}
