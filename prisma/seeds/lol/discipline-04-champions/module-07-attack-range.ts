import { createModule, createQuestion } from '../utils';

export const module07AttackRange = createModule(
  "Portée d'attaque",
  'attack-range',
  'Corps-à-corps vs à distance',
  7,
  // Theory Content
  `## Portée d'attaque

Chaque champion a une **portée d'attaque** définie qui détermine à quelle distance il peut auto-attaquer. On distingue deux catégories.

## Champions Melee (corps-à-corps)

Les champions **melee** attaquent au contact :
- Portée d'environ **125-175 unités**
- Doivent se rapprocher pour attaquer
- Généralement plus **résistants**
- Exemples : Garen, Darius, Yasuo

## Champions Ranged (à distance)

Les champions **ranged** attaquent de loin :
- Portée de **450-650+ unités**
- Peuvent harceler de loin (poke)
- Généralement plus **fragiles**
- Exemples : Caitlyn, Lux, Jinx

## Avantages et inconvénients

**Melee** :
- ✓ Plus résistants
- ✓ Souvent plus de dégâts en burst
- ✗ Doivent se mettre en danger pour attaquer

**Ranged** :
- ✓ Peuvent attaquer en sécurité
- ✓ Excellent pour le poke
- ✗ Plus fragiles
- ✗ Vulnérables si l'ennemi se rapproche

## Interactions en lane

La portée affecte le laning :
- Un ranged peut **harceler** un melee gratuitement
- Le melee doit utiliser ses **sorts** pour trade
- Le melee peut **tout-in** s'il arrive au contact

## Récapitulatif

- **Melee** = corps-à-corps (125-175 unités)
- **Ranged** = à distance (450-650+ unités)
- Melee = résistant mais doit approcher
- Ranged = fragile mais attaque de loin
- La portée influence le style de lane`,

  // Practice Instructions
  `## Objectif

Comprendre la différence entre champions melee et ranged.

## Étapes

1. Lancez une partie d'entraînement avec un champion melee (Garen)
2. Essayez d'auto-attaquer un mannequin et notez la portée
3. Changez pour un champion ranged (Ashe)
4. Comparez la distance d'attaque
5. Jouez une lane contre l'IA et observez comment la portée influence les trades

## Critère de réussite

Vous comprenez les avantages et inconvénients des champions melee vs ranged.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un champion melee ?",
      "Un champion qui attaque à distance",
      "Un champion qui attaque au corps-à-corps",
      "Un champion qui n'attaque pas",
      "Un champion de jungle",
      'b',
      "Melee = corps-à-corps, le champion doit être proche pour attaquer."
    ),
    createQuestion(
      "Quelle est la portée typique d'un champion melee ?",
      "500 unités",
      "125-175 unités",
      "650 unités",
      "1000 unités",
      'b',
      "Les champions melee ont une portée d'environ 125-175 unités."
    ),
    createQuestion(
      "Qu'est-ce qu'un champion ranged ?",
      "Un champion qui attaque au corps-à-corps",
      "Un champion qui attaque à distance",
      "Un champion tank",
      "Un champion support",
      'b',
      "Ranged = à distance, le champion peut attaquer de loin."
    ),
    createQuestion(
      "Quel est l'avantage principal des ranged en lane ?",
      "Plus de dégâts",
      "Peuvent harceler sans se mettre en danger",
      "Plus de PV",
      "Sorts plus puissants",
      'b',
      "Les ranged peuvent auto-attaquer les melee sans subir de représailles."
    ),
    createQuestion(
      "Quel est l'avantage principal des melee ?",
      "Meilleure portée",
      "Généralement plus résistants",
      "Plus de mana",
      "Meilleurs sorts",
      'b',
      "Les champions melee ont souvent plus de PV et résistances."
    ),
    createQuestion(
      "Comment un melee peut-il trade contre un ranged ?",
      "En restant à distance",
      "En utilisant ses sorts ou en all-in",
      "En farmant uniquement",
      "Impossible de trade",
      'b',
      "Les melee utilisent leurs sorts pour gap-close et engager."
    ),
    createQuestion(
      "Caitlyn est un champion de quel type ?",
      "Melee",
      "Ranged",
      "Les deux",
      "Ni l'un ni l'autre",
      'b',
      "Caitlyn est une ADC ranged avec une très longue portée."
    ),
    createQuestion(
      "Garen est un champion de quel type ?",
      "Ranged",
      "Melee",
      "Les deux",
      "Ni l'un ni l'autre",
      'b',
      "Garen est un bruiser melee qui combat au corps-à-corps."
    ),
    createQuestion(
      "Le 'poke' est plus facile pour quel type de champion ?",
      "Melee",
      "Ranged",
      "Les deux également",
      "Aucun",
      'b',
      "Les ranged excellent au poke car ils peuvent attaquer de loin."
    ),
    createQuestion(
      "Pourquoi les ADC sont-ils ranged ?",
      "C'est une règle obligatoire",
      "Pour dealer des dégâts en sécurité, compensant leur fragilité",
      "Pour faire joli",
      "Par hasard",
      'b',
      "La portée permet aux ADC fragiles de dealer sans être au contact."
    ),
  ]
);
