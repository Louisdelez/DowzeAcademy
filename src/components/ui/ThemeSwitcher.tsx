'use client';

import { useTheme } from '@/lib/theme/ThemeProvider';
import { themeList, type ThemeName } from '@/lib/theme/catppuccin';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className = '' }: ThemeSwitcherProps) {
  const { themeName, setTheme } = useTheme();

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <label className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
        Thème
      </label>
      <div className="grid grid-cols-2 gap-2">
        {themeList.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setTheme(theme.name as ThemeName)}
            className={`
              relative flex items-center gap-3 p-3 rounded-lg border-2 transition-all
              ${themeName === theme.name
                ? 'border-[var(--color-primary)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-border-light)]'
              }
            `}
            style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
          >
            {/* Theme color preview */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: theme.colors.base }}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: theme.colors.blue }}
              />
            </div>

            <div className="flex flex-col items-start">
              <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                {theme.label}
              </span>
              <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {theme.isDark ? 'Sombre' : 'Clair'}
              </span>
            </div>

            {/* Selected indicator */}
            {themeName === theme.name && (
              <div
                className="absolute top-2 right-2 w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
