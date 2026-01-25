import { createModule, createQuestion } from '../utils';

export const module19ItemChanges2024 = createModule(
  'Bouleversement 2024',
  'item-changes-2024',
  'Suppression des mythiques et nouveau système',
  19,
  // Theory Content
  `## La refonte des objets 2024

En saison 2024, Riot a effectué une **refonte majeure** du système d'objets, supprimant les objets mythiques.

## Fin des objets Mythiques

Changement principal :
- Plus de catégorie **Mythique** obligatoire
- Chaque objet est maintenant **indépendant**
- Plus de bonus mythique sur les légendaires
- Plus de liberté dans l'ordre des achats

## Nouveau système

Comment ça fonctionne maintenant :
- Tous les objets sont **égaux** en importance
- Pas de premier objet obligatoire
- Builds plus **flexibles** et situationnels
- Adaptation plus facile en cours de partie

## Impact sur les builds

Ce que ça change :
- On peut commencer par n'importe quel objet
- Les **situationnels** peuvent venir plus tôt
- Moins de builds "script" identiques
- Plus d'adaptation selon la partie

## Objets modifiés

De nombreux objets ont été :
- **Rééquilibrés** en stats et coûts
- **Fusionnés** ou **séparés**
- Certains ont changé de classe
- Nouveaux objets introduits

## Récapitulatif

- Plus de mythiques = plus de flexibilité
- Chaque objet est maintenant équivalent
- Builds plus adaptés à chaque partie
- Moins de "premier objet obligatoire"
- Consultez les guides actuels pour les builds optimaux`,

  // Practice Instructions
  `## Objectif

Comprendre le nouveau système d'objets sans mythiques.

## Étapes

1. Regardez les recommandations d'objets dans le client
2. Notez qu'il n'y a plus de catégorie "Mythique"
3. Expérimentez en changeant l'ordre de vos achats
4. Adaptez votre build selon le matchup
5. Consultez des sites comme u.gg pour les builds actuels

## Critère de réussite

Vous comprenez qu'il n'y a plus d'objet mythique obligatoire et que les builds sont flexibles.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qui a changé en saison 2024 ?",
      "Nouveaux champions",
      "Suppression des objets Mythiques",
      "Nouvelle carte",
      "Nouveaux sorts d'invocateur",
      'b',
      "Les objets Mythiques ont été supprimés en 2024."
    ),
    createQuestion(
      "Qu'étaient les objets Mythiques ?",
      "Des objets très faibles",
      "Une catégorie d'objets puissants avec un premier achat obligatoire",
      "Des objets pour supports",
      "Des objets de jungle",
      'b',
      "Les Mythiques étaient un premier objet obligatoire avec des bonus."
    ),
    createQuestion(
      "Quel est l'avantage de la suppression des Mythiques ?",
      "Moins d'objets",
      "Plus de flexibilité dans les builds",
      "Jeu plus simple",
      "Moins de choix",
      'b',
      "Sans Mythiques, les builds sont plus flexibles et situationnels."
    ),
    createQuestion(
      "Doit-on toujours acheter le même premier objet maintenant ?",
      "Oui, c'est obligatoire",
      "Non, on peut adapter selon la partie",
      "Seulement en ranked",
      "Seulement pour les ADC",
      'b',
      "L'ordre des achats est maintenant libre et adaptable."
    ),
    createQuestion(
      "Les builds sont-ils plus ou moins flexibles sans Mythiques ?",
      "Moins flexibles",
      "Plus flexibles",
      "Identiques",
      "Impossible de savoir",
      'b',
      "La suppression des Mythiques augmente la flexibilité."
    ),
    createQuestion(
      "Où trouver les builds optimaux actuels ?",
      "Nulle part",
      "Sur des sites comme u.gg, op.gg, Lolalytics",
      "Uniquement dans le client",
      "En devinant",
      'b',
      "Les sites de stats proposent les builds les plus efficaces."
    ),
    createQuestion(
      "Les objets situationnels peuvent-ils être achetés plus tôt maintenant ?",
      "Non, toujours en dernier",
      "Oui, plus de liberté d'ordre",
      "Seulement contre certains ennemis",
      "C'est interdit",
      'b',
      "Sans Mythique obligatoire, les situationnels viennent quand c'est utile."
    ),
    createQuestion(
      "Est-ce que tous les objets ont la même importance maintenant ?",
      "Non, certains sont meilleurs",
      "Oui, plus de hiérarchie Mythique/Légendaire",
      "Seulement les objets tank",
      "C'est pareil qu'avant",
      'b',
      "La distinction Mythique/Légendaire n'existe plus."
    ),
    createQuestion(
      "Faut-il adapter son build plus souvent maintenant ?",
      "Non, les builds sont fixes",
      "Oui, c'est plus situationnel",
      "Seulement en compétitif",
      "Jamais",
      'b',
      "La flexibilité encourage l'adaptation à chaque partie."
    ),
    createQuestion(
      "Le nouveau système est-il plus facile ou plus difficile ?",
      "Plus facile car moins de choix",
      "Plus difficile car plus de choix, mais plus rewarding",
      "Identique",
      "Impossible de répondre",
      'b',
      "Plus de choix signifie plus de décisions, mais plus de possibilités."
    ),
  ]
);
