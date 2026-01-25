import { createModule, createQuestion } from '../utils';

export const module11TowerPlates = createModule(
  'Plates de tourelle',
  'tower-plates',
  "Système de plaques d'or sur les tourelles",
  11,
  // Theory Content
  `## Les plates de tourelle

Les **plates** (plaques) sont un système qui récompense la prise de dégâts sur les tourelles extérieures pendant les **14 premières minutes**.

## Comment ça fonctionne

Système de plates :
- Chaque tourelle extérieure a **5 plates**
- Chaque plate vaut **160 or** (partagé si plusieurs)
- Les plates tombent à **14:00** exactement
- Après une plate, la tourelle gagne de l'**armure**

## Valeur totale

Ce que ça représente :
- 5 plates = **800 or** sur une tourelle
- Partagé entre ceux qui participent
- Plus vous en prenez tôt, mieux c'est
- Équivalent à plusieurs kills

## Stratégies pour les plates

Comment en prendre plus :
- **Poussez** quand l'ennemi back
- Utilisez le **Herald** pour détruire des plates
- Après un **kill**, frappez la tourelle
- Coordonnez avec le jungler

## La résistance croissante

La tourelle se renforce :
- Après chaque plate, +**35 armure**
- Plus dur de prendre les dernières
- Plusieurs joueurs = plus efficace
- Le **Herald** ignore cette armure

## Timer des plates

Importance du 14:00 :
- Les plates **disparaissent** à 14:00
- Concentrez les efforts avant ce timer
- Après 14:00, seule la tourelle compte
- Planifiez vos actions en conséquence`,

  // Practice Instructions
  `## Objectif

Comprendre et exploiter le système de plates pour gagner de l'or.

## Étapes

1. Observez les 5 barres sur la tourelle ennemie
2. Quand l'ennemi back, poussez et frappez la tourelle
3. Prenez au moins 1-2 plates
4. Notez l'or gagné (160 par plate)
5. Soyez attentif au timer de 14:00

## Critère de réussite

Vous prenez régulièrement 2-3 plates avant 14:00 dans vos parties.`,

  // Questions
  [
    createQuestion(
      "Combien de plates a une tourelle extérieure ?",
      "3 plates",
      "5 plates",
      "10 plates",
      "Aucune",
      'b',
      "Chaque tourelle extérieure a 5 plates."
    ),
    createQuestion(
      "Combien d'or vaut une plate ?",
      "50 or",
      "100 or",
      "160 or",
      "300 or",
      'c',
      "Chaque plate vaut 160 or."
    ),
    createQuestion(
      "À quelle minute disparaissent les plates ?",
      "10:00",
      "14:00",
      "20:00",
      "Jamais",
      'b',
      "Les plates tombent à exactement 14:00."
    ),
    createQuestion(
      "Que se passe-t-il après avoir pris une plate ?",
      "Rien",
      "La tourelle gagne de l'armure",
      "L'ennemi gagne de l'or",
      "La partie se termine",
      'b',
      "Après chaque plate, la tourelle gagne +35 armure."
    ),
    createQuestion(
      "Combien valent toutes les plates d'une tourelle ?",
      "500 or",
      "800 or",
      "1000 or",
      "1500 or",
      'b',
      "5 plates × 160 or = 800 or total."
    ),
    createQuestion(
      "Le Herald est-il utile pour les plates ?",
      "Non",
      "Oui, il ignore l'armure bonus",
      "Il les détruit instantanément",
      "Il les répare",
      'b',
      "Le Herald ignore l'armure bonus de la tourelle."
    ),
    createQuestion(
      "Quand prendre des plates ?",
      "Après 14:00",
      "Quand l'ennemi n'est pas en lane",
      "Jamais",
      "Seulement en late game",
      'b',
      "Profitez des backs ennemis ou des kills pour prendre des plates."
    ),
    createQuestion(
      "L'or des plates est-il partagé ?",
      "Non, tout pour le dernier coup",
      "Oui, entre ceux qui participent",
      "Seulement en duo",
      "Jamais partagé",
      'b',
      "L'or est partagé entre les champions proches qui ont participé."
    ),
    createQuestion(
      "5 plates équivalent à combien de kills environ ?",
      "1 kill",
      "2-3 kills",
      "5 kills",
      "10 kills",
      'b',
      "800 or de plates ≈ 2-3 kills en valeur."
    ),
    createQuestion(
      "Après 14:00, peut-on encore prendre des plates ?",
      "Oui",
      "Non, elles disparaissent",
      "Seulement sur les tourelles intérieures",
      "Ça dépend",
      'b',
      "Les plates disparaissent complètement à 14:00."
    ),
  ]
);
