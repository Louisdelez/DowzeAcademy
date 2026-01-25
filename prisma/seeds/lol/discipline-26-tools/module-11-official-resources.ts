import { createModule, createQuestion } from '../utils';

export const module11OfficialResources = createModule(
  'Ressources officielles',
  'official-resources',
  "Naviguer sur leagueoflegends.com et utiliser les ressources de Riot Games",
  11,
  // Theory Content (5+ slides)
  `## Les ressources officielles de Riot Games

Riot Games fournit de nombreuses ressources officielles pour les joueurs. Ces sources sont fiables et toujours à jour, contrairement au contenu communautaire qui peut être obsolète.

## Le site leagueoflegends.com

Le site officiel est une mine d'informations :
- **Patch notes** : Toutes les mises à jour détaillées
- **Actualités** : Événements, nouveaux champions, skins
- **Univers** : Lore et histoires des champions
- **Esports** : Calendrier et résultats compétitifs
- **Support** : Aide technique et service client

Ajoutez-le à vos favoris pour rester informé.

## L'Univers et le Lore

Le site **universe.leagueoflegends.com** développe l'histoire :
- Biographies détaillées de chaque champion
- Nouvelles et bandes dessinées
- Régions de Runeterra
- Connexions entre personnages

Comprendre le lore enrichit l'expérience de jeu.

## Les réseaux sociaux officiels

Riot est actif sur les réseaux :
- **Twitter/X** : @LeagueOfLegends, @RiotGames
- **YouTube** : League of Legends (cinematics, esports)
- **Instagram** : Artworks et annonces visuelles
- **Facebook** : Actualités et événements

Les annonces majeures arrivent souvent sur ces plateformes en premier.

## Le support Riot

En cas de problème, le support est disponible :
- **Centre d'aide** : FAQs et guides de dépannage
- **Tickets** : Pour les problèmes spécifiques
- **Récupération de compte** : En cas de hack ou perte d'accès
- **Signalements** : Comportements toxiques ou triche

Le support est généralement réactif et efficace.

## Ressources esport officielles

Pour suivre la scène compétitive :
- **lolesports.com** : Calendrier, classements, VODs
- **Pro View** : Vision des joueurs pros (service payant)
- **Wiki officiel** : Statistiques et historiques des équipes

Regarder les pros est un excellent moyen d'apprendre.`,

  // Practice Instructions
  `## Objectif

Explorer les ressources officielles de Riot Games et savoir où trouver les informations importantes.

## Étapes

1. Rendez-vous sur leagueoflegends.com
2. Trouvez et lisez le patch notes le plus récent
3. Explorez la section "Champions" et trouvez votre champion principal
4. Allez sur universe.leagueoflegends.com et lisez la biographie de ce champion
5. Trouvez le compte Twitter/X officiel de League of Legends
6. Visitez lolesports.com et identifiez le prochain match de votre région
7. Localisez le centre d'aide pour les problèmes techniques

## Critère de réussite

Vous savez naviguer sur le site officiel, trouver les patch notes, et connaissez l'histoire de votre champion principal.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est l'avantage principal des ressources officielles ?",
      "Elles sont plus divertissantes",
      "Elles sont fiables et toujours à jour",
      "Elles sont les seules disponibles",
      "Elles sont plus belles visuellement",
      'b',
      "Les ressources officielles sont les plus fiables et actualisées par Riot directement."
    ),
    createQuestion(
      "Où trouve-t-on les patch notes officiels ?",
      "Uniquement sur Reddit",
      "Sur leagueoflegends.com",
      "Exclusivement dans le client",
      "Sur Mobafire",
      'b',
      "Les patch notes complets sont disponibles sur le site officiel leagueoflegends.com."
    ),
    createQuestion(
      "Quel site contient le lore et les histoires des champions ?",
      "op.gg",
      "universe.leagueoflegends.com",
      "mobafire.com",
      "twitch.tv",
      'b',
      "Universe est le site dédié à l'univers et au lore de League of Legends."
    ),
    createQuestion(
      "Quel réseau social Riot utilise-t-il pour les annonces majeures ?",
      "LinkedIn uniquement",
      "Twitter/X, YouTube et autres réseaux majeurs",
      "Uniquement email",
      "Aucun réseau social",
      'b',
      "Riot est actif sur Twitter, YouTube, Instagram et Facebook."
    ),
    createQuestion(
      "Que faire en cas de problème technique avec le jeu ?",
      "Réinstaller Windows",
      "Contacter le support Riot via le centre d'aide",
      "Poster sur Reddit",
      "Acheter un nouveau PC",
      'b',
      "Le support Riot est disponible via le centre d'aide pour les problèmes techniques."
    ),
    createQuestion(
      "Quel site permet de suivre l'esport officiel ?",
      "twitch.tv uniquement",
      "lolesports.com",
      "op.gg",
      "mobafire.com",
      'b',
      "Lolesports.com est le site officiel pour suivre les compétitions."
    ),
    createQuestion(
      "Qu'est-ce que Pro View ?",
      "Un mode de jeu",
      "Un service permettant de voir le point de vue des joueurs pros",
      "Un outil de statistiques",
      "Un forum de discussion",
      'b',
      "Pro View permet de regarder les matchs esport du point de vue des joueurs professionnels."
    ),
    createQuestion(
      "Pourquoi comprendre le lore est-il utile ?",
      "C'est obligatoire pour jouer",
      "Cela enrichit l'expérience de jeu",
      "Cela améliore les performances",
      "Cela donne des récompenses",
      'b',
      "Le lore ajoute de la profondeur et enrichit l'expérience globale du jeu."
    ),
    createQuestion(
      "Comment signaler un joueur toxique officiellement ?",
      "Sur Reddit",
      "Via le système de signalement et le support Riot",
      "Sur Discord",
      "C'est impossible",
      'b',
      "Le support Riot permet de signaler les comportements toxiques de manière officielle."
    ),
    createQuestion(
      "Où trouver les biographies détaillées des champions ?",
      "Sur OP.GG",
      "Sur universe.leagueoflegends.com",
      "Dans les paramètres du jeu",
      "Sur Twitch",
      'b',
      "Universe contient les biographies et histoires complètes de tous les champions."
    ),
  ]
);
