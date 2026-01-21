'use client';

import { useState, useEffect, useCallback } from 'react';

interface NetworkStatus {
  isOnline: boolean;
  wasOffline: boolean;
}

export function useNetworkStatus(): NetworkStatus {
  const [isOnline, setIsOnline] = useState(true);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === 'undefined') return;

    // Set initial state
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      // Mark that we recovered from offline state
      if (!navigator.onLine) {
        setWasOffline(true);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, wasOffline };
}

// Hook for data freshness
export function useDataFreshness(lastUpdated: Date | null, maxAgeMs: number = 5 * 60 * 1000) {
  const [isStale, setIsStale] = useState(false);

  useEffect(() => {
    if (!lastUpdated) {
      setIsStale(false);
      return;
    }

    const checkStaleness = () => {
      const age = Date.now() - lastUpdated.getTime();
      setIsStale(age > maxAgeMs);
    };

    checkStaleness();
    const interval = setInterval(checkStaleness, 30000); // Check every 30s

    return () => clearInterval(interval);
  }, [lastUpdated, maxAgeMs]);

  return isStale;
}
