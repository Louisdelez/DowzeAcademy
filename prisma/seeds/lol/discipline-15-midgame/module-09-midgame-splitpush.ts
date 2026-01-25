import { createModule, createQuestion } from '../utils';

export const module09MidgameSplitpush = createModule(
  'Split-push en mid-game',
  'midgame-splitpush',
  'Stratégies 4-1, 1-3-1',
  9,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le split-push ?

Le **split-push** est une stratégie où un ou deux joueurs poussent des lanes latérales séparément du groupe principal. L'objectif est de créer de la pression sur plusieurs points de la carte, forçant l'ennemi à faire des choix difficiles.

## Formations de split-push

Les principales formations sont :
- **4-1** : 4 joueurs groupés + 1 split-pusher
- **1-3-1** : 2 joueurs sur les lanes latérales + 3 au centre
- **1-4** : 1 joueur qui hold une lane + 4 qui push ailleurs

Le **4-1** est plus simple à exécuter, le **1-3-1** demande plus de coordination mais crée plus de pression.

## Champions adaptés au split-push

Les bons split-pushers ont généralement :
- **Forte capacité de duel** : Fiora, Jax, Tryndamere
- **Bonne mobilité/échappatoire** : Camille, Shen
- **Push rapide des vagues** : Yorick, Tryndamere
- **Capacité de rejoindre le groupe** : Shen (ulti), TP

Un split-pusher doit pouvoir 1v1 quiconque vient le défendre ou s'échapper si plusieurs ennemis viennent.

## Exécuter le split-push en mid-game

Pour un split-push efficace :
1. **Vision défensive** : wardez les chemins vers vous
2. **Vague pushée par le groupe principal** : pression des deux côtés
3. **Timing avec les objectifs** : splitez quand l'ennemi doit répondre
4. **Ne mourez pas** : reculez si plusieurs ennemis viennent
5. **Communiquez** : prévenez quand vous attirez la pression

Le but n'est pas de mourir pour une tourelle, mais de créer un dilemme.

## Récapitulatif

Le split-push est une stratégie macro puissante en mid-game :
- Formations 4-1 ou 1-3-1 selon votre équipe
- Nécessite des champions avec duel, mobilité et push
- La vision est cruciale pour la survie du split-pusher
- Coordonner avec le groupe principal pour maximiser la pression
- Objectif : créer des dilemmes, pas mourir pour des tourelles`,

  // Practice Instructions
  `## Objectif

Exécuter une stratégie de split-push en mid-game pour créer de la pression et forcer des rotations ennemies.

## Étapes

1. Identifiez si votre champion peut split-push (duel, mobilité, push)
2. Placez des wards défensives sur les chemins vers votre position
3. Push une lane latérale pendant que votre équipe groupe ailleurs
4. Observez la carte : si plusieurs ennemis viennent, reculez
5. Si un seul ennemi vient et que vous pouvez le battre, combattez
6. Communiquez avec l'équipe quand vous attirez la pression

## Critère de réussite

Vous avez attiré au moins 2 ennemis pendant que votre équipe prenait un objectif, ou vous avez détruit une tourelle en split-push.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le split-push ?",
      "Pousser toutes les lanes en même temps",
      "Pousser une lane séparé du groupe principal",
      "Détruire toutes les tourelles rapidement",
      "Grouper en 5 sur une lane",
      'b',
      "Le split-push consiste à créer de la pression sur une lane latérale pendant que le groupe est ailleurs."
    ),
    createQuestion(
      "Que signifie la formation '4-1' ?",
      "4 tourelles détruites, 1 en cours",
      "4 joueurs groupés + 1 split-pusher",
      "4 dragons + 1 baron",
      "4 kills + 1 mort",
      'b',
      "En 4-1, 4 joueurs restent ensemble pendant qu'1 joueur split-push une lane latérale."
    ),
    createQuestion(
      "Quelle qualité n'est PAS importante pour un split-pusher ?",
      "Forte capacité de duel",
      "Bonne mobilité",
      "Capacité de teamfight AOE",
      "Push rapide des vagues",
      'c',
      "Le teamfight AOE est utile pour le groupe, pas pour le split-pusher qui joue souvent seul."
    ),
    createQuestion(
      "Que devez-vous placer avant de split-push ?",
      "Des pièges",
      "Des wards défensives sur les chemins",
      "Des sbires supplémentaires",
      "Des tourelles",
      'b',
      "Les wards vous alertent quand les ennemis viennent vous arrêter."
    ),
    createQuestion(
      "Que faire si plusieurs ennemis viennent vous arrêter en split-push ?",
      "Les combattre tous",
      "Reculer et laisser votre équipe profiter",
      "Continuer à push",
      "Rappeler à la base",
      'b',
      "Si vous attirez plusieurs ennemis, votre équipe peut prendre un objectif ailleurs."
    ),
    createQuestion(
      "Quel est l'objectif principal du split-push ?",
      "Tuer le maximum d'ennemis",
      "Créer des dilemmes pour l'ennemi",
      "Détruire toutes les tourelles seul",
      "Éviter tous les combats",
      'b',
      "Le split-push force l'ennemi à choisir : défendre la tourelle ou contester un autre objectif."
    ),
    createQuestion(
      "Quelle formation de split-push est la plus simple à exécuter ?",
      "1-3-1",
      "4-1",
      "2-2-1",
      "5-0",
      'b',
      "Le 4-1 est plus simple car un seul joueur doit coordonner sa pression avec le groupe."
    ),
    createQuestion(
      "Pourquoi Shen est-il un bon split-pusher ?",
      "Il fait beaucoup de dégâts",
      "Son ulti lui permet de rejoindre le groupe instantanément",
      "Il est invisible",
      "Il peut détruire les tourelles très vite",
      'b',
      "L'ulti de Shen lui permet de split-push puis de téléporter sur un allié pour le teamfight."
    ),
    createQuestion(
      "Que doit faire le groupe principal pendant que quelqu'un split-push ?",
      "Attaquer la base ennemie",
      "Maintenir de la pression ailleurs ou menacer un objectif",
      "Rester sous leur tourelle",
      "Farm la jungle",
      'b',
      "Le groupe doit créer une menace pour que l'ennemi ne puisse pas simplement envoyer 5 joueurs sur le split-pusher."
    ),
    createQuestion(
      "Quelle erreur courante en split-push ?",
      "Placer trop de vision",
      "Mourir pour une tourelle au lieu de reculer",
      "Communiquer trop",
      "Push les vagues trop lentement",
      'b',
      "Mourir en split-push annule souvent l'avantage créé. Il faut savoir reculer."
    ),
  ]
);
