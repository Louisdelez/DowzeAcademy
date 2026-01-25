import { createModule, createQuestion } from '../utils';

export const module01LaneObjectives = createModule(
  'Objectifs de la phase de lane',
  'lane-objectives',
  "Farmer l'or et l'XP efficacement",
  1,
  // Theory Content
  `## La phase de lane

La **phase de lane** (ou laning phase) est la première partie de la partie, généralement les **15 premières minutes**. C'est une phase cruciale où vous devez construire votre avantage.

## Objectif principal : l'or

L'or est la ressource primaire :
- Permet d'**acheter des objets**
- Rend votre champion plus **puissant**
- Se gagne en **tuant les sbires** (last-hit)
- Chaque sbire vaut entre **14 et 90 or**

## Objectif secondaire : l'expérience (XP)

L'XP vous fait monter de niveau :
- Pas besoin de last-hit, juste être à **portée**
- Les niveaux donnent des **stats** et des **points de compétence**
- Un avantage de niveau = avantage en **combat**
- Level 6 = accès à l'**ultime**

## Balance entre or et XP

Comment optimiser :
- Rester en **lane** pour l'XP passive
- **Last-hit** tous les sbires possibles
- Ne pas mourir (perte d'or et d'XP)
- Trader intelligemment sans rater de CS

## Pourquoi c'est important

Une bonne phase de lane :
- Vous donne un avantage en **or** et **niveaux**
- Vous permet d'être plus **fort** en mid-game
- Peut **snowball** vers une victoire
- Compense les erreurs de vos coéquipiers`,

  // Practice Instructions
  `## Objectif

Comprendre l'importance de l'or et de l'XP en phase de lane.

## Étapes

1. Lancez une partie normale ou d'entraînement
2. Concentrez-vous sur les sbires sans chercher à tuer l'ennemi
3. Notez combien d'or vous avez à 10 minutes
4. Comparez votre niveau avec celui de votre adversaire
5. Observez comment l'or se traduit en objets

## Critère de réussite

Vous atteignez 60+ CS à 10 minutes et êtes au même niveau ou plus que l'adversaire.`,

  // Questions
  [
    createQuestion(
      "Quel est l'objectif principal de la phase de lane ?",
      "Tuer l'ennemi",
      "Farmer de l'or et de l'XP",
      "Détruire les tourelles",
      "Aider la jungle",
      'b',
      "La phase de lane sert à accumuler or et XP pour devenir plus fort."
    ),
    createQuestion(
      "Comment gagne-t-on de l'or sur les sbires ?",
      "En étant à côté d'eux",
      "En leur donnant le dernier coup (last-hit)",
      "En les regardant",
      "Automatiquement",
      'b',
      "Il faut donner le dernier coup pour recevoir l'or du sbire."
    ),
    createQuestion(
      "Faut-il last-hit pour gagner de l'XP ?",
      "Oui, obligatoirement",
      "Non, juste être à portée",
      "Seulement sur les canons",
      "Jamais",
      'b',
      "L'XP se gagne passivement en étant à portée des sbires mourants."
    ),
    createQuestion(
      "Combien de temps dure généralement la phase de lane ?",
      "5 minutes",
      "10 minutes",
      "15 minutes",
      "30 minutes",
      'c',
      "La phase de lane dure environ 15 minutes."
    ),
    createQuestion(
      "Pourquoi le niveau 6 est-il important ?",
      "Fin de la partie",
      "Accès à l'ultime",
      "Changement de lane",
      "Achat obligatoire",
      'b',
      "Le niveau 6 débloque la compétence ultime, très puissante."
    ),
    createQuestion(
      "Que se passe-t-il si vous mourez en lane ?",
      "Rien",
      "Perte d'or et d'XP",
      "Gain de bonus",
      "Changement de champion",
      'b',
      "Mourir fait perdre de l'or et de l'XP pendant le temps mort."
    ),
    createQuestion(
      "Un avantage de niveau signifie quoi en combat ?",
      "Rien de spécial",
      "Avantage en stats et compétences",
      "Désavantage",
      "Partie terminée",
      'b',
      "Un niveau supérieur donne plus de stats et potentiellement plus de compétences."
    ),
    createQuestion(
      "Combien vaut un sbire environ ?",
      "1-5 or",
      "14-90 or",
      "100-200 or",
      "500 or",
      'b',
      "Les sbires valent entre 14 or (mêlée) et 90 or (canon)."
    ),
    createQuestion(
      "Qu'est-ce que le 'snowball' ?",
      "Une technique de combat",
      "Un avantage qui s'accumule",
      "Un objectif",
      "Un sbire spécial",
      'b',
      "Le snowball est quand un petit avantage grandit exponentiellement."
    ),
    createQuestion(
      "Quelle est la meilleure stratégie en phase de lane ?",
      "Combattre constamment",
      "Équilibrer farm et trades sans mourir",
      "Rester sous tourelle",
      "Ignorer les sbires",
      'b',
      "Il faut farmer tout en tradant intelligemment sans prendre de risques excessifs."
    ),
  ]
);
