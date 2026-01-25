import { createModule, createQuestion } from '../utils';

export const module09JungleCamps = createModule(
  'Camps de la jungle',
  'jungle-camps',
  'Loups, raptors, golems, gromp et les buffs',
  9,
  // Theory Content
  `## Vue d'ensemble des camps

La jungle contient **6 types de camps** de chaque côté de la carte. Chaque camp donne de l'or et de l'XP au joueur qui le tue.

## Les buffs (camps importants)

Les deux camps les plus importants :
- **Buff Bleu** (Blue Sentinel) : Grande créature bleue
  - Donne régénération de mana/énergie
  - Réduction des cooldowns
  - Dure 2 minutes
- **Buff Rouge** (Red Brambleback) : Créature rouge épineuse
  - Dégâts brûlants sur les attaques
  - Ralentissement des ennemis touchés
  - Dure 2 minutes

## Les camps standards

Les quatre autres camps :
- **Loups** (Wolves) : 1 grand loup + 2 petits
- **Raptors** : 1 grand raptor + 5 petits (multi-cibles)
- **Krugs** (Golems) : Se divisent en créatures plus petites
- **Gromp** : Gros crapaud seul (single-target)

## Respawn des camps

Les camps réapparaissent après un certain temps :
- Camps normaux : **2 minutes** après avoir été tués
- Buffs (Bleu/Rouge) : **5 minutes** de respawn
- Timer visible sur la mini-carte après avoir tué le camp

## Récapitulatif

- 6 camps par côté de jungle
- Buff bleu = mana/cooldown, Buff rouge = dégâts/slow
- Camps normaux : loups, raptors, krugs, gromp
- Respawn : 2 min (normaux), 5 min (buffs)
- Chaque camp donne or + XP`,

  // Practice Instructions
  `## Objectif

Identifier et localiser tous les camps de jungle.

## Étapes

1. Lancez une partie d'entraînement avec Smite
2. Allez tuer le buff bleu (grosse créature bleue)
3. Notez le buff obtenu (icône sous votre barre de vie)
4. Tuez le buff rouge et observez l'effet sur vos attaques
5. Explorez et tuez chaque camp : loups, raptors, krugs, gromp
6. Notez le temps de respawn des camps

## Critère de réussite

Vous connaissez l'emplacement de tous les camps et les effets des buffs bleu et rouge.`,

  // Questions
  [
    createQuestion(
      "Combien de types de camps existe-t-il par côté de jungle ?",
      "4 camps",
      "5 camps",
      "6 camps",
      "8 camps",
      'c',
      "Il y a 6 types de camps : bleu, rouge, loups, raptors, krugs, gromp."
    ),
    createQuestion(
      "Que donne le buff bleu ?",
      "Dégâts supplémentaires",
      "Régénération de mana et réduction des cooldowns",
      "Plus de vitesse de déplacement",
      "Plus de PV",
      'b',
      "Le buff bleu augmente la régénération de mana et réduit les temps de recharge."
    ),
    createQuestion(
      "Que donne le buff rouge ?",
      "Plus de mana",
      "Dégâts brûlants et ralentissement",
      "Invisibilité",
      "Plus d'armure",
      'b',
      "Le buff rouge ajoute des dégâts de brûlure et ralentit les ennemis touchés."
    ),
    createQuestion(
      "Combien de temps dure un buff ?",
      "1 minute",
      "2 minutes",
      "3 minutes",
      "5 minutes",
      'b',
      "Les buffs bleu et rouge durent 2 minutes."
    ),
    createQuestion(
      "Quel camp se divise quand on le tue ?",
      "Loups",
      "Raptors",
      "Krugs",
      "Gromp",
      'c',
      "Les Krugs (golems) se divisent en créatures plus petites."
    ),
    createQuestion(
      "Quel camp est composé d'un seul monstre ?",
      "Loups",
      "Raptors",
      "Krugs",
      "Gromp",
      'd',
      "Le Gromp est un gros crapaud seul, contrairement aux autres camps multi-cibles."
    ),
    createQuestion(
      "Quel est le temps de respawn des buffs ?",
      "2 minutes",
      "3 minutes",
      "5 minutes",
      "10 minutes",
      'c',
      "Les buffs bleu et rouge réapparaissent 5 minutes après avoir été tués."
    ),
    createQuestion(
      "Quel est le temps de respawn des camps normaux ?",
      "1 minute",
      "2 minutes",
      "3 minutes",
      "5 minutes",
      'b',
      "Les camps standards (loups, raptors, krugs, gromp) respawn après 2 minutes."
    ),
    createQuestion(
      "Les Raptors, c'est quoi ?",
      "Des loups ailés",
      "Des oiseaux (1 grand + 5 petits)",
      "Des crapauds",
      "Des golems volants",
      'b',
      "Les Raptors sont un camp d'oiseaux avec un grand et cinq petits."
    ),
    createQuestion(
      "Pourquoi le jungler prend-il les buffs en priorité ?",
      "Ils sont plus faciles à tuer",
      "Les buffs améliorent significativement ses performances",
      "C'est obligatoire",
      "Ils donnent moins d'or",
      'b',
      "Les buffs donnent des avantages importants pour clear la jungle et ganker."
    ),
  ]
);
