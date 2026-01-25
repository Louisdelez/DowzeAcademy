import { createModule, createQuestion } from '../utils';

export const module09SweeperUsage = createModule(
  'Sweepers efficaces',
  'sweeper-usage',
  'Techniques avancées pour nettoyer efficacement la vision ennemie',
  9,
  // Theory Content (5+ slides)
  `## Maîtriser l'utilisation du Sweeper

Le **Sweeper** (Altération oraculaire) est l'outil principal pour **nier la vision ennemie**. Mais utiliser son Sweeper efficacement demande plus que de simplement l'activer. Le timing, le positionnement et la priorisation sont essentiels.

## Quand activer son Sweeper

Activez votre Sweeper dans les situations suivantes :
- **Avant un gank** : Pour surprendre l'ennemi
- **En approchant d'un objectif** : Dragon, Baron, Herald
- **Dans les bushes clés** : River, tribush, entrées de jungle
- **Après avoir vu un ennemi warder** : Pour détruire la ward fraîchement posée
- **Pendant un engage** : Pour révéler les pièges/wards d'utilité

## Technique de sweep efficace

Pour maximiser l'efficacité de votre sweep :
1. **Anticipez** les emplacements wardés (pensez comme l'ennemi)
2. **Marchez pendant le sweep** pour couvrir plus de terrain
3. **Priorisez les bushes** : les wards y sont souvent placées
4. **Communiquez** : ping les wards trouvées pour que l'équipe les détruise

Un sweep statique couvre moins de zone qu'un sweep en mouvement.

## Coordination de sweeps en équipe

Pour les objectifs majeurs, coordonnez les sweeps :
- **2-3 joueurs** avec Oracle Lens sweepent la zone
- **Un joueur** garde une Control Ward prête
- **Commencez de l'extérieur** vers l'objectif
- **Nettoyez complètement** avant de commencer l'objectif

Une zone mal nettoyée invite au steal ennemi.

## Priorisation des wards à détruire

Toutes les wards ne méritent pas le même effort :
- **Haute priorité** : Wards près des objectifs ou de votre engage
- **Moyenne priorité** : Wards dans les chemins de rotation
- **Basse priorité** : Wards dans des zones que vous n'utiliserez pas

Parfois, il vaut mieux ignorer une ward pour ne pas perdre de temps.`,

  // Practice Instructions
  `## Objectif

Développer des techniques de sweep efficaces pour nier la vision ennemie.

## Étapes

1. Lancez une partie en tant que Support ou Jungler avec l'Oracle Lens
2. Avant chaque gank ou objectif, activez votre Sweeper
3. Marchez pendant l'activation du Sweeper pour couvrir plus de terrain
4. Priorisez les bushes (river, tribush) lors de vos sweeps
5. Ping les wards trouvées pour que votre équipe vous aide à les détruire
6. Avant le Dragon ou Baron, coordonnez avec votre équipe pour sweep la zone
7. Comptez le nombre de wards détruites grâce à vos sweeps

## Critère de réussite

Vous avez utilisé votre Sweeper au moins 10 fois pendant la partie, détruit au moins 6 wards ennemies, et nettoyé complètement la zone autour d'un objectif majeur avant de le faire.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est l'erreur la plus commune lors de l'utilisation du Sweeper ?",
      "L'utiliser trop souvent",
      "Rester immobile pendant le sweep au lieu de marcher",
      "L'utiliser dans les bushes",
      "L'utiliser avant un gank",
      'b',
      "Marcher pendant le sweep permet de couvrir plus de terrain qu'un sweep statique."
    ),
    createQuestion(
      "Quand devriez-vous activer votre Sweeper avant un gank ?",
      "Après avoir été repéré",
      "Avant d'entrer dans la zone potentiellement wardée",
      "Seulement si vous voyez une ward",
      "Jamais, gardez-le pour les objectifs",
      'b',
      "Activez le Sweeper avant d'entrer dans la zone pour détecter les wards avant d'être vu."
    ),
    createQuestion(
      "Où les wards sont-elles le plus souvent placées ?",
      "Au milieu des lanes",
      "Dans les bushes",
      "Sous les tourelles",
      "Dans la base ennemie",
      'b',
      "Les bushes offrent de la vision sur les chemins importants, c'est là que les wards sont souvent posées."
    ),
    createQuestion(
      "Combien de joueurs devraient sweeper avant un objectif majeur ?",
      "1 seul suffit",
      "2-3 joueurs avec Oracle Lens",
      "Toute l'équipe",
      "Aucun, utilisez seulement des Control Wards",
      'b',
      "2-3 sweepers couvrent la zone plus rapidement et efficacement qu'un seul."
    ),
    createQuestion(
      "Comment prioriser les wards à détruire ?",
      "Toutes les wards ont la même priorité",
      "Haute priorité pour celles près des objectifs ou engage",
      "Basse priorité près des objectifs",
      "Ignorer toutes les wards",
      'b',
      "Priorisez les wards qui affectent directement vos plans (objectifs, engages, chemins de rotation)."
    ),
    createQuestion(
      "Que faire quand vous trouvez une ward avec votre Sweeper ?",
      "Ignorer et continuer",
      "La ping et la détruire (ou demander de l'aide)",
      "Poser une ward à côté",
      "Recall immédiatement",
      'b',
      "Ping la ward pour alerter l'équipe et détruisez-la pour nier la vision ennemie."
    ),
    createQuestion(
      "Par où commencer à sweeper pour un objectif comme le Baron ?",
      "Par le pit du Baron directement",
      "De l'extérieur vers l'objectif",
      "De l'intérieur vers l'extérieur",
      "Seulement le bush dans le pit",
      'b',
      "Sweepez de l'extérieur vers l'objectif pour vous assurer que personne ne vous voit approcher."
    ),
    createQuestion(
      "Pourquoi parfois ignorer une ward peut être la bonne décision ?",
      "Les wards ne sont jamais importantes",
      "Parce qu'elle est dans une zone que vous n'utiliserez pas",
      "Pour économiser le Sweeper",
      "Parce que l'ennemi ne regarde pas sa map",
      'b',
      "Si la ward est dans une zone non pertinente pour vos plans, le temps pour la détruire est gaspillé."
    ),
    createQuestion(
      "Quel item peut compléter les efforts de sweep autour des objectifs ?",
      "Une Stealth Ward",
      "Une Control Ward",
      "Un objet offensif",
      "Des bottes",
      'b',
      "Les Control Wards révèlent en permanence les wards invisibles, complétant les sweeps temporaires."
    ),
    createQuestion(
      "Qu'arrive-t-il si vous commencez un objectif sans avoir sweep la zone ?",
      "Rien de particulier",
      "L'ennemi peut voir votre tentative et venir contester ou steal",
      "L'objectif fait plus de dégâts",
      "Vous gagnez moins d'or",
      'b',
      "Une zone mal nettoyée donne de l'information à l'ennemi, facilitant les steals et embuscades."
    ),
  ]
);
