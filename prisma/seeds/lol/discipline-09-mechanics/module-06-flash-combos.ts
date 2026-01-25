import { createModule, createQuestion } from '../utils';

export const module06FlashCombos = createModule(
  'Flash combos',
  'flash-combos',
  'Utiliser Flash dans les combos',
  6,
  // Theory Content
  `## Les Flash combos

Le **Flash** peut être utilisé pendant ou avant certains sorts pour créer des combos **imprévisibles** et **dévastateurs**.

## Pourquoi Flash combo ?

Avantages :
- **Surprendre** l'ennemi
- **Étendre** la portée des sorts
- Rendre les sorts **inévitables**
- Créer des **plays** game-changing

## Types de Flash combos

Différentes utilisations :
- **Flash + sort** : Flash puis sort immédiat
- **Sort + Flash** : Commencer le sort puis Flash
- **Flash redirect** : Changer la direction du sort
- **Flash engage** : Flash pour initier

## Exemples célèbres

Combos iconiques :
- **Annie** : Flash → R (Tibbers flash)
- **Malphite** : R → Flash (extension de portée)
- **Shen** : E → Flash (taunt flash)
- **Cassiopeia** : R → Flash (retourner l'ulti)
- **Gragas** : E → Flash (bodyslam redirect)

## Timing critique

Points importants :
- Le **timing** doit être précis
- Certains sorts peuvent être **buffered**
- Pratiquer le **muscle memory**
- L'ennemi ne doit pas s'y attendre

## Quand utiliser ?

Situations appropriées :
- Pour **finir** une cible qui s'échappe
- Pour un **engage** surprise en teamfight
- Quand c'est le **seul moyen** de toucher
- Ne pas gaspiller pour rien`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser Flash dans les combos de manière efficace.

## Étapes

1. Choisissez un champion avec un bon Flash combo (Annie, Malphite)
2. En Practice Tool, pratiquez Flash + R
3. Essayez R puis Flash pendant l'animation
4. Pratiquez sur des dummies en mouvement
5. Essayez en partie normale quand maîtrisé

## Critère de réussite

Vous réussissez un Flash combo en partie qui surprend l'ennemi et aboutit à un kill.`,

  // Questions
  [
    createQuestion(
      "Pourquoi utiliser Flash dans un combo ?",
      "Pour gaspiller Flash",
      "Pour surprendre et étendre la portée",
      "Pour fuir",
      "Pas de raison",
      'b',
      "Flash combo permet de surprendre et d'étendre la portée des sorts."
    ),
    createQuestion(
      "Le Flash R d'Annie est célèbre pour quoi ?",
      "La fuite",
      "Un stun de zone surprise",
      "Le sustain",
      "Le farm",
      'b',
      "Flash Tibbers permet un engage surprise avec stun de zone."
    ),
    createQuestion(
      "Malphite peut faire R puis Flash pour ?",
      "Annuler son ulti",
      "Étendre la portée de l'ulti",
      "Se soigner",
      "Rien",
      'b',
      "R Flash étend la portée de l'ulti de Malphite."
    ),
    createQuestion(
      "Qu'est-ce qu'un Flash redirect ?",
      "Annuler Flash",
      "Changer la direction d'un sort avec Flash",
      "Flash vers l'arrière",
      "Un bug",
      'b',
      "Flash redirect change la direction du sort pendant l'animation."
    ),
    createQuestion(
      "Le E Flash de Shen fait quoi ?",
      "Un dash arrière",
      "Étend et redirige son taunt",
      "Un soin",
      "Rien de spécial",
      'b',
      "E Flash permet d'étendre et rediriger le taunt de Shen."
    ),
    createQuestion(
      "Quand utiliser un Flash combo ?",
      "Tout le temps",
      "Pour un engage surprise ou finir une cible",
      "Pour farm",
      "Jamais",
      'b',
      "Utilisez Flash combo pour des moments décisifs."
    ),
    createQuestion(
      "Faut-il pratiquer les Flash combos ?",
      "Non, c'est intuitif",
      "Oui, le timing est crucial",
      "Seulement les pros",
      "C'est impossible",
      'b',
      "Le timing précis nécessite de la pratique."
    ),
    createQuestion(
      "Cassiopeia R Flash fait quoi ?",
      "Double les dégâts",
      "Permet de se retourner pendant l'ulti",
      "Rien",
      "Annule l'ulti",
      'b',
      "R Flash permet de changer la direction du regard de Cassio."
    ),
    createQuestion(
      "Qu'est-ce que le buffering ?",
      "Un bug",
      "Entrer une commande avant qu'elle puisse s'exécuter",
      "Un objet",
      "Un sort",
      'b',
      "Le buffering permet de préparer un sort pendant Flash."
    ),
    createQuestion(
      "Flash combo doit être utilisé quand l'ennemi ?",
      "S'y attend",
      "Ne s'y attend pas",
      "Est AFK",
      "Est en base",
      'b',
      "L'élément de surprise est clé pour un Flash combo réussi."
    ),
  ]
);
