/**
 * Full French L1 9CO Curriculum Seeder
 *
 * Seeds ALL 16 chapters with:
 * - Theory content
 * - Quiz questions (25 per module)
 * - Practice exercises
 *
 * Source: /home/louisdelez/Documents/ContenueCours/9CO/cours/francais-l1-9co
 */

import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, LessonMode, QuestionType, PracticeType } from '../src/generated/prisma';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const CONTENT_BASE_PATH = '/home/louisdelez/Documents/ContenueCours/9CO/cours/francais-l1-9co';
const PACK_L1_9CO_ID = '9cd06dc1-c3e3-4f11-8103-337dca40741f';

interface ParsedQuestion {
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface ChapterConfig {
  folder: string;
  name: string;
  description: string;
}

// Chapter configurations
const CHAPTERS: ChapterConfig[] = [
  { folder: 'chapitre-01-entrer-au-cycle', name: "Entrer au Cycle d'Orientation", description: "Introduction au CO et à la langue scolaire" },
  { folder: 'chapitre-02-texte-narratif', name: "Lire un texte narratif", description: "Comprendre et analyser les récits" },
  { folder: 'chapitre-03-texte-informatif', name: "Lire un texte informatif", description: "Comprendre les textes informatifs" },
  { folder: 'chapitre-04-texte-argumentatif', name: "Lire un texte argumentatif", description: "Comprendre l'argumentation" },
  { folder: 'chapitre-05-expression-orale', name: "S'exprimer à l'oral", description: "Développer les compétences orales" },
  { folder: 'chapitre-06-ecrire-narratif', name: "Écrire un texte narratif", description: "Rédiger des récits" },
  { folder: 'chapitre-07-ecrire-informatif', name: "Écrire un texte informatif", description: "Rédiger des textes informatifs" },
  { folder: 'chapitre-08-exprimer-opinion', name: "Exprimer son opinion", description: "Rédiger des textes argumentatifs" },
  { folder: 'chapitre-09-grammaire-phrase', name: "Grammaire de la phrase", description: "Maîtriser la structure de la phrase" },
  { folder: 'chapitre-10-classes-mots', name: "Les classes de mots", description: "Identifier et utiliser les classes grammaticales" },
  { folder: 'chapitre-11-conjugaison', name: "Conjugaison : temps et modes", description: "Maîtriser la conjugaison" },
  { folder: 'chapitre-12-orthographe-grammaticale', name: "Orthographe grammaticale", description: "Maîtriser les accords et homophones" },
  { folder: 'chapitre-13-orthographe-vocabulaire', name: "Orthographe lexicale et vocabulaire", description: "Enrichir son vocabulaire" },
  { folder: 'chapitre-14-methodes-travail', name: "Méthodes de travail", description: "Développer des stratégies d'apprentissage" },
  { folder: 'chapitre-15-culture-litteraire', name: "Culture littéraire", description: "Découvrir les genres littéraires" },
  { folder: 'chapitre-16-projet-synthese', name: "Projet et synthèse", description: "Consolider les apprentissages" },
];

/**
 * Parse a quiz markdown file and extract questions
 * Supports two formats:
 * Format 1 (chapters 9-16): "- A) text" and "**Reponse correcte : A**"
 * Format 2 (chapters 1-8): "A. text" and "Reponse correcte : A"
 */
function parseQuizFile(filePath: string): ParsedQuestion[] {
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf-8');
  const questions: ParsedQuestion[] = [];

  const questionBlocks = content.split(/## Question \d+/).slice(1);

  for (const block of questionBlocks) {
    const lines = block.trim().split('\n').filter(l => l.trim());
    if (lines.length < 4) continue;

    // Find the question text (might start with "Question : " or be the first line)
    let questionText = '';
    const options: string[] = [];
    let correctIndex = 0;
    let explanation = '';

    for (const line of lines) {
      // Question text (Format 2: "Question : ...")
      if (line.startsWith('Question :')) {
        questionText = line.replace('Question :', '').trim();
        continue;
      }

      // Format 1: "- A) text"
      const optionMatch1 = line.match(/^- ([A-D])\) (.+)$/);
      if (optionMatch1) {
        options.push(optionMatch1[2].trim());
        continue;
      }

      // Format 2: "A. text" or "A) text"
      const optionMatch2 = line.match(/^([A-D])[\.\)] (.+)$/);
      if (optionMatch2) {
        options.push(optionMatch2[2].trim());
        continue;
      }

      // Format 1: "**Reponse correcte : A**"
      const correctMatch1 = line.match(/\*\*Reponse correcte : ([A-D])\*\*/);
      if (correctMatch1) {
        correctIndex = correctMatch1[1].charCodeAt(0) - 'A'.charCodeAt(0);
        continue;
      }

      // Format 2: "Reponse correcte : A"
      const correctMatch2 = line.match(/^Reponse correcte : ([A-D])$/);
      if (correctMatch2) {
        correctIndex = correctMatch2[1].charCodeAt(0) - 'A'.charCodeAt(0);
        continue;
      }

      // Explanation
      const explanationMatch = line.match(/\*\*Explication :\*\* (.+)/);
      if (explanationMatch) {
        explanation = explanationMatch[1].trim();
      }
    }

    // If no question text found via "Question :", use first non-option line
    if (!questionText && lines.length > 0) {
      const firstLine = lines[0].trim();
      if (!firstLine.match(/^[A-D][\.\)]/)) {
        questionText = firstLine;
      }
    }

