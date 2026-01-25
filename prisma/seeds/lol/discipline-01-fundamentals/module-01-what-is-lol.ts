import { createModule, createQuestion } from '../utils';

export const module01WhatIsLoL = createModule(
  "Qu'est-ce que League of Legends ?",
  'what-is-lol',
  'Principe MOBA en 5v5, objectif Nexus',
  1,
  // Theory Content (5+ slides)
  `## Qu'est-ce que League of Legends ?

League of Legends (LoL) est un jeu vidéo compétitif de type **MOBA** (Multiplayer Online Battle Arena), développé par Riot Games en 2009. C'est l'un des jeux les plus populaires au monde avec des millions de joueurs actifs.

## Le principe du MOBA

Dans un MOBA, deux équipes s'affrontent sur une carte avec pour objectif de détruire la base ennemie. Chaque joueur contrôle un **champion** unique avec des capacités spéciales. La combinaison de stratégie, réflexes et travail d'équipe fait tout l'intérêt du genre.

## Le format 5 contre 5

League of Legends se joue en équipes de **5 joueurs**. Chaque joueur occupe un rôle spécifique (Top, Jungle, Mid, ADC, Support) et doit collaborer avec ses coéquipiers pour remporter la victoire.

## L'objectif : détruire le Nexus

Le **Nexus** est le coeur de chaque base. Pour gagner, votre équipe doit détruire le Nexus ennemi. Pour y accéder, vous devez d'abord détruire les tourelles et inhibiteurs qui le protègent.

## Récapitulatif

- **MOBA** = Multiplayer Online Battle Arena (arène de combat multijoueur)
- **5v5** = deux équipes de 5 joueurs
- **Objectif** = détruire le Nexus ennemi
- Chaque joueur contrôle un champion unique
- La victoire requiert stratégie et travail d'équipe`,

  // Practice Instructions
  `## Objectif

Découvrir l'interface de League of Legends et comprendre les bases du jeu en lançant le tutoriel officiel.

## Étapes

1. Lancez League of Legends et connectez-vous à votre compte
2. Cliquez sur "Jouer" puis sélectionnez "Entraînement"
3. Choisissez "Tutoriel de base"
4. Suivez les instructions du tutoriel jusqu'à la fin
5. Identifiez le Nexus sur la carte

## Critère de réussite

Vous avez complété le tutoriel de base et pouvez identifier le Nexus allié et ennemi sur la mini-carte.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel type de jeu est League of Legends ?",
      "FPS (First Person Shooter)",
      "MOBA (Multiplayer Online Battle Arena)",
      "RPG (Role Playing Game)",
      "RTS (Real Time Strategy)",
      'b',
      "League of Legends est un MOBA, un genre de jeu où deux équipes s'affrontent pour détruire la base adverse."
    ),
    createQuestion(
      "Combien de joueurs composent une équipe dans League of Legends ?",
      "3 joueurs",
      "4 joueurs",
      "5 joueurs",
      "6 joueurs",
      'c',
      "Chaque équipe est composée de 5 joueurs, chacun avec un rôle spécifique."
    ),
    createQuestion(
      "Quel est l'objectif principal pour gagner une partie ?",
      "Tuer tous les champions ennemis",
      "Détruire le Nexus ennemi",
      "Contrôler toute la carte",
      "Avoir le plus d'or à la fin du temps",
      'b',
      "La victoire s'obtient en détruisant le Nexus ennemi, le coeur de leur base."
    ),
    createQuestion(
      "Qu'est-ce que le Nexus ?",
      "Un monstre neutre puissant",
      "Le coeur de la base de chaque équipe",
      "Un objectif bonus",
      "Une tourelle spéciale",
      'b',
      "Le Nexus est la structure centrale de chaque base. Sa destruction met fin à la partie."
    ),
    createQuestion(
      "Que signifie MOBA ?",
      "Massive Online Battle Arena",
      "Multiplayer Online Battle Arena",
      "Multi Objective Battle Area",
      "Multiplayer Offensive Base Attack",
      'b',
      "MOBA signifie Multiplayer Online Battle Arena, soit arène de combat multijoueur en ligne."
    ),
    createQuestion(
      "Qui a développé League of Legends ?",
      "Blizzard Entertainment",
      "Valve Corporation",
      "Riot Games",
      "Epic Games",
      'c',
      "League of Legends a été créé par Riot Games et lancé en 2009."
    ),
    createQuestion(
      "Qu'est-ce qu'un champion dans LoL ?",
      "Un joueur très compétent",
      "Le personnage contrôlé par un joueur",
      "Un monstre neutre",
      "Une structure défensive",
      'b',
      "Un champion est le personnage unique que chaque joueur contrôle pendant la partie."
    ),
    createQuestion(
      "Que faut-il détruire avant d'attaquer le Nexus ?",
      "Tous les champions ennemis",
      "Les tourelles et inhibiteurs",
      "Les monstres de la jungle",
      "La fontaine ennemie",
      'b',
      "Les tourelles et inhibiteurs protègent le Nexus et doivent être détruits pour y accéder."
    ),
    createQuestion(
      "Pourquoi le travail d'équipe est-il important dans LoL ?",
      "Ce n'est pas vraiment important",
      "Uniquement pour les objectifs bonus",
      "Chaque rôle contribue différemment à la victoire",
      "Seulement en fin de partie",
      'c',
      "La coordination entre les 5 joueurs et leurs rôles différents est essentielle pour gagner."
    ),
    createQuestion(
      "Quelle est la condition de défaite dans League of Legends ?",
      "Avoir moins de kills que l'ennemi",
      "Perdre tous ses champions",
      "Voir son Nexus détruit par l'équipe adverse",
      "Manquer d'or pour acheter des objets",
      'c',
      "Une équipe perd quand son Nexus est détruit par l'équipe adverse."
    ),
  ]
);
