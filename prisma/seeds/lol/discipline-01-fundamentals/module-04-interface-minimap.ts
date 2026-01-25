import { createModule, createQuestion } from '../utils';

export const module04InterfaceMinimap = createModule(
  'Interface du jeu et mini-carte',
  'interface-minimap',
  "Comprendre l'interface et utiliser la mini-carte efficacement",
  4,
  // Theory Content
  `## L'interface de jeu

L'interface de League of Legends affiche toutes les informations essentielles pour jouer. Comprendre chaque élément vous permet de prendre de meilleures décisions.

## La barre de compétences

En bas de l'écran, vous trouvez :
- Les **4 compétences** de votre champion (Q, W, E, R)
- Les **sorts d'invocateur** (D et F)
- Les **objets actifs** (touches 1-7)
- Votre **barre de vie** (verte) et de **mana** (bleue)
- Votre **niveau** et la progression vers le prochain

## La mini-carte

La mini-carte (coin inférieur droit) est votre **outil le plus important** :
- Elle montre la position de vos alliés (icônes bleues)
- Les ennemis visibles apparaissent en rouge
- Les structures (tourelles) sont affichées
- Les zones de vision de votre équipe (zones éclairées)

## Les informations en jeu

Le HUD affiche également :
- Le **score** de la partie (kills par équipe)
- Le **timer** (temps écoulé)
- L'**or** que vous possédez
- Les **cooldowns** des sorts ennemis (avec TAB)

## Récapitulatif

- La barre du bas montre vos compétences, vie, mana et niveau
- La mini-carte indique positions alliées/ennemies
- Toujours garder un oeil sur la mini-carte
- TAB affiche le tableau des scores détaillé
- L'or disponible est affiché près de votre portrait`,

  // Practice Instructions
  `## Objectif

Se familiariser avec l'interface et prendre l'habitude de regarder la mini-carte.

## Étapes

1. Lancez une partie d'entraînement
2. Identifiez tous les éléments de l'interface (vie, mana, compétences)
3. Localisez la mini-carte et observez les icônes
4. Appuyez sur TAB pour voir le tableau des scores
5. Pendant 5 minutes, regardez la mini-carte toutes les 5 secondes

## Critère de réussite

Vous pouvez nommer chaque élément de l'interface et avez pris l'habitude de consulter régulièrement la mini-carte.`,

  // Questions
  [
    createQuestion(
      "Où se trouve la mini-carte par défaut ?",
      "En haut à gauche",
      "En haut à droite",
      "En bas à gauche",
      "En bas à droite",
      'd',
      "La mini-carte est située par défaut dans le coin inférieur droit de l'écran."
    ),
    createQuestion(
      "Quelle touche affiche le tableau des scores détaillé ?",
      "CTRL",
      "TAB",
      "ALT",
      "SHIFT",
      'b',
      "La touche TAB permet d'afficher le tableau des scores avec les informations détaillées."
    ),
    createQuestion(
      "De quelle couleur sont les alliés sur la mini-carte ?",
      "Rouge",
      "Vert",
      "Bleu",
      "Jaune",
      'c',
      "Les alliés apparaissent en bleu sur la mini-carte, les ennemis en rouge."
    ),
    createQuestion(
      "Que représente la barre verte sous votre champion ?",
      "Votre mana",
      "Votre expérience",
      "Votre vie (PV)",
      "Votre énergie",
      'c',
      "La barre verte représente vos points de vie (PV/HP)."
    ),
    createQuestion(
      "Que représente généralement la barre bleue ?",
      "La vie",
      "Le mana",
      "L'armure",
      "L'attaque",
      'b',
      "La barre bleue représente le mana, la ressource pour lancer des sorts."
    ),
    createQuestion(
      "Quelles touches activent les sorts d'invocateur ?",
      "A et S",
      "Q et W",
      "D et F",
      "1 et 2",
      'c',
      "Les sorts d'invocateur sont assignés aux touches D et F par défaut."
    ),
    createQuestion(
      "Pourquoi regarder souvent la mini-carte ?",
      "Pour voir son propre champion",
      "Pour détecter les mouvements ennemis",
      "C'est juste esthétique",
      "Pour voir le timer",
      'b',
      "La mini-carte permet de voir les positions ennemies et anticiper les ganks."
    ),
    createQuestion(
      "Quelles touches activent les 4 compétences de base ?",
      "1, 2, 3, 4",
      "A, Z, E, R",
      "Q, W, E, R",
      "Flèches directionnelles",
      'c',
      "Les compétences sont assignées à Q, W, E, R par défaut."
    ),
    createQuestion(
      "Où est affiché l'or que vous possédez ?",
      "En haut de l'écran",
      "Près de votre portrait/barre de compétences",
      "Sur la mini-carte",
      "Dans l'inventaire uniquement",
      'b',
      "L'or est affiché près de votre portrait, généralement en bas de l'écran."
    ),
    createQuestion(
      "Que montrent les zones éclairées sur la mini-carte ?",
      "Les zones dangereuses",
      "Les zones où votre équipe a de la vision",
      "Les zones avec des objectifs",
      "Les zones interdites",
      'b',
      "Les zones éclairées représentent la vision de votre équipe sur la carte."
    ),
  ]
);
