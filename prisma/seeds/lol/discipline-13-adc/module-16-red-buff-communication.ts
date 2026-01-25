import { createModule, createQuestion } from '../utils';

export const module16RedBuffCommunication = createModule(
  'Red Buff et communication botlane',
  'red-buff-communication',
  'Gérer le buff rouge et communiquer efficacement en bot lane',
  16,
  // Theory Content (5+ slides)
  `## Le Red Buff pour l'ADC

Le **Red Buff** (Crest of Cinders) est un atout précieux pour l'ADC en mid-late game :

**Effets du Red Buff** :
- Vos auto-attaques **ralentissent** les ennemis
- Inflige des **dégâts brûlants** supplémentaires
- Offre de la **régénération** de PV

En mid-late game, le jungler devrait généralement donner le Red Buff à l'ADC pour maximiser l'impact en teamfight.

## Quand demander le Red Buff

Le timing pour demander le Red Buff :

**Bon moment** :
- Après la phase de lane (15+ minutes)
- Avant un objectif important (Dragon, Baron)
- Quand vous êtes le carry principal de l'équipe
- Quand le jungler n'en a pas besoin pour ganker

**Mauvais moment** :
- En early game (le jungler en a besoin)
- Si vous êtes très en retard
- Si un autre carry en a plus besoin

**Comment demander** : Ping d'assistance sur le Red Buff + message chat.

## La communication en bot lane

La communication est la clé du succès en bot lane :

**Types de communication** :

**Vocale (si disponible)** :
- Calls d'engage immédiats
- Warning de gank
- Coordination des ultimates

**Pings** :
- Danger (recule)
- Assistance (engage)
- MIA (ennemi disparu)
- On my way (j'arrive)

**Chat** :
- Cooldowns importants
- Résumé de la situation
- Stratégie générale

## Les pings essentiels

Maîtrisez ces pings pour la bot lane :

**Ping Danger** (jaune) :
- Quand le jungler est proche
- Quand vous devez reculer
- Quand l'ennemi a un avantage

**Ping Assistance** (vert) :
- Quand vous voulez engager
- Quand vous avez besoin d'aide
- Pour signaler une opportunité

**Ping MIA** :
- Quand l'ennemi disparaît
- Répétez si le danger persiste

## Récapitulatif

- Le **Red Buff** améliore significativement l'ADC en teamfight
- Demandez-le poliment en **mid-late game**
- **Communiquez** avec pings, chat et voice
- **Ping Danger** pour les retraites, **Assistance** pour les engages
- La **coordination** avec le support fait la différence
- Respectez les décisions de votre **équipe**`,

  // Practice Instructions
  `## Objectif

Améliorer votre communication en bot lane et apprendre à demander le Red Buff.

## Étapes

1. En jeu, utilisez activement les pings pour communiquer avec votre support
2. Signalez chaque danger avec le ping jaune
3. Signalez vos intentions d'engage avec le ping vert
4. Après 15 minutes, demandez poliment le Red Buff au jungler
5. Notez comment la communication améliore votre coordination

## Critère de réussite

Vous avez utilisé au moins 10 pings pertinents en lane et avez obtenu le Red Buff au moins une fois après l'avoir demandé.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel effet le Red Buff donne-t-il aux auto-attaques ?",
      "Plus de dégâts critiques",
      "Ralentissement et dégâts brûlants",
      "Vol de vie",
      "Pénétration d'armure",
      'b',
      "Le Red Buff fait ralentir les cibles et leur inflige des dégâts brûlants."
    ),
    createQuestion(
      "À partir de quand l'ADC devrait-il recevoir le Red Buff ?",
      "Dès le niveau 1",
      "Après la phase de lane (15+ minutes)",
      "Uniquement en late game (40+ minutes)",
      "Jamais",
      'b',
      "En mid-late game, le Red Buff profite plus à l'ADC qu'au jungler."
    ),
    createQuestion(
      "Comment demander poliment le Red Buff ?",
      "Le prendre sans demander",
      "Ping d'assistance sur le Red + message chat",
      "Insulter le jungler",
      "Quitter la partie",
      'b',
      "Demandez poliment avec un ping et un message, le jungler décidera."
    ),
    createQuestion(
      "Quel ping utiliser pour signaler un danger ?",
      "Ping vert (Assistance)",
      "Ping jaune (Danger)",
      "Ping bleu (MIA)",
      "Ping rouge (Attaque)",
      'b',
      "Le ping jaune (Danger) signale qu'il faut reculer ou faire attention."
    ),
    createQuestion(
      "Quel ping utiliser pour signaler une intention d'engage ?",
      "Ping jaune (Danger)",
      "Ping vert (Assistance)",
      "Ping bleu (MIA)",
      "Ping de vision",
      'b',
      "Le ping vert (Assistance) indique que vous êtes prêt à engager."
    ),
    createQuestion(
      "Quand NE PAS demander le Red Buff ?",
      "Avant un Dragon",
      "En early game quand le jungler en a besoin",
      "Après 20 minutes",
      "Quand vous êtes fed",
      'b',
      "En early game, le jungler a besoin du Red Buff pour ses ganks."
    ),
    createQuestion(
      "Que signale le ping MIA ?",
      "Que vous voulez aider",
      "Qu'un ennemi a disparu",
      "Que vous avez besoin de soins",
      "Que le dragon spawn",
      'b',
      "MIA (Missing In Action) signale qu'un ennemi n'est plus visible."
    ),
    createQuestion(
      "Quel type de communication est le plus rapide pour les calls urgents ?",
      "Le chat texte",
      "La communication vocale",
      "Les émotes",
      "Les pings",
      'b',
      "La communication vocale permet les calls les plus rapides et détaillés."
    ),
    createQuestion(
      "Que devez-vous communiquer au chat en bot lane ?",
      "Vos émotions",
      "Les cooldowns importants et la stratégie",
      "Des insultes",
      "Rien, jamais utiliser le chat",
      'b',
      "Le chat sert à communiquer les cooldowns (Flash down) et la stratégie."
    ),
    createQuestion(
      "Pourquoi répéter le ping MIA si le danger persiste ?",
      "Pour ennuyer les coéquipiers",
      "Pour s'assurer que le message est compris",
      "Ce n'est pas nécessaire",
      "Pour montrer qu'on est actif",
      'b',
      "Répéter le ping assure que l'équipe reste consciente du danger."
    ),
  ]
);
