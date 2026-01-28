'use client';

import Link from 'next/link';
import { ModuleStatusBadge } from '@/components/progression/ModuleStatusBadge';
import { useAdminMode } from '@/lib/hooks/useAdminMode';
import type { Module, ModuleProgressStatus } from '@/types/models';

interface ModuleCardProps {
  module: Module;
  status: ModuleProgressStatus;
  disabled?: boolean;
}

export function ModuleCard({ module, status, disabled }: ModuleCardProps) {
  const { isGameModeEnabled } = useAdminMode();
  // Admin mode bypasses lock
  const isLocked = status === 'LOCKED' && !isGameModeEnabled;
  const content = (
    <div
      className={`rounded-xl p-4 transition-all shadow-sm ${
        isLocked ? 'opacity-50' : 'hover:shadow-md cursor-pointer'
      }`}
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3
            className="font-semibold truncate"
            style={{ color: 'var(--color-text)' }}
          >
            {module.name}
          </h3>
          {module.description && (
            <p
              className="text-sm mt-1 line-clamp-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {module.description}
            </p>
          )}
          {isLocked && (
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
              Complétez les modules précédents pour débloquer
            </p>
          )}
        </div>
        <ModuleStatusBadge status={status} />
      </div>
    </div>
  );

  if (isLocked || disabled) {
    return <div className="cursor-not-allowed" data-testid="module-card">{content}</div>;
  }

  return <Link href={`/module/${module.id}`} data-testid="module-card">{content}</Link>;
}
