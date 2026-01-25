import { createModule, createQuestion } from '../utils';

export const module06DiscordForums = createModule(
  "Discords et forums d'équipe",
  'discord-forums',
  "Trouver des coéquipiers et rejoindre des communautés de joueurs",
  6,
  // Theory Content (5+ slides)
  `## L'importance de la communauté

League of Legends est un jeu d'équipe, et jouer avec des partenaires réguliers améliore considérablement l'expérience. Les serveurs Discord et forums sont les meilleurs endroits pour trouver des coéquipiers compatibles.

## Discord - Le hub des joueurs

**Discord** est devenu la plateforme de référence :
- **Serveurs officiels** : Discord officiel LoL France
- **Serveurs de coaching** : Communautés avec coaches gratuits
- **Serveurs de recrutement** : Pour trouver une équipe
- **Serveurs de champions** : Communautés dédiées à un champion

La plupart des serveurs ont des canaux dédiés à la recherche de duo/flex.

## Trouver des coéquipiers adaptés

Pour trouver de bons partenaires de jeu :
1. **Spécifiez votre rang** : Jouez avec des joueurs de niveau similaire
2. **Définissez vos horaires** : Disponibilités compatibles
3. **Précisez votre style** : Casual, tryhard, pour le fun...
4. **Mentionnez vos rôles** : Évitez les conflits de position

Un bon duo n'est pas forcément le meilleur joueur, mais celui avec qui vous vous entendez bien.

## Les équipes amateurs et semi-pro

Pour ceux qui veulent aller plus loin :
- **Clash** : Tournoi intégré au jeu pour équipes de 5
- **Leagues amateurs** : Compétitions organisées par la communauté
- **Ligues universitaires** : Pour les étudiants
- **Recrutement semi-pro** : Pour les joueurs très compétitifs

Ces compétitions sont une excellente façon de vivre l'expérience compétitive.

## Étiquette et communication

Pour bien s'intégrer dans une communauté :
- **Soyez respectueux** : Le toxicité fait fuir les bons joueurs
- **Communiquez clairement** : Utilisez le vocal quand possible
- **Soyez fiable** : Respectez les horaires convenus
- **Acceptez les critiques** : Elles aident à progresser

Une bonne réputation dans la communauté ouvre des portes.`,

  // Practice Instructions
  `## Objectif

Rejoindre une communauté Discord LoL et identifier des moyens de trouver des coéquipiers.

## Étapes

1. Recherchez "Discord LoL France" ou "Discord League of Legends FR" sur Google
2. Rejoignez au moins un serveur francophone actif
3. Explorez les différents canaux disponibles
4. Identifiez le canal dédié à la recherche de duo/équipe
5. Lisez les règles du serveur
6. Rédigez (sans forcément poster) une annonce de recherche de duo incluant : votre rang, rôle, horaires et style de jeu

## Critère de réussite

Vous avez rejoint un serveur Discord LoL francophone et savez comment poster une annonce de recherche de partenaires de jeu.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi jouer avec des partenaires réguliers est-il bénéfique ?",
      "Cela augmente automatiquement votre MMR",
      "Cela améliore la coordination et la communication",
      "C'est obligatoire pour jouer en ranked",
      "Cela donne des bonus de LP",
      'b',
      "Des partenaires réguliers permettent une meilleure synergie et communication."
    ),
    createQuestion(
      "Quelle plateforme est devenue la référence pour les communautés LoL ?",
      "Facebook",
      "Discord",
      "WhatsApp",
      "Skype",
      'b',
      "Discord est la plateforme principale pour les communautés de joueurs LoL."
    ),
    createQuestion(
      "Que faut-il préciser quand on cherche un duo ?",
      "Son adresse email",
      "Son rang, rôles, horaires et style de jeu",
      "Son numéro de téléphone",
      "Sa date de naissance",
      'b',
      "Ces informations aident à trouver des partenaires compatibles."
    ),
    createQuestion(
      "Qu'est-ce que Clash dans League of Legends ?",
      "Un mode de jeu solo",
      "Un tournoi intégré au jeu pour équipes de 5",
      "Un nouveau champion",
      "Un système de classement",
      'b',
      "Clash est un tournoi officiel intégré au jeu pour les équipes de 5 joueurs."
    ),
    createQuestion(
      "Quelle qualité est importante pour bien s'intégrer dans une communauté ?",
      "Être le meilleur joueur possible",
      "Être respectueux et fiable",
      "Avoir un micro de haute qualité",
      "Jouer tous les jours",
      'b',
      "Le respect et la fiabilité sont essentiels pour une bonne intégration."
    ),
    createQuestion(
      "Pourquoi est-il recommandé de jouer avec des joueurs de niveau similaire ?",
      "C'est obligatoire par les règles du jeu",
      "Pour avoir des parties équilibrées et progresser ensemble",
      "Pour éviter les sanctions",
      "Pour gagner plus de LP",
      'b',
      "Un niveau similaire permet des parties plus équilibrées et un apprentissage mutuel."
    ),
    createQuestion(
      "Qu'est-ce qu'une ligue amateur ?",
      "Une ligue réservée aux nouveaux joueurs",
      "Une compétition organisée par la communauté",
      "Le système de classement normal",
      "Un mode d'entraînement",
      'b',
      "Les ligues amateurs sont des compétitions organisées par et pour la communauté."
    ),
    createQuestion(
      "Pourquoi la communication vocale est-elle recommandée en équipe ?",
      "Elle est obligatoire sur Discord",
      "Elle permet des réactions plus rapides et une meilleure coordination",
      "Elle augmente les LP gagnés",
      "C'est la seule façon de parler à ses coéquipiers",
      'b',
      "Le vocal permet une communication plus rapide et efficace que le chat."
    ),
    createQuestion(
      "Que signifie 'être fiable' dans le contexte d'une équipe ?",
      "Toujours carry les parties",
      "Respecter les horaires et engagements pris",
      "Avoir une bonne connexion internet",
      "Ne jamais perdre une partie",
      'b',
      "La fiabilité signifie respecter ses engagements et horaires convenus."
    ),
    createQuestion(
      "Où peut-on généralement trouver des serveurs Discord LoL ?",
      "Uniquement sur le site de Riot",
      "Via une recherche Google ou des annuaires Discord",
      "Exclusivement dans le client du jeu",
      "Dans les magazines de jeux vidéo",
      'b',
      "Une recherche Google ou les annuaires Discord permettent de trouver des serveurs."
    ),
  ]
);
