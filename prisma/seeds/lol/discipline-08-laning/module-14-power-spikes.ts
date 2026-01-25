import { createModule, createQuestion } from '../utils';

export const module14PowerSpikes = createModule(
  'Power spikes',
  'power-spikes',
  'Pics de puissance à certains niveaux ou objets',
  14,
  // Theory Content
  `## Les power spikes

Un **power spike** est un moment où votre champion devient significativement plus puissant. Savoir les reconnaître change votre façon de jouer.

## Types de power spikes

Deux catégories principales :
- **Level spikes** : Certains niveaux clés
- **Item spikes** : Certains objets complétés

## Level spikes importants

Niveaux clés :
- **Niveau 2** : Avantage avec 2 sorts vs 1
- **Niveau 3** : Accès aux 3 sorts de base
- **Niveau 6** : Ultime débloquée
- **Niveau 11 et 16** : Ultime améliorée

## Item spikes majeurs

Objets qui changent le jeu :
- **Premier objet complet** : Gros boost de stats
- **Objet mythique** équivalent (avant 2024)
- **Infinity Edge** : Spike énorme pour ADC
- **Rabadon's** : Spike AP massif

## Exploiter les spikes

Comment profiter d'un spike :
- **All-in** quand vous atteignez un spike avant l'ennemi
- **Forcer** des fights avantageux
- Level 2 avant l'ennemi = **opportunité**
- Acheter un item complet avant l'ennemi = **avantage**

## Respecter les spikes ennemis

Quand l'ennemi spike :
- **Reculez** et jouez safe
- Ne prenez pas de **trades** défavorables
- Attendez votre propre **spike**
- Farmez et patientez`,

  // Practice Instructions
  `## Objectif

Reconnaître et exploiter les power spikes pour prendre l'avantage.

## Étapes

1. Identifiez les power spikes de votre champion (niveau 6, premier item)
2. Quand vous atteignez un spike, jouez plus agressif
3. Notez quand l'ennemi atteint ses spikes
4. Jouez plus safe quand l'ennemi spike avant vous
5. Pratiquez le level 2 rush en début de partie

## Critère de réussite

Vous exploitez le niveau 2 et le niveau 6 pour prendre des kills ou des trades favorables.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un power spike ?",
      "Un bug",
      "Un moment où le champion devient plus puissant",
      "Une mort",
      "Un objectif",
      'b',
      "Power spike = moment de pic de puissance."
    ),
    createQuestion(
      "Pourquoi le niveau 2 est-il un spike ?",
      "C'est pas un spike",
      "Vous avez 2 sorts vs 1 pour l'ennemi",
      "Vous gagnez la partie",
      "Vous obtenez un objet",
      'b',
      "Au niveau 2, avoir 2 sorts vs 1 donne un avantage."
    ),
    createQuestion(
      "Pourquoi le niveau 6 est-il important ?",
      "Fin de partie",
      "Déblocage de l'ultime",
      "Achat obligatoire",
      "Rien de spécial",
      'b',
      "Le niveau 6 débloque l'ultime, sort très puissant."
    ),
    createQuestion(
      "Qu'est-ce qu'un item spike ?",
      "Un niveau",
      "Un boost de puissance avec un objet complété",
      "Un sbire",
      "Un sort",
      'b',
      "Item spike = devenir plus fort en complétant un objet clé."
    ),
    createQuestion(
      "Que faire quand vous atteignez un spike ?",
      "Jouer passif",
      "Forcer des fights/trades avantageux",
      "AFK",
      "Back immédiatement",
      'b',
      "Avec un spike, forcez des actions pour exploiter l'avantage."
    ),
    createQuestion(
      "Que faire quand l'ennemi spike avant vous ?",
      "All-in",
      "Jouer safe et attendre votre spike",
      "Lui donner des kills",
      "Ignorer",
      'b',
      "Quand l'ennemi spike, reculez et attendez votre tour."
    ),
    createQuestion(
      "Infinity Edge est un spike pour qui ?",
      "Les mages",
      "Les ADC",
      "Les tanks",
      "Les supports",
      'b',
      "Infinity Edge donne un énorme spike aux ADC."
    ),
    createQuestion(
      "À quels niveaux l'ultime s'améliore-t-elle ?",
      "Niveau 7 et 8",
      "Niveau 11 et 16",
      "Niveau 18 seulement",
      "Elle ne s'améliore pas",
      'b',
      "L'ultime s'améliore aux niveaux 6, 11 et 16."
    ),
    createQuestion(
      "Le level 2 arrive après combien de sbires ?",
      "3 sbires",
      "La première vague + 1 sbire mêlée",
      "2 vagues complètes",
      "1 sbire",
      'b',
      "Level 2 = première vague (6) + 1 mêlée de la seconde."
    ),
    createQuestion(
      "Rabadon's Deathcap est un spike pour ?",
      "Les ADC",
      "Les mages (AP)",
      "Les tanks",
      "Les assassins AD",
      'b',
      "Rabadon's donne un énorme spike d'AP aux mages."
    ),
  ]
);
