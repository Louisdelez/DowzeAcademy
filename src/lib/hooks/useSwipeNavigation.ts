'use client';

import { useEffect, useRef, useCallback } from 'react';

interface UseSwipeNavigationOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  enabled?: boolean;
  threshold?: number;
}

/**
 * Hook to handle touch swipe gestures for mobile navigation.
 * Swipe left = next, Swipe right = previous
 */
export function useSwipeNavigation({
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
  threshold = 50,
}: UseSwipeNavigationOptions) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!enabled) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, [enabled]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!enabled || touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Only trigger if horizontal swipe is more significant than vertical
    // This prevents accidental swipes while scrolling
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
      if (deltaX < 0 && onSwipeLeft) {
        // Swiped left (next)
        onSwipeLeft();
      } else if (deltaX > 0 && onSwipeRight) {
        // Swiped right (previous)
        onSwipeRight();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  }, [enabled, threshold, onSwipeLeft, onSwipeRight]);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, handleTouchStart, handleTouchEnd]);
}
