import { createModule, createQuestion } from '../utils';

export const module04CarryPeel = createModule(
  'Peel des carrys',
  'carry-peel',
  "Maîtriser l'art de protéger ses alliés carries contre les menaces ennemies",
  4,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le peel ?

Le **peel** est l'ensemble des actions visant à protéger un allié (généralement le carry) contre les menaces ennemies. Cela inclut : le CC, les shields, les heals, le zonage et même simplement **bloquer physiquement** l'accès au carry.

## Pourquoi le peel est essentiel

Un carry protégé est un carry qui DPS. Un **ADC 15/0** qui meurt en 2 secondes parce que personne ne le protège est inutile. Le peel transforme un carry potentiel en carry **réel**.

## Les outils du peel

Différentes formes de protection :
- **CC (Crowd Control)** : Stun, slow, knock-up sur les menaces
- **Shields** : Lulu E, Karma E, Janna E
- **Heals** : Soraka W, Yuumi Q
- **Displacement** : Janna R, Gragas R pour repousser
- **Zonage** : Menacer l'ennemi s'il s'approche

## Champions spécialisés dans le peel

- **Lulu** : Polymorph (W) + shield (E) + ult (R)
- **Janna** : Tornado (Q) + slow (W) + shield (E) + disengage ult (R)
- **Braum** : Bouclier + stun + ult
- **Thresh** : Hook + Flay + Lantern pour repositionner
- **Tahm Kench** : Avaler l'allié en danger

## Identifier les menaces pour votre carry

Avant le combat, identifiez qui va essayer de tuer votre carry :
- **Assassins** : Zed, Talon, Katarina
- **Divers** : Irelia, Camille, Diana
- **Engagers** : Malphite, Vi, Hecarim
Gardez vos cooldowns **spécifiquement** pour ces menaces.

## Erreurs de peel courantes

- **Utiliser ses CC offensivement** au lieu de les garder
- **Être trop loin** du carry quand la menace arrive
- **Paniquer** et utiliser tous les cooldowns sur une seule menace
- **Oublier la deuxième menace** (l'équipe a souvent 2 divers)`,

  // Practice Instructions
  `## Objectif

Pratiquer le peel en protégeant activement votre carry contre les menaces ennemies.

## Étapes

1. Jouez un champion de peel (Lulu, Janna, Thresh, Braum)
2. En début de partie, identifiez les menaces pour votre ADC (assassins, divers)
3. En teamfight, restez à proximité de votre carry
4. Gardez au moins une capacité de CC pour protéger le carry
5. Quand une menace arrive sur votre carry, utilisez immédiatement votre CC sur elle
6. Après le combat, demandez à votre carry s'il s'est senti protégé

## Critère de réussite

Votre carry survit dans au moins 3 teamfights sur 5, et vous avez utilisé vos capacités défensives sur les menaces qui l'attaquaient plutôt que pour engager.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le peel en League of Legends ?",
      "Attaquer le carry ennemi",
      "Protéger un allié contre les menaces ennemies",
      "Voler les camps de jungle adverses",
      "Faire des dégâts de zone",
      'b',
      "Le peel désigne toutes les actions visant à protéger un allié (CC, shields, heals, zonage) contre les ennemis."
    ),
    createQuestion(
      "Pourquoi est-il essentiel de peel pour le carry ?",
      "Pour augmenter ses dégâts",
      "Pour qu'il puisse farm tranquillement",
      "Un carry protégé peut DPS librement et porter la partie",
      "Pour qu'il puisse flanker",
      'c',
      "Un carry mort ne fait aucun dégât ; un carry protégé peut infliger des dégâts constants pendant le combat."
    ),
    createQuestion(
      "Quel champion est considéré comme un excellent peeler ?",
      "Zed",
      "Lulu",
      "Master Yi",
      "Draven",
      'b',
      "Lulu a un arsenal complet de peel : Polymorph (W), shield (E), et un ultime qui sauve la vie."
    ),
    createQuestion(
      "Qu'est-ce que le 'displacement' comme forme de peel ?",
      "Faire des dégâts à distance",
      "Repousser ou déplacer les ennemis loin du carry",
      "Téléporter le carry hors du combat",
      "Rendre le carry invisible",
      'b',
      "Le displacement (Janna R, Gragas R) permet de repousser physiquement les menaces loin du carry."
    ),
    createQuestion(
      "Quelle est une erreur courante de peel ?",
      "Rester près du carry",
      "Utiliser ses CC offensivement au lieu de les garder pour protéger",
      "Identifier les menaces à l'avance",
      "Communiquer avec son carry",
      'b',
      "Beaucoup de joueurs utilisent leurs CC pour engager puis n'ont plus rien quand l'assassin arrive sur le carry."
    ),
    createQuestion(
      "Comment identifier les menaces pour votre carry avant le combat ?",
      "Regarder qui a le plus d'or",
      "Identifier les assassins et divers dans l'équipe ennemie",
      "Compter le nombre de tanks adverses",
      "Vérifier la météo du jeu",
      'b',
      "Les assassins (Zed, Katarina) et divers (Irelia, Camille) sont les principales menaces pour votre carry."
    ),
    createQuestion(
      "Que fait Tahm Kench pour peel son carry ?",
      "Il lui donne un shield énorme",
      "Il l'avale temporairement pour le mettre en sécurité",
      "Il stun tous les ennemis autour",
      "Il le rend invisible",
      'b',
      "Tahm Kench peut avaler (W) un allié pour le protéger temporairement des dégâts et du CC."
    ),
    createQuestion(
      "Que signifie 'garder ses cooldowns' pour le peel ?",
      "Ne jamais utiliser ses capacités",
      "Réserver ses CC/shields pour protéger le carry au lieu de les utiliser offensivement",
      "Utiliser toutes ses capacités au début du combat",
      "Attendre la fin du combat",
      'b',
      "Garder ses cooldowns signifie ne pas les gaspiller offensivement pour les avoir disponibles quand le carry est menacé."
    ),
    createQuestion(
      "Pourquoi ne faut-il pas être trop loin du carry ?",
      "Pour pouvoir lui parler",
      "Pour réagir immédiatement quand une menace arrive",
      "Pour partager son expérience",
      "Ce n'est pas important",
      'b',
      "Si vous êtes trop loin, vous ne pourrez pas CC ou shield votre carry à temps quand l'assassin engage."
    ),
    createQuestion(
      "Pourquoi faut-il faire attention à la 'deuxième menace' ?",
      "La deuxième menace fait toujours plus de dégâts",
      "Après avoir utilisé vos CC sur la première, la seconde peut tuer votre carry librement",
      "La deuxième menace est toujours un tank",
      "Il n'y a jamais de deuxième menace",
      'b',
      "Si vous utilisez tous vos cooldowns sur une menace, la seconde (ex: Zed après que Diana ait engagé) peut tuer votre carry."
    ),
  ]
);
