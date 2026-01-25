import { createModule, createQuestion } from '../utils';

export const module06TrainingSchedule = createModule(
  "Planning d'entraînement",
  'training-schedule',
  'Structurer ses journées et sessions pour une progression optimale',
  6,
  // Theory Content (5+ slides)
  `## Pourquoi structurer son entraînement ?

Jouer sans structure mène à la **stagnation**. Un planning d'entraînement transforme vos sessions en **progression intentionnelle**. Au lieu de lancer des parties au hasard, chaque session a un objectif précis. Les joueurs qui structurent leur entraînement progressent 2 à 3 fois plus vite.

## Les composantes d'une session équilibrée

Une session efficace comprend : un **échauffement** (5-10 minutes en mode pratique ou ARAM), des **parties ciblées** avec un objectif précis (ex: focus sur le CS), et une **review rapide** après chaque partie. Terminez par un **cooldown** pour éviter de finir sur une défaite frustrante.

## Planifier la semaine

Répartissez vos activités sur la semaine : **solo queue** pour le classement, **review de replays** (2-3 par semaine), **pratique mécanique** (drills de CS, combos), et **théorie** (vidéos éducatives, streams de pros). Un planning typique dédie 60% au jeu, 20% à la review, 20% à la théorie.

## Gérer son énergie et son temps

Jouez vos parties ranked quand vous êtes au **meilleur de votre forme** : reposé, concentré, sans distractions. Gardez les reviews et la théorie pour les moments de fatigue. Ne jouez jamais ranked après 23h si vous êtes fatigué, c'est du LP perdu.

## Les pauses et le repos

Le repos fait partie de l'entraînement. Prenez une **pause de 5-10 minutes** entre chaque partie pour reset mentalement. Accordez-vous **1-2 jours off** par semaine pour éviter le burnout. La progression à long terme nécessite de la récupération.

## Récapitulatif

- Un **planning structuré** accélère la progression de 2-3x
- Chaque session : **échauffement**, parties ciblées, **review**, cooldown
- Répartition hebdomadaire : 60% jeu, 20% review, 20% théorie
- Jouez ranked au **meilleur de votre forme**
- **Pauses** entre les parties et **jours de repos** évitent le burnout`,

  // Practice Instructions
  `## Objectif

Créer un planning d'entraînement personnalisé pour la semaine à venir.

## Étapes

1. Évaluez le temps que vous pouvez consacrer à LoL cette semaine
2. Identifiez vos créneaux de meilleure énergie pour le ranked
3. Planifiez au moins 2 sessions de review de replay
4. Incluez 1-2 sessions de pratique mécanique (CS, combos)
5. Prévoyez au moins 1 jour de repos complet

## Critère de réussite

Vous avez un planning écrit avec des créneaux spécifiques pour chaque type d'activité sur 7 jours.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi structurer son entraînement est-il important ?",
      "Ce n'est pas vraiment important",
      "Cela transforme les sessions en progression intentionnelle",
      "Pour impressionner ses amis",
      "Pour avoir plus de temps libre",
      'b',
      "Un planning structuré donne un objectif à chaque session et accélère la progression."
    ),
    createQuestion(
      "Quelle est la répartition hebdomadaire recommandée ?",
      "100% solo queue",
      "60% jeu, 20% review, 20% théorie",
      "50% review, 50% théorie",
      "80% théorie, 20% jeu",
      'b',
      "Cette répartition équilibre la pratique active, l'analyse et l'apprentissage théorique."
    ),
    createQuestion(
      "Que faut-il faire avant de lancer des parties ranked ?",
      "Rien, commencer directement",
      "Un échauffement en mode pratique ou ARAM",
      "Regarder des streams pendant 1 heure",
      "Vérifier la météo",
      'b',
      "L'échauffement prépare les réflexes et la concentration pour les parties importantes."
    ),
    createQuestion(
      "Quand faut-il jouer ses parties ranked ?",
      "N'importe quand",
      "Quand on est au meilleur de sa forme",
      "Uniquement le weekend",
      "Après 23h pour avoir moins de joueurs",
      'b',
      "Les parties ranked doivent être jouées reposé et concentré pour maximiser les chances de victoire."
    ),
    createQuestion(
      "Pourquoi éviter de jouer ranked après 23h en étant fatigué ?",
      "Les serveurs sont plus lents",
      "C'est du LP perdu à cause de la fatigue",
      "Il y a plus de trolls",
      "Le matchmaking est différent",
      'b',
      "La fatigue diminue les performances et mène à des défaites évitables."
    ),
    createQuestion(
      "Combien de jours de repos par semaine sont recommandés ?",
      "Aucun, il faut jouer tous les jours",
      "1-2 jours",
      "5 jours minimum",
      "Seulement quand on est malade",
      'b',
      "1-2 jours de repos par semaine évitent le burnout et permettent la récupération mentale."
    ),
    createQuestion(
      "Que faire entre chaque partie ranked ?",
      "Enchaîner immédiatement la suivante",
      "Prendre une pause de 5-10 minutes",
      "Regarder un film complet",
      "Jouer à un autre jeu",
      'b',
      "Les pauses permettent de reset mentalement et évitent le tilt accumulé."
    ),
    createQuestion(
      "Que faire après une série de défaites frustrantes ?",
      "Continuer jusqu'à regagner le LP perdu",
      "Arrêter la session et prendre du recul",
      "Flame dans le chat",
      "Changer de compte",
      'b',
      "Arrêter après une série négative évite le tilt et la perte de LP supplémentaire."
    ),
    createQuestion(
      "Quand programmer les sessions de review de replay ?",
      "Jamais, c'est une perte de temps",
      "Pendant les moments de fatigue ou après les parties",
      "Seulement le 1er janvier",
      "Avant chaque partie",
      'b',
      "Les reviews demandent moins d'énergie que le jeu actif et conviennent aux moments de fatigue."
    ),
    createQuestion(
      "De combien les joueurs structurés progressent-ils plus vite ?",
      "Pareil que les autres",
      "2-3 fois plus vite",
      "10 fois plus vite",
      "Ils progressent moins vite",
      'b',
      "La structure et l'intentionnalité multiplient par 2 à 3 la vitesse de progression."
    ),
  ]
);
