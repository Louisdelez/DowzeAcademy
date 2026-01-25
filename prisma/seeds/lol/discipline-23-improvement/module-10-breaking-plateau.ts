import { createModule, createQuestion } from '../utils';

export const module10BreakingPlateau = createModule(
  'Surmonter un palier (plateau Elo)',
  'breaking-plateau',
  'Identifier ce qui vous bloque et briser les plateaux de progression',
  10,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un plateau Elo ?

Un **plateau Elo** (ou plateau de rank) est une période où vous stagnez à un certain niveau malgré le temps investi. Vous gagnez et perdez des LP de manière égale, oscillant autour du même rank pendant des semaines voire des mois.

C'est une expérience frustrante mais **normale**. Chaque joueur rencontre des plateaux à différents moments de sa progression. Les plateaux communs se situent souvent aux changements de tier (Gold→Plat, Plat→Diamond).

Comprendre pourquoi vous êtes bloqué est la première étape pour en sortir.

## Identifier la cause du plateau

Les plateaux ont toujours une cause. Les principales :

**Causes techniques** :
- Mauvais CS/min qui vous prive de ressources
- Mécaniques insuffisantes pour votre elo
- Builds ou runes non optimaux

**Causes décisionnelles** :
- Mauvais jugement des situations de combat
- Rotations inefficaces
- Mauvaise gestion des objectifs

**Causes mentales** :
- Tilt fréquent qui vous fait enchaîner les défaites
- Manque de concentration en fin de partie
- Autopilot (jouer sans réfléchir)

**Causes de volume** :
- Pas assez de parties pour que le skill se reflète dans le rank
- Sessions trop longues qui dégradent la performance

Utilisez vos outils d'analyse et replays pour diagnostiquer précisément la cause.

## Stratégies pour briser le plateau

**Stratégie 1 : Focus sur une faiblesse spécifique**
- Identifiez votre plus grande faiblesse mesurable
- Travaillez-la intensivement pendant 2 semaines
- Mesurez l'amélioration

**Stratégie 2 : Changer votre routine**
- Si vous jouez toujours tard le soir, essayez le matin
- Si vous faites des sessions de 5h, faites 2h maximum
- Un changement de routine peut relancer la progression

**Stratégie 3 : Prendre du recul**
- Une pause de quelques jours peut être bénéfique
- Regardez du contenu éducatif pendant cette pause
- Revenez avec un regard neuf

**Stratégie 4 : Coaching ou VOD review**
- Un regard extérieur peut identifier des problèmes invisibles pour vous
- Un coach repère souvent des erreurs que vous ne voyez pas

## Les pièges du plateau

**Piège 1 : Blâmer le matchmaking**
"Je suis bloqué à cause des teammates" est rarement vrai. Tout le monde a les mêmes conditions.

**Piège 2 : Changer de champion constamment**
Changer de champion à chaque plateau empêche de développer la maîtrise nécessaire.

**Piège 3 : Forcer le volume**
Jouer plus n'est pas la solution si vous ne corrigez pas vos erreurs. Vous renforcez les mauvaises habitudes.

**Piège 4 : Ignorer le mental**
Le tilt et le manque de concentration sont des causes majeures de stagnation souvent ignorées.

**Piège 5 : Comparer aux autres**
"Mon ami est Diamant, pourquoi pas moi ?" Chaque progression est unique.

## Le concept de "skill check"

Chaque elo représente un **skill check** : un ensemble de compétences requises pour passer au niveau supérieur.

**Fer → Bronze** : Comprendre les bases du jeu
**Bronze → Argent** : CS correct, moins de deaths gratuits
**Argent → Or** : Notions de macro, objectifs
**Or → Platine** : Laning phase solide, conscience de la carte
**Platine → Émeraude** : Gestion des vagues, trading
**Émeraude → Diamant** : Optimisation, punition des erreurs adverses
**Diamant → Master+** : Micro et macro optimisés, adaptation constante

Identifiez quel skill check vous bloque et travaillez spécifiquement dessus.

## Signes que vous allez sortir du plateau

Bonne nouvelle : certains signes indiquent que vous progressez même sans gain de LP :

- **Vous comprenez mieux vos erreurs** : Conscience = première étape
- **Les parties sont plus proches** : Moins de stomps, plus de parties serrées
- **Votre laning phase s'améliore** : Meilleur CS, moins de morts early
- **Vous reconnaissez les patterns** : Vous voyez les ganks venir, vous anticipez

Le rank est un indicateur retardé. L'amélioration du skill précède toujours la montée de LP. Faites confiance au processus.`,

  // Practice Instructions
  `## Objectif

Diagnostiquer la cause de votre plateau actuel (ou potentiel futur) et créer un plan d'action spécifique pour le surmonter.

## Étapes

1. Identifiez votre rank actuel et depuis combien de temps vous y êtes
2. Consultez vos statistiques des 30 derniers jours sur op.gg
3. Comparez vos stats au skill check de votre elo (CS, deaths, vision)
4. Identifiez la statistique où vous êtes le plus en dessous de la moyenne
5. Revoyez 2-3 replays de défaites récentes pour trouver des patterns
6. Catégorisez la cause principale (technique, décisionnelle, mentale, volume)
7. Créez un plan d'action de 2 semaines ciblant cette cause

## Critère de réussite

Vous avez identifié une cause spécifique de stagnation et un plan d'action concret avec des étapes mesurables pour les 2 prochaines semaines.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un plateau Elo ?",
      "Un bug du système de classement",
      "Une période de stagnation où vous ne montez plus malgré le temps investi",
      "Le plus haut rank possible",
      "Un mode de jeu spécial",
      'b',
      "Un plateau Elo est une période de stagnation où vous oscillez au même rank sans progresser."
    ),
    createQuestion(
      "Quelle est la première étape pour sortir d'un plateau ?",
      "Jouer plus de parties",
      "Identifier la cause du plateau",
      "Changer de champion",
      "Blâmer le matchmaking",
      'b',
      "Comprendre pourquoi vous êtes bloqué est essentiel avant de pouvoir y remédier."
    ),
    createQuestion(
      "Quel est un piège commun face à un plateau ?",
      "Prendre du recul",
      "Analyser ses replays",
      "Forcer le volume sans corriger ses erreurs",
      "Consulter un coach",
      'c',
      "Jouer plus sans corriger ses erreurs ne fait que renforcer les mauvaises habitudes."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'skill check' dans le contexte du climb ?",
      "Un test de compétences officiel",
      "L'ensemble de compétences requises pour passer au niveau supérieur",
      "Une vérification de compte",
      "Un tutoriel obligatoire",
      'b',
      "Chaque transition d'elo représente un ensemble de compétences à maîtriser pour progresser."
    ),
    createQuestion(
      "Quelle compétence est particulièrement testée pour passer de Platine à Émeraude ?",
      "Comprendre les bases",
      "Avoir un bon CS",
      "Gestion des vagues et trading",
      "Jouer tous les champions",
      'c',
      "La transition Platine→Émeraude teste particulièrement la gestion des vagues et les trades."
    ),
    createQuestion(
      "Qu'est-ce que l'autopilot dans le contexte de LoL ?",
      "Un mode de jeu automatique",
      "Jouer sans vraiment réfléchir à ses décisions",
      "Laisser l'IA jouer",
      "Un type de champion",
      'b',
      "L'autopilot consiste à jouer de manière automatique sans réfléchir activement à ses décisions."
    ),
    createQuestion(
      "Pourquoi une pause de quelques jours peut-elle aider ?",
      "Parce que le MMR se reset",
      "Elle permet de revenir avec un regard neuf et moins de mauvaises habitudes",
      "Ce n'est pas recommandé",
      "Pour oublier le jeu",
      'b',
      "Une pause permet de prendre du recul et de revenir avec un regard neuf sur son gameplay."
    ),
    createQuestion(
      "Quel est un signe que vous progressez même sans gain de LP ?",
      "Vous blâmez moins les autres",
      "Les parties sont plus serrées et vous comprenez mieux vos erreurs",
      "Vous jouez plus de parties",
      "Vous avez plus de skins",
      'b',
      "Des parties plus serrées et une meilleure compréhension de vos erreurs sont des signes de progression."
    ),
    createQuestion(
      "Pourquoi comparer sa progression à celle des autres est-il un piège ?",
      "Ce n'est pas un piège",
      "Chaque progression est unique et dépend de nombreux facteurs personnels",
      "Parce que les autres mentent sur leur rank",
      "Parce que le système est différent pour chacun",
      'b',
      "Chaque joueur progresse différemment selon son expérience, son temps disponible et ses points de départ."
    ),
    createQuestion(
      "Quelle approche est recommandée face à un plateau ?",
      "Jouer 10 heures par jour jusqu'à sortir",
      "Se concentrer sur une faiblesse spécifique pendant 2 semaines",
      "Acheter un boost",
      "Attendre que ça passe",
      'b',
      "Cibler une faiblesse spécifique et y travailler intensivement est plus efficace que le grind aveugle."
    ),
  ]
);
