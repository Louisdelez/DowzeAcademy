import { createModule, createQuestion } from '../utils';

export const module07RuneShards = createModule(
  'Fragments de runes (shards)',
  'rune-shards',
  'Ajustements de stats bonus',
  7,
  // Theory Content
  `## Les fragments de runes

Les **fragments** (shards) sont les 3 derniers choix de votre page de runes. Ils donnent de petits **bonus de stats** pour personnaliser votre champion.

## Structure des fragments

Vous choisissez 3 fragments :
- **Ligne 1 (Offense)** : Stats offensives
- **Ligne 2 (Flex)** : Stats polyvalentes
- **Ligne 3 (Defense)** : Stats défensives

## Options de la ligne Offense

Choix offensifs :
- **Vitesse d'attaque** : +10% AS
- **Force adaptative** : +9 AD ou +15 AP (selon vos objets)
- **Ability Haste** : +8 AH (réduction de cooldown)

## Options de la ligne Flex

Choix flexibles :
- **Force adaptative** : +9 AD ou +15 AP
- **Vitesse d'attaque** : +10% AS
- **PV** : +65 PV

## Options de la ligne Defense

Choix défensifs :
- **PV** : +65 PV
- **Armure** : +6 Armure
- **Résistance Magique** : +8 RM

## Comment choisir ?

Adaptation selon le matchup :
- Contre AD en lane : Armure
- Contre AP en lane : RM
- Si vous n'êtes pas sûr : PV
- Offense selon votre champion (AS pour ADC, AF pour mages)

## Récapitulatif

- 3 fragments : Offense, Flex, Defense
- Petits bonus mais importants
- Adapter à votre champion et au matchup
- Armure contre AD, RM contre AP
- PV si incertain ou contre mixte`,

  // Practice Instructions
  `## Objectif

Comprendre comment choisir les fragments selon la situation.

## Étapes

1. Dans une page de runes, regardez les 3 lignes de fragments
2. Si vous jouez ADC, prenez Vitesse d'attaque + AD + Armure
3. Si vous jouez mage, prenez AD adaptatif + AD adaptatif + RM
4. Observez les stats bonus dans vos stats (touche C)
5. Changez selon le matchup (AD enemy = armure, AP = RM)

## Critère de réussite

Vous savez adapter vos fragments au champion joué et à l'ennemi.`,

  // Questions
  [
    createQuestion(
      "Combien de fragments choisit-on ?",
      "1",
      "2",
      "3",
      "4",
      'c',
      "On choisit 3 fragments : Offense, Flex et Defense."
    ),
    createQuestion(
      "Que donne la Force adaptative ?",
      "Toujours de l'AD",
      "AD ou AP selon vos stats/objets",
      "De la vitesse",
      "De l'armure",
      'b',
      "Force adaptative donne AD ou AP selon ce que votre champion utilise."
    ),
    createQuestion(
      "Quel fragment défensif prendre contre un ennemi AD ?",
      "RM",
      "Armure",
      "PV uniquement",
      "Ability Haste",
      'b',
      "L'Armure réduit les dégâts physiques (AD)."
    ),
    createQuestion(
      "Quel fragment défensif prendre contre un ennemi AP ?",
      "Armure",
      "RM",
      "Vitesse d'attaque",
      "Force adaptative",
      'b',
      "La RM réduit les dégâts magiques (AP)."
    ),
    createQuestion(
      "Que prendre si l'ennemi est mixte AD/AP ?",
      "Armure",
      "RM",
      "PV",
      "Vitesse d'attaque",
      'c',
      "Les PV fonctionnent contre les deux types de dégâts."
    ),
    createQuestion(
      "Un ADC prend généralement quoi en Offense ?",
      "Ability Haste",
      "Vitesse d'attaque",
      "RM",
      "Armure",
      'b',
      "Les ADC bénéficient de la vitesse d'attaque pour leur DPS."
    ),
    createQuestion(
      "Un mage prend généralement quoi en Offense ?",
      "Vitesse d'attaque",
      "Force adaptative (AP)",
      "Armure",
      "PV",
      'b',
      "Les mages veulent de l'AP pour leurs sorts, donc Force adaptative."
    ),
    createQuestion(
      "Combien d'Armure donne le fragment défensif ?",
      "+3",
      "+6",
      "+10",
      "+15",
      'b',
      "Le fragment d'Armure donne +6 Armure."
    ),
    createQuestion(
      "Combien de PV donne le fragment de PV ?",
      "+50",
      "+65",
      "+80",
      "+100",
      'b',
      "Le fragment de PV donne +65 PV."
    ),
    createQuestion(
      "L'Ability Haste en fragment est utile pour qui ?",
      "Les ADC",
      "Les champions qui spamment leurs sorts",
      "Les tanks",
      "Personne",
      'b',
      "L'AH est bon pour les champions qui veulent utiliser leurs sorts souvent."
    ),
  ]
);
