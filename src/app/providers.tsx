'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryProvider } from '@/lib/providers/query-provider';
import { type ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <QueryProvider>{children}</QueryProvider>
    </SessionProvider>
  );
}
