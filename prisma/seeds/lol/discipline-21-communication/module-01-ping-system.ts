import { createModule, createQuestion } from '../utils';

export const module01PingSystem = createModule(
  'Système de ping',
  'ping-system',
  'Maîtriser les signaux contextuels pour communiquer efficacement avec son équipe',
  1,
  // Theory Content (5+ slides)
  `## Introduction au système de ping

Le **système de ping** est l'outil de communication fondamental dans League of Legends. Il permet de transmettre des informations cruciales à vos coéquipiers sans avoir à taper dans le chat. Un bon usage des pings peut faire la différence entre une victoire et une défaite.

## Les différents types de pings

League of Legends propose plusieurs types de pings :
- **Ping d'alerte** (G + clic) : signale un danger ou attire l'attention
- **Ping de retraite** (V + clic) : demande à un allié de se replier
- **Ping "On my way"** : indique que vous allez quelque part
- **Ping "Assist me"** : demande de l'aide
- **Ping "Enemy missing"** : signale qu'un ennemi a disparu
- **Ping de vision** : indique où placer ou retirer une ward

## La roue de ping contextuelle

En maintenant **Alt + clic** ou **G**, vous accédez à une roue de ping avec plusieurs options. Cette roue permet de choisir rapidement le ping approprié à la situation. Sur un ennemi, elle propose des pings spécifiques comme "Focus cet ennemi" ou "Attention à ce champion".

## Quand et où pinger

Les pings sont efficaces quand ils sont :
- **Précis** : pingez l'endroit exact du danger ou de l'objectif
- **Opportuns** : pingez au bon moment, ni trop tôt ni trop tard
- **Répétés modérément** : 2-3 pings suffisent pour attirer l'attention
- **Contextuels** : adaptez le type de ping à la situation

## Bonnes pratiques du ping

Pour être un bon communicant via les pings :
- Pingez les summoner spells ennemis utilisés (Flash, TP, etc.)
- Pingez le timer des objectifs (Dragon, Baron)
- Pingez quand votre ultime est disponible ou en cooldown
- Pingez les mouvements ennemis sur la minimap
- Évitez le spam qui noie l'information importante`,

  // Practice Instructions
  `## Objectif

Maîtriser l'utilisation des différents pings pour communiquer efficacement avec votre équipe pendant une partie.

## Étapes

1. Lancez une partie normale ou un entraînement
2. Entraînez-vous à utiliser la roue de ping (Alt + clic gauche)
3. Utilisez le ping "Missing" quand votre adversaire quitte la lane
4. Pingez les cooldowns des sorts d'invocateur ennemis
5. Utilisez le ping "On my way" avant chaque roam
6. Pratiquez les pings de danger pour avertir vos alliés d'un gank

## Critère de réussite

Vous utilisez naturellement au moins 4 types de pings différents pendant la partie et vos coéquipiers réagissent à vos signaux.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel raccourci permet d'accéder à la roue de ping ?",
      "Ctrl + clic",
      "Alt + clic ou G",
      "Shift + clic",
      "Tab + clic",
      'b',
      "La roue de ping s'ouvre avec Alt + clic gauche ou en maintenant G."
    ),
    createQuestion(
      "Quel ping devez-vous utiliser quand votre adversaire de lane disparaît ?",
      "Ping d'alerte jaune",
      "Ping de retraite",
      "Ping 'Enemy missing'",
      "Ping 'On my way'",
      'c',
      "Le ping 'Enemy missing' (point d'interrogation) signale qu'un ennemi a disparu de sa lane."
    ),
    createQuestion(
      "Combien de pings successifs sont généralement suffisants pour attirer l'attention ?",
      "1 ping",
      "2-3 pings",
      "5-6 pings",
      "10 pings ou plus",
      'b',
      "2 à 3 pings suffisent pour attirer l'attention sans spammer."
    ),
    createQuestion(
      "Que signifie le ping bleu avec une flèche ?",
      "Danger immédiat",
      "Ennemi disparu",
      "On my way / J'arrive",
      "Besoin d'aide",
      'c',
      "Le ping bleu avec flèche indique 'On my way', signalant que vous vous dirigez vers cet endroit."
    ),
    createQuestion(
      "Pourquoi est-il important de pinger les summoner spells ennemis ?",
      "Pour augmenter votre score de vision",
      "Pour informer l'équipe des opportunités de gank",
      "Pour gagner de l'or supplémentaire",
      "Ce n'est pas important",
      'b',
      "Pinger les cooldowns des summoners permet à l'équipe de savoir quand un ennemi est vulnérable."
    ),
    createQuestion(
      "Quel ping utiliseriez-vous pour demander de l'aide à un coéquipier ?",
      "Ping de retraite",
      "Ping d'alerte",
      "Ping 'Assist me'",
      "Ping de vision",
      'c',
      "Le ping 'Assist me' (drapeau vert) demande spécifiquement de l'aide aux alliés."
    ),
    createQuestion(
      "Où devez-vous pinger pour signaler un danger de gank ?",
      "Sur votre champion",
      "Sur le chemin probable de l'ennemi",
      "Au centre de la carte",
      "Dans la base alliée",
      'b',
      "Pingez le chemin probable du ganker pour avertir précisément du danger."
    ),
    createQuestion(
      "Quel est le risque principal du spam de ping ?",
      "Perdre de l'or",
      "Être banni de la partie",
      "Noyer l'information importante et irriter les coéquipiers",
      "Réduire sa vitesse d'attaque",
      'c',
      "Le spam de ping noie les informations importantes et peut énerver vos coéquipiers."
    ),
    createQuestion(
      "Comment pinger qu'un objectif comme le Dragon est disponible ?",
      "En pingant l'objectif directement",
      "En écrivant dans le chat",
      "En utilisant le ping de retraite",
      "Ce n'est pas possible",
      'a',
      "Pinger directement sur un objectif affiche son timer et attire l'attention de l'équipe."
    ),
    createQuestion(
      "Quel type de ping convient pour demander à un allié de reculer ?",
      "Ping 'On my way'",
      "Ping de retraite (V)",
      "Ping d'alerte jaune",
      "Ping de vision",
      'b',
      "Le ping de retraite (V + clic) indique clairement qu'un allié devrait se replier."
    ),
  ]
);
