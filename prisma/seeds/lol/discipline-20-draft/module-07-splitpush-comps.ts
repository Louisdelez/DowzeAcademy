import { createModule, createQuestion } from '../utils';

export const module07SplitpushComps = createModule(
  'Compositions split-push',
  'splitpush-comps',
  'Maîtriser la stratégie de pression latérale avec des duellistes de side-lane',
  7,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le split-push ?

Le **split-push** est une stratégie où un ou deux membres de l'équipe créent de la pression sur les **lanes latérales** pendant que le reste de l'équipe occupe l'attention ennemie ailleurs.

L'objectif est de **forcer des choix impossibles** : défendre la lane splittée ou perdre ailleurs.

## Champions de split-push typiques

Les split-pushers sont généralement de **bons duellistes** avec de la mobilité :

- **Top** : Fiora, Tryndamere, Camille, Jax, Shen
- **Mid** : Twisted Fate (map pressure), Akali
- **Jungle** : Master Yi, Kindred

Caractéristiques communes :
- Gagnent les 1v1 et 1v2
- Ont de l'escape ou sustain pour survivre
- Push rapidement les waves et les tourelles

## Le principe du 1-3-1 et du 1-4

**1-3-1** : Deux split-pushers sur les side-lanes, 3 mid
- Crée une pression maximum sur toute la carte
- Requiert des champions avec TP ou mobilité globale

**1-4** : Un split-pusher, 4 qui groupent
- Plus facile à exécuter
- Le groupe de 4 doit pouvoir éviter les engages 4v5

Dans les deux cas, le split-pusher doit **attirer l'attention** de plusieurs ennemis.

## Comment jouer en split-push ?

**Le split-pusher doit** :
1. Push la wave jusqu'à la tourelle
2. Placer des wards défensives
3. Attirer l'attention d'au moins 2 ennemis
4. Échapper ou les tuer en 1v2

**Le reste de l'équipe doit** :
1. Créer de la pression ailleurs (objectif, autre lane)
2. Ne PAS engager 4v5 sans raison
3. Capitaliser quand les ennemis répondent au split
4. Communiquer l'état de la carte

## Forces et faiblesses du split-push

**Forces** :
- Évite les teamfights défavorables
- Crée un dilemme constant pour l'ennemi
- Peut prendre des inhibiteurs sans combat
- Excellent contre les compositions de teamfight

**Faiblesses** :
- Requiert une excellente macro et communication
- Si le split-pusher meurt, c'est catastrophique
- Difficile à exécuter en soloQ
- Vulnérable aux CC chaînés

## Comment contrer le split-push ?

**Contre-stratégies** :
1. **Champion qui peut hold 1v1** : Envoyez quelqu'un qui ne perdra pas le duel
2. **Engage rapide 5v4** : Forcez un combat avant que le split ait de la valeur
3. **Vision agressive** : Suivez le split-pusher avec des wards
4. **Réponse TP** : Gardez un TP pour répondre au split
5. **Poke sous tourelle** : Défendez sans engager en 4v4

## Récapitulatif

- Le split-push crée de la pression latérale pendant que le reste de l'équipe occupe l'ennemi
- Fiora, Tryndamere, Jax sont des split-pushers classiques
- Le 1-3-1 et le 1-4 sont les formations typiques
- L'équipe doit capitaliser quand l'ennemi répond au split
- Contrez avec des duellistes, des engages rapides ou la vision`,

  // Practice Instructions
  `## Objectif

Pratiquer la stratégie de split-push en comprenant le timing et la coordination nécessaires.

## Étapes

1. Choisissez un champion de split-push (Tryndamere, Fiora, Jax)
2. Après la phase de lane, identifiez quelle side-lane vous devez push
3. Placez des wards défensives avant de push profondément
4. Communiquez avec votre équipe : "Je split top, groupez mid pour pression"
5. Retirez-vous si plus de 2 ennemis viennent vous répondre
6. Notez les moments où votre split a permis à l'équipe de prendre un objectif

## Critère de réussite

Vous avez réussi à attirer l'attention d'au moins 2 ennemis pendant que votre équipe prenait un objectif ou une tourelle.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le split-push ?",
      "Une stratégie de teamfight",
      "Créer de la pression sur les lanes latérales pendant que le reste de l'équipe occupe l'ennemi",
      "Un type de jungle clear",
      "Une technique de farm en early game",
      'b',
      "Le split-push vise à diviser l'attention de l'ennemi entre plusieurs points de pression sur la carte."
    ),
    createQuestion(
      "Quel champion est un split-pusher emblématique ?",
      "Amumu",
      "Fiora",
      "Soraka",
      "Miss Fortune",
      'b',
      "Fiora est une duelliste exceptionnelle qui peut gagner presque tous les 1v1 et 1v2, parfaite pour le split."
    ),
    createQuestion(
      "Qu'est-ce que la formation 1-3-1 ?",
      "1 jungler, 3 mid, 1 ADC",
      "Deux split-pushers sur les side-lanes et 3 joueurs mid",
      "1 tank, 3 carries, 1 support",
      "Une composition de teamfight",
      'b',
      "Le 1-3-1 place un split-pusher sur chaque lane latérale avec 3 joueurs qui maintiennent la pression mid."
    ),
    createQuestion(
      "Que doit faire le reste de l'équipe pendant un split-push ?",
      "Engager 4v5 pour gagner rapidement",
      "Créer de la pression ailleurs et capitaliser quand l'ennemi répond au split",
      "Attendre passivement",
      "Suivre le split-pusher",
      'b',
      "L'équipe doit menacer des objectifs pour que l'ennemi ait des choix impossibles."
    ),
    createQuestion(
      "Quelle est une faiblesse majeure du split-push ?",
      "Il ne permet pas de prendre des tourelles",
      "Si le split-pusher meurt, c'est catastrophique pour l'équipe",
      "Il est trop facile à exécuter",
      "Il ne fonctionne qu'en early game",
      'b',
      "La mort du split-pusher donne un avantage numérique à l'ennemi et annule toute la pression créée."
    ),
    createQuestion(
      "Comment contrer une stratégie de split-push ?",
      "Ignorer le split-pusher",
      "Engager rapidement 5v4 contre le reste de l'équipe",
      "Se regrouper dans la base",
      "Farmer passivement",
      'b',
      "Forcer un combat 5v4 avant que le split-push ne génère de valeur est une excellente contre-stratégie."
    ),
    createQuestion(
      "Pourquoi la vision est-elle cruciale pour le split-pusher ?",
      "Pour farm les camps neutres",
      "Pour voir les ennemis qui viennent le tuer et pouvoir s'échapper",
      "Pour trouver des kills",
      "La vision n'est pas importante",
      'b',
      "Le split-pusher a besoin de wards défensives pour survivre quand plusieurs ennemis viennent le tuer."
    ),
    createQuestion(
      "Combien d'ennemis le split-pusher doit-il attirer pour que la stratégie soit efficace ?",
      "Aucun, il doit juste push",
      "Au moins 2 ennemis, créant un avantage numérique pour son équipe ailleurs",
      "Les 5 ennemis",
      "1 seul ennemi",
      'b',
      "Si le split attire 2+ ennemis, son équipe a un avantage 4v3 ou mieux ailleurs sur la carte."
    ),
    createQuestion(
      "Quelle composition est efficace contre le split-push ?",
      "Une composition de poke",
      "Une composition avec des champions qui peuvent gagner les 1v1 et des engages rapides",
      "Une composition full late game",
      "Une composition sans CC",
      'b',
      "Des duellistes pour contenir le split et des engages pour punir le reste de l'équipe en infériorité."
    ),
    createQuestion(
      "Pourquoi le split-push est-il particulièrement efficace contre les comps de teamfight ?",
      "Parce qu'il fait plus de dégâts",
      "Parce qu'il évite de donner à l'ennemi le combat 5v5 qu'il recherche",
      "Parce qu'il permet de prendre plus de kills",
      "Ce n'est pas efficace contre le teamfight",
      'b',
      "Le split-push ne groupe jamais, privant l'équipe de teamfight de l'opportunité qu'elle recherche."
    ),
  ]
);
