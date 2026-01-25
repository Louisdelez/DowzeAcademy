import { createModule, createQuestion } from '../utils';

export const module07NumericalAdvantage = createModule(
  'Supériorité numérique',
  'numerical-advantage',
  "Comprendre et créer des situations de supériorité numérique (5v4, 4v3, etc.)",
  7,
  // Theory Content (5+ slides)
  `## Le pouvoir des nombres

En League of Legends, les combats à **nombre égal** sont des coinflips. En revanche, un **5v4** ou **4v3** donne un avantage énorme. Créer des situations de supériorité numérique est une compétence fondamentale.

## Comment créer une supériorité numérique

Plusieurs méthodes :
- **Pick** : Attraper un ennemi isolé avant le fight
- **Timing** : Engager quand quelqu'un est en base ou en retard
- **Splitpush** : Forcer un ennemi à répondre ailleurs
- **Téléport** : TP pour rejoindre un combat en cours
- **Vision** : Voir un ennemi mal positionné

## Le concept de "pick"

Un **pick** est l'élimination d'un ennemi isolé avant qu'un combat commence :
- Wardez les passages courants (jungle, river)
- Utilisez le CC pour immobiliser la cible
- Colapsez rapidement à plusieurs
- Ensuite, forcez un objectif en 5v4

## Jouer autour du split

Quand un allié splitpush :
- L'ennemi doit envoyer quelqu'un répondre
- Vous avez maintenant un **4v4 ou 4v3**
- Engagez si vous êtes en avantage
- Si l'ennemi ignore le split, votre allié prend des tourelles

## Identifier les fenêtres numériques

Surveillez constamment :
- **La minimap** : Quelqu'un est-il mort/en base ?
- **Les recalls** : L'ennemi qui back crée une fenêtre
- **Les rotations** : Quelqu'un est-il en retard ?
- **Les respawns** : Timers de mort adverses

## Erreurs à éviter

- **Engager 4v5** parce qu'on est impatient
- **Ne pas exploiter** un avantage numérique
- **S'éterniser** en attendant le perfect fight
- **Ignorer les timers** de mort et respawn`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier et exploiter les situations de supériorité numérique.

## Étapes

1. En partie, surveillez constamment la minimap et les icônes grises (morts)
2. Quand un ennemi meurt, annoncez : "Baron 5v4" ou "Dragon 5v4"
3. Quand un ennemi est en base, communiquez la fenêtre d'opportunité
4. Participez aux picks : wardez, colapsez sur les ennemis isolés
5. Après chaque combat, notez si vous avez engagé en supériorité ou infériorité
6. Évitez de combattre en 4v5 même si vous voulez être agressif

## Critère de réussite

Dans une partie, vous avez identifié au moins 3 situations de supériorité numérique et en avez exploité au moins 2 pour prendre un objectif ou gagner un combat.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la supériorité numérique est-elle importante ?",
      "Elle n'a pas vraiment d'impact",
      "Elle donne un avantage significatif en dégâts et CC disponibles",
      "Elle permet de farm plus vite",
      "Elle augmente l'or gagné",
      'b',
      "Plus de joueurs = plus de dégâts, plus de CC, et plus de chances de gagner le combat."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'pick' en League of Legends ?",
      "Choisir son champion en draft",
      "Éliminer un ennemi isolé avant le combat principal",
      "Prendre un objectif neutre",
      "Voler un camp jungle",
      'b',
      "Un pick est l'élimination d'un ennemi mal positionné, créant ensuite une supériorité numérique."
    ),
    createQuestion(
      "Comment le splitpush crée-t-il une supériorité numérique ?",
      "Il donne plus d'or à l'équipe",
      "Il force un ennemi à répondre, laissant son équipe en infériorité",
      "Il détruit automatiquement le Nexus",
      "Il ne crée pas de supériorité numérique",
      'b',
      "Quand un ennemi doit défendre contre le split, son équipe se retrouve en 4v5 ou 4v4."
    ),
    createQuestion(
      "Comment identifier qu'un ennemi est mort ou en base ?",
      "Demander dans le chat adverse",
      "Regarder les icônes grises sur la minimap et les timers de mort",
      "Deviner au hasard",
      "Ce n'est pas visible dans le jeu",
      'b',
      "Les icônes grises et les timers de mort au-dessus des portraits indiquent les joueurs morts ou absents."
    ),
    createQuestion(
      "Que devriez-vous faire immédiatement après avoir obtenu un pick ?",
      "Retourner farm des minions",
      "Forcer un objectif (Dragon, Baron, tourelle) en supériorité numérique",
      "Attendre que l'ennemi respawn",
      "Se disperser sur la carte",
      'b',
      "Un pick crée une fenêtre de temps limitée pour prendre un objectif avec l'avantage numérique."
    ),
    createQuestion(
      "Pourquoi engager 4v5 est-il généralement une mauvaise idée ?",
      "C'est toujours une bonne idée",
      "L'ennemi a un joueur de plus, donc plus de dégâts et CC",
      "Le jeu ne le permet pas",
      "Ça ne fait aucune différence",
      'b',
      "En 4v5, l'équipe en infériorité a moins de dégâts et de capacités, rendant la victoire très difficile."
    ),
    createQuestion(
      "Comment Teleport aide-t-il à créer une supériorité numérique ?",
      "Il donne de l'or bonus",
      "Il permet de rejoindre rapidement un combat et créer un surnombre",
      "Il tue automatiquement un ennemi",
      "Il ne change rien",
      'b',
      "Téléporter sur un ward pendant un combat transforme un 4v4 en 5v4 par surprise."
    ),
    createQuestion(
      "Que signifie 'colapser' sur un ennemi ?",
      "Détruire ses tourelles",
      "Converger à plusieurs joueurs sur sa position pour l'éliminer",
      "L'ignorer complètement",
      "Lui envoyer des pings",
      'b',
      "Colapser signifie que plusieurs joueurs convergent rapidement vers un ennemi isolé pour le tuer."
    ),
    createQuestion(
      "Quelle erreur consiste à trop attendre le 'fight parfait' ?",
      "L'impatience",
      "L'indécision ou paralysie par l'analyse",
      "L'agressivité excessive",
      "Le manque de vision",
      'b',
      "Attendre trop longtemps le perfect 5v4 peut faire perdre des opportunités de 5v4 'suffisamment bonnes'."
    ),
    createQuestion(
      "Quelle information devez-vous surveiller pour les fenêtres numériques ?",
      "Le nombre de minions tués",
      "La minimap, les recalls, les morts et les timers de respawn",
      "La météo du jeu",
      "Le score des équipes en esports",
      'b',
      "Ces informations révèlent quand l'ennemi n'est pas au complet et quand vous pouvez exploiter l'avantage."
    ),
  ]
);
