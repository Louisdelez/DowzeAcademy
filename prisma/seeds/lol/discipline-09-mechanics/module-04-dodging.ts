import { createModule, createQuestion } from '../utils';

export const module04Dodging = createModule(
  'Dodge',
  'dodging',
  'Esquiver les attaques ennemies efficacement',
  4,
  // Theory Content
  `## L'esquive (Dodge)

**Esquiver** les skill shots et attaques ennemies est aussi important que les toucher. Un bon joueur est difficile à atteindre.

## Principes du dodge

Bases de l'esquive :
- Observer l'**animation** de cast ennemi
- Anticiper la **direction** du tir
- Bouger **perpendiculairement** au skill shot
- Ne pas être **prévisible**

## Techniques de mouvement

Comment bouger :
- **Zigzag** : Changer de direction souvent
- **Juke** : Faire croire qu'on va d'un côté
- **Sidestep** : Pas de côté au dernier moment
- **Stop** : Parfois s'arrêter surprend

## Utiliser les dashes

Sorts de mobilité :
- Garder son **dash** pour les sorts importants
- Ne pas **gaspiller** le dash trop tôt
- Un **Flash** bien utilisé peut tout changer
- Certains dashes ont des **invincibilités**

## Utiliser le terrain

L'environnement aide :
- Les **sbires** bloquent certains skill shots
- Les **murs** bloquent la vision
- Les **bushes** cachent vos mouvements
- Certains sorts ne passent pas les **murs**

## La prédiction inversée

Jouer avec l'ennemi :
- Si l'ennemi prédit votre mouvement, **arrêtez**
- Variez vos **patterns** d'esquive
- Parfois marcher vers le skill shot est safe
- Adaptez-vous au **style** de l'ennemi`,

  // Practice Instructions
  `## Objectif

Améliorer sa capacité à esquiver les skill shots ennemis.

## Étapes

1. Jouez contre un champion à skill shots (bot ou joueur)
2. Concentrez-vous sur l'observation de leurs animations
3. Bougez perpendiculairement à leurs tirs
4. Pratiquez le sidestep au dernier moment
5. Utilisez les sbires comme protection

## Critère de réussite

Vous esquivez régulièrement les skill shots importants sans utiliser de dash.`,

  // Questions
  [
    createQuestion(
      "Dans quelle direction esquiver un skill shot ?",
      "Vers l'arrière",
      "Perpendiculairement (sur le côté)",
      "Vers l'avant",
      "Diagonalement vers l'arrière",
      'b',
      "Esquiver sur le côté minimise la distance à parcourir."
    ),
    createQuestion(
      "Qu'est-ce qu'un sidestep ?",
      "Un sort",
      "Un pas de côté au dernier moment",
      "Une attaque",
      "Un objet",
      'b',
      "Le sidestep est un mouvement latéral pour esquiver."
    ),
    createQuestion(
      "Pourquoi garder son dash ?",
      "Pour fuir constamment",
      "Pour esquiver les skill shots importants",
      "Pas de raison",
      "Pour attaquer",
      'b',
      "Garder son dash permet d'esquiver les sorts critiques."
    ),
    createQuestion(
      "Qu'est-ce qu'un juke ?",
      "Un objet",
      "Faire croire qu'on va d'un côté puis aller de l'autre",
      "Un sort",
      "Une erreur",
      'b',
      "Le juke est une feinte de direction pour tromper l'ennemi."
    ),
    createQuestion(
      "Comment les sbires aident à esquiver ?",
      "Ils ne peuvent pas",
      "Certains skill shots sont bloqués par les sbires",
      "Ils esquivent pour vous",
      "Ils ralentissent l'ennemi",
      'b',
      "Se cacher derrière les sbires bloque certains skill shots."
    ),
    createQuestion(
      "Que faut-il observer pour esquiver ?",
      "Rien de particulier",
      "L'animation de cast de l'ennemi",
      "La minimap",
      "Ses propres PV",
      'b',
      "L'animation de cast indique qu'un skill shot arrive."
    ),
    createQuestion(
      "Est-ce que s'arrêter peut aider à esquiver ?",
      "Jamais",
      "Oui, parfois l'ennemi prédit un mouvement",
      "Toujours",
      "Seulement en ARAM",
      'b',
      "S'arrêter peut surprendre un ennemi qui prédit votre mouvement."
    ),
    createQuestion(
      "Le zigzag consiste à ?",
      "Courir en ligne droite",
      "Changer de direction fréquemment",
      "Rester immobile",
      "Tourner en cercle",
      'b',
      "Le zigzag rend vos mouvements imprévisibles."
    ),
    createQuestion(
      "Flash doit être utilisé pour ?",
      "Tous les skill shots",
      "Les skill shots importants/mortels",
      "Jamais pour esquiver",
      "Uniquement pour attaquer",
      'b',
      "Gardez Flash pour les sorts qui pourraient vous tuer."
    ),
    createQuestion(
      "Faut-il toujours bouger de la même façon ?",
      "Oui",
      "Non, variez pour être imprévisible",
      "Ça n'a pas d'importance",
      "Seulement vers la droite",
      'b',
      "Varier ses patterns rend l'esquive moins prévisible."
    ),
  ]
);
