import { createModule, createQuestion } from '../utils';

export const module09ScuttleCrab = createModule(
  'Carapateur de la rivière (Scuttle)',
  'scuttle-crab',
  'Le crabe de la rivière qui offre vision et vitesse de déplacement',
  9,
  // Theory Content (5+ slides)
  `## Le Carapateur de la rivière (Scuttle Crab)

Le **Scuttle Crab** (ou Rift Scuttler) est un monstre neutre **pacifique** qui se déplace dans la rivière. Contrairement aux autres monstres, il ne combat pas et tente de fuir quand il est attaqué.

## Localisation et spawn

Il y a **deux Scuttle Crabs** : un dans la rivière nord (près du Baron) et un dans la rivière sud (près du Dragon). Ils **spawn à 3:30** et réapparaissent **2 minutes 30** après avoir été tués.

## Récompenses du Scuttle

Tuer le Scuttle Crab offre :
- **Or et expérience** au tueur
- Une **zone de vision** (Speed Shrine) dans la rivière
- Un **bonus de vitesse** quand vous traversez cette zone

## La zone de vision (Speed Shrine)

Après la mort du Scuttle, une zone lumineuse apparaît dans la rivière. Cette zone :
- Fonctionne comme une **ward** qui révèle les ennemis
- Donne un **boost de vitesse** aux alliés qui la traversent
- Dure environ **90 secondes**

## Facilité de kill

Le Scuttle a une particularité : si vous lui appliquez un **CC (hard crowd control)**, sa résistance chute drastiquement. Les junglers avec un stun ou un knock-up peuvent le tuer beaucoup plus vite.

## Importance stratégique

Le premier Scuttle est souvent contesté car il offre :
- Vision sur le Dragon ou Baron
- Information sur les mouvements du jungler ennemi
- Une zone sûre pour traverser la rivière

## Contest du Scuttle

En early game, le combat pour le premier Scuttle peut déclencher des **2v2** ou même des skirmishes à 3-4 joueurs. Les laners proches doivent être prêts à aider leur jungler si le Scuttle est contesté.`,

  // Practice Instructions
  `## Objectif

Comprendre le rôle du Scuttle Crab et l'importance de la vision qu'il procure.

## Étapes

1. Lancez le Practice Tool et attendez 3:30 pour le spawn du Scuttle
2. Observez son comportement : il fuit au lieu de combattre
3. Tuez le Scuttle avec un CC pour voir la différence de vitesse de kill
4. Observez la zone de vision (Speed Shrine) créée après sa mort
5. Traversez la zone et notez le bonus de vitesse
6. Comprenez comment cette vision aide pour le contrôle du Dragon/Baron

## Critère de réussite

Vous savez quand le Scuttle spawn, comment le tuer efficacement, et pourquoi la vision qu'il donne est précieuse.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "À quelle minute spawn le premier Scuttle Crab ?",
      "2:00",
      "3:00",
      "3:30",
      "5:00",
      'c',
      "Les Scuttle Crabs apparaissent à 3 minutes 30 de jeu."
    ),
    createQuestion(
      "Le Scuttle Crab est-il agressif ?",
      "Oui, il attaque quand on s'approche",
      "Non, il est pacifique et fuit",
      "Seulement envers les junglers",
      "Il devient agressif à faible vie",
      'b',
      "Le Scuttle Crab est pacifique - il ne combat pas et essaie de fuir quand attaqué."
    ),
    createQuestion(
      "Que crée le Scuttle Crab après sa mort ?",
      "Un buff temporaire sur le tueur",
      "Une zone de vision et de vitesse (Speed Shrine)",
      "Un portail vers la base",
      "Une explosion de dégâts",
      'b',
      "Le Scuttle laisse une zone de vision qui donne aussi un boost de vitesse aux alliés."
    ),
    createQuestion(
      "Comment tuer le Scuttle Crab plus rapidement ?",
      "En utilisant des dégâts magiques",
      "En lui appliquant un hard CC",
      "En l'attaquant à plusieurs",
      "En utilisant Smite",
      'b',
      "Un CC réduit drastiquement les résistances du Scuttle, accélérant le kill."
    ),
    createQuestion(
      "Combien de Scuttle Crabs y a-t-il sur la carte ?",
      "1",
      "2",
      "3",
      "4",
      'b',
      "Il y a 2 Scuttle Crabs : un près du Baron et un près du Dragon."
    ),
    createQuestion(
      "Après combien de temps le Scuttle Crab réapparaît-il ?",
      "1 minute 30",
      "2 minutes",
      "2 minutes 30",
      "3 minutes",
      'c',
      "Le Scuttle Crab respawn 2 minutes 30 après avoir été tué."
    ),
    createQuestion(
      "Pourquoi la vision du Scuttle est-elle importante pour le Dragon ?",
      "Elle buff le Dragon",
      "Elle révèle si l'ennemi fait le Dragon",
      "Elle empêche le Dragon de spawn",
      "Elle n'a aucun rapport avec le Dragon",
      'b',
      "La zone de vision du Scuttle près du Dragon permet de voir si l'ennemi tente l'objectif."
    ),
    createQuestion(
      "Le Speed Shrine dure combien de temps ?",
      "30 secondes",
      "60 secondes",
      "Environ 90 secondes",
      "Jusqu'au respawn du Scuttle",
      'c',
      "La zone de vision du Scuttle dure environ 90 secondes."
    ),
    createQuestion(
      "Que donne le Scuttle au joueur qui le tue ?",
      "Uniquement de la vision",
      "Or et expérience",
      "Un buff permanent",
      "Une ward gratuite",
      'b',
      "Tuer le Scuttle donne de l'or et de l'expérience, en plus de créer le Speed Shrine."
    ),
    createQuestion(
      "Pourquoi le premier Scuttle est-il souvent contesté ?",
      "Il donne beaucoup d'or",
      "Il offre vision et information en early game",
      "Il spawn près du Baron",
      "Il est très facile à tuer",
      'b',
      "Le premier Scuttle offre de la vision cruciale en early game pour tracker le jungler ennemi."
    ),
  ]
);
