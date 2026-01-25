import { createModule, createQuestion } from '../utils';

export const module02VictoryCondition = createModule(
  'Condition de victoire',
  'victory-condition',
  'Détruire le Nexus ennemi pour gagner la partie',
  2,
  // Theory Content
  `## L'unique condition de victoire

Dans League of Legends, il n'existe qu'**une seule façon de gagner** : détruire le Nexus de l'équipe adverse. Peu importe le nombre de kills, l'or accumulé ou les objectifs pris, la partie ne se termine que lorsqu'un Nexus est détruit.

## Le chemin vers le Nexus

Le Nexus n'est pas accessible directement. Votre équipe doit d'abord :
1. Détruire les **tourelles extérieures** (T1)
2. Détruire les **tourelles intérieures** (T2)
3. Détruire les **tourelles d'inhibiteur** (T3)
4. Détruire au moins **un inhibiteur**
5. Détruire les **tourelles du Nexus**
6. Enfin, détruire le **Nexus**

## Pourquoi les kills ne suffisent pas

Avoir plus de kills donne un avantage en or et expérience, mais ne garantit pas la victoire. Une équipe avec moins de kills peut gagner si elle joue mieux les objectifs et pousse efficacement vers le Nexus.

## L'importance des structures

Chaque structure détruite rapproche votre équipe de la victoire. Les tourelles donnent de l'or global à l'équipe, et les inhibiteurs détruits renforcent vos sbires dans cette lane.

## Récapitulatif

- **Victoire = Nexus ennemi détruit**
- Les kills seuls ne font pas gagner
- Il faut détruire tourelles et inhibiteurs d'abord
- Chaque structure compte pour progresser vers la victoire
- Focus sur les objectifs, pas seulement les éliminations`,

  // Practice Instructions
  `## Objectif

Observer le chemin vers le Nexus et identifier toutes les structures à détruire.

## Étapes

1. Lancez une partie d'entraînement contre l'IA (niveau Intro)
2. Identifiez sur la mini-carte les 3 lanes (Top, Mid, Bot)
3. Repérez les tourelles T1, T2, T3 sur une lane
4. Localisez l'inhibiteur derrière la T3
5. Identifiez les 2 tourelles du Nexus et le Nexus lui-même

## Critère de réussite

Vous pouvez nommer et localiser sur la carte : T1, T2, T3, inhibiteur, tourelles du Nexus et Nexus pour les deux équipes.`,

  // Questions
  [
    createQuestion(
      "Quelle est l'unique condition pour gagner une partie de LoL ?",
      "Avoir plus de kills que l'équipe ennemie",
      "Détruire le Nexus ennemi",
      "Contrôler le Baron Nashor",
      "Atteindre un certain temps de jeu",
      'b',
      "La seule façon de gagner est de détruire le Nexus adverse."
    ),
    createQuestion(
      "Peut-on attaquer directement le Nexus en début de partie ?",
      "Oui, si on est assez fort",
      "Non, il faut d'abord détruire les structures qui le protègent",
      "Oui, avec certains champions",
      "Non, il faut attendre 20 minutes",
      'b',
      "Le Nexus est protégé par des tourelles et inhibiteurs qu'il faut détruire d'abord."
    ),
    createQuestion(
      "Quel est l'ordre correct pour atteindre le Nexus sur une lane ?",
      "Inhibiteur > T1 > T2 > T3 > Nexus",
      "T1 > T2 > T3 > Inhibiteur > Tourelles du Nexus > Nexus",
      "Tourelles du Nexus > T3 > T2 > T1 > Inhibiteur",
      "T3 > T2 > T1 > Inhibiteur > Nexus",
      'b',
      "Il faut détruire dans l'ordre : T1, T2, T3 (inhibiteur), inhibiteur, puis les tourelles du Nexus avant le Nexus."
    ),
    createQuestion(
      "Qu'est-ce que la T1 ?",
      "La tourelle la plus proche du Nexus",
      "La première tourelle, la plus éloignée de la base",
      "Une tourelle bonus",
      "La tourelle qui protège l'inhibiteur",
      'b',
      "La T1 (Tier 1) est la tourelle extérieure, la première à détruire sur chaque lane."
    ),
    createQuestion(
      "Une équipe avec 30 kills contre 10 gagne-t-elle automatiquement ?",
      "Oui, les kills déterminent le vainqueur",
      "Non, seule la destruction du Nexus compte",
      "Oui, après 20 minutes de jeu",
      "Non, mais ils gagnent des points bonus",
      'b',
      "Les kills donnent un avantage mais ne font pas gagner. Seule la destruction du Nexus détermine le vainqueur."
    ),
    createQuestion(
      "Que se passe-t-il quand un inhibiteur est détruit ?",
      "Rien de spécial",
      "Les sbires de cette lane deviennent plus forts (super sbires)",
      "Le Nexus perd des PV",
      "L'équipe gagne 500 gold",
      'b',
      "La destruction d'un inhibiteur fait apparaître des super sbires dans cette lane."
    ),
    createQuestion(
      "Combien de tourelles protègent le Nexus directement ?",
      "Une seule",
      "Deux tourelles",
      "Trois tourelles",
      "Aucune, le Nexus est accessible",
      'b',
      "Deux tourelles du Nexus sont positionnées juste devant celui-ci."
    ),
    createQuestion(
      "Pourquoi est-il important de focus les objectifs ?",
      "Pour avoir un meilleur KDA",
      "Parce que les objectifs rapprochent de la victoire",
      "Pour impressionner ses coéquipiers",
      "Pour gagner plus d'expérience",
      'b',
      "Les objectifs (tourelles, inhibiteurs) sont le chemin vers le Nexus et donc la victoire."
    ),
    createQuestion(
      "Que donne la destruction d'une tourelle à l'équipe ?",
      "Rien, c'est juste pour avancer",
      "De l'or global pour toute l'équipe",
      "Des points de compétence",
      "Une régénération bonus",
      'b',
      "Les tourelles détruites donnent de l'or à toute l'équipe, pas seulement au joueur qui la finit."
    ),
    createQuestion(
      "Qu'appelle-t-on la T3 ?",
      "La tourelle extérieure",
      "La tourelle du milieu",
      "La tourelle d'inhibiteur (qui protège l'inhibiteur)",
      "La troisième tourelle bonus",
      'c',
      "La T3 est la tourelle d'inhibiteur, la dernière tourelle avant l'inhibiteur sur chaque lane."
    ),
  ]
);
