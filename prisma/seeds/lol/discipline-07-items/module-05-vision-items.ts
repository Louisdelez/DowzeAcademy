import { createModule, createQuestion } from '../utils';

export const module05VisionItems = createModule(
  'Balises de vision',
  'vision-items',
  'Pink wards, contrôle de vision',
  5,
  // Theory Content
  `## L'importance de la vision

La **vision** est cruciale dans LoL. Les balises (wards) révèlent des zones de la carte pour voir les mouvements ennemis.

## Types de wards

**Ward de contrôle (Pink Ward)** :
- Coût : **75 or**
- **Visible** par l'ennemi (peut être détruite)
- **Permanente** jusqu'à destruction
- Révèle les wards invisibles
- Limite : 1 sur la carte par joueur

**Stealth Ward (du trinket)** :
- Gratuite (trinket jaune)
- **Invisible** aux ennemis
- Durée **limitée** (90-120 secondes)
- Se recharge avec le temps

## Le trinket (accessoire)

Tout le monde a un **trinket** gratuit :
- **Trinket jaune** : Place des wards invisibles
- **Trinket rouge** (Oracle) : Révèle les wards
- **Trinket bleu** (Farsight) : Ward longue distance

## Où warder ?

Emplacements stratégiques :
- **Rivière** : Contrôle des objectifs
- **Jungle ennemie** : Tracker le jungler
- **Buissons** : Éviter les embuscades
- **Objectifs** : Dragon, Baron

## Récapitulatif

- **Pink ward** : 75g, visible, permanente, révèle
- **Stealth ward** : Gratuite, invisible, temporaire
- Trinkets gratuits pour tous les joueurs
- Warder = information = avantage
- Tout le monde doit participer à la vision`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser les wards efficacement.

## Étapes

1. Achetez une Ward de contrôle (75 or) à votre premier back
2. Placez-la dans un buisson de la rivière
3. Utilisez votre trinket jaune pour poser des stealth wards
4. Observez comment la vision révèle les mouvements
5. Essayez le trinket rouge pour détruire les wards ennemies

## Critère de réussite

Vous comprenez les différents types de wards et savez où les placer.`,

  // Questions
  [
    createQuestion(
      "Combien coûte une Ward de contrôle ?",
      "50 or",
      "75 or",
      "100 or",
      "150 or",
      'b',
      "Une pink ward coûte 75 or."
    ),
    createQuestion(
      "Quelle est la différence entre Pink et Stealth ward ?",
      "Aucune",
      "Pink est visible et permanente, Stealth invisible et temporaire",
      "Pink est gratuite",
      "Stealth révèle les autres wards",
      'b',
      "La Pink est visible mais permanente et révèle, la Stealth est invisible mais temporaire."
    ),
    createQuestion(
      "Combien de Pink wards peut-on avoir sur la carte ?",
      "0",
      "1",
      "2",
      "Illimité",
      'b',
      "Chaque joueur ne peut avoir qu'une seule Pink ward active."
    ),
    createQuestion(
      "Le trinket jaune fait quoi ?",
      "Révèle les wards",
      "Place des wards invisibles gratuites",
      "Donne de l'or",
      "Soigne",
      'b',
      "Le trinket jaune permet de poser des stealth wards gratuitement."
    ),
    createQuestion(
      "Le trinket rouge (Oracle) fait quoi ?",
      "Place des wards",
      "Révèle les wards ennemies pour les détruire",
      "Soigne",
      "Augmente les dégâts",
      'b',
      "Oracle révèle les wards et unités invisibles dans une zone."
    ),
    createQuestion(
      "Où est-il important de warder ?",
      "Uniquement la base",
      "Rivière, jungle ennemie, objectifs",
      "Nulle part",
      "Seulement les buissons de lane",
      'b',
      "Les zones stratégiques incluent rivière, jungle et objectifs."
    ),
    createQuestion(
      "Tout le monde peut-il acheter des Pink wards ?",
      "Non, seulement les supports",
      "Oui, tout le monde devrait en acheter",
      "Non, c'est trop cher",
      "Seulement les junglers",
      'b',
      "Tous les joueurs devraient contribuer à la vision de l'équipe."
    ),
    createQuestion(
      "Les Stealth wards durent combien de temps ?",
      "30 secondes",
      "90-120 secondes selon le niveau",
      "5 minutes",
      "Permanentes",
      'b',
      "Les Stealth wards durent entre 90 et 120 secondes."
    ),
    createQuestion(
      "Comment détruire une ward ennemie ?",
      "Impossible",
      "L'attaquer (visible) ou utiliser Oracle (invisible)",
      "Utiliser Smite",
      "Avec un sort",
      'b',
      "Les Pink sont visibles, les Stealth doivent être révélées d'abord."
    ),
    createQuestion(
      "Pourquoi la vision est-elle si importante ?",
      "Pour gagner de l'or",
      "Pour voir les mouvements ennemis et éviter les surprises",
      "Pour faire plus de dégâts",
      "C'est juste esthétique",
      'b',
      "La vision permet d'anticiper les ganks et mouvements ennemis."
    ),
  ]
);
