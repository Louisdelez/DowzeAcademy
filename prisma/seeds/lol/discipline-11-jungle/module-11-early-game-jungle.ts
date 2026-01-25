import { createModule, createQuestion } from '../utils';

export const module11EarlyGameJungle = createModule(
  'Early game jungle',
  'early-game-jungle',
  'Les 10 premières minutes',
  11,
  // Theory Content
  `## L'Early Game en Jungle

Les **10 premières minutes** sont cruciales pour un jungler. Vos décisions early définissent souvent le reste de la partie.

## Les premières secondes

Préparation :
- Analysez les **comps** et matchups
- Décidez de votre **starting buff**
- Regardez les laners pour **leash** info ennemie
- Planifiez votre **route** initiale

## Le premier clear (1:30 - 3:15)

Objectifs du premier clear :
- Farm les camps **efficacement**
- Atteindre niveau **3** ou plus
- Être à l'heure pour le **Scuttle** (3:30)
- Repérer les opportunités de **gank**

## Le Scuttle Crab fight

À 3:30 :
- Les Scuttles spawn dans la **rivière**
- Souvent le premier **contest** entre junglers
- Préparez-vous à **fight** ou à **concéder**
- La vision du Scuttle est précieuse

## Les premiers ganks

Timing early :
- Gank dès niveau **3** si opportunité
- Les ganks early font **snowball** les lanes
- Flash forcé = **succès**
- Ne pas **forcer** si pas d'opportunité

## Décisions early

Questions à se poser :
- Ma lane est-elle **gankable** ?
- Où est le jungler **ennemi** ?
- Puis-je **l'affronter** si je le croise ?
- Y a-t-il un **objectif** bientôt ?`,

  // Practice Instructions
  `## Objectif

Maîtriser les premières minutes en tant que jungler.

## Étapes

1. Planifiez votre route avant le spawn des camps
2. Faites un clear efficace jusqu'au Scuttle
3. Décidez si vous pouvez fight pour le Scuttle
4. Cherchez une opportunité de gank level 3
5. Adaptez selon ce que vous observez

## Critère de réussite

Vous finissez votre premier clear sans mourir et impactez une lane avant 5 minutes.`,

  // Questions
  [
    createQuestion(
      "Pourquoi l'early game est important en jungle ?",
      "Pas important",
      "Les décisions early définissent le reste de la partie",
      "Seulement le late compte",
      "Pour le farm uniquement",
      'b',
      "L'early game jungle a un impact majeur sur la partie."
    ),
    createQuestion(
      "À quel moment spawn le Scuttle Crab ?",
      "1:30",
      "3:30",
      "5:00",
      "10:00",
      'b',
      "Les Scuttles spawn à 3:30."
    ),
    createQuestion(
      "Quel niveau minimum pour ganker efficacement ?",
      "1",
      "3",
      "6",
      "11",
      'b',
      "Niveau 3 donne accès à tous vos sorts de base."
    ),
    createQuestion(
      "Que faire si le Scuttle est contesté et vous êtes plus faible ?",
      "Fight quand même",
      "Concéder et aller ailleurs",
      "AFK",
      "Attendre",
      'b',
      "Si vous êtes plus faible, concédez plutôt que de mourir."
    ),
    createQuestion(
      "Observer le leash ennemi sert à ?",
      "Rien",
      "Savoir où le jungler ennemi a commencé",
      "Pour le fun",
      "Dire bonjour",
      'b',
      "Le leash indique le starting buff de l'ennemi."
    ),
    createQuestion(
      "Un Flash forcé en early est-il un bon gank ?",
      "Non, c'est un échec",
      "Oui, Flash est très précieux",
      "Ça dépend du champion",
      "Seulement si kill",
      'b',
      "Forcer le Flash est un succès, il ne l'aura plus."
    ),
    createQuestion(
      "Faut-il forcer les ganks s'il n'y a pas d'opportunité ?",
      "Oui, toujours",
      "Non, farm et attendez",
      "Seulement en ranked",
      "Toujours forcer",
      'b',
      "Forcer sans opportunité = perte de temps et risque."
    ),
    createQuestion(
      "Que vérifier avant un gank early ?",
      "Rien",
      "Si la lane est gankable et où est l'ennemi",
      "Les skins ennemis",
      "L'heure réelle",
      'b',
      "Vérifiez l'état de la lane et la position ennemie."
    ),
    createQuestion(
      "Le premier objectif contestable est ?",
      "Baron",
      "Le Scuttle Crab à 3:30",
      "Dragon",
      "Herald",
      'b',
      "Le Scuttle à 3:30 est souvent le premier contest."
    ),
    createQuestion(
      "Quand le Dragon spawn-t-il ?",
      "3:30",
      "5:00",
      "10:00",
      "1:30",
      'b',
      "Le premier Dragon spawn à 5:00."
    ),
  ]
);
