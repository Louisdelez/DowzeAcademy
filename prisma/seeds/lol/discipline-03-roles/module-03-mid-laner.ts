import { createModule, createQuestion } from '../utils';

export const module03MidLaner = createModule(
  'Mid laner',
  'mid-laner-role',
  'Mage ou assassin au centre de la carte',
  3,
  // Theory Content
  `## Le rôle du Mid Laner

Le **Mid Laner** occupe la voie centrale de la carte. Sa position stratégique lui permet d'avoir un **impact sur toute la carte** grâce aux roams.

## Caractéristiques du rôle

Le Mid Laner se distingue par :
- Joue sur la lane la plus **courte** (plus sûre)
- Position **centrale** idéale pour aider les autres lanes
- Souvent des champions à **burst** (dégâts rapides)
- Peut **roam** facilement vers Top ou Bot

## Types de champions Mid

On trouve principalement :
- **Mages** : Dégâts magiques à distance (Lux, Syndra)
- **Assassins** : Élimination rapide des cibles fragiles (Zed, Katarina)
- **Control Mages** : Contrôle de zone (Orianna, Viktor)
- Quelques **bruisers** ou **ADC** atypiques

## Responsabilités en jeu

Le Mid Laner doit :
- **Farmer** efficacement sur la lane courte
- **Contrôler la vague** pour pouvoir roam
- Aider le **jungler** sur les objectifs de rivière
- **Roamer** pour créer des avantages numériques
- **Dealer des dégâts** en teamfight

## Récapitulatif

- Mid = lane centrale et courte
- Champions à burst : mages et assassins
- Position idéale pour roam et aider les objectifs
- Haut potentiel de carry (dégâts)
- Coordination avec le jungler essentielle`,

  // Practice Instructions
  `## Objectif

Comprendre le rôle et la position stratégique du Mid Laner.

## Étapes

1. Lancez une partie contre l'IA en choisissant Mid
2. Prenez un mage simple (Lux ou Annie recommandé)
3. Observez la longueur de la lane (plus courte)
4. Farmez et notez la proximité avec les deux côtés de la jungle
5. Après avoir push votre vague, roamez vers Bot ou Top
6. Aidez votre jungler sur le Scuttle Crab ou Dragon

## Critère de réussite

Vous comprenez la position centrale du Mid et comment utiliser les roams pour aider vos coéquipiers.`,

  // Questions
  [
    createQuestion(
      "Où joue le Mid Laner ?",
      "Sur la voie du haut",
      "Au centre de la carte",
      "En bas avec le Support",
      "Dans la jungle",
      'b',
      "Le Mid Laner occupe la voie centrale (Mid Lane)."
    ),
    createQuestion(
      "Pourquoi la Mid Lane est-elle considérée comme sûre ?",
      "Elle a plus de tourelles",
      "Elle est la plus courte",
      "Elle a des murs protecteurs",
      "Le jungler y reste",
      'b',
      "La Mid Lane est la plus courte, réduisant la distance de fuite vers la tourelle."
    ),
    createQuestion(
      "Qu'est-ce qu'un roam ?",
      "Rester sur sa lane",
      "Se déplacer vers une autre lane pour aider",
      "Farmer les sbires",
      "Recall à la base",
      'b',
      "Roamer signifie quitter temporairement sa lane pour créer un avantage ailleurs."
    ),
    createQuestion(
      "Quels types de champions jouent souvent Mid ?",
      "Tanks et Supports",
      "Mages et Assassins",
      "ADC et Enchanters",
      "Junglers uniquement",
      'b',
      "Les Mages et Assassins sont les classes dominantes en Mid Lane."
    ),
    createQuestion(
      "Qu'est-ce que le 'burst' ?",
      "Des dégâts lents mais constants",
      "Des dégâts rapides et élevés en peu de temps",
      "Des soins puissants",
      "Des boucliers",
      'b',
      "Le burst désigne la capacité à infliger beaucoup de dégâts rapidement."
    ),
    createQuestion(
      "Pourquoi le Mid Laner est-il bien placé pour aider aux objectifs ?",
      "Il a Smite",
      "Il est proche des deux entrées de la rivière",
      "Il a plus de PV",
      "Il a Téléportation",
      'b',
      "La position centrale permet d'atteindre Dragon ou Baron rapidement."
    ),
    createQuestion(
      "Qu'est-ce qu'un Control Mage ?",
      "Un mage qui contrôle les sbires",
      "Un mage qui contrôle des zones avec ses sorts",
      "Un mage qui contrôle le jungler",
      "Un mage qui ne bouge pas",
      'b',
      "Les Control Mages utilisent leurs sorts pour contrôler l'espace (ex: Orianna)."
    ),
    createQuestion(
      "Pourquoi push la vague avant de roam ?",
      "Pour gagner de l'or",
      "Pour que l'ennemi perde des sbires s'il vous suit",
      "C'est obligatoire",
      "Pour faire plaisir aux sbires",
      'b',
      "Push avant de roam force l'ennemi à choisir : perdre CS ou vous suivre."
    ),
    createQuestion(
      "Avec qui le Mid Laner doit-il se coordonner pour les objectifs ?",
      "Le Top Laner uniquement",
      "Le Jungler",
      "Le Support uniquement",
      "Personne",
      'b',
      "Le Mid et le Jungler travaillent ensemble pour contrôler la rivière."
    ),
    createQuestion(
      "Quel est l'avantage de jouer un assassin Mid ?",
      "Plus de résistance",
      "Capacité à éliminer rapidement les cibles fragiles",
      "Meilleur farm",
      "Plus de soins",
      'b',
      "Les assassins excellent pour éliminer les ADC et mages ennemis."
    ),
  ]
);
