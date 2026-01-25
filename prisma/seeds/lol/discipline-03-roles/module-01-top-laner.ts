import { createModule, createQuestion } from '../utils';

export const module01TopLaner = createModule(
  'Top laner',
  'top-laner-role',
  'Champion solitaire spécialisé dans les duels isolés',
  1,
  // Theory Content
  `## Le rôle du Top Laner

Le **Top Laner** est le joueur qui occupe la voie du haut (Top Lane). C'est un rôle **solitaire** qui demande de savoir gérer les duels 1v1 et l'isolation.

## Caractéristiques du rôle

Le Top Laner se distingue par :
- Joue **seul** sur la lane la plus longue
- Spécialiste des **duels 1v1**
- Reçoit peu d'aide du jungler (lane isolée)
- Doit être **autonome** et savoir gérer sa lane

## Types de champions Top

On trouve principalement :
- **Tanks** : Champions résistants qui absorbent les dégâts
- **Bruisers** (combattants) : Mix de dégâts et résistance
- **Duelistes** : Spécialistes du 1v1 (Fiora, Jax)
- Quelques **mages** ou **tireurs** atypiques

## Responsabilités en jeu

Le Top Laner doit :
- **Farmer** efficacement en 1v1
- **Survivre** sans aide fréquente
- Utiliser la **Téléportation** pour aider l'équipe
- En late game : **split-push** ou rejoindre les teamfights

## Récapitulatif

- Top = lane isolée, jeu solitaire
- Spécialiste des duels 1v1
- Champions : tanks, bruisers, duelistes
- TP pour impact global sur la carte
- Split-push ou frontline en teamfight`,

  // Practice Instructions
  `## Objectif

Comprendre le rôle et les responsabilités du Top Laner.

## Étapes

1. Lancez une partie contre l'IA en choisissant la Top Lane
2. Prenez un champion simple (Garen recommandé)
3. Allez sur la Top Lane et farmez les sbires
4. Observez que vous êtes seul contre un adversaire
5. Notez la distance avec le reste de la carte
6. Essayez d'utiliser Téléportation pour aider une autre lane

## Critère de réussite

Vous comprenez l'isolation du Top Laner et la nature solitaire du rôle en 1v1.`,

  // Questions
  [
    createQuestion(
      "Où joue le Top Laner ?",
      "Au milieu de la carte",
      "En bas avec un partenaire",
      "Sur la voie du haut, seul",
      "Dans la jungle",
      'c',
      "Le Top Laner occupe seul la lane supérieure de la carte."
    ),
    createQuestion(
      "Pourquoi dit-on que la Top Lane est isolée ?",
      "Elle est dans une autre dimension",
      "Elle est loin des objectifs et l'aide arrive tard",
      "Personne ne peut y aller",
      "Elle n'a pas de tourelles",
      'b',
      "La Top Lane est éloignée des objectifs (Dragon) et des autres joueurs."
    ),
    createQuestion(
      "Quel type de combat le Top Laner pratique principalement ?",
      "Teamfights 5v5",
      "Duels 1v1",
      "Combats 2v2",
      "Aucun combat",
      'b',
      "Le Top Laner est spécialisé dans les affrontements en 1v1."
    ),
    createQuestion(
      "Quels sont les trois types de champions courants en Top ?",
      "Mages, ADC, Supports",
      "Tanks, Bruisers, Duelistes",
      "Assassins, Mages, Enchanters",
      "Junglers, Supports, ADC",
      'b',
      "Les Tanks, Bruisers et Duelistes sont les champions typiques de la Top Lane."
    ),
    createQuestion(
      "Qu'est-ce qu'un Bruiser ?",
      "Un champion fragile mais avec beaucoup de dégâts",
      "Un champion avec un mix de dégâts et de résistance",
      "Un champion qui soigne les alliés",
      "Un champion invisible",
      'b',
      "Les Bruisers combinent dégâts et durabilité pour les longs combats."
    ),
    createQuestion(
      "Quel sort d'invocateur est typique du Top Laner ?",
      "Smite",
      "Heal",
      "Téléportation",
      "Exhaust",
      'c',
      "La Téléportation permet au Top Laner isolé de rejoindre son équipe rapidement."
    ),
    createQuestion(
      "Qu'est-ce que le split-push ?",
      "Pousser une lane seul pendant que l'équipe occupe ailleurs",
      "Détruire le Nexus",
      "Aider le jungler",
      "Défendre la base",
      'a',
      "Le split-push consiste à exercer une pression sur une lane en solo."
    ),
    createQuestion(
      "Que doit faire le Top Laner s'il n'a pas d'aide ?",
      "Abandonner la lane",
      "Être autonome et savoir survivre seul",
      "Aller dans une autre lane",
      "Rester à la base",
      'b',
      "L'autonomie est essentielle car l'aide arrive rarement en Top Lane."
    ),
    createQuestion(
      "En teamfight, quel rôle joue souvent le Top Laner tank ?",
      "Damage dealer principal",
      "Frontline qui absorbe les dégâts",
      "Soigneur",
      "Scout invisible",
      'b',
      "Les Top Laners tanks servent de frontline pour protéger leurs carries."
    ),
    createQuestion(
      "Pourquoi la Top Lane est-elle considérée comme longue ?",
      "Elle a plus de tourelles",
      "La distance entre les tourelles est plus grande",
      "Elle traverse toute la carte",
      "Elle prend plus de temps à parcourir",
      'b',
      "La configuration de la carte rend la Top Lane plus longue et vulnérable aux ganks."
    ),
  ]
);
