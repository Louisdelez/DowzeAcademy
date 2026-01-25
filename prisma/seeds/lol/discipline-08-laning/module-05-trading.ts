import { createModule, createQuestion } from '../utils';

export const module05Trading = createModule(
  'Trading',
  'trading',
  "Échanges de dégâts favorables avec l'ennemi",
  5,
  // Theory Content
  `## Le Trading

Le **trading** est l'art d'échanger des dégâts avec votre adversaire de lane de manière **favorable**. L'objectif est de lui faire plus de dégâts qu'il ne vous en fait.

## Principes du trade

Bases du trading :
- Échanger quand vous avez un **avantage**
- Avantages : plus de **PV**, **sorts disponibles**, **cooldowns**
- Éviter de trade quand vous êtes **désavantagé**
- Toujours évaluer les **risques** vs **récompenses**

## Windows de trade

Moments opportuns :
- Quand l'ennemi **last-hit** (il est occupé)
- Quand ses **sorts sont en cooldown**
- Quand vous avez un **level up** avant lui
- Quand il rate un sort important

## Trade favorable vs défavorable

Comment reconnaître :
- **Favorable** : Vous faites plus de dégâts qu'il vous en fait
- **Défavorable** : Il vous fait plus de dégâts
- Tenez compte du **sustain** (lifesteal, regen, pots)
- Attention aux **sbires** qui tapent aussi

## L'agression des sbires

Les sbires attaquent quand :
- Vous **auto-attaquez** un champion ennemi
- Pas si vous utilisez des **sorts**
- 6 sbires au niveau 1 = **beaucoup de dégâts**
- Tradez dans votre vague, pas dans la sienne

## Récapitulatif

Pour bien trader :
- Tradez quand l'ennemi last-hit
- Respectez les cooldowns
- Attention à l'agro des sbires
- Visez des trades **courts** et **favorables**`,

  // Practice Instructions
  `## Objectif

Apprendre à effectuer des trades favorables en lane.

## Étapes

1. En partie, observez quand votre adversaire last-hit
2. Faites une auto-attaque ou un sort pendant qu'il farm
3. Reculez immédiatement pour éviter sa riposte
4. Notez si le trade était favorable (vous avez fait plus de dégâts)
5. Répétez en ajustant votre timing

## Critère de réussite

Vous finissez la phase de lane avec plus de PV que votre adversaire grâce aux trades.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le trading ?",
      "Vendre des objets",
      "Échanger des dégâts avec l'ennemi",
      "Échanger de lane",
      "Donner de l'or",
      'b',
      "Le trading consiste à échanger des dégâts de manière favorable."
    ),
    createQuestion(
      "Quand est un bon moment pour trade ?",
      "Toujours",
      "Quand l'ennemi last-hit",
      "Jamais",
      "Quand on a peu de PV",
      'b',
      "Trader quand l'ennemi last-hit car il ne peut pas riposter."
    ),
    createQuestion(
      "Un trade favorable signifie quoi ?",
      "Vous perdez plus de PV",
      "Vous faites plus de dégâts qu'il ne vous en fait",
      "Personne ne prend de dégâts",
      "Vous mourez",
      'b',
      "Favorable = vous infligez plus de dégâts que vous n'en recevez."
    ),
    createQuestion(
      "Les sbires attaquent quand vous...",
      "Utilisez un sort sur un champion",
      "Auto-attaquez un champion ennemi",
      "Last-hit",
      "Bougez",
      'b',
      "Les sbires agro quand vous auto-attaquez un champion, pas avec les sorts."
    ),
    createQuestion(
      "Pourquoi faut-il faire attention aux sbires ?",
      "Ils donnent de l'or",
      "Ils font beaucoup de dégâts au niveau 1",
      "Ils sont inutiles",
      "Ils soignent l'ennemi",
      'b',
      "Les sbires font des dégâts significatifs, surtout en early game."
    ),
    createQuestion(
      "Quand éviter de trade ?",
      "Quand l'ennemi est bas en PV",
      "Quand vous êtes désavantagé",
      "Quand vos sorts sont up",
      "Jamais",
      'b',
      "Évitez de trade quand vous avez un désavantage (PV, cooldowns, etc.)."
    ),
    createQuestion(
      "Quel avantage rechercher avant de trade ?",
      "Aucun",
      "Plus de PV, sorts disponibles, level up",
      "Moins de CS",
      "Plus de morts",
      'b',
      "Tradez avec un avantage de PV, cooldowns ou niveau."
    ),
    createQuestion(
      "Où vaut-il mieux trade ?",
      "Sous tourelle ennemie",
      "Dans votre vague de sbires",
      "Au milieu de la rivière",
      "Sous tourelle alliée",
      'b',
      "Trader dans votre vague = vos sbires l'attaquent aussi."
    ),
    createQuestion(
      "Un trade court est-il meilleur qu'un long ?",
      "Non, toujours combattre longtemps",
      "Souvent, surtout si vous êtes incertain",
      "Jamais",
      "Ça dépend de la météo",
      'b',
      "Les trades courts sont plus safe et plus faciles à évaluer."
    ),
    createQuestion(
      "Que faire après un bon trade ?",
      "Continuer à combattre",
      "Reculer et profiter de l'avantage de PV",
      "Mourir",
      "Quitter la partie",
      'b',
      "Après un bon trade, reculez et profitez de votre avantage de PV."
    ),
  ]
);
