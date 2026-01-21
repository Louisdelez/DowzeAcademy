import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { markPracticeCompleted } from '@/lib/services/progression-service';

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

    const progression = await markPracticeCompleted(session.user.id, moduleId);

    if (!progression) {
      return NextResponse.json(
        { error: 'Cannot complete practice. Quiz must be passed first.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: progression.status,
      completedAt: progression.completedAt,
    });
  } catch (error) {
    console.error('Error marking practice as complete:', error);
    return NextResponse.json({ error: 'Failed to update progression' }, { status: 500 });
  }
}
