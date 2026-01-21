'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { TheoryViewer } from '@/components/lesson/TheoryViewer';
import { QuizContainer } from '@/components/lesson/QuizContainer';
import { PracticeInstructions } from '@/components/lesson/PracticeInstructions';
import { PracticeCompletion } from '@/components/lesson/PracticeCompletion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { PracticeType, QuestionType } from '@/types/models';

interface Question {
  id: string;
  questionText: string;
  questionType: QuestionType;
  options: { id: string; text: string }[] | null;
  order: number;
}

interface Lesson {
  id: string;
  theoryContent: string;
  quizThreshold: number;
  practiceType: PracticeType;
  practiceInstructions: string;
  questions: Question[];
}

interface ModuleContentProps {
  moduleId: string;
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

type Tab = 'theory' | 'quiz' | 'practice';

export function ModuleContent({ moduleId, disciplineId, lesson }: ModuleContentProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('theory');
  const [quizPassed, setQuizPassed] = useState(false);
  const [practiceCompleted, setPracticeCompleted] = useState(false);
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
            } else {
              // Restore state from progression
              if (data.quizPassedAt) {
                setQuizPassed(true);
              }
              if (data.practiceCompletedAt) {
                setPracticeCompleted(true);
              }
              if (data.completedAt) {
                setActiveTab('practice');
              }
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

  const handleQuizPassed = () => {
    setQuizPassed(true);
    setActiveTab('practice');
  };

  const handlePracticeComplete = () => {
    setPracticeCompleted(true);
  };

  const tabs: { id: Tab; label: string; locked: boolean }[] = [
    { id: 'theory', label: 'Théorie', locked: false },
    { id: 'quiz', label: 'Quiz', locked: false },
    { id: 'practice', label: 'Pratique', locked: !quizPassed },
  ];

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Connexion requise</h3>
        <p className="text-yellow-700">
          Vous devez être connecté pour accéder au contenu du module et suivre votre progression.
        </p>
        <a
          href="/login"
          className="inline-block mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
        >
          Se connecter
        </a>
      </div>
    );
  }

  if (isLocked) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <span className="text-5xl mb-4 block">🔒</span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Module verrouillé</h3>
        <p className="text-gray-600 mb-6">
          Vous devez compléter les modules précédents pour débloquer celui-ci.
        </p>
        <Button
          onClick={() => router.back()}
          variant="outline"
        >
          Retour à la discipline
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tab navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-4" aria-label="Sections du module">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => !tab.locked && setActiveTab(tab.id)}
              disabled={tab.locked}
              className={`
                relative pb-4 px-1 text-sm font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : tab.locked
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              <span className="flex items-center gap-2">
                {tab.label}
                {tab.id === 'quiz' && quizPassed && (
                  <Badge variant="success" size="sm">
                    Réussi
                  </Badge>
                )}
                {tab.id === 'practice' && practiceCompleted && (
                  <Badge variant="success" size="sm">
                    Terminé
                  </Badge>
                )}
                {tab.locked && <span className="text-xs">🔒</span>}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="min-h-[400px]">
        {activeTab === 'theory' && <TheoryViewer content={lesson.theoryContent} />}

        {activeTab === 'quiz' && (
          quizPassed ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <span className="text-4xl mb-2 block">✅</span>
              <h3 className="text-xl font-bold text-green-800 mb-2">Quiz réussi !</h3>
              <p className="text-green-700 mb-4">
                Vous avez déjà réussi ce quiz. Passez à la section pratique.
              </p>
              <Button onClick={() => setActiveTab('practice')}>
                Aller à la pratique
              </Button>
            </div>
          ) : (
            <QuizContainer
              questions={lesson.questions}
              quizThreshold={lesson.quizThreshold}
              moduleId={moduleId}
              onQuizPassed={handleQuizPassed}
            />
          )
        )}

        {activeTab === 'practice' && (
          <div className="space-y-6">
            <PracticeInstructions
              practiceType={lesson.practiceType}
              instructions={lesson.practiceInstructions}
            />

            {!practiceCompleted ? (
              <PracticeCompletion moduleId={moduleId} onComplete={handlePracticeComplete} />
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <span className="text-4xl mb-2 block">🎉</span>
                <h3 className="text-xl font-bold text-green-800 mb-2">Module terminé !</h3>
                <p className="text-green-700">
                  Félicitations ! Vous avez complété ce module avec succès.
                </p>
                <Button
                  onClick={() => router.back()}
                  className="mt-4"
                  variant="outline"
                >
                  Retour à la discipline
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
