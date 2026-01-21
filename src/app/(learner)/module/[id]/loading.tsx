export default function ModuleLoading() {
  return (
    <div className="space-y-6">
      <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
      <div className="space-y-2">
        <div className="h-8 w-80 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-full max-w-lg bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Tab navigation skeleton */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex gap-4">
          <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}
