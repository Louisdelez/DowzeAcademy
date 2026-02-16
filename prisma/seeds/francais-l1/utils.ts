// Utility types and helpers for Français L1 9CO content creation
import { LessonMode } from '../../../src/generated/prisma';

export interface QuizQuestion {
  question: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation?: string;
}

export interface ModuleContent {
  title: string;
  description: string;
  theory: string; // Markdown with --- separators for slides
  questions: QuizQuestion[];
  practice: string;
}

export interface ChapterContent {
  title: string;
  description: string;
  icon: string;
  modules: ModuleContent[];
}

export function createLessonData(
  moduleId: string,
  content: ModuleContent,
  orderIndex: number
) {
  // Split theory into slides by ---
  const slides = content.theory
    .split(/\n---\n/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  if (slides.length < 15 || slides.length > 25) {
    console.warn(
      `Warning: Module "${content.title}" has ${slides.length} slides (expected 15-25)`
    );
  }

  if (content.questions.length !== 25) {
    console.warn(
      `Warning: Module "${content.title}" has ${content.questions.length} questions (expected 25)`
    );
  }

  return {
    moduleId,
    title: content.title,
    description: content.description,
    mode: LessonMode.SLIDES,
    orderIndex,
    theoryContent: content.theory,
    practiceContent: content.practice,
    quizQuestions: {
      create: content.questions.map((q, i) => ({
        orderIndex: i,
        question: q.question,
        correctAnswer: q.options[q.correct],
        explanation: q.explanation || '',
        options: {
          create: q.options.map((opt, j) => ({
            text: opt,
            isCorrect: j === q.correct,
          })),
        },
      })),
    },
  };
}

export function validateChapterContent(chapter: ChapterContent): boolean {
  let valid = true;

  for (const module of chapter.modules) {
    const slides = module.theory
      .split(/\n---\n/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (slides.length < 15) {
      console.error(`ERROR: "${module.title}" has only ${slides.length} slides (min 15)`);
      valid = false;
    }
    if (slides.length > 25) {
      console.error(`ERROR: "${module.title}" has ${slides.length} slides (max 25)`);
      valid = false;
    }
    if (module.questions.length !== 25) {
      console.error(
        `ERROR: "${module.title}" has ${module.questions.length} questions (expected 25)`
      );
      valid = false;
    }

    // Validate each question has 4 unique options
    for (const q of module.questions) {
      if (q.options.length !== 4) {
        console.error(`ERROR: Question "${q.question.substring(0, 50)}..." has ${q.options.length} options (expected 4)`);
        valid = false;
      }
      const uniqueOpts = new Set(q.options);
      if (uniqueOpts.size !== 4) {
        console.error(`ERROR: Question "${q.question.substring(0, 50)}..." has duplicate options`);
        valid = false;
      }
    }
  }

  return valid;
}
