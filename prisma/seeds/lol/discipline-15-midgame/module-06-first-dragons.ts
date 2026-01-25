import { createModule, createQuestion } from '../utils';

export const module06FirstDragons = createModule(
  'Premier(s) dragons',
  'first-dragons',
  'Contest ou échange',
  6,
  // Theory Content (5+ slides)
  `## Importance des premiers Dragons

Les **Dragons** sont des objectifs majeurs qui apparaissent à partir de **5:00**. Les premiers Dragons sont cruciaux car ils :
- Donnent des buffs permanents (stacks de Drake)
- Progressent vers l'**âme du Dragon** (4 stacks du même type)
- Créent des avantages cumulatifs
- Peuvent déterminer le rythme du mid-game

## Les types de Dragons et leurs buffs

Chaque type de Dragon donne un buff différent :
- **Infernal** : +5% AD et AP (dégâts)
- **Ocean** : +6% des HP manquants/5s (régénération)
- **Cloud** : +7% slow resist et mouvement hors combat
- **Mountain** : +8% armure et résistance magique
- **Hextech** : +5% vitesse d'attaque et haste

Le type de Dragon détermine aussi la transformation de la carte (terrain).

## Contester ou échanger ?

Face au Dragon, deux stratégies :

**Contester** si :
- Vous avez l'avantage numérique (un ennemi mort)
- Votre équipe est plus forte en teamfight
- Vous avez la vision du pit
- Le Dragon est critique (3ème stack)

**Échanger** si :
- Vous êtes désavantagés numériquement
- Vous pouvez prendre une tourelle ou le Herald
- Le Dragon n'est pas crucial (1er Dragon, mauvais type)
- L'ennemi est déjà engagé sur le Dragon

## Préparer le Dragon

Pour maximiser vos chances de prendre le Dragon :
1. **Vision** : wardez le pit et les entrées 1-2 min avant
2. **Priorité de lane** : push vos vagues (surtout bot)
3. **Positionnement** : soyez proches avant le spawn
4. **Communication** : coordonnez l'engagement
5. **Smite** : le jungler doit avoir son smite prêt

## Récapitulatif

Les premiers Dragons façonnent le mid-game :
- Spawn à 5:00, respawn 5 minutes après
- 4 stacks = âme du Dragon (buff puissant)
- Contester si avantagé, échanger si nécessaire
- La préparation (vision, push) est essentielle
- Le Dragon n'est pas toujours l'objectif prioritaire`,

  // Practice Instructions
  `## Objectif

Participer à au moins deux prises de Dragon en mid-game en appliquant les principes de préparation et de contestation.

## Étapes

1. Surveillez le timer du Dragon (spawn à 5:00, respawn 5 min après)
2. 1 minute avant le spawn, placez un ward dans ou près du pit
3. Push votre vague de lane pour avoir la priorité
4. Rejoignez votre équipe près du Dragon avant qu'il spawn
5. Évaluez si vous devez contester ou faire un échange
6. Participez au combat pour le Dragon ou prenez l'objectif alternatif

## Critère de réussite

Vous avez participé à 2 prises de Dragon ou fait un échange d'objectif avantageux quand le Dragon était contesté.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "À quelle minute le premier Dragon apparaît-il ?",
      "3:00",
      "5:00",
      "8:00",
      "10:00",
      'b',
      "Le premier Dragon spawn à 5:00."
    ),
    createQuestion(
      "Combien de Dragons faut-il pour obtenir l'âme ?",
      "3 Dragons",
      "4 Dragons",
      "5 Dragons",
      "6 Dragons",
      'b',
      "4 stacks du même type de Dragon donnent l'âme du Dragon."
    ),
    createQuestion(
      "Quel buff donne le Dragon Infernal ?",
      "+% armure et résistance magique",
      "+% AD et AP",
      "+% régénération HP",
      "+% vitesse de mouvement",
      'b',
      "Le Dragon Infernal donne +5% AD et AP, augmentant vos dégâts."
    ),
    createQuestion(
      "Quel est le temps de respawn du Dragon ?",
      "3 minutes",
      "5 minutes",
      "6 minutes",
      "8 minutes",
      'b',
      "Le Dragon respawn 5 minutes après avoir été tué."
    ),
    createQuestion(
      "Quand devriez-vous contester le Dragon plutôt qu'échanger ?",
      "Quand vous êtes en désavantage numérique",
      "Quand vous avez l'avantage numérique",
      "Quand c'est le premier Dragon",
      "Quand vous n'avez pas de vision",
      'b',
      "Contester est recommandé quand vous avez l'avantage (un ennemi mort, meilleur teamfight)."
    ),
    createQuestion(
      "Que faire si l'ennemi fait le Dragon mais vous êtes désavantagés ?",
      "Contester à tout prix",
      "Faire un échange (tourelle, Herald)",
      "Rester sous votre tourelle",
      "Tous aller respawn",
      'b',
      "Un échange d'objectif permet de récupérer de la valeur sans prendre un combat perdu d'avance."
    ),
    createQuestion(
      "Quelle préparation est essentielle avant de faire le Dragon ?",
      "Avoir 5 items complets",
      "Placer la vision et push les vagues",
      "Tuer le Baron d'abord",
      "Être niveau 18",
      'b',
      "La vision du pit et la priorité de lane sont essentielles pour sécuriser le Dragon."
    ),
    createQuestion(
      "Quel Dragon donne de la régénération de vie ?",
      "Infernal",
      "Ocean",
      "Mountain",
      "Cloud",
      'b',
      "Le Dragon Ocean donne +6% des HP manquants toutes les 5 secondes."
    ),
    createQuestion(
      "Pourquoi le 3ème ou 4ème Dragon est-il plus important que le 1er ?",
      "Il donne plus d'or",
      "Il rapproche de l'âme du Dragon",
      "Il est plus facile à tuer",
      "Il donne un meilleur buff",
      'b',
      "Les derniers stacks vers l'âme sont cruciaux car l'âme donne un buff très puissant."
    ),
    createQuestion(
      "Qui doit absolument avoir son sort disponible pour secure le Dragon ?",
      "L'ADC avec son ultime",
      "Le support avec son heal",
      "Le jungler avec son smite",
      "Le top avec son téléport",
      'c',
      "Le smite du jungler est essentiel pour secure le dernier coup et éviter un steal."
    ),
  ]
);
