import { createModule, createQuestion } from '../utils';

export const module04Ultimate = createModule(
  'Ultimate (ultime R)',
  'ultimate-ability',
  'La compétence la plus puissante du champion',
  4,
  // Theory Content
  `## L'importance de l'ultime

L'**ultime** (R) est la compétence signature de chaque champion. C'est généralement le sort le plus **puissant** et le plus **impactant** du kit.

## Caractéristiques de l'ultime

L'ultime se distingue par :
- Débloqué au **niveau 6**
- Améliioré aux niveaux **11** et **16**
- **Cooldown long** (60-180 secondes généralement)
- Effet très **puissant** (dégâts, CC, utilité)

## Types d'ultimes

Les ultimes varient beaucoup :
- **Dégâts massifs** : Lux R, Jinx R
- **Transformation** : Shyvana R, Nidalee R
- **Contrôle de foule** : Malphite R, Amumu R
- **Utilitaires** : Shen R, Soraka R
- **Résurrection** : Zilean R

## Gestion de l'ultime

Bien utiliser son ultime :
- Ne pas le **gaspiller** sur des cibles peu importantes
- **Tracker** les ultimes ennemis (les compter)
- Utiliser au **bon moment** (pas trop tôt, pas trop tard)
- Communiquer quand il est **disponible ou en CD**

## Récapitulatif

- R = compétence la plus puissante
- Niveau 6, 11, 16 pour les améliorations
- Cooldown long, utiliser avec sagesse
- Définit souvent les teamfights
- Tracker les ultimes ennemis est crucial`,

  // Practice Instructions
  `## Objectif

Comprendre l'importance et l'utilisation de l'ultime.

## Étapes

1. Lancez une partie d'entraînement
2. Atteignez le niveau 6 pour débloquer votre R
3. Lisez attentivement la description de votre ultime
4. Testez-le sur les mannequins et observez l'effet
5. Notez le cooldown après utilisation
6. Essayez de l'utiliser au moment optimal en combat

## Critère de réussite

Vous comprenez ce que fait votre ultime, son cooldown, et quand l'utiliser efficacement.`,

  // Questions
  [
    createQuestion(
      "À quel niveau débloque-t-on l'ultime ?",
      "Niveau 1",
      "Niveau 3",
      "Niveau 6",
      "Niveau 10",
      'c',
      "L'ultime se débloque au niveau 6."
    ),
    createQuestion(
      "À quels niveaux améliore-t-on l'ultime ?",
      "6, 10, 14",
      "6, 11, 16",
      "6, 12, 18",
      "5, 10, 15",
      'b',
      "L'ultime s'améliore aux niveaux 6, 11 et 16."
    ),
    createQuestion(
      "Pourquoi l'ultime est-il spécial ?",
      "Il n'a pas de cooldown",
      "C'est le sort le plus puissant",
      "Il ne coûte pas de mana",
      "Il est disponible dès le niveau 1",
      'b',
      "L'ultime est généralement le sort le plus impactant du kit du champion."
    ),
    createQuestion(
      "Quel est le cooldown typique d'un ultime ?",
      "5-10 secondes",
      "20-30 secondes",
      "60-180 secondes",
      "Pas de cooldown",
      'c',
      "Les ultimes ont généralement un cooldown long, entre 60 et 180 secondes."
    ),
    createQuestion(
      "Pourquoi 'tracker' les ultimes ennemis ?",
      "Pour les voler",
      "Pour savoir quand l'ennemi est dangereux ou vulnérable",
      "C'est juste pour s'amuser",
      "Pour gagner de l'or",
      'b',
      "Savoir si un ennemi a son ultime aide à prendre de meilleures décisions."
    ),
    createQuestion(
      "Qu'est-ce qu'un ultime de transformation ?",
      "Un ultime qui change les ennemis",
      "Un ultime qui transforme le champion",
      "Un ultime qui détruit le Nexus",
      "Un ultime qui soigne",
      'b',
      "Certains ultimes transforment le champion (Shyvana devient dragon)."
    ),
    createQuestion(
      "Faut-il utiliser son ultime dès qu'il est disponible ?",
      "Oui, toujours",
      "Non, il faut l'utiliser au bon moment",
      "Seulement contre le Dragon",
      "Seulement en 1v1",
      'b',
      "Gaspiller l'ultime peut coûter un fight ou un objectif important."
    ),
    createQuestion(
      "L'ultime de Malphite est de quel type ?",
      "Dégâts sur la durée",
      "Engage/CC (il charge et projette les ennemis)",
      "Soins d'équipe",
      "Invisibilité",
      'b',
      "Malphite R est un engage puissant avec un knock-up de zone."
    ),
    createQuestion(
      "Pourquoi communiquer sur son ultime ?",
      "Pour impressionner",
      "Pour que l'équipe sache quand engager ou jouer safe",
      "C'est obligatoire",
      "Pour gagner des points",
      'b',
      "Savoir si les ultimes alliés sont prêts aide à coordonner les combats."
    ),
    createQuestion(
      "Combien de rangs possède l'ultime ?",
      "1 rang",
      "3 rangs",
      "5 rangs",
      "Infini",
      'b',
      "L'ultime a 3 rangs (niveaux 6, 11, 16)."
    ),
  ]
);
