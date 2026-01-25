import { createModule, createQuestion } from '../utils';

export const module04Ganking = createModule(
  'Ganking',
  'ganking',
  "L'art de venir aider les lanes",
  4,
  // Theory Content
  `## L'art du Gank

Un **gank** est l'action de quitter la jungle pour aller surprendre un ennemi en lane avec votre allié. C'est une compétence fondamentale.

## Pourquoi ganker ?

Objectifs d'un gank :
- Obtenir un **kill** ou assist
- Forcer des **summoners** (Flash)
- Donner un **avantage** à votre laner
- Créer de la **pression** psychologique

## Conditions d'un bon gank

Ce qu'il faut vérifier :
- L'ennemi est **poussé** loin de sa tourelle
- Votre laner a du **CC** ou des dégâts
- L'ennemi n'a pas de **dash** ou Flash
- Vous avez assez de **PV** pour combattre

## Types de ganks

Différentes approches :
- **Lane gank** : Venir par la lane (via un bush)
- **River gank** : Venir par la rivière
- **Dive** : Attaquer sous tourelle ennemie
- **Counter-gank** : Arriver quand le jungler ennemi gank

## Angles de gank

Par où venir :
- **Tribush** : Angle classique pour bot/top
- **River** : Direct mais visible
- **Behind** : Derrière l'ennemi si possible
- **Lane** : Se cacher dans un bush de lane

## Exécution du gank

Comment bien exécuter :
- **Attendre** le bon moment (pas trop tôt)
- Laisser votre laner **engager** si possible
- **Garder** votre CC pour après le Flash ennemi
- Ne pas **overstay** si le gank rate`,

  // Practice Instructions
  `## Objectif

Apprendre à ganker efficacement les lanes.

## Étapes

1. Après votre clear, identifiez une lane gankable
2. Vérifiez que l'ennemi est poussé
3. Choisissez votre angle d'approche
4. Coordonnez avec votre laner (ping)
5. Exécutez le gank et évaluez le résultat

## Critère de réussite

Vous réussissez un gank qui aboutit à un kill, assist ou Flash forcé.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un gank ?",
      "Farm la jungle",
      "Venir surprendre un ennemi en lane",
      "Prendre un objectif",
      "Warder",
      'b',
      "Un gank est une surprise sur un ennemi en lane."
    ),
    createQuestion(
      "Quand une lane est-elle gankable ?",
      "Toujours",
      "Quand l'ennemi est poussé loin de sa tourelle",
      "Jamais",
      "Seulement level 6",
      'b',
      "Une lane est gankable quand l'ennemi est exposé."
    ),
    createQuestion(
      "Forcer un Flash est-il un gank réussi ?",
      "Non, c'est un échec",
      "Oui, c'est un avantage",
      "Ça dépend",
      "Seulement en ranked",
      'b',
      "Forcer le Flash ennemi est déjà un succès."
    ),
    createQuestion(
      "Qu'est-ce qu'un counter-gank ?",
      "Ganker en premier",
      "Arriver quand le jungler ennemi gank",
      "Fuir un gank",
      "Ganker la mid",
      'b',
      "Un counter-gank est arriver pendant que l'ennemi gank."
    ),
    createQuestion(
      "Où est le tribush ?",
      "Au milieu de la lane",
      "Le bush en triangle sur les côtés",
      "Dans la base",
      "Au Baron",
      'b',
      "Le tribush est le buisson en forme de triangle."
    ),
    createQuestion(
      "Faut-il garder son CC pour quand ?",
      "Au début",
      "Après que l'ennemi utilise son dash/Flash",
      "Jamais utiliser",
      "Seulement pour soi",
      'b',
      "Gardez le CC pour après les sorts de fuite ennemis."
    ),
    createQuestion(
      "Un dive consiste à ?",
      "Fuir",
      "Attaquer sous la tourelle ennemie",
      "Farm",
      "Warder",
      'b',
      "Un dive est un gank sous la tourelle ennemie."
    ),
    createQuestion(
      "Qu'est-ce qu'un lane gank ?",
      "Gank par la rivière",
      "Se cacher dans un bush de lane puis ganker",
      "Gank du jungler ennemi",
      "Pas de gank",
      'b',
      "Un lane gank passe par un bush dans la lane même."
    ),
    createQuestion(
      "Si le gank rate, que faire ?",
      "Rester et mourir",
      "Ne pas overstay, reprendre le farm",
      "Insulter le laner",
      "AFK",
      'b',
      "Si le gank rate, repartez rapidement."
    ),
    createQuestion(
      "Ping avant un gank sert à ?",
      "Rien",
      "Coordonner avec le laner",
      "Faire peur à l'ennemi",
      "Signaler un problème",
      'b',
      "Le ping alerte votre allié que vous arrivez."
    ),
  ]
);
