'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { GuidedModuleFlow } from '@/components/lesson/GuidedModuleFlow';
import { Button } from '@/components/ui/Button';
import type { PracticeType, QuestionType, LessonMode } from '@/types/models';

interface Question {
  id: string;
  questionText: string;
  questionType: QuestionType;
  options: { id: string; text: string }[] | null;
  order: number;
  linkedTheorySection: string | null;
  correctAnswer: string;
  explanation: string | null;
}

interface Lesson {
  id: string;
  theoryContent: string;
  quizThreshold: number;
  practiceType: PracticeType;
  practiceInstructions: string;
  practiceTimerDuration?: number;
  mode: LessonMode;
  // Feature 005: Randomization settings
  shuffleQuestions?: boolean;
  shuffleAnswers?: boolean;
  questionsToShow?: number | null;
  questions: Question[];
}

interface ModuleContentProps {
  moduleId: string;
  moduleName: string;
  disciplineId?: string;
  lesson: Lesson;
}

interface ProgressionState {
  status: string;
  theoryViewedAt: string | null;
  quizPassedAt: string | null;
  practiceCompletedAt: string | null;
  completedAt: string | null;
}

export function ModuleContent({ moduleId, moduleName, lesson }: ModuleContentProps) {
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [progression, setProgression] = useState<ProgressionState | null>(null);

  useEffect(() => {
    const fetchProgressionAndMarkTheory = async () => {
      if (status === 'authenticated') {
        try {
          // Mark theory as viewed (this also returns current progression)
          const response = await fetch(`/api/progression/module/${moduleId}/theory`, {
            method: 'POST',
          });

          if (response.ok) {
            const data = await response.json();
            setProgression(data);

            // Check if module is locked
            if (data.status === 'LOCKED') {
              setIsLocked(true);
            }
          } else if (response.status === 404) {
            // Module locked or not found
            setIsLocked(true);
          }
        } catch (error) {
          console.error('Failed to fetch progression:', error);
        }
      }
      setIsLoading(false);
    };

    if (status !== 'loading') {
      fetchProgressionAndMarkTheory();
    }
  }, [moduleId, status]);

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2"
          style={{ borderColor: 'var(--color-primary)' }}
        />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--ctp-yellow) 15%, transparent)',
          borderWidth: '1px',
          borderColor: 'var(--ctp-yellow)',
        }}
      >
        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--ctp-yellow)' }}>
          Connexion requise
        </h3>
        <p style={{ color: 'var(--ctp-yellow)' }}>
          Vous devez être connecté pour accéder au contenu du module et suivre votre progression.
        </p>
        <a
          href="/login"
          className="inline-block mt-4 px-4 py-2 rounded-lg transition-colors"
          style={{
            backgroundColor: 'var(--ctp-yellow)',
            color: 'var(--color-bg)',
          }}
        >
          Se connecter
        </a>
      </div>
    );
  }

  if (isLocked) {
    return (
      <div
        className="rounded-lg p-8 text-center"
        style={{
          backgroundColor: 'var(--color-bg-tertiary)',
          borderWidth: '1px',
          borderColor: 'var(--color-border)',
        }}
      >
        <span className="text-5xl mb-4 block">🔒</span>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
          Module verrouillé
        </h3>
        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          Vous devez compléter les modules précédents pour débloquer celui-ci.
        </p>
        <Button onClick={() => router.back()} variant="outline">
          Retour à la discipline
        </Button>
      </div>
    );
  }

  return (
    <GuidedModuleFlow
      moduleId={moduleId}
      lessonId={lesson.id}
      moduleName={moduleName}
      theoryContent={lesson.theoryContent}
      questions={lesson.questions}
      quizThreshold={lesson.quizThreshold}
      practiceType={lesson.practiceType}
      practiceInstructions={lesson.practiceInstructions}
      practiceTimerDuration={lesson.practiceTimerDuration}
      initialQuizPassed={!!progression?.quizPassedAt}
      initialPracticeCompleted={!!progression?.practiceCompletedAt}
      mode={lesson.mode}
      shuffleQuestions={lesson.shuffleQuestions}
      shuffleAnswers={lesson.shuffleAnswers}
      questionsToShow={lesson.questionsToShow}
    />
  );
}
