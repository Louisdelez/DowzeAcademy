import { createModule, createQuestion } from '../utils';

export const module02BaronNashor = createModule(
  'Baron Nashor',
  'baron-nashor',
  'Evaluer le bon moment pour prendre Baron',
  2,
  // Theory Content (5+ slides)
  `## Qu'est-ce que Baron Nashor ?

Le **Baron Nashor** est l'objectif neutre le plus puissant de la Faille de l'Invocateur. Il apparait dans la fosse du Baron (cote nord de la riviere) a **20 minutes** de jeu et reapparait 6 minutes apres avoir ete tue.

C'est l'objectif qui peut le plus directement mener a la victoire en late game.

## Le buff Baron : Hand of Baron

Tuer le Baron confere le buff **Hand of Baron** a tous les membres vivants de l'equipe :

- **Duree** : 3 minutes
- **Bonus de stats** : AD et AP augmentes
- **Renforcement des sbires** : Les sbires proches deviennent plus puissants
- **Sbires empowers** : Plus de vie, plus de degats, resistances accrues

Ce buff transforme vos vagues de sbires en armes de siege devastatrices.

## Quand prendre le Baron ?

Les conditions ideales pour tenter Baron :

1. **Avantage numerique** : 5v4 ou mieux apres un pick
2. **Ennemis morts ou loin** : Pas de risque de contest
3. **Smite disponible** : Le jungler doit avoir son smite
4. **Vision securisee** : Balises dans les zones cles autour du Baron
5. **Equipe en bonne sante** : Assez de HP/mana pour finir et fuir si necessaire

## Les risques du Baron

Tenter Baron comporte des risques majeurs :

- **Steal** : L'ennemi peut voler le Baron avec un smite ou une competence
- **Retournement** : L'equipe peut se faire wipe pendant qu'elle fait Baron
- **Degats subis** : Baron inflige beaucoup de degats, affaiblissant l'equipe
- **Perte de temps** : Echec = temps perdu et avantage donne a l'ennemi

## Comment securiser le Baron

Pour maximiser vos chances de reussite :

- **Etablir le controle de vision** avant de commencer
- **Clear les balises ennemies** avec lentille oracle ou balise de controle
- **Garder le burst** pour la fin (ne pas gaspiller les ults)
- **Positionner un joueur** pour zoner les ennemis
- **Communiquer** le timing du smite

## Utiliser le buff Baron

Une fois le Baron obtenu :

- **Groupez-vous** pour push avec les sbires renforces
- **Siegez les tourelles** grace aux sbires tanky
- **Forcez les engagements** avec l'avantage de stats
- **Ne gaspillez pas le buff** en errant sans objectif

Le buff dure 3 minutes : utilisez-le efficacement !

## Recapitulatif

- Baron spawn a 20 minutes, respawn 6 minutes apres
- Le buff renforce vos sbires et donne des stats bonus
- Prenez Baron quand l'ennemi est en desavantage numerique
- Securisez la vision avant de commencer
- Utilisez le buff pour siegeur et prendre des objectifs`,

  // Practice Instructions
  `## Objectif

Apprendre a evaluer les bonnes et mauvaises situations pour tenter Baron Nashor.

## Etapes

1. Lancez une partie normale ou classee
2. A partir de 20 minutes, observez chaque opportunite de Baron
3. Avant chaque tentative, evaluez mentalement : avantage numerique, vision, smite dispo
4. Notez si vos tentatives reussissent ou echouent
5. Apres la partie, analysez chaque decision Baron

## Critere de reussite

Vous avez tente Baron dans au moins 2 situations favorables (avantage numerique, vision securisee) et evite les tentatives risquees.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "A quelle minute Baron Nashor apparait-il pour la premiere fois ?",
      "10 minutes",
      "15 minutes",
      "20 minutes",
      "25 minutes",
      'c',
      "Baron Nashor spawn pour la premiere fois a 20 minutes de jeu."
    ),
    createQuestion(
      "Combien de temps faut-il attendre pour que Baron reapparaisse apres avoir ete tue ?",
      "3 minutes",
      "5 minutes",
      "6 minutes",
      "8 minutes",
      'c',
      "Baron respawn 6 minutes apres avoir ete tue."
    ),
    createQuestion(
      "Comment s'appelle le buff confere par le Baron ?",
      "Dragon Soul",
      "Hand of Baron",
      "Elder Buff",
      "Nashor's Touch",
      'b',
      "Le buff du Baron s'appelle Hand of Baron."
    ),
    createQuestion(
      "Quelle est la duree du buff Baron ?",
      "1 minute",
      "2 minutes",
      "3 minutes",
      "5 minutes",
      'c',
      "Le buff Hand of Baron dure 3 minutes."
    ),
    createQuestion(
      "Quel est l'effet principal du buff Baron sur les sbires ?",
      "Les sbires deviennent invisibles",
      "Les sbires sont renforces (vie, degats, resistances)",
      "Les sbires disparaissent",
      "Les sbires changent de couleur uniquement",
      'b',
      "Le buff Baron renforce considerablement les sbires proches du porteur."
    ),
    createQuestion(
      "Quelle condition est ideale pour tenter Baron ?",
      "Etre en desavantage numerique",
      "Avoir un avantage numerique (5v4 ou mieux)",
      "Ne pas avoir de vision",
      "Le jungler n'a pas smite",
      'b',
      "Un avantage numerique reduit les risques de contest et de wipe."
    ),
    createQuestion(
      "Quel est un risque majeur lors d'une tentative Baron ?",
      "Gagner trop vite",
      "Le steal par l'ennemi",
      "Les sbires sont trop forts",
      "L'equipe gagne trop de stats",
      'b',
      "L'ennemi peut voler le Baron avec un smite ou une competence a degats."
    ),
    createQuestion(
      "Que faut-il faire avant de commencer Baron ?",
      "Rush sans preparer",
      "Etablir le controle de vision",
      "Ignorer les ennemis",
      "Rappeler a la base",
      'b',
      "Etablir la vision permet de voir les rotations ennemies et de reagir."
    ),
    createQuestion(
      "Comment utiliser efficacement le buff Baron ?",
      "Errer sur la carte sans objectif",
      "Se grouper et sieger les tourelles avec les sbires renforces",
      "Faire la jungle",
      "Retourner a la base immediatement",
      'b',
      "Le buff Baron est fait pour sieger les tourelles grace aux sbires empowers."
    ),
    createQuestion(
      "Ou se trouve la fosse du Baron sur la carte ?",
      "Cote sud de la riviere",
      "Au centre de la carte",
      "Cote nord de la riviere",
      "Dans la base",
      'c',
      "La fosse du Baron est situee cote nord de la riviere, opposee a la fosse du Dragon."
    ),
  ]
);
