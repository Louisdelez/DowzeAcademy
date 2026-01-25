import { createModule, createQuestion } from '../utils';

export const module07LanePriorityObjective = createModule(
  'Priorité de lane avant objectif',
  'lane-priority-objective',
  'Push avant Dragon/Baron',
  7,
  // Theory Content (5+ slides)
  `## Qu'est-ce que la priorité de lane ?

La **priorité de lane** signifie avoir le contrôle de votre vague de sbires, permettant de vous déplacer avant votre adversaire. Avant tout objectif majeur, cette priorité est cruciale pour :
- Arriver en premier au fight
- Forcer l'ennemi à choisir entre farm et objectif
- Éviter de perdre des sbires

## Pourquoi push avant un objectif ?

Pousser vos vagues avant Dragon/Baron est essentiel :
- **Punition du farm** : l'ennemi perd de l'or s'il vient
- **Arrivée retardée** : l'ennemi doit clear avant de venir
- **Avantage numérique** : vous êtes là avant lui
- **Pas de regrets** : vous ne perdez rien si le fight s'éternise

Un joueur qui abandonne une grosse vague sous sa tourelle arrive au fight avec un désavantage mental et économique.

## Comment établir la priorité

Pour avoir la priorité avant un objectif :
1. **Push 30-60 secondes avant** le spawn
2. **Ne prenez pas de mauvais trades** : ne perdez pas de vie en pushant
3. **Gérez le timing** : une vague pousse vers l'ennemi, pas besoin de forcer
4. **Communiquez** : prévenez l'équipe si vous n'avez pas la priorité
5. **Ward en pushant** : évitez les ganks pendant le push

## Erreurs communes à éviter

Erreurs fréquentes liées à la priorité :
- **Partir au Dragon avec une vague qui crash** : perte de 2-3 vagues
- **Forcer le fight sans priorité** : arriver en retard ou désavantagé
- **Ignorer le slow-push ennemi** : ils arrivent avec un avantage de sbires
- **Oublier de communiquer** : l'équipe engage sans vous

La coordination est clé : tout le monde doit push avant de groupe.

## Récapitulatif

La priorité de lane est le prérequis de tout objectif :
- Poussez vos vagues 30-60 secondes avant l'objectif
- L'ennemi doit choisir : farm ou objectif
- Arrivez en premier avec la vie et le mana pleins
- Communiquez si vous n'avez pas la priorité
- Une équipe avec priorité sur 3 lanes domine les objectifs`,

  // Practice Instructions
  `## Objectif

Établir la priorité de lane avant un objectif (Dragon ou Baron) et arriver au fight sans perdre de ressources.

## Étapes

1. Identifiez quand le prochain Dragon ou Baron va spawn (regardez le timer)
2. 45 secondes avant, commencez à push votre vague
3. Assurez-vous que la vague crash sous la tourelle ennemie
4. Rejoignez votre équipe sur l'objectif
5. Si vous ne pouvez pas avoir la priorité, pingez votre équipe pour patienter
6. Observez l'arrivée de votre adversaire de lane : est-il en retard ?

## Critère de réussite

Vous avez établi la priorité de lane avant un objectif majeur et êtes arrivé au fight avant votre adversaire de lane.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que la priorité de lane ?",
      "Avoir plus de kills que son adversaire",
      "Contrôler la vague pour pouvoir bouger en premier",
      "Être plus haut niveau que l'ennemi",
      "Avoir détruit la tourelle adverse",
      'b',
      "La priorité de lane signifie avoir le contrôle de la vague, permettant de rotater avant l'adversaire."
    ),
    createQuestion(
      "Combien de temps avant un objectif devez-vous push votre vague ?",
      "5-10 secondes",
      "30-60 secondes",
      "2-3 minutes",
      "Juste au moment du spawn",
      'b',
      "Push 30-60 secondes avant donne le temps de crash la vague et d'arriver à l'objectif."
    ),
    createQuestion(
      "Pourquoi forcer l'ennemi à choisir entre farm et objectif ?",
      "Pour qu'il perde de l'or s'il vient",
      "Pour qu'il soit plus fort",
      "Pour qu'il puisse faire les deux",
      "Ce n'est pas important",
      'a',
      "Un ennemi qui abandonne une vague sous tourelle perd de l'or et de l'expérience."
    ),
    createQuestion(
      "Quelle erreur courante liée à la priorité de lane ?",
      "Push trop tôt avant l'objectif",
      "Partir au Dragon avec une vague qui crash sous votre tourelle",
      "Communiquer trop avec l'équipe",
      "Arriver trop tôt au fight",
      'b',
      "Abandonner une vague sous votre tourelle fait perdre beaucoup d'or et d'XP."
    ),
    createQuestion(
      "Que faire si vous n'avez pas la priorité de lane ?",
      "Aller quand même au fight",
      "Communiquer à l'équipe d'attendre",
      "Rester en lane et ignorer l'objectif",
      "Demander un gank",
      'b',
      "Si vous n'avez pas la priorité, prévenez l'équipe pour retarder l'engagement."
    ),
    createQuestion(
      "Quel avantage donne la priorité de lane sur un objectif ?",
      "Plus de dégâts au Dragon",
      "Arriver en premier au fight",
      "Un buff de vitesse",
      "Plus d'or par sbire",
      'b',
      "Avec la priorité, vous arrivez avant votre adversaire, créant un avantage numérique temporaire."
    ),
    createQuestion(
      "Une équipe avec priorité sur 3 lanes peut :",
      "Prendre le Baron sans contestation",
      "Dominer les prises d'objectifs",
      "Gagner automatiquement",
      "Ignorer les objectifs",
      'b',
      "Avoir la priorité sur plusieurs lanes permet de contester et prendre les objectifs facilement."
    ),
    createQuestion(
      "Que devez-vous éviter en pushant pour la priorité ?",
      "Utiliser vos sorts sur les sbires",
      "Prendre de mauvais trades qui vous coûtent de la vie",
      "Ward la rivière",
      "Communiquer avec l'équipe",
      'b',
      "Arriver à l'objectif avec peu de vie annule l'avantage de la priorité."
    ),
    createQuestion(
      "Qu'est-ce qu'un slow-push et son impact sur les objectifs ?",
      "Push lent qui crée une grosse vague",
      "Push rapide vers l'ennemi",
      "Technique pour freeze",
      "Méthode de jungle",
      'a',
      "Un slow-push accumule les sbires ; si l'ennemi en a un vers vous, il arrive avec un avantage de sbires au fight."
    ),
    createQuestion(
      "Pourquoi toute l'équipe doit-elle push avant de groupe ?",
      "Pour avoir plus de sbires",
      "Pour que personne ne perde de farm en allant à l'objectif",
      "Pour détruire toutes les tourelles",
      "Ce n'est pas nécessaire",
      'b',
      "Si chaque joueur push, toute l'équipe peut se regrouper sans perdre de ressources."
    ),
  ]
);
