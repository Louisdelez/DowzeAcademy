'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons';
import { renderMarkdownContent } from '@/lib/utils/markdown-renderer';
import { parseExerciseContent } from '@/lib/utils/exercise-content-parser';

interface ExerciseTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onValidate: () => void;
  durationSeconds: number;
  exerciseSummary: string;
  isValidating?: boolean;
  isAdminMode?: boolean;
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
  isAdminMode = false,
}: ExerciseTimerModalProps) {
  const [timeRemaining, setTimeRemaining] = useState(durationSeconds);
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // Step 2: Show corrections in a separate modal
  const [showCorrectionsModal, setShowCorrectionsModal] = useState(false);

  const timerComplete = timeRemaining <= 0;
  // Admin mode bypasses timer requirement
  const canValidate = isAdminMode || (timerComplete && isChecked);

  // Parse exercise content to separate corrections
  const { exerciseContent, correctionContent, hasCorrections } = useMemo(() => {
    return parseExerciseContent(exerciseSummary);
  }, [exerciseSummary]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeRemaining(durationSeconds);
      setIsChecked(false);
      setIsExpanded(false);
      setShowCorrectionsModal(false);
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
    // Checkbox available after timer completes OR in admin mode
    if (isAdminMode || timerComplete) {
      setIsChecked((prev) => !prev);
    }
  }, [timerComplete, isAdminMode]);

  // When clicking "Valider": if there are corrections, show them in a new modal
  // Otherwise, directly validate
  const handleValidateClick = useCallback(() => {
    if (!canValidate) return;

    if (hasCorrections) {
      // Show corrections modal (replaces the timer modal)
      setShowCorrectionsModal(true);
    } else {
      // No corrections: directly validate
      onValidate();
    }
  }, [canValidate, hasCorrections, onValidate]);

  // Handle "Terminer" click in corrections modal
  const handleFinish = useCallback(() => {
    onValidate();
  }, [onValidate]);

  // Extract preview - show only first 3 non-empty lines as preview (from exercise content only)
  const { previewContent, fullContent, hasMore } = useMemo(() => {
    if (!exerciseContent) {
      return {
        previewContent: 'Aucune instruction disponible.',
        fullContent: '',
        hasMore: false
      };
    }

    const lines = exerciseContent.trim().split('\n');
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
      fullContent: exerciseContent,
      hasMore: totalNonEmptyLines > maxPreviewLines,
    };
  }, [exerciseContent]);

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
        onClick={handleValidateClick}
        disabled={!canValidate || isValidating}
      >
        {isValidating ? 'Validation...' : 'Valider'}
      </Button>
    </>
  );

  const correctionsFooterContent = (
    <>
      <Button
        onClick={handleFinish}
        disabled={isValidating}
      >
        {isValidating ? 'Validation...' : 'Terminer'}
      </Button>
    </>
  );

  // Show corrections modal instead of timer modal when corrections step is active
  if (showCorrectionsModal && correctionContent) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Corrections de l'exercice"
        size="lg"
        closeOnOverlayClick={false}
        closeOnEscape={false}
        footer={correctionsFooterContent}
      >
        <div className="space-y-4">
          {/* Success message */}
          <div
            className="flex items-center gap-3 p-4 rounded-lg"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-green) 10%, transparent)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--color-green)',
            }}
          >
            <CheckCircle size={24} style={{ color: 'var(--color-green)' }} />
            <span className="font-medium" style={{ color: 'var(--color-green)' }}>
              Exercice terminé ! Voici les corrections.
            </span>
          </div>

          {/* Full exercise content with corrections */}
          <div
            className="rounded-lg p-4"
            style={{
              backgroundColor: 'var(--color-bg-tertiary)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--color-border-light)',
            }}
          >
            <div className="prose max-w-none">
              {renderMarkdownContent(exerciseSummary)}
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <>
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

          {/* Exercise Summary (without corrections) */}
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

          {/* Completion Checkbox - available after timer completes OR in admin mode */}
          <button
            type="button"
            onClick={handleCheckboxClick}
            disabled={!timerComplete && !isAdminMode}
            className={`
              w-full flex items-center gap-3 p-4 rounded-lg text-left
              transition-all duration-200
              ${(!timerComplete && !isAdminMode) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}
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
                  : (timerComplete || isAdminMode)
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
              J&apos;ai terminé l&apos;exercice
            </span>
          </button>

          {/* Info about corrections (shown when can validate) */}
          {hasCorrections && canValidate && (
            <p
              className="text-xs text-center"
              style={{ color: 'var(--color-subtext)' }}
            >
              Cliquez sur &quot;Valider&quot; pour voir les corrections.
            </p>
          )}
        </div>
      </Modal>
    </>
  );
}
