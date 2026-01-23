/**
 * Quiz Attempt Validation Schemas (Feature 005)
 *
 * Zod schemas for validating quiz attempt API requests.
 */

import { z } from 'zod';

/**
 * Schema for answer submission request body.
 * POST /api/quiz-attempts/[attemptId]/answers
 */
export const answerRequestSchema = z.object({
  questionId: z.string().uuid('Invalid question ID format'),
  selectedLabel: z.string().max(2).optional(),
  selectedLabels: z.array(z.string().max(2)).optional(),
  textAnswer: z.string().max(1000).optional(),
}).refine(
  (data) => data.selectedLabel || data.selectedLabels || data.textAnswer !== undefined,
  { message: 'Must provide selectedLabel, selectedLabels, or textAnswer' }
);

/**
 * Schema for creating a quiz attempt.
 * POST /api/lessons/[lessonId]/quiz-attempts
 */
export const createAttemptRequestSchema = z.object({
  // No body required - lessonId comes from URL params
}).optional();

/**
 * Validate and parse request body with Zod schema.
 * Returns the parsed data or throws a validation error.
 */
export function validateRequestBody<T>(
  body: unknown,
  schema: z.ZodSchema<T>
): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(body);

  if (!result.success) {
    const errorMessages = result.error.issues.map((e) => e.message).join(', ');
    return { success: false, error: errorMessages };
  }

  return { success: true, data: result.data };
}
