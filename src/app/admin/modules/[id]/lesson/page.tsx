'use client';

import { useEffect, useState, use, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Copy, Check } from 'lucide-react';

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
  practiceTimerDuration: number;
  questions: Question[];
  // Feature 005: Quiz Randomization settings
  shuffleQuestions: boolean;
  shuffleAnswers: boolean;
  questionsToShow: number | null;
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
    practiceTimerDuration: 300,
    questions: [],
    // Feature 005: Quiz Randomization defaults
    shuffleQuestions: true,
    shuffleAnswers: true,
    questionsToShow: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'theory' | 'quiz' | 'practice'>('theory');
  // Feature 005: Track which UUID was copied
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Feature 005: Copy UUID to clipboard
  const copyToClipboard = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

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
              practiceTimerDuration: data.lesson.practiceTimerDuration || 300,
              questions: data.lesson.questions || [],
              // Feature 005: Load randomization settings
              shuffleQuestions: data.lesson.shuffleQuestions ?? true,
              shuffleAnswers: data.lesson.shuffleAnswers ?? true,
              questionsToShow: data.lesson.questionsToShow ?? null,
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
            <CardContent className="space-y-6">
              {/* Seuil de réussite */}
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

              {/* Feature 005: Randomization settings */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  🎲 Randomisation (Feature 005)
                </h3>

                {/* Questions to show */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre de questions à afficher
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="w-24">
                      <Input
                        type="number"
                        min={0}
                        max={lessonData.questions.length || 100}
                        value={lessonData.questionsToShow ?? ''}
                        placeholder="Toutes"
                        onChange={(e) => {
                          const value = e.target.value;
                          setLessonData((prev) => ({
                            ...prev,
                            questionsToShow: value === '' ? null : parseInt(value) || null,
                          }));
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">
                      sur {lessonData.questions.length} questions disponibles
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Laissez vide pour afficher toutes les questions. Sinon, un sous-ensemble aléatoire sera sélectionné.
                  </p>
                </div>

                {/* Shuffle toggles */}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={lessonData.shuffleQuestions}
                      onChange={(e) =>
                        setLessonData((prev) => ({
                          ...prev,
                          shuffleQuestions: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Mélanger l&apos;ordre des questions
                      </span>
                      <p className="text-xs text-gray-500">
                        L&apos;ordre des questions changera à chaque tentative
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={lessonData.shuffleAnswers}
                      onChange={(e) =>
                        setLessonData((prev) => ({
                          ...prev,
                          shuffleAnswers: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Mélanger l&apos;ordre des réponses
                      </span>
                      <p className="text-xs text-gray-500">
                        Les options A/B/C/D seront réassignées aléatoirement
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {lessonData.questions.map((question, qIndex) => (
            <Card key={qIndex}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Question {qIndex + 1}</CardTitle>
                    {/* Feature 005: Display question UUID (T036, T037) */}
                    {question.id && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(question.id!, `q-${question.id}`)}
                        className="flex items-center gap-1 mt-1 text-xs text-gray-400 hover:text-gray-600 transition-colors font-mono"
                        title="Cliquer pour copier l'UUID"
                      >
                        {copiedId === `q-${question.id}` ? (
                          <>
                            <Check className="w-3 h-3 text-green-500" />
                            <span className="text-green-500">Copié!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{question.id.slice(0, 8)}...</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
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
                    <label className="block text-sm font-medium text-gray-700">
                      Options
                      <span className="text-xs text-gray-400 font-normal ml-2">
                        (cochez pour marquer comme correcte)
                      </span>
                    </label>
                    {question.options.map((option, oIndex) => {
                      const isCorrect = question.questionType === 'MULTIPLE_CHOICE'
                        ? (question.correctAnswer as string[]).includes(option.id)
                        : question.correctAnswer === option.id;

                      return (
                        <div key={option.id} className="flex items-center gap-2">
                          {/* Correct indicator (T038: removed A/B/C/D labels) */}
                          <input
                            type={question.questionType === 'MULTIPLE_CHOICE' ? 'checkbox' : 'radio'}
                            name={`correct-${qIndex}`}
                            checked={isCorrect}
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
                            title={isCorrect ? 'Réponse correcte' : 'Marquer comme correcte'}
                          />

                          {/* Option text input */}
                          <input
                            type="text"
                            value={option.text}
                            onChange={(e) => {
                              const newOptions = [...question.options!];
                              newOptions[oIndex] = { ...option, text: e.target.value };
                              updateQuestion(qIndex, { options: newOptions });
                            }}
                            placeholder={`Option ${oIndex + 1}`}
                            className={`flex-1 border rounded-lg px-3 py-2 ${
                              isCorrect ? 'border-green-400 bg-green-50' : 'border-gray-300'
                            }`}
                          />

                          {/* Feature 005: Option UUID with copy (T039) */}
                          {option.id.length > 8 && (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(option.id, `o-${option.id}`)}
                              className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-gray-600 transition-colors font-mono rounded hover:bg-gray-100"
                              title="Cliquer pour copier l'UUID de l'option"
                            >
                              {copiedId === `o-${option.id}` ? (
                                <Check className="w-3 h-3 text-green-500" />
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span className="hidden sm:inline">{option.id.slice(0, 6)}...</span>
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      );
                    })}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Durée du timer (minutes)
              </label>
              <div className="w-32">
                <Input
                  type="number"
                  min={1}
                  max={60}
                  value={Math.floor(lessonData.practiceTimerDuration / 60)}
                  onChange={(e) =>
                    setLessonData((prev) => ({
                      ...prev,
                      practiceTimerDuration: (parseInt(e.target.value) || 5) * 60,
                    }))
                  }
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Durée minimum avant que l&apos;apprenant puisse valider l&apos;exercice (1-60 minutes).
              </p>
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
