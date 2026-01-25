import { createModule, createQuestion } from '../utils';

export const module04MidRoaming = createModule(
  "Roaming du mid",
  'mid-roaming',
  'Décaler vers bot ou top pour créer des avantages',
  4,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le roaming ?

Le **roaming** est l'action de quitter temporairement sa lane pour aller aider une autre lane ou son jungler. Pour un mid laner, c'est l'une des compétences les plus importantes pour influencer la partie.

Un bon roam peut :
- Obtenir des **kills** sur d'autres lanes
- Créer de l'**avance** pour vos coéquipiers
- Mettre **pression psychologique** sur l'équipe adverse

## Quand roamer ?

Les **bons moments** pour roamer :

1. **Après avoir push** : votre vague frappe la tour ennemie
2. **Après un back** : au lieu de retourner mid directement
3. **Quand l'ennemi est low** : sur une lane adjacente
4. **Avant un objectif** : pour setup le Dragon ou Herald
5. **Après un kill mid** : profitez du nombre avantageux

**Mauvais moments** : vague sous votre tour, pas de mana, sorts en cooldown.

## Roamer vers bot ou top ?

Le choix de la direction dépend de plusieurs facteurs :

**Roam bot** (plus courant) :
- 2 kills potentiels (ADC + Support)
- Contrôle du Dragon
- Setup pour le bot lane snowball

**Roam top** :
- Plus risqué (une seule cible)
- Peut aider un allié en difficulté
- Setup pour Rift Herald

**Règle générale** : roam là où il y a le plus d'opportunités.

## Les chemins de roam

Il existe plusieurs **chemins** pour roamer :

- **Par la rivière** : le plus direct mais aussi le plus wardé
- **Par la jungle alliée** : plus sûr mais plus long
- **Par la jungle ennemie** : risqué mais imprévisible
- **Derrière la tour** : dive potentiel avec le jungler

**Conseil** : Variez vos chemins pour rester imprévisible et vérifiez les wards ennemies.

## Récapitulatif

- Le **roaming** = quitter mid pour aider ailleurs
- Roamez **après avoir push** ou **après un back**
- **Bot** pour double kill et Dragon, **top** pour Herald
- Utilisez différents **chemins** pour surprendre
- Un bon roam crée des avantages, un mauvais vous met en retard
- Communiquez avec vos **pings** avant de roamer`,

  // Practice Instructions
  `## Objectif

Apprendre les bases du roaming en pratiquant les timings et les chemins.

## Étapes

1. Lancez une partie normale ou contre des bots
2. Choisissez un champion mobile (Talon, Ahri, ou Twisted Fate)
3. Jouez les 5 premières minutes normalement en mid
4. À partir du niveau 6, pratiquez le roam :
   - Poussez votre vague sous la tour ennemie
   - Vérifiez la minimap (où sont les ennemis ?)
   - Choisissez une direction (bot si push, top si opportunité)
   - Prenez un chemin (rivière ou jungle)
   - Essayez d'obtenir un kill ou une flash
5. Retournez mid et évaluez ce que vous avez perdu (CS, plaques)
6. Répétez 3 fois dans la partie

## Critère de réussite

Vous réussissez au moins un roam qui résulte en un kill, une assist, ou une summoner spell forcée, tout en perdant moins de 6 CS.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le 'roaming' pour un mid laner ?",
      "Rester sur sa lane",
      "Quitter sa lane pour aider une autre lane ou le jungler",
      "Farmer la jungle",
      "Recall au shop",
      'b',
      "Le roaming consiste à quitter temporairement mid pour créer des avantages ailleurs sur la carte."
    ),
    createQuestion(
      "Quel est le meilleur moment pour roamer ?",
      "Quand votre vague est sous votre tour",
      "Après avoir push votre vague sous la tour ennemie",
      "Quand vous n'avez plus de mana",
      "Quand vos sorts sont en cooldown",
      'b',
      "Après un push, l'adversaire doit farmer sous tour pendant que vous êtes libre de roamer."
    ),
    createQuestion(
      "Pourquoi roamer vers bot est-il souvent plus rentable que vers top ?",
      "La bot lane est plus proche",
      "Il y a 2 kills potentiels et cela aide pour le Dragon",
      "Les champions bot sont toujours plus faibles",
      "Il n'y a pas de différence",
      'b',
      "Bot lane a 2 cibles et permet de setup le Dragon, doublant les bénéfices potentiels."
    ),
    createQuestion(
      "Quel chemin de roam est le plus risqué ?",
      "Par la rivière",
      "Par la jungle alliée",
      "Par la jungle ennemie",
      "En suivant la lane",
      'c',
      "Passer par la jungle ennemie vous expose aux ennemis mais vous rend imprévisible."
    ),
    createQuestion(
      "Que devez-vous communiquer à votre équipe avant de roamer ?",
      "Rien, c'est une surprise",
      "Votre intention de roam avec des pings",
      "Votre build complet",
      "Votre historique de ranked",
      'b',
      "Pinguer permet à vos alliés de se préparer et de follow-up sur votre roam."
    ),
    createQuestion(
      "Un roam est considéré réussi même si vous n'obtenez pas de kill quand :",
      "Jamais, un roam sans kill est raté",
      "Vous forcez les summoner spells ennemis ou créez de la pression",
      "Vous perdez votre tour mid",
      "L'ennemi mid vous suit",
      'b',
      "Forcer un Flash ou Heal ennemi est un gain significatif qui facilitera les prochains roams."
    ),
    createQuestion(
      "Quand est-il mauvais de roamer ?",
      "Quand vous avez de l'avance",
      "Quand une grosse vague arrive sous votre tour",
      "Quand le jungler ennemi est visible ailleurs",
      "Après un kill",
      'b',
      "Perdre une grosse vague sous votre tour peut coûter plus que ce qu'un roam pourrait rapporter."
    ),
    createQuestion(
      "Quel type de champion mid est généralement meilleur pour roamer ?",
      "Les mages immobiles comme Xerath",
      "Les assassins mobiles comme Talon ou Katarina",
      "Les tanks",
      "Les supports",
      'b',
      "Les assassins avec de la mobilité peuvent roamer plus vite et plus souvent."
    ),
    createQuestion(
      "Après un roam bot réussi, quelle est souvent la suite logique ?",
      "Retourner mid immédiatement",
      "Faire le Dragon avec votre équipe",
      "Recall au spawn",
      "Aller top lane",
      'b',
      "Un roam bot réussi crée l'opportunité parfaite pour prendre le Dragon."
    ),
    createQuestion(
      "Si le mid ennemi vous suit dans votre roam, que devez-vous faire ?",
      "Annuler le roam et retourner mid",
      "Communiquer à vos alliés que c'est un 2v2/2v3 et adapter le play",
      "Ignorer l'ennemi",
      "AFK sous tour",
      'b',
      "Si l'ennemi suit, prévenez vos alliés pour qu'ils adaptent leur positionnement."
    ),
  ]
);
