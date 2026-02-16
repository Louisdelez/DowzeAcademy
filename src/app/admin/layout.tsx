'use client';

import { type ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Settings, BarChart3, Home, Package, BookOpen, FileText, LogOut, type LucideIcon } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const navItems: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/admin', label: 'Dashboard', icon: BarChart3 },
  { href: '/admin/domains', label: 'Domaines', icon: Home },
  { href: '/admin/packs', label: 'Packs', icon: Package },
  { href: '/admin/disciplines', label: 'Disciplines', icon: BookOpen },
  { href: '/admin/modules', label: 'Modules', icon: FileText },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if on login page
    if (pathname === '/admin/login') {
      setIsAuthenticated(false);
      return;
    }

    // Simple check - the middleware handles real auth
    // This is just for UI state
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/auth/check');
        setIsAuthenticated(response.ok);
        if (!response.ok) {
          router.push('/admin/login');
        }
      } catch {
        setIsAuthenticated(false);
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [pathname, router]);

  const handleLogout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  // Login page - no layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: 'var(--color-primary)' }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64" style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text)' }}>
        <div className="p-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <Link href="/admin" className="flex items-center gap-2">
            <Settings className="w-6 h-6" />
            <span className="font-bold text-lg">Admin Panel</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? ''
                    : 'themed-hover-nav'
                }`}
                style={
                  isActive
                    ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-bg)' }
                    : { color: 'var(--color-text-muted)' }
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg transition-colors themed-hover-nav"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <LogOut className="w-5 h-5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
