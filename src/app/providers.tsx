'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryProvider } from '@/lib/providers/query-provider';
import { ThemeProvider } from '@/lib/theme/ThemeProvider';
import { AdminModeProvider } from '@/lib/contexts/AdminModeContext';
import { type ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <QueryProvider>
          <AdminModeProvider>{children}</AdminModeProvider>
        </QueryProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
