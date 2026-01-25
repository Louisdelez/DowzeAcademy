import { createModule, createQuestion } from '../utils';

export const module13LaneMatchups = createModule(
  'Matchups de lane',
  'lane-matchups',
  'Comprendre les affrontements favorables/défavorables',
  13,
  // Theory Content
  `## Les matchups de lane

Un **matchup** est la confrontation entre votre champion et celui de l'adversaire. Certains sont **favorables**, d'autres **défavorables**.

## Types de matchups

Trois catégories :
- **Favorable** : Vous avez l'avantage naturellement
- **Équilibré** : 50/50, dépend du skill
- **Défavorable** : L'ennemi a l'avantage naturellement

## Facteurs d'un matchup

Ce qui détermine un matchup :
- **Range** : Portée des attaques/sorts
- **Sustain** : Capacité à se soigner
- **Burst** : Capacité à tuer rapidement
- **Mobilité** : Dashes et mouvements
- **CC** : Contrôles de foule

## Jouer un matchup favorable

Quand vous avez l'avantage :
- **Tradez** souvent et punissez les erreurs
- **Zoner** l'ennemi de la vague
- Ne devenez pas **overconfident**
- Prenez le contrôle de la lane

## Jouer un matchup défavorable

Quand vous êtes désavantagé :
- **Farm** en sécurité
- Ne prenez pas de **trades** inutiles
- Attendez les **power spikes**
- Demandez l'aide du **jungler**
- Cherchez des **opportunités** de roam

## Apprendre les matchups

Comment progresser :
- Jouez beaucoup le même champion
- Notez contre qui c'est **facile/difficile**
- Consultez des **guides** de matchup
- L'expérience est le meilleur professeur`,

  // Practice Instructions
  `## Objectif

Comprendre comment adapter son jeu selon le matchup.

## Étapes

1. Avant la partie, recherchez votre matchup (op.gg, u.gg)
2. Identifiez si c'est favorable, équilibré ou défavorable
3. Adaptez votre agressivité selon le matchup
4. Notez vos observations après la partie
5. Construisez votre connaissance des matchups au fil du temps

## Critère de réussite

Vous savez identifier un matchup favorable/défavorable et adapter votre jeu en conséquence.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un matchup ?",
      "Un bug",
      "La confrontation entre deux champions",
      "Un objectif",
      "Un type de ward",
      'b',
      "Un matchup est la confrontation entre votre champion et l'adversaire."
    ),
    createQuestion(
      "Qu'est-ce qu'un matchup favorable ?",
      "Quand vous perdez",
      "Quand vous avez l'avantage naturellement",
      "Quand c'est 50/50",
      "Ça n'existe pas",
      'b',
      "Favorable = votre champion a l'avantage sur l'ennemi."
    ),
    createQuestion(
      "Quel facteur influence les matchups ?",
      "La couleur du champion",
      "Range, sustain, burst, mobilité, CC",
      "Seulement l'AD",
      "Rien",
      'b',
      "Range, sustain, burst, mobilité et CC définissent les matchups."
    ),
    createQuestion(
      "Que faire dans un matchup favorable ?",
      "Jouer passif",
      "Trader souvent et punir les erreurs",
      "AFK",
      "Ignorer l'ennemi",
      'b',
      "Avec l'avantage, tradez et punissez les erreurs ennemies."
    ),
    createQuestion(
      "Que faire dans un matchup défavorable ?",
      "All-in constamment",
      "Farm safe et éviter les trades inutiles",
      "Quitter la partie",
      "Nourrir l'ennemi",
      'b',
      "En désavantage, farm safe et attendez vos power spikes."
    ),
    createQuestion(
      "Où trouver des informations sur les matchups ?",
      "Nulle part",
      "Sur des sites comme op.gg, u.gg, guides",
      "Dans le client uniquement",
      "En demandant à l'ennemi",
      'b',
      "Les sites de stats et les guides offrent des infos sur les matchups."
    ),
    createQuestion(
      "Un champion ranged vs mêlée est généralement ?",
      "Équilibré",
      "Favorable pour le ranged en early",
      "Favorable pour le mêlée",
      "Impossible",
      'b',
      "Le ranged a souvent l'avantage en early contre un mêlée."
    ),
    createQuestion(
      "Comment apprendre les matchups ?",
      "Lire un livre",
      "Jouer beaucoup et noter ses observations",
      "Regarder des films",
      "C'est impossible",
      'b',
      "L'expérience et les notes personnelles sont les meilleurs moyens."
    ),
    createQuestion(
      "Qu'est-ce que le sustain ?",
      "Les dégâts",
      "La capacité à se soigner/régénérer",
      "La mobilité",
      "Le CC",
      'b',
      "Le sustain est la capacité à récupérer des PV."
    ),
    createQuestion(
      "Dans un matchup difficile, qui appeler ?",
      "Personne",
      "Le jungler pour un gank",
      "L'ennemi",
      "Surrender",
      'b',
      "Le jungler peut aider à équilibrer un matchup difficile."
    ),
  ]
);
