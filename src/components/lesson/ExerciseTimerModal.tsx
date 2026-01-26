'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons';

interface ExerciseTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onValidate: () => void;
  durationSeconds: number;
  exerciseSummary: string;
  isValidating?: boolean;
}

// Process inline markdown (bold, italic, code, links)
function processInlineMarkdown(text: string): string {
  let processed = text;
  // Bold **text** or __text__
  processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  processed = processed.replace(/__(.+?)__/g, '<strong>$1</strong>');
  // Italic *text* or _text_ (but not inside words)
  processed = processed.replace(/(?<!\w)\*([^*]+)\*(?!\w)/g, '<em>$1</em>');
  processed = processed.replace(/(?<!\w)_([^_]+)_(?!\w)/g, '<em>$1</em>');
  // Inline code `text`
  processed = processed.replace(/`([^`]+)`/g, '<code style="background-color: var(--color-bg-tertiary); padding: 0.1em 0.3em; border-radius: 3px; font-size: 0.9em;">$1</code>');
  return processed;
}

// Render markdown content properly
function renderMarkdownContent(content: string) {
  return content.split('\n').map((line, index) => {
    // Skip empty lines at the start
    if (index === 0 && line.trim() === '') return null;

    // H2 headings (with or without space after ##)
    if (line.startsWith('##') && !line.startsWith('###')) {
      const text = line.replace(/^##\s*/, '');
      return (
        <h3
          key={index}
          className="text-base font-semibold mt-4 mb-2 first:mt-0"
          style={{ color: 'var(--color-text)' }}
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(text) }}
        />
      );
    }

    // H3 headings (with or without space after ###)
    if (line.startsWith('###')) {
      const text = line.replace(/^###\s*/, '');
      return (
        <h4
          key={index}
          className="text-sm font-semibold mt-3 mb-1"
          style={{ color: 'var(--color-text)' }}
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(text) }}
        />
      );
    }

    // Bullet lists (with * or - at start of line followed by space)
    if (line.match(/^[\-\*]\s/)) {
      const text = line.slice(2);
      return (
        <li
          key={index}
          className="ml-4 list-disc text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(text) }}
        />
      );
    }

    // Numbered lists
    if (/^\d+\.\s/.test(line)) {
      const text = line.replace(/^\d+\.\s/, '');
      return (
        <li
          key={index}
          className="ml-4 list-decimal text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(text) }}
        />
      );
    }

    // Empty lines
    if (line.trim() === '') {
      return <div key={index} className="h-2" />;
    }

    // Regular paragraphs
    return (
      <p
        key={index}
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-text-secondary)' }}
        dangerouslySetInnerHTML={{ __html: processInlineMarkdown(line) }}
      />
    );
  });
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function ExerciseTimerModal({
  isOpen,
  onClose,
  onValidate,
  durationSeconds,
  exerciseSummary,
  isValidating = false,
}: ExerciseTimerModalProps) {
  const [timeRemaining, setTimeRemaining] = useState(durationSeconds);
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const timerComplete = timeRemaining <= 0;
  const canValidate = timerComplete && isChecked;

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeRemaining(durationSeconds);
      setIsChecked(false);
      setIsExpanded(false);
    }
  }, [isOpen, durationSeconds]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, timeRemaining]);

  const handleCheckboxClick = useCallback(() => {
    if (timerComplete) {
      setIsChecked((prev) => !prev);
    }
  }, [timerComplete]);

  const handleValidate = useCallback(() => {
    if (canValidate) {
      onValidate();
    }
  }, [canValidate, onValidate]);

  // Extract preview - show only first 3 non-empty lines as preview
  const { previewContent, fullContent, hasMore } = useMemo(() => {
    if (!exerciseSummary) {
      return {
        previewContent: 'Aucune instruction disponible.',
        fullContent: '',
        hasMore: false
      };
    }

    const lines = exerciseSummary.trim().split('\n');
    const previewLines: string[] = [];
    let nonEmptyLineCount = 0;
    const maxPreviewLines = 3;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Count non-empty lines for preview limit
      if (line.trim() !== '') {
        nonEmptyLineCount++;
      }

      // Stop after maxPreviewLines non-empty lines
      if (nonEmptyLineCount > maxPreviewLines) {
        break;
      }

      previewLines.push(line);
    }

    const totalNonEmptyLines = lines.filter(l => l.trim() !== '').length;

    return {
      previewContent: previewLines.join('\n'),
      fullContent: exerciseSummary,
      hasMore: totalNonEmptyLines > maxPreviewLines,
    };
  }, [exerciseSummary]);

  const footerContent = (
    <>
      <Button
        variant="outline"
        onClick={onClose}
        disabled={isValidating}
      >
        Annuler
      </Button>
      <Button
        onClick={handleValidate}
        disabled={!canValidate || isValidating}
      >
        {isValidating ? 'Validation...' : 'Valider'}
      </Button>
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Exercice pratique"
      size="lg"
      closeOnOverlayClick={false}
      closeOnEscape={false}
      footer={footerContent}
    >
      <div className="space-y-6">
        {/* Timer Display */}
        <div className="text-center">
          <div
            className={`
              inline-flex items-center justify-center gap-3
              px-8 py-4 rounded-xl text-4xl font-mono font-bold
              transition-colors duration-300
            `}
            style={{
              backgroundColor: timerComplete
                ? 'color-mix(in srgb, var(--color-green) 15%, transparent)'
                : 'var(--color-surface-1)',
              color: timerComplete ? 'var(--color-green)' : 'var(--color-text)',
            }}
          >
            <Icon
              name="clock"
              size={32}
              color={timerComplete ? 'green' : 'muted'}
            />
            {formatTime(timeRemaining)}
          </div>
          {!timerComplete && (
            <p
              className="mt-2 text-sm"
              style={{ color: 'var(--color-subtext)' }}
            >
              Temps restant avant de pouvoir valider
            </p>
          )}
          {timerComplete && (
            <p
              className="mt-2 text-sm font-medium"
              style={{ color: 'var(--color-green)' }}
            >
              Vous pouvez maintenant valider l&apos;exercice
            </p>
          )}
        </div>

        {/* Exercise Summary */}
        <div
          className="rounded-lg p-4"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'var(--color-border-light)',
          }}
        >
          <h3
            className="text-sm font-semibold mb-3 uppercase tracking-wide"
            style={{ color: 'var(--color-subtext)' }}
          >
            Rappel de l&apos;exercice
          </h3>
          <div className="space-y-1">
            {renderMarkdownContent(isExpanded ? fullContent : previewContent)}
          </div>
          {hasMore && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--color-primary)' }}
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={16} />
                  Réduire
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Lire la suite
                </>
              )}
            </button>
          )}
        </div>

        {/* Advertising Space */}
        <div
          className="rounded-lg p-4 text-center flex items-center justify-center"
          style={{
            backgroundColor: 'var(--color-surface-1)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'var(--color-border)',
            minHeight: '100px',
          }}
        >
          <p
            className="text-xs uppercase tracking-wider"
            style={{ color: 'var(--color-subtext)' }}
          >
            Espace publicitaire
          </p>
        </div>

        {/* Completion Checkbox */}
        <button
          type="button"
          onClick={handleCheckboxClick}
          disabled={!timerComplete}
          className={`
            w-full flex items-center gap-3 p-4 rounded-lg text-left
            transition-all duration-200
            ${!timerComplete ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}
          `}
          style={{
            backgroundColor: isChecked
              ? 'color-mix(in srgb, var(--color-green) 10%, transparent)'
              : 'var(--color-surface-1)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: isChecked ? 'var(--color-green)' : 'var(--color-border)',
          }}
        >
          <div
            className={`
              w-6 h-6 rounded border-2 flex items-center justify-center shrink-0
              transition-colors duration-200
            `}
            style={{
              borderColor: isChecked
                ? 'var(--color-green)'
                : timerComplete
                  ? 'var(--color-subtext)'
                  : 'var(--color-border)',
              backgroundColor: isChecked ? 'var(--color-green)' : 'transparent',
            }}
          >
            {isChecked && (
              <Icon name="check" size={16} color="text" />
            )}
          </div>
          <span
            className="flex-1 font-medium"
            style={{
              color: isChecked ? 'var(--color-text)' : 'var(--color-text-secondary)',
            }}
          >
            J&apos;ai termin&eacute; l&apos;exercice
          </span>
        </button>
      </div>
    </Modal>
  );
}
