import { createModule, createQuestion } from '../utils';

export const module02StartingItems = createModule(
  'Objets de départ classiques',
  'starting-items',
  'Lame, Anneau et Bouclier de Doran',
  2,
  // Theory Content
  `## Les objets de Doran

Les objets de **Doran** sont les objets de départ classiques pour la plupart des laners. Ils sont efficaces en early game.

## Lame de Doran

Pour les champions **AD** :
- +8 Attack Damage
- +80 PV
- Sustain sur les sbires (omnivamp)
- Pris par : ADC, bruisers AD, assassins AD

## Anneau de Doran

Pour les champions **AP** :
- +15 Ability Power
- +70 PV
- +6 Mana par kill de sbire
- Pris par : Mages, assassins AP

## Bouclier de Doran

Pour les matchups **difficiles** :
- +80 PV
- Régénération de PV passive
- Bonus de régén quand low HP
- Pris par : Top laners contre poke, lanes difficiles

## Autres options de départ

Alternatives selon la situation :
- **Épée longue** + potions : Plus d'AD, moins de survie
- **Tome amplificateur** + potions : Plus d'AP
- **Potion rechargeable** : Économies long terme

## Récapitulatif

- **Lame de Doran** : AD + PV + sustain (ADC, bruisers)
- **Anneau de Doran** : AP + PV + mana (mages)
- **Bouclier de Doran** : Survie + régén (lanes difficiles)
- Choisir selon votre champion et le matchup`,

  // Practice Instructions
  `## Objectif

Choisir le bon objet de départ selon le champion.

## Étapes

1. Jouez un ADC (Ashe) et achetez Lame de Doran
2. Jouez un mage (Lux) et achetez Anneau de Doran
3. Jouez un top difficile et essayez Bouclier de Doran
4. Comparez les stats et le sustain de chaque objet
5. Notez les différences pendant la phase de lane

## Critère de réussite

Vous savez quel objet de Doran acheter selon votre champion.`,

  // Questions
  [
    createQuestion(
      "La Lame de Doran est pour quel type de champion ?",
      "Champions AP",
      "Champions AD",
      "Tanks uniquement",
      "Supports",
      'b',
      "Lame de Doran donne de l'AD, donc pour les champions physiques."
    ),
    createQuestion(
      "L'Anneau de Doran est pour quel type de champion ?",
      "Champions AD",
      "Champions AP",
      "Tanks",
      "ADC",
      'b',
      "Anneau de Doran donne de l'AP, donc pour les mages et assassins AP."
    ),
    createQuestion(
      "Quand prendre le Bouclier de Doran ?",
      "Toujours",
      "Dans les matchups difficiles pour survivre",
      "Quand on veut du burst",
      "Uniquement en jungle",
      'b',
      "Bouclier de Doran aide à survivre contre le poke et les lanes dures."
    ),
    createQuestion(
      "Que donne l'Anneau de Doran pour le mana ?",
      "Régénération passive",
      "Mana par kill de sbire",
      "Rien",
      "Mana infini",
      'b',
      "L'Anneau de Doran restaure du mana à chaque sbire last-hit."
    ),
    createQuestion(
      "Tous les objets de Doran donnent quoi en commun ?",
      "De l'or",
      "Des PV",
      "De la vitesse",
      "Du mana",
      'b',
      "Tous les Doran donnent des PV pour survivre en early game."
    ),
    createQuestion(
      "Pourquoi ne pas garder les Doran en late game ?",
      "Ils disparaissent",
      "Ils prennent un emplacement pour peu de stats",
      "Ils sont interdits",
      "Ils coûtent de l'or en continu",
      'b',
      "Les Doran ne sont pas slot-efficient en late game."
    ),
    createQuestion(
      "Quel ADC commence généralement par Lame de Doran ?",
      "Aucun",
      "La plupart (Jinx, Ashe, Caitlyn, etc.)",
      "Seulement Ezreal",
      "Seulement les hyper carries",
      'b',
      "La Lame de Doran est le départ standard pour les ADC."
    ),
    createQuestion(
      "Le Bouclier de Doran donne quel bonus spécial ?",
      "Plus de dégâts",
      "Régénération augmentée quand low HP",
      "Invisibilité",
      "Téléportation",
      'b',
      "Bouclier de Doran régénère plus vite quand vous êtes low HP."
    ),
    createQuestion(
      "Épée longue + potions est une alternative pour...",
      "Plus de survie",
      "Plus d'AD et un build plus rapide",
      "Plus de défense",
      "Les supports",
      'b',
      "Épée longue permet de commencer à construire un objet AD plus tôt."
    ),
    createQuestion(
      "Peut-on vendre les objets de Doran ?",
      "Non, ils sont permanents",
      "Oui, comme tout objet",
      "Seulement en base",
      "Non, seulement les échanger",
      'b',
      "Les Doran peuvent être vendus pour libérer un slot."
    ),
  ]
);
