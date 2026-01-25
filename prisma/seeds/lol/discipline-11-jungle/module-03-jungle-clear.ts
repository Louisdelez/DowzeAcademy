import { createModule, createQuestion } from '../utils';

export const module03JungleClear = createModule(
  'Clear de jungle',
  'jungle-clear',
  'Routes et chemins de farm optimaux',
  3,
  // Theory Content
  `## Le Clear de Jungle

Le **clear** est l'action de tuer les camps de jungle efficacement. Des routes optimisées vous donnent un avantage.

## Pourquoi la route importe

Impact de votre clear :
- Timing de vos **ganks**
- **Or et XP** accumulés
- Position sur la carte
- Possibilité de **contest** les objectifs

## Routes de base

Deux options principales :
- **Full clear** : Tous les camps d'un côté à l'autre
- **3 camps → gank** : Clear rapide puis action

## Full clear standard

Route complète :
1. **Buff** (rouge ou bleu selon le champion)
2. Camp adjacent (Krugs ou Gromp)
3. Traverser vers l'autre côté
4. Finir les camps restants
5. Gank ou continuer à farm

## 3 camps into gank

Route agressive :
1. **Buff** de départ
2. **2 camps** adjacents
3. **Gank** la lane proche
4. Continuer à farm après

## Facteurs de choix

Ce qui influence la route :
- Votre **champion** (certains clearent vite, d'autres non)
- Les **matchups** des lanes
- Où vous voulez être à **3:15** (Scuttle)
- Position du **jungler ennemi**

## Conseils de clear

Optimisations :
- Utilisez les **potions** pendant le clear
- **Kite** les camps pour prendre moins de dégâts
- Smite les camps avec le plus de **PV**
- Gardez Smite pour **secure** les objectifs importants`,

  // Practice Instructions
  `## Objectif

Apprendre une route de jungle efficace.

## Étapes

1. Choisissez un champion de jungle commun
2. Commencez par un buff (rouge ou bleu)
3. Enchaînez avec les camps adjacents
4. Traversez vers l'autre côté
5. Chronométrez votre clear et essayez de l'optimiser

## Critère de réussite

Vous pouvez faire un full clear en moins de 3:30 avec un champion standard.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le clear de jungle ?",
      "Ganker",
      "Tuer les camps de jungle efficacement",
      "Prendre des objectifs",
      "Warder",
      'b',
      "Le clear est l'action de farm les camps de jungle."
    ),
    createQuestion(
      "Une route full clear consiste à ?",
      "Tuer un camp",
      "Faire tous les camps d'un côté à l'autre",
      "Seulement ganker",
      "Attendre en base",
      'b',
      "Full clear = tous les camps du côté à l'autre."
    ),
    createQuestion(
      "La route 3 camps → gank est pour ?",
      "Farmer plus",
      "Ganker tôt et être agressif",
      "AFK",
      "Prendre Baron",
      'b',
      "3 camps puis gank permet d'être agressif en early."
    ),
    createQuestion(
      "Pourquoi kiter les camps ?",
      "Pour le style",
      "Prendre moins de dégâts",
      "Tuer plus vite",
      "Pas de raison",
      'b',
      "Kiter réduit les dégâts reçus des monstres."
    ),
    createQuestion(
      "Quand utiliser Smite pendant le clear ?",
      "Jamais",
      "Sur les camps avec beaucoup de PV",
      "Seulement sur les buffs",
      "Au début du camp",
      'b',
      "Smite les gros camps pour finir plus vite et avoir du sustain."
    ),
    createQuestion(
      "Qu'est-ce qui influence le choix de route ?",
      "Rien",
      "Champion, matchups des lanes, objectifs",
      "Seulement le champion",
      "La météo",
      'b',
      "Plusieurs facteurs influencent le choix de route optimal."
    ),
    createQuestion(
      "Faut-il garder Smite pour les objectifs ?",
      "Non, spam sur les camps",
      "Oui, pour secure Dragon/Baron",
      "Jamais",
      "Seulement Baron",
      'b',
      "Gardez une charge de Smite pour secure les objectifs."
    ),
    createQuestion(
      "Quel timing viser pour un full clear ?",
      "5 minutes",
      "Autour de 3:30",
      "10 minutes",
      "2 minutes",
      'b',
      "Un bon full clear se fait vers 3:30."
    ),
    createQuestion(
      "Les potions sont utilisées quand ?",
      "Après le clear",
      "Pendant le clear pour rester en vie",
      "Jamais en jungle",
      "Seulement en gank",
      'b',
      "Utilisez les potions pendant le clear pour le sustain."
    ),
    createQuestion(
      "Pourquoi la route affecte les ganks ?",
      "Ça n'affecte pas",
      "Détermine où vous êtes et quand",
      "Seulement l'or",
      "Pour le style",
      'b',
      "La route détermine votre position et timing de gank."
    ),
  ]
);
