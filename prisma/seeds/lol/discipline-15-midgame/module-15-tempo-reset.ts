import { createModule, createQuestion } from '../utils';

export const module15TempoReset = createModule(
  'Tempo et reset',
  'tempo-reset',
  'Synchroniser back général',
  15,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le tempo ?

Le **tempo** désigne le rythme auquel vous prenez des actions sur la carte. Un bon tempo signifie être toujours au bon endroit au bon moment, tandis que l'ennemi est en retard ou mal positionné. Le tempo se gagne et se perd à chaque décision.

## Le reset : revenir à la base

Le **reset** (ou recall/back) est le moment où vous retournez à la base pour :
- **Dépenser votre or** : acheter des items
- **Récupérer vie et mana** : revenir à 100%
- **Recharger les wards** : trinket et control wards

Un bon reset maintient votre tempo. Un mauvais reset vous fait perdre des vagues, des objectifs ou des fights.

## Timing du reset individuel

Quand faire un reset optimal :
- **Après un kill** : vous avez du temps pendant le respawn ennemi
- **Après avoir push sous la tourelle** : la vague rebondit
- **Avant un objectif** : être full HP/mana pour le fight
- **Avec 1000g+** : avoir assez pour un item significatif

Évitez de reset quand un objectif est imminent ou quand votre vague push vers vous.

## Le reset d'équipe synchronisé

Le **reset synchronisé** est quand toute l'équipe back ensemble :
- **Après un teamfight gagné + objectif** : tout le monde a de l'or
- **Avant Baron/Elder** : être en pleine forme pour le fight
- **Quand les vagues sont pushées** : personne ne perd de farm

Le reset synchronisé assure que toute l'équipe arrive ensemble, évitant les fights en désavantage numérique.

## Récapitulatif

Le tempo et les resets sont fondamentaux pour le macro :
- Le tempo est le rythme de vos actions sur la carte
- Reset quand vous avez push votre vague ou après un kill
- Avant un objectif majeur, reset pour être en pleine forme
- Synchronisez les resets d'équipe pour arriver ensemble
- Un mauvais timing de reset peut coûter un objectif ou un fight`,

  // Practice Instructions
  `## Objectif

Maîtriser le timing de vos resets individuels et participer à au moins un reset d'équipe synchronisé avant un objectif majeur.

## Étapes

1. Pendant la partie, notez votre gold : resetez quand vous avez 1000g+ et la vague pushée
2. Après un kill, vérifiez si c'est un bon moment pour reset (vague pushée, pas d'objectif imminent)
3. Avant un Dragon ou Baron, vérifiez si votre équipe a besoin d'un reset
4. Si oui, communiquez "reset for dragon" et attendez que tout le monde soit prêt
5. Resetez ensemble et rejoignez l'objectif avec vie/mana pleins
6. Comparez votre arrivée à l'objectif avec celle de l'équipe ennemie

## Critère de réussite

Vous avez participé à un reset synchronisé d'équipe avant un objectif majeur et êtes arrivé au fight avec vie et mana pleins.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le 'tempo' dans League of Legends ?",
      "La vitesse de déplacement",
      "Le rythme auquel vous prenez des actions sur la carte",
      "Le temps de respawn",
      "La durée de la partie",
      'b',
      "Le tempo représente votre capacité à être au bon endroit au bon moment, toujours en avance sur l'ennemi."
    ),
    createQuestion(
      "Qu'est-ce qu'un reset ?",
      "Recommencer la partie",
      "Retourner à la base pour acheter et récupérer",
      "Mourir volontairement",
      "Changer de champion",
      'b',
      "Le reset consiste à retourner à la base pour dépenser l'or et récupérer vie/mana."
    ),
    createQuestion(
      "Quand est-il optimal de reset ?",
      "Quand la vague push vers vous",
      "Après avoir push la vague sous la tourelle ennemie",
      "Quand un objectif est imminent",
      "Dès que vous avez 100g",
      'b',
      "Reset quand votre vague est sous la tourelle ennemie maximise le temps avant qu'elle ne revienne."
    ),
    createQuestion(
      "Pourquoi éviter de reset avant un objectif ?",
      "Le reset coûte de l'or",
      "Vous risquez de rater le fight ou d'arriver en retard",
      "Les items ne marchent pas près des objectifs",
      "Le reset est interdit avant les objectifs",
      'b',
      "Reset au mauvais moment peut vous faire rater un fight crucial ou arriver en désavantage."
    ),
    createQuestion(
      "Qu'est-ce qu'un reset synchronisé d'équipe ?",
      "Quand tout le monde meurt en même temps",
      "Quand toute l'équipe back ensemble",
      "Quand les wards sont placées en même temps",
      "Quand tous les ultimates sont prêts",
      'b',
      "Le reset synchronisé assure que toute l'équipe arrive au prochain fight ensemble et en pleine forme."
    ),
    createQuestion(
      "Combien d'or minimum devriez-vous avoir pour un reset efficace ?",
      "100g",
      "500g",
      "1000g",
      "3000g",
      'c',
      "Avoir au moins 1000g assure un achat significatif qui justifie le temps de déplacement."
    ),
    createQuestion(
      "Après quel événement est-il souvent bon de reset ?",
      "Après avoir raté un skill-shot",
      "Après un kill (pendant le respawn ennemi)",
      "Dès le début de la partie",
      "Pendant un teamfight",
      'b',
      "Un kill vous donne du temps (respawn ennemi) pour reset sans perdre de pression."
    ),
    createQuestion(
      "Pourquoi synchroniser les resets avant Baron ?",
      "Le Baron donne plus d'or si tous sont présents",
      "Pour être tous en pleine forme et arriver ensemble au fight",
      "Pour vendre ses items",
      "Ce n'est pas nécessaire",
      'b',
      "Le Baron est un objectif décisif ; y arriver avec vie/mana pleins et ensemble est crucial."
    ),
    createQuestion(
      "Qu'est-ce qui caractérise un mauvais reset ?",
      "Avoir trop d'or",
      "Perdre une vague, un objectif ou un fight",
      "Acheter des wards",
      "Récupérer son mana",
      'b',
      "Un mauvais timing de reset coûte des ressources (vagues) ou des opportunités (objectifs, fights)."
    ),
    createQuestion(
      "Comment communiquer un reset d'équipe ?",
      "Ne rien dire et espérer",
      "Pinger ou écrire 'reset for [objectif]'",
      "Forcer tout le monde à mourir",
      "Attendre que le jungler décide",
      'b',
      "Une communication claire assure que tout le monde comprend le plan et reset ensemble."
    ),
  ]
);
