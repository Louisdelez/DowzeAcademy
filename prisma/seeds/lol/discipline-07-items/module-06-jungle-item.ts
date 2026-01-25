import { createModule, createQuestion } from '../utils';

export const module06JungleItem = createModule(
  'Objet de jungle (compagnon)',
  'jungle-item',
  'Oeuf de familier et évolution avec Smite',
  6,
  // Theory Content
  `## L'objet de jungle

Le **jungler** doit acheter un objet de jungle spécial au début. Cet objet lui permet de farm efficacement et évolue en **compagnon**.

## Fonctionnement

L'objet de jungle :
- Nécessite **Smite** pour l'acheter
- Commence comme un **oeuf** de familier
- Évolue en tuant des monstres de jungle
- Le compagnon aide au farm et aux combats

## Les différents compagnons

Il existe 3 compagnons :
- **Mosstomper** (vert) : Bouclier, plus tanky
- **Scorchclaw** (rouge) : Dégâts de brûlure, offensif
- **Gustwalker** (bleu) : Vitesse et mobilité

## Évolution du compagnon

Le familier évolue en farmant :
- **Niveau 1** : Petit aide au clear
- **Niveau 2** : Effets améliorés
- **Niveau 3** : Compagnon complet, effet maximisé

## Smite amélioré

Une fois l'objet évolué :
- Smite peut cibler les **champions**
- Effet dépend du compagnon choisi
- Important pour les duels et ganks

## Récapitulatif

- Objet de jungle obligatoire avec Smite
- Commence comme oeuf, évolue en compagnon
- 3 choix : tank, dégâts ou mobilité
- Le compagnon aide au clear et combat
- Smite améliré cible les champions`,

  // Practice Instructions
  `## Objectif

Comprendre l'objet de jungle et son évolution.

## Étapes

1. Lancez une partie avec Smite
2. Achetez l'objet de jungle au départ
3. Choisissez un compagnon (essayez les 3 types)
4. Farmez la jungle et observez l'évolution
5. Au niveau max, utilisez Smite sur un champion

## Critère de réussite

Vous comprenez l'évolution du compagnon et les différences entre les 3 types.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qui est nécessaire pour acheter l'objet de jungle ?",
      "Être niveau 6",
      "Avoir Smite",
      "Être support",
      "500 or",
      'b',
      "L'objet de jungle nécessite Smite pour être acheté."
    ),
    createQuestion(
      "Comment évolue le compagnon de jungle ?",
      "Avec le temps",
      "En tuant des monstres de jungle",
      "En achetant des améliorations",
      "Automatiquement",
      'b',
      "Le compagnon évolue en farmant les camps de jungle."
    ),
    createQuestion(
      "Combien de types de compagnons existe-t-il ?",
      "2",
      "3",
      "4",
      "5",
      'b',
      "Il y a 3 compagnons : Mosstomper, Scorchclaw, Gustwalker."
    ),
    createQuestion(
      "Mosstomper (compagnon vert) est orienté vers quoi ?",
      "Les dégâts",
      "La défense (bouclier)",
      "La mobilité",
      "Le sustain",
      'b',
      "Mosstomper donne un bouclier, plus orienté tank."
    ),
    createQuestion(
      "Scorchclaw (compagnon rouge) est orienté vers quoi ?",
      "La défense",
      "Les dégâts (brûlure)",
      "La vision",
      "Les soins",
      'b',
      "Scorchclaw ajoute des dégâts de brûlure, offensif."
    ),
    createQuestion(
      "Gustwalker (compagnon bleu) est orienté vers quoi ?",
      "Les dégâts",
      "La vitesse et mobilité",
      "La défense",
      "Le mana",
      'b',
      "Gustwalker donne de la vitesse de déplacement."
    ),
    createQuestion(
      "Une fois l'objet évolué, Smite peut cibler quoi ?",
      "Seulement les monstres",
      "Les monstres ET les champions",
      "Seulement les champions",
      "Les tourelles",
      'b',
      "Smite améliioré peut être utilisé sur les champions ennemis."
    ),
    createQuestion(
      "Combien de niveaux d'évolution a le compagnon ?",
      "2 niveaux",
      "3 niveaux",
      "4 niveaux",
      "5 niveaux",
      'b',
      "Le compagnon a 3 niveaux d'évolution."
    ),
    createQuestion(
      "Peut-on changer de compagnon en cours de partie ?",
      "Oui, à tout moment",
      "Non, le choix est permanent",
      "Seulement en vendant",
      "Seulement avant 10 minutes",
      'b',
      "Le type de compagnon est choisi au départ et ne change pas."
    ),
    createQuestion(
      "Le compagnon aide-t-il au combat ?",
      "Non, c'est juste cosmétique",
      "Oui, il attaque les monstres et ennemis",
      "Seulement contre les monstres",
      "Seulement au Baron",
      'b',
      "Le compagnon participe au clear et aux combats."
    ),
  ]
);
