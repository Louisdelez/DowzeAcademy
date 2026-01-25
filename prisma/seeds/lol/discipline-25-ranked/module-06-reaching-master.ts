import { createModule, createQuestion } from '../utils';

export const module06ReachingMaster = createModule(
  'Atteindre les rangs Master+',
  'reaching-master',
  'Developper la maitrise mecanique et macro necessaire pour le haut elo',
  6,
  // Theory Content (5+ slides)
  `## Le Seuil du Haut Elo

Atteindre **Master** ou au-dela represente l'entree dans l'elite de League of Legends (top 1%). Ce n'est plus seulement une question de "bien jouer" mais d'**excellence constante** dans tous les aspects du jeu. La competition devient feroce et chaque erreur est punie.

## Maitrise Mecanique Requise

A ce niveau, la mecanique doit etre **irreprochable** :
- **CSing parfait** : 9+ CS/min meme sous pression
- **Combos fluides** : execution sans hesitation
- **Micro-gestion** : kiting, spacing, dodging automatiques
- **Reflexes** : reactions en millisecondes (flash, zhonyas)
- **APM eleve** : actions par minute constamment optimisees

Pratiquez en **tool practice** et en parties personnalisees.

## Comprehension Macro Avancee

La macro au niveau Master+ implique :
- **Tracking jungle** : savoir ou est le jungler ennemi
- **Gestion des vagues** : freeze, slowpush, crash parfaits
- **Timings d'objectifs** : rotation 30 secondes avant spawn
- **Win conditions** : identifier comment votre comp gagne
- **Pression laterale** : split push au bon moment

Chaque decision doit etre **intentionnelle et optimisee**.

## Mentalite et Consistance

Le mental est crucial en haut elo :
- **Zero tilt** : rester concentre malgre les defaites
- **Autocritique** : toujours chercher ses propres erreurs
- **Adaptation** : ajuster son style selon la meta
- **Volume de jeu** : 5-10 parties par jour regulierement
- **VOD review** : analyser chaque defaite

La consistance separe les Diamond des Master.

## Optimisation du Champion Pool

En Master+, specialisez-vous :
- **2-3 champions** sur votre role principal
- **1-2 champions** sur un role secondaire
- Connaitre **tous les matchups** de vos picks
- Maitriser les **builds situationnels**
- Suivre les **changements de patch** immediatement

Les one-tricks ont souvent plus de succes a ce niveau.

## Le Grind vers Challenger

De Master a Challenger, la difference se fait sur :
- **Consistance absolue** : gagner les parties "gagnables"
- **Communication** : pings clairs et utiles
- **Connaissance des joueurs** : reconnaitre les autres high elo
- **Timing de jeu** : jouer aux heures optimales
- **Sante physique** : sommeil, alimentation, exercice

Chaque detail compte pour grappiller les LP necessaires.`,

  // Practice Instructions
  `## Objectif

Evaluer votre niveau actuel et identifier les domaines a ameliorer pour atteindre Master.

## Etapes

1. Enregistrez 5 de vos parties ranked avec un logiciel (OBS, Medal, etc.)
2. Analysez votre CS/min moyen sur ces parties
3. Comptez vos erreurs mecaniques (combos rates, skillshots manques)
4. Identifiez 3 moments ou vous ne saviez pas ou etait le jungler ennemi
5. Notez les decisions macro que vous avez prises et si elles etaient optimales
6. Creez une liste de 3 points a ameliorer en priorite

## Critere de reussite

Vous avez une analyse objective de vos forces et faiblesses, avec un plan d'amelioration concret pour progresser vers le haut elo.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Quel pourcentage de joueurs environ atteint le rang Master ou plus ?',
      'Top 10%',
      'Top 5%',
      'Top 1%',
      'Top 0.1%',
      'c',
      'Le rang Master represente environ le top 1% des joueurs classes.'
    ),
    createQuestion(
      'Quel CS/min est attendu d\'un joueur de niveau Master ?',
      '6 CS/min',
      '7 CS/min',
      '8 CS/min',
      '9+ CS/min',
      'd',
      'Les joueurs Master maintiennent generalement 9+ CS par minute meme sous pression.'
    ),
    createQuestion(
      'Combien de champions devriez-vous maitriser sur votre role principal en haut elo ?',
      '1 seul champion',
      '2-3 champions',
      '5-7 champions',
      '10+ champions',
      'b',
      'Se specialiser sur 2-3 champions permet une maitrise profonde de tous les matchups.'
    ),
    createQuestion(
      'Qu\'est-ce que le "tracking jungle" ?',
      'Suivre les stats de votre jungler',
      'Savoir ou se trouve le jungler ennemi a tout moment',
      'Compter les camps de jungle',
      'Regarder les streams de junglers',
      'b',
      'Le tracking jungle consiste a deduire et surveiller la position du jungler adverse.'
    ),
    createQuestion(
      'Pourquoi la VOD review est-elle importante pour atteindre Master ?',
      'Elle donne des LP bonus',
      'Elle permet d\'identifier ses erreurs et de s\'ameliorer',
      'Elle est obligatoire pour le rang Master',
      'Elle impressionne les recruteurs',
      'b',
      'Revoir ses parties permet d\'identifier des erreurs invisibles en temps reel.'
    ),
    createQuestion(
      'Combien de parties par jour les joueurs serieux jouent-ils pour climb ?',
      '1-2 parties',
      '3-4 parties',
      '5-10 parties',
      '15+ parties',
      'c',
      'Un volume de 5 a 10 parties par jour est typique pour les joueurs visant le haut elo.'
    ),
    createQuestion(
      'Qu\'est-ce qui separe principalement les joueurs Diamond des Master ?',
      'Les champions joues',
      'La consistance dans les performances',
      'La region de jeu',
      'Le nombre de skins possedes',
      'b',
      'La consistance, c\'est-a-dire jouer a son meilleur niveau regulierement, fait la difference.'
    ),
    createQuestion(
      'Pourquoi les "one-tricks" reussissent-ils souvent en haut elo ?',
      'Leurs champions sont plus forts',
      'Ils connaissent parfaitement tous les matchups de leur champion',
      'Le systeme favorise les one-tricks',
      'Ils jouent plus de parties',
      'b',
      'La connaissance approfondie d\'un champion dans tous les matchups donne un avantage significatif.'
    ),
    createQuestion(
      'Quel aspect non-gaming affecte les performances en haut elo ?',
      'Le nombre d\'amis en ligne',
      'La sante physique (sommeil, alimentation)',
      'Le nombre de skins',
      'L\'anciennete du compte',
      'b',
      'Le sommeil, l\'alimentation et l\'exercice physique affectent directement les reflexes et la concentration.'
    ),
    createQuestion(
      'Que signifie "jouer aux heures optimales" pour climb ?',
      'Jouer la nuit quand il y a moins de joueurs',
      'Jouer quand les meilleurs joueurs sont en ligne',
      'Jouer tot le matin pour des parties plus faciles',
      'Les heures n\'ont aucune importance',
      'b',
      'Jouer quand les joueurs serieux sont en ligne garantit des parties de meilleure qualite.'
    ),
  ]
);
