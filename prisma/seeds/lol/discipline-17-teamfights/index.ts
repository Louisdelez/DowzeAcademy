/**
 * Discipline 17: Teamfights et escarmouches
 * 12 modules covering teamfight mechanics, coordination, and combat strategies
 */

import { createDiscipline } from '../utils';
import { module01TargetFocus } from './module-01-target-focus';
import { module02FrontToBack } from './module-02-front-to-back';
import { module03FlankEngage } from './module-03-flank-engage';
import { module04CarryPeel } from './module-04-carry-peel';
import { module05WomboCombo } from './module-05-wombo-combo';
import { module06CooldownTracking } from './module-06-cooldown-tracking';
import { module07NumericalAdvantage } from './module-07-numerical-advantage';
import { module08TerrainUsage } from './module-08-terrain-usage';
import { module09TeamfightCommunication } from './module-09-teamfight-communication';
import { module10DisengageReset } from './module-10-disengage-reset';
import { module11ResetChampions } from './module-11-reset-champions';
import { module12Cleanup } from './module-12-cleanup';

export const discipline17Teamfights = createDiscipline(
  'Teamfights et escarmouches',
  'teamfights',
  "Maîtriser les combats d'équipe : focus, positionnement, coordination, et stratégies avancées",
  17,
  [
    module01TargetFocus,
    module02FrontToBack,
    module03FlankEngage,
    module04CarryPeel,
    module05WomboCombo,
    module06CooldownTracking,
    module07NumericalAdvantage,
    module08TerrainUsage,
    module09TeamfightCommunication,
    module10DisengageReset,
    module11ResetChampions,
    module12Cleanup,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01TargetFocus,
  module02FrontToBack,
  module03FlankEngage,
  module04CarryPeel,
  module05WomboCombo,
  module06CooldownTracking,
  module07NumericalAdvantage,
  module08TerrainUsage,
  module09TeamfightCommunication,
  module10DisengageReset,
  module11ResetChampions,
  module12Cleanup,
};
