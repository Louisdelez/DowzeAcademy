/**
 * Fisher-Yates Shuffle Utility (Feature 005)
 *
 * Implements the Fisher-Yates (Knuth) shuffle algorithm for unbiased
 * random permutation of arrays. Supports optional seeded randomization
 * for reproducible results in testing.
 */

/**
 * Simple seeded random number generator using a linear congruential generator.
 * Used for reproducible shuffling in tests.
 */
function createSeededRandom(seed: string): () => number {
  // Convert string seed to numeric seed using simple hash
  let numericSeed = 0;
  for (let i = 0; i < seed.length; i++) {
    numericSeed = (numericSeed * 31 + seed.charCodeAt(i)) >>> 0;
  }

  // LCG parameters (same as glibc)
  const a = 1103515245;
  const c = 12345;
  const m = 2 ** 31;

  return () => {
    numericSeed = (a * numericSeed + c) % m;
    return numericSeed / m;
  };
}

/**
 * Fisher-Yates (Knuth) shuffle algorithm.
 *
 * @param array - The array to shuffle
 * @param seed - Optional seed for reproducible randomization (useful for testing)
 * @returns A new shuffled array (does not modify the original)
 *
 * @example
 * // Random shuffle
 * const shuffled = fisherYatesShuffle([1, 2, 3, 4, 5]);
 *
 * @example
 * // Reproducible shuffle with seed
 * const shuffled = fisherYatesShuffle([1, 2, 3, 4, 5], 'test-seed');
 */
export function fisherYatesShuffle<T>(array: T[], seed?: string): T[] {
  // Create a copy to avoid mutating the original
  const result = [...array];

  // Use seeded random if seed provided, otherwise Math.random
  const random = seed !== undefined ? createSeededRandom(seed) : Math.random;

  // Fisher-Yates shuffle
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/**
 * Select N random items from an array without replacement.
 * Uses Fisher-Yates shuffle internally.
 *
 * @param array - The source array
 * @param count - Number of items to select
 * @param seed - Optional seed for reproducible selection
 * @returns Array of selected items (length = min(count, array.length))
 *
 * @example
 * // Select 5 random questions from a pool of 10
 * const selected = selectRandom(questions, 5);
 */
export function selectRandom<T>(array: T[], count: number, seed?: string): T[] {
  // Handle edge cases
  if (count <= 0) return [];
  if (count >= array.length) return fisherYatesShuffle(array, seed);

  // Shuffle and take first N
  const shuffled = fisherYatesShuffle(array, seed);
  return shuffled.slice(0, count);
}

/**
 * Generate a random seed string.
 * Useful for debugging/reproducing a specific shuffle.
 */
export function generateSeed(): string {
  return `seed-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Label assignment for shuffled choices.
 * Returns labels A, B, C, D, E, F... based on position.
 */
export const CHOICE_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;

export type ChoiceLabel = (typeof CHOICE_LABELS)[number];

/**
 * Get the label for a given position (0-indexed).
 */
export function getLabelForPosition(position: number): string {
  if (position < 0 || position >= CHOICE_LABELS.length) {
    throw new Error(`Invalid position ${position}. Must be 0-${CHOICE_LABELS.length - 1}`);
  }
  return CHOICE_LABELS[position];
}
