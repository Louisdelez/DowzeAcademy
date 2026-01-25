import { createModule, createQuestion } from '../utils';

export const module03ElderDragon = createModule(
  'Dragon ancestral',
  'elder-dragon',
  'Le monstre ultime de la fosse du dragon et son buff de finition',
  3,
  // Theory Content (5+ slides)
  `## Le Dragon Ancestral (Elder Dragon)

Le **Dragon Ancestral** est le dragon le plus puissant du jeu. Il apparaît après qu'une équipe a obtenu l'Âme du dragon. Ce monstre offre un buff dévastateur qui peut décider de l'issue de la partie.

## Conditions d'apparition

Le Dragon Ancestral spawn **6 minutes** après que l'Âme du dragon a été obtenue. Si l'équipe qui a l'âme tue un dragon supplémentaire avant l'apparition de l'Elder, celui-ci apparaîtra 6 minutes après ce dragon.

## Le buff Ancestral : exécution

Le buff du Dragon Ancestral accorde un effet d'**exécution** : tout ennemi qui descend sous un certain seuil de PV (environ 20%) est instantanément tué. Cet effet transforme n'importe quel poke ou dégât en menace mortelle.

**Effet** : Les ennemis sous 20% HP (+ 25% par stack d'Infernal) sont exécutés

## Durée et puissance

Le buff du Dragon Ancestral dure **150 secondes** (2 minutes 30). Pendant ce temps, votre équipe peut forcer des combats avec un avantage énorme. Même un seul coup peut être fatal pour un ennemi.

## La flamme ancestrale

En plus de l'exécution, le buff Ancestral ajoute une **brûlure** à vos attaques et sorts. Cette flamme inflige des dégâts supplémentaires sur la durée, rendant le poke encore plus dangereux.

**Effet supplémentaire** : Brûle les ennemis pour 75-225 dégâts sur 3 secondes

## Stratégie autour de l'Elder Dragon

L'Elder Dragon est souvent le **point de bascule final** d'une partie. Une équipe qui perd l'âme peut revenir en sécurisant l'Elder. À l'inverse, l'équipe avec l'âme ET l'Elder est pratiquement imbattable.

## Combat et sécurisation

Le Dragon Ancestral est très résistant et inflige beaucoup de dégâts. Il faut généralement une équipe entière pour le tuer rapidement. Le **Smite** du jungler est crucial pour sécuriser cet objectif contre un steal potentiel.`,

  // Practice Instructions
  `## Objectif

Comprendre le rôle du Dragon Ancestral et son impact sur la phase finale d'une partie.

## Étapes

1. Regardez un replay VOD où le Dragon Ancestral est contesté
2. Observez le setup des équipes avant l'apparition de l'Elder
3. Notez comment le buff d'exécution affecte les combats
4. Analysez si l'équipe avec l'Elder force le combat ou prend des objectifs
5. Comparez une situation avec et sans buff Ancestral

## Critère de réussite

Vous comprenez quand l'Elder Dragon apparaît, son effet d'exécution, et pourquoi c'est souvent l'objectif décisif de la partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quand apparaît le Dragon Ancestral ?",
      "À 20 minutes de jeu",
      "Après que l'Âme du dragon est obtenue",
      "Après le premier Baron",
      "Quand les deux Nexus sont exposés",
      'b',
      "Le Dragon Ancestral spawn 6 minutes après qu'une équipe a obtenu l'Âme du dragon."
    ),
    createQuestion(
      "Quel est l'effet principal du buff Ancestral ?",
      "Bonus de vitesse d'attaque",
      "Exécution des ennemis à faible HP",
      "Invisibilité permanente",
      "Régénération de mana infinie",
      'b',
      "Le buff Ancestral permet d'exécuter instantanément les ennemis sous environ 20% de leurs PV."
    ),
    createQuestion(
      "Combien de temps dure le buff du Dragon Ancestral ?",
      "60 secondes",
      "120 secondes",
      "150 secondes",
      "180 secondes",
      'c',
      "Le buff Ancestral dure 150 secondes, soit 2 minutes et 30 secondes."
    ),
    createQuestion(
      "À quel pourcentage de HP l'exécution du buff Ancestral s'active-t-elle ?",
      "10% HP",
      "20% HP environ",
      "30% HP",
      "50% HP",
      'b',
      "L'exécution s'active quand un ennemi descend sous environ 20% de ses PV."
    ),
    createQuestion(
      "Le buff Ancestral ajoute quel effet supplémentaire aux attaques ?",
      "Gel (slow)",
      "Brûlure",
      "Silence",
      "Aveuglement",
      'b',
      "Le buff ajoute une flamme ancestrale qui brûle les ennemis touchés."
    ),
    createQuestion(
      "Pourquoi le Dragon Ancestral est-il crucial pour l'équipe sans l'Âme ?",
      "Il annule l'Âme adverse",
      "Il permet de revenir dans la partie grâce à l'exécution",
      "Il détruit automatiquement l'inhibiteur",
      "Il ressuscite les alliés",
      'b',
      "L'Elder offre un moyen de comeback puissant grâce à son effet d'exécution."
    ),
    createQuestion(
      "Combien de temps après l'Âme l'Elder Dragon apparaît-il ?",
      "3 minutes",
      "5 minutes",
      "6 minutes",
      "8 minutes",
      'c',
      "L'Elder Dragon spawn 6 minutes après que l'Âme a été obtenue."
    ),
    createQuestion(
      "Comment le seuil d'exécution peut-il être augmenté ?",
      "En tuant plus de dragons après l'Elder",
      "Grâce aux stacks de Dragon Infernal",
      "En achetant des objets spécifiques",
      "Il ne peut pas être augmenté",
      'b',
      "Chaque stack de Dragon Infernal augmente le seuil d'exécution de 25%."
    ),
    createQuestion(
      "Le Dragon Ancestral est-il plus ou moins résistant que les dragons élémentaires ?",
      "Moins résistant",
      "Aussi résistant",
      "Plus résistant",
      "Il a la même résistance que le Baron",
      'c',
      "Le Dragon Ancestral est beaucoup plus résistant et dangereux que les dragons élémentaires."
    ),
    createQuestion(
      "Quelle action est cruciale pour sécuriser le Dragon Ancestral ?",
      "Utiliser son Flash",
      "Placer des wards",
      "Le Smite du jungler",
      "Utiliser Téléportation",
      'c',
      "Le Smite est essentiel pour sécuriser le dernier coup sur l'Elder et éviter un steal."
    ),
  ]
);
