import { createModule, createQuestion } from '../utils';

export const module06CounterJungling = createModule(
  'Counter-jungling',
  'counter-jungling',
  "Envahir la jungle ennemie",
  6,
  // Theory Content
  `## Le Counter-Jungling

Le **counter-jungling** (ou invade) consiste à entrer dans la jungle ennemie pour voler des camps ou tuer le jungler adverse.

## Pourquoi counter-jungle ?

Avantages :
- **Voler** l'or et l'XP de l'ennemi
- Mettre le jungler adverse **behind**
- Contrôler la **carte** et la vision
- Créer des opportunités pour vos **lanes**

## Conditions pour invade

Quand c'est possible :
- Vous êtes **plus fort** que le jungler ennemi
- Vos lanes ont la **prio** (peuvent vous aider)
- Vous savez **où est** l'ennemi
- Vous avez de la **vision** ou info

## Types de counter-jungle

Différentes approches :
- **Steal camps** : Prendre des camps et partir
- **Kill the jungler** : Chercher le 1v1
- **Deep ward** : Warder puis partir
- **Take buff** : Voler le buff bleu/rouge

## Le timing des invades

Quand invade :
- Quand l'ennemi est **visible** de l'autre côté
- Après avoir vu son **path** de départ
- Quand vos laners peuvent **collapse**
- Quand vous avez **Smite** up pour les gros camps

## Les risques

Ce qui peut mal tourner :
- **Collapse** ennemi si pas de prio lane
- **Mourir** si le jungler est plus fort
- **Perdre du temps** pour rien
- Se faire **track** et counter vous-même`,

  // Practice Instructions
  `## Objectif

Apprendre à envahir la jungle ennemie de façon safe.

## Étapes

1. Identifiez quand le jungler ennemi est visible ailleurs
2. Vérifiez que vos laners peuvent vous aider
3. Entrez dans la jungle ennemie par un chemin wardé
4. Volez un camp ou placez des wards
5. Sortez avant que l'ennemi n'arrive

## Critère de réussite

Vous réussissez un invade qui vous donne un avantage sans mourir.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le counter-jungling ?",
      "Rester dans sa jungle",
      "Entrer dans la jungle ennemie pour voler/tuer",
      "Ganker",
      "Prendre Baron",
      'b',
      "Counter-jungle = envahir la jungle adverse."
    ),
    createQuestion(
      "Quel avantage donne le counter-jungling ?",
      "Rien",
      "Mettre le jungler ennemi behind en volant ses ressources",
      "Plus de kills",
      "Meilleurs items",
      'b',
      "Voler les camps met l'ennemi en retard."
    ),
    createQuestion(
      "Quand est-il safe d'invade ?",
      "Toujours",
      "Quand vos lanes ont la prio et l'ennemi est ailleurs",
      "Jamais",
      "Seulement level 18",
      'b',
      "Invadez quand c'est safe et vos laners peuvent aider."
    ),
    createQuestion(
      "Qu'est-ce que la prio de lane ?",
      "Perdre la lane",
      "Contrôler/avoir poussé la lane",
      "Un buff",
      "Un objectif",
      'b',
      "La prio = avoir la vague poussée et pouvoir bouger."
    ),
    createQuestion(
      "Un collapse c'est quoi ?",
      "Perdre un camp",
      "Les ennemis venant de plusieurs directions",
      "Une technique de farm",
      "Un gank réussi",
      'b',
      "Collapse = plusieurs ennemis qui vous encerclent."
    ),
    createQuestion(
      "Voler le buff ennemi fait quoi ?",
      "Rien de spécial",
      "Vous donne le buff et le refuse à l'ennemi",
      "Double les stats",
      "Gagne la partie",
      'b',
      "Voler un buff vous l'accorde et le retire à l'ennemi."
    ),
    createQuestion(
      "Deep ward signifie quoi ?",
      "Ward normale",
      "Placer une ward profondément dans la jungle ennemie",
      "Ward de trinket",
      "Ward du support",
      'b',
      "Une deep ward est placée loin dans le territoire ennemi."
    ),
    createQuestion(
      "Si vos lanes n'ont pas de prio, faut-il invade ?",
      "Oui, c'est pas grave",
      "Non, risque de collapse",
      "Toujours invade",
      "Seulement la nuit",
      'b',
      "Sans prio lane, l'ennemi peut vous collapse facilement."
    ),
    createQuestion(
      "Pourquoi avoir Smite up pour invade ?",
      "Pas important",
      "Pour voler les camps rapidement et secure",
      "Pour se soigner",
      "C'est interdit",
      'b',
      "Smite permet de voler les camps rapidement."
    ),
    createQuestion(
      "Le risque principal de l'invade est ?",
      "Perdre de l'or",
      "Mourir et donner un avantage à l'ennemi",
      "Perdre ses buffs",
      "Être report",
      'b',
      "Mourir en invade est désastreux."
    ),
  ]
);
