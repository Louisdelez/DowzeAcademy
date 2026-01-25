/**
 * Discipline 14: Maîtrise du Support
 * 15 modules covering all aspects of playing the support role in League of Legends
 */

import { createDiscipline } from '../utils';
import { module01SupportRole } from './module-01-support-role';
import { module02SupportTypes } from './module-02-support-types';
import { module03EarlyGameSupport } from './module-03-early-game-support';
import { module04LaneVision } from './module-04-lane-vision';
import { module05PeelVsEngage } from './module-05-peel-vs-engage';
import { module06SupportRoaming } from './module-06-support-roaming';
import { module07SupportItemQuest } from './module-07-support-item-quest';
import { module08RelicSpellthief } from './module-08-relic-spellthief';
import { module09ShotcallingVision } from './module-09-shotcalling-vision';
import { module10TeamfightPositioning } from './module-10-teamfight-positioning';
import { module11CCChaining } from './module-11-cc-chaining';
import { module12SupportActives } from './module-12-support-actives';
import { module13LateGameVision } from './module-13-late-game-vision';
import { module14SupportBehind } from './module-14-support-behind';
import { module15SupportEconomy } from './module-15-support-economy';

export const discipline14Support = createDiscipline(
  'Maîtrise du Support',
  'support-mastery',
  "Maîtriser le rôle de support : vision, protection, engagement et impact sur la carte sans farm",
  14,
  [
    module01SupportRole,
    module02SupportTypes,
    module03EarlyGameSupport,
    module04LaneVision,
    module05PeelVsEngage,
    module06SupportRoaming,
    module07SupportItemQuest,
    module08RelicSpellthief,
    module09ShotcallingVision,
    module10TeamfightPositioning,
    module11CCChaining,
    module12SupportActives,
    module13LateGameVision,
    module14SupportBehind,
    module15SupportEconomy,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01SupportRole,
  module02SupportTypes,
  module03EarlyGameSupport,
  module04LaneVision,
  module05PeelVsEngage,
  module06SupportRoaming,
  module07SupportItemQuest,
  module08RelicSpellthief,
  module09ShotcallingVision,
  module10TeamfightPositioning,
  module11CCChaining,
  module12SupportActives,
  module13LateGameVision,
  module14SupportBehind,
  module15SupportEconomy,
};
