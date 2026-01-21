'use client';

import { useDataFreshness } from '@/lib/hooks/useNetworkStatus';

interface StalenessIndicatorProps {
  lastUpdated: Date | null;
  maxAgeMs?: number;
  onRefresh?: () => void;
}

export function StalenessIndicator({
  lastUpdated,
  maxAgeMs = 5 * 60 * 1000,
  onRefresh,
}: StalenessIndicatorProps) {
  const isStale = useDataFreshness(lastUpdated, maxAgeMs);

  if (!isStale) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg text-sm">
      <span>⚠️</span>
      <span>Ces données peuvent ne pas être à jour.</span>
      {onRefresh && (
        <button
          onClick={onRefresh}
          className="underline hover:no-underline font-medium"
        >
          Actualiser
        </button>
      )}
    </div>
  );
}
