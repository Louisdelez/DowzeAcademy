'use client';

import { useNetworkStatus } from '@/lib/hooks/useNetworkStatus';

interface OfflineBlockerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function OfflineBlocker({ children, fallback }: OfflineBlockerProps) {
  const { isOnline } = useNetworkStatus();

  if (!isOnline) {
    return (
      fallback || (
        <div
          className="rounded-lg p-6 text-center"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
            borderWidth: '1px',
            borderColor: 'var(--color-border)',
          }}
        >
          <span className="text-3xl mb-2 block">📡</span>
          <h4 className="font-medium mb-1" style={{ color: 'var(--color-text)' }}>
            Hors ligne
          </h4>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Cette fonctionnalité nécessite une connexion internet.
          </p>
        </div>
      )
    );
  }

  return <>{children}</>;
}
