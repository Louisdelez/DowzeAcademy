import { createModule, createQuestion } from '../utils';

export const module07ThirdPartyTools = createModule(
  "Utilisation d'outils tierce partie",
  'third-party-tools',
  'Mobalytics, Blitz, et autres applications pour analyser et améliorer son jeu',
  7,
  // Theory Content (5+ slides)
  `## Les applications de statistiques

Des applications comme **Mobalytics**, **Blitz.gg**, **Porofessor** et **U.GG** fournissent des statistiques détaillées sur votre gameplay. Elles analysent vos parties automatiquement et identifient vos forces et faiblesses avec des scores et graphiques.

## Les overlays en temps réel

Certains outils proposent des **overlays en jeu** qui affichent des informations pendant la partie : les win rates des champions ennemis, les builds optimaux, les timers d'objectifs, et les conseils de matchup. Blitz et Porofessor sont particulièrement reconnus pour ces fonctionnalités.

## Les trackers de progression

Ces outils suivent votre **progression sur le temps** : évolution de votre CS/min, de votre warding, de votre win rate par champion. Les graphiques permettent de visualiser si vos efforts portent leurs fruits et d'identifier les plateaux de progression.

## L'analyse automatisée

Des outils comme **Mobalytics GPI** (Gamer Performance Index) évaluent différents aspects de votre jeu sur une échelle et suggèrent des priorités d'amélioration. C'est un bon point de départ pour savoir sur quoi travailler, même sans coach.

## Les limites des outils automatiques

Ces outils ont des **limites** : ils ne voient pas les décisions contextuelles, ils peuvent suggérer des builds génériques non adaptés à votre partie, et ils ne remplacent pas l'analyse humaine. Utilisez-les comme **complément**, pas comme unique source de vérité.

## Récapitulatif

- **Mobalytics, Blitz, Porofessor, U.GG** : statistiques et analyses
- **Overlays en jeu** : informations en temps réel (matchups, builds)
- **Trackers de progression** : visualiser son évolution sur le temps
- **Analyse automatisée** (GPI) : identifier les priorités d'amélioration
- Ces outils sont un **complément**, pas un remplacement de l'analyse humaine`,

  // Practice Instructions
  `## Objectif

Installer et configurer un outil d'analyse tierce partie pour suivre votre progression.

## Étapes

1. Téléchargez et installez Blitz.gg ou Mobalytics Desktop
2. Configurez votre compte et liez-le à votre profil LoL
3. Jouez 3 parties avec l'overlay activé
4. Consultez votre dashboard de statistiques et identifiez vos 3 métriques les plus faibles
5. Notez les suggestions d'amélioration proposées par l'outil

## Critère de réussite

Vous avez un outil installé, 3 parties analysées, et une liste de 3 axes d'amélioration identifiés par l'outil.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel outil est mentionné pour les statistiques détaillées ?",
      "Discord",
      "Mobalytics",
      "Spotify",
      "Excel",
      'b',
      "Mobalytics analyse automatiquement les parties et fournit des statistiques détaillées."
    ),
    createQuestion(
      "Que propose un overlay en jeu ?",
      "De la musique pendant la partie",
      "Des informations en temps réel comme les matchups et builds",
      "Des publicités",
      "Un chat vocal",
      'b',
      "Les overlays affichent des données utiles directement pendant la partie."
    ),
    createQuestion(
      "Qu'est-ce que le GPI de Mobalytics ?",
      "Un classement mondial",
      "Un index évaluant différents aspects du gameplay",
      "Un mode de jeu spécial",
      "Un type de skin",
      'b',
      "Le Gamer Performance Index évalue plusieurs dimensions du jeu et suggère des priorités."
    ),
    createQuestion(
      "Que permettent les trackers de progression ?",
      "De tricher en ranked",
      "De visualiser son évolution sur le temps",
      "De changer de région",
      "D'avoir des skins gratuits",
      'b',
      "Les graphiques de progression montrent si les efforts portent leurs fruits."
    ),
    createQuestion(
      "Quelle est une limite des outils automatiques ?",
      "Ils coûtent trop cher",
      "Ils ne voient pas les décisions contextuelles",
      "Ils sont illégaux",
      "Ils font bugger le jeu",
      'b',
      "L'analyse automatique ne peut pas comprendre le contexte spécifique de chaque décision."
    ),
    createQuestion(
      "Comment faut-il utiliser ces outils ?",
      "Comme unique source de vérité",
      "Comme complément à l'analyse humaine",
      "Jamais, ils sont inutiles",
      "Uniquement en ranked",
      'b',
      "Ces outils complètent mais ne remplacent pas l'analyse et le coaching humains."
    ),
    createQuestion(
      "Quel outil est reconnu pour ses overlays en jeu ?",
      "Netflix",
      "Blitz et Porofessor",
      "Google",
      "Steam",
      'b',
      "Blitz et Porofessor sont particulièrement connus pour leurs overlays informatifs."
    ),
    createQuestion(
      "Que peuvent suggérer les outils concernant les builds ?",
      "Des builds personnalisés pour chaque situation",
      "Des builds optimaux génériques",
      "Aucun build, ce n'est pas leur fonction",
      "Des builds troll",
      'b',
      "Les outils suggèrent des builds optimaux basés sur les statistiques, mais parfois génériques."
    ),
    createQuestion(
      "Qu'est-ce qu'U.GG ?",
      "Un réseau social",
      "Un outil de statistiques et données LoL",
      "Une équipe esport",
      "Un champion du jeu",
      'b',
      "U.GG est une plateforme populaire pour consulter les statistiques de champions et builds."
    ),
    createQuestion(
      "Pourquoi visualiser les graphiques de progression ?",
      "Pour impressionner ses amis",
      "Pour identifier les plateaux et valider les efforts",
      "C'est obligatoire pour jouer",
      "Pour recevoir des récompenses",
      'b',
      "Les graphiques révèlent si votre entraînement est efficace ou si vous stagnez."
    ),
  ]
);
