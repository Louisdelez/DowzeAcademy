/**
 * Discipline 25: Progression en classe
 * 11 modules covering ranked progression, competitive play, and pro career path
 */

import { createDiscipline } from '../utils';
import { module01RankedTiers } from './module-01-ranked-tiers';
import { module02MmrMatchmaking } from './module-02-mmr-matchmaking';
import { module03SeasonsSplits } from './module-03-seasons-splits';
import { module04SoloVsFlex } from './module-04-solo-vs-flex';
import { module05ClashTournaments } from './module-05-clash-tournaments';
import { module06ReachingMaster } from './module-06-reaching-master';
import { module07VisibilityNetworking } from './module-07-visibility-networking';
import { module08JoiningProTeam } from './module-08-joining-pro-team';
import { module09ProDailyLife } from './module-09-pro-daily-life';
import { module10LanPressure } from './module-10-lan-pressure';
import { module11CareerStability } from './module-11-career-stability';

export const discipline25Ranked = createDiscipline(
  'Progression en classe',
  'ranked-progression',
  'Maitriser le systeme de classement, atteindre les hauts rangs et construire une carriere professionnelle dans l\'esport',
  25,
  [
    module01RankedTiers,
    module02MmrMatchmaking,
    module03SeasonsSplits,
    module04SoloVsFlex,
    module05ClashTournaments,
    module06ReachingMaster,
    module07VisibilityNetworking,
    module08JoiningProTeam,
    module09ProDailyLife,
    module10LanPressure,
    module11CareerStability,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01RankedTiers,
  module02MmrMatchmaking,
  module03SeasonsSplits,
  module04SoloVsFlex,
  module05ClashTournaments,
  module06ReachingMaster,
  module07VisibilityNetworking,
  module08JoiningProTeam,
  module09ProDailyLife,
  module10LanPressure,
  module11CareerStability,
};
