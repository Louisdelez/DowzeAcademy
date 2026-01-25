import { createModule, createQuestion } from '../utils';

export const module03GameFlow = createModule(
  "Déroulement d'une partie standard",
  'game-flow',
  'Les phases de jeu : early, mid et late game',
  3,
  // Theory Content
  `## Les trois phases d'une partie

Une partie de League of Legends se divise en trois phases distinctes : l'**early game** (début), le **mid game** (milieu) et le **late game** (fin). Chaque phase a ses propres objectifs et stratégies.

## Early Game (0-15 minutes)

L'early game est la phase de **laning**. Chaque joueur reste sur sa lane pour :
- Farmer les sbires (minions) pour gagner de l'or
- Gagner de l'expérience pour monter en niveau
- Essayer de prendre l'avantage sur son adversaire direct
- Les premiers objectifs comme les dragons deviennent contestés

## Mid Game (15-25 minutes)

Le mid game commence quand les premières tourelles tombent. C'est la phase de **rotation** :
- Les joueurs commencent à se déplacer sur la carte
- Les teamfights (combats d'équipe) deviennent plus fréquents
- Les objectifs majeurs (Dragon, Herald) sont contestés
- La vision de la carte devient cruciale

## Late Game (25+ minutes)

Le late game est la phase **décisive** :
- Les champions sont au maximum de leur puissance
- Un seul teamfight peut décider de la partie
- Le Baron Nashor devient l'objectif prioritaire
- Les erreurs sont très coûteuses (temps de mort longs)

## Récapitulatif

- **Early game** = Laning phase, focus sur le farm et l'XP
- **Mid game** = Rotations, objectifs, premiers teamfights
- **Late game** = Phase décisive, champions au max, Baron prioritaire
- Chaque phase demande une approche différente
- Adapter sa stratégie selon la phase de jeu`,

  // Practice Instructions
  `## Objectif

Observer les différentes phases d'une partie et identifier les transitions.

## Étapes

1. Lancez une partie contre l'IA (niveau Intro ou Débutant)
2. Pendant l'early game (0-15 min), concentrez-vous sur le farm de votre lane
3. Observez quand les premières tourelles tombent (transition vers mid game)
4. Notez les moments où des combats d'équipe se produisent
5. Identifiez le moment où la partie bascule en late game

## Critère de réussite

Vous pouvez identifier dans quelle phase de jeu vous vous trouvez en regardant le timer et l'état des structures sur la carte.`,

  // Questions
  [
    createQuestion(
      "Quelles sont les trois phases d'une partie de LoL ?",
      "Début, combat, fin",
      "Early game, mid game, late game",
      "Laning, jungling, teamfighting",
      "Farm, push, siege",
      'b',
      "Les trois phases sont l'early game, le mid game et le late game."
    ),
    createQuestion(
      "Que fait-on principalement pendant l'early game ?",
      "On teamfight constamment",
      "On farm les sbires sur sa lane",
      "On attaque le Baron",
      "On détruit les inhibiteurs",
      'b',
      "L'early game est la phase de laning où on farm les sbires pour l'or et l'XP."
    ),
    createQuestion(
      "Qu'est-ce qui marque généralement le début du mid game ?",
      "Le premier kill de la partie",
      "La chute des premières tourelles",
      "L'apparition du Baron",
      "Le niveau 18 des champions",
      'b',
      "Le mid game commence quand les premières tourelles tombent et que les rotations commencent."
    ),
    createQuestion(
      "Pourquoi les erreurs sont-elles coûteuses en late game ?",
      "Parce qu'on perd plus d'or",
      "Parce que les temps de mort sont longs",
      "Parce que les sbires sont plus forts",
      "Parce qu'il n'y a plus de tourelles",
      'b',
      "En late game, les temps de résurrection sont très longs, permettant à l'équipe adverse de prendre des objectifs."
    ),
    createQuestion(
      "Quel objectif devient prioritaire en late game ?",
      "Le Dragon",
      "Le Baron Nashor",
      "Le Herald",
      "Les Gromp",
      'b',
      "Le Baron Nashor est l'objectif prioritaire du late game car il donne un buff puissant pour push."
    ),
    createQuestion(
      "Qu'est-ce qu'une rotation en mid game ?",
      "Tourner sur soi-même",
      "Se déplacer sur la carte pour aider d'autres lanes",
      "Changer de champion",
      "Faire tourner la caméra",
      'b',
      "Les rotations consistent à se déplacer stratégiquement pour créer des avantages numériques."
    ),
    createQuestion(
      "Pendant quelle phase les teamfights sont-ils les plus décisifs ?",
      "Early game",
      "Mid game",
      "Late game",
      "Toutes les phases également",
      'c',
      "En late game, un seul teamfight peut décider de l'issue de la partie."
    ),
    createQuestion(
      "Qu'est-ce que le 'laning' ?",
      "Créer des lanes sur la carte",
      "Rester sur sa lane pour farm et XP",
      "Détruire les lanes ennemies",
      "Changer de lane constamment",
      'b',
      "Le laning est la phase où chaque joueur reste sur sa lane assignée pour farmer."
    ),
    createQuestion(
      "Pourquoi la vision est-elle cruciale en mid game ?",
      "Pour voir les sbires",
      "Pour anticiper les rotations et mouvements ennemis",
      "Pour admirer la carte",
      "Pour trouver sa lane",
      'b',
      "La vision permet de voir les rotations ennemies et de prendre des décisions éclairées."
    ),
    createQuestion(
      "À quel moment les champions atteignent leur puissance maximale ?",
      "Dès le début de partie",
      "En mid game",
      "En late game",
      "Après 10 minutes",
      'c',
      "En late game, les champions ont tous leurs objets et sont au niveau maximum."
    ),
  ]
);
