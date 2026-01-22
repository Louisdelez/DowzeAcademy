'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { themes, type ThemeName, type Theme } from './catppuccin';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const THEME_STORAGE_KEY = 'dowze-academy-theme';
const VALID_THEMES: ThemeName[] = ['latte', 'frappe', 'macchiato', 'mocha'];

function isValidTheme(value: string | null): value is ThemeName {
  return value !== null && VALID_THEMES.includes(value as ThemeName);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('mocha');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  // Note: DB sync is handled by useThemeWithSync hook when user is authenticated
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isValidTheme(stored)) {
      setThemeName(stored);
    }
    setMounted(true);
  }, []);

  // Apply data-theme attribute when theme changes
  // CSS variables are handled by theme.css via :root[data-theme="..."] selectors
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const theme = themes[themeName];

    // Set data-theme attribute (CSS variables are in theme.css)
    root.setAttribute('data-theme', themeName);

    // Set dark mode class for components that need it
    if (theme.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Store preference in localStorage (fallback for guests)
    localStorage.setItem(THEME_STORAGE_KEY, themeName);
  }, [themeName, mounted]);

  const setTheme = (name: ThemeName) => {
    if (isValidTheme(name)) {
      setThemeName(name);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[themeName],
        themeName,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
