'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface RetryButtonProps {
  onRetry: () => Promise<void>;
  children?: React.ReactNode;
}

export function RetryButton({ onRetry, children = 'Réessayer' }: RetryButtonProps) {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      await onRetry();
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <Button onClick={handleRetry} isLoading={isRetrying} variant="outline">
      {children}
    </Button>
  );
}
