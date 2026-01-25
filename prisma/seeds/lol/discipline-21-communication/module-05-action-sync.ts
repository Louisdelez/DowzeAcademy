import { createModule, createQuestion } from '../utils';

export const module05ActionSync = createModule(
  'Synchronisation des actions',
  'action-sync',
  'Coordonner les engagements et attendre que tous soient prêts',
  5,
  // Theory Content (5+ slides)
  `## L'importance de la synchronisation

Dans League of Legends, un **engage synchronisé** par 5 joueurs est bien plus puissant que 5 engages individuels. La synchronisation fait la différence entre un teamfight gagné et un feed gratuit. Même le meilleur engage du monde échoue si l'équipe ne suit pas.

## Vérifier que l'équipe est prête

Avant d'engager, vérifiez :
- **La position** : tout le monde est-il à portée de suivre ?
- **Les cooldowns** : les ultimes sont-ils disponibles ?
- **Le mana/HP** : quelqu'un est-il trop low ?
- **Les items** : quelqu'un a-t-il besoin de finir un item ?
- **La vision** : savons-nous où sont tous les ennemis ?

## Les signaux de synchronisation

Utilisez des signaux clairs :
- **Ping "Assist me"** sur votre position : "je vais engage"
- **Ping sur l'ultime** : "mon ulti est prêt"
- **Message court** : "go after my R", "wait Zhonya"
- **Compte à rebours** : "3, 2, 1, go"
- **Ping de retraite** : "wait, not yet"

## Les erreurs de synchronisation courantes

Évitez ces pièges :
- **Engager pendant le recall** d'un allié
- **Foncer seul** sans vérifier si l'équipe suit
- **Ignorer les pings de retraite** des coéquipiers
- **Ne pas communiquer** ses cooldowns importants
- **Engager avec un désavantage numérique** (3v5)

## Timing des actions collectives

Les meilleurs moments pour synchroniser :
- **Après un pick** : quand un ennemi vient de mourir
- **À la convergence** : quand l'équipe se regroupe naturellement
- **Sur un objectif** : Dragon, Baron qui force le combat
- **Après un powerspike** : item ou level important complété
Attendez le bon moment plutôt que de forcer.`,

  // Practice Instructions
  `## Objectif

Apprendre à vérifier la disponibilité de l'équipe et à synchroniser les engagements pour des actions collectives efficaces.

## Étapes

1. Lancez une partie normale ou classée
2. Avant chaque engage potentiel, vérifiez la minimap pour la position des alliés
3. Pingez votre ultime pour montrer sa disponibilité
4. Attendez un signal clair avant d'engager (ping, message, ou ultime allié)
5. Si vous êtes l'initiateur, annoncez votre intention avec "go after [sort]"
6. Comptez les ennemis et les alliés avant chaque fight

## Critère de réussite

Vous n'avez engagé aucun combat sans avoir vérifié que l'équipe était prête, et avez communiqué vos intentions avant chaque action majeure.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la synchronisation est-elle cruciale en teamfight ?",
      "Pour faire plus de dégâts",
      "Parce que 5 joueurs coordonnés battent 5 actions individuelles",
      "Pour gagner plus d'or",
      "La synchronisation n'est pas importante",
      'b',
      "Une équipe coordonnée concentre ses dégâts et CC de manière optimale."
    ),
    createQuestion(
      "Que devez-vous vérifier avant d'engager un fight ?",
      "Uniquement votre propre vie",
      "Position, cooldowns, HP/mana, vision de l'équipe",
      "Seulement la position des ennemis",
      "Rien, il faut engager rapidement",
      'b',
      "Plusieurs facteurs déterminent si l'équipe est prête à combattre."
    ),
    createQuestion(
      "Comment signaler que vous allez engager ?",
      "Foncer sans prévenir",
      "Ping Assist me + message 'go after my R'",
      "Écrire un long paragraphe",
      "Attendre que quelqu'un d'autre engage",
      'b',
      "Un ping et un message court préparent l'équipe à suivre."
    ),
    createQuestion(
      "Quelle erreur est courante lors des engages ?",
      "Trop communiquer",
      "Foncer seul sans vérifier si l'équipe suit",
      "Attendre trop longtemps",
      "Avoir trop de vision",
      'b',
      "Engager seul sans le support de l'équipe mène souvent à la mort."
    ),
    createQuestion(
      "Quel ping montre que votre ultime est disponible ?",
      "Ping de retraite",
      "Ping sur l'icône de votre ultime (Alt + R)",
      "Ping de danger",
      "Ping sur un ennemi",
      'b',
      "Pinger son ultime (Alt + R) affiche son état de disponibilité."
    ),
    createQuestion(
      "Que faire si un allié ping 'retraite' pendant votre engage ?",
      "Ignorer et continuer",
      "Respecter le signal et se replier",
      "Ping rage sur lui",
      "L'insulter dans le chat",
      'b',
      "Les signaux de retraite doivent être respectés pour éviter les fights défavorables."
    ),
    createQuestion(
      "Quand est un bon moment pour synchroniser un engage ?",
      "Quand un allié est mort",
      "Après un pick ennemi ou quand l'équipe converge",
      "Quand on est en désavantage numérique",
      "N'importe quand",
      'b',
      "Après un pick ou lors d'un regroupement naturel, les conditions sont favorables."
    ),
    createQuestion(
      "Que signifie 'wait Zhonya' comme appel ?",
      "Acheter un Zhonya",
      "Attendre que le Zhonya d'un allié soit disponible",
      "Utiliser Zhonya immédiatement",
      "Le Zhonya est inutile",
      'b',
      "Cela signifie qu'il faut attendre que ce cooldown soit prêt avant d'engager."
    ),
    createQuestion(
      "Pourquoi compter les ennemis avant un fight ?",
      "Pour savoir combien on peut en tuer",
      "Pour éviter d'engager en désavantage numérique",
      "Pour faire un beau screenshot",
      "Ce n'est pas nécessaire",
      'b',
      "Connaître le nombre permet d'éviter les 3v5 ou 4v5 défavorables."
    ),
    createQuestion(
      "Un allié est en recall pendant que vous voulez engage Baron. Que faites-vous ?",
      "Engage immédiatement",
      "Attendez qu'il revienne ou qu'il annule son recall",
      "Faites Baron à 4",
      "Abandonnez l'idée",
      'b',
      "Un membre manquant peut coûter le fight, mieux vaut attendre."
    ),
  ]
);
