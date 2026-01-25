/**
 * Discipline 01: Introduction et fondamentaux du jeu
 * 10 modules covering the basics of League of Legends
 */

import { createDiscipline } from '../utils';
import { module01WhatIsLoL } from './module-01-what-is-lol';
import { module02VictoryCondition } from './module-02-victory-condition';
import { module03GameFlow } from './module-03-game-flow';
import { module04InterfaceMinimap } from './module-04-interface-minimap';
import { module05BasicControls } from './module-05-basic-controls';
import { module06ChampionProgression } from './module-06-champion-progression';
import { module07GoldAccumulation } from './module-07-gold-accumulation';
import { module08Recall } from './module-08-recall';
import { module09ChampionDeath } from './module-09-champion-death';
import { module10KDA } from './module-10-kda';

export const discipline01Fundamentals = createDiscipline(
  'Introduction et fondamentaux du jeu',
  'fundamentals',
  "Les bases essentielles de League of Legends : objectif, interface, contrôles et mécaniques fondamentales",
  1,
  [
    module01WhatIsLoL,
    module02VictoryCondition,
    module03GameFlow,
    module04InterfaceMinimap,
    module05BasicControls,
    module06ChampionProgression,
    module07GoldAccumulation,
    module08Recall,
    module09ChampionDeath,
    module10KDA,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01WhatIsLoL,
  module02VictoryCondition,
  module03GameFlow,
  module04InterfaceMinimap,
  module05BasicControls,
  module06ChampionProgression,
  module07GoldAccumulation,
  module08Recall,
  module09ChampionDeath,
  module10KDA,
};
