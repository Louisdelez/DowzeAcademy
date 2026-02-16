'use client';

import Link from 'next/link';
import { Lock, CheckCircle, PlayCircle, Circle } from 'lucide-react';
import { ProgressStats as ProgressStatsComponent } from '@/components/progression/ProgressStats';
import { useAdminMode } from '@/lib/hooks/useAdminMode';
import type { Discipline } from '@/types/models';
import type { ProgressStats } from '@/types/models';

export type DisciplineStatus = 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED';

interface DisciplineCardProps {
  discipline: Discipline;
  progress?: ProgressStats;
  status?: DisciplineStatus;
}

function StatusIcon({ status }: { status: DisciplineStatus }) {
  switch (status) {
    case 'COMPLETED':
      return <CheckCircle className="w-5 h-5" style={{ color: 'var(--ctp-green)' }} />;
    case 'IN_PROGRESS':
      return <PlayCircle className="w-5 h-5" style={{ color: 'var(--ctp-blue)' }} />;
    case 'AVAILABLE':
      return <Circle className="w-5 h-5" style={{ color: 'var(--ctp-text)' }} />;
    case 'LOCKED':
    default:
      return <Lock className="w-5 h-5" style={{ color: 'var(--ctp-overlay0)' }} />;
  }
}

function StatusBadge({ status }: { status: DisciplineStatus }) {
  const labels: Record<DisciplineStatus, string> = {
    COMPLETED: 'Terminé',
    IN_PROGRESS: 'En cours',
    AVAILABLE: 'Disponible',
    LOCKED: 'Verrouillé',
  };

  const colors: Record<DisciplineStatus, string> = {
    COMPLETED: 'var(--ctp-green)',
    IN_PROGRESS: 'var(--ctp-blue)',
    AVAILABLE: 'var(--ctp-text)',
    LOCKED: 'var(--ctp-overlay0)',
  };

  return (
    <div className="flex items-center gap-2">
      <StatusIcon status={status} />
      <span className="text-sm font-medium" style={{ color: colors[status] }}>
        {labels[status]}
      </span>
    </div>
  );
}

export function DisciplineCard({ discipline, progress, status = 'AVAILABLE' }: DisciplineCardProps) {
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
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3
            className="font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            {discipline.name}
          </h3>
          {discipline.description && (
            <p
              className="text-sm mt-1 line-clamp-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {discipline.description}
            </p>
          )}
          {isLocked && (
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
              Complétez le chapitre précédent pour débloquer
            </p>
          )}
          {progress && (
            <div className="mt-3">
              <ProgressStatsComponent stats={progress} size="sm" />
            </div>
          )}
        </div>
        <StatusBadge status={status} />
      </div>
    </div>
  );

  if (isLocked) {
    return <div className="cursor-not-allowed" data-testid="discipline-card">{content}</div>;
  }

  return <Link href={`/discipline/${discipline.id}`} data-testid="discipline-card">{content}</Link>;
}
