import { createModule, createQuestion } from '../utils';

export const module12Cleanup = createModule(
  'Cleanup',
  'cleanup',
  "Maîtriser l'art de finir les combats en éliminant les survivants ennemis",
  12,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le cleanup ?

Le **cleanup** (nettoyage) est la phase finale d'un teamfight où vous **éliminez les survivants** qui tentent de fuir. Un bon cleanup transforme une victoire partielle en **ace** (élimination totale).

## L'importance du cleanup

Un cleanup efficace permet de :
- **Maximiser l'avantage** du combat gagné
- **Prendre des objectifs** sans contestation (Baron, Dragon)
- **Push les lanes** vers la base ennemie
- **Empêcher le reset** ennemi et prolonger leur respawn

## Champions de cleanup

Certains champions excellent dans cette phase :
- **Champions mobiles** : Hecarim, Kayn, Akali
- **Execute** : Pyke R, Garen R, Urgot R
- **High damage sustained** : Yi, Tryndamere
- **CC chase** : Udyr, Olaf, Warwick
- **Long range finish** : Caitlyn, Jinx, Ezreal

## Exécuter un cleanup propre

Les règles du cleanup :
1. **Évaluez les cooldowns** - Avez-vous Flash/dash pour chase ?
2. **Identifiez les fuyards** - Qui est low HP et peut mourir ?
3. **Ne sur-chasez pas** - Ne mourrez pas pour un kill
4. **Utilisez les longues portées** - Ulti de Jinx, R de Caitlyn, etc.
5. **Sécurisez l'objectif d'abord** - Parfois mieux que de chasser

## Éviter les erreurs de cleanup

Erreurs courantes :
- **Sur-chaser** : Poursuivre trop loin et mourir à un ennemi qui respawn
- **Se séparer** : L'équipe se disperse et perd du temps
- **Oublier l'objectif** : Chasser au lieu de prendre Baron
- **Ignorer les HP** : Chasser alors qu'on est low HP soi-même
- **Ne pas finir** : Laisser les ennemis s'échapper et revenir

## Priorité : objectif vs chase

Parfois il vaut mieux **prendre l'objectif** que de chaser :
- Baron/Dragon > 1 kill d'un support
- Inhibiteur > chase dans la jungle adverse
- Tourelle certaine > kill incertain
- Évaluez les timers de respawn adverses`,

  // Practice Instructions
  `## Objectif

Apprendre à efficacement cleanup les teamfights sans sur-chaser ni perdre des objectifs.

## Étapes

1. Après avoir gagné un teamfight, identifiez immédiatement :
   - Combien d'ennemis sont encore en vie ?
   - Sont-ils à portée de kill ?
   - Y a-t-il un objectif à prendre ?
2. Si un ennemi low HP est proche : finissez-le rapidement
3. Si les survivants fuient vers leur base : ping l'objectif (Baron, tourelle)
4. Ne poursuivez pas plus de 5-10 secondes si vous ne tuez pas
5. Regroupez-vous sur l'objectif après le cleanup
6. Notez combien de fois vous avez sur-chasé inutilement

## Critère de réussite

Après 3 teamfights gagnés, vous avez soit éliminé les survivants accessibles, soit pris un objectif majeur (Baron, Drake, inhibiteur). Vous n'avez pas sur-chasé et n'êtes pas mort pendant le cleanup.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le 'cleanup' en teamfight ?",
      "Nettoyer les minions après le combat",
      "Éliminer les survivants ennemis qui tentent de fuir",
      "Retourner à la base pour acheter",
      "Poser des wards",
      'b',
      "Le cleanup est la phase où vous finissez les ennemis survivants après avoir gagné le combat principal."
    ),
    createQuestion(
      "Pourquoi le cleanup est-il important ?",
      "Il donne plus d'XP",
      "Il transforme une victoire partielle en avantage total et permet de prendre des objectifs",
      "Il réduit les cooldowns",
      "Il n'est pas vraiment important",
      'b',
      "Un cleanup efficace maximise les gains du combat en éliminant plus d'ennemis et en sécurisant les objectifs."
    ),
    createQuestion(
      "Quel type de capacité est particulièrement utile pour le cleanup ?",
      "Les shields",
      "Les capacités d'exécution (Pyke R, Garen R) et la mobilité",
      "Les heals",
      "Les buffs passifs",
      'b',
      "Les exécutes finissent les cibles low HP, et la mobilité permet de rattraper les fuyards."
    ),
    createQuestion(
      "Qu'est-ce que 'sur-chaser' signifie ?",
      "Bien finir le cleanup",
      "Poursuivre trop loin et mourir ou perdre du temps précieux",
      "Ne pas poursuivre du tout",
      "Chaser le bon ennemi",
      'b',
      "Sur-chaser signifie poursuivre les ennemis trop profondément dans leur territoire, menant à des morts inutiles."
    ),
    createQuestion(
      "Quelle est une erreur courante pendant le cleanup ?",
      "Prendre Baron après le combat",
      "Oublier les objectifs en chassant dans la jungle adverse",
      "Sécuriser le Dragon",
      "Grouper avec l'équipe",
      'b',
      "Beaucoup de joueurs chassent les kills au lieu de prendre des objectifs importants comme Baron ou des tourelles."
    ),
    createQuestion(
      "Quand vaut-il mieux prendre un objectif plutôt que chaser ?",
      "Jamais, les kills sont toujours prioritaires",
      "Quand l'objectif (Baron, inhibiteur) vaut plus que le kill incertain",
      "Uniquement en début de partie",
      "Quand l'ennemi est déjà mort",
      'b',
      "Un Baron ou inhibiteur certain vaut généralement plus qu'un kill incertain sur un support qui fuit."
    ),
    createQuestion(
      "Quel ADC a une capacité idéale pour finir les fuyards à longue distance ?",
      "Vayne",
      "Jinx (Super Mega Death Rocket)",
      "Draven",
      "Samira",
      'b',
      "L'ultime de Jinx traverse toute la carte et fait plus de dégâts aux cibles low HP, parfait pour le cleanup."
    ),
    createQuestion(
      "Combien de temps devriez-vous poursuivre avant de renoncer ?",
      "Jusqu'à la fontaine ennemie",
      "5-10 secondes maximum si vous ne tuez pas",
      "Indéfiniment",
      "Jamais poursuivre",
      'b',
      "Une poursuite trop longue gaspille du temps et risque des morts ; quelques secondes suffisent pour évaluer si le kill est possible."
    ),
    createQuestion(
      "Pourquoi regarder les timers de respawn ennemis pendant le cleanup ?",
      "Pour savoir qui ping",
      "Pour savoir combien de temps vous avez avant que des ennemis reviennent",
      "Pour calculer l'or obtenu",
      "Ce n'est pas utile",
      'b',
      "Les timers indiquent quand des ennemis respawn et potentiellement vous contrent pendant le cleanup."
    ),
    createQuestion(
      "Que signifie 'sécuriser l'objectif d'abord' ?",
      "Ignorer complètement les ennemis",
      "Prendre Baron/Dragon/tourelle avant de chaser pour garantir le gain",
      "Ne jamais combattre",
      "Attendre que l'ennemi respawn",
      'b',
      "Sécuriser l'objectif garantit un gain ; chaser peut échouer et faire perdre l'objectif également."
    ),
  ]
);
