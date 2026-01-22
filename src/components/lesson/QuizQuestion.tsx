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

  const getFeedbackStyles = () => {
    if (!showFeedback) {
      return {
        backgroundColor: 'var(--color-bg-tertiary)',
        borderColor: 'var(--color-border)',
      };
    }
    return isCorrect
      ? {
          backgroundColor: 'color-mix(in srgb, var(--ctp-green) 15%, transparent)',
          borderColor: 'var(--ctp-green)',
        }
      : {
          backgroundColor: 'color-mix(in srgb, var(--ctp-red) 15%, transparent)',
          borderColor: 'var(--ctp-red)',
        };
  };

  return (
    <div
      className="p-4 rounded-lg"
      style={{
        ...getFeedbackStyles(),
        borderWidth: '1px',
      }}
    >
      <p className="font-medium mb-4" style={{ color: 'var(--color-text)' }}>
        <span className="mr-2" style={{ color: 'var(--color-primary)' }}>
          Q{questionNumber}.
        </span>
        {questionText}
      </p>

      {questionType === 'SINGLE_CHOICE' && options && (
        <div className="space-y-2">
          {options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            return (
              <label
                key={option.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
                  ${disabled ? 'cursor-not-allowed opacity-75' : ''}`}
                style={{
                  backgroundColor: isSelected
                    ? 'color-mix(in srgb, var(--color-primary) 15%, transparent)'
                    : 'var(--color-bg-elevated)',
                  borderWidth: '1px',
                  borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                }}
              >
                <input
                  type="radio"
                  name={`question-${questionNumber}`}
                  checked={isSelected}
                  onChange={() => handleSingleChoice(option.id)}
                  disabled={disabled}
                  className="w-4 h-4"
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <span style={{ color: 'var(--color-text-secondary)' }}>{option.text}</span>
              </label>
            );
          })}
        </div>
      )}

      {questionType === 'MULTIPLE_CHOICE' && options && (
        <div className="space-y-2">
          <p className="text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>
            Sélectionnez toutes les réponses correctes
          </p>
          {options.map((option) => {
            const isSelected = Array.isArray(selectedAnswer) && selectedAnswer.includes(option.id);
            return (
              <label
                key={option.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
                  ${disabled ? 'cursor-not-allowed opacity-75' : ''}`}
                style={{
                  backgroundColor: isSelected
                    ? 'color-mix(in srgb, var(--color-primary) 15%, transparent)'
                    : 'var(--color-bg-elevated)',
                  borderWidth: '1px',
                  borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                }}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleMultipleChoice(option.id)}
                  disabled={disabled}
                  className="w-4 h-4 rounded"
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <span style={{ color: 'var(--color-text-secondary)' }}>{option.text}</span>
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
