/**
 * Discipline 06: Les runes reforgées
 * 7 modules covering the rune system
 */

import { createDiscipline } from '../utils';
import { module01RuneSystem } from './module-01-rune-system';
import { module02Precision } from './module-02-precision';
import { module03Domination } from './module-03-domination';
import { module04Resolve } from './module-04-resolve';
import { module05Sorcery } from './module-05-sorcery';
import { module06Inspiration } from './module-06-inspiration';
import { module07RuneShards } from './module-07-rune-shards';

export const discipline06Runes = createDiscipline(
  'Les runes reforgées',
  'runes',
  "Système de runes, arbres, Keystones et fragments pour personnaliser votre champion",
  6,
  [
    module01RuneSystem,
    module02Precision,
    module03Domination,
    module04Resolve,
    module05Sorcery,
    module06Inspiration,
    module07RuneShards,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01RuneSystem,
  module02Precision,
  module03Domination,
  module04Resolve,
  module05Sorcery,
  module06Inspiration,
  module07RuneShards,
};
