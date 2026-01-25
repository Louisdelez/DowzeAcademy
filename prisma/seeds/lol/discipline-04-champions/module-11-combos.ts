import { createModule, createQuestion } from '../utils';

export const module11Combos = createModule(
  'Combos de compétences',
  'ability-combos',
  'Enchaînements optimaux de sorts',
  11,
  // Theory Content
  `## Qu'est-ce qu'un combo ?

Un **combo** est un enchaînement de compétences dans un ordre précis pour maximiser les dégâts ou l'efficacité. Maîtriser les combos est essentiel.

## Pourquoi les combos ?

Les combos permettent de :
- **Maximiser** les dégâts en peu de temps
- **Garantir** que tous les sorts touchent
- Exploiter les **synergies** entre les sorts
- Réduire le temps de **réaction** ennemi

## Types de combos

**Combo de burst** :
- Tous les sorts rapidement pour tuer
- Exemple : Zed W > E > Q > R > auto

**Combo d'engage** :
- CC d'abord pour garantir la suite
- Exemple : Leona E > Q (stun) > R

**Combo de trade** :
- Échanger des dégâts et sortir
- Plus court et moins engageant

## Principes des combos

Pour un bon combo :
- **CC en premier** si possible (garantit la suite)
- **Sorts rapides** avant les lents
- **Animation cancel** si possible
- Toujours finir par les **auto-attaques** entre les sorts

## Comment apprendre les combos

Pour pratiquer :
- Utiliser le **Practice Tool**
- Regarder des guides spécifiques au champion
- Répéter jusqu'à la **muscle memory**

## Récapitulatif

- Combo = enchaînement de sorts optimal
- Maximise les dégâts et l'efficacité
- CC en premier quand possible
- Pratiquer en Practice Tool
- Chaque champion a ses propres combos`,

  // Practice Instructions
  `## Objectif

Comprendre le concept de combo et en pratiquer un simple.

## Étapes

1. Lancez le Practice Tool avec un champion simple (Annie)
2. Niveau 6, le combo de base est : R > W > Q + auto
3. Pratiquez sur les mannequins
4. Essayez un champion plus complexe (Riven, Zed)
5. Cherchez un guide des combos de votre main

## Critère de réussite

Vous comprenez ce qu'est un combo et pouvez exécuter un combo simple de manière fluide.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un combo ?",
      "Un seul sort puissant",
      "Un enchaînement de sorts dans un ordre précis",
      "Une stratégie d'équipe",
      "Un objet spécial",
      'b',
      "Un combo est une séquence de sorts pour maximiser l'efficacité."
    ),
    createQuestion(
      "Pourquoi faire des combos ?",
      "Pour avoir l'air stylé",
      "Pour maximiser les dégâts rapidement",
      "C'est obligatoire",
      "Pour économiser le mana",
      'b',
      "Les combos permettent d'infliger un maximum de dégâts en peu de temps."
    ),
    createQuestion(
      "Par quoi commencer un combo généralement ?",
      "Par les dégâts",
      "Par le CC pour garantir les autres sorts",
      "Par l'ultime",
      "Par les auto-attaques",
      'b',
      "Le CC au début empêche l'ennemi d'esquiver le reste du combo."
    ),
    createQuestion(
      "Qu'est-ce qu'un combo de burst ?",
      "Un combo lent",
      "Un combo qui inflige tous les dégâts rapidement",
      "Un combo défensif",
      "Un combo de survie",
      'b',
      "Le burst combo vise à éliminer la cible le plus vite possible."
    ),
    createQuestion(
      "Où pratiquer les combos ?",
      "Uniquement en ranked",
      "Dans le Practice Tool (Entraînement)",
      "Contre des joueurs",
      "Impossible de pratiquer",
      'b',
      "Le Practice Tool est parfait pour répéter les combos."
    ),
    createQuestion(
      "Qu'est-ce qu'un animation cancel ?",
      "Annuler un sort",
      "Réduire le temps d'animation en enchaînant",
      "Sauter une étape du combo",
      "Un bug à éviter",
      'b',
      "L'animation cancel permet d'enchaîner plus vite en coupant les animations."
    ),
    createQuestion(
      "Faut-il intercaler des auto-attaques dans les combos ?",
      "Jamais",
      "Oui, elles ajoutent des dégâts gratuits",
      "Seulement pour les ADC",
      "Seulement sur les tours",
      'b',
      "Les auto-attaques entre les sorts augmentent les dégâts totaux."
    ),
    createQuestion(
      "Qu'est-ce que la 'muscle memory' ?",
      "Des muscles plus forts",
      "Exécuter des combos automatiquement par habitude",
      "Se souvenir des champions",
      "Un buff de force",
      'b',
      "La muscle memory permet d'exécuter les combos sans réfléchir."
    ),
    createQuestion(
      "Un combo de trade est généralement...",
      "Plus long qu'un combo de burst",
      "Plus court et moins engageant",
      "Identique au burst",
      "Impossible à faire",
      'b',
      "Le trade combo permet d'échanger des dégâts puis de se désengager."
    ),
    createQuestion(
      "Comment apprendre les combos d'un champion ?",
      "Deviner",
      "Regarder des guides et pratiquer",
      "C'est inné",
      "Jouer sans réfléchir",
      'b',
      "Les guides montrent les combos optimaux, puis la pratique les perfectionne."
    ),
  ]
);
