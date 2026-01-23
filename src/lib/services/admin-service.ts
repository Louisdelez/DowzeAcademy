import { prisma } from '@/lib/db/client';
import { ContentStatus } from '@/types/models';

// ============================================
// DOMAINS
// ============================================

export async function getAllDomains() {
  return prisma.domain.findMany({
    where: { deletedAt: null },
    orderBy: [{ status: 'asc' }, { order: 'asc' }],
    include: {
      _count: {
        select: { packs: { where: { deletedAt: null } } },
      },
    },
  });
}

export async function getDomainById(id: string) {
  return prisma.domain.findFirst({
    where: { id, deletedAt: null },
    include: {
      packs: {
        where: { deletedAt: null },
        orderBy: { order: 'asc' },
      },
    },
  });
}

export async function createDomain(data: {
  name: string;
  description?: string;
  icon?: string;
}) {
  const maxOrder = await prisma.domain.aggregate({
    _max: { order: true },
    where: { deletedAt: null },
  });

  return prisma.domain.create({
    data: {
      name: data.name,
      description: data.description,
      icon: data.icon,
      status: ContentStatus.DRAFT,
      order: (maxOrder._max.order ?? -1) + 1,
    },
  });
}

export async function updateDomain(
  id: string,
  data: { name?: string; description?: string; icon?: string; order?: number },
  ifUnmodifiedSince?: Date
) {
  // Check for staleness if timestamp provided
  if (ifUnmodifiedSince) {
    const current = await prisma.domain.findUnique({ where: { id } });
    if (current && current.updatedAt > ifUnmodifiedSince) {
      return { conflict: true, current };
    }
  }

  return prisma.domain.update({
    where: { id },
    data,
  });
}

export async function deleteDomain(id: string) {
  return prisma.domain.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
}

export async function publishDomain(id: string) {
  // Validate domain has content before publishing
  const domain = await prisma.domain.findUnique({
    where: { id },
    include: {
      packs: {
        where: { deletedAt: null },
        include: {
          disciplines: {
            where: { deletedAt: null },
            include: {
              modules: {
                where: { deletedAt: null },
                include: { lesson: true },
              },
            },
          },
        },
      },
    },
  });

  if (!domain) {
    return { error: 'Domain not found' };
  }

  // Check if domain has at least one complete module
  const hasCompleteContent = domain.packs.some((pack) =>
    pack.disciplines.some((discipline) =>
      discipline.modules.some((module) => module.lesson)
    )
  );

  if (!hasCompleteContent) {
    return { error: 'Domain must have at least one complete module to publish' };
  }

  return prisma.domain.update({
    where: { id },
    data: { status: ContentStatus.PUBLISHED },
  });
}

// ============================================
// PACKS
// ============================================

export async function getAllPacks(domainId?: string) {
  return prisma.pack.findMany({
    where: {
      deletedAt: null,
      ...(domainId && { domainId }),
    },
    orderBy: [{ status: 'asc' }, { order: 'asc' }],
    include: {
      domain: true,
      _count: {
        select: { disciplines: { where: { deletedAt: null } } },
      },
    },
  });
}

export async function getPackById(id: string) {
  return prisma.pack.findFirst({
    where: { id, deletedAt: null },
    include: {
      domain: true,
      disciplines: {
        where: { deletedAt: null },
        orderBy: { order: 'asc' },
      },
    },
  });
}

export async function createPack(data: {
  domainId: string;
  name: string;
  description?: string;
}) {
  const maxOrder = await prisma.pack.aggregate({
    _max: { order: true },
    where: { domainId: data.domainId, deletedAt: null },
  });

  return prisma.pack.create({
    data: {
      domainId: data.domainId,
      name: data.name,
      description: data.description,
      status: ContentStatus.DRAFT,
      order: (maxOrder._max.order ?? -1) + 1,
    },
  });
}

export async function updatePack(
  id: string,
  data: { name?: string; description?: string; order?: number }
) {
  return prisma.pack.update({
    where: { id },
    data,
  });
}

export async function deletePack(id: string) {
  return prisma.pack.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
}

// ============================================
// DISCIPLINES
// ============================================

export async function getAllDisciplines(packId?: string) {
  return prisma.discipline.findMany({
    where: {
      deletedAt: null,
      ...(packId && { packId }),
    },
    orderBy: [{ status: 'asc' }, { order: 'asc' }],
    include: {
      pack: { include: { domain: true } },
      _count: {
        select: { modules: { where: { deletedAt: null } } },
      },
    },
  });
}

export async function getDisciplineById(id: string) {
  return prisma.discipline.findFirst({
    where: { id, deletedAt: null },
    include: {
      pack: { include: { domain: true } },
      modules: {
        where: { deletedAt: null },
        orderBy: { order: 'asc' },
        include: { lesson: true },
      },
    },
  });
}

export async function createDiscipline(data: {
  packId: string;
  name: string;
  description?: string;
}) {
  const maxOrder = await prisma.discipline.aggregate({
    _max: { order: true },
    where: { packId: data.packId, deletedAt: null },
  });

  return prisma.discipline.create({
    data: {
      packId: data.packId,
      name: data.name,
      description: data.description,
      status: ContentStatus.DRAFT,
      order: (maxOrder._max.order ?? -1) + 1,
    },
  });
}

export async function updateDiscipline(
  id: string,
  data: { name?: string; description?: string; order?: number }
) {
  return prisma.discipline.update({
    where: { id },
    data,
  });
}

export async function deleteDiscipline(id: string) {
  return prisma.discipline.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
}

// ============================================
// MODULES
// ============================================

