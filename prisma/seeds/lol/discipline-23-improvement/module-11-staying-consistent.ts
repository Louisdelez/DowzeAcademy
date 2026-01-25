import { createModule, createQuestion } from '../utils';

export const module11StayingConsistent = createModule(
  'Rester constant',
  'staying-consistent',
  'Privilégier la qualité sur la quantité et maintenir une performance stable',
  11,
  // Theory Content (5+ slides)
  `## La constance : clé de la progression

La **constance** est souvent plus importante que le talent brut. Un joueur qui maintient un niveau stable progresse plus vite qu'un joueur brillant mais irrégulier. La clé est de minimiser les variations de performance entre vos parties.

Un joueur constant :
- Performe de manière similaire d'une partie à l'autre
- Ne tilt pas après une défaite
- Maintient sa concentration tout au long de la session
- Sait quand s'arrêter

Les pros ne sont pas seulement bons, ils sont **constamment** bons.

## Qualité vs Quantité

L'erreur commune est de penser que jouer **plus** = progresser **plus**. En réalité :

**10 parties de qualité** > **30 parties en autopilot**

Une partie de qualité :
- Vous êtes concentré du début à la fin
- Vous prenez des décisions actives
- Vous analysez vos erreurs après
- Vous n'êtes pas fatigué, tilté ou distrait

Le grind aveugle renforce les mauvaises habitudes. Mieux vaut 2-3 parties par jour avec une vraie concentration que 10 parties jouées distraitement.

## Conditions optimales de jeu

Pour des parties de qualité, optimisez vos conditions :

**Physiques** :
- Suffisamment reposé (pas de ranked à 3h du matin)
- Bien hydraté et nourri
- Confortable (position, température)

**Mentales** :
- État d'esprit positif
- Pas de stress externe (travail, famille)
- Prêt à se concentrer

**Techniques** :
- Connexion stable
- Matériel fonctionnel
- Pas de distractions (notifications, TV)

Si ces conditions ne sont pas réunies, jouez en normale ou faites autre chose.

## La règle des 2 défaites

Une règle simple mais efficace : **arrêtez-vous après 2 défaites consécutives**.

Pourquoi ça fonctionne :
- Après 2 défaites, le tilt s'installe souvent
- Votre jugement est affecté par la frustration
- Vous risquez de faire du "tilt queue" et d'enchaîner les pertes

Après ces 2 défaites :
1. Faites une pause de 15-30 minutes minimum
2. Faites autre chose (stretch, snack, air frais)
3. Évaluez si vous êtes prêt à reprendre
4. Si vous sentez encore la frustration, arrêtez pour la journée

Cette discipline simple peut sauver des dizaines de LP par semaine.

## Créer une routine de jeu

Une routine structure votre pratique :

**Avant de jouer** :
- Warm-up : 5-10 minutes en training tool ou ARAM
- Mental check : suis-je prêt à me concentrer ?
- Objectif du jour : sur quoi vais-je me concentrer ?

**Pendant la session** :
- Maximum 2-3 heures de ranked consécutives
- Pauses de 5 minutes entre les parties
- Hydratation régulière

**Après la session** :
- Mini-analyse : qu'ai-je bien fait ? Qu'aurais-je pu améliorer ?
- Éviter de jouer "une dernière" quand vous êtes fatigué
- Noter les leçons apprises

Une routine transforme le chaos en processus d'amélioration structuré.

## Gérer les variations naturelles

Même avec une bonne routine, des variations sont inévitables :

**Variations normales** :
- Certains jours vous jouez mieux que d'autres
- Les matchups affectent les résultats
- Le RNG des teammates existe

**Comment les gérer** :
- Acceptez que des journées difficiles arrivent
- Ne jugez pas votre progression sur une seule session
- Regardez les tendances sur 20-50 parties, pas sur 5

**Red flags** (signes qu'il faut s'arrêter) :
- Vous blâmez vos teammates constamment
- Vous tilter avant même que la partie commence
- Vous faites des erreurs que vous ne faites jamais normalement
- Vous n'appréciez plus le jeu

La constance vient de la discipline, pas de la volonté. Créez des règles et respectez-les.`,

  // Practice Instructions
  `## Objectif

Créer votre routine personnelle de jeu ranked et vous engager à la suivre pendant une semaine.

## Étapes

1. Déterminez vos horaires optimaux de jeu (quand êtes-vous le plus alerte ?)
2. Décidez du nombre maximum de parties ranked par session (2-3 recommandé)
3. Créez une routine de warm-up de 5-10 minutes
4. Adoptez la règle des 2 défaites consécutives
5. Planifiez des pauses entre les parties
6. Décidez d'une mini-analyse post-session
7. Écrivez cette routine et affichez-la près de votre écran

## Critère de réussite

Vous avez une routine écrite avec : horaires de jeu, warm-up, nombre max de parties, règle des 2 défaites, et processus post-session. Engagement à la suivre pendant 7 jours.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la constance est-elle plus importante que le talent brut ?",
      "Elle ne l'est pas",
      "Un joueur stable progresse plus vite qu'un joueur brillant mais irrégulier",
      "Le talent n'existe pas",
      "La constance est facile à développer",
      'b',
      "La régularité de performance permet une progression plus fiable que des pics occasionnels."
    ),
    createQuestion(
      "Que vaut-il mieux entre qualité et quantité de parties ?",
      "La quantité prime toujours",
      "10 parties de qualité valent mieux que 30 en autopilot",
      "C'est équivalent",
      "Il faut jouer le plus possible",
      'b',
      "Des parties jouées avec concentration et analyse sont plus formatrices qu'un grind sans réflexion."
    ),
    createQuestion(
      "Que recommande la règle des 2 défaites ?",
      "Jouer jusqu'à gagner 2 parties",
      "S'arrêter et faire une pause après 2 défaites consécutives",
      "Ne jamais perdre plus de 2 fois",
      "Jouer 2 fois plus après une défaite",
      'b',
      "Après 2 défaites consécutives, faire une pause permet d'éviter le tilt queue."
    ),
    createQuestion(
      "Que faire après les 2 défaites consécutives ?",
      "Enchaîner pour se rattraper",
      "Prendre une pause de 15-30 minutes minimum",
      "Changer de champion",
      "Jouer en normal",
      'b',
      "Une pause de 15-30 minutes permet de se calmer et d'évaluer si on est prêt à reprendre."
    ),
    createQuestion(
      "Quelle condition physique n'est PAS optimale pour jouer ranked ?",
      "Être bien reposé",
      "Être bien hydraté",
      "Jouer à 3h du matin fatigué",
      "Être confortablement installé",
      'c',
      "Jouer fatigué tard dans la nuit n'est pas une condition optimale pour des parties de qualité."
    ),
    createQuestion(
      "Combien de temps de warm-up est recommandé avant de jouer ranked ?",
      "Aucun, c'est une perte de temps",
      "5-10 minutes en training tool ou ARAM",
      "1 heure minimum",
      "30 minutes exactement",
      'b',
      "5-10 minutes de warm-up suffisent à préparer les réflexes avant le ranked."
    ),
    createQuestion(
      "Quelle est la durée maximum recommandée pour une session de ranked ?",
      "Aussi longtemps que possible",
      "2-3 heures consécutives",
      "30 minutes",
      "8 heures",
      'b',
      "2-3 heures de ranked consécutives permettent de maintenir la concentration sans fatigue excessive."
    ),
    createQuestion(
      "Sur combien de parties devrait-on juger sa progression ?",
      "5 parties",
      "20-50 parties",
      "1 partie",
      "100+ parties uniquement",
      'b',
      "Les tendances sur 20-50 parties sont plus représentatives qu'une seule session."
    ),
    createQuestion(
      "Quel est un red flag indiquant qu'il faut s'arrêter de jouer ?",
      "Vous gagnez trop facilement",
      "Vous blâmez vos teammates constamment",
      "Le matchmaking est rapide",
      "Vos amis vous invitent",
      'b',
      "Blâmer constamment les autres est un signe de tilt et indique qu'il faut faire une pause."
    ),
    createQuestion(
      "D'où vient la constance selon le module ?",
      "Du talent naturel",
      "De la discipline et des règles qu'on se fixe",
      "De la chance",
      "Du champion joué",
      'b',
      "La constance vient de la discipline et du respect des règles qu'on s'impose, pas de la volonté seule."
    ),
  ]
);
