'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, Package, BookOpen, FileText, Plus, Eye, type LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

interface Stats {
  domains: { total: number; published: number };
  packs: { total: number };
  disciplines: { total: number };
  modules: { total: number };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [domains, packs, disciplines, modules] = await Promise.all([
          fetch('/api/admin/domains').then((r) => r.json()),
          fetch('/api/admin/packs').then((r) => r.json()),
          fetch('/api/admin/disciplines').then((r) => r.json()),
          fetch('/api/admin/modules').then((r) => r.json()),
        ]);

        setStats({
          domains: {
            total: domains.length,
            published: domains.filter((d: any) => d.status === 'PUBLISHED').length,
          },
          packs: { total: packs.length },
          disciplines: { total: disciplines.length },
          modules: { total: modules.length },
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards: { title: string; value: number | string; subtitle?: string; href: string; icon: LucideIcon }[] = [
    {
      title: 'Domaines',
      value: stats?.domains.total ?? '-',
      subtitle: `${stats?.domains.published ?? 0} publiés`,
      href: '/admin/domains',
      icon: Home,
    },
    {
      title: 'Packs',
      value: stats?.packs.total ?? '-',
      href: '/admin/packs',
      icon: Package,
    },
    {
      title: 'Disciplines',
      value: stats?.disciplines.total ?? '-',
      href: '/admin/disciplines',
      icon: BookOpen,
    },
    {
      title: 'Modules',
      value: stats?.modules.total ?? '-',
      href: '/admin/modules',
      icon: FileText,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>Dashboard</h1>
        <p className="mt-1" style={{ color: 'var(--color-text-secondary)' }}>Vue d&apos;ensemble du contenu éducatif</p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 rounded-xl animate-pulse" style={{ backgroundColor: 'var(--color-bg-tertiary)' }} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card) => (
            <Link key={card.title} href={card.href}>
              <Card variant="interactive" className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                    <card.icon className="w-6 h-6" style={{ color: 'var(--color-text-muted)' }} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>{card.value}</p>
                  {card.subtitle && (
                    <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{card.subtitle}</p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text)' }}>Actions rapides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/domains?action=create"
            className="flex items-center gap-3 p-4 rounded-lg transition-all themed-hover-card hover:shadow-md"
            style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
          >
            <Plus className="w-6 h-6" style={{ color: 'var(--color-text-muted)' }} />
            <span className="font-medium" style={{ color: 'var(--color-text)' }}>Créer un domaine</span>
          </Link>
          <Link
            href="/admin/modules"
            className="flex items-center gap-3 p-4 rounded-lg transition-all themed-hover-card hover:shadow-md"
            style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
          >
            <FileText className="w-6 h-6" style={{ color: 'var(--color-text-muted)' }} />
            <span className="font-medium" style={{ color: 'var(--color-text)' }}>Gérer les modules</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 p-4 rounded-lg transition-all themed-hover-card hover:shadow-md"
            style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
          >
            <Eye className="w-6 h-6" style={{ color: 'var(--color-text-muted)' }} />
            <span className="font-medium" style={{ color: 'var(--color-text)' }}>Voir le site</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
