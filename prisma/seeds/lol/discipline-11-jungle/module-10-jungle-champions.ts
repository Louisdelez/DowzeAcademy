import { createModule, createQuestion } from '../utils';

export const module10JungleChampions = createModule(
  'Champions de jungle',
  'jungle-champions',
  'Types de junglers et exemples',
  10,
  // Theory Content
  `## Types de Champions Jungle

Les champions de jungle se divisent en plusieurs **catégories** selon leur style de jeu.

## Tanks de jungle

Caractéristiques :
- **Résistants** et initiateurs
- Bon **CC** et engage
- Clear correct, scaling défensif
- Exemples : **Zac**, **Sejuani**, **Amumu**, **Rammus**

## Bruisers de jungle

Caractéristiques :
- Mix de **dégâts et résistance**
- Bons en **dueling** et teamfight
- Polyvalents
- Exemples : **Vi**, **Jarvan IV**, **Xin Zhao**, **Viego**

## Assassins de jungle

Caractéristiques :
- **Burst** élevé
- Ciblent les **carries** ennemis
- Fragilité mais mobilité
- Exemples : **Kha'Zix**, **Rengar**, **Evelynn**, **Lee Sin**

## Mages de jungle

Caractéristiques :
- Dégâts **AP** de la jungle
- Souvent du **CC** ou poke
- Clear rapide avec les sorts
- Exemples : **Fiddlesticks**, **Karthus**, **Lillia**, **Taliyah**

## Junglers atypiques

Champions spéciaux :
- **Ivern** : Support de jungle, ne tue pas les camps
- **Shaco** : Trickster avec des pièges
- **Nidalee** : Assassin poke, difficile

## Choisir son jungler

Facteurs de choix :
- Style de jeu **préféré**
- Ce dont l'équipe a **besoin**
- Matchup contre le **jungler ennemi**
- **Simplicité** pour débuter`,

  // Practice Instructions
  `## Objectif

Comprendre les différents types de champions jungle.

## Étapes

1. Identifiez les catégories de junglers
2. Essayez un jungler de chaque type
3. Notez les différences de clear et de gank
4. Trouvez le style qui vous convient
5. Approfondissez un ou deux champions

## Critère de réussite

Vous pouvez identifier le type de jungler d'un champion et connaître ses forces.`,

  // Questions
  [
    createQuestion(
      "Zac est quel type de jungler ?",
      "Assassin",
      "Tank",
      "Mage",
      "Bruiser",
      'b',
      "Zac est un tank de jungle avec beaucoup de CC."
    ),
    createQuestion(
      "Kha'Zix est quel type de jungler ?",
      "Tank",
      "Assassin",
      "Mage",
      "Support",
      'b',
      "Kha'Zix est un assassin avec beaucoup de burst."
    ),
    createQuestion(
      "Les tanks de jungle sont forts pour ?",
      "Le burst",
      "L'engage et le CC",
      "Le split push",
      "Le poke",
      'b',
      "Les tanks jungle engagent et apportent du CC."
    ),
    createQuestion(
      "Fiddlesticks est quel type de jungler ?",
      "Tank",
      "Mage",
      "Bruiser",
      "Assassin",
      'b',
      "Fiddlesticks est un mage AP de jungle."
    ),
    createQuestion(
      "Vi est quel type de jungler ?",
      "Tank pur",
      "Bruiser",
      "Assassin",
      "Mage",
      'b',
      "Vi est un bruiser avec un bon mix de dégâts et résistance."
    ),
    createQuestion(
      "Ivern est spécial car ?",
      "Il est très fort",
      "Il ne tue pas les camps, il les libère",
      "Il fait beaucoup de dégâts",
      "Il est un assassin",
      'b',
      "Ivern est unique : il ne tue pas les monstres, il les libère."
    ),
    createQuestion(
      "Pour débuter la jungle, quel type est recommandé ?",
      "Assassin difficile",
      "Champion simple comme un bruiser",
      "Mage complexe",
      "Ivern",
      'b',
      "Les champions simples sont mieux pour apprendre."
    ),
    createQuestion(
      "Lee Sin est considéré comme ?",
      "Facile",
      "Difficile avec beaucoup de skill expression",
      "Un tank",
      "Un mage",
      'b',
      "Lee Sin est difficile mais très rewarding."
    ),
    createQuestion(
      "Les assassins jungle ciblent qui ?",
      "Les tanks",
      "Les carries ennemis",
      "Les sbires",
      "Personne",
      'b',
      "Les assassins veulent burst les carries squishies."
    ),
    createQuestion(
      "Qu'est-ce qui influence le choix de jungler ?",
      "Rien",
      "Style, besoins de l'équipe, matchup",
      "Seulement le skin",
      "La météo",
      'b',
      "Plusieurs facteurs influencent le choix optimal."
    ),
  ]
);
