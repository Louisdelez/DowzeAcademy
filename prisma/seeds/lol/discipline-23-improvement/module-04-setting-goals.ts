import { createModule, createQuestion } from '../utils';

export const module04SettingGoals = createModule(
  'Se fixer des objectifs',
  'setting-goals',
  'Travailler un aspect spécifique de son jeu de manière structurée',
  4,
  // Theory Content (5+ slides)
  `## L'importance des objectifs structurés

Jouer "pour monter" n'est pas un objectif, c'est un souhait. Pour progresser efficacement, vous devez vous fixer des objectifs clairs, mesurables et atteignables. Sans direction précise, vous risquez de répéter les mêmes erreurs sans jamais les corriger.

Les joueurs qui progressent le plus vite sont ceux qui savent exactement sur quoi ils travaillent. Chaque partie devient alors une opportunité d'apprentissage ciblé plutôt qu'un simple grind.

## La méthode SMART appliquée à LoL

Un bon objectif suit la méthode SMART :

- **Spécifique** : "Améliorer mon CS" → "Atteindre 7 CS/min sur Ahri"
- **Mesurable** : Vous devez pouvoir vérifier si c'est atteint
- **Atteignable** : Réaliste par rapport à votre niveau actuel
- **Relevant** : Pertinent pour votre progression globale
- **Temporel** : Avec une deadline ("en 2 semaines")

Exemple complet : "Atteindre une moyenne de 7 CS/min sur Ahri en parties ranked sur les 20 prochaines parties dans les 2 semaines à venir."

## Types d'objectifs à se fixer

**Objectifs techniques** :
- CS/min, timing de back, gestion des vagues
- Mécaniques spécifiques (combos, animation cancels)
- Placement des wards à des timings précis

**Objectifs décisionnels** :
- Regarder la minimap toutes les 5 secondes
- Ne pas chase après un kill
- Respecter le tempo de l'objectif (dragon, herald)

**Objectifs mentaux** :
- Ne pas tilt après une mort
- Rester focus jusqu'à la fin de partie
- Prendre une pause après 2 défaites consécutives

## Prioriser ses objectifs

Vous ne pouvez pas tout travailler en même temps. Voici comment prioriser :

1. **Identifiez vos 3 plus grandes faiblesses** via les stats et replays
2. **Classez-les par impact** : Quelle faiblesse vous coûte le plus de parties ?
3. **Choisissez-en UNE** à travailler en priorité
4. **Définissez un objectif SMART** pour cette faiblesse
5. **Travaillez-la pendant 1-2 semaines** avant de passer à la suivante

La tentation de tout corriger d'un coup mène généralement à ne rien corriger du tout.

## Suivre ses progrès

Pour savoir si vous progressez :

- **Tenez un journal de jeu** : Notez vos objectifs et résultats après chaque session
- **Mesurez régulièrement** : Vérifiez vos stats sur les outils d'analyse
- **Célébrez les victoires** : Reconnaissez quand vous atteignez un objectif
- **Ajustez si nécessaire** : Un objectif trop facile ou trop dur doit être recalibré

Exemple de journal :
"Session 15/01 - Objectif : 7 CS/min
- Partie 1 : 6.2 CS/min (drake fight m'a fait rater une vague)
- Partie 2 : 7.1 CS/min (objectif atteint !)
- Partie 3 : 5.8 CS/min (mort early, snowball adverse)"

## Éviter les pièges courants

**Piège 1 : Objectifs trop vagues**
"Mieux jouer" n'est pas un objectif. "Mourir moins de 4 fois par partie" l'est.

**Piège 2 : Objectifs trop nombreux**
Travailler 5 choses à la fois = ne rien travailler. Une seule priorité.

**Piège 3 : Se focaliser sur le rank**
Le rank est une conséquence, pas un objectif de travail. Concentrez-vous sur les compétences.

**Piège 4 : Abandonner trop vite**
Un objectif demande du temps. Donnez-vous au moins 20 parties avant de conclure.

**Piège 5 : Ignorer le contexte**
Certaines parties ne sont pas représentatives (AFK, troll, stomp). Analysez les tendances, pas les parties isolées.`,

  // Practice Instructions
  `## Objectif

Définir un objectif SMART personnel basé sur votre plus grande faiblesse identifiée et créer un plan de travail sur 2 semaines.

## Étapes

1. Revoyez vos statistiques des 20 dernières parties
2. Identifiez votre plus grande faiblesse mesurable (CS, deaths, vision, etc.)
3. Formulez un objectif SMART complet pour cette faiblesse
4. Définissez le nombre de parties à jouer pour atteindre cet objectif
5. Créez un mini-journal avec la date et l'objectif
6. Décidez d'un moment pour évaluer vos progrès (dans 1 semaine)
7. Notez comment vous allez mesurer votre succès

## Critère de réussite

Vous avez un objectif SMART écrit, avec une deadline de 2 semaines et une méthode de mesure claire. Exemple : "Atteindre 6.5 CS/min de moyenne sur mes 20 prochaines parties d'ici le [date], mesuré via op.gg."`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi 'monter en rank' n'est-il pas un bon objectif de travail ?",
      "Parce que c'est trop facile",
      "Parce que c'est une conséquence, pas une compétence à travailler",
      "Parce que le système est injuste",
      "Parce que c'est impossible",
      'b',
      "Le rank est une conséquence de vos compétences, pas un objectif de travail concret."
    ),
    createQuestion(
      "Que signifie le 'S' de SMART ?",
      "Simple",
      "Spécifique",
      "Stratégique",
      "Supérieur",
      'b',
      "Le S de SMART signifie Spécifique : l'objectif doit être clair et précis."
    ),
    createQuestion(
      "Combien d'objectifs devrait-on travailler simultanément ?",
      "Autant que possible",
      "Un seul à la fois",
      "Au moins 5",
      "Aucun, il faut juste jouer",
      'b',
      "Il est recommandé de se concentrer sur un seul objectif à la fois pour maximiser la progression."
    ),
    createQuestion(
      "Pendant combien de parties minimum devrait-on travailler un objectif avant de conclure ?",
      "5 parties",
      "10 parties",
      "20 parties",
      "50 parties",
      'c',
      "Il faut au moins 20 parties pour avoir des données représentatives et conclure sur un objectif."
    ),
    createQuestion(
      "Qu'est-ce qu'un journal de jeu ?",
      "Un blog pour partager ses parties",
      "Un document où noter ses objectifs et résultats après chaque session",
      "Un historique automatique des parties",
      "Un forum de discussion",
      'b',
      "Un journal de jeu est un document personnel où vous notez vos objectifs et résultats de session."
    ),
    createQuestion(
      "Quel type d'objectif concerne 'ne pas tilt après une mort' ?",
      "Objectif technique",
      "Objectif décisionnel",
      "Objectif mental",
      "Objectif impossible",
      'c',
      "C'est un objectif mental car il concerne votre état d'esprit et vos émotions."
    ),
    createQuestion(
      "Que faire si un objectif est trop facile ou trop difficile ?",
      "L'abandonner complètement",
      "Le recalibrer pour qu'il soit atteignable mais challengeant",
      "Continuer quand même",
      "Changer de champion",
      'b',
      "Un objectif doit être recalibré s'il n'est pas adapté à votre niveau actuel."
    ),
    createQuestion(
      "Quelle est la première étape pour prioriser ses objectifs ?",
      "Demander à un coach",
      "Identifier ses 3 plus grandes faiblesses via stats et replays",
      "Regarder ce que font les pros",
      "Choisir au hasard",
      'b',
      "La première étape est d'identifier objectivement ses faiblesses principales."
    ),
    createQuestion(
      "Pourquoi est-il important de célébrer quand on atteint un objectif ?",
      "Ce n'est pas important",
      "Pour reconnaître sa progression et maintenir la motivation",
      "Pour se vanter auprès des autres",
      "Pour justifier une pause longue",
      'b',
      "Célébrer ses victoires permet de reconnaître sa progression et de maintenir la motivation."
    ),
    createQuestion(
      "Quel est un exemple d'objectif SMART complet ?",
      "Devenir meilleur",
      "Atteindre 7 CS/min sur Ahri en ranked sur 20 parties en 2 semaines",
      "Monter Diamant",
      "Ne plus perdre",
      'b',
      "Cet objectif est Spécifique (7 CS/min sur Ahri), Mesurable, Atteignable, Relevant et Temporel (20 parties, 2 semaines)."
    ),
  ]
);
