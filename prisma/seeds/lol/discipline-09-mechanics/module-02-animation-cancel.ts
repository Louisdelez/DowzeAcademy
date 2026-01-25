import { createModule, createQuestion } from '../utils';

export const module02AnimationCancel = createModule(
  'Animation cancel',
  'animation-cancel',
  "Annuler les animations pour plus de fluidité",
  2,
  // Theory Content
  `## L'animation cancel

L'**animation cancel** consiste à annuler une partie de l'animation d'une attaque ou d'un sort pour enchaîner plus rapidement.

## Pourquoi cancel les animations ?

Avantages :
- **Combos** plus rapides
- Plus de **dégâts** en moins de temps
- Moins de temps **vulnérable**
- Avantage en **duel**

## Types d'animation cancel

Différentes méthodes :
- **Auto-attack reset** : Un sort reset l'auto
- **Sort + mouvement** : Bouger annule la fin
- **Sort + sort** : Chaîner deux sorts
- **Flash + sort** : Flash pendant un sort

## Auto-attack resets courants

Exemples de champions :
- **Nasus** : Q reset l'auto
- **Jax** : W reset l'auto
- **Renekton** : W reset l'auto
- **Vayne** : Q reset l'auto (Tumble)

## Exemples de combos

Combos célèbres :
- **Riven** : Auto-Q-Move-Auto-Q-Move...
- **Renekton** : Auto-W-Tiamat-Q
- **Graves** : Auto-E-Auto (rapide)
- **Lucian** : Sort-Auto-Sort-Auto (passif)

## Pratiquer l'animation cancel

Comment s'améliorer :
- Identifier les **resets** de votre champion
- Pratiquer en **Practice Tool**
- Commencer **lentement** puis accélérer
- Regarder des **guides** spécifiques au champion`,

  // Practice Instructions
  `## Objectif

Comprendre et pratiquer l'annulation d'animations.

## Étapes

1. Choisissez un champion avec un auto-reset (Nasus, Jax)
2. En Practice Tool, faites Auto-attaque puis le sort de reset
3. Observez le combo plus rapide
4. Pratiquez sur des dummies
5. Essayez en partie normale

## Critère de réussite

Vous pouvez exécuter un auto-reset régulièrement sans y réfléchir.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que l'animation cancel ?",
      "Un bug",
      "Annuler une partie de l'animation pour être plus rapide",
      "Annuler un sort",
      "Un sort spécial",
      'b',
      "L'animation cancel permet d'enchaîner plus rapidement."
    ),
    createQuestion(
      "Qu'est-ce qu'un auto-attack reset ?",
      "Perdre son attaque",
      "Un sort qui permet de refaire une auto immédiatement",
      "Un buff d'attack speed",
      "Un objet",
      'b',
      "Un auto-reset permet de lancer une nouvelle auto instantanément."
    ),
    createQuestion(
      "Quel champion a un célèbre auto-reset avec Q ?",
      "Lux",
      "Nasus",
      "Ashe",
      "Sona",
      'b',
      "Le Q de Nasus (Siphoning Strike) est un auto-reset."
    ),
    createQuestion(
      "Riven est connue pour quoi ?",
      "Son sustain",
      "Ses nombreux animation cancels",
      "Sa portée",
      "Ses soins",
      'b',
      "Riven a de nombreux animation cancels complexes."
    ),
    createQuestion(
      "Pourquoi cancel les animations ?",
      "Pour perdre du temps",
      "Pour faire plus de dégâts plus vite",
      "Pour être plus lent",
      "Pas de raison",
      'b',
      "L'animation cancel augmente le DPS et la rapidité."
    ),
    createQuestion(
      "Le passif de Lucian fait quoi ?",
      "Rien de spécial",
      "Deux auto-attaques après un sort",
      "Un dash",
      "Du sustain",
      'b',
      "Lightslinger permet deux autos après chaque sort."
    ),
    createQuestion(
      "Comment pratiquer l'animation cancel ?",
      "En ranked uniquement",
      "En Practice Tool",
      "Impossible à pratiquer",
      "En regardant des streams",
      'b',
      "Le Practice Tool est le meilleur endroit pour pratiquer."
    ),
    createQuestion(
      "Tiamat/Hydra est utilisé pour ?",
      "Le sustain",
      "Cancel les animations et ajouter des dégâts",
      "La mobilité",
      "Le mana",
      'b',
      "Tiamat/Hydra peut s'intégrer dans les combos."
    ),
    createQuestion(
      "Flash peut être utilisé pour ?",
      "Rien avec les sorts",
      "Cancel/repositionner pendant un sort",
      "Annuler les CC",
      "Ignorer le cooldown",
      'b',
      "Flash peut être utilisé pendant certains sorts pour repositionner."
    ),
    createQuestion(
      "L'animation cancel est-il autorisé ?",
      "Non, c'est de la triche",
      "Oui, c'est une mécanique du jeu",
      "Seulement en pro",
      "Seulement certains champions",
      'b',
      "L'animation cancel est une mécanique légitime du jeu."
    ),
  ]
);
