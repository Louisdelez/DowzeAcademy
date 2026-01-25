import { createModule, createQuestion } from '../utils';

export const module15AntiHeal = createModule(
  'Objets anti-soins',
  'anti-heal-items',
  'Blessures graves contre le sustain ennemi',
  15,
  // Theory Content
  `## Les Blessures Graves

Les **Blessures Graves** (Grievous Wounds) réduisent l'efficacité des **soins** ennemis. Essentiels contre les champions avec beaucoup de sustain.

## Fonctionnement

Les Blessures Graves :
- Réduisent les soins de **40%** (items de base)
- Réduisent de **60%** (items améliorés, sous condition)
- Durent quelques secondes après application
- S'appliquent via attaques ou sorts

## Objets anti-heal AD

Pour les champions AD :
- **Executioner's Calling** → **Mortal Reminder** : Pour ADC
- **Chempunk Chainsword** : Pour bruisers AD

## Objets anti-heal AP

Pour les champions AP :
- **Oblivion Orb** → **Morellonomicon** : Pour mages

## Objets anti-heal Tank

Pour les tanks :
- **Bramble Vest** → **Thornmail** : Applique Blessures sur les attaquants

## Contre qui acheter anti-heal ?

Cibles prioritaires :
- **Soraka, Yuumi** : Healers
- **Aatrox, Mundo, Warwick** : Champions à gros sustain
- **Tout ADC avec lifesteal**
- Équipes avec beaucoup de soins

## Récapitulatif

- Blessures Graves = réduit les soins de 40-60%
- AD = Mortal Reminder ou Chempunk
- AP = Morellonomicon
- Tank = Thornmail
- Acheter contre les compositions à gros sustain`,

  // Practice Instructions
  `## Objectif

Savoir quand acheter des objets anti-soins.

## Étapes

1. Jouez contre un champion avec beaucoup de sustain (Dr. Mundo)
2. Observez combien il se soigne sans anti-heal
3. Achetez Executioner's Calling (AD) ou Oblivion Orb (AP)
4. Observez la réduction de ses soins
5. Complétez l'objet anti-heal si nécessaire

## Critère de réussite

Vous identifiez quand l'anti-heal est nécessaire et quel objet acheter.`,

  // Questions
  [
    createQuestion(
      "Que font les Blessures Graves ?",
      "Augmentent les dégâts",
      "Réduisent les soins reçus par l'ennemi",
      "Donnent de l'armure",
      "Augmentent la vitesse",
      'b',
      "Les Blessures Graves réduisent l'efficacité des soins ennemis."
    ),
    createQuestion(
      "De combien les Blessures Graves réduisent les soins ?",
      "20-30%",
      "40-60%",
      "80-100%",
      "10-20%",
      'b',
      "40% de base, 60% avec les items améliorés sous condition."
    ),
    createQuestion(
      "Quel objet anti-heal pour un ADC ?",
      "Thornmail",
      "Mortal Reminder",
      "Morellonomicon",
      "Bramble Vest",
      'b',
      "Mortal Reminder est l'objet anti-heal pour les ADC."
    ),
    createQuestion(
      "Quel objet anti-heal pour un mage ?",
      "Mortal Reminder",
      "Morellonomicon",
      "Thornmail",
      "Chempunk",
      'b',
      "Morellonomicon est l'objet anti-heal pour les mages AP."
    ),
    createQuestion(
      "Quel objet anti-heal pour un tank ?",
      "Mortal Reminder",
      "Thornmail",
      "Morellonomicon",
      "Chempunk",
      'b',
      "Thornmail applique Blessures Graves à ceux qui vous attaquent."
    ),
    createQuestion(
      "Contre qui l'anti-heal est-il très utile ?",
      "Les assassins",
      "Les champions avec beaucoup de sustain (Soraka, Aatrox)",
      "Les tanks sans heal",
      "Les tourelles",
      'b',
      "L'anti-heal contre les healers et champions à gros sustain."
    ),
    createQuestion(
      "Executioner's Calling évolue en quoi ?",
      "Thornmail",
      "Mortal Reminder",
      "Morellonomicon",
      "Chempunk",
      'b',
      "Executioner's Calling se construit en Mortal Reminder."
    ),
    createQuestion(
      "Oblivion Orb évolue en quoi ?",
      "Thornmail",
      "Mortal Reminder",
      "Morellonomicon",
      "Void Staff",
      'c',
      "Oblivion Orb se construit en Morellonomicon."
    ),
    createQuestion(
      "Faut-il toujours acheter de l'anti-heal ?",
      "Oui, c'est obligatoire",
      "Non, seulement contre les compositions à sustain",
      "Jamais",
      "Seulement en ranked",
      'b',
      "L'anti-heal est situationnel, contre les équipes avec beaucoup de soins."
    ),
    createQuestion(
      "Ignite applique-t-il aussi des Blessures Graves ?",
      "Non",
      "Oui, 50% de réduction des soins",
      "Seulement sur les sbires",
      "Seulement les tanks",
      'b',
      "Ignite applique aussi des Blessures Graves en plus de ses dégâts."
    ),
  ]
);
