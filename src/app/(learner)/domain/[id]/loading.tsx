import { ListSkeleton } from '@/components/connectivity/LoadingSkeleton';

export default function DomainLoading() {
  return (
    <div className="space-y-6">
      <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ListSkeleton count={2} />
      </div>
    </div>
  );
}
