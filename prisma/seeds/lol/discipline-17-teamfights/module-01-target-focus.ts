import { createModule, createQuestion } from '../utils';

export const module01TargetFocus = createModule(
  'Focus des cibles',
  'target-focus',
  "Apprendre à identifier et éliminer les cibles prioritaires en teamfight",
  1,
  // Theory Content (5+ slides)
  `## Introduction au focus des cibles

En teamfight, **cibler les bonnes personnes** est souvent plus important que le nombre de dégâts infligés. Un assassin qui élimine le carry ennemi en 2 secondes a plus d'impact qu'un tank qui tape le tank adverse pendant 30 secondes.

## La hiérarchie des cibles prioritaires

Les cibles prioritaires suivent généralement cet ordre :
1. **ADC (Carry AD)** - Dégâts constants les plus élevés
2. **Mid lane carry** - Burst et contrôle
3. **Jungler damage** - Souvent squishies
4. **Support enchanteresse** - Maintient l'équipe en vie
5. **Tanks/Bruisers** - En dernier recours

## Identifier le carry le plus fed

Le carry le plus dangereux n'est pas toujours celui avec le meilleur rôle théorique. Un **Jinx 10/0** est plus prioritaire qu'un **Jhin 2/5**. Surveillez le tableau des scores (Tab) pour identifier qui porte réellement l'équipe adverse.

## Le concept de "dive potentiel"

Avant de vous engager sur une cible, évaluez :
- **Votre mobilité** pour atteindre la cible
- **Le peel adverse** (CC, shields, heal)
- **Votre capacité à survivre** après l'élimination
- **Le follow-up de votre équipe**

## Savoir changer de cible

Un bon joueur sait **adapter son focus** en temps réel. Si le carry est inaccessible :
- Tapez la cible la plus proche
- Ne mourrez pas en essayant d'atteindre l'impossible
- "Hit what you can hit safely" (tapez ce que vous pouvez atteindre en sécurité)

## Erreurs communes de focus

- **Tunnel vision** sur une seule cible
- **Ignorer les menaces immédiates** (l'assassin sur votre carry)
- **Chasser trop profondément** dans l'équipe adverse
- **Oublier de vérifier les cooldowns** ennemis`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier et attaquer les cibles prioritaires dans des situations de combat.

## Étapes

1. Lancez un mode Entraînement ou une partie ARAM
2. Avant chaque combat, identifiez mentalement la cible prioritaire adverse
3. Annoncez-la à haute voix (ex: "Focus Jinx")
4. Pendant le combat, essayez d'atteindre cette cible
5. Notez combien de fois vous avez réussi à toucher/éliminer la cible prioritaire
6. Analysez après le combat : était-ce la bonne décision ?

## Critère de réussite

Sur 5 teamfights, vous avez identifié correctement la cible prioritaire au moins 4 fois et avez contribué à son élimination dans au moins 3 combats.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est généralement la cible prioritaire numéro 1 en teamfight ?",
      "Le tank ennemi",
      "Le jungler adverse",
      "L'ADC (Carry AD) ennemi",
      "Le support ennemi",
      'c',
      "L'ADC représente généralement la source de dégâts constants la plus importante et doit être neutralisé en priorité."
    ),
    createQuestion(
      "Que devez-vous faire si la cible prioritaire est inaccessible ?",
      "Mourir en essayant de l'atteindre quand même",
      "Attaquer la cible la plus proche que vous pouvez toucher en sécurité",
      "Arrêter complètement d'attaquer",
      "Quitter le combat immédiatement",
      'b',
      "Le principe 'hit what you can hit safely' suggère de toujours taper une cible accessible plutôt que de mourir inutilement."
    ),
    createQuestion(
      "Comment identifier le carry le plus dangereux de l'équipe adverse ?",
      "C'est toujours l'ADC par définition",
      "C'est toujours le mid laner",
      "En regardant le tableau des scores (Tab) pour voir qui est fed",
      "C'est le joueur avec le skin le plus cher",
      'c',
      "Le tableau des scores montre les kills, assists et farm qui révèlent quel joueur porte réellement l'équipe adverse."
    ),
    createQuestion(
      "Qu'est-ce que le 'tunnel vision' en teamfight ?",
      "Une stratégie avancée de focus",
      "Se concentrer excessivement sur une seule cible en ignorant tout le reste",
      "Une technique pour éviter les skillshots",
      "Un type de ward spécial",
      'b',
      "Le tunnel vision est une erreur où le joueur se fixe sur une cible au point d'ignorer les menaces ou opportunités autour de lui."
    ),
    createQuestion(
      "Avant de dive sur un carry, que devez-vous évaluer ?",
      "Uniquement les dégâts que vous pouvez infliger",
      "Votre mobilité, le peel adverse, votre survie et le follow-up allié",
      "Seulement le nombre de kills du carry",
      "La météo dans le jeu",
      'b',
      "Un dive réussi nécessite d'évaluer plusieurs facteurs : accès à la cible, protection adverse, chance de survie et soutien de l'équipe."
    ),
    createQuestion(
      "Pourquoi les supports enchanteresses sont-elles des cibles prioritaires ?",
      "Elles font énormément de dégâts",
      "Elles maintiennent l'équipe adverse en vie avec leurs soins et shields",
      "Elles sont toujours à l'avant du combat",
      "Elles ont le plus d'or",
      'b',
      "Les enchanteresses comme Lulu, Soraka ou Yuumi multiplient l'efficacité de leur équipe avec leurs soins et protections."
    ),
    createQuestion(
      "Qu'est-ce que le 'peel' qui protège les carries ?",
      "Un type de dégât magique",
      "L'action de protéger un allié avec du CC, shields ou positionnement",
      "Une invocation spéciale",
      "Un objet défensif",
      'b',
      "Le peel désigne toutes les actions visant à protéger un carry allié : CC les menaces, shield, heal, ou bloquer physiquement."
    ),
    createQuestion(
      "Quelle erreur consiste à poursuivre un ennemi trop profondément dans son équipe ?",
      "Le kiting",
      "Le chasing ou over-extending",
      "Le freezing",
      "Le last hitting",
      'b',
      "Chasser (chase) trop profondément expose le joueur aux retours de l'équipe adverse et mène souvent à une mort inutile."
    ),
    createQuestion(
      "Dans quel ordre devriez-vous généralement considérer les cibles ?",
      "Tank > Support > ADC > Mid",
      "ADC > Mid carry > Jungler damage > Support > Tank",
      "Support > Tank > ADC > Mid",
      "Mid > Jungler > Tank > Support > ADC",
      'b',
      "L'ordre de priorité place les sources de dégâts squishies en premier (ADC, Mid), puis les supports, et les tanks en dernier."
    ),
    createQuestion(
      "Pourquoi est-il important de vérifier les cooldowns ennemis avant de focus ?",
      "Pour savoir quelle cible a le plus d'or",
      "Pour éviter de dive quand l'ennemi a ses capacités défensives disponibles",
      "Ce n'est pas important du tout",
      "Pour connaître le niveau des ennemis",
      'b',
      "Un carry sans Flash ou sans son ultime défensif est beaucoup plus vulnérable qu'un carry avec tous ses cooldowns disponibles."
    ),
  ]
);
