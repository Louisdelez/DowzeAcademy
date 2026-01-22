'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Email ou mot de passe incorrect');
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      setError('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-4xl mb-2">👤</div>
          <CardTitle as="h1" className="text-2xl">
            Connexion
          </CardTitle>
          <p
            className="text-sm mt-2"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Connectez-vous pour suivre votre progression
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="votre@email.com"
            />

            <Input
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="••••••••"
            />

            {error && (
              <div
                className="rounded-lg p-3"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--ctp-red) 15%, transparent)',
                  borderWidth: '1px',
                  borderColor: 'var(--ctp-red)',
                }}
              >
                <p className="text-sm" style={{ color: 'var(--ctp-red)' }}>
                  {error}
                </p>
              </div>
            )}

            <Button type="submit" className="w-full" isLoading={isLoading}>
              Se connecter
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              Pas encore de compte ?{' '}
              <a
                href="/register"
                className="font-medium hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Créer un compte
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
