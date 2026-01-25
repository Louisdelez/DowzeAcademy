import { createModule, createQuestion } from '../utils';

export const module14SupportBehind = createModule(
  'Adaptation du support en lane perdue',
  'support-behind',
  'Stratégies quand la botlane est en difficulté : roaming et adaptation',
  14,
  // Theory Content (5+ slides)
  `## Quand la botlane perd

Il arrive que malgré vos efforts, la **botlane soit en difficulté**. Que ce soit à cause d'un mauvais matchup, de ganks répétés ou d'erreurs, vous devez adapter votre jeu plutôt que de forcer et aggraver la situation.

## Reconnaître une lane perdue

Signes que vous perdez la lane :
- Écart de **2+ kills** en faveur de l'ennemi
- L'ADC ennemi a un **item d'avance**
- Vous êtes constamment **zonés du farm**
- Vous ne pouvez plus **trader** favorablement
- Les waves **crashent** constamment sous votre tourelle

## Jouer défensivement

Quand la lane est perdue :
- **Ne forcez plus** les engagements
- Laissez l'ADC **farmer sous tourelle** en sécurité
- Gardez vos sorts pour le **disengage**
- Évitez de **mourir** et donner plus d'avance
- Attendez des **ganks** du jungler

## Le roaming comme échappatoire

Parfois, la meilleure solution est de **quitter la lane** :
- Votre ADC peut farmer seul en sécurité (1v2 défensif)
- Vous impactez d'**autres lanes** qui gagnent
- Aidez le jungler à sécuriser des **objectifs**
- Placez de la **vision** profonde
- Revenez si votre ADC est plongé

## Aider d'autres carries

Si votre ADC est trop behind :
- Identifiez un **autre carry** dans l'équipe (mid, top)
- Transférez votre attention sur **ce joueur**
- Protégez-le en teamfight plutôt que l'ADC behind
- Un midlaner fed peut compenser un ADC behind

## Récapitulatif

- Reconnaissez quand la lane est **perdue** (écart de kills/gold)
- Jouez **défensivement**, ne forcez plus
- **Roaming** pour impacter ailleurs si l'ADC peut survivre
- Transférez votre attention vers **d'autres carries**
- L'objectif : **limiter les dégâts** et rester utile`,

  // Practice Instructions
  `## Objectif

Apprendre à adapter son jeu quand la botlane est en difficulté.

## Étapes

1. Si vous êtes down 2+ kills en lane, passez en mode défensif
2. Gardez vos sorts pour le disengage, pas l'engage
3. Si l'ADC peut farmer seul, tentez un roam mid
4. Placez des deep wards pendant vos roams
5. Identifiez qui dans votre équipe peut carry et aidez-le
6. En teamfight, protégez le carry le plus fed, pas forcément l'ADC

## Critère de réussite

Malgré une lane perdue, vous n'avez pas feed excessivement (moins de 4 morts en lane) et avez réussi à impacter positivement une autre lane ou objectif.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est un signe que votre lane est perdue ?",
      "Vous avez 1 kill d'avance",
      "L'ADC ennemi a un item d'avance",
      "Votre ADC a plus de CS",
      "Vous contrôlez la vision",
      'b',
      "Un écart d'item significatif indique que la lane est en faveur de l'ennemi."
    ),
    createQuestion(
      "Que devez-vous éviter de faire quand la lane est perdue ?",
      "Jouer défensivement",
      "Forcer des engagements",
      "Laisser l'ADC farm sous tourelle",
      "Roamer pour aider ailleurs",
      'b',
      "Forcer des engagements quand vous êtes behind donne encore plus d'avance à l'ennemi."
    ),
    createQuestion(
      "Pourquoi le roaming peut être une bonne option en lane perdue ?",
      "Pour abandonner l'ADC",
      "Pour impacter des lanes qui gagnent",
      "Pour farmer la jungle",
      "Ce n'est jamais une bonne option",
      'b',
      "Roamer permet d'aider d'autres lanes où vous pouvez créer un avantage."
    ),
    createQuestion(
      "Quand pouvez-vous roamer si la lane est perdue ?",
      "N'importe quand",
      "Quand l'ADC peut farm seul en sécurité",
      "Uniquement si le jungler le demande",
      "Jamais, restez en lane",
      'b',
      "Roamez uniquement si votre ADC peut survivre et farmer sans se faire dive."
    ),
    createQuestion(
      "Qui devez-vous protéger en teamfight si votre ADC est très behind ?",
      "Toujours l'ADC",
      "Le carry le plus fed de votre équipe",
      "Personne, jouez solo",
      "Le support ennemi",
      'b',
      "Protégez le joueur qui peut carry le teamfight, même si ce n'est pas votre ADC."
    ),
    createQuestion(
      "Que faire de vos sorts quand vous jouez défensivement ?",
      "Les utiliser pour engage",
      "Les garder pour le disengage",
      "Les utiliser sur les sbires",
      "Ne jamais les utiliser",
      'b',
      "En mode défensif, gardez vos sorts pour vous protéger ou protéger votre ADC des engages ennemis."
    ),
    createQuestion(
      "Quel est l'objectif principal quand la lane est perdue ?",
      "Remonter à tout prix",
      "Limiter les dégâts et rester utile",
      "Abandonner la partie",
      "Blâmer l'ADC",
      'b',
      "L'objectif est de limiter les dégâts et trouver des moyens de rester utile pour l'équipe."
    ),
    createQuestion(
      "Que faire si vous êtes constamment zonés du farm ?",
      "Forcer un fight pour arrêter ça",
      "Rester en sécurité et soak l'expérience",
      "Quitter définitivement la lane",
      "Farm la jungle",
      'b',
      "Si vous êtes zonés, restez en portée d'expérience sans risquer de mourir inutilement."
    ),
    createQuestion(
      "Que placer pendant vos roams en lane perdue ?",
      "Plus d'objets offensifs",
      "De la vision profonde",
      "Des pièges",
      "Rien de spécial",
      'b',
      "Profitez de vos roams pour placer des deep wards et aider avec la vision."
    ),
    createQuestion(
      "Comment reconnaître si votre ADC peut survivre seul ?",
      "Il le dit dans le chat",
      "La vague est sous votre tourelle et aucun dive n'est préparé",
      "Impossible à savoir",
      "L'ADC peut toujours survivre seul",
      'b',
      "Si la wave est sous tourelle et l'ennemi ne prépare pas de dive, l'ADC peut probablement farm seul."
    ),
  ]
);
