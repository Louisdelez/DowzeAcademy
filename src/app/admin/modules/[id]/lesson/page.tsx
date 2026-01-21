'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

interface Question {
  id?: string;
  questionText: string;
  questionType: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'SHORT_TEXT';
  options: { id: string; text: string }[] | null;
  correctAnswer: string | string[];
  feedback: string;
  order: number;
}

interface LessonData {
  theoryContent: string;
  quizThreshold: number;
  practiceType: string;
  practiceInstructions: string;
  questions: Question[];
}

const PRACTICE_TYPES = [
  { value: 'IN_GAME', label: 'Pratique en jeu' },
  { value: 'EXERCICES', label: 'Exercices' },
  { value: 'PROJET', label: 'Projet' },
  { value: 'AUTO_EVALUATION', label: 'Auto-évaluation' },
];

const QUESTION_TYPES = [
  { value: 'SINGLE_CHOICE', label: 'Choix unique' },
  { value: 'MULTIPLE_CHOICE', label: 'Choix multiple' },
  { value: 'SHORT_TEXT', label: 'Réponse courte' },
];

export default function LessonEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: moduleId } = use(params);
  const router = useRouter();

  const [moduleName, setModuleName] = useState('');
  const [lessonData, setLessonData] = useState<LessonData>({
    theoryContent: '',
    quizThreshold: 70,
    practiceType: 'IN_GAME',
    practiceInstructions: '',
    questions: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'theory' | 'quiz' | 'practice'>('theory');

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await fetch(`/api/admin/modules/${moduleId}/lesson`);
        if (response.ok) {
          const data = await response.json();
          setModuleName(data.module.name);
          if (data.lesson) {
            setLessonData({
              theoryContent: data.lesson.theoryContent,
              quizThreshold: data.lesson.quizThreshold,
              practiceType: data.lesson.practiceType,
              practiceInstructions: data.lesson.practiceInstructions,
              questions: data.lesson.questions || [],
            });
          }
        }
      } catch (error) {
        console.error('Failed to fetch lesson:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLesson();
  }, [moduleId]);

  const handleSave = async () => {
    setError(null);
    setIsSaving(true);

    try {
      const response = await fetch(`/api/admin/modules/${moduleId}/lesson`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lessonData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      router.push('/admin/modules');
    } catch (err: any) {
      setError(err.message || 'Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  const addQuestion = () => {
    setLessonData((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          questionText: '',
          questionType: 'SINGLE_CHOICE',
          options: [
            { id: 'a', text: '' },
            { id: 'b', text: '' },
          ],
          correctAnswer: '',
          feedback: '',
          order: prev.questions.length,
        },
      ],
    }));
  };

  const updateQuestion = (index: number, updates: Partial<Question>) => {
    setLessonData((prev) => ({
      ...prev,
      questions: prev.questions.map((q, i) => (i === index ? { ...q, ...updates } : q)),
    }));
  };

  const removeQuestion = (index: number) => {
    setLessonData((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== index),
    }));
  };

  const addOption = (questionIndex: number) => {
    const question = lessonData.questions[questionIndex];
    const options = question.options || [];
    const nextId = String.fromCharCode(97 + options.length); // a, b, c, d...
    updateQuestion(questionIndex, {
      options: [...options, { id: nextId, text: '' }],
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Éditeur de leçon</h1>
        <p className="text-gray-600 mt-1">Module: {moduleName}</p>
      </div>

      {/* Tab navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-4">
          {(['theory', 'quiz', 'practice'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'theory' && 'Théorie'}
              {tab === 'quiz' && `Quiz (${lessonData.questions.length})`}
              {tab === 'practice' && 'Pratique'}
            </button>
          ))}
        </nav>
      </div>

      {/* Theory tab */}
      {activeTab === 'theory' && (
        <Card>
          <CardHeader>
            <CardTitle>Contenu théorique</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Utilisez la syntaxe Markdown pour formater votre contenu.
            </p>
            <textarea
              value={lessonData.theoryContent}
              onChange={(e) =>
                setLessonData((prev) => ({ ...prev, theoryContent: e.target.value }))
              }
              rows={20}
              className="w-full font-mono text-sm border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="# Titre principal&#10;&#10;## Section&#10;&#10;Votre contenu ici..."
            />
          </CardContent>
        </Card>
      )}

      {/* Quiz tab */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres du quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-48">
                <Input
                  label="Seuil de réussite (%)"
                  type="number"
                  min={0}
                  max={100}
                  value={lessonData.quizThreshold}
                  onChange={(e) =>
                    setLessonData((prev) => ({
                      ...prev,
                      quizThreshold: parseInt(e.target.value) || 70,
                    }))
                  }
                />
              </div>
            </CardContent>
          </Card>

          {lessonData.questions.map((question, qIndex) => (
            <Card key={qIndex}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Question {qIndex + 1}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeQuestion(qIndex)}
                    className="text-red-600"
                  >
                    Supprimer
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={question.questionType}
                    onChange={(e) =>
                      updateQuestion(qIndex, {
                        questionType: e.target.value as Question['questionType'],
                        options:
                          e.target.value === 'SHORT_TEXT'
                            ? null
                            : question.options || [
                                { id: 'a', text: '' },
                                { id: 'b', text: '' },
                              ],
                        correctAnswer: e.target.value === 'MULTIPLE_CHOICE' ? [] : '',
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    {QUESTION_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                  <textarea
                    value={question.questionText}
                    onChange={(e) => updateQuestion(qIndex, { questionText: e.target.value })}
                    rows={2}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>

                {question.questionType !== 'SHORT_TEXT' && question.options && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Options</label>
                    {question.options.map((option, oIndex) => (
                      <div key={option.id} className="flex items-center gap-2">
                        <input
                          type={question.questionType === 'MULTIPLE_CHOICE' ? 'checkbox' : 'radio'}
                          name={`correct-${qIndex}`}
                          checked={
                            question.questionType === 'MULTIPLE_CHOICE'
                              ? (question.correctAnswer as string[]).includes(option.id)
                              : question.correctAnswer === option.id
                          }
                          onChange={(e) => {
                            if (question.questionType === 'MULTIPLE_CHOICE') {
                              const current = question.correctAnswer as string[];
                              updateQuestion(qIndex, {
                                correctAnswer: e.target.checked
                                  ? [...current, option.id]
                                  : current.filter((id) => id !== option.id),
                              });
                            } else {
                              updateQuestion(qIndex, { correctAnswer: option.id });
                            }
                          }}
                          className="w-4 h-4"
                        />
                        <input
                          type="text"
                          value={option.text}
                          onChange={(e) => {
                            const newOptions = [...question.options!];
                            newOptions[oIndex] = { ...option, text: e.target.value };
                            updateQuestion(qIndex, { options: newOptions });
                          }}
                          placeholder={`Option ${option.id.toUpperCase()}`}
                          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                        />
                      </div>
                    ))}
                    <Button variant="ghost" size="sm" onClick={() => addOption(qIndex)}>
                      + Ajouter une option
                    </Button>
                  </div>
                )}

                {question.questionType === 'SHORT_TEXT' && (
                  <Input
                    label="Réponse correcte"
                    value={question.correctAnswer as string}
                    onChange={(e) => updateQuestion(qIndex, { correctAnswer: e.target.value })}
                  />
                )}

                <Input
                  label="Feedback (optionnel)"
                  value={question.feedback}
                  onChange={(e) => updateQuestion(qIndex, { feedback: e.target.value })}
                />
              </CardContent>
            </Card>
          ))}

          <Button variant="outline" onClick={addQuestion} className="w-full">
            + Ajouter une question
          </Button>
        </div>
      )}

      {/* Practice tab */}
      {activeTab === 'practice' && (
        <Card>
          <CardHeader>
            <CardTitle>Section pratique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de pratique
              </label>
              <select
                value={lessonData.practiceType}
                onChange={(e) =>
                  setLessonData((prev) => ({ ...prev, practiceType: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                {PRACTICE_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
              <textarea
                value={lessonData.practiceInstructions}
                onChange={(e) =>
                  setLessonData((prev) => ({ ...prev, practiceInstructions: e.target.value }))
                }
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Décrivez les étapes de la pratique..."
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error message */}
      {error && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Actions */}
      <div className="mt-8 flex gap-4">
        <Button variant="outline" onClick={() => router.push('/admin/modules')}>
          Annuler
        </Button>
        <Button onClick={handleSave} isLoading={isSaving}>
          Enregistrer la leçon
        </Button>
      </div>
    </div>
  );
}