    if (questionText && options.length === 4) {
      questions.push({ questionText, options, correctIndex, explanation });
    }
  }

  return questions;
}

/**
 * Extract module name from filename
 */
function getModuleNameFromFile(filePath: string): string {
  const content = fs.readFileSync(filePath, 'utf-8');
  const firstLine = content.split('\n')[0];
  // Remove # prefix and clean up
  return firstLine.replace(/^#\s*/, '').replace(/^(Théorie|Quiz|Exercices?) -?\s*/i, '').trim();
}

/**
 * Read file content
 */
function readFileContent(filePath: string): string {
  if (!fs.existsSync(filePath)) return '';
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Delete existing discipline and all its content
 */
async function deleteExistingDiscipline(name: string) {
  const existing = await prisma.discipline.findFirst({
    where: { name, packId: PACK_L1_9CO_ID },
  });

  if (existing) {
    // Delete in correct order due to foreign keys
    const modules = await prisma.module.findMany({
      where: { disciplineId: existing.id },
      include: { lesson: true },
    });

    for (const module of modules) {
      // Delete user notes and ratings for this module
      const notes = await prisma.userNote.findMany({
        where: { moduleId: module.id },
        select: { id: true },
      });
      for (const note of notes) {
        await prisma.noteRating.deleteMany({
          where: { noteId: note.id },
        });
      }
      await prisma.userNote.deleteMany({
        where: { moduleId: module.id },
      });

      if (module.lesson) {
        // Delete quiz attempt questions first
        await prisma.quizAttemptQuestion.deleteMany({
          where: { attempt: { lessonId: module.lesson.id } },
        });
        // Delete quiz attempts
        await prisma.quizAttempt.deleteMany({
          where: { lessonId: module.lesson.id },
        });
        // Delete quiz options
        await prisma.quizOption.deleteMany({
          where: { question: { lessonId: module.lesson.id } },
        });
        // Delete quiz questions
        await prisma.quizQuestion.deleteMany({
          where: { lessonId: module.lesson.id },
        });
        // Delete lesson
        await prisma.lesson.delete({
          where: { id: module.lesson.id },
        });
      }
    }

    // Delete user progressions for these modules
    for (const module of modules) {
      await prisma.userProgression.deleteMany({
        where: { moduleId: module.id },
      });
    }

    // Delete modules
    await prisma.module.deleteMany({
      where: { disciplineId: existing.id },
    });

    // Delete discipline
    await prisma.discipline.delete({
      where: { id: existing.id },
    });

    console.log(`  Deleted existing discipline: ${name}`);
  }
}

/**
 * Process a single chapter
 */
async function processChapter(chapterIndex: number, config: ChapterConfig) {
  const chapterPath = path.join(CONTENT_BASE_PATH, config.folder);

  if (!fs.existsSync(chapterPath)) {
    console.log(`  Skipping ${config.folder} - directory not found`);
    return;
  }

  console.log(`\n[Chapter ${chapterIndex + 1}] ${config.name}`);

  // Delete existing discipline if it exists
  await deleteExistingDiscipline(config.name);

  // Create discipline
  const discipline = await prisma.discipline.create({
    data: {
      name: config.name,
      description: config.description,
      packId: PACK_L1_9CO_ID,
      order: chapterIndex + 1,
      status: ContentStatus.PUBLISHED,
    },
  });

  // Get module files from theory folder
  const theoryPath = path.join(chapterPath, 'theorie');
  const quizPath = path.join(chapterPath, 'quiz');
  const practicePath = path.join(chapterPath, 'exercices-pratiques');

  if (!fs.existsSync(theoryPath)) {
    console.log(`  No theory folder found`);
    return;
  }

  const theoryFiles = fs.readdirSync(theoryPath)
    .filter(f => f.endsWith('.md'))
    .sort();

  for (let i = 0; i < theoryFiles.length; i++) {
    const theoryFile = theoryFiles[i];
    const baseName = theoryFile.replace('.md', '');

    const theoryFilePath = path.join(theoryPath, theoryFile);
    const quizFilePath = path.join(quizPath, theoryFile);
    const practiceFilePath = path.join(practicePath, theoryFile);

    // Get module name from theory file
    const moduleName = getModuleNameFromFile(theoryFilePath);
    const theoryContent = readFileContent(theoryFilePath);
    const practiceContent = readFileContent(practiceFilePath);
    const questions = parseQuizFile(quizFilePath);

    console.log(`  ${i + 1}. ${moduleName} (${questions.length} questions)`);

    // Create module
    const module = await prisma.module.create({
      data: {
        name: moduleName,
        description: `Module ${i + 1} du chapitre ${chapterIndex + 1}`,
        disciplineId: discipline.id,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });

    // Create lesson
    const lesson = await prisma.lesson.create({
      data: {
        moduleId: module.id,
        mode: LessonMode.SLIDES,
        theoryContent: theoryContent,
        practiceInstructions: practiceContent,
        practiceType: PracticeType.EXERCICES,
        practiceTimerDuration: 600,
        quizThreshold: 70,
        questionsToShow: 15,
        shuffleQuestions: true,
        shuffleAnswers: true,
      },
    });

    // Create quiz questions
    for (let j = 0; j < questions.length; j++) {
      const q = questions[j];

      const question = await prisma.quizQuestion.create({
        data: {
          lessonId: lesson.id,
          questionText: q.questionText,
          questionType: QuestionType.SINGLE_CHOICE,
          correctAnswer: q.options[q.correctIndex],
          order: j + 1,
          feedback: q.explanation,
        },
      });

      for (let k = 0; k < q.options.length; k++) {
        await prisma.quizOption.create({
          data: {
            questionId: question.id,
            text: q.options[k],
            isCorrect: k === q.correctIndex,
            order: k + 1,
          },
        });
      }
    }
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('SEEDING FULL FRENCH L1 9CO CURRICULUM');
  console.log('='.repeat(60));
  console.log(`Source: ${CONTENT_BASE_PATH}`);
  console.log(`Chapters: ${CHAPTERS.length}`);

  for (let i = 0; i < CHAPTERS.length; i++) {
    await processChapter(i, CHAPTERS[i]);
  }

  console.log('\n' + '='.repeat(60));
  console.log('DONE!');
  console.log('='.repeat(60));
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
