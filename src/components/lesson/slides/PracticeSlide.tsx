'use client';

import React, { useState, useMemo } from 'react';
import { Clipboard, CheckSquare, Square, Target, Settings, ListChecks, ArrowRight } from 'lucide-react';
import type { PracticeSlide as PracticeSlideType, SlideDirection } from '@/types/slides';
import { renderMarkdownContent } from '@/lib/utils/markdown-renderer';
import { parseExerciseContent } from '@/lib/utils/exercise-content-parser';

interface PracticeSlideProps {
  slide: PracticeSlideType;
  direction: SlideDirection;
  onChecklistChange?: (checkedItems: boolean[]) => void;
}

const typeIcons = {
  brief: Target,
  setup: Settings,
  step: Clipboard,
  evaluation: ListChecks,
  next: ArrowRight,
};

const typeColors = {
  brief: 'var(--color-primary)',
  setup: 'var(--color-teal)',
  step: 'var(--color-blue)',
  evaluation: 'var(--color-green)',
  next: 'var(--color-mauve)',
};

export function PracticeSlide({
  slide,
  direction,
  onChecklistChange,
}: PracticeSlideProps) {
  const animationClass = direction === 'forward' ? 'slide-enter-forward' : 'slide-enter-backward';
  const Icon = typeIcons[slide.type] || Clipboard;
  const iconColor = typeColors[slide.type] || 'var(--color-primary)';

  // Local checklist state
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    slide.checklist ? new Array(slide.checklist.length).fill(false) : []
  );

  // Parse content to hide corrections (they are shown only in the ExerciseTimerModal popup)
  const { exerciseContent } = useMemo(() => {
    return parseExerciseContent(slide.content);
  }, [slide.content]);

  const handleChecklistToggle = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
    onChecklistChange?.(newChecked);
  };

  return (
    <div
      className={`max-w-2xl mx-auto px-4 py-6 ${animationClass}`}
      role="article"
      aria-label={`Pratique: ${slide.title}`}
    >
      <div
        className="rounded-xl shadow-sm p-6 sm:p-8"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: 'var(--color-border-light)',
        }}
      >
        {/* Slide header with type icon */}
        <div className="flex items-start gap-4 mb-6 pb-4" style={{ borderBottomWidth: '1px', borderBottomColor: 'var(--color-border-light)' }}>
          <div
            className="p-2 rounded-lg shrink-0"
            style={{ backgroundColor: `color-mix(in srgb, ${iconColor} 15%, transparent)` }}
          >
            <Icon className="w-6 h-6" style={{ color: iconColor }} aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-medium text-[var(--color-subtext)] uppercase tracking-wider">
              {slide.type === 'brief' && 'Objectif'}
              {slide.type === 'setup' && 'Préparation'}
              {slide.type === 'step' && `Étape ${slide.slideNumber}`}
              {slide.type === 'evaluation' && 'Auto-évaluation'}
              {slide.type === 'next' && 'Prochaine action'}
            </span>
            <h2
              className="text-2xl font-bold mt-1"
              style={{ color: 'var(--color-text)' }}
            >
              {slide.title}
            </h2>
          </div>
        </div>

        {/* Slide content (without corrections - they are shown in ExerciseTimerModal popup) */}
        <div className="prose max-w-none mb-6">
          {renderMarkdownContent(exerciseContent, { skipFirstHeading: true })}
        </div>

        {/* Checklist for evaluation slides */}
        {slide.type === 'evaluation' && slide.checklist && slide.checklist.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[var(--color-border-light)]">
            <h3 className="text-sm font-medium text-[var(--color-text)] mb-4 flex items-center gap-2">
              <ListChecks className="w-4 h-4" aria-hidden="true" />
              Checklist d&apos;auto-évaluation
            </h3>
            <div className="space-y-3">
              {slide.checklist.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleChecklistToggle(index)}
                  className={`
                    w-full flex items-start gap-3 p-3 rounded-lg text-left
                    transition-all duration-200
                    ${checkedItems[index]
                      ? 'bg-[color-mix(in_srgb,var(--color-green)_10%,transparent)]'
                      : 'bg-[var(--color-surface-1)] hover:bg-[var(--color-surface-2)]'
                    }
                  `}
                  aria-pressed={checkedItems[index]}
                >
                  {checkedItems[index] ? (
                    <CheckSquare
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: 'var(--color-green)' }}
                    />
                  ) : (
                    <Square
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: 'var(--color-subtext)' }}
                    />
                  )}
                  <span
                    className={`flex-1 ${checkedItems[index] ? 'text-[var(--color-text)]' : 'text-[var(--color-text-secondary)]'}`}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>
            {/* Progress indicator */}
            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-subtext)]">
              <span>{checkedItems.filter(Boolean).length}/{slide.checklist.length} complétés</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
