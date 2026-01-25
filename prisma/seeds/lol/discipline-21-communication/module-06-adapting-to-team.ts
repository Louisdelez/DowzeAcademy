import { createModule, createQuestion } from '../utils';

export const module06AdaptingToTeam = createModule(
  'Adapter son style à l\'équipe',
  'adapting-to-team',
  'Jouer autour du carry et s\'adapter aux forces de l\'équipe',
  6,
  // Theory Content (5+ slides)
  `## Pourquoi s'adapter à son équipe ?

Chaque partie est différente. Parfois vous serez le carry, parfois un coéquipier sera fed. Un bon joueur sait **adapter son style** selon les circonstances. L'ego est l'ennemi de la victoire : si quelqu'un d'autre peut carry, soutenez-le.

## Identifier le carry de l'équipe

Le carry est généralement :
- Le joueur avec le **plus de kills** et le moins de morts
- Celui qui a le **meilleur farm** (CS)
- Le joueur qui **scale** le mieux avec les items
- Celui dont le **champion** est le plus fort en late
Observez le scoreboard régulièrement pour identifier qui porte l'équipe.

## Comment jouer autour du carry

Adaptez votre jeu pour le soutenir :
- **En tant que support** : priorisez la peel plutôt que l'engage
- **En tant que tank** : absorbez les dégâts et le CC à sa place
- **En tant que mage** : contrôlez les zones pour le protéger
- **En tant que jungler** : wardez et créez des opportunités pour lui
- **En tant qu'AD** : suivez ses timings au lieu d'imposer les vôtres

## Accepter un rôle secondaire

Quand vous n'êtes pas le carry :
- **Ne forcez pas les plays** risqués
- **Farmez safe** et restez utile
- **Fournissez le CC** et l'utilité
- **Placez les wards** critiques
- **Ne volez pas les kills** au carry quand possible
Votre victoire dépend de la réussite du carry.

## Communication pour jouer en équipe

Phrases utiles :
- "Play around [nom], he's fed"
- "I'll peel for [nom]"
- "Let [nom] carry, I'll frontline"
- "[Nom] engage, I follow"
- "What do you need from me?"
Montrez que vous êtes prêt à vous adapter.`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier le carry de votre équipe et à adapter votre style de jeu pour le soutenir efficacement.

## Étapes

1. Lancez une partie normale ou classée
2. À 10 minutes, ouvrez le scoreboard et identifiez le joueur le plus fed
3. Adaptez votre style : si c'est l'ADC, priorisez le peel ; si c'est le mid, suivez ses roams
4. Communiquez avec l'équipe : "let's play around [champion]"
5. En teamfight, concentrez-vous sur la protection du carry plutôt que vos propres dégâts
6. Observez si le carry performe mieux grâce à votre soutien

## Critère de réussite

Vous avez identifié le carry et adapté votre jeu pour le soutenir, contribuant à au moins 2 teamfights gagnés grâce à votre peel ou support.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi devez-vous parfois adapter votre style à l'équipe ?",
      "Parce que vos coéquipiers sont toujours meilleurs",
      "Pour maximiser les chances de victoire en jouant autour du carry",
      "Parce que votre champion est toujours mauvais",
      "Ce n'est jamais nécessaire",
      'b',
      "S'adapter au carry de l'équipe optimise les chances de gagner."
    ),
    createQuestion(
      "Comment identifier le carry de votre équipe ?",
      "C'est toujours le mid laner",
      "En regardant le scoreboard : kills, CS, items",
      "C'est celui qui parle le plus",
      "C'est toujours le jungler",
      'b',
      "Le scoreboard montre qui est fed et qui peut potentiellement carry."
    ),
    createQuestion(
      "Que signifie 'peel for ADC' ?",
      "Ignorer l'ADC en teamfight",
      "Protéger l'ADC des menaces avec CC et zone",
      "Laisser l'ADC mourir",
      "Voler les kills de l'ADC",
      'b',
      "Peel signifie protéger un carry en repoussant les menaces."
    ),
    createQuestion(
      "Si vous êtes 0/3 et votre top est 5/0, que devez-vous faire ?",
      "Continuer à jouer agressivement pour rattraper",
      "Jouer autour du top et le soutenir",
      "Abandonner la partie",
      "Blamer le jungler",
      'b',
      "Soutenir le joueur fed est la meilleure stratégie pour revenir."
    ),
    createQuestion(
      "En tant que tank, comment jouer autour d'un ADC fed ?",
      "Initier très loin de l'ADC",
      "Rester proche et absorber les dégâts/CC pour lui",
      "Ignorer l'ADC et tuer le carry ennemi",
      "Ne pas participer aux fights",
      'b',
      "Le tank doit protéger le carry en absorbant les menaces."
    ),
    createQuestion(
      "Pourquoi ne pas forcer les plays quand vous n'êtes pas le carry ?",
      "Les plays sont interdits pour les non-carry",
      "Les plays risqués peuvent donner de l'avantage à l'ennemi",
      "Seul le carry peut faire des plays",
      "Les plays ne servent à rien",
      'b',
      "Des plays ratés quand on est behind peuvent aggraver la situation."
    ),
    createQuestion(
      "Quelle phrase montre que vous êtes prêt à vous adapter ?",
      "Je vais carry seul",
      "Play around [nom], he's fed",
      "Vous êtes tous nuls",
      "Je fais ce que je veux",
      'b',
      "Cette phrase montre une attitude d'équipe et d'adaptation."
    ),
    createQuestion(
      "Quand devez-vous réévaluer qui est le carry ?",
      "Jamais, c'est défini en début de partie",
      "Régulièrement, car la situation peut changer",
      "Seulement si quelqu'un meurt",
      "À la fin de la partie",
      'b',
      "Le carry peut changer selon les événements de la partie."
    ),
    createQuestion(
      "Que faire si vous êtes le support et votre ADC est 0/5 ?",
      "Rester uniquement avec l'ADC",
      "Roam et jouer autour d'un autre carry fed",
      "Flame l'ADC",
      "Abandonner la partie",
      'b',
      "Mieux vaut soutenir un carry qui performe bien ailleurs."
    ),
    createQuestion(
      "L'ego est l'ennemi de la victoire signifie quoi ?",
      "Il ne faut jamais être confiant",
      "Accepter de jouer un rôle secondaire si quelqu'un d'autre peut carry",
      "Il faut toujours laisser les autres décider",
      "L'ego n'existe pas dans LoL",
      'b',
      "Mettre de côté son ego pour soutenir le carry optimise les chances de victoire."
    ),
  ]
);
