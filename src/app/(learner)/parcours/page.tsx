'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { ProgressBar } from '@/components/progression/ProgressBar';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons';

interface ModuleProgress {
  id: string;
  name: string;
  description: string | null;
  status: 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED';
}

interface DisciplineProgress {
  id: string;
  name: string;
  modules: ModuleProgress[];
  completedCount: number;
  totalCount: number;
}

interface PackProgress {
  id: string;
  name: string;
  disciplines: DisciplineProgress[];
}

interface DomainProgress {
  id: string;
  name: string;
  icon: string | null;
  packs: PackProgress[];
}

export default function ParcoursPage() {
  const { data: session, status } = useSession();
  const [domains, setDomains] = useState<DomainProgress[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // Fetch domains with progression
        const response = await fetch('/api/content/domains');
        if (response.ok) {
          const data = await response.json();
          // Transform data to include progress info
          setDomains(data.map((d: any) => ({
            ...d,
            packs: d.packs || [],
          })));
        }
      } catch (error) {
        console.error('Failed to fetch progress:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div
          className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: 'var(--color-primary)', borderTopColor: 'transparent' }}
        />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
          Mon Parcours
        </h1>
        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          Connectez-vous pour voir votre progression et continuer votre apprentissage.
        </p>
        <Link href="/api/auth/signin">
          <Button>Se connecter</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
          Mon Parcours
        </h1>
        <p className="mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          Suivez votre progression d&apos;apprentissage
        </p>
      </div>

      {domains.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Vous n&apos;avez pas encore commencé de parcours.
            </p>
            <Link href="/">
              <Button>Explorer les domaines</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {domains.map((domain) => (
            <Link key={domain.id} href={`/domain/${domain.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{domain.icon || '📖'}</div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
                        {domain.name}
                      </h2>
                      <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
                        {domain.packs?.length || 0} pack
                        {(domain.packs?.length || 0) > 1 ? 's' : ''} disponible
                        {(domain.packs?.length || 0) > 1 ? 's' : ''}
                      </p>
                      <div className="mt-3">
                        <ProgressBar value={0} size="sm" />
                        <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                          0% complété
                        </p>
                      </div>
                    </div>
                    <Icon name="chevron-right" size={24} color="muted" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
