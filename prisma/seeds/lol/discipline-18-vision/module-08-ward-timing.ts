import { createModule, createQuestion } from '../utils';

export const module08WardTiming = createModule(
  'Timing de warding',
  'ward-timing',
  'Savoir quand poser des wards, particulièrement avant les objectifs majeurs',
  8,
  // Theory Content (5+ slides)
  `## L'importance du timing des wards

Poser une ward au **bon moment** est aussi important que la poser au bon endroit. Une ward posée trop tôt expire avant le moment critique. Une ward posée trop tard ne prévient plus du danger. Le timing parfait maximise l'utilité de chaque ward.

## Timing par rapport aux objectifs

Les objectifs (Dragon, Baron, Herald) nécessitent une préparation de vision :
- **1-2 minutes avant** le spawn : Commencez à établir la vision
- **30-60 secondes avant** : Sécurisez la zone avec des Control Wards
- **Pendant l'objectif** : Maintenez la vision pour éviter les steals

Consultez toujours le timer des objectifs dans le scoreboard (TAB).

## Timings clés en early game

Les moments critiques pour le warding early :
- **2:30-3:00** : Première ward (le jungler peut commencer à ganker)
- **3:30** : Spawn du Scuttle Crab (rivière très active)
- **5:00** : Spawn du premier Drake
- **8:00** : Potentiel de ganks augmente après le premier clear

Adaptez vos wards au timing du jungler ennemi.

## Timing basé sur les recalls

Utilisez vos recalls pour **optimiser le warding** :
- **Avant de recall** : Posez vos wards restantes
- **En revenant de base** : Wardez en chemin vers votre lane
- **Après le recall ennemi** : Profitez pour deep warder

Ne revenez jamais en lane avec des charges de ward pleines !

## Synchroniser avec votre équipe

En mid et late game, le warding devient un **effort d'équipe** :
- Communiquez avant d'aller warder ("je vais warder Baron")
- Wardez en groupe pour plus de sécurité
- Coordonnez les sweepers pour nettoyer une zone ensemble
- Établissez la vision **avant** de commencer un objectif, pas pendant`,

  // Practice Instructions
  `## Objectif

Maîtriser le timing du warding, particulièrement autour des objectifs majeurs.

## Étapes

1. Lancez une partie normale ou classée
2. Notez les timers des objectifs (Drake spawn à 5:00, respawn à 5 min après kill)
3. Posez votre première ward entre 2:30 et 3:00
4. 1-2 minutes avant chaque Drake, commencez à établir la vision autour du pit
5. Avant chaque recall, assurez-vous de poser toutes vos charges de ward
6. En revenant de base, placez une ward sur le chemin vers votre lane
7. Comptez combien de fois vous avez wardé aux bons moments (avant les objectifs)

## Critère de réussite

Vous avez établi la vision autour du Dragon au moins 1 minute avant son apparition pour 3 Drakes consécutifs, et vous n'avez jamais recall avec 2 charges pleines de ward.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien de temps avant un objectif devriez-vous commencer à établir la vision ?",
      "30 secondes",
      "1-2 minutes",
      "5 minutes",
      "Juste au moment du spawn",
      'b',
      "Commencez à warder 1-2 minutes avant un objectif pour avoir le temps de sécuriser la zone."
    ),
    createQuestion(
      "À quelle minute le premier Dragon apparaît-il ?",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      'c',
      "Le premier Dragon spawn à 5:00, donc commencez à établir la vision vers 3:30-4:00."
    ),
    createQuestion(
      "Pourquoi le timing de 2:30-3:00 est-il important pour la première ward ?",
      "C'est quand le Dragon spawn",
      "C'est quand le jungler peut commencer à ganker après son premier clear",
      "C'est quand les minions arrivent en lane",
      "C'est quand le Baron apparaît",
      'b',
      "Vers 2:30-3:00, le jungler termine son premier clear et peut commencer à ganker les lanes."
    ),
    createQuestion(
      "Que devriez-vous faire avant de recall avec des charges de ward ?",
      "Les garder pour plus tard",
      "Les poser pour ne pas gaspiller de vision potentielle",
      "Les échanger contre de l'or",
      "Ignorer les wards",
      'b',
      "Posez toujours vos wards avant de recall pour ne pas perdre de temps de recharge."
    ),
    createQuestion(
      "À quelle minute le Scuttle Crab apparaît-il pour la première fois ?",
      "2:00",
      "2:30",
      "3:00",
      "3:30",
      'd',
      "Le Scuttle Crab spawn à 3:30, rendant la rivière très active à ce moment."
    ),
    createQuestion(
      "Quel est le temps de respawn du Dragon après avoir été tué ?",
      "3 minutes",
      "4 minutes",
      "5 minutes",
      "6 minutes",
      'c',
      "Le Dragon respawn 5 minutes après avoir été éliminé."
    ),
    createQuestion(
      "Que faire en revenant de base concernant les wards ?",
      "Garder toutes les charges pour la lane",
      "Placer une ward sur le chemin vers votre lane",
      "Utiliser toutes les charges immédiatement à la fontaine",
      "Échanger contre un autre trinket",
      'b',
      "Wardez en chemin vers votre lane pour couvrir des zones sans perdre de temps."
    ),
    createQuestion(
      "Pourquoi faut-il établir la vision AVANT de commencer un objectif ?",
      "L'objectif fait plus de dégâts sans vision",
      "Pour voir les ennemis approcher et éviter les steals ou embuscades",
      "La vision augmente les dégâts à l'objectif",
      "C'est obligatoire par les règles du jeu",
      'b',
      "La vision pré-objectif vous alerte si l'ennemi approche pour contester ou steal."
    ),
    createQuestion(
      "Où peut-on voir le timer des objectifs ?",
      "Dans le chat uniquement",
      "Dans le scoreboard (TAB)",
      "Sur la mini-carte seulement",
      "Nulle part, il faut mémoriser",
      'b',
      "Le scoreboard (touche TAB) affiche les timers des objectifs majeurs."
    ),
    createQuestion(
      "Pourquoi le warding devient-il un effort d'équipe en mid/late game ?",
      "Les wards coûtent plus cher",
      "Il est dangereux de warder seul et la coordination améliore la couverture",
      "Seul le support peut warder",
      "Les wards ne fonctionnent plus individuellement",
      'b',
      "En late game, warder seul est dangereux et l'équipe doit coordonner pour couvrir la carte."
    ),
  ]
);
