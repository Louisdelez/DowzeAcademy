import { createModule, createQuestion } from '../utils';

export const module02MidgameTransition = createModule(
  'Transition mid-game',
  'midgame-transition',
  'Fin phase de lanes',
  2,
  // Theory Content (5+ slides)
  `## Qu'est-ce que la transition mid-game ?

Le **mid-game** commence généralement entre la 14ème et la 18ème minute, marquant la fin de la phase de laning. Cette transition est caractérisée par plusieurs événements clés qui changent fondamentalement la dynamique de la partie.

## Signes de fin de la phase de lanes

Plusieurs indicateurs marquent la transition vers le mid-game :
- **Chute des premières tourelles (T1)** : ouverture de la carte
- **Niveau 6 atteint par tous** : ultimates disponibles
- **Premier ou deuxième Dragon contesté** : objectifs d'équipe
- **Premières rotations de groupe** : les joueurs quittent leur lane
- **Plaques de tourelles disparues** (14 min) : moins d'incitation à rester en lane

## Ce qui change au mid-game

La transition implique des changements majeurs dans votre approche :
- **De l'individuel au collectif** : le jeu d'équipe prime
- **Des trades au teamfight** : les combats impliquent plus de joueurs
- **Du farming aux objectifs** : Dragon, Herald, tourelles deviennent prioritaires
- **De la lane à la carte** : la mobilité et les rotations sont essentielles
- **Vision défensive à proactive** : wards plus profondes en territoire ennemi

## Comment réussir sa transition

Pour bien transitionner vers le mid-game :
1. **Évaluez votre état** : avez-vous un avantage de lane ? De l'or non dépensé ?
2. **Communiquez avec l'équipe** : planifiez les objectifs
3. **Adaptez votre build** : priorisez les items de teamfight si nécessaire
4. **Ajustez votre vision** : placez des wards sur les objectifs
5. **Restez flexible** : le plan peut changer selon les opportunités

## Récapitulatif

La transition mid-game est un moment critique où :
- Le jeu passe de 1v1/2v2 à des combats d'équipe
- Les objectifs (Dragon, tourelles) deviennent la priorité
- Les rotations et la vision prennent de l'importance
- La coordination d'équipe devient essentielle
- Savoir s'adapter détermine souvent l'issue de la partie`,

  // Practice Instructions
  `## Objectif

Reconnaître les signes de transition vers le mid-game et adapter votre comportement en conséquence.

## Étapes

1. En début de partie, notez mentalement votre objectif de lane (farm, kills, tourelle)
2. Surveillez les indicateurs de transition : destruction des T1, niveau 6, 14 minutes
3. Quand la transition se produit, identifiez quel objectif d'équipe est le plus pertinent
4. Communiquez avec votre équipe pour coordonner une action (ping ou chat)
5. Participez à au moins un objectif d'équipe (Dragon, tourelle) après la transition

## Critère de réussite

Vous avez identifié le moment de transition et participé à un objectif d'équipe dans les 5 minutes suivantes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "À quel moment commence généralement le mid-game ?",
      "À la 5ème minute",
      "Entre la 14ème et 18ème minute",
      "À la 25ème minute",
      "Dès le premier kill",
      'b',
      "Le mid-game débute typiquement entre 14 et 18 minutes, quand les premières tourelles tombent et les plaques disparaissent."
    ),
    createQuestion(
      "Quel événement marque souvent le début du mid-game ?",
      "Le premier kill de la partie",
      "L'achat du premier item",
      "La chute des premières tourelles (T1)",
      "Le premier back",
      'c',
      "La destruction des T1 ouvre la carte et marque la transition vers des rotations plus fréquentes."
    ),
    createQuestion(
      "À quelle minute les plaques de tourelles disparaissent-elles ?",
      "10 minutes",
      "14 minutes",
      "20 minutes",
      "25 minutes",
      'b',
      "Les plaques disparaissent à 14 minutes, réduisant l'incitation à rester en lane."
    ),
    createQuestion(
      "Que devient prioritaire au mid-game ?",
      "Le farming en lane uniquement",
      "Les duels 1v1",
      "Les objectifs d'équipe comme le Dragon",
      "L'achat d'items défensifs",
      'c',
      "Au mid-game, les objectifs d'équipe (Dragon, Herald, tourelles) deviennent la priorité."
    ),
    createQuestion(
      "Comment évolue le placement de vision au mid-game ?",
      "Il devient moins important",
      "On place des wards plus profondes en territoire ennemi",
      "On ward uniquement sa propre jungle",
      "La vision n'est plus nécessaire",
      'b',
      "La vision devient proactive avec des wards plus profondes pour contrôler les rotations ennemies."
    ),
    createQuestion(
      "Quel changement de mentalité est nécessaire au mid-game ?",
      "Se concentrer encore plus sur le farm",
      "Passer de l'individuel au collectif",
      "Éviter tous les combats",
      "Rester en lane le plus longtemps possible",
      'b',
      "Le mid-game demande de penser équipe plutôt qu'individuel."
    ),
    createQuestion(
      "Pourquoi le niveau 6 de tous les joueurs est-il significatif ?",
      "Les champions deviennent plus lents",
      "Tous les ultimates sont disponibles pour les teamfights",
      "Le farming devient impossible",
      "Les tourelles deviennent invincibles",
      'b',
      "Avec tous les ultimates disponibles, le potentiel de teamfight augmente considérablement."
    ),
    createQuestion(
      "Que devez-vous évaluer avant de transitionner au mid-game ?",
      "Uniquement votre score de kills",
      "Votre avantage de lane et l'or non dépensé",
      "Le nombre de wards placées",
      "La durée de la partie seulement",
      'b',
      "Avant de quitter la lane, évaluez votre avantage et dépensez votre or."
    ),
    createQuestion(
      "Quelle erreur courante font les joueurs lors de la transition ?",
      "Participer aux objectifs trop tôt",
      "Rester en lane alors que l'équipe a besoin d'eux",
      "Acheter trop d'items",
      "Placer trop de vision",
      'b',
      "Beaucoup de joueurs restent focalisés sur leur lane alors que l'équipe a besoin de se regrouper."
    ),
    createQuestion(
      "Comment le type de combat évolue-t-il au mid-game ?",
      "Les combats deviennent plus rares",
      "On passe des trades aux teamfights",
      "Les duels 1v1 deviennent plus fréquents",
      "Les combats sont interdits",
      'b',
      "Au mid-game, les combats impliquent généralement plus de joueurs (skirmishes, teamfights)."
    ),
  ]
);
