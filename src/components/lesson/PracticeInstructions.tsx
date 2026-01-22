'use client';

import type { PracticeType } from '@/types/models';

interface PracticeInstructionsProps {
  practiceType: PracticeType;
  instructions: string;
}

const practiceTypeLabels: Record<PracticeType, { label: string; icon: string; color: string }> = {
  IN_GAME: {
    label: 'Pratique en jeu',
    icon: '🎮',
    color: 'var(--ctp-mauve)',
  },
  EXERCICES: {
    label: 'Exercices',
    icon: '📝',
    color: 'var(--ctp-blue)',
  },
  PROJET: {
    label: 'Projet',
    icon: '🛠️',
    color: 'var(--ctp-peach)',
  },
  AUTO_EVALUATION: {
    label: 'Auto-évaluation',
    icon: '📊',
    color: 'var(--ctp-green)',
  },
};

export function PracticeInstructions({ practiceType, instructions }: PracticeInstructionsProps) {
  const typeConfig = practiceTypeLabels[practiceType];

  return (
    <div className="space-y-6">
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
        style={{
          backgroundColor: `color-mix(in srgb, ${typeConfig.color} 20%, transparent)`,
          borderWidth: '1px',
          borderColor: typeConfig.color,
          color: typeConfig.color,
        }}
      >
        <span className="text-xl">{typeConfig.icon}</span>
        <span className="font-medium">{typeConfig.label}</span>
      </div>

      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: 'var(--color-border)',
        }}
      >
        <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
          Instructions
        </h3>
        <div className="prose prose-gray max-w-none" style={{ color: 'var(--color-text-secondary)' }}>
          {instructions.split('\n').map((line, index) => (
            <p key={index} className="my-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
