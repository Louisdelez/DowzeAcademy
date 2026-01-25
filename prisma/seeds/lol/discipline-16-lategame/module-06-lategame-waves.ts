import { createModule, createQuestion } from '../utils';

export const module06LategameWaves = createModule(
  'Waves de sbires en fin de partie',
  'lategame-waves',
  'Push synchronise et gestion des vagues',
  6,
  // Theory Content (5+ slides)
  `## L'importance des waves en late game

En late game, les **vagues de sbires** deviennent un outil strategique majeur. Des waves bien gerees peuvent :

- Exercer une **pression constante** sur plusieurs lanes
- **Forcer** l'ennemi a se separer pour defendre
- Creer des **opportunites** pour prendre des objectifs
- Menacer directement les **tourelles et inhibiteurs**

## Le concept de slow push

Le **slow push** consiste a creer une vague qui grossit progressivement :

1. Tuez les **sbires casters** ennemis (ceux a l'arriere)
2. Laissez vos sbires tuer les melee lentement
3. La vague suivante arrive et rejoint la votre
4. Repetez pour creer une **mega wave**

Une mega wave met une pression enorme et necessite l'attention de l'ennemi.

## Le push synchronise

En late game, le **push synchronise** est crucial :

- Poussez **plusieurs lanes simultanement** avant un objectif
- Les waves arrivent aux tourelles ennemies en meme temps
- L'ennemi doit **choisir** quelle lane defendre
- Pendant qu'il defend, prenez Baron ou Elder

C'est la strategie 1-3-1 ou 1-4 a son apogee.

## Gerer les super sbires

Quand un **inhibiteur** est detruit :

- Des **super sbires** spawn dans cette lane toutes les vagues
- Ils ont beaucoup plus de vie et de degats
- Ils **drainent les ressources** de l'ennemi qui doit les clear
- Ils peuvent **push jusqu'au Nexus** si ignores

Un inhibiteur down = pression permanente sur cette lane.

## Le timing des waves

Savoir quand les waves arrivent est essentiel :

- Les waves spawn toutes les **30 secondes**
- Le temps de trajet de la base a la lane varie selon la lane
- **Anticipez** ou seront les waves quand Baron/Elder spawn
- Poussez les lanes **avant** de vous grouper pour un objectif

## Erreurs courantes de wave management

Evitez ces erreurs en late game :

- **Ignorer les waves** pour ARAM mid
- **Laisser crash** des waves sous vos tourelles sans les collecter
- **Mal timer** les push par rapport aux objectifs
- **Gaspiller le temps** a farmer quand l'equipe a besoin de vous
- **Oublier les lanes laterales** pendant un siege

## Recapitulatif

- Les waves sont un outil strategique majeur en late game
- Le slow push cree des mega waves qui exercent une pression enorme
- Le push synchronise force l'ennemi a se separer
- Les super sbires drainent les ressources ennemies
- Timez vos push par rapport aux objectifs importants`,

  // Practice Instructions
  `## Objectif

Maitriser la gestion des waves en late game pour creer de la pression strategique.

## Etapes

1. En late game, avant un objectif (Baron/Elder), poussez une lane laterale
2. Creez un slow push en tuant uniquement les casters ennemis
3. Rejoignez votre equipe pour l'objectif
4. Observez comment l'ennemi doit gerer la wave que vous avez creee
5. Repetez cette strategie plusieurs fois dans une partie

## Critere de reussite

Vous avez reussi a creer un slow push qui a force l'ennemi a envoyer quelqu'un defendre, facilitant la prise d'un objectif pour votre equipe.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi les waves sont-elles importantes en late game ?",
      "Elles ne sont pas importantes",
      "Elles exercent une pression et forcent l'ennemi a se separer",
      "Uniquement pour l'or",
      "Elles sont moins importantes qu'en early",
      'b',
      "Les waves bien gerees exercent une pression strategique et forcent des choix difficiles a l'ennemi."
    ),
    createQuestion(
      "Comment creer un slow push ?",
      "Tuer tous les sbires rapidement",
      "Tuer uniquement les casters et laisser la wave grossir",
      "Ignorer completement les sbires",
      "Tuer uniquement les melee",
      'b',
      "Tuer les casters permet a vos sbires de gagner lentement, accumulant une grosse vague."
    ),
    createQuestion(
      "Qu'est-ce qu'un push synchronise ?",
      "Pousser une seule lane tres vite",
      "Pousser plusieurs lanes simultanement avant un objectif",
      "Ne pas pousser du tout",
      "Pousser uniquement la mid",
      'b',
      "Le push synchronise consiste a avoir plusieurs lanes qui arrivent aux tourelles ennemies en meme temps."
    ),
    createQuestion(
      "Que sont les super sbires ?",
      "Des sbires normaux",
      "Des sbires renforces qui spawn quand un inhibiteur est detruit",
      "Des sbires de la jungle",
      "Des sbires speciaux du Baron",
      'b',
      "Les super sbires apparaissent dans une lane dont l'inhibiteur a ete detruit."
    ),
    createQuestion(
      "A quelle frequence les vagues de sbires spawn-elles ?",
      "Toutes les 15 secondes",
      "Toutes les 30 secondes",
      "Toutes les 45 secondes",
      "Toutes les 60 secondes",
      'b',
      "Les vagues de sbires apparaissent toutes les 30 secondes."
    ),
    createQuestion(
      "Pourquoi faut-il pousser les lanes avant de grouper pour Baron ?",
      "Pour avoir plus d'or",
      "Pour que les waves exercent une pression pendant que vous etes a Baron",
      "Ce n'est pas necessaire",
      "Uniquement pour l'experience",
      'b',
      "Des waves qui push forcent l'ennemi a choisir entre contest Baron ou defendre les tourelles."
    ),
    createQuestion(
      "Quelle erreur courante les joueurs font-ils avec les waves en late game ?",
      "Trop bien gerer les waves",
      "Ignorer les waves pour ARAM mid",
      "Pousser trop les lanes laterales",
      "Faire trop de slow push",
      'b',
      "Beaucoup de joueurs ignorent les lanes laterales et restent groupe mid sans creer de pression."
    ),
    createQuestion(
      "Quel est l'effet d'un inhibiteur detruit sur la lane ?",
      "Aucun effet",
      "Des super sbires spawn et exercent une pression permanente",
      "Les sbires disparaissent",
      "La lane devient plus courte",
      'b',
      "Un inhibiteur detruit fait spawn des super sbires qui push constamment vers le Nexus ennemi."
    ),
    createQuestion(
      "Qu'est-ce qu'une mega wave ?",
      "Une wave normale",
      "Une tres grosse vague de sbires accumulee via slow push",
      "Une wave de super sbires uniquement",
      "Une wave invisible",
      'b',
      "Une mega wave est une vague tres importante creee en accumulant plusieurs vagues via slow push."
    ),
    createQuestion(
      "Quand faut-il collecter les waves en late game ?",
      "Jamais",
      "Quand elles arrivent sans compromettre les objectifs d'equipe",
      "Uniquement quand l'equipe combat",
      "Seulement pour les super sbires",
      'b',
      "Collecter les waves est important mais ne doit pas se faire au detriment des besoins de l'equipe."
    ),
  ]
);
