import { createModule, createQuestion } from '../utils';

export const module09PlayerHealth = createModule(
  'Hygiène de vie du joueur',
  'player-health',
  "Maintenir une bonne santé physique et mentale pour des performances optimales",
  9,
  // Theory Content (5+ slides)
  `## La santé du joueur : un facteur clé

Votre condition physique et mentale impacte directement vos performances en jeu. Les meilleurs joueurs professionnels intègrent l'hygiène de vie dans leur routine d'entraînement.

## Le sommeil : votre meilleur allié

Le manque de sommeil affecte gravement vos capacités :
- **Temps de réaction** : Jusqu'à 50% plus lent
- **Prise de décision** : Jugement altéré
- **Concentration** : Difficile à maintenir
- **Tilt** : Plus susceptible aux émotions négatives

Visez **7-9 heures de sommeil** par nuit. Évitez les sessions nocturnes avant des parties importantes.

## Alimentation et hydratation

Ce que vous consommez affecte votre jeu :
- **Hydratation** : Buvez régulièrement de l'eau (déshydratation = fatigue)
- **Sucres rapides** : Pic d'énergie puis crash - à éviter
- **Repas équilibrés** : Énergie stable sur la durée
- **Caféine** : Modération - trop de café cause nervosité

Évitez de jouer juste après un gros repas (somnolence).

## Les pauses et l'exercice

Le corps a besoin de mouvement :
- **Pause toutes les heures** : 5-10 minutes minimum
- **Étirements** : Poignets, cou, dos, épaules
- **Exercice régulier** : Améliore concentration et énergie
- **Règle des yeux** : Toutes les 20 min, regardez à 6m pendant 20 secondes

Les pros font des sessions courtes avec des pauses planifiées.

## La santé mentale et le tilt

Le mental est aussi important que le physique :
- **Reconnaître le tilt** : Savoir quand vous n'êtes plus en condition
- **Limiter les sessions** : Qualité > Quantité
- **Équilibre vie/jeu** : Gardez d'autres activités
- **Parler** : N'hésitez pas à chercher du soutien si nécessaire

Le jeu doit rester un plaisir. Si ce n'est plus le cas, faites une pause.`,

  // Practice Instructions
  `## Objectif

Évaluer votre hygiène de vie actuelle et créer un plan d'amélioration pour optimiser vos performances gaming.

## Étapes

1. Notez vos heures de sommeil moyennes de la dernière semaine
2. Évaluez votre hydratation : combien d'eau buvez-vous pendant une session de jeu ?
3. Chronométrez une session : combien de temps jouez-vous sans pause ?
4. Faites les étirements suivants : rotation des poignets, étirement du cou, roulement des épaules
5. Identifiez 3 points à améliorer dans votre hygiène de vie
6. Planifiez : créez un rappel pour prendre une pause toutes les heures

## Critère de réussite

Vous avez identifié 3 axes d'amélioration de votre hygiène de vie et mis en place au moins un rappel de pause.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "De combien le temps de réaction peut-il être affecté par le manque de sommeil ?",
      "10% plus lent",
      "Jusqu'à 50% plus lent",
      "5% plus lent",
      "Aucun effet",
      'b',
      "Le manque de sommeil peut ralentir les réactions de près de 50%."
    ),
    createQuestion(
      "Combien d'heures de sommeil sont recommandées par nuit ?",
      "4-5 heures",
      "7-9 heures",
      "10-12 heures",
      "Autant que possible",
      'b',
      "7-9 heures de sommeil sont recommandées pour une performance optimale."
    ),
    createQuestion(
      "Pourquoi les sucres rapides sont-ils déconseillés pendant le jeu ?",
      "Ils sont trop chers",
      "Ils causent un pic d'énergie puis un crash",
      "Ils sont interdits par Riot",
      "Ils n'ont aucun effet",
      'b',
      "Les sucres rapides donnent une énergie brève suivie d'une chute de performance."
    ),
    createQuestion(
      "À quelle fréquence devriez-vous prendre une pause pendant le jeu ?",
      "Jamais pendant une session",
      "Toutes les heures environ",
      "Toutes les 4 heures",
      "Uniquement quand vous perdez",
      'b',
      "Des pauses régulières (environ toutes les heures) maintiennent les performances."
    ),
    createQuestion(
      "Que recommande la 'règle des yeux' ?",
      "Fermer les yeux pendant 1 minute",
      "Regarder à 6m pendant 20 secondes toutes les 20 minutes",
      "Cligner des yeux plus souvent",
      "Porter des lunettes gaming",
      'b',
      "Cette règle aide à prévenir la fatigue oculaire en faisant des pauses visuelles."
    ),
    createQuestion(
      "Quels étirements sont recommandés pour les joueurs ?",
      "Uniquement les jambes",
      "Poignets, cou, dos et épaules",
      "Aucun étirement n'est utile",
      "Uniquement le dos",
      'b',
      "Ces zones sont les plus sollicitées et doivent être étirées régulièrement."
    ),
    createQuestion(
      "Pourquoi l'hydratation est-elle importante pendant le jeu ?",
      "Elle améliore les graphismes",
      "La déshydratation cause de la fatigue",
      "Elle réduit le ping",
      "Elle n'a pas d'importance",
      'b',
      "La déshydratation affecte la concentration et cause de la fatigue."
    ),
    createQuestion(
      "Que faire quand vous reconnaissez être en tilt ?",
      "Continuer à jouer pour se rattraper",
      "Faire une pause ou arrêter la session",
      "Jouer en ranked pour se prouver quelque chose",
      "Blamer ses coéquipiers",
      'b',
      "Jouer en tilt empire généralement les résultats, mieux vaut faire une pause."
    ),
    createQuestion(
      "Quel est l'impact de l'exercice physique régulier sur le gaming ?",
      "Aucun impact",
      "Améliore la concentration et l'énergie",
      "Diminue les réflexes",
      "Fatigue trop pour jouer",
      'b',
      "L'exercice régulier améliore les capacités cognitives et l'énergie."
    ),
    createQuestion(
      "Quelle attitude adopter si le jeu ne procure plus de plaisir ?",
      "Forcer jusqu'à ce que ça revienne",
      "Faire une pause et chercher du soutien si nécessaire",
      "Jouer encore plus",
      "Changer de jeu immédiatement",
      'b',
      "Il est important de prendre du recul et de chercher du soutien si nécessaire."
    ),
  ]
);
