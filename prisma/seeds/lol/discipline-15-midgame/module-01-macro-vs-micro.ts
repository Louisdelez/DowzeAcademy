import { createModule, createQuestion } from '../utils';

export const module01MacroVsMicro = createModule(
  'Macro vs micro',
  'macro-vs-micro',
  'Décisions globales vs individuelles',
  1,
  // Theory Content (5+ slides)
  `## Introduction : Macro vs Micro

Dans League of Legends, deux types de compétences déterminent votre niveau de jeu : le **micro** et le **macro**. Comprendre la différence entre ces deux concepts est fondamental pour progresser au-delà des bases du jeu.

## Le Micro : les compétences individuelles

Le **micro** (ou micro-management) désigne toutes les compétences mécaniques individuelles :
- **Last-hitting** : farmer efficacement les sbires
- **Skill-shots** : viser et toucher ses compétences
- **Kiting** : attaquer tout en se déplaçant
- **Combos** : enchaîner les sorts de façon optimale
- **Esquives** : éviter les compétences ennemies

Le micro se travaille par la pratique répétée et concerne votre champion uniquement.

## Le Macro : la vision d'ensemble

Le **macro** (ou macro-stratégie) concerne les décisions globales affectant toute la partie :
- **Rotations** : où aller et quand
- **Objectifs** : prioriser Dragon, Baron, tourelles
- **Vision** : placer les wards stratégiquement
- **Wave management** : contrôler les vagues de sbires
- **Timing** : savoir quand engager ou se replier

Le macro demande une compréhension profonde du jeu et une bonne lecture de la carte.

## L'équilibre entre Macro et Micro

Un joueur complet doit maîtriser les deux aspects :
- Excellent micro + mauvais macro = gagner les duels mais perdre les parties
- Excellent macro + mauvais micro = être au bon endroit mais mourir dans les fights
- L'objectif est de développer les deux compétences en parallèle

En mid-game, le macro prend une importance croissante car les décisions d'équipe deviennent cruciales.

## Récapitulatif

| Micro | Macro |
|-------|-------|
| Compétences individuelles | Décisions d'équipe |
| Réflexes et mécanique | Stratégie et lecture du jeu |
| Gagner les 1v1 | Gagner la partie |
| Se travaille en pratique | Se travaille par l'analyse |
| Important toute la partie | Crucial en mid/late game |`,

  // Practice Instructions
  `## Objectif

Identifier et différencier les situations de micro et de macro dans une partie réelle pour développer votre conscience stratégique.

## Étapes

1. Lancez une partie normale (pas classée)
2. À chaque décision que vous prenez, identifiez s'il s'agit de micro ou de macro
3. Notez mentalement 3 situations de micro (ex: esquiver un skillshot)
4. Notez mentalement 3 situations de macro (ex: décider d'aller au Dragon)
5. Après la partie, réfléchissez aux moments où vous avez privilégié l'un au détriment de l'autre

## Critère de réussite

Vous pouvez citer au moins 3 exemples concrets de micro et 3 exemples de macro tirés de votre partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le 'micro' dans League of Legends ?",
      "Les décisions stratégiques d'équipe",
      "Les compétences mécaniques individuelles",
      "La gestion de la vision sur la carte",
      "Le choix des objectifs à prendre",
      'b',
      "Le micro désigne toutes les compétences mécaniques individuelles comme le last-hit, les combos et les esquives."
    ),
    createQuestion(
      "Lequel de ces éléments est un exemple de macro ?",
      "Réussir un combo flash + ulti",
      "Esquiver un skillshot ennemi",
      "Décider de faire le Dragon après un kill",
      "Farmer parfaitement une vague de sbires",
      'c',
      "La décision de faire un objectif comme le Dragon est une décision macro qui affecte toute l'équipe."
    ),
    createQuestion(
      "Un joueur avec excellent micro mais mauvais macro va généralement :",
      "Gagner toutes ses parties facilement",
      "Gagner ses duels mais perdre des parties",
      "Ne jamais réussir à farmer correctement",
      "Toujours être au bon endroit au bon moment",
      'b',
      "Un bon micro permet de gagner les combats individuels, mais sans macro, on ne convertit pas ces avantages en victoire."
    ),
    createQuestion(
      "Quelle compétence est considérée comme du micro ?",
      "Choisir quand grouper avec l'équipe",
      "Placer des wards dans la jungle ennemie",
      "Le kiting (attaquer en se déplaçant)",
      "Décider de split-push top lane",
      'c',
      "Le kiting est une compétence mécanique individuelle qui relève du micro."
    ),
    createQuestion(
      "Pourquoi le macro devient-il plus important en mid-game ?",
      "Parce que les champions sont plus forts",
      "Car les décisions d'équipe deviennent cruciales",
      "Parce que le micro n'existe plus",
      "Car les sbires rapportent plus d'or",
      'b',
      "En mid-game, les actions coordonnées d'équipe (objectifs, rotations) prennent le dessus sur le jeu individuel."
    ),
    createQuestion(
      "Lequel n'est PAS un exemple de micro ?",
      "Last-hitting les sbires",
      "Toucher ses skillshots",
      "Placer la vision avant le Baron",
      "Esquiver les compétences ennemies",
      'c',
      "Placer la vision est une décision stratégique macro qui affecte la lecture de la carte pour toute l'équipe."
    ),
    createQuestion(
      "Comment améliore-t-on principalement son micro ?",
      "En regardant des guides stratégiques",
      "Par la pratique répétée en jeu",
      "En analysant les mouvements d'équipe",
      "En étudiant les timings d'objectifs",
      'b',
      "Le micro s'améliore par la répétition et la pratique des mécaniques en jeu."
    ),
    createQuestion(
      "Qu'est-ce que le wave management ?",
      "Une compétence purement micro",
      "Le contrôle stratégique des vagues de sbires",
      "La capacité à farmer rapidement",
      "Le timing des backs",
      'b',
      "Le wave management est une compétence macro qui consiste à manipuler les vagues pour créer des avantages stratégiques."
    ),
    createQuestion(
      "Un joueur avec excellent macro mais faible micro va :",
      "Dominer tous les duels",
      "Être bien positionné mais mourir dans les fights",
      "Ne jamais savoir où aller",
      "Toujours gagner ses lanes",
      'b',
      "Un bon macro permet d'être au bon endroit, mais sans le micro nécessaire, on ne peut pas exécuter correctement."
    ),
    createQuestion(
      "Pour devenir un joueur complet, il faut :",
      "Se concentrer uniquement sur le micro",
      "Ignorer le micro et maîtriser le macro",
      "Développer les deux compétences en parallèle",
      "Choisir l'un ou l'autre selon son rôle",
      'c',
      "L'équilibre entre micro et macro est essentiel pour progresser et gagner régulièrement."
    ),
  ]
);
