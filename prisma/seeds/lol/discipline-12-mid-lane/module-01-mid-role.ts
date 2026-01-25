import { createModule, createQuestion } from '../utils';

export const module01MidRole = createModule(
  "Rôle du mid laner",
  'mid-role',
  'Le carry polyvalent au centre de la carte',
  1,
  // Theory Content (5+ slides)
  `## Le rôle du mid laner

Le **mid laner** est considéré comme l'un des rôles les plus influents de League of Legends. Positionné au centre de la carte, il a accès rapide à toutes les zones de jeu et peut impacter n'importe quelle lane.

Ce rôle demande une excellente maîtrise mécanique, une bonne lecture de carte et la capacité à prendre des décisions rapides pour créer des avantages pour son équipe.

## Le carry polyvalent

Contrairement à l'ADC qui se concentre sur les dégâts physiques à distance, le mid laner est un **carry polyvalent** :

- **Dégâts magiques** (mages comme Syndra, Orianna)
- **Dégâts physiques** (assassins AD comme Zed, Talon)
- **Dégâts mixtes** (champions hybrides comme Akali)
- **Contrôle de zone** (control mages comme Anivia, Viktor)

## Position centrale stratégique

La mid lane est la **voie la plus courte** entre les deux bases, ce qui offre plusieurs avantages :

- **Rotation rapide** vers top ou bot lane
- **Accès direct** aux deux jungles
- **Contrôle** des objectifs (Dragon, Baron)
- **Pression** constante sur la carte

Le mid laner qui gère bien sa position peut influencer toute la carte.

## Responsabilités principales

Les responsabilités du mid laner incluent :

1. **Gagner sa lane** ou au minimum ne pas la perdre
2. **Roamer** pour aider les autres lanes
3. **Contrôler la vision** autour de la mid lane
4. **Participer aux escarmouches** dans la rivière
5. **Porter les teamfights** en late game

## Récapitulatif

- Le mid laner est un **carry polyvalent** au centre de la carte
- Il peut jouer **mages, assassins ou contrôleurs**
- Sa position centrale permet des **rotations rapides**
- Il doit **gagner sa lane** et **aider ses coéquipiers**
- C'est un rôle à **haute influence** sur le résultat de la partie`,

  // Practice Instructions
  `## Objectif

Comprendre l'importance de la position centrale du mid laner et ses possibilités de rotation.

## Étapes

1. Lancez une partie personnalisée ou d'entraînement
2. Choisissez un champion mid simple (Annie, Lux ou Ahri)
3. Positionnez-vous au milieu de la mid lane
4. Observez sur la minimap les distances vers chaque zone :
   - Top lane
   - Bot lane
   - Dragon pit
   - Baron pit
   - Jungle alliée et ennemie
5. Marchez vers chaque zone en comptant le temps (sans bottes)
6. Notez quelle zone est la plus rapide à atteindre

## Critère de réussite

Vous comprenez que la mid lane permet d'atteindre n'importe quelle zone de la carte en moins de 15 secondes et pouvez expliquer pourquoi cette position est stratégique.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la principale caractéristique de la position du mid laner sur la carte ?",
      "Il est isolé des autres lanes",
      "Il est au centre et peut accéder rapidement à toute la carte",
      "Il est proche uniquement du Dragon",
      "Il ne peut pas aider les autres lanes",
      'b',
      "La mid lane est au centre de la carte, permettant des rotations rapides vers toutes les zones."
    ),
    createQuestion(
      "Pourquoi dit-on que le mid laner est un 'carry polyvalent' ?",
      "Parce qu'il ne fait que des dégâts physiques",
      "Parce qu'il peut jouer différents types de champions (mages, assassins, etc.)",
      "Parce qu'il ne participe jamais aux teamfights",
      "Parce qu'il reste toujours sur sa lane",
      'b',
      "Le mid laner peut jouer des mages, assassins ou contrôleurs selon les besoins de l'équipe."
    ),
    createQuestion(
      "Quelle est la particularité de la mid lane par rapport aux autres voies ?",
      "Elle est la plus longue",
      "Elle est la plus courte entre les deux bases",
      "Elle n'a pas de tourelles",
      "Elle est toujours 2v2",
      'b',
      "La mid lane est la voie la plus courte, ce qui facilite les rotations et le contrôle de carte."
    ),
    createQuestion(
      "Parmi ces responsabilités, laquelle N'est PAS typique d'un mid laner ?",
      "Roamer pour aider les autres lanes",
      "Contrôler la vision autour de mid",
      "Toujours rester sur sa lane sans bouger",
      "Participer aux escarmouches en rivière",
      'c',
      "Un bon mid laner doit savoir quand quitter sa lane pour aider son équipe, pas rester immobile."
    ),
    createQuestion(
      "Quel type de champion n'est généralement PAS joué en mid lane ?",
      "Mage (Syndra, Orianna)",
      "Assassin (Zed, Talon)",
      "Tank pur (Ornn, Sion)",
      "Control mage (Anivia, Viktor)",
      'c',
      "Les tanks purs sont généralement joués en top lane, pas en mid où l'on privilégie les dégâts."
    ),
    createQuestion(
      "Pourquoi le mid laner a-t-il accès facile aux objectifs comme le Dragon ?",
      "Parce qu'il peut téléporter dessus",
      "Parce que sa position centrale lui permet d'y aller rapidement",
      "Parce que le Dragon spawn en mid lane",
      "Parce qu'il a des sorts spéciaux pour les objectifs",
      'b',
      "La position centrale de la mid lane permet d'atteindre rapidement le Dragon pit en rivière."
    ),
    createQuestion(
      "En early game, quelle doit être la priorité principale du mid laner ?",
      "Tuer le jungler ennemi",
      "Gagner sa lane ou au minimum ne pas la perdre",
      "Prendre toutes les tourelles",
      "Farmer uniquement la jungle",
      'b',
      "La priorité est de bien gérer sa lane pour ensuite pouvoir impacter le reste de la carte."
    ),
    createQuestion(
      "Qu'est-ce que le 'roaming' pour un mid laner ?",
      "Rester sous sa tourelle",
      "Quitter sa lane pour aller aider une autre lane ou le jungler",
      "Farmer les camps de jungle",
      "Acheter des items au shop",
      'b',
      "Le roaming consiste à quitter temporairement sa lane pour créer des avantages ailleurs."
    ),
    createQuestion(
      "Quel avantage offre la mid lane pour contrôler la vision ?",
      "Elle permet de warder les deux côtés de la rivière facilement",
      "Elle n'a aucun buisson à proximité",
      "Les wards durent plus longtemps en mid",
      "Le mid laner n'a pas besoin de warder",
      'a',
      "La position centrale permet de placer des wards dans les deux parties de la rivière."
    ),
    createQuestion(
      "En late game, quel est généralement le rôle du mid laner dans les teamfights ?",
      "Tanker les dégâts pour l'équipe",
      "Porter le fight en infligeant beaucoup de dégâts",
      "Uniquement soigner les alliés",
      "Fuir le combat",
      'b',
      "Le mid laner est souvent une source majeure de dégâts et doit porter les teamfights."
    ),
  ]
);
