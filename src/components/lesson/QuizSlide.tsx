'use client';

import { QuizQuestion } from './QuizQuestion';
import type { QuestionType } from '@/types/models';

interface Question {
  id: string;
  questionText: string;
  questionType: QuestionType;
  options: { id: string; text: string }[] | null;
}

interface QuizSlideProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | string[] | null;
  onAnswerChange: (answer: string | string[]) => void;
  showFeedback?: boolean;
  isCorrect?: boolean;
  feedback?: string;
}

export function QuizSlide({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerChange,
  showFeedback = false,
  isCorrect,
  feedback,
}: QuizSlideProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div
        className="rounded-xl shadow-sm p-6 sm:p-8"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: 'var(--color-border-light)',
        }}
      >
        {/* Question counter */}
        <div
          className="flex items-center justify-between mb-6 pb-4"
          style={{
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--color-border-light)',
          }}
        >
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Question {questionNumber} sur {totalQuestions}
          </span>
          <span className="text-2xl">
            {showFeedback ? (isCorrect ? '✅' : '❌') : '❓'}
          </span>
        </div>

        {/* Question */}
        <QuizQuestion
          questionNumber={questionNumber}
          questionText={question.questionText}
          questionType={question.questionType}
          options={question.options}
          selectedAnswer={selectedAnswer}
          onAnswerChange={onAnswerChange}
          disabled={showFeedback}
          showFeedback={showFeedback}
          isCorrect={isCorrect}
        />

        {/* Feedback message */}
        {showFeedback && feedback && (
          <div
            className="mt-4 p-4 rounded-lg"
            style={{
              backgroundColor: isCorrect
                ? 'color-mix(in srgb, var(--ctp-green) 15%, transparent)'
                : 'color-mix(in srgb, var(--ctp-peach) 15%, transparent)',
              borderWidth: '1px',
              borderColor: isCorrect ? 'var(--ctp-green)' : 'var(--ctp-peach)',
            }}
          >
            <p
              className="text-sm"
              style={{ color: isCorrect ? 'var(--ctp-green)' : 'var(--ctp-peach)' }}
            >
              {feedback}
            </p>
          </div>
        )}

        {/* Hint when no answer selected */}
        {!showFeedback && !selectedAnswer && (
          <p
            className="mt-4 text-sm text-center"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Sélectionnez une réponse pour continuer
          </p>
        )}
      </div>
    </div>
  );
}
