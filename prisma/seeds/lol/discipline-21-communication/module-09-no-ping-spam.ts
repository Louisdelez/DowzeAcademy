import { createModule, createQuestion } from '../utils';

export const module09NoPingSpam = createModule(
  'Pas de ping abusif',
  'no-ping-spam',
  'Éviter le spam toxique et les pings excessifs',
  9,
  // Theory Content (5+ slides)
  `## Le problème du ping spam

Le **ping spam** est l'utilisation excessive et répétée des pings, souvent après une erreur d'un coéquipier. C'est une forme de toxicité passive-agressive qui :
- **Irrite** le joueur ciblé
- **Distrait** toute l'équipe
- **Détériore** l'ambiance
- **N'aide en rien** à corriger l'erreur

## Pourquoi les joueurs spam ping ?

Les motivations toxiques :
- **Frustration** après une erreur alliée
- **Volonté de blâmer** plutôt que d'aider
- **Décharge émotionnelle** au lieu de focus
- **Passive-agressivité** sans mots
C'est une mauvaise gestion des émotions qui nuit à l'équipe.

## Les conséquences du spam

Le ping spam cause :
- **Tilt** du joueur ciblé qui jouera encore plus mal
- **Noise** qui masque les vrais pings importants
- **Tension** dans l'équipe qui se divise
- **Perte de confiance** entre les membres
- **Défaite** plus probable due au dysfonctionnement

## La règle des 2-3 pings

Pour éviter le spam :
- **Maximum 2-3 pings** pour attirer l'attention
- **Jamais de ping** sur un allié mort (il sait qu'il est mort)
- **Pas de ping 'missing'** sur la tête d'un coéquipier
- **Pas de ping rage** après un échec
- **Utilisez le mute ping** si quelqu'un vous spam

## Alternative constructive

Au lieu de spam ping :
- **Ne dites rien** et focus sur votre jeu
- **Proposez une solution** : "np, let's play safe"
- **Rappelez-vous** que tout le monde fait des erreurs
- **Concentrez-vous** sur ce que VOUS pouvez améliorer
- **Acceptez** que certaines parties sont perdues d'avance
Un environnement positif gagne plus de parties.`,

  // Practice Instructions
  `## Objectif

Apprendre à contrôler votre utilisation des pings et à éviter le spam toxique.

## Étapes

1. Lancez une partie normale ou classée
2. Fixez-vous la règle : maximum 3 pings consécutifs
3. Quand un coéquipier fait une erreur, ne pingez pas sur lui
4. Si vous sentez la frustration monter, respirez avant de ping
5. Si quelqu'un vous spam ping, utilisez /mute pings [nom]
6. Après la partie, évaluez si vous avez respecté la règle

## Critère de réussite

Vous n'avez jamais dépassé 3 pings consécutifs et n'avez pingé aucun coéquipier après une erreur pendant toute la partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le ping spam ?",
      "Utiliser les pings efficacement",
      "L'utilisation excessive et répétée des pings de manière toxique",
      "Ne jamais utiliser les pings",
      "Pinger les objectifs",
      'b',
      "Le ping spam est l'abus des pings souvent pour exprimer la frustration."
    ),
    createQuestion(
      "Quel est l'effet du ping spam sur l'équipe ?",
      "Il améliore la coordination",
      "Il irrite et distrait l'équipe, réduisant les performances",
      "Il n'a aucun effet",
      "Il motive les joueurs",
      'b',
      "Le spam crée une ambiance négative et déconcentre tout le monde."
    ),
    createQuestion(
      "Combien de pings suffisent pour attirer l'attention ?",
      "10 pings minimum",
      "2-3 pings maximum",
      "1 seul ping",
      "Autant que nécessaire",
      'b',
      "2-3 pings sont suffisants sans être excessifs."
    ),
    createQuestion(
      "Que faire quand un coéquipier meurt suite à une erreur ?",
      "Spam ping 'missing' sur lui",
      "Ne rien dire et se concentrer sur le jeu",
      "Écrire un message pour expliquer son erreur",
      "Rage quit",
      'b',
      "Inutile de souligner l'évidence, mieux vaut focus sur la suite."
    ),
    createQuestion(
      "Comment mute les pings d'un joueur spécifique ?",
      "Alt + Tab",
      "/mute pings [nom du joueur]",
      "Ctrl + P",
      "C'est impossible",
      'b',
      "La commande /mute pings permet de bloquer les pings d'un joueur."
    ),
    createQuestion(
      "Pourquoi les joueurs font-ils du ping spam ?",
      "Pour aider l'équipe",
      "Pour décharger leur frustration et blâmer",
      "Parce que c'est efficace",
      "Par accident",
      'b',
      "Le spam est souvent une mauvaise gestion émotionnelle plutôt qu'une aide."
    ),
    createQuestion(
      "Quel ping est toxique après la mort d'un allié ?",
      "Ping de danger sur un objectif",
      "Ping 'missing' sur le cadavre ou le joueur",
      "Ping 'on my way' vers lui",
      "Aucun ping n'est toxique",
      'b',
      "Pinger 'missing' sur quelqu'un qui vient de mourir est passif-agressif."
    ),
    createQuestion(
      "Quelle alternative au ping spam est constructive ?",
      "Écrire un message de blame plus long",
      "Se concentrer sur son propre jeu et proposer des solutions",
      "Quitter la partie",
      "Spam encore plus",
      'b',
      "Focus sur soi-même et être constructif aide plus que le blame."
    ),
    createQuestion(
      "Comment le spam affecte-t-il les vrais pings importants ?",
      "Il les rend plus visibles",
      "Il les noie et les rend moins efficaces",
      "Il n'a aucun effet",
      "Il les amplifie",
      'b',
      "Trop de pings inutiles empêche de remarquer les vrais signaux."
    ),
    createQuestion(
      "Que faire si vous sentez la frustration monter ?",
      "Spam ping immédiatement",
      "Respirer et ne pas réagir impulsivement",
      "Flame dans le chat",
      "Quitter la partie",
      'b',
      "Prendre une seconde pour respirer évite les réactions toxiques."
    ),
  ]
);
