import { prisma } from '@/lib/db/client';
import { ContentStatus } from '@/types/models';

/**
 * Fetches all published domains with their packs count
 */
export async function getPublishedDomains() {
  return prisma.domain.findMany({
    where: {
      status: ContentStatus.PUBLISHED,
      deletedAt: null,
    },
    orderBy: { order: 'asc' },
    include: {
      _count: {
        select: { packs: true },
      },
    },
  });
}

/**
 * Fetches a single domain with its packs
 */
export async function getDomainWithPacks(domainId: string) {
  return prisma.domain.findFirst({
    where: {
      id: domainId,
      status: ContentStatus.PUBLISHED,
      deletedAt: null,
    },
    include: {
      packs: {
        where: {
          status: ContentStatus.PUBLISHED,
          deletedAt: null,
        },
        orderBy: { order: 'asc' },
      },
    },
  });
}

/**
 * Fetches a single pack with its disciplines
 */
export async function getPackWithDisciplines(packId: string) {
  return prisma.pack.findFirst({
    where: {
      id: packId,
      status: ContentStatus.PUBLISHED,
      deletedAt: null,
    },
    include: {
      domain: true,
      disciplines: {
        where: {
          status: ContentStatus.PUBLISHED,
          deletedAt: null,
        },
        orderBy: { order: 'asc' },
      },
    },
  });
}

/**
 * Fetches a single pack with all its modules (across all disciplines)
 */
export async function getPackWithModules(packId: string) {
  const pack = await prisma.pack.findFirst({
    where: {
      id: packId,
      status: ContentStatus.PUBLISHED,
      deletedAt: null,
    },
    include: {
      domain: true,
      disciplines: {
        where: {
          status: ContentStatus.PUBLISHED,
          deletedAt: null,
        },
        orderBy: { order: 'asc' },
        include: {
          modules: {
            where: {
              status: ContentStatus.PUBLISHED,
              deletedAt: null,
            },
            orderBy: { order: 'asc' },
            include: {
              lesson: {
                select: {
                  id: true,
                  practiceType: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!pack) return null;

  // Flatten all modules from all disciplines into a single ordered list
  const allModules = pack.disciplines.flatMap((discipline) =>
    discipline.modules.map((module) => ({
      ...module,
      disciplineName: discipline.name,
      disciplineId: discipline.id,
    }))
  );

  return {
    ...pack,
    modules: allModules,
  };
}

/**
 * Fetches a single discipline with its modules
 */
export async function getDisciplineWithModules(disciplineId: string) {
  return prisma.discipline.findFirst({
    where: {
      id: disciplineId,
      status: ContentStatus.PUBLISHED,
      deletedAt: null,
    },
    include: {
      pack: {
        include: {
          domain: true,
        },
      },
      modules: {
        where: {
          status: ContentStatus.PUBLISHED,
          deletedAt: null,
        },
        orderBy: { order: 'asc' },
        include: {
          lesson: {
            select: {
              id: true,
              practiceType: true,
            },
          },
        },
      },
    },
  });
}

/**
 * Fetches a single module with its full lesson content
 */
export async function getModuleWithLesson(moduleId: string) {
  return prisma.module.findFirst({
    where: {
      id: moduleId,
      status: ContentStatus.PUBLISHED,
      deletedAt: null,
    },
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
      lesson: {
        select: {
          id: true,
          theoryContent: true,
          quizThreshold: true,
          practiceType: true,
          practiceInstructions: true,
          practiceTimerDuration: true,
          mode: true,
          // Feature 005: Randomization settings
          shuffleQuestions: true,
          shuffleAnswers: true,
          questionsToShow: true,
          questions: {
            orderBy: { order: 'asc' },
            select: {
              id: true,
              questionText: true,
              questionType: true,
              options: true,
              order: true,
              linkedTheorySection: true,
              correctAnswer: true,
              feedback: true,
            },
          },
        },
      },
    },
  });
}

/**
 * Fetches module lesson with correct answers (for server-side validation only)
 */
export async function getModuleLessonWithAnswers(moduleId: string) {
  return prisma.lesson.findFirst({
    where: {
      moduleId,
      module: {
        status: ContentStatus.PUBLISHED,
        deletedAt: null,
      },
    },
    include: {
      questions: {
        orderBy: { order: 'asc' },
      },
    },
  });
}
