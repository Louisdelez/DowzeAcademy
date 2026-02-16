'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { NetworkStatusBanner } from '@/components/connectivity/NetworkStatusBanner';
import { BottomNav } from '@/components/navigation/BottomNav';
import { AdminModeToggle } from '@/components/admin-mode/AdminModeToggle';

interface LearnerLayoutProps {
  children: ReactNode;
}

export default function LearnerLayout({ children }: LearnerLayoutProps) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <NetworkStatusBanner />
      <header
        className="sticky top-0 z-10"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--color-border)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">📚</span>
              <span
                className="font-bold text-xl"
                style={{ color: 'var(--color-text)' }}
              >
                Dowze Academy
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">{children}</main>
      <BottomNav />
      <AdminModeToggle />
    </div>
  );
}
