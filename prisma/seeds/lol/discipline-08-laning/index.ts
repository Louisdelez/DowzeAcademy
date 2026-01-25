/**
 * Discipline 08: Phase de laning
 * 17 modules covering the laning phase fundamentals
 */

import { createDiscipline } from '../utils';
import { module01LaneObjectives } from './module-01-lane-objectives';
import { module02LastHitting } from './module-02-last-hitting';
import { module03MinionWave } from './module-03-minion-wave';
import { module04WaveManagement } from './module-04-wave-management';
import { module05Trading } from './module-05-trading';
import { module06LanePositioning } from './module-06-lane-positioning';
import { module07BackTiming } from './module-07-back-timing';
import { module08LosingLane } from './module-08-losing-lane';
import { module09WinningLane } from './module-09-winning-lane';
import { module10Roaming } from './module-10-roaming';
import { module11TowerPlates } from './module-11-tower-plates';
import { module12GankAwareness } from './module-12-gank-awareness';
import { module13LaneMatchups } from './module-13-lane-matchups';
import { module14PowerSpikes } from './module-14-power-spikes';
import { module15CooldownTracking } from './module-15-cooldown-tracking';
import { module16ManaManagement } from './module-16-mana-management';
import { module17HPManagement } from './module-17-hp-management';

export const discipline08Laning = createDiscipline(
  'Phase de laning',
  'laning-phase',
  "Maîtrise complète de la phase de lane : farm, trades, wave management et positionnement",
  8,
  [
    module01LaneObjectives,
    module02LastHitting,
    module03MinionWave,
    module04WaveManagement,
    module05Trading,
    module06LanePositioning,
    module07BackTiming,
    module08LosingLane,
    module09WinningLane,
    module10Roaming,
    module11TowerPlates,
    module12GankAwareness,
    module13LaneMatchups,
    module14PowerSpikes,
    module15CooldownTracking,
    module16ManaManagement,
    module17HPManagement,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01LaneObjectives,
  module02LastHitting,
  module03MinionWave,
  module04WaveManagement,
  module05Trading,
  module06LanePositioning,
  module07BackTiming,
  module08LosingLane,
  module09WinningLane,
  module10Roaming,
  module11TowerPlates,
  module12GankAwareness,
  module13LaneMatchups,
  module14PowerSpikes,
  module15CooldownTracking,
  module16ManaManagement,
  module17HPManagement,
};
