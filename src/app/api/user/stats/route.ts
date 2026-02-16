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

    const userId = session.user.id;

    // Count completed modules
    const completedModules = await prisma.userProgression.count({
      where: {
        userId,
        status: 'COMPLETED',
      },
    });

    // Count passed quizzes
    const passedQuizzes = await prisma.quizAttempt.count({
      where: {
        progression: { userId },
        passed: true,
      },
    });

    // Estimate study time from progression records
    // Count modules where theory was viewed as ~10min each
    const theoryViewed = await prisma.userProgression.count({
      where: {
        userId,
        theoryViewedAt: { not: null },
      },
    });

    const estimatedMinutes = theoryViewed * 10;
    const hours = Math.floor(estimatedMinutes / 60);
    const minutes = estimatedMinutes % 60;
    const studyTime = hours > 0 ? `${hours}h${minutes > 0 ? `${minutes}` : ''}` : `${minutes}min`;

    return NextResponse.json({
      completedModules,
      passedQuizzes,
      studyTime,
    });
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
