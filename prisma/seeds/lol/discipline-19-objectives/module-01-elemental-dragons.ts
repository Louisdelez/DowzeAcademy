import { createModule, createQuestion } from '../utils';

export const module01ElementalDragons = createModule(
  'Dragons élémentaires',
  'elemental-dragons',
  'Comprendre les 5 types de dragons élémentaires et leurs bonus uniques',
  1,
  // Theory Content (5+ slides)
  `## Les dragons élémentaires de League of Legends

Les **dragons élémentaires** sont des monstres neutres majeurs qui apparaissent dans la fosse du dragon, au sud de la carte. Tuer un dragon confère un bonus permanent à toute votre équipe. Il existe 5 types de dragons, chacun avec un effet distinct.

## Le Dragon Infernal (Infernal Drake)

Le **Dragon Infernal** accorde un bonus de **dégâts** permanents. C'est l'un des dragons les plus recherchés car il augmente directement votre capacité à éliminer les ennemis. Chaque stack d'Infernal augmente vos dégâts d'attaque et de sorts.

**Effet** : +4% de dégâts d'attaque et de puissance

## Le Dragon de Montagne (Mountain Drake)

Le **Dragon de Montagne** offre un bonus d'**armure et de résistance magique**. Ce dragon rend votre équipe plus résistante, ce qui est particulièrement utile lors des combats prolongés et des sièges.

**Effet** : +6% d'armure et de résistance magique

## Le Dragon Océanique (Ocean Drake)

Le **Dragon Océanique** accorde une **régénération** de vie améliorée. Ce buff aide votre équipe à rester en bonne santé sur la carte, réduisant le besoin de recall et permettant un contrôle de carte plus agressif.

**Effet** : Régénération de 2% des PV manquants toutes les 5 secondes

## Le Dragon Nuage (Cloud Drake)

Le **Dragon Nuage** confère un bonus de **vitesse de déplacement**. Cette mobilité accrue aide pour les rotations, les engages et les désengages, rendant votre équipe plus agile sur toute la carte.

**Effet** : +3.5% de vitesse de déplacement hors combat

## Le Dragon Chemtech (Chemtech Drake)

Le **Dragon Chemtech** offre un bonus de **tenacité et de boucliers/soins**. Ce dragon aide votre équipe à résister aux contrôles de foule et améliore les capacités défensives.

**Effet** : +5% de tenacité et +5% de puissance de bouclier/soin

## Apparition et rotation des dragons

Le premier dragon apparaît à **5 minutes** de jeu. Après qu'un dragon est tué, le prochain réapparaît après **5 minutes**. Le type de dragon qui apparaît est aléatoire parmi les 5 éléments jusqu'au 3ème dragon, où la faille se transforme selon l'élément dominant.`,

  // Practice Instructions
  `## Objectif

Identifier visuellement les différents types de dragons élémentaires et comprendre leurs bonus respectifs.

## Étapes

1. Lancez une partie d'entraînement (Practice Tool)
2. Attendez l'apparition du premier dragon à 5 minutes ou utilisez la commande pour faire apparaître un dragon
3. Identifiez le type de dragon par son apparence visuelle
4. Notez le buff obtenu après avoir tué le dragon
5. Répétez pour observer au moins 3 types de dragons différents
6. Observez comment la faille se transforme après le 3ème dragon

## Critère de réussite

Vous pouvez identifier chaque type de dragon élémentaire à vue et connaissez les bonus associés à chacun.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel bonus accorde le Dragon Infernal ?",
      "Régénération de vie",
      "Armure et résistance magique",
      "Dégâts d'attaque et puissance",
      "Vitesse de déplacement",
      'c',
      "Le Dragon Infernal augmente les dégâts d'attaque et la puissance, rendant votre équipe plus meurtrière."
    ),
    createQuestion(
      "À quelle minute apparaît le premier dragon de la partie ?",
      "3 minutes",
      "5 minutes",
      "8 minutes",
      "10 minutes",
      'b',
      "Le premier dragon élémentaire spawn à 5 minutes de jeu."
    ),
    createQuestion(
      "Quel dragon offre un bonus de vitesse de déplacement ?",
      "Dragon Océanique",
      "Dragon de Montagne",
      "Dragon Nuage",
      "Dragon Chemtech",
      'c',
      "Le Dragon Nuage (Cloud Drake) confère un bonus de vitesse de déplacement hors combat."
    ),
    createQuestion(
      "Combien de types de dragons élémentaires existe-t-il ?",
      "3",
      "4",
      "5",
      "6",
      'c',
      "Il existe 5 types de dragons : Infernal, Montagne, Océanique, Nuage et Chemtech."
    ),
    createQuestion(
      "Quel effet a le Dragon Océanique ?",
      "Bonus de dégâts",
      "Régénération de vie",
      "Bonus d'armure",
      "Réduction des temps de recharge",
      'b',
      "Le Dragon Océanique accorde une régénération de vie basée sur les PV manquants."
    ),
    createQuestion(
      "Après combien de temps réapparaît un nouveau dragon ?",
      "3 minutes après la mort du précédent",
      "5 minutes après la mort du précédent",
      "6 minutes après la mort du précédent",
      "8 minutes après la mort du précédent",
      'b',
      "Un nouveau dragon apparaît 5 minutes après que le précédent a été tué."
    ),
    createQuestion(
      "Quel dragon est le plus utile pour une équipe qui veut faire des rotations rapides ?",
      "Dragon Infernal",
      "Dragon de Montagne",
      "Dragon Nuage",
      "Dragon Océanique",
      'c',
      "Le Dragon Nuage offre de la vitesse de déplacement, idéal pour les rotations rapides."
    ),
    createQuestion(
      "Que confère le Dragon de Montagne ?",
      "Dégâts bonus",
      "Armure et résistance magique",
      "Vol de vie",
      "Pénétration d'armure",
      'b',
      "Le Dragon de Montagne rend votre équipe plus tanky avec de l'armure et de la résistance magique."
    ),
    createQuestion(
      "Où apparaissent les dragons élémentaires sur la carte ?",
      "Dans la fosse du Baron",
      "Au milieu de la rivière",
      "Dans la fosse du dragon au sud",
      "Dans la jungle ennemie",
      'c',
      "Les dragons apparaissent dans la fosse du dragon, située dans la partie sud de la rivière."
    ),
    createQuestion(
      "Quel bonus offre le Dragon Chemtech ?",
      "Dégâts critiques augmentés",
      "Tenacité et puissance de bouclier/soin",
      "Régénération de mana",
      "Réduction des dégâts subis",
      'b',
      "Le Dragon Chemtech accorde de la tenacité et améliore les boucliers et soins."
    ),
  ]
);
