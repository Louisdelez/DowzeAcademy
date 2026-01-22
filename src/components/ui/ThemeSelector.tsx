'use client';

import { ThemePreviewCard } from './ThemePreviewCard';
import { useThemeWithSync } from '@/lib/theme/useTheme';
import { Icon } from '@/components/icons';
import type { ThemeName } from '@/lib/theme/catppuccin';

interface ThemeSelectorProps {
  className?: string;
}

const THEME_ORDER: ThemeName[] = ['latte', 'frappe', 'macchiato', 'mocha'];

export function ThemeSelector({ className = '' }: ThemeSelectorProps) {
  const { themeName, setTheme, isAuthenticated, isLoading } = useThemeWithSync();

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="text-sm font-medium"
            style={{ color: 'var(--color-text)' }}
          >
            Choisir un thème
          </h3>
          <p
            className="text-xs mt-0.5"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {isLoading
              ? 'Chargement...'
              : isAuthenticated
              ? 'Synchronisé avec votre compte'
              : 'Sauvegardé localement'}
          </p>
        </div>

        {/* Sync status indicator */}
        {isAuthenticated && !isLoading && (
          <div
            className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-success) 15%, transparent)',
              color: 'var(--color-success)',
            }}
          >
            <Icon name="check" size={12} color="current" />
            Synchronisé
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {THEME_ORDER.map((name) => (
          <ThemePreviewCard
            key={name}
            themeName={name}
            isSelected={themeName === name}
            onSelect={() => setTheme(name)}
          />
        ))}
      </div>

      {!isAuthenticated && !isLoading && (
        <p
          className="text-xs text-center"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Connectez-vous pour synchroniser votre thème sur tous vos appareils
        </p>
      )}
    </div>
  );
}
