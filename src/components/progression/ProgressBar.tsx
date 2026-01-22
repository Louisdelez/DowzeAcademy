'use client';

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  color?: 'blue' | 'green' | 'yellow';
}

const colorStyles: Record<string, string> = {
  blue: 'var(--ctp-blue)',
  green: 'var(--ctp-green)',
  yellow: 'var(--ctp-yellow)',
};

export function ProgressBar({
  value,
  max = 100,
  size = 'md',
  showLabel = false,
  color = 'blue',
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeStyles = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className="w-full">
      <div
        className={`w-full rounded-full overflow-hidden ${sizeStyles[size]}`}
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div
          className={`${sizeStyles[size]} rounded-full transition-all duration-300`}
          style={{
            width: `${percentage}%`,
            backgroundColor: colorStyles[color],
          }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      {showLabel && (
        <p className="text-xs mt-1 text-right" style={{ color: 'var(--color-text-muted)' }}>
          {Math.round(percentage)}%
        </p>
      )}
    </div>
  );
}
