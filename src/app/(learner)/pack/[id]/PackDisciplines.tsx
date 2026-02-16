'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { DisciplineCard, type DisciplineStatus } from '@/components/cards/DisciplineCard';
import { ProgressStats } from '@/components/progression/ProgressStats';
import { StalenessIndicator } from '@/components/connectivity/StalenessIndicator';
import type { Discipline, ProgressStats as ProgressStatsType } from '@/types/models';

interface PackDisciplinesProps {
  packId: string;
  disciplines: Discipline[];
}

interface ProgressionData {
  stats: ProgressStatsType;
  disciplineStats: Record<string, ProgressStatsType>;
  disciplineStatuses: Record<string, DisciplineStatus>;
}

export function PackDisciplines({ packId, disciplines }: PackDisciplinesProps) {
  const { status } = useSession();
  const [progression, setProgression] = useState<ProgressionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchProgression = useCallback(async () => {
    if (status === 'authenticated') {
      try {
        const response = await fetch(`/api/progression/pack/${packId}`);
        if (response.ok) {
          const data = await response.json();
          setProgression(data);
          setLastUpdated(new Date());
        }
      } catch (error) {
        console.error('Failed to fetch progression:', error);
      }
    }
    setIsLoading(false);
  }, [packId, status]);

  useEffect(() => {
    if (status !== 'loading') {
      fetchProgression();
    }
  }, [fetchProgression, status]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        {disciplines.map((discipline) => (
          <div
            key={discipline.id}
            className="h-24 rounded-lg animate-pulse"
            style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StalenessIndicator
        lastUpdated={lastUpdated}
        maxAgeMs={5 * 60 * 1000}
        onRefresh={fetchProgression}
      />

      {progression && status === 'authenticated' && (
        <div
          className="rounded-lg p-4"
          style={{
            backgroundColor: 'var(--color-bg-elevated)',
            borderWidth: '1px',
            borderColor: 'var(--color-border)',
          }}
        >
          <h3
            className="text-sm font-medium mb-2"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Votre progression
          </h3>
          <ProgressStats stats={progression.stats} size="md" />
        </div>
      )}

      {status === 'unauthenticated' && (
        <div
          className="rounded-lg p-4"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--ctp-blue) 15%, transparent)',
            borderWidth: '1px',
            borderColor: 'var(--ctp-blue)',
          }}
        >
          <p className="text-sm" style={{ color: 'var(--ctp-blue)' }}>
            <Link
              href="/login"
              className="font-medium underline"
              style={{ color: 'var(--ctp-blue)' }}
            >
              Connectez-vous
            </Link>{' '}
            pour suivre votre progression.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {disciplines.map((discipline, index) => {
          // Determine status: use API data if authenticated, otherwise first is AVAILABLE, rest are LOCKED
          let disciplineStatus: DisciplineStatus = 'AVAILABLE';
          if (progression?.disciplineStatuses?.[discipline.id]) {
            disciplineStatus = progression.disciplineStatuses[discipline.id];
          } else if (status === 'unauthenticated') {
            disciplineStatus = index === 0 ? 'AVAILABLE' : 'LOCKED';
          }

          return (
            <DisciplineCard
              key={discipline.id}
              discipline={discipline}
              progress={progression?.disciplineStats?.[discipline.id]}
              status={disciplineStatus}
            />
          );
        })}
      </div>
    </div>
  );
}
