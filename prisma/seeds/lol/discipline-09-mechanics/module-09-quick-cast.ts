import { createModule, createQuestion } from '../utils';

export const module09QuickCast = createModule(
  'Quick cast / Smart cast',
  'quick-cast',
  'Lancer les sorts instantanément',
  9,
  // Theory Content
  `## Quick Cast (Smart Cast)

Le **Quick Cast** permet de lancer des sorts instantanément sans cliquer deux fois, rendant vos combos plus rapides.

## Comment ça fonctionne

Différence avec le cast normal :
- **Normal** : Appuyer sur la touche → Viser → Cliquer
- **Quick Cast** : Appuyer sur la touche → Sort lancé immédiatement
- Le sort part vers la position du **curseur**

## Avantages du Quick Cast

Pourquoi l'utiliser :
- Combos plus **rapides**
- Moins de **clics** à faire
- Réaction plus **immédiate**
- **Muscle memory** plus facile

## Inconvénients

Points négatifs :
- Pas d'**indicateur de portée** visible
- Plus facile de **rater** un sort
- Temps d'adaptation nécessaire
- Certains sorts sont mieux sans (Veigar E, Viktor E)

## Quick Cast avec indicateurs

Option intermédiaire :
- Montre l'**indicateur** en maintenant appuyé
- Lance le sort au **relâchement**
- Bon **compromis** pour apprendre
- Légèrement plus lent que le Quick Cast pur

## Configuration

Comment le configurer :
- Allez dans **Paramètres → Raccourcis**
- Activez Quick Cast pour **chaque sort**
- Ou utilisez **Quick Cast avec indicateurs**
- Certains gardent des sorts en normal (skillshots complexes)`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser le Quick Cast pour des combos plus rapides.

## Étapes

1. Allez dans Paramètres → Raccourcis
2. Activez le Quick Cast pour Q, W, E, R
3. Testez en Practice Tool
4. Si trop dur, essayez Quick Cast avec indicateurs
5. Gardez certains sorts en normal si nécessaire

## Critère de réussite

Vous utilisez le Quick Cast de façon fluide et vos combos sont plus rapides.`,

  // Questions
  [
    createQuestion(
      "Que fait le Quick Cast ?",
      "Ralentit les sorts",
      "Lance le sort instantanément vers le curseur",
      "Annule les sorts",
      "Augmente les dégâts",
      'b',
      "Le Quick Cast lance le sort immédiatement vers le curseur."
    ),
    createQuestion(
      "Quel avantage principal du Quick Cast ?",
      "Plus de dégâts",
      "Combos plus rapides",
      "Plus de portée",
      "Moins de mana",
      'b',
      "Le Quick Cast rend les combos plus rapides."
    ),
    createQuestion(
      "Quel inconvénient du Quick Cast ?",
      "Plus lent",
      "Pas d'indicateur de portée visible",
      "Plus cher en mana",
      "Impossible de viser",
      'b',
      "Sans indicateur visible, il est plus facile de mal juger la portée."
    ),
    createQuestion(
      "Quick Cast avec indicateurs fait quoi ?",
      "Désactive Quick Cast",
      "Montre l'indicateur en maintenant, lance au relâchement",
      "Rien de spécial",
      "Augmente les dégâts",
      'b',
      "Cette option montre l'indicateur pendant qu'on maintient la touche."
    ),
    createQuestion(
      "Où configurer le Quick Cast ?",
      "Dans le shop",
      "Paramètres → Raccourcis",
      "Impossible à configurer",
      "Au début de la partie",
      'b',
      "Le Quick Cast se configure dans les paramètres de raccourcis."
    ),
    createQuestion(
      "Tous les sorts doivent-ils être en Quick Cast ?",
      "Oui, obligatoire",
      "Non, certains peuvent rester en normal",
      "Jamais de Quick Cast",
      "Seulement l'ultime",
      'b',
      "Certains sorts complexes sont parfois gardés en cast normal."
    ),
    createQuestion(
      "Le E de Veigar est parfois gardé en normal car ?",
      "Il est nul",
      "C'est un placement précis qui bénéficie de l'indicateur",
      "Pas de raison",
      "Bug du jeu",
      'b',
      "Le placement de la cage de Veigar nécessite de la précision."
    ),
    createQuestion(
      "Comment le sort sait où aller avec Quick Cast ?",
      "Au hasard",
      "Vers la position du curseur",
      "Toujours vers l'ennemi le plus proche",
      "Vers le centre de l'écran",
      'b',
      "Le sort est lancé vers l'endroit où pointe le curseur."
    ),
    createQuestion(
      "Le Quick Cast convient mieux pour quels champions ?",
      "Les tanks uniquement",
      "Les champions avec des combos rapides",
      "Aucun",
      "Les supports",
      'b',
      "Les champions avec des combos bénéficient le plus du Quick Cast."
    ),
    createQuestion(
      "Faut-il du temps pour s'adapter au Quick Cast ?",
      "Non, c'est instantané",
      "Oui, il faut un peu de pratique",
      "Impossible de s'adapter",
      "Ça dépend de la météo",
      'b',
      "Il faut un temps d'adaptation pour maîtriser le Quick Cast."
    ),
  ]
);
