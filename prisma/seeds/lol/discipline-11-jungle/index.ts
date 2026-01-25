/**
 * Discipline 11: Maîtrise de la Jungle
 * 15 modules covering jungle mastery
 */

import { createDiscipline } from '../utils';
import { module01JungleBasics } from './module-01-jungle-basics';
import { module02JungleCamps } from './module-02-jungle-camps';
import { module03JungleClear } from './module-03-jungle-clear';
import { module04Ganking } from './module-04-ganking';
import { module05JunglePathing } from './module-05-jungle-pathing';
import { module06CounterJungling } from './module-06-counter-jungling';
import { module07JungleTracking } from './module-07-jungle-tracking';
import { module08SmiteFights } from './module-08-smite-fights';
import { module09ObjectiveControl } from './module-09-objective-control';
import { module10JungleChampions } from './module-10-jungle-champions';
import { module11EarlyGameJungle } from './module-11-early-game-jungle';
import { module12MidGameJungle } from './module-12-mid-game-jungle';
import { module13LateGameJungle } from './module-13-late-game-jungle';
import { module14JungleCommunication } from './module-14-jungle-communication';
import { module15JungleImprovement } from './module-15-jungle-improvement';

export const discipline11Jungle = createDiscipline(
  'Maîtrise de la Jungle',
  'jungle-mastery',
  'Guide complet du jungler : camps, clear, ganks, objectifs et progression',
  11,
  [
    module01JungleBasics,
    module02JungleCamps,
    module03JungleClear,
    module04Ganking,
    module05JunglePathing,
    module06CounterJungling,
    module07JungleTracking,
    module08SmiteFights,
    module09ObjectiveControl,
    module10JungleChampions,
    module11EarlyGameJungle,
    module12MidGameJungle,
    module13LateGameJungle,
    module14JungleCommunication,
    module15JungleImprovement,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01JungleBasics,
  module02JungleCamps,
  module03JungleClear,
  module04Ganking,
  module05JunglePathing,
  module06CounterJungling,
  module07JungleTracking,
  module08SmiteFights,
  module09ObjectiveControl,
  module10JungleChampions,
  module11EarlyGameJungle,
  module12MidGameJungle,
  module13LateGameJungle,
  module14JungleCommunication,
  module15JungleImprovement,
};
