import { createModule, createQuestion } from '../utils';

export const module02FindingCoach = createModule(
  'Trouver un coach/mentor',
  'finding-coach',
  'Plateformes, communautés et équipes pour trouver un accompagnement adapté',
  2,
  // Theory Content (5+ slides)
  `## Les plateformes de coaching payant

Plusieurs plateformes proposent des coachs professionnels pour League of Legends. **Metafy**, **ProGuides**, et **Fiverr** sont parmi les plus populaires. Les prix varient de 15 à 100+ euros de l'heure selon l'expérience et le rang du coach. Vérifiez toujours les avis et le parcours du coach avant de réserver.

## Les communautés Discord et forums

De nombreuses communautés offrent du coaching gratuit ou à prix réduit. Les serveurs Discord comme **Summoner School** (anglophone) ou les communautés françaises proposent des mentors bénévoles. L'avantage est le coût, l'inconvénient est la disponibilité variable.

## Le mentorat en équipe amateur

Rejoindre une équipe amateur avec un coach intégré est excellent pour progresser. Les équipes Clash sérieuses, les ligues amateurs comme **Epik Gaming** ou **GamersOrigin Academy** offrent un encadrement structuré avec des reviews régulières.

## Les critères pour choisir un bon coach

Un bon coach doit avoir : un **rang supérieur** au vôtre (minimum Diamond pour du coaching sérieux), de l'**expérience en coaching** (pas juste en jeu), une **bonne communication**, et une **méthodologie claire**. Demandez une session d'essai quand c'est possible.

## Les streamers et créateurs de contenu

Certains streamers high-elo proposent du coaching live ou des VOD reviews. C'est un bon moyen de voir leur style avant de s'engager. Des joueurs comme **LS**, **Neace** ou **Coach Curtis** ont des ressources gratuites et des offres payantes.

## Récapitulatif

- **Plateformes payantes** : Metafy, ProGuides, Fiverr (15-100+ euros/h)
- **Communautés gratuites** : Discord Summoner School, forums francophones
- **Équipes amateurs** : coaching intégré avec reviews régulières
- **Critères de choix** : rang, expérience, communication, méthodologie
- **Streamers/créateurs** : ressources gratuites et coaching payant`,

  // Practice Instructions
  `## Objectif

Explorer les différentes options de coaching disponibles et identifier celle qui correspond le mieux à vos besoins et budget.

## Étapes

1. Visitez au moins 2 plateformes de coaching payant (Metafy, ProGuides)
2. Rejoignez un serveur Discord de la communauté LoL francophone ou Summoner School
3. Recherchez 3 coachs potentiels et notez leur rang, prix, et avis
4. Identifiez une équipe amateur locale ou en ligne avec coaching
5. Établissez un budget mensuel réaliste pour le coaching

## Critère de réussite

Vous avez une liste de 3 coachs potentiels avec leurs tarifs et avez rejoint au moins une communauté de mentoring.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle plateforme est mentionnée pour le coaching payant ?",
      "Steam",
      "Metafy",
      "Twitch",
      "YouTube",
      'b',
      "Metafy est une plateforme populaire où des coachs professionnels proposent leurs services."
    ),
    createQuestion(
      "Quel est l'avantage principal des communautés Discord pour le coaching ?",
      "Les coachs sont toujours disponibles",
      "Le coût est gratuit ou réduit",
      "Le coaching est certifié Riot",
      "On peut tricher ensemble",
      'b',
      "Les communautés comme Summoner School offrent du coaching bénévole, donc gratuit ou à prix réduit."
    ),
    createQuestion(
      "Quel rang minimum est recommandé pour un coach sérieux ?",
      "Gold",
      "Platinum",
      "Diamond",
      "Iron",
      'c',
      "Un coach Diamond minimum garantit un niveau de compréhension suffisant pour du coaching efficace."
    ),
    createQuestion(
      "Que proposent les équipes amateurs comme avantage de coaching ?",
      "Des salaires de joueur pro",
      "Un encadrement structuré avec reviews régulières",
      "Des skins exclusifs",
      "Un bypass du système de ranked",
      'b',
      "Les équipes amateurs sérieuses offrent un coaching intégré avec analyse régulière des performances."
    ),
    createQuestion(
      "Quelle fourchette de prix est indiquée pour le coaching payant ?",
      "1-5 euros/heure",
      "15-100+ euros/heure",
      "500-1000 euros/heure",
      "Toujours gratuit",
      'b',
      "Les tarifs varient de 15 à plus de 100 euros de l'heure selon l'expérience du coach."
    ),
    createQuestion(
      "Que devez-vous vérifier avant de réserver un coach payant ?",
      "Sa couleur de cheveux",
      "Les avis et son parcours",
      "Son nombre de followers",
      "Sa date de naissance",
      'b',
      "Vérifier les avis d'autres élèves et le parcours du coach aide à éviter les mauvaises surprises."
    ),
    createQuestion(
      "Quel est un critère important pour choisir un bon coach ?",
      "Qu'il soit célèbre sur YouTube",
      "Qu'il ait une méthodologie claire",
      "Qu'il joue le même champion que vous",
      "Qu'il soit de votre région",
      'b',
      "Une méthodologie claire garantit un coaching structuré et des résultats mesurables."
    ),
    createQuestion(
      "Que proposent certains streamers high-elo ?",
      "Des boosts de compte",
      "Du coaching live ou des VOD reviews",
      "Des codes de triche",
      "Des comptes gratuits",
      'b',
      "Certains streamers comme LS ou Neace proposent du coaching accessible via leur contenu."
    ),
    createQuestion(
      "Quel type de ligue amateur est mentionné pour le coaching structuré ?",
      "La LCS",
      "Epik Gaming ou GamersOrigin Academy",
      "Les Worlds",
      "Solo Queue",
      'b',
      "Ces structures amateurs offrent un encadrement avec des reviews et du coaching régulier."
    ),
    createQuestion(
      "Pourquoi demander une session d'essai est-il recommandé ?",
      "Pour avoir du coaching gratuit",
      "Pour évaluer le style et la compatibilité du coach",
      "Pour voler ses méthodes",
      "Pour se faire rembourser",
      'b',
      "Une session d'essai permet de vérifier que le coach correspond à vos attentes et votre style d'apprentissage."
    ),
  ]
);
