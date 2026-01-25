import { createModule, createQuestion } from '../utils';

export const module05RankingSystem = createModule(
  'Comprendre le système de classement',
  'ranking-system',
  'Maîtriser le fonctionnement du MMR, des LP et du système ranked',
  5,
  // Theory Content (5+ slides)
  `## Structure du système ranked

Le système de classement de League of Legends est composé de **rangs** divisés en **divisions**. Du plus bas au plus haut :

- **Fer** (Iron) : IV, III, II, I
- **Bronze** : IV, III, II, I
- **Argent** (Silver) : IV, III, II, I
- **Or** (Gold) : IV, III, II, I
- **Platine** : IV, III, II, I
- **Émeraude** (Emerald) : IV, III, II, I
- **Diamant** : IV, III, II, I
- **Maître** (Master) : pas de divisions
- **Grand Maître** (Grandmaster) : pas de divisions
- **Challenger** : pas de divisions

Chaque division requiert 100 LP (League Points) pour passer à la suivante.

## Les LP : League Points

Les **LP** sont les points visibles qui mesurent votre progression dans une division. Vous gagnez des LP en gagnant des parties et en perdez en les perdant.

Fonctionnement :
- **Victoire** : +15 à +30 LP (selon votre MMR)
- **Défaite** : -15 à -25 LP
- **À 100 LP** : Promotion vers la division supérieure
- **À 0 LP** : Risque de rétrogradation après plusieurs défaites

Les gains/pertes de LP dépendent de votre MMR par rapport à votre rang visible.

## Le MMR : Matchmaking Rating

Le **MMR** (Matchmaking Rating) est votre "vrai" niveau, invisible mais crucial. C'est lui qui détermine :
- Contre qui vous jouez
- Combien de LP vous gagnez/perdez
- La difficulté de votre climb

Si votre MMR est plus haut que votre rang visible, vous gagnez plus de LP que vous n'en perdez (signe que vous devriez être plus haut). L'inverse signifie que le système pense que vous êtes trop haut.

Le MMR se base sur vos victoires/défaites, mais aussi sur le MMR de vos adversaires.

## Gains et pertes de LP : ce qui les influence

Plusieurs facteurs affectent vos gains de LP :

**Facteurs positifs** (plus de LP gagnés) :
- Battre des joueurs avec un MMR plus élevé
- Avoir un MMR supérieur à votre rang actuel
- Série de victoires consécutives

**Facteurs négatifs** (moins de LP gagnés) :
- Perdre contre des joueurs avec un MMR plus bas
- Avoir un MMR inférieur à votre rang actuel
- Être récemment promu après avoir perdu en promo plusieurs fois

Si vous gagnez +12 LP et perdez -20 LP, votre MMR est trop bas pour votre rang.

## Promotions et rétrogradations

**Promotions** :
- À 100 LP, vous êtes promu automatiquement à la division supérieure
- Les anciennes séries de promo (Bo3, Bo5) ont été supprimées
- Monter de rang (ex: Gold → Platine) nécessite toujours 100 LP en division I

**Rétrogradations** :
- À 0 LP, après plusieurs défaites (généralement 3), vous redescendez
- Vous avez une "protection" de quelques parties à 0 LP
- Redescendre d'un rang entier est possible mais avec plus de protection

La clé est de ne pas s'inquiéter des LP mais de se concentrer sur l'amélioration de son niveau réel.

## Conseils pour climb efficacement

Pour monter efficacement :

1. **Ignorez les LP, concentrez-vous sur votre jeu** : Le rank suit naturellement le skill
2. **Maintenez un winrate positif** : Même 51% vous fera monter sur le long terme
3. **Jouez régulièrement** : La consistance bat les sessions marathon
4. **Évitez le tilt queue** : Arrêtez après 2-3 défaites consécutives
5. **Comprenez que les fluctuations sont normales** : Personne ne gagne 100% des parties

Le système est conçu pour que vous atteigniez votre "vrai" rang avec suffisamment de parties. Faites confiance au processus et concentrez-vous sur l'amélioration.`,

  // Practice Instructions
  `## Objectif

Analyser vos gains et pertes de LP récents pour évaluer l'état de votre MMR.

## Étapes

1. Jouez 5 parties ranked (ou utilisez vos 5 dernières si déjà jouées)
2. Notez précisément les LP gagnés pour chaque victoire
3. Notez précisément les LP perdus pour chaque défaite
4. Calculez la moyenne de LP gagnés et perdus
5. Comparez : gagnez-vous plus que vous ne perdez ?
6. Évaluez l'état de votre MMR (bon, neutre, ou à améliorer)
7. Identifiez si vous êtes au bon rang selon vos gains/pertes

## Critère de réussite

Vous savez combien de LP vous gagnez/perdez en moyenne et pouvez évaluer si votre MMR est sain (gains > pertes) ou à améliorer (pertes > gains).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien de LP faut-il atteindre pour être promu à la division supérieure ?",
      "50 LP",
      "75 LP",
      "100 LP",
      "150 LP",
      'c',
      "Il faut atteindre 100 LP pour être promu à la division supérieure."
    ),
    createQuestion(
      "Qu'est-ce que le MMR ?",
      "Le nombre de parties jouées",
      "Le niveau invisible qui détermine vos matchs et gains de LP",
      "Le nombre de champions possédés",
      "Le score de comportement",
      'b',
      "Le MMR (Matchmaking Rating) est votre niveau invisible qui influence les matchs et les LP."
    ),
    createQuestion(
      "Que signifie gagner +12 LP et perdre -20 LP ?",
      "Votre MMR est trop haut pour votre rang",
      "Votre MMR est trop bas pour votre rang",
      "Le système est buggé",
      "Vous jouez trop de parties",
      'b',
      "Des gains faibles et des pertes élevées indiquent un MMR inférieur à votre rang visible."
    ),
    createQuestion(
      "Quel rang vient juste après Platine ?",
      "Diamant",
      "Émeraude",
      "Maître",
      "Or",
      'b',
      "Émeraude (Emerald) est le rang entre Platine et Diamant."
    ),
    createQuestion(
      "Combien de divisions possède chaque rang (sauf Master+) ?",
      "3 (III, II, I)",
      "4 (IV, III, II, I)",
      "5 (V, IV, III, II, I)",
      "2 (II, I)",
      'b',
      "Chaque rang de Fer à Diamant possède 4 divisions : IV, III, II et I."
    ),
    createQuestion(
      "Que se passe-t-il à 0 LP après plusieurs défaites ?",
      "Rien, vous restez à 0 LP",
      "Vous êtes rétrogradé à la division inférieure",
      "Vous perdez votre compte",
      "Vos LP deviennent négatifs",
      'b',
      "Après plusieurs défaites à 0 LP, vous êtes rétrogradé à la division inférieure."
    ),
    createQuestion(
      "Quelle approche est recommandée pour climb ?",
      "Se concentrer sur les LP",
      "Ignorer les LP et se concentrer sur l'amélioration de son jeu",
      "Ne jouer que quand on gagne beaucoup de LP",
      "Jouer uniquement en duo",
      'b',
      "Il vaut mieux se concentrer sur son amélioration personnelle, le rank suivra naturellement."
    ),
    createQuestion(
      "Qu'est-ce que le 'tilt queue' ?",
      "Une file d'attente prioritaire",
      "Continuer à jouer après plusieurs défaites consécutives sous l'effet de la frustration",
      "Un mode de jeu spécial",
      "Une technique de pro",
      'b',
      "Le tilt queue consiste à continuer de jouer après des défaites consécutives, souvent sous l'effet de la frustration."
    ),
    createQuestion(
      "Quel winrate minimum permet de monter sur le long terme ?",
      "50% exactement",
      "51% ou plus",
      "60% minimum",
      "75% minimum",
      'b',
      "Même un winrate de 51% permet de monter sur le long terme grâce à l'accumulation de LP."
    ),
    createQuestion(
      "Pourquoi les rangs Master, Grandmaster et Challenger n'ont-ils pas de divisions ?",
      "C'est un bug",
      "Ils sont classés par LP total plutôt que par divisions",
      "Il n'y a pas assez de joueurs",
      "C'est temporaire",
      'b',
      "Les rangs Master+ sont classés directement par LP total car ce sont les plus hauts niveaux du jeu."
    ),
  ]
);
