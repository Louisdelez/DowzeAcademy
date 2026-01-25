import { createModule, createQuestion } from '../utils';

export const module02Jungler = createModule(
  'Jungler',
  'jungler-role',
  'Contrôleur de la jungle et maître des ganks',
  2,
  // Theory Content
  `## Le rôle du Jungler

Le **Jungler** est le joueur qui ne prend pas de lane. Au lieu de cela, il farm les **monstres neutres** de la jungle et aide ses coéquipiers avec des **ganks** (attaques surprises).

## Caractéristiques uniques

Le Jungler se distingue par :
- Utilise le sort **Smite** (obligatoire)
- Commence avec un objet de jungle spécial
- Ne conteste pas l'or/XP des lanes
- A une vue **globale** sur toute la carte

## Responsabilités principales

Le Jungler doit :
- **Farmer** les camps de jungle efficacement
- Réaliser des **ganks** pour aider les lanes
- **Contrôler les objectifs** (Dragon, Baron, Héraut)
- **Tracker** le jungler ennemi (anticiper ses mouvements)
- Placer de la **vision** dans la jungle ennemie

## Types de junglers

On distingue plusieurs styles :
- **Gankers** : Excellents pour les ganks précoces
- **Farmers** : Focus sur le farm pour le late game
- **Tanks** : Initiation et contrôle de foule
- **Assassins** : Élimination rapide des carries

## Récapitulatif

- Jungler = pas de lane, farm la jungle
- Sort Smite obligatoire
- Ganks pour aider les coéquipiers
- Contrôle Dragon, Baron, Héraut
- Rôle à impact global sur toute la carte`,

  // Practice Instructions
  `## Objectif

Comprendre les bases du rôle de Jungler.

## Étapes

1. Lancez une partie d'entraînement
2. Prenez Smite comme sort d'invocateur
3. Achetez l'objet de jungle au début
4. Farmez les camps : Buff Bleu → Gromp → Loups
5. Essayez de ganker une lane après 3 camps
6. Retournez farmer et observez le respawn des camps

## Critère de réussite

Vous comprenez la routine basique du jungler : farm des camps et gank des lanes.`,

  // Questions
  [
    createQuestion(
      "Où joue le Jungler ?",
      "Sur la Mid Lane",
      "Dans la jungle, entre les lanes",
      "En Bot Lane avec l'ADC",
      "Partout sur les lanes",
      'b',
      "Le Jungler farm les monstres neutres de la jungle, pas une lane."
    ),
    createQuestion(
      "Quel sort est obligatoire pour le Jungler ?",
      "Flash",
      "Téléportation",
      "Smite (Châtiment)",
      "Ignite",
      'c',
      "Smite est requis pour farmer la jungle efficacement et sécuriser les objectifs."
    ),
    createQuestion(
      "Qu'est-ce qu'un gank ?",
      "Tuer un monstre de jungle",
      "Une attaque surprise sur une lane",
      "Voler le buff ennemi",
      "Défendre une tourelle",
      'b',
      "Un gank est une embuscade du jungler pour surprendre les ennemis sur une lane."
    ),
    createQuestion(
      "Quels sont les objectifs majeurs que le Jungler contrôle ?",
      "Les tourelles uniquement",
      "Dragon, Baron Nashor, Héraut",
      "Les sbires uniquement",
      "La fontaine ennemie",
      'b',
      "Le Jungler est responsable de sécuriser Dragon, Baron et Héraut."
    ),
    createQuestion(
      "Que signifie 'tracker' le jungler ennemi ?",
      "Le suivre en permanence",
      "Anticiper sa position et ses mouvements",
      "Le tuer à chaque rencontre",
      "Ignorer sa présence",
      'b',
      "Tracker = surveiller et prédire où se trouve le jungler adverse."
    ),
    createQuestion(
      "Pourquoi le Jungler a-t-il un impact global ?",
      "Il a plus de dégâts",
      "Il peut intervenir sur n'importe quelle lane",
      "Il contrôle les sbires",
      "Il a plus de PV",
      'b',
      "Le Jungler peut ganker toutes les lanes et influencer toute la carte."
    ),
    createQuestion(
      "Qu'est-ce qu'un jungler 'ganker' ?",
      "Un jungler qui ne farm jamais",
      "Un jungler spécialisé dans les ganks précoces",
      "Un jungler qui vole les camps ennemis",
      "Un jungler qui reste dans sa jungle",
      'b',
      "Les gankers privilégient les ganks fréquents au farm intensif."
    ),
    createQuestion(
      "Pourquoi la vision est importante pour le Jungler ?",
      "Pour voir les sbires",
      "Pour tracker l'ennemi et sécuriser les objectifs",
      "C'est juste esthétique",
      "Pour trouver sa propre jungle",
      'b',
      "La vision permet de savoir où est l'ennemi et de prendre les objectifs en sécurité."
    ),
    createQuestion(
      "Qu'est-ce que le 'pathing' en jungle ?",
      "La décoration de la jungle",
      "L'itinéraire optimisé pour farmer les camps",
      "Les chemins de la rivière",
      "La route vers le Dragon",
      'b',
      "Le pathing est l'ordre dans lequel le jungler tue ses camps."
    ),
    createQuestion(
      "Que se passe-t-il si un Jungler ignore les objectifs ?",
      "Rien de grave",
      "L'équipe perd des buffs importants et de l'avance",
      "Les camps deviennent plus forts",
      "Le jungler gagne plus d'or",
      'b',
      "Ne pas prendre Dragon/Baron donne ces avantages à l'ennemi."
    ),
  ]
);
