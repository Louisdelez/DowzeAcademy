interface LoadingSkeletonProps {
  className?: string;
  count?: number;
}

export function LoadingSkeleton({ className = 'h-4 w-full', count = 1 }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`rounded animate-pulse ${className}`}
          style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
        />
      ))}
    </>
  );
}

export function CardSkeleton() {
  return (
    <div
      className="rounded-xl p-6 space-y-4"
      style={{
        backgroundColor: 'var(--color-bg-elevated)',
        borderWidth: '1px',
        borderColor: 'var(--color-border)',
      }}
    >
      <LoadingSkeleton className="h-6 w-3/4" />
      <LoadingSkeleton className="h-4 w-full" />
      <LoadingSkeleton className="h-4 w-2/3" />
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-elevated)',
        borderWidth: '1px',
        borderColor: 'var(--color-border)',
      }}
    >
      <div
        className="p-4"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--color-border)',
        }}
      >
        <div className="flex gap-4">
          {Array.from({ length: cols }).map((_, i) => (
            <LoadingSkeleton key={i} className="h-4 flex-1" />
          ))}
        </div>
      </div>
      <div>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="p-4 flex gap-4"
            style={{
              borderBottomWidth: rowIndex < rows - 1 ? '1px' : '0',
              borderBottomColor: 'var(--color-border-light)',
            }}
          >
            {Array.from({ length: cols }).map((_, colIndex) => (
              <LoadingSkeleton key={colIndex} className="h-4 flex-1" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
