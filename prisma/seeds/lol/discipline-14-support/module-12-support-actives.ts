import { createModule, createQuestion } from '../utils';

export const module12SupportActives = createModule(
  'Utilisation des actifs support',
  'support-actives',
  'Maîtriser Solari, Rédemption et autres items actifs',
  12,
  // Theory Content (5+ slides)
  `## Les items actifs du support

Les supports ont accès à des **items avec effets actifs** puissants qui peuvent changer l'issue d'un teamfight. Maîtriser leur utilisation est essentiel pour maximiser votre impact.

## Locket of the Iron Solari

**Solari** est un item défensif crucial :
- **Actif** : Bouclier décroissant sur vous et les alliés proches
- **Quand l'utiliser** : Juste avant qu'un gros burst arrive
- **Timing** : Anticipez les dégâts, ne réagissez pas
- Particulièrement fort contre les combos burst (Orianna R, etc.)

## Redemption

**Rédemption** offre un soin de zone :
- **Actif** : Zone de soin après 2.5 secondes de délai
- **Utilisable même mort** : Très utile si vous mourez en fight
- **Placement** : Là où le fight va se dérouler, pas où il est
- Peut être utilisé pour zoner ou couper des escapes

## Mikael's Blessing

**Mikael** est un cleanse pour alliés :
- **Actif** : Retire les CC d'un allié et soigne
- **Quand l'utiliser** : Sur un carry CC par l'ennemi
- **Timing** : Réagissez vite, les CC sont souvent mortels
- Ne fonctionne pas sur les suppressions (Malz R, WW R)

## Shurelya's Battlesong

**Shurelya** offre de la mobilité d'équipe :
- **Actif** : Boost de vitesse pour vous et les alliés proches
- **Utilisation offensive** : Pour engager ou chaser
- **Utilisation défensive** : Pour fuir ou repositionner
- Synergise avec les compositions d'engage

## Conseils généraux sur les actifs

Pour bien utiliser vos items actifs :
- **Pratiquez** les raccourcis clavier (1, 2, 3, etc.)
- **Anticipez** plutôt que réagir
- Gardez un oeil sur les **cooldowns**
- N'oubliez pas d'utiliser **Rédemption même mort**
- Combinez plusieurs actifs pour un impact maximal

## Récapitulatif

- **Solari** : bouclier d'équipe contre le burst
- **Rédemption** : soin de zone avec délai, utilisable mort
- **Mikael** : cleanse CC sur un allié
- **Shurelya** : boost de vitesse d'équipe
- **Anticipez** l'utilisation et pratiquez les raccourcis`,

  // Practice Instructions
  `## Objectif

Maîtriser l'utilisation des items actifs du support au bon moment.

## Étapes

1. Achetez Solari ou Rédemption selon la partie
2. Assignez l'item actif à une touche facile d'accès (1, 2, 3)
3. Avant chaque teamfight, préparez-vous mentalement à l'utiliser
4. Pour Solari : utilisez-le AVANT le burst, pas après
5. Pour Rédemption : placez-le là où le fight va évoluer
6. Comptez combien de fois vous utilisez votre actif efficacement

## Critère de réussite

Vous avez utilisé votre item actif efficacement (sauvé un allié ou impacté un fight) au moins 4 fois dans la partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Que fait l'actif de Locket of the Iron Solari ?",
      "Inflige des dégâts en zone",
      "Donne un bouclier aux alliés proches",
      "Augmente la vitesse de mouvement",
      "Retire les CC",
      'b',
      "Solari donne un bouclier décroissant à vous et aux alliés proches."
    ),
    createQuestion(
      "Quand devez-vous utiliser Solari ?",
      "Après que les alliés aient pris des dégâts",
      "Juste avant qu'un gros burst arrive",
      "Au début de la partie",
      "Uniquement en 1v1",
      'b',
      "Solari doit être utilisé en anticipation du burst, pas en réaction aux dégâts déjà pris."
    ),
    createQuestion(
      "Quelle est la particularité de Rédemption ?",
      "Il donne du mana",
      "Il peut être utilisé même mort",
      "Il stun les ennemis",
      "Il n'a pas de cooldown",
      'b',
      "Rédemption peut être activé même si vous êtes mort, ce qui est unique et très utile."
    ),
    createQuestion(
      "Quel est le délai de Rédemption ?",
      "Instantané",
      "1 seconde",
      "2.5 secondes",
      "5 secondes",
      'c',
      "Rédemption a un délai de 2.5 secondes avant que la zone de soin n'arrive."
    ),
    createQuestion(
      "Que fait Mikael's Blessing ?",
      "Bouclier en zone",
      "Retire les CC d'un allié et soigne",
      "Augmente les dégâts",
      "Révèle les ennemis",
      'b',
      "Mikael's cleanse les CC sur un allié ciblé et lui rend de la vie."
    ),
    createQuestion(
      "Contre quel type de CC Mikael ne fonctionne PAS ?",
      "Les stuns",
      "Les suppressions (Malz R, WW R)",
      "Les roots",
      "Les slows",
      'b',
      "Mikael ne peut pas retirer les suppressions comme l'ultime de Malzahar ou Warwick."
    ),
    createQuestion(
      "Quand utiliser Shurelya's Battlesong ?",
      "Pour farm plus vite",
      "Pour engager ou fuir avec l'équipe",
      "Pour tanker plus de dégâts",
      "Pour soigner les alliés",
      'b',
      "Shurelya donne un boost de vitesse à l'équipe, utile pour engager ou désengager."
    ),
    createQuestion(
      "Comment optimiser l'utilisation des items actifs ?",
      "Les utiliser au hasard",
      "Pratiquer les raccourcis et anticiper",
      "Ne les acheter jamais",
      "Attendre qu'un allié demande",
      'b',
      "Pratiquez vos raccourcis clavier et anticipez les situations pour maximiser l'impact."
    ),
    createQuestion(
      "Où placer Rédemption en teamfight ?",
      "Sur vous",
      "Là où le fight va évoluer",
      "Sous la tourelle ennemie",
      "Dans la jungle",
      'b',
      "Le délai de Rédemption nécessite d'anticiper où le fight va se déplacer."
    ),
    createQuestion(
      "Quel item actif est le meilleur contre un burst mage comme Orianna ?",
      "Shurelya's Battlesong",
      "Locket of the Iron Solari",
      "Mikael's Blessing",
      "Aucun item actif",
      'b',
      "Solari donne un bouclier qui absorbe le burst de l'ultime d'Orianna et autres mages burst."
    ),
  ]
);
