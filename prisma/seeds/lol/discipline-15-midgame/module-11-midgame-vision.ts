import { createModule, createQuestion } from '../utils';

export const module11MidgameVision = createModule(
  'Vision en mid-game',
  'midgame-vision',
  'Wards profondes',
  11,
  // Theory Content (5+ slides)
  `## L'importance de la vision en mid-game

En mid-game, la **vision** devient cruciale car :
- Les rotations sont fréquentes
- Les objectifs majeurs (Dragon, Baron) sont contestés
- Les embuscades peuvent retourner la partie
- La carte s'ouvre après les T1

Une bonne vision vous donne l'information nécessaire pour prendre de bonnes décisions macro.

## Vision défensive vs offensive

Deux types de vision selon votre situation :

**Vision défensive** (si derrière ou égal) :
- Protégez vos entrées de jungle
- Wardez les chemins vers vos lanes
- Contrôlez les bushes près de vos tourelles

**Vision offensive** (si en avance) :
- Wards profondes dans la jungle ennemie
- Contrôle des entrées vers leur buff/camps
- Vision autour des objectifs que vous voulez prendre

## Les wards profondes

Les **wards profondes** sont placées en territoire ennemi :
- **Buffs ennemis** : Blue et Red
- **Carrefours de jungle** : intersections clés
- **Derrière les tourelles** : voir les rotations
- **Pit du Baron/Dragon** : contrôle des objectifs

Ces wards révèlent les mouvements ennemis avant qu'ils n'arrivent, vous donnant le temps de réagir.

## Coordination de la vision d'équipe

La vision est un effort d'équipe :
- **Support et Jungler** : responsables principaux de la vision
- **Tout le monde** : doit placer sa ward jaune
- **Sweeper** : crucial pour dénier la vision ennemie
- **Control wards** : à placer dans des spots clés (pit, river)

Règle : **3 control wards minimum** sur la carte pour votre équipe.

## Récapitulatif

La vision en mid-game est fondamentale pour le macro :
- Adaptez votre vision (défensive/offensive) à la situation
- Les wards profondes révèlent les rotations ennemies
- C'est un effort d'équipe : tout le monde participe
- Utilisez le sweeper pour dénier la vision ennemie
- 3 control wards minimum sur la carte`,

  // Practice Instructions
  `## Objectif

Placer de la vision stratégique en mid-game pour obtenir des informations sur les mouvements ennemis et sécuriser les objectifs.

## Étapes

1. Identifiez si vous êtes en avance ou en retard (vision offensive ou défensive)
2. Si en avance : placez des wards profondes dans la jungle ennemie
3. Si derrière : wardez vos entrées de jungle et les bushes défensifs
4. Achetez et placez au moins une control ward près d'un objectif (Dragon/Baron)
5. Utilisez le sweeper pour clear les wards ennemies autour de l'objectif visé
6. Observez la mini-carte pour utiliser l'information de vos wards

## Critère de réussite

Vous avez placé au moins 5 wards utiles (qui révèlent des ennemis ou protègent une zone clé) et une control ward pendant le mid-game.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la vision devient-elle plus importante en mid-game ?",
      "Les champions ont besoin de plus de lumière",
      "Les rotations et objectifs sont plus fréquents",
      "Les wards coûtent moins cher",
      "Le jungler n'existe plus",
      'b',
      "Les rotations fréquentes et les objectifs majeurs nécessitent une information constante sur les ennemis."
    ),
    createQuestion(
      "Quand utiliser une vision défensive ?",
      "Quand vous êtes en avance",
      "Quand vous êtes derrière ou égal",
      "Uniquement en early game",
      "Jamais en mid-game",
      'b',
      "La vision défensive protège votre territoire quand vous ne pouvez pas vous permettre d'être agressif."
    ),
    createQuestion(
      "Qu'est-ce qu'une ward profonde ?",
      "Une ward enterrée dans le sol",
      "Une ward placée en territoire ennemi",
      "Une ward qui dure plus longtemps",
      "Une ward invisible",
      'b',
      "Les wards profondes sont placées dans la jungle ennemie pour voir leurs mouvements en avance."
    ),
    createQuestion(
      "Où placer une ward profonde efficacement ?",
      "Sous votre propre tourelle",
      "Sur les buffs ennemis ou carrefours de leur jungle",
      "Dans la rivière uniquement",
      "À côté du Nexus ennemi",
      'b',
      "Les buffs ennemis et carrefours révèlent les mouvements du jungler et des rotations."
    ),
    createQuestion(
      "Qui est principalement responsable de la vision ?",
      "Uniquement l'ADC",
      "Le support et le jungler, mais tout le monde contribue",
      "Seulement le mid laner",
      "Le top laner uniquement",
      'b',
      "Support et jungler ont plus de moyens pour la vision, mais tout le monde doit placer sa ward jaune."
    ),
    createQuestion(
      "Combien de control wards minimum votre équipe devrait-elle avoir sur la carte ?",
      "1",
      "2",
      "3",
      "5",
      'c',
      "3 control wards minimum assure un bon contrôle de vision sur les zones clés."
    ),
    createQuestion(
      "À quoi sert le sweeper (lentille oracle) ?",
      "Placer plus de wards",
      "Détecter et détruire les wards ennemies",
      "Voir les champions invisibles en permanence",
      "Accélérer le placement de wards",
      'b',
      "Le sweeper révèle les wards ennemies pour les détruire et dénier leur vision."
    ),
    createQuestion(
      "Où placer une control ward en priorité avant un objectif ?",
      "Dans votre base",
      "Dans ou près du pit (Dragon/Baron)",
      "Dans la lane du milieu",
      "Dans un bush aléatoire",
      'b',
      "Une control ward dans le pit garantit la vision de l'objectif et détecte les wards ennemies."
    ),
    createQuestion(
      "Quelle information les wards profondes vous donnent-elles ?",
      "Le niveau des ennemis",
      "Les mouvements ennemis avant qu'ils n'arrivent",
      "Les items des ennemis",
      "Les cooldowns des ennemis",
      'b',
      "Voir les ennemis en avance permet de préparer la réponse aux rotations."
    ),
    createQuestion(
      "Que faire avec la vision quand vous êtes en avance ?",
      "Placer des wards sous vos tourelles",
      "Placer des wards offensives dans la jungle ennemie",
      "Ne plus placer de wards",
      "Garder toutes vos wards pour le late-game",
      'b',
      "En avance, la vision offensive dans la jungle ennemie vous permet de contrôler et envahir."
    ),
  ]
);
