import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';

interface RouteParams {
  params: Promise<{ moduleId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { moduleId } = await params;

    const attempts = await prisma.quizAttempt.findMany({
      where: {
        progression: {
          userId: session.user.id,
          moduleId,
        },
      },
      orderBy: { attemptedAt: 'desc' },
      select: {
        id: true,
        score: true,
        passed: true,
        attemptedAt: true,
      },
    });

    return NextResponse.json(attempts);
  } catch (error) {
    console.error('Error fetching quiz attempts:', error);
    return NextResponse.json({ error: 'Failed to fetch attempts' }, { status: 500 });
  }
}
