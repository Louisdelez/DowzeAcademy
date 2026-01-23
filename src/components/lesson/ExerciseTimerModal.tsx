'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Modal, ModalFooter } from '@/components/ui/Modal';
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

  const timerComplete = timeRemaining <= 0;
  const canValidate = timerComplete && isChecked;

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeRemaining(durationSeconds);
      setIsChecked(false);
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

  // Extract first part of exercise summary for recap
  const exerciseRecap = useMemo(() => {
    if (!exerciseSummary) return 'Aucune instruction disponible.';
    // Take first 500 characters or until first major section break
    const lines = exerciseSummary.split('\n').slice(0, 15);
    const recap = lines.join('\n').slice(0, 600);
    return recap + (exerciseSummary.length > 600 ? '...' : '');
  }, [exerciseSummary]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Exercice pratique"
      size="lg"
      closeOnOverlayClick={false}
      closeOnEscape={false}
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
            className="text-sm font-semibold mb-2 uppercase tracking-wide"
            style={{ color: 'var(--color-subtext)' }}
          >
            Rappel de l&apos;exercice
          </h3>
          <div
            className="text-sm leading-relaxed whitespace-pre-wrap"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {exerciseRecap}
          </div>
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

      <ModalFooter>
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
      </ModalFooter>
    </Modal>
  );
}
