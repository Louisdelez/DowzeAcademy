'use client';

import { useAdminMode } from '@/lib/hooks/useAdminMode';
import { Gamepad2 } from 'lucide-react';

export function AdminModeToggle() {
  const { isAdmin, isGameModeEnabled, isLoading, toggleGameMode } = useAdminMode();

  // Don't render if not admin or still loading
  if (isLoading || !isAdmin) {
    return null;
  }

  return (
    <button
      onClick={toggleGameMode}
      className={`
        fixed bottom-24 right-4 z-50
        w-14 h-14 rounded-full
        flex items-center justify-center
        shadow-lg transition-all duration-300
        hover:scale-110 active:scale-95
        ${isGameModeEnabled
          ? 'bg-[var(--color-green)] text-[var(--color-base)]'
          : 'bg-[var(--color-surface-1)] text-[var(--color-subtext)]'
        }
      `}
      style={{
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: isGameModeEnabled
          ? 'var(--color-green)'
          : 'var(--color-border)',
        boxShadow: isGameModeEnabled
          ? '0 0 20px var(--color-green)'
          : '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
      title={isGameModeEnabled ? 'Désactiver le mode Admin' : 'Activer le mode Admin'}
      aria-label={isGameModeEnabled ? 'Désactiver le mode Admin' : 'Activer le mode Admin'}
    >
      <Gamepad2 size={24} />
    </button>
  );
}
