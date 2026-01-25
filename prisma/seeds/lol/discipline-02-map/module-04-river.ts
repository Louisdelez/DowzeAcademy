import { createModule, createQuestion } from '../utils';

export const module04River = createModule(
  'La rivière',
  'river',
  'Le cours d\'eau central et ses objectifs majeurs',
  4,
  // Theory Content
  `## La rivière centrale

La **rivière** est le cours d'eau qui traverse la carte en **diagonale**, séparant les deux jungles. C'est une zone neutre très importante et constamment contestée.

## Position stratégique

La rivière connecte plusieurs zones clés :
- Elle relie la **Top Lane** à la **Bot Lane**
- Elle passe entre les deux jungles
- C'est le chemin le plus direct entre les objectifs
- Zone très fréquentée pour les rotations

## Les objectifs de la rivière

Deux objectifs majeurs se trouvent dans la rivière :
- **Le Dragon** (côté Bot) : buffs permanents pour l'équipe
- **Le Baron Nashor** (côté Top) : buff de push puissant
- **Le Héraut de la Faille** (avant 20 min, remplacé par Baron)

## Dangers de la rivière

La rivière est une zone risquée :
- **Pas de buisson** pour se cacher (sauf aux extrémités)
- Zone de **rencontre** fréquente avec l'ennemi
- **Peu de vision** naturelle
- Lieu de nombreux teamfights

## Récapitulatif

- La rivière traverse la carte en diagonale
- Contient Dragon (bot) et Baron/Héraut (top)
- Zone neutre très contestée
- Lieu de passage pour les rotations
- Nécessite de la vision pour être traversée en sécurité`,

  // Practice Instructions
  `## Objectif

Explorer la rivière et identifier ses objectifs majeurs.

## Étapes

1. Lancez une partie d'entraînement
2. Allez dans la rivière depuis la Mid Lane
3. Descendez vers le pit du Dragon (côté bot)
4. Remontez vers le pit du Baron/Héraut (côté top)
5. Notez les entrées de la rivière depuis chaque lane
6. Identifiez les zones sans buisson (danger)

## Critère de réussite

Vous pouvez localiser le Dragon et le Baron sur la carte et comprendre pourquoi la rivière est une zone contestée.`,

  // Questions
  [
    createQuestion(
      "Comment la rivière traverse-t-elle la carte ?",
      "Horizontalement",
      "Verticalement",
      "En diagonale",
      "En cercle",
      'c',
      "La rivière traverse la carte en diagonale, du coin top-gauche au coin bot-droit."
    ),
    createQuestion(
      "Quel objectif se trouve côté Bot de la rivière ?",
      "Le Baron Nashor",
      "Le Dragon",
      "Le Héraut",
      "Les Krugs",
      'b',
      "Le Dragon est situé dans la partie basse de la rivière, près de la Bot Lane."
    ),
    createQuestion(
      "Quel objectif se trouve côté Top de la rivière ?",
      "Le Dragon",
      "Le Baron Nashor / Héraut",
      "Le buff bleu",
      "Les Raptors",
      'b',
      "Le Baron Nashor (et le Héraut avant 20 min) se trouvent côté Top."
    ),
    createQuestion(
      "Pourquoi la rivière est-elle dangereuse ?",
      "Il y a des monstres agressifs",
      "C'est une zone de rencontre avec peu de couverture",
      "Elle inflige des dégâts",
      "On ne peut pas y utiliser de sorts",
      'b',
      "La rivière est ouverte, sans buissons au centre, et très fréquentée."
    ),
    createQuestion(
      "Qu'est-ce que le Héraut de la Faille ?",
      "Un monstre qui donne un buff de push",
      "Un type de Dragon",
      "Une tourelle spéciale",
      "Un champion jouable",
      'a',
      "Le Héraut est un objectif qui, une fois invoqué, aide à détruire les tourelles."
    ),
    createQuestion(
      "Quand le Baron Nashor remplace-t-il le Héraut ?",
      "À 10 minutes",
      "À 15 minutes",
      "À 20 minutes",
      "À 25 minutes",
      'c',
      "Le Baron Nashor apparaît à 20 minutes, remplaçant le Héraut."
    ),
    createQuestion(
      "Que sépare la rivière ?",
      "Les deux bases",
      "Les deux jungles",
      "Top et Mid",
      "Les tourelles",
      'b',
      "La rivière sépare la jungle bleue de la jungle rouge."
    ),
    createQuestion(
      "Pourquoi la vision est-elle importante dans la rivière ?",
      "Pour voir les poissons",
      "Pour détecter les mouvements ennemis vers les objectifs",
      "C'est obligatoire",
      "Pour gagner plus d'or",
      'b',
      "La vision permet d'anticiper les rotations ennemies et de sécuriser les objectifs."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'pit' dans LoL ?",
      "Une tourelle",
      "La fosse où se trouvent Dragon/Baron",
      "Un type de sbire",
      "Une zone de spawn",
      'b',
      "Le pit est la fosse circulaire où apparaissent le Dragon et le Baron."
    ),
    createQuestion(
      "Depuis quelle lane accède-t-on le plus facilement au Dragon ?",
      "Top Lane",
      "Mid Lane",
      "Bot Lane",
      "Toutes également",
      'c',
      "La Bot Lane est la plus proche du Dragon, d'où l'importance du duo bot."
    ),
  ]
);
