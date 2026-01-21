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
        include: {
          questions: {
            orderBy: { order: 'asc' },
            select: {
              id: true,
              questionText: true,
              questionType: true,
              options: true,
              order: true,
              // Note: correctAnswer is NOT included for client-side security
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
