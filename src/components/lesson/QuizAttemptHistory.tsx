'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { CheckCircle, XCircle, Clock, ChevronRight } from 'lucide-react';

interface QuizAttempt {
  id: string;
  moduleName: string;
  moduleId: string | null;
  score: number | null;
  passed: boolean | null;
  startedAt: string;
  submittedAt: string | null;
  totalQuestions: number;
  correctAnswers: number;
}

interface QuizAttemptHistoryProps {
  /** Maximum number of attempts to display */
  limit?: number;
  /** Show module name column */
  showModuleName?: boolean;
  /** Callback when an attempt is clicked */
  onAttemptClick?: (attemptId: string) => void;
}

export function QuizAttemptHistory({
  limit = 10,
  showModuleName = true,
  onAttemptClick,
}: QuizAttemptHistoryProps) {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttempts = async () => {
      try {
        const response = await fetch('/api/user/quiz-attempts');
        if (!response.ok) {
          throw new Error('Failed to fetch attempts');
        }
        const data = await response.json();
        setAttempts(data.slice(0, limit));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur de chargement');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAttempts();
  }, [limit]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Historique des quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div
              className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin"
              style={{ borderColor: 'var(--color-primary)', borderTopColor: 'transparent' }}
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Historique des quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center py-4" style={{ color: 'var(--ctp-red)' }}>
            {error}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (attempts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Historique des quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className="text-center py-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Aucune tentative de quiz pour le moment.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historique des quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {attempts.map((attempt) => (
            <div
              key={attempt.id}
              className={`
                flex items-center gap-4 p-4 rounded-lg
                transition-colors
                ${onAttemptClick ? 'cursor-pointer hover:bg-[var(--color-bg-tertiary)]' : ''}
              `}
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
              onClick={() => onAttemptClick?.(attempt.id)}
            >
              {/* Status icon */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: attempt.passed
                    ? 'color-mix(in srgb, var(--ctp-green) 20%, transparent)'
                    : 'color-mix(in srgb, var(--ctp-red) 20%, transparent)',
                }}
              >
                {attempt.passed ? (
                  <CheckCircle className="w-5 h-5" style={{ color: 'var(--ctp-green)' }} />
                ) : (
                  <XCircle className="w-5 h-5" style={{ color: 'var(--ctp-red)' }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {showModuleName && (
                  <p
                    className="font-medium truncate"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {attempt.moduleName}
                  </p>
                )}
                <div className="flex items-center gap-3 text-sm">
                  <span
                    className="font-semibold"
                    style={{
                      color: attempt.passed ? 'var(--ctp-green)' : 'var(--ctp-red)',
                    }}
                  >
                    {attempt.score}%
                  </span>
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    {attempt.correctAnswers}/{attempt.totalQuestions} correct
                  </span>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1 text-sm shrink-0" style={{ color: 'var(--color-text-muted)' }}>
                <Clock className="w-4 h-4" />
                <span>{attempt.submittedAt ? formatDate(attempt.submittedAt) : '-'}</span>
              </div>

              {/* Arrow if clickable */}
              {onAttemptClick && (
                <ChevronRight className="w-5 h-5 shrink-0" style={{ color: 'var(--color-text-muted)' }} />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
