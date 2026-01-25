import { createModule, createQuestion } from '../utils';

export const module07TeamfightingTop = createModule(
  'Teamfighter ou split-pusher ?',
  'teamfighting-top',
  'Choisir son style selon le champion et la partie',
  7,
  // Theory Content
  `## Le choix : Teamfight ou Split ?

En tant que top laner, vous devez choisir entre **teamfighter** et **split-pusher** selon votre champion et l'état de la partie.

## Champions teamfight

Ceux qui groupent :
- **Malphite** : Ultime engage massive
- **Ornn** : CC de zone et engage
- **Kennen** : Ultime teamfight
- **Sion** : Engage et disruption
- **Gnar** : Ultime transformé dévastateur

## Champions split-push

Ceux qui push seul :
- **Fiora** : Duel imbattable
- **Jax** : Scale fort en 1v1
- **Tryndamere** : Survit et push
- **Camille** : Mobile et forte en duel
- **Nasus** : Stack et prend tourelles

## Facteurs de décision

Ce qui influence le choix :
- Votre **champion** et ses forces
- La **composition** de votre équipe
- L'état de la **partie** (ahead, behind)
- Les **objectifs** à prendre

## Quand grouper

Moments pour teamfight :
- Votre équipe a besoin d'**engage**
- Un **objectif majeur** spawn (Baron, Dragon Soul)
- Vous êtes le seul **front line**
- Votre équipe est **ahead** et peut gagner les fights

## Quand split

Moments pour split-push :
- Vous **gagnez** tous les 1v1
- Votre équipe peut **tenir** sans vous
- Vous êtes **behind** et inutile en teamfight
- Il y a des **tourelles** à prendre`,

  // Practice Instructions
  `## Objectif

Apprendre à choisir entre teamfight et split-push selon la situation.

## Étapes

1. Identifiez si votre champion est plutôt teamfight ou split
2. Évaluez l'état de la partie
3. Communiquez votre intention à l'équipe
4. Si vous split, assurez la vision et vérifiez que l'équipe peut tenir
5. Si vous groupez, positionnez-vous pour votre rôle (engage, peel)

## Critère de réussite

Vous faites le bon choix selon votre champion et la situation et contribuez à la victoire.`,

  // Questions
  [
    createQuestion(
      "Malphite est plutôt teamfight ou split ?",
      "Split-push",
      "Teamfight (ultime engage)",
      "Les deux également",
      "Ni l'un ni l'autre",
      'b',
      "L'ultime de Malphite est faite pour les teamfights."
    ),
    createQuestion(
      "Fiora est plutôt teamfight ou split ?",
      "Teamfight",
      "Split-push (duel imbattable)",
      "Les deux également",
      "Ni l'un ni l'autre",
      'b',
      "Fiora excelle en 1v1 et split-push."
    ),
    createQuestion(
      "Quand grouper en tant que top ?",
      "Jamais",
      "Quand l'équipe a besoin d'engage ou pour les objectifs",
      "Toujours",
      "Seulement level 18",
      'b',
      "Groupez si votre engage ou présence est nécessaire."
    ),
    createQuestion(
      "Quand split-push ?",
      "Jamais",
      "Quand vous gagnez les 1v1 et l'équipe peut tenir",
      "Toujours",
      "Seulement en early game",
      'b',
      "Split quand vous dominez les duels et l'équipe tient 4v4."
    ),
    createQuestion(
      "Si vous êtes behind et inutile en fight, que faire ?",
      "Forcer les teamfights",
      "Split-push pour créer de la pression",
      "AFK",
      "Flame l'équipe",
      'b',
      "Si inutile en fight, le split peut créer de la valeur."
    ),
    createQuestion(
      "L'ultime de Kennen est faite pour ?",
      "Split-push",
      "Teamfight",
      "Farm",
      "Fuir",
      'b',
      "L'ultime de Kennen dévaste les teamfights groupés."
    ),
    createQuestion(
      "Nasus préfère généralement ?",
      "Teamfight",
      "Split-push (stack et tourelles)",
      "Jungler",
      "Supporter",
      'b',
      "Nasus stack et détruit les tourelles en split."
    ),
    createQuestion(
      "Si un objectif majeur spawn, que faire généralement ?",
      "Ignorer et split",
      "Grouper pour le contester",
      "Farm la jungle",
      "Rester en base",
      'b',
      "Les objectifs majeurs requièrent généralement de grouper."
    ),
    createQuestion(
      "Gnar est bon en teamfight car ?",
      "Ses autos",
      "Son ultime transformé avec CC de zone",
      "Son sustain",
      "Rien de spécial",
      'b',
      "Mega Gnar ultime peut stun toute une équipe."
    ),
    createQuestion(
      "Communiquer son intention aide car ?",
      "Ça ne sert à rien",
      "L'équipe peut s'adapter et ne pas perdre de fight 4v5",
      "Pour le style",
      "C'est obligatoire",
      'b',
      "La communication évite les désaccords et les 4v5 perdus."
    ),
  ]
);
