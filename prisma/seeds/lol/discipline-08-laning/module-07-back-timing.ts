import { createModule, createQuestion } from '../utils';

export const module07BackTiming = createModule(
  'Timing de back',
  'back-timing',
  'Quand retourner à la base acheter',
  7,
  // Theory Content
  `## Le Back (retour à la base)

**Back** signifie retourner à la base pour acheter des objets et récupérer PV/mana. Le **timing** du back est crucial.

## Quand back ?

Bons moments pour back :
- Après avoir **push** une vague sous tourelle
- Après un **kill** sur l'adversaire
- Quand vous avez l'or pour un **item important**
- Quand vous êtes **low HP/mana** et vulnérable

## Mauvais moments pour back

Évitez de back :
- Avec une grosse vague **sous votre tourelle**
- Quand un **objectif** (dragon) spawn bientôt
- Quand l'ennemi peut **plonger** votre tourelle
- Avec une vague en **slow push** vers vous

## La règle du canon

Le canon est clé :
- Back **après** avoir kill le canon ennemi
- Vous aurez le temps de revenir pour la prochaine vague
- Perdre un canon = perdre **60-90 or**
- Le canon tank longtemps sous tourelle

## Calcul du timing

Ce qu'il faut calculer :
- Temps de **rappel** : 8 secondes
- Temps de **marche** depuis base : ~25-30 secondes
- Total : environ **35-40 secondes**
- Push avant back = la vague meurt sous tourelle ennemie

## L'item spike

Pourquoi le timing d'achat importe :
- Certains objets donnent un **power spike**
- Revenir avec un item complet = avantage
- Ne pas back avec **1300 or** sans acheter BF Sword
- Planifiez vos backs pour des achats importants`,

  // Practice Instructions
  `## Objectif

Apprendre à choisir le bon moment pour retourner à la base.

## Étapes

1. Observez votre or et vos PV régulièrement
2. Poussez la vague jusqu'à la tourelle ennemie
3. Appuyez sur B pour rappeler
4. Vérifiez que vous ne perdez pas de sbires à votre retour
5. Achetez vos objets et revenez en lane

## Critère de réussite

Vous réussissez à back sans perdre plus d'une vague et revenez avec des objets utiles.`,

  // Questions
  [
    createQuestion(
      "Quand est le meilleur moment pour back ?",
      "N'importe quand",
      "Après avoir push sous tourelle ennemie",
      "Quand les sbires sont sous votre tourelle",
      "Jamais",
      'b',
      "Back après avoir push pour que les sbires meurent sous tourelle ennemie."
    ),
    createQuestion(
      "Combien de temps dure le rappel ?",
      "4 secondes",
      "8 secondes",
      "15 secondes",
      "30 secondes",
      'b',
      "Le rappel (B) prend 8 secondes."
    ),
    createQuestion(
      "Pourquoi le canon est important pour le timing de back ?",
      "Il donne plus d'or",
      "Il tank sous tourelle, vous donnant du temps",
      "Il n'est pas important",
      "Il accélère le rappel",
      'b',
      "Le canon tank longtemps sous tourelle, donnant le temps de revenir."
    ),
    createQuestion(
      "Que faire avant de back ?",
      "Rien",
      "Push la vague",
      "Attendre",
      "Mourir",
      'b',
      "Push la vague avant de back pour minimiser les pertes."
    ),
    createQuestion(
      "Combien de temps pour revenir en lane depuis la base ?",
      "10 secondes",
      "25-30 secondes",
      "1 minute",
      "2 minutes",
      'b',
      "Il faut environ 25-30 secondes de marche depuis la base."
    ),
    createQuestion(
      "Quand ne pas back ?",
      "Après un kill",
      "Quand une grosse vague arrive sous votre tourelle",
      "Quand on a assez d'or",
      "Après avoir push",
      'b',
      "Ne back pas si vous allez perdre une grosse vague sous votre tourelle."
    ),
    createQuestion(
      "Qu'est-ce qu'un item spike ?",
      "Un bug",
      "Un boost de puissance après un achat important",
      "Une technique",
      "Un type de sbire",
      'b',
      "L'item spike est le boost de puissance obtenu avec un item clé."
    ),
    createQuestion(
      "Back avec 1300 or permet d'acheter quoi ?",
      "Rien d'important",
      "BF Sword ou item équivalent",
      "L'objet final",
      "Des bottes",
      'b',
      "1300 or permet d'acheter BF Sword, un item très efficace."
    ),
    createQuestion(
      "Que se passe-t-il si vous back au mauvais moment ?",
      "Rien",
      "Perte de CS et possibles plates perdues",
      "Vous gagnez",
      "Le jeu pause",
      'b',
      "Un mauvais back timing fait perdre du CS et parfois des plates."
    ),
    createQuestion(
      "Après un kill, pourquoi back rapidement ?",
      "Pas besoin",
      "Profiter de l'avantage avec un achat",
      "Célébrer",
      "Changer de champion",
      'b',
      "Après un kill, back pour transformer l'or en objets et dominer."
    ),
  ]
);
