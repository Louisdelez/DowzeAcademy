import { createModule, createQuestion } from '../utils';

export const module08MidSurvival = createModule(
  "Survie en mid lane",
  'mid-survival',
  'Jouer safe et utiliser la tour efficacement',
  8,
  // Theory Content (5+ slides)
  `## La survie comme compétence

En mid lane, **survivre** est parfois plus important que tuer. Un mid laner qui meurt souvent :
- Perd de l'**expérience** et de l'**or**
- Donne de l'avance à l'adversaire
- Ne peut pas **roamer** ni aider son équipe
- Perd des **plaques** de tourelle

Apprendre à rester en vie est fondamental pour progresser.

## Jouer sous tour : les bases

La **tourelle** est votre meilleur ami quand vous êtes en difficulté :

**Règles de la tourelle** :
- Elle cible les sbires d'abord
- Elle switch sur un champion qui attaque un allié
- Dégâts croissants sur le même champion

**Farmer sous tour** :
- Sbire melee : 2 coups de tour + 1 auto
- Sbire caster : 1 coup de tour + 1 auto (ou prep avec sort)
- Sbire canon : plusieurs coups, last-hit avec sort

## Respecter le danger

**Reconnaître** les moments dangereux :

**Situations à haut risque** :
- Adversaire niveau 6 quand vous êtes niveau 5
- Jungler ennemi non visible sur la minimap
- Vous n'avez plus de flash
- Vous êtes low HP ou low mana

**Comment répondre** :
- Reculez et jouez plus loin de la vague
- Utilisez vos sorts à distance pour farm
- Priez un recall si nécessaire
- Ping votre équipe si vous voyez le danger

## Gérer les ganks

Quand un **gank** arrive :

1. **Ne paniquez pas** - évaluez calmement la situation
2. **Gardez votre flash** pour le CC crucial
3. **Marchez vers votre tour** avant d'utiliser vos escapes
4. **Utilisez vos CC** pour ralentir les ennemis
5. **Sacrifiez des CS** plutôt que votre vie

**Astuce** : Parfois, flasher tôt est mieux que flasher tard et mourir quand même.

## Récapitulatif

- **Survivre** > tuer dans beaucoup de situations
- Apprenez à **farmer sous tour** efficacement
- **Reconnaissez** les moments dangereux (level 6, no flash, jungler MIA)
- Face à un gank : **gardez votre calme** et utilisez vos ressources intelligemment
- Mieux vaut **perdre quelques CS** que de mourir
- Votre **tourelle** est votre alliée - utilisez-la`,

  // Practice Instructions
  `## Objectif

Apprendre à survivre en mid lane face à l'adversité et maîtriser le farm sous tour.

## Étapes

1. Allez dans l'outil d'entraînement (Practice Tool)
2. Placez-vous sous votre tour mid
3. Pratiquez le farm sous tour pendant 5 minutes :
   - Sbire melee : 2 coups tour + 1 auto (testez le timing)
   - Sbire caster : prep avec 1 auto, 1 coup tour, 1 auto
   - Sbire cannon : comptez les coups et last-hit
4. Lancez une partie contre bots (difficulté élevée)
5. Jouez volontairement passif les 10 premières minutes :
   - Restez toujours à portée de votre tour
   - Farmez sans prendre de trades
   - Objectif : 0 mort pendant le laning phase
6. Notez chaque fois où vous auriez pu mourir et pourquoi

## Critère de réussite

Vous pouvez farmer sous tour avec au moins 70% de CS récupérés et survivez le laning phase (15 minutes) sans mourir en jouant passivement.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la survie est-elle si importante en mid lane ?",
      "Elle n'est pas vraiment importante",
      "Mourir donne de l'avance à l'ennemi et vous empêche d'influencer la carte",
      "Le mid laner ne peut pas mourir",
      "Parce que le mid a le plus de HP",
      'b',
      "Mourir coûte de l'XP, de l'or, du temps, et donne de l'avance à l'adversaire."
    ),
    createQuestion(
      "Combien de coups de tour faut-il pour préparer un sbire melee au last-hit ?",
      "1 coup",
      "2 coups",
      "3 coups",
      "4 coups",
      'b',
      "Un sbire melee nécessite 2 coups de tour puis une auto-attaque pour le last-hit."
    ),
    createQuestion(
      "Que fait la tourelle quand un champion ennemi attaque un allié sous elle ?",
      "Rien",
      "Elle change de cible pour attaquer ce champion",
      "Elle attaque tous les ennemis",
      "Elle se désactive",
      'b',
      "La tour switch son aggro sur un champion qui attaque un allié sous elle."
    ),
    createQuestion(
      "Quelle est une situation à haut risque en mid lane ?",
      "Quand vous avez un niveau d'avance",
      "Quand l'adversaire atteint niveau 6 et pas vous",
      "Quand votre jungler est proche",
      "Quand vous avez full HP",
      'b',
      "L'écart de niveau au 6 est critique car l'ultime donne souvent un avantage majeur."
    ),
    createQuestion(
      "Face à un gank, quelle est la première chose à faire ?",
      "Utiliser flash immédiatement",
      "Évaluer calmement la situation sans paniquer",
      "All-in sur le jungler",
      "Ignorer et continuer à farm",
      'b',
      "Garder son calme permet de prendre de meilleures décisions sur l'utilisation des ressources."
    ),
    createQuestion(
      "Pourquoi faut-il parfois 'sacrifier des CS' ?",
      "Ce n'est jamais nécessaire",
      "Parce que votre vie vaut plus que quelques CS",
      "Parce que les CS ne donnent pas d'or",
      "Pour énerver l'adversaire",
      'b',
      "Mourir pour quelques CS est un mauvais trade - mieux vaut rester en vie."
    ),
    createQuestion(
      "Quand le jungler ennemi n'est pas visible (MIA), que devez-vous faire ?",
      "Jouer normalement",
      "Jouer plus en retrait et respecter le danger potentiel",
      "Push agressivement",
      "Roam immédiatement",
      'b',
      "Un jungler MIA peut être en route pour vous ganker - jouez prudemment."
    ),
    createQuestion(
      "À quel moment vaut-il mieux flasher pendant un gank ?",
      "Au tout début",
      "Pour esquiver un CC crucial ou quand vous êtes certain de mourir sinon",
      "Jamais pendant un gank",
      "Après être mort",
      'b',
      "Flasher le bon CC ou au bon moment peut sauver votre vie - timing est clé."
    ),
    createQuestion(
      "Comment préparer un sbire caster pour le last-hit sous tour ?",
      "Attendre 3 coups de tour",
      "L'auto-attaquer une fois avant le coup de tour",
      "Utiliser uniquement des sorts",
      "Le laisser mourir",
      'b',
      "Un auto avant le coup de tour prépare le caster pour le last-hit après 1 coup de tour."
    ),
    createQuestion(
      "Si vous êtes low HP sans potions, quelle est la meilleure décision ?",
      "Rester et essayer de farm",
      "Recall même si vous perdez quelques CS",
      "All-in l'adversaire",
      "Aller en jungle",
      'b',
      "Un recall sûr est préférable à risquer de mourir et perdre encore plus."
    ),
  ]
);
