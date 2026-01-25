import { createModule, createQuestion } from '../utils';

export const module08LosingLane = createModule(
  'Gérer une lane perdue',
  'losing-lane',
  "Stratégies quand on est derrière en or/XP",
  8,
  // Theory Content
  `## Jouer en désavantage

Parfois, vous **perdez** votre lane. Ça arrive à tout le monde. L'important est de savoir **limiter les dégâts** et rester utile.

## Reconnaître qu'on est behind

Signes de désavantage :
- L'ennemi a un ou plusieurs **objets** d'avance
- Vous avez **2+ niveaux** de retard
- Vous ne pouvez pas **trade** favorablement
- Vous perdez les **1v1** systématiquement

## Stratégies de survie

Comment limiter les pertes :
- **Farm sous tourelle** en sécurité
- Ne pas prendre de **trades** inutiles
- Éviter les **all-in** où vous mourrez
- Demander de l'**aide** au jungler

## Farm sous tourelle

Technique essentielle :
- Sbires **mêlée** : 2 tirs de tourelle + 1 auto
- Sbires **caster** : 1 auto + 1 tir tourelle + 1 auto
- Sbires **canon** : 7+ tirs de tourelle
- Préparez les sbires avant les tirs

## Rester utile même behind

Comment contribuer :
- Apporter du **CC** en teamfight
- **Peel** pour vos carries
- Wardez et donnez de la **vision**
- Ne feedez pas plus de kills
- Laissez les **kills** à vos équipiers fed

## Attendre le late game

La patience paie :
- Les **niveaux** finissent par s'égaliser
- Certains champions **scale** mieux
- Les **erreurs ennemies** arrivent
- Un bon teamfight peut **renverser** la partie`,

  // Practice Instructions
  `## Objectif

Apprendre à minimiser les pertes quand on perd sa lane.

## Étapes

1. Si vous êtes behind, reconnaissez-le
2. Restez sous tourelle et farmez en sécurité
3. Évitez les combats que vous ne pouvez pas gagner
4. Pratiquez le farm sous tourelle
5. Cherchez à être utile autrement (vision, CC)

## Critère de réussite

Vous finissez une partie où vous perdiez la lane sans avoir feedé et en restant utile à l'équipe.`,

  // Questions
  [
    createQuestion(
      "Que faire quand on perd sa lane ?",
      "All-in l'ennemi",
      "Limiter les dégâts et farmer safe",
      "AFK",
      "Rage quit",
      'b',
      "Quand behind, il faut limiter les pertes et farmer en sécurité."
    ),
    createQuestion(
      "Comment reconnaître qu'on est behind ?",
      "On gagne tous les trades",
      "L'ennemi a des objets/niveaux d'avance",
      "On a plus de CS",
      "On domine",
      'b',
      "Behind = l'ennemi a un avantage en or/niveaux visible."
    ),
    createQuestion(
      "Combien de tirs de tourelle pour préparer un sbire mêlée ?",
      "1 tir",
      "2 tirs puis 1 auto",
      "5 tirs",
      "0 tirs",
      'b',
      "Sbire mêlée : 2 tirs de tourelle + 1 auto-attaque pour le kill."
    ),
    createQuestion(
      "Que faire pour un sbire caster sous tourelle ?",
      "Attendre qu'il meure",
      "1 auto, 1 tir tourelle, 1 auto",
      "Ignorer",
      "Utiliser l'ultime",
      'b',
      "Caster : préparez avec 1 auto, laissez le tir, finissez avec 1 auto."
    ),
    createQuestion(
      "Peut-on encore être utile quand behind ?",
      "Non, partie perdue",
      "Oui, avec CC, vision et peel",
      "Seulement si on est ADC",
      "Jamais",
      'b',
      "Même behind, vous pouvez apporter CC, vision et soutien."
    ),
    createQuestion(
      "Faut-il demander l'aide du jungler ?",
      "Non, ne jamais déranger",
      "Oui, c'est une bonne option",
      "Seulement en ranked",
      "Jamais en ranked",
      'b',
      "Demander l'aide du jungler est une stratégie valide."
    ),
    createQuestion(
      "Pourquoi éviter les all-in quand behind ?",
      "C'est ennuyeux",
      "Vous allez probablement mourir et feed plus",
      "C'est interdit",
      "Ça n'arrive jamais",
      'b',
      "All-in quand behind = mort probable et feed l'ennemi."
    ),
    createQuestion(
      "Comment rester utile en teamfight quand behind ?",
      "Ignorer le fight",
      "Apporter CC et protéger les carries",
      "Se cacher",
      "Split push",
      'b',
      "Utilisez votre CC et peel pour aider les coéquipiers fed."
    ),
    createQuestion(
      "Les niveaux s'égalisent-ils en late game ?",
      "Non, jamais",
      "Oui, tout le monde atteint 18",
      "Seulement les tanks",
      "Seulement en ARAM",
      'b',
      "En late game, tout le monde atteint le niveau 18."
    ),
    createQuestion(
      "Faut-il prendre les kills quand on est behind ?",
      "Toujours",
      "Mieux vaut les laisser aux coéquipiers fed",
      "Jamais",
      "Ça dépend du champion",
      'b',
      "Si vous êtes behind, laissez les kills à ceux qui peuvent mieux les utiliser."
    ),
  ]
);
