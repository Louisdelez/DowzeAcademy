/**
 * Data Migration: Convert JSON options to QuizOption model (Feature 005)
 *
 * This script migrates existing quiz questions that store options as JSON
 * to the new QuizOption model with stable UUIDs.
 *
 * Run with: npx tsx prisma/migrations/migrate-quiz-options.ts
 */

import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../src/generated/prisma';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

interface LegacyOption {
  id: string;
  text: string;
}

async function migrateQuizOptions() {
  console.log('Starting quiz options migration...');

  // Find all questions with JSON options
  const questions = await prisma.quizQuestion.findMany({
    where: {
      options: { not: undefined },
    },
    include: {
      choices: true, // Check if already migrated
    },
  });

  console.log(`Found ${questions.length} questions with JSON options`);

  let migratedCount = 0;
  let skippedCount = 0;

  for (const question of questions) {
    // Skip if already has choices (type cast needed due to dynamic include)
    const questionWithChoices = question as typeof question & { choices: { id: string }[] };
    if (questionWithChoices.choices.length > 0) {
      console.log(`  Skipping question ${question.id} - already has QuizOption records`);
      skippedCount++;
      continue;
    }

    const options = question.options as LegacyOption[] | null;
    if (!options || !Array.isArray(options)) {
      console.log(`  Skipping question ${question.id} - invalid options format`);
      skippedCount++;
      continue;
    }

    const correctAnswer = question.correctAnswer;

    // Create QuizOption records
    for (const [index, option] of options.entries()) {
      // Determine if this option is correct
      let isCorrect = false;

      if (Array.isArray(correctAnswer)) {
        // MULTIPLE_CHOICE: correctAnswer is an array of option IDs
        isCorrect = correctAnswer.includes(option.id);
      } else if (typeof correctAnswer === 'string') {
        // SINGLE_CHOICE: correctAnswer is a single option ID
        isCorrect = correctAnswer === option.id;
      }

      await prisma.quizOption.create({
        data: {
          questionId: question.id,
          text: option.text,
          isCorrect,
          order: index,
        },
      });
    }

    console.log(
      `  Migrated question ${question.id}: ${options.length} options (type: ${question.questionType})`
    );
    migratedCount++;
  }

  console.log('\nMigration complete!');
  console.log(`  Migrated: ${migratedCount} questions`);
  console.log(`  Skipped: ${skippedCount} questions`);
}

async function main() {
  try {
    await migrateQuizOptions();
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
