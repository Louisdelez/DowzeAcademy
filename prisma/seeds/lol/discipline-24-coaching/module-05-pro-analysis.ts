import { createModule, createQuestion } from '../utils';

export const module05ProAnalysis = createModule(
  "Méthodes d'analyse pro",
  'pro-analysis',
  'Review détaillée et méthodes utilisées par les professionnels',
  5,
  // Theory Content (5+ slides)
  `## L'analyse minute par minute

Les pros analysent leurs parties **minute par minute**. Ils pausent régulièrement pour évaluer leurs décisions : "Pourquoi j'ai fait ça ?", "Quelle était la meilleure option ?", "Qu'est-ce que j'aurais dû voir ?". Cette analyse lente révèle des erreurs invisibles en temps réel.

## Les métriques clés à suivre

L'analyse pro va au-delà du KDA. On examine : le **CS par minute** et les vagues manquées, le **damage par minute** et son timing, la **participation aux objectifs**, le **warding score** et le **control ward count**, et le **forward percentage** (temps passé en zone ennemie).

## La comparaison avec les meilleurs

Une technique efficace est de **comparer son gameplay** à celui d'un joueur pro sur le même champion. Regardez comment il gère les mêmes situations : le trading, les backs, le wave management, les roams. Notez les différences et essayez de comprendre pourquoi.

## L'analyse des décisions macro

Au-delà des mécaniques, les pros analysent la **macro** : les rotations, les choix d'objectifs, le positionnement en teamfight. Pour chaque mort, ils identifient la **vraie erreur** (souvent une mauvaise rotation 2 minutes avant, pas le duel perdu).

## Les outils d'analyse pro

Les équipes utilisent des **outils spécialisés** : des logiciels de replay avec annotations, des tableurs pour tracker les statistiques sur plusieurs parties, et des systèmes de VOD review structurés. Même seul, vous pouvez créer un simple document pour noter vos patterns d'erreurs.

## Récapitulatif

- Analyse **minute par minute** avec pauses fréquentes
- Suivez des **métriques clés** : CS/min, damage/min, warding
- **Comparez** votre gameplay aux pros sur le même champion
- Analysez la **macro** : les décisions 2-3 minutes avant chaque mort
- Utilisez des **outils** : tableurs, annotations, notes de patterns`,

  // Practice Instructions
  `## Objectif

Appliquer une méthode d'analyse pro à l'un de vos replays récents.

## Étapes

1. Choisissez un replay d'une partie perdue récemment
2. Regardez les 10 premières minutes en pausant toutes les 30 secondes
3. Pour chaque mort, remontez 2 minutes avant et identifiez la vraie erreur
4. Notez vos statistiques : CS à 10 min, wards placées, participation objectifs
5. Trouvez une VOD d'un pro sur le même champion et comparez 3 situations similaires

## Critère de réussite

Vous avez analysé un replay avec la méthode minute par minute et identifié au moins 3 erreurs de décision macro.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Comment les pros analysent-ils leurs parties ?",
      "Ils regardent juste les kills",
      "Minute par minute avec des pauses régulières",
      "Ils ne regardent pas leurs replays",
      "En vitesse x4 pour aller plus vite",
      'b',
      "L'analyse minute par minute permet de détecter des erreurs invisibles en temps réel."
    ),
    createQuestion(
      "Quelle métrique va au-delà du simple KDA ?",
      "Le nombre de skins possédés",
      "Le CS par minute et les vagues manquées",
      "Le nombre de parties jouées",
      "Le temps de queue",
      'b',
      "Le CS/min révèle l'efficacité du farming, un indicateur bien plus précis que le KDA."
    ),
    createQuestion(
      "Comment utiliser les VODs de pros pour s'améliorer ?",
      "Les regarder sans réfléchir",
      "Comparer son gameplay au leur sur les mêmes situations",
      "Copier exactement leurs builds",
      "Les critiquer sur les réseaux sociaux",
      'b',
      "La comparaison directe révèle les différences dans la gestion des mêmes situations."
    ),
    createQuestion(
      "Qu'est-ce que le 'forward percentage' ?",
      "Le pourcentage de victoire",
      "Le temps passé en zone ennemie",
      "Le pourcentage de skillshots touchés",
      "Le temps passé à farmer",
      'b',
      "Le forward percentage mesure l'agressivité et le contrôle de map d'un joueur."
    ),
    createQuestion(
      "Pour une mort en lane, où se trouve souvent la vraie erreur ?",
      "Dans le duel lui-même",
      "Dans une mauvaise décision 2-3 minutes avant",
      "Dans le draft",
      "Dans la connexion internet",
      'b',
      "La vraie erreur est souvent une mauvaise rotation ou décision bien avant la mort."
    ),
    createQuestion(
      "Quel aspect analyse-t-on au niveau 'macro' ?",
      "Les combos de sorts",
      "Les rotations et choix d'objectifs",
      "La vitesse de clic",
      "Les animations de champions",
      'b',
      "L'analyse macro porte sur les décisions stratégiques globales, pas les mécaniques."
    ),
    createQuestion(
      "Quel outil simple peut-on utiliser pour tracker ses erreurs ?",
      "Un compte Twitter",
      "Un tableur ou document de notes",
      "Un deuxième compte LoL",
      "Une calculatrice",
      'b',
      "Un simple document permet de noter et identifier les patterns d'erreurs récurrentes."
    ),
    createQuestion(
      "Que permettent les logiciels de replay avec annotations ?",
      "De changer le résultat de la partie",
      "De marquer et commenter des moments clés",
      "De booster le compte",
      "De jouer contre des bots",
      'b',
      "Les annotations aident à structurer l'analyse et se souvenir des points importants."
    ),
    createQuestion(
      "Quelle question se pose-t-on lors de l'analyse minute par minute ?",
      "Pourquoi mon équipe est nulle ?",
      "Quelle était la meilleure option à ce moment ?",
      "Pourquoi le matchmaking est injuste ?",
      "Comment le jeu est-il bugué ?",
      'b',
      "L'auto-questionnement sur les alternatives possibles est au coeur de l'analyse pro."
    ),
    createQuestion(
      "Sur combien de parties faut-il tracker ses statistiques pour voir des patterns ?",
      "Une seule partie suffit",
      "Plusieurs parties pour identifier des tendances",
      "Exactement 100 parties",
      "On n'a pas besoin de tracker",
      'b',
      "Les patterns d'erreurs se révèlent sur plusieurs parties, pas sur un échantillon unique."
    ),
  ]
);
