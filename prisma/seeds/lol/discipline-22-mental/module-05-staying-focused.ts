import { createModule, createQuestion } from '../utils';

export const module05StayingFocused = createModule(
  'Rester focus meme en retard',
  'staying-focused',
  'Garder espoir et concentration meme quand la partie semble perdue',
  5,
  // Theory Content (5+ slides)
  `## La partie n'est jamais vraiment perdue

Dans League of Legends, les comebacks sont **toujours possibles**. Meme avec un deficit de 10 000 gold, une seule erreur ennemie peut renverser la partie. L'equipe en avance a plus de pression car elle "devrait" gagner.

Des comebacks spectaculaires se produisent a tous les niveaux, du Bronze aux finales des Worlds. **Tant que votre Nexus tient, la partie continue.**

## Pourquoi les joueurs abandonnent mentalement

Beaucoup de joueurs "ff mentalement" bien avant que la partie soit reellement perdue :
- "C'est perdu, je vais AFK farm"
- "GG, on ne peut plus rien faire"
- "Pas la peine de tryhard, c'est fini"

Cette attitude **garantit** la defaite. Vous ne pouvez pas gagner une partie que vous avez deja abandonnee dans votre tete.

## L'avantage du Late Game

De nombreux facteurs peuvent renverser une partie en votre faveur :
- **Scaling** : certains champions deviennent monstrueux en late game
- **Catch** : un pick sur un carry ennemi peut tout changer
- **Baron throw** : l'equipe en avance peut mal gerer Baron
- **Erreur de positionnement** : un ADC qui se fait attraper
- **Shutdown gold** : tuer un joueur en avance donne beaucoup d'or

Plus la partie dure, plus les erreurs coutent cher a l'equipe en avance.

## Strategies pour rester dans la partie

Quand vous etes en retard :
1. **Jouez defensivement** - ne prenez pas de risques inutiles
2. **Farmez en securite** - rattrapez votre retard d'or
3. **Gardez la vision** - sachez ou sont les ennemis
4. **Attendez les erreurs** - l'ennemi va en faire
5. **Focusez les objectifs** - un steal de Baron peut tout changer
6. **Restez groupe** - ne donnez pas de picks gratuits

## Le mental de comeback

Pour reussir un comeback, vous devez :
- **Croire** que c'est encore possible
- **Communiquer** positivement avec l'equipe
- **Identifier** votre condition de victoire
- **Rester concentre** sur chaque micro-decision
- **Capitaliser** sur la moindre erreur ennemie

Les joueurs qui gardent espoir trouvent des opportunites que les joueurs demoralises ne voient meme pas.

## Exemples de comebacks celebres

L'histoire de l'esport LoL est remplie de comebacks legendaires :
- Finales ou des equipes ont retourne des deficits de 10K+ gold
- Parties ou un seul teamfight a 40 minutes a tout change
- Steals de Baron qui ont renverse le cours de tournois

Si les pros peuvent le faire sous pression maximale, vous pouvez le faire en solo queue.

## Recapitulatif

- La partie **n'est jamais vraiment perdue** tant que le Nexus tient
- **FF mental** garantit la defaite
- Le **late game** favorise les comebacks grace au scaling et aux erreurs couteuses
- Jouez **defensivement**, farmez, et **attendez les erreurs** ennemies
- Le **mental positif** vous permet de voir des opportunites invisibles aux joueurs demoralises`,

  // Practice Instructions
  `## Objectif

Pratiquer le maintien de la concentration et de l'espoir dans une partie difficile ou votre equipe est en retard.

## Étapes

1. Pendant votre prochaine partie ou votre equipe prend du retard, engagez-vous a ne jamais abandonner mentalement
2. Quand le score devient defavorable, identifiez :
   - Votre condition de victoire (quel objectif, quel teamfight)
   - Le champion ennemi qui doit mourir pour que vous gagniez les fights
   - Votre champion qui scale le mieux en late game
3. Communiquez positivement : "On peut encore", "Attendons leur erreur"
4. Jouez de maniere defensive : pas de plays risques, farm securise
5. Notez chaque erreur ennemie et comment vous auriez pu en profiter
6. Independamment du resultat, evaluez si vous avez maintenu votre concentration

## Critère de reussite

Vous avez joue une partie en retard sans abandonner mentalement, identifie au moins une opportunite de comeback, et maintenu une attitude positive jusqu'a la fin.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quand une partie de LoL est-elle vraiment perdue ?",
      "Quand vous avez 5 kills de retard",
      "Quand l'ennemi a pris 2 tours",
      "Quand votre Nexus est detruit",
      "Quand un coequipier commence a flame",
      'c',
      "Tant que le Nexus tient, la partie peut etre gagnee - les comebacks sont toujours possibles."
    ),
    createQuestion(
      "Qu'est-ce que le 'FF mental' ?",
      "Une strategie de comeback",
      "Abandonner mentalement avant que la partie soit reellement perdue",
      "Une technique de concentration",
      "Un vote de surrender",
      'b',
      "FF mental signifie abandonner mentalement et arreter d'essayer, garantissant ainsi la defaite."
    ),
    createQuestion(
      "Pourquoi le late game favorise-t-il les comebacks ?",
      "Les champions en retard jouent mieux",
      "Le scaling et les erreurs couteuses peuvent renverser la partie",
      "Le matchmaking aide l'equipe en retard",
      "Le late game n'a aucun impact",
      'b',
      "En late game, certains champions scalent enormement et les erreurs coutent beaucoup plus cher."
    ),
    createQuestion(
      "Quelle attitude adopter quand vous etes en retard ?",
      "Prendre des risques pour rattraper",
      "Jouer defensivement et attendre les erreurs ennemies",
      "Flame les coequipiers responsables",
      "Aller AFK pour la prochaine partie",
      'b',
      "Jouer defensivement et exploiter les erreurs ennemies est la cle des comebacks."
    ),
    createQuestion(
      "Que peut rapporter un 'shutdown' sur un joueur enemy fed ?",
      "Rien de special",
      "Une quantite importante d'or bonus",
      "Un boost de statistiques",
      "Un avantage de vision",
      'b',
      "Tuer un joueur en serie de kills rapporte un bonus de shutdown gold tres important."
    ),
    createQuestion(
      "Pourquoi un Baron throw peut-il renverser une partie ?",
      "Baron donne peu d'avantages",
      "L'equipe qui echoue Baron peut etre decimee et perdre l'objectif",
      "Baron n'existe qu'en late game",
      "Les throws de Baron sont impossibles",
      'b',
      "Une tentative de Baron ratee peut resulter en wipe d'equipe et perte de l'objectif."
    ),
    createQuestion(
      "Quelle est une condition de victoire typique en retard ?",
      "Gagner tous les 1v1",
      "Catch sur le carry ennemi avant un teamfight",
      "Avoir plus de CS que l'adversaire",
      "Detruire toutes les tours avant le Nexus",
      'b',
      "Attraper un carry ennemi hors position peut donner l'avantage numerique decisif."
    ),
    createQuestion(
      "Que permet le mental positif en comeback ?",
      "Rien de concret",
      "De voir des opportunites invisibles aux joueurs demoralises",
      "De tilt l'equipe adverse",
      "D'obtenir de meilleurs coequipiers",
      'b',
      "Un mental positif permet de rester alerte et de saisir des opportunites que d'autres manqueraient."
    ),
    createQuestion(
      "Que faire quand l'equipe veut surrender mais que vous croyez au comeback ?",
      "Voter non et continuer a tryhard sans flamer",
      "Insulter ceux qui veulent surrender",
      "AFK pour accelerer la defaite",
      "Ouvrir mid pour passer a la suivante",
      'a',
      "Votez non calmement et continuez a donner votre maximum - vous pourriez les convaincre par l'exemple."
    ),
    createQuestion(
      "Pourquoi l'equipe en avance a-t-elle aussi de la pression ?",
      "Elle n'a pas de pression",
      "Elle 'devrait' gagner et chaque erreur peut tout remettre en question",
      "Le jeu la penalise automatiquement",
      "Ses champions deviennent plus faibles",
      'b',
      "L'equipe en avance a la pression de devoir conclure - chaque erreur est potentiellement catastrophique."
    ),
  ]
);
