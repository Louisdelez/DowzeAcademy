import { createModule, createQuestion } from '../utils';

export const module10KDA = createModule(
  'KDA (Kills/Deaths/Assists)',
  'kda',
  'Comprendre et interpréter le ratio KDA',
  10,
  // Theory Content
  `## Qu'est-ce que le KDA ?

Le **KDA** est un indicateur de performance qui mesure :
- **K** = Kills (éliminations)
- **D** = Deaths (morts)
- **A** = Assists (assistances)

Il s'affiche sous la forme **K/D/A** (exemple : 5/2/10).

## Comment calculer le ratio KDA

Le ratio KDA se calcule ainsi :
**(Kills + Assists) / Deaths**

Exemple : 5/2/10 = (5 + 10) / 2 = **7.5 KDA**

Un KDA de :
- **< 2** : Mauvaise performance
- **2-3** : Performance moyenne
- **3-5** : Bonne performance
- **> 5** : Excellente performance

## Les Kills (éliminations)

Un kill vous est attribué quand :
- Vous portez le **coup fatal** à un champion ennemi
- Vous gagnez **300 or** de base (plus si bounty)
- Un seul joueur obtient le kill

## Les Assists (assistances)

Une assist vous est attribuée si :
- Vous avez **participé** à la mort d'un ennemi sans le finir
- Vous avez infligé des dégâts ou appliqué du CC dans les dernières secondes
- L'or est partagé entre les assistants

## Récapitulatif

- KDA = Kills / Deaths / Assists
- Ratio = (K + A) / D
- Les kills donnent plus d'or que les assists
- Un bon KDA ne garantit pas la victoire
- Focus sur les objectifs, pas seulement le KDA`,

  // Practice Instructions
  `## Objectif

Comprendre comment le KDA est calculé et ce qu'il représente.

## Étapes

1. Lancez une partie contre l'IA
2. Participez à des combats pour obtenir des kills et assists
3. Appuyez sur TAB et observez votre KDA affiché
4. À la fin de la partie, calculez votre ratio KDA
5. Comparez avec les autres joueurs de la partie

## Critère de réussite

Vous savez lire un KDA (K/D/A), calculer le ratio, et comprenez la différence entre un kill et une assist.`,

  // Questions
  [
    createQuestion(
      "Que signifie KDA ?",
      "Kill Damage Attack",
      "Kills Deaths Assists",
      "King Dragon Attack",
      "Key Defense Area",
      'b',
      "KDA signifie Kills (éliminations), Deaths (morts), Assists (assistances)."
    ),
    createQuestion(
      "Comment se lit un KDA de 8/3/12 ?",
      "8 assists, 3 kills, 12 deaths",
      "8 kills, 3 deaths, 12 assists",
      "8 deaths, 3 assists, 12 kills",
      "8 points, 3 niveaux, 12 or",
      'b',
      "Le format est toujours K/D/A : 8 kills, 3 morts, 12 assists."
    ),
    createQuestion(
      "Comment calcule-t-on le ratio KDA ?",
      "K - D + A",
      "(K + A) / D",
      "K × D / A",
      "K / A × D",
      'b',
      "Le ratio KDA = (Kills + Assists) divisé par Deaths."
    ),
    createQuestion(
      "Quel est le ratio KDA d'un joueur avec 6/2/8 ?",
      "4",
      "7",
      "3",
      "6",
      'b',
      "(6 + 8) / 2 = 14 / 2 = 7"
    ),
    createQuestion(
      "Qui obtient le kill sur un champion ?",
      "Tous ceux qui ont infligé des dégâts",
      "Celui qui porte le coup fatal",
      "Le joueur avec le plus de dégâts",
      "Le jungler uniquement",
      'b',
      "Le kill est attribué au joueur qui inflige le coup final (last hit)."
    ),
    createQuestion(
      "Combien d'or de base donne un kill ?",
      "100 or",
      "300 or",
      "500 or",
      "150 or",
      'b',
      "Un kill donne 300 or de base, plus selon la bounty de la victime."
    ),
    createQuestion(
      "Comment obtient-on une assist ?",
      "En regardant le combat",
      "En participant au kill sans porter le coup fatal",
      "En étant sur la même lane",
      "En farmant à proximité",
      'b',
      "Une assist est attribuée si vous avez aidé (dégâts, CC, soin) sans finir l'ennemi."
    ),
    createQuestion(
      "Un excellent KDA garantit-il la victoire ?",
      "Oui, toujours",
      "Non, les objectifs comptent plus",
      "Oui, si le KDA dépasse 5",
      "Seulement en ranked",
      'b',
      "Le KDA est un indicateur mais les objectifs (tourelles, Nexus) déterminent la victoire."
    ),
    createQuestion(
      "Quel KDA est considéré comme 'bon' ?",
      "En dessous de 1",
      "Entre 3 et 5",
      "Exactement 10",
      "Plus de 20",
      'b',
      "Un ratio KDA entre 3 et 5 est généralement considéré comme une bonne performance."
    ),
    createQuestion(
      "Que représente le 'D' dans un KDA de 4/7/5 ?",
      "4 deaths",
      "7 deaths",
      "5 deaths",
      "0 deaths",
      'b',
      "Dans 4/7/5, le 7 au milieu représente les deaths (morts)."
    ),
  ]
);
