/**
 * Discipline 22: Mental du joueur
 * 11 modules covering player mental health, mindset, and psychological aspects of LoL
 */

import { createDiscipline } from '../utils';
import { module01GrowthMindset } from './module-01-growth-mindset';
import { module02HandlingDefeat } from './module-02-handling-defeat';
import { module03AvoidingTilt } from './module-03-avoiding-tilt';
import { module04NoFlame } from './module-04-no-flame';
import { module05StayingFocused } from './module-05-staying-focused';
import { module06SelfFocus } from './module-06-self-focus';
import { module07RankedPressure } from './module-07-ranked-pressure';
import { module08PreGameRoutine } from './module-08-pre-game-routine';
import { module09FatigueManagement } from './module-09-fatigue-management';
import { module10ConfidenceVsArrogance } from './module-10-confidence-vs-arrogance';
import { module11CompetitionMental } from './module-11-competition-mental';

export const discipline22Mental = createDiscipline(
  'Mental du joueur',
  'mental',
  "Developper un mental solide pour performer : gestion des emotions, du tilt, de la pression et maintien d'une attitude positive",
  22,
  [
    module01GrowthMindset,
    module02HandlingDefeat,
    module03AvoidingTilt,
    module04NoFlame,
    module05StayingFocused,
    module06SelfFocus,
    module07RankedPressure,
    module08PreGameRoutine,
    module09FatigueManagement,
    module10ConfidenceVsArrogance,
    module11CompetitionMental,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01GrowthMindset,
  module02HandlingDefeat,
  module03AvoidingTilt,
  module04NoFlame,
  module05StayingFocused,
  module06SelfFocus,
  module07RankedPressure,
  module08PreGameRoutine,
  module09FatigueManagement,
  module10ConfidenceVsArrogance,
  module11CompetitionMental,
};
