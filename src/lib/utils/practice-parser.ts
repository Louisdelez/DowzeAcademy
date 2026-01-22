import type { PracticeSlide, PracticeSlideType } from '@/types/slides';

/**
 * Detect practice slide type from title keywords
 */
function detectPracticeSlideType(title: string): PracticeSlideType {
  const lowerTitle = title.toLowerCase();

  if (
    lowerTitle.includes('objectif') ||
    lowerTitle.includes('brief') ||
    lowerTitle.includes('but') ||
    lowerTitle.includes('goal')
  ) {
    return 'brief';
  }

  if (
    lowerTitle.includes('préparation') ||
    lowerTitle.includes('setup') ||
    lowerTitle.includes('prérequis') ||
    lowerTitle.includes('avant')
  ) {
    return 'setup';
  }

  if (
    lowerTitle.includes('évaluation') ||
    lowerTitle.includes('auto-évaluation') ||
    lowerTitle.includes('checklist') ||
    lowerTitle.includes('vérification')
  ) {
    return 'evaluation';
  }

  if (
    lowerTitle.includes('suite') ||
    lowerTitle.includes('next') ||
    lowerTitle.includes('prochaine') ||
    lowerTitle.includes('continuer')
  ) {
    return 'next';
  }

  // Default to step
  return 'step';
}

/**
 * Extract checklist items from content
 * Looks for lines starting with - [ ] or - [x] or simply - followed by text
 */
function extractChecklist(content: string): string[] | undefined {
  const checklistPattern = /^[-*]\s*(\[[ x]\]\s*)?(.+)$/gim;
  const matches = content.match(checklistPattern);

  if (!matches || matches.length === 0) return undefined;

  return matches.map((match) => {
    // Remove the leading - or * and optional [ ] or [x]
    return match.replace(/^[-*]\s*(\[[ x]\]\s*)?/, '').trim();
  });
}

/**
 * Parse markdown practice instructions into slides.
 * Splits content by ## headings, each becoming a separate slide.
 * Detects checklist items in evaluation slides.
 */
export function parsePracticeSlides(markdown: string): PracticeSlide[] {
  if (!markdown || markdown.trim().length === 0) {
    return [];
  }

  const slides: PracticeSlide[] = [];

  // Split by ## headings while keeping the delimiter
  const sections = markdown.split(/(?=^## )/m);

  sections.forEach((section) => {
    const trimmed = section.trim();
    if (trimmed.length === 0) return;

    const lines = trimmed.split('\n');
    const firstLine = lines[0];

    // Check if this section starts with a ## heading
    const isH2Heading = firstLine.startsWith('## ');

    let title: string;
    let content: string;

    if (isH2Heading) {
      // Extract title from ## heading
      title = firstLine.slice(3).trim();
      // Content is everything after the heading
      content = lines.slice(1).join('\n').trim();
    } else {
      // No ## heading - this is content before the first ##
      // Skip lines that are just the main # title
      const contentLines = lines.filter((line) => !line.startsWith('# '));
      content = contentLines.join('\n').trim();

      // If there's actual content before the first ##, create a Brief slide
      if (content.length > 0) {
        title = 'Objectif';
      } else {
        // No content, just a # title - skip this section
        return;
      }
    }

    // Only add slides that have actual content
    if (content.length > 0) {
      const type = detectPracticeSlideType(title);

      const slide: PracticeSlide = {
        id: `practice-slide-${slides.length}`,
        title,
        content,
        slideNumber: slides.length + 1,
        type,
      };

      // Extract checklist for evaluation slides
      if (type === 'evaluation') {
        const checklist = extractChecklist(content);
        if (checklist && checklist.length > 0) {
          slide.checklist = checklist;
        }
      }

      slides.push(slide);
    }
  });

  // If no slides were created but there's content, create a single brief slide
  if (slides.length === 0 && markdown.trim().length > 0) {
    slides.push({
      id: 'practice-slide-0',
      title: 'Instructions',
      content: markdown.trim(),
      slideNumber: 1,
      type: 'brief',
    });
  }

  return slides;
}
