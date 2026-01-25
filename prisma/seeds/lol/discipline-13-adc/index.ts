/**
 * Discipline 13: Maîtrise de la Bot lane - ADC
 * 16 modules covering ADC role mastery in League of Legends
 */

import { createDiscipline } from '../utils';
import { module01AdcRole } from './module-01-adc-role';
import { module02AdcChampions } from './module-02-adc-champions';
import { module03DuoSynergy } from './module-03-duo-synergy';
import { module04LanePositioning } from './module-04-lane-positioning';
import { module052v2Trades } from './module-05-2v2-trades';
import { module06WaveManagementBot } from './module-06-wave-management-bot';
import { module07AdcFarming } from './module-07-adc-farming';
import { module08AdcSupportSynergy } from './module-08-adc-support-synergy';
import { module09ThreatAvoidance } from './module-09-threat-avoidance';
import { module10AdvancedKiting } from './module-10-advanced-kiting';
import { module11TargetPriority } from './module-11-target-priority';
import { module12AssassinTankHandling } from './module-12-assassin-tank-handling';
import { module13AdcPowerSpikes } from './module-13-adc-power-spikes';
import { module14SidelaneFarming } from './module-14-sidelane-farming';
import { module15AdcSummonerSpells } from './module-15-adc-summoner-spells';
import { module16RedBuffCommunication } from './module-16-red-buff-communication';

export const discipline13Adc = createDiscipline(
  'Maîtrise de la Bot lane - ADC',
  'adc-mastery',
  "Maîtriser le rôle d'ADC : dégâts physiques continus, positionnement, kiting et coordination avec le support pour dominer la bot lane et porter l'équipe en late game",
  13,
  [
    module01AdcRole,
    module02AdcChampions,
    module03DuoSynergy,
    module04LanePositioning,
    module052v2Trades,
    module06WaveManagementBot,
    module07AdcFarming,
    module08AdcSupportSynergy,
    module09ThreatAvoidance,
    module10AdvancedKiting,
    module11TargetPriority,
    module12AssassinTankHandling,
    module13AdcPowerSpikes,
    module14SidelaneFarming,
    module15AdcSummonerSpells,
    module16RedBuffCommunication,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01AdcRole,
  module02AdcChampions,
  module03DuoSynergy,
  module04LanePositioning,
  module052v2Trades,
  module06WaveManagementBot,
  module07AdcFarming,
  module08AdcSupportSynergy,
  module09ThreatAvoidance,
  module10AdvancedKiting,
  module11TargetPriority,
  module12AssassinTankHandling,
  module13AdcPowerSpikes,
  module14SidelaneFarming,
  module15AdcSummonerSpells,
  module16RedBuffCommunication,
};
