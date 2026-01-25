import { createModule, createQuestion } from '../utils';

export const module08SmiteFights = createModule(
  'Smite fights',
  'smite-fights',
  "Gagner les duels de Smite sur objectifs",
  8,
  // Theory Content
  `## Les Smite Fights

Un **Smite fight** est le moment crucial où deux junglers tentent de **secure** un objectif majeur avec leur Smite.

## Pourquoi c'est crucial

Importance du Smite fight :
- **Dragon** et **Baron** changent les parties
- Un Smite raté peut **perdre** la partie
- C'est souvent le moment de **plus haute tension**
- Le meilleur smiter gagne des avantages

## Dégâts de Smite

Valeurs à connaître :
- Dégâts **augmentent** avec le niveau
- À niveau 1 : **600** dégâts
- À niveau 18 : **1200** dégâts
- Vérifez vos dégâts dans la barre de sort

## Technique de Smite

Comment bien smiter :
- Regardez les **PV** de l'objectif
- Anticipez les **dégâts** de votre équipe
- Smite quand les PV = vos **dégâts de Smite**
- Combinez avec un **sort** si possible pour burst

## Facteurs de réussite

Ce qui influence le Smite :
- Votre **timing** et réactivité
- Les **CC** sur vous (peuvent vous empêcher)
- Le **burst** de votre équipe
- L'angle de **vision** (voir les PV)

## Conseils

Améliorer vos Smite fights :
- Pratiquez en **Practice Tool**
- Gardez Smite **disponible** avant un objectif
- **Communiquez** avec l'équipe pour le burst
- En cas de **50/50**, c'est du gambling`,

  // Practice Instructions
  `## Objectif

Améliorer votre timing de Smite sur les objectifs.

## Étapes

1. En Practice Tool, pratiquez Smite sur Dragon
2. Essayez de smiter exactement au bon moment
3. Combinez Smite avec un sort pour plus de burst
4. Pratiquez à différents niveaux pour connaître les dégâts
5. En partie, soyez vigilant avant les objectifs

## Critère de réussite

Vous sécurisez un objectif contesté avec un Smite précis.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un Smite fight ?",
      "Un duel 1v1",
      "Le moment où les junglers tentent de secure un objectif",
      "Un type de gank",
      "Un camp spécial",
      'b',
      "Smite fight = les junglers tentent de secure avec Smite."
    ),
    createQuestion(
      "Combien de dégâts fait Smite au niveau 1 ?",
      "400",
      "600",
      "900",
      "1200",
      'b',
      "Smite fait 600 dégâts au niveau 1."
    ),
    createQuestion(
      "Combien de dégâts fait Smite au niveau 18 ?",
      "600",
      "900",
      "1200",
      "1500",
      'c',
      "Smite fait 1200 dégâts au niveau 18."
    ),
    createQuestion(
      "Quand smiter un objectif ?",
      "Au début",
      "Quand les PV égalent les dégâts de Smite",
      "À la fin",
      "N'importe quand",
      'b',
      "Smite quand l'objectif a exactement vos dégâts de Smite en PV."
    ),
    createQuestion(
      "Combiner Smite avec un sort fait quoi ?",
      "Rien",
      "Augmente le burst pour mieux secure",
      "Annule le Smite",
      "Double les dégâts",
      'b',
      "Combiner augmente le burst total pour secure."
    ),
    createQuestion(
      "Qu'est-ce qui peut empêcher de smiter ?",
      "Rien",
      "Les CC (stun, silence, etc.)",
      "Le ping",
      "Les sbires",
      'b',
      "Les CC peuvent vous empêcher d'utiliser Smite."
    ),
    createQuestion(
      "Un 50/50 sur un objectif c'est quoi ?",
      "Un gank",
      "Quand les deux junglers peuvent smite et c'est du hasard",
      "Une victoire assurée",
      "Un type de ward",
      'b',
      "50/50 = les deux peuvent secure, c'est risqué."
    ),
    createQuestion(
      "Où voir les dégâts de Smite ?",
      "Nulle part",
      "Dans la barre du sort Smite",
      "Sur Tab",
      "Dans les paramètres",
      'b',
      "Le tooltip de Smite montre les dégâts actuels."
    ),
    createQuestion(
      "Faut-il garder Smite pour les objectifs ?",
      "Non, spam sur les camps",
      "Oui, gardez une charge avant un objectif",
      "Jamais",
      "Seulement Baron",
      'b',
      "Gardez toujours Smite pour les objectifs majeurs."
    ),
    createQuestion(
      "Comment améliorer son Smite ?",
      "Chance",
      "Pratiquer le timing en Practice Tool",
      "Impossible",
      "Changer de champion",
      'b',
      "La pratique améliore le timing du Smite."
    ),
  ]
);
