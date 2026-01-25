import { createModule, createQuestion } from '../utils';

export const module07Minions = createModule(
  'Les sbires (minions)',
  'minions',
  'Comprendre les vagues de sbires et leur importance',
  7,
  // Theory Content
  `## Qu'est-ce qu'un sbire ?

Les **sbires** (minions) sont des créatures qui apparaissent automatiquement des deux bases et marchent vers la base ennemie. Ils combattent les sbires et structures adverses.

## Types de sbires

Chaque vague contient différents sbires :
- **Sbires de mêlée** (3 par vague) : résistants, peu de dégâts
- **Sbires à distance** (3 par vague) : fragiles, plus de dégâts
- **Sbire canon** (1 toutes les 3 vagues) : très résistant, dégâts aux tourelles
- **Super sbires** : apparaissent quand un inhibiteur est détruit

## Timing des vagues

Les sbires suivent un timing précis :
- Première vague : **1:05** après le début
- Nouvelle vague : toutes les **30 secondes**
- Les vagues se rencontrent au milieu de chaque lane

## Importance des sbires

Les sbires sont cruciaux car :
- Ils donnent de l'**or** quand vous les last-hit
- Ils donnent de l'**XP** quand ils meurent près de vous
- Ils **poussent** les lanes vers les tourelles
- Ils **tankent** les dégâts des tourelles

## Récapitulatif

- 6 sbires par vague (3 mêlée + 3 distance)
- Canon toutes les 3 vagues
- Last hit = or, proximité = XP
- Les sbires poussent les lanes automatiquement
- Inhibiteur détruit = super sbires`,

  // Practice Instructions
  `## Objectif

Observer les sbires, leur comportement et apprendre à les last-hit.

## Étapes

1. Lancez une partie d'entraînement
2. Attendez l'arrivée de la première vague (1:05)
3. Comptez les sbires : 3 mêlée, 3 distance
4. Essayez de last-hit chaque sbire pour l'or
5. Observez le sbire canon quand il apparaît
6. Laissez une vague pousser vers votre tourelle et observez

## Critère de réussite

Vous pouvez identifier les types de sbires, connaissez le timing des vagues et comprenez l'importance du last-hit.`,

  // Questions
  [
    createQuestion(
      "Combien de sbires composent une vague standard ?",
      "4 sbires",
      "6 sbires",
      "8 sbires",
      "10 sbires",
      'b',
      "Une vague standard contient 6 sbires : 3 mêlée et 3 à distance."
    ),
    createQuestion(
      "Quand apparaît la première vague de sbires ?",
      "Au début de la partie",
      "À 1:05",
      "À 2:00",
      "À 3:00",
      'b',
      "La première vague spawn à 1 minute 5 secondes."
    ),
    createQuestion(
      "À quelle fréquence les vagues apparaissent-elles ?",
      "Toutes les 15 secondes",
      "Toutes les 30 secondes",
      "Toutes les 45 secondes",
      "Toutes les minutes",
      'b',
      "Une nouvelle vague apparaît toutes les 30 secondes."
    ),
    createQuestion(
      "Qu'est-ce qu'un sbire canon ?",
      "Un sbire qui tire des boulets",
      "Un sbire plus gros et résistant",
      "Un sbire invisible",
      "Un sbire qui soigne",
      'b',
      "Le canon est un gros sbire résistant qui apparaît toutes les 3 vagues."
    ),
    createQuestion(
      "Comment obtient-on l'or d'un sbire ?",
      "En étant proche quand il meurt",
      "En lui portant le coup fatal (last hit)",
      "En le regardant mourir",
      "Automatiquement",
      'b',
      "Il faut porter le dernier coup (last hit) pour obtenir l'or du sbire."
    ),
    createQuestion(
      "Comment obtient-on l'XP d'un sbire ?",
      "En le last-hit uniquement",
      "En étant proche quand il meurt",
      "En le touchant au moins une fois",
      "En détruisant une tourelle",
      'b',
      "L'XP est gagnée par proximité, pas besoin de last hit."
    ),
    createQuestion(
      "Que sont les super sbires ?",
      "Des sbires normaux améliorés",
      "Des sbires qui apparaissent quand un inhibiteur est détruit",
      "Des sbires de jungle",
      "Des sbires invisibles",
      'b',
      "Les super sbires remplacent les sbires normaux quand l'inhibiteur ennemi est détruit."
    ),
    createQuestion(
      "Pourquoi les sbires sont-ils importants pour attaquer une tourelle ?",
      "Ils donnent des bonus de dégâts",
      "Ils absorbent les dégâts de la tourelle",
      "Ils ne sont pas importants",
      "Ils désactivent la tourelle",
      'b',
      "Les sbires tankent les tirs de la tourelle, vous permettant d'attaquer en sécurité."
    ),
    createQuestion(
      "Quel sbire donne le plus d'or au last-hit ?",
      "Sbire de mêlée",
      "Sbire à distance",
      "Sbire canon",
      "Ils donnent tous pareil",
      'c',
      "Le sbire canon donne le plus d'or car il est plus rare et résistant."
    ),
    createQuestion(
      "Où les vagues de sbires se rencontrent-elles ?",
      "Sous les tourelles",
      "Au milieu de chaque lane",
      "Dans la jungle",
      "Dans la base",
      'b',
      "Sans intervention, les vagues se rencontrent au centre de chaque lane."
    ),
  ]
);
