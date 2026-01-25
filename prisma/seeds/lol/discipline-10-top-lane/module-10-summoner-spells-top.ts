import { createModule, createQuestion } from '../utils';

export const module10SummonerSpellsTop = createModule(
  'Sorts d\'invocateur Top',
  'summoner-spells-top',
  'Choix stratégique entre Teleport et Ignite',
  10,
  // Theory Content
  `## Choix des Sorts d'Invocateur

En top lane, le choix des **sorts d'invocateur** influence votre style de jeu et votre impact sur la partie.

## Flash : Indispensable

Pourquoi toujours **Flash** :
- **Mobilité** défensive et offensive
- **Escape** des ganks
- **Flash engage** ou flash pour finir
- Quasi-obligatoire sur 99% des champions

## Teleport : Impact Map

Avantages du **Teleport** :
- Rejoindre les **teamfights** distants
- Retourner en **lane** rapidement après un back
- Pression sur les **objectifs** (Dragon, Herald)
- Impact **global** sur la carte

## Ignite : Pression Lane

Avantages d'**Ignite** :
- Plus de **kill pressure** en 1v1
- Réduit le **heal** de l'adversaire
- **Snowball** la lane plus facilement
- Domination **early game**

## Quand Prendre Teleport ?

Situations favorables au TP :
- Vous jouez un **tank** ou **late game** champion
- Votre équipe a besoin de **vous** en teamfight
- Le **matchup** est difficile (TP pour survivre)
- Vous préférez l'**impact map**

## Quand Prendre Ignite ?

Situations favorables à Ignite :
- Vous jouez un **early game** champion
- Le matchup est **gagnable** en 1v1
- Vous voulez **snowball** votre lane
- L'adversaire a du **sustain** (Ignite réduit heal)

## Autres Options

Sorts alternatifs :
- **Ghost** : Pour champions qui chargent (Darius, Garen)
- **Exhaust** : Contre assassins ou duelistes
- **Barrier** : Très rare, contre burst extrême`,

  // Practice Instructions
  `## Objectif

Comprendre quand choisir Teleport versus Ignite selon le matchup et la composition.

## Étapes

1. Jouez plusieurs parties avec Teleport et notez votre impact map
2. Jouez avec Ignite et observez votre dominance en lane
3. Analysez quel sort vous a permis de gagner plus de parties
4. Identifiez les matchups où chaque sort est optimal
5. Adaptez votre choix selon la composition d'équipe

## Critère de réussite

Vous choisissez le bon sort selon le matchup et vous l'utilisez efficacement.`,

  // Questions
  [
    createQuestion(
      "Quel sort est quasi-obligatoire sur tous les champions top ?",
      "Teleport",
      "Flash",
      "Ignite",
      "Ghost",
      'b',
      "Flash est indispensable pour la mobilité et les escapes."
    ),
    createQuestion(
      "Teleport permet principalement quoi ?",
      "Plus de dégâts",
      "Impact global sur la carte et rejoindre les teamfights",
      "Heal en lane",
      "Plus de vitesse",
      'b',
      "TP donne un impact map en rejoignant les combats distants."
    ),
    createQuestion(
      "Ignite est meilleur pour ?",
      "Impact global",
      "Kill pressure et snowball en lane",
      "Tank en teamfight",
      "Fuir les ganks",
      'b',
      "Ignite augmente votre potentiel de kill en 1v1."
    ),
    createQuestion(
      "Quand prendre Teleport plutôt qu'Ignite ?",
      "Quand vous voulez dominer la lane",
      "Quand vous jouez tank ou late game champion",
      "Contre des champions faibles",
      "Jamais",
      'b',
      "TP est meilleur pour les tanks et champions late game."
    ),
    createQuestion(
      "Ignite réduit quel effet sur l'adversaire ?",
      "Les dégâts",
      "Le heal et régénération",
      "La vitesse",
      "L'armure",
      'b',
      "Ignite réduit les soins reçus de 40%."
    ),
    createQuestion(
      "Ghost est souvent pris sur quels champions ?",
      "Les mages",
      "Les champions qui chargent (Darius, Garen)",
      "Les ADC",
      "Les supports",
      'b',
      "Ghost aide les champions mêlée à coller leur cible."
    ),
    createQuestion(
      "Si le matchup est très difficile, quel sort aide à survivre ?",
      "Ignite",
      "Teleport",
      "Smite",
      "Cleanse",
      'b',
      "TP permet de revenir en lane après des backs forcés."
    ),
    createQuestion(
      "Contre un champion avec beaucoup de sustain (heal), que prendre ?",
      "Teleport",
      "Ignite",
      "Ghost",
      "Barrier",
      'b',
      "Ignite réduit le heal, contrant les champions sustain."
    ),
    createQuestion(
      "Pourquoi Ignite aide au snowball ?",
      "Donne de l'or bonus",
      "Permet de tuer plus facilement et prendre de l'avance",
      "Augmente le CS",
      "Réduit les cooldowns",
      'b',
      "Les kills précoces grâce à Ignite font snowball la lane."
    ),
    createQuestion(
      "Un champion early game devrait souvent prendre ?",
      "Teleport",
      "Ignite",
      "Smite",
      "Clarity",
      'b',
      "Ignite maximise le potentiel de kill en early game."
    ),
  ]
);
