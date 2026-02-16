import type { PracticeSlide } from '@/types/slides';

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
 * Parse markdown practice instructions into a single slide.
 * All practice content is displayed on one slide for a streamlined experience.
 */
export function parsePracticeSlides(markdown: string): PracticeSlide[] {
  if (!markdown || markdown.trim().length === 0) {
    return [];
  }

  // Create a single slide with all practice content
  const slide: PracticeSlide = {
    id: 'practice-slide-0',
    title: 'Exercice pratique',
    content: markdown.trim(),
    slideNumber: 1,
    type: 'brief',
  };

  // Check if content contains checklist items
  const checklist = extractChecklist(markdown);
  if (checklist && checklist.length > 0) {
    slide.checklist = checklist;
  }

  return [slide];
}
