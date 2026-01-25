import { createModule, createQuestion } from '../utils';

export const module02AnalysisTools = createModule(
  "Outils d'analyse post-partie",
  'analysis-tools',
  'Utiliser op.gg, porofessor et autres outils pour analyser ses performances',
  2,
  // Theory Content (5+ slides)
  `## Les outils d'analyse externes

Au-delà des replays intégrés au jeu, de nombreux sites et applications offrent des analyses détaillées de vos parties. Ces outils tiers compilent des statistiques, comparent vos performances et identifient vos points faibles. Ils sont devenus indispensables pour tout joueur souhaitant progresser sérieusement.

Les principaux outils sont **OP.GG**, **Porofessor**, **U.GG**, **Mobalytics** et **Blitz.gg**. Chacun a ses forces et faiblesses, mais tous partagent l'objectif de vous aider à comprendre vos performances.

## OP.GG : le classique

**OP.GG** est l'un des sites d'analyse les plus anciens et populaires. Il offre :
- Historique complet de vos parties
- Statistiques détaillées par champion
- Winrate, KDA, CS/min pour chaque champion
- Comparaison avec la moyenne de votre rang
- Builds et runes les plus populaires
- Fonction "Live Game" pour voir les statistiques avant la partie

Pour l'utiliser, tapez simplement votre nom d'invocateur#tag sur op.gg. Le site analyse automatiquement votre compte.

## Porofessor : l'assistant en temps réel

**Porofessor** se distingue par son overlay en jeu et ses analyses en temps réel :
- **Overlay en loading screen** : Voir les statistiques de tous les joueurs
- **Détection des mains** : Identifie les one-tricks et les joueurs autofilled
- **Score de performance** : Note vos parties sur différents critères
- **Conseils personnalisés** : Suggestions basées sur vos statistiques
- **Historique des adversaires** : Savoir si vous avez déjà joué contre quelqu'un

L'application desktop de Porofessor s'intègre directement au client pour une expérience fluide.

## U.GG et les statistiques de builds

**U.GG** excelle dans l'analyse des builds et des méta :
- Builds optimaux par champion et par matchup
- Winrates détaillés par items, runes, sorts d'invocateur
- Tier lists actualisées
- Counters et synergies
- Analyse de vos propres parties

C'est la référence pour savoir quoi construire sur un champion ou comprendre le meta actuel.

## Mobalytics : le coaching personnalisé

**Mobalytics** propose une approche plus pédagogique :
- **GPI (Gamer Performance Index)** : Score sur 8 compétences (farming, combat, vision, etc.)
- **Graphiques de progression** : Suivez votre évolution dans le temps
- **Comparaison par rang** : Voyez où vous êtes fort/faible par rapport à votre elo
- **Conseils ciblés** : Recommandations basées sur vos faiblesses identifiées
- **Guides détaillés** : Tutoriels pour chaque aspect du jeu

Mobalytics est particulièrement utile pour les joueurs qui ne savent pas sur quoi se concentrer.

## Utiliser ces outils efficacement

Pour tirer le meilleur de ces outils :

1. **Après chaque session de jeu** : Consultez votre historique pour voir vos tendances
2. **Identifiez vos patterns** : Remarquez-vous des erreurs récurrentes ?
3. **Comparez-vous au rang supérieur** : Que font les joueurs plus haut classés différemment ?
4. **Ne vous perdez pas dans les stats** : Concentrez-vous sur 2-3 métriques clés
5. **Combinez les outils** : Utilisez OP.GG pour l'historique, Mobalytics pour le coaching

L'objectif n'est pas de passer plus de temps sur ces sites qu'en jeu, mais d'optimiser votre temps d'apprentissage.`,

  // Practice Instructions
  `## Objectif

Créer un compte sur un outil d'analyse et analyser vos 10 dernières parties pour identifier des tendances.

## Étapes

1. Allez sur op.gg (ou u.gg, porofessor.gg selon votre préférence)
2. Recherchez votre nom d'invocateur#tag
3. Examinez vos 10 dernières parties ranked
4. Notez votre KDA moyen, CS/min moyen, et winrate récent
5. Identifiez sur quels champions vous performez le mieux
6. Repérez vos points faibles évidents (CS faible, trop de morts, etc.)
7. Comparez vos statistiques à la moyenne de votre rang

## Critère de réussite

Vous avez analysé vos 10 dernières parties et pouvez identifier 2 forces et 2 faiblesses statistiques de votre jeu actuel.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est l'un des sites d'analyse les plus populaires pour LoL ?",
      "Steam Charts",
      "OP.GG",
      "Twitch Stats",
      "Discord Analytics",
      'b',
      "OP.GG est l'un des sites d'analyse les plus anciens et populaires pour League of Legends."
    ),
    createQuestion(
      "Quelle fonctionnalité unique Porofessor offre-t-il ?",
      "Un mode hors-ligne",
      "Un overlay en loading screen avec les stats des joueurs",
      "La création de tournois",
      "Le coaching vocal en direct",
      'b',
      "Porofessor propose un overlay pendant le loading screen montrant les statistiques de tous les joueurs."
    ),
    createQuestion(
      "Pour quoi U.GG est-il particulièrement reconnu ?",
      "Les replays vidéo",
      "L'analyse des builds et du meta",
      "Le chat entre joueurs",
      "Les skins gratuits",
      'b',
      "U.GG excelle dans l'analyse des builds optimaux et des statistiques de meta."
    ),
    createQuestion(
      "Qu'est-ce que le GPI de Mobalytics ?",
      "Un classement mondial des joueurs",
      "Un score mesurant 8 compétences du joueur",
      "Un guide de gameplay",
      "Un système de récompenses",
      'b',
      "Le GPI (Gamer Performance Index) évalue le joueur sur 8 compétences comme le farming, le combat, la vision."
    ),
    createQuestion(
      "Que permet la fonction 'Live Game' sur OP.GG ?",
      "Regarder des streams en direct",
      "Voir les statistiques des joueurs avant que la partie commence",
      "Jouer directement depuis le navigateur",
      "Parier sur les parties",
      'b',
      "Live Game permet de voir les statistiques de tous les joueurs dans le lobby avant le début de la partie."
    ),
    createQuestion(
      "Comment accéder à ses statistiques sur OP.GG ?",
      "Se créer un compte premium",
      "Taper son nom d'invocateur#tag sur le site",
      "Télécharger une application",
      "Lier son compte Riot",
      'b',
      "Il suffit de rechercher son nom d'invocateur#tag sur op.gg pour accéder à ses statistiques."
    ),
    createQuestion(
      "Quelle est la bonne approche pour utiliser ces outils ?",
      "Y passer plus de temps qu'en jeu",
      "Se concentrer sur 2-3 métriques clés",
      "Ignorer les statistiques négatives",
      "N'utiliser qu'un seul outil",
      'b',
      "Il faut se concentrer sur 2-3 métriques clés sans se perdre dans trop de statistiques."
    ),
    createQuestion(
      "Que signifie 'identifier un joueur autofilled' dans Porofessor ?",
      "Un joueur qui joue automatiquement",
      "Un joueur qui ne joue pas son rôle principal",
      "Un joueur qui utilise des bots",
      "Un joueur professionnel",
      'b',
      "Un joueur autofilled est quelqu'un qui a été assigné à un rôle qu'il ne joue pas habituellement."
    ),
    createQuestion(
      "Quand devrait-on consulter ces outils d'analyse ?",
      "Uniquement après une défaite",
      "Après chaque session de jeu pour voir les tendances",
      "Jamais, c'est une perte de temps",
      "Uniquement en début de saison",
      'b',
      "Consulter ces outils après chaque session permet d'identifier les tendances et les patterns."
    ),
    createQuestion(
      "Quel outil est recommandé pour les joueurs qui ne savent pas sur quoi se concentrer ?",
      "OP.GG",
      "Mobalytics avec son coaching personnalisé",
      "Le client League of Legends",
      "Reddit",
      'b',
      "Mobalytics propose une approche pédagogique avec des conseils ciblés basés sur vos faiblesses."
    ),
  ]
);
