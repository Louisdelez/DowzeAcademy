import { createModule, createQuestion } from '../utils';

export const module01StatSites = createModule(
  'Sites de statistiques en ligne',
  'stat-sites',
  "Utiliser OP.GG, U.GG et autres sites de statistiques pour améliorer son jeu",
  1,
  // Theory Content (5+ slides)
  `## Introduction aux sites de statistiques

Les sites de statistiques sont des outils essentiels pour tout joueur souhaitant progresser dans League of Legends. Ils compilent des millions de parties pour vous donner des informations précieuses sur les champions, les builds et les stratégies les plus efficaces.

## OP.GG - La référence historique

**OP.GG** est le site de statistiques le plus connu. Il permet de :
- Consulter votre profil et historique de parties
- Voir les builds les plus joués pour chaque champion
- Analyser les performances par rang
- Suivre les joueurs professionnels en direct

L'interface est simple et les données sont mises à jour régulièrement.

## U.GG - L'alternative moderne

**U.GG** s'est imposé comme une référence grâce à sa précision. Ses points forts :
- Statistiques très détaillées par matchup
- Recommandations de builds optimisés
- Filtres par rang, région et patch
- Interface épurée et rapide

U.GG est particulièrement recommandé pour les analyses de matchups spécifiques.

## Comment utiliser ces sites efficacement

Pour tirer le meilleur parti de ces outils :
1. **Avant la partie** : Consultez le build recommandé pour votre champion
2. **Pendant le pick** : Vérifiez les winrates des matchups
3. **Après la partie** : Analysez vos statistiques pour identifier vos faiblesses
4. **Régulièrement** : Suivez l'évolution de la méta

## Limites et bonnes pratiques

Attention à ne pas devenir dépendant de ces sites :
- Les statistiques globales ne s'appliquent pas à tous les elos
- Adaptez les builds à votre style de jeu
- Les données peuvent être en retard après un nouveau patch
- Utilisez-les comme guide, pas comme règle absolue

Le meilleur build est celui que vous maîtrisez, pas forcément celui avec le meilleur winrate global.`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser efficacement les sites de statistiques pour préparer vos parties et analyser vos performances.

## Étapes

1. Rendez-vous sur OP.GG et recherchez votre pseudo
2. Analysez vos 10 dernières parties : identifiez votre champion avec le meilleur winrate
3. Cliquez sur ce champion et notez le build recommandé (runes + objets)
4. Rendez-vous sur U.GG et cherchez le même champion
5. Comparez les builds recommandés entre les deux sites
6. Notez les différences de runes ou d'objets

## Critère de réussite

Vous avez identifié votre champion le plus performant et comparé les builds recommandés sur deux sites différents, comprenant les nuances entre leurs recommandations.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est l'avantage principal des sites de statistiques comme OP.GG ?",
      "Ils permettent de tricher en jeu",
      "Ils compilent des données de millions de parties pour donner des recommandations",
      "Ils remplacent l'entraînement personnel",
      "Ils sont uniquement utiles pour les professionnels",
      'b',
      "Ces sites analysent des millions de parties pour fournir des statistiques fiables sur les builds et les stratégies."
    ),
    createQuestion(
      "Que permet de consulter OP.GG ?",
      "Uniquement les parties des joueurs coréens",
      "Le code source du jeu",
      "Votre profil, historique et builds recommandés",
      "Les futurs changements de patch",
      'c',
      "OP.GG offre l'accès à votre profil, votre historique de parties et les builds les plus joués."
    ),
    createQuestion(
      "Pour quelle fonctionnalité U.GG est-il particulièrement reconnu ?",
      "Son design coloré",
      "Ses statistiques détaillées par matchup",
      "Sa section de guides vidéo",
      "Son forum communautaire",
      'b',
      "U.GG excelle dans l'analyse des matchups spécifiques avec des statistiques très détaillées."
    ),
    createQuestion(
      "Quand est-il recommandé de consulter un site de stats avant une partie ?",
      "Jamais, c'est de la triche",
      "Uniquement en ranked",
      "Pour vérifier le build recommandé et les matchups",
      "Seulement si on perd souvent",
      'c',
      "Consulter ces sites avant la partie aide à préparer son build et comprendre les matchups."
    ),
    createQuestion(
      "Quelle est une limite importante des sites de statistiques ?",
      "Ils sont tous payants",
      "Les statistiques globales ne s'appliquent pas à tous les elos",
      "Ils ne fonctionnent qu'en anglais",
      "Ils sont interdits par Riot Games",
      'b',
      "Les statistiques moyennes peuvent ne pas être pertinentes pour votre niveau de jeu spécifique."
    ),
    createQuestion(
      "Après un nouveau patch, que faut-il garder à l'esprit ?",
      "Les sites mettent leur données à jour instantanément",
      "Les données peuvent être en retard et moins fiables",
      "Il faut changer de site de statistiques",
      "Les anciens builds restent toujours valides",
      'b',
      "Après un patch, il faut du temps pour que suffisamment de parties soient jouées et analysées."
    ),
    createQuestion(
      "Quel usage des sites de stats est déconseillé ?",
      "Consulter les builds avant une partie",
      "Suivre aveuglément les recommandations sans les adapter",
      "Analyser ses performances après une partie",
      "Comparer les données entre plusieurs sites",
      'b',
      "Il faut adapter les builds à son style de jeu plutôt que de les suivre aveuglément."
    ),
    createQuestion(
      "Que signifie un winrate élevé sur un build ?",
      "Que ce build est obligatoire",
      "Que ce build performe bien en moyenne, à adapter selon le contexte",
      "Que ce build est le seul viable",
      "Que Riot Games recommande ce build",
      'b',
      "Un bon winrate indique une performance moyenne, mais le contexte de la partie reste important."
    ),
    createQuestion(
      "Quel site est considéré comme la référence historique des stats LoL ?",
      "Mobafire",
      "OP.GG",
      "Twitch",
      "Reddit",
      'b',
      "OP.GG est le site de statistiques le plus ancien et le plus connu de la communauté."
    ),
    createQuestion(
      "Comment les sites de stats peuvent-ils aider après une partie ?",
      "En permettant de signaler des joueurs",
      "En offrant des récompenses",
      "En analysant vos statistiques pour identifier vos faiblesses",
      "En modifiant votre MMR",
      'c',
      "L'analyse post-partie permet d'identifier les points à améliorer dans son gameplay."
    ),
  ]
);
