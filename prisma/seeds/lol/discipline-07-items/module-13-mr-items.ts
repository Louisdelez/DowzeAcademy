import { createModule, createQuestion } from '../utils';

export const module13MRItems = createModule(
  'Objets défensifs RM/PV',
  'mr-hp-items',
  'Anti-AP et résistance magique',
  13,
  // Theory Content
  `## Les objets de Résistance Magique

Les objets de **RM** (Résistance Magique) réduisent les dégâts magiques (AP). Ils sont essentiels contre les mages et assassins AP.

## Stats défensives

Les statistiques clés :
- **RM** : Réduit les dégâts magiques
- **PV** : Plus de vie combinée à la RM
- Certains objets offrent aussi du sustain

## Objets de RM populaires

Les objets anti-AP :
- **Mercury's Treads (Mercure)** : Bottes + RM + Tenacity
- **Spirit Visage** : RM + PV + soins améliorés
- **Force of Nature** : RM + vitesse + réduction dégâts magiques
- **Abyssal Mask** : RM + augmente les dégâts magiques alliés
- **Maw of Malmortius** : RM + AD + bouclier anti-magie

## Quand construire de la RM ?

Situations où la RM est prioritaire :
- Contre **mage** fed
- Contre **assassin AP** (Katarina, Akali)
- Contre équipe **full AP**
- Quand vous prenez beaucoup de dégâts magiques

## Maw of Malmortius

L'objet hybride pour les AD :
- Donne AD + RM
- Bouclier qui se déclenche contre les dégâts magiques
- Parfait pour ADC/assassins contre burst AP

## Récapitulatif

- RM = réduit les dégâts magiques
- Mercure = Tenacity + RM, contre CC et AP
- Spirit Visage = sustain, Force of Nature = mobilité
- Maw = pour les champions AD contre AP
- Construire selon la menace AP ennemie`,

  // Practice Instructions
  `## Objectif

Savoir quand et quels objets de RM construire.

## Étapes

1. Jouez contre un mage fed
2. Achetez les Bottes de Mercure pour la RM et Tenacity
3. Achetez Spirit Visage si vous avez du sustain
4. Testez Force of Nature contre du poke AP constant
5. En tant qu'ADC, essayez Maw contre un assassin AP

## Critère de réussite

Vous savez quel objet de RM choisir selon la menace AP.`,

  // Questions
  [
    createQuestion(
      "La RM réduit quel type de dégâts ?",
      "Physiques",
      "Magiques (AP)",
      "Vrais",
      "De zone",
      'b',
      "La RM ne réduit que les dégâts magiques."
    ),
    createQuestion(
      "Les Bottes de Mercure donnent quoi en plus de la RM ?",
      "De l'armure",
      "De la Tenacity (réduit durée CC)",
      "Du lifesteal",
      "De l'AP",
      'b',
      "Mercure donne RM + Tenacity, très utile contre CC."
    ),
    createQuestion(
      "Spirit Visage est bon pour quels champions ?",
      "Ceux sans sustain",
      "Ceux avec du sustain (soins améliorés)",
      "Les ADC",
      "Les mages",
      'b',
      "Spirit Visage amplifie tous les soins reçus."
    ),
    createQuestion(
      "Force of Nature donne quoi en plus de la RM ?",
      "Du mana",
      "De la vitesse + réduction cumulative dégâts magiques",
      "Du lifesteal",
      "De l'AP",
      'b',
      "Force of Nature réduit les dégâts magiques de plus en plus."
    ),
    createQuestion(
      "Maw of Malmortius est pour quels champions ?",
      "Les tanks",
      "Les champions AD contre les menaces AP",
      "Les mages",
      "Les supports",
      'b',
      "Maw donne AD + RM + bouclier, parfait pour ADC/assassins AD."
    ),
    createQuestion(
      "Contre un mage burst, que faire comme ADC ?",
      "Ignorer",
      "Construire Maw of Malmortius",
      "Stacker de l'armure",
      "Acheter plus de dégâts",
      'b',
      "Maw protège l'ADC du burst magique avec son bouclier."
    ),
    createQuestion(
      "Abyssal Mask fait quoi de spécial ?",
      "Soigne",
      "Augmente les dégâts magiques subis par les ennemis proches",
      "Donne de l'invisibilité",
      "Réduit les cooldowns",
      'b',
      "Abyssal Mask amplifie les dégâts magiques de votre équipe."
    ),
    createQuestion(
      "Contre une équipe full AP, que faire ?",
      "Stacker de l'armure",
      "Stacker de la RM",
      "Ignorer la défense",
      "Construire du critique",
      'b',
      "Contre full AP, la RM est extrêmement efficace."
    ),
    createQuestion(
      "La Tenacity des Mercure est utile contre quoi ?",
      "Les dégâts",
      "Les CC (stuns, slows, etc.)",
      "Les tourelles",
      "Les monstres",
      'b',
      "La Tenacity réduit la durée des effets de contrôle."
    ),
    createQuestion(
      "Peut-on être full AP avec de la RM ?",
      "Non, la RM est réservée aux tanks",
      "Oui, des objets comme Banshee's Veil donnent AP + RM",
      "Non, c'est impossible",
      "Seulement en mode ARAM",
      'b',
      "Banshee's Veil donne AP + RM pour les mages."
    ),
  ]
);
