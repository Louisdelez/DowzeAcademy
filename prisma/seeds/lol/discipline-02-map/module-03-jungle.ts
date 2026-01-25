import { createModule, createQuestion } from '../utils';

export const module03Jungle = createModule(
  'La jungle',
  'jungle',
  'Les zones entre les lanes et leurs monstres neutres',
  3,
  // Theory Content
  `## Qu'est-ce que la jungle ?

La **jungle** désigne toutes les zones situées **entre les lanes**. C'est un terrain forestier rempli de **monstres neutres** qui donnent de l'or et de l'expérience quand ils sont tués.

## Structure de la jungle

La jungle est divisée en deux côtés symétriques :
- **Jungle bleue** (côté gauche de votre base)
- **Jungle rouge** (côté droit de votre base)
- Chaque côté contient les mêmes camps de monstres

## Les camps de jungle

La jungle contient plusieurs types de camps :
- **Buff bleu** (Grosse sentinelle) : régénération de mana
- **Buff rouge** (Brambleback) : dégâts bonus et slow
- **Loups** : camp standard
- **Raptors** (oiseaux) : camp multi-cibles
- **Krugs** (golems) : camp qui se divise
- **Gromp** (gros crapaud) : camp single-target

## Le rôle du jungler

Le **jungler** est le joueur spécialisé dans la jungle :
- Il farm les monstres neutres au lieu d'une lane
- Il possède le sort **Smite** pour tuer les monstres plus vite
- Il aide les lanes avec des **ganks** (attaques surprises)

## Récapitulatif

- La jungle = zones entre les lanes
- Divisée en côté bleu et côté rouge
- Contient des camps de monstres neutres
- Le jungler farm ces monstres
- Les buffs donnent des bonus temporaires`,

  // Practice Instructions
  `## Objectif

Explorer la jungle et identifier les différents camps de monstres.

## Étapes

1. Lancez une partie d'entraînement
2. Depuis la base, allez dans votre jungle (entre Top et Mid)
3. Localisez le buff bleu (grosse créature bleue)
4. Trouvez le buff rouge (créature rouge avec des épines)
5. Identifiez les camps : loups, raptors, krugs, gromp
6. Explorez la jungle ennemie pour voir la symétrie

## Critère de réussite

Vous pouvez localiser tous les camps de jungle sur la mini-carte et connaissez leurs noms.`,

  // Questions
  [
    createQuestion(
      "Où se trouve la jungle ?",
      "Au centre de la carte",
      "Entre les lanes",
      "Uniquement en haut",
      "Dans la rivière",
      'b',
      "La jungle occupe les espaces entre les trois lanes."
    ),
    createQuestion(
      "Qui est le joueur spécialisé dans la jungle ?",
      "Le Mid Laner",
      "Le Support",
      "Le Jungler",
      "L'ADC",
      'c',
      "Le Jungler est le rôle dédié au farm de la jungle et aux ganks."
    ),
    createQuestion(
      "Quel sort est indispensable pour le jungler ?",
      "Flash",
      "Ignite",
      "Smite (Châtiment)",
      "Téléportation",
      'c',
      "Smite permet de tuer les monstres rapidement et de sécuriser les objectifs."
    ),
    createQuestion(
      "Que donne le buff bleu ?",
      "Plus de dégâts",
      "Régénération de mana",
      "Plus de vitesse",
      "Plus d'armure",
      'b',
      "Le buff bleu augmente la régénération de mana/énergie."
    ),
    createQuestion(
      "Que donne le buff rouge ?",
      "Plus de mana",
      "Dégâts bonus et ralentissement",
      "Plus de PV",
      "Invisibilité",
      'b',
      "Le buff rouge ajoute des dégâts brûlants et un slow aux attaques."
    ),
    createQuestion(
      "Comment s'appellent les oiseaux de la jungle ?",
      "Krugs",
      "Loups",
      "Raptors",
      "Gromp",
      'c',
      "Les Raptors sont le camp de petits oiseaux avec un gros."
    ),
    createQuestion(
      "Quel camp se divise en plusieurs petits monstres ?",
      "Loups",
      "Gromp",
      "Raptors",
      "Krugs",
      'd',
      "Les Krugs (golems) se divisent en créatures plus petites quand tués."
    ),
    createQuestion(
      "Qu'est-ce qu'un gank ?",
      "Tuer un monstre de jungle",
      "Une attaque surprise sur une lane",
      "Détruire une tourelle",
      "Voler un buff",
      'b',
      "Un gank est une attaque surprise du jungler sur une lane ennemie."
    ),
    createQuestion(
      "La jungle est-elle symétrique ?",
      "Non, chaque côté est différent",
      "Oui, les deux côtés sont identiques",
      "Seulement en ranked",
      "Ça change à chaque partie",
      'b',
      "La jungle est symétrique : les mêmes camps existent des deux côtés."
    ),
    createQuestion(
      "Qu'est-ce que le Gromp ?",
      "Un petit oiseau",
      "Un gros crapaud",
      "Un loup alpha",
      "Un golem de pierre",
      'b',
      "Le Gromp est un gros crapaud, camp single-target de la jungle."
    ),
  ]
);
