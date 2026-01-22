'use client';

import { RetryButton } from './RetryButton';

interface ErrorDisplayProps {
  title?: string;
  message: string;
  onRetry?: () => Promise<void>;
}

export function ErrorDisplay({
  title = 'Une erreur est survenue',
  message,
  onRetry,
}: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="text-4xl mb-4">❌</div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
        {title}
      </h3>
      <p className="mb-6 max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
        {message}
      </p>
      {onRetry && <RetryButton onRetry={onRetry} />}
    </div>
  );
}
