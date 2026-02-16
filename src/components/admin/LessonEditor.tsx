'use client';

import { useState, useMemo } from 'react';
import { Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { QuizQuestionEditor, type QuizQuestion } from './QuizQuestionEditor';
import { parseTheorySlides } from '@/lib/utils/theory-parser';

export interface LessonData {
  theoryContent: string;
  quizThreshold: number;
  practiceType: string;
  practiceInstructions: string;
  practiceTimerDuration: number; // Duration in seconds (default 300 = 5 minutes)
  questions: QuizQuestion[];
  mode: 'LEGACY' | 'SLIDES';
}

interface LessonEditorProps {
  initialData: LessonData;
  onChange: (data: LessonData) => void;
}

const PRACTICE_TYPES = [
  { value: 'IN_GAME', label: 'Pratique en jeu' },
  { value: 'EXERCICES', label: 'Exercices' },
  { value: 'PROJET', label: 'Projet' },
  { value: 'AUTO_EVALUATION', label: 'Auto-évaluation' },
];

const inputStyle = {
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg)',
  color: 'var(--color-text)',
};

export function LessonEditor({ initialData, onChange }: LessonEditorProps) {
  const [activeTab, setActiveTab] = useState<'theory' | 'quiz' | 'practice'>('theory');
  const [data, setData] = useState<LessonData>({
    ...initialData,
    mode: initialData.mode || 'LEGACY',
    practiceTimerDuration: initialData.practiceTimerDuration || 300,
  });

  // Parse theory content to extract section titles for linking
  const theorySections = useMemo(() => {
    if (!data.theoryContent) return [];
    const slides = parseTheorySlides(data.theoryContent);
    return slides.map((slide) => ({
      id: slide.id,
      title: slide.title,
    }));
  }, [data.theoryContent]);

  const updateData = (updates: Partial<LessonData>) => {
    const newData = { ...data, ...updates };
    setData(newData);
    onChange(newData);
  };

  const addQuestion = () => {
    const newQuestion: QuizQuestion = {
      questionText: '',
      questionType: 'SINGLE_CHOICE',
      options: [
        { id: 'a', text: '' },
        { id: 'b', text: '' },
      ],
      correctAnswer: '',
      feedback: '',
      order: data.questions.length,
    };
    updateData({ questions: [...data.questions, newQuestion] });
  };

  const updateQuestion = (index: number, updates: Partial<QuizQuestion>) => {
    const newQuestions = data.questions.map((q, i) =>
      i === index ? { ...q, ...updates } : q
    );
    updateData({ questions: newQuestions });
  };

  const removeQuestion = (index: number) => {
    const newQuestions = data.questions.filter((_, i) => i !== index);
    updateData({ questions: newQuestions });
  };

  const tabs = [
    { id: 'theory' as const, label: 'Théorie' },
    { id: 'quiz' as const, label: `Quiz (${data.questions.length})` },
    { id: 'practice' as const, label: 'Pratique' },
  ];

  return (
    <div className="space-y-6">
      {/* Tab navigation */}
      <div style={{ borderBottom: '1px solid var(--color-border)' }}>
        <nav className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="pb-4 px-1 text-sm font-medium transition-colors"
              style={
                activeTab === tab.id
                  ? { color: 'var(--color-primary)', borderBottom: '2px solid var(--color-primary)' }
                  : { color: 'var(--color-text-muted)' }
              }
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Theory Tab */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {/* Mode Toggle */}
          <Card>
            <CardHeader>
              <CardTitle>Mode d&apos;affichage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="lesson-mode"
                    value="LEGACY"
                    checked={data.mode === 'LEGACY'}
                    onChange={() => updateData({ mode: 'LEGACY' })}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    Mode classique (onglets)
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="lesson-mode"
                    value="SLIDES"
                    checked={data.mode === 'SLIDES'}
                    onChange={() => updateData({ mode: 'SLIDES' })}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    Mode slides (style Duolingo)
                  </span>
                </label>
              </div>
              <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
                {data.mode === 'SLIDES'
                  ? 'La théorie sera découpée en slides navigables. Chaque titre ## crée une nouvelle slide.'
                  : 'La théorie, le quiz et la pratique s\'affichent dans des onglets séparés.'}
              </p>
            </CardContent>
          </Card>

          {/* Theory Content */}
          <Card>
            <CardHeader>
              <CardTitle>Contenu théorique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Utilisez la syntaxe Markdown pour formater votre contenu (titres, listes, code, etc.)
                {data.mode === 'SLIDES' && (
                  <span className="mt-1 flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                    <Lightbulb className="w-4 h-4 inline" /> En mode slides, chaque titre ## crée une nouvelle slide.
                  </span>
                )}
              </p>
              <textarea
                value={data.theoryContent}
                onChange={(e) => updateData({ theoryContent: e.target.value })}
                rows={20}
                className="w-full font-mono text-sm rounded-lg p-4 themed-focus"
                style={inputStyle}
                placeholder="# Titre principal&#10;&#10;## Section 1&#10;&#10;Votre contenu ici...&#10;&#10;- Point 1&#10;- Point 2&#10;&#10;```code```"
              />
              {data.mode === 'SLIDES' && theorySections.length > 0 && (
                <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Slides détectées ({theorySections.length}):
                  </p>
                  <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {theorySections.map((section, index) => (
                      <li key={section.id}>
                        {index + 1}. {section.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quiz Tab */}
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
                  value={data.quizThreshold}
                  onChange={(e) =>
                    updateData({ quizThreshold: parseInt(e.target.value) || 70 })
                  }
                />
              </div>
              <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
                L&apos;apprenant doit obtenir au moins ce pourcentage pour réussir le quiz.
              </p>
            </CardContent>
          </Card>

          {data.questions.map((question, index) => (
            <QuizQuestionEditor
              key={index}
              question={question}
              questionIndex={index}
              theorySections={theorySections}
              onUpdate={(updates) => updateQuestion(index, updates)}
              onRemove={() => removeQuestion(index)}
            />
          ))}

          <Button variant="outline" onClick={addQuestion} className="w-full">
            + Ajouter une question
          </Button>

          {data.questions.length === 0 && (
            <div className="text-center py-8 rounded-lg" style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px dashed var(--color-border)' }}>
              <p style={{ color: 'var(--color-text-muted)' }}>Aucune question ajoutée</p>
              <p className="text-sm mt-1" style={{ color: 'var(--ctp-overlay1)' }}>
                Cliquez sur &quot;Ajouter une question&quot; pour commencer
              </p>
            </div>
          )}
        </div>
      )}

      {/* Practice Tab */}
      {activeTab === 'practice' && (
        <Card>
          <CardHeader>
            <CardTitle>Section pratique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                Type de pratique
              </label>
              <select
                value={data.practiceType}
                onChange={(e) => updateData({ practiceType: e.target.value })}
                className="w-full rounded-lg px-4 py-2 themed-focus"
                style={inputStyle}
              >
                {PRACTICE_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                Durée du timer (minutes)
              </label>
              <div className="w-32">
                <Input
                  type="number"
                  min={1}
                  max={60}
                  value={Math.floor(data.practiceTimerDuration / 60)}
                  onChange={(e) =>
                    updateData({ practiceTimerDuration: (parseInt(e.target.value) || 5) * 60 })
                  }
                />
              </div>
              <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
                Durée minimum avant que l&apos;apprenant puisse valider l&apos;exercice (1-60 minutes).
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                Instructions de pratique
              </label>
              <textarea
                value={data.practiceInstructions}
                onChange={(e) => updateData({ practiceInstructions: e.target.value })}
                rows={8}
                className="w-full rounded-lg px-4 py-2 themed-focus"
                style={inputStyle}
                placeholder="Décrivez les étapes de la pratique que l'apprenant doit effectuer...&#10;&#10;1. Première étape&#10;2. Deuxième étape&#10;3. etc."
              />
              <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
                Ces instructions seront affichées à l&apos;apprenant après qu&apos;il ait réussi le quiz.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
