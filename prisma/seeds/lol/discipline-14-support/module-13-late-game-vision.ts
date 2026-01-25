import { createModule, createQuestion } from '../utils';

export const module13LateGameVision = createModule(
  'Gestion de la vision tardive',
  'late-game-vision',
  'Placer des wards profondes et contrôler le Baron/Elder',
  13,
  // Theory Content (5+ slides)
  `## La vision en late game

En **late game**, la vision devient encore plus critique car une seule mort peut coûter la partie. Le support doit adapter son placement de wards pour contrôler les **objectifs majeurs** : Baron et Elder Dragon.

## Zones prioritaires late game

Les zones à warder en priorité changent :
- **Baron pit** et ses environs
- **Elder Dragon pit**
- **Entrées de jungle** ennemie (deep wards)
- **Couloirs de rotation** entre les lanes
- Évitez de warder les lanes, peu utile en late

## Deep wards et contrôle

Les **deep wards** sont placées profondément en territoire ennemi :
- Révèlent les mouvements ennemis en avance
- Permettent les picks sur les ennemis isolés
- Nécessitent de se déplacer **en sécurité** (avec vision ou équipe)
- Placez-les aux intersections de la jungle ennemie

## Sweeper et denial de vision

Avec **Oracle Lens**, vous devez :
- Sweep autour de Baron/Elder avant l'objectif
- Éliminer les wards ennemies pour éviter les steals
- Créer un **fog of war** avantageux pour votre équipe
- Sweep les buissons avant d'y passer

## Timing et coordination

Le timing de votre vision :
- Wardez Baron/Elder **1 minute avant** le spawn
- Coordonnez avec le jungler pour le sweep
- Renouvelez les wards **avant qu'elles expirent**
- Utilisez votre Control Ward en permanence

## Récapitulatif

- Late game = priorité **Baron et Elder Dragon**
- **Deep wards** dans la jungle ennemie pour anticiper
- **Sweep** autour des objectifs avant de les prendre
- Wardez **1 minute avant** le spawn des objectifs
- Gardez une **Control Ward active** en permanence`,

  // Practice Instructions
  `## Objectif

Maîtriser le placement de vision en late game pour contrôler les objectifs majeurs.

## Étapes

1. En late game, focus votre vision sur Baron et Elder Dragon
2. Placez des deep wards dans la jungle ennemie quand c'est safe
3. 1 minute avant Baron/Elder, wardez tout autour du pit
4. Utilisez Oracle Lens pour sweep les wards ennemies
5. Gardez toujours une Control Ward active près de l'objectif
6. Comptez les wards ennemies que vous avez éliminées

## Critère de réussite

Vous avez maintenu une vision complète autour de Baron/Elder pendant au moins 2 contests, et éliminé au moins 5 wards ennemies en late game.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle zone est prioritaire à warder en late game ?",
      "La botlane",
      "Le Baron et Elder Dragon",
      "La jungle alliée",
      "La base ennemie",
      'b',
      "En late game, Baron et Elder sont les objectifs majeurs qui nécessitent un contrôle de vision."
    ),
    createQuestion(
      "Qu'est-ce qu'une deep ward ?",
      "Une ward dans votre base",
      "Une ward profondément en territoire ennemi",
      "Une ward très longue durée",
      "Une ward invisible aux oracles",
      'b',
      "Les deep wards sont placées dans la jungle ennemie pour révéler leurs mouvements."
    ),
    createQuestion(
      "Quand placer les wards autour de Baron ?",
      "Juste quand Baron spawn",
      "Environ 1 minute avant son spawn",
      "Uniquement si l'équipe le demande",
      "Après avoir commencé Baron",
      'b',
      "Warder 1 minute avant permet d'avoir la vision en place quand l'objectif devient contestable."
    ),
    createQuestion(
      "Pourquoi sweep autour de Baron avant de le faire ?",
      "Pour faire plus de dégâts",
      "Pour éviter que l'ennemi ne vole avec la vision",
      "Ça n'est pas nécessaire",
      "Pour soigner l'équipe",
      'b',
      "Éliminer les wards ennemies empêche l'adversaire de voir et potentiellement voler l'objectif."
    ),
    createQuestion(
      "Où placer optimalement une Control Ward en late game ?",
      "Dans la lane du mid",
      "Près du pit de Baron ou Elder",
      "Dans votre base",
      "Dans le buisson de la botlane",
      'b',
      "La Control Ward doit être près des objectifs majeurs pour assurer une vision permanente."
    ),
    createQuestion(
      "Que devez-vous faire avant de placer une deep ward ?",
      "Rien, y aller seul",
      "S'assurer que c'est safe (vision ou équipe)",
      "Recall d'abord",
      "Utiliser Oracle Lens",
      'b',
      "Placer une deep ward nécessite de s'assurer que le chemin est safe pour éviter de mourir."
    ),
    createQuestion(
      "Combien de temps dure une Stealth Ward ?",
      "60 secondes",
      "90 secondes",
      "120 secondes",
      "180 secondes",
      'b',
      "Les Stealth Wards durent 90 secondes, il faut les renouveler avant expiration."
    ),
    createQuestion(
      "Quel item est essentiel pour sweep en late game ?",
      "Trinket jaune",
      "Oracle Lens",
      "Control Ward uniquement",
      "Aucun item spécial",
      'b',
      "Oracle Lens est nécessaire pour détecter et éliminer les wards ennemies."
    ),
    createQuestion(
      "Pourquoi éviter de warder les lanes en late game ?",
      "Les lanes sont trop dangereuses",
      "Les mouvements importants sont dans la jungle et aux objectifs",
      "Les wards ne marchent pas en lane",
      "L'ADC le fait",
      'b',
      "En late game, les décisions se font autour des objectifs, pas des lanes."
    ),
    createQuestion(
      "Que faire si l'équipe ennemie control la vision autour de Baron ?",
      "Ignorer Baron",
      "Sweep et replacer vos wards, ou attendre une opportunité",
      "Forcer Baron quand même",
      "Faire Elder à la place sans réfléchir",
      'b',
      "Si l'ennemi contrôle la vision, sweepez et remplacez ou attendez une meilleure opportunité."
    ),
  ]
);
