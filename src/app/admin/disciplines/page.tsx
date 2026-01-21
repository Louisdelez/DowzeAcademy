'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ContentForm } from '@/components/admin/ContentForm';

interface Discipline {
  id: string;
  name: string;
  description: string | null;
  status: 'DRAFT' | 'PUBLISHED';
  pack: { id: string; name: string; domain: { name: string } };
  _count: { modules: number };
}

interface Pack {
  id: string;
  name: string;
  domain: { name: string };
}

export default function AdminDisciplinesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showCreateForm = searchParams.get('action') === 'create';

  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [packs, setPacks] = useState<Pack[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [disciplinesRes, packsRes] = await Promise.all([
        fetch('/api/admin/disciplines'),
        fetch('/api/admin/packs'),
      ]);

      if (disciplinesRes.ok) setDisciplines(await disciplinesRes.json());
      if (packsRes.ok) setPacks(await packsRes.json());
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
    const response = await fetch('/api/admin/disciplines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    await fetchData();
    router.push('/admin/disciplines');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette discipline ?')) return;

    const response = await fetch(`/api/admin/disciplines/${id}`, {
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
          title="Créer une discipline"
          fields={[
            {
              name: 'packId',
              label: 'Pack',
              type: 'select',
              required: true,
              options: packs.map((p) => ({
                value: p.id,
                label: `${p.domain.name} > ${p.name}`,
              })),
            },
            { name: 'name', label: 'Nom', type: 'text', required: true },
            { name: 'description', label: 'Description', type: 'textarea' },
          ]}
          onSubmit={handleCreate}
          onCancel={() => router.push('/admin/disciplines')}
          submitLabel="Créer la discipline"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Disciplines</h1>
          <p className="text-gray-600 mt-1">Gérez les matières d&apos;apprentissage</p>
        </div>
        <Link href="/admin/disciplines?action=create">
          <Button>Créer une discipline</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : disciplines.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">Aucune discipline créée</p>
          <Link href="/admin/disciplines?action=create" className="text-blue-600 hover:underline mt-2 inline-block">
            Créer votre première discipline
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Discipline</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Hiérarchie</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Modules</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {disciplines.map((discipline) => (
                <tr key={discipline.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{discipline.name}</p>
                    {discipline.description && (
                      <p className="text-sm text-gray-500 truncate max-w-xs">{discipline.description}</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {discipline.pack.domain.name} &gt; {discipline.pack.name}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={discipline.status === 'PUBLISHED' ? 'success' : 'default'}>
                      {discipline.status === 'PUBLISHED' ? 'Publié' : 'Brouillon'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{discipline._count.modules}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/disciplines/${discipline.id}`}>
                        <Button variant="ghost" size="sm">Modifier</Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(discipline.id)}
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
