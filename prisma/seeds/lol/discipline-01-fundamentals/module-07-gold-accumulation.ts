import { createModule, createQuestion } from '../utils';

export const module07GoldAccumulation = createModule(
  "Accumulation d'or",
  'gold-accumulation',
  "Sources d'or et importance de l'économie",
  7,
  // Theory Content
  `## L'importance de l'or

L'**or** est la ressource principale dans LoL. Il permet d'acheter des **objets** qui rendent votre champion plus fort. Plus vous avez d'or, plus vous pouvez acheter d'objets puissants.

## Les sources d'or

Vous gagnez de l'or de plusieurs façons :
- **Or passif** : 20.4 or par 10 secondes automatiquement
- **Last hit sur sbires** : 14-90 or selon le type de sbire
- **Kills** : or variable selon la série du champion tué
- **Assists** : portion de l'or du kill
- **Tourelles** : or global pour l'équipe
- **Objectifs** : Dragon, Baron, Herald donnent de l'or

## Le Last Hit (CS)

Le **last hit** (ou CS - Creep Score) est crucial :
- Vous devez porter le **coup fatal** au sbire pour gagner l'or
- Un bon CS = plus d'objets = plus de puissance
- Objectif : 7-10 CS par minute pour un bon joueur
- Rater des last hits = perdre de l'or précieux

## L'économie de jeu

Gérer son or est stratégique :
- Économiser pour des objets complets est souvent mieux
- Mourir coûte de l'or (donné à l'ennemi)
- Les bounties (primes) récompensent tuer des ennemis en série

## Récapitulatif

- L'or permet d'acheter des objets
- Le last hit sur les sbires est la source principale
- Objectif : 7-10 CS par minute
- Les kills, tourelles et objectifs donnent aussi de l'or
- Bien gérer son économie donne un avantage`,

  // Practice Instructions
  `## Objectif

Apprendre à accumuler de l'or efficacement via le last hit.

## Étapes

1. Lancez le mode entraînement avec n'importe quel champion
2. Allez sur une lane et attendez les sbires
3. Essayez de porter le coup fatal (last hit) à chaque sbire
4. Observez l'or que vous gagnez à chaque last hit
5. Visez 50 CS en 10 minutes pour commencer

## Critère de réussite

Vous comprenez le concept de last hit et pouvez atteindre au moins 40 CS en 10 minutes en mode entraînement.`,

  // Questions
  [
    createQuestion(
      "À quoi sert l'or dans LoL ?",
      "À décorer son champion",
      "À acheter des objets",
      "À gagner la partie directement",
      "À construire des bâtiments",
      'b',
      "L'or permet d'acheter des objets qui améliorent les statistiques de votre champion."
    ),
    createQuestion(
      "Qu'est-ce qu'un last hit ?",
      "Le premier coup sur un ennemi",
      "Le coup fatal qui tue le sbire",
      "Une attaque critique",
      "Un coup raté",
      'b',
      "Le last hit est le coup qui achève le sbire, nécessaire pour gagner son or."
    ),
    createQuestion(
      "Que signifie CS ?",
      "Champion Score",
      "Creep Score (nombre de sbires tués)",
      "Combat System",
      "Critical Strike",
      'b',
      "CS signifie Creep Score, le nombre de sbires que vous avez last hit."
    ),
    createQuestion(
      "Combien d'or gagne-t-on passivement par 10 secondes ?",
      "10 or",
      "20.4 or",
      "50 or",
      "100 or",
      'b',
      "Vous gagnez automatiquement 20.4 or toutes les 10 secondes."
    ),
    createQuestion(
      "Quel est un bon objectif de CS par minute ?",
      "1-2 CS/min",
      "4-5 CS/min",
      "7-10 CS/min",
      "15-20 CS/min",
      'c',
      "Un bon joueur vise 7-10 CS par minute, soit environ 80-100 CS à 10 minutes."
    ),
    createQuestion(
      "Qu'est-ce qu'une bounty (prime) ?",
      "Un bonus de danse",
      "Un bonus d'or sur un joueur en série",
      "Un objet gratuit",
      "Une compétence spéciale",
      'b',
      "Les primes sont des bonus d'or placés sur les joueurs ayant réalisé plusieurs kills sans mourir."
    ),
    createQuestion(
      "Pourquoi éviter de mourir est important économiquement ?",
      "On perd ses objets",
      "On donne de l'or à l'ennemi",
      "On perd son niveau",
      "On doit racheter son champion",
      'b',
      "Mourir donne de l'or à l'ennemi qui vous a tué et ses assistants."
    ),
    createQuestion(
      "Quelle structure donne de l'or global à toute l'équipe ?",
      "L'inhibiteur",
      "Les tourelles",
      "Le Nexus",
      "La fontaine",
      'b',
      "La destruction de tourelles donne de l'or à tous les membres de l'équipe."
    ),
    createQuestion(
      "Que se passe-t-il si vous ratez un last hit ?",
      "Le sbire ne meurt pas",
      "Vous ne gagnez pas l'or du sbire",
      "Vous perdez de l'or",
      "Votre champion est ralenti",
      'b',
      "Sans le last hit, l'or du sbire est perdu - vous ne le récupérez pas."
    ),
    createQuestion(
      "Pourquoi économiser pour des objets complets est conseillé ?",
      "C'est moins cher au total",
      "Les objets complets donnent des bonus passifs puissants",
      "Les composants ne donnent rien",
      "C'est obligatoire",
      'b',
      "Les objets complets offrent souvent des passifs uniques en plus des stats."
    ),
  ]
);
