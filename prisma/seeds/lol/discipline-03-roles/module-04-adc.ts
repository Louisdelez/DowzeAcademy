import { createModule, createQuestion } from '../utils';

export const module04ADC = createModule(
  'ADC (Carry AD bot)',
  'adc-role',
  'Tireur à distance et source principale de dégâts',
  4,
  // Theory Content
  `## Le rôle de l'ADC

L'**ADC** (Attack Damage Carry) est le tireur de l'équipe. Il joue en **Bot Lane** avec le Support. Son rôle est de devenir la **principale source de dégâts** en late game.

## Caractéristiques du rôle

L'ADC se distingue par :
- Champion à **distance** (ranged)
- Dégâts basés sur les **auto-attaques**
- Très **fragile** (peu de PV et résistances)
- Dépendant des **objets** (scale avec l'or)
- A besoin de **protection** (Support)

## Types d'ADC

On trouve plusieurs styles :
- **Hyper Carries** : Faibles tôt, monstres en late (Jinx, Vayne)
- **Lane Bullies** : Dominants en early game (Draven, Caitlyn)
- **Casters** : Utilisent leurs sorts en plus des auto (Ezreal, Jhin)
- **Utility ADC** : Apportent du contrôle (Ashe, Varus)

## Responsabilités en jeu

L'ADC doit :
- **Farmer** parfaitement (le CS est crucial)
- **Rester en vie** (votre mort = perte de DPS)
- Se **positionner** correctement en teamfight (derrière l'équipe)
- **Scale** vers le late game
- Détruire les **objectifs** (tourelles, Dragon, Baron)

## Récapitulatif

- ADC = tireur à distance, dégâts physiques
- Joue Bot Lane avec le Support
- Fragile mais gros dégâts en late game
- Farm et positionnement = clés du succès
- Source principale de DPS en teamfight`,

  // Practice Instructions
  `## Objectif

Comprendre le rôle de l'ADC et l'importance du farm.

## Étapes

1. Lancez une partie contre l'IA en choisissant ADC
2. Prenez un ADC simple (Ashe ou Miss Fortune recommandé)
3. Allez en Bot Lane avec le Support IA
4. Concentrez-vous sur le last-hit des sbires
5. Observez votre fragilité si vous prenez des dégâts
6. En fin de partie, notez vos dégâts aux objectifs (tourelles)

## Critère de réussite

Vous comprenez que l'ADC doit farmer, rester en vie, et représente le damage dealer principal en late game.`,

  // Questions
  [
    createQuestion(
      "Que signifie ADC ?",
      "Attack Damage Champion",
      "Attack Damage Carry",
      "Advanced Damage Caster",
      "Auto-attack Damage Carry",
      'b',
      "ADC signifie Attack Damage Carry, le tireur qui 'carry' avec ses dégâts."
    ),
    createQuestion(
      "Où joue l'ADC ?",
      "Top Lane seul",
      "Mid Lane",
      "Bot Lane avec le Support",
      "Dans la jungle",
      'c',
      "L'ADC joue en Bot Lane en duo avec le Support."
    ),
    createQuestion(
      "Pourquoi l'ADC est-il fragile ?",
      "Il n'a pas d'armure",
      "Peu de PV et résistances pour maximiser les dégâts",
      "C'est un bug",
      "Il ne peut pas acheter d'objets",
      'b',
      "Les ADC sacrifient la résistance pour maximiser leur potentiel de dégâts."
    ),
    createQuestion(
      "D'où viennent principalement les dégâts de l'ADC ?",
      "Des sorts",
      "Des auto-attaques",
      "Des sbires",
      "Des objectifs",
      'b',
      "L'ADC inflige ses dégâts principalement via les auto-attaques."
    ),
    createQuestion(
      "Qu'est-ce qu'un Hyper Carry ?",
      "Un ADC fort toute la partie",
      "Un ADC faible au début mais très puissant en late",
      "Un ADC qui ne meurt jamais",
      "Un ADC qui joue seul",
      'b',
      "Les Hyper Carries comme Jinx deviennent extrêmement forts en fin de partie."
    ),
    createQuestion(
      "Pourquoi le farm est-il crucial pour l'ADC ?",
      "Pour gagner de l'XP",
      "Car ses dégâts dépendent des objets achetés avec l'or",
      "Pour faire plaisir au Support",
      "C'est une tradition",
      'b',
      "L'ADC a besoin d'objets coûteux pour dealer des dégâts, donc l'or est vital."
    ),
    createQuestion(
      "Où doit se positionner l'ADC en teamfight ?",
      "En première ligne",
      "Derrière son équipe, en sécurité",
      "Au milieu de l'ennemi",
      "Loin du combat",
      'b',
      "L'ADC reste derrière pour dealer des dégâts tout en étant protégé."
    ),
    createQuestion(
      "Pourquoi l'ADC joue-t-il avec un Support ?",
      "Pour s'amuser",
      "Car il a besoin de protection vu sa fragilité",
      "C'est obligatoire",
      "Pour partager l'or",
      'b',
      "Le Support protège l'ADC fragile et l'aide à farmer en sécurité."
    ),
    createQuestion(
      "Qu'est-ce qu'un Lane Bully ADC ?",
      "Un ADC qui insulte",
      "Un ADC dominant en début de partie",
      "Un ADC qui farm sous tourelle",
      "Un ADC qui ne trade pas",
      'b',
      "Les Lane Bullies comme Draven dominent l'adversaire en early game."
    ),
    createQuestion(
      "Pourquoi la mort de l'ADC est-elle grave en teamfight ?",
      "Il donne beaucoup d'or",
      "L'équipe perd sa principale source de dégâts",
      "C'est gênant pour lui",
      "Ça ne change rien",
      'b',
      "Sans l'ADC, l'équipe perd énormément de DPS pour finir le combat."
    ),
  ]
);
