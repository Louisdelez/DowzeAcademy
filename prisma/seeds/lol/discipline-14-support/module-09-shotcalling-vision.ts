import { createModule, createQuestion } from '../utils';

export const module09ShotcallingVision = createModule(
  'Shotcall et vision globale',
  'shotcalling-vision',
  'Diriger les opérations et avoir une vision macro du jeu',
  9,
  // Theory Content (5+ slides)
  `## Le support comme shotcaller

Grâce à son rôle unique (moins de focus sur le farm), le support a souvent la **meilleure vision globale** du jeu. Cela en fait un candidat naturel pour le **shotcalling** : diriger les décisions stratégiques de l'équipe.

## Observer la carte

En tant que support, vous devez constamment observer :
- Les **positions ennemies** sur la minimap
- Les **cooldowns ultimes** alliés et ennemis
- Les **timers d'objectifs** (Dragon, Baron, tourelles)
- L'**état des lanes** (qui push, qui est en danger)
- La **vision** disponible et manquante

## Types de calls

Le shotcalling inclut plusieurs types de décisions :
- **Calls d'objectifs** : "Dragon dans 30 sec, groupez"
- **Calls de rotation** : "Mid, viens bot pour dive"
- **Calls de danger** : "Back mid, jungler spotted"
- **Calls de fight** : "On peut fight, ils n'ont pas ults"
- **Calls de vision** : "On a besoin de wards baron"

## Communiquer efficacement

La communication doit être **claire et concise** :
- Utilisez les **pings** pour les informations rapides
- Annoncez les **timers** importants en avance
- Ne surchargez pas la communication vocale
- Restez **calme** même dans les situations tendues
- Acceptez quand l'équipe ne suit pas votre call

## Développer sa vision macro

Pour améliorer votre shotcalling :
- Regardez fréquemment la **minimap** (toutes les 3-5 secondes)
- Apprenez les **timers de jungle** et de respawn
- Comprenez les **win conditions** de votre composition
- Analysez les **patterns** de jeu des ennemis
- Anticipez les mouvements plutôt que de réagir

## Récapitulatif

- Le support a naturellement une **meilleure vision globale**
- Le shotcalling = diriger les décisions stratégiques
- Types : objectifs, rotations, dangers, fights, vision
- Communication **claire, concise et calme**
- Développez la vision macro en regardant souvent la minimap`,

  // Practice Instructions
  `## Objectif

Pratiquer le shotcalling en communiquant activement les informations à votre équipe.

## Étapes

1. En début de partie, regardez la minimap toutes les 5 secondes
2. Ping les ennemis manquants dans les 2 secondes
3. Annoncez le timer du dragon 45 secondes avant son spawn
4. Faites au moins 3 calls d'objectifs pendant la partie
5. Ping "danger" dès que vous voyez le jungler ennemi
6. Proposez des rotations quand des opportunités se présentent

## Critère de réussite

Vous avez fait au moins 5 calls pertinents (objectifs ou rotations) pendant la partie, et au moins 2 ont été suivis par votre équipe avec succès.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi le support est-il un bon candidat pour le shotcalling ?",
      "Il a le plus de dégâts",
      "Il a une meilleure vision globale car moins focusé sur le farm",
      "Il est toujours le leader de l'équipe",
      "Il a les meilleurs items",
      'b',
      "Le support n'a pas à se concentrer sur le farm, lui permettant de mieux observer la carte."
    ),
    createQuestion(
      "À quelle fréquence devez-vous regarder la minimap ?",
      "Une fois par minute",
      "Toutes les 3-5 secondes",
      "Uniquement pendant les fights",
      "Jamais, focusez la lane",
      'b',
      "Regarder la minimap toutes les 3-5 secondes permet de rester informé de l'état du jeu."
    ),
    createQuestion(
      "Qu'est-ce qu'un call d'objectif ?",
      "Dire à l'équipe de se battre",
      "Annoncer le timing et la prise d'un objectif",
      "Critiquer les erreurs de l'équipe",
      "Demander de l'aide en lane",
      'b',
      "Un call d'objectif indique quand et comment prendre un objectif (Dragon, Baron, tourelle)."
    ),
    createQuestion(
      "Comment communiquer un danger rapidement ?",
      "Écrire un message détaillé",
      "Utiliser le ping 'danger'",
      "Crier dans le micro",
      "Ne rien dire pour ne pas stresser",
      'b',
      "Le ping danger est le moyen le plus rapide de communiquer une menace imminente."
    ),
    createQuestion(
      "Que devez-vous faire si l'équipe ne suit pas votre call ?",
      "Vous énerver et critiquer",
      "Rester calme et adapter",
      "Abandonner la partie",
      "Faire le call seul",
      'b',
      "Si l'équipe ne suit pas, restez calme et adaptez votre stratégie. Forcer seul est souvent désastreux."
    ),
    createQuestion(
      "Quand annoncer le timer du Dragon ?",
      "Quand il spawn",
      "45 secondes à 1 minute avant",
      "5 minutes avant",
      "Jamais, l'équipe sait",
      'b',
      "Annoncer 45 secondes à 1 minute avant permet à l'équipe de se positionner."
    ),
    createQuestion(
      "Qu'est-ce qu'une 'win condition' ?",
      "Un champion très fort",
      "La condition pour gagner les fights/la partie",
      "Une règle du jeu",
      "Un objectif bonus",
      'b',
      "La win condition est ce qui fait gagner votre composition (late game, picks, teamfight, split, etc.)."
    ),
    createQuestion(
      "Que devez-vous observer concernant les ultimes ?",
      "Uniquement les vôtres",
      "Les cooldowns alliés ET ennemis",
      "Rien, ce n'est pas important",
      "Uniquement ceux des carries",
      'b',
      "Connaître les ultimes disponibles des deux côtés aide à décider quand forcer ou éviter les fights."
    ),
    createQuestion(
      "Qu'est-ce qu'un call de rotation ?",
      "Tourner sur soi-même",
      "Diriger un joueur vers une autre zone de la carte",
      "Changer de champion",
      "Modifier ses items",
      'b',
      "Un call de rotation indique à un ou plusieurs joueurs de se déplacer vers une autre zone."
    ),
    createQuestion(
      "Comment améliorer sa vision macro ?",
      "Ignorer la minimap pour se concentrer",
      "Regarder fréquemment la minimap et anticiper",
      "Uniquement suivre les autres",
      "Ne jouer que support",
      'b',
      "La vision macro s'améliore en regardant souvent la minimap et en anticipant les mouvements."
    ),
  ]
);
