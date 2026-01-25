/**
 * Discipline 12: Maîtrise de la Mid lane
 * 15 modules covering mid lane mastery in League of Legends
 */

import { createDiscipline } from '../utils';
import { module01MidRole } from './module-01-mid-role';
import { module02MidChampions } from './module-02-mid-champions';
import { module03MidPriority } from './module-03-mid-priority';
import { module04MidRoaming } from './module-04-mid-roaming';
import { module05MidMatchups } from './module-05-mid-matchups';
import { module06MidWaveclear } from './module-06-mid-waveclear';
import { module07MidVision } from './module-07-mid-vision';
import { module08MidSurvival } from './module-08-mid-survival';
import { module09MidBurstCombo } from './module-09-mid-burst-combo';
import { module10MidSkirmishes } from './module-10-mid-skirmishes';
import { module11MidMapInfluence } from './module-11-mid-map-influence';
import { module12MidTeamfights } from './module-12-mid-teamfights';
import { module13MidBuildAdaptation } from './module-13-mid-build-adaptation';
import { module14MidSummonerSpells } from './module-14-mid-summoner-spells';
import { module15MidObjectivePriority } from './module-15-mid-objective-priority';

export const discipline12MidLane = createDiscipline(
  'Maîtrise de la Mid lane',
  'mid-lane',
  "Maîtrisez le rôle central de la carte : carry polyvalent, roaming, matchups, et influence sur le jeu",
  12,
  [
    module01MidRole,
    module02MidChampions,
    module03MidPriority,
    module04MidRoaming,
    module05MidMatchups,
    module06MidWaveclear,
    module07MidVision,
    module08MidSurvival,
    module09MidBurstCombo,
    module10MidSkirmishes,
    module11MidMapInfluence,
    module12MidTeamfights,
    module13MidBuildAdaptation,
    module14MidSummonerSpells,
    module15MidObjectivePriority,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01MidRole,
  module02MidChampions,
  module03MidPriority,
  module04MidRoaming,
  module05MidMatchups,
  module06MidWaveclear,
  module07MidVision,
  module08MidSurvival,
  module09MidBurstCombo,
  module10MidSkirmishes,
  module11MidMapInfluence,
  module12MidTeamfights,
  module13MidBuildAdaptation,
  module14MidSummonerSpells,
  module15MidObjectivePriority,
};
