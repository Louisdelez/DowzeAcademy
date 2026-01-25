import { createModule, createQuestion } from '../utils';

export const module12ReactionTime = createModule(
  'Temps de réaction',
  'reaction-time',
  "Réagir rapidement aux actions ennemies",
  12,
  // Theory Content
  `## Le temps de réaction

Le **temps de réaction** est la rapidité avec laquelle vous répondez aux actions ennemies. Plus il est court, plus vous êtes efficace.

## Pourquoi c'est important

Impact sur le jeu :
- **Esquiver** les skill shots
- **Flash** les CC mortels
- **Répondre** aux engages ennemis
- **Counter** les combos ennemis

## Temps de réaction moyen

Quelques chiffres :
- Humain moyen : **200-250ms**
- Bon joueur : **150-200ms**
- Très bon : **100-150ms**
- Difficile d'aller en dessous de **100ms**

## Améliorer son temps de réaction

Comment progresser :
- **Pratiquer** régulièrement
- Être bien **reposé** et concentré
- Réduire les **distractions**
- Utiliser des outils de **test** de réaction
- La **prédiction** aide à compenser

## La prédiction vs réaction

Stratégie importante :
- **Réaction** : Voir puis répondre
- **Prédiction** : Anticiper puis agir
- Prédire permet de "**tricher**" sur le temps
- Observer les **patterns** ennemis aide

## Facteurs externes

Ce qui affecte la réaction :
- **Fatigue** : Réactions plus lentes
- **Tilt** : Moins de concentration
- **Ping** : Délai réseau ajouté
- **FPS** : Fluidité visuelle`,

  // Practice Instructions
  `## Objectif

Améliorer votre temps de réaction et apprendre à prédire.

## Étapes

1. Testez votre temps de réaction (humanbenchmark.com)
2. En partie, essayez de prédire les skill shots ennemis
3. Observez les patterns : quand l'ennemi lance ses sorts
4. Pratiquez Flash sur les CC importants
5. Jouez reposé et sans distractions

## Critère de réussite

Vous réagissez aux skill shots importants et flashez les CC critiques.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le temps de réaction ?",
      "Le temps de chargement",
      "La rapidité à répondre aux stimuli",
      "Le temps de partie",
      "Le cooldown",
      'b',
      "Le temps de réaction mesure la vitesse de réponse à un événement."
    ),
    createQuestion(
      "Quel est le temps de réaction humain moyen ?",
      "50ms",
      "200-250ms",
      "500ms",
      "1 seconde",
      'b',
      "Le temps de réaction moyen est d'environ 200-250ms."
    ),
    createQuestion(
      "La prédiction aide car ?",
      "Elle ne sert à rien",
      "Elle permet d'anticiper et de réagir plus vite",
      "Elle ralentit le jeu",
      "Elle est interdite",
      'b',
      "Prédire permet de commencer à réagir avant même l'action."
    ),
    createQuestion(
      "La fatigue affecte-t-elle le temps de réaction ?",
      "Non",
      "Oui, elle le ralentit",
      "Elle l'accélère",
      "Aucun effet",
      'b',
      "La fatigue ralentit significativement les réactions."
    ),
    createQuestion(
      "Où tester son temps de réaction ?",
      "Nulle part",
      "Sur des sites comme humanbenchmark.com",
      "Dans LoL",
      "En dormant",
      'b',
      "Des sites web permettent de mesurer son temps de réaction."
    ),
    createQuestion(
      "Un ping élevé affecte-t-il les réactions ?",
      "Non",
      "Oui, il ajoute du délai",
      "Il améliore les réactions",
      "Seulement les sorts",
      'b',
      "Le ping ajoute un délai entre votre action et son exécution."
    ),
    createQuestion(
      "Comment améliorer sa réaction sans talent naturel ?",
      "Impossible",
      "En pratiquant et en apprenant à prédire",
      "Avec des objets",
      "En changeant de champion",
      'b',
      "La pratique et la prédiction compensent un temps de réaction moyen."
    ),
    createQuestion(
      "Observer les patterns ennemis aide à ?",
      "Rien",
      "Prédire leurs actions",
      "Les rendre plus forts",
      "Perdre",
      'b',
      "Observer les patterns permet de mieux anticiper les actions."
    ),
    createQuestion(
      "Le tilt affecte-t-il les réactions ?",
      "Non",
      "Oui, il réduit la concentration",
      "Il améliore le focus",
      "Seulement en ranked",
      'b',
      "Le tilt diminue la concentration et donc les réactions."
    ),
    createQuestion(
      "Flash sur une CC importante requiert ?",
      "De la chance",
      "Bonne réaction ou prédiction",
      "Un ping de 0",
      "Un objectif",
      'b',
      "Flasher une CC demande soit une bonne réaction soit de l'anticipation."
    ),
  ]
);
