/**
 * Discipline 05: Les sorts d'invocateur
 * 5 modules covering summoner spells
 */

import { createDiscipline } from '../utils';
import { module01Flash } from './module-01-flash';
import { module02Teleport } from './module-02-teleport';
import { module03Smite } from './module-03-smite';
import { module04DefensiveSpells } from './module-04-defensive-spells';
import { module05OffensiveUtility } from './module-05-offensive-utility';

export const discipline05SummonerSpells = createDiscipline(
  "Les sorts d'invocateur",
  'summoner-spells',
  "Flash, Téléportation, Smite et tous les autres sorts d'invocateur",
  5,
  [
    module01Flash,
    module02Teleport,
    module03Smite,
    module04DefensiveSpells,
    module05OffensiveUtility,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01Flash,
  module02Teleport,
  module03Smite,
  module04DefensiveSpells,
  module05OffensiveUtility,
};
