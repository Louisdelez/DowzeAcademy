import { createModule, createQuestion } from '../utils';

export const module08Recall = createModule(
  'Retour à la base (Recall)',
  'recall',
  'Utiliser le rappel stratégiquement pour se soigner et acheter',
  8,
  // Theory Content
  `## Qu'est-ce que le Recall ?

Le **Recall** (rappel) est une capacité que tous les champions possèdent. En appuyant sur **B**, votre champion commence une canalisation de **8 secondes** qui le téléporte à la base.

## Pourquoi retourner à la base ?

À la base (fontaine), vous pouvez :
- **Régénérer** votre vie et mana instantanément
- **Acheter des objets** dans la boutique
- Vous mettre en **sécurité** temporairement

## Quand faire un Recall ?

Les bons moments pour recall :
- Après avoir **push** votre vague de sbires sous la tourelle ennemie
- Quand vous avez assez d'**or pour un objet important**
- Quand vous êtes **low HP/mana** et en danger
- Après un **kill** ou quand l'ennemi recall

## Les risques du Recall

Attention aux dangers :
- Le recall est **interrompu** si vous prenez des dégâts
- Vous perdez de l'**XP et de l'or** pendant votre absence
- Un mauvais timing peut coûter votre tourelle
- L'ennemi peut **punir** votre absence

## Récapitulatif

- B = Recall (8 secondes de canalisation)
- À la base : régénération et achat d'objets
- Recall après avoir push la vague
- Attention au timing pour ne pas perdre d'XP/or
- Le recall est annulé si vous prenez des dégâts`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser le recall au bon moment sans perdre trop de ressources.

## Étapes

1. Lancez une partie contre l'IA
2. Farmez jusqu'à avoir 450+ or (pour un premier composant)
3. Poussez votre vague sous la tourelle ennemie
4. Appuyez sur B et observez la canalisation de 8 secondes
5. Achetez un objet à la boutique (P) une fois à la base
6. Revenez sur votre lane et répétez le processus

## Critère de réussite

Vous savez faire un recall au bon moment (après avoir push) et utiliser la boutique pour acheter des objets.`,

  // Questions
  [
    createQuestion(
      "Quelle touche active le Recall ?",
      "R",
      "P",
      "B",
      "H",
      'c',
      "La touche B active le Recall pour retourner à la base."
    ),
    createQuestion(
      "Combien de temps dure la canalisation du Recall ?",
      "4 secondes",
      "6 secondes",
      "8 secondes",
      "10 secondes",
      'c',
      "Le Recall nécessite 8 secondes de canalisation avant de vous téléporter."
    ),
    createQuestion(
      "Que peut-on faire à la base ?",
      "Uniquement se soigner",
      "Se soigner et acheter des objets",
      "Gagner de l'XP bonus",
      "Améliorer ses compétences gratuitement",
      'b',
      "À la base, vous récupérez vie/mana et pouvez acheter des objets."
    ),
    createQuestion(
      "Qu'est-ce qui interrompt un Recall ?",
      "Bouger",
      "Prendre des dégâts",
      "Parler dans le chat",
      "Regarder la mini-carte",
      'b',
      "Subir des dégâts interrompt immédiatement la canalisation du recall."
    ),
    createQuestion(
      "Quel est le meilleur moment pour recall ?",
      "Quand les sbires arrivent sur votre lane",
      "Après avoir push la vague sous la tourelle ennemie",
      "Quand l'ennemi vous attaque",
      "Au milieu d'un combat",
      'b',
      "Recall après avoir push permet de minimiser la perte d'XP et d'or."
    ),
    createQuestion(
      "Que risque-t-on avec un mauvais timing de recall ?",
      "Rien du tout",
      "Perdre de l'XP et de l'or",
      "Être banni",
      "Perdre ses compétences",
      'b',
      "Un mauvais recall fait perdre les sbires qui meurent sous votre tourelle."
    ),
    createQuestion(
      "Où le Recall vous téléporte-t-il ?",
      "Au milieu de la carte",
      "À la fontaine de votre base",
      "Près du Dragon",
      "Sur votre lane",
      'b',
      "Le Recall vous ramène à votre fontaine, au coeur de votre base."
    ),
    createQuestion(
      "Pourquoi recall après un kill est une bonne idée ?",
      "Pour éviter de tuer plus",
      "Pour convertir l'avantage en objets",
      "Pour laisser l'ennemi revenir",
      "C'est obligatoire",
      'b',
      "Après un kill, vous avez de l'or à dépenser et l'ennemi ne peut pas vous punir."
    ),
    createQuestion(
      "Que signifie 'push la vague' ?",
      "Repousser les sbires vers la tourelle ennemie",
      "Détruire votre propre vague",
      "Empêcher les sbires d'avancer",
      "Faire reculer l'ennemi",
      'a',
      "Push signifie tuer rapidement les sbires pour que votre vague atteigne la tourelle ennemie."
    ),
    createQuestion(
      "La régénération à la fontaine est-elle instantanée ?",
      "Non, elle prend 30 secondes",
      "Oui, elle est très rapide",
      "Non, il faut attendre 1 minute",
      "Seulement pour la vie, pas le mana",
      'b',
      "La fontaine régénère vie et mana très rapidement (quasi instantanément)."
    ),
  ]
);
