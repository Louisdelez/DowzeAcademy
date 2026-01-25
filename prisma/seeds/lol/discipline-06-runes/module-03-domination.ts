import { createModule, createQuestion } from '../utils';

export const module03Domination = createModule(
  'Arbre Domination',
  'domination-tree',
  'Burst et snowball avec Électrocute',
  3,
  // Theory Content
  `## L'arbre Domination

L'arbre **Domination** est orienté vers le **burst** (dégâts rapides) et le **snowball** (accumuler un avantage). Parfait pour les assassins.

## Champions typiques

Domination est populaire sur :
- **Assassins** : Zed, Talon, Katarina, Akali
- **Mages burst** : Syndra, LeBlanc
- **Junglers agressifs** : Kha'Zix, Rengar

## Keystones principales

**Électrocute** :
- Dégâts bonus après 3 attaques/sorts distincts
- Burst rapide et fiable
- Cooldown assez court

**Prédateur** :
- Active sur les bottes pour vitesse + dégâts
- Bon pour les roams

**Moisson noire (Dark Harvest)** :
- Stack des dégâts sur les ennemis low HP
- Scale vers le late game

## Runes secondaires populaires

Dans Domination :
- **Goût du sang** : Soin en touchant un champion
- **Chasseur de trésors** : Or bonus sur les kills
- **Marche sur les cadavres** : Dégâts après un kill

## Récapitulatif

- Domination = burst, assassinats, snowball
- Keystones : Électrocute, Prédateur, Dark Harvest
- Pour assassins et mages burst
- Runes d'or et de dégâts bonus
- Idéal pour les kills rapides`,

  // Practice Instructions
  `## Objectif

Comprendre les runes Domination et leur utilisation.

## Étapes

1. Créez une page avec Domination en principal
2. Prenez Électrocute comme Keystone
3. Jouez un assassin (Zed ou Talon)
4. Observez les procs d'Électrocute (3 touches = burst)
5. Essayez Dark Harvest et comparez

## Critère de réussite

Vous comprenez quand Domination est optimal et comment proc Électrocute.`,

  // Questions
  [
    createQuestion(
      "L'arbre Domination est orienté vers quoi ?",
      "La défense",
      "Le burst et le snowball",
      "Le DPS constant",
      "L'utilité",
      'b',
      "Domination est fait pour les dégâts rapides et l'accumulation d'avantages."
    ),
    createQuestion(
      "Comment proc Électrocute ?",
      "Une seule attaque",
      "3 attaques ou sorts distincts sur un champion",
      "5 attaques",
      "En tuant un sbire",
      'b',
      "Électrocute se déclenche après 3 touches distinctes sur un champion."
    ),
    createQuestion(
      "Quels champions prennent souvent Domination ?",
      "Les tanks",
      "Les assassins et mages burst",
      "Les ADC",
      "Les supports enchanters",
      'b',
      "Assassins et mages burst bénéficient du burst de Domination."
    ),
    createQuestion(
      "Dark Harvest fait quoi ?",
      "Dégâts de zone",
      "Dégâts bonus sur cibles low HP, qui stackent",
      "Soin",
      "Vitesse",
      'b',
      "Dark Harvest inflige des dégâts bonus sur les ennemis low HP et scale."
    ),
    createQuestion(
      "Prédateur s'active comment ?",
      "Automatiquement",
      "En activant les bottes",
      "En attaquant",
      "En mourant",
      'b',
      "Prédateur s'active sur les bottes pour de la vitesse et des dégâts."
    ),
    createQuestion(
      "Goût du sang donne quoi ?",
      "Plus de dégâts",
      "Du soin en touchant un champion",
      "De la vitesse",
      "De l'or",
      'b',
      "Goût du sang soigne un peu quand vous touchez un champion ennemi."
    ),
    createQuestion(
      "Chasseur de trésors fait quoi ?",
      "Trouve des objets",
      "Donne de l'or bonus sur les premiers kills uniques",
      "Augmente la vitesse",
      "Réduit les cooldowns",
      'b',
      "Chasseur de trésors donne de l'or bonus pour chaque premier kill sur un champion."
    ),
    createQuestion(
      "Zed prend généralement quelle Keystone ?",
      "Conquérant",
      "Électrocute",
      "Comète",
      "Gardien",
      'b',
      "Zed est un assassin qui bénéficie du burst d'Électrocute."
    ),
    createQuestion(
      "Électrocute est mieux que Conquérant pour...",
      "Les longs combats",
      "Les trades courts et le burst",
      "Le tank",
      "Le sustain",
      'b',
      "Électrocute est optimal pour les trades courts où vous voulez burst rapidement."
    ),
    createQuestion(
      "L'arbre Domination aide à snowball grâce à quoi ?",
      "Plus de défense",
      "Des runes d'or et de dégâts après les kills",
      "Plus de mana",
      "Plus de vision",
      'b',
      "Les runes comme Chasseur de trésors et Marche sur les cadavres récompensent les kills."
    ),
  ]
);
