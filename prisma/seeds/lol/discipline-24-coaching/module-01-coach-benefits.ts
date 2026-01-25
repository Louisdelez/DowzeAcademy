import { createModule, createQuestion } from '../utils';

export const module01CoachBenefits = createModule(
  "Intérêt d'un coach",
  'coach-benefits',
  "Comprendre la valeur du regard extérieur et l'apport d'un coach dans la progression",
  1,
  // Theory Content (5+ slides)
  `## L'importance du regard extérieur

Quand vous jouez à League of Legends, vous êtes concentré sur vos actions en temps réel. Il est presque impossible d'avoir une vision objective de votre gameplay. Un **coach** apporte ce regard extérieur essentiel qui vous permet d'identifier des erreurs que vous ne voyez pas vous-même.

## Les angles morts du joueur solo

Chaque joueur développe des **angles morts** : des habitudes, des erreurs récurrentes ou des opportunités manquées qu'il ne remarque plus. Un coach expérimenté repère ces patterns en quelques parties et vous aide à en prendre conscience.

## L'accélération de la progression

Sans coaching, la progression repose uniquement sur votre capacité à vous auto-évaluer. Avec un coach, vous bénéficiez de **raccourcis d'apprentissage** : il vous indique directement ce qu'il faut améliorer au lieu de vous laisser le découvrir par essai-erreur.

## Le feedback structuré

Un bon coach ne se contente pas de pointer les erreurs. Il fournit un **feedback structuré** avec des priorités claires : quoi travailler en premier, comment s'entraîner efficacement, et des objectifs mesurables pour suivre votre progression.

## La dimension psychologique

Le coaching va au-delà du gameplay. Un coach aide aussi à gérer le **mental** : le tilt, la pression du ranked, la confiance en soi. Cette dimension psychologique est souvent négligée par les joueurs qui progressent seuls.

## Récapitulatif

- Le **regard extérieur** révèle les erreurs invisibles au joueur
- Les **angles morts** sont des habitudes qu'on ne remarque plus
- Le coaching **accélère la progression** en évitant les erreurs classiques
- Un bon **feedback structuré** donne des priorités claires
- La dimension **psychologique** est aussi importante que la technique`,

  // Practice Instructions
  `## Objectif

Faire une auto-évaluation honnête de votre gameplay actuel pour identifier vos potentiels angles morts.

## Étapes

1. Jouez une partie ranked normale sans vous soucier de l'analyse
2. Immédiatement après, notez 3 erreurs que vous avez commises
3. Regardez le replay de cette même partie
4. Notez 3 erreurs supplémentaires que vous n'aviez pas remarquées en jouant
5. Comparez les deux listes et identifiez vos angles morts

## Critère de réussite

Vous avez identifié au moins 2 erreurs dans le replay que vous n'aviez pas conscientisées pendant la partie en direct.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le principal avantage d'avoir un coach ?",
      "Il joue les parties à votre place",
      "Il fournit un regard extérieur objectif sur votre gameplay",
      "Il vous donne des skins gratuits",
      "Il booste votre compte",
      'b',
      "Un coach apporte une perspective externe que vous ne pouvez pas avoir en étant concentré sur votre propre jeu."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'angle mort' dans le contexte du coaching ?",
      "Une zone de la map sans vision",
      "Une erreur récurrente que le joueur ne remarque pas",
      "Un bug du jeu",
      "Un champion qu'on ne sait pas jouer",
      'b',
      "Les angles morts sont des habitudes ou erreurs que le joueur ne perçoit plus à force de les répéter."
    ),
    createQuestion(
      "Comment un coach accélère-t-il la progression ?",
      "En jouant à votre place pour monter votre rang",
      "En vous donnant directement ce qu'il faut améliorer",
      "En vous faisant jouer plus de parties",
      "En désactivant le chat",
      'b',
      "Le coach identifie les points d'amélioration et évite le long processus d'auto-découverte par essai-erreur."
    ),
    createQuestion(
      "Qu'est-ce qu'un feedback structuré ?",
      "Des critiques sans solutions",
      "Des conseils avec priorités et objectifs mesurables",
      "Des insultes constructives",
      "Un rapport automatique du jeu",
      'b',
      "Un feedback structuré indique quoi travailler en premier avec des étapes claires et des moyens de mesurer le progrès."
    ),
    createQuestion(
      "Quelle dimension le coaching aborde-t-il au-delà du gameplay ?",
      "La dimension financière",
      "La dimension psychologique et mentale",
      "La dimension culinaire",
      "La dimension administrative",
      'b',
      "Le coaching aide aussi à gérer le mental : tilt, pression, confiance en soi."
    ),
    createQuestion(
      "Pourquoi est-il difficile de s'auto-évaluer objectivement ?",
      "Parce que le jeu cache les statistiques",
      "Parce qu'on est concentré sur les actions en temps réel",
      "Parce que les replays sont payants",
      "Parce que le système est injuste",
      'b',
      "En jouant, on est focalisé sur l'action immédiate et on ne peut pas prendre de recul objectif."
    ),
    createQuestion(
      "Que fait un coach quand il observe une partie ?",
      "Il joue sur un autre compte en même temps",
      "Il repère les patterns et erreurs du joueur",
      "Il commente pour divertir",
      "Il note juste les kills et deaths",
      'b',
      "Le coach analyse le gameplay pour identifier les erreurs récurrentes et les axes d'amélioration."
    ),
    createQuestion(
      "Quel problème courant un coach aide-t-il à gérer ?",
      "Les problèmes de connexion internet",
      "Le tilt et la perte de confiance",
      "Les bugs du client",
      "Le prix des skins",
      'b',
      "La dimension psychologique du coaching inclut la gestion du tilt et de la confiance en soi."
    ),
    createQuestion(
      "Sans coaching, sur quoi repose principalement la progression ?",
      "Sur la chance des matchmaking",
      "Sur la capacité à s'auto-évaluer",
      "Sur le nombre de parties jouées",
      "Sur les champions joués",
      'b',
      "Sans regard extérieur, le joueur doit compter uniquement sur sa propre analyse, ce qui a des limites."
    ),
    createQuestion(
      "Quel est un 'raccourci d'apprentissage' qu'offre le coaching ?",
      "Des codes de triche",
      "L'identification directe des erreurs à corriger",
      "Sauter les tutoriels",
      "Jouer en mode facile",
      'b',
      "Au lieu de découvrir les erreurs par soi-même, le coach les pointe directement pour accélérer l'apprentissage."
    ),
  ]
);
