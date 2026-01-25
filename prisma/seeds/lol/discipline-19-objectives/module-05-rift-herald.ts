import { createModule, createQuestion } from '../utils';

export const module05RiftHerald = createModule(
  'Héraut de la faille',
  'rift-herald',
  "Le monstre de début de partie qui aide à détruire les tourelles",
  5,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le Héraut de la Faille ?

Le **Héraut de la Faille** (Rift Herald, surnommé "Shelly") est un monstre neutre qui apparaît dans la fosse du Baron en début de partie. Contrairement au Baron, il peut être tué relativement facilement et offre un outil de siège précoce.

## Apparition et timing

Le Héraut de la Faille **spawn à 8 minutes** de jeu. Il peut apparaître **deux fois** avant d'être remplacé par le Baron à 20 minutes. Après être tué, le second Héraut réapparaît après **6 minutes**.

## Point faible : l'oeil

Le Héraut possède un **point faible** sur son dos : un oeil violet qui s'ouvre périodiquement. Frapper cet oeil inflige des dégâts massifs (12% de ses PV max), permettant de le tuer beaucoup plus rapidement.

## L'Oeil du Héraut

Quand le Héraut est tué, il laisse tomber l'**Oeil du Héraut**. Un joueur peut le ramasser (remplace temporairement la trinket). L'oeil doit être utilisé dans les **4 minutes** ou il disparaît.

## Invoquer le Héraut

En utilisant l'Oeil, vous invoquez le Héraut sur la lane où vous vous trouvez. Le Héraut **charge les structures** ennemies, leur infligeant des dégâts massifs avec sa tête (jusqu'à 2000+ dégâts sur une tourelle).

## Stratégie du Héraut

Le Héraut est idéal pour :
- Détruire la première tourelle (First Tower bonus gold)
- Ouvrir une lane pour permettre les roams
- Créer de la pression sur la carte

**Conseil** : Utilisez le Héraut sur une lane sans plaques pour maximiser sa durée de vie et ses charges.

## Double Héraut

En early-game bien géré, une équipe peut obtenir **les deux Hérauts** avant 20 minutes. Cela peut donner un avantage de tourelles significatif et accélérer le rythme de la partie.`,

  // Practice Instructions
  `## Objectif

Apprendre à tuer efficacement le Héraut et à utiliser son invocation stratégiquement.

## Étapes

1. Lancez le Practice Tool et avancez le temps jusqu'à 8 minutes
2. Rendez-vous dans la fosse du Baron pour trouver le Héraut
3. Observez l'oeil sur son dos et frappez-le quand il s'ouvre
4. Ramassez l'Oeil du Héraut après l'avoir tué
5. Utilisez l'Oeil sur une lane pour invoquer le Héraut
6. Observez comment il charge et détruit la tourelle

## Critère de réussite

Vous pouvez tuer le Héraut en exploitant son point faible et utiliser son invocation pour détruire une tourelle efficacement.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "À quelle minute apparaît le premier Héraut de la Faille ?",
      "5 minutes",
      "8 minutes",
      "10 minutes",
      "14 minutes",
      'b',
      "Le premier Héraut de la Faille spawn à 8 minutes de jeu."
    ),
    createQuestion(
      "Où se trouve le point faible du Héraut ?",
      "Sur sa tête",
      "Sur son ventre",
      "Sur son dos (un oeil)",
      "Sur ses pattes",
      'c',
      "L'oeil violet sur le dos du Héraut est son point faible - le frapper inflige des dégâts massifs."
    ),
    createQuestion(
      "Combien de temps avez-vous pour utiliser l'Oeil du Héraut ?",
      "2 minutes",
      "3 minutes",
      "4 minutes",
      "5 minutes",
      'c',
      "L'Oeil du Héraut expire après 4 minutes s'il n'est pas utilisé."
    ),
    createQuestion(
      "Combien de fois le Héraut peut-il spawn avant le Baron ?",
      "Une seule fois",
      "Deux fois",
      "Trois fois",
      "Il spawn infiniment",
      'b',
      "Le Héraut peut apparaître deux fois avant d'être remplacé par le Baron à 20 minutes."
    ),
    createQuestion(
      "Que fait le Héraut quand il est invoqué ?",
      "Il attaque les champions ennemis",
      "Il charge et détruit les structures",
      "Il donne un buff à votre équipe",
      "Il place des wards sur la carte",
      'b',
      "Le Héraut charge les structures ennemies et leur inflige des dégâts massifs."
    ),
    createQuestion(
      "Quel est le surnom affectueux du Héraut de la Faille ?",
      "Bobby",
      "Shelly",
      "Herald",
      "Nashy",
      'b',
      "Le Héraut de la Faille est affectueusement surnommé 'Shelly' par la communauté."
    ),
    createQuestion(
      "Pourquoi le premier Héraut est-il stratégiquement important ?",
      "Il donne beaucoup d'expérience",
      "Il aide à prendre la première tourelle",
      "Il buff tous les sbires",
      "Il révèle les ennemis",
      'b',
      "Le premier Héraut aide à obtenir la First Tower, qui donne du gold bonus à l'équipe."
    ),
    createQuestion(
      "Après combien de temps le second Héraut apparaît-il ?",
      "4 minutes après le premier",
      "5 minutes après le premier",
      "6 minutes après le premier",
      "8 minutes après le premier",
      'c',
      "Le second Héraut spawn 6 minutes après que le premier a été tué."
    ),
    createQuestion(
      "Où doit-on utiliser l'Oeil pour invoquer le Héraut ?",
      "Uniquement dans la jungle",
      "N'importe où sur la carte",
      "Sur une lane, là où on veut qu'il charge",
      "Dans la fosse du Baron",
      'c',
      "L'Oeil s'utilise sur la lane où vous voulez que le Héraut pousse et détruise les structures."
    ),
    createQuestion(
      "Combien de dégâts environ le Héraut peut-il infliger à une tourelle ?",
      "500 dégâts",
      "1000 dégâts",
      "Plus de 2000 dégâts",
      "Il ne peut pas attaquer les tourelles",
      'c',
      "La charge du Héraut peut infliger plus de 2000 dégâts à une tourelle, ce qui est énorme en early game."
    ),
  ]
);
