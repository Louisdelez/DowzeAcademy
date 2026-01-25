import { createModule, createQuestion } from '../utils';

export const module04DecisiveFights = createModule(
  'Combats decisifs',
  'decisive-fights',
  'Teamfights structures 5v5 en late game',
  4,
  // Theory Content (5+ slides)
  `## L'importance des teamfights en late game

En late game, les **teamfights 5v5** deviennent les moments les plus decisifs de la partie. Un seul combat peut determiner le vainqueur. Contrairement aux escarmouches du early/mid game, ces combats engagent toutes les ressources des deux equipes.

## Preparation avant le combat

Avant d'engager un teamfight decisif, assurez-vous :

- **Cooldowns prets** : Sorts ultimes, sorts invocateurs, actifs d'objets
- **Positionnement optimal** : Chaque role a sa place ideale
- **Vision** : Savoir exactement ou sont les 5 ennemis
- **Objectif clair** : Pourquoi ce combat ? Baron ? Elder ? Nexus ?
- **Avantage ou egalite** : Evitez de combattre en desavantage

## Les roles en teamfight

Chaque role a une mission specifique :

- **Tanks/Engageurs** : Initier le combat et absorber les degats
- **Bruisers** : Suivre l'engage et diver les carries ennemis
- **Assassins** : Eliminer les carries ennemis prioritaires
- **ADC** : Infliger des degats constants depuis une position sure
- **Supports** : Proteger les carries et utiliser les CCs

## Le ciblage prioritaire

L'ordre de priorite en teamfight depend du contexte :

1. **Carries accessibles** : ADC ou mid laner mal positionne
2. **Champions fed** : Le joueur le plus dangereux de l'equipe ennemie
3. **Champions sans escapes** : Ceux qui ne peuvent pas fuir
4. **Front line** : Si les carries sont inatteignables, focus le front

**Attention** : Ne tunnel pas sur une cible si cela vous met en danger !

## Les erreurs courantes en teamfight

Evitez ces erreurs fatales :

- **Engage premature** : Combattre sans l'equipe complete
- **Mauvais focus** : Attaquer le tank au lieu des carries
- **Panic ult** : Gaspiller l'ultime par panique
- **Tunnel vision** : Se concentrer sur une cible en ignorant le danger
- **Overstay** : Rester apres que le combat est perdu

## Savoir desengager

Parfois, le meilleur choix est de **ne pas combattre** ou de **fuir** :

- Le combat tourne mal ? Reculez avant le wipe total
- Un coequipier meurt en debut de fight ? Evaluez si continuer vaut le coup
- Aucun avantage ? Gardez les ults pour une meilleure opportunite

Perdre un combat 0-2 est mieux que perdre 0-5.

## Recapitulatif

- Les teamfights 5v5 en late game sont decisifs
- Preparez-vous : cooldowns, positionnement, vision
- Chaque role a une mission specifique
- Ciblez les carries accessibles, pas les tanks
- Sachez desengager si le combat tourne mal`,

  // Practice Instructions
  `## Objectif

Ameliorer votre prise de decision et votre positionnement en teamfight 5v5 late game.

## Etapes

1. En partie, attendez un teamfight 5v5 en late game (apres 30 minutes)
2. Avant le combat, identifiez mentalement votre role et votre cible prioritaire
3. Pendant le combat, concentrez-vous sur votre mission (proteger, diver, DPS)
4. Apres le combat, evaluez : ai-je fait mon job ? Ai-je cible les bonnes personnes ?
5. Regardez le replay pour analyser votre positionnement

## Critere de reussite

Vous avez participe a un teamfight 5v5 en remplissant votre role correctement (proteger si support, DPS si carry, engager si tank).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi les teamfights sont-ils si importants en late game ?",
      "Ils ne sont pas importants",
      "Un seul combat peut decider l'issue de la partie",
      "Ils donnent plus d'or qu'en early game",
      "Les champions sont plus faibles",
      'b',
      "En late game, les timers de mort longs et les enjeux (Baron, Elder, Nexus) rendent chaque teamfight decisif."
    ),
    createQuestion(
      "Que faut-il verifier avant d'engager un teamfight decisif ?",
      "Uniquement le nombre de kills",
      "Cooldowns, positionnement, vision, objectif clair",
      "Juste le level des champions",
      "Rien de special",
      'b',
      "Une bonne preparation inclut les cooldowns, le positionnement, la vision et un objectif clair."
    ),
    createQuestion(
      "Quel est le role principal d'un tank en teamfight ?",
      "Tuer les carries ennemis",
      "Initier le combat et absorber les degats",
      "Rester en arriere",
      "Split push",
      'b',
      "Les tanks et engageurs doivent initier et absorber les degats pour proteger leurs carries."
    ),
    createQuestion(
      "Quelle est la mission de l'ADC en teamfight ?",
      "Engager le combat",
      "Absorber les degats",
      "Infliger des degats constants depuis une position sure",
      "Roam dans la jungle",
      'c',
      "L'ADC doit rester en position sure et infliger un maximum de DPS."
    ),
    createQuestion(
      "Qui devez-vous cibler en priorite en teamfight ?",
      "Toujours le tank en premier",
      "Les carries accessibles et mal positionnes",
      "Le support uniquement",
      "Personne en particulier",
      'b',
      "Les carries (ADC, mid) mal positionnes sont des cibles prioritaires car ils infligent beaucoup de degats."
    ),
    createQuestion(
      "Qu'est-ce qu'une 'engage premature' ?",
      "Engager au bon moment",
      "Combattre sans que l'equipe soit complete",
      "Attendre trop longtemps",
      "Ne pas engager du tout",
      'b',
      "Une engage premature signifie commencer le combat avant que toute l'equipe soit prete."
    ),
    createQuestion(
      "Que signifie 'tunnel vision' en teamfight ?",
      "Avoir une bonne vision de carte",
      "Se concentrer sur une cible en ignorant le danger autour",
      "Placer des balises",
      "Regarder la mini-carte",
      'b',
      "La tunnel vision consiste a se focaliser sur une cible en oubliant les menaces autour de soi."
    ),
    createQuestion(
      "Quand faut-il desengager d'un combat ?",
      "Jamais, toujours combattre jusqu'au bout",
      "Quand le combat tourne mal ou qu'un coequipier meurt tot",
      "Des que le combat commence",
      "Uniquement si tous sont morts",
      'b',
      "Desengager quand le combat tourne mal evite un wipe total et preserve plus de ressources."
    ),
    createQuestion(
      "Pourquoi vaut-il mieux perdre 0-2 que 0-5 ?",
      "Cela ne fait aucune difference",
      "Les survivants peuvent defendre et limiter les degats",
      "L'or est le meme",
      "Les timers de mort sont identiques",
      'b',
      "Les survivants peuvent defendre la base, contester les objectifs ou au moins limiter les pertes."
    ),
    createQuestion(
      "Quelle erreur consiste a gaspiller son ultime par panique ?",
      "Tunnel vision",
      "Panic ult",
      "Overstay",
      "Mauvais focus",
      'b',
      "Le panic ult est l'utilisation precipitee de son ultime sans cible appropriee ou au mauvais moment."
    ),
  ]
);
