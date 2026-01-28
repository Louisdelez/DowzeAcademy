import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { authOptions } from '@/lib/auth/learner-auth';
import { markTheoryViewed } from '@/lib/services/progression-service';
import { validateAdminSession, getGameModeCookie } from '@/lib/auth/admin-auth';

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

    // Check if admin game mode is enabled to bypass lock
    const adminSession = await validateAdminSession();
    const isAdminGameMode = !!(adminSession && await getGameModeCookie());

    const progression = await markTheoryViewed(session.user.id, moduleId, isAdminGameMode);

    if (!progression) {
      return NextResponse.json(
        { error: 'Module not found or locked' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: progression.status,
      theoryViewedAt: progression.theoryViewedAt,
      quizPassedAt: progression.quizPassedAt,
      practiceCompletedAt: progression.practiceCompletedAt,
      completedAt: progression.completedAt,
    });
  } catch (error) {
    console.error('Error marking theory as viewed:', error);
    return NextResponse.json({ error: 'Failed to update progression' }, { status: 500 });
  }
}
