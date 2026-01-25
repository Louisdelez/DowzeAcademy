import { createModule, createQuestion } from '../utils';

export const module02AdcChampions = createModule(
  'Champions ADC typiques',
  'adc-champions',
  'Découvrir les champions ADC : tireurs fragiles avec un haut DPS',
  2,
  // Theory Content (5+ slides)
  `## Les catégories de champions ADC

Les champions ADC se divisent en plusieurs catégories selon leur style de jeu :

- **Tireurs classiques** : Jinx, Caitlyn, Ashe - longue portée, dégâts constants
- **Tireurs mobiles** : Ezreal, Lucian, Vayne - dashers avec burst
- **Tireurs de zone** : Miss Fortune, Xayah, Aphelios - dégâts de zone en teamfight
- **Tireurs utilitaires** : Ashe, Varus, Jhin - CC et utility en plus des dégâts

## Les tireurs pour débutants

Certains ADC sont plus accessibles pour apprendre le rôle :

**Ashe** - Parfaite pour débuter :
- Ralentissement passif facilitant le kiting
- Ultime global avec stun
- Vision gratuite avec son E

**Miss Fortune** - Dégâts faciles :
- Compétences simples à utiliser
- Ultime dévastateur en teamfight
- Forte en lane avec son Q

**Jinx** - Hypercarry accessible :
- Portée variable avec Q
- Reset sur les kills
- Scaling excellent

## Les tireurs avancés

Les ADC mécaniquement exigeants demandent plus de pratique :

**Vayne** - La chasseuse de tanks :
- Mobilité avec Q (Tumble)
- Dégâts vrais avec W (passive)
- Condamnation murale avec E

**Draven** - Le gladiateur :
- Axes tournoyantes à rattraper
- Snowball agressif
- Mécanique unique et punitive

**Aphelios** - Le complexe :
- 5 armes différentes
- Combinaisons multiples
- Courbe d'apprentissage élevée

## Caractéristiques communes des ADC

Tous les ADC partagent certaines caractéristiques :

- **Faible résistance** : 20-30 d'armure de base
- **Dégâts AD élevés** : Scaling avec les objets de crit
- **Portée d'attaque** : 500-650 unités généralement
- **Dépendance aux objets** : 2-3 objets pour être efficace
- **Vulnérabilité au CC** : Un stun = mort potentielle

## Récapitulatif

- **4 catégories** : classiques, mobiles, zone, utilitaires
- Champions **débutants** : Ashe, Miss Fortune, Jinx
- Champions **avancés** : Vayne, Draven, Aphelios
- Tous les ADC sont **fragiles** mais ont un **DPS élevé**
- Le choix dépend de votre **style de jeu** et de la **composition d'équipe**`,

  // Practice Instructions
  `## Objectif

Explorer les différents types de champions ADC et identifier leurs caractéristiques uniques.

## Étapes

1. Lancez le client League of Legends et allez dans la Collection
2. Filtrez par rôle "Tireur" (Marksman)
3. Lisez les compétences de 3 ADC différents : Ashe, Jinx et Vayne
4. Notez leurs différences de portée et de mobilité
5. Lancez une partie d'entraînement avec chacun pour tester leurs compétences

## Critère de réussite

Vous pouvez expliquer la différence principale entre un ADC classique (Ashe) et un ADC mobile (Vayne).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel champion ADC est recommandé pour les débutants ?",
      "Draven",
      "Aphelios",
      "Ashe",
      "Kalista",
      'c',
      "Ashe est idéale pour débuter grâce à son kit simple et son ralentissement passif."
    ),
    createQuestion(
      "Quelle est la caractéristique principale de Vayne ?",
      "Dégâts de zone massifs",
      "Longue portée d'attaque",
      "Dégâts vrais et mobilité",
      "Contrôle de foule global",
      'c',
      "Vayne est connue pour ses dégâts vrais (W) et sa mobilité avec Tumble (Q)."
    ),
    createQuestion(
      "Quel type d'ADC est Miss Fortune ?",
      "Tireur mobile",
      "Tireur de zone",
      "Tireur tank",
      "Tireur support",
      'b',
      "Miss Fortune est un tireur de zone grâce à son ultime Bullet Time qui couvre une large zone."
    ),
    createQuestion(
      "Quelle est la mécanique unique de Draven ?",
      "Changer d'armes",
      "Rattraper ses haches tournoyantes",
      "Invoquer des clones",
      "Se rendre invisible",
      'b',
      "Draven doit rattraper ses Spinning Axes pour maximiser ses dégâts, une mécanique exigeante."
    ),
    createQuestion(
      "Combien d'armes Aphelios possède-t-il ?",
      "3 armes",
      "4 armes",
      "5 armes",
      "6 armes",
      'c',
      "Aphelios possède 5 armes différentes qu'il alterne pendant la partie."
    ),
    createQuestion(
      "Quel ADC possède un ultime global ?",
      "Vayne",
      "Draven",
      "Ashe",
      "Lucian",
      'c',
      "Ashe possède Enchanted Crystal Arrow, un ultime qui traverse toute la carte."
    ),
    createQuestion(
      "Quelle caractéristique partagent tous les champions ADC ?",
      "Une grande résistance",
      "Une faible portée",
      "Une faible résistance mais des dégâts élevés",
      "Beaucoup de contrôle de foule",
      'c',
      "Tous les ADC sont fragiles mais compensent par des dégâts physiques élevés."
    ),
    createQuestion(
      "Quel ADC est considéré comme un 'hypercarry' ?",
      "Miss Fortune",
      "Jinx",
      "Jhin",
      "Varus",
      'b',
      "Jinx est une hypercarry qui devient extrêmement puissante en late game avec ses resets."
    ),
    createQuestion(
      "Pourquoi Ezreal est-il classé comme tireur mobile ?",
      "Il a une grande vitesse de déplacement de base",
      "Son E lui permet de dash fréquemment",
      "Il peut voler",
      "Il a un passif de mouvement",
      'b',
      "Ezreal possède Arcane Shift (E), un dash sur un court cooldown qui le rend très mobile."
    ),
    createQuestion(
      "Quel ADC offre de l'utilité grâce à ses ralentissements ?",
      "Draven",
      "Vayne",
      "Ashe",
      "Kai'Sa",
      'c',
      "Ashe ralentit ses cibles avec chaque auto-attaque grâce à son passif Frost Shot."
    ),
  ]
);
