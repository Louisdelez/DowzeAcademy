import { createModule, createQuestion } from '../utils';

export const module02TopMatchups = createModule(
  'Matchups classiques top',
  'top-matchups',
  'Affrontements courants et stratégies',
  2,
  // Theory Content
  `## Les matchups Top Lane

Le **top lane** est la lane où les **matchups** comptent le plus. Comprendre votre affrontement est crucial pour votre succès.

## Catégories de matchups

Types d'affrontements :
- **Melee vs Melee** : Combat équitable, skill matchup
- **Melee vs Ranged** : Le ranged domine l'early
- **Tank vs Bruiser** : Le bruiser gagne l'early, le tank scale
- **Counter picks** : Avantage clair pour un côté

## Matchups faciles à reconnaître

Quelques exemples :
- **Darius** domine les mêlée early
- **Teemo** bully les mêlée sans gap closer
- **Malphite** bat les champions AD
- **Fiora** bat les tanks en 1v1

## Jouer un matchup difficile

Stratégies de survie :
- **Farm** sous tourelle
- Éviter les **trades** inutiles
- Demander l'aide du **jungler**
- Attendre ses **power spikes**
- Prendre des objets **défensifs** tôt

## Exploiter un matchup favorable

Quand vous avez l'avantage :
- **Zone** l'ennemi du farm
- **Freeze** près de votre tourelle
- Tradez souvent et **punissez**
- Prenez des **plates**
- Ne devenez pas **overconfident**

## Apprendre les matchups

Comment progresser :
- Jouez beaucoup le même **champion**
- Notez vos **observations** après chaque game
- Consultez des **guides** de matchup
- Regardez des **streams** de joueurs top`,

  // Practice Instructions
  `## Objectif

Apprendre à adapter votre jeu selon le matchup top lane.

## Étapes

1. Avant la partie, cherchez votre matchup sur u.gg ou op.gg
2. Identifiez si vous êtes favorisé ou défavorisé
3. Adaptez votre niveau d'agressivité
4. Notez ce qui a bien ou mal fonctionné
5. Apprenez de vos erreurs et succès

## Critère de réussite

Vous identifiez correctement un matchup et adaptez votre jeu en conséquence.`,

  // Questions
  [
    createQuestion(
      "Pourquoi les matchups sont importants au top ?",
      "Ils ne le sont pas",
      "C'est une lane 1v1 isolée où le matchup décide souvent",
      "Seulement pour les pros",
      "Le jungler décide tout",
      'b',
      "Le top est isolé, donc le matchup direct a énormément d'impact."
    ),
    createQuestion(
      "Que faire dans un matchup difficile ?",
      "All-in constamment",
      "Farm safe et éviter les trades perdants",
      "AFK",
      "Ignorer l'ennemi",
      'b',
      "En matchup défavorable, farm safe et attendez vos spikes."
    ),
    createQuestion(
      "Darius est fort contre quels champions ?",
      "Les ranged",
      "Les mêlée en early game",
      "Personne",
      "Seulement les tanks",
      'b',
      "Darius domine généralement les mêlée en early game."
    ),
    createQuestion(
      "Malphite est un bon pick contre ?",
      "Les mages AP",
      "Les champions AD physiques",
      "Tout le monde",
      "Personne",
      'b',
      "Malphite excelle contre les compositions AD avec son armure."
    ),
    createQuestion(
      "Comment exploiter un matchup favorable ?",
      "Jouer passif",
      "Zone l'ennemi, trade souvent, prend des plates",
      "AFK farm",
      "Donner des kills",
      'b',
      "Avec l'avantage, zone et punissez l'ennemi."
    ),
    createQuestion(
      "Teemo pose problème à quels champions ?",
      "Les ranged",
      "Les mêlée sans gap closer",
      "Les tanks uniquement",
      "Personne",
      'b',
      "Teemo bully les mêlée qui ne peuvent pas le rattraper."
    ),
    createQuestion(
      "Fiora est connue pour battre qui ?",
      "Les ADC",
      "Les tanks en split push 1v1",
      "Personne",
      "Les supports",
      'b',
      "Fiora détruit les tanks grâce à ses dégâts %max HP."
    ),
    createQuestion(
      "Où trouver des informations sur les matchups ?",
      "Nulle part",
      "Sites comme u.gg, op.gg, guides",
      "Dans le client uniquement",
      "En devinant",
      'b',
      "Les sites de stats et guides offrent des infos sur les matchups."
    ),
    createQuestion(
      "Contre un champion ranged au top, que faire ?",
      "Farm au centre de lane",
      "Farm sous tourelle et attendre un gank",
      "All-in niveau 1",
      "Ignorer les sbires",
      'b',
      "Contre un ranged, farm safe sous tourelle est souvent nécessaire."
    ),
    createQuestion(
      "Faut-il toujours suivre un guide de matchup ?",
      "Oui, à la lettre",
      "Non, les guides sont des bases à adapter",
      "Jamais",
      "Seulement en ranked",
      'b',
      "Les guides sont des bases, adaptez à votre expérience."
    ),
  ]
);
