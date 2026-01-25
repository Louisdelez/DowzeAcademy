import { createModule, createQuestion } from '../utils';

export const module10ObjectiveTrading = createModule(
  "Trade d'objectifs",
  'objective-trading',
  "Reconnaître quand échanger un objectif contre un autre",
  10,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le trade d'objectifs ?

Le **trade d'objectifs** est une stratégie qui consiste à **échanger** un objectif contre un autre quand vous ne pouvez pas contester. Au lieu de perdre un fight et l'objectif, vous prenez quelque chose d'équivalent ailleurs.

## Le principe du trade

La règle fondamentale : si vous ne pouvez pas défendre un objectif, **prenez quelque chose en échange**. Un bon trade minimise les pertes et peut même être avantageux si vous obtenez plus de valeur.

Exemples :
- L'ennemi fait le Dragon → Vous prenez le Héraut
- L'ennemi fait le Baron → Vous prenez 2 tourelles + un inhibiteur
- L'ennemi push top → Vous prenez le Dragon

## Évaluer la valeur des trades

Tous les trades ne sont pas égaux. Facteurs à considérer :
- **Valeur en or** : Tourelles, kills, fermes
- **Valeur stratégique** : Dragons (surtout 3ème/4ème), Baron
- **Tempo** : Ce que vous pouvez faire avec l'avantage obtenu

## Trades favorables

Certains trades sont généralement **gagnants** :
- Échanger un dragon early contre First Tower
- Échanger le Héraut contre un dragon (selon le contexte)
- Perdre une tourelle pour un shutdown kill

## Trades défavorables

Certains trades sont à **éviter** :
- Perdre l'Âme du dragon contre n'importe quoi
- Donner Baron gratuitement (sans trade)
- Échanger des kills 1 pour 1 quand vous êtes en retard

## Quand trader vs contester

Questions à se poser :
1. Pouvons-nous gagner le fight pour cet objectif ?
2. Que pouvons-nous prendre si on ne conteste pas ?
3. La valeur du trade est-elle acceptable ?

## Communication et exécution

Le trade d'objectifs nécessite une **bonne communication**. L'équipe doit être d'accord sur le plan : qui contest, qui trade, où aller. Une hésitation peut mener à un trade raté (vous perdez les deux objectifs).`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier les opportunités de trade d'objectifs et à évaluer leur valeur.

## Étapes

1. Regardez un replay de partie ranked ou pro
2. Identifiez les moments où une équipe fait un objectif (Dragon, Baron, Héraut)
3. Observez ce que fait l'autre équipe pendant ce temps
4. Analysez si le trade était équitable, favorable ou défavorable
5. Notez 3 situations de trade et évaluez leur valeur
6. Réfléchissez à ce que vous auriez fait différemment

## Critère de réussite

Vous pouvez identifier quand un trade d'objectifs est approprié et évaluer si l'échange est favorable pour votre équipe.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un trade d'objectifs ?",
      "Vendre un objectif contre de l'or",
      "Échanger un objectif contre un autre quand on ne peut pas contester",
      "Donner un objectif à l'ennemi gratuitement",
      "Prendre deux objectifs en même temps",
      'b',
      "Le trade d'objectifs consiste à prendre quelque chose d'autre quand vous ne pouvez pas défendre un objectif."
    ),
    createQuestion(
      "L'ennemi fait le Dragon, vous n'avez pas de vision. Que faire ?",
      "Foncer les 5 dans la fosse",
      "Recall et attendre",
      "Prendre un objectif ailleurs (tourelle, Héraut)",
      "Abandonner la partie",
      'c',
      "Sans vision ni avantage, mieux vaut trader en prenant quelque chose d'autre sur la carte."
    ),
    createQuestion(
      "Quel trade est généralement défavorable ?",
      "Première tourelle contre un dragon early",
      "Héraut contre Dragon",
      "Perdre l'Âme du dragon contre une tourelle",
      "Tourelle tier 2 contre un inhibiteur",
      'c',
      "L'Âme du dragon est trop précieuse pour être échangée contre une simple tourelle."
    ),
    createQuestion(
      "Pourquoi la communication est-elle cruciale pour les trades ?",
      "Pour flame ses coéquipiers",
      "Pour que l'équipe soit coordonnée sur qui fait quoi",
      "Pour distraire l'ennemi",
      "Elle n'est pas nécessaire",
      'b',
      "Sans communication, l'équipe peut hésiter et perdre les deux objectifs."
    ),
    createQuestion(
      "Échanger First Tower contre un dragon early est généralement...",
      "Un très mauvais trade",
      "Un trade acceptable ou favorable",
      "Impossible à réaliser",
      "Uniquement bon pour le support",
      'b',
      "First Tower donne de l'or bonus et ouvre la map, ce qui compense souvent un dragon early."
    ),
    createQuestion(
      "Quand NE PAS trader et plutôt contester ?",
      "Quand vous êtes en infériorité numérique",
      "Quand l'objectif est l'Âme ou le Baron et que vous pouvez gagner le fight",
      "Quand vous n'avez pas de vision",
      "Toujours trader, ne jamais contester",
      'b',
      "Pour des objectifs critiques comme l'Âme, il vaut mieux contester si vous avez une chance de gagner."
    ),
    createQuestion(
      "L'ennemi fait Baron, vous êtes 4v5. Que faire ?",
      "Contester quand même",
      "Trader en prenant le plus possible (tourelles, inhibiteur)",
      "Surrender",
      "Attendre dans la base",
      'b',
      "En désavantage numérique, mieux vaut maximiser le trade en prenant des structures."
    ),
    createQuestion(
      "Quelle question vous aide à décider entre trade et contest ?",
      "Quel champion ai-je ?",
      "Pouvons-nous gagner le fight pour cet objectif ?",
      "Quelle heure est-il en jeu ?",
      "Combien ai-je de gold ?",
      'b',
      "Évaluer vos chances de gagner le fight est la première question pour décider."
    ),
    createQuestion(
      "Un 'bad trade' se produit quand...",
      "Vous gagnez plus de valeur que l'ennemi",
      "Vous perdez plus de valeur que vous n'en gagnez",
      "Vous échangez des kills",
      "Vous prenez le Baron",
      'b',
      "Un mauvais trade signifie que vous avez perdu plus de valeur que ce que vous avez obtenu."
    ),
    createQuestion(
      "Perdre une tourelle pour tuer un carry ennemi fed est...",
      "Toujours un mauvais trade",
      "Généralement un bon trade (shutdown gold + temps mort)",
      "Impossible",
      "Uniquement bon en early game",
      'b',
      "Un shutdown sur un carry fed donne beaucoup d'or et les enlève du combat pendant leur temps mort."
    ),
  ]
);
