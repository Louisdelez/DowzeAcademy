'use client';

import { useEffect, useCallback } from 'react';

interface UseKeyboardNavigationOptions {
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  onEscape?: () => void;
  enabled?: boolean;
}

/**
 * Hook for keyboard navigation in slides
 * - ArrowRight: Next slide
 * - ArrowLeft: Previous slide
 * - Enter: Submit / Continue
 * - Escape: Close feedback panel
 */
export function useKeyboardNavigation({
  onNext,
  onPrevious,
  onSubmit,
  onEscape,
  enabled = true,
}: UseKeyboardNavigationOptions) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      // Don't handle if user is typing in an input field
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          onPrevious();
          break;
        case 'Enter':
          event.preventDefault();
          onSubmit();
          break;
        case 'Escape':
          if (onEscape) {
            event.preventDefault();
            onEscape();
          }
          break;
      }
    },
    [enabled, onNext, onPrevious, onSubmit, onEscape]
  );

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, handleKeyDown]);
}
