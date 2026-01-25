import { createModule, createQuestion } from '../utils';

export const module05Sorcery = createModule(
  'Arbre Sorcellerie',
  'sorcery-tree',
  'Puissance et poke AP',
  5,
  // Theory Content
  `## L'arbre Sorcellerie

L'arbre **Sorcellerie** est orienté vers la **puissance des sorts** et le **poke**. Idéal pour les mages qui veulent harceler à distance.

## Champions typiques

Sorcellerie est populaire sur :
- **Mages poke** : Xerath, Lux, Ziggs
- **Mages contrôle** : Orianna, Viktor
- **Champions à sorts** : Jayce, certains mid

## Keystones principales

**Comète arcanique** :
- Lance une comète quand vous touchez un sort
- Excellent pour le poke
- Cooldown réduit si vous touchez des sorts

**Phase Rush** :
- Burst de vitesse après 3 attaques/sorts
- Pour les mages qui veulent fuir après un trade

**Invocation d'Aery** :
- Dégâts ou bouclier selon la cible
- Polyvalent, bon pour enchanters et mages

## Runes secondaires populaires

Dans Sorcellerie :
- **Ruban de mana** : Mana bonus
- **Transcendance** : Ability Haste à niveau 5/8/11
- **Brûlure** : Dégâts bonus aux ennemis avec CC

## Récapitulatif

- Sorcellerie = poke, puissance des sorts
- Keystones : Comète, Phase Rush, Aery
- Pour mages et enchanters
- Runes de mana et cooldown
- Idéal pour harceler de loin`,

  // Practice Instructions
  `## Objectif

Comprendre les runes Sorcellerie et leur utilisation.

## Étapes

1. Créez une page avec Sorcellerie en principal
2. Prenez Comète arcanique comme Keystone
3. Jouez un mage poke (Lux ou Xerath)
4. Observez les comètes se lancer quand vous touchez un sort
5. Essayez Aery sur un enchanter (Lulu)

## Critère de réussite

Vous comprenez quand Sorcellerie est optimal et les différences entre les Keystones.`,

  // Questions
  [
    createQuestion(
      "L'arbre Sorcellerie est orienté vers quoi ?",
      "Le tank",
      "Le poke et la puissance des sorts",
      "Les auto-attaques",
      "La survie",
      'b',
      "Sorcellerie favorise le poke et les dégâts de sorts."
    ),
    createQuestion(
      "Comète arcanique fait quoi ?",
      "Augmente la vitesse",
      "Lance une comète quand un sort touche",
      "Soigne",
      "Donne de l'armure",
      'b',
      "Comète lance un projectile qui tombe sur l'ennemi touché par un sort."
    ),
    createQuestion(
      "Phase Rush s'active comment ?",
      "En une attaque",
      "Après 3 attaques ou sorts distincts",
      "En restant immobile",
      "En prenant des dégâts",
      'b',
      "Phase Rush donne de la vitesse après avoir touché 3 fois un ennemi."
    ),
    createQuestion(
      "Aery peut faire deux choses différentes, lesquelles ?",
      "Dégâts ou soin",
      "Dégâts sur ennemi ou bouclier sur allié",
      "Slow ou stun",
      "Vitesse ou armure",
      'b',
      "Aery inflige des dégâts aux ennemis et donne un bouclier aux alliés."
    ),
    createQuestion(
      "Quels champions prennent souvent Comète ?",
      "Les assassins",
      "Les mages poke",
      "Les tanks",
      "Les ADC",
      'b',
      "Les mages qui pokent à distance bénéficient de Comète."
    ),
    createQuestion(
      "Ruban de mana donne quoi ?",
      "De la vitesse",
      "Du mana bonus",
      "Des dégâts",
      "De l'armure",
      'b',
      "Ruban de mana augmente votre mana maximum."
    ),
    createQuestion(
      "Transcendance donne quoi ?",
      "Plus de dégâts",
      "De l'Ability Haste (réduction de cooldown)",
      "Plus de PV",
      "Plus de vitesse",
      'b',
      "Transcendance donne de l'Ability Haste à certains niveaux."
    ),
    createQuestion(
      "Pourquoi prendre Phase Rush sur un mage ?",
      "Pour plus de dégâts",
      "Pour fuir après un trade agressif",
      "Pour plus de mana",
      "Pour tanker",
      'b',
      "Phase Rush permet de s'échapper après avoir combo un ennemi."
    ),
    createQuestion(
      "Xerath prend souvent quelle Keystone ?",
      "Conquérant",
      "Comète arcanique",
      "Électrocute",
      "Grasp",
      'b',
      "Xerath est un mage poke qui bénéficie de Comète."
    ),
    createQuestion(
      "Brûlure augmente les dégâts contre qui ?",
      "Les monstres",
      "Les ennemis avec un CC (slow, stun, etc.)",
      "Les tourelles",
      "Les sbires",
      'b',
      "Brûlure augmente les dégâts sur les ennemis immobilisés ou ralentis."
    ),
  ]
);
