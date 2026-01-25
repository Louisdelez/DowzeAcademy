import { createModule, createQuestion } from '../utils';

export const module12MidGameJungle = createModule(
  'Mid game jungle',
  'mid-game-jungle',
  "Transition et objectifs (10-25 min)",
  12,
  // Theory Content
  `## Le Mid Game en Jungle

Le **mid game** (10-25 minutes) est une période de **transition** où les objectifs et les teamfights deviennent plus importants.

## Changements du mid game

Ce qui évolue :
- Les tourelles **extérieures** tombent
- Les joueurs commencent à **grouper**
- Les **Dragons** deviennent critiques
- Le **Herald** est disponible puis Baron

## Priorités mid game

Ce sur quoi se concentrer :
- Contrôler les **Dragons** (vers le Soul)
- Utiliser le **Herald** pour les tourelles
- Participer aux **skirmishes**
- Maintenir une **avance de farm**

## Grouper vs farmer

Équilibre difficile :
- Ne pas **abandonner** la jungle
- Être présent pour les **fights**
- **Camps** entre les actions
- Ne pas laisser l'ennemi **prendre les objectifs**

## Le Rift Herald mid game

Utilisation optimale :
- Spawn à **14:00**, despawn à **19:45**
- Utilisez-le sur une tourelle **contestée**
- Ou pour ouvrir la **base** ennemie
- Ne le gardez pas trop **longtemps**

## Setup pour les objectifs

Préparer Dragon/Baron :
- **Wardez** la zone 1 minute avant
- **Clear** les wards ennemies
- Poussez les **vagues** latérales
- Regroupez avec l'**équipe**`,

  // Practice Instructions
  `## Objectif

Bien gérer la transition vers le mid game en jungle.

## Étapes

1. Continuez à farm entre les actions
2. Priorisez les Dragons pour le Soul
3. Utilisez le Herald efficacement
4. Participez aux fights quand nécessaire
5. Préparez les objectifs avant de les prendre

## Critère de réussite

Vous maintenez un bon farm tout en participant aux objectifs et fights importants.`,

  // Questions
  [
    createQuestion(
      "Quand commence le mid game environ ?",
      "5 minutes",
      "10-25 minutes",
      "30 minutes",
      "1 minute",
      'b',
      "Le mid game va généralement de 10 à 25 minutes."
    ),
    createQuestion(
      "Que devient plus important en mid game ?",
      "Le farm uniquement",
      "Les objectifs et teamfights",
      "La lane",
      "Rien",
      'b',
      "Les objectifs et les fights groupés gagnent en importance."
    ),
    createQuestion(
      "Pourquoi les Dragons sont importants en mid game ?",
      "Ils ne le sont pas",
      "Pour progresser vers le Dragon Soul",
      "Pour l'or",
      "Pour le XP",
      'b',
      "Accumuler des Dragons mène au Dragon Soul puissant."
    ),
    createQuestion(
      "Quand utiliser le Rift Herald ?",
      "Le garder indéfiniment",
      "Sur une tourelle qu'on veut prendre",
      "Jamais",
      "Au Baron",
      'b',
      "Utilisez Herald sur une tourelle contestée ou la base."
    ),
    createQuestion(
      "Faut-il arrêter de farmer en mid game ?",
      "Oui complètement",
      "Non, farm entre les actions",
      "Seulement les buffs",
      "Le farm n'existe plus",
      'b',
      "Continuez à farm les camps entre les objectifs et fights."
    ),
    createQuestion(
      "Comment préparer un objectif ?",
      "Y aller directement",
      "Warder, clear les wards, push les vagues",
      "Attendre",
      "Ping spam",
      'b',
      "Préparez avec vision et pression de vague."
    ),
    createQuestion(
      "Le Herald despawn à quelle heure ?",
      "25:00",
      "19:45",
      "20:00",
      "14:00",
      'b',
      "Le Herald despawn à 19:45, remplacé par Baron."
    ),
    createQuestion(
      "Garder le Herald trop longtemps est mauvais car ?",
      "Il devient plus fort",
      "Il despawn et vous le perdez",
      "Il vous attaque",
      "Rien",
      'b',
      "Le Herald peut despawn si vous ne l'utilisez pas."
    ),
    createQuestion(
      "Les skirmishes sont quoi ?",
      "Des objectifs",
      "Des petits fights (2v2, 3v3)",
      "Des camps",
      "Des tourelles",
      'b',
      "Les skirmishes sont de petits combats entre quelques joueurs."
    ),
    createQuestion(
      "Pourquoi participer aux fights mid game ?",
      "Pas nécessaire",
      "Pour aider l'équipe et sécuriser des avantages",
      "Seulement pour les kills",
      "Pour mourir",
      'b',
      "Votre présence peut changer l'issue des combats."
    ),
  ]
);
