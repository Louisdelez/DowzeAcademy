/**
 * Discipline 18: Contrôle de vision
 * 12 modules covering ward usage, vision control, and map awareness for League of Legends
 */

import { createDiscipline } from '../utils';
import { module01VisionImportance } from './module-01-vision-importance';
import { module02StealthWards } from './module-02-stealth-wards';
import { module03ControlWards } from './module-03-control-wards';
import { module04OracleLens } from './module-04-oracle-lens';
import { module05Farsight } from './module-05-farsight';
import { module06EarlyWardSpots } from './module-06-early-ward-spots';
import { module07OffensiveWards } from './module-07-offensive-wards';
import { module08WardTiming } from './module-08-ward-timing';
import { module09SweeperUsage } from './module-09-sweeper-usage';
import { module10TeamVisionContribution } from './module-10-team-vision-contribution';
import { module11VisionScore } from './module-11-vision-score';
import { module12VisionBait } from './module-12-vision-bait';

export const discipline18Vision = createDiscipline(
  'Contrôle de vision',
  'vision',
  'Maîtriser les wards, le contrôle de vision et la lecture de la carte pour dominer les parties',
  18,
  [
    module01VisionImportance,
    module02StealthWards,
    module03ControlWards,
    module04OracleLens,
    module05Farsight,
    module06EarlyWardSpots,
    module07OffensiveWards,
    module08WardTiming,
    module09SweeperUsage,
    module10TeamVisionContribution,
    module11VisionScore,
    module12VisionBait,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01VisionImportance,
  module02StealthWards,
  module03ControlWards,
  module04OracleLens,
  module05Farsight,
  module06EarlyWardSpots,
  module07OffensiveWards,
  module08WardTiming,
  module09SweeperUsage,
  module10TeamVisionContribution,
  module11VisionScore,
  module12VisionBait,
};
