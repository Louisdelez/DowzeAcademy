'use client';

import { Icon } from '@/components/icons';

type Phase = 'theory' | 'quiz' | 'practice' | 'complete';

interface SlideProgressProps {
  currentPhase: Phase;
  currentSlide: number;
  totalSlides: number;
}

const phaseLabels: Record<Phase, string> = {
  theory: 'Théorie',
  quiz: 'Quiz',
  practice: 'Pratique',
  complete: 'Terminé',
};

const phaseOrder: Phase[] = ['theory', 'quiz', 'practice'];

export function SlideProgress({
  currentPhase,
  currentSlide,
  totalSlides,
}: SlideProgressProps) {
  const progress = totalSlides > 0 ? (currentSlide / totalSlides) * 100 : 0;

  return (
    <div
      className="px-4 py-3 sticky top-16 z-10"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderBottomWidth: '1px',
        borderBottomColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Phase indicators */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {phaseOrder.map((phase, index) => {
            const isActive = phase === currentPhase;
            const isPast =
              phaseOrder.indexOf(currentPhase) > index ||
              currentPhase === 'complete';

            return (
              <div key={phase} className="flex items-center">
                {index > 0 && (
                  <div
                    className="w-8 h-0.5 mx-1"
                    style={{
                      backgroundColor: isPast
                        ? 'var(--color-primary)'
                        : 'var(--color-border)',
                    }}
                  />
                )}
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: isActive
                      ? 'var(--ctp-blue)'
                      : isPast
                        ? 'var(--ctp-green)'
                        : 'var(--color-bg-tertiary)',
                    color: isActive || isPast
                      ? 'var(--ctp-base)'
                      : 'var(--color-text-muted)',
                  }}
                >
                  {isPast && !isActive && (
                    <Icon name="check" size={16} color="current" />
                  )}
                  {phaseLabels[phase]}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress bar and counter */}
        {currentPhase !== 'complete' && (
          <div className="flex items-center gap-3">
            <div
              className="flex-1 rounded-full h-2 overflow-hidden"
              style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
            >
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  backgroundColor: 'var(--color-primary)',
                }}
              />
            </div>
            <span
              className="text-sm font-medium min-w-[50px] text-right"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {currentSlide} / {totalSlides}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
