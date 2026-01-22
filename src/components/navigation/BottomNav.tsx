'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, type IconName } from '@/components/icons';

const navItems: { label: string; href: string; icon: IconName }[] = [
  {
    label: 'Hub',
    href: '/',
    icon: 'home',
  },
  {
    label: 'Parcours',
    href: '/parcours',
    icon: 'book',
  },
  {
    label: 'Profil',
    href: '/profile',
    icon: 'user',
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderTopWidth: '1px',
        borderTopColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href === '/' && pathname === '/') ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 px-4 py-2"
                aria-label={item.label}
              >
                <Icon
                  name={item.icon}
                  size={24}
                  color={isActive ? 'primary' : 'muted'}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)' }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
