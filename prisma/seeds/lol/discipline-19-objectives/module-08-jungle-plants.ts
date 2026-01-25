import { createModule, createQuestion } from '../utils';

export const module08JunglePlants = createModule(
  'Fleurs et plantes de la jungle',
  'jungle-plants',
  'Les différentes plantes interactives de la jungle et leurs effets',
  8,
  // Theory Content (5+ slides)
  `## Les plantes de la jungle

La jungle de Summoner's Rift contient des **plantes interactives** qui offrent divers avantages. Ces plantes peuvent être activées par n'importe quel joueur (allié ou ennemi) d'une simple attaque de base.

## Blast Cone (Cône explosif)

La **Blast Cone** est une plante rouge/orange qui explose quand on l'attaque. Elle **propulse** tous les champions et monstres proches dans les airs, dans la direction opposée à la plante.

**Utilisations** :
- Sauter par-dessus les murs
- Échapper à un gank
- Engager sur un ennemi de manière inattendue

## Honeyfruit (Fruit du miel)

Le **Honeyfruit** est une plante verte qui fait tomber des **fruits de soin** quand elle est détruite. Ramasser ces fruits restaure de la vie et du mana, mais vous **ralentit** brièvement.

**Localisations** : Principalement le long de la rivière

## Scryer's Bloom (Fleur de vision)

La **Scryer's Bloom** est une plante bleue qui, une fois activée, envoie un **cône de vision** dans une direction. Ce cône révèle les champions ennemis et détruit les wards sur son passage.

**Utilisations** :
- Vérifier si le Baron/Dragon est en cours
- Détecter les embuscades
- Deward une zone stratégique

## Spawn et emplacements

Les plantes apparaissent à des **emplacements fixes** mais à des moments semi-aléatoires :
- **Blast Cones** : Dans les jungles, près des murs
- **Honeyfruit** : Le long de la rivière
- **Scryer's Bloom** : Aux entrées de la rivière

## Utilisation stratégique

Les plantes ajoutent une dimension tactique au jeu :
- Une Blast Cone peut sauver une vie ou permettre un play
- Un Honeyfruit peut sustain après un combat
- Une Scryer's Bloom peut révéler un setup ennemi

**Attention** : Les ennemis peuvent aussi utiliser ces plantes contre vous !`,

  // Practice Instructions
  `## Objectif

Identifier les trois types de plantes de la jungle et apprendre à les utiliser efficacement.

## Étapes

1. Lancez le Practice Tool et explorez la jungle
2. Trouvez une Blast Cone (rouge) et utilisez-la pour sauter un mur
3. Localisez un Honeyfruit dans la rivière et ramassez les fruits
4. Trouvez une Scryer's Bloom (bleue) et observez le cône de vision
5. Pratiquez l'utilisation de la Blast Cone pour engager ou fuir
6. Notez les emplacements typiques de chaque type de plante

## Critère de réussite

Vous connaissez les trois types de plantes, leurs effets, et savez les utiliser à votre avantage.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel effet a la Blast Cone quand on l'attaque ?",
      "Elle soigne les alliés proches",
      "Elle propulse les champions et monstres proches",
      "Elle révèle les ennemis cachés",
      "Elle inflige des dégâts en zone",
      'b',
      "La Blast Cone explose et propulse tout le monde dans les airs, permettant de sauter des murs."
    ),
    createQuestion(
      "Où trouve-t-on principalement les Honeyfruit ?",
      "Dans les bases",
      "Le long de la rivière",
      "Près du Baron",
      "Dans les lanes",
      'b',
      "Les Honeyfruit poussent principalement le long de la rivière."
    ),
    createQuestion(
      "Que fait la Scryer's Bloom ?",
      "Soigne les champions proches",
      "Envoie un cône de vision qui révèle et deward",
      "Propulse les ennemis",
      "Donne un buff de vitesse",
      'b',
      "La Scryer's Bloom envoie un cône qui révèle les champions et détruit les wards."
    ),
    createQuestion(
      "Quel désavantage a le Honeyfruit ?",
      "Il inflige des dégâts",
      "Il ralentit temporairement celui qui ramasse les fruits",
      "Il révèle votre position",
      "Il coûte de l'or",
      'b',
      "Ramasser les fruits du Honeyfruit vous ralentit brièvement."
    ),
    createQuestion(
      "De quelle couleur est la Blast Cone ?",
      "Bleue",
      "Verte",
      "Rouge/Orange",
      "Violette",
      'c',
      "La Blast Cone est reconnaissable à sa couleur rouge-orange."
    ),
    createQuestion(
      "Qui peut activer les plantes de la jungle ?",
      "Uniquement le jungler",
      "N'importe quel champion des deux équipes",
      "Uniquement l'équipe bleue",
      "Personne, elles s'activent seules",
      'b',
      "Tout champion, allié ou ennemi, peut activer une plante avec une attaque de base."
    ),
    createQuestion(
      "Comment utiliser la Blast Cone pour engager sur un ennemi ?",
      "Attaquer la plante quand l'ennemi est de l'autre côté",
      "Attaquer la plante pour se propulser vers l'ennemi",
      "Attendre que l'ennemi l'active",
      "Il n'est pas possible d'engager avec",
      'b',
      "Vous pouvez utiliser la Blast Cone pour vous propulser par-dessus un mur vers un ennemi."
    ),
    createQuestion(
      "La Scryer's Bloom est utile avant quel objectif ?",
      "Avant de clear la jungle",
      "Avant de check Baron ou Dragon",
      "Avant de recall",
      "Avant de push une lane",
      'b',
      "La Scryer's Bloom peut révéler si l'ennemi fait le Baron ou Dragon sans vous mettre en danger."
    ),
    createQuestion(
      "Que restaure le Honeyfruit ?",
      "Uniquement de la vie",
      "Uniquement du mana",
      "De la vie et du mana",
      "De l'expérience",
      'c',
      "Les fruits du Honeyfruit restaurent à la fois de la vie et du mana."
    ),
    createQuestion(
      "Où spawn généralement la Blast Cone ?",
      "Au milieu des lanes",
      "Dans la jungle, près des murs",
      "Dans la rivière uniquement",
      "Dans les bases",
      'b',
      "Les Blast Cones apparaissent dans la jungle, près des murs qu'elles permettent de franchir."
    ),
  ]
);
