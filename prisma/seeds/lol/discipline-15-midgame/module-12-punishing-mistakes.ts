import { createModule, createQuestion } from '../utils';

export const module12PunishingMistakes = createModule(
  'Punir une erreur',
  'punishing-mistakes',
  'Capitaliser sur un kill',
  12,
  // Theory Content (5+ slides)
  `## L'importance de punir les erreurs

En mid-game, **capitaliser sur les erreurs** adverses est souvent ce qui fait basculer la partie. Un kill ou un mauvais positionnement ennemi ne vaut rien si vous ne le convertissez pas en avantage concret (objectif, tourelle, vision).

## Types d'erreurs à punir

Les erreurs communes que vous pouvez punir :
- **Mauvais positionnement** : un ennemi isolé ou trop avancé
- **Cooldowns utilisés** : flash ou ulti down
- **Split sans vision** : un ennemi qui push sans ward
- **Recall mal timé** : partir au mauvais moment
- **Objectif contesté sans nombres** : essayer de steal en 1v5

Développez un "radar d'opportunités" pour repérer ces erreurs.

## Comment capitaliser sur un kill

Après un kill en mid-game, vous avez 30-50 secondes d'avantage numérique. Options :
1. **Objectif neutre** : Dragon, Herald, Baron si possible
2. **Tourelle** : push avec l'avantage numérique
3. **Vision** : placer des wards profondes
4. **Envahir la jungle** : voler camps et buffs
5. **Pression de carte** : créer un slow-push

Le pire : ne rien faire après un kill et laisser l'ennemi respawn sans perte.

## Prioriser l'action après un kill

La priorité dépend de la situation :
- **Kill sur le jungler** → voler ses camps, faire un objectif
- **Kill sur le mid** → push mid, rotater
- **Kill sur l'ADC** → Dragon (pas de dégâts pour contester)
- **Kill sur le top** → Herald, tourelle top

Évaluez rapidement ce qui est faisable dans le temps imparti.

## Récapitulatif

Punir les erreurs est une compétence clé du mid-game :
- Repérez les erreurs : positionnement, cooldowns, timing
- Après un kill, vous avez 30-50 secondes pour agir
- Convertissez en objectif, tourelle ou vision
- Priorisez selon qui est mort et où
- Ne jamais laisser un kill "gratuit" sans capitaliser`,

  // Practice Instructions
  `## Objectif

Capitaliser efficacement sur un kill en mid-game en prenant un objectif ou une tourelle dans les 45 secondes suivantes.

## Étapes

1. Participez à un fight en mid-game et obtenez au moins un kill
2. Immédiatement après le kill, évaluez vos options (objectif, tourelle, camps)
3. Communiquez rapidement avec des pings l'objectif choisi
4. Exécutez la prise d'objectif dans les 45 secondes
5. Si aucun objectif n'est disponible, au minimum placez de la vision profonde
6. Ne retournez pas à la base avant d'avoir capitalisé

## Critère de réussite

Après un kill en mid-game, vous avez pris un objectif (Dragon, Herald, tourelle) ou placé au moins 2 wards profondes dans les 45 secondes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi est-il important de capitaliser sur un kill ?",
      "Pour humilier l'adversaire",
      "Un kill seul ne vaut rien sans avantage concret",
      "Le kill donne automatiquement tout",
      "Ce n'est pas vraiment important",
      'b',
      "Un kill doit être converti en objectif, tourelle ou vision pour avoir un impact réel."
    ),
    createQuestion(
      "Combien de temps avez-vous environ pour capitaliser après un kill ?",
      "10-15 secondes",
      "30-50 secondes",
      "2-3 minutes",
      "Jusqu'à la fin de la partie",
      'b',
      "Le temps de respawn en mid-game donne généralement 30-50 secondes d'avantage numérique."
    ),
    createQuestion(
      "Quelle erreur ennemi peut être punie par un kill ?",
      "Acheter des items",
      "Être mal positionné ou isolé",
      "Utiliser des compétences sur les sbires",
      "Regarder la carte",
      'b',
      "Un ennemi isolé ou mal positionné est vulnérable et peut être éliminé."
    ),
    createQuestion(
      "Que faire si vous tuez le jungler ennemi ?",
      "Retourner à la base",
      "Voler ses camps et faire un objectif",
      "Attaquer le mid laner",
      "Placer des wards dans votre jungle",
      'b',
      "Sans jungler, vous pouvez librement prendre ses camps et les objectifs neutres."
    ),
    createQuestion(
      "Quelle est la PIRE chose à faire après un kill ?",
      "Prendre une tourelle",
      "Ne rien faire et laisser l'ennemi respawn",
      "Faire le Dragon",
      "Placer de la vision",
      'b',
      "Un kill non capitalisé est une opportunité gâchée qui ne crée aucun avantage durable."
    ),
    createQuestion(
      "Si vous tuez l'ADC ennemi, quel objectif est facilité ?",
      "Le Baron uniquement",
      "Le Dragon (pas de dégâts pour contester)",
      "Aucun objectif",
      "Le Herald uniquement",
      'b',
      "Sans ADC, l'équipe ennemie manque de dégâts pour contester ou voler le Dragon."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'cooldown à punir' ?",
      "Le temps entre deux attaques",
      "Un sort important utilisé (flash, ulti)",
      "Le temps de respawn d'un objectif",
      "La durée d'une partie",
      'b',
      "Quand un ennemi utilise son flash ou ulti, il est vulnérable pendant le cooldown."
    ),
    createQuestion(
      "Comment développer un 'radar d'opportunités' ?",
      "Acheter un item spécial",
      "Observer constamment la carte pour repérer les erreurs",
      "Attendre que l'équipe signale",
      "Utiliser uniquement les wards",
      'b',
      "La vigilance constante et l'observation de la carte permettent de repérer les erreurs ennemies."
    ),
    createQuestion(
      "Quelle action est acceptable si aucun objectif majeur n'est disponible ?",
      "Ne rien faire",
      "Retourner à la base immédiatement",
      "Placer de la vision profonde",
      "Attaquer le Nexus",
      'c',
      "Si aucun objectif n'est prenable, placer de la vision est une forme de capitalisation."
    ),
    createQuestion(
      "L'ennemi qui split sans vision commet quelle erreur ?",
      "Une erreur de farming",
      "Une erreur de positionnement punissable",
      "Une erreur d'équipement",
      "Ce n'est pas une erreur",
      'b',
      "Split sans vision rend vulnérable aux ganks et peut être facilement puni par un collapse."
    ),
  ]
);
