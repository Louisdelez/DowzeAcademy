'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="text-center">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          Une erreur est survenue
        </h1>
        <p className="mb-8 max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
          Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez réessayer.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            Réessayer
          </Button>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg font-medium transition-colors"
            style={{
              borderWidth: '1px',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-tertiary)',
            }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
