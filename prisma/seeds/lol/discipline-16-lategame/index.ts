/**
 * Discipline 16: Late game et cloture
 * 10 modules covering late game decision making and closing games
 */

import { createDiscipline } from '../utils';
import { module01LategameStakes } from './module-01-lategame-stakes';
import { module02BaronNashor } from './module-02-baron-nashor';
import { module03ElderDragon } from './module-03-elder-dragon';
import { module04DecisiveFights } from './module-04-decisive-fights';
import { module05DeathTimers } from './module-05-death-timers';
import { module06LategameWaves } from './module-06-lategame-waves';
import { module07InhibitorSiege } from './module-07-inhibitor-siege';
import { module08Backdoor } from './module-08-backdoor';
import { module09FinalBuild } from './module-09-final-build';
import { module10AvoidingThrow } from './module-10-avoiding-throw';

export const discipline16Lategame = createDiscipline(
  'Late game et cloture',
  'lategame',
  "Maitriser la phase finale du jeu : objectifs decisifs, teamfights, gestion des waves et cloture de partie",
  16,
  [
    module01LategameStakes,
    module02BaronNashor,
    module03ElderDragon,
    module04DecisiveFights,
    module05DeathTimers,
    module06LategameWaves,
    module07InhibitorSiege,
    module08Backdoor,
    module09FinalBuild,
    module10AvoidingThrow,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01LategameStakes,
  module02BaronNashor,
  module03ElderDragon,
  module04DecisiveFights,
  module05DeathTimers,
  module06LategameWaves,
  module07InhibitorSiege,
  module08Backdoor,
  module09FinalBuild,
  module10AvoidingThrow,
};
