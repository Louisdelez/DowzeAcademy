'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export interface QuizQuestion {
  id?: string;
  questionText: string;
  questionType: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'SHORT_TEXT';
  options: { id: string; text: string }[] | null;
  correctAnswer: string | string[];
  feedback: string;
  order: number;
  linkedTheorySection?: string | null;
}

interface TheorySection {
  id: string;
  title: string;
}

interface QuizQuestionEditorProps {
  question: QuizQuestion;
  questionIndex: number;
  theorySections?: TheorySection[];
  onUpdate: (updates: Partial<QuizQuestion>) => void;
  onRemove: () => void;
}

const QUESTION_TYPES = [
  { value: 'SINGLE_CHOICE', label: 'Choix unique' },
  { value: 'MULTIPLE_CHOICE', label: 'Choix multiple' },
  { value: 'SHORT_TEXT', label: 'Réponse courte' },
];

export function QuizQuestionEditor({
  question,
  questionIndex,
  theorySections = [],
  onUpdate,
  onRemove,
}: QuizQuestionEditorProps) {
  const addOption = () => {
    const options = question.options || [];
    const nextId = String.fromCharCode(97 + options.length);
    onUpdate({
      options: [...options, { id: nextId, text: '' }],
    });
  };

  const updateOption = (optionIndex: number, text: string) => {
    const newOptions = [...(question.options || [])];
    newOptions[optionIndex] = { ...newOptions[optionIndex], text };
    onUpdate({ options: newOptions });
  };

  const removeOption = (optionIndex: number) => {
    const newOptions = (question.options || []).filter((_, i) => i !== optionIndex);
    onUpdate({ options: newOptions });
  };

  const handleCorrectAnswerChange = (optionId: string, checked: boolean) => {
    if (question.questionType === 'MULTIPLE_CHOICE') {
      const current = (question.correctAnswer as string[]) || [];
      onUpdate({
        correctAnswer: checked
          ? [...current, optionId]
          : current.filter((id) => id !== optionId),
      });
    } else {
      onUpdate({ correctAnswer: optionId });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Question {questionIndex + 1}</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onRemove}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            Supprimer
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Question Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type de question
          </label>
          <select
            value={question.questionType}
            onChange={(e) => {
              const newType = e.target.value as QuizQuestion['questionType'];
              onUpdate({
                questionType: newType,
                options:
                  newType === 'SHORT_TEXT'
                    ? null
                    : question.options || [
                        { id: 'a', text: '' },
                        { id: 'b', text: '' },
                      ],
                correctAnswer: newType === 'MULTIPLE_CHOICE' ? [] : '',
              });
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {QUESTION_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Question Text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question
          </label>
          <textarea
            value={question.questionText}
            onChange={(e) => onUpdate({ questionText: e.target.value })}
            rows={2}
            placeholder="Entrez votre question..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Options (for choice questions) */}
        {question.questionType !== 'SHORT_TEXT' && question.options && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Options (cochez la/les bonne(s) réponse(s))
            </label>
            {question.options.map((option, optionIndex) => (
              <div key={option.id} className="flex items-center gap-2">
                <input
                  type={question.questionType === 'MULTIPLE_CHOICE' ? 'checkbox' : 'radio'}
                  name={`correct-${questionIndex}`}
                  checked={
                    question.questionType === 'MULTIPLE_CHOICE'
                      ? ((question.correctAnswer as string[]) || []).includes(option.id)
                      : question.correctAnswer === option.id
                  }
                  onChange={(e) => handleCorrectAnswerChange(option.id, e.target.checked)}
                  className="w-4 h-4 text-blue-600"
                />
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => updateOption(optionIndex, e.target.value)}
                  placeholder={`Option ${option.id.toUpperCase()}`}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {question.options && question.options.length > 2 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeOption(optionIndex)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    ✕
                  </Button>
                )}
              </div>
            ))}
            <Button variant="ghost" size="sm" onClick={addOption}>
              + Ajouter une option
            </Button>
          </div>
        )}

        {/* Correct Answer (for short text) */}
        {question.questionType === 'SHORT_TEXT' && (
          <Input
            label="Réponse correcte"
            value={question.correctAnswer as string}
            onChange={(e) => onUpdate({ correctAnswer: e.target.value })}
            placeholder="La réponse attendue..."
          />
        )}

        {/* Feedback */}
        <Input
          label="Feedback (affiché après réponse)"
          value={question.feedback}
          onChange={(e) => onUpdate({ feedback: e.target.value })}
          placeholder="Explication ou conseil..."
        />

        {/* Linked Theory Section (for slides mode) */}
        {theorySections.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Section de théorie liée (pour révision)
            </label>
            <select
              value={question.linkedTheorySection || ''}
              onChange={(e) =>
                onUpdate({
                  linkedTheorySection: e.target.value || null,
                })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Aucune section liée</option>
              {theorySections.map((section) => (
                <option key={section.id} value={section.title}>
                  {section.title}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500 mt-1">
              En mode slides, l&apos;apprenant pourra revoir cette section s&apos;il répond mal.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
