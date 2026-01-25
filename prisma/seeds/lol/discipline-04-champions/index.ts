/**
 * Discipline 04: Les champions et leurs capacités
 * 12 modules covering champion mechanics and abilities
 */

import { createDiscipline } from '../utils';
import { module01ChampionClasses } from './module-01-champion-classes';
import { module02ChampionStats } from './module-02-champion-stats';
import { module03Abilities } from './module-03-abilities';
import { module04Ultimate } from './module-04-ultimate';
import { module05LevelSystem } from './module-05-level-system';
import { module06DamageTypes } from './module-06-damage-types';
import { module07AttackRange } from './module-07-attack-range';
import { module08CrowdControl } from './module-08-crowd-control';
import { module09Sustain } from './module-09-sustain';
import { module10Resources } from './module-10-resources';
import { module11Combos } from './module-11-combos';
import { module12Cooldowns } from './module-12-cooldowns';

export const discipline04Champions = createDiscipline(
  'Les champions et leurs capacités',
  'champions-abilities',
  "Classes, statistiques, compétences et mécaniques des champions de League of Legends",
  4,
  [
    module01ChampionClasses,
    module02ChampionStats,
    module03Abilities,
    module04Ultimate,
    module05LevelSystem,
    module06DamageTypes,
    module07AttackRange,
    module08CrowdControl,
    module09Sustain,
    module10Resources,
    module11Combos,
    module12Cooldowns,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01ChampionClasses,
  module02ChampionStats,
  module03Abilities,
  module04Ultimate,
  module05LevelSystem,
  module06DamageTypes,
  module07AttackRange,
  module08CrowdControl,
  module09Sustain,
  module10Resources,
  module11Combos,
  module12Cooldowns,
};
