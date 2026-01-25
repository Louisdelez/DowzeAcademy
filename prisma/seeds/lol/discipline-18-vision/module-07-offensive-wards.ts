import { createModule, createQuestion } from '../utils';

export const module07OffensiveWards = createModule(
  'Wards offensives',
  'offensive-wards',
  'Placer des wards profondes dans la jungle ennemie pour contrôler leurs mouvements',
  7,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'une ward offensive ?

Une **ward offensive** (ou "deep ward") est une ward placée profondément dans le territoire ennemi, généralement dans leur jungle. Contrairement aux wards défensives qui protègent votre lane, les wards offensives vous donnent de l'information sur les mouvements ennemis.

## Avantages des wards offensives

Les deep wards offrent des avantages stratégiques majeurs :
- **Tracker le jungler** : Savoir où il est et où il va
- **Anticiper les rotations** : Voir les ennemis bouger vers un objectif
- **Identifier les opportunités** : Repérer un ennemi isolé pour l'éliminer
- **Contrôler le tempo** : Jouer plus agressivement avec l'information

## Emplacements clés pour les wards offensives

Les meilleurs spots de deep ward sont :
- **Camps de jungle** : Raptors, Wolves, Gromp, Krugs
- **Intersections de chemins** : Entre deux camps
- **Entrées de jungle** : Pour voir qui entre/sort
- **Buff camps** : Blue buff et Red buff ennemis

Le camp des **Raptors** est particulièrement populaire car le jungler y passe souvent.

## Quand placer des wards offensives ?

Le timing est crucial pour les deep wards :
- **Après un kill** : L'ennemi mort ne peut pas vous attraper
- **Quand vous avez la pression** : Votre lane push ou après un objectif
- **En groupe** : Accompagnez votre jungler ou support
- **Après un recall ennemi** : Profitez de leur absence

Ne deep wardez **jamais** seul quand vous ne savez pas où sont les ennemis !

## Risques des wards offensives

Placer des deep wards comporte des risques :
- Vous vous éloignez de votre lane (perte de farm/XP)
- Vous pouvez être attrapé par plusieurs ennemis
- L'ennemi peut voir votre ward et l'éliminer rapidement

Évaluez toujours le rapport risque/récompense avant de deep warder.`,

  // Practice Instructions
  `## Objectif

Apprendre à placer des wards offensives dans la jungle ennemie de manière sécurisée.

## Étapes

1. Lancez une partie normale ou classée
2. Identifiez des moments sûrs pour deep warder (après un kill, lane poussée, ennemi recall)
3. Placez une ward offensive au camp des Raptors ennemis
4. Essayez de warder le Blue ou Red buff ennemi quand c'est sûr
5. Utilisez l'information de ces wards pour alerter votre équipe des mouvements ennemis
6. Notez combien de fois vos deep wards ont révélé le jungler ennemi

## Critère de réussite

Vous avez placé au moins 3 wards offensives dans la jungle ennemie pendant la partie et utilisé l'information pour avertir votre équipe d'au moins 1 mouvement ennemi.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une ward offensive ou 'deep ward' ?",
      "Une ward qui fait des dégâts",
      "Une ward placée profondément dans le territoire ennemi",
      "Une ward posée sous une tourelle",
      "Une ward invisible permanente",
      'b',
      "Les deep wards sont placées dans la jungle ennemie pour tracker leurs mouvements."
    ),
    createQuestion(
      "Quel est l'avantage principal des wards offensives ?",
      "Elles donnent plus d'or",
      "Elles permettent de tracker le jungler et anticiper les rotations",
      "Elles durent plus longtemps",
      "Elles sont indestructibles",
      'b',
      "Les deep wards fournissent des informations cruciales sur les mouvements ennemis dans leur jungle."
    ),
    createQuestion(
      "Quel camp ennemi est particulièrement populaire pour placer une deep ward ?",
      "Les Gromp",
      "Les Raptors",
      "Le Baron",
      "Le Dragon",
      'b',
      "Le camp des Raptors est souvent wardé car les junglers y passent fréquemment."
    ),
    createQuestion(
      "Quand est-il sûr de placer une ward offensive ?",
      "À n'importe quel moment",
      "Après un kill ennemi ou quand vous avez la pression de lane",
      "Uniquement en début de partie",
      "Quand vous êtes à court de vie",
      'b',
      "Deep wardez quand l'ennemi est mort, absent, ou quand vous avez un avantage de position."
    ),
    createQuestion(
      "Pourquoi ne devriez-vous jamais deep warder seul sans information ?",
      "Les wards coûtent plus cher dans la jungle ennemie",
      "Vous pouvez être attrapé par plusieurs ennemis",
      "Les wards ne fonctionnent pas dans la jungle ennemie",
      "Le jungler ennemi peut voler votre ward",
      'b',
      "S'aventurer seul dans la jungle ennemie sans savoir où sont les ennemis est très risqué."
    ),
    createQuestion(
      "Quel est un bon moment pour accompagner votre jungler en deep ward ?",
      "Quand vous êtes en retard d'or",
      "Après avoir pris un objectif avec votre équipe",
      "Quand vous perdez votre lane",
      "Jamais, c'est le travail du support",
      'b',
      "Après un objectif, l'équipe peut sécuriser ensemble la jungle ennemie et y placer des wards."
    ),
    createQuestion(
      "Quel risque prenez-vous en plaçant des deep wards ?",
      "Vous perdez de l'or",
      "Vous vous éloignez de votre lane et pouvez être attrapé",
      "Vos wards sont automatiquement détruites",
      "Vous subissez des dégâts",
      'b',
      "Deep warder vous fait quitter votre lane, risquant de perdre farm/XP ou de vous faire attraper."
    ),
    createQuestion(
      "Que devriez-vous faire avec l'information obtenue d'une deep ward ?",
      "La garder pour vous",
      "Alerter votre équipe des mouvements ennemis via les pings",
      "Ignorer l'information",
      "Recall immédiatement",
      'b',
      "Partagez toujours l'information de vos wards avec votre équipe via des pings."
    ),
    createQuestion(
      "Warder le buff ennemi (Blue/Red) est utile pour...",
      "Voler le buff automatiquement",
      "Savoir quand le jungler sera à ce camp et potentiellement le contester",
      "Désactiver le buff",
      "Gagner de l'expérience",
      'b',
      "Une ward sur le buff vous informe du timing et permet de contester ou d'anticiper la position du jungler."
    ),
    createQuestion(
      "Quelle est la différence entre une ward défensive et offensive ?",
      "La couleur de la ward",
      "La défensive protège votre zone, l'offensive surveille le territoire ennemi",
      "Le coût en or",
      "La durée de vie",
      'b',
      "Les wards défensives protègent, les offensives donnent de l'information sur les mouvements ennemis."
    ),
  ]
);
