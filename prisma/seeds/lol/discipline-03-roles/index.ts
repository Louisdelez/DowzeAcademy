/**
 * Discipline 03: Présentation des cinq rôles et positions
 * 5 modules covering the 5 roles in League of Legends
 */

import { createDiscipline } from '../utils';
import { module01TopLaner } from './module-01-top-laner';
import { module02Jungler } from './module-02-jungler';
import { module03MidLaner } from './module-03-mid-laner';
import { module04ADC } from './module-04-adc';
import { module05Support } from './module-05-support';

export const discipline03Roles = createDiscipline(
  'Présentation des cinq rôles et positions',
  'roles-positions',
  "Les 5 rôles de League of Legends : Top, Jungle, Mid, ADC et Support",
  3,
  [
    module01TopLaner,
    module02Jungler,
    module03MidLaner,
    module04ADC,
    module05Support,
  ]
);

// Re-export individual modules for potential direct access
export {
  module01TopLaner,
  module02Jungler,
  module03MidLaner,
  module04ADC,
  module05Support,
};
