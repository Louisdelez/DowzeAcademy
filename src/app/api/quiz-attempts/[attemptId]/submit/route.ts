/**
 * POST /api/quiz-attempts/[attemptId]/submit
 *
 * Finalizes a quiz attempt, calculates the score, and determines pass/fail.
 * Feature 005: Quiz Randomization V1
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { submitAttempt } from '@/lib/services/quiz-attempt-service';

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

    // Submit and score the attempt
    const result = await submitAttempt(attemptId, session.user.id);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error submitting quiz attempt:', error);

    if (error instanceof Error) {
      if (error.message === 'Unauthorized') {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
      if (error.message === 'Attempt not found') {
        return NextResponse.json({ error: error.message }, { status: 404 });
      }
      if (error.message === 'Attempt already submitted') {
        return NextResponse.json({ error: error.message }, { status: 409 });
      }
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to submit quiz attempt' },
      { status: 500 }
    );
  }
}
