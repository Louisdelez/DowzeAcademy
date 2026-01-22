'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { ModuleCard } from '@/components/cards/ModuleCard';
import { ProgressStats } from '@/components/progression/ProgressStats';
import { StalenessIndicator } from '@/components/connectivity/StalenessIndicator';
import { ModuleProgressStatus } from '@/types/models';
import type { Module, ProgressStats as ProgressStatsType } from '@/types/models';

interface PackModule extends Module {
  disciplineName: string;
  disciplineId: string;
}

interface PackModulesProps {
  packId: string;
  modules: PackModule[];
}

interface ProgressionData {
  stats: ProgressStatsType;
  moduleStatuses: Record<string, ModuleProgressStatus>;
}

export function PackModules({ packId, modules }: PackModulesProps) {
  const { data: session, status } = useSession();
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

  const getModuleStatus = (moduleId: string, index: number): ModuleProgressStatus => {
    if (progression?.moduleStatuses[moduleId]) {
      return progression.moduleStatuses[moduleId];
    }
    // Default: first module available, others locked
    return index === 0 ? ModuleProgressStatus.AVAILABLE : ModuleProgressStatus.LOCKED;
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.id}
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
            <a
              href="/login"
              className="font-medium underline"
              style={{ color: 'var(--ctp-blue)' }}
            >
              Connectez-vous
            </a>{' '}
            pour suivre votre progression et débloquer les modules.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {modules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            status={getModuleStatus(module.id, index)}
          />
        ))}
      </div>
    </div>
  );
}
