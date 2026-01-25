import { createModule, createQuestion } from '../utils';

export const module07ConflictManagement = createModule(
  'Gestion des conflits',
  'conflict-management',
  'Désamorcer les tensions et ne pas envenimer les situations',
  7,
  // Theory Content (5+ slides)
  `## Les conflits dans League of Legends

Les conflits sont malheureusement fréquents dans LoL. Frustration, erreurs, désaccords stratégiques... les tensions montent vite. Savoir **gérer les conflits** est essentiel pour maintenir un environnement positif et gagner des parties.

## Pourquoi ne pas envenimer

Envenimer un conflit :
- **Déconcentre** tout le monde du jeu
- **Tilt** les joueurs impliqués
- **Réduit** la coopération de l'équipe
- **Augmente** les erreurs individuelles
- **Mène souvent** à la défaite
Un mot de travers peut coûter la partie entière.

## Techniques de désescalade

Pour calmer une situation :
- **Ignorez** les provocations (ne répondez pas)
- **Utilisez le mute** si nécessaire
- **Restez factuel** : "let's focus on game"
- **Reconnaissez vos erreurs** : "mb" (my bad)
- **Redirigez vers l'objectif** : "we can still win, focus"
- **Complimentez** un bon play pour changer l'ambiance

## Quand utiliser le mute

Le mute est votre ami :
- Quand quelqu'un est **constamment négatif**
- Quand la discussion **n'apporte rien** de constructif
- Quand vous sentez que vous allez **tilt** à cause du chat
- Quand les **insultes** commencent
N'hésitez pas à mute et jouer en silence, c'est souvent mieux.

## Être la voix de la raison

Vous pouvez aider votre équipe :
- **Défendez** le joueur qui se fait flame : "stop, let's play"
- **Proposez** une solution : "it's fine, we scale"
- **Restez positif** même dans l'adversité
- **Évitez** de prendre parti dans les conflits
- **Concentrez-vous** sur les actions à venir
Une équipe qui ne se dispute pas a plus de chances de gagner.`,

  // Practice Instructions
  `## Objectif

Apprendre à gérer les conflits dans votre équipe pour maintenir un environnement positif et focus sur la victoire.

## Étapes

1. Lancez une partie normale ou classée
2. Si un conflit éclate, ne participez pas aux accusations
3. Utilisez des phrases neutres : "focus game", "we can still win"
4. Si quelqu'un devient trop toxique, utilisez /mute [nom]
5. Après une erreur d'un coéquipier, ne commentez pas négativement
6. Félicitez les bons plays même après un conflit pour améliorer l'ambiance

## Critère de réussite

Vous avez traversé au moins un moment de tension sans y contribuer négativement, et avez utilisé au moins une technique de désescalade.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi ne faut-il pas envenimer les conflits ?",
      "Parce que c'est impoli",
      "Parce que cela déconcentre l'équipe et mène à la défaite",
      "Parce que Riot vous bannira",
      "Ce n'est pas grave d'envenimer",
      'b',
      "Les conflits déconcentrent et réduisent les performances de toute l'équipe."
    ),
    createQuestion(
      "Quelle est la meilleure réaction face à une provocation ?",
      "Répondre avec une meilleure insulte",
      "Ignorer ou mute",
      "Expliquer en détail pourquoi il a tort",
      "Alerter tous les autres joueurs",
      'b',
      "Ignorer ou mute évite d'alimenter le conflit."
    ),
    createQuestion(
      "Quelle phrase aide à calmer une situation ?",
      "C'est de ta faute si on perd",
      "Let's focus on game, we can win",
      "Tu es vraiment mauvais",
      "Je reporte après la partie",
      'b',
      "Rediriger vers l'objectif commun aide à désamorcer les tensions."
    ),
    createQuestion(
      "Quand devez-vous utiliser la fonction mute ?",
      "Jamais, il faut tout lire",
      "Quand quelqu'un est constamment négatif ou toxique",
      "Dès le début de chaque partie",
      "Seulement si l'ennemi parle",
      'b',
      "Le mute protège votre mental quand la communication devient toxique."
    ),
    createQuestion(
      "Comment réagir quand vous faites une erreur et qu'on vous blame ?",
      "Blamer quelqu'un d'autre",
      "Dire 'mb' et se concentrer sur le jeu",
      "Rage quit",
      "Écrire un paragraphe d'excuses",
      'b',
      "Reconnaître l'erreur brièvement et passer à la suite est la meilleure approche."
    ),
    createQuestion(
      "Que faire si deux coéquipiers se disputent ?",
      "Prendre parti pour l'un d'eux",
      "Écrire 'stop, let's play' et ne pas participer",
      "Flame les deux",
      "Abandonner la partie",
      'b',
      "Intervenir pour calmer sans prendre parti aide à désamorcer."
    ),
    createQuestion(
      "Comment '/mute all' aide-t-il ?",
      "Il augmente vos dégâts",
      "Il vous permet de jouer sans distraction négative",
      "Il fait gagner de l'or",
      "Il n'aide pas du tout",
      'b',
      "Mute all supprime les distractions toxiques pour se concentrer sur le jeu."
    ),
    createQuestion(
      "Quelle action positive pouvez-vous faire après un conflit ?",
      "Rappeler l'erreur passée",
      "Féliciter un bon play pour améliorer l'ambiance",
      "Ignorer tout le monde",
      "Continuer à blamer",
      'b',
      "Un compliment sincère peut restaurer une bonne ambiance d'équipe."
    ),
    createQuestion(
      "Pourquoi rester factuel plutôt qu'émotionnel ?",
      "Les émotions sont plus efficaces",
      "Les faits ne créent pas de conflit personnel",
      "C'est obligatoire par Riot",
      "Rester factuel n'aide pas",
      'b',
      "Les discussions factuelles évitent les attaques personnelles."
    ),
    createQuestion(
      "Quel est l'effet du tilt sur la performance ?",
      "Le tilt améliore la concentration",
      "Le tilt augmente les erreurs et réduit la performance",
      "Le tilt n'a aucun effet",
      "Le tilt rend plus fort",
      'b',
      "Le tilt perturbe la prise de décision et augmente les erreurs."
    ),
  ]
);
