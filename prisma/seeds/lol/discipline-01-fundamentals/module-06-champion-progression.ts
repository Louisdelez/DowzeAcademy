import { createModule, createQuestion } from '../utils';

export const module06ChampionProgression = createModule(
  'Progression du champion',
  'champion-progression',
  "Expérience, niveaux et amélioration des compétences",
  6,
  // Theory Content
  `## Gagner de l'expérience

Votre champion gagne de l'**expérience (XP)** en :
- Étant proche des sbires ennemis qui meurent
- Tuant ou assistant à tuer des champions ennemis
- Détruisant des structures
- Tuant des monstres de la jungle

## Les 18 niveaux

Chaque champion peut atteindre le **niveau 18** maximum :
- Niveau 1 : Vous commencez la partie
- Niveaux 2-5 : Déblocage progressif des compétences Q, W, E
- Niveau 6 : Déblocage de l'ultime (R)
- Niveaux 11 et 16 : Améliorations majeures de l'ultime

## Améliorer ses compétences

À chaque niveau gagné, vous obtenez **1 point de compétence** :
- Vous choisissez quelle compétence améliorer
- Chaque compétence a 5 rangs maximum (sauf R : 3 rangs)
- L'ultime ne peut être amélioré qu'aux niveaux 6, 11 et 16
- Stratégie : maximiser d'abord votre compétence principale

## Statistiques de base

En montant de niveau, votre champion gagne aussi :
- Plus de **points de vie** (HP)
- Plus de **dégâts d'attaque** de base
- Plus d'**armure** et de **résistance magique**
- Ces bonus sont automatiques

## Récapitulatif

- L'XP s'obtient par les sbires, kills, structures et jungle
- Niveau max = 18
- Ultime disponible au niveau 6
- 1 point de compétence par niveau
- Les stats de base augmentent automatiquement avec le niveau`,

  // Practice Instructions
  `## Objectif

Comprendre comment gagner de l'expérience et améliorer les compétences de votre champion.

## Étapes

1. Lancez une partie d'entraînement contre l'IA
2. Restez près des sbires quand ils meurent (observez l'XP gagné)
3. Montez au niveau 2 et choisissez une compétence à améliorer
4. Continuez jusqu'au niveau 6 pour débloquer votre ultime
5. Observez comment vos stats augmentent avec le niveau (appuyez sur C)

## Critère de réussite

Vous comprenez comment gagner de l'XP, vous savez améliorer vos compétences à chaque niveau et avez atteint le niveau 6 pour débloquer votre ultime.`,

  // Questions
  [
    createQuestion(
      "Quel est le niveau maximum d'un champion ?",
      "Niveau 10",
      "Niveau 15",
      "Niveau 18",
      "Niveau 20",
      'c',
      "Le niveau maximum est 18, atteint généralement en late game."
    ),
    createQuestion(
      "À quel niveau débloquez-vous votre compétence ultime ?",
      "Niveau 1",
      "Niveau 3",
      "Niveau 6",
      "Niveau 10",
      'c',
      "L'ultime (R) se débloque au niveau 6."
    ),
    createQuestion(
      "Comment gagne-t-on de l'expérience ?",
      "En marchant sur la carte",
      "En étant proche des sbires qui meurent",
      "En restant à la base",
      "En regardant la mini-carte",
      'b',
      "L'XP s'obtient en étant à proximité des sbires, champions et monstres qui meurent."
    ),
    createQuestion(
      "Combien de points de compétence gagne-t-on par niveau ?",
      "0",
      "1",
      "2",
      "3",
      'b',
      "Vous gagnez 1 point de compétence à chaque niveau pour améliorer vos sorts."
    ),
    createQuestion(
      "Quel est le rang maximum d'une compétence de base (Q, W, E) ?",
      "Rang 3",
      "Rang 5",
      "Rang 7",
      "Rang 10",
      'b',
      "Les compétences de base peuvent être améliorées jusqu'au rang 5."
    ),
    createQuestion(
      "À quels niveaux peut-on améliorer l'ultime ?",
      "1, 6, 11",
      "6, 11, 16",
      "6, 12, 18",
      "5, 10, 15",
      'b',
      "L'ultime peut être amélioré aux niveaux 6, 11 et 16."
    ),
    createQuestion(
      "Que gagne-t-on automatiquement en montant de niveau ?",
      "De l'or",
      "Des objets",
      "Des statistiques de base (HP, attaque, etc.)",
      "Des sbires",
      'c',
      "Les stats de base (vie, dégâts, résistances) augmentent automatiquement avec le niveau."
    ),
    createQuestion(
      "Pourquoi rester près des sbires est important ?",
      "Pour qu'ils vous protègent",
      "Pour gagner l'XP quand ils meurent",
      "Pour les rendre plus forts",
      "Pour qu'ils vous suivent",
      'b',
      "Être à proximité des sbires ennemis qui meurent vous donne de l'expérience."
    ),
    createQuestion(
      "Qu'est-ce que 'maxer' une compétence ?",
      "La supprimer",
      "La mettre au rang maximum en priorité",
      "Ne jamais l'utiliser",
      "L'utiliser constamment",
      'b',
      "Maxer signifie investir ses points en priorité dans une compétence pour la monter rang 5 rapidement."
    ),
    createQuestion(
      "Combien de rangs possède la compétence ultime ?",
      "1 rang",
      "3 rangs",
      "5 rangs",
      "6 rangs",
      'b',
      "L'ultime a 3 rangs, améliorables aux niveaux 6, 11 et 16."
    ),
  ]
);
