import { createModule, createQuestion } from '../utils';

export const module10DisengageReset = createModule(
  'Disengage et reset',
  'disengage-reset',
  "Apprendre à se replier à temps et à réengager dans de meilleures conditions",
  10,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le disengage ?

Le **disengage** est l'art de **se retirer** d'un combat mal engagé ou désavantageux. Savoir quand ne pas combattre est aussi important que savoir combattre. Un bon disengage peut sauver un combat perdu.

## Reconnaître quand disengage

Signes qu'il faut se retirer :
- Vous êtes en **infériorité numérique** (4v5, 3v5)
- Vos **cooldowns clés** sont utilisés mais pas les leurs
- Votre **carry principal** est mort
- L'ennemi a un **avantage positionnel** (meilleur terrain)
- Le combat tourne mal malgré un bon start

## Outils de disengage

Champions et capacités qui aident à fuir :
- **Janna R** : Repousse tous les ennemis + heal
- **Gragas R** : Déplace les ennemis
- **Braum R** : Slow de zone massive
- **Thresh lanterne** : Extrait un allié
- **Tahm Kench W** : Avale et déplace un allié

## Le concept de "reset"

Un **reset** est quand vous vous repliez pour :
1. Récupérer des **cooldowns**
2. Attendre que vos alliés **respawn**
3. Refaire votre **vie/mana** (heal, base)
4. Repositionner pour un meilleur **angle**

Puis vous réengagez dans de meilleures conditions.

## Comment exécuter un disengage

Étapes du disengage :
1. **Reconnaître** que le combat est mal engagé
2. **Communiquer** : Ping danger/reculer
3. **Utiliser les CC** défensivement pour couvrir la retraite
4. **Ne pas regarder en arrière** - fuir en groupe
5. **Ne pas sacrifier** quelqu'un inutilement

## Erreurs de disengage courantes

- **Trop tard** : Réaliser qu'il faut fuir quand tout le monde est mort
- **Pas ensemble** : Certains fuient, d'autres restent combattre
- **Le retour suicidaire** : Revenir pour "sauver" un allié condamné
- **Panique** : Utiliser Flash/ulti inutilement
- **Ignorer les pings** : Un allié demande le repli mais personne ne suit`,

  // Practice Instructions
  `## Objectif

Apprendre à reconnaître quand se replier et à exécuter un disengage propre.

## Étapes

1. Jouez un champion avec du disengage (Janna, Gragas, ou n'importe quel champion)
2. Avant chaque combat, identifiez votre condition de disengage (ex: "si l'ADC meurt, on part")
3. Pendant le combat, surveillez les signes de défaite (infériorité numérique, cooldowns)
4. Ping "danger" ou "reculer" quand vous voulez disengage
5. Si vous avez du CC, utilisez-le pour couvrir la retraite de l'équipe
6. Après un disengage réussi, attendez vos cooldowns et réengagez

## Critère de réussite

Vous avez réussi à disengage d'au moins 2 combats mal engagés sans que toute l'équipe meure, permettant un reset et un potentiel réengage.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le disengage en teamfight ?",
      "Engager plus agressivement",
      "Se retirer d'un combat mal engagé ou désavantageux",
      "Ignorer le combat complètement",
      "Focus un seul ennemi",
      'b',
      "Le disengage est l'art de se replier à temps pour éviter un massacre."
    ),
    createQuestion(
      "Quel signe indique qu'il faut potentiellement disengage ?",
      "Votre équipe a plus de kills",
      "Vous êtes en infériorité numérique (4v5 ou pire)",
      "L'ennemi recule",
      "Vos cooldowns sont disponibles",
      'b',
      "L'infériorité numérique est un signal fort qu'il faut se replier."
    ),
    createQuestion(
      "Quelle capacité de Janna est excellente pour le disengage ?",
      "Son Q (tornado)",
      "Son R (Monsoon) qui repousse et heal",
      "Son W (slow)",
      "Son passif",
      'b',
      "L'ultime de Janna repousse tous les ennemis autour d'elle et heal les alliés, parfait pour le disengage."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'reset' après un disengage ?",
      "Redémarrer la partie",
      "Se replier pour récupérer cooldowns/vie puis réengager",
      "Mourir volontairement",
      "Ignorer l'objectif",
      'b',
      "Un reset permet de revenir avec plus de ressources (cooldowns, vie) pour retenter le combat."
    ),
    createQuestion(
      "Quelle est une erreur courante lors du disengage ?",
      "Fuir trop tôt",
      "Revenir pour 'sauver' un allié condamné et mourir aussi",
      "Communiquer le repli",
      "Utiliser ses CC défensivement",
      'b',
      "Le 'retour suicidaire' pour sauver quelqu'un de condamné mène souvent à une mort supplémentaire inutile."
    ),
    createQuestion(
      "Comment Thresh aide-t-il au disengage ?",
      "En engageant plus fort",
      "Avec sa lanterne qui peut extraire un allié de la mêlée",
      "En faisant beaucoup de dégâts",
      "En tankant tous les dégâts",
      'b',
      "La lanterne de Thresh permet de tirer un allié mal positionné hors du danger."
    ),
    createQuestion(
      "Comment communiquer un disengage à l'équipe ?",
      "Écrire un long message expliquant pourquoi",
      "Ping 'danger' ou 'reculer' vers l'arrière",
      "Ne pas communiquer et juste partir",
      "Ping 'On my way' vers l'ennemi",
      'b',
      "Les pings 'danger' et 'reculer' signalent clairement et rapidement l'intention de se replier."
    ),
    createQuestion(
      "Pourquoi est-il important de fuir 'ensemble' ?",
      "Pour partager l'expérience",
      "Pour ne pas abandonner des alliés qui meurent un par un",
      "Ce n'est pas important",
      "Pour farm les minions en chemin",
      'b',
      "Fuir en désordre permet à l'ennemi de tuer ceux qui restent un par un."
    ),
    createQuestion(
      "Après un disengage réussi, que devez-vous attendre avant de réengager ?",
      "Que l'ennemi parte",
      "Le retour de vos cooldowns et/ou des alliés morts",
      "Rien, réengagez immédiatement",
      "Que la partie se termine",
      'b',
      "Le reset permet de récupérer les cooldowns, la vie, et d'attendre les respawns avant de retenter."
    ),
    createQuestion(
      "Quelle est la différence entre un disengage 'trop tard' et un bon disengage ?",
      "Il n'y a pas de différence",
      "Un disengage trop tard arrive quand la majorité de l'équipe est déjà morte",
      "Un bon disengage fait plus de dégâts",
      "Un disengage trop tard est plus rapide",
      'b',
      "Un bon disengage est décidé tôt quand le combat tourne mal ; trop tard signifie que tout le monde est déjà mort."
    ),
  ]
);
