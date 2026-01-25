import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { calculatePackProgress, calculateDisciplineProgress, getPackProgressions } from '@/lib/services/progression-service';
import { prisma } from '@/lib/db/client';
import type { ProgressStats } from '@/types/models';

type DisciplineStatus = 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED';

interface RouteParams {
  params: Promise<{ packId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { packId } = await params;

    // Get pack with disciplines in order to calculate per-discipline stats
    const pack = await prisma.pack.findUnique({
      where: { id: packId },
      include: {
        disciplines: {
          where: { deletedAt: null },
          orderBy: { order: 'asc' },
          select: { id: true },
        },
      },
    });

    const [stats, progressions] = await Promise.all([
      calculatePackProgress(session.user.id, packId),
      getPackProgressions(session.user.id, packId),
    ]);

    // Create a map of moduleId -> status for easy lookup
    const moduleStatuses: Record<string, string> = {};
    for (const prog of progressions) {
      moduleStatuses[prog.moduleId] = prog.status;
    }

    // Calculate stats and statuses per discipline
    const disciplineStats: Record<string, ProgressStats> = {};
    const disciplineStatuses: Record<string, DisciplineStatus> = {};

    if (pack?.disciplines) {
      // First, calculate all discipline stats
      const disciplineStatsPromises = pack.disciplines.map(async (discipline) => {
        const dStats = await calculateDisciplineProgress(session.user.id, discipline.id);
        return { id: discipline.id, stats: dStats };
      });
      const results = await Promise.all(disciplineStatsPromises);

      for (const result of results) {
        disciplineStats[result.id] = result.stats;
      }

      // Then, calculate statuses based on order and previous discipline completion
      let previousCompleted = true; // First discipline is always unlocked

      for (const discipline of pack.disciplines) {
        const dStats = disciplineStats[discipline.id];

        if (!previousCompleted) {
          // Previous discipline not completed, this one is locked
          disciplineStatuses[discipline.id] = 'LOCKED';
        } else if (dStats.percentage === 100) {
          // All modules completed
          disciplineStatuses[discipline.id] = 'COMPLETED';
        } else if (dStats.completed > 0 || dStats.inProgress > 0) {
          // Some progress made
          disciplineStatuses[discipline.id] = 'IN_PROGRESS';
        } else {
          // No progress yet but unlocked
          disciplineStatuses[discipline.id] = 'AVAILABLE';
        }

        // Update for next iteration: only unlock next if this one is completed
        previousCompleted = dStats.percentage === 100;
      }
    }

    return NextResponse.json({
      stats,
      moduleStatuses,
      disciplineStats,
      disciplineStatuses,
    });
  } catch (error) {
    console.error('Error fetching pack progression:', error);
    return NextResponse.json({ error: 'Failed to fetch progression' }, { status: 500 });
  }
}
