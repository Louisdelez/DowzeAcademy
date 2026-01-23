/**
 * GET /api/user/quiz-attempts
 *
 * Returns all quiz attempts for the authenticated user.
 * Feature 005: Quiz Randomization V1 - Attempt History
 */

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const attempts = await prisma.quizAttempt.findMany({
      where: {
        progression: {
          userId: session.user.id,
        },
        status: 'SUBMITTED', // Only show completed attempts
      },
      orderBy: { submittedAt: 'desc' },
      take: 20, // Limit to recent attempts
      select: {
        id: true,
        score: true,
        passed: true,
        startedAt: true,
        submittedAt: true,
        status: true,
        lesson: {
          select: {
            id: true,
            module: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        questions: {
          select: {
            id: true,
            position: true,
            isCorrect: true,
          },
          orderBy: { position: 'asc' },
        },
      },
    });

    // Format response
    const formattedAttempts = attempts.map((attempt) => ({
      id: attempt.id,
      moduleName: attempt.lesson?.module?.name ?? 'Module inconnu',
      moduleId: attempt.lesson?.module?.id ?? null,
      score: attempt.score,
      passed: attempt.passed,
      startedAt: attempt.startedAt.toISOString(),
      submittedAt: attempt.submittedAt?.toISOString() ?? null,
      totalQuestions: attempt.questions.length,
      correctAnswers: attempt.questions.filter((q) => q.isCorrect).length,
    }));

    return NextResponse.json(formattedAttempts);
  } catch (error) {
    console.error('Error fetching user quiz attempts:', error);
    return NextResponse.json({ error: 'Failed to fetch attempts' }, { status: 500 });
  }
}
