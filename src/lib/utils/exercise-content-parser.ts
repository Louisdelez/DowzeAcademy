/**
 * Exercise Content Parser
 *
 * Separates exercise content from corrections for the practice flow.
 * Corrections are hidden until the exercise timer is complete.
 *
 * Supports two content structures:
 * 1. Corrections at the end (simple): Exercise content, then all corrections
 * 2. Interspersed corrections: Each exercise followed by its correction
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
 * Keywords that indicate the start of a new exercise section.
 * Used to detect when corrections end and new exercise begins.
 */
const EXERCISE_KEYWORDS = [
  '## Exercice',
  '### Exercice',
  '**Exercice',
  'Exercice ',
];

/**
 * Check if a line starts a correction section
 */
function isCorrectionLine(line: string): boolean {
  const trimmed = line.trim();
  for (const keyword of CORRECTION_KEYWORDS) {
    if (trimmed.startsWith(keyword) || trimmed === keyword.replace(' :', ':').replace(':', '')) {
      return true;
    }
  }
  return false;
}

/**
 * Check if a line starts a new exercise section
 */
function isExerciseLine(line: string): boolean {
  const trimmed = line.trim();
  for (const keyword of EXERCISE_KEYWORDS) {
    if (trimmed.startsWith(keyword)) {
      return true;
    }
  }
  return false;
}

/**
 * Parse exercise content and separate corrections.
 * Handles both interspersed corrections (correction after each exercise)
 * and corrections at the end of the content.
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
  const exerciseLines: string[] = [];
  const correctionLines: string[] = [];

  let inCorrectionSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this line starts a new correction section
    if (isCorrectionLine(line)) {
      inCorrectionSection = true;
      correctionLines.push(line);
      continue;
    }

    // Check if we're in a correction section but hit a new exercise
    if (inCorrectionSection && isExerciseLine(line)) {
      inCorrectionSection = false;
      exerciseLines.push(line);
      continue;
    }

    // Add line to appropriate section
    if (inCorrectionSection) {
      correctionLines.push(line);
    } else {
      exerciseLines.push(line);
    }
  }

  // Clean up trailing empty lines from exercise content
  while (exerciseLines.length > 0 && exerciseLines[exerciseLines.length - 1].trim() === '') {
    exerciseLines.pop();
  }

  // Clean up leading/trailing empty lines from correction content
  while (correctionLines.length > 0 && correctionLines[0].trim() === '') {
    correctionLines.shift();
  }
  while (correctionLines.length > 0 && correctionLines[correctionLines.length - 1].trim() === '') {
    correctionLines.pop();
  }

  const hasCorrections = correctionLines.length > 0;

  return {
    exerciseContent: exerciseLines.join('\n'),
    correctionContent: hasCorrections ? correctionLines.join('\n') : null,
    hasCorrections,
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
