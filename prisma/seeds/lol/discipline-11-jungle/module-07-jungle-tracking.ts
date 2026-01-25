import { createModule, createQuestion } from '../utils';

export const module07JungleTracking = createModule(
  'Tracking du jungler ennemi',
  'jungle-tracking',
  'Savoir où est le jungler adverse',
  7,
  // Theory Content
  `## Tracking du Jungler Ennemi

**Tracker** le jungler ennemi signifie savoir où il est sur la carte même sans le voir. C'est une compétence essentielle.

## Pourquoi c'est crucial

Impact du tracking :
- **Éviter** les counter-ganks
- Savoir quand **invade** est safe
- **Protéger** vos laners
- **Contester** les objectifs

## Méthodes de tracking

Comment savoir où il est :
- **Vision** : Wards dans sa jungle
- **Déduction** : Où il a commencé, quel path il fait
- **Information des laners** : Ils le voient passer
- **Intuition** : Expérience de jungle

## Le leashing

Observer le leash (aide au premier buff) :
- Regardez quels laners arrivent en **retard** en lane
- Ça indique de quel **côté** l'ennemi a commencé
- Déduisez son **path** probable

## Timing des camps

Savoir quand les camps respawn :
- Si vous voyez un camp **down**, notez le temps
- Ajoutez **2:15** pour les camps normaux
- Ajoutez **5:00** pour les buffs
- Vous saurez quand l'ennemi y sera

## Le mirror tracking

Suivre le même path :
- Si vous savez où l'ennemi commence
- Vous pouvez **mirror** et être prêt à counter-gank
- Ou aller **opposite** pour éviter
- Adaptez selon votre force relative`,

  // Practice Instructions
  `## Objectif

Apprendre à tracker le jungler ennemi.

## Étapes

1. Au début, observez quel laner arrive tard (leash)
2. Déduisez le côté de départ du jungler ennemi
3. Anticipez son path probable
4. Placez des wards dans sa jungle
5. Alertez vos laners quand vous pensez qu'un gank arrive

## Critère de réussite

Vous prédisez correctement la position du jungler ennemi et évitez un counter-gank.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le tracking du jungler ?",
      "Le suivre physiquement",
      "Savoir où il est même sans le voir",
      "Le tuer",
      "Voler ses camps",
      'b',
      "Tracker = déduire la position du jungler ennemi."
    ),
    createQuestion(
      "Le leashing indique quoi ?",
      "Rien",
      "De quel côté le jungler ennemi a commencé",
      "Son champion",
      "Ses runes",
      'b',
      "Le leash montre quel buff l'ennemi a commencé."
    ),
    createQuestion(
      "Comment voir le leash ?",
      "Impossible",
      "Observer quels laners arrivent en retard en lane",
      "Demander au jungler",
      "Regarder le tab",
      'b',
      "Les laners en retard ont probablement leash."
    ),
    createQuestion(
      "Si un camp est pris, quand respawn-t-il ?",
      "1 minute",
      "2:15 (camps normaux)",
      "5 minutes",
      "10 minutes",
      'b',
      "Les camps normaux respawn après 2:15."
    ),
    createQuestion(
      "Pourquoi tracker le jungler ennemi ?",
      "Pas d'intérêt",
      "Éviter les counter-ganks et protéger l'équipe",
      "Pour le style",
      "C'est obligatoire",
      'b',
      "Le tracking permet de prendre de bonnes décisions."
    ),
    createQuestion(
      "Les wards deep servent à ?",
      "Rien",
      "Voir le jungler ennemi dans sa jungle",
      "Décorer",
      "Donner de l'or",
      'b',
      "Les deep wards révèlent le jungler ennemi."
    ),
    createQuestion(
      "Le mirror tracking consiste à ?",
      "Fuir",
      "Suivre le même path que l'ennemi",
      "Faire l'inverse",
      "AFK",
      'b',
      "Mirror = même chemin pour être prêt à intervenir."
    ),
    createQuestion(
      "Si le jungler ennemi est visible top, où aller ?",
      "Top",
      "Gank bot ou invade son côté bleu",
      "Nulle part",
      "En base",
      'b',
      "Profitez de savoir où il est pour agir ailleurs."
    ),
    createQuestion(
      "L'intuition de tracking vient d'où ?",
      "On naît avec",
      "De l'expérience de jungle",
      "D'un tutoriel",
      "De nulle part",
      'b',
      "L'expérience améliore le tracking intuitif."
    ),
    createQuestion(
      "Ping quand vous trackez l'ennemi aide car ?",
      "Ça ne sert à rien",
      "Vos laners savent s'ils sont en danger",
      "C'est obligatoire",
      "Pour énerver",
      'b',
      "Alerter vos laners les aide à jouer safe."
    ),
  ]
);
