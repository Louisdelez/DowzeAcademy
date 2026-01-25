/**
 * Discipline 24: Coaching et entraînement
 * 9 modules covering coaching, team training, and improvement methods for League of Legends
 */

import { createDiscipline } from '../utils';
import { module01CoachBenefits } from './module-01-coach-benefits';
import { module02FindingCoach } from './module-02-finding-coach';
import { module03UsingCoaching } from './module-03-using-coaching';
import { module04TeamScrims } from './module-04-team-scrims';
import { module05ProAnalysis } from './module-05-pro-analysis';
import { module06TrainingSchedule } from './module-06-training-schedule';
import { module07ThirdPartyTools } from './module-07-third-party-tools';
import { module08AmateurTeams } from './module-08-amateur-teams';
import { module09Motivation } from './module-09-motivation';

export const discipline24Coaching = createDiscipline(
  'Coaching et entraînement',
  'coaching',
  "Méthodes de coaching, entraînement structuré, outils d'analyse et maintien de la motivation pour une progression optimale",
  24,
  [
    module01CoachBenefits,
    module02FindingCoach,
    module03UsingCoaching,
    module04TeamScrims,
    module05ProAnalysis,
    module06TrainingSchedule,
    module07ThirdPartyTools,
    module08AmateurTeams,
    module09Motivation,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01CoachBenefits,
  module02FindingCoach,
  module03UsingCoaching,
  module04TeamScrims,
  module05ProAnalysis,
  module06TrainingSchedule,
  module07ThirdPartyTools,
  module08AmateurTeams,
  module09Motivation,
};
