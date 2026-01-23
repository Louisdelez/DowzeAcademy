'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ExerciseTimerModal } from './ExerciseTimerModal';
import type { PracticeType } from '@/types/models';

interface PracticeSlideProps {
  practiceType: PracticeType;
  instructions: string;
  practiceTimerDuration?: number;
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
  practiceTimerDuration,
  onComplete,
  isCompleting,
}: PracticeSlideProps) {
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const config = practiceTypeConfig[practiceType];

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

        {/* Launch exercise button */}
        <div
          className="rounded-lg p-6 text-center"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--ctp-green) 15%, transparent)',
            borderWidth: '1px',
            borderColor: 'var(--ctp-green)',
          }}
        >
          <p
            className="mb-4"
            style={{ color: 'var(--ctp-green)' }}
          >
            Lisez les instructions ci-dessus puis lancez l&apos;exercice pour commencer le timer.
          </p>
          <Button
            onClick={() => setIsTimerModalOpen(true)}
            disabled={isCompleting}
            style={{
              backgroundColor: 'var(--ctp-green)',
              color: 'var(--ctp-base)',
            }}
          >
            Lancer l&apos;exercice
          </Button>
        </div>
      </div>

      {/* Timer Modal */}
      <ExerciseTimerModal
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
        onValidate={onComplete}
        durationSeconds={practiceTimerDuration || 300}
        exerciseSummary={instructions}
        isValidating={isCompleting}
      />
    </div>
  );
}
