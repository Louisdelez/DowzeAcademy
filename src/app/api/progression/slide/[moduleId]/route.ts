import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';
import type { SlideState } from '@/types/slides';

interface RouteParams {
  params: Promise<{ moduleId: string }>;
}

/**
 * GET /api/progression/slide/[moduleId]
 * Returns the current slide progress for a module
 */
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { moduleId } = await params;

    const progression = await prisma.userProgression.findUnique({
      where: {
        userId_moduleId: {
          userId: session.user.id,
          moduleId,
        },
      },
      select: {
        slideState: true,
      },
    });

    if (!progression || !progression.slideState) {
      return NextResponse.json({ slideState: null });
    }

    return NextResponse.json({
      slideState: progression.slideState as unknown as SlideState,
    });
  } catch (error) {
    console.error('Error fetching slide progress:', error);
    return NextResponse.json(
      { error: 'Failed to fetch slide progress' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/progression/slide/[moduleId]
 * Saves the current slide progress for a module
 */
export async function POST(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { moduleId } = await params;
    const body = await request.json();
    const { slideState } = body as { slideState: SlideState };

    if (!slideState) {
      return NextResponse.json(
        { error: 'Slide state is required' },
        { status: 400 }
      );
    }

    // Upsert the progression with slide state
    const progression = await prisma.userProgression.upsert({
      where: {
        userId_moduleId: {
          userId: session.user.id,
          moduleId,
        },
      },
      update: {
        slideState: slideState as unknown as any,
      },
      create: {
        userId: session.user.id,
        moduleId,
        slideState: slideState as unknown as any,
        status: 'IN_PROGRESS',
      },
    });

    return NextResponse.json({
      success: true,
      slideState: progression.slideState as unknown as SlideState,
    });
  } catch (error) {
    console.error('Error saving slide progress:', error);
    return NextResponse.json(
      { error: 'Failed to save slide progress' },
      { status: 500 }
    );
  }
}
