import { createModule, createQuestion } from '../utils';

export const module11TopLaneSpecificity = createModule(
  'Spécificité de la Lane Top',
  'top-lane-specificity',
  'Comprendre l\'isolement et la longueur de la voie du haut',
  11,
  // Theory Content
  `## La Lane Top : Une Île

Le top lane est souvent appelé **"l'île"** car c'est la lane la plus **isolée** de Summoner's Rift.

## Longueur de la Lane

Caractéristiques physiques :
- Lane **très longue** entre les deux tourelles
- Beaucoup de **distance** à parcourir
- **Difficile** de s'échapper d'un gank
- Les trades **longs** sont favorisés

## Isolement Géographique

Loin de tout :
- **Dragon** est de l'autre côté de la carte
- Le **jungler** vient moins souvent
- Le **mid** ne peut pas roam facilement
- Vous êtes **seul** la plupart du temps

## Importance de la Domination Individuelle

Ce que ça implique :
- Gagner le **1v1** est crucial
- Les erreurs sont très **punissantes**
- Le **snowball** peut être énorme
- Pas d'aide = autonomie nécessaire

## Avantages de l'Isolement

Points positifs :
- **Moins de ganks** que mid ou bot
- Temps pour **scale** tranquillement
- **Herald** est proche pour vous
- Potentiel de **split-push** naturel

## Inconvénients de l'Isolement

Points négatifs :
- **Pas d'aide** si vous perdez
- Un mauvais matchup = **enfer**
- **Moins d'impact** sur les premiers dragons
- Vous devez vous **débrouiller** seul`,

  // Practice Instructions
  `## Objectif

Comprendre et exploiter les spécificités uniques de la lane top.

## Étapes

1. Observez la longueur de la lane et les distances en début de partie
2. Notez les moments où vous êtes ganké vs les autres lanes
3. Concentrez-vous sur gagner vos 1v1 sans compter sur de l'aide
4. Utilisez l'isolement pour farm tranquillement si matchup difficile
5. Prenez conscience de votre distance par rapport au Dragon

## Critère de réussite

Vous exploitez l'isolement du top au lieu de le subir, en gagnant vos 1v1 ou en farmant en sécurité.`,

  // Questions
  [
    createQuestion(
      "Pourquoi le top lane est-il appelé 'l'île' ?",
      "Il y a de l'eau",
      "C'est la lane la plus isolée",
      "Il y a beaucoup de joueurs",
      "C'est la lane la plus courte",
      'b',
      "Le top est isolé géographiquement du reste de la carte."
    ),
    createQuestion(
      "La lane top est caractérisée par sa ?",
      "Courte distance",
      "Longueur importante",
      "Proximité au Dragon",
      "Présence de 2v2",
      'b',
      "Le top lane est une voie très longue entre les tourelles."
    ),
    createQuestion(
      "Quel objectif est loin du top lane ?",
      "Rift Herald",
      "Dragon",
      "Tour top",
      "Gromp",
      'b',
      "Le Dragon spawn côté bot, loin du top laner."
    ),
    createQuestion(
      "L'isolement du top signifie que ?",
      "Vous avez toujours de l'aide",
      "Vous devez être autonome et gagner seul",
      "Le jungler vient souvent",
      "Mid roam beaucoup",
      'b',
      "L'isolement force l'autonomie et les 1v1."
    ),
    createQuestion(
      "Quel est un avantage de l'isolement ?",
      "Plus de ganks",
      "Moins de ganks que les autres lanes",
      "Toujours 2v2",
      "Plus proche du Dragon",
      'b',
      "Le top reçoit généralement moins de ganks que mid ou bot."
    ),
    createQuestion(
      "Pourquoi les erreurs sont punissantes en top ?",
      "Le jungler aide toujours",
      "La lane est longue et il n'y a pas d'aide",
      "Les champions sont faibles",
      "Les tourelles sont fragiles",
      'b',
      "La longueur de lane + isolement = erreurs très punies."
    ),
    createQuestion(
      "Le Herald est proche du top, c'est ?",
      "Un inconvénient",
      "Un avantage",
      "Sans importance",
      "Faux",
      'b',
      "La proximité au Herald est un avantage pour le top laner."
    ),
    createQuestion(
      "Un mauvais matchup en top est difficile car ?",
      "Vous pouvez demander des swaps",
      "Pas d'aide et lane longue = enfer",
      "C'est facile à jouer safe",
      "Le jungler vous aide toujours",
      'b',
      "Sans aide et avec une lane longue, un mauvais matchup est dur."
    ),
    createQuestion(
      "La domination individuelle en top est importante car ?",
      "Ça ne compte pas",
      "Gagner le 1v1 détermine souvent la lane",
      "C'est un jeu d'équipe uniquement",
      "Le jungler décide tout",
      'b',
      "En étant isolé, votre capacité à gagner le 1v1 est cruciale."
    ),
    createQuestion(
      "Le potentiel de split-push est naturel en top car ?",
      "Les champions sont faibles",
      "Vous êtes déjà habitué à jouer seul et isolé",
      "Il n'y a pas de tourelles",
      "Le split est interdit",
      'b',
      "L'habitude de jouer seul se traduit bien en split-push."
    ),
  ]
);
