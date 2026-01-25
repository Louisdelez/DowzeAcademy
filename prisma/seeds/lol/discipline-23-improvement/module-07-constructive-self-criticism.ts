import { createModule, createQuestion } from '../utils';

export const module07ConstructiveSelfCriticism = createModule(
  'Auto-critique constructive',
  'constructive-self-criticism',
  'Lister et analyser ses erreurs de manière productive',
  7,
  // Theory Content (5+ slides)
  `## La différence entre auto-critique destructive et constructive

Après une mauvaise partie, il est facile de tomber dans l'auto-critique négative : "Je suis nul", "Je ne progresserai jamais", "Ce jeu n'est pas fait pour moi". Cette attitude est **destructive** car elle ne mène à aucune amélioration.

L'**auto-critique constructive** est différente. Elle consiste à identifier objectivement ce qui n'a pas fonctionné et à établir un plan pour s'améliorer. Au lieu de "Je suis nul", on dit : "J'ai mal géré mon positionnement dans ce teamfight, je dois travailler ce point."

La clé est de séparer votre identité de vos actions. Vous n'êtes pas vos erreurs, vous êtes un joueur qui fait des erreurs et qui peut s'améliorer.

## Comment identifier ses erreurs objectivement

Pour une analyse objective :

1. **Attendez de vous calmer** : Analysez 30 minutes après la partie, pas immédiatement
2. **Listez les faits, pas les jugements** : "Je suis mort 3 fois sous la tour ennemie" et non "J'ai été stupide"
3. **Posez-vous les bonnes questions** :
   - Qu'aurais-je pu faire différemment ?
   - Avais-je les informations nécessaires ?
   - Quelle décision alternative était possible ?
4. **Cherchez les patterns** : Cette erreur revient-elle souvent ?

Utilisez le replay si nécessaire pour voir objectivement ce qui s'est passé.

## La méthode des 3 erreurs

Après chaque partie, identifiez exactement **3 erreurs** que vous avez commises :

1. **Erreur mécanique** : Combo raté, skillshot manqué, flash mal utilisé
2. **Erreur décisionnelle** : Mauvaise rotation, objectif mal priorisé, engage au mauvais moment
3. **Erreur de vision/awareness** : Gank non vu, information ignorée, minimap non regardée

Cette méthode force à réfléchir à différents aspects du jeu et évite de se focaliser sur un seul type d'erreur.

Attention : cherchez **vos** erreurs, pas celles de vos coéquipiers. Vous ne pouvez contrôler que votre propre jeu.

## Transformer les erreurs en objectifs

Une erreur identifiée doit devenir un objectif d'amélioration :

| Erreur | Objectif |
|--------|----------|
| "J'ai été ganké 4 fois sans voir le jungler" | "Regarder la minimap toutes les 5 secondes" |
| "J'ai raté mon combo Riven 2 fois en fight" | "Pratiquer le combo en training tool 10 minutes avant de jouer" |
| "J'ai engage sans mon équipe 3 fois" | "Vérifier la position de mes alliés avant chaque engage" |

Chaque erreur récurrente devient une opportunité de progression ciblée.

## Éviter les excuses et le blame

Les excuses courantes qui empêchent la progression :

- **"Mon jungler n'est jamais venu"** → Vous auriez pu adapter votre jeu à cette réalité
- **"L'ennemi était en smurf"** → Qu'auriez-vous pu mieux faire malgré tout ?
- **"J'ai lag/j'étais fatigué"** → Pourquoi avez-vous choué de jouer dans ces conditions ?
- **"Mon counter m'a détruit"** → Comment gérer ce matchup différemment ?

Le blame (accuser les autres) est le plus grand obstacle à la progression. Même si votre équipe a mal joué, concentrez-vous sur ce que VOUS auriez pu améliorer.

Règle d'or : **Vous êtes le seul facteur constant dans toutes vos parties.** C'est donc le seul facteur que vous pouvez améliorer.

## Créer un système de feedback personnel

Pour progresser régulièrement :

1. **Journal d'erreurs** : Tenez un document listant vos erreurs récurrentes
2. **Catégorisation** : Regroupez les erreurs par type (vision, mécanique, décision, mental)
3. **Fréquence** : Notez combien de fois chaque erreur revient
4. **Priorité** : Travaillez sur l'erreur la plus fréquente en premier
5. **Suivi** : Marquez quand une erreur disparaît de vos parties

Exemple de journal :
- "Mourir en overextend sans vision" - 15 occurrences (PRIORITÉ)
- "Rater mon R en teamfight" - 4 occurrences
- "Ne pas regarder le timer de Baron" - 3 occurrences

Ce système transforme l'auto-critique en processus d'amélioration mesurable.`,

  // Practice Instructions
  `## Objectif

Créer votre premier journal d'erreurs en analysant vos 5 dernières parties et en identifiant vos patterns récurrents.

## Étapes

1. Revoyez vos 5 dernières parties (via historique, stats ou replays)
2. Pour chaque partie, listez 3 erreurs que vous avez commises
3. Catégorisez chaque erreur (mécanique, décision, vision, mental)
4. Comptez les erreurs récurrentes (celles qui reviennent plusieurs fois)
5. Identifiez votre erreur la plus fréquente
6. Transformez cette erreur en objectif d'amélioration SMART
7. Notez cet objectif et les actions à prendre

## Critère de réussite

Vous avez un document avec 15 erreurs listées (3 par partie), les erreurs récurrentes identifiées, et un objectif d'amélioration défini pour l'erreur la plus fréquente.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la différence entre auto-critique destructive et constructive ?",
      "Il n'y a pas de différence",
      "La constructive identifie les erreurs avec un plan d'amélioration, la destructive dévalorise la personne",
      "La destructive est plus efficace",
      "La constructive est réservée aux pros",
      'b',
      "L'auto-critique constructive se concentre sur les erreurs et comment s'améliorer, tandis que la destructive attaque l'identité de la personne."
    ),
    createQuestion(
      "Quand devrait-on analyser ses erreurs après une partie frustrante ?",
      "Immédiatement, à chaud",
      "30 minutes après, une fois calmé",
      "Jamais, il faut oublier",
      "Une semaine après",
      'b',
      "Il est préférable d'attendre d'être calmé (environ 30 minutes) pour analyser objectivement."
    ),
    createQuestion(
      "Combien d'erreurs devrait-on identifier après chaque partie selon la méthode des 3 erreurs ?",
      "1 erreur",
      "2 erreurs",
      "3 erreurs de types différents",
      "Autant que possible",
      'c',
      "La méthode recommande d'identifier 3 erreurs de types différents : mécanique, décisionnelle, et vision/awareness."
    ),
    createQuestion(
      "Sur les erreurs de qui devez-vous vous concentrer ?",
      "Celles de votre jungler",
      "Celles de toute l'équipe",
      "Uniquement les vôtres",
      "Celles des ennemis",
      'c',
      "Concentrez-vous uniquement sur vos propres erreurs car c'est le seul facteur que vous pouvez contrôler."
    ),
    createQuestion(
      "Pourquoi le blame (accuser les autres) est-il problématique ?",
      "Ce n'est pas problématique",
      "Il empêche de se concentrer sur sa propre amélioration",
      "Il rend les coéquipiers tristes",
      "Il est interdit par Riot",
      'b',
      "Le blame empêche de voir ses propres erreurs et donc de s'améliorer."
    ),
    createQuestion(
      "Quelle est la règle d'or de l'amélioration personnelle ?",
      "Avoir la meilleure équipe possible",
      "Vous êtes le seul facteur constant dans toutes vos parties",
      "Jouer le plus de parties possible",
      "Suivre le meta parfaitement",
      'b',
      "Vous êtes le seul facteur présent dans chacune de vos parties, c'est donc le seul que vous pouvez améliorer."
    ),
    createQuestion(
      "Que faut-il faire avec une erreur récurrente identifiée ?",
      "L'ignorer et espérer qu'elle disparaisse",
      "La transformer en objectif d'amélioration SMART",
      "Changer de champion",
      "Blâmer le matchmaking",
      'b',
      "Chaque erreur récurrente doit être transformée en objectif d'amélioration concret et mesurable."
    ),
    createQuestion(
      "Comment prioriser les erreurs à travailler ?",
      "Travailler sur les erreurs les plus difficiles d'abord",
      "Travailler sur l'erreur la plus fréquente en premier",
      "Toutes en même temps",
      "Au hasard",
      'b',
      "Commencez par l'erreur la plus fréquente car elle a le plus d'impact sur vos résultats."
    ),
    createQuestion(
      "Quelle attitude face à 'Mon counter m'a détruit' est constructive ?",
      "Éviter ce matchup à tout prix",
      "Se demander comment gérer ce matchup différemment",
      "Accuser Riot du déséquilibre",
      "Abandonner le champion",
      'b',
      "Une attitude constructive consiste à chercher comment mieux gérer le matchup plutôt que de le blâmer."
    ),
    createQuestion(
      "Que contient un journal d'erreurs efficace ?",
      "Uniquement les parties perdues",
      "Les erreurs listées, catégorisées, avec leur fréquence et priorité",
      "Les noms des mauvais coéquipiers",
      "Les bugs rencontrés",
      'b',
      "Un journal efficace liste les erreurs, les catégorise, note leur fréquence et définit les priorités."
    ),
  ]
);
