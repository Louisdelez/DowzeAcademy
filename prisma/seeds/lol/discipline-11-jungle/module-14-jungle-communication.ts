import { createModule, createQuestion } from '../utils';

export const module14JungleCommunication = createModule(
  'Communication en jungle',
  'jungle-communication',
  'Pings et coordination avec l\'équipe',
  14,
  // Theory Content
  `## Communication du Jungler

Le **jungler** est souvent le chef d'orchestre de l'équipe. Une bonne **communication** amplifie votre impact.

## Pourquoi communiquer ?

Importance de la communication :
- Coordonner les **ganks**
- Alerter du **jungler ennemi**
- Organiser les **objectifs**
- Éviter les **malentendus**

## Les pings essentiels

Pings à utiliser :
- **On my way** : Je viens vous aider
- **Danger** : L'ennemi est là / reculez
- **Enemy missing** : Le jungler ennemi est MIA
- **Assist me** : J'ai besoin d'aide

## Quand ping

Moments clés :
- **Avant** un gank (on my way)
- Quand vous **trackez** le jungler ennemi
- Pour setup un **objectif**
- Quand quelqu'un est en **danger**

## Ne pas over-ping

L'équilibre :
- Trop de pings = **ignorés**
- Pings **pertinents** uniquement
- **Calme** et constructif
- Pas de ping **rage**

## Communication écrite

Quand taper :
- Pour expliquer un **plan** complexe
- Pour **timer** un objectif
- Pour **coordonner** un play précis
- Rester **court** et **positif**

## Gérer les blâmes

Le jungler est souvent blâmé :
- Restez **calme**
- Ne répondez pas aux **flamers**
- Concentrez-vous sur le **jeu**
- Mute si nécessaire`,

  // Practice Instructions
  `## Objectif

Améliorer votre communication en tant que jungler.

## Étapes

1. Ping "on my way" avant chaque gank
2. Ping "danger" quand vous trackez le jungler ennemi
3. Ping les objectifs quand vous voulez les faire
4. Évitez les pings inutiles ou rage
5. Restez positif même si l'équipe blâme

## Critère de réussite

Votre équipe répond positivement à vos pings et vous coordonnez efficacement.`,

  // Questions
  [
    createQuestion(
      "Pourquoi le jungler doit communiquer ?",
      "Pas nécessaire",
      "Pour coordonner les actions et informer l'équipe",
      "Pour flame",
      "Pour se plaindre",
      'b',
      "La communication aide à coordonner l'équipe."
    ),
    createQuestion(
      "Quel ping utiliser avant un gank ?",
      "Danger",
      "On my way",
      "Enemy missing",
      "Retreat",
      'b',
      "'On my way' indique que vous venez aider."
    ),
    createQuestion(
      "Quand ping 'danger' ?",
      "Pour ganker",
      "Quand l'ennemi est proche ou quelqu'un risque",
      "Pour farm",
      "Jamais",
      'b',
      "'Danger' alerte d'un risque potentiel."
    ),
    createQuestion(
      "Trop de pings causent quoi ?",
      "Plus d'attention",
      "L'équipe les ignore",
      "Plus de dégâts",
      "Rien",
      'b',
      "L'over-ping fait que l'équipe ignore vos alertes."
    ),
    createQuestion(
      "Que faire si l'équipe vous blame ?",
      "Flame en retour",
      "Rester calme et se concentrer sur le jeu",
      "AFK",
      "Rage quit",
      'b',
      "Restez calme et concentré, pas de flame war."
    ),
    createQuestion(
      "Le ping 'assist me' sert à ?",
      "Dire bonjour",
      "Demander de l'aide",
      "Insulter",
      "Farm",
      'b',
      "'Assist me' demande à l'équipe de venir aider."
    ),
    createQuestion(
      "Quand utiliser le chat écrit ?",
      "Pour insulter",
      "Pour plans complexes ou timers",
      "Tout le temps",
      "Jamais",
      'b',
      "Le chat sert pour les plans ou informations complexes."
    ),
    createQuestion(
      "Ping les objectifs avant aide car ?",
      "Pas d'intérêt",
      "L'équipe peut se préparer et aider",
      "Pour le style",
      "C'est obligatoire",
      'b',
      "Prévenir permet à l'équipe de se coordonner."
    ),
    createQuestion(
      "Que faire avec un flamer ?",
      "Répondre",
      "Mute et jouer",
      "AFK",
      "Flame aussi",
      'b',
      "Mute les flamers et concentrez-vous sur le jeu."
    ),
    createQuestion(
      "Les pings rage sont-ils efficaces ?",
      "Oui",
      "Non, ils créent du tilt",
      "Parfois",
      "Toujours",
      'b',
      "Les pings rage aggravent l'ambiance et le tilt."
    ),
  ]
);
