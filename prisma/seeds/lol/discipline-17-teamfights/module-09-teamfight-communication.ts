import { createModule, createQuestion } from '../utils';

export const module09TeamfightCommunication = createModule(
  'Communication en teamfight',
  'teamfight-communication',
  "Maîtriser la communication rapide via pings et calls pour coordonner les combats",
  9,
  // Theory Content (5+ slides)
  `## L'importance de la communication

En solo queue, la communication rapide fait souvent la différence entre une victoire et une défaite. Des **pings clairs** et des **calls simples** permettent de coordonner 5 inconnus comme une équipe.

## Les pings essentiels en teamfight

- **Ping danger (!)** : Signaler une menace ou demander de reculer
- **Ping "On my way"** : Annoncer qu'on arrive ou qu'on engage
- **Ping cible** : Cliquer sur un ennemi pour indiquer le focus
- **Ping "Assist me"** : Demander de l'aide rapidement
- **Ping "Enemy missing"** : Alerter d'un danger potentiel

## Le call d'engagement

Qui doit call l'engage :
- **L'initiateur** : Malphite, Amumu, Leona savent quand ils peuvent engager
- **Le shotcaller** : Si désigné, coordonne l'équipe
- **Le jungler** : Souvent en position pour voir les opportunités

Phrase simple : "go" ou "engage [nom du champion]"

## Signaler le focus

Comment indiquer qui taper :
- Ping répété sur la cible prioritaire
- Chat rapide : "focus adc" ou "kill jinx"
- Avant le combat : "On focus [champion] en premier"
- Pendant : Pings constants sur la cible

## Communication vocale vs pings

**En vocal (discord) :**
- Plus rapide et précis
- Peut donner des ordres complexes
- "Je flash R sur Jinx, follow up"

**Sans vocal (pings uniquement) :**
- Utiliser les pings de manière claire et répétée
- Messages courts dans le chat avant le fight
- Observer les pings des alliés

## Erreurs de communication courantes

- **Trop de pings** : Devient du bruit, perd son sens
- **Aucune communication** : L'équipe ne sait pas quoi faire
- **Pings contradictoires** : Certains veulent go, d'autres reculer
- **Flamer au lieu de communiquer** : Contre-productif`,

  // Practice Instructions
  `## Objectif

Pratiquer la communication efficace pendant les teamfights pour améliorer la coordination d'équipe.

## Étapes

1. Avant chaque partie, décidez de communiquer activement
2. Avant les fights, ping la cible prioritaire 2-3 fois
3. Utilisez le ping "On my way" pour signaler votre intention d'engager
4. Ping "danger" pour avertir d'un flank ou d'un danger
5. Après le combat, félicitez l'équipe pour les bonnes actions ("gj", "nice")
6. Évitez de flamer même si le combat est perdu

## Critère de réussite

Vous avez utilisé les pings de manière cohérente dans au moins 5 teamfights, et vous n'avez reçu aucun mute pour spam de pings. Votre équipe a suivi vos calls au moins 3 fois.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la communication est-elle cruciale en teamfight ?",
      "Elle donne des bonus de statistiques",
      "Elle permet de coordonner 5 joueurs qui ne se connaissent pas",
      "Elle n'est pas vraiment importante",
      "Elle fait peur aux ennemis",
      'b',
      "En solo queue, des pings clairs et des calls simples permettent de transformer 5 inconnus en équipe coordonnée."
    ),
    createQuestion(
      "Quel ping utiliser pour signaler que vous allez engager ?",
      "Ping danger",
      "Ping 'On my way'",
      "Ping 'Enemy missing'",
      "Ping ward",
      'b',
      "Le ping 'On my way' indique clairement que vous vous dirigez vers une position, souvent pour engager."
    ),
    createQuestion(
      "Comment indiquer le focus sur un ennemi ?",
      "Écrire un paragraphe dans le chat",
      "Ping répété sur la cible prioritaire",
      "Crier dans le micro",
      "Ne rien faire et espérer",
      'b',
      "Ping plusieurs fois sur l'ennemi à focus pour que toute l'équipe comprenne la cible."
    ),
    createQuestion(
      "Qui est souvent le mieux placé pour call l'engage ?",
      "L'ADC",
      "L'initiateur (Malphite, Amumu, Leona)",
      "Le support enchanteresse",
      "Le joueur avec le moins de morts",
      'b',
      "L'initiateur sait quand il peut engager efficacement et a la meilleure vue sur les opportunités."
    ),
    createQuestion(
      "Quelle est l'erreur de 'trop de pings' ?",
      "Ça aide toujours",
      "Les pings deviennent du bruit et perdent leur sens",
      "Ça mute automatiquement tout le monde",
      "Ça fait gagner la partie",
      'b',
      "Spammer les pings crée de la confusion et l'équipe finit par les ignorer."
    ),
    createQuestion(
      "Avant un fight, quel type de message chat est efficace ?",
      "Une explication détaillée de la stratégie",
      "Un message court comme 'focus adc' ou 'kill jinx'",
      "Aucun message n'est utile",
      "Demander à l'équipe de surrender",
      'b',
      "Les messages courts et clairs sont plus efficaces car ils sont lus rapidement pendant l'action."
    ),
    createQuestion(
      "Quel est l'avantage de la communication vocale sur les pings ?",
      "Elle n'a aucun avantage",
      "Elle est plus rapide et permet des ordres complexes",
      "Elle donne des bonus de dégâts",
      "Elle remplace complètement les pings",
      'b',
      "Le vocal permet de donner des informations complexes rapidement, comme 'je flash R sur Jinx, follow up'."
    ),
    createQuestion(
      "Que faire après un combat perdu en termes de communication ?",
      "Flamer les alliés qui ont fait des erreurs",
      "Analyser calmement ce qui n'a pas marché sans blâmer",
      "Mute tout le monde",
      "Arrêter de communiquer pour le reste de la partie",
      'b',
      "Blâmer l'équipe est contre-productif ; il vaut mieux rester positif ou silencieux."
    ),
    createQuestion(
      "Quel ping utiliser pour avertir d'un danger comme un flank ?",
      "Ping 'On my way'",
      "Ping danger (!)",
      "Ping 'Assist me'",
      "Ping ward",
      'b',
      "Le ping danger (!) attire immédiatement l'attention sur une menace potentielle."
    ),
    createQuestion(
      "Comment féliciter l'équipe après un bon fight ?",
      "Écrire 'gj' ou 'nice' dans le chat",
      "Ne rien dire du tout",
      "Critiquer ce qui aurait pu être mieux",
      "Ping danger sur tout le monde",
      'a',
      "Un simple 'gj' (good job) ou 'nice' renforce la cohésion d'équipe et le moral."
    ),
  ]
);
