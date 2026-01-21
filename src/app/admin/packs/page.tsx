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
          <h1 className="text-3xl font-bold text-gray-900">Packs</h1>
          <p className="text-gray-600 mt-1">Gérez les parcours d&apos;apprentissage</p>
        </div>
        <Link href="/admin/packs?action=create">
          <Button>Créer un pack</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : packs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">Aucun pack créé</p>
          <Link href="/admin/packs?action=create" className="text-blue-600 hover:underline mt-2 inline-block">
            Créer votre premier pack
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Pack</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Domaine</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Disciplines</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {packs.map((pack) => (
                <tr key={pack.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{pack.name}</p>
                    {pack.description && (
                      <p className="text-sm text-gray-500 truncate max-w-xs">{pack.description}</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{pack.domain.name}</td>
                  <td className="px-6 py-4">
                    <Badge variant={pack.status === 'PUBLISHED' ? 'success' : 'default'}>
                      {pack.status === 'PUBLISHED' ? 'Publié' : 'Brouillon'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{pack._count.disciplines}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/packs/${pack.id}`}>
                        <Button variant="ghost" size="sm">Modifier</Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(pack.id)}
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
