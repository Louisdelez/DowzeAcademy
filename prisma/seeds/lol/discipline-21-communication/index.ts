/**
 * Discipline 21: Communication et travail d'équipe
 * 10 modules covering team communication, coordination, and positive attitude
 */

import { createDiscipline } from '../utils';
import { module01PingSystem } from './module-01-ping-system';
import { module02MinimalText } from './module-02-minimal-text';
import { module03ObjectiveShotcalling } from './module-03-objective-shotcalling';
import { module04TeamGamePlan } from './module-04-team-game-plan';
import { module05ActionSync } from './module-05-action-sync';
import { module06AdaptingToTeam } from './module-06-adapting-to-team';
import { module07ConflictManagement } from './module-07-conflict-management';
import { module08VoiceCommunication } from './module-08-voice-communication';
import { module09NoPingSpam } from './module-09-no-ping-spam';
import { module10TeamSpirit } from './module-10-team-spirit';

export const discipline21Communication = createDiscipline(
  'Communication et travail d\'équipe',
  'communication',
  'Maîtriser les outils de communication, coordonner les actions d\'équipe et maintenir une attitude positive pour optimiser la synergie collective',
  21,
  [
    module01PingSystem,
    module02MinimalText,
    module03ObjectiveShotcalling,
    module04TeamGamePlan,
    module05ActionSync,
    module06AdaptingToTeam,
    module07ConflictManagement,
    module08VoiceCommunication,
    module09NoPingSpam,
    module10TeamSpirit,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01PingSystem,
  module02MinimalText,
  module03ObjectiveShotcalling,
  module04TeamGamePlan,
  module05ActionSync,
  module06AdaptingToTeam,
  module07ConflictManagement,
  module08VoiceCommunication,
  module09NoPingSpam,
  module10TeamSpirit,
};
