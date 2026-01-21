import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { gradeQuiz, recordQuizAttempt } from '@/lib/services/quiz-service';
import {
  getOrCreateProgression,
  markQuizPassed,
} from '@/lib/services/progression-service';
import { logger } from '@/lib/utils/logger';
import type { QuizAnswer } from '@/types/models';

interface RouteParams {
  params: Promise<{ moduleId: string }>;
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { moduleId } = await params;
    const body = await request.json();
    const answers: QuizAnswer[] = body.answers;

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json({ error: 'Invalid answers format' }, { status: 400 });
    }

    // Get or create progression
    const progression = await getOrCreateProgression(session.user.id, moduleId);

    if (!progression) {
      return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }

    if (progression.status === 'LOCKED') {
      return NextResponse.json({ error: 'Module is locked' }, { status: 403 });
    }

    // Grade the quiz
    const result = await gradeQuiz(moduleId, answers);

    if (!result) {
      return NextResponse.json({ error: 'Failed to grade quiz' }, { status: 500 });
    }

    // Record the attempt
    await recordQuizAttempt(progression.id, answers, result.score, result.passed);

    // If passed and not already passed, update progression
    if (result.passed && !progression.quizPassedAt) {
      await markQuizPassed(session.user.id, moduleId);
    }

    // Log the quiz submission
    logger.userAction.quizSubmitted(session.user.id, moduleId, result.passed, result.score);

    return NextResponse.json({
      score: result.score,
      passed: result.passed,
      feedback: result.feedback,
    });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    return NextResponse.json({ error: 'Failed to submit quiz' }, { status: 500 });
  }
}
