import { createModule, createQuestion } from '../utils';

export const module03Smite = createModule(
  'Châtiment (Smite)',
  'smite-spell',
  'Sort essentiel du jungler',
  3,
  // Theory Content
  `## Le sort du Jungler

**Châtiment** (Smite) est le sort exclusif et obligatoire des junglers. Il est nécessaire pour acheter l'objet de jungle et farmer efficacement.

## Fonctionnement

Comment Smite fonctionne :
- Inflige **900 dégâts vrais** aux monstres/sbires
- 2 charges disponibles (recharge toutes les 90 secondes)
- Permet d'acheter l'objet de jungle
- Dégâts augmentent avec le niveau

## Sécuriser les objectifs

Smite est crucial pour les objectifs :
- **Dragon** : Smite pour sécuriser le kill
- **Baron Nashor** : Smite obligatoire
- **Héraut** : Évite le steal
- Le timing du Smite est crucial (calculer les PV restants)

## Amélioration du Smite

Après avoir farm assez, Smite s'améliore :
- Peut cibler les **champions** ennemis
- Inflige des dégâts et applique un effet
- L'effet dépend de l'objet de jungle choisi

## Duels de Smite

Quand les deux junglers veulent l'objectif :
- Celui qui **Smite** le mieux gagne
- Calculer quand les PV = dégâts de Smite
- Stress et précision requis
- Un Smite raté peut coûter un Baron

## Récapitulatif

- Smite = 900 dégâts vrais aux monstres
- 2 charges, recharge en 90 secondes
- Obligatoire pour le jungler
- Sécurise Dragon, Baron, Héraut
- S'améliore pour cibler les champions`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser Smite efficacement.

## Étapes

1. Lancez une partie d'entraînement avec Smite
2. Achetez l'objet de jungle au spawn
3. Utilisez Smite sur le buff bleu pour le finir
4. Pratiquez le timing : attendez que le monstre ait ~900 PV
5. Essayez de Smite le Dragon au bon moment

## Critère de réussite

Vous savez timer votre Smite pour finir les objectifs avec précision.`,

  // Questions
  [
    createQuestion(
      "Combien de dégâts inflige Smite aux monstres ?",
      "450 dégâts",
      "900 dégâts vrais",
      "1200 dégâts",
      "Dégâts variables",
      'b',
      "Smite inflige 900 dégâts vrais aux monstres et sbires."
    ),
    createQuestion(
      "Combien de charges de Smite a-t-on ?",
      "1 charge",
      "2 charges",
      "3 charges",
      "Charges infinies",
      'b',
      "Smite a 2 charges maximum qui se rechargent."
    ),
    createQuestion(
      "Quel rôle DOIT prendre Smite ?",
      "Top Laner",
      "Jungler",
      "Mid Laner",
      "Support",
      'b',
      "Le Jungler doit prendre Smite pour acheter l'objet de jungle."
    ),
    createQuestion(
      "Pourquoi Smite est crucial pour Dragon/Baron ?",
      "Il donne plus d'or",
      "Il sécurise le dernier coup pour éviter le steal",
      "Il fait apparaître l'objectif",
      "Il ralentit l'objectif",
      'b',
      "Smite garantit le last hit sur les objectifs majeurs."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'Smite fight' ?",
      "Se battre sans Smite",
      "Compétition entre junglers pour Smite l'objectif",
      "Utiliser Smite sur un champion",
      "Farm la jungle",
      'b',
      "Un Smite fight est la bataille pour sécuriser l'objectif avec Smite."
    ),
    createQuestion(
      "Quand Smite un objectif ?",
      "Dès le début",
      "Quand ses PV égalent les dégâts de Smite (~900)",
      "À la fin du combat",
      "N'importe quand",
      'b',
      "Timer le Smite quand l'objectif a environ 900 PV pour le sécuriser."
    ),
    createQuestion(
      "Smite peut-il cibler les champions ?",
      "Jamais",
      "Oui, après amélioration",
      "Toujours",
      "Seulement sur les ennemis low HP",
      'b',
      "Après amélioration, Smite peut cibler les champions."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'steal' d'objectif ?",
      "Donner l'objectif à l'ennemi",
      "Prendre l'objectif que l'ennemi faisait",
      "Détruire l'objectif",
      "Ignorer l'objectif",
      'b',
      "Steal = voler l'objectif avec un Smite ou sort bien placé."
    ),
    createQuestion(
      "Peut-on être jungler sans Smite ?",
      "Oui, c'est optionnel",
      "Non, l'objet de jungle le requiert",
      "Seulement en normal",
      "Seulement avec certains champions",
      'b',
      "Sans Smite, impossible d'acheter l'objet de jungle."
    ),
    createQuestion(
      "Toutes les combien de secondes une charge de Smite revient ?",
      "60 secondes",
      "90 secondes",
      "120 secondes",
      "180 secondes",
      'b',
      "Une charge de Smite se régénère toutes les 90 secondes."
    ),
  ]
);
