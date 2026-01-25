import { createModule, createQuestion } from '../utils';

export const module04LanePositioning = createModule(
  'Positionnement en lane',
  'lane-positioning',
  'Maintenir une distance sûre par rapport aux menaces ennemies',
  4,
  // Theory Content (5+ slides)
  `## L'importance du positionnement

Pour un ADC, le **positionnement** est la compétence la plus importante. Étant le membre le plus fragile de l'équipe, une erreur de position peut signifier une mort instantanée. Un bon positionnement vous permet de :

- **Farmer en sécurité**
- **Éviter les ganks**
- **Trader efficacement**
- **Survivre aux engages**

## Les zones de danger

En bot lane, identifiez constamment les zones de danger :

**Zone rouge (mortelle)** :
- Portée des CC ennemis (Blitzcrank hook, Leona E)
- Zone de gank du jungler (tribush, river bush)

**Zone orange (risquée)** :
- Portée des dégâts ennemis mais pas des CC
- Position avancée sans vision

**Zone verte (sûre)** :
- Derrière vos sbires
- Proche de votre tourelle
- Avec vision sur les entrées

## Le positionnement par rapport aux sbires

Les sbires sont votre **bouclier naturel** :

- Restez **derrière** vos sbires pour bloquer les skillshots
- Ne vous placez **jamais** devant la vague sans raison
- Utilisez les sbires mourants comme **appât** (l'ennemi veut last-hit)
- Attention aux sbires de mêlée qui avancent

Les compétences bloquables par les sbires :
- Blitzcrank Q, Thresh Q, Morgana Q
- Nautilus Q, Pyke Q, Lux Q

## La distance de sécurité

Maintenez toujours une **distance de sécurité** :

- Connaissez la **portée** des compétences ennemies
- Restez hors de portée des **engages** (Leona E = 875 unités)
- Gardez votre **dash/flash** pour les urgences
- Reculez si votre support n'est pas en position

Règle d'or : **Si vous ne savez pas où est le jungler, jouez comme s'il était dans le bush à côté de vous.**

## Récapitulatif

- Le positionnement est **vital** pour l'ADC
- Identifiez les **zones de danger** (rouge, orange, verte)
- Utilisez les **sbires comme bouclier**
- Maintenez la **distance de sécurité** par rapport aux menaces
- **Vision du jungler** = liberté de positionnement`,

  // Practice Instructions
  `## Objectif

Pratiquer le positionnement sûr en lane en utilisant les sbires comme protection.

## Étapes

1. Lancez une partie normale en ADC
2. Identifiez les compétences CC du support/ADC ennemi
3. Restez constamment derrière vos sbires de mêlée
4. Notez chaque fois que vous vous faites toucher par une compétence évitable
5. Après 10 minutes, comptez le nombre de fois où vous avez été en danger

## Critère de réussite

Vous avez survécu les 10 premières minutes sans mourir à cause d'un mauvais positionnement, en restant derrière vos sbires.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi le positionnement est-il crucial pour l'ADC ?",
      "Pour faire plus de dégâts",
      "Parce que l'ADC est fragile et peut mourir rapidement",
      "Pour aider le jungler",
      "Pour poser des wards",
      'b',
      "L'ADC est le membre le plus fragile de l'équipe, un mauvais positionnement peut être fatal."
    ),
    createQuestion(
      "Que représente la 'zone rouge' en lane ?",
      "Une zone de farm optimal",
      "Une zone mortelle à éviter",
      "La zone derrière la tourelle",
      "La zone du dragon",
      'b',
      "La zone rouge est mortelle, comprenant la portée des CC ennemis et les zones de gank."
    ),
    createQuestion(
      "Comment les sbires peuvent-ils vous protéger ?",
      "Ils attaquent les ennemis",
      "Ils bloquent les skillshots ennemis",
      "Ils vous soignent",
      "Ils donnent de l'armure",
      'b',
      "Les sbires bloquent de nombreuses compétences comme les hooks de Blitzcrank ou Thresh."
    ),
    createQuestion(
      "Où devez-vous vous positionner par rapport à vos sbires ?",
      "Devant eux",
      "Derrière eux",
      "Sur le côté uniquement",
      "Position sans importance",
      'b',
      "Restez derrière vos sbires pour qu'ils bloquent les skillshots ennemis."
    ),
    createQuestion(
      "Quelle compétence N'EST PAS bloquée par les sbires ?",
      "Blitzcrank Q (Rocket Grab)",
      "Thresh Q (Death Sentence)",
      "Leona E (Zenith Blade)",
      "Morgana Q (Dark Binding)",
      'c',
      "Leona E (Zenith Blade) traverse les sbires contrairement aux autres hooks."
    ),
    createQuestion(
      "Que faire si vous ne savez pas où est le jungler ennemi ?",
      "Jouer agressivement pour le forcer à se montrer",
      "Jouer comme s'il était dans le bush à côté de vous",
      "Continuer normalement",
      "Push la wave le plus vite possible",
      'b',
      "Sans vision du jungler, jouez prudemment comme s'il pouvait vous ganker à tout moment."
    ),
    createQuestion(
      "Quelle est la portée approximative de l'engage de Leona (E) ?",
      "500 unités",
      "675 unités",
      "875 unités",
      "1100 unités",
      'c',
      "Le Zenith Blade de Leona a une portée d'environ 875 unités."
    ),
    createQuestion(
      "Qu'est-ce que la 'zone verte' en positionnement ?",
      "La zone la plus dangereuse",
      "La zone du jungler",
      "La zone sûre avec protection",
      "La zone du dragon",
      'c',
      "La zone verte est la zone sûre : derrière vos sbires, proche de votre tourelle, avec vision."
    ),
    createQuestion(
      "Quand pouvez-vous vous positionner plus agressivement ?",
      "Quand vous avez faim",
      "Quand vous avez vision du jungler ennemi",
      "Toujours",
      "Jamais",
      'b',
      "Avec la vision du jungler, vous savez qu'un gank n'est pas imminent et pouvez avancer."
    ),
    createQuestion(
      "Que devez-vous garder en réserve pour les urgences ?",
      "Vos sorts d'invocateur (Flash)",
      "Votre ultime",
      "Vos wards",
      "Votre or",
      'a',
      "Gardez Flash et votre dash pour échapper aux situations dangereuses."
    ),
  ]
);
