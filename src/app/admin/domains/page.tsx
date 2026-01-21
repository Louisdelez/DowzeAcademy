'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
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
            { name: 'icon', label: 'Icône (emoji)', type: 'text' },
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
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center gap-3">
          <span className="text-xl">📡</span>
          <div>
            <p className="font-medium text-amber-800">Mode hors ligne</p>
            <p className="text-sm text-amber-700">
              Les modifications sont désactivées. Reconnectez-vous pour effectuer des changements.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Domaines</h1>
          <p className="text-gray-600 mt-1">Gérez les catégories principales de contenu</p>
        </div>
        <Link href="/admin/domains?action=create">
          <Button disabled={!isOnline}>Créer un domaine</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : domains.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">Aucun domaine créé</p>
          <Link href="/admin/domains?action=create" className="text-blue-600 hover:underline mt-2 inline-block">
            Créer votre premier domaine
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Domaine</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Packs</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {domains.map((domain) => (
                <tr key={domain.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {domain.icon && <span className="text-2xl">{domain.icon}</span>}
                      <div>
                        <p className="font-medium text-gray-900">{domain.name}</p>
                        {domain.description && (
                          <p className="text-sm text-gray-500 truncate max-w-xs">
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
                  <td className="px-6 py-4 text-gray-600">{domain._count.packs}</td>
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
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
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
