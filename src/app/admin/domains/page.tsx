'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { WifiOff, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ContentForm } from '@/components/admin/ContentForm';
import { useNetworkStatus } from '@/lib/hooks/useNetworkStatus';

interface Domain {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  status: 'DRAFT' | 'PUBLISHED';
  order: number;
  _count: { packs: number };
}

export default function AdminDomainsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showCreateForm = searchParams.get('action') === 'create';
  const { isOnline } = useNetworkStatus();

  const [domains, setDomains] = useState<Domain[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDomains = async () => {
    try {
      const response = await fetch('/api/admin/domains');
      if (response.ok) {
        setDomains(await response.json());
      }
    } catch (error) {
      console.error('Failed to fetch domains:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  const handleCreate = async (data: Record<string, string>) => {
    if (!isOnline) {
      throw new Error('Vous devez être connecté à Internet pour créer un domaine.');
    }

    const response = await fetch('/api/admin/domains', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    await fetchDomains();
    router.push('/admin/domains');
  };

  const handlePublish = async (id: string) => {
    if (!isOnline) {
      alert('Vous devez être connecté à Internet pour publier.');
      return;
    }

    const response = await fetch(`/api/admin/domains/${id}/publish`, {
      method: 'POST',
    });

    if (response.ok) {
      fetchDomains();
    } else {
      const error = await response.json();
      alert(error.error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!isOnline) {
      alert('Vous devez être connecté à Internet pour supprimer.');
      return;
    }

    if (!confirm('Êtes-vous sûr de vouloir supprimer ce domaine ?')) return;

    const response = await fetch(`/api/admin/domains/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      fetchDomains();
    }
  };

  if (showCreateForm) {
    return (
      <div className="max-w-2xl">
        <ContentForm
          title="Créer un domaine"
          fields={[
            { name: 'name', label: 'Nom', type: 'text', required: true },
            { name: 'description', label: 'Description', type: 'textarea' },
            { name: 'icon', label: 'Icône (chemin image)', type: 'text' },
          ]}
          onSubmit={handleCreate}
          onCancel={() => router.push('/admin/domains')}
          submitLabel="Créer le domaine"
        />
      </div>
    );
  }

  return (
    <div>
      {!isOnline && (
        <div className="mb-6 rounded-lg p-4 flex items-center gap-3" style={{ backgroundColor: 'color-mix(in srgb, var(--color-warning) 15%, transparent)', border: '1px solid var(--color-warning)' }}>
          <WifiOff className="w-5 h-5" style={{ color: 'var(--color-warning)' }} />
          <div>
            <p className="font-medium" style={{ color: 'var(--color-warning)' }}>Mode hors ligne</p>
            <p className="text-sm" style={{ color: 'var(--color-warning)' }}>
              Les modifications sont désactivées. Reconnectez-vous pour effectuer des changements.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>Domaines</h1>
          <p className="mt-1" style={{ color: 'var(--color-text-secondary)' }}>Gérez les catégories principales de contenu</p>
        </div>
        <Link href="/admin/domains?action=create">
          <Button disabled={!isOnline}>Créer un domaine</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 rounded-lg animate-pulse" style={{ backgroundColor: 'var(--color-bg-tertiary)' }} />
          ))}
        </div>
      ) : domains.length === 0 ? (
        <div className="text-center py-12 rounded-lg" style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-text-muted)' }}>Aucun domaine créé</p>
          <Link href="/admin/domains?action=create" className="hover:underline mt-2 inline-block" style={{ color: 'var(--color-primary)' }}>
            Créer votre premier domaine
          </Link>
        </div>
      ) : (
        <div className="rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}>
          <table className="w-full">
            <thead style={{ backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)' }}>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Domaine</th>
                <th className="px-6 py-3 text-left text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Packs</th>
                <th className="px-6 py-3 text-right text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {domains.map((domain, index) => (
                <tr key={domain.id} className="themed-hover-row" style={index < domains.length - 1 ? { borderBottom: '1px solid var(--color-border)' } : undefined}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                      <div>
                        <p className="font-medium" style={{ color: 'var(--color-text)' }}>{domain.name}</p>
                        {domain.description && (
                          <p className="text-sm truncate max-w-xs" style={{ color: 'var(--color-text-muted)' }}>
                            {domain.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={domain.status === 'PUBLISHED' ? 'success' : 'default'}>
                      {domain.status === 'PUBLISHED' ? 'Publié' : 'Brouillon'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--color-text-secondary)' }}>{domain._count.packs}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/domains/${domain.id}`}>
                        <Button variant="ghost" size="sm">
                          Modifier
                        </Button>
                      </Link>
                      {domain.status === 'DRAFT' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePublish(domain.id)}
                        >
                          Publier
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(domain.id)}
                        className="themed-hover-error"
                        style={{ color: 'var(--color-error)' }}
                      >
                        Supprimer
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
