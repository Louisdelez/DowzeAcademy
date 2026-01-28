import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, PracticeType, PracticeValidationMode, LessonMode, QuestionType } from '../../../src/generated/prisma';
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Pack ID for Francais L1 9CO
const PACK_ID = '9cd06dc1-c3e3-4f11-8103-337dca40741f';

// Content source directory
const CONTENT_DIR = '/home/louisdelez/Documents/ContenueCours/9CO/cours/francais-l1-9co';

// Chapter configuration with names and descriptions
const CHAPTERS_CONFIG = [
  { folder: 'chapitre-01-entrer-au-cycle', name: "Entrer au Cycle d'Orientation", description: "Introduction au Cycle d'Orientation et aux attentes en francais" },
  { folder: 'chapitre-02-texte-narratif', name: "Lecture : comprendre un texte narratif", description: "Comprendre les recits, contes, nouvelles et romans" },
  { folder: 'chapitre-03-texte-informatif', name: "Lecture : comprendre un texte informatif", description: "Comprendre les textes informatifs et explicatifs" },
  { folder: 'chapitre-04-texte-argumentatif', name: "Lecture : comprendre un texte argumentatif", description: "Initiation au texte argumentatif" },
  { folder: 'chapitre-05-expression-orale', name: "Expression orale : s'exprimer clairement", description: "Developper ses competences d'expression orale" },
  { folder: 'chapitre-06-ecrire-narratif', name: "Ecriture : ecrire un texte narratif", description: "Apprendre a rediger des recits" },
  { folder: 'chapitre-07-ecrire-informatif', name: "Ecriture : ecrire pour informer et expliquer", description: "Rediger des textes informatifs et explicatifs" },
  { folder: 'chapitre-08-exprimer-opinion', name: "Ecriture : exprimer son opinion", description: "Rediger des textes argumentatifs simples" },
  { folder: 'chapitre-09-grammaire-phrase', name: "Grammaire : les bases de la phrase", description: "Maitriser la structure de la phrase" },
  { folder: 'chapitre-10-classes-mots', name: "Grammaire : les classes de mots", description: "Identifier et utiliser les differentes classes de mots" },
  { folder: 'chapitre-11-conjugaison', name: "Conjugaison : temps et modes essentiels", description: "Maitriser les temps et modes de base" },
  { folder: 'chapitre-12-orthographe-grammaticale', name: "Orthographe grammaticale", description: "Maitriser les accords et l'orthographe grammaticale" },
  { folder: 'chapitre-13-orthographe-vocabulaire', name: "Orthographe lexicale et vocabulaire", description: "Enrichir son vocabulaire et maitriser l'orthographe lexicale" },
  { folder: 'chapitre-14-methodes-travail', name: "Methodes de travail en francais", description: "Developper des methodes de travail efficaces" },
  { folder: 'chapitre-15-culture-litteraire', name: "Culture litteraire (initiation)", description: "Decouvrir la litterature et ses genres" },
  { folder: 'chapitre-16-projet-synthese', name: "Projet et synthese de fin d'annee", description: "Reinvestir les competences acquises" },
];

interface QuizQuestion {
  question: string;
  options: { text: string; isCorrect: boolean }[];
}

interface ModuleContent {
  name: string;
  theory: string;
  questions: QuizQuestion[];
  practice: string;
}

// Parse quiz file to extract questions
function parseQuizFile(content: string): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Split by "## Question" to get individual questions
  const questionBlocks = content.split(/##\s*Question\s+\d+/i).slice(1);

  for (const block of questionBlocks) {
    const lines = block.trim().split('\n').filter(line => line.trim());

    let questionText = '';
    const options: { text: string; isCorrect: boolean }[] = [];
    let correctAnswer = '';

    for (const line of lines) {
      const trimmed = line.trim();

      // Skip separator lines
      if (trimmed === '---' || trimmed === '') continue;

      // Extract question text
      if (trimmed.startsWith('Question :') || trimmed.startsWith('Question:')) {
        questionText = trimmed.replace(/^Question\s*:\s*/i, '').trim();
      }
      // Extract options A, B, C, D
      else if (/^[ABCD]\.\s/.test(trimmed)) {
        const letter = trimmed[0];
        const text = trimmed.slice(3).trim();
        options.push({ text, isCorrect: false });
      }
      // Extract correct answer
      else if (trimmed.toLowerCase().startsWith('reponse correcte') || trimmed.toLowerCase().startsWith('réponse correcte')) {
        const match = trimmed.match(/:\s*([ABCD])/i);
        if (match) {
          correctAnswer = match[1].toUpperCase();
        }
      }
    }

    // Mark correct answer
    if (correctAnswer && options.length === 4) {
      const correctIndex = correctAnswer.charCodeAt(0) - 'A'.charCodeAt(0);
      if (correctIndex >= 0 && correctIndex < options.length) {
        options[correctIndex].isCorrect = true;
      }
    }

    // Only add valid questions (with text and 4 options)
    if (questionText && options.length === 4 && options.some(o => o.isCorrect)) {
      questions.push({ question: questionText, options });
    }
  }

  return questions;
}

// Extract module name from filename
function getModuleName(filename: string): string {
  // Remove number prefix and extension: "01-role-du-francais.md" -> "Le role du francais"
  const baseName = filename
    .replace(/^\d+-/, '') // Remove number prefix
    .replace(/\.md$/, '') // Remove extension
    .replace(/-/g, ' '); // Replace dashes with spaces

  // Capitalize first letter
  return baseName.charAt(0).toUpperCase() + baseName.slice(1);
}

