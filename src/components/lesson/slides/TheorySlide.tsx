'use client';

import React from 'react';
import type { TheorySlide as TheorySlideType, SlideDirection } from '@/types/slides';
import { BookOpen, Lightbulb, Code, AlertTriangle, CheckCircle } from 'lucide-react';
import { renderMarkdownContent } from '@/lib/utils/markdown-renderer';

interface TheorySlideProps {
  slide: TheorySlideType;
  direction: SlideDirection;
  isReviewMode?: boolean;
  onReturnToQuiz?: () => void;
}

const typeIcons = {
  concept: BookOpen,
  why: Lightbulb,
  example: Code,
  mistakes: AlertTriangle,
  recap: CheckCircle,
};

const typeColors = {
  concept: 'var(--color-primary)',
  why: 'var(--color-yellow)',
  example: 'var(--color-teal)',
  mistakes: 'var(--color-red)',
  recap: 'var(--color-green)',
};

export function TheorySlide({ slide, direction, isReviewMode, onReturnToQuiz }: TheorySlideProps) {
  const Icon = typeIcons[slide.type] || BookOpen;
  const iconColor = typeColors[slide.type] || 'var(--color-primary)';
  const animationClass = direction === 'forward' ? 'slide-enter-forward' : 'slide-enter-backward';

  return (
    <div
      className={`max-w-2xl mx-auto px-4 py-6 ${animationClass}`}
      role="article"
      aria-label={`Slide ${slide.slideNumber}: ${slide.title}`}
    >
      {/* Review mode banner */}
      {isReviewMode && onReturnToQuiz && (
        <div
          className="mb-4 p-3 rounded-lg flex items-center justify-between"
          style={{ backgroundColor: 'var(--color-surface-1)' }}
        >
          <span className="text-sm text-[var(--color-subtext)]">
            Mode révision - Relisez cette section avant de retourner au quiz
          </span>
          <button
            type="button"
            onClick={onReturnToQuiz}
            className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[var(--color-primary)] text-[var(--color-bg)] hover:opacity-90 transition-opacity"
          >
            Retour au quiz
          </button>
        </div>
      )}

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
          <h2
            className="text-2xl font-bold"
            style={{ color: 'var(--color-text)' }}
          >
            {slide.title}
          </h2>
        </div>

        {/* Slide content */}
        <div className="prose max-w-none">
          {renderMarkdownContent(slide.content)}
        </div>
      </div>
    </div>
  );
}
