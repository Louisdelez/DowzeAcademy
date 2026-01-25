import { createModule, createQuestion } from '../utils';

export const module01ThreeLanes = createModule(
  'Les trois lanes',
  'three-lanes',
  'Top, Mid et Bot : les trois voies principales de la carte',
  1,
  // Theory Content
  `## La structure de la carte

La carte de Summoner's Rift est divisée par **trois voies principales** appelées **lanes**. Ces lanes relient les deux bases et sont les chemins où les sbires se battent.

## La Top Lane (voie du haut)

La **Top Lane** est la voie située en haut de la carte :
- C'est la lane la plus **longue** et la plus **isolée**
- Généralement occupée par un **top laner** seul
- Idéale pour les champions de duel (bruisers, tanks)
- L'aide du jungler y est moins fréquente

## La Mid Lane (voie du milieu)

La **Mid Lane** traverse le centre de la carte :
- C'est la lane la plus **courte**
- Position **centrale** permettant de roam facilement
- Généralement occupée par des **mages** ou **assassins**
- Zone très contestée pour le contrôle de la carte

## La Bot Lane (voie du bas)

La **Bot Lane** est en bas de la carte :
- Occupée par **deux joueurs** : l'ADC et le Support
- Proche du premier **Dragon**, objectif important
- Lane de duo qui demande de la coordination
- L'ADC farm pendant que le Support protège

## Récapitulatif

- **Top** = lane longue et isolée, champions solo
- **Mid** = lane courte et centrale, mages/assassins
- **Bot** = lane duo (ADC + Support), proche du Dragon
- Chaque lane a 3 tourelles de chaque côté
- Les sbires apparaissent sur les 3 lanes`,

  // Practice Instructions
  `## Objectif

Identifier et parcourir les trois lanes sur la carte.

## Étapes

1. Lancez une partie d'entraînement
2. Depuis votre base, allez sur la Top Lane (en haut)
3. Traversez toute la lane jusqu'à la base ennemie
4. Faites de même pour la Mid Lane (centre)
5. Terminez par la Bot Lane (en bas)
6. Sur la mini-carte, identifiez les 3 lanes

## Critère de réussite

Vous pouvez naviguer vers n'importe quelle lane depuis la base et les identifier sur la mini-carte.`,

  // Questions
  [
    createQuestion(
      "Combien de lanes principales possède la carte ?",
      "2 lanes",
      "3 lanes",
      "4 lanes",
      "5 lanes",
      'b',
      "La carte possède 3 lanes : Top, Mid et Bot."
    ),
    createQuestion(
      "Quelle lane est la plus longue ?",
      "Mid Lane",
      "Bot Lane",
      "Top Lane",
      "Elles sont toutes égales",
      'c',
      "La Top Lane est la plus longue et la plus isolée des trois."
    ),
    createQuestion(
      "Quelle lane est occupée par deux joueurs ?",
      "Top Lane",
      "Mid Lane",
      "Bot Lane",
      "Jungle",
      'c',
      "La Bot Lane est occupée par l'ADC et le Support."
    ),
    createQuestion(
      "Quelle lane est la plus courte ?",
      "Top Lane",
      "Mid Lane",
      "Bot Lane",
      "Elles sont toutes égales",
      'b',
      "La Mid Lane est la plus courte, ce qui la rend plus sûre mais plus contestée."
    ),
    createQuestion(
      "Quels types de champions jouent généralement mid ?",
      "Tanks et supports",
      "Mages et assassins",
      "ADC et supports",
      "Junglers uniquement",
      'b',
      "Les mages et assassins profitent de la position centrale pour roam."
    ),
    createQuestion(
      "Pourquoi la Bot Lane est-elle importante ?",
      "Elle est près du Baron",
      "Elle est proche du Dragon",
      "Elle a plus de tourelles",
      "Elle donne plus d'or",
      'b',
      "La Bot Lane est proche du Dragon, objectif majeur du early/mid game."
    ),
    createQuestion(
      "Qu'est-ce qu'une lane en LoL ?",
      "Une zone de jungle",
      "Un chemin où les sbires s'affrontent",
      "Une rivière",
      "Un buisson",
      'b',
      "Une lane est un chemin principal où les sbires des deux équipes combattent."
    ),
    createQuestion(
      "Combien de tourelles protègent chaque lane (par équipe) ?",
      "2 tourelles",
      "3 tourelles",
      "4 tourelles",
      "5 tourelles",
      'b',
      "Chaque lane a 3 tourelles par équipe : T1, T2 et T3 (inhibiteur)."
    ),
    createQuestion(
      "Pourquoi le mid laner peut-il facilement aider les autres lanes ?",
      "Il a plus de mobilité",
      "Sa position centrale lui permet d'aller partout rapidement",
      "Il a plus de dégâts",
      "Il a un sort spécial",
      'b',
      "La position centrale de la mid permet de roam vers top ou bot rapidement."
    ),
    createQuestion(
      "Qui joue généralement seul en Top Lane ?",
      "L'ADC",
      "Le Support",
      "Le Top Laner (bruiser/tank)",
      "Le Mid Laner",
      'c',
      "Le Top Laner joue seul et s'adapte aux duels isolés."
    ),
  ]
);
