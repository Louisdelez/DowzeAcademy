import { createModule, createQuestion } from '../utils';

export const module11ResetChampions = createModule(
  'Champions à resets',
  'reset-champions',
  "Comprendre et exploiter les champions dont les capacités réinitialisent après un kill",
  11,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un champion "reset" ?

Un champion **reset** est un champion dont les capacités se **réinitialisent** (cooldowns remis à zéro) après avoir participé à un kill. Ces champions peuvent **enchaîner** les éliminations et dominer les teamfights.

## Champions reset emblématiques

Les plus connus :
- **Katarina** : Tous ses cooldowns reset après kill/assist
- **Darius** : Son R (Noxian Guillotine) reset sur kill
- **Master Yi** : Son Q reset et R extended sur kill
- **Pyke** : Son R reset et donne de l'or bonus sur kill
- **Viego** : Prend le corps des ennemis tués

## Comment jouent les reset champions

Le pattern de jeu :
1. **Attendre le bon moment** - Ne pas engager premier
2. **Cibler un ennemi low HP** - Le premier reset est crucial
3. **Enchaîner les resets** - Passer de cible en cible
4. **Devenir inarrêtable** - En pentakill potentiel

## Jouer avec un reset dans votre équipe

Comment aider votre carry reset :
- **Baissez les ennemis** avant qu'il engage
- **CC les menaces** pour lui donner du temps
- **Ne "volez" pas les kills** si possible (controversé)
- **Peel pour lui** entre ses resets
- **Suivez son timing** d'engagement

## Jouer contre les reset champions

Comment les neutraliser :
- **Focus le reset** en premier pour l'empêcher de démarrer
- **Ne lui donnez pas le premier kill** - sans reset il est vulnérable
- **Gardez du CC** pour l'interrompre pendant ses combos
- **Spreadez-vous** pour qu'il ne puisse pas enchaîner
- **Counters** : Zhonyas, CC instantané, burst

## Fenêtres de vulnérabilité des resets

Les reset champions sont vulnérables quand :
- **Leurs cooldowns sont down** (avant le premier kill)
- **Ils sont CC** pendant leur combo
- **Ils n'ont pas de cible low HP** disponible
- **Ils sont focus** avant de pouvoir agir`,

  // Practice Instructions
  `## Objectif

Apprendre à jouer avec et contre les champions à resets en teamfight.

## Étapes

1. Jouez un champion reset (Katarina, Darius, Pyke) OU jouez contre un
2. Si vous jouez reset : Attendez que les ennemis soient blessés avant d'engager
3. Si vous jouez reset : Ciblez le premier kill le plus sûr pour démarrer la chaîne
4. Si vous jouez contre : Identifiez le reset adverse et gardez du CC pour lui
5. Notez combien de kills enchaînés le reset a fait (ou a été empêché de faire)
6. Analysez : qu'est-ce qui a permis ou empêché les resets ?

## Critère de réussite

Si vous jouez reset : vous avez réussi à enchaîner au moins 3 kills dans un teamfight. Si vous jouez contre : vous avez empêché le reset adverse d'enchaîner plus de 2 kills.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un champion 'reset' ?",
      "Un champion qui peut ressusciter",
      "Un champion dont les capacités réinitialisent après un kill",
      "Un champion qui peut recommencer la partie",
      "Un champion qui ne peut pas mourir",
      'b',
      "Les champions reset voient leurs cooldowns remis à zéro après avoir participé à une élimination."
    ),
    createQuestion(
      "Quel champion est l'exemple le plus célèbre de champion reset ?",
      "Malphite",
      "Katarina",
      "Soraka",
      "Cho'Gath",
      'b',
      "Katarina est emblématique : tous ses cooldowns reset après un kill ou assist, permettant des pentakills."
    ),
    createQuestion(
      "Comment Darius utilise-t-il son reset ?",
      "Sa passive reset sur kill",
      "Son R (Noxian Guillotine) reset sur kill",
      "Son Q reset sur hit",
      "Il n'a pas de reset",
      'b',
      "L'ultime de Darius peut être relancé immédiatement si elle tue la cible."
    ),
    createQuestion(
      "Quelle est la première étape pour jouer un champion reset efficacement ?",
      "Engager en premier dans la mêlée",
      "Attendre que les ennemis soient blessés avant d'engager",
      "Focus le tank ennemi",
      "Rester à distance et poke",
      'b',
      "Les reset champions ont besoin d'un premier kill facile pour démarrer leur chaîne de resets."
    ),
    createQuestion(
      "Comment aider un allié reset en teamfight ?",
      "Lui voler tous les kills",
      "Baisser les ennemis et CC les menaces pour lui donner du temps",
      "L'ignorer complètement",
      "Le laisser 1v5",
      'b',
      "Endommager les ennemis et CC les menaces permet au reset de trouver son premier kill et d'enchaîner."
    ),
    createQuestion(
      "Comment neutraliser un champion reset adverse ?",
      "L'ignorer et taper les autres",
      "Le focus en premier et garder du CC pour l'interrompre",
      "Lui donner le premier kill pour qu'il s'épuise",
      "Se regrouper le plus possible",
      'b',
      "Focus le reset avant qu'il ait son premier kill l'empêche de démarrer sa chaîne."
    ),
    createQuestion(
      "Pourquoi est-il dangereux de 'donner' le premier kill à un Katarina ?",
      "Elle obtient du gold",
      "Elle peut ensuite enchaîner et potentiellement faire un pentakill",
      "Elle devient invisible",
      "Ce n'est pas dangereux",
      'b',
      "Le premier reset permet à Katarina de sauter de cible en cible, devenant quasi-inarrêtable."
    ),
    createQuestion(
      "Quel item aide à survivre contre un reset champion qui vous cible ?",
      "Épée longue",
      "Zhonya (stase)",
      "Bottes de vitesse",
      "Larme de la déesse",
      'b',
      "Zhonya permet d'éviter le burst pendant que le reset champion perd son timing et ses cooldowns reviennent."
    ),
    createQuestion(
      "Que fait Viego après avoir tué un ennemi ?",
      "Il gagne de l'or bonus",
      "Il prend possession du corps ennemi et obtient ses capacités",
      "Il devient invisible",
      "Il reset ses cooldowns normalement",
      'b',
      "Viego peut prendre le corps d'un champion tué et utiliser ses capacités, créant un reset unique."
    ),
    createQuestion(
      "Quand un champion reset est-il le plus vulnérable ?",
      "Après avoir fait un pentakill",
      "Avant son premier kill quand ses cooldowns sont encore actifs",
      "Quand il a tous ses resets",
      "Quand il est au milieu de l'équipe adverse",
      'b',
      "Sans reset obtenu, le champion attend ses cooldowns normalement et est beaucoup plus vulnérable."
    ),
  ]
);
