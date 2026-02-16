import { TableSkeleton } from '@/components/connectivity/LoadingSkeleton';

export default function AdminLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-8 w-48 rounded animate-pulse" style={{ backgroundColor: 'var(--color-bg-tertiary)' }} />
          <div className="h-4 w-64 rounded animate-pulse" style={{ backgroundColor: 'var(--color-bg-tertiary)' }} />
        </div>
        <div className="h-10 w-32 rounded animate-pulse" style={{ backgroundColor: 'var(--color-bg-tertiary)' }} />
      </div>
      <TableSkeleton rows={5} cols={4} />
    </div>
  );
}
