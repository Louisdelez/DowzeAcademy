/**
 * League of Legends Training - Main Export
 * Aggregates all disciplines for the seed process
 */

export * from './utils';

// Discipline exports
export { discipline01Fundamentals } from './discipline-01-fundamentals';
export { discipline02Map } from './discipline-02-map';
export { discipline03Roles } from './discipline-03-roles';
export { discipline04Champions } from './discipline-04-champions';
export { discipline05SummonerSpells } from './discipline-05-summoner-spells';
export { discipline06Runes } from './discipline-06-runes';
export { discipline07Items } from './discipline-07-items';
export { discipline08Laning } from './discipline-08-laning';
export { discipline09Mechanics } from './discipline-09-mechanics';
export { discipline10TopLane } from './discipline-10-top-lane';
export { discipline11Jungle } from './discipline-11-jungle';
export { discipline12MidLane } from './discipline-12-mid-lane';
export { discipline13Adc } from './discipline-13-adc';
export { discipline14Support } from './discipline-14-support';
export { discipline15Midgame } from './discipline-15-midgame';
export { discipline16Lategame } from './discipline-16-lategame';
export { discipline17Teamfights } from './discipline-17-teamfights';
export { discipline18Vision } from './discipline-18-vision';
export { discipline19Objectives } from './discipline-19-objectives';
export { discipline20Draft } from './discipline-20-draft';
export { discipline21Communication } from './discipline-21-communication';
export { discipline22Mental } from './discipline-22-mental';
export { discipline23Improvement } from './discipline-23-improvement';
export { discipline24Coaching } from './discipline-24-coaching';
export { discipline25Ranked } from './discipline-25-ranked';
export { discipline26Tools } from './discipline-26-tools';

// Import disciplines for the combined array
import { discipline01Fundamentals } from './discipline-01-fundamentals';
import { discipline02Map } from './discipline-02-map';
import { discipline03Roles } from './discipline-03-roles';
import { discipline04Champions } from './discipline-04-champions';
import { discipline05SummonerSpells } from './discipline-05-summoner-spells';
import { discipline06Runes } from './discipline-06-runes';
import { discipline07Items } from './discipline-07-items';
import { discipline08Laning } from './discipline-08-laning';
import { discipline09Mechanics } from './discipline-09-mechanics';
import { discipline10TopLane } from './discipline-10-top-lane';
import { discipline11Jungle } from './discipline-11-jungle';
import { discipline12MidLane } from './discipline-12-mid-lane';
import { discipline13Adc } from './discipline-13-adc';
import { discipline14Support } from './discipline-14-support';
import { discipline15Midgame } from './discipline-15-midgame';
import { discipline16Lategame } from './discipline-16-lategame';
import { discipline17Teamfights } from './discipline-17-teamfights';
import { discipline18Vision } from './discipline-18-vision';
import { discipline19Objectives } from './discipline-19-objectives';
import { discipline20Draft } from './discipline-20-draft';
import { discipline21Communication } from './discipline-21-communication';
import { discipline22Mental } from './discipline-22-mental';
import { discipline23Improvement } from './discipline-23-improvement';
import { discipline24Coaching } from './discipline-24-coaching';
import { discipline25Ranked } from './discipline-25-ranked';
import { discipline26Tools } from './discipline-26-tools';
import type { DisciplineData } from './utils';

// All disciplines in order
export const allDisciplines: DisciplineData[] = [
  discipline01Fundamentals,
  discipline02Map,
  discipline03Roles,
  discipline04Champions,
  discipline05SummonerSpells,
  discipline06Runes,
  discipline07Items,
  discipline08Laning,
  discipline09Mechanics,
  discipline10TopLane,
  discipline11Jungle,
  discipline12MidLane,
  discipline13Adc,
  discipline14Support,
  discipline15Midgame,
  discipline16Lategame,
  discipline17Teamfights,
  discipline18Vision,
  discipline19Objectives,
  discipline20Draft,
  discipline21Communication,
  discipline22Mental,
  discipline23Improvement,
  discipline24Coaching,
  discipline25Ranked,
  discipline26Tools,
];
