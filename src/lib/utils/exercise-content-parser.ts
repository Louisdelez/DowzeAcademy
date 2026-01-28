/**
 * Exercise Content Parser
 *
 * Separates exercise content from corrections for the practice flow.
 * Corrections are hidden until the exercise timer is complete.
 */

interface ParsedExerciseContent {
  /** Main exercise content (without corrections) */
  exerciseContent: string;
  /** Correction content (if any) */
  correctionContent: string | null;
  /** Whether the exercise has corrections */
  hasCorrections: boolean;
}

/**
 * Keywords that indicate the start of a correction section.
 * Supports French variations.
 */
const CORRECTION_KEYWORDS = [
  'Correction :',
  'Correction:',
  'Corrections :',
  'Corrections:',
  '## Correction',
  '### Correction',
  '**Correction**',
  '**Correction :**',
  '**Corrections**',
  '**Corrections :**',
  'Réponses :',
  'Réponses:',
  '## Réponses',
  '### Réponses',
  '**Réponses**',
  '**Réponses :**',
  'Solution :',
  'Solution:',
  '## Solution',
  '### Solution',
  '**Solution**',
  '**Solution :**',
];

/**
 * Parse exercise content and separate corrections.
 *
 * @param content - The full exercise content (markdown)
 * @returns Parsed content with exercise and corrections separated
 */
export function parseExerciseContent(content: string): ParsedExerciseContent {
  if (!content) {
    return {
      exerciseContent: '',
      correctionContent: null,
      hasCorrections: false,
    };
  }

  const lines = content.split('\n');
  let correctionStartIndex = -1;

  // Find the first line that starts a correction section
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    for (const keyword of CORRECTION_KEYWORDS) {
      if (line.startsWith(keyword) || line === keyword.replace(' :', ':').replace(':', '')) {
        correctionStartIndex = i;
        break;
      }
    }

    if (correctionStartIndex !== -1) break;
  }

  // If no correction section found, return original content
  if (correctionStartIndex === -1) {
    return {
      exerciseContent: content,
      correctionContent: null,
      hasCorrections: false,
    };
  }

  // Split content into exercise and correction parts
  const exerciseLines = lines.slice(0, correctionStartIndex);
  const correctionLines = lines.slice(correctionStartIndex);

  // Remove trailing empty lines from exercise content
  while (exerciseLines.length > 0 && exerciseLines[exerciseLines.length - 1].trim() === '') {
    exerciseLines.pop();
  }

  return {
    exerciseContent: exerciseLines.join('\n'),
    correctionContent: correctionLines.join('\n'),
    hasCorrections: true,
  };
}

/**
 * Check if content contains corrections.
 *
 * @param content - The exercise content to check
 * @returns True if content contains correction keywords
 */
export function hasCorrections(content: string): boolean {
  if (!content) return false;

  const lowerContent = content.toLowerCase();

  return CORRECTION_KEYWORDS.some(keyword =>
    lowerContent.includes(keyword.toLowerCase())
  );
}
