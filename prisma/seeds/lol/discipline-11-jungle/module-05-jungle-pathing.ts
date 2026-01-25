import { createModule, createQuestion } from '../utils';

export const module05JunglePathing = createModule(
  'Pathing adaptatif',
  'jungle-pathing',
  "Adapter sa route selon la partie",
  5,
  // Theory Content
  `## Le Pathing Adaptatif

Le **pathing** est l'art de choisir votre chemin dans la jungle selon l'état de la partie. Un bon pathing maximise votre impact.

## Facteurs à considérer

Ce qui influence votre path :
- État des **lanes** (qui pousse, qui est low)
- Position du **jungler ennemi**
- **Objectifs** qui arrivent
- Votre **champion** et ses forces

## Pathing vers les lanes gankables

Aller où l'action est :
- Si une lane est **poussée**, path vers elle
- Si une lane a **kill pressure**, priorisez-la
- Si l'ennemi n'a **pas Flash**, c'est une cible
- Ignorez les lanes **ingankables**

## Pathing selon l'ennemi

Réagir au jungler adverse :
- **Miroir** : Aller du même côté pour counter-gank
- **Opposite** : Aller de l'autre côté pour éviter
- **Invade** : Entrer dans sa jungle si vous le battez
- **Vertical** : Chacun prend un côté différent

## Pathing vers les objectifs

Se positionner pour les objectifs :
- Path **vers Dragon** quand il spawn bientôt
- Path **vers Herald** côté top
- Avoir les **camps** clear pour avoir du temps

## Erreurs de pathing

Ce qu'il ne faut pas faire :
- **Full clear** quand une lane est gankable
- Ignorer les **objectifs** pour farm
- Être toujours **prévisible**
- Path vers des lanes **perdues** (2v1 pas possible)`,

  // Practice Instructions
  `## Objectif

Apprendre à adapter votre pathing selon la situation.

## Étapes

1. Au début du clear, observez les lanes
2. Identifiez quelle lane est la plus gankable
3. Adaptez votre route pour y arriver
4. Observez le jungler ennemi et réagissez
5. Soyez près des objectifs quand ils spawn

## Critère de réussite

Vous adaptez votre route en fonction de l'état des lanes et pas seulement en full clearing.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le pathing ?",
      "Ganker",
      "Choisir son chemin dans la jungle selon la situation",
      "Farm les camps",
      "Prendre des objectifs",
      'b',
      "Le pathing est l'art de choisir sa route optimale."
    ),
    createQuestion(
      "Si une lane est poussée par l'ennemi, que faire ?",
      "L'ignorer",
      "Path vers cette lane pour ganker",
      "Full clear",
      "AFK",
      'b',
      "Une lane poussée est une opportunité de gank."
    ),
    createQuestion(
      "Qu'est-ce que le pathing miroir ?",
      "Éviter le jungler ennemi",
      "Aller du même côté que le jungler ennemi",
      "Farmer sa jungle",
      "Prendre ses buffs",
      'b',
      "Miroir pathing = même côté pour counter-gank."
    ),
    createQuestion(
      "Quand path vers Dragon ?",
      "Jamais",
      "Quand il spawn bientôt",
      "Seulement après 20 minutes",
      "Quand il est mort",
      'b',
      "Soyez positionné vers Dragon quand il arrive."
    ),
    createQuestion(
      "Faut-il ganker une lane qui a perdu dur ?",
      "Oui, toujours",
      "Souvent non, le 2v1 peut échouer",
      "Jamais",
      "Seulement en ranked",
      'b',
      "Une lane très behind peut ne pas être gankable."
    ),
    createQuestion(
      "Qu'est-ce qu'un invade ?",
      "Rester dans sa jungle",
      "Entrer dans la jungle ennemie",
      "Ganker",
      "Prendre Baron",
      'b',
      "Invade = entrer dans la jungle adverse."
    ),
    createQuestion(
      "Le pathing opposite sert à ?",
      "Chercher le fight",
      "Éviter le jungler ennemi",
      "Ganker ensemble",
      "Rien",
      'b',
      "Opposite pathing évite les confrontations."
    ),
    createQuestion(
      "Pourquoi ne pas toujours full clear ?",
      "C'est le mieux",
      "Vous ratez des opportunités de gank",
      "Ça donne moins d'or",
      "Les camps sont trop durs",
      'b',
      "Full clear systématique ignore les opportunités de la carte."
    ),
    createQuestion(
      "Le vertical jungling c'est quoi ?",
      "Un type de gank",
      "Chaque jungler prend un côté de la carte",
      "Farmer verticalement",
      "Sauter par-dessus les murs",
      'b',
      "Vertical jungling = chacun contrôle un côté différent."
    ),
    createQuestion(
      "Un pathing prévisible est-il bon ?",
      "Oui",
      "Non, l'ennemi peut vous exploiter",
      "Ça n'a pas d'importance",
      "Seulement en ranked",
      'b',
      "Être prévisible permet à l'ennemi de vous counter."
    ),
  ]
);
