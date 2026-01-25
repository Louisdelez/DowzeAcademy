import { createModule, createQuestion } from '../utils';

export const module06SupportRoaming = createModule(
  'Roaming du support',
  'support-roaming',
  'Quitter la botlane stratégiquement pour impacter les autres lanes',
  6,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le roaming ?

Le **roaming** consiste à quitter temporairement votre lane pour **impacter une autre partie de la carte**. C'est une compétence essentielle du support qui peut transformer l'état du jeu en aidant le midlaner ou le jungler.

## Quand roamer ?

Les bons moments pour roamer :
- Après avoir **push la vague** sous la tourelle ennemie
- Quand votre ADC **recall** ou est en sécurité
- Quand le **midlaner ennemi** est overextended
- Pour aider votre jungler sur un **objectif** (Drake, invade)
- Quand la botlane est dans un **état stable** (ni winning ni losing hard)

## Les routes de roam

**Vers le mid** : passez par la rivière ou par votre jungle. Gardez un oeil sur la vision ennemie pour éviter d'être spotté. Un roam non détecté est bien plus efficace.

**Vers le top** : rare mais puissant. Utilisez le Herald timing ou une tp de votre ADC pour compenser.

**Deep wards** : profitez du roam pour placer des wards profondes dans la jungle ennemie.

## Communiquer avec l'ADC

Avant de roamer, **communiquez** avec votre ADC :
- Ping "On my way" vers la destination
- Assurez-vous que l'ADC peut farm en sécurité
- Ne roamez pas si l'ADC va mourir seul
- Revenez rapidement si le roam échoue

## Les risques du roaming

Le roaming comporte des **risques** :
- Votre ADC peut se faire dive ou zoner
- Si le roam rate, vous perdez du temps et de l'expérience
- L'ennemi peut push et prendre des plaques
- Un roam spotté peut être contre-roamé

## Récapitulatif

- Roamez après avoir **push la vague** ou quand l'ADC recall
- Visez le **mid** en priorité (plus proche, plus facile)
- **Communiquez** avec votre ADC avant de partir
- Placez des **wards profondes** pendant le roam
- Évitez de roamer si l'ADC est en danger ou si le roam sera spotté`,

  // Practice Instructions
  `## Objectif

Réussir des roams efficaces sans mettre en danger votre ADC.

## Étapes

1. Jouez une partie avec un support mobile (Bard, Thresh, Alistar)
2. Identifiez un moment propice : vague pushée, ADC recall, ou mid overextend
3. Communiquez avec votre ADC via ping avant de partir
4. Passez par une route non wardée si possible
5. Tentez un gank mid ou placez des deep wards
6. Revenez rapidement en lane

## Critère de réussite

Vous avez réalisé au moins 3 roams dans la partie, dont au moins 1 a résulté en un kill ou un flash forcé, sans que votre ADC ne meure pendant vos absences.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le roaming en support ?",
      "Farmer la jungle",
      "Quitter sa lane pour impacter ailleurs",
      "Rester en lane avec l'ADC",
      "Acheter des items différents",
      'b',
      "Le roaming consiste à quitter temporairement sa lane pour aider d'autres parties de la carte."
    ),
    createQuestion(
      "Quel est le meilleur moment pour roamer ?",
      "Quand votre ADC est en difficulté",
      "Après avoir push la vague sous tourelle ennemie",
      "En début de première vague",
      "Quand vous n'avez plus de mana",
      'b',
      "Roamer après avoir push assure que votre ADC peut farm en sécurité pendant votre absence."
    ),
    createQuestion(
      "Quelle lane est la cible de roam prioritaire ?",
      "La toplane",
      "La midlane",
      "La jungle ennemie",
      "Votre propre jungle",
      'b',
      "La midlane est plus proche de la botlane, rendant les roams plus rapides et moins risqués."
    ),
    createQuestion(
      "Que devez-vous faire avant de roamer ?",
      "Ignorer votre ADC",
      "Communiquer avec votre ADC via ping",
      "Prendre tous les sbires",
      "Attendre sous tourelle",
      'b',
      "Communiquer assure que l'ADC sait qu'il sera seul et peut se positionner en sécurité."
    ),
    createQuestion(
      "Que faire pendant un roam si vous passez par la rivière ?",
      "Courir le plus vite possible",
      "Placer des wards profondes en passant",
      "Ignorer tout objectif",
      "Tuer les monstres de la rivière",
      'b',
      "Profitez du roam pour placer des wards dans la jungle ennemie ou les objectifs."
    ),
    createQuestion(
      "Quel est un risque majeur du roaming ?",
      "Gagner trop d'expérience",
      "Votre ADC peut se faire dive ou zoner",
      "Le midlaner gagne trop d'or",
      "Le jungler perd des camps",
      'b',
      "Pendant votre absence, l'ADC est vulnérable et peut être zone ou dive par le duo ennemi."
    ),
    createQuestion(
      "Qu'est-ce qu'un roam 'spotté' ?",
      "Un roam réussi",
      "Un roam vu par l'ennemi grâce à la vision",
      "Un roam vers le dragon",
      "Un roam pendant lequel vous mourez",
      'b',
      "Un roam spotté est détecté par les wards ennemies, permettant à l'ennemi de se préparer."
    ),
    createQuestion(
      "Quel champion est particulièrement bon pour roamer ?",
      "Yuumi",
      "Bard",
      "Soraka",
      "Sona",
      'b',
      "Bard possède une mobilité unique avec ses portails et est conçu pour roamer avec ses carillons."
    ),
    createQuestion(
      "Que faire si votre roam rate ?",
      "Rester mid et réessayer",
      "Revenir rapidement en lane",
      "Aller en toplane",
      "Farmer la jungle",
      'b',
      "Si le roam échoue, retournez rapidement en botlane pour limiter les pertes."
    ),
    createQuestion(
      "Dans quelle situation NE PAS roamer ?",
      "Quand la vague est push sous leur tourelle",
      "Quand l'ADC va mourir si vous partez",
      "Quand le mid est overextend",
      "Quand le jungler fait drake",
      'b',
      "Ne roamez jamais si cela met votre ADC en danger immédiat de mort."
    ),
  ]
);
