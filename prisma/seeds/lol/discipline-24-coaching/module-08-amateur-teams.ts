import { createModule, createQuestion } from '../utils';

export const module08AmateurTeams = createModule(
  'Jouer en équipe amateur',
  'amateur-teams',
  'Clash, flex 5v5, et ligues amateurs pour progresser en équipe',
  8,
  // Theory Content (5+ slides)
  `## Le mode Clash

**Clash** est le mode compétitif officiel de Riot pour les équipes amateurs. Les tournois se déroulent sur des weekends, avec des brackets d'élimination et des récompenses. C'est l'expérience la plus proche du jeu professionnel accessible à tous, avec draft bans et communication d'équipe obligatoire.

## La Flex Queue 5v5

La **Flex Queue** permet de jouer en équipe de 5 dans un environnement ranked. C'est idéal pour s'entraîner avec son équipe régulièrement. Le niveau est généralement plus facile qu'en solo queue, mais c'est parfait pour développer la synergie et tester des compositions.

## Les ligues amateurs

Des organisations comme **Epik Gaming**, **Solary Academy**, ou des ligues universitaires proposent des compétitions régulières pour les équipes amateurs. Ces ligues offrent une structure compétitive avec matchs hebdomadaires, classements et playoffs.

## Monter une équipe

Pour créer une équipe : recrutez des joueurs de **niveau et d'horaires compatibles**, établissez des **rôles clairs** (captain, shotcaller), fixez un **calendrier d'entraînement**, et définissez vos **objectifs** (fun, amélioration, compétition sérieuse).

## Les bénéfices du jeu en équipe

Jouer en équipe développe des compétences différentes du solo : la **communication vocale**, la **coordination des ultimates**, les **rotations planifiées**, et le **draft stratégique**. Ces skills sont essentiels pour atteindre les hauts niveaux de jeu.

## Récapitulatif

- **Clash** : tournois weekend officiels avec brackets et récompenses
- **Flex Queue 5v5** : ranked pour s'entraîner en équipe régulièrement
- **Ligues amateurs** : compétitions structurées hebdomadaires
- Pour créer une équipe : niveau compatible, rôles clairs, calendrier fixe
- Le jeu en équipe développe communication et coordination`,

  // Practice Instructions
  `## Objectif

Participer à une expérience de jeu en équipe organisée, que ce soit Clash, Flex 5v5 ou une ligue amateur.

## Étapes

1. Formez ou rejoignez une équipe de 5 joueurs
2. Créez un serveur Discord ou groupe de communication pour l'équipe
3. Inscrivez-vous au prochain Clash ou jouez 3 parties de Flex 5v5 ensemble
4. Désignez un shotcaller et établissez des règles de communication
5. Après les parties, faites un débrief de 10 minutes sur ce qui a fonctionné

## Critère de réussite

Vous avez participé à au moins 3 parties en équipe organisée avec communication vocale et débrief.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le mode Clash ?",
      "Un mode solo ranked",
      "Un mode compétitif pour équipes avec tournois le weekend",
      "Un mode ARAM spécial",
      "Un mode contre bots",
      'b',
      "Clash est le mode tournoi officiel de Riot pour les équipes amateurs."
    ),
    createQuestion(
      "Quel est l'avantage principal de la Flex Queue ?",
      "On gagne plus de LP",
      "On peut s'entraîner en équipe de 5 régulièrement",
      "Les parties sont plus courtes",
      "Il n'y a pas de trolls",
      'b',
      "La Flex Queue permet de jouer avec son équipe dans un environnement ranked."
    ),
    createQuestion(
      "Qu'est-ce qu'une ligue amateur propose ?",
      "De l'argent pour jouer",
      "Des matchs hebdomadaires avec classements et playoffs",
      "Un accès aux LCS",
      "Des comptes gratuits",
      'b',
      "Les ligues amateurs offrent une structure compétitive régulière."
    ),
    createQuestion(
      "Quel rôle est important à définir dans une équipe ?",
      "Le chef cuisinier",
      "Le shotcaller",
      "Le community manager",
      "Le trésorier",
      'b',
      "Le shotcaller dirige les décisions in-game et coordonne l'équipe."
    ),
    createQuestion(
      "Quelle compétence le jeu en équipe développe-t-il particulièrement ?",
      "Le solo carry",
      "La communication vocale et coordination",
      "Le tilt management solo",
      "Le one-trick pony",
      'b',
      "L'équipe requiert communication et coordination constantes."
    ),
    createQuestion(
      "Comment se déroule un tournoi Clash ?",
      "Sur plusieurs mois",
      "Sur un weekend avec brackets d'élimination",
      "En une seule partie",
      "Uniquement en semaine",
      'b',
      "Les tournois Clash se déroulent sur des weekends avec éliminations progressives."
    ),
    createQuestion(
      "Pourquoi la Flex Queue est-elle considérée plus 'facile' ?",
      "Les champions sont plus forts",
      "Le niveau moyen est inférieur à la solo queue",
      "Les parties sont limitées à 15 minutes",
      "Il n'y a pas de LP à perdre",
      'b',
      "Le niveau général en Flex est souvent inférieur à la solo queue de même rang."
    ),
    createQuestion(
      "Que faut-il établir pour une équipe efficace ?",
      "Un contrat de 3 ans",
      "Des horaires compatibles et un calendrier d'entraînement",
      "Un budget de 10 000 euros",
      "Un local physique",
      'b',
      "La compatibilité d'horaires et un calendrier fixe sont essentiels pour s'entraîner."
    ),
    createQuestion(
      "Quelle structure française propose des ligues amateurs ?",
      "Riot Games directement",
      "Epik Gaming ou Solary Academy",
      "Steam",
      "Netflix Gaming",
      'b',
      "Ces organisations proposent des compétitions pour équipes amateurs."
    ),
    createQuestion(
      "Que faire après les parties en équipe ?",
      "Se déconnecter immédiatement",
      "Un débrief pour analyser ce qui a fonctionné",
      "Jouer en solo queue",
      "Supprimer le Discord",
      'b',
      "Le débrief permet d'identifier les axes d'amélioration en équipe."
    ),
  ]
);
