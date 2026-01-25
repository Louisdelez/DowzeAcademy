/**
 * Discipline 07: Les objets et l'équipement
 * 19 modules covering the item system
 */

import { createDiscipline } from '../utils';
import { module01ItemSystem } from './module-01-item-system';
import { module02StartingItems } from './module-02-starting-items';
import { module03SupportItems } from './module-03-support-items';
import { module04Potions } from './module-04-potions';
import { module05VisionItems } from './module-05-vision-items';
import { module06JungleItem } from './module-06-jungle-item';
import { module07Boots } from './module-07-boots';
import { module08ADItems } from './module-08-ad-items';
import { module09Lethality } from './module-09-lethality';
import { module10APItems } from './module-10-ap-items';
import { module11MagicPen } from './module-11-magic-pen';
import { module12ArmorItems } from './module-12-armor-items';
import { module13MRItems } from './module-13-mr-items';
import { module14Lifesteal } from './module-14-lifesteal';
import { module15AntiHeal } from './module-15-anti-heal';
import { module16SupportUtility } from './module-16-support-utility';
import { module17ActiveItems } from './module-17-active-items';
import { module18Elixirs } from './module-18-elixirs';
import { module19ItemChanges2024 } from './module-19-item-changes-2024';

export const discipline07Items = createDiscipline(
  "Les objets et l'équipement",
  'items-equipment',
  "Système d'objets complet : départ, offensifs, défensifs, utilitaires et consommables",
  7,
  [
    module01ItemSystem,
    module02StartingItems,
    module03SupportItems,
    module04Potions,
    module05VisionItems,
    module06JungleItem,
    module07Boots,
    module08ADItems,
    module09Lethality,
    module10APItems,
    module11MagicPen,
    module12ArmorItems,
    module13MRItems,
    module14Lifesteal,
    module15AntiHeal,
    module16SupportUtility,
    module17ActiveItems,
    module18Elixirs,
    module19ItemChanges2024,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01ItemSystem,
  module02StartingItems,
  module03SupportItems,
  module04Potions,
  module05VisionItems,
  module06JungleItem,
  module07Boots,
  module08ADItems,
  module09Lethality,
  module10APItems,
  module11MagicPen,
  module12ArmorItems,
  module13MRItems,
  module14Lifesteal,
  module15AntiHeal,
  module16SupportUtility,
  module17ActiveItems,
  module18Elixirs,
  module19ItemChanges2024,
};
