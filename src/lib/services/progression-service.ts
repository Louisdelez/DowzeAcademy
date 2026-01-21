import { prisma } from '@/lib/db/client';
import { ModuleProgressStatus } from '@/types/models';
import type { ProgressStats } from '@/types/models';

/**
 * Gets or creates a user's progression for a module
 */
export async function getOrCreateProgression(userId: string, moduleId: string) {
  let progression = await prisma.userProgression.findUnique({
    where: {
      userId_moduleId: { userId, moduleId },
    },
    include: {
      attempts: {
        orderBy: { attemptedAt: 'desc' },
        take: 5,
      },
    },
  });

  if (!progression) {
    // Check if module exists and get its position
    const module = await prisma.module.findUnique({
      where: { id: moduleId },
      include: {
        discipline: {
          include: {
            modules: {
              where: { deletedAt: null },
              orderBy: { order: 'asc' },
              select: { id: true, order: true },
            },
          },
        },
      },
    });

    if (!module) return null;

    // Determine initial status
    const isFirstModule = module.discipline.modules[0]?.id === moduleId;
    const initialStatus = isFirstModule ? ModuleProgressStatus.AVAILABLE : ModuleProgressStatus.LOCKED;

    progression = await prisma.userProgression.create({
      data: {
        userId,
        moduleId,
        status: initialStatus,
      },
      include: {
        attempts: true,
      },
    });
  }

  return progression;
}

/**
 * Gets all progressions for a user in a specific discipline
 */
export async function getDisciplineProgressions(userId: string, disciplineId: string) {
  return prisma.userProgression.findMany({
    where: {
      userId,
      module: {
        disciplineId,
        deletedAt: null,
      },
    },
    include: {
      module: true,
    },
  });
}

/**
 * Marks theory as viewed for a module
 */
export async function markTheoryViewed(userId: string, moduleId: string) {
  const progression = await getOrCreateProgression(userId, moduleId);

  if (!progression) return null;
  if (progression.status === ModuleProgressStatus.LOCKED) return null;

  // Only update if not already in progress or completed
  if (progression.status === ModuleProgressStatus.AVAILABLE) {
    return prisma.userProgression.update({
      where: { id: progression.id },
      data: {
        status: ModuleProgressStatus.IN_PROGRESS,
        theoryViewedAt: new Date(),
      },
    });
  }

  return progression;
}

/**
 * Records a passed quiz
 */
export async function markQuizPassed(userId: string, moduleId: string) {
  const progression = await getOrCreateProgression(userId, moduleId);

  if (!progression) return null;

  return prisma.userProgression.update({
    where: { id: progression.id },
    data: {
      quizPassedAt: new Date(),
    },
  });
}

/**
 * Marks practice as completed and potentially completes the module
 */
export async function markPracticeCompleted(userId: string, moduleId: string) {
  const progression = await getOrCreateProgression(userId, moduleId);

  if (!progression) return null;

  // Can only complete practice if quiz is passed
  if (!progression.quizPassedAt) {
    return null;
  }

  const updatedProgression = await prisma.userProgression.update({
    where: { id: progression.id },
    data: {
      practiceCompletedAt: new Date(),
      completedAt: new Date(),
      status: ModuleProgressStatus.COMPLETED,
    },
    include: {
      module: {
        include: {
          discipline: {
            include: {
              modules: {
                where: { deletedAt: null },
                orderBy: { order: 'asc' },
              },
            },
          },
        },
      },
    },
  });

  // Unlock next module
  await unlockNextModule(userId, updatedProgression.module);

  return updatedProgression;
}

/**
 * Unlocks the next module in sequence
 */
async function unlockNextModule(
  userId: string,
  completedModule: {
    id: string;
    order: number;
    discipline: {
      modules: { id: string; order: number }[];
    };
  }
) {
  const modules = completedModule.discipline.modules;
  const currentIndex = modules.findIndex((m) => m.id === completedModule.id);
  const nextModule = modules[currentIndex + 1];

  if (!nextModule) return;

  // Check if progression exists
  const existingProgression = await prisma.userProgression.findUnique({
    where: {
      userId_moduleId: { userId, moduleId: nextModule.id },
    },
  });

  if (existingProgression) {
    // Update to AVAILABLE if LOCKED
    if (existingProgression.status === ModuleProgressStatus.LOCKED) {
      await prisma.userProgression.update({
        where: { id: existingProgression.id },
        data: { status: ModuleProgressStatus.AVAILABLE },
      });
    }
  } else {
    // Create new progression with AVAILABLE status
    await prisma.userProgression.create({
      data: {
        userId,
        moduleId: nextModule.id,
        status: ModuleProgressStatus.AVAILABLE,
      },
    });
  }
}

/**
 * Calculates progress stats for a discipline
 */
export async function calculateDisciplineProgress(
  userId: string,
  disciplineId: string
): Promise<ProgressStats> {
  const discipline = await prisma.discipline.findUnique({
    where: { id: disciplineId },
    include: {
      modules: {
        where: { deletedAt: null },
        select: { id: true },
      },
    },
  });

  if (!discipline) {
    return { total: 0, completed: 0, inProgress: 0, available: 0, locked: 0, percentage: 0 };
  }

  const total = discipline.modules.length;
  const progressions = await getDisciplineProgressions(userId, disciplineId);

  const stats = {
    total,
    completed: 0,
    inProgress: 0,
    available: 0,
    locked: total,
    percentage: 0,
  };

  for (const prog of progressions) {
    stats.locked--;
    switch (prog.status) {
      case ModuleProgressStatus.COMPLETED:
        stats.completed++;
        break;
      case ModuleProgressStatus.IN_PROGRESS:
        stats.inProgress++;
        break;
      case ModuleProgressStatus.AVAILABLE:
        stats.available++;
        break;
    }
  }

  stats.percentage = total > 0 ? Math.round((stats.completed / total) * 100) : 0;

  return stats;
}

/**
 * Gets the status of a module for a user
 */
export async function getModuleStatus(
  userId: string,
  moduleId: string
): Promise<ModuleProgressStatus> {
  const progression = await prisma.userProgression.findUnique({
    where: {
      userId_moduleId: { userId, moduleId },
    },
  });

  if (!progression) {
    // Check if it's the first module
    const module = await prisma.module.findUnique({
      where: { id: moduleId },
      include: {
        discipline: {
          include: {
            modules: {
              where: { deletedAt: null },
              orderBy: { order: 'asc' },
              take: 1,
            },
          },
        },
      },
    });

    if (module?.discipline.modules[0]?.id === moduleId) {
      return ModuleProgressStatus.AVAILABLE;
    }

    return ModuleProgressStatus.LOCKED;
  }

  return progression.status as ModuleProgressStatus;
}
