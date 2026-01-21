'use client';

import { type QuestionType } from '@/types/models';
import { Input } from '@/components/ui/Input';

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestionProps {
  questionNumber: number;
  questionText: string;
  questionType: QuestionType;
  options: QuizOption[] | null;
  selectedAnswer: string | string[] | null;
  onAnswerChange: (answer: string | string[]) => void;
  disabled?: boolean;
  showFeedback?: boolean;
  isCorrect?: boolean;
}

export function QuizQuestion({
  questionNumber,
  questionText,
  questionType,
  options,
  selectedAnswer,
  onAnswerChange,
  disabled = false,
  showFeedback = false,
  isCorrect,
}: QuizQuestionProps) {
  const handleSingleChoice = (optionId: string) => {
    if (!disabled) {
      onAnswerChange(optionId);
    }
  };

  const handleMultipleChoice = (optionId: string) => {
    if (disabled) return;

    const currentAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : [];
    if (currentAnswers.includes(optionId)) {
      onAnswerChange(currentAnswers.filter((id) => id !== optionId));
    } else {
      onAnswerChange([...currentAnswers, optionId]);
    }
  };

  const handleTextChange = (text: string) => {
    if (!disabled) {
      onAnswerChange(text);
    }
  };

  const feedbackStyles = showFeedback
    ? isCorrect
      ? 'border-green-500 bg-green-50'
      : 'border-red-500 bg-red-50'
    : '';

  return (
    <div className={`p-4 border rounded-lg ${feedbackStyles || 'border-gray-200 bg-white'}`}>
      <p className="font-medium text-gray-900 mb-4">
        <span className="text-blue-600 mr-2">Q{questionNumber}.</span>
        {questionText}
      </p>

      {questionType === 'SINGLE_CHOICE' && options && (
        <div className="space-y-2">
          {options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            return (
              <label
                key={option.id}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors
                  ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                  ${disabled ? 'cursor-not-allowed opacity-75' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${questionNumber}`}
                  checked={isSelected}
                  onChange={() => handleSingleChoice(option.id)}
                  disabled={disabled}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">{option.text}</span>
              </label>
            );
          })}
        </div>
      )}

      {questionType === 'MULTIPLE_CHOICE' && options && (
        <div className="space-y-2">
          <p className="text-sm text-gray-500 mb-2">Sélectionnez toutes les réponses correctes</p>
          {options.map((option) => {
            const isSelected = Array.isArray(selectedAnswer) && selectedAnswer.includes(option.id);
            return (
              <label
                key={option.id}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors
                  ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                  ${disabled ? 'cursor-not-allowed opacity-75' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleMultipleChoice(option.id)}
                  disabled={disabled}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-gray-700">{option.text}</span>
              </label>
            );
          })}
        </div>
      )}

      {questionType === 'SHORT_TEXT' && (
        <Input
          value={typeof selectedAnswer === 'string' ? selectedAnswer : ''}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Votre réponse..."
          disabled={disabled}
        />
      )}
    </div>
  );
}
