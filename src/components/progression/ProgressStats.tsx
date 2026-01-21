'use client';

import { ProgressBar } from './ProgressBar';
import type { ProgressStats as ProgressStatsType } from '@/types/models';

interface ProgressStatsProps {
  stats: ProgressStatsType;
  size?: 'sm' | 'md';
  showBar?: boolean;
}

export function ProgressStats({ stats, size = 'md', showBar = true }: ProgressStatsProps) {
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <div className="w-full">
      {showBar && (
        <ProgressBar
          value={stats.percentage}
          size={size === 'sm' ? 'sm' : 'md'}
          color={stats.percentage === 100 ? 'green' : 'blue'}
        />
      )}
      <div className={`flex justify-between ${textSize} text-gray-600 mt-1`}>
        <span>
          {stats.completed}/{stats.total} modules
        </span>
        <span className="font-medium">{Math.round(stats.percentage)}%</span>
      </div>
    </div>
  );
}
