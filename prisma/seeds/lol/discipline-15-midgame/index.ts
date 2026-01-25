/**
 * Discipline 15: Mid game et macro-stratégie
 * 15 modules covering midgame strategy and macro decisions in League of Legends
 */

import { createDiscipline } from '../utils';
import { module01MacroVsMicro } from './module-01-macro-vs-micro';
import { module02MidgameTransition } from './module-02-midgame-transition';
import { module03LaneRotations } from './module-03-lane-rotations';
import { module04OuterTurrets } from './module-04-outer-turrets';
import { module05HeraldUsage } from './module-05-herald-usage';
import { module06FirstDragons } from './module-06-first-dragons';
import { module07LanePriorityObjective } from './module-07-lane-priority-objective';
import { module08TeamGrouping } from './module-08-team-grouping';
import { module09MidgameSplitpush } from './module-09-midgame-splitpush';
import { module10ObjectiveTrading } from './module-10-objective-trading';
import { module11MidgameVision } from './module-11-midgame-vision';
import { module12PunishingMistakes } from './module-12-punishing-mistakes';
import { module13MidgameDefense } from './module-13-midgame-defense';
import { module14MidgameSnowball } from './module-14-midgame-snowball';
import { module15TempoReset } from './module-15-tempo-reset';

export const discipline15Midgame = createDiscipline(
  'Mid game et macro-stratégie',
  'midgame',
  'Maîtrisez les décisions macro du mid-game : rotations, objectifs, vision et stratégies pour contrôler le rythme de la partie',
  15,
  [
    module01MacroVsMicro,
    module02MidgameTransition,
    module03LaneRotations,
    module04OuterTurrets,
    module05HeraldUsage,
    module06FirstDragons,
    module07LanePriorityObjective,
    module08TeamGrouping,
    module09MidgameSplitpush,
    module10ObjectiveTrading,
    module11MidgameVision,
    module12PunishingMistakes,
    module13MidgameDefense,
    module14MidgameSnowball,
    module15TempoReset,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01MacroVsMicro,
  module02MidgameTransition,
  module03LaneRotations,
  module04OuterTurrets,
  module05HeraldUsage,
  module06FirstDragons,
  module07LanePriorityObjective,
  module08TeamGrouping,
  module09MidgameSplitpush,
  module10ObjectiveTrading,
  module11MidgameVision,
  module12PunishingMistakes,
  module13MidgameDefense,
  module14MidgameSnowball,
  module15TempoReset,
};
