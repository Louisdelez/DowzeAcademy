import { createModule, createQuestion } from '../utils';

export const module01LategameStakes = createModule(
  'Enjeux du late game',
  'lategame-stakes',
  'Chaque decision compte en fin de partie',
  1,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le late game ?

Le **late game** designe la phase finale d'une partie de League of Legends, generalement apres 30-35 minutes. A ce stade, les champions sont proches de leur puissance maximale avec leurs builds quasi-complets et leurs sorts ultimes disponibles.

Cette phase est caracterisee par des **enjeux enormes** : une seule erreur peut couter la partie, tandis qu'une bonne decision peut sceller la victoire.

## Pourquoi chaque decision compte

En late game, plusieurs facteurs amplifient l'importance de chaque action :

- **Timers de mort longs** : Mourir a 40 minutes signifie 50-60 secondes hors du jeu
- **Objectifs decisifs** : Baron et Elder Dragon peuvent retourner une partie
- **Pas de rattrapage possible** : Le temps manque pour corriger une erreur majeure
- **Super sbires** : La perte d'un inhibiteur menace directement le Nexus

## Les decisions cles du late game

Les choix strategiques en late game se concentrent sur :

1. **Quand engager** : Forcer le combat au bon moment
2. **Quel objectif prioriser** : Baron, Elder, inhibiteur, Nexus
3. **Ou se positionner** : La vision et le placement sont cruciaux
4. **Qui cibler** : Focaliser les bonnes cibles en teamfight

## L'etat d'esprit en late game

Adopter le bon **mindset** est essentiel :

- Rester calme malgre la pression
- Communiquer clairement avec l'equipe
- Eviter les decisions impulsives par frustration
- Se concentrer sur les opportunites plutot que les risques

Un joueur qui garde son sang-froid en late game a un avantage mental considerable.

## Les erreurs fatales a eviter

Certaines erreurs sont particulierement couteuses :

- **Se faire pick** : Mourir seul donne un avantage numerique decisif
- **Forcer sans vision** : Risquer un Baron sans savoir ou est l'ennemi
- **Ignorer les waves** : Laisser les sbires detruire vos tourelles
- **Mauvais timing de recall** : Retourner a la base quand l'equipe a besoin de vous
- **Overchase** : Poursuivre trop loin apres un kill

## Recapitulatif

- Le late game commence vers 30-35 minutes
- Les timers de mort longs rendent chaque vie precieuse
- Une seule erreur peut decider l'issue de la partie
- La prise de decision calme et reflechie est primordiale
- Evitez les picks, les forces sans vision et les overchases`,

  // Practice Instructions
  `## Objectif

Prendre conscience de l'impact des decisions en late game en analysant une partie.

## Etapes

1. Regardez un replay d'une de vos parties qui a depasse 35 minutes
2. Identifiez le moment exact ou la partie s'est decidee
3. Analysez la decision qui a mene a ce moment (bonne ou mauvaise)
4. Notez les alternatives qui etaient possibles
5. Reflechissez a comment vous auriez pu mieux gerer cette situation

## Critere de reussite

Vous pouvez identifier au moins 3 decisions cles de votre partie et expliquer leur impact sur le resultat final.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "A partir de quelle duree de jeu considere-t-on generalement etre en late game ?",
      "10-15 minutes",
      "20-25 minutes",
      "30-35 minutes",
      "45-50 minutes",
      'c',
      "Le late game commence generalement vers 30-35 minutes quand les champions approchent de leur puissance maximale."
    ),
    createQuestion(
      "Pourquoi les decisions sont-elles plus importantes en late game ?",
      "Parce que les champions sont plus faibles",
      "Parce que les timers de mort sont courts",
      "Parce qu'il n'y a plus le temps de corriger les erreurs",
      "Parce que les objectifs ne comptent plus",
      'c',
      "En late game, les timers de mort longs et le manque de temps rendent chaque erreur potentiellement fatale."
    ),
    createQuestion(
      "Quel est l'un des facteurs qui amplifie l'importance des decisions en late game ?",
      "Les timers de mort courts",
      "L'abondance de temps pour corriger les erreurs",
      "Les timers de mort longs (50-60 secondes)",
      "La faiblesse des objectifs",
      'c',
      "Les timers de mort peuvent atteindre 50-60 secondes en late game, rendant chaque mort tres couteuse."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'pick' en late game ?",
      "Choisir son champion",
      "Tuer un ennemi isole",
      "Prendre un objectif",
      "Acheter un objet",
      'b',
      "Un pick designe le fait de tuer un ennemi qui s'est retrouve seul, creant un avantage numerique."
    ),
    createQuestion(
      "Quelle erreur est particulierement couteuse en late game ?",
      "Farmer les sbires",
      "Se faire pick en etant seul",
      "Avoir trop de vision",
      "Rester groupe avec l'equipe",
      'b',
      "Se faire pick en etant seul donne un avantage numerique decisif a l'ennemi en late game."
    ),
    createQuestion(
      "Quel etat d'esprit faut-il adopter en late game ?",
      "Prendre des risques maximum",
      "Jouer de facon impulsive",
      "Rester calme et reflechi",
      "Ignorer les communications",
      'c',
      "Rester calme et reflechi permet de prendre de meilleures decisions sous pression."
    ),
    createQuestion(
      "Qu'est-ce que l'overchase ?",
      "Attaquer plusieurs ennemis",
      "Poursuivre trop loin apres un kill",
      "Farmer trop de sbires",
      "Prendre trop d'objectifs",
      'b',
      "L'overchase consiste a poursuivre un ennemi trop loin, risquant de se faire tuer ou de perdre un objectif."
    ),
    createQuestion(
      "Pourquoi la vision est-elle cruciale en late game ?",
      "Elle n'est plus importante",
      "Pour savoir quand forcer les objectifs en securite",
      "Uniquement pour le jungler",
      "Pour voir les sbires",
      'b',
      "La vision permet de savoir ou est l'ennemi et de prendre des objectifs en securite."
    ),
    createQuestion(
      "Que se passe-t-il si un inhibiteur est detruit en late game ?",
      "Rien de special",
      "Les super sbires menacent directement le Nexus",
      "L'equipe gagne plus d'or",
      "Les tourelles se regenerent",
      'b',
      "Les super sbires generes par un inhibiteur detruit exercent une pression enorme sur le Nexus."
    ),
    createQuestion(
      "Quelles sont les decisions cles du late game ?",
      "Uniquement le farm",
      "Quand engager, quel objectif prioriser, ou se positionner",
      "Juste les kills",
      "Attendre passivement",
      'b',
      "Les decisions cles incluent le timing d'engagement, la priorisation des objectifs et le positionnement."
    ),
  ]
);
