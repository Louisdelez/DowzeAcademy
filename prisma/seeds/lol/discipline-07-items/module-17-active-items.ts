import { createModule, createQuestion } from '../utils';

export const module17ActiveItems = createModule(
  'Objets à activation puissante',
  'active-items',
  'Zhonya, Protoceinture et autres actifs',
  17,
  // Theory Content
  `## Les objets à actif

Certains objets ont des **actifs** puissants qui peuvent changer l'issue d'un combat. Savoir les utiliser est une compétence essentielle.

## Zhonya's Hourglass

L'actif le plus iconique :
- Met en **Stasis** pendant 2.5 secondes
- **Invulnérable** mais immobile et ne peut rien faire
- Permet de survivre aux burst et tourelles
- Cooldown : 120 secondes
- Touche par défaut : selon l'emplacement (1-7)

## Hextech Rocketbelt

Pour les mages et assassins AP :
- **Dash** vers l'avant + dégâts
- Bon pour engage ou échapper
- Ajoute de la mobilité aux champions sans dash

## Galeforce

Pour les ADC :
- **Dash** + dégâts sur la cible la plus basse en PV
- Mobilité précieuse pour les ADC immobiles
- Permet d'esquiver ou finir

## Autres actifs notables

- **Youmuu's** : Burst de vitesse (AD assassins)
- **Goredrinker** : Soin de zone (bruisers)
- **Prowler's Claw** : Dash vers un ennemi

## Conseils d'utilisation

Pour bien utiliser les actifs :
- Mettre sur une touche **facile d'accès**
- **Pratiquer** le timing en Practice Tool
- Ne pas **oublier** de les utiliser !

## Récapitulatif

- Actifs = capacités bonus des objets
- Zhonya = survie, Rocketbelt = mobilité AP
- Galeforce = mobilité ADC
- Mettre sur des touches accessibles
- Pratiquer le timing est crucial`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser les objets à actif efficacement.

## Étapes

1. Jouez un mage et achetez Zhonya's Hourglass
2. Utilisez Zhonya quand un assassin vous engage
3. Jouez un mage avec Hextech Rocketbelt
4. Utilisez le dash pour engage ou échapper
5. Configurez vos touches pour accès rapide

## Critère de réussite

Vous utilisez les actifs de manière réflexe au bon moment.`,

  // Questions
  [
    createQuestion(
      "Que fait l'actif de Zhonya's Hourglass ?",
      "Soigne",
      "Met en Stasis (invulnérable mais immobile)",
      "Donne un dash",
      "Augmente l'AP",
      'b',
      "Zhonya met en Stasis pendant 2.5 secondes."
    ),
    createQuestion(
      "Peut-on agir pendant la Stasis de Zhonya ?",
      "Oui, on peut lancer des sorts",
      "Non, on ne peut rien faire",
      "On peut bouger",
      "On peut attaquer",
      'b',
      "Pendant Stasis, vous êtes invulnérable mais ne pouvez rien faire."
    ),
    createQuestion(
      "Hextech Rocketbelt fait quoi ?",
      "Met en Stasis",
      "Dash vers l'avant + dégâts",
      "Soigne",
      "Donne un bouclier",
      'b',
      "Rocketbelt fait un court dash et inflige des dégâts."
    ),
    createQuestion(
      "Galeforce est principalement pour qui ?",
      "Les mages",
      "Les ADC",
      "Les tanks",
      "Les supports",
      'b',
      "Galeforce donne de la mobilité aux ADC."
    ),
    createQuestion(
      "Pourquoi Zhonya est populaire sur les mages ?",
      "Il donne beaucoup d'AP",
      "Il permet de survivre au burst ennemi",
      "Il donne du mana",
      "Il est obligatoire",
      'b',
      "Zhonya offre une survie cruciale contre les assassins."
    ),
    createQuestion(
      "Quel est le cooldown de Zhonya ?",
      "60 secondes",
      "90 secondes",
      "120 secondes",
      "180 secondes",
      'c',
      "Zhonya a un cooldown de 120 secondes."
    ),
    createQuestion(
      "Que faire si on oublie souvent d'utiliser les actifs ?",
      "Ne pas acheter ces objets",
      "Les mettre sur des touches faciles et pratiquer",
      "C'est normal",
      "Abandonner",
      'b',
      "La pratique et des binds accessibles aident à ne pas oublier."
    ),
    createQuestion(
      "Prowler's Claw fait quoi ?",
      "Stasis",
      "Dash vers un champion ennemi",
      "Bouclier",
      "Soin",
      'b',
      "Prowler's Claw est un dash ciblé vers un ennemi."
    ),
    createQuestion(
      "Youmuu's Ghostblade actif fait quoi ?",
      "Dash",
      "Boost de vitesse de déplacement",
      "Stasis",
      "Soins",
      'b',
      "Youmuu's donne un burst de vitesse pour roam ou chasing."
    ),
    createQuestion(
      "Peut-on utiliser Zhonya sous tourelle ennemie ?",
      "Non",
      "Oui, pour survivre aux tirs de tourelle",
      "La tourelle continue de vous toucher",
      "Seulement certaines tourelles",
      'b',
      "Zhonya peut sauver sous tourelle pendant un dive."
    ),
  ]
);
