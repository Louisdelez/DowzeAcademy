'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ThemeSelector } from '@/components/ui/ThemeSelector';
import { QuizAttemptHistory } from '@/components/lesson/QuizAttemptHistory';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div
          className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: 'var(--color-primary)', borderTopColor: 'transparent' }}
        />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Connexion requise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Connectez-vous pour accéder à votre profil et suivre votre progression.
            </p>
            <Button onClick={() => signIn()} className="w-full">
              Se connecter
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1
        className="text-3xl font-bold"
        style={{ color: 'var(--color-text)' }}
      >
        Mon Profil
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Informations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'color-mix(in srgb, var(--ctp-blue) 20%, transparent)' }}
            >
              <span
                className="text-2xl"
                style={{ color: 'var(--ctp-blue)' }}
              >
                {session.user?.name?.[0]?.toUpperCase() || session.user?.email?.[0]?.toUpperCase() || '?'}
              </span>
            </div>
            <div>
              <p
                className="font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                {session.user?.name || 'Apprenant'}
              </p>
              <p
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {session.user?.email}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Statistiques</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
            >
              <p
                className="text-2xl font-bold"
                style={{ color: 'var(--ctp-blue)' }}
              >
                0
              </p>
              <p
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Modules terminés
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
            >
              <p
                className="text-2xl font-bold"
                style={{ color: 'var(--ctp-green)' }}
              >
                0
              </p>
              <p
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Quiz réussis
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
            >
              <p
                className="text-2xl font-bold"
                style={{ color: 'var(--ctp-mauve)' }}
              >
                0h
              </p>
              <p
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Temps d&apos;étude
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feature 005: Quiz Attempt History */}
      <QuizAttemptHistory limit={5} />

      <Card>
        <CardHeader>
          <CardTitle>Apparence</CardTitle>
        </CardHeader>
        <CardContent>
          <ThemeSelector />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full"
            style={{
              color: 'var(--ctp-red)',
              borderColor: 'var(--ctp-red)',
            }}
          >
            Se déconnecter
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
