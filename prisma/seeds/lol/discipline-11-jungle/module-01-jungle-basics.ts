import { createModule, createQuestion } from '../utils';

export const module01JungleBasics = createModule(
  'Bases de la Jungle',
  'jungle-basics',
  'Introduction au rôle de jungler',
  1,
  // Theory Content
  `## Introduction à la Jungle

Le **jungler** est un rôle unique qui ne farm pas en lane mais dans la **jungle**, zone entre les lanes remplie de monstres neutres.

## Ce qui rend la jungle unique

Caractéristiques du rôle :
- Pas de lane **fixe**
- Farm les **camps** de monstres
- Responsable des **ganks** et objectifs
- Utilise le sort **Smite** obligatoirement

## Smite

Sort d'invocateur essentiel :
- **Obligatoire** pour jouer jungler
- Inflige des dégâts **élevés** aux monstres
- Permet de **secure** Dragon et Baron
- Interagit avec l'**objet de jungle**

## L'objet de jungle

Évolution automatique :
- **Gustwalker Hatchling** → Pets qui évoluent
- Se transforment en donnant des **buffs**
- S'achète automatiquement avec Smite
- Génère des **traites** pour le sustain

## Responsabilités du jungler

Vos missions :
- **Farm** efficacement les camps
- **Ganker** les lanes pour aider vos alliés
- Contrôler les **objectifs** (Drake, Herald, Baron)
- Mettre de la **pression** sur la carte
- **Tracker** le jungler ennemi

## Difficulté du rôle

Ce qui rend la jungle complexe :
- Beaucoup de **décisions** à prendre
- Impact sur **toute la carte**
- Blâmé facilement par les alliés
- Demande une excellente **map awareness**`,

  // Practice Instructions
  `## Objectif

Comprendre les bases du rôle de jungler.

## Étapes

1. Lancez une partie d'entraînement en tant que jungler
2. Observez les différents camps et leurs positions
3. Utilisez Smite sur les camps
4. Observez votre objet de jungle évoluer
5. Essayez de ganker une lane

## Critère de réussite

Vous pouvez clear la jungle de base et comprendre le fonctionnement de Smite et l'objet de jungle.`,

  // Questions
  [
    createQuestion(
      "Quel sort d'invocateur est obligatoire pour jungler ?",
      "Teleport",
      "Smite",
      "Ignite",
      "Heal",
      'b',
      "Smite est obligatoire pour jungler."
    ),
    createQuestion(
      "Où le jungler farm-t-il principalement ?",
      "En lane",
      "Dans la jungle, entre les lanes",
      "En base",
      "Dans la rivière uniquement",
      'b',
      "Le jungler farm les camps de monstres dans la jungle."
    ),
    createQuestion(
      "Quelles sont les responsabilités du jungler ?",
      "Seulement farmer",
      "Farm, ganks, objectifs et pression map",
      "Seulement les objectifs",
      "Seulement les ganks",
      'b',
      "Le jungler a de nombreuses responsabilités."
    ),
    createQuestion(
      "Smite sert à quoi ?",
      "Tuer les champions",
      "Infliger des dégâts élevés aux monstres",
      "Se soigner",
      "Se téléporter",
      'b',
      "Smite fait de gros dégâts aux monstres neutres."
    ),
    createQuestion(
      "L'objet de jungle évolue comment ?",
      "Avec de l'or",
      "Automatiquement en tuant des camps",
      "En achetant des composants",
      "Il n'évolue pas",
      'b',
      "L'objet de jungle évolue automatiquement avec les camps."
    ),
    createQuestion(
      "Pourquoi la jungle est un rôle difficile ?",
      "C'est facile",
      "Beaucoup de décisions et impact sur toute la carte",
      "Pas de farm",
      "Seulement les objectifs",
      'b',
      "La jungle demande beaucoup de décision-making et d'awareness."
    ),
    createQuestion(
      "Qu'est-ce qu'un gank ?",
      "Tuer un monstre",
      "Venir aider une lane pour tuer l'ennemi",
      "Farm la jungle",
      "Prendre un objectif",
      'b',
      "Un gank est une action de venir surprendre un ennemi en lane."
    ),
    createQuestion(
      "Le jungler est responsable de quels objectifs ?",
      "Aucun",
      "Dragon, Herald, Baron",
      "Seulement Baron",
      "Seulement les tourelles",
      'b',
      "Le jungler est responsable des objectifs majeurs avec Smite."
    ),
    createQuestion(
      "Tracker le jungler ennemi signifie quoi ?",
      "Le suivre physiquement",
      "Savoir où il est sur la carte",
      "Lui parler",
      "Le report",
      'b',
      "Tracker = garder une idée de la position du jungler ennemi."
    ),
    createQuestion(
      "Le jungler a-t-il une lane attitrée ?",
      "Oui, la mid",
      "Non, il se déplace sur toute la carte",
      "Oui, le bot",
      "Oui, le top",
      'b',
      "Le jungler n'a pas de lane fixe, il parcourt la carte."
    ),
  ]
);
