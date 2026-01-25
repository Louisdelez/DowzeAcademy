import { createModule, createQuestion } from '../utils';

export const module01ReplayReview = createModule(
  'Revoir ses replays',
  'replay-review',
  'Identifier ses erreurs en analysant ses propres parties',
  1,
  // Theory Content (5+ slides)
  `## L'importance de revoir ses replays

Le replay est l'un des outils les plus puissants pour progresser dans League of Legends. Contrairement à ce qu'on pense pendant la partie, on fait souvent des erreurs qu'on ne remarque pas sur le moment. Revoir ses parties permet de prendre du recul et d'analyser objectivement ses décisions.

Les joueurs professionnels passent des heures à revoir leurs parties. C'est un investissement qui paie : chaque erreur identifiée est une opportunité d'amélioration. En revoyant vos replays, vous transformez vos défaites en leçons.

## Comment accéder aux replays

Dans le client League of Legends, accédez à votre **Profil** puis à l'onglet **Historique des parties**. Cliquez sur le bouton de téléchargement à côté d'une partie pour sauvegarder le replay. Les replays sont disponibles pendant environ 2 semaines après la partie.

Une fois téléchargé, double-cliquez sur le fichier ou lancez-le depuis le client pour ouvrir le replay. Vous pouvez aussi utiliser des sites tiers qui enregistrent automatiquement vos parties.

## Que chercher dans un replay

Concentrez-vous sur les moments clés :
- **Les morts** : Pourquoi êtes-vous mort ? Mauvais positionnement ? Manque de vision ? Trade défavorable ?
- **Les objectifs ratés** : Pourquoi n'avez-vous pas pris ce dragon ? Pourquoi la tour est tombée ?
- **Les teamfights perdus** : Quelle était votre contribution ? Avez-vous focus la bonne cible ?
- **Les opportunités manquées** : Y avait-il un gank possible ? Un roam profitable ?

## Les outils de navigation du replay

Le replay offre plusieurs fonctionnalités essentielles :
- **Accélération/Ralentissement** : Utilisez les touches + et - pour ajuster la vitesse
- **Pause** : Arrêtez-vous sur les moments importants
- **Caméra dirigée** : Suivez votre champion ou passez en vue libre
- **Fog of war** : Activez le brouillard de guerre de chaque équipe pour voir ce que vous voyiez vraiment
- **Timeline** : Naviguez rapidement aux moments clés (kills, objectifs)

## Méthodologie d'analyse efficace

Pour une analyse productive, suivez cette méthode :

1. **Premier visionnage rapide** (x2) : Identifiez les moments clés à revoir
2. **Analyse détaillée** : Revenez sur chaque mort et chaque erreur en vitesse normale
3. **Prise de notes** : Écrivez vos erreurs récurrentes
4. **Plan d'action** : Choisissez 1-2 points à améliorer pour vos prochaines parties

Ne passez pas des heures sur un seul replay. 15-20 minutes d'analyse ciblée sont plus efficaces qu'une heure de visionnage passif.

## Erreurs courantes à identifier

Les erreurs les plus fréquentes chez les joueurs :
- **Overextend sans vision** : Pousser trop loin sans wards
- **Mauvais recall timing** : Rappeler au mauvais moment et rater une vague ou un objectif
- **Greedy plays** : Prendre des risques inutiles pour un kill
- **Ignorer la minimap** : Ne pas voir les rotations ennemies
- **Mauvaise gestion des cooldowns** : S'engager sans sort clé disponible

En identifiant ces patterns dans vos replays, vous commencerez à les corriger naturellement.`,

  // Practice Instructions
  `## Objectif

Télécharger et analyser un de vos replays récents pour identifier au moins 3 erreurs que vous avez commises.

## Étapes

1. Ouvrez le client League of Legends et allez dans Profil > Historique
2. Téléchargez le replay de votre dernière partie ranked (ou normale si ranked indisponible)
3. Lancez le replay et regardez-le en vitesse x2 une première fois
4. Notez les timestamps de vos morts et des moments difficiles
5. Revenez sur chaque moment en vitesse normale
6. Pour chaque mort, identifiez la cause principale
7. Écrivez 3 erreurs concrètes que vous avez commises

## Critère de réussite

Vous avez regardé un replay complet et pouvez citer 3 erreurs spécifiques que vous avez commises avec leur timestamp et la façon dont vous auriez pu les éviter.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Où peut-on accéder aux replays dans le client LoL ?",
      "Dans la boutique",
      "Dans Profil > Historique des parties",
      "Dans les paramètres",
      "Dans le mode entraînement",
      'b',
      "Les replays sont accessibles depuis votre profil, dans l'onglet historique des parties."
    ),
    createQuestion(
      "Pendant combien de temps les replays sont-ils disponibles après une partie ?",
      "24 heures",
      "Une semaine",
      "Environ 2 semaines",
      "Indéfiniment",
      'c',
      "Les replays restent disponibles pendant environ 2 semaines après la partie."
    ),
    createQuestion(
      "Quelle est la première chose à faire lors de l'analyse d'un replay ?",
      "Analyser chaque seconde en détail",
      "Faire un visionnage rapide pour identifier les moments clés",
      "Se concentrer uniquement sur les kills",
      "Regarder uniquement les 5 premières minutes",
      'b',
      "Un premier visionnage rapide permet d'identifier les moments clés à analyser en détail ensuite."
    ),
    createQuestion(
      "Pourquoi est-il important d'activer le fog of war dans le replay ?",
      "Pour rendre le replay plus joli",
      "Pour voir ce que vous voyiez vraiment pendant la partie",
      "Pour accélérer le replay",
      "C'est obligatoire pour lancer le replay",
      'b',
      "Le fog of war vous montre exactement les informations que vous aviez pendant la partie."
    ),
    createQuestion(
      "Combien de temps devrait durer une session d'analyse de replay efficace ?",
      "Au moins 2 heures",
      "15-20 minutes ciblées",
      "5 minutes maximum",
      "Toute la durée de la partie originale",
      'b',
      "15-20 minutes d'analyse ciblée sont plus efficaces qu'un visionnage passif prolongé."
    ),
    createQuestion(
      "Quelle erreur courante peut-on identifier facilement dans les replays ?",
      "Le ping élevé",
      "L'overextend sans vision",
      "Les bugs du jeu",
      "Les trolls dans l'équipe",
      'b',
      "L'overextend sans vision (pousser trop loin sans wards) est une erreur très courante et facilement identifiable."
    ),
    createQuestion(
      "Que signifie faire des 'greedy plays' ?",
      "Jouer trop défensivement",
      "Prendre des risques inutiles pour un kill",
      "Farmer trop de sbires",
      "Acheter trop d'objets",
      'b',
      "Les greedy plays sont des prises de risque inutiles, souvent pour sécuriser un kill qui n'en vaut pas la peine."
    ),
    createQuestion(
      "Après avoir identifié des erreurs dans un replay, que faut-il faire ?",
      "Jouer immédiatement 10 parties ranked",
      "Créer un plan d'action avec 1-2 points à améliorer",
      "Regarder un autre replay",
      "Changer de champion",
      'b',
      "Il faut créer un plan d'action concret en se concentrant sur 1-2 points d'amélioration."
    ),
    createQuestion(
      "Pourquoi les joueurs professionnels regardent-ils leurs replays ?",
      "Par obligation de leur équipe",
      "Pour transformer les erreurs en opportunités d'amélioration",
      "Uniquement pour le contenu streaming",
      "Pour vérifier leurs statistiques",
      'b',
      "Les pros analysent leurs replays pour identifier et corriger leurs erreurs, transformant chaque défaite en leçon."
    ),
    createQuestion(
      "Quel outil du replay permet de naviguer rapidement aux moments importants ?",
      "Le zoom",
      "La timeline avec les événements",
      "Le chat",
      "Les statistiques",
      'b',
      "La timeline affiche les événements clés (kills, objectifs) et permet de naviguer rapidement."
    ),
  ]
);
