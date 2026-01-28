'use client';

import React from 'react';
import type { TheorySlide as TheorySlideType, SlideDirection } from '@/types/slides';
import { BookOpen, Lightbulb, Code, AlertTriangle, CheckCircle } from 'lucide-react';

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
  const renderInlineMarkdown = (text: string) => {
    // Bold
    let processed = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Inline code - using CSS variable
    processed = processed.replace(
      /`(.+?)`/g,
      '<code style="background-color: var(--color-bg-tertiary); padding: 0 0.25rem; border-radius: 0.25rem; font-size: 0.875rem;">$1</code>'
    );
    return <span dangerouslySetInnerHTML={{ __html: processed }} />;
  };

  const renderTable = (tableLines: string[], startIndex: number) => {
    // Parse table: header row, separator row, data rows
    const rows = tableLines.map(line =>
      line.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim())
    );

    if (rows.length < 2) return null;

    const headerRow = rows[0];
    // Skip separator row (index 1) which contains ---
    const dataRows = rows.slice(2);

    return (
      <div key={startIndex} className="my-4 overflow-x-auto">
        <table className="min-w-full border-collapse" style={{ borderColor: 'var(--color-border-light)' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
              {headerRow.map((cell, i) => (
                <th
                  key={i}
                  className="px-4 py-2 text-left text-sm font-semibold"
                  style={{
                    color: 'var(--color-text)',
                    borderWidth: '1px',
                    borderColor: 'var(--color-border-light)'
                  }}
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-2 text-sm"
                    style={{
                      color: 'var(--color-text-secondary)',
                      borderWidth: '1px',
                      borderColor: 'var(--color-border-light)'
                    }}
                  >
                    {renderInlineMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Horizontal rule / separator
      if (line.trim() === '---' || line.trim() === '***' || line.trim() === '___') {
        elements.push(
          <hr
            key={i}
            className="my-6"
            style={{ borderColor: 'var(--color-border-light)' }}
          />
        );
        i++;
        continue;
      }

      // Table detection: starts with | and next line is separator |---|
      if (line.startsWith('|') && i + 1 < lines.length && lines[i + 1].includes('|') && lines[i + 1].includes('-')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].startsWith('|')) {
          tableLines.push(lines[i]);
          i++;
        }
        const table = renderTable(tableLines, elements.length);
        if (table) elements.push(table);
        continue;
      }

      // Subheadings (### within slides)
      if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={i}
            className="text-lg font-semibold mt-6 mb-3"
            style={{ color: 'var(--color-text)' }}
          >
            {line.slice(4)}
          </h3>
        );
        i++;
        continue;
      }

      // Lists
      if (line.startsWith('- ')) {
        elements.push(
          <li
            key={i}
            className="ml-4 list-disc"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {renderInlineMarkdown(line.slice(2))}
          </li>
        );
        i++;
        continue;
      }

      if (/^\d+\.\s/.test(line)) {
        elements.push(
          <li
            key={i}
            className="ml-4 list-decimal"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {renderInlineMarkdown(line.replace(/^\d+\.\s/, ''))}
          </li>
        );
        i++;
        continue;
      }

      // Code blocks - render as preformatted text
      if (line.startsWith('```')) {
        const codeLines: string[] = [];
        i++; // Skip opening ```
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // Skip closing ```

        if (codeLines.length > 0) {
          elements.push(
            <pre
              key={`code-${elements.length}`}
              className="my-4 p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                color: 'var(--color-text-secondary)',
                borderWidth: '1px',
                borderColor: 'var(--color-border-light)',
              }}
            >
              <code>{codeLines.join('\n')}</code>
            </pre>
          );
        }
        continue;
      }

      // Details/summary (collapsible sections)
      if (line.startsWith('<details>')) {
        const detailsLines: string[] = [];
        let summaryText = 'Détails';
        i++; // Skip <details>
        while (i < lines.length && !lines[i].includes('</details>')) {
          if (lines[i].includes('<summary>')) {
            const match = lines[i].match(/<summary>(.+?)<\/summary>/);
            if (match) summaryText = match[1];
          } else {
            detailsLines.push(lines[i]);
          }
          i++;
        }
        i++; // Skip </details>

        elements.push(
          <details
            key={`details-${elements.length}`}
            className="my-4 rounded-lg overflow-hidden"
            style={{
              backgroundColor: 'var(--color-bg-tertiary)',
              borderWidth: '1px',
              borderColor: 'var(--color-border-light)',
            }}
          >
            <summary
              className="px-4 py-3 cursor-pointer font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              {summaryText}
            </summary>
            <div className="px-4 py-3" style={{ borderTopWidth: '1px', borderTopColor: 'var(--color-border-light)' }}>
              {detailsLines.filter(l => l.trim()).map((detailLine, idx) => (
                <p key={idx} className="my-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {renderInlineMarkdown(detailLine)}
                </p>
              ))}
            </div>
          </details>
        );
        continue;
      }

      // Empty lines
      if (line.trim() === '') {
        elements.push(<br key={i} />);
        i++;
        continue;
      }

      // Regular paragraphs
      elements.push(
        <p
          key={i}
          className="my-2 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {renderInlineMarkdown(line)}
        </p>
      );
      i++;
    }

    return elements;
  };

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
          {renderContent(slide.content)}
        </div>
      </div>
    </div>
  );
}
