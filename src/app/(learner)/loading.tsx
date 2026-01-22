import { ListSkeleton } from '@/components/connectivity/LoadingSkeleton';

export default function LearnerLoading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div
          className="h-8 w-64 rounded animate-pulse"
          style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
        />
        <div
          className="h-4 w-96 rounded animate-pulse"
          style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
        />
      </div>
      <ListSkeleton count={4} />
    </div>
  );
}
