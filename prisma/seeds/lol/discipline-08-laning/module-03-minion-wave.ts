import { createModule, createQuestion } from '../utils';

export const module03MinionWave = createModule(
  'Composition des vagues de sbires',
  'minion-wave',
  'Types de sbires et timing des spawns',
  3,
  // Theory Content
  `## Les vagues de sbires

Comprendre les vagues de sbires est essentiel pour bien **gérer sa lane**. Chaque vague a une composition spécifique.

## Composition d'une vague

Vague standard :
- **3 sbires mêlée** : Devant, plus de PV
- **3 sbires caster** : Derrière, moins de PV
- **1 sbire canon** : Toutes les 3 vagues

## Timing des spawns

Quand arrivent les vagues :
- Première vague : **1:05** en lane
- Nouvelles vagues : toutes les **30 secondes**
- Canon : vagues 3, 6, 9... puis toutes les 2 après 25 min

## Valeur totale d'une vague

Or disponible :
- Vague normale : **105-125 or**
- Vague avec canon : **165-215 or**
- 6 vagues = environ **1 kill** en or

## Super sbires

Après inhibiteur détruit :
- Remplacent les sbires mêlée
- Beaucoup plus de **PV et dégâts**
- Difficiles à clear, poussent fort
- Réapparaissent jusqu'à respawn de l'inhibiteur

## Importance stratégique

Pourquoi c'est crucial :
- Savoir quand le **canon** arrive
- Planifier ses **backs** après un canon
- Comprendre la **pression** des vagues
- Gérer le **freeze** et le **push**`,

  // Practice Instructions
  `## Objectif

Connaître la composition et le timing des vagues de sbires.

## Étapes

1. En Practice Tool, observez les vagues qui arrivent
2. Comptez les sbires : 3 mêlée + 3 casters
3. Notez quand le canon arrive (vague 3, 6, 9...)
4. Calculez l'or total d'une vague avec canon
5. Détruisez un inhibiteur et observez les super sbires

## Critère de réussite

Vous pouvez prédire quand le prochain canon arrive et connaissez la valeur d'une vague.`,

  // Questions
  [
    createQuestion(
      "Combien de sbires mêlée dans une vague standard ?",
      "2",
      "3",
      "4",
      "6",
      'b',
      "Une vague standard contient 3 sbires mêlée."
    ),
    createQuestion(
      "Combien de sbires caster dans une vague ?",
      "2",
      "3",
      "4",
      "5",
      'b',
      "Une vague contient 3 sbires caster."
    ),
    createQuestion(
      "À quelle fréquence spawn un canon en début de partie ?",
      "Chaque vague",
      "Toutes les 2 vagues",
      "Toutes les 3 vagues",
      "Toutes les 5 vagues",
      'c',
      "Un canon apparaît toutes les 3 vagues avant 25 minutes."
    ),
    createQuestion(
      "Quand la première vague arrive-t-elle en lane ?",
      "0:30",
      "1:05",
      "1:30",
      "2:00",
      'b',
      "La première vague arrive en lane vers 1:05."
    ),
    createQuestion(
      "Toutes les combien de temps spawn une nouvelle vague ?",
      "15 secondes",
      "30 secondes",
      "45 secondes",
      "60 secondes",
      'b',
      "Une nouvelle vague apparaît toutes les 30 secondes."
    ),
    createQuestion(
      "Combien vaut approximativement une vague avec canon ?",
      "100 or",
      "165-215 or",
      "300 or",
      "500 or",
      'b',
      "Une vague avec canon vaut entre 165 et 215 or."
    ),
    createQuestion(
      "Quand apparaissent les super sbires ?",
      "À 20 minutes",
      "Après destruction d'un inhibiteur",
      "Après un Baron",
      "En ranked seulement",
      'b',
      "Les super sbires spawn quand un inhibiteur ennemi est détruit."
    ),
    createQuestion(
      "6 vagues équivalent à peu près à combien en or ?",
      "100 or",
      "300 or",
      "1 kill",
      "5 kills",
      'c',
      "6 vagues bien farmées valent environ autant qu'un kill."
    ),
    createQuestion(
      "Où se positionnent les sbires caster dans la vague ?",
      "Devant",
      "Derrière les mêlée",
      "Au milieu",
      "Aléatoirement",
      'b',
      "Les casters se positionnent derrière les sbires mêlée."
    ),
    createQuestion(
      "Les super sbires ont quoi de spécial ?",
      "Ils sont invisibles",
      "Plus de PV et de dégâts",
      "Ils soignent",
      "Ils sont plus lents",
      'b',
      "Les super sbires sont bien plus résistants et font plus de dégâts."
    ),
  ]
);
