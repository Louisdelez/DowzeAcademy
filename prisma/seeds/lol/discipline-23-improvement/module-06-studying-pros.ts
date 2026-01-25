import { createModule, createQuestion } from '../utils';

export const module06StudyingPros = createModule(
  'Étudier les pros',
  'studying-pros',
  'Apprendre des VODs et streams de joueurs professionnels',
  6,
  // Theory Content (5+ slides)
  `## Pourquoi étudier les joueurs professionnels

Les joueurs professionnels représentent le plus haut niveau de jeu possible. Ils ont passé des milliers d'heures à optimiser chaque aspect de leur gameplay. En les étudiant, vous pouvez :
- Découvrir des techniques que vous ne connaissiez pas
- Comprendre le timing optimal des décisions
- Voir comment gérer des situations difficiles
- Apprendre des builds et des stratégies à jour

Cependant, attention : tout ce que font les pros n'est pas applicable à votre elo. Certaines stratégies nécessitent une coordination d'équipe impossible en solo queue.

## Où trouver du contenu pro

**Streams Twitch** :
- La plupart des pros streament sur Twitch
- Avantage : contenu en direct, parfois commenté
- Inconvénient : pas toujours éducatif, beaucoup de divertissement

**VODs sur YouTube** :
- Chaînes comme ProGuides, Skill Capped, LoL Dobby
- Replays de parties pro avec analyse
- Compilations éducatives

**Compétitions officielles** :
- LEC, LCS, LCK, LPL pour les ligues majeures
- Worlds, MSI pour les tournois internationaux
- Avantage : coordination d'équipe parfaite, meta au plus haut niveau

**Sites de replays** :
- OP.GG propose les replays des parties de haut elo
- Vous pouvez observer directement les parties ranked des pros

## Comment regarder efficacement

Regarder passivement ne suffit pas. Voici comment tirer le maximum :

1. **Choisissez un pro qui joue votre rôle/champion** : Plus pertinent pour votre progression
2. **Regardez avec un objectif précis** : "Comment gère-t-il la lane phase ?" "Où place-t-il ses wards ?"
3. **Mettez en pause et analysez** : Arrêtez-vous sur les décisions importantes
4. **Prenez des notes** : Écrivez ce que vous apprenez
5. **Essayez d'appliquer** : Testez en partie ce que vous avez observé

Un visionnage actif de 20 minutes vaut mieux qu'une heure de visionnage passif.

## Ce qu'il faut observer

**En phase de lane** :
- Gestion des vagues (slow push, freeze, fast push)
- Trades et échanges
- Back timings
- Placement par rapport aux sbires

**En mid/late game** :
- Positionnement en teamfight
- Rotations sur la carte
- Décisions d'objectifs
- Splitpush et pression de side lane

**Tout au long de la partie** :
- Placement des wards
- Lecture de la minimap
- Communication avec l'équipe (via les pings en solo queue)
- Gestion des cooldowns importants

## Adapter le contenu pro à votre niveau

Tout n'est pas transposable. Voici comment adapter :

**Ce qui s'applique à tous les niveaux** :
- Les fondamentaux (CS, positionnement basique)
- La gestion des vagues
- Les builds et runes
- Les combos de champions

**Ce qui demande adaptation** :
- Les stratégies d'équipe (nécessitent coordination)
- Les plays agressifs (les pros savent que leurs teammates suivront)
- Les invades jungle (risqués en solo queue)

**Ce qui est spécifique au pro play** :
- Les compositions d'équipe très spécifiques
- Les stratégies basées sur la communication vocale
- Les picks très dépendants de la coordination

Demandez-vous toujours : "Puis-je faire ça seul, ou ai-je besoin de mon équipe ?"

## Créer une routine d'étude

Pour progresser régulièrement :

- **Hebdomadaire** : Regardez 1-2 VODs éducatives de votre rôle/champion
- **Après défaite frustrante** : Cherchez comment un pro gère cette situation
- **Nouveau patch** : Consultez les builds et adaptations des pros
- **Avant de ranked** : Un échauffement rapide en regardant du gameplay propre

Combinez l'étude des pros avec votre propre pratique. L'un sans l'autre est moins efficace.`,

  // Practice Instructions
  `## Objectif

Regarder une VOD éducative d'un joueur professionnel jouant votre rôle et en extraire 3 techniques applicables à votre niveau.

## Étapes

1. Identifiez un joueur professionnel connu pour votre rôle
2. Trouvez une VOD ou un stream récent sur Twitch/YouTube
3. Regardez 20-30 minutes de laning phase
4. Mettez en pause à chaque décision intéressante
5. Notez 3 techniques ou décisions que vous n'appliquez pas actuellement
6. Pour chaque technique, écrivez comment vous pourriez l'intégrer à votre jeu
7. Identifiez laquelle est la plus facile à appliquer immédiatement

## Critère de réussite

Vous avez regardé une VOD de pro et pouvez citer 3 techniques spécifiques que vous allez essayer d'intégrer à votre gameplay, avec une explication de chacune.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Où peut-on trouver des streams de joueurs professionnels ?",
      "Uniquement sur les sites officiels de Riot",
      "Principalement sur Twitch",
      "Uniquement sur la TV",
      "Nulle part, les pros ne streament pas",
      'b',
      "La majorité des joueurs professionnels streament sur Twitch."
    ),
    createQuestion(
      "Quelle est la meilleure façon de regarder du contenu pro ?",
      "En arrière-plan pendant qu'on fait autre chose",
      "Avec un objectif précis et en prenant des notes",
      "Uniquement les highlights",
      "Seulement les parties gagnées",
      'b',
      "Un visionnage actif avec un objectif précis et des notes est beaucoup plus efficace."
    ),
    createQuestion(
      "Que sont le LEC, LCS, LCK et LPL ?",
      "Des champions de League of Legends",
      "Des ligues professionnelles régionales",
      "Des modes de jeu",
      "Des outils d'analyse",
      'b',
      "Ce sont les ligues professionnelles d'Europe (LEC), Amérique du Nord (LCS), Corée (LCK) et Chine (LPL)."
    ),
    createQuestion(
      "Pourquoi ne peut-on pas tout copier des pros ?",
      "Ils utilisent des hacks",
      "Certaines stratégies nécessitent une coordination d'équipe impossible en solo queue",
      "Ils jouent sur un autre serveur",
      "Leurs champions sont différents",
      'b',
      "Beaucoup de stratégies pro dépendent d'une coordination d'équipe parfaite difficile à reproduire en solo queue."
    ),
    createQuestion(
      "Qu'est-ce qui s'applique à tous les niveaux de jeu ?",
      "Les compositions d'équipe spécifiques",
      "Les fondamentaux comme le CS et les builds",
      "Les invades jungle coordonnées",
      "Les stratégies vocales",
      'b',
      "Les fondamentaux comme le CS, le positionnement basique et les builds s'appliquent à tous les niveaux."
    ),
    createQuestion(
      "Quelle question devez-vous vous poser avant d'appliquer une stratégie pro ?",
      "Est-ce que c'est cool ?",
      "Puis-je faire ça seul, ou ai-je besoin de mon équipe ?",
      "Est-ce le pro le plus populaire ?",
      "Est-ce la stratégie la plus récente ?",
      'b',
      "Il faut se demander si la stratégie peut fonctionner en solo queue sans coordination d'équipe."
    ),
    createQuestion(
      "Combien de temps de visionnage actif est recommandé minimum ?",
      "5 minutes",
      "20 minutes ciblées",
      "3 heures",
      "La durée complète de la partie",
      'b',
      "20 minutes de visionnage actif et ciblé sont plus efficaces qu'une heure de visionnage passif."
    ),
    createQuestion(
      "Quand est-il particulièrement utile de regarder du contenu pro ?",
      "Uniquement quand on est Challenger",
      "Après une défaite frustrante pour voir comment gérer la situation",
      "Jamais, c'est une perte de temps",
      "Seulement le week-end",
      'b',
      "Après une défaite frustrante, chercher comment un pro gère cette situation peut être très instructif."
    ),
    createQuestion(
      "Où peut-on trouver des replays de parties de haut elo ?",
      "Uniquement en jeu",
      "Sur OP.GG et sites similaires",
      "Nulle part",
      "Uniquement chez Riot Games",
      'b',
      "Des sites comme OP.GG proposent les replays des parties de haut elo."
    ),
    createQuestion(
      "Que doit-on observer en particulier pendant la phase de lane ?",
      "Uniquement les kills",
      "La gestion des vagues, les trades et le back timing",
      "Le chat",
      "Les skins utilisés",
      'b',
      "En phase de lane, observez la gestion des vagues, les trades, et les timings de back."
    ),
  ]
);
