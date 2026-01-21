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

    const progressions = await prisma.userProgression.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        module: {
          include: {
            discipline: {
              include: {
                pack: {
                  include: {
                    domain: true,
                  },
                },
              },
            },
          },
        },
        attempts: {
          orderBy: { attemptedAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    return NextResponse.json(progressions);
  } catch (error) {
    console.error('Error fetching progressions:', error);
    return NextResponse.json({ error: 'Failed to fetch progressions' }, { status: 500 });
  }
}
