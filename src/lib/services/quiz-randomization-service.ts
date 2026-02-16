/**
 * Quiz Randomization Service (Feature 005)
 *
 * Handles question selection, shuffling, and choice mapping for quiz attempts.
 */

import { fisherYatesShuffle, selectRandom, getLabelForPosition } from '@/lib/utils/shuffle';
import type {
  QuizQuestionData,
  QuizOptionData,
  ChoiceMapping,
  RandomizedQuestion,
  QuizRandomizationConfig,
} from '@/types/quiz';

/**
 * T040: Normalize config with backward compatibility defaults.
 * Ensures old lessons without randomization fields work correctly.
 */
export function normalizeConfig(config: Partial<QuizRandomizationConfig>): QuizRandomizationConfig {
  return {
    questionsToShow: config.questionsToShow ?? null,
    shuffleQuestions: config.shuffleQuestions ?? true, // Default: shuffle enabled
    shuffleAnswers: config.shuffleAnswers ?? true, // Default: shuffle enabled
  };
}

/**
 * Select questions from the pool based on configuration.
 *
 * - If questionsToShow is null, 0, or >= pool size: return all questions
 * - Otherwise: select questionsToShow random questions
 * - If shuffleQuestions is true: randomize the order
 * - If shuffleQuestions is false: maintain original order
 *
 * @param questions - Pool of available questions
 * @param config - Randomization configuration
 * @param seed - Optional seed for reproducible selection
 */
export function selectQuestions(
  questions: QuizQuestionData[],
  config: QuizRandomizationConfig,
  seed?: string
): QuizQuestionData[] {
  const { questionsToShow, shuffleQuestions } = config;

  // Determine how many questions to show
  const count =
    questionsToShow === null || questionsToShow === 0 || questionsToShow >= questions.length
      ? questions.length
      : questionsToShow;

  if (shuffleQuestions) {
    // Shuffle and take first N
    return selectRandom(questions, count, seed);
  } else {
    // Keep original order, take first N
    // Sort by order field first to ensure stable ordering
    const sorted = [...questions].sort((a, b) => a.order - b.order);
    return sorted.slice(0, count);
  }
}

/**
 * Build a mapping from option IDs to display labels (A, B, C, D, etc.)
 *
 * @param options - Array of options for a question
 * @param shuffleAnswers - Whether to shuffle the options
 * @param seed - Optional seed for reproducible shuffling
 * @returns Map of optionId -> label, or null for non-MCQ questions
 */
export function buildChoiceMapping(
  options: QuizOptionData[],
  shuffleAnswers: boolean,
  seed?: string
): ChoiceMapping {
  // Order options
  const orderedOptions = shuffleAnswers
    ? fisherYatesShuffle(options, seed)
    : [...options].sort((a, b) => a.order - b.order);

  // Build mapping
  const mapping: ChoiceMapping = {};
  orderedOptions.forEach((option, index) => {
    mapping[option.id] = getLabelForPosition(index);
  });

  return mapping;
}

/**
 * Get the ordered options based on a choice mapping.
 *
 * @param options - Original options
 * @param mapping - Choice mapping (optionId -> label)
 * @returns Options ordered by their mapped labels
 */
export function getOrderedOptions(
  options: QuizOptionData[],
  mapping: ChoiceMapping
): Array<{ label: string; text: string; optionId: string }> {
  return options
    .map((opt) => ({
      label: mapping[opt.id],
      text: opt.text,
      optionId: opt.id,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

/**
 * Convert a label selection to option ID using the mapping.
 *
 * @param label - The selected label (e.g., "B")
 * @param mapping - Choice mapping (optionId -> label)
 * @returns The option ID, or null if label not found
 */
export function labelToOptionId(label: string, mapping: ChoiceMapping): string | null {
  for (const [optionId, mappedLabel] of Object.entries(mapping)) {
    if (mappedLabel === label) {
      return optionId;
    }
  }
  return null;
}

/**
 * Convert multiple label selections to option IDs.
 *
 * @param labels - Array of selected labels
 * @param mapping - Choice mapping
 * @returns Array of option IDs
 */
export function labelsToOptionIds(labels: string[], mapping: ChoiceMapping): string[] {
  return labels
    .map((label) => labelToOptionId(label, mapping))
    .filter((id): id is string => id !== null);
}

/**
 * Convert option ID to label using the mapping.
 *
 * @param optionId - The option ID
 * @param mapping - Choice mapping
 * @returns The label, or null if not found
 */
export function optionIdToLabel(optionId: string, mapping: ChoiceMapping): string | null {
  return mapping[optionId] ?? null;
}

/**
 * Prepare randomized questions for an attempt.
 *
 * @param questions - Selected questions
 * @param config - Randomization configuration
 * @param seed - Optional seed for reproducible mapping
 */
export function prepareRandomizedQuestions(
  questions: QuizQuestionData[],
  config: QuizRandomizationConfig,
  seed?: string
): RandomizedQuestion[] {
  return questions.map((question, index) => {
    // Only build choice mapping for MCQ questions with choices
    const hasChoices =
      question.choices.length > 0 &&
      (question.questionType === 'SINGLE_CHOICE' || question.questionType === 'MULTIPLE_CHOICE');

    // Create question-specific seed if base seed provided
    const questionSeed = seed ? `${seed}-q${question.id}` : undefined;

    const choiceMapping = hasChoices
      ? buildChoiceMapping(question.choices, config.shuffleAnswers, questionSeed)
      : null;

    return {
      question,
      position: index + 1, // 1-indexed
      choiceMapping,
    };
  });
}

/**
 * Check if a question type supports answer shuffling.
 * SHORT_TEXT questions don't have shuffleable answers.
 */
export function supportsAnswerShuffle(questionType: string): boolean {
  return questionType === 'SINGLE_CHOICE' || questionType === 'MULTIPLE_CHOICE';
}

/**
 * Validate that a question has at least one correct answer.
 */
export function validateQuestionOptions(options: QuizOptionData[]): {
  valid: boolean;
  error?: string;
} {
  if (options.length < 2) {
    return { valid: false, error: 'Question must have at least 2 options' };
  }

  const correctCount = options.filter((o) => o.isCorrect).length;
  if (correctCount === 0) {
    return { valid: false, error: 'Question must have at least one correct answer' };
  }

  return { valid: true };
}
