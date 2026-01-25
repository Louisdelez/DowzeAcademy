import { createModule, createQuestion } from '../utils';

export const module05Combos = createModule(
  'Combos de base',
  'combos',
  'Enchaînements de sorts efficaces',
  5,
  // Theory Content
  `## Les combos

Un **combo** est une séquence de sorts et d'attaques enchaînées pour maximiser les dégâts ou l'efficacité.

## Pourquoi apprendre les combos ?

Avantages des combos :
- **Maximum de dégâts** en minimum de temps
- Moins de temps pour l'ennemi de **réagir**
- Utilisation **optimale** des cooldowns
- **Prévisibilité** réduite pour l'ennemi

## Structure d'un combo

Éléments communs :
- **Initiation** : Sort d'engage ou CC
- **Burst** : Dégâts principaux
- **Finition** : Sorts de finish
- **Weaving** : Auto-attaques entre les sorts

## Combos universels

Exemples simples :
- **Mages** : CC → Burst → Ignite si besoin
- **Assassins** : Gap closer → Burst → Execute
- **ADC** : Auto → Spell → Auto (weaving)
- **Bruisers** : Engage → Combo → Chase

## Combos spécifiques

Exemples célèbres :
- **Annie** : R → Q → W → Auto (Tibbers combo)
- **Zed** : W → E → Q → R → Auto → E → Q
- **Lux** : Q → E → R → Auto (passive proc)
- **Lee Sin** : Ward → W → R → Q → Q

## Apprendre les combos

Comment maîtriser :
- Apprendre le combo **de base** d'abord
- Pratiquer en **Practice Tool**
- Regarder des **guides** de votre champion
- Ajouter des **variantes** progressivement`,

  // Practice Instructions
  `## Objectif

Apprendre et maîtriser les combos de base de votre champion.

## Étapes

1. Recherchez le combo de base de votre champion main
2. Allez en Practice Tool avec le champion
3. Pratiquez le combo sur les dummies
4. Ajoutez les auto-attaques entre les sorts
5. Chronométrez votre combo pour l'optimiser

## Critère de réussite

Vous exécutez le combo de base de votre champion de façon fluide et rapide.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un combo ?",
      "Un seul sort",
      "Une séquence de sorts/attaques enchaînés",
      "Un objet",
      "Un type de sbire",
      'b',
      "Un combo est un enchaînement de sorts et attaques."
    ),
    createQuestion(
      "Pourquoi faire des combos ?",
      "Pour perdre du temps",
      "Pour maximiser les dégâts rapidement",
      "Pour consommer le mana",
      "Pas de raison",
      'b',
      "Les combos maximisent les dégâts en un minimum de temps."
    ),
    createQuestion(
      "Qu'est-ce que le weaving ?",
      "Un sort",
      "Placer des auto-attaques entre les sorts",
      "Fuir",
      "Un objet",
      'b',
      "Le weaving consiste à auto-attaquer entre les sorts."
    ),
    createQuestion(
      "Le combo d'Annie commence souvent par ?",
      "Q",
      "R (Tibbers)",
      "W",
      "Auto-attaque",
      'b',
      "Annie initie souvent avec R pour le CC de zone."
    ),
    createQuestion(
      "Où pratiquer les combos ?",
      "Seulement en ranked",
      "En Practice Tool",
      "Nulle part",
      "En ARAM",
      'b',
      "Le Practice Tool est idéal pour pratiquer les combos."
    ),
    createQuestion(
      "Qu'est-ce qu'un sort d'initiation dans un combo ?",
      "Le dernier sort",
      "Le sort qui commence le combo (souvent CC ou gap closer)",
      "Un sort de soin",
      "Un sort passif",
      'b',
      "L'initiation est le premier sort, souvent CC ou engage."
    ),
    createQuestion(
      "Les assassins commencent généralement par ?",
      "Un soin",
      "Un gap closer pour atteindre la cible",
      "Rester à distance",
      "Farm",
      'b',
      "Les assassins utilisent un gap closer pour atteindre leur cible."
    ),
    createQuestion(
      "Faut-il apprendre un combo complexe dès le début ?",
      "Oui, le plus dur d'abord",
      "Non, commencer par le combo de base",
      "Les combos ne s'apprennent pas",
      "Seulement pour les pros",
      'b',
      "Maîtrisez le combo de base avant les variantes complexes."
    ),
    createQuestion(
      "Le combo de Lux inclut généralement ?",
      "Seulement R",
      "Q → E → R → Auto (proc passive)",
      "W uniquement",
      "Aucun combo",
      'b',
      "Lux utilise Q pour CC, E et R pour les dégâts, auto pour la passive."
    ),
    createQuestion(
      "Qu'est-ce qu'un combo execute ?",
      "Un combo qui soigne",
      "Un combo qui finit une cible low HP",
      "Un combo défensif",
      "Un combo de farm",
      'b',
      "Un execute est utilisé pour finir une cible basse en PV."
    ),
  ]
);
