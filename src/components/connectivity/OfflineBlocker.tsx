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
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 text-center">
          <span className="text-3xl mb-2 block">📡</span>
          <h4 className="font-medium text-gray-800 mb-1">Hors ligne</h4>
          <p className="text-gray-600 text-sm">
            Cette fonctionnalité nécessite une connexion internet.
          </p>
        </div>
      )
    );
  }

  return <>{children}</>;
}
