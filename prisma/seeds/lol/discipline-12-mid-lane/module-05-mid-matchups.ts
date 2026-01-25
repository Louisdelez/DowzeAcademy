import { createModule, createQuestion } from '../utils';

export const module05MidMatchups = createModule(
  "Matchups mid",
  'mid-matchups',
  'Connaître les counters et les interactions',
  5,
  // Theory Content (5+ slides)
  `## Comprendre les matchups

Un **matchup** désigne l'affrontement entre deux champions. En mid lane, connaître les matchups est crucial car certains champions en **contrent** naturellement d'autres.

Il existe trois types de matchups :
- **Favorable** : vous avez l'avantage naturel
- **Défavorable** : l'adversaire a l'avantage (counter)
- **Skill matchup** : le résultat dépend du skill des joueurs

## Les types de counters

Les counters fonctionnent selon différentes logiques :

**Counter de portée** :
- Les mages longue portée (Xerath, Lux) battent souvent les assassins early

**Counter de mobilité** :
- Les champions mobiles (Fizz, Yasuo) contrent les skillshots

**Counter de sustain** :
- Les champions avec heal (Vladimir, Sylas) survivent aux burst mages

**Counter de CC** :
- Le hard CC (Lissandra, Annie) countre les champions sans escape

## Exemples de matchups courants

Voici quelques interactions classiques en mid :

| Champion | Fort contre | Faible contre |
|----------|-------------|---------------|
| Zed | Mages immobiles | Lissandra, Malzahar |
| Ahri | Assassins (grâce au charme) | Yasuo, Kassadin |
| Yasuo | Champions à skillshots | Point-and-click CC |
| Syndra | Champions melee | Assassins mobiles |
| Katarina | Mages lents | Champions avec CC |

## S'adapter au matchup

Face à un **matchup difficile** :

1. **Jouez safe** : ne prenez pas de trades perdants
2. **Farmez sous tour** : concentrez-vous sur les CS
3. **Demandez des ganks** : votre jungler peut équilibrer le matchup
4. **Roamez** : si vous ne pouvez pas gagner la lane, gagnez la carte
5. **Adaptez votre build** : items défensifs si nécessaire

Face à un **matchup favorable** :
- **Punissez** chaque erreur de l'adversaire
- **Zoner** l'ennemi de la vague
- **Snowballez** votre avantage

## Récapitulatif

- Un **matchup** = affrontement entre deux champions spécifiques
- Les **counters** exploitent les faiblesses (portée, mobilité, sustain)
- Face à un matchup **difficile** : jouez safe, farmez, roamez
- Face à un matchup **favorable** : punissez et snowballez
- Consultez des guides pour apprendre les matchups de vos champions
- Le **skill** peut compenser un matchup défavorable`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier et jouer un matchup favorable et défavorable.

## Étapes

1. Choisissez votre champion mid principal (celui que vous jouez le plus)
2. Recherchez sur internet ses 3 meilleurs matchups et 3 pires matchups
3. En partie contre des bots ou normale, pratiquez ces scénarios :

**Scenario A - Matchup favorable** :
- Identifiez pourquoi vous êtes avantagé
- Punissez l'adversaire quand il fait une erreur
- Zoner agressivement

**Scenario B - Matchup défavorable** :
- Identifiez la menace principale
- Farmez en sécurité
- Cherchez des roams plutôt que des trades

4. Notez 3 apprentissages pour chaque matchup

## Critère de réussite

Vous pouvez nommer 3 matchups favorables et 3 matchups défavorables pour votre champion principal et expliquer comment les jouer.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un 'matchup' en League of Legends ?",
      "Un bug du jeu",
      "L'affrontement entre deux champions spécifiques",
      "Un type de queue",
      "Une compétition professionnelle",
      'b',
      "Un matchup désigne comment deux champions interagissent l'un contre l'autre en lane."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'counter' ?",
      "Une statistique du jeu",
      "Un champion qui a un avantage naturel contre un autre",
      "Un sort d'invocateur",
      "Un type de ward",
      'b',
      "Un counter est un champion qui possède des avantages naturels contre un champion spécifique."
    ),
    createQuestion(
      "Pourquoi Fizz est-il souvent considéré comme un counter des mages à skillshots ?",
      "Parce qu'il fait plus de dégâts",
      "Parce que son E lui permet d'esquiver les skillshots",
      "Parce qu'il a plus de vie",
      "Parce qu'il peut heal",
      'b',
      "Le Playful/Trickster (E) de Fizz le rend intouchable, esquivant facilement les skillshots."
    ),
    createQuestion(
      "Face à un matchup très défavorable, quelle est la meilleure stratégie ?",
      "Combattre sans cesse pour tenter de gagner",
      "Jouer safe, farmer et chercher des roams",
      "Abandonner la partie",
      "Changer de champion en pleine partie",
      'b',
      "Contre un counter, jouez défensivement et cherchez à avoir de l'impact ailleurs sur la carte."
    ),
    createQuestion(
      "Quel type de champion counter généralement les assassins comme Zed ?",
      "Les mages immobiles",
      "Les champions avec point-and-click CC (Lissandra, Malzahar)",
      "Les ADC",
      "Les supports enchanteurs",
      'b',
      "Le CC ciblé (point-and-click) empêche les assassins de réaliser leurs combos."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'skill matchup' ?",
      "Un matchup où un champion est bien meilleur",
      "Un matchup équilibré où le résultat dépend du skill des joueurs",
      "Un matchup impossible à jouer",
      "Un matchup uniquement en ranked",
      'b',
      "Dans un skill matchup, aucun champion n'a d'avantage clair - c'est le meilleur joueur qui gagne."
    ),
    createQuestion(
      "Si vous êtes en matchup favorable, que devez-vous faire ?",
      "Jouer passivement",
      "Punir les erreurs adverses et zoner l'ennemi",
      "Laisser l'adversaire farmer gratuitement",
      "Roamer constamment sans laner",
      'b',
      "Un matchup favorable doit être exploité en punissant l'adversaire et en prenant le contrôle."
    ),
    createQuestion(
      "Pourquoi les champions avec sustain (Vladimir, Sylas) sont forts contre les burst mages ?",
      "Ils font plus de dégâts",
      "Ils peuvent récupérer les dégâts du burst avec leur heal",
      "Ils ont plus de portée",
      "Ils sont plus mobiles",
      'b',
      "Le sustain permet de récupérer les HP perdus, annulant l'avantage des burst mages."
    ),
    createQuestion(
      "Comment peut-on compenser un matchup défavorable ?",
      "On ne peut pas, c'est perdu d'avance",
      "Grâce au skill, à l'aide du jungler, et aux roams",
      "En changeant de lane avec le top laner",
      "En farmant uniquement la jungle",
      'b',
      "Le skill, les ganks et les roams permettent de neutraliser un counter en lane."
    ),
    createQuestion(
      "Où peut-on apprendre les matchups de son champion ?",
      "Uniquement en jouant des milliers de parties",
      "En consultant des guides, streamers, et sites comme u.gg ou op.gg",
      "En lisant uniquement le patch notes",
      "On ne peut pas les apprendre",
      'b',
      "Les ressources en ligne fournissent des données et conseils sur les matchups de chaque champion."
    ),
  ]
);
