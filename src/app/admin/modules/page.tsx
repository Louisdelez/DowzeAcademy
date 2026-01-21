'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ContentForm } from '@/components/admin/ContentForm';

interface Module {
  id: string;
  name: string;
  description: string | null;
  status: 'DRAFT' | 'PUBLISHED';
  discipline: {
    name: string;
    pack: {
      name: string;
      domain: { name: string };
    };
  };
  lesson: { id: string; _count: { questions: number } } | null;
}

interface Discipline {
  id: string;
  name: string;
  pack: { name: string; domain: { name: string } };
}

export default function AdminModulesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showCreateForm = searchParams.get('action') === 'create';

  const [modules, setModules] = useState<Module[]>([]);
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [modulesRes, disciplinesRes] = await Promise.all([
        fetch('/api/admin/modules'),
        fetch('/api/admin/disciplines'),
      ]);

      if (modulesRes.ok) setModules(await modulesRes.json());
      if (disciplinesRes.ok) setDisciplines(await disciplinesRes.json());
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
    const response = await fetch('/api/admin/modules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    await fetchData();
    router.push('/admin/modules');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce module ?')) return;

    const response = await fetch(`/api/admin/modules/${id}`, {
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
          title="Créer un module"
          fields={[
            {
              name: 'disciplineId',
              label: 'Discipline',
              type: 'select',
              required: true,
              options: disciplines.map((d) => ({
                value: d.id,
                label: `${d.pack.domain.name} > ${d.pack.name} > ${d.name}`,
              })),
            },
            { name: 'name', label: 'Nom', type: 'text', required: true },
            { name: 'description', label: 'Description', type: 'textarea' },
          ]}
          onSubmit={handleCreate}
          onCancel={() => router.push('/admin/modules')}
          submitLabel="Créer le module"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Modules</h1>
          <p className="text-gray-600 mt-1">Gérez les modules et leur contenu pédagogique</p>
        </div>
        <Link href="/admin/modules?action=create">
          <Button>Créer un module</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : modules.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">Aucun module créé</p>
          <Link href="/admin/modules?action=create" className="text-blue-600 hover:underline mt-2 inline-block">
            Créer votre premier module
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Module</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Hiérarchie</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Contenu</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {modules.map((module) => (
                <tr key={module.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{module.name}</p>
                    {module.description && (
                      <p className="text-sm text-gray-500 truncate max-w-xs">
                        {module.description}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">
                      {module.discipline.pack.domain.name} &gt; {module.discipline.pack.name} &gt;{' '}
                      {module.discipline.name}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    {module.lesson ? (
                      <Badge variant="success">
                        {module.lesson._count.questions} questions
                      </Badge>
                    ) : (
                      <Badge variant="warning">Pas de leçon</Badge>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/modules/${module.id}/lesson`}>
                        <Button variant="outline" size="sm">
                          {module.lesson ? 'Modifier leçon' : 'Créer leçon'}
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(module.id)}
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
