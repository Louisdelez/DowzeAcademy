import { createModule, createQuestion } from '../utils';

export const module03FlankEngage = createModule(
  'Flank et engage',
  'flank-engage',
  "Maîtriser l'art de prendre l'ennemi à revers pour initier les combats",
  3,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un flank ?

Un **flank** (flanc) consiste à contourner la position ennemie pour attaquer depuis un angle inattendu. Au lieu d'engager de front, vous prenez l'adversaire **à revers** pour atteindre directement leurs carries.

## Champions idéaux pour flanker

Certains champions excellent dans ce rôle :
- **Assassins** : Zed, Talon, Katarina, Ekko
- **Bruisers mobiles** : Camille, Irelia, Fiora
- **Engagers** : Kennen, Fiddlesticks, Malphite
- **Certains mages** : Neeko, Lissandra

## Préparer son flank

Un bon flank nécessite de la préparation :
1. **Vision** : Savoir où sont les ennemis sans être vu
2. **Timing** : Attendre que l'attention soit ailleurs
3. **Position** : Se placer dans un angle mort (jungle, over walls)
4. **Communication** : Signaler à son équipe qu'on va flanquer

## L'exécution du flank

Le moment critique :
- **Attendre l'engagement** de votre équipe ou que l'ennemi s'engage
- **Arriver par surprise** quand les cooldowns sont utilisés
- **Focus immédiat** sur le carry
- **Avoir un plan de sortie** (flash, dash, Zhonya)

## Risques et contre-mesures

Le flank comporte des risques :
- **Se faire spot** par une ward = flank raté
- **Arriver trop tôt** = se faire focus par 5 joueurs
- **Arriver trop tard** = le combat est déjà décidé
- **Manquer son burst** = mort certaine

## Comment contrer un flank

Si vous êtes la cible d'un flank :
- **Wardez les flancs** (buissons, jungle latérale)
- **Restez groupés** avec votre équipe
- **Gardez un CC** pour le flanker
- **Ne tournez pas le dos** aux angles de flank`,

  // Practice Instructions
  `## Objectif

Apprendre à exécuter des flanks efficaces pour atteindre les carries ennemis par surprise.

## Étapes

1. Jouez un champion de flank (Zed, Talon, Ekko, Kennen, etc.)
2. Avant un teamfight, positionnez-vous sur un flanc via la jungle
3. Attendez que le combat commence avant d'intervenir
4. Utilisez le ping "On my way" pour prévenir votre équipe
5. Engagez sur le carry ennemi quand il utilise ses cooldowns
6. Utilisez Zhonya, votre dash ou Flash pour survivre après

## Critère de réussite

Sur 5 tentatives de flank, vous avez réussi à atteindre et éliminer (ou forcer hors combat) le carry adverse au moins 3 fois sans mourir avant d'avoir fait des dégâts significatifs.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un flank en teamfight ?",
      "Attaquer la frontline adverse",
      "Contourner l'ennemi pour attaquer depuis un angle inattendu",
      "Fuir le combat",
      "Protéger son carry",
      'b',
      "Un flank consiste à prendre l'ennemi à revers pour atteindre directement leurs carries."
    ),
    createQuestion(
      "Quel type de champion est idéal pour flanker ?",
      "Les tanks lents",
      "Les ADC à longue portée",
      "Les assassins et bruisers mobiles",
      "Les supports enchanteresses",
      'c',
      "Les assassins (Zed, Talon) et bruisers mobiles (Camille, Irelia) ont la mobilité et les dégâts pour flanker efficacement."
    ),
    createQuestion(
      "Que faut-il faire AVANT d'exécuter un flank ?",
      "Engager immédiatement",
      "Se positionner dans un angle mort et attendre le bon timing",
      "Prévenir l'ennemi de votre position",
      "Attaquer les minions",
      'b',
      "Un bon flank nécessite une préparation : position discrète, timing correct et communication avec l'équipe."
    ),
    createQuestion(
      "Quel est le pire moment pour exécuter un flank ?",
      "Quand l'ennemi est distrait par votre équipe",
      "Quand les cooldowns ennemis sont utilisés",
      "Quand vous arrivez trop tôt et êtes focus par 5 joueurs",
      "Quand le carry est isolé",
      'c',
      "Arriver trop tôt expose le flanker à l'attention de toute l'équipe adverse, menant à une mort rapide."
    ),
    createQuestion(
      "Comment signaler un flank à votre équipe ?",
      "Écrire un long message dans le chat",
      "Utiliser le ping 'On my way' vers le flanc",
      "Ne rien signaler pour garder le secret",
      "Demander à l'équipe de quitter le combat",
      'b',
      "Le ping 'On my way' informe rapidement votre équipe de votre intention sans perdre de temps."
    ),
    createQuestion(
      "Pourquoi est-il crucial d'avoir un 'plan de sortie' ?",
      "Pour farm après le combat",
      "Pour survivre après avoir fait votre burst sur le carry",
      "Pour retourner à la base rapidement",
      "Ce n'est pas nécessaire",
      'b',
      "Après avoir burst le carry, le flanker doit survivre via Flash, Zhonya, dash, etc. pour ne pas mourir inutilement."
    ),
    createQuestion(
      "Comment contrer un flank adverse ?",
      "Ignorer les flancs et combattre normalement",
      "Warder les flancs, rester groupés et garder un CC pour le flanker",
      "Tous courir vers le flanker",
      "Abandonner le combat immédiatement",
      'b',
      "La vision des flancs et le CC de réserve permettent de neutraliser les tentatives de flank."
    ),
    createQuestion(
      "Qu'est-ce qui fait échouer un flank à coup sûr ?",
      "Attendre le bon moment",
      "Se faire repérer (spot) par une ward ennemie",
      "Avoir trop de dégâts",
      "Être trop rapide",
      'b',
      "Si l'ennemi vous voit arriver via une ward, le facteur surprise est perdu et le flank échoue."
    ),
    createQuestion(
      "Quel champion mage peut excellemment flanker avec son ultime ?",
      "Lux",
      "Xerath",
      "Kennen ou Fiddlesticks",
      "Ziggs",
      'c',
      "Kennen et Fiddlesticks ont des ultimes de zone parfaites pour flanker et toucher plusieurs ennemis par surprise."
    ),
    createQuestion(
      "Quand est le meilleur moment pour apparaître d'un flank ?",
      "Au tout début du combat",
      "Quand le combat est déjà terminé",
      "Quand l'ennemi a utilisé ses cooldowns importants et est distrait",
      "Quand votre équipe est morte",
      'c',
      "Le moment idéal est quand l'ennemi a utilisé ses CC et capacités défensives, les rendant vulnérables."
    ),
  ]
);
