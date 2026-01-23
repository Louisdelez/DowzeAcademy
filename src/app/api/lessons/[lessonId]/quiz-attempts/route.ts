/**
 * POST /api/lessons/[lessonId]/quiz-attempts
 *
 * Creates a new quiz attempt with randomization applied.
 * Feature 005: Quiz Randomization V1
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';
import { createAttempt, getInProgressAttempt } from '@/lib/services/quiz-attempt-service';

interface RouteParams {
  params: Promise<{ lessonId: string }>;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    // Authenticate user
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { lessonId } = await params;

    // Parse optional seed from request body
    let seed: string | undefined;
    try {
      const body = await request.json();
      seed = body.seed;
    } catch {
      // No body or invalid JSON, that's fine
    }

    // Verify lesson exists and get module info
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        module: true,
      },
    });

    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    // Get or create user progression
    let progression = await prisma.userProgression.findFirst({
      where: {
        userId: session.user.id,
        moduleId: lesson.moduleId,
      },
    });

    if (!progression) {
      progression = await prisma.userProgression.create({
        data: {
          userId: session.user.id,
          moduleId: lesson.moduleId,
          status: 'IN_PROGRESS',
        },
      });
    }

    // Check for existing in-progress attempt
    const existingAttempt = await getInProgressAttempt(session.user.id, lessonId);
    if (existingAttempt) {
      return NextResponse.json(
        { error: 'An in-progress attempt already exists', attemptId: existingAttempt.id },
        { status: 409 }
      );
    }

    // Create new attempt with randomization
    const result = await createAttempt({
      userId: session.user.id,
      lessonId,
      progressionId: progression.id,
      seed,
    });

    return NextResponse.json(
      {
        attemptId: result.attemptId,
        lessonId,
        status: 'IN_PROGRESS',
        startedAt: new Date().toISOString(),
        submittedAt: null,
        score: null,
        passed: null,
        questions: result.questions,
        config: result.config,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating quiz attempt:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create quiz attempt' },
      { status: 500 }
    );
  }
}
