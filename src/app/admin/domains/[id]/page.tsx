'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { StaleDataWarning } from '@/components/admin/StaleDataWarning';

interface Domain {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  status: string;
  updatedAt: string;
}

export default function DomainEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const [domain, setDomain] = useState<Domain | null>(null);
  const [formData, setFormData] = useState({ name: '', description: '', icon: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isStale, setIsStale] = useState(false);
  const [loadedAt, setLoadedAt] = useState<string | null>(null);

  useEffect(() => {
    const fetchDomain = async () => {
      try {
        const response = await fetch(`/api/admin/domains/${id}`);
        if (response.ok) {
          const data = await response.json();
          setDomain(data);
          setFormData({
            name: data.name,
            description: data.description || '',
            icon: data.icon || '',
          });
          setLoadedAt(data.updatedAt);
        } else {
          setError('Domaine non trouvé');
        }
      } catch {
        setError('Erreur lors du chargement');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDomain();
  }, [id]);

  const handleSave = async () => {
    setError(null);
    setIsSaving(true);

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (loadedAt) {
        headers['X-If-Unmodified-Since'] = loadedAt;
      }

      const response = await fetch(`/api/admin/domains/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(formData),
      });

      if (response.status === 409) {
        setIsStale(true);
        const data = await response.json();
        setDomain(data.current);
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      router.push('/admin/domains');
    } catch (err: any) {
      setError(err.message || 'Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  const handleRefresh = async () => {
    setIsStale(false);
    setIsLoading(true);
    const response = await fetch(`/api/admin/domains/${id}`);
    if (response.ok) {
      const data = await response.json();
      setDomain(data);
      setFormData({
        name: data.name,
        description: data.description || '',
        icon: data.icon || '',
      });
      setLoadedAt(data.updatedAt);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error && !domain) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
        <Button onClick={() => router.push('/admin/domains')} className="mt-4">
          Retour aux domaines
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Modifier le domaine</h1>
        <p className="text-gray-600 mt-1">{domain?.name}</p>
      </div>

      {isStale && (
        <StaleDataWarning
          message="Ce domaine a été modifié par un autre utilisateur."
          onRefresh={handleRefresh}
        />
      )}

      <Card>
        <CardHeader>
          <CardTitle>Informations du domaine</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Nom"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Input
            label="Icône (emoji)"
            value={formData.icon}
            onChange={(e) => setFormData((prev) => ({ ...prev, icon: e.target.value }))}
          />

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => router.push('/admin/domains')}>
              Annuler
            </Button>
            <Button onClick={handleSave} isLoading={isSaving}>
              Enregistrer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
