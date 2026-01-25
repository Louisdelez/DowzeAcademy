/**
 * Discipline 26: Outils externes et méta
 * 11 modules covering external tools, resources, and meta-gaming aspects
 */

import { createDiscipline } from '../utils';
import { module01StatSites } from './module-01-stat-sites';
import { module02AdvancedAnalysisSites } from './module-02-advanced-analysis-sites';
import { module03PatchNotes } from './module-03-patch-notes';
import { module04EducationalContent } from './module-04-educational-content';
import { module05CommunityGuides } from './module-05-community-guides';
import { module06DiscordForums } from './module-06-discord-forums';
import { module07PracticeTool } from './module-07-practice-tool';
import { module08HardwareSetup } from './module-08-hardware-setup';
import { module09PlayerHealth } from './module-09-player-health';
import { module10AlternativeModes } from './module-10-alternative-modes';
import { module11OfficialResources } from './module-11-official-resources';

export const discipline26Tools = createDiscipline(
  'Outils externes et méta',
  'tools',
  "Ressources externes, optimisation matérielle, hygiène de vie et outils pour maximiser votre progression",
  26,
  [
    module01StatSites,
    module02AdvancedAnalysisSites,
    module03PatchNotes,
    module04EducationalContent,
    module05CommunityGuides,
    module06DiscordForums,
    module07PracticeTool,
    module08HardwareSetup,
    module09PlayerHealth,
    module10AlternativeModes,
    module11OfficialResources,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01StatSites,
  module02AdvancedAnalysisSites,
  module03PatchNotes,
  module04EducationalContent,
  module05CommunityGuides,
  module06DiscordForums,
  module07PracticeTool,
  module08HardwareSetup,
  module09PlayerHealth,
  module10AlternativeModes,
  module11OfficialResources,
};
