import { createModule, createQuestion } from '../utils';

export const module04EarlyLateComps = createModule(
  'Composition early-game vs late-game',
  'early-late-comps',
  'Comprendre les différences entre compositions snowball et scaling',
  4,
  // Theory Content (5+ slides)
  `## Introduction : Early vs Late game

Les compositions peuvent être classées selon leur **courbe de puissance** :
- **Early-game (snowball)** : Dominantes en début de partie, doivent finir vite
- **Late-game (scaling)** : Faibles au début, deviennent monstrueuses en fin de partie

Comprendre cette distinction est crucial pour adapter votre style de jeu.

## Les compositions early-game (snowball)

Une composition **early-game** cherche à :
- Prendre l'avantage dès les premiers niveaux
- Accumuler des kills et des objectifs rapidement
- Fermer la partie avant 25-30 minutes

**Champions typiques** :
- Top : Renekton, Pantheon, Jayce
- Jungle : Lee Sin, Elise, Rek'Sai
- Mid : LeBlanc, Syndra, Qiyana
- ADC : Draven, Lucian, Kalista
- Support : Leona, Nautilus, Thresh

## Les compositions late-game (scaling)

Une composition **late-game** cherche à :
- Survivre à la phase de lane sans trop de pertes
- Farmer et atteindre les objets clés
- Dominer après 30-35 minutes

**Champions typiques** :
- Top : Kayle, Nasus, Gangplank
- Jungle : Karthus, Master Yi, Kindred
- Mid : Kassadin, Veigar, Azir
- ADC : Kog'Maw, Jinx, Twitch, Vayne
- Support : Sona, Yuumi, Lulu

## Comment jouer une comp early-game ?

**Clés du succès** :
1. **Soyez agressifs** : Cherchez les trades, les kills, les dives
2. **Contrôlez le tempo** : Prenez tous les drakes, Rift Herald
3. **Forcez les tourelles** : Chaque tourelle = avantage croissant
4. **Ne donnez pas de respiration** : L'ennemi qui farm tranquillement vous rattrape
5. **Terminez rapidement** : Après 30min, votre avantage fond

**Erreur fatale** : ARAM mid pendant 10 minutes sans objectif.

## Comment jouer une comp late-game ?

**Clés du succès** :
1. **Jouez safe** : Évitez les morts inutiles en early
2. **Farmez efficacement** : CS > kills risqués
3. **Concédez si nécessaire** : Perdre un drake early =/= perdre la partie
4. **Attendez vos power spikes** : 2-3 objets, certains niveaux (Kassadin 16)
5. **Gagnez UN fight décisif** : Un ace en late = victoire

**Erreur fatale** : Forcer des combats à 2 objets contre leur 3 objets.

## Reconnaître et exploiter l'écart de timing

Si vous avez une comp **early vs leur late** :
- Forcez avant qu'ils ne scalent
- Chaque minute qui passe joue en leur faveur

Si vous avez une comp **late vs leur early** :
- Survivez jusqu'à vos power spikes
- Ne prenez pas de combats inutiles
- Utilisez la vision pour éviter les pièges

## Récapitulatif

- Les comps early-game doivent snowball et finir rapidement
- Les comps late-game doivent survivre et atteindre leurs power spikes
- Identifiez le timing de votre composition dès le champ select
- Adaptez votre agressivité et vos objectifs en conséquence
- L'équipe qui comprend son timing gagne généralement`,

  // Practice Instructions
  `## Objectif

Analyser les timings des compositions pour adapter votre style de jeu dès le début de la partie.

## Étapes

1. Avant chaque partie, classez votre équipe : early, mid ou late game
2. Classez également l'équipe ennemie
3. Déterminez qui a l'avantage de timing (ex: nous early, eux late)
4. Adaptez votre gameplay : agressivité si early, patience si late
5. Notez le moment où le rapport de force s'inverse (si applicable)

## Critère de réussite

Vous identifiez correctement le timing des deux équipes et adaptez votre agressivité en conséquence pendant les 3 prochaines parties.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une composition early-game ?",
      "Une équipe avec beaucoup de tanks",
      "Une équipe qui domine en début de partie et doit finir rapidement",
      "Une équipe qui scale bien",
      "Une équipe spécialisée en split-push",
      'b',
      "Une composition early-game a des champions forts en début de partie qui doivent snowball avant que l'ennemi ne scale."
    ),
    createQuestion(
      "Quel champion est typique d'une composition late-game ?",
      "Renekton",
      "Kassadin",
      "Lee Sin",
      "Draven",
      'b',
      "Kassadin est l'exemple parfait du scaling : faible en early, il devient une machine à tuer après niveau 16."
    ),
    createQuestion(
      "Comment jouer avec une composition early-game ?",
      "Farmer tranquillement jusqu'à 30 minutes",
      "Être agressif, prendre des objectifs et forcer le tempo",
      "Attendre les power spikes",
      "Éviter les combats",
      'b',
      "Une comp early doit capitaliser sur sa force initiale en étant agressive et en prenant des objectifs rapidement."
    ),
    createQuestion(
      "Quelle est l'erreur fatale d'une composition early-game ?",
      "Prendre trop de kills",
      "Faire ARAM mid sans objectif et laisser l'ennemi farm",
      "Forcer les drakes",
      "Plonger les tourelles",
      'b',
      "Si une équipe early perd du temps sans objectif, l'ennemi qui scale finit par les rattraper."
    ),
    createQuestion(
      "Comment jouer avec une composition late-game contre une équipe early ?",
      "Forcer les combats dès le niveau 1",
      "Jouer safe, éviter les morts inutiles et attendre ses power spikes",
      "Split-push agressivement",
      "Abandonner tous les drakes",
      'b',
      "Contre une équipe early, il faut survivre sans prendre trop de risques jusqu'à atteindre ses power spikes."
    ),
    createQuestion(
      "À quel moment une composition late-game devient-elle forte ?",
      "Dès le niveau 1",
      "Après 25-30 minutes avec 2-3 objets complets",
      "Uniquement après 45 minutes",
      "Quand tous les inhibiteurs sont détruits",
      'b',
      "Les champions late-game atteignent leur puissance optimale après avoir farm 2-3 objets clés, généralement vers 25-30 minutes."
    ),
    createQuestion(
      "Quelle composition est early-game ?",
      "Kayle, Karthus, Kassadin, Kog'Maw, Yuumi",
      "Renekton, Lee Sin, LeBlanc, Draven, Leona",
      "Nasus, Master Yi, Veigar, Jinx, Sona",
      "Gangplank, Kindred, Azir, Twitch, Lulu",
      'b',
      "Renekton, Lee Sin, LeBlanc, Draven et Leona sont tous des champions qui dominent en early game."
    ),
    createQuestion(
      "Que signifie 'le rapport de force s'inverse' ?",
      "L'équipe en retard prend le Baron",
      "Le moment où l'équipe late-game devient plus forte que l'équipe early",
      "Un changement de stratégie",
      "Le début de la phase de teamfight",
      'b',
      "C'est le point de bascule où l'équipe qui scale dépasse en puissance l'équipe qui était forte en early."
    ),
    createQuestion(
      "Pourquoi est-il acceptable de concéder un drake early avec une comp late ?",
      "Ce n'est jamais acceptable",
      "Parce que survivre sans mourir est plus important pour atteindre le late game",
      "Les drakes ne sont pas importants",
      "Pour économiser les sorts",
      'b',
      "Pour une équipe late, éviter les morts et atteindre ses power spikes vaut plus qu'un drake contesté dangereusement."
    ),
    createQuestion(
      "Quelle est la clé pour gagner avec une composition late-game ?",
      "Avoir le plus de kills",
      "Gagner un seul combat d'équipe décisif en fin de partie",
      "Détruire toutes les tourelles en early",
      "Farmer uniquement dans la jungle",
      'b',
      "Une équipe late peut perdre tout le early-game mais gagner avec un seul ace en fin de partie."
    ),
  ]
);
