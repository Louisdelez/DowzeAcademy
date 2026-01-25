/**
 * Discipline 02: La carte de la Faille de l'invocateur
 * 9 modules covering Summoner's Rift map knowledge
 */

import { createDiscipline } from '../utils';
import { module01ThreeLanes } from './module-01-three-lanes';
import { module02TurretLayout } from './module-02-turret-layout';
import { module03Jungle } from './module-03-jungle';
import { module04River } from './module-04-river';
import { module05FogOfWar } from './module-05-fog-of-war';
import { module06Bushes } from './module-06-bushes';
import { module07Minions } from './module-07-minions';
import { module08BaseFountain } from './module-08-base-fountain';
import { module09JungleCamps } from './module-09-jungle-camps';

export const discipline02Map = createDiscipline(
  "La carte de la Faille de l'invocateur",
  'summoners-rift-map',
  "Connaissance complète de la carte : lanes, jungle, rivière, structures et vision",
  2,
  [
    module01ThreeLanes,
    module02TurretLayout,
    module03Jungle,
    module04River,
    module05FogOfWar,
    module06Bushes,
    module07Minions,
    module08BaseFountain,
    module09JungleCamps,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01ThreeLanes,
  module02TurretLayout,
  module03Jungle,
  module04River,
  module05FogOfWar,
  module06Bushes,
  module07Minions,
  module08BaseFountain,
  module09JungleCamps,
};
