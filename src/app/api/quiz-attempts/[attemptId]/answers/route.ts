/**
 * POST /api/quiz-attempts/[attemptId]/answers
 *
 * Submits an answer for a question in an attempt.
 * Converts label selections (A/B/C/D) to option IDs using the stored mapping.
 * Feature 005: Quiz Randomization V1
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';
import { saveAnswer } from '@/lib/services/quiz-attempt-service';
import { labelToOptionId, labelsToOptionIds } from '@/lib/services/quiz-randomization-service';
import { answerRequestSchema, validateRequestBody } from '@/lib/validations/quiz-attempt';
import type { ChoiceMapping } from '@/types/quiz';

interface RouteParams {
  params: Promise<{ attemptId: string }>;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    // Authenticate user
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { attemptId } = await params;

    // T041: Validate request body with Zod
    const rawBody = await request.json();
    const validation = validateRequestBody(rawBody, answerRequestSchema);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const body = validation.data;

    // Load the attempt question to get the choice mapping
    const attemptQuestion = await prisma.quizAttemptQuestion.findFirst({
      where: {
        attemptId,
        questionId: body.questionId,
      },
      include: {
        attempt: {
          include: {
            progression: true,
          },
        },
      },
    });

    if (!attemptQuestion) {
      return NextResponse.json({ error: 'Question not part of this attempt' }, { status: 400 });
    }

    // Verify ownership
    if (attemptQuestion.attempt.progression.userId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Check attempt status
    if (attemptQuestion.attempt.status !== 'IN_PROGRESS') {
      return NextResponse.json({ error: 'Cannot modify a submitted attempt' }, { status: 409 });
    }

    // Convert label(s) to option ID(s) if this is an MCQ question
    let answer: string | string[];
    const choiceMapping = attemptQuestion.choiceMappingJson as ChoiceMapping | null;

    if (body.textAnswer !== undefined) {
      // SHORT_TEXT question - use text directly
      answer = body.textAnswer;
    } else if (body.selectedLabel && choiceMapping) {
      // SINGLE_CHOICE - convert label to option ID
      const optionId = labelToOptionId(body.selectedLabel, choiceMapping);
      if (!optionId) {
        return NextResponse.json({ error: 'Invalid label selection' }, { status: 400 });
      }
      answer = optionId;
    } else if (body.selectedLabels && choiceMapping) {
      // MULTIPLE_CHOICE - convert labels to option IDs
      const optionIds = labelsToOptionIds(body.selectedLabels, choiceMapping);
      if (optionIds.length !== body.selectedLabels.length) {
        return NextResponse.json({ error: 'Invalid label selection' }, { status: 400 });
      }
      answer = optionIds;
    } else {
      return NextResponse.json(
        { error: 'Must provide selectedLabel, selectedLabels, or textAnswer' },
        { status: 400 }
      );
    }

    // Save the answer
    const result = await saveAnswer({
      attemptId,
      questionId: body.questionId,
      answer,
      userId: session.user.id,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error saving answer:', error);

    if (error instanceof Error) {
      if (error.message === 'Unauthorized') {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
      if (error.message === 'Cannot modify a submitted attempt') {
        return NextResponse.json({ error: error.message }, { status: 409 });
      }
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to save answer' },
      { status: 500 }
    );
  }
}
