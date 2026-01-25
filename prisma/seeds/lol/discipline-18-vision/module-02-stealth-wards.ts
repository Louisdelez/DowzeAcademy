import { createModule, createQuestion } from '../utils';

export const module02StealthWards = createModule(
  'Wards invisibles (totems furtifs)',
  'stealth-wards',
  'Maîtriser le trinket jaune et ses utilisations stratégiques',
  2,
  // Theory Content (5+ slides)
  `## Le Totem furtif (Trinket jaune)

Le **Totem furtif** est le trinket de base que tous les joueurs commencent avec. Il permet de poser des **wards invisibles** (Stealth Wards) gratuitement. Ce trinket est essentiel pour établir de la vision sans dépenser d'or.

## Caractéristiques du Totem furtif

- **Coût** : Gratuit (équipement de base)
- **Charges** : 2 maximum (se recharge avec le temps)
- **Durée de la ward** : 90-120 secondes (selon le niveau)
- **Invisibilité** : La ward est invisible pour l'ennemi sauf si révélée
- **Temps de recharge** : ~240-120 secondes par charge (diminue avec le niveau)

## Comment utiliser le Totem furtif

Pour poser une ward, appuyez sur la touche **4** (par défaut) et cliquez sur l'emplacement souhaité. La ward se pose instantanément et commence à révéler la zone. Elle reste en place jusqu'à expiration ou destruction par l'ennemi.

## Quand utiliser vos wards ?

Utilisez vos wards de manière **proactive**, pas réactive :
- **Avant** d'avancer agressivement en lane
- **Avant** que le jungler ennemi puisse ganker
- **Quand** vous revenez de base pour couvrir votre lane
- **Pour** surveiller les objectifs (Drake, Herald)

Ne gardez jamais 2 charges pleines - c'est du gaspillage de vision potentielle !

## Limite de wards actives

Chaque joueur ne peut avoir que **3 Stealth Wards** actives simultanément sur la carte. Si vous en posez une 4ème, la plus ancienne disparaît automatiquement. Planifiez donc vos placements pour maximiser la couverture.`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser efficacement le trinket jaune pour maintenir une vision constante.

## Étapes

1. Lancez une partie d'entraînement ou normale
2. Vérifiez que vous avez le Totem furtif équipé (trinket jaune)
3. Pendant les 10 premières minutes, ne gardez jamais 2 charges pleines
4. Posez une ward à chaque fois que vous avez une charge disponible
5. Notez les emplacements où vous posez vos wards
6. Observez combien de temps chaque ward reste active avant d'expirer

## Critère de réussite

Vous avez maintenu une utilisation constante du trinket (jamais 2 charges pleines pendant plus de 30 secondes) pendant 10 minutes et placé au moins 8 wards.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le nom du trinket de base qui pose des wards invisibles ?",
      "Altération oraculaire",
      "Totem furtif",
      "Orbe de clairvoyance",
      "Balise de contrôle",
      'b',
      "Le Totem furtif (trinket jaune) est l'équipement de base pour poser des Stealth Wards."
    ),
    createQuestion(
      "Combien coûte le Totem furtif ?",
      "50 pièces d'or",
      "75 pièces d'or",
      "Gratuit",
      "100 pièces d'or",
      'c',
      "Le Totem furtif est gratuit et équipé par défaut au début de la partie."
    ),
    createQuestion(
      "Combien de charges maximum peut contenir le Totem furtif ?",
      "1 charge",
      "2 charges",
      "3 charges",
      "4 charges",
      'b',
      "Le Totem furtif peut stocker jusqu'à 2 charges qui se rechargent avec le temps."
    ),
    createQuestion(
      "Quelle est la durée approximative d'une Stealth Ward ?",
      "30-60 secondes",
      "90-120 secondes",
      "180-240 secondes",
      "Permanente",
      'b',
      "Les Stealth Wards durent entre 90 et 120 secondes selon votre niveau."
    ),
    createQuestion(
      "Quelle touche par défaut active le trinket ?",
      "1",
      "2",
      "3",
      "4",
      'd',
      "Par défaut, la touche 4 active le trinket (emplacement d'objet spécial)."
    ),
    createQuestion(
      "Combien de Stealth Wards un joueur peut-il avoir actives simultanément ?",
      "1 ward",
      "2 wards",
      "3 wards",
      "Illimité",
      'c',
      "Chaque joueur est limité à 3 Stealth Wards actives en même temps sur la carte."
    ),
    createQuestion(
      "Que se passe-t-il si vous posez une 4ème Stealth Ward ?",
      "La nouvelle ward ne se pose pas",
      "La plus ancienne ward disparaît automatiquement",
      "Toutes les wards sont détruites",
      "Vous perdez de l'or",
      'b',
      "La ward la plus ancienne est automatiquement supprimée pour faire place à la nouvelle."
    ),
    createQuestion(
      "Quand devriez-vous poser une ward idéalement ?",
      "Après avoir subi un gank",
      "Avant d'avancer agressivement ou quand un gank est possible",
      "Uniquement en fin de partie",
      "Quand vous êtes sous votre tourelle",
      'b',
      "Les wards doivent être posées de manière proactive, avant que le danger n'arrive."
    ),
    createQuestion(
      "Pourquoi ne faut-il jamais garder 2 charges pleines trop longtemps ?",
      "Les charges expirent si non utilisées",
      "C'est du gaspillage de vision potentielle",
      "Cela réduit vos dégâts",
      "Le trinket se désactive",
      'b',
      "Garder des charges pleines signifie que vous ne rechargez pas, gaspillant de la vision potentielle."
    ),
    createQuestion(
      "Les Stealth Wards sont-elles visibles par l'ennemi ?",
      "Oui, toujours",
      "Non, elles sont invisibles sauf si révélées",
      "Seulement pendant la première seconde",
      "Seulement la nuit",
      'b',
      "Les Stealth Wards sont invisibles et nécessitent un effet de révélation pour être vues."
    ),
  ]
);
