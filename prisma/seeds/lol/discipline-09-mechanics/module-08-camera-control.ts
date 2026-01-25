import { createModule, createQuestion } from '../utils';

export const module08CameraControl = createModule(
  'Contrôle de la caméra',
  'camera-control',
  'Caméra libre vs verrouillée',
  8,
  // Theory Content
  `## Contrôle de la caméra

La gestion de la **caméra** est essentielle pour avoir une bonne vision du jeu et anticiper les actions.

## Caméra verrouillée vs libre

Deux modes principaux :
- **Verrouillée** : Centrée sur votre champion
- **Libre** : Vous contrôlez la caméra manuellement
- **Semi-verrouillée** : Compromise entre les deux

## Avantages de la caméra libre

Pourquoi la préférer :
- Voir **plus loin** dans une direction
- Observer d'**autres lanes** facilement
- Mieux **anticiper** les ganks
- Vision des **objectifs** à distance

## Inconvénients

Difficultés :
- Plus **difficile** à maîtriser
- Peut **perdre** son champion de vue
- Demande de la **pratique**
- Certains préfèrent la stabilité

## Conseils pour la caméra libre

Comment bien l'utiliser :
- **Spacebar** pour recentrer (par défaut)
- Bouger la caméra avec les **bords de l'écran**
- Utiliser la **minimap** pour cliquer et voir ailleurs
- Trouver un équilibre **confortable**

## La touche Y

Basculer entre les modes :
- **Y** (ou la touche configurée) switch entre les modes
- Passer en libre pour **regarder ailleurs**
- Revenir en verrouillée pour les **fights**
- Adapter selon la **situation**`,

  // Practice Instructions
  `## Objectif

Maîtriser le contrôle de la caméra pour une meilleure vision du jeu.

## Étapes

1. Essayez de jouer en caméra libre quelques parties
2. Utilisez Spacebar pour recentrer sur votre champion
3. Observez les autres lanes en déplaçant la caméra
4. Apprenez à basculer avec Y quand nécessaire
5. Trouvez votre configuration confortable

## Critère de réussite

Vous pouvez observer d'autres lanes et revenir sur votre champion sans perdre le contrôle.`,

  // Questions
  [
    createQuestion(
      "Quelle touche recentre la caméra par défaut ?",
      "Y",
      "Spacebar (Barre d'espace)",
      "F1",
      "Tab",
      'b',
      "Spacebar recentre la caméra sur votre champion."
    ),
    createQuestion(
      "La caméra verrouillée est centrée sur quoi ?",
      "La carte",
      "Votre champion",
      "L'ennemi",
      "Le milieu de la lane",
      'b',
      "La caméra verrouillée suit toujours votre champion."
    ),
    createQuestion(
      "Quel avantage a la caméra libre ?",
      "Plus facile",
      "Voir plus loin et observer d'autres zones",
      "Aucun",
      "Verrouillée est toujours mieux",
      'b',
      "La caméra libre permet de voir plus loin et d'observer la map."
    ),
    createQuestion(
      "Quelle touche bascule entre libre et verrouillée ?",
      "Spacebar",
      "Y",
      "Tab",
      "P",
      'b',
      "Y bascule entre caméra libre et verrouillée."
    ),
    createQuestion(
      "Comment voir une autre lane rapidement ?",
      "Marcher là-bas",
      "Cliquer sur la minimap ou F1-F5",
      "Impossible",
      "Utiliser un sort",
      'b',
      "Cliquez sur la minimap pour déplacer la caméra là-bas."
    ),
    createQuestion(
      "La caméra libre est plus difficile car ?",
      "Elle est bugée",
      "Il faut la contrôler manuellement",
      "Elle fait mal aux yeux",
      "Elle est interdite",
      'b',
      "La caméra libre demande de la pratique pour bien la gérer."
    ),
    createQuestion(
      "En teamfight, quelle caméra préférer ?",
      "Toujours libre",
      "Souvent verrouillée ou centrée",
      "Pas de caméra",
      "Caméra fixe sur une lane",
      'b',
      "En teamfight, être centré sur soi aide à ne pas se perdre."
    ),
    createQuestion(
      "F2, F3, F4, F5 font quoi ?",
      "Rien",
      "Centrer la caméra sur les alliés",
      "Ouvrir le shop",
      "Changer de champion",
      'b',
      "Les touches F centrent la caméra sur vos coéquipiers."
    ),
    createQuestion(
      "Les pros jouent avec quelle caméra ?",
      "Toujours verrouillée",
      "Libre la plupart du temps",
      "Pas de caméra",
      "Caméra spectateur",
      'b',
      "Les joueurs pro utilisent généralement la caméra libre."
    ),
    createQuestion(
      "Qu'est-ce que la caméra semi-verrouillée ?",
      "Un bug",
      "Un compromis entre libre et verrouillée",
      "Toujours libre",
      "Toujours verrouillée",
      'b',
      "La semi-verrouillée offre un compromis entre les deux modes."
    ),
  ]
);
