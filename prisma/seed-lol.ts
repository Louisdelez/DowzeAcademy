/**
 * League of Legends Training Seed Script
 * Seeds the complete LoL training content into the database
 */

import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, PracticeType, QuestionType, LessonMode } from '../src/generated/prisma';
import 'dotenv/config';

// Import all LoL disciplines
import { allDisciplines, type DisciplineData, type ModuleData, type QuizQuestionData } from './seeds/lol';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🎮 Seeding League of Legends Training content...\n');

  // 1. Get or create the Gaming domain
  let domain = await prisma.domain.findFirst({
    where: { name: 'Gaming' },
  });

  if (!domain) {
    domain = await prisma.domain.create({
      data: {
        name: 'Gaming',
        description: 'Améliorez vos compétences dans vos jeux préférés avec des parcours structurés et progressifs.',
        icon: '🎮',
        status: ContentStatus.PUBLISHED,
        order: 0,
      },
    });
    console.log('✅ Domain "Gaming" created');
  } else {
    console.log('ℹ️  Domain "Gaming" already exists');
  }

  // 2. Delete existing LoL pack to avoid duplicates
  const existingPack = await prisma.pack.findFirst({
    where: {
      domainId: domain.id,
      name: 'League of Legends - Formation Complète'
    },
  });

  if (existingPack) {
    // Delete the pack and cascade will handle disciplines, modules, lessons, questions
    await prisma.pack.delete({
      where: { id: existingPack.id },
    });
    console.log('🗑️  Deleted existing LoL pack for fresh seed');
  }

  // 3. Create the LoL Pack
  const pack = await prisma.pack.create({
    data: {
      domainId: domain.id,
      name: 'League of Legends - Formation Complète',
      description: 'Formation complète pour maîtriser League of Legends, du niveau débutant au niveau avancé. 26 disciplines couvrant tous les aspects du jeu.',
      status: ContentStatus.PUBLISHED,
      order: 0,
    },
  });
  console.log('✅ Pack "League of Legends - Formation Complète" created\n');

  // 4. Create all disciplines with their modules
  let totalModules = 0;
  let totalQuestions = 0;

  for (const disciplineData of allDisciplines) {
    console.log(`📚 Creating discipline: ${disciplineData.name}`);

    const discipline = await prisma.discipline.create({
      data: {
        packId: pack.id,
        name: disciplineData.name,
        description: disciplineData.description,
        status: ContentStatus.PUBLISHED,
        order: disciplineData.order,
      },
    });

    // Create modules for this discipline
    for (const moduleData of disciplineData.modules) {
      const module = await prisma.module.create({
        data: {
          disciplineId: discipline.id,
          name: moduleData.name,
          description: moduleData.description,
          status: ContentStatus.PUBLISHED,
          order: moduleData.order,
          prerequisites: moduleData.order > 1
            ? [disciplineData.modules[moduleData.order - 2]?.name].filter(Boolean)
            : [],
        },
      });

      // Create lesson for this module
      const lesson = await prisma.lesson.create({
        data: {
          moduleId: module.id,
          theoryContent: moduleData.theoryContent,
          quizThreshold: 70,
          practiceType: moduleData.practiceType as PracticeType,
          practiceInstructions: moduleData.practiceInstructions,
          practiceTimerDuration: moduleData.practiceTimerDuration || 300,
          mode: LessonMode.SLIDES,
          questionsToShow: moduleData.questionsToShow,
          shuffleQuestions: moduleData.shuffleQuestions,
          shuffleAnswers: moduleData.shuffleAnswers,
        },
      });

      // Create quiz questions with options
      for (let qIndex = 0; qIndex < moduleData.questions.length; qIndex++) {
        const q = moduleData.questions[qIndex];

        // Build choices data for QuizOption model
        const choicesData = q.options.map((opt, optIndex) => ({
          text: opt.text,
          isCorrect: Array.isArray(q.correctAnswer)
            ? q.correctAnswer.includes(opt.id)
            : q.correctAnswer === opt.id,
          order: optIndex,
        }));

        await prisma.quizQuestion.create({
          data: {
            lessonId: lesson.id,
            questionText: q.text,
            questionType: QuestionType.SINGLE_CHOICE,
            options: q.options,
            correctAnswer: q.correctAnswer,
            feedback: q.feedback || null,
            linkedTheorySection: q.linkedTheorySection || null,
            order: qIndex,
            choices: {
              create: choicesData,
            },
          },
        });

        totalQuestions++;
      }

      totalModules++;
    }

    console.log(`   ✅ Created ${disciplineData.modules.length} modules`);
  }

  console.log('\n' + '='.repeat(50));
  console.log(`🎉 Seeding completed!`);
  console.log(`   📚 Disciplines: ${allDisciplines.length}`);
  console.log(`   📖 Modules: ${totalModules}`);
  console.log(`   ❓ Questions: ${totalQuestions}`);
  console.log('='.repeat(50));
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
