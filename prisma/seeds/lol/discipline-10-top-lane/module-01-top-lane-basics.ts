import { createModule, createQuestion } from '../utils';

export const module01TopLaneBasics = createModule(
  'Bases du Top Lane',
  'top-lane-basics',
  'Spécificités de la voie du haut',
  1,
  // Theory Content
  `## Introduction au Top Lane

Le **Top Lane** est la voie du haut sur Summoner's Rift. C'est une lane **isolée** où les duels 1v1 sont fréquents.

## Caractéristiques du Top

Ce qui rend top unique :
- Lane **longue** et isolée
- Peu d'**attention** du reste de l'équipe
- **1v1** intensifs et longs
- Impact sur le **Herald** et les objectifs nord

## Types de champions top

Catégories principales :
- **Bruisers/Fighters** : Darius, Garen, Mordekaiser
- **Tanks** : Malphite, Ornn, Sion
- **Split-pushers** : Fiora, Jax, Tryndamere
- **Ranged bullies** : Quinn, Vayne, Teemo

## Sorts d'invocateur recommandés

Options courantes :
- **Flash + Teleport** : Standard, permet de rejoindre les teamfights
- **Flash + Ignite** : Agressif, dominance en lane
- **Flash + Ghost** : Pour champions qui chargent (Darius, Garen)

## L'isolement du Top

Ce que ça implique :
- Moins de **ganks** (positif et négatif)
- Doit être **autonome**
- Les erreurs sont très **punissantes**
- Potentiel de **snowball** important

## Objectif du Top Laner

Votre mission :
- Gagner ou survivre la **lane**
- Prendre le **Herald** avec le jungler
- **Split-push** ou **teamfight** selon le champion
- Être utile en **late game**`,

  // Practice Instructions
  `## Objectif

Comprendre les spécificités du rôle de Top Laner.

## Étapes

1. Jouez quelques parties en Top Lane
2. Observez la longueur de la lane et l'isolement
3. Pratiquez le Teleport pour aider les autres lanes
4. Communiquez avec votre jungler pour le Herald
5. Notez les différences avec les autres lanes

## Critère de réussite

Vous comprenez l'isolement du top et utilisez Teleport pour impacter la carte.`,

  // Questions
  [
    createQuestion(
      "Quelle est la caractéristique principale du Top Lane ?",
      "Beaucoup de ganks",
      "Lane isolée avec des 1v1 fréquents",
      "Toujours 2v2",
      "Très courte",
      'b',
      "Le Top Lane est une lane longue et isolée propice aux 1v1."
    ),
    createQuestion(
      "Quels sorts sont standard pour un top laner ?",
      "Smite + Flash",
      "Flash + Teleport",
      "Heal + Flash",
      "Barrier + Flash",
      'b',
      "Flash + Teleport est le setup standard pour top lane."
    ),
    createQuestion(
      "Quel type de champion est Darius ?",
      "Tank pur",
      "Bruiser/Fighter",
      "Mage",
      "Support",
      'b',
      "Darius est un bruiser/fighter typique du top lane."
    ),
    createQuestion(
      "Quel objectif est proche du Top Lane ?",
      "Dragon",
      "Rift Herald",
      "Baron (early)",
      "Aucun",
      'b',
      "Le Rift Herald spawn côté top lane."
    ),
    createQuestion(
      "Un split-pusher fait quoi principalement ?",
      "Toujours grouper",
      "Pousser les lanes seul pour créer de la pression",
      "Rester en base",
      "Jungler",
      'b',
      "Les split-pushers créent de la pression en poussant seul."
    ),
    createQuestion(
      "Pourquoi prendre Ignite au top ?",
      "Pour fuir",
      "Pour dominer la lane et kill",
      "Pour le sustain",
      "Pour le mana",
      'b',
      "Ignite augmente le potentiel de kill en 1v1."
    ),
    createQuestion(
      "L'isolement du top est bon ou mauvais ?",
      "Toujours bon",
      "Les deux : moins de ganks mais pas d'aide",
      "Toujours mauvais",
      "Pas d'effet",
      'b',
      "L'isolement a des avantages (moins ganké) et inconvénients (pas d'aide)."
    ),
    createQuestion(
      "Malphite est quel type de champion top ?",
      "Assassin",
      "Tank",
      "ADC",
      "Support",
      'b',
      "Malphite est un tank classique du top lane."
    ),
    createQuestion(
      "Teleport sert à quoi pour un top laner ?",
      "Rien",
      "Rejoindre les teamfights et aider ailleurs",
      "Farm plus vite",
      "Avoir plus de dégâts",
      'b',
      "TP permet de rejoindre des combats ou objectifs ailleurs."
    ),
    createQuestion(
      "Teemo est considéré comme quoi au top ?",
      "Tank",
      "Ranged bully",
      "Support",
      "Jungler",
      'b',
      "Teemo est un ranged bully qui harcèle les mêlée."
    ),
  ]
);
