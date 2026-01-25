import { createModule, createQuestion } from '../utils';

export const module13LateGameJungle = createModule(
  'Late game jungle',
  'late-game-jungle',
  'Baron, Elder et fin de partie',
  13,
  // Theory Content
  `## Le Late Game en Jungle

Le **late game** (25+ minutes) est la phase finale où **Baron** et **Elder Dragon** peuvent décider de la partie.

## Baron Nashor

L'objectif le plus important :
- Spawn à **20:00**, respawn après **6 minutes**
- Donne un **buff puissant** à toute l'équipe
- Les sbires deviennent **plus forts**
- Permet de **push** et terminer

## Elder Dragon

Le dragon de fin de partie :
- Spawn après le **Dragon Soul** (si 4 dragons pris)
- Donne un **execute** sur les cibles low HP
- Durée limitée mais **extrêmement fort**
- Peut retourner une partie perdue

## Votre rôle en late

Ce que vous devez faire :
- **Sécuriser** Baron et Elder avec Smite
- Être présent à **tous les fights**
- **Ne pas mourir** seul (respawn long)
- Utiliser vos **buffs** pour engager

## Erreurs fatales

Ce qu'il ne faut pas faire :
- **Farm** seul pendant un objectif
- **Mourir** avant un teamfight
- **Perdre** un Smite fight sur Baron/Elder
- Ne pas **participer** aux plays

## Décisions late game

Questions critiques :
- Peut-on **forcer** Baron ?
- A-t-on l'avantage en **teamfight** ?
- Faut-il **défendre** ou attaquer ?
- Où sont les **ennemis** ?`,

  // Practice Instructions
  `## Objectif

Maîtriser le late game et les objectifs critiques.

## Étapes

1. Soyez toujours présent pour Baron et Elder
2. Gardez Smite pour les objectifs
3. Participez à tous les teamfights importants
4. Ne mourez pas seul avant un objectif
5. Utilisez Baron buff pour push et terminer

## Critère de réussite

Vous sécurisez un Baron ou Elder et convertissez en victoire.`,

  // Questions
  [
    createQuestion(
      "Quand commence le late game ?",
      "10 minutes",
      "25+ minutes",
      "5 minutes",
      "40 minutes",
      'b',
      "Le late game commence généralement après 25 minutes."
    ),
    createQuestion(
      "Baron Nashor spawn à quelle minute ?",
      "14:00",
      "20:00",
      "25:00",
      "30:00",
      'b',
      "Baron spawn à 20:00."
    ),
    createQuestion(
      "Que donne le buff Baron ?",
      "De l'or",
      "Sbires renforcés et stats",
      "Un skin",
      "Rien",
      'b',
      "Baron buff renforce les sbires et donne des stats."
    ),
    createQuestion(
      "Quand spawn Elder Dragon ?",
      "À 20:00",
      "Après qu'une équipe ait le Dragon Soul",
      "À 30:00",
      "Dès le début",
      'b',
      "Elder spawn après qu'une équipe obtient le Dragon Soul."
    ),
    createQuestion(
      "Que donne Elder Dragon ?",
      "Un buff permanent",
      "Un execute sur les cibles low HP",
      "De l'or seulement",
      "Rien de spécial",
      'b',
      "Elder donne un execute puissant mais temporaire."
    ),
    createQuestion(
      "Pourquoi ne pas mourir seul en late ?",
      "Ça n'a pas d'importance",
      "Le respawn est long et l'équipe perd un objectif",
      "Pour le KDA",
      "C'est interdit",
      'b',
      "Mourir en late = long respawn = perte d'objectif."
    ),
    createQuestion(
      "Le rôle du jungler en late est ?",
      "Farm la jungle",
      "Sécuriser Baron/Elder et être présent aux fights",
      "Split push",
      "Rester en base",
      'b',
      "En late, le jungler doit secure les objectifs et fight."
    ),
    createQuestion(
      "Que faire avec le buff Baron ?",
      "Le garder",
      "Push et essayer de terminer",
      "Attendre",
      "Farm la jungle",
      'b',
      "Utilisez Baron buff pour push et prendre des structures."
    ),
    createQuestion(
      "Baron respawn après combien de temps ?",
      "5 minutes",
      "6 minutes",
      "10 minutes",
      "Il ne respawn pas",
      'b',
      "Baron respawn 6 minutes après sa mort."
    ),
    createQuestion(
      "Une erreur fatale en late est ?",
      "Prendre Baron",
      "Mourir seul avant un objectif",
      "Grouper avec l'équipe",
      "Warder",
      'b',
      "Mourir avant un objectif peut coûter la partie."
    ),
  ]
);
