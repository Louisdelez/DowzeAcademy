import { createModule, createQuestion } from '../utils';

export const module11MagicPen = createModule(
  'Objets de pénétration magique',
  'magic-pen-items',
  'Réduire la RM ennemie',
  11,
  // Theory Content
  `## La pénétration magique

La **pénétration magique** permet d'ignorer une partie de la **Résistance Magique** (RM) ennemie, augmentant vos dégâts AP.

## Types de pénétration magique

Deux formes existent :
- **Pénétration fixe** : Ignore X points de RM (meilleur contre squishies)
- **Pénétration %** : Ignore X% de la RM (meilleur contre tanks)

## Objets de pénétration fixe

Pour les cibles fragiles :
- **Chaussures de sorcier** : +18 pénétration magique
- **Shadowflame** : AP + pénétration magique
- **Stormsurge** : AP + pénétration + explosion

## Objets de pénétration %

Pour les tanks qui stack la RM :
- **Void Staff** : +45% pénétration magique
- Essentiel contre les ennemis qui construisent RM

## Quand construire quoi ?

Stratégie de build :
- **Tous les mages** : Chaussures de sorcier (toujours utiles)
- **Contre squishies** : Pénétration fixe suffit souvent
- **Contre tanks/RM** : Void Staff obligatoire

## Récapitulatif

- Pénétration magique = ignorer la RM
- Fixe (chiffre) vs % (pourcentage)
- Sorcier boots = pénétration de base
- Shadowflame/Stormsurge pour les squishies
- Void Staff contre les tanks`,

  // Practice Instructions
  `## Objectif

Comprendre quand construire de la pénétration magique.

## Étapes

1. Jouez un mage et achetez toujours Chaussures de sorcier
2. Contre une équipe squishy, achetez Shadowflame
3. Contre un tank qui build RM, achetez Void Staff
4. Comparez les dégâts avec et sans pénétration
5. Notez l'impact sur différents types d'ennemis

## Critère de réussite

Vous savez quand acheter pénétration fixe vs pourcentage.`,

  // Questions
  [
    createQuestion(
      "Que permet la pénétration magique ?",
      "D'augmenter l'AP",
      "D'ignorer une partie de la RM ennemie",
      "De gagner du mana",
      "De se soigner",
      'b',
      "La pénétration magique ignore la Résistance Magique."
    ),
    createQuestion(
      "Les Chaussures de sorcier donnent combien de pénétration ?",
      "+10",
      "+15",
      "+18",
      "+25",
      'c',
      "Les Chaussures de sorcier donnent +18 pénétration magique."
    ),
    createQuestion(
      "Void Staff donne combien de pénétration % ?",
      "25%",
      "35%",
      "45%",
      "55%",
      'c',
      "Void Staff ignore 45% de la RM ennemie."
    ),
    createQuestion(
      "Contre les squishies, quel type de pénétration est meilleur ?",
      "Pénétration %",
      "Pénétration fixe",
      "Les deux également",
      "Aucune n'est utile",
      'b',
      "La pénétration fixe est plus efficace contre les cibles low RM."
    ),
    createQuestion(
      "Contre les tanks, quel type de pénétration est meilleur ?",
      "Pénétration fixe",
      "Pénétration %",
      "Les deux également",
      "Aucune n'est utile",
      'b',
      "La pénétration % est meilleure contre les hautes RM."
    ),
    createQuestion(
      "Shadowflame donne quoi ?",
      "Seulement pénétration",
      "AP + pénétration fixe",
      "Seulement AP",
      "Mana + pénétration",
      'b',
      "Shadowflame combine AP et pénétration magique fixe."
    ),
    createQuestion(
      "Un mage doit-il toujours prendre Chaussures de sorcier ?",
      "Non, jamais",
      "Oui, c'est presque toujours le meilleur choix",
      "Seulement en late game",
      "Seulement contre les tanks",
      'b',
      "Les Sorcier sont le choix standard pour les mages."
    ),
    createQuestion(
      "Si l'ennemi a 30 RM, 18 pénétration fixe fait quoi ?",
      "Il a 0 RM effective",
      "Il a environ 12 RM effective",
      "Rien ne change",
      "Il gagne de la RM",
      'b',
      "30 RM - 18 pénétration = environ 12 RM effective."
    ),
    createQuestion(
      "Quand Void Staff devient-il indispensable ?",
      "Toujours",
      "Quand 2+ ennemis ont beaucoup de RM",
      "Jamais",
      "Seulement en 1v1",
      'b',
      "Void Staff est crucial quand l'ennemi stack la RM."
    ),
    createQuestion(
      "La pénétration peut-elle réduire la RM sous 0 ?",
      "Oui, on fait plus de dégâts",
      "Non, elle s'arrête à 0",
      "Seulement avec Void Staff",
      "Seulement contre les sbires",
      'b',
      "La pénétration ne peut pas réduire la RM sous 0."
    ),
  ]
);
