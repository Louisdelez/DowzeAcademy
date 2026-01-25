import { createModule, createQuestion } from '../utils';

export const module03SplitPushing = createModule(
  'Split-push',
  'split-pushing',
  'Pousser seul pour créer de la pression',
  3,
  // Theory Content
  `## Le Split-Push

Le **split-push** consiste à pousser une lane seul pendant que votre équipe fait pression ailleurs. C'est une stratégie puissante mais risquée.

## Pourquoi split-push ?

Avantages de la stratégie :
- Crée de la **pression** sur plusieurs fronts
- Force l'ennemi à faire des **choix** difficiles
- Permet de **prendre des tourelles** seul
- Utilise l'avantage de **dueling** de certains champions

## Champions de split-push

Bons split-pushers :
- **Fiora** : Duel incontestable, %HP true damage
- **Jax** : Scale fort, bat tout le monde en 1v1
- **Tryndamere** : Ultime l'empêche de mourir
- **Yorick** : Prend des tourelles très vite
- **Camille** : Mobile et forte en 1v1

## Conditions pour split

Quand split-push :
- Vous **gagnez** le 1v1 contre qui vient
- Votre équipe peut **tenir** 4v4 ou 4v5
- Vous avez la **vision** nécessaire
- Il y a des **objectifs** que l'équipe peut prendre

## Communication essentielle

Ce qu'il faut faire :
- **Ping** que vous split push
- Votre équipe ne doit **pas engager** 4v5
- Ils doivent appliquer de la **pression** ailleurs
- Reculer si **2+ ennemis** viennent

## Les erreurs courantes

Ce qu'il ne faut pas faire :
- Split sans **vision** → mourir ganké
- Équipe qui **engage** sans vous → 4v5 perdu
- Split quand vous **perdez le 1v1**
- Ignorer les **objectifs** importants`,

  // Practice Instructions
  `## Objectif

Comprendre et pratiquer le split-push efficacement.

## Étapes

1. Choisissez un champion de split (Jax, Fiora, Tryndamere)
2. Assurez-vous de gagner votre lane
3. Poussez une side lane seul
4. Placez des wards pour voir les ennemis qui viennent
5. Reculez si 2+ ennemis arrivent

## Critère de réussite

Vous prenez une tourelle en split push sans mourir et créez un avantage.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le split-push ?",
      "Grouper avec l'équipe",
      "Pousser seul une lane pour créer de la pression",
      "Farm la jungle",
      "Défendre la base",
      'b',
      "Split-push = pousser une lane seul pendant que l'équipe fait pression ailleurs."
    ),
    createQuestion(
      "Quel champion est un excellent split-pusher ?",
      "Soraka",
      "Fiora",
      "Janna",
      "Lux",
      'b',
      "Fiora est l'une des meilleures split-pusheuses du jeu."
    ),
    createQuestion(
      "Quand split-push ?",
      "Toujours",
      "Quand vous gagnez le 1v1 et l'équipe peut tenir",
      "Jamais",
      "Seulement en early game",
      'b',
      "Split quand vous gagnez le duel et que l'équipe peut jouer 4v4."
    ),
    createQuestion(
      "Pourquoi la vision est importante pour split ?",
      "Pas importante",
      "Pour voir si des ennemis viennent vous collapse",
      "Pour le style",
      "Pour farm",
      'b',
      "La vision vous permet de voir arriver les ennemis et de fuir."
    ),
    createQuestion(
      "Que doit faire votre équipe pendant que vous split ?",
      "Engager 4v5",
      "Appliquer de la pression sans engager",
      "AFK",
      "Aller split aussi",
      'b',
      "L'équipe doit faire pression pour occuper les ennemis."
    ),
    createQuestion(
      "Si 2+ ennemis viennent vous arrêter, que faire ?",
      "All-in",
      "Reculer et laisser l'équipe prendre des objectifs",
      "Rester et mourir",
      "Ignorer",
      'b',
      "Si plusieurs viennent, reculez - c'est un trade objectif favorable."
    ),
    createQuestion(
      "Tryndamere est bon en split car ?",
      "Il est tank",
      "Son ultime l'empêche de mourir pendant 5 secondes",
      "Il a beaucoup de CC",
      "Il est ranged",
      'b',
      "L'ultime de Tryndamere lui permet de survivre et s'échapper."
    ),
    createQuestion(
      "Le split-push crée des choix difficiles pour l'ennemi car ?",
      "Rien de spécial",
      "Ils doivent choisir entre vous arrêter ou défendre ailleurs",
      "C'est facile à contrer",
      "Ça ne fait rien",
      'b',
      "L'ennemi doit diviser ses forces ou perdre des objectifs."
    ),
    createQuestion(
      "Split-push quand on perd le 1v1 est une bonne idée ?",
      "Oui",
      "Non, vous allez mourir si quelqu'un vient",
      "Ça dépend de la météo",
      "Toujours split",
      'b',
      "Si vous perdez le 1v1, évitez de split push seul."
    ),
    createQuestion(
      "Yorick est bon en split pour quelle raison ?",
      "Ses soins",
      "Sa capacité à prendre des tourelles rapidement",
      "Sa mobilité",
      "Son CC",
      'b',
      "Yorick et ses goules détruisent les tourelles très vite."
    ),
  ]
);
