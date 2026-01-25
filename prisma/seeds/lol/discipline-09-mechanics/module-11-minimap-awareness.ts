import { createModule, createQuestion } from '../utils';

export const module11MinimapAwareness = createModule(
  'Awareness de la minimap',
  'minimap-awareness',
  'Regarder régulièrement la carte',
  11,
  // Theory Content
  `## Awareness de la minimap

La **minimap** est votre meilleur outil d'information. La regarder régulièrement peut sauver des vies et créer des opportunités.

## Importance de la minimap

Ce qu'elle montre :
- Position des **alliés**
- Position des **ennemis** visibles
- État des **tourelles**
- Wards et **vision**
- **Objectifs** (dragon, baron, herald)

## À quelle fréquence regarder ?

Recommandations :
- Toutes les **3-5 secondes** idéalement
- Après chaque **CS** ou action
- Quand vous **marchez** vers un endroit
- Avant de **vous engager**

## Que chercher ?

Informations clés :
- Où est le **jungler ennemi** ?
- Quel lane a besoin d'**aide** ?
- Y a-t-il un **objectif** à prendre ?
- L'ennemi fait-il un **roam** ?

## Développer l'habitude

Comment s'améliorer :
- Se forcer à **regarder** régulièrement
- Utiliser un **métronome** mental
- Jouer des junglers (oblige à regarder)
- Agrandir la **taille de la minimap** dans les paramètres

## Réagir aux informations

Que faire avec l'info :
- **Ping** les mouvements ennemis
- **Adapter** votre position selon le danger
- **Aider** les lanes qui sont gankées
- **Reculer** si un objectif est contesté`,

  // Practice Instructions
  `## Objectif

Développer l'habitude de regarder la minimap régulièrement.

## Étapes

1. Agrandissez la minimap dans les paramètres
2. Forcez-vous à regarder après chaque CS
3. Comptez mentalement et regardez toutes les 5 secondes
4. Ping les informations importantes à votre équipe
5. Notez combien de ganks vous évitez grâce à la map

## Critère de réussite

Vous regardez la minimap naturellement et évitez les ganks grâce à cette habitude.`,

  // Questions
  [
    createQuestion(
      "Pourquoi la minimap est importante ?",
      "Pour décorer",
      "Pour avoir des informations sur toute la carte",
      "Pas important",
      "Seulement pour le jungler",
      'b',
      "La minimap donne des informations cruciales sur toute la map."
    ),
    createQuestion(
      "À quelle fréquence regarder la minimap idéalement ?",
      "Une fois par partie",
      "Toutes les 3-5 secondes",
      "Jamais",
      "Seulement au début",
      'b',
      "Regarder toutes les 3-5 secondes est recommandé."
    ),
    createQuestion(
      "Que peut-on voir sur la minimap ?",
      "Seulement son champion",
      "Alliés, ennemis visibles, tourelles, wards, objectifs",
      "Rien d'utile",
      "Le score",
      'b',
      "La minimap montre les positions, structures et objectifs."
    ),
    createQuestion(
      "Comment améliorer son map awareness ?",
      "Regarder moins",
      "Se forcer à regarder régulièrement",
      "Ignorer la map",
      "Jouer sans minimap",
      'b',
      "Se forcer à regarder régulièrement développe l'habitude."
    ),
    createQuestion(
      "Peut-on agrandir la minimap ?",
      "Non",
      "Oui, dans les paramètres",
      "Seulement en spectateur",
      "Avec un objet",
      'b',
      "La taille de la minimap est configurable dans les paramètres."
    ),
    createQuestion(
      "Que faire si on voit le jungler ennemi sur la map ?",
      "L'ignorer",
      "Adapter sa position et/ou ping l'équipe",
      "All-in l'ennemi",
      "Quitter la partie",
      'b',
      "Réagir en adaptant sa position ou en alertant l'équipe."
    ),
    createQuestion(
      "Jouer jungler aide l'awareness car ?",
      "Pas de raison",
      "On doit constamment regarder la map pour ganker",
      "C'est plus facile",
      "La map est plus grande",
      'b',
      "Le jungle oblige à scanner constamment la map pour les opportunités."
    ),
    createQuestion(
      "Quand regarder la map est particulièrement important ?",
      "Jamais",
      "Avant de s'engager ou de push",
      "Seulement en base",
      "Quand on est mort",
      'b',
      "Vérifier la map avant un engage évite les mauvaises surprises."
    ),
    createQuestion(
      "Les pings servent à ?",
      "Énerver les coéquipiers",
      "Communiquer les informations de la map",
      "Rien",
      "Gagner de l'or",
      'b',
      "Les pings partagent les informations importantes avec l'équipe."
    ),
    createQuestion(
      "Si un ennemi disparaît de la map (MIA), que faire ?",
      "Ignorer",
      "Jouer plus safe et éventuellement ping",
      "Push fort",
      "All-in",
      'b',
      "Un MIA = danger potentiel, jouer prudemment."
    ),
  ]
);
