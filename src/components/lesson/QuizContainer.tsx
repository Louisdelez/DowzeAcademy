'use client';

import { useState } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { QuizResult } from './QuizResult';
import { Button } from '@/components/ui/Button';
import { useNetworkStatus } from '@/lib/hooks/useNetworkStatus';
import type { QuestionType } from '@/types/models';

interface Question {
  id: string;
  questionText: string;
  questionType: QuestionType;
  options: { id: string; text: string }[] | null;
  order: number;
}

interface QuizContainerProps {
  questions: Question[];
  quizThreshold: number;
  moduleId: string;
  onQuizPassed: () => void;
}

interface QuizAttemptResult {
  score: number;
  passed: boolean;
  feedback: { questionId: string; isCorrect: boolean; feedback?: string }[];
}

export function QuizContainer({
  questions,
  quizThreshold,
  moduleId,
  onQuizPassed,
}: QuizContainerProps) {
  const { isOnline } = useNetworkStatus();
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<QuizAttemptResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    // Validate all questions answered
    const unanswered = questions.filter((q) => {
      const answer = answers[q.id];
      if (!answer) return true;
      if (Array.isArray(answer) && answer.length === 0) return true;
      if (typeof answer === 'string' && answer.trim() === '') return true;
      return false;
    });

    if (unanswered.length > 0) {
      setError(`Veuillez répondre à toutes les questions (${unanswered.length} restantes)`);
      return;
    }

    if (!isOnline) {
      setError('Vous devez être connecté à Internet pour soumettre le quiz.');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/quiz/${moduleId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: Object.entries(answers).map(([questionId, answer]) => ({
            questionId,
            answer,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quiz');
      }

      const data: QuizAttemptResult = await response.json();
      setResult(data);

      if (data.passed) {
        onQuizPassed();
      }
    } catch {
      setError("Erreur lors de l'envoi du quiz. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setResult(null);
    setError(null);
  };

  const allQuestionsAnswered = questions.every((q) => {
    const answer = answers[q.id];
    if (!answer) return false;
    if (Array.isArray(answer) && answer.length === 0) return false;
    if (typeof answer === 'string' && answer.trim() === '') return false;
    return true;
  });

  if (result) {
    return (
      <QuizResult
        score={result.score}
        passed={result.passed}
        threshold={quizThreshold}
        onRetry={result.passed ? undefined : handleRetry}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div
        className="rounded-lg p-4"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--ctp-blue) 15%, transparent)',
          borderWidth: '1px',
          borderColor: 'var(--ctp-blue)',
        }}
      >
        <p style={{ color: 'var(--ctp-blue)' }}>
          <strong>Seuil de réussite :</strong> {quizThreshold}%
        </p>
        <p className="text-sm mt-1" style={{ color: 'var(--ctp-blue)' }}>
          Répondez à toutes les questions puis validez vos réponses.
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <QuizQuestion
            key={question.id}
            questionNumber={index + 1}
            questionText={question.questionText}
            questionType={question.questionType}
            options={question.options as { id: string; text: string }[] | null}
            selectedAnswer={answers[question.id] || null}
            onAnswerChange={(answer) => handleAnswerChange(question.id, answer)}
          />
        ))}
      </div>

      {error && (
        <div
          className="rounded-lg p-4"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--ctp-red) 15%, transparent)',
            borderWidth: '1px',
            borderColor: 'var(--ctp-red)',
          }}
        >
          <p style={{ color: 'var(--ctp-red)' }}>{error}</p>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={!allQuestionsAnswered || isSubmitting}
          isLoading={isSubmitting}
          size="lg"
        >
          Valider mes réponses
        </Button>
      </div>
    </div>
  );
}
