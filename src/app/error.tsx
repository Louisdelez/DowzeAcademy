'use client';

import { useEffect } from 'react';
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Une erreur est survenue</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez réessayer.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            Réessayer
          </Button>
          <a
            href="/"
            className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </div>
  );
}
