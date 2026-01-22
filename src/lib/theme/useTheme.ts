'use client';

import { useCallback, useRef, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useTheme as useThemeContext } from './ThemeProvider';
import type { ThemeName } from './catppuccin';

const DEBOUNCE_MS = 300;

/**
 * Extended theme hook with database synchronization
 * - Debounces API calls (300ms)
 * - Syncs with DB for authenticated users
 * - Falls back to localStorage for guests
 */
export function useThemeWithSync() {
  const { theme, themeName, setTheme: setThemeContext } = useThemeContext();
  const { data: session, status } = useSession();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const lastSyncedTheme = useRef<ThemeName | null>(null);

  // Sync theme to database with debounce
  const syncToDatabase = useCallback(
    async (name: ThemeName) => {
      if (status !== 'authenticated' || !session?.user) {
        return;
      }

      // Don't sync if already synced this value
      if (lastSyncedTheme.current === name) {
        return;
      }

      try {
        const response = await fetch('/api/user/preferences', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ themePreference: name }),
        });

        if (response.ok) {
          lastSyncedTheme.current = name;
        } else {
          console.error('Failed to sync theme preference');
        }
      } catch (error) {
        console.error('Error syncing theme preference:', error);
      }
    },
    [session, status]
  );

  // Set theme with debounced database sync
  const setTheme = useCallback(
    (name: ThemeName) => {
      // Apply theme immediately (UI update)
      setThemeContext(name);

      // Clear existing debounce timer
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      // Debounce database sync
      debounceRef.current = setTimeout(() => {
        syncToDatabase(name);
      }, DEBOUNCE_MS);
    },
    [setThemeContext, syncToDatabase]
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  // Fetch user preference on session change
  useEffect(() => {
    const fetchUserPreference = async () => {
      if (status !== 'authenticated') {
        return;
      }

      try {
        const response = await fetch('/api/user/preferences');
        if (response.ok) {
          const data = await response.json();
          if (data.themePreference && data.themePreference !== themeName) {
            // DB preference takes priority over localStorage
            setThemeContext(data.themePreference as ThemeName);
            lastSyncedTheme.current = data.themePreference;
          } else {
            lastSyncedTheme.current = themeName;
          }
        }
      } catch (error) {
        console.error('Error fetching user preferences:', error);
      }
    };

    fetchUserPreference();
  }, [status, themeName, setThemeContext]);

  return {
    theme,
    themeName,
    setTheme,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
  };
}
