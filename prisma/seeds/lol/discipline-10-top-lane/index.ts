/**
 * Discipline 10: Maîtrise du Top Lane
 * 14 modules covering top lane mastery
 */

import { createDiscipline } from '../utils';
import { module01TopLaneBasics } from './module-01-top-lane-basics';
import { module02TopMatchups } from './module-02-top-matchups';
import { module03SplitPushing } from './module-03-split-pushing';
import { module04TeleportUsage } from './module-04-teleport-usage';
import { module05WaveManagementTop } from './module-05-wave-management-top';
import { module06TopJungleSynergy } from './module-06-top-jungle-synergy';
import { module07TeamfightingTop } from './module-07-teamfighting-top';
import { module08TopGameImpact } from './module-08-top-game-impact';
import { module09ChampionsTop } from './module-09-champions-top';
import { module10SummonerSpellsTop } from './module-10-summoner-spells-top';
import { module11TopLaneSpecificity } from './module-11-top-lane-specificity';
import { module12WardingTop } from './module-12-warding-top';
import { module13TankVsCarry } from './module-13-tank-vs-carry';
import { module14ItemizationTop } from './module-14-itemization-top';

export const discipline10TopLane = createDiscipline(
  'Maîtrise du Top Lane',
  'top-lane-mastery',
  'Tout sur le rôle de top laner : matchups, split-push, teleport et impact sur la partie',
  10,
  [
    module01TopLaneBasics,
    module02TopMatchups,
    module03SplitPushing,
    module04TeleportUsage,
    module05WaveManagementTop,
    module06TopJungleSynergy,
    module07TeamfightingTop,
    module08TopGameImpact,
    module09ChampionsTop,
    module10SummonerSpellsTop,
    module11TopLaneSpecificity,
    module12WardingTop,
    module13TankVsCarry,
    module14ItemizationTop,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01TopLaneBasics,
  module02TopMatchups,
  module03SplitPushing,
  module04TeleportUsage,
  module05WaveManagementTop,
  module06TopJungleSynergy,
  module07TeamfightingTop,
  module08TopGameImpact,
  module09ChampionsTop,
  module10SummonerSpellsTop,
  module11TopLaneSpecificity,
  module12WardingTop,
  module13TankVsCarry,
  module14ItemizationTop,
};
