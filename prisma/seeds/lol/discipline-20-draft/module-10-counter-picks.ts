import { createModule, createQuestion } from '../utils';

export const module10CounterPicks = createModule(
  'Counter-picks en lane',
  'counter-picks',
  'Maîtriser l\'art de choisir un champion spécifiquement pour en contrer un autre',
  10,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un counter-pick ?

Un **counter-pick** est le choix d'un champion spécifiquement pour exploiter les faiblesses d'un champion adverse. C'est l'art de sélectionner un champion qui a un avantage naturel en lane contre le pick ennemi.

**Exemples classiques** :
- **Renekton** contre les tanks faibles en early (Ornn, Malphite)
- **Kassadin** contre les mages AP mid (Syndra, Orianna)
- **Vayne** contre les tanks (percent health damage)
- **Cassiopeia** contre les assassins dashers (Grounded de son W)

## Types de counters

Il existe plusieurs façons de counter un champion :

**Counter de lane** :
- Avantage dans les trades
- Meilleur all-in
- Capacité à deny le farm
- Exemple : Renekton vs Riven (burst les trades courts)

**Counter de kit** :
- Mécanique qui annule l'adversaire
- Exemple : Malzahar R supprime les assassins mobiles
- Exemple : Poppy W bloque les dashes

**Counter de scaling** :
- Outscale l'adversaire si la lane est égale
- Exemple : Kassadin vs mages (scale mieux)

**Counter de composition** :
- Fort contre la win condition adverse
- Exemple : Janna contre les comps engage

## Counter-picks par lane

**Top Lane** :
- Renekton counter les tanks (burst + sustain)
- Vayne counter les melee (kiting + %hp)
- Malphite counter les AD full auto (armor stacking)
- Fiora counter les tanks (Vitals % max HP)

**Mid Lane** :
- Kassadin counter les mages AP
- Galio counter les assassins AP
- Malzahar counter les assassins mobiles (point-click R)
- Fizz counter les mages immobiles

**Bot Lane** :
- Draven counter les ADC scaling faibles
- Caitlyn counter les lanes short range
- Samira counter les supports poke

## L'importance de maîtriser ses counters

Un counter-pick n'est efficace que si vous **maîtrisez le champion** :

**Le piège du counter** :
- Choisir un counter sans le connaître = désavantage
- Un one-trick battra souvent un counter mal joué
- La connaissance du matchup > le counter théorique

**La règle d'or** :
> "Ne counter-pick qu'avec des champions que vous pouvez jouer à au moins 70% de votre niveau habituel"

**Construire un pool de counter** :
1. Identifiez vos matchups difficiles
2. Apprenez 1-2 counters spécifiques
3. Pratiquez ces champions en normal
4. Utilisez-les uniquement quand vous êtes confiant

## Quand utiliser le counter-pick ?

**Situations idéales pour counter** :
- Last pick (pas de réponse possible)
- Adversaire one-trick connu
- Matchup très défavorable autrement
- Vous maîtrisez bien le counter

**Situations à éviter** :
- Pick trop tôt (vous serez counter)
- Champion inconnu (vous serez surclassé)
- Team comp incompatible
- Counter qui ne scale pas avec votre plan de jeu

## Récapitulatif

- Un counter-pick exploite les faiblesses spécifiques d'un champion
- Il existe des counters de lane, de kit, de scaling, et de composition
- Renekton, Kassadin, Malzahar sont des counter-picks classiques
- Ne counter-pick qu'avec des champions que vous maîtrisez
- Le last pick est le moment idéal pour counter`,

  // Practice Instructions
  `## Objectif

Développer un pool de 3 counter-picks pour vos matchups les plus difficiles.

## Étapes

1. Identifiez 3 champions qui vous posent régulièrement problème en lane
2. Recherchez les counters reconnus pour chacun (sites spécialisés, streamers)
3. Choisissez 1 counter par champion difficile que vous pouvez apprendre
4. Jouez 10 parties normales avec chaque counter
5. Testez vos counters en ranked quand vous atteignez 70% de winrate en normal

## Critère de réussite

Vous avez au moins 3 champions de counter-pick dans votre pool, chacun avec plus de 10 parties jouées et un winrate supérieur à 55% dans le matchup ciblé.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un counter-pick ?",
      "Choisir un champion au hasard",
      "Choisir un champion spécifiquement pour exploiter les faiblesses d'un autre",
      "Toujours prendre le même champion",
      "Copier le pick adverse",
      'b',
      "Un counter-pick vise à exploiter les faiblesses naturelles du champion adverse."
    ),
    createQuestion(
      "Pourquoi Renekton est-il un bon counter contre les tanks top ?",
      "Il est tanky aussi",
      "Il a du burst et du sustain pour dominer l'early game",
      "Il scale mieux qu'eux",
      "Il a plus de CC",
      'b',
      "Renekton domine l'early avec son burst et son sustain, punissant les tanks avant qu'ils scale."
    ),
    createQuestion(
      "Pourquoi Kassadin counter les mages AP mid ?",
      "Il fait des dégâts AD",
      "Il a un bouclier magic et scale extrêmement bien contre l'AP",
      "Il est plus tanky",
      "Il a plus de waveclear",
      'b',
      "Kassadin possède un bouclier magic, réduit les dégâts AP, et devient un monstre en late game."
    ),
    createQuestion(
      "Quel est le 'piège du counter' ?",
      "Les counters sont toujours mauvais",
      "Choisir un counter qu'on ne maîtrise pas et perdre quand même",
      "Counter trop souvent",
      "Ne jamais counter",
      'b',
      "Un counter mal joué perdra contre un joueur expérimenté sur son champion."
    ),
    createQuestion(
      "À quel pourcentage de maîtrise devriez-vous jouer un counter ?",
      "10% de votre niveau",
      "Au moins 70% de votre niveau habituel",
      "100% uniquement",
      "Peu importe le niveau",
      'b',
      "Un counter doit être joué à au moins 70% de votre niveau pour être efficace."
    ),
    createQuestion(
      "Quel champion counter bien les assassins mobiles mid ?",
      "Zed",
      "Malzahar avec son ultime point-and-click",
      "Yasuo",
      "Katarina",
      'b',
      "Le suppress de Malzahar neutralise complètement la mobilité des assassins."
    ),
    createQuestion(
      "Quand est-il idéal de counter-pick ?",
      "En premier pick",
      "En dernier pick quand l'adversaire ne peut pas répondre",
      "Au milieu de la draft",
      "Toujours",
      'b',
      "Le last pick permet de counter sans que l'adversaire puisse s'adapter."
    ),
    createQuestion(
      "Qu'est-ce qu'un counter de kit ?",
      "Un champion plus fort statistiquement",
      "Un champion dont les mécaniques annulent celles de l'adversaire",
      "Un champion du même rôle",
      "Un champion avec plus de dégâts",
      'b',
      "Un counter de kit possède des mécaniques qui contrecarrent directement l'adversaire (ex: Poppy W vs dashes)."
    ),
    createQuestion(
      "Pourquoi Vayne counter les tanks ?",
      "Elle est plus tankye qu'eux",
      "Ses dégâts en pourcentage de vie max ignorent leur armor",
      "Elle a plus de CC",
      "Elle peut les poke de loin",
      'b',
      "Le Silver Bolts de Vayne inflige des dégâts vrais basés sur la vie max, très efficace contre les tanks."
    ),
    createQuestion(
      "Que faire si votre counter est pick early ?",
      "L'abandonner complètement",
      "Risquer d'être vous-même counter par l'adversaire",
      "Toujours le prendre quand même",
      "Demander un swap de rôle",
      'b',
      "Picker un counter trop tôt expose votre champion à être lui-même counter."
    ),
  ]
);