// Read module content from files
function readModuleContent(chapterDir: string, filename: string): ModuleContent | null {
  const baseName = filename.replace(/\.md$/, '');

  const theoryPath = path.join(chapterDir, 'theorie', filename);
  const quizPath = path.join(chapterDir, 'quiz', filename);
  const practicePath = path.join(chapterDir, 'exercices-pratiques', filename);

  try {
    // Read theory
    const theory = fs.existsSync(theoryPath) ? fs.readFileSync(theoryPath, 'utf-8') : '';

    // Read and parse quiz
    const quizContent = fs.existsSync(quizPath) ? fs.readFileSync(quizPath, 'utf-8') : '';
    const questions = parseQuizFile(quizContent);

    // Read practice
    const practice = fs.existsSync(practicePath) ? fs.readFileSync(practicePath, 'utf-8') : '';

    if (!theory && !questions.length && !practice) {
      console.log(`    Skipping ${baseName} - no content found`);
      return null;
    }

    return {
      name: getModuleName(filename),
      theory: theory || 'Contenu a venir.',
      questions: questions.length > 0 ? questions : [],
      practice: practice || 'Exercice pratique a venir.',
    };
  } catch (error) {
    console.error(`    Error reading ${baseName}:`, error);
    return null;
  }
}

// Get all modules for a chapter
function getChapterModules(chapterFolder: string): ModuleContent[] {
  const chapterDir = path.join(CONTENT_DIR, chapterFolder);
  const theoryDir = path.join(chapterDir, 'theorie');

  if (!fs.existsSync(theoryDir)) {
    console.log(`  Theory directory not found: ${theoryDir}`);
    return [];
  }

  const files = fs.readdirSync(theoryDir)
    .filter(f => f.endsWith('.md'))
    .sort(); // Sort to maintain order

  const modules: ModuleContent[] = [];

  for (const file of files) {
    const moduleContent = readModuleContent(chapterDir, file);
    if (moduleContent) {
      modules.push(moduleContent);
    }
  }

  return modules;
}

async function main() {
  console.log('='.repeat(60));
  console.log('Creating Francais L1 9CO content');
  console.log('='.repeat(60));
  console.log(`\nPack ID: ${PACK_ID}`);
  console.log(`Content directory: ${CONTENT_DIR}\n`);

  // Verify pack exists
  const pack = await prisma.pack.findUnique({ where: { id: PACK_ID } });
  if (!pack) {
    console.error('Pack not found! Please create the pack first.');
    process.exit(1);
  }
  console.log(`Found pack: ${pack.name}\n`);

  let totalDisciplines = 0;
  let totalModules = 0;
  let totalQuestions = 0;

  for (let i = 0; i < CHAPTERS_CONFIG.length; i++) {
    const chapter = CHAPTERS_CONFIG[i];
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Chapter ${i + 1}: ${chapter.name}`);
    console.log('='.repeat(60));

    // Get modules for this chapter
    const modules = getChapterModules(chapter.folder);

    if (modules.length === 0) {
      console.log(`  No modules found, skipping...`);
      continue;
    }

    console.log(`  Found ${modules.length} modules`);

    // Create discipline (chapter)
    const discipline = await prisma.discipline.create({
      data: {
        name: chapter.name,
        description: chapter.description,
        packId: PACK_ID,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });
    totalDisciplines++;

    // Create modules for this discipline
    for (let j = 0; j < modules.length; j++) {
      const moduleData = modules[j];
      console.log(`  [${j + 1}/${modules.length}] Creating: ${moduleData.name}`);

      const module = await prisma.module.create({
        data: {
          name: moduleData.name,
          description: `Module sur ${moduleData.name.toLowerCase()}`,
          disciplineId: discipline.id,
          order: j + 1,
          status: ContentStatus.PUBLISHED,
        },
      });

      // Create lesson with theory, quiz settings, and practice
      const lesson = await prisma.lesson.create({
        data: {
          moduleId: module.id,
          theoryContent: moduleData.theory,
          quizThreshold: 70,
          practiceType: PracticeType.EXERCICES,
          practiceInstructions: moduleData.practice,
          practiceValidationMode: PracticeValidationMode.DECLARATIVE,
          practiceTimerDuration: 1800, // 30 minutes
          mode: LessonMode.SLIDES,
          questionsToShow: Math.min(15, moduleData.questions.length), // Show 15 or all if fewer
          shuffleQuestions: true,
          shuffleAnswers: true,
        },
      });

      // Create quiz questions
      for (let k = 0; k < moduleData.questions.length; k++) {
        const q = moduleData.questions[k];

        const question = await prisma.quizQuestion.create({
          data: {
            lessonId: lesson.id,
            questionText: q.question,
            questionType: QuestionType.SINGLE_CHOICE,
            order: k + 1,
            correctAnswer: q.options.findIndex(o => o.isCorrect),
            options: q.options.map(o => o.text),
          },
        });

        // Create quiz options
        for (let l = 0; l < q.options.length; l++) {
          await prisma.quizOption.create({
            data: {
              questionId: question.id,
              text: q.options[l].text,
              isCorrect: q.options[l].isCorrect,
              order: l + 1,
            },
          });
        }
        totalQuestions++;
      }
      totalModules++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Disciplines (chapters): ${totalDisciplines}`);
  console.log(`Modules: ${totalModules}`);
  console.log(`Quiz questions: ${totalQuestions}`);
  console.log('='.repeat(60));
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
