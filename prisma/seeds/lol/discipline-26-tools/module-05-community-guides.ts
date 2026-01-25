import { createModule, createQuestion } from '../utils';

export const module05CommunityGuides = createModule(
  'Guides communautaires et theorycraft',
  'community-guides',
  "Explorer Mobafire, Reddit et les ressources communautaires pour approfondir ses connaissances",
  5,
  // Theory Content (5+ slides)
  `## La richesse des guides communautaires

Au-delà des sites de statistiques, la communauté League of Legends produit une quantité impressionnante de contenu éducatif. Ces ressources offrent des perspectives uniques et des analyses approfondies.

## Mobafire - La plateforme de guides

**Mobafire** est la plus grande plateforme de guides de champions :
- Guides détaillés écrits par des joueurs passionnés
- Explications des builds, runes et stratégies
- Section commentaires pour les questions
- Système de notation pour identifier les meilleurs guides

Attention : la qualité varie selon les auteurs. Privilégiez les guides avec de bonnes notes et récemment mis à jour.

## Reddit - Le hub communautaire

**Reddit** offre plusieurs subreddits utiles :
- **/r/leagueoflegends** : Actualités et discussions générales
- **/r/summonerschool** : Questions et conseils pour progresser
- **/r/[ChampionName]Mains** : Communautés dédiées à chaque champion

Les subreddits de "mains" sont particulièrement utiles pour les astuces spécifiques à votre champion.

## Le theorycraft expliqué

Le **theorycraft** est l'analyse mathématique du jeu :
- Calculs de dégâts et d'efficacité des builds
- Optimisation des runes et objets
- Découverte de stratégies non conventionnelles
- Tests de mécaniques obscures

Les theorycrafters découvrent souvent des builds OP avant qu'ils ne deviennent méta.

## Évaluer la fiabilité des sources

Pour distinguer les bons conseils des mauvais :
1. **Vérifiez la date** : Un guide de 2020 est probablement obsolète
2. **Regardez l'elo de l'auteur** : Les conseils d'un Challenger ont plus de poids
3. **Croisez les sources** : Si plusieurs sources disent la même chose, c'est bon signe
4. **Testez vous-même** : L'expérience personnelle reste la meilleure validation

Ne prenez jamais un conseil unique pour argent comptant.`,

  // Practice Instructions
  `## Objectif

Explorer les ressources communautaires et trouver des informations avancées sur votre champion principal.

## Étapes

1. Rendez-vous sur Mobafire et recherchez votre champion principal
2. Trouvez le guide le mieux noté et le plus récent
3. Notez un conseil ou une astuce que vous ne connaissiez pas
4. Allez sur Reddit et trouvez le subreddit dédié à votre champion (/r/[Champion]Mains)
5. Lisez les 5 posts les plus populaires de la semaine
6. Identifiez un combo ou une technique mentionné par la communauté
7. Comparez avec ce que vous avez trouvé sur Mobafire

## Critère de réussite

Vous avez trouvé au moins 2 nouvelles informations sur votre champion depuis Mobafire et Reddit, et vous comprenez la différence entre les deux types de ressources.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que Mobafire ?",
      "Un site de statistiques",
      "Une plateforme de guides de champions écrits par la communauté",
      "Un logiciel de coaching",
      "Un forum officiel de Riot",
      'b',
      "Mobafire est une plateforme où des joueurs publient des guides détaillés de champions."
    ),
    createQuestion(
      "Quel subreddit est dédié aux conseils pour progresser ?",
      "/r/leagueoflegends",
      "/r/summonerschool",
      "/r/riotgames",
      "/r/esports",
      'b',
      "/r/summonerschool est le subreddit dédié à l'apprentissage et à la progression."
    ),
    createQuestion(
      "Qu'est-ce que le theorycraft ?",
      "Une forme de triche",
      "L'analyse mathématique et l'optimisation du jeu",
      "Un mode de jeu compétitif",
      "Un type de streaming",
      'b',
      "Le theorycraft consiste à analyser mathématiquement les mécaniques du jeu."
    ),
    createQuestion(
      "Comment s'appellent les subreddits dédiés aux mains d'un champion ?",
      "/r/[Champion]Fans",
      "/r/[Champion]Mains",
      "/r/[Champion]Players",
      "/r/[Champion]Community",
      'b',
      "Les subreddits de mains suivent le format /r/[Champion]Mains (ex: /r/YasuoMains)."
    ),
    createQuestion(
      "Pourquoi faut-il vérifier la date d'un guide ?",
      "Pour savoir si l'auteur joue encore",
      "Parce qu'un guide ancien peut être obsolète à cause des patchs",
      "Pour calculer l'âge de l'auteur",
      "Les guides récents sont toujours faux",
      'b',
      "Le jeu évolue constamment, un vieux guide peut contenir des informations périmées."
    ),
    createQuestion(
      "Quel critère aide à évaluer la fiabilité d'un guide ?",
      "Le nombre de mots",
      "Le rang de l'auteur et les notes du guide",
      "La couleur du fond du site",
      "Le nombre d'images",
      'b',
      "Le rang de l'auteur et les notes données par d'autres joueurs sont de bons indicateurs."
    ),
    createQuestion(
      "Que découvrent souvent les theorycrafters ?",
      "Des bugs à exploiter",
      "Des builds efficaces avant qu'ils deviennent populaires",
      "Des codes de triche",
      "Des skins secrets",
      'b',
      "Les theorycrafters identifient souvent des builds optimaux avant le reste de la communauté."
    ),
    createQuestion(
      "Quelle est la meilleure façon de valider un conseil trouvé en ligne ?",
      "Croire aveuglément le premier résultat",
      "Croiser les sources et tester soi-même",
      "Demander à Riot Games",
      "Ne jamais faire confiance à internet",
      'b',
      "Croiser plusieurs sources et tester personnellement sont les meilleures validations."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'main' dans le jargon LoL ?",
      "Le personnage principal d'une histoire",
      "Un joueur spécialisé sur un champion particulier",
      "Le mode de jeu principal",
      "Une compétence ultime",
      'b',
      "Un 'main' est un joueur qui se spécialise sur un champion spécifique."
    ),
    createQuestion(
      "Quel est l'avantage des subreddits de mains ?",
      "Ils sont modérés par Riot",
      "Ils contiennent des astuces très spécifiques au champion",
      "Ils offrent des récompenses en jeu",
      "Ils sont les seuls à avoir des informations correctes",
      'b',
      "Les communautés de mains partagent des connaissances très pointues sur leur champion."
    ),
  ]
);
