import { createModule, createQuestion } from '../utils';

export const module09ChampionsTop = createModule(
  'Champions typiques en Top',
  'champions-top',
  'Les différentes catégories de champions top lane',
  9,
  // Theory Content
  `## Champions du Top Lane

Le **Top Lane** accueille des champions très variés. Comprendre les **catégories** permet de mieux adapter son jeu.

## Les Tanks à Contrôle

Champions défensifs avec du **CC** :
- **Malphite** : Ultimate d'engage dévastatrice
- **Ornn** : CC multiples et upgrade d'items
- **Sion** : Tanky à l'infini avec sa passive
- Rôle : **Engage** et **peel** pour l'équipe

## Les Bruisers et Combattants

Champions équilibrés dégâts/résistance :
- **Darius** : Dominance en lane avec saignement
- **Camille** : Mobilité et dégâts vrais
- **Renekton** : Early game puissant
- Rôle : **Duel** en lane et **dive** les carries

## Les Duelistes Split-Push

Champions spécialisés dans le 1v1 :
- **Tryndamere** : Inarrêtable avec son ult
- **Fiora** : Duel pur avec les vitaux
- **Jax** : Scaling monstrueux en late
- Rôle : **Split-push** et forcer les 1v1

## Choisir son Champion

Critères de sélection :
- **Composition** de votre équipe (manque tank ?)
- **Matchup** contre le top adverse
- **Win condition** : teamfight ou split ?
- Votre **style** de jeu personnel

## Contrer les Catégories

Comment jouer contre :
- **Tanks** : Dégâts soutenus, anti-tank items
- **Bruisers** : Respecter leur powerspike
- **Duelistes** : Éviter les 1v1, grouper
- Adaptez votre stratégie au champion adverse`,

  // Practice Instructions
  `## Objectif

Identifier et jouer les différentes catégories de champions top lane.

## Étapes

1. Jouez un champion de chaque catégorie (tank, bruiser, dueliste)
2. Observez les différences de playstyle
3. Notez comment chaque type contribue aux teamfights
4. Identifiez les matchups favorables et défavorables
5. Choisissez votre catégorie préférée selon votre style

## Critère de réussite

Vous comprenez le rôle de chaque catégorie et pouvez choisir selon la composition d'équipe.`,

  // Questions
  [
    createQuestion(
      "Malphite est quelle catégorie de champion top ?",
      "Dueliste split-push",
      "Tank à contrôle",
      "Assassin",
      "Mage",
      'b',
      "Malphite est un tank avec une ultimate d'engage très puissante."
    ),
    createQuestion(
      "Quel est le rôle principal d'un bruiser comme Darius ?",
      "Fuir les combats",
      "Duels en lane et dive les carries",
      "Split-push uniquement",
      "Support l'équipe",
      'b',
      "Les bruisers excellent dans les duels et peuvent dive les carries."
    ),
    createQuestion(
      "Fiora et Tryndamere sont considérés comme ?",
      "Tanks à engage",
      "Duelistes split-push",
      "Supports",
      "Junglers",
      'b',
      "Ce sont des duelistes spécialisés dans le split-push."
    ),
    createQuestion(
      "Pourquoi choisir un tank si votre équipe n'en a pas ?",
      "Les tanks font plus de dégâts",
      "Pour avoir de l'engage et de la frontline",
      "Les tanks gagnent toujours la lane",
      "Aucune raison",
      'b',
      "Les tanks apportent engage et frontline essentiels en teamfight."
    ),
    createQuestion(
      "Camille est quelle catégorie ?",
      "Tank pur",
      "Bruiser/Combattante",
      "Support",
      "Mage",
      'b',
      "Camille est une bruiser avec mobilité et dégâts vrais."
    ),
    createQuestion(
      "Comment jouer contre un dueliste split-pusher ?",
      "Toujours 1v1",
      "Éviter les 1v1 et grouper",
      "AFK farm",
      "Ignorer complètement",
      'b',
      "Les duelistes veulent le 1v1, grouper les contrecarre."
    ),
    createQuestion(
      "Jax scale comment en late game ?",
      "Il devient faible",
      "Il scale très fort et devient un monstre",
      "Pas de changement",
      "Il devient tank",
      'b',
      "Jax a un scaling monstrueux et domine en late game."
    ),
    createQuestion(
      "Quel item aide contre les tanks ?",
      "Items de mana",
      "Items anti-tank (Blade of Ruined King, % dégâts)",
      "Items défensifs",
      "Bottes de vitesse",
      'b',
      "Les items avec dégâts % vie max aident contre les tanks."
    ),
    createQuestion(
      "L'ultimate de Tryndamere permet quoi ?",
      "Dash sur grande distance",
      "Être inarrêtable et ne pas mourir pendant quelques secondes",
      "Stun de zone",
      "Heal l'équipe",
      'b',
      "Son ult l'empêche de mourir pendant 5 secondes."
    ),
    createQuestion(
      "Ornn est spécial car il peut ?",
      "Se téléporter partout",
      "Upgrade les items mythiques de ses alliés",
      "Invoquer des sbires",
      "Voler de l'or",
      'b',
      "Ornn peut améliorer les items de ses coéquipiers."
    ),
  ]
);
