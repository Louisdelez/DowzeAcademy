import { createModule, createQuestion } from '../utils';

export const module052v2Trades = createModule(
  'Trades en 2v2',
  '2v2-trades',
  "Échanger des dégâts efficacement avec l'aide de votre support",
  5,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un trade en 2v2 ?

Un **trade** est un échange de dégâts entre les deux duos de la bot lane. Contrairement aux autres lanes où les trades sont en 1v1, la bot lane implique une **coordination à 4 joueurs**. Un trade réussi signifie que vous infligez plus de dégâts que vous n'en recevez.

## Les fenêtres de trade

Identifiez les moments opportuns pour trader :

**Bon moment pour trader** :
- Le support ennemi a utilisé ses cooldowns
- L'ADC ennemi est en train de last-hit
- Votre support engage avec son CC
- L'ennemi est mal positionné

**Mauvais moment pour trader** :
- Le support ennemi a tous ses sorts
- Vous êtes séparé de votre support
- Vous avez moins de sbires (désavantage de wave)
- Le jungler ennemi est possiblement proche

## Comment trader efficacement

La mécanique du trade en 2v2 :

1. **Suivez l'engage** de votre support immédiatement
2. **Focusez la même cible** que votre support
3. **Infligez un maximum de dégâts** pendant le CC
4. **Reculez ensemble** après le trade
5. **Évaluez le résultat** (avez-vous gagné l'échange ?)

Le **focus** est crucial : deux joueurs sur une cible = dégâts concentrés.

## L'importance du suivi

Le **suivi** de votre support est essentiel :

- Si votre support engage et que vous ne suivez pas = support mort
- Si vous engagez seul = vous mourrez
- Le **délai de réaction** doit être minimal
- Faites confiance aux décisions de votre support

Astuce : Prépositionnez-vous quand vous sentez que votre support va engager.

## Récapitulatif

- Un trade est un **échange de dégâts** entre les duos
- Identifiez les **fenêtres de trade** (cooldowns, positionnement)
- **Suivez** immédiatement l'engage du support
- **Focusez** la même cible ensemble
- **Reculez ensemble** après le trade pour éviter de surengager`,

  // Practice Instructions
  `## Objectif

Pratiquer les trades en 2v2 en suivant les engages de votre support.

## Étapes

1. Jouez une partie normale en ADC avec un champion simple (Ashe, Miss Fortune)
2. Observez les mouvements de votre support avant les trades
3. Dès que votre support engage, avancez et infligez des dégâts
4. Ciblez la même personne que votre support
5. Reculez dès que le CC est terminé

## Critère de réussite

Vous avez suivi au moins 3 engages de votre support et focusé la bonne cible à chaque fois.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un trade en bot lane ?",
      "Un échange commercial avec le support",
      "Un échange de dégâts entre les deux duos",
      "Un échange de lane",
      "Un échange de champion",
      'b',
      "Un trade est un échange de dégâts où l'objectif est d'en infliger plus qu'on n'en reçoit."
    ),
    createQuestion(
      "Quand est-il bon de trader ?",
      "Quand le support ennemi a tous ses sorts",
      "Quand l'ADC ennemi est en train de last-hit",
      "Quand vous êtes seul",
      "Quand vous avez moins de sbires",
      'b',
      "L'ADC ennemi qui last-hit est concentré et vulnérable, c'est une bonne fenêtre de trade."
    ),
    createQuestion(
      "Que devez-vous faire quand votre support engage ?",
      "Continuer à farmer",
      "Reculer vers la tourelle",
      "Suivre immédiatement et infliger des dégâts",
      "Attendre de voir ce qui se passe",
      'c',
      "Suivre immédiatement l'engage du support est crucial pour réussir le trade."
    ),
    createQuestion(
      "Pourquoi est-il important de focuser la même cible ?",
      "Pour gagner plus d'or",
      "Pour concentrer les dégâts et tuer plus vite",
      "C'est plus joli visuellement",
      "Pour effrayer l'ennemi",
      'b',
      "Focuser la même cible concentre les dégâts et augmente les chances de kill."
    ),
    createQuestion(
      "Que se passe-t-il si vous ne suivez pas l'engage du support ?",
      "Rien de particulier",
      "Le support risque de mourir seul",
      "Vous gagnez le trade",
      "Le jungler arrive",
      'b',
      "Si vous ne suivez pas, votre support se retrouve seul face à deux ennemis et peut mourir."
    ),
    createQuestion(
      "Quel est un mauvais moment pour trader ?",
      "Quand l'ADC ennemi last-hit",
      "Quand votre support a son ultime",
      "Quand vous avez désavantage de wave",
      "Quand l'ennemi est mal positionné",
      'c',
      "Trader avec moins de sbires signifie que les sbires ennemis vous infligeront des dégâts supplémentaires."
    ),
    createQuestion(
      "Que devez-vous faire après un trade ?",
      "Continuer à attaquer coûte que coûte",
      "Reculer ensemble avec votre support",
      "Aller poser des wards",
      "Rappeler immédiatement",
      'b',
      "Reculer ensemble après le trade évite de surengager et de prendre des dégâts inutiles."
    ),
    createQuestion(
      "Qu'est-ce qu'une 'fenêtre de trade' ?",
      "Une option dans les paramètres",
      "Un moment opportun pour échanger des dégâts",
      "Un type de compétence",
      "Un élément de l'interface",
      'b',
      "Une fenêtre de trade est un moment favorable pour initier un échange de dégâts."
    ),
    createQuestion(
      "Comment vous préparer à un trade ?",
      "Rester loin derrière",
      "Se prépositionner quand le support semble prêt à engager",
      "Ignorer les mouvements du support",
      "Farmer le plus possible",
      'b',
      "Anticiper les intentions du support permet de réagir plus vite lors de l'engage."
    ),
    createQuestion(
      "Pourquoi le délai de réaction est-il important dans un trade ?",
      "Il n'est pas vraiment important",
      "Plus vous réagissez vite, plus vous maximisez les dégâts pendant le CC",
      "Pour impressionner votre support",
      "Pour économiser vos sorts",
      'b',
      "Réagir rapidement permet d'infliger un maximum de dégâts pendant que l'ennemi est CC."
    ),
  ]
);
