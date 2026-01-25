import { createModule, createQuestion } from '../utils';

export const module05FogOfWar = createModule(
  'Le brouillard de guerre',
  'fog-of-war',
  'Comprendre les zones non révélées et la vision',
  5,
  // Theory Content
  `## Qu'est-ce que le brouillard de guerre ?

Le **brouillard de guerre** (Fog of War) désigne toutes les zones de la carte où votre équipe n'a **pas de vision**. Ces zones apparaissent en gris foncé et cachent les mouvements ennemis.

## Comment fonctionne la vision

Vous avez de la vision grâce à :
- Vos **champions** : ils révèlent autour d'eux
- Vos **sbires** : ils donnent aussi de la vision
- Vos **tourelles** : elles éclairent une zone
- Les **balises de vision** (wards) : objets placés pour surveiller

## Importance du brouillard

Le fog of war est crucial car :
- Les ennemis peuvent se cacher et vous **surprendre**
- Vous ne voyez pas où l'ennemi **farm ou se déplace**
- Les **ganks** viennent souvent du brouillard
- Les objectifs (Dragon/Baron) peuvent être pris en cachette

## La vision dans la stratégie

Contrôler la vision permet de :
- **Prévenir** les ganks et embuscades
- **Sécuriser** les objectifs neutres
- **Traquer** les mouvements ennemis
- **Jouer agressivement** en toute sécurité

## Récapitulatif

- Fog of War = zones sans vision (gris foncé)
- Champions, sbires, tourelles et wards donnent la vision
- Les ennemis se cachent dans le brouillard
- La vision est essentielle pour éviter les surprises
- Wardez les zones importantes (jungle, rivière)`,

  // Practice Instructions
  `## Objectif

Comprendre comment fonctionne la vision et le brouillard de guerre.

## Étapes

1. Lancez une partie d'entraînement
2. Observez la zone éclairée autour de votre champion
3. Éloignez-vous de vos sbires et notez la perte de vision sur la lane
4. Allez dans la jungle et observez le brouillard
5. Placez une balise de vision (ward) et observez la zone révélée
6. Regardez comment les tourelles alliées donnent de la vision

## Critère de réussite

Vous comprenez ce qui donne la vision et pourquoi le brouillard de guerre peut être dangereux.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le brouillard de guerre ?",
      "Un effet météo",
      "Les zones sans vision de votre équipe",
      "Une compétence de champion",
      "Une zone de la jungle",
      'b',
      "Le fog of war représente les zones non révélées, cachant les ennemis."
    ),
    createQuestion(
      "Qu'est-ce qui donne de la vision sur la carte ?",
      "Uniquement les champions",
      "Champions, sbires, tourelles et wards",
      "Seulement les wards",
      "Rien, on voit tout",
      'b',
      "La vision vient de plusieurs sources : champions, sbires, tourelles et wards."
    ),
    createQuestion(
      "Pourquoi le brouillard est-il dangereux ?",
      "Il inflige des dégâts",
      "Les ennemis peuvent s'y cacher pour vous surprendre",
      "Il ralentit le champion",
      "Il empêche de lancer des sorts",
      'b',
      "Le brouillard permet aux ennemis de se cacher et de lancer des embuscades."
    ),
    createQuestion(
      "Qu'est-ce qu'une ward (balise de vision) ?",
      "Un type de monstre",
      "Un objet qui révèle une zone",
      "Une compétence du support",
      "Une tourelle temporaire",
      'b',
      "Une ward est un objet placé au sol qui donne de la vision dans une zone."
    ),
    createQuestion(
      "D'où viennent généralement les ganks ?",
      "Du centre de la lane",
      "Du brouillard de guerre",
      "De la base alliée",
      "Des tourelles",
      'b',
      "Les ganks viennent du brouillard, notamment de la jungle non wardée."
    ),
    createQuestion(
      "Que se passe-t-il si vous n'avez pas de vision sur le Dragon ?",
      "Il ne peut pas être tué",
      "L'ennemi peut le prendre sans que vous le voyiez",
      "Il disparaît",
      "Rien de spécial",
      'b',
      "Sans vision, l'ennemi peut prendre des objectifs en secret."
    ),
    createQuestion(
      "Comment les tourelles aident-elles pour la vision ?",
      "Elles n'aident pas",
      "Elles révèlent une zone autour d'elles",
      "Elles détruisent le brouillard",
      "Elles placent des wards automatiquement",
      'b',
      "Les tourelles donnent de la vision dans un rayon autour d'elles."
    ),
    createQuestion(
      "Pourquoi warder la rivière est important ?",
      "Pour voir les poissons",
      "Pour détecter les rotations vers Dragon/Baron",
      "C'est obligatoire",
      "Pour gagner de l'or",
      'b',
      "La rivière est le passage vers les objectifs majeurs."
    ),
    createQuestion(
      "Quelle couleur représente le brouillard de guerre ?",
      "Blanc",
      "Gris foncé/noir",
      "Rouge",
      "Bleu",
      'b',
      "Le brouillard apparaît en gris foncé sur la carte."
    ),
    createQuestion(
      "Avoir plus de vision que l'ennemi donne quel avantage ?",
      "Plus de dégâts",
      "Meilleure anticipation et sécurité",
      "Plus d'or",
      "Plus de vitesse",
      'b',
      "La vision permet d'anticiper les mouvements et de jouer en sécurité."
    ),
  ]
);
