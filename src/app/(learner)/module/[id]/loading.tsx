const skeletonStyle = { backgroundColor: 'var(--color-bg-tertiary)' };

export default function ModuleLoading() {
  return (
    <div className="space-y-6">
      <div className="h-4 w-64 rounded animate-pulse" style={skeletonStyle} />
      <div className="space-y-2">
        <div className="h-8 w-80 rounded animate-pulse" style={skeletonStyle} />
        <div className="h-4 w-full max-w-lg rounded animate-pulse" style={skeletonStyle} />
      </div>

      {/* Tab navigation skeleton */}
      <div className="pb-4" style={{ borderBottomWidth: '1px', borderBottomColor: 'var(--color-border)' }}>
        <div className="flex gap-4">
          <div className="h-6 w-20 rounded animate-pulse" style={skeletonStyle} />
          <div className="h-6 w-16 rounded animate-pulse" style={skeletonStyle} />
          <div className="h-6 w-24 rounded animate-pulse" style={skeletonStyle} />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-full rounded animate-pulse" style={skeletonStyle} />
        <div className="h-4 w-5/6 rounded animate-pulse" style={skeletonStyle} />
        <div className="h-4 w-4/6 rounded animate-pulse" style={skeletonStyle} />
        <div className="h-4 w-full rounded animate-pulse" style={skeletonStyle} />
        <div className="h-4 w-3/4 rounded animate-pulse" style={skeletonStyle} />
      </div>
    </div>
  );
}
