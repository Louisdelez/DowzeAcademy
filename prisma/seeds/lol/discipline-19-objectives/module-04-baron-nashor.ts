import { createModule, createQuestion } from '../utils';

export const module04BaronNashor = createModule(
  'Baron Nashor',
  'baron-nashor',
  'Le monstre épique le plus puissant de la carte et son buff de siège',
  4,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le Baron Nashor ?

Le **Baron Nashor** est le monstre neutre le plus puissant de Summoner's Rift. Il apparaît dans la fosse du Baron, au nord de la rivière. Tuer le Baron confère un buff de siège à toute l'équipe, permettant de détruire la base ennemie.

## Apparition et statistiques

Le Baron Nashor **spawn à 20 minutes** de jeu. Si tué, il réapparaît **6 minutes** plus tard. C'est un monstre extrêmement résistant qui inflige d'énormes dégâts - il ne peut généralement pas être tué en solo.

## Le buff Baron Nashor

Le buff **Hand of Baron** dure **3 minutes** et offre plusieurs avantages puissants :
- Bonus d'AD et d'AP (scaling avec le temps de jeu)
- Les sbires proches sont **empowered** (plus résistants, font plus de dégâts aux structures)

## L'effet sur les sbires

Les sbires empowered par le buff Baron sont transformés :
- **Sbires de mêlée** : gains de résistance massive et dégâts augmentés
- **Sbires lanceurs** : portée augmentée et dégâts aux tourelles
- **Canon** : devient un mini-siège qui détruit rapidement les structures

## Stratégie de siège avec Baron

Le buff Baron est conçu pour **finir la partie**. Après l'avoir obtenu, votre équipe doit :
1. Regrouper sur une lane avec les sbires empowered
2. Utiliser les sbires comme boucliers pour prendre les tourelles
3. Forcer les combats sous tourelle ennemie

## Contester le Baron

Le Baron est l'objectif le plus **contesté** du jeu. La vision autour de la fosse est cruciale. Un bon **Smite** peut sécuriser ou steal le Baron. Beaucoup de parties se décident sur un fight Baron.

## Quand prendre le Baron ?

Le meilleur moment pour Baron est :
- Après avoir gagné un teamfight (nombre supérieur)
- Quand l'équipe ennemie ne peut pas contester (morts, de l'autre côté de la carte)
- Quand vous avez besoin du buff pour casser la base

**Attention** : Tenter Baron sans avantage peut mener à un wipe d'équipe et une défaite.`,

  // Practice Instructions
  `## Objectif

Comprendre le timing du Baron Nashor et l'utilisation optimale de son buff.

## Étapes

1. Lancez le Practice Tool et avancez le temps jusqu'à 20 minutes
2. Localisez la fosse du Baron sur la carte
3. Tentez de tuer le Baron (utilisez les commandes pour ajuster votre niveau/items)
4. Observez le buff obtenu et son effet sur les sbires
5. Poussez une lane avec le buff Baron et notez la différence sur les sbires

## Critère de réussite

Vous savez quand le Baron spawn, combien de temps dure son buff, et comment l'utiliser pour assiéger efficacement.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "À quelle minute apparaît le Baron Nashor pour la première fois ?",
      "15 minutes",
      "20 minutes",
      "25 minutes",
      "30 minutes",
      'b',
      "Le Baron Nashor spawn à 20 minutes de jeu."
    ),
    createQuestion(
      "Combien de temps dure le buff Baron Nashor ?",
      "2 minutes",
      "3 minutes",
      "4 minutes",
      "5 minutes",
      'b',
      "Le buff Hand of Baron dure 3 minutes."
    ),
    createQuestion(
      "Quel est l'effet principal du buff Baron sur les sbires ?",
      "Ils deviennent invisibles",
      "Ils sont empowered et font plus de dégâts aux structures",
      "Ils se déplacent deux fois plus vite",
      "Ils peuvent attaquer les champions",
      'b',
      "Le buff Baron empower les sbires proches, les rendant plus résistants et efficaces contre les structures."
    ),
    createQuestion(
      "Où se situe la fosse du Baron sur la carte ?",
      "Au sud de la rivière",
      "Au nord de la rivière",
      "Au centre de la mid lane",
      "Dans la base bleue",
      'b',
      "La fosse du Baron est située au nord de la rivière, à l'opposé de la fosse du dragon."
    ),
    createQuestion(
      "Après combien de temps le Baron réapparaît-il après avoir été tué ?",
      "4 minutes",
      "5 minutes",
      "6 minutes",
      "8 minutes",
      'c',
      "Le Baron réapparaît 6 minutes après avoir été tué."
    ),
    createQuestion(
      "Quel est le meilleur moment pour tenter le Baron ?",
      "Dès qu'il spawn à 20 minutes",
      "Quand l'équipe ennemie est morte ou loin",
      "Quand vous êtes seul sur la carte",
      "Pendant un teamfight dans la mid lane",
      'b',
      "Le Baron doit être pris quand l'ennemi ne peut pas contester, généralement après un fight gagné."
    ),
    createQuestion(
      "Pourquoi le Baron est-il difficile à tuer ?",
      "Il se téléporte constamment",
      "Il est très résistant et inflige d'énormes dégâts",
      "Il invoque des dragons",
      "Il rend l'équipe adverse invisible",
      'b',
      "Le Baron a énormément de PV, de résistances et inflige de lourds dégâts à ceux qui l'attaquent."
    ),
    createQuestion(
      "Que signifie 'steal' le Baron ?",
      "Le voler à un allié",
      "L'équipe ennemie tue le Baron au dernier moment",
      "Le Baron s'échappe de sa fosse",
      "Empêcher le Baron de spawn",
      'b',
      "Un 'steal' arrive quand l'équipe adverse sécurise le dernier coup sur le Baron, souvent avec Smite."
    ),
    createQuestion(
      "Le buff Baron donne quel bonus de stats aux champions ?",
      "Vitesse d'attaque et critique",
      "AD et AP bonus",
      "Armure et résistance magique",
      "Vol de vie et vampirisme",
      'b',
      "Le buff Hand of Baron accorde un bonus d'AD et d'AP qui scale avec le temps de jeu."
    ),
    createQuestion(
      "Que devrait faire une équipe immédiatement après avoir tué le Baron ?",
      "Faire le dragon",
      "Retourner à la base acheter",
      "Se regrouper et pousser avec les sbires empowered",
      "Split-push sur 3 lanes séparées",
      'c',
      "Le buff Baron est conçu pour le siège - l'équipe doit regrouper et utiliser les sbires empowered pour détruire les structures."
    ),
  ]
);
