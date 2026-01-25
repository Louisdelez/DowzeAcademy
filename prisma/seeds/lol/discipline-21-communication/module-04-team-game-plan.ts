import { createModule, createQuestion } from '../utils';

export const module04TeamGamePlan = createModule(
  'Plan de jeu collectif',
  'team-game-plan',
  'Définir et communiquer la stratégie d\'équipe pour gagner la partie',
  4,
  // Theory Content (5+ slides)
  `## Pourquoi un plan de jeu ?

Une équipe sans plan est comme un bateau sans gouvernail. Le **plan de jeu** définit comment votre équipe va gagner : quelle lane focus, quels objectifs prioriser, quelle condition de victoire viser. Un plan clair permet à tous de jouer dans la même direction.

## Identifier la condition de victoire

Analysez votre composition d'équipe :
- **Composition de teamfight** : regroupez-vous et forcez les 5v5
- **Composition de pick** : cherchez les assassinats isolés
- **Composition de split-push** : poussez une lane avec un duelliste
- **Composition de siège** : utilisez le poke pour prendre les tourelles
- **Composition de scaling** : jouez safe et farmez pour le late game

## Communiquer le plan en début de partie

Pendant le loading screen ou les premières minutes :
- "We have late game, play safe"
- "Fiora split top, we 4 mid"
- "Focus on picks, don't 5v5"
- "Group for teamfights, we win 5v5"
Ces simples phrases alignent l'équipe sur la stratégie.

## Adapter le plan en cours de partie

Le plan initial peut changer selon :
- Les **kills et l'or** : qui est fed, qui est behind
- Les **objectifs pris** : dragons, heralds, tourelles
- Les **erreurs ennemies** : un joueur qui meurt souvent
- Le **timing** : early, mid ou late game
Communiquez les ajustements : "Draven is fed, peel for him".

## Les appels stratégiques courants

Maîtrisez ces appels de base :
- **"Group mid"** : regroupement pour push ou objectif
- **"1-3-1"** ou **"1-4"** : répartition sur les lanes
- **"Play around [champion]"** : jouer autour du carry
- **"Wait for [ulti]"** : attendre un cooldown important
- **"Slow push then dive"** : préparer une tour dive
- **"Bait baron"** : utiliser Baron comme appât`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier et communiquer un plan de jeu adapté à votre composition d'équipe.

## Étapes

1. Pendant le loading screen, analysez votre composition d'équipe
2. Identifiez la condition de victoire principale (teamfight, split, pick, etc.)
3. Écrivez un message court au début de la partie : "we have late, play safe" ou "group for 5v5"
4. Observez si l'équipe suit le plan
5. À 15 minutes, réévaluez le plan et communiquez les ajustements si nécessaire
6. Après la partie, analysez si le plan était bon et s'il a été suivi

## Critère de réussite

Vous avez identifié et communiqué un plan de jeu cohérent, et l'avez adapté au moins une fois pendant la partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi est-il important d'avoir un plan de jeu ?",
      "Pour impressionner les coéquipiers",
      "Pour que toute l'équipe joue dans la même direction",
      "Le plan de jeu n'est pas important en solo queue",
      "Pour gagner plus d'or",
      'b',
      "Un plan de jeu aligne l'équipe sur une stratégie commune pour maximiser les chances de victoire."
    ),
    createQuestion(
      "Quelle stratégie convient à une composition avec un Fiora top ?",
      "Teamfight 5v5 constant",
      "Split-push avec Fiora en side lane",
      "Rester groupé à 5 toute la partie",
      "Abandonner la top lane",
      'b',
      "Fiora est une excellente split-pusheuse qui peut 1v1 presque n'importe qui."
    ),
    createQuestion(
      "Que signifie 'We have late game, play safe' ?",
      "On doit jouer agressivement maintenant",
      "On est plus forts en fin de partie, évitons les risques tôt",
      "On doit abandonner si ça dure longtemps",
      "On doit forcer les teamfights immédiatement",
      'b',
      "Cette phrase indique que la composition scale bien et qu'il faut éviter les risques en early."
    ),
    createQuestion(
      "Quand devez-vous réévaluer le plan de jeu ?",
      "Jamais, le plan initial est toujours bon",
      "Seulement si on perd",
      "Quand les conditions changent (kills, objectifs, erreurs)",
      "Toutes les 2 minutes exactement",
      'c',
      "Le plan doit s'adapter aux événements de la partie."
    ),
    createQuestion(
      "Que signifie '1-3-1' comme formation ?",
      "1 kill, 3 morts, 1 assist",
      "1 joueur top, 3 mid, 1 bot",
      "1 objectif, 3 camps, 1 kill",
      "1 minute de pause, 3 de jeu, 1 de repos",
      'b',
      "La formation 1-3-1 répartit les joueurs avec 1 en side lane de chaque côté et 3 au milieu."
    ),
    createQuestion(
      "Quelle composition devrait chercher les picks isolés ?",
      "Une composition avec beaucoup de CC et burst",
      "Une composition de tanks",
      "Une composition sans dégâts",
      "Une composition full ADC",
      'a',
      "Les compositions avec CC et burst peuvent éliminer rapidement un ennemi isolé."
    ),
    createQuestion(
      "Que signifie 'Play around [champion]' ?",
      "Ignorer ce champion",
      "Protéger et jouer autour du champion fed/carry",
      "Laisser ce champion seul",
      "Critiquer ce joueur",
      'b',
      "Cela signifie adapter son jeu pour soutenir le carry de l'équipe."
    ),
    createQuestion(
      "Quel appel convient quand votre ADC est très fed ?",
      "L'ADC doit split push seul",
      "Peel for ADC, protect him",
      "Ignorer l'ADC et jouer agressif",
      "L'ADC doit initier les fights",
      'b',
      "Si l'ADC est fed, l'équipe doit le protéger pour qu'il puisse carry les teamfights."
    ),
    createQuestion(
      "Quand est le meilleur moment pour communiquer le plan initial ?",
      "Après 20 minutes de jeu",
      "Pendant le loading screen ou les premières minutes",
      "Uniquement si on commence à perdre",
      "À la fin de la partie",
      'b',
      "Le plan doit être communiqué dès le début pour que tous soient alignés."
    ),
    createQuestion(
      "Que signifie 'Bait baron' ?",
      "Faire le Baron très rapidement",
      "Utiliser Baron comme appât pour un fight avantageux",
      "Abandonner l'idée de faire Baron",
      "Donner Baron à l'ennemi",
      'b',
      "Baiter baron signifie faire semblant de le prendre pour attirer l'ennemi dans un fight favorable."
    ),
  ]
);
