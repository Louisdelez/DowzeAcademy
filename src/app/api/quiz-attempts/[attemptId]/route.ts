/**
 * GET /api/quiz-attempts/[attemptId]
 *
 * Retrieves the current state of a quiz attempt.
 * Used for resuming an in-progress attempt or reviewing a completed one.
 * Feature 005: Quiz Randomization V1
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { loadAttempt } from '@/lib/services/quiz-attempt-service';

interface RouteParams {
  params: Promise<{ attemptId: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    // Authenticate user
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { attemptId } = await params;

    // Load attempt (verifies ownership internally)
    const attempt = await loadAttempt(attemptId, session.user.id);

    if (!attempt) {
      return NextResponse.json({ error: 'Attempt not found' }, { status: 404 });
    }

    return NextResponse.json(attempt);
  } catch (error) {
    console.error('Error loading quiz attempt:', error);

    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to load quiz attempt' },
      { status: 500 }
    );
  }
}
