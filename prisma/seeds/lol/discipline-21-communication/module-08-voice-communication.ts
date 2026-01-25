import { createModule, createQuestion } from '../utils';

export const module08VoiceCommunication = createModule(
  'Communication vocale',
  'voice-communication',
  'Maîtriser Discord, Teamspeak et la communication orale efficace',
  8,
  // Theory Content (5+ slides)
  `## L'avantage de la communication vocale

La **communication vocale** (Discord, Teamspeak, in-game voice) offre des avantages majeurs :
- **Instantanéité** : pas besoin de taper, réaction immédiate
- **Précision** : informations détaillées en temps réel
- **Coordination** : synchronisation parfaite des actions
- **Ambiance** : crée un sentiment d'équipe et de camaraderie
Les équipes professionnelles utilisent toujours le vocal.

## Les règles de base du vocal

Pour une communication vocale efficace :
- **Parlez clairement** et pas trop vite
- **Soyez concis** : évitez les monologues
- **Ne parlez pas tous en même temps**
- **Gardez un ton calme** même dans les moments intenses
- **Évitez les bruits parasites** (micro de qualité, push-to-talk)

## Les informations prioritaires en vocal

Ce qu'il faut communiquer :
- **Positions ennemies** : "Jungler top side", "Mid is roaming"
- **Cooldowns** : "Flash down on ADC", "Zed no R"
- **Appels d'objectif** : "Drake in 20, group", "Baron bait"
- **Engages** : "I'm going in on Jinx", "Wait for Malph ult"
- **Dangers** : "Care gank", "Back back back"

## Éviter les problèmes courants

Pièges à éviter en vocal :
- **Over-communication** : trop d'infos inutiles noient l'essentiel
- **Flame vocale** : encore pire que le texte, très démoralisante
- **Micro ouvert** avec bruits de fond
- **Parler pendant les combats** au lieu de jouer
- **Ne pas écouter** les autres

## Configuration technique recommandée

Pour un bon setup vocal :
- Utilisez **push-to-talk** pour éviter les bruits parasites
- Réglez le **volume** pour entendre le jeu ET le vocal
- Choisissez un **casque confortable** pour les longues sessions
- Testez votre **micro** avant de jouer
- Gardez Discord/Teamspeak à jour`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser efficacement la communication vocale pour coordonner votre équipe.

## Étapes

1. Rejoignez un serveur Discord ou utilisez le vocal in-game avec des amis
2. Configurez push-to-talk pour éviter les bruits parasites
3. Pendant la partie, communiquez les positions ennemies que vous voyez
4. Annoncez vos cooldowns importants (Flash, ultime)
5. Faites des appels d'objectif courts : "Drake now"
6. Évitez de parler pendant les moments de concentration intense

## Critère de réussite

Vous avez maintenu une communication vocale utile pendant toute la partie, partageant au moins 10 informations pertinentes sans over-communiquer.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est l'avantage principal de la communication vocale ?",
      "C'est plus amusant",
      "L'instantanéité et la précision des informations",
      "Ça permet d'insulter plus rapidement",
      "Il n'y a pas d'avantage",
      'b',
      "Le vocal permet une communication immédiate et détaillée."
    ),
    createQuestion(
      "Pourquoi utiliser push-to-talk ?",
      "Pour parler plus fort",
      "Pour éviter les bruits parasites et ne parler que quand nécessaire",
      "Parce que c'est obligatoire",
      "Pour améliorer la qualité audio",
      'b',
      "Push-to-talk empêche les bruits de fond d'interférer."
    ),
    createQuestion(
      "Quelle information est prioritaire à communiquer en vocal ?",
      "Ce que vous avez mangé avant la partie",
      "Les positions et cooldowns ennemis",
      "Vos frustrations personnelles",
      "Le score de votre dernier match",
      'b',
      "Les infos sur les ennemis aident l'équipe à prendre de meilleures décisions."
    ),
    createQuestion(
      "Qu'est-ce que l'over-communication ?",
      "Communiquer très bien",
      "Parler trop et noyer les informations importantes",
      "Ne pas assez parler",
      "Utiliser un mauvais micro",
      'b',
      "Trop d'informations inutiles empêche d'entendre l'essentiel."
    ),
    createQuestion(
      "Comment annoncer un engage en vocal ?",
      "Crier très fort",
      "Dire calmement 'I'm going in on [cible]' avant d'engager",
      "Ne rien dire pour surprendre",
      "Écrire dans le chat",
      'b',
      "Un appel clair et calme avant l'action permet à l'équipe de suivre."
    ),
    createQuestion(
      "Quel équipement améliore la qualité vocale ?",
      "Un clavier RGB",
      "Un casque avec bon micro et push-to-talk",
      "Deux écrans",
      "Une meilleure carte graphique",
      'b',
      "Un bon micro et push-to-talk garantissent une communication claire."
    ),
    createQuestion(
      "Pourquoi éviter de flame en vocal ?",
      "Le flame vocal est autorisé",
      "C'est encore plus démoralisant qu'en texte",
      "Ça améliore la performance",
      "C'est impossible de flame en vocal",
      'b',
      "Le flame vocal est très personnel et démoralise fortement les coéquipiers."
    ),
    createQuestion(
      "Quand ne pas parler en vocal ?",
      "Jamais, il faut toujours parler",
      "Pendant les moments de concentration intense comme les teamfights",
      "Pendant les temps morts",
      "En début de partie",
      'b',
      "Pendant les combats, la concentration doit être sur le jeu."
    ),
    createQuestion(
      "Quel logiciel est couramment utilisé pour le vocal ?",
      "Microsoft Word",
      "Discord ou Teamspeak",
      "Google Chrome",
      "VLC Media Player",
      'b',
      "Discord et Teamspeak sont les outils standard pour la communication vocale."
    ),
    createQuestion(
      "Comment signaler un danger urgent en vocal ?",
      "Chuchoter doucement",
      "Dire clairement 'Back back back' ou 'Care gank'",
      "Écrire dans le chat",
      "Ne rien dire pour ne pas paniquer",
      'b',
      "Un appel clair et répété attire l'attention sur le danger."
    ),
  ]
);
