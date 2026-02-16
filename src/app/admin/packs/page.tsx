'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ContentForm } from '@/components/admin/ContentForm';

interface Pack {
  id: string;
  name: string;
  description: string | null;
  status: 'DRAFT' | 'PUBLISHED';
  domain: { id: string; name: string };
  _count: { disciplines: number };
}

interface Domain {
  id: string;
  name: string;
}

export default function AdminPacksPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showCreateForm = searchParams.get('action') === 'create';

  const [packs, setPacks] = useState<Pack[]>([]);
  const [domains, setDomains] = useState<Domain[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [packsRes, domainsRes] = await Promise.all([
        fetch('/api/admin/packs'),
        fetch('/api/admin/domains'),
      ]);

      if (packsRes.ok) setPacks(await packsRes.json());
      if (domainsRes.ok) setDomains(await domainsRes.json());
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async (data: Record<string, string>) => {
    const response = await fetch('/api/admin/packs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    await fetchData();
    router.push('/admin/packs');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce pack ?')) return;

    const response = await fetch(`/api/admin/packs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      fetchData();
    }
  };

  if (showCreateForm) {
    return (
      <div className="max-w-2xl">
        <ContentForm
          title="Créer un pack"
          fields={[
            {
              name: 'domainId',
              label: 'Domaine',
              type: 'select',
              required: true,
              options: domains.map((d) => ({ value: d.id, label: d.name })),
            },
            { name: 'name', label: 'Nom', type: 'text', required: true },
            { name: 'description', label: 'Description', type: 'textarea' },
          ]}
          onSubmit={handleCreate}
          onCancel={() => router.push('/admin/packs')}
          submitLabel="Créer le pack"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>Packs</h1>
          <p className="mt-1" style={{ color: 'var(--color-text-secondary)' }}>Gérez les parcours d&apos;apprentissage</p>
        </div>
        <Link href="/admin/packs?action=create">
          <Button>Créer un pack</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 rounded-lg animate-pulse" style={{ backgroundColor: 'var(--color-bg-tertiary)' }} />
          ))}
        </div>
      ) : packs.length === 0 ? (
        <div className="text-center py-12 rounded-lg" style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-text-muted)' }}>Aucun pack créé</p>
          <Link href="/admin/packs?action=create" className="hover:underline mt-2 inline-block" style={{ color: 'var(--color-primary)' }}>
            Créer votre premier pack
          </Link>
        </div>
      ) : (
        <div className="rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}>
          <table className="w-full">
            <thead style={{ backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)' }}>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Pack</th>
                <th className="px-6 py-3 text-left text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Domaine</th>
                <th className="px-6 py-3 text-left text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Disciplines</th>
                <th className="px-6 py-3 text-right text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {packs.map((pack, index) => (
                <tr key={pack.id} className="themed-hover-row" style={index < packs.length - 1 ? { borderBottom: '1px solid var(--color-border)' } : undefined}>
                  <td className="px-6 py-4">
                    <p className="font-medium" style={{ color: 'var(--color-text)' }}>{pack.name}</p>
                    {pack.description && (
                      <p className="text-sm truncate max-w-xs" style={{ color: 'var(--color-text-muted)' }}>{pack.description}</p>
                    )}
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--color-text-secondary)' }}>{pack.domain.name}</td>
                  <td className="px-6 py-4">
                    <Badge variant={pack.status === 'PUBLISHED' ? 'success' : 'default'}>
                      {pack.status === 'PUBLISHED' ? 'Publié' : 'Brouillon'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--color-text-secondary)' }}>{pack._count.disciplines}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/packs/${pack.id}`}>
                        <Button variant="ghost" size="sm">Modifier</Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(pack.id)}
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
