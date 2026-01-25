import { createModule, createQuestion } from '../utils';

export const module07AdcFarming = createModule(
  "Focus farm pour l'ADC",
  'adc-farming',
  "La priorité au farming pour atteindre les pics de puissance",
  7,
  // Theory Content (5+ slides)
  `## Le farm : la ressource principale de l'ADC

Pour un ADC, le **farm** (last-hitting des sbires) est la priorité absolue. Contrairement à d'autres rôles qui peuvent roamer ou aider la jungle, l'ADC doit **maximiser son CS** (Creep Score) pour :

- Atteindre ses **pics de puissance** (power spikes)
- Acheter ses **objets critiques** rapidement
- **Outscale** les ennemis en late game

Un ADC avec un bon farm sera toujours plus utile qu'un ADC avec des kills mais peu de CS.

## Les benchmarks de farm

Voici les objectifs de CS à atteindre :

**Objectifs par minute** :
- Parfait : 10 CS/min (difficilement atteignable)
- Excellent : 8-9 CS/min
- Bon : 7-8 CS/min
- Acceptable : 6-7 CS/min
- Faible : <6 CS/min

**Objectifs par timing** :
- 10 minutes : 70-80 CS
- 15 minutes : 120-130 CS
- 20 minutes : 160-180 CS

## La technique du last-hit

Le **last-hit** est l'art de donner le dernier coup :

**Principes de base** :
- Attendez que le sbire soit **bas en vie**
- Frappez au **bon moment** (animation d'attaque)
- Attention aux dégâts de vos **sbires**
- Pratiquez le timing de **chaque champion**

**Erreurs courantes** :
- Attaquer trop tôt et manquer le CS
- Oublier les sbires en se concentrant sur les trades
- Utiliser les sorts inutilement sur les sbires

## Farm sous tourelle

Farmer sous tourelle requiert une technique spécifique :

**Sbires de mêlée** :
- 2 tirs de tourelle + 1 auto-attaque

**Sbires de distance** :
- 1 auto-attaque + 1 tir de tourelle + 1 auto-attaque
- OU 2 tirs de tourelle (si vous avez assez d'AD)

Avec les objets, ces calculs changent - adaptez-vous à votre damage.

## Récapitulatif

- Le **farm est prioritaire** pour l'ADC
- Visez **7-8 CS/min** minimum
- Maîtrisez le **last-hit** (dernier coup)
- Apprenez le **farm sous tourelle**
- Un bon farm > des kills risqués`,

  // Practice Instructions
  `## Objectif

Améliorer votre CS en pratiquant le last-hit en partie d'entraînement.

## Étapes

1. Lancez une partie d'entraînement avec Ashe ou Miss Fortune
2. Allez en bot lane et essayez de last-hit TOUS les sbires
3. N'utilisez PAS vos compétences, uniquement les auto-attaques
4. Notez votre CS à 10 minutes
5. Recommencez jusqu'à atteindre 70+ CS à 10 minutes

## Critère de réussite

Vous avez atteint 70 CS ou plus à 10 minutes en utilisant uniquement les auto-attaques.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi le farm est-il la priorité de l'ADC ?",
      "Pour pousser les lanes rapidement",
      "Pour acheter des objets et atteindre les pics de puissance",
      "Pour aider le jungler",
      "Pour impressionner les coéquipiers",
      'b',
      "Le farm permet d'accumuler l'or nécessaire pour les objets qui font la force de l'ADC."
    ),
    createQuestion(
      "Quel est un bon objectif de CS par minute ?",
      "3-4 CS/min",
      "5-6 CS/min",
      "7-8 CS/min",
      "12-13 CS/min",
      'c',
      "7-8 CS par minute est un bon objectif réaliste pour un ADC."
    ),
    createQuestion(
      "Combien de CS devriez-vous avoir à 10 minutes idéalement ?",
      "30-40 CS",
      "50-60 CS",
      "70-80 CS",
      "100-110 CS",
      'c',
      "À 10 minutes, viser 70-80 CS est un excellent objectif."
    ),
    createQuestion(
      "Qu'est-ce que le 'last-hit' ?",
      "Frapper le premier",
      "Donner le dernier coup pour tuer le sbire",
      "Attaquer le champion ennemi",
      "Détruire la tourelle",
      'b',
      "Le last-hit consiste à donner le dernier coup aux sbires pour obtenir l'or."
    ),
    createQuestion(
      "Comment farmer un sbire de mêlée sous tourelle ?",
      "1 tir de tourelle + 1 auto",
      "2 tirs de tourelle + 1 auto-attaque",
      "3 tirs de tourelle",
      "Juste des auto-attaques",
      'b',
      "Les sbires de mêlée nécessitent 2 tirs de tourelle puis 1 auto-attaque."
    ),
    createQuestion(
      "Comment farmer un sbire de distance sous tourelle (en early) ?",
      "1 auto + 1 tir de tourelle + 1 auto",
      "2 tirs de tourelle + 1 auto",
      "3 auto-attaques",
      "1 tir de tourelle seulement",
      'a',
      "Les sbires de distance en early : 1 auto + 1 tir tourelle + 1 auto."
    ),
    createQuestion(
      "Quelle erreur commune les ADC font-ils avec le farm ?",
      "Farmer trop",
      "Attaquer trop tôt et manquer le CS",
      "Utiliser la tourelle",
      "Rester sous tourelle",
      'b',
      "Attaquer trop tôt fait manquer le last-hit car le sbire survit."
    ),
    createQuestion(
      "Qu'est-ce qui est plus important : un kill risqué ou du farm stable ?",
      "Le kill risqué pour le score",
      "Le farm stable et sûr",
      "Les deux sont équivalents",
      "Ni l'un ni l'autre",
      'b',
      "Un farm stable garantit une progression constante, les kills risqués peuvent vous mettre en retard."
    ),
    createQuestion(
      "Comment les objets affectent-ils le farm sous tourelle ?",
      "Ils n'ont aucun effet",
      "Ils changent le nombre de tirs/autos nécessaires",
      "Ils rendent le farm impossible",
      "Ils tuent les sbires automatiquement",
      'b',
      "Avec plus d'AD, le calcul des tirs de tourelle et auto-attaques change."
    ),
    createQuestion(
      "Que signifie 'CS' ?",
      "Champion Score",
      "Creep Score (nombre de sbires tués)",
      "Combat Statistics",
      "Critical Strike",
      'b',
      "CS signifie Creep Score, le nombre de sbires (et monstres neutres) que vous avez tués."
    ),
  ]
);