export async function getAllModules(disciplineId?: string) {
  return prisma.module.findMany({
    where: {
      deletedAt: null,
      ...(disciplineId && { disciplineId }),
    },
    orderBy: [{ status: 'asc' }, { order: 'asc' }],
    include: {
      discipline: { include: { pack: { include: { domain: true } } } },
      lesson: {
        select: {
          id: true,
          practiceType: true,
          quizThreshold: true,
          _count: { select: { questions: true } },
        },
      },
    },
  });
}

export async function getModuleById(id: string) {
  return prisma.module.findFirst({
    where: { id, deletedAt: null },
    include: {
      discipline: { include: { pack: { include: { domain: true } } } },
      lesson: {
        include: {
          questions: { orderBy: { order: 'asc' } },
        },
      },
    },
  });
}

export async function createModule(data: {
  disciplineId: string;
  name: string;
  description?: string;
}) {
  const maxOrder = await prisma.module.aggregate({
    _max: { order: true },
    where: { disciplineId: data.disciplineId, deletedAt: null },
  });

  return prisma.module.create({
    data: {
      disciplineId: data.disciplineId,
      name: data.name,
      description: data.description,
      status: ContentStatus.DRAFT,
      order: (maxOrder._max.order ?? -1) + 1,
    },
  });
}

export async function updateModule(
  id: string,
  data: { name?: string; description?: string; order?: number }
) {
  return prisma.module.update({
    where: { id },
    data,
  });
}

export async function deleteModule(id: string) {
  return prisma.module.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
}

// ============================================
// LESSONS
// ============================================

export async function updateLesson(
  moduleId: string,
  data: {
    theoryContent: string;
    quizThreshold: number;
    practiceType: string;
    practiceInstructions: string;
    practiceTimerDuration?: number;
    mode?: string;
    // Feature 005: Randomization settings
    shuffleQuestions?: boolean;
    shuffleAnswers?: boolean;
    questionsToShow?: number | null;
  }
) {
  // Feature 005: Handle questionsToShow edge cases (T031)
  // - questionsToShow = 0 or negative → treat as null (show all)
  // - questionsToShow = null → show all questions
  // - questionsToShow > pool will be handled at runtime by selectQuestions()
  const normalizedQuestionsToShow =
    data.questionsToShow !== undefined && data.questionsToShow !== null && data.questionsToShow > 0
      ? data.questionsToShow
      : null;

  // Upsert lesson
  return prisma.lesson.upsert({
    where: { moduleId },
    update: {
      theoryContent: data.theoryContent,
      quizThreshold: data.quizThreshold,
      practiceType: data.practiceType as any,
      practiceInstructions: data.practiceInstructions,
      ...(data.practiceTimerDuration !== undefined && { practiceTimerDuration: data.practiceTimerDuration }),
      ...(data.mode && { mode: data.mode as any }),
      // Feature 005: Randomization settings
      ...(data.shuffleQuestions !== undefined && { shuffleQuestions: data.shuffleQuestions }),
      ...(data.shuffleAnswers !== undefined && { shuffleAnswers: data.shuffleAnswers }),
      questionsToShow: normalizedQuestionsToShow,
    },
    create: {
      moduleId,
      theoryContent: data.theoryContent,
      quizThreshold: data.quizThreshold,
      practiceType: data.practiceType as any,
      practiceInstructions: data.practiceInstructions,
      practiceTimerDuration: data.practiceTimerDuration || 300,
      mode: (data.mode as any) || 'LEGACY',
      // Feature 005: Randomization defaults
      shuffleQuestions: data.shuffleQuestions ?? true,
      shuffleAnswers: data.shuffleAnswers ?? true,
      questionsToShow: normalizedQuestionsToShow,
    },
  });
}

export async function updateQuizQuestions(
  lessonId: string,
  questions: Array<{
    id?: string;
    questionText: string;
    questionType: string;
    options: any;
    correctAnswer: any;
    feedback?: string;
    linkedTheorySection?: string;
    order: number;
  }>
) {
  // Delete existing questions and create new ones
  await prisma.quizQuestion.deleteMany({ where: { lessonId } });

  return prisma.quizQuestion.createMany({
    data: questions.map((q) => ({
      lessonId,
      questionText: q.questionText,
      questionType: q.questionType as any,
      options: q.options,
      correctAnswer: q.correctAnswer,
      feedback: q.feedback,
      linkedTheorySection: q.linkedTheorySection,
      order: q.order,
    })),
  });
}

// ============================================
// PUBLISH VALIDATION
// ============================================

export async function publishModule(id: string) {
  // Fetch module with lesson and questions
  const module = await prisma.module.findUnique({
    where: { id },
    include: {
      lesson: {
        include: {
          questions: true,
        },
      },
    },
  });

  if (!module) {
    return { error: 'Module not found' };
  }

  // Validate module has complete content
  const errors: string[] = [];

  if (!module.lesson) {
    errors.push('Le module doit avoir une leçon');
  } else {
    if (!module.lesson.theoryContent || module.lesson.theoryContent.trim() === '') {
      errors.push('La leçon doit avoir du contenu théorique');
    }

    if (!module.lesson.questions || module.lesson.questions.length === 0) {
      errors.push('La leçon doit avoir au moins une question de quiz');
    }

    if (!module.lesson.practiceInstructions || module.lesson.practiceInstructions.trim() === '') {
      errors.push('La leçon doit avoir des instructions de pratique');
    }
  }

  if (errors.length > 0) {
    return { error: errors.join('. ') };
  }

  // Publish the module
  return prisma.module.update({
    where: { id },
    data: { status: ContentStatus.PUBLISHED },
  });
}
