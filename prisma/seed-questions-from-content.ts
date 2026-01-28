import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, QuestionType } from '../src/generated/prisma';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const CONTENT_BASE_PATH = '/home/louisdelez/Documents/ContenueCours/9CO/cours/francais-l1-9co';

interface ParsedQuestion {
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * Parse a quiz markdown file and extract questions
 */
function parseQuizFile(filePath: string): ParsedQuestion[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const questions: ParsedQuestion[] = [];

  // Split by question blocks (## Question N)
  const questionBlocks = content.split(/## Question \d+/).slice(1);

  for (const block of questionBlocks) {
    const lines = block.trim().split('\n').filter(l => l.trim());

    if (lines.length < 5) continue;

    // First line is the question text
    const questionText = lines[0].trim();

    // Find options (lines starting with - A), - B), etc.)
    const options: string[] = [];
    let correctIndex = 0;
    let explanation = '';

    for (const line of lines) {
      const optionMatch = line.match(/^- ([A-D])\) (.+)$/);
      if (optionMatch) {
        options.push(optionMatch[2].trim());
      }

      const correctMatch = line.match(/\*\*Reponse correcte : ([A-D])\*\*/);
      if (correctMatch) {
        correctIndex = correctMatch[1].charCodeAt(0) - 'A'.charCodeAt(0);
      }

      const explanationMatch = line.match(/\*\*Explication :\*\* (.+)/);
      if (explanationMatch) {
        explanation = explanationMatch[1].trim();
      }
    }

    if (questionText && options.length === 4) {
      questions.push({
        questionText,
        options,
        correctIndex,
        explanation,
      });
    }
  }

  return questions;
}

/**
 * Find module by name pattern
 */
async function findModuleByName(namePattern: string) {
  const modules = await prisma.module.findMany({
    where: {
      name: {
        contains: namePattern,
        mode: 'insensitive',
      },
    },
    include: {
      lesson: true,
    },
  });
  return modules[0];
}

/**
 * Add questions to a module
 */
async function addQuestionsToModule(lessonId: string, questions: ParsedQuestion[]) {
  // First, delete existing questions for this lesson
  await prisma.quizOption.deleteMany({
    where: {
      question: {
        lessonId,
      },
    },
  });
  await prisma.quizQuestion.deleteMany({
    where: { lessonId },
  });

  // Add new questions
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    const question = await prisma.quizQuestion.create({
      data: {
        lessonId,
        questionText: q.questionText,
        questionType: QuestionType.SINGLE_CHOICE,
        correctAnswer: q.options[q.correctIndex],
        order: i + 1,
        feedback: q.explanation,
      },
    });

    for (let j = 0; j < q.options.length; j++) {
      await prisma.quizOption.create({
        data: {
          questionId: question.id,
          text: q.options[j],
          isCorrect: j === q.correctIndex,
          order: j + 1,
        },
      });
    }
  }

  console.log(`  Added ${questions.length} questions`);
}

/**
 * Map chapter folders to module name patterns
 */
const CHAPTER_MODULE_MAPPING: Record<string, { folder: string; modules: { file: string; namePattern: string }[] }> = {
  'chapitre-13-orthographe-vocabulaire': {
    folder: 'chapitre-13-orthographe-vocabulaire',
    modules: [
      { file: '01-formation-mots.md', namePattern: 'Formation mots' },
      { file: '02-familles-mots.md', namePattern: 'Familles mots' },
      { file: '03-synonymes-antonymes.md', namePattern: 'Synonymes antonymes' },
      { file: '04-champ-lexical.md', namePattern: 'Champ lexical' },
      { file: '05-sens-propre-figure.md', namePattern: 'Sens propre' },
      { file: '06-revision-orthographe-vocabulaire.md', namePattern: 'Revision orthographe vocabulaire' },
    ],
  },
};

async function main() {
  console.log('Seeding questions from content files...\n');

  for (const [chapterKey, chapterConfig] of Object.entries(CHAPTER_MODULE_MAPPING)) {
    console.log(`\nProcessing ${chapterKey}...`);

    for (const moduleConfig of chapterConfig.modules) {
      const quizFilePath = path.join(CONTENT_BASE_PATH, chapterConfig.folder, 'quiz', moduleConfig.file);

      if (!fs.existsSync(quizFilePath)) {
        console.log(`  Skipping ${moduleConfig.file} - file not found`);
        continue;
      }

      const module = await findModuleByName(moduleConfig.namePattern);

      if (!module || !module.lesson) {
        console.log(`  Skipping ${moduleConfig.namePattern} - module not found in database`);
        continue;
      }

      console.log(`  Processing ${module.name}...`);

      const questions = parseQuizFile(quizFilePath);
      console.log(`    Parsed ${questions.length} questions from file`);

      if (questions.length > 0) {
        await addQuestionsToModule(module.lesson.id, questions);
      }
    }
  }

  console.log('\nDone!');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
