import { createModule, createQuestion } from '../utils';

export const module01TeamBalance = createModule(
  'Équilibre de composition',
  'team-balance',
  'Comprendre les bases de la composition standard: tank, DPS, support, contrôle',
  1,
  // Theory Content (5+ slides)
  `## Introduction à l'équilibre de composition

Une composition d'équipe équilibrée est la fondation de toute stratégie réussie dans League of Legends. Comprendre les rôles et les types de champions permet de créer une équipe cohérente capable de répondre à différentes situations de jeu.

## Les piliers d'une composition standard

Une composition équilibrée repose généralement sur **5 piliers** :
- **Tank/Frontline** : Encaisse les dégâts et protège les alliés
- **DPS physique (AD)** : Source principale de dégâts physiques
- **DPS magique (AP)** : Source principale de dégâts magiques
- **Utility/Support** : Soins, boucliers et contrôle de foule
- **Engage/Peel** : Initiation ou protection des carries

## Le rôle du Tank dans l'équipe

Le tank est souvent le **premier à entrer** dans les combats. Il absorbe les dégâts ennemis grâce à sa haute résistance et ses points de vie. Champions typiques : Ornn, Maokai, Sion, Sejuani.

Un bon tank doit :
- Protéger ses carries arrière
- Initier ou contre-initier les combats
- Créer de l'espace pour son équipe

## L'importance de la répartition des dégâts

Avoir un mélange de **dégâts AD et AP** est crucial :
- Les ennemis ne peuvent pas se concentrer sur un seul type de résistance
- Si l'équipe est full AD, l'ennemi empile l'armure et devient imbattable
- Si l'équipe est full AP, l'ennemi empile la résistance magique

**Exemple d'équilibre** : Ornn (tank AP), Lee Sin (AD), Syndra (AP), Jinx (AD), Thresh (utility)

## Le support et l'utility

Le support apporte des **outils essentiels** à l'équipe :
- Soins et boucliers (Soraka, Lulu, Janna)
- Contrôle de foule (Leona, Nautilus, Thresh)
- Vision et information sur la carte

Sans utility suffisant, l'équipe manque de sustain dans les combats prolongés.

## L'engagement et le peel

**L'engage** permet d'initier les combats favorables (Malphite ult, Leona ult, Jarvan combo).

**Le peel** consiste à protéger les carries des menaces ennemies (Janna tornado, Thresh lantern, Lulu polymorph).

Une bonne composition a généralement les deux capacités pour s'adapter aux situations.

## Récapitulatif

- Une composition équilibrée mélange tank, DPS, et utility
- La répartition AD/AP empêche l'ennemi de stacker une résistance
- L'engage permet d'initier, le peel protège les carries
- Chaque rôle contribue différemment au succès de l'équipe`,

  // Practice Instructions
  `## Objectif

Analyser plusieurs compositions d'équipe pour identifier leurs forces, faiblesses et leur équilibre global.

## Étapes

1. Lancez League of Legends et allez dans l'historique de vos parties récentes
2. Choisissez 3 parties (victoires ou défaites)
3. Pour chaque partie, notez la composition de votre équipe
4. Identifiez pour chaque équipe :
   - Qui est le tank/frontline ?
   - Quelle est la répartition AD/AP ?
   - Qui apporte l'utility/support ?
   - Qui peut engager ou peel ?
5. Déterminez si la composition était équilibrée ou déséquilibrée

## Critère de réussite

Vous pouvez identifier les 5 piliers d'une composition dans n'importe quelle équipe et évaluer son équilibre global (AD/AP, frontline, utility).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quels sont les risques d'une composition full AD ?",
      "L'équipe manque de portée",
      "L'ennemi peut stacker l'armure et devenir très résistant",
      "Les dégâts sont trop lents",
      "Il n'y a aucun risque particulier",
      'b',
      "Une composition full AD permet à l'ennemi d'empiler uniquement l'armure, réduisant drastiquement les dégâts de toute l'équipe."
    ),
    createQuestion(
      "Quel est le rôle principal d'un tank dans une composition ?",
      "Faire le plus de dégâts possible",
      "Absorber les dégâts et protéger les alliés",
      "Apporter de la vision sur la carte",
      "Split-push sur les lanes latérales",
      'b',
      "Le tank absorbe les dégâts ennemis et crée de l'espace pour que les carries puissent dealer leurs dégâts en sécurité."
    ),
    createQuestion(
      "Qu'est-ce que le 'peel' dans une composition d'équipe ?",
      "L'action d'initier un combat",
      "La protection des carries contre les menaces ennemies",
      "Le fait de push les lanes",
      "L'élimination des wards ennemis",
      'b',
      "Le peel consiste à utiliser ses capacités pour protéger les carries arrière des assassins et bruisers ennemis."
    ),
    createQuestion(
      "Pourquoi est-il important d'avoir de l'utility dans une équipe ?",
      "Pour faire plus de dégâts",
      "Pour avoir des soins, boucliers et contrôle de foule",
      "Pour détruire les tourelles plus vite",
      "Pour farmer plus efficacement",
      'b',
      "L'utility (soins, boucliers, CC) permet à l'équipe de sustain dans les combats prolongés et de contrôler les ennemis."
    ),
    createQuestion(
      "Quel champion est un exemple typique de tank/frontline ?",
      "Jinx",
      "Zed",
      "Ornn",
      "Soraka",
      'c',
      "Ornn est un tank classique avec beaucoup de résistances, CC, et la capacité d'engager pour son équipe."
    ),
    createQuestion(
      "Une composition équilibrée devrait idéalement avoir :",
      "5 carries pour maximiser les dégâts",
      "Un mélange de tank, DPS AD, DPS AP et utility",
      "Uniquement des champions à portée",
      "Le maximum de CC possible",
      'b',
      "L'équilibre entre les différents types de champions permet de couvrir toutes les situations de jeu."
    ),
    createQuestion(
      "Qu'est-ce qui différencie l'engage du peel ?",
      "L'engage est défensif, le peel offensif",
      "L'engage initie les combats, le peel protège les alliés",
      "Ce sont des termes synonymes",
      "L'engage concerne les mages, le peel les tanks",
      'b',
      "L'engage sert à démarrer les combats favorablement, tandis que le peel protège les carries des menaces."
    ),
    createQuestion(
      "Quel problème pose une équipe sans frontline ?",
      "Manque de dégâts",
      "Les carries sont exposés et vulnérables",
      "Impossible de prendre les objectifs",
      "La vision est insuffisante",
      'b',
      "Sans frontline pour absorber les dégâts, les carries sont directement ciblés et ne peuvent pas dealer leurs dégâts."
    ),
    createQuestion(
      "Quelle composition est la plus équilibrée ?",
      "Zed, Talon, Yasuo, Draven, Pyke",
      "Ornn, Lee Sin, Syndra, Jinx, Thresh",
      "Lux, Xerath, Ziggs, Vel'Koz, Karma",
      "Vayne, Kai'Sa, Ezreal, Lucian, Senna",
      'b',
      "Ornn (tank), Lee Sin (AD jungle), Syndra (AP), Jinx (ADC), Thresh (utility) offre un bon équilibre AD/AP avec frontline."
    ),
    createQuestion(
      "Pourquoi le support apporte-t-il de la vision à l'équipe ?",
      "C'est son unique responsabilité",
      "La vision aide à prendre des décisions stratégiques et éviter les embuscades",
      "Pour compenser son manque de dégâts",
      "Uniquement en début de partie",
      'b',
      "La vision permet à toute l'équipe d'avoir l'information nécessaire pour jouer de manière proactive et éviter les pièges."
    ),
  ]
);
