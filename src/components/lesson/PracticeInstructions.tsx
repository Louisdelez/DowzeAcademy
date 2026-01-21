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
    color: 'bg-purple-50 border-purple-200 text-purple-800',
  },
  EXERCICES: {
    label: 'Exercices',
    icon: '📝',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
  },
  PROJET: {
    label: 'Projet',
    icon: '🛠️',
    color: 'bg-orange-50 border-orange-200 text-orange-800',
  },
  AUTO_EVALUATION: {
    label: 'Auto-évaluation',
    icon: '📊',
    color: 'bg-green-50 border-green-200 text-green-800',
  },
};

export function PracticeInstructions({ practiceType, instructions }: PracticeInstructionsProps) {
  const typeConfig = practiceTypeLabels[practiceType];

  return (
    <div className="space-y-6">
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${typeConfig.color}`}>
        <span className="text-xl">{typeConfig.icon}</span>
        <span className="font-medium">{typeConfig.label}</span>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructions</h3>
        <div className="prose prose-gray max-w-none">
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
