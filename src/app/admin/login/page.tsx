'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/admin';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push(callbackUrl);
      } else {
        const data = await response.json();
        setError(data.error || 'Identifiants incorrects');
      }
    } catch {
      setError('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-2 flex justify-center">
            <Settings className="w-10 h-10" style={{ color: 'var(--color-text-muted)' }} />
          </div>
          <CardTitle as="h1" className="text-2xl">
            Administration
          </CardTitle>
          <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
            Connectez-vous pour accéder au panneau d&apos;administration
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nom d'utilisateur"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />

            <Input
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            {error && (
              <div className="rounded-lg p-3" style={{ backgroundColor: 'color-mix(in srgb, var(--color-error) 15%, transparent)', border: '1px solid var(--color-error)' }}>
                <p className="text-sm" style={{ color: 'var(--color-error)' }}>{error}</p>
              </div>
            )}

            <Button type="submit" className="w-full" isLoading={isLoading}>
              Se connecter
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
