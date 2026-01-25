import { createModule, createQuestion } from '../utils';

export const module04OuterTurrets = createModule(
  'Prise des tourelles extérieures',
  'outer-turrets',
  'Détruire T1',
  4,
  // Theory Content (5+ slides)
  `## L'importance des tourelles T1

Les **tourelles extérieures (T1)** sont les premières défenses de chaque lane. Les détruire est un objectif clé du early/mid-game car elles :
- Ouvrent l'accès à la carte ennemie
- Donnent de l'or global à votre équipe
- Permettent de contrôler plus de jungle
- Créent de la pression sur d'autres objectifs

## Plaques et timing optimal

Avant 14 minutes, les T1 ont des **plaques** (5 plaques = 160g chacune) :
- Détruire les plaques donne un avantage d'or significatif
- Après 14 min, les plaques disparaissent (urgence de les prendre)
- Une T1 complète rapporte environ **1000g** d'or total (plaques + tourelle)

Conseil : Concentrez vos efforts sur une T1 avant 14 minutes pour maximiser l'or.

## Stratégies pour détruire les T1

Plusieurs approches pour prendre une T1 :
1. **Lane dominante** : push constant avec avantage
2. **Dive coordonné** : jungler + laneur pour tuer et push
3. **Herald** : le Rift Herald détruit facilement les T1
4. **Rotation numérique** : regroupement 3-4 personnes sur une lane
5. **Après un kill** : capitaliser sur l'absence de l'ennemi

La méthode la plus sûre combine plusieurs éléments (kill + Herald par exemple).

## Prioriser quelle T1 ?

L'ordre de priorité des T1 dépend de la situation :
- **T1 Mid** : ouvre le centre de la carte, facilite les rotations
- **T1 Bot** : donne accès au Dragon (très important)
- **T1 Top** : donne accès au Herald/Baron, moins prioritaire early

En général : Bot T1 → Mid T1 → Top T1 pour maximiser le contrôle des objectifs.

## Récapitulatif

Les tourelles T1 sont des objectifs majeurs du mid-game :
- Prenez les plaques avant 14 minutes pour l'or
- Utilisez le Herald pour accélérer la prise de T1
- Priorisez Bot T1 pour le contrôle du Dragon
- Chaque T1 détruite ouvre la carte et crée de la pression
- Coordonnez-vous avec l'équipe pour des prises sécurisées`,

  // Practice Instructions
  `## Objectif

Participer activement à la destruction d'au moins deux tourelles T1 avant 20 minutes en utilisant les bonnes stratégies.

## Étapes

1. En early game, concentrez-vous sur le contrôle de votre lane
2. Identifiez les opportunités de plaque (après un kill, quand l'ennemi back)
3. Si possible, demandez l'aide du Herald pour votre T1
4. Après un kill ou quand l'ennemi est absent, poussez agressivement vers la tourelle
5. Une fois votre T1 détruite, rotater pour aider à détruire une autre T1
6. Communiquez avec des pings pour coordonner les pushes

## Critère de réussite

Vous avez participé à la destruction d'au moins 2 T1 avant la minute 20 et récolté au moins 2 plaques.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien de plaques possède une tourelle T1 ?",
      "3 plaques",
      "4 plaques",
      "5 plaques",
      "6 plaques",
      'c',
      "Chaque T1 possède 5 plaques qui donnent 160g chacune."
    ),
    createQuestion(
      "À quel moment les plaques de tourelles disparaissent-elles ?",
      "À 10 minutes",
      "À 14 minutes",
      "À 20 minutes",
      "Quand la tourelle atteint 50% de vie",
      'b',
      "Les plaques disparaissent à 14 minutes, il faut les prendre avant."
    ),
    createQuestion(
      "Environ combien d'or total rapporte une T1 complète (plaques + destruction) ?",
      "500g",
      "800g",
      "1000g",
      "1500g",
      'c',
      "Une T1 complète avec ses 5 plaques rapporte environ 1000g à l'équipe."
    ),
    createQuestion(
      "Pourquoi la T1 Bot est-elle souvent prioritaire ?",
      "Elle donne plus d'or que les autres",
      "Elle donne accès au Dragon",
      "Elle est plus facile à détruire",
      "Le bot lane est toujours plus fort",
      'b',
      "Contrôler le côté bot permet de contester et sécuriser les Dragons."
    ),
    createQuestion(
      "Quel objectif aide particulièrement à détruire les T1 ?",
      "Le Dragon",
      "Le Baron",
      "Le Rift Herald (Héraut)",
      "Le Gromp",
      'c',
      "Le Rift Herald peut charger les tourelles et les détruire rapidement."
    ),
    createQuestion(
      "Quelle n'est PAS une bonne stratégie pour prendre une T1 ?",
      "Utiliser le Herald",
      "Push après un kill",
      "Attaquer sans sbires alliés",
      "Regroupement numérique",
      'c',
      "Attaquer une tourelle sans sbires expose aux dégâts de la tourelle et aux contre-attaques."
    ),
    createQuestion(
      "Pourquoi la T1 Mid est-elle stratégiquement importante ?",
      "Elle donne le plus d'or",
      "Elle ouvre le centre de la carte",
      "Elle est la plus proche de la base",
      "Elle donne un buff spécial",
      'b',
      "La T1 Mid au centre de la carte facilite toutes les rotations et le contrôle de la jungle."
    ),
    createQuestion(
      "Quel est le meilleur moment pour attaquer une T1 ?",
      "Quand tous les ennemis sont vivants",
      "Après un kill ou quand l'ennemi est absent",
      "Dès le début de la partie",
      "Uniquement avec le Baron buff",
      'b',
      "Capitaliser sur l'absence de défenseurs est le moyen le plus sûr de prendre une tourelle."
    ),
    createQuestion(
      "Que faire après avoir détruit votre T1 de lane ?",
      "Rester et attaquer T2 immédiatement",
      "Retourner à la base et attendre",
      "Rotater pour aider à détruire une autre T1",
      "Farm la jungle ennemie seul",
      'c',
      "Après T1, la rotation vers d'autres objectifs maintient la pression sur la carte."
    ),
    createQuestion(
      "L'ordre de priorité général des T1 est :",
      "Top → Mid → Bot",
      "Bot → Mid → Top",
      "Mid → Bot → Top",
      "L'ordre n'a pas d'importance",
      'b',
      "Bot T1 pour le Dragon, Mid T1 pour le contrôle central, Top T1 en dernier généralement."
    ),
  ]
);
