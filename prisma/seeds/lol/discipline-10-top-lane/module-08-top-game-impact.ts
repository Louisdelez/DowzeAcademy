import { createModule, createQuestion } from '../utils';

export const module08TopGameImpact = createModule(
  "Impact du top sur la partie",
  'top-game-impact',
  "Comment un top laner influence le résultat",
  8,
  // Theory Content
  `## L'impact du Top Laner

Bien que le top soit **isolé**, un bon top laner peut avoir un impact **majeur** sur la partie. Voici comment.

## Impact en early game

Contribution précoce :
- Gagner ou **survivre** la lane
- Aider aux **invades** et contests
- Prendre le **Herald** avec le jungler
- **TP** pour aider les autres lanes

## Impact en mid game

Contribution intermédiaire :
- **Split-push** pour créer de la pression
- **Téléport** dans les combats
- Prendre les **tourelles** top
- Contrôler la **side lane**

## Impact en late game

Contribution tardive :
- **Engager** ou **peel** en teamfight
- Pression constante en **split**
- Présence sur les **objectifs**
- **Tanking** ou **damage** selon le champion

## Méthodes d'impact

Différentes façons d'influencer :
- **Dominer** la lane et snowball
- **Roam** et aider mid/jungle
- **Split** pour obliger des rotations
- **Teamfight** avec des ultimates puissantes

## Éviter l'impact négatif

Ce qui ruine votre impact :
- **Mourir** inutilement (donner du shutdown)
- **Ignorer** les objectifs
- **Tilt** et mauvaise attitude
- Ne pas **s'adapter** à l'état de la partie

## La mentalité gagnante

Comment avoir de l'impact :
- Restez **calme** même si behind
- **Cherchez** les opportunités
- **Communiquez** avec l'équipe
- Jouez pour **gagner**, pas pour dominer la lane`,

  // Practice Instructions
  `## Objectif

Comprendre et maximiser votre impact sur la partie en tant que top laner.

## Étapes

1. Identifiez comment vous pouvez avoir de l'impact (split, teamfight, roam)
2. Jouez pour gagner la partie, pas juste votre lane
3. Utilisez Teleport stratégiquement
4. Participez aux objectifs et aux fights importants
5. Évitez les morts inutiles qui réduisent votre impact

## Critère de réussite

Vous contribuez à la victoire d'une partie même si vous n'avez pas dominé votre lane.`,

  // Questions
  [
    createQuestion(
      "Le top laner peut-il avoir de l'impact malgré l'isolement ?",
      "Non, c'est impossible",
      "Oui, de plusieurs façons",
      "Seulement les pros",
      "Seulement avec certains champions",
      'b',
      "Un bon top laner influence la partie de multiples façons."
    ),
    createQuestion(
      "Comment avoir de l'impact en early game ?",
      "Ignorer tout",
      "Gagner la lane, aider aux invades, prendre Herald",
      "AFK farm",
      "Mourir beaucoup",
      'b',
      "Early impact vient de la lane, des invades et du Herald."
    ),
    createQuestion(
      "Le split-push crée de l'impact comment ?",
      "Ça ne marche pas",
      "Force l'ennemi à vous répondre, crée des opportunités",
      "Seulement en ranked",
      "En mourant",
      'b',
      "Le split crée de la pression et force des choix difficiles."
    ),
    createQuestion(
      "TP en teamfight crée de l'impact car ?",
      "Rien",
      "Crée des supériorités numériques et des surprises",
      "Donne de l'or",
      "Fait peur",
      'b',
      "Un bon TP peut retourner un combat."
    ),
    createQuestion(
      "Qu'est-ce qui réduit votre impact ?",
      "Gagner la lane",
      "Mourir inutilement et donner du shutdown",
      "Prendre des objectifs",
      "Aider l'équipe",
      'b',
      "Les morts inutiles réduisent votre impact et aident l'ennemi."
    ),
    createQuestion(
      "Faut-il jouer pour gagner la lane ou la partie ?",
      "La lane uniquement",
      "La partie avant tout",
      "Ni l'un ni l'autre",
      "Ça dépend du champion",
      'b',
      "L'objectif est de gagner la partie, pas juste la lane."
    ),
    createQuestion(
      "Un top behind peut-il avoir de l'impact ?",
      "Non, c'est fini",
      "Oui, en splitant ou en étant utile en teamfight",
      "Jamais",
      "Seulement avec TP",
      'b',
      "Même behind, vous pouvez contribuer d'autres façons."
    ),
    createQuestion(
      "Le tilt affecte l'impact comment ?",
      "Pas d'effet",
      "Réduit la prise de décision et la performance",
      "Améliore le jeu",
      "Seulement les autres joueurs",
      'b',
      "Le tilt diminue votre capacité à avoir un impact positif."
    ),
    createQuestion(
      "Quelle mentalité avoir pour maximiser l'impact ?",
      "Jouer pour soi",
      "Rester calme et chercher les opportunités",
      "Blâmer l'équipe",
      "AFK si la lane est perdue",
      'b',
      "Restez calme et concentré sur les opportunités."
    ),
    createQuestion(
      "Communiquer avec l'équipe aide car ?",
      "Ça ne sert à rien",
      "Permet de coordonner et multiplier l'impact",
      "C'est obligatoire",
      "Seulement en pro",
      'b',
      "La communication permet une meilleure coordination."
    ),
  ]
);
