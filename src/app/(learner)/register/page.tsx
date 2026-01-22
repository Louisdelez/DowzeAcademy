'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erreur lors de la création du compte');
        return;
      }

      // Auto sign-in after registration
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Compte créé mais erreur de connexion. Veuillez vous connecter manuellement.');
        router.push('/login');
      } else {
        router.push('/');
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
          <div className="text-4xl mb-2">✨</div>
          <CardTitle as="h1" className="text-2xl">
            Créer un compte
          </CardTitle>
          <p
            className="text-sm mt-2"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Rejoignez Dowze Academy et commencez votre apprentissage
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nom"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              placeholder="Votre nom"
            />

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
              autoComplete="new-password"
              placeholder="••••••••"
            />

            <Input
              label="Confirmer le mot de passe"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
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
              Créer mon compte
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              Déjà un compte ?{' '}
              <a
                href="/login"
                className="font-medium hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Se connecter
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
