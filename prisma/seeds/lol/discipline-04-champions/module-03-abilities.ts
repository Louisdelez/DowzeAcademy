import { createModule, createQuestion } from '../utils';

export const module03Abilities = createModule(
  'Compétences du champion',
  'champion-abilities',
  '4 sorts actifs + passif',
  3,
  // Theory Content
  `## Les compétences d'un champion

Chaque champion possède **5 compétences** uniques : un **passif** et **4 sorts actifs**. C'est ce qui différencie chaque champion.

## Le Passif (P)

Le **passif** est une capacité permanente :
- Toujours actif, pas besoin de l'activer
- Définit souvent le style de jeu du champion
- Exemple : Passif de Jinx = bonus de vitesse après un kill

## Les sorts de base (Q, W, E)

Les trois premiers sorts :
- Disponibles dès le **niveau 1** (choix du premier)
- Améliorables jusqu'au **rang 5**
- Chacun a un effet unique (dégâts, CC, mobilité, etc.)
- **Cooldown** (temps de recharge) variable

## L'Ultime (R)

Le sort **R** est le plus puissant :
- Débloqué au **niveau 6**
- Seulement **3 rangs** (niveaux 6, 11, 16)
- Souvent le sort le plus impactant
- **Cooldown** généralement long

## Types de compétences

Les sorts peuvent être :
- **Point and click** : Cible garantie
- **Skillshot** : Doit être visé
- **Zone** : Affecte une zone
- **Buff/Self** : S'applique à soi-même

## Récapitulatif

- Passif = effet permanent automatique
- Q, W, E = 3 sorts de base (5 rangs chacun)
- R = Ultime puissant (niveau 6, 3 rangs)
- Chaque sort a un cooldown
- Les sorts consomment du mana (généralement)`,

  // Practice Instructions
  `## Objectif

Comprendre les compétences de votre champion et les utiliser.

## Étapes

1. Lancez une partie d'entraînement avec un champion
2. Lisez la description du passif (survolez l'icône)
3. Montez niveau 3 et débloquez Q, W et E
4. Testez chaque sort sur les mannequins
5. Atteignez le niveau 6 et débloquez R
6. Observez les cooldowns après utilisation

## Critère de réussite

Vous connaissez les 5 compétences de votre champion et savez les utiliser.`,

  // Questions
  [
    createQuestion(
      "Combien de compétences possède chaque champion ?",
      "3 compétences",
      "4 compétences",
      "5 compétences (passif + 4 sorts)",
      "6 compétences",
      'c',
      "Chaque champion a 1 passif + 4 sorts actifs (Q, W, E, R)."
    ),
    createQuestion(
      "Qu'est-ce que le passif d'un champion ?",
      "Un sort très puissant",
      "Une capacité permanente toujours active",
      "Le sort R",
      "Un objet spécial",
      'b',
      "Le passif est une capacité qui fonctionne automatiquement sans activation."
    ),
    createQuestion(
      "À quel niveau débloque-t-on l'ultime (R) ?",
      "Niveau 1",
      "Niveau 3",
      "Niveau 6",
      "Niveau 10",
      'c',
      "L'ultime se débloque au niveau 6."
    ),
    createQuestion(
      "Jusqu'à quel rang peut-on améliorer Q, W et E ?",
      "Rang 3",
      "Rang 5",
      "Rang 6",
      "Rang 10",
      'b',
      "Les sorts de base peuvent être améliorés jusqu'au rang 5."
    ),
    createQuestion(
      "Combien de rangs possède l'ultime (R) ?",
      "1 rang",
      "3 rangs",
      "5 rangs",
      "6 rangs",
      'b',
      "L'ultime a 3 rangs, améliorables aux niveaux 6, 11 et 16."
    ),
    createQuestion(
      "Qu'est-ce qu'un skillshot ?",
      "Un sort qui touche automatiquement",
      "Un sort qu'il faut viser",
      "Un sort sans cooldown",
      "Un sort gratuit",
      'b',
      "Un skillshot doit être visé et peut être esquivé."
    ),
    createQuestion(
      "Qu'est-ce que le cooldown d'un sort ?",
      "Ses dégâts",
      "Son temps de recharge",
      "Son coût en mana",
      "Sa portée",
      'b',
      "Le cooldown est le temps d'attente avant de pouvoir relancer le sort."
    ),
    createQuestion(
      "Qu'est-ce qu'un sort 'point and click' ?",
      "Un sort à viser",
      "Un sort qui touche automatiquement sa cible",
      "Un sort de zone",
      "Un sort qui cible le sol",
      'b',
      "Point and click = vous cliquez sur l'ennemi et le sort le touche automatiquement."
    ),
    createQuestion(
      "Les sorts consomment généralement quoi ?",
      "De l'or",
      "Du mana",
      "De l'expérience",
      "Des PV",
      'b',
      "La plupart des sorts coûtent du mana pour être lancés."
    ),
    createQuestion(
      "Quel sort est généralement le plus puissant ?",
      "Q",
      "W",
      "E",
      "R (l'ultime)",
      'd',
      "L'ultime (R) est le sort le plus impactant de chaque champion."
    ),
  ]
);
