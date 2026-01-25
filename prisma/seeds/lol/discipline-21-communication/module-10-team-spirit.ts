import { createModule, createQuestion } from '../utils';

export const module10TeamSpirit = createModule(
  'Esprit d\'équipe',
  'team-spirit',
  'Féliciter, encourager et maintenir une attitude positive',
  10,
  // Theory Content (5+ slides)
  `## L'importance de l'esprit d'équipe

L'**esprit d'équipe** est le ciment qui unit 5 inconnus vers un objectif commun. Une équipe avec une bonne ambiance :
- **Communique** mieux
- **Coordonne** ses actions efficacement
- **Résiste** mieux à l'adversité
- **Gagne** plus de parties
C'est un avantage compétitif souvent sous-estimé.

## Féliciter les bonnes actions

Complimentez vos coéquipiers :
- **"gj"** (good job) après un kill ou bon play
- **"wp"** (well played) après un beau mouvement
- **"nice"** pour une bonne décision
- **"ty"** (thank you) quand quelqu'un vous aide
- **"good save"** après une protection réussie
Ces petits mots créent une dynamique positive.

## Encourager dans les moments difficiles

Quand l'équipe est en difficulté :
- **"we scale, play safe"** - rappeler que le late existe
- **"np, next fight"** - passer à la suite après un échec
- **"we can still win"** - maintenir l'espoir
- **"good try"** - valoriser l'effort même si ça échoue
- **"focus on [objectif]"** - recentrer l'équipe
Le mental compte autant que le skill.

## Éviter les comportements toxiques

L'esprit d'équipe implique de NE PAS :
- **Blâmer** les coéquipiers pour leurs erreurs
- **Rappeler** les échecs passés pendant la partie
- **Menacer** de report ou de troll
- **Abandonner** mentalement avant la fin
- **Comparer** négativement ("better jungle wins")

## Créer une culture positive

Pour être un bon coéquipier :
- **Commencez** chaque partie par un "glhf" (good luck have fun)
- **Félicitez** au moins 3 fois par partie
- **Ne dites rien** si vous n'avez rien de constructif
- **Finissez** par un "gg wp" même en cas de défaite
- **Soyez** le joueur avec qui vous aimeriez jouer
La positivité est contagieuse.`,

  // Practice Instructions
  `## Objectif

Développer un esprit d'équipe positif en félicitant et encourageant vos coéquipiers tout au long de la partie.

## Étapes

1. Lancez une partie normale ou classée
2. Commencez par "glhf" dans le chat d'équipe
3. Félicitez chaque bon play avec "gj" ou "nice"
4. Après une erreur alliée, restez silencieux ou dites "np"
5. Dans un moment difficile, encouragez : "we can still win"
6. Terminez par "gg wp" quelle que soit l'issue

## Critère de réussite

Vous avez envoyé au moins 5 messages positifs pendant la partie et n'avez fait aucun commentaire négatif sur vos coéquipiers.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi l'esprit d'équipe est-il important dans LoL ?",
      "Il n'est pas vraiment important",
      "Il améliore la communication, la coordination et les chances de victoire",
      "Uniquement pour faire plaisir aux autres",
      "Pour éviter les reports",
      'b',
      "Une bonne ambiance d'équipe améliore tous les aspects du jeu collectif."
    ),
    createQuestion(
      "Que signifie 'gj' ?",
      "Get jungler",
      "Good job (bien joué)",
      "Go jungle",
      "Great journey",
      'b',
      "'gj' est l'abréviation de 'good job', utilisée pour féliciter."
    ),
    createQuestion(
      "Comment réagir quand un coéquipier fait une erreur ?",
      "Le critiquer pour qu'il apprenne",
      "Rester silencieux ou dire 'np' (no problem)",
      "Spam ping sur lui",
      "Rage quit",
      'b',
      "Le silence ou l'encouragement sont préférables à la critique."
    ),
    createQuestion(
      "Quel message est approprié en début de partie ?",
      "Vous allez perdre",
      "glhf (good luck have fun)",
      "Je vais carry",
      "Ne me gank pas",
      'b',
      "'glhf' crée une ambiance positive dès le départ."
    ),
    createQuestion(
      "Que dire après un teamfight perdu ?",
      "C'est de ta faute [nom]",
      "np, next fight",
      "ff 15",
      "Je afk",
      'b',
      "Encourager à passer au fight suivant maintient le moral."
    ),
    createQuestion(
      "Pourquoi féliciter les bons plays ?",
      "Parce que c'est obligatoire",
      "Cela crée une dynamique positive et motive l'équipe",
      "Pour éviter les reports",
      "Ça n'a aucun effet",
      'b',
      "Les compliments renforcent la confiance et l'esprit d'équipe."
    ),
    createQuestion(
      "Que signifie 'gg wp' ?",
      "Go go, we push",
      "Good game, well played (bonne partie, bien joué)",
      "Get going, win please",
      "Great gank, ward please",
      'b',
      "'gg wp' est la formule de courtoisie en fin de partie."
    ),
    createQuestion(
      "Quel comportement détruit l'esprit d'équipe ?",
      "Féliciter les coéquipiers",
      "Blâmer et rappeler les erreurs passées",
      "Encourager dans les moments difficiles",
      "Proposer des stratégies",
      'b',
      "Le blame et les rappels négatifs détruisent la cohésion."
    ),
    createQuestion(
      "Comment encourager une équipe en retard au score ?",
      "Dire 'on a perdu de toute façon'",
      "Dire 'we scale, we can still win'",
      "Ne rien dire du tout",
      "Blame le jungler",
      'b',
      "Rappeler les forces de l'équipe maintient l'espoir et la motivation."
    ),
    createQuestion(
      "Quelle attitude adopter en fin de partie, victoire ou défaite ?",
      "Flame si on perd, se vanter si on gagne",
      "Toujours dire 'gg wp' avec respect",
      "Quitter sans rien dire",
      "Insulter l'équipe adverse",
      'b',
      "Le respect en fin de partie, quel que soit le résultat, montre la maturité."
    ),
  ]
);
