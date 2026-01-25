/**
 * Discipline 19: Objectifs neutres majeurs
 * 11 modules covering major neutral objectives in League of Legends
 */

import { createDiscipline } from '../utils';
import { module01ElementalDragons } from './module-01-elemental-dragons';
import { module02DragonSoul } from './module-02-dragon-soul';
import { module03ElderDragon } from './module-03-elder-dragon';
import { module04BaronNashor } from './module-04-baron-nashor';
import { module05RiftHerald } from './module-05-rift-herald';
import { module06RedBuff } from './module-06-red-buff';
import { module07BlueBuff } from './module-07-blue-buff';
import { module08JunglePlants } from './module-08-jungle-plants';
import { module09ScuttleCrab } from './module-09-scuttle-crab';
import { module10ObjectiveTrading } from './module-10-objective-trading';
import { module11ObjectivePriority } from './module-11-objective-priority';

export const discipline19Objectives = createDiscipline(
  'Objectifs neutres majeurs',
  'objectives',
  "Maîtrise des objectifs neutres de la carte : dragons, Baron, Héraut, buffs et plantes de la jungle",
  19,
  [
    module01ElementalDragons,
    module02DragonSoul,
    module03ElderDragon,
    module04BaronNashor,
    module05RiftHerald,
    module06RedBuff,
    module07BlueBuff,
    module08JunglePlants,
    module09ScuttleCrab,
    module10ObjectiveTrading,
    module11ObjectivePriority,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01ElementalDragons,
  module02DragonSoul,
  module03ElderDragon,
  module04BaronNashor,
  module05RiftHerald,
  module06RedBuff,
  module07BlueBuff,
  module08JunglePlants,
  module09ScuttleCrab,
  module10ObjectiveTrading,
  module11ObjectivePriority,
};
