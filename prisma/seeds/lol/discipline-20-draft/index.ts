/**
 * Discipline 20: Draft et composition d'équipe
 * 14 modules covering team composition, synergies, and different strategies for League of Legends
 */

import { createDiscipline } from '../utils';
import { module01TeamBalance } from './module-01-team-balance';
import { module02TeamSynergies } from './module-02-team-synergies';
import { module03WinCondition } from './module-03-win-condition';
import { module04EarlyLateComps } from './module-04-early-late-comps';
import { module05PokeSiegeComps } from './module-05-poke-siege-comps';
import { module06EngageTeamfightComps } from './module-06-engage-teamfight-comps';
import { module07SplitpushComps } from './module-07-splitpush-comps';
import { module08PickComps } from './module-08-pick-comps';
import { module09DraftPhase } from './module-09-draft-phase';
import { module10CounterPicks } from './module-10-counter-picks';
import { module11FlexPicks } from './module-11-flex-picks';
import { module12DraftAdaptation } from './module-12-draft-adaptation';
import { module13BanStrategy } from './module-13-ban-strategy';
import { module14SoloqVsTeamDraft } from './module-14-soloq-vs-team-draft';

export const discipline20Draft = createDiscipline(
  'Draft et composition d\'équipe',
  'draft',
  'Comprendre les compositions d\'équipe, les synergies et les différentes stratégies de draft',
  20,
  [
    module01TeamBalance,
    module02TeamSynergies,
    module03WinCondition,
    module04EarlyLateComps,
    module05PokeSiegeComps,
    module06EngageTeamfightComps,
    module07SplitpushComps,
    module08PickComps,
    module09DraftPhase,
    module10CounterPicks,
    module11FlexPicks,
    module12DraftAdaptation,
    module13BanStrategy,
    module14SoloqVsTeamDraft,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01TeamBalance,
  module02TeamSynergies,
  module03WinCondition,
  module04EarlyLateComps,
  module05PokeSiegeComps,
  module06EngageTeamfightComps,
  module07SplitpushComps,
  module08PickComps,
  module09DraftPhase,
  module10CounterPicks,
  module11FlexPicks,
  module12DraftAdaptation,
  module13BanStrategy,
  module14SoloqVsTeamDraft,
};
