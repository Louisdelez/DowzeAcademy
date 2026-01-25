import { createModule, createQuestion } from '../utils';

export const module05WomboCombo = createModule(
  'Wombo-combo',
  'wombo-combo',
  "Apprendre à coordonner plusieurs capacités ultimes pour des combos dévastateurs",
  5,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un wombo-combo ?

Un **wombo-combo** est une combinaison coordonnée de plusieurs capacités ultimes qui, ensemble, créent un effet dévastateur. L'idée est de **chaîner les CC et dégâts** pour anéantir l'équipe adverse en quelques secondes.

## Anatomie d'un wombo-combo

Un bon wombo-combo comprend :
1. **L'initiation** : Un CC de zone pour rassembler/immobiliser (Malphite R, Amumu R)
2. **Le suivi** : CC ou dégâts supplémentaires (Yasuo R, Orianna R)
3. **Le burst** : Dégâts massifs de zone (Miss Fortune R, Karthus R)

## Combos classiques et célèbres

- **Malphite + Yasuo** : Knock-up parfait pour Yasuo R
- **Orianna + Any knockup** : Ball sur le tank, ulti quand il engage
- **Amumu + Miss Fortune** : Stun + Bullet Time
- **Jarvan + Kennen** : Arena + dégâts de zone
- **Seraphine + Samira** : CC de zone + Inferno Trigger

## Timing et coordination

Le **timing** est crucial :
- Trop tôt = l'ennemi n'est pas regroupé
- Trop tard = les premiers CC ont expiré
- **Communication** : Pings, countdown, ou cible prédéfinie
- En soloQ, observez et réagissez plutôt que d'attendre une coordination parfaite

## Draft et construction du wombo

En draft, considérez :
- **Synergies d'ultis** : Yasuo a besoin de knock-ups alliés
- **Types de CC** : Mélangez knock-ups, stuns, slows
- **Dégâts de zone** : Au moins un gros DPS de zone
- **L'engage** : Quelqu'un doit pouvoir initier

## Contre-jouer le wombo-combo

Pour contrer :
- **Ne pas se regrouper** : Spread out, restez espacés
- **Engager avant eux** : Forcez leurs ultis en dehors du combo
- **Zhonya/Stopwatch** : Évitez le gros du burst
- **Disengage** : Janna R, Gragas R pour disperser`,

  // Practice Instructions
  `## Objectif

Pratiquer la coordination des ultimes avec votre équipe pour exécuter des wombo-combos efficaces.

## Étapes

1. En draft, choisissez un champion avec une ultime de combo (Malphite, Yasuo, MF, Orianna)
2. Identifiez les synergies avec les ultis de vos alliés
3. Communiquez avant les objectifs : "On combo sur dragon"
4. Attendez que l'ennemi se regroupe (souvent autour d'un objectif)
5. Exécutez : Initiation -> CC de suivi -> Burst de zone
6. Analysez le résultat : combien d'ennemis touchés ?

## Critère de réussite

Vous avez réussi à coordonner au moins 2 wombo-combos touchant 3+ ennemis, résultant en au moins 2 kills ou la fuite de l'équipe adverse.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un wombo-combo ?",
      "Un combo effectué par un seul joueur",
      "Une combinaison coordonnée de plusieurs ultimates pour un effet dévastateur",
      "Une technique de farming",
      "Un type de ward",
      'b',
      "Le wombo-combo combine plusieurs ultimes en une chaîne de CC et dégâts pour anéantir l'équipe adverse."
    ),
    createQuestion(
      "Quelle est la première phase d'un wombo-combo ?",
      "Le burst de dégâts",
      "L'initiation avec un CC de zone",
      "Le disengage",
      "Le farm des minions",
      'b',
      "L'initiation (ex: Malphite R, Amumu R) rassemble ou immobilise les ennemis pour permettre le suivi."
    ),
    createQuestion(
      "Quelle est la synergie célèbre entre Malphite et Yasuo ?",
      "Malphite donne de l'armure à Yasuo",
      "Le knock-up de Malphite R permet à Yasuo d'utiliser son R",
      "Ils peuvent tous les deux passer les murs",
      "Yasuo protège Malphite",
      'b',
      "L'ultime de Yasuo nécessite un knock-up, et Malphite R fournit un knock-up de zone parfait."
    ),
    createQuestion(
      "Pourquoi le timing est-il crucial dans un wombo-combo ?",
      "Pour faire plus de dégâts automatiquement",
      "Pour que les CC ne se chevauchent pas inutilement et que les dégâts arrivent pendant l'immobilisation",
      "Pour éviter les minions",
      "Le timing n'est pas important",
      'b',
      "Un bon timing assure que les dégâts arrivent pendant que les ennemis sont immobilisés, maximisant l'impact."
    ),
    createQuestion(
      "Quel champion fournit souvent l'initiation d'un wombo ?",
      "Soraka",
      "Jinx",
      "Malphite ou Amumu",
      "Yuumi",
      'c',
      "Malphite et Amumu ont des ultimes de zone qui immobilisent plusieurs ennemis, parfaites pour initier un combo."
    ),
    createQuestion(
      "Comment contrer un wombo-combo en tant qu'équipe ?",
      "Se regrouper encore plus pour être plus forts",
      "Rester espacés (spread out) pour ne pas tous être touchés",
      "Ignorer les ultimes adverses",
      "Tous utiliser Flash en même temps",
      'b',
      "En restant espacés, vous limitez le nombre de personnes touchées par les ultimes de zone."
    ),
    createQuestion(
      "Quel objet permet d'éviter le burst d'un wombo-combo ?",
      "Bottes de vitesse",
      "Zhonya ou Stopwatch (stase)",
      "Épée longue",
      "Ward de contrôle",
      'b',
      "La stase de Zhonya ou Stopwatch permet d'éviter le gros du burst pendant le combo adverse."
    ),
    createQuestion(
      "Qu'est-ce qu'Orianna apporte souvent à un wombo-combo ?",
      "Des soins de zone",
      "Une balle qui peut être placée sur un tank et ulti quand il engage",
      "De l'invisibilité pour l'équipe",
      "Des dégâts sur la durée",
      'b',
      "Orianna place sa balle sur un engage (Malphite, Jarvan) et utilise son R quand celui-ci arrive dans l'équipe adverse."
    ),
    createQuestion(
      "Quand est le meilleur moment pour exécuter un wombo-combo ?",
      "Quand l'ennemi est dispersé sur la carte",
      "Quand l'ennemi est regroupé autour d'un objectif",
      "Au tout début de la partie",
      "Quand votre équipe est en infériorité numérique",
      'b',
      "Les objectifs (Dragon, Baron) forcent les équipes à se regrouper, créant l'opportunité parfaite pour un combo."
    ),
    createQuestion(
      "Comment le disengage comme Janna R contre-t-il un wombo ?",
      "Il fait des dégâts aux ennemis",
      "Il repousse les ennemis et disperse leur combo avant qu'il ne se termine",
      "Il rend l'équipe invisible",
      "Il augmente la vitesse de déplacement",
      'b',
      "Janna R repousse les ennemis, brisant leur formation et empêchant le suivi de leur combo."
    ),
  ]
);
