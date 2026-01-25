import { createModule, createQuestion } from '../utils';

export const module13MidgameDefense = createModule(
  'Défense en mid-game',
  'midgame-defense',
  'Turtle sous les tours',
  13,
  // Theory Content (5+ slides)
  `## Quand passer en mode défensif

En mid-game, vous devrez parfois **jouer défensivement** (turtle) quand :
- Vous êtes en retard significatif en or/items
- L'équipe ennemie a un power spike plus fort
- Vous avez perdu un fight récemment
- Un coéquipier clé est mort ou AFK

L'objectif est de **survivre** et **scaler** jusqu'à retrouver une chance de gagner.

## Les principes de la défense (turtle)

La défense efficace repose sur plusieurs principes :
- **Jouer sous vos tourelles** : les tourelles sont votre meilleur allié
- **Ne pas donner de kills gratuits** : évitez les combats inutiles
- **Farmer prudemment** : prenez le farm accessible en sécurité
- **Gérer les vagues** : ne laissez pas crash sous votre base
- **Attendre une erreur ennemie** : la patience est votre arme

## Clear les vagues efficacement

Pour défendre, vous devez clear les vagues sans mourir :
- **Champions AOE** : Sivir, Anivia, Ziggs excellent en clear défensif
- **Gardez vos sorts** : ne gaspillez pas le mana sur rien
- **Positionnement sûr** : ne sortez pas de la zone protégée
- **Rotation de clear** : alternez qui clear pour préserver le mana

Si une vague pousse vers votre base, il faut la clear. Sinon, vous perdez des structures.

## Chercher le retournement

Même en défense, guettez les opportunités :
- **Pick sur un ennemi trop agressif** : ils font souvent des erreurs en dive
- **Steal d'objectif** : un smite chanceux peut tout changer
- **Power spike** : quand vous atteignez un item clé
- **Erreur de positionnement** : un ennemi seul sous votre tourelle

Un seul bon fight peut relancer la partie.

## Récapitulatif

La défense en mid-game est une compétence cruciale :
- Turtle sous les tourelles quand vous êtes en retard
- Ne donnez pas de kills gratuits
- Clear les vagues pour protéger vos structures
- Gardez le moral et attendez les opportunités
- Un bon retournement peut venir d'une seule erreur ennemie`,

  // Practice Instructions
  `## Objectif

Pratiquer la défense sous vos tourelles quand vous êtes en retard, en évitant les morts inutiles et en attendant une opportunité de retournement.

## Étapes

1. Identifiez une situation où votre équipe est en retard (3k+ or de déficit)
2. Communiquez le plan défensif : "On joue safe et on scale"
3. Restez sous vos tourelles et farmez les vagues en sécurité
4. N'engagez PAS de fight sauf si l'ennemi dive mal
5. Wardez vos entrées de jungle pour voir les dives
6. Attendez une erreur ennemie (dive raté, séparation) pour contre-attaquer

## Critère de réussite

Pendant 5 minutes de défense, vous n'avez pas donné de kill "gratuit" (mort sans trade ou objectif) et avez réussi à farmer au moins 60% des vagues.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quand devez-vous passer en mode défensif (turtle) ?",
      "Dès le début de la partie",
      "Quand vous êtes en retard significatif",
      "Après chaque kill",
      "Uniquement en late-game",
      'b',
      "Le mode défensif est nécessaire quand vous êtes trop en retard pour prendre des fights équitables."
    ),
    createQuestion(
      "Quel est l'objectif principal de la défense ?",
      "Tuer le maximum d'ennemis",
      "Survivre et scaler jusqu'à retrouver une chance",
      "Détruire les tourelles ennemies",
      "Faire tous les objectifs",
      'b',
      "En défense, l'objectif est de survivre assez longtemps pour que vos champions scalent et que l'ennemi fasse des erreurs."
    ),
    createQuestion(
      "Où devez-vous jouer principalement en mode défensif ?",
      "Dans la jungle ennemie",
      "Sous vos tourelles",
      "Au centre de la carte",
      "Dans les bushes",
      'b',
      "Les tourelles offrent protection et dégâts contre les ennemis qui vous attaquent."
    ),
    createQuestion(
      "Quelle erreur éviter absolument en défense ?",
      "Farmer sous la tourelle",
      "Donner des kills gratuits",
      "Placer des wards",
      "Communiquer avec l'équipe",
      'b',
      "Chaque mort gratuite creuse l'écart et retarde votre comeback."
    ),
    createQuestion(
      "Quel type de champion excelle en clear défensif ?",
      "Les assassins",
      "Les champions avec des dégâts AOE",
      "Les tanks sans dégâts",
      "Les supports sans waveclear",
      'b',
      "Les champions AOE comme Sivir, Anivia ou Ziggs peuvent clear les vagues rapidement et en sécurité."
    ),
    createQuestion(
      "Pourquoi ne pas laisser les vagues crash sous votre base ?",
      "Les sbires deviennent plus forts",
      "Vous perdez vos structures (inhibiteurs, Nexus)",
      "L'or diminue",
      "Ce n'est pas grave",
      'b',
      "Les vagues non clear détruisent vos structures, accélérant votre défaite."
    ),
    createQuestion(
      "Quelle opportunité de retournement guetter en défense ?",
      "Un fight en terrain découvert",
      "Un ennemi qui dive mal sous votre tourelle",
      "Un objectif en territoire ennemi",
      "Un split-push agressif",
      'b',
      "Les dives ratés sont souvent l'opportunité de retournement : la tourelle aide à tuer les agresseurs."
    ),
    createQuestion(
      "Pourquoi warder vos entrées de jungle en défense ?",
      "Pour voler les camps ennemis",
      "Pour anticiper les dives et les flanks",
      "Pour voir le Baron",
      "Ce n'est pas utile",
      'b',
      "La vision défensive vous alerte des tentatives de dive ou d'engagement ennemi."
    ),
    createQuestion(
      "Qu'est-ce qui peut relancer une partie en défense ?",
      "Farmer pendant 30 minutes",
      "Un seul bon fight ou steal d'objectif",
      "Abandonner la partie",
      "Se concentrer uniquement sur le farm",
      'b',
      "Une victoire de teamfight ou un steal de Baron peut complètement retourner la situation."
    ),
    createQuestion(
      "Quelle attitude mentale est importante en défense ?",
      "La frustration pour motiver l'équipe",
      "La patience et l'attente des opportunités",
      "L'agressivité constante",
      "L'indifférence totale",
      'b',
      "La patience est cruciale : les équipes en avance font souvent des erreurs si vous ne leur donnez rien de gratuit."
    ),
  ]
);
