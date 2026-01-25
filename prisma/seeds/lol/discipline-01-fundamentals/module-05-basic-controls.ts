import { createModule, createQuestion } from '../utils';

export const module05BasicControls = createModule(
  'Commandes de base',
  'basic-controls',
  'Déplacement, attaque et utilisation des compétences',
  5,
  // Theory Content
  `## Se déplacer sur la carte

Le déplacement dans LoL utilise le **clic droit** de la souris. Cliquez à l'endroit où vous voulez aller et votre champion s'y déplacera automatiquement en évitant les obstacles.

## Attaquer un ennemi

Pour attaquer :
- **Clic droit** sur un ennemi : attaque automatique
- **Touche A + clic** : attaque vers la position (attack move)
- Votre champion attaquera automatiquement les ennemis à portée

## Utiliser les compétences

Chaque champion possède 4 compétences :
- **Q, W, E** : compétences de base (disponibles dès le niveau 1-3)
- **R** : compétence ultime (disponible au niveau 6)
- Certaines compétences nécessitent de viser, d'autres sont instantanées

## Autres commandes essentielles

- **B** : Rappel (retour à la base)
- **Espace** : Centrer la caméra sur votre champion
- **Y** : Verrouiller/déverrouiller la caméra
- **P** : Ouvrir la boutique (quand vous êtes à la base)
- **D/F** : Sorts d'invocateur

## Récapitulatif

- Clic droit = déplacement et attaque
- Q, W, E, R = compétences du champion
- B = rappel vers la base
- Espace = centrer la caméra
- P = ouvrir la boutique à la base`,

  // Practice Instructions
  `## Objectif

Maîtriser les contrôles de base pour déplacer et faire agir votre champion.

## Étapes

1. Lancez le mode entraînement
2. Pratiquez le déplacement avec le clic droit (dessinez des formes)
3. Attaquez les mannequins d'entraînement avec clic droit et A+clic
4. Utilisez vos 4 compétences (Q, W, E, R si niveau 6)
5. Faites un rappel (B) et revenez sur la carte
6. Testez la touche Espace pour centrer la caméra

## Critère de réussite

Vous pouvez vous déplacer fluidement, attaquer des cibles et utiliser vos compétences sans regarder votre clavier.`,

  // Questions
  [
    createQuestion(
      "Quelle touche permet de se déplacer ?",
      "Clic gauche",
      "Clic droit",
      "Touche Z",
      "Barre d'espace",
      'b',
      "Le clic droit permet de déplacer votre champion vers l'endroit cliqué."
    ),
    createQuestion(
      "Comment attaque-t-on un ennemi ?",
      "Clic gauche sur l'ennemi",
      "Clic droit sur l'ennemi",
      "Touche A uniquement",
      "Touche S",
      'b',
      "Le clic droit sur un ennemi ordonne à votre champion de l'attaquer."
    ),
    createQuestion(
      "Quelle touche lance la compétence ultime ?",
      "Q",
      "W",
      "E",
      "R",
      'd',
      "La touche R lance la compétence ultime, disponible à partir du niveau 6."
    ),
    createQuestion(
      "Quelle touche permet de retourner à la base (Rappel) ?",
      "R",
      "B",
      "H",
      "P",
      'b',
      "La touche B lance le rappel qui vous téléporte à votre base après 8 secondes."
    ),
    createQuestion(
      "À quel niveau débloquez-vous votre ultime (R) ?",
      "Niveau 1",
      "Niveau 3",
      "Niveau 6",
      "Niveau 10",
      'c',
      "L'ultime se débloque au niveau 6 et peut être amélioré aux niveaux 11 et 16."
    ),
    createQuestion(
      "Que fait la touche Espace ?",
      "Fait sauter le champion",
      "Centre la caméra sur votre champion",
      "Active un sort",
      "Ouvre le chat",
      'b',
      "La touche Espace centre instantanément la caméra sur votre champion."
    ),
    createQuestion(
      "Quelle touche ouvre la boutique ?",
      "B",
      "S",
      "P",
      "O",
      'c',
      "La touche P ouvre la boutique quand vous êtes à la base."
    ),
    createQuestion(
      "Qu'est-ce que l'attack move (A + clic) ?",
      "Une danse",
      "Une attaque vers une position qui cible les ennemis proches",
      "Un déplacement rapide",
      "Une compétence spéciale",
      'b',
      "L'attack move permet d'attaquer en se déplaçant, ciblant automatiquement les ennemis proches."
    ),
    createQuestion(
      "Que fait la touche Y ?",
      "Lance une compétence",
      "Verrouille/déverrouille la caméra",
      "Affiche le score",
      "Ouvre les options",
      'b',
      "La touche Y permet de basculer entre caméra libre et caméra verrouillée sur le champion."
    ),
    createQuestion(
      "Combien de compétences de base un champion possède-t-il ?",
      "2",
      "3",
      "4",
      "5",
      'c',
      "Chaque champion a 4 compétences : 3 de base (Q, W, E) et 1 ultime (R)."
    ),
  ]
);
