'use client';

import { useState } from 'react';
import { Clipboard, CheckSquare, Square, Target, Settings, ListChecks, ArrowRight } from 'lucide-react';
import type { PracticeSlide as PracticeSlideType, SlideDirection } from '@/types/slides';

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

  const handleChecklistToggle = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
    onChecklistChange?.(newChecked);
  };

  const renderInlineMarkdown = (text: string) => {
    let processed = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(
      /`(.+?)`/g,
      '<code style="background-color: var(--color-bg-tertiary); padding: 0 0.25rem; border-radius: 0.25rem; font-size: 0.875rem;">$1</code>'
    );
    return <span dangerouslySetInnerHTML={{ __html: processed }} />;
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('### ')) {
        return (
          <h3
            key={index}
            className="text-lg font-semibold mt-6 mb-3"
            style={{ color: 'var(--color-text)' }}
          >
            {line.slice(4)}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li
            key={index}
            className="ml-4 list-disc"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {renderInlineMarkdown(line.slice(2))}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <li
            key={index}
            className="ml-4 list-decimal"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {renderInlineMarkdown(line.replace(/^\d+\.\s/, ''))}
          </li>
        );
      }
      if (line.startsWith('```')) {
        return null;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p
          key={index}
          className="my-2 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {renderInlineMarkdown(line)}
        </p>
      );
    });
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

        {/* Slide content */}
        <div className="prose max-w-none mb-6">
          {renderContent(slide.content)}
        </div>

        {/* Checklist for evaluation slides */}
        {slide.type === 'evaluation' && slide.checklist && slide.checklist.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[var(--color-border-light)]">
            <h3 className="text-sm font-medium text-[var(--color-text)] mb-4 flex items-center gap-2">
              <ListChecks className="w-4 h-4" aria-hidden="true" />
              Checklist d'auto-évaluation
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
