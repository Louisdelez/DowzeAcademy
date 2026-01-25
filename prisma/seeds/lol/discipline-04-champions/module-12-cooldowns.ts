import { createModule, createQuestion } from '../utils';

export const module12Cooldowns = createModule(
  'Timing des cooldowns',
  'cooldown-timing',
  'Exploiter les temps de rechargement ennemis',
  12,
  // Theory Content
  `## Qu'est-ce que le Cooldown ?

Le **Cooldown** (CD) est le temps d'attente avant de pouvoir réutiliser un sort. Gérer les cooldowns est une compétence fondamentale.

## Connaître ses propres cooldowns

Vos cooldowns affectent votre gameplay :
- **Courts CD** (5-10s) : Sorts de poke, harass
- **Moyens CD** (15-30s) : Sorts clés de combat
- **Longs CD** (60-180s) : Ultimes, sorts puissants

## Exploiter les cooldowns ennemis

Quand l'ennemi utilise un sort clé :
- C'est une **fenêtre** pour attaquer
- Il est **vulnérable** sans ce sort
- Vous pouvez **punir** agressivement

## CDR (Ability Haste)

L'**Ability Haste** réduit vos cooldowns :
- Plus d'AH = sorts plus fréquents
- Objets et runes donnent de l'AH
- Très important pour les mages et bruisers

## Tracking des cooldowns

Tracker les CD ennemis :
- Les **ultimes** (Flash, R) ont de longs CD
- Noter quand l'ennemi utilise Flash (~300s CD)
- Noter quand l'ennemi utilise son ultime
- Communiquer ces informations à l'équipe

## Récapitulatif

- Cooldown = temps de recharge du sort
- Attaquer quand l'ennemi a ses sorts en CD
- Ability Haste réduit les cooldowns
- Tracker Flash et ultimes ennemis
- Communiquer les CD importants`,

  // Practice Instructions
  `## Objectif

Comprendre l'importance des cooldowns et apprendre à les exploiter.

## Étapes

1. Lancez une partie contre l'IA
2. Utilisez un sort et observez le cooldown
3. Achetez un objet avec Ability Haste et notez la différence
4. Quand l'ennemi utilise un sort, comptez mentalement avant qu'il revienne
5. Attaquez quand l'ennemi a utilisé son sort clé

## Critère de réussite

Vous comprenez le concept de cooldown et savez quand punir un ennemi qui a utilisé ses sorts.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un cooldown ?",
      "Un type de dégâts",
      "Le temps d'attente pour réutiliser un sort",
      "Un buff",
      "Une statistique défensive",
      'b',
      "Le cooldown est le temps de recharge avant de pouvoir relancer un sort."
    ),
    createQuestion(
      "Quel est le cooldown typique d'un ultime ?",
      "5-10 secondes",
      "20-30 secondes",
      "60-180 secondes",
      "Pas de cooldown",
      'c',
      "Les ultimes ont généralement un long cooldown de 60 à 180 secondes."
    ),
    createQuestion(
      "Que faire quand l'ennemi utilise un sort important ?",
      "Fuir",
      "C'est une fenêtre pour attaquer",
      "Attendre qu'il revienne",
      "Ignorer",
      'b',
      "Quand l'ennemi n'a pas son sort clé, c'est le moment de punir."
    ),
    createQuestion(
      "Qu'est-ce que l'Ability Haste ?",
      "Plus de dégâts",
      "Réduction des cooldowns",
      "Plus de PV",
      "Plus de vitesse",
      'b',
      "L'Ability Haste (ex-CDR) réduit le temps de recharge des sorts."
    ),
    createQuestion(
      "Quel est le cooldown approximatif de Flash ?",
      "60 secondes",
      "180 secondes",
      "300 secondes (5 minutes)",
      "Pas de cooldown",
      'c',
      "Flash a un cooldown de 300 secondes (5 minutes)."
    ),
    createQuestion(
      "Pourquoi tracker le Flash ennemi ?",
      "Pour le voler",
      "Pour savoir quand l'ennemi est vulnérable",
      "C'est juste pour s'amuser",
      "Ça ne sert à rien",
      'b',
      "Sans Flash, l'ennemi est plus facile à gank ou tuer."
    ),
    createQuestion(
      "Comment communiquer un cooldown ennemi ?",
      "Crier dans le micro",
      "Pinger ou écrire dans le chat (ex: 'Mid no Flash')",
      "Ne pas le faire",
      "Envoyer un mail",
      'b',
      "On peut pinger ou écrire pour informer l'équipe."
    ),
    createQuestion(
      "Un sort avec 5-10s de CD est...",
      "Un ultime",
      "Un sort de poke/harass fréquent",
      "Un sort inutilisable",
      "Un sort d'invocateur",
      'b',
      "Les sorts à court CD sont faits pour être utilisés souvent."
    ),
    createQuestion(
      "Que signifie 'punir' un cooldown ?",
      "Insulter l'ennemi",
      "Attaquer quand l'ennemi ne peut pas riposter",
      "Attendre",
      "Défendre",
      'b',
      "Punir = profiter de la vulnérabilité de l'ennemi sans son sort."
    ),
    createQuestion(
      "Pourquoi l'AH est important pour les mages ?",
      "Ils n'ont pas d'auto-attaques fortes",
      "Ils dépendent de leurs sorts, plus souvent = plus de dégâts",
      "Ça leur donne plus de PV",
      "Ce n'est pas important",
      'b',
      "Les mages font leurs dégâts avec les sorts, donc plus de sorts = plus de DPS."
    ),
  ]
);
