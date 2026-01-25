/**
 * Discipline 09: Mécaniques avancées
 * 12 modules covering advanced mechanical skills
 */

import { createDiscipline } from '../utils';
import { module01Kiting } from './module-01-kiting';
import { module02AnimationCancel } from './module-02-animation-cancel';
import { module03SkillShots } from './module-03-skill-shots';
import { module04Dodging } from './module-04-dodging';
import { module05Combos } from './module-05-combos';
import { module06FlashCombos } from './module-06-flash-combos';
import { module07CursorControl } from './module-07-cursor-control';
import { module08CameraControl } from './module-08-camera-control';
import { module09QuickCast } from './module-09-quick-cast';
import { module10TargetSelection } from './module-10-target-selection';
import { module11MinimapAwareness } from './module-11-minimap-awareness';
import { module12ReactionTime } from './module-12-reaction-time';

export const discipline09Mechanics = createDiscipline(
  'Mécaniques avancées',
  'advanced-mechanics',
  'Kiting, combos, animation cancel, et autres techniques mécaniques essentielles',
  9,
  [
    module01Kiting,
    module02AnimationCancel,
    module03SkillShots,
    module04Dodging,
    module05Combos,
    module06FlashCombos,
    module07CursorControl,
    module08CameraControl,
    module09QuickCast,
    module10TargetSelection,
    module11MinimapAwareness,
    module12ReactionTime,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01Kiting,
  module02AnimationCancel,
  module03SkillShots,
  module04Dodging,
  module05Combos,
  module06FlashCombos,
  module07CursorControl,
  module08CameraControl,
  module09QuickCast,
  module10TargetSelection,
  module11MinimapAwareness,
  module12ReactionTime,
};
