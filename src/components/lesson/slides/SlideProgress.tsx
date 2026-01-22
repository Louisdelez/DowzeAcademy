'use client';

import type { SlidePhase } from '@/types/slides';

interface PhaseInfo {
  total: number;
  completed: boolean;
}

interface SlideProgressProps {
  currentPhase: SlidePhase;
  currentIndex: number;
  totalSlides: number;
  phases: {
    theory: PhaseInfo;
    quiz: PhaseInfo;
    practice: PhaseInfo;
  };
}

const phaseLabels: Record<Exclude<SlidePhase, 'complete'>, string> = {
  theory: 'Théorie',
  quiz: 'Quiz',
  practice: 'Pratique',
};

const phaseOrder: Exclude<SlidePhase, 'complete'>[] = ['theory', 'quiz', 'practice'];

export function SlideProgress({
  currentPhase,
  currentIndex,
  totalSlides,
  phases,
}: SlideProgressProps) {
  const progressPercentage = totalSlides > 0 ? ((currentIndex + 1) / totalSlides) * 100 : 0;

  const getPhaseStatus = (phase: Exclude<SlidePhase, 'complete'>) => {
    if (phases[phase].completed) return 'completed';
    if (currentPhase === phase) return 'current';
    if (currentPhase === 'complete') return 'completed';
    return 'upcoming';
  };

  return (
    <div className="flex flex-col gap-3 px-4 py-3">
      {/* Phase indicators */}
      <div
        className="flex items-center justify-center gap-2"
        role="navigation"
        aria-label="Phases du module"
      >
        {phaseOrder.map((phase, index) => {
          const status = getPhaseStatus(phase);
          const isLast = index === phaseOrder.length - 1;

          return (
            <div key={phase} className="flex items-center">
              {/* Phase dot and label */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`
                    w-2.5 h-2.5 rounded-full transition-colors
                    ${status === 'completed' ? 'bg-[var(--color-green)]' : ''}
                    ${status === 'current' ? 'bg-[var(--color-primary)]' : ''}
                    ${status === 'upcoming' ? 'bg-[var(--color-surface-1)] border border-[var(--color-overlay)]' : ''}
                  `}
                  aria-hidden="true"
                />
                <span
                  className={`
                    text-sm font-medium transition-colors
                    ${status === 'completed' ? 'text-[var(--color-green)]' : ''}
                    ${status === 'current' ? 'text-[var(--color-text)]' : ''}
                    ${status === 'upcoming' ? 'text-[var(--color-subtext)]' : ''}
                  `}
                  aria-current={status === 'current' ? 'step' : undefined}
                >
                  {phaseLabels[phase]}
                </span>
              </div>

              {/* Connector line */}
              {!isLast && (
                <div
                  className={`
                    w-8 h-0.5 mx-2 transition-colors
                    ${status === 'completed' ? 'bg-[var(--color-green)]' : 'bg-[var(--color-overlay)]'}
                  `}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      {currentPhase !== 'complete' && totalSlides > 0 && (
        <div className="flex items-center gap-3">
          <div
            className="flex-1 h-1.5 bg-[var(--color-surface-1)] rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={currentIndex + 1}
            aria-valuemin={1}
            aria-valuemax={totalSlides}
            aria-label={`Progression: slide ${currentIndex + 1} sur ${totalSlides}`}
          >
            <div
              className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm text-[var(--color-subtext)] min-w-[3rem] text-right">
            {currentIndex + 1}/{totalSlides}
          </span>
        </div>
      )}
    </div>
  );
}
