import { createModule, createQuestion } from '../utils';

export const module13BanStrategy = createModule(
  'Stratégie de bans',
  'ban-strategy',
  'Maîtriser l\'art de retirer les champions OP ou gênants pour votre stratégie',
  13,
  // Theory Content (5+ slides)
  `## L'art du ban stratégique

Les **bans** ne sont pas juste pour retirer les champions "OP" - ce sont des outils stratégiques pour façonner la draft en votre faveur. Chaque ban a un coût d'opportunité : en bannant un champion, vous n'en bannez pas un autre.

**Types de bans** :
1. Ban OP (méta)
2. Ban ciblé (joueur)
3. Ban de protection
4. Ban de stratégie

## Bans OP (méta)

**Objectif** : Retirer les champions trop forts du patch actuel

**Caractéristiques** :
- Champions avec winrate/pickrate élevés
- Récemment buffés ou nouvellement sortis
- "Must ban" reconnus par la communauté

**Avantages** :
- Personne ne peut les jouer (vous non plus, mais l'ennemi non plus)
- Élimine les variables imprévisibles
- Consensus de l'équipe facile

**Exemple** :
> Patch 14.X : Skarner rework a 58% winrate → Ban systématique

**Inconvénient** :
- Vous ne les bannissez peut-être pas pour la bonne raison
- Votre équipe pourrait bien les jouer

## Bans ciblés (joueurs)

**Objectif** : Affaiblir un joueur spécifique

**Quand les utiliser** :
- Adversaire connu comme one-trick
- Joueur professionnel avec champion signature
- Smurf qui abuse d'un seul champion

**En solo queue** :
- Vérifiez les profils adverses (op.gg, etc.)
- Ban les mains à 60%+ winrate
- Ciblez les joueurs en série de victoires

**En équipe organisée** :
- Recherche sur l'adversaire avant le match
- Ban les champions signature (ex: Faker's Azir)
- Force l'ennemi hors de sa zone de confort

## Bans de protection et de stratégie

**Bans de protection** :
- Retirent les counters de vos picks prévus
- Exemple : Vous voulez pick Kog'Maw → Ban les assassins (Zed, Talon)

**Bans de stratégie** :
- Éliminent les champions qui contrent votre win condition
- Exemple : Votre comp est wombo AOE → Ban Yuumi (healing réduit l'impact)
- Exemple : Votre comp est siege poke → Ban les engage durs (Malphite)

**La logique** :
> "Ne ban pas ce qui est fort en général, ban ce qui est fort CONTRE VOUS"

## Quand utiliser chaque type de ban

**Phase 1 (premiers bans)** :
| Situation | Type de ban recommandé |
|-----------|------------------------|
| Patch instable | OP bans |
| Adversaire connu | Bans ciblés |
| Stratégie claire | Bans de protection |

**Phase 2 (seconds bans)** :
- Réponse aux premiers picks adverses
- Protection de vos picks révélés
- Retrait des derniers counters possibles

**En solo queue vs en équipe** :
- Solo : Plus de bans OP et confort
- Équipe : Plus de bans stratégiques et ciblés

## Communication des bans en équipe

**Le processus idéal** :

1. **Avant la draft** :
   - "Je veux jouer X, pouvez-vous ban Y ?"
   - "Leur mid est one-trick Z, on le ban ?"

2. **Phase 1** :
   - Discutez des bans OP du patch
   - Identifiez les bans ciblés prioritaires

3. **Phase 2** :
   - "Ils ont pick A, on devrait ban B"
   - "Je pick C, bandez ses counters D et E"

**Erreurs à éviter** :
- Ban "rage" (champion qui vous a tué la partie d'avant)
- Ban sans réflexion stratégique
- Oublier de communiquer son plan de pick

## Récapitulatif

- Les bans sont des outils stratégiques, pas juste des suppressions de champions OP
- Bans ciblés : retirez les one-tricks adverses
- Bans de protection : éliminez les counters de vos picks
- Bans de stratégie : contrez la win condition adverse (ex: ban Yuumi vs wombo)
- Communiquez vos intentions de pick pour coordonner les bans`,

  // Practice Instructions
  `## Objectif

Développer une approche réfléchie des bans au lieu de ban automatiquement les mêmes champions.

## Étapes

1. Avant chaque partie ranked, vérifiez les profils des joueurs adverses visibles
2. Identifiez les one-tricks ou champions à très haut winrate
3. Décidez si un ban ciblé est plus utile qu'un ban OP
4. Communiquez avec votre équipe sur les bans stratégiques
5. Notez après la partie si vos bans ont eu un impact

## Critère de réussite

Sur 10 parties, vous avez fait au moins 5 bans "réfléchis" (ciblés ou de protection) au lieu de bans automatiques, et vous pouvez justifier chaque ban avec une raison stratégique.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un ban OP (méta) ?",
      "Ban sur un champion que vous n'aimez pas",
      "Ban sur un champion trop fort dans le patch actuel",
      "Ban au hasard",
      "Ban sur le dernier champion sorti",
      'b',
      "Un ban OP retire un champion reconnu comme trop puissant dans le méta actuel."
    ),
    createQuestion(
      "Qu'est-ce qu'un ban ciblé ?",
      "Ban pour retirer le champion préféré d'un adversaire spécifique",
      "Ban au hasard",
      "Ban sur un champion faible",
      "Ban sur votre propre main",
      'a',
      "Un ban ciblé vise à mettre un adversaire hors de sa zone de confort."
    ),
    createQuestion(
      "Pourquoi bannir Yuumi contre une composition wombo combo ?",
      "Yuumi fait trop de dégâts",
      "Le heal de Yuumi réduit l'impact des combos AOE",
      "Yuumi est toujours OP",
      "Yuumi counter le split-push",
      'b',
      "Le sustain de Yuumi permet à l'équipe adverse de survivre aux combos AOE."
    ),
    createQuestion(
      "Qu'est-ce qu'un ban de protection ?",
      "Ban pour protéger votre KDA",
      "Ban retirant les counters de votre pick prévu",
      "Ban au hasard",
      "Ban sur un champion que vous ne savez pas jouer",
      'b',
      "Un ban de protection empêche l'adversaire de counter votre stratégie."
    ),
    createQuestion(
      "Quelle erreur de ban est courante ?",
      "Bannir des champions OP",
      "Le ban 'rage' sur un champion qui vous a tué la partie précédente",
      "Communiquer ses bans",
      "Vérifier les profils adverses",
      'b',
      "Le ban rage est émotionnel et non stratégique, gaspillant un ban précieux."
    ),
    createQuestion(
      "Quand les bans ciblés sont-ils les plus efficaces ?",
      "Toujours",
      "Contre des one-tricks ou joueurs avec champion signature",
      "Jamais",
      "Uniquement en bronze",
      'b',
      "Les bans ciblés sont dévastateurs contre les joueurs dépendants d'un seul champion."
    ),
    createQuestion(
      "Que vérifier avant de faire un ban ciblé en solo queue ?",
      "Le skin du champion",
      "Le profil de l'adversaire (winrate, nombre de games)",
      "La météo",
      "Rien",
      'b',
      "Les sites comme op.gg révèlent les mains et les points faibles des adversaires."
    ),
    createQuestion(
      "Quand utilise-t-on principalement les bans de phase 2 ?",
      "Pour les bans OP uniquement",
      "Pour répondre aux premiers picks et protéger ses propres picks",
      "De manière identique à la phase 1",
      "On ne les utilise pas",
      'b',
      "La phase 2 permet d'adapter les bans après avoir vu les premières sélections."
    ),
    createQuestion(
      "Quelle stratégie de ban privilégier en équipe organisée ?",
      "Uniquement les bans OP",
      "Plus de bans stratégiques et ciblés basés sur la recherche",
      "Bans au hasard",
      "Aucun ban",
      'b',
      "En équipe, la préparation permet des bans plus intelligents et ciblés."
    ),
    createQuestion(
      "Comment communiquer efficacement sur les bans ?",
      "Ne rien dire et ban ce qu'on veut",
      "Annoncer ses picks prévus pour coordonner les bans de protection",
      "Laisser le premier joueur tout décider",
      "Copier les bans des pros",
      'b',
      "Communiquer ses intentions permet à l'équipe de coordonner les bans stratégiquement."
    ),
  ]
);
