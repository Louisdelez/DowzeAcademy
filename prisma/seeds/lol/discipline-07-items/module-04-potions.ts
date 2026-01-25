import { createModule, createQuestion } from '../utils';

export const module04Potions = createModule(
  'Potions et consommables',
  'potions-consumables',
  'Potion de soin, rechargeable et autres consommables',
  4,
  // Theory Content
  `## Les potions

Les **potions** sont des consommables qui restaurent de la vie. Elles sont essentielles en début de partie pour le sustain.

## Potion de soin (Health Potion)

La potion de base :
- Coût : **50 or**
- Restaure **120 PV** sur 15 secondes
- Consommable (disparaît après usage)
- On peut en porter plusieurs

## Potion rechargeable (Refillable Potion)

Une alternative économique :
- Coût : **150 or**
- 2 charges, restaure **120 PV** chacune
- Se **recharge** à la base
- Rentable à long terme

## Potion de corruption

Une potion améliorée :
- Coût : **500 or**
- 3 charges, restaure PV et mana
- Dégâts bonus temporaires quand active
- Populaire sur certains tops et mids

## Autres consommables

D'autres achats ponctuels :
- **Élixirs** : Buffs temporaires en late game
- **Balise de contrôle** : Ward visible mais permanente
- Tous les consommables ont des usages spécifiques

## Récapitulatif

- **Potion de soin** : 50g, 120 PV, consommable
- **Rechargeable** : 150g, 2 charges, se recharge
- **Corruption** : 500g, PV + mana + dégâts
- Toujours avoir des potions en early game
- La rechargeable économise de l'or à long terme`,

  // Practice Instructions
  `## Objectif

Utiliser efficacement les potions pour le sustain.

## Étapes

1. Commencez une partie avec un Doran + 1 potion de soin
2. Utilisez la potion quand vous prenez des dégâts
3. Essayez de commencer avec une Potion rechargeable
4. Notez que la rechargeable se recharge au back
5. Comparez le coût à long terme des deux options

## Critère de réussite

Vous savez quand utiliser vos potions et choisir entre normale et rechargeable.`,

  // Questions
  [
    createQuestion(
      "Combien coûte une Potion de soin ?",
      "25 or",
      "50 or",
      "75 or",
      "100 or",
      'b',
      "Une potion de soin coûte 50 or."
    ),
    createQuestion(
      "Combien de PV restaure une Potion de soin ?",
      "80 PV",
      "100 PV",
      "120 PV",
      "150 PV",
      'c',
      "Une potion de soin restaure 120 PV sur 15 secondes."
    ),
    createQuestion(
      "Que se passe-t-il avec la Rechargeable au back ?",
      "Elle disparaît",
      "Elle se recharge",
      "Elle s'améliore",
      "Rien",
      'b',
      "La Potion rechargeable récupère ses charges à la base."
    ),
    createQuestion(
      "Combien de charges a la Potion rechargeable ?",
      "1 charge",
      "2 charges",
      "3 charges",
      "5 charges",
      'b',
      "La Potion rechargeable a 2 charges."
    ),
    createQuestion(
      "Pourquoi la Rechargeable est-elle économique ?",
      "Elle coûte moins cher",
      "Elle ne disparaît pas, on économise l'achat de potions",
      "Elle soigne plus",
      "Elle donne de l'or",
      'b',
      "Pas besoin de racheter des potions à chaque back."
    ),
    createQuestion(
      "La Potion de corruption donne quoi en plus des soins ?",
      "De l'armure",
      "Du mana et des dégâts bonus",
      "De la vitesse",
      "De la vision",
      'b',
      "Corruption restaure mana et donne des dégâts bonus temporaires."
    ),
    createQuestion(
      "Quand utiliser ses potions idéalement ?",
      "Dès le début de la partie",
      "Quand on a pris des dégâts pour les utiliser au mieux",
      "Jamais, les garder",
      "Uniquement avant de mourir",
      'b',
      "Utiliser les potions après avoir pris des dégâts maximise leur valeur."
    ),
    createQuestion(
      "Les potions soignent-elles instantanément ?",
      "Oui",
      "Non, c'est progressif sur plusieurs secondes",
      "Seulement la Corruption",
      "Seulement en combat",
      'b',
      "Les potions soignent progressivement, pas instantanément."
    ),
    createQuestion(
      "Qu'est-ce qu'un Élixir ?",
      "Une potion permanente",
      "Un buff temporaire de late game",
      "Un objet de départ",
      "Un sort",
      'b',
      "Les Élixirs sont des consommables qui donnent des buffs temporaires."
    ),
    createQuestion(
      "Peut-on utiliser une potion pendant un combat ?",
      "Non, il faut être à la base",
      "Oui, on peut la pop en combat",
      "Seulement si on n'est pas CC",
      "Seulement la Rechargeable",
      'b',
      "Les potions peuvent être utilisées n'importe quand."
    ),
  ]
);
