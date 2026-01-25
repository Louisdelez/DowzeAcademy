import { createModule, createQuestion } from '../utils';

export const module11FlexPicks = createModule(
  'Flex picks',
  'flex-picks',
  'Utiliser les champions multi-rôles pour brouiller l\'adversaire et s\'adapter en draft',
  11,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un flex pick ?

Un **flex pick** est un champion capable de jouer efficacement sur **plusieurs rôles ou lanes**. Ces champions sont extrêmement précieux en draft car ils permettent de :

- Cacher votre stratégie plus longtemps
- Forcer l'adversaire à deviner où ira le champion
- S'adapter aux picks adverses tardivement
- Éviter les counter-picks ciblés

## Exemples de flex picks populaires

**Gragas** (Top / Jungle / Support) :
- Kit polyvalent avec CC, burst, et engage
- Peut être tank ou AP selon le rôle
- Brouille complètement les assignations de lane

**Sett** (Top / Jungle / Mid / Support) :
- Viable sur 4 rôles différents
- Force l'adversaire à draft "à l'aveugle"
- Chaque rôle a un style différent

**Seraphine** (Mid / Support / ADC) :
- Damage dealer ou support selon le build
- Synergies variables selon la position

**Autres flex picks notables** :
- Pantheon (Top/Mid/Support/Jungle)
- Viego (Jungle/Mid/Top)
- Karma (Support/Mid/Top)
- Tristana (ADC/Mid)

## Comment utiliser les flex picks en draft

**Stratégie optimale** :

1. **Pick early les flex** : Sélectionnez vos flex picks tôt dans la draft
2. **Gardez l'ambiguïté** : Ne révélez pas où ils iront
3. **Observez l'adversaire** : Attendez qu'ils commit sur leurs lanes
4. **Assignez tardivement** : Décidez des positions en fonction des picks ennemis

**Exemple concret** :
- Pick 1 : Gragas
- L'adversaire ne sait pas : Top tank ? Jungle AP ? Support ?
- Ils doivent draft sans savoir qui ils affronteront
- Pick tardif : vous assignez Gragas où c'est le plus avantageux

## Avantages stratégiques des flex picks

**En draft** :
- L'adversaire gaspille des bans (doit ban plusieurs champions)
- Impossible de counter-pick efficacement
- Force des picks "safe" plutôt qu'optimaux
- Permet des swaps de dernière minute

**En game** :
- Vos lanes peuvent être optimisées après avoir vu l'équipe ennemie
- Contre un bad matchup prévu, swappez le flex ailleurs
- Confusion dans la préparation adverse

**Psychologique** :
- L'adversaire joue dans l'incertitude
- Moins de préparation ciblée possible
- Avantage mental dès la draft

## Construire un pool de flex picks

Pour maximiser votre versatilité :

**Niveau de maîtrise requis** :
- Apprenez le champion sur son rôle principal d'abord
- Puis expérimentez les rôles secondaires
- Visez 50+ games sur chaque rôle flex

**Champions recommandés par rôle principal** :

| Principal | Flex |
|-----------|------|
| Top | Gragas, Sett, Pantheon |
| Jungle | Viego, Gragas, Taliyah |
| Mid | Karma, Pantheon, Tristana |
| ADC | Seraphine, Tristana, Swain |
| Support | Sett, Gragas, Pantheon |

**Le duo flex** :
- Avoir 2 flex picks dans votre pool est idéal
- Permet toujours une option de brouillage en draft

## Récapitulatif

- Les flex picks sont des champions viables sur plusieurs rôles
- Gragas, Sett, Pantheon, Seraphine sont des flex classiques
- Pick early les flex pour masquer votre stratégie
- Attendez les picks adverses avant d'assigner les lanes
- Maîtrisez chaque rôle du flex avant de l'utiliser en ranked`,

  // Practice Instructions
  `## Objectif

Ajouter au moins un flex pick fonctionnel à votre pool de champions.

## Étapes

1. Choisissez un flex pick qui correspond à vos rôles préférés (ex: Gragas si Top/Jungle)
2. Jouez 15 parties sur le rôle principal du champion
3. Jouez 10 parties sur le rôle secondaire
4. Analysez les différences de build et de style de jeu entre les rôles
5. En draft, pickez ce champion tôt et décidez la lane après avoir vu les picks adverses

## Critère de réussite

Vous maîtrisez un flex pick sur au moins 2 rôles différents avec un winrate combiné supérieur à 50% et au moins 25 parties totales.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un flex pick ?",
      "Un champion très fort dans le méta",
      "Un champion capable de jouer efficacement sur plusieurs rôles",
      "Un champion avec beaucoup de skins",
      "Un champion rarement joué",
      'b',
      "Un flex pick peut être joué sur différents rôles, créant de l'incertitude pour l'adversaire."
    ),
    createQuestion(
      "Quels rôles Gragas peut-il jouer en flex ?",
      "ADC uniquement",
      "Top, Jungle et Support",
      "Mid uniquement",
      "Jungle seulement",
      'b',
      "Gragas est un flex pick classique viable en Top, Jungle et Support."
    ),
    createQuestion(
      "Pourquoi les flex picks sont-ils précieux en draft ?",
      "Ils font plus de dégâts",
      "Ils cachent votre stratégie et empêchent les counter-picks ciblés",
      "Ils sont plus faciles à jouer",
      "Ils ont de meilleurs skins",
      'b',
      "Les flex picks créent de l'incertitude, forçant l'adversaire à draft à l'aveugle."
    ),
    createQuestion(
      "Quand devriez-vous picker vos flex picks ?",
      "En dernier pick uniquement",
      "Tôt dans la draft pour maximiser l'ambiguïté",
      "Jamais en ranked",
      "Après avoir révélé toutes vos lanes",
      'b',
      "Picker les flex tôt garde l'ambiguïté sur vos assignations de lane."
    ),
    createQuestion(
      "Combien de rôles Sett peut-il jouer efficacement ?",
      "1 (Top seulement)",
      "4 (Top, Jungle, Mid, Support)",
      "2 (Top et ADC)",
      "Tous les 5 rôles",
      'b',
      "Sett est un des flex picks les plus polyvalents, viable sur 4 rôles différents."
    ),
    createQuestion(
      "Quel est l'avantage psychologique des flex picks ?",
      "Ils intimident visuellement",
      "L'adversaire joue dans l'incertitude et ne peut pas se préparer",
      "Ils ont des animations plus cool",
      "Ils font rage quit les ennemis",
      'b',
      "L'incertitude empêche la préparation ciblée et crée un avantage mental."
    ),
    createQuestion(
      "Combien de games devriez-vous avoir sur chaque rôle d'un flex ?",
      "5 games suffisent",
      "50+ games pour vraiment maîtriser",
      "1 game pour tester",
      "100 games minimum obligatoires",
      'b',
      "50+ games permettent de vraiment comprendre les nuances du champion dans chaque rôle."
    ),
    createQuestion(
      "Quel champion est flex entre Mid, Support et ADC ?",
      "Zed",
      "Seraphine",
      "Vayne",
      "Thresh",
      'b',
      "Seraphine peut être jouée efficacement Mid, Support ou même ADC selon les builds."
    ),
    createQuestion(
      "Que faire après avoir pick un flex early ?",
      "Révéler immédiatement où il va",
      "Attendre les picks adverses pour décider de l'assignation",
      "Toujours le mettre sur le même rôle",
      "Le donner au joueur le moins bon",
      'b',
      "L'intérêt du flex est de pouvoir l'assigner après avoir vu la draft adverse."
    ),
    createQuestion(
      "Combien de flex picks devrait-on avoir dans son pool idéalement ?",
      "Aucun",
      "Au moins 2 pour toujours avoir une option",
      "10 minimum",
      "Tous les champions du jeu",
      'b',
      "2 flex picks permettent d'avoir toujours une option de brouillage disponible en draft."
    ),
  ]
);
