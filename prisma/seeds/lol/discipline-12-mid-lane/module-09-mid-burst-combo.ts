import { createModule, createQuestion } from '../utils';

export const module09MidBurstCombo = createModule(
  "Exécuter un burst combo mid",
  'mid-burst-combo',
  'Enchaîner les sorts pour un maximum de dégâts',
  9,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un burst combo ?

Un **burst combo** est une séquence rapide de sorts conçue pour infliger un maximum de dégâts en un minimum de temps. C'est l'essence même du mid lane :

- **Assassins** : 100-0 une cible en une rotation
- **Burst mages** : Combiner leurs sorts pour un kill
- **Control mages** : Setup CC puis burst

Maîtriser votre combo est essentiel pour transformer vos opportunités en kills.

## Les composantes d'un combo

Un combo efficace contient généralement :

1. **Setup** : CC ou gap-closer pour initier
2. **Core damage** : Vos sorts de dégâts principaux
3. **Finisher** : Sort d'exécution ou ignite
4. **Weaving** : Auto-attaques entre les sorts

**Exemple Annie** :
- Setup : Flash + R (stun AoE)
- Core : W + Q
- Finisher : Ignite + autos
- Weaving : Passif Electrocute

## Exemples de combos par champion

**Syndra** (Burst Mage) :
Q → Q → Q (stack orbes) → E (stun) → W → R

**Zed** (Assassin AD) :
W (ombre) → E → Q → R → auto → E → Q → auto → Ignite

**Lux** (Burst Mage) :
Q (root) → E → R → auto (passif)

**Ahri** (Burst Mage/Assassin) :
E (charm) → Q → W → R (gap close) → auto

## L'importance du timing

Le **timing** de votre combo est crucial :

**Animation canceling** :
- Certains sorts peuvent être lancés pendant d'autres
- Les autos peuvent être weavées entre les sorts
- Exemple : Riven peut annuler ses animations avec des autos

**Cooldown management** :
- Ne lancez pas votre combo si des sorts clés sont en CD
- Attendez que tous vos sorts soient prêts
- Gardez un sort pour l'escape si nécessaire

**Conseil** : Pratiquez votre combo en tool jusqu'à ce qu'il soit automatique.

## Récapitulatif

- Un **burst combo** = séquence rapide pour max dégâts
- Composantes : **Setup** → **Core damage** → **Finisher**
- Chaque champion a son **combo optimal**
- Le **timing** et l'**animation canceling** maximisent les dégâts
- **Weavez** des autos entre vos sorts quand possible
- Pratiquez jusqu'à ce que le combo devienne un **réflexe**`,

  // Practice Instructions
  `## Objectif

Maîtriser le burst combo de votre champion mid pour pouvoir l'exécuter rapidement et efficacement.

## Étapes

1. Allez dans l'outil d'entraînement (Practice Tool)
2. Choisissez votre champion mid principal
3. Recherchez son combo optimal (YouTube, guides)
4. Placez un mannequin ennemi
5. Pratiquez le combo complet 20 fois :
   - D'abord lentement pour bien comprendre l'ordre
   - Puis de plus en plus vite
   - Notez les dégâts totaux
6. Ajoutez les auto-attaques entre les sorts (weaving)
7. Chronométrez votre combo (moins de 2 secondes idéalement)
8. Testez le combo en mouvement (sur mannequin mobile)
9. Pratiquez avec différents niveaux de HP ennemi :
   - Full HP : combo complet nécessaire
   - Half HP : adapté le combo raccourci
10. Répétez jusqu'à pouvoir l'exécuter sans réfléchir

## Critère de réussite

Vous pouvez exécuter le combo complet de votre champion en moins de 3 secondes avec au moins 80% des dégâts maximum possibles.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un 'burst combo' ?",
      "Une combinaison de danse",
      "Une séquence rapide de sorts pour infliger un maximum de dégâts",
      "Un type de sbire",
      "Un objectif neutre",
      'b',
      "Un burst combo est une rotation rapide de sorts conçue pour maximiser les dégâts instantanés."
    ),
    createQuestion(
      "Quelles sont les trois parties principales d'un combo ?",
      "Early, Mid, Late",
      "Setup, Core damage, Finisher",
      "Auto, Sort, Ultime",
      "Ward, Push, Roam",
      'b',
      "Un combo efficace contient un setup (CC/gap-close), les dégâts principaux, et un finisher."
    ),
    createQuestion(
      "Qu'est-ce que le 'weaving' dans un combo ?",
      "Utiliser uniquement des sorts",
      "Intercaler des auto-attaques entre les sorts",
      "Fuir le combat",
      "Warder pendant le fight",
      'b',
      "Le weaving consiste à placer des auto-attaques entre les sorts pour maximiser les DPS."
    ),
    createQuestion(
      "Pourquoi l'animation canceling est-il important ?",
      "Il n'est pas important",
      "Il permet de lancer des sorts plus rapidement en annulant des animations",
      "Il rend le champion invisible",
      "Il double les dégâts",
      'b',
      "L'animation canceling permet d'enchaîner les sorts plus vite, augmentant votre burst."
    ),
    createQuestion(
      "Quel sort commence généralement un combo pour un mage avec CC ?",
      "Le sort de dégâts principal",
      "Le sort de CC pour immobiliser la cible",
      "L'ultime toujours",
      "Une auto-attaque",
      'b',
      "Le CC setup permet de garantir que le reste du combo touche la cible immobilisée."
    ),
    createQuestion(
      "Pourquoi devez-vous attendre que tous vos sorts soient prêts avant de combo ?",
      "Ce n'est pas nécessaire",
      "Un combo incomplet peut ne pas tuer et vous laisser vulnérable",
      "Les sorts sont plus forts ensemble",
      "Le jeu vous y oblige",
      'b',
      "Un combo incomplet peut échouer à kill la cible et vous laisse sans ressources."
    ),
    createQuestion(
      "Comment pratiquer efficacement son combo ?",
      "Uniquement en ranked",
      "En Practice Tool sur des mannequins jusqu'à ce que ce soit automatique",
      "En regardant des vidéos sans jouer",
      "En lisant le wiki",
      'b',
      "Le Practice Tool permet de répéter le combo jusqu'à ce qu'il devienne un réflexe musculaire."
    ),
    createQuestion(
      "Quel est le rôle de l'Ignite dans un combo burst ?",
      "Setup le combat",
      "Finir la cible et réduire son heal",
      "Augmenter vos dégâts de sorts",
      "Donner de la vision",
      'b',
      "Ignite sert de finisher pour achever les cibles low HP et réduit leur healing."
    ),
    createQuestion(
      "Si la cible est à 50% HP, devez-vous utiliser votre combo complet ?",
      "Toujours le combo complet",
      "Adaptez avec un combo raccourci pour économiser des ressources",
      "N'attaquez jamais une cible à 50%",
      "Utilisez uniquement des autos",
      'b',
      "Adapter son combo selon les HP ennemis permet d'économiser des cooldowns pour plus tard."
    ),
    createQuestion(
      "Pourquoi garder parfois un sort pour après le combo ?",
      "Ce n'est jamais utile",
      "Pour avoir une option d'escape ou de chase si nécessaire",
      "Pour faire moins de dégâts",
      "Pour économiser la mana",
      'b',
      "Garder un dash ou CC pour après permet de fuir ou poursuivre selon la situation."
    ),
  ]
);
