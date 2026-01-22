'use client';

import { useNetworkStatus } from '@/lib/hooks/useNetworkStatus';

export function NetworkStatusBanner() {
  const { isOnline, wasOffline } = useNetworkStatus();

  if (isOnline && !wasOffline) {
    return null;
  }

  if (!isOnline) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-50 py-2 px-4 text-center"
        style={{ backgroundColor: 'var(--ctp-red)', color: 'var(--ctp-base)' }}
      >
        <span className="font-medium">Hors ligne</span>
        <span className="ml-2 opacity-90">
          Vous n&apos;êtes pas connecté à Internet. Certaines fonctionnalités peuvent être
          indisponibles.
        </span>
      </div>
    );
  }

  if (wasOffline) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-50 py-2 px-4 text-center animate-fade-in"
        style={{ backgroundColor: 'var(--ctp-green)', color: 'var(--ctp-base)' }}
      >
        <span className="font-medium">Connexion rétablie</span>
        <span className="ml-2 opacity-90">Vous êtes de nouveau en ligne.</span>
      </div>
    );
  }

  return null;
}
