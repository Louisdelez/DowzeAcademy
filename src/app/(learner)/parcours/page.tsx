'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { ProgressBar } from '@/components/progression/ProgressBar';
import { Button } from '@/components/ui/Button';

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
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Mon Parcours</h1>
        <p className="text-gray-600 mb-6">
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
        <h1 className="text-3xl font-bold text-gray-900">Mon Parcours</h1>
        <p className="text-gray-600 mt-1">Suivez votre progression d&apos;apprentissage</p>
      </div>

      {domains.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <p className="text-gray-600 mb-4">
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
                      <h2 className="text-xl font-semibold text-gray-900">{domain.name}</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {domain.packs?.length || 0} pack{(domain.packs?.length || 0) > 1 ? 's' : ''} disponible{(domain.packs?.length || 0) > 1 ? 's' : ''}
                      </p>
                      <div className="mt-3">
                        <ProgressBar progress={0} size="sm" />
                        <p className="text-xs text-gray-500 mt-1">0% complété</p>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
