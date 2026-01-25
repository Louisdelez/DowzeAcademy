import { createModule, createQuestion } from '../utils';

export const module05LevelSystem = createModule(
  'Système de niveaux',
  'level-system',
  'Points de compétence et progression',
  5,
  // Theory Content
  `## La progression par niveaux

Votre champion gagne de l'**expérience (XP)** et monte en **niveau**. Chaque niveau débloque des avantages.

## Gagner de l'expérience

L'XP s'obtient en :
- Étant **proche** des sbires qui meurent
- **Tuant** ou assistant des kills
- **Détruisant** des structures
- **Tuant** des monstres de jungle

## Les 18 niveaux

Chaque champion peut atteindre le niveau 18 :
- **Niveau 1** : 1 sort disponible au choix
- **Niveaux 2-3** : Déblocage des autres sorts de base
- **Niveau 6** : Déblocage de l'ultime
- **Niveaux 11, 16** : Améliorations de l'ultime
- **Niveau 18** : Niveau maximum

## Points de compétence

À chaque niveau, vous gagnez **1 point** :
- Investir dans Q, W, E ou R
- Les sorts de base montent jusqu'au **rang 5**
- L'ultime monte jusqu'au **rang 3**
- Stratégie : **maxer** d'abord votre sort principal

## Avantages par niveau

Monter de niveau donne :
- Un **point de compétence**
- Plus de **stats de base** (PV, AD, armure, etc.)
- Accès à des **objets** (certains ont des requis de niveau)

## Récapitulatif

- 18 niveaux maximum
- 1 point de compétence par niveau
- Ultime à 6, améliorations à 11 et 16
- L'XP vient des sbires, kills et monstres
- Plus de niveau = stats plus élevées`,

  // Practice Instructions
  `## Objectif

Comprendre la progression par niveaux et l'allocation des points.

## Étapes

1. Lancez une partie d'entraînement
2. Au niveau 1, choisissez votre premier sort (souvent Q)
3. Farmez pour monter niveau 2 et 3, débloquez W et E
4. Observez vos stats augmenter avec chaque niveau
5. Au niveau 6, mettez un point dans R (ultime)
6. Continuez jusqu'au niveau 9 pour maxer un sort

## Critère de réussite

Vous savez allouer vos points de compétence et comprendre l'ordre de maxing.`,

  // Questions
  [
    createQuestion(
      "Quel est le niveau maximum d'un champion ?",
      "Niveau 10",
      "Niveau 15",
      "Niveau 18",
      "Niveau 20",
      'c',
      "Le niveau maximum est 18."
    ),
    createQuestion(
      "Combien de points de compétence gagne-t-on par niveau ?",
      "0",
      "1",
      "2",
      "3",
      'b',
      "Vous gagnez 1 point de compétence à chaque niveau."
    ),
    createQuestion(
      "Comment gagne-t-on de l'expérience ?",
      "En restant à la base",
      "En étant proche des sbires qui meurent",
      "En regardant la mini-carte",
      "En utilisant des sorts",
      'b',
      "L'XP s'obtient par proximité avec les sbires, kills et monstres."
    ),
    createQuestion(
      "Que signifie 'maxer' un sort ?",
      "L'utiliser le plus possible",
      "Le monter au rang 5 en priorité",
      "Ne jamais l'utiliser",
      "Le supprimer",
      'b',
      "Maxer = investir tous ses points dans un sort pour le monter rang 5 rapidement."
    ),
    createQuestion(
      "À quels niveaux peut-on mettre des points dans R ?",
      "N'importe quand",
      "6, 11, 16",
      "1, 6, 11",
      "5, 10, 15",
      'b',
      "L'ultime ne peut être amélioré qu'aux niveaux 6, 11 et 16."
    ),
    createQuestion(
      "Que se passe-t-il aux stats quand on monte de niveau ?",
      "Elles restent identiques",
      "Elles augmentent automatiquement",
      "Elles diminuent",
      "Rien",
      'b',
      "Les stats de base augmentent automatiquement avec chaque niveau."
    ),
    createQuestion(
      "Combien de sorts de base peut-on maxer en premier ?",
      "Tous en même temps",
      "Un seul (les autres montent après)",
      "Deux",
      "Aucun",
      'b',
      "On maxe généralement un sort en priorité, puis les autres."
    ),
    createQuestion(
      "Au niveau 1, combien de sorts sont disponibles ?",
      "Aucun",
      "1 sort au choix",
      "Tous les sorts",
      "2 sorts",
      'b',
      "Au niveau 1, vous choisissez 1 sort parmi Q, W ou E."
    ),
    createQuestion(
      "Un avantage de niveau sur l'ennemi est-il important ?",
      "Non, ça ne change rien",
      "Oui, plus de stats et sorts plus forts",
      "Seulement en late game",
      "Seulement pour le jungler",
      'b',
      "Un avantage de niveau donne des stats supérieures, un avantage en combat."
    ),
    createQuestion(
      "Quel est l'ordre typique pour maxer les sorts ?",
      "R > Q > W > E (ou variante selon le champion)",
      "Tous égaux",
      "E > W > Q > R",
      "Aléatoire",
      'a',
      "On maxe généralement R quand possible, puis le sort principal (souvent Q)."
    ),
  ]
);
