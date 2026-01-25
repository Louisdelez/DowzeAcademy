import { createModule, createQuestion } from '../utils';

export const module01VisionImportance = createModule(
  'Importance de la vision',
  'vision-importance',
  "Comprendre l'avantage stratégique que procure la vision sur la carte",
  1,
  // Theory Content (5+ slides)
  `## Pourquoi la vision est-elle cruciale ?

La vision est l'un des aspects les plus importants de League of Legends. Elle vous permet de voir les mouvements ennemis, d'anticiper les ganks, et de prendre des décisions éclairées. Un joueur avec une bonne vision a toujours un avantage sur son adversaire.

## L'information, c'est le pouvoir

Dans LoL, **l'information est la clé de la victoire**. Savoir où se trouve le jungler ennemi vous permet de jouer agressivement ou défensivement. Sans vision, vous jouez à l'aveugle et prenez des risques inutiles. Les meilleurs joueurs maximisent toujours leur vision.

## Le brouillard de guerre (Fog of War)

Le **brouillard de guerre** cache tout ce qui n'est pas dans votre champ de vision. Sans ward ni allié à proximité, vous ne voyez pas les ennemis. Les wards percent ce brouillard et révèlent une zone pendant une durée limitée, vous donnant des informations précieuses.

## Vision et objectifs

La vision est particulièrement importante autour des **objectifs majeurs** : Dragon, Baron Nashor, et Rift Herald. Avant de tenter un objectif, votre équipe doit établir le contrôle de la vision pour éviter un vol (steal) ou une embuscade ennemie.

## L'avantage stratégique

Avec une bonne vision, vous pouvez :
- **Éviter les ganks** et survivre en lane
- **Anticiper les rotations** ennemies
- **Sécuriser les objectifs** en toute sécurité
- **Tendre des embuscades** à l'ennemi
- **Contrôler le rythme** de la partie

La vision transforme une partie chaotique en une partie stratégique que vous contrôlez.`,

  // Practice Instructions
  `## Objectif

Comprendre l'importance de la vision en observant les conséquences du manque d'information.

## Étapes

1. Lancez une partie normale ou classée
2. Pendant les 10 premières minutes, notez chaque fois que vous ou un coéquipier vous faites ganker
3. Pour chaque gank subi, vérifiez si une ward aurait pu prévenir cette situation
4. Identifiez les zones non couvertes par la vision au moment du gank
5. Comptez le nombre de morts évitables grâce à une meilleure vision

## Critère de réussite

Vous avez identifié au moins 3 situations où une ward aurait pu sauver une vie et compris l'impact direct de la vision sur la survie en lane.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la vision est-elle considérée comme cruciale dans League of Legends ?",
      "Elle augmente les dégâts de votre champion",
      "Elle permet de voir les mouvements ennemis et prendre des décisions éclairées",
      "Elle réduit le temps de recharge des sorts",
      "Elle donne de l'or bonus",
      'b',
      "La vision fournit des informations sur les positions ennemies, permettant de mieux anticiper et décider."
    ),
    createQuestion(
      "Qu'est-ce que le brouillard de guerre (Fog of War) ?",
      "Un sort de mage qui réduit la vision",
      "La zone de la carte cachée sans ward ni allié à proximité",
      "Un effet météo sur la Faille de l'invocateur",
      "Une compétence du Dragon",
      'b',
      "Le brouillard de guerre cache les zones sans vision alliée, dissimulant les ennemis."
    ),
    createQuestion(
      "Quel avantage procure une bonne vision autour du Dragon ?",
      "Le Dragon fait moins de dégâts",
      "L'équipe peut sécuriser l'objectif sans risque d'embuscade",
      "Le Dragon donne plus d'or",
      "Le Dragon apparaît plus rapidement",
      'b',
      "Une bonne vision permet de voir les ennemis approcher et d'éviter les steals ou embuscades."
    ),
    createQuestion(
      "Sans vision, comment décririez-vous votre façon de jouer ?",
      "De manière stratégique",
      "De manière optimale",
      "À l'aveugle avec des risques inutiles",
      "De manière défensive",
      'c',
      "Jouer sans vision revient à prendre des décisions sans information, ce qui augmente les risques."
    ),
    createQuestion(
      "Qu'est-ce qu'un gank ?",
      "Un type de monstre neutre",
      "Une attaque surprise d'un ou plusieurs ennemis sur votre lane",
      "Une technique de last hit",
      "Un objectif de la jungle",
      'b',
      "Un gank est une embuscade où un joueur (souvent le jungler) vient attaquer par surprise."
    ),
    createQuestion(
      "Comment la vision aide-t-elle à éviter les ganks ?",
      "En augmentant votre vitesse de déplacement",
      "En révélant l'approche du jungler ennemi à l'avance",
      "En réduisant les dégâts subis",
      "En soignant votre champion",
      'b',
      "Les wards révèlent les chemins de gank, permettant de se replier à temps."
    ),
    createQuestion(
      "Pourquoi le Baron Nashor nécessite-t-il un contrôle de vision particulier ?",
      "Parce qu'il est invisible",
      "Parce qu'il peut être volé facilement sans vision",
      "Parce qu'il donne de la vision",
      "Parce qu'il détruit les wards",
      'b',
      "Le Baron est un objectif majeur souvent contesté ; sans vision, l'ennemi peut facilement le steal."
    ),
    createQuestion(
      "Quelle affirmation est vraie concernant l'information en jeu ?",
      "L'information n'a pas d'importance en solo queue",
      "L'information est la clé de la victoire",
      "Seul le skill mécanique compte",
      "L'information ne sert qu'aux professionnels",
      'b',
      "À tous les niveaux, avoir plus d'informations que l'adversaire donne un avantage décisif."
    ),
    createQuestion(
      "Que permet de faire une bonne vision en termes offensifs ?",
      "Augmenter les dégâts d'attaque",
      "Tendre des embuscades à l'ennemi",
      "Régénérer plus de vie",
      "Réduire le coût des objets",
      'b',
      "Avec de la vision, vous pouvez repérer un ennemi isolé et préparer une embuscade."
    ),
    createQuestion(
      "Comment la vision transforme-t-elle une partie ?",
      "Elle rend le jeu plus lent",
      "Elle transforme une partie chaotique en partie stratégique contrôlée",
      "Elle supprime les combats d'équipe",
      "Elle désactive les compétences ennemies",
      'b',
      "La vision permet de prendre des décisions informées plutôt que de jouer au hasard."
    ),
  ]
);
