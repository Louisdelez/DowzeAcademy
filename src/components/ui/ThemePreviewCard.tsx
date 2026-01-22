'use client';

import { themes, type ThemeName } from '@/lib/theme/catppuccin';
import { Icon } from '@/components/icons';

interface ThemePreviewCardProps {
  themeName: ThemeName;
  isSelected: boolean;
  onSelect: () => void;
}

export function ThemePreviewCard({
  themeName,
  isSelected,
  onSelect,
}: ThemePreviewCardProps) {
  const theme = themes[themeName];
  const { colors } = theme;

  const labels: Record<ThemeName, string> = {
    latte: 'Latte',
    frappe: 'Frappé',
    macchiato: 'Macchiato',
    mocha: 'Mocha',
  };

  return (
    <button
      onClick={onSelect}
      className={`
        relative flex flex-col gap-2 p-4 rounded-xl border-2 transition-all
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${isSelected
          ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)] ring-opacity-20'
          : 'border-[var(--color-border)] hover:border-[var(--color-text-muted)]'
        }
      `}
      style={{
        backgroundColor: 'var(--color-bg-tertiary)',
        outlineColor: 'var(--color-primary)',
      }}
      aria-pressed={isSelected}
      aria-label={`Sélectionner le thème ${labels[themeName]}`}
    >
      {/* Theme preview mockup */}
      <div
        className="w-full aspect-video rounded-lg overflow-hidden border"
        style={{
          backgroundColor: colors.base,
          borderColor: colors.surface1,
        }}
      >
        {/* Mini header */}
        <div
          className="h-3 flex items-center px-2 gap-1"
          style={{ backgroundColor: colors.mantle }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.red }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.yellow }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.green }} />
        </div>

        {/* Mini content */}
        <div className="p-2 flex flex-col gap-1.5">
          {/* Title bar */}
          <div
            className="h-2 w-3/4 rounded"
            style={{ backgroundColor: colors.text }}
          />

          {/* Content lines */}
          <div className="flex gap-1.5">
            <div
              className="h-6 w-8 rounded"
              style={{ backgroundColor: colors.surface0 }}
            />
            <div className="flex-1 flex flex-col gap-1">
              <div
                className="h-1.5 w-full rounded"
                style={{ backgroundColor: colors.subtext0 }}
              />
              <div
                className="h-1.5 w-2/3 rounded"
                style={{ backgroundColor: colors.overlay0 }}
              />
            </div>
          </div>

          {/* Action button */}
          <div
            className="h-3 w-1/2 rounded mt-1 self-end"
            style={{ backgroundColor: colors.mauve }}
          />
        </div>
      </div>

      {/* Theme info */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--color-text)' }}
          >
            {labels[themeName]}
          </span>
          <span
            className="text-xs"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {theme.isDark ? 'Sombre' : 'Clair'}
          </span>
        </div>

        {/* Selected checkmark */}
        {isSelected && (
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Icon name="check" size={16} color="current" className="text-[var(--color-bg)]" />
          </div>
        )}
      </div>

      {/* Color palette preview */}
      <div className="flex gap-1 w-full">
        {[colors.red, colors.peach, colors.yellow, colors.green, colors.blue, colors.mauve].map(
          (color, i) => (
            <div
              key={i}
              className="flex-1 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
          )
        )}
      </div>
    </button>
  );
}
