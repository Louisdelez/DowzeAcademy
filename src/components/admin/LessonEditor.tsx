'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { QuizQuestionEditor, type QuizQuestion } from './QuizQuestionEditor';

export interface LessonData {
  theoryContent: string;
  quizThreshold: number;
  practiceType: string;
  practiceInstructions: string;
  questions: QuizQuestion[];
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

export function LessonEditor({ initialData, onChange }: LessonEditorProps) {
  const [activeTab, setActiveTab] = useState<'theory' | 'quiz' | 'practice'>('theory');
  const [data, setData] = useState<LessonData>(initialData);

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
      <div className="border-b border-gray-200">
        <nav className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-1 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Theory Tab */}
      {activeTab === 'theory' && (
        <Card>
          <CardHeader>
            <CardTitle>Contenu théorique</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Utilisez la syntaxe Markdown pour formater votre contenu (titres, listes, code, etc.)
            </p>
            <textarea
              value={data.theoryContent}
              onChange={(e) => updateData({ theoryContent: e.target.value })}
              rows={20}
              className="w-full font-mono text-sm border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="# Titre principal&#10;&#10;## Section 1&#10;&#10;Votre contenu ici...&#10;&#10;- Point 1&#10;- Point 2&#10;&#10;```code```"
            />
          </CardContent>
        </Card>
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
              <p className="text-sm text-gray-500 mt-2">
                L&apos;apprenant doit obtenir au moins ce pourcentage pour réussir le quiz.
              </p>
            </CardContent>
          </Card>

          {data.questions.map((question, index) => (
            <QuizQuestionEditor
              key={index}
              question={question}
              questionIndex={index}
              onUpdate={(updates) => updateQuestion(index, updates)}
              onRemove={() => removeQuestion(index)}
            />
          ))}

          <Button variant="outline" onClick={addQuestion} className="w-full">
            + Ajouter une question
          </Button>

          {data.questions.length === 0 && (
            <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-500">Aucune question ajoutée</p>
              <p className="text-sm text-gray-400 mt-1">
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de pratique
              </label>
              <select
                value={data.practiceType}
                onChange={(e) => updateData({ practiceType: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                Instructions de pratique
              </label>
              <textarea
                value={data.practiceInstructions}
                onChange={(e) => updateData({ practiceInstructions: e.target.value })}
                rows={8}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Décrivez les étapes de la pratique que l'apprenant doit effectuer...&#10;&#10;1. Première étape&#10;2. Deuxième étape&#10;3. etc."
              />
              <p className="text-sm text-gray-500 mt-2">
                Ces instructions seront affichées à l&apos;apprenant après qu&apos;il ait réussi le quiz.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
