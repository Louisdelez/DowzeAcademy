import { createModule, createQuestion } from '../utils';

export const module02JungleCamps = createModule(
  'Camps de jungle',
  'jungle-camps',
  'Différents monstres et leurs valeurs',
  2,
  // Theory Content
  `## Les camps de jungle

La jungle contient plusieurs **camps** de monstres avec des caractéristiques et valeurs différentes.

## Camps côté bleu

Camps de votre côté bleu :
- **Blue Sentinel** (Gromp) : Donne le buff bleu (mana, CDR)
- **Gromp** : Grenouille géante, bon or
- **Wolves** : Loups, camp rapide

## Camps côté rouge

Camps de votre côté rouge :
- **Red Brambleback** : Donne le buff rouge (slow, true damage)
- **Raptors** : Oiseaux, plusieurs petits
- **Krugs** : Golems, se divisent en plus petits

## Buffs de jungle

Les buffs importants :
- **Buff Bleu** : Régénération de mana, réduction de cooldown
- **Buff Rouge** : Slow sur autos, dégâts vrais au fil du temps
- Durée : **2 minutes**
- Transférable au kill

## Respawn des camps

Timing des réapparitions :
- Camps normaux : **2:15** (135 secondes)
- Buffs (bleu/rouge) : **5:00** (300 secondes)
- Premier spawn : **1:30**

## Valeur des camps

Ordre d'efficacité :
- **Krugs** : Meilleur or et XP
- **Raptors** : Bon or, rapide
- **Gromp** : Bon XP et sustain
- **Wolves** : Rapide mais moins rentable

## Les Scuttle Crabs

Dans la rivière :
- Spawn à **3:30**
- Donnent **vision** et **mouvement** dans la zone
- Ne vous attaquent pas (neutres)
- Bon or et XP`,

  // Practice Instructions
  `## Objectif

Connaître les différents camps et leurs caractéristiques.

## Étapes

1. Allez en Practice Tool en tant que jungler
2. Visitez chaque camp et tuez-les
3. Notez les différences d'or et d'XP
4. Observez les buffs bleu et rouge
5. Trouvez les Scuttle Crabs dans la rivière

## Critère de réussite

Vous connaissez l'emplacement et la valeur de chaque camp de jungle.`,

  // Questions
  [
    createQuestion(
      "Quel camp donne le buff bleu ?",
      "Red Brambleback",
      "Blue Sentinel",
      "Gromp",
      "Wolves",
      'b',
      "Le Blue Sentinel donne le buff bleu."
    ),
    createQuestion(
      "Que donne le buff rouge ?",
      "Mana et CDR",
      "Slow sur autos et dégâts vrais",
      "Vitesse de mouvement",
      "Or supplémentaire",
      'b',
      "Le buff rouge donne un slow et des dégâts vrais."
    ),
    createQuestion(
      "Combien de temps dure un buff ?",
      "1 minute",
      "2 minutes",
      "5 minutes",
      "Illimité",
      'b',
      "Les buffs durent 2 minutes."
    ),
    createQuestion(
      "Quel camp donne le plus d'or et d'XP ?",
      "Wolves",
      "Krugs",
      "Gromp",
      "Blue",
      'b',
      "Les Krugs donnent le plus d'or et d'XP."
    ),
    createQuestion(
      "À quel moment spawn le premier camp ?",
      "1:00",
      "1:30",
      "2:00",
      "3:00",
      'b',
      "Les camps spawn à 1:30."
    ),
    createQuestion(
      "Quel est le respawn des buffs (bleu/rouge) ?",
      "2:15",
      "5:00",
      "3:00",
      "6:00",
      'b',
      "Les buffs réapparaissent après 5 minutes."
    ),
    createQuestion(
      "Où se trouvent les Scuttle Crabs ?",
      "Dans la base",
      "Dans la rivière",
      "Près des buffs",
      "Au Baron",
      'b',
      "Les Scuttle Crabs sont dans la rivière."
    ),
    createQuestion(
      "Les Scuttle Crabs donnent quoi de spécial ?",
      "Un buff",
      "Vision et zone de mouvement",
      "Un shield",
      "Du mana",
      'b',
      "Les Scuttles créent une zone de vision et de vitesse."
    ),
    createQuestion(
      "Les Raptors sont quoi ?",
      "Des loups",
      "Des oiseaux",
      "Des golems",
      "Une grenouille",
      'b',
      "Les Raptors sont un groupe d'oiseaux."
    ),
    createQuestion(
      "Le buff est-il transférable ?",
      "Non",
      "Oui, au kill du porteur",
      "Seulement le bleu",
      "Seulement le rouge",
      'b',
      "Tuer le porteur d'un buff vous le transfère."
    ),
  ]
);
