/**
 * Discipline 23: Analyse personnelle et progression
 * 11 modules covering personal analysis and improvement in League of Legends
 */

import { createDiscipline } from '../utils';
import { module01ReplayReview } from './module-01-replay-review';
import { module02AnalysisTools } from './module-02-analysis-tools';
import { module03KeyStats } from './module-03-key-stats';
import { module04SettingGoals } from './module-04-setting-goals';
import { module05RankingSystem } from './module-05-ranking-system';
import { module06StudyingPros } from './module-06-studying-pros';
import { module07ConstructiveSelfCriticism } from './module-07-constructive-self-criticism';
import { module08ChampionPool } from './module-08-champion-pool';
import { module09OneTrickVsVersatile } from './module-09-one-trick-vs-versatile';
import { module10BreakingPlateau } from './module-10-breaking-plateau';
import { module11StayingConsistent } from './module-11-staying-consistent';

export const discipline23Improvement = createDiscipline(
  'Analyse personnelle et progression',
  'improvement',
  "Outils et méthodes pour analyser ses performances, identifier ses faiblesses et progresser efficacement dans League of Legends",
  23,
  [
    module01ReplayReview,
    module02AnalysisTools,
    module03KeyStats,
    module04SettingGoals,
    module05RankingSystem,
    module06StudyingPros,
    module07ConstructiveSelfCriticism,
    module08ChampionPool,
    module09OneTrickVsVersatile,
    module10BreakingPlateau,
    module11StayingConsistent,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01ReplayReview,
  module02AnalysisTools,
  module03KeyStats,
  module04SettingGoals,
  module05RankingSystem,
  module06StudyingPros,
  module07ConstructiveSelfCriticism,
  module08ChampionPool,
  module09OneTrickVsVersatile,
  module10BreakingPlateau,
  module11StayingConsistent,
};
