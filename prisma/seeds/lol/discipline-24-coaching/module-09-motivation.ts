import { createModule, createQuestion } from '../utils';

export const module09Motivation = createModule(
  'Maintien de la motivation',
  'motivation',
  'Célébrer les améliorations et maintenir la motivation sur le long terme',
  9,
  // Theory Content (5+ slides)
  `## La progression n'est pas linéaire

Beaucoup de joueurs abandonnent parce qu'ils attendent une progression constante. En réalité, **la progression vient par paliers** : des périodes de plateau suivies de bonds en avant. Comprendre ce pattern aide à rester motivé pendant les phases de stagnation apparente.

## Célébrer les petites victoires

Ne mesurez pas votre progression uniquement au LP. Célébrez les **petites victoires** : un CS/min amélioré, moins de morts par partie, de meilleurs timings de ward. Ces micro-améliorations s'accumulent et mènent aux gains de rang sur le long terme.

## Fixer des objectifs SMART

Des objectifs vagues comme "devenir meilleur" démotivent. Utilisez des **objectifs SMART** : Spécifiques, Mesurables, Atteignables, Réalistes, Temporels. Par exemple : "Atteindre 7 CS/min de moyenne sur les 20 prochaines parties" est un objectif SMART.

## Gérer les périodes de perte

Les losing streaks font partie du jeu. Quand elles arrivent : **arrêtez de jouer** ranked pour la journée, analysez si le problème est technique ou mental, **prenez du recul**. Une défaite n'efface pas vos acquis, c'est juste une fluctuation normale.

## Le sens du jeu à long terme

La motivation durable vient de trouver **du sens** au-delà du rang. Jouez-vous pour le plaisir de maîtriser un champion ? Pour le social avec des amis ? Pour le défi intellectuel ? Identifier votre "pourquoi" profond maintient la motivation quand le LP fluctue.

## Récapitulatif

- La progression vient par **paliers**, pas de façon linéaire
- Célébrez les **petites victoires** (CS, deaths, warding)
- Utilisez des **objectifs SMART** : spécifiques et mesurables
- Lors des losing streaks, **prenez du recul** et analysez
- Trouvez votre **"pourquoi"** au-delà du rang pour une motivation durable`,

  // Practice Instructions
  `## Objectif

Mettre en place un système de suivi de motivation et de célébration des progrès.

## Étapes

1. Identifiez votre "pourquoi" profond : pourquoi jouez-vous vraiment à LoL ?
2. Fixez 3 objectifs SMART pour le mois à venir
3. Créez un journal de bord pour noter vos petites victoires quotidiennes
4. Définissez une "règle d'arrêt" pour les losing streaks (ex: 3 défaites = pause)
5. Planifiez une récompense personnelle pour l'atteinte d'un objectif

## Critère de réussite

Vous avez 3 objectifs SMART écrits, un journal de victoires commencé, et une règle d'arrêt définie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Comment la progression fonctionne-t-elle réellement ?",
      "De façon constante et régulière",
      "Par paliers avec des phases de plateau",
      "Uniquement vers le bas",
      "Seulement le weekend",
      'b',
      "La progression alterne entre plateaux apparents et bonds en avant."
    ),
    createQuestion(
      "Que signifie SMART pour un objectif ?",
      "Simple, Moyen, Automatique, Rapide, Temporaire",
      "Spécifique, Mesurable, Atteignable, Réaliste, Temporel",
      "Super, Magique, Amusant, Rare, Top",
      "Stratégique, Massif, Agressif, Ranked, Total",
      'b',
      "Les objectifs SMART sont structurés pour être clairs et atteignables."
    ),
    createQuestion(
      "Pourquoi célébrer les petites victoires ?",
      "Ce n'est pas nécessaire",
      "Elles s'accumulent et mènent aux gains de rang",
      "Pour impressionner les autres",
      "C'est obligatoire par Riot",
      'b',
      "Les micro-améliorations s'accumulent et créent la progression à long terme."
    ),
    createQuestion(
      "Que faire lors d'une losing streak ?",
      "Continuer jusqu'à regagner tout le LP",
      "Arrêter, analyser et prendre du recul",
      "Blâmer son équipe",
      "Changer de compte",
      'b',
      "Prendre du recul évite le tilt et permet d'analyser objectivement."
    ),
    createQuestion(
      "Un exemple d'objectif SMART serait :",
      "Devenir meilleur au jeu",
      "Atteindre 7 CS/min de moyenne sur 20 parties",
      "Gagner plus souvent",
      "Être Diamond un jour",
      'b',
      "Cet objectif est spécifique (CS/min), mesurable (7), et temporel (20 parties)."
    ),
    createQuestion(
      "Qu'est-ce qui maintient la motivation durable ?",
      "Uniquement le gain de LP",
      "Trouver du sens au-delà du rang",
      "Les skins exclusifs",
      "La pression des amis",
      'b',
      "Identifier son 'pourquoi' profond maintient la motivation quand le rang fluctue."
    ),
    createQuestion(
      "Une défaite efface-t-elle vos acquis ?",
      "Oui, tout est à refaire",
      "Non, c'est juste une fluctuation normale",
      "Oui, vous perdez toutes vos compétences",
      "Cela dépend du champion joué",
      'b',
      "Les compétences acquises restent, seul le LP fluctue temporairement."
    ),
    createQuestion(
      "Quel est un exemple de 'petite victoire' à célébrer ?",
      "Gagner les Worlds",
      "Un CS/min amélioré ou moins de morts",
      "Atteindre Challenger",
      "Avoir un pentakill",
      'b',
      "Les améliorations de métriques quotidiennes sont des victoires à reconnaître."
    ),
    createQuestion(
      "Pourquoi les objectifs vagues démotivent-ils ?",
      "Ils sont trop ambitieux",
      "On ne sait pas quand on les atteint",
      "Riot les interdit",
      "Ils coûtent de l'argent",
      'b',
      "Sans mesure claire, on ne peut pas voir le progrès ni célébrer l'atteinte."
    ),
    createQuestion(
      "Quel est un 'pourquoi' profond valide pour jouer ?",
      "Parce que tout le monde joue",
      "Le plaisir de maîtriser un champion ou le défi intellectuel",
      "Parce que c'est gratuit",
      "Pour avoir quelque chose à faire",
      'b',
      "Un 'pourquoi' personnel et significatif maintient la motivation à long terme."
    ),
  ]
);
