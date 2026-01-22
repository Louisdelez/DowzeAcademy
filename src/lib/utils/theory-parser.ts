import type { TheorySlide, TheorySlideType } from '@/types/slides';

// Re-export for backwards compatibility
export type { TheorySlide };

/**
 * Detect slide type from title keywords
 */
function detectSlideType(title: string): TheorySlideType {
  const lowerTitle = title.toLowerCase();

  if (
    lowerTitle.includes('pourquoi') ||
    lowerTitle.includes('important') ||
    lowerTitle.includes('why')
  ) {
    return 'why';
  }

  if (
    lowerTitle.includes('exemple') ||
    lowerTitle.includes('example') ||
    lowerTitle.includes('cas pratique')
  ) {
    return 'example';
  }

  if (
    lowerTitle.includes('erreur') ||
    lowerTitle.includes('piège') ||
    lowerTitle.includes('éviter') ||
    lowerTitle.includes('mistake')
  ) {
    return 'mistakes';
  }

  if (
    lowerTitle.includes('récap') ||
    lowerTitle.includes('résumé') ||
    lowerTitle.includes('conclusion') ||
    lowerTitle.includes('recap') ||
    lowerTitle.includes('summary')
  ) {
    return 'recap';
  }

  // Default to concept
  return 'concept';
}

/**
 * Parse markdown theory content into slides.
 * Splits content by ## headings, each becoming a separate slide.
 * Main # title is ignored (shown in page header).
 * Content before the first ## with no heading becomes an "Introduction" slide.
 */
export function parseTheorySlides(markdown: string): TheorySlide[] {
  if (!markdown || markdown.trim().length === 0) {
    return [];
  }

  const slides: TheorySlide[] = [];

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

      // If there's actual content before the first ##, create an Introduction slide
      if (content.length > 0) {
        title = 'Introduction';
      } else {
        // No content, just a # title - skip this section
        return;
      }
    }

    // Only add slides that have actual content
    if (content.length > 0) {
      slides.push({
        id: `theory-slide-${slides.length}`,
        title,
        content,
        slideNumber: slides.length + 1,
        type: detectSlideType(title),
      });
    }
  });

  return slides;
}

/**
 * Find a theory slide by its title (for quiz question linking)
 */
export function findTheorySlideByTitle(
  slides: TheorySlide[],
  title: string | null | undefined
): TheorySlide | null {
  if (!title) return null;

  const normalizedTitle = title.toLowerCase().trim();

  return (
    slides.find((slide) => slide.title.toLowerCase().trim() === normalizedTitle) ||
    null
  );
}
