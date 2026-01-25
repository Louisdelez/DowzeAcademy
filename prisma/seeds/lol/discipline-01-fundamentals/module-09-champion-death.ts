import { createModule, createQuestion } from '../utils';

export const module09ChampionDeath = createModule(
  'Mort du champion',
  'champion-death',
  'Conséquences de la mort et temps de résurrection',
  9,
  // Theory Content
  `## Que se passe-t-il quand vous mourrez ?

Quand votre champion meurt :
- Vous réapparaissez à votre **fontaine** après un **temps d'attente**
- L'ennemi qui vous a tué gagne de l'**or** et de l'**XP**
- Vous ne pouvez pas agir pendant le temps de mort

## Le temps de résurrection

Le temps de mort (respawn) augmente avec le niveau :
- **Niveau 1** : environ 10 secondes
- **Niveau 18** : jusqu'à 50+ secondes
- En **late game**, mourir peut coûter plus d'une minute
- C'est pourquoi les erreurs tardives sont si punissantes

## Ce que vous perdez en mourant

Chaque mort coûte :
- Du **temps** (vous ne pouvez pas farmer ou aider)
- De l'**or** donné à l'ennemi (150-1000+ selon les bounties)
- De l'**XP** que vous auriez pu gagner
- Potentiellement des **objectifs** (Dragon, Baron, tourelles)

## Éviter les morts inutiles

Pour minimiser les morts :
- Ne prenez pas de combats que vous ne pouvez pas gagner
- Respectez le **brouillard de guerre** (fog of war)
- Si vous êtes low HP, retournez à la base
- Mourir pour rien est pire que ne rien faire

## Récapitulatif

- Mort = temps d'attente + or/XP à l'ennemi
- Le temps de mort augmente avec le niveau
- Éviter les morts inutiles est crucial
- En late game, une mort peut coûter la partie
- Mieux vaut recall que risquer de mourir`,

  // Practice Instructions
  `## Objectif

Comprendre les conséquences de la mort et l'importance de rester en vie.

## Étapes

1. Lancez une partie contre l'IA
2. Notez votre temps de résurrection au niveau 1 (environ 10s)
3. Jouez jusqu'au niveau 10+ et mourrez intentionnellement
4. Comparez le temps de mort au niveau 10 vs niveau 1
5. Observez l'or que l'ennemi gagne en vous tuant (annoncé dans le chat)

## Critère de réussite

Vous comprenez que le temps de mort augmente avec le niveau et que mourir donne un avantage significatif à l'ennemi.`,

  // Questions
  [
    createQuestion(
      "Où réapparaissez-vous après être mort ?",
      "Là où vous êtes mort",
      "À votre fontaine (base)",
      "Au milieu de la carte",
      "Sur votre lane",
      'b',
      "Après la mort, vous réapparaissez à votre fontaine après le temps de résurrection."
    ),
    createQuestion(
      "Le temps de mort augmente avec quoi ?",
      "L'or accumulé",
      "Le niveau du champion",
      "Le nombre de kills",
      "La durée de la partie uniquement",
      'b',
      "Le temps de résurrection augmente principalement avec le niveau de votre champion."
    ),
    createQuestion(
      "Environ combien de temps dure la mort au niveau 18 ?",
      "10 secondes",
      "30 secondes",
      "50+ secondes",
      "2 minutes",
      'c',
      "Au niveau 18, le temps de mort peut dépasser 50 secondes."
    ),
    createQuestion(
      "Que gagne l'ennemi quand il vous tue ?",
      "Seulement de l'XP",
      "De l'or et de l'XP",
      "Un niveau complet",
      "Une compétence supplémentaire",
      'b',
      "L'ennemi gagne de l'or (variable selon bounty) et de l'expérience."
    ),
    createQuestion(
      "Pourquoi les morts en late game sont-elles très graves ?",
      "On perd tous ses objets",
      "Le temps de mort est long et l'ennemi peut prendre des objectifs",
      "On recommence au niveau 1",
      "On ne peut plus utiliser ses sorts",
      'b',
      "Les longs temps de mort permettent à l'ennemi de prendre Baron, tours ou même le Nexus."
    ),
    createQuestion(
      "Qu'est-ce que le 'fog of war' (brouillard de guerre) ?",
      "Un sort de mage",
      "Les zones sans vision où l'ennemi peut se cacher",
      "Un effet météo",
      "La fumée des combats",
      'b',
      "Le fog of war représente les zones non éclairées où les ennemis sont invisibles."
    ),
    createQuestion(
      "Que vaut-il mieux faire quand on est low HP ?",
      "Rester pour farm",
      "Retourner à la base (recall)",
      "Attaquer l'ennemi",
      "Se cacher dans un buisson",
      'b',
      "Quand vous êtes low HP, mieux vaut recall que risquer de mourir et donner un avantage."
    ),
    createQuestion(
      "Une mort 'inutile' c'est quoi ?",
      "Une mort qui donne un kill à l'ennemi sans contrepartie",
      "Une mort pendant un teamfight",
      "Mourir sous une tourelle ennemie en tuant quelqu'un",
      "Mourir en défendant le Nexus",
      'a',
      "Une mort inutile n'apporte rien à l'équipe mais donne des ressources à l'ennemi."
    ),
    createQuestion(
      "Combien d'or minimum gagne un ennemi en vous tuant ?",
      "50 or",
      "150 or",
      "300 or",
      "500 or",
      'b',
      "Un kill vaut au minimum 150 or (plus si vous avez une bounty)."
    ),
    createQuestion(
      "Que perdez-vous directement quand vous mourrez ?",
      "Vos objets",
      "Du temps de jeu",
      "Vos compétences",
      "Votre niveau",
      'b',
      "Vous ne perdez pas d'objets ou de niveau, mais le temps de mort vous fait perdre des opportunités."
    ),
  ]
);
