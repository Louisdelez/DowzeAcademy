'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import type { PracticeType } from '@/types/models';

interface PracticeSlideProps {
  practiceType: PracticeType;
  instructions: string;
  onComplete: () => void;
  isCompleting: boolean;
}

const practiceTypeConfig: Record<
  PracticeType,
  { label: string; icon: string; colorVar: string }
> = {
  IN_GAME: {
    label: 'Pratique en jeu',
    icon: '🎮',
    colorVar: 'var(--ctp-mauve)',
  },
  EXERCICES: {
    label: 'Exercices',
    icon: '📝',
    colorVar: 'var(--ctp-blue)',
  },
  PROJET: {
    label: 'Projet',
    icon: '🛠️',
    colorVar: 'var(--ctp-peach)',
  },
  AUTO_EVALUATION: {
    label: 'Auto-évaluation',
    icon: '📊',
    colorVar: 'var(--ctp-green)',
  },
};

export function PracticeSlide({
  practiceType,
  instructions,
  onComplete,
  isCompleting,
}: PracticeSlideProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const config = practiceTypeConfig[practiceType];

  const handleCompleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    onComplete();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div
        className="rounded-xl shadow-sm p-6 sm:p-8"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: 'var(--color-border-light)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between mb-6 pb-4"
          style={{
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--color-border-light)',
          }}
        >
          <h2
            className="text-2xl font-bold"
            style={{ color: 'var(--color-text)' }}
          >
            Pratique
          </h2>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `color-mix(in srgb, ${config.colorVar} 15%, transparent)`,
              borderWidth: '1px',
              borderColor: config.colorVar,
              color: config.colorVar,
            }}
          >
            <span>{config.icon}</span>
            {config.label}
          </span>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Instructions
          </h3>
          <div
            className="rounded-lg p-4"
            style={{
              backgroundColor: 'var(--color-bg-tertiary)',
              borderWidth: '1px',
              borderColor: 'var(--color-border)',
            }}
          >
            {instructions.split('\n').map((line, index) => (
              <p
                key={index}
                className="leading-relaxed mb-2 last:mb-0"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Completion section */}
        {!showConfirm ? (
          <div
            className="rounded-lg p-6 text-center"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--ctp-blue) 15%, transparent)',
              borderWidth: '1px',
              borderColor: 'var(--ctp-blue)',
            }}
          >
            <p
              className="mb-4"
              style={{ color: 'var(--ctp-blue)' }}
            >
              Une fois que vous avez terminé la pratique, cliquez sur le bouton
              ci-dessous pour valider.
            </p>
            <Button onClick={handleCompleteClick} disabled={isCompleting}>
              J&apos;ai terminé la pratique
            </Button>
          </div>
        ) : (
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--ctp-yellow) 15%, transparent)',
              borderWidth: '1px',
              borderColor: 'var(--ctp-yellow)',
            }}
          >
            <p
              className="mb-4 text-center font-medium"
              style={{ color: 'var(--ctp-yellow)' }}
            >
              Êtes-vous sûr d&apos;avoir terminé la pratique ?
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={handleCancel}
                disabled={isCompleting}
              >
                Annuler
              </Button>
              <Button
                onClick={handleConfirm}
                isLoading={isCompleting}
              >
                Confirmer
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
