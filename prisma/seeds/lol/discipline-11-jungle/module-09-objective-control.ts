import { createModule, createQuestion } from '../utils';

export const module09ObjectiveControl = createModule(
  'Contrôle des objectifs',
  'objective-control',
  'Dragon, Herald et Baron timing',
  9,
  // Theory Content
  `## Contrôle des Objectifs

Le **jungler** est le principal responsable du contrôle des **objectifs** majeurs : Dragon, Herald et Baron.

## Dragon

L'objectif sud :
- Spawn à **5:00**
- Respawn **5 minutes** après la mort
- 4 dragons = **Dragon Soul** (buff permanent)
- 6 dragons = **Elder Dragon** (execute)

## Rift Herald

L'objectif nord :
- Spawn à **14:00**
- Despawn à **19:45** (remplacé par Baron)
- S'utilise pour prendre des **tourelles**
- Maximum **2 Heralds** par partie

## Baron Nashor

L'objectif le plus important :
- Spawn à **20:00**
- Respawn **6 minutes** après la mort
- Donne **buff de baron** à toute l'équipe
- Buff = sbires renforcés, stats

## Préparer un objectif

Checklist avant :
- **Pousser** les lanes pour avoir la prio
- Avoir de la **vision** autour
- Savoir où sont les **ennemis**
- Avoir **Smite** disponible

## Timing des prises

Quand prendre un objectif :
- Après un **kill** sur l'équipe ennemie
- Quand l'ennemi est **visible loin**
- Après avoir **gagné** un fight
- Quand c'est **free** (pas de contest)`,

  // Practice Instructions
  `## Objectif

Apprendre à contrôler et prendre les objectifs majeurs.

## Étapes

1. Notez les timers des objectifs (5:00 Dragon, 14:00 Herald, 20:00 Baron)
2. Préparez l'objectif en wardant la zone
3. Assurez-vous d'avoir la prio de vos laners
4. Communiquez avec l'équipe
5. Prenez l'objectif quand c'est safe

## Critère de réussite

Vous prenez un Dragon ou Herald en contrôlant la vision et sans vous faire contest.`,

  // Questions
  [
    createQuestion(
      "À quelle minute spawn le premier Dragon ?",
      "3:00",
      "5:00",
      "10:00",
      "1:30",
      'b',
      "Le premier Dragon spawn à 5:00."
    ),
    createQuestion(
      "À quelle minute spawn le Rift Herald ?",
      "5:00",
      "14:00",
      "20:00",
      "10:00",
      'b',
      "Le Rift Herald spawn à 14:00."
    ),
    createQuestion(
      "À quelle minute spawn Baron Nashor ?",
      "14:00",
      "20:00",
      "25:00",
      "30:00",
      'b',
      "Baron spawn à 20:00."
    ),
    createQuestion(
      "Combien de dragons pour le Dragon Soul ?",
      "2",
      "3",
      "4",
      "5",
      'c',
      "4 dragons donnent le Dragon Soul."
    ),
    createQuestion(
      "Combien de temps avant le respawn du Dragon ?",
      "3 minutes",
      "5 minutes",
      "6 minutes",
      "10 minutes",
      'b',
      "Le Dragon respawn après 5 minutes."
    ),
    createQuestion(
      "Le Baron donne quoi à l'équipe ?",
      "De l'or seulement",
      "Buff de Baron (stats + sbires renforcés)",
      "Un skin",
      "Rien",
      'b',
      "Baron donne un buff puissant avec sbires améliorés."
    ),
    createQuestion(
      "Quand le Herald despawn-t-il ?",
      "25:00",
      "19:45",
      "20:00",
      "Il ne despawn pas",
      'b',
      "Le Herald despawn à 19:45, remplacé par Baron."
    ),
    createQuestion(
      "Combien de Heralds maximum par partie ?",
      "1",
      "2",
      "3",
      "Illimité",
      'b',
      "Maximum 2 Heralds peuvent spawn par partie."
    ),
    createQuestion(
      "Quand prendre un objectif ?",
      "N'importe quand",
      "Après un kill ou quand l'ennemi ne peut pas contest",
      "Jamais",
      "Seulement en late game",
      'b',
      "Prenez les objectifs quand c'est safe et non contesté."
    ),
    createQuestion(
      "Que faire avant de commencer un objectif ?",
      "Rien",
      "Warder, pousser les lanes, vérifier Smite",
      "Full clear",
      "Back en base",
      'b',
      "Préparez la zone avant de prendre l'objectif."
    ),
  ]
);
