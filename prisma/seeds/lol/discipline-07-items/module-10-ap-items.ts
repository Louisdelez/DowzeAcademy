import { createModule, createQuestion } from '../utils';

export const module10APItems = createModule(
  'Objets AP offensifs',
  'ap-offensive-items',
  'Puissance magique et mana',
  10,
  // Theory Content
  `## Les objets AP offensifs

Les objets **AP** (Ability Power) augmentent les dégâts magiques des sorts. Ils sont essentiels pour les mages et assassins AP.

## Stats clés AP

Les statistiques offensives AP :
- **Ability Power** : Augmente les dégâts des sorts
- **Mana** : Permet de lancer plus de sorts
- **Ability Haste** : Réduit les cooldowns
- **Pénétration magique** : Ignore la RM (module suivant)

## Objets AP emblématiques

Les objets classiques :
- **Rabadon's Deathcap** : +120 AP + 35% AP bonus
- **Shadowflame** : AP + pénétration magique
- **Void Staff** : 45% pénétration magique
- **Zhonya's Hourglass** : AP + armure + stasis active

## Objets de Mana

Pour les mages qui manquent de mana :
- **Luden's Tempest** : Mana + AP + proc de dégâts
- **Archangel's Staff** → **Seraph's Embrace** : Mana qui scale
- **Rod of Ages** : Stats qui augmentent avec le temps

## Objets Burst

Pour les assassins AP :
- **Hextech Rocketbelt** : Dash + dégâts
- **Night Harvester** : Dégâts bonus sur premiers coups

## Récapitulatif

- AP = dégâts des sorts magiques
- Rabadon = item AP ultime (gros boost d'AP)
- Zhonya = survie essentielle
- Mana items pour les mages gourmands
- Void Staff contre les RM élevées`,

  // Practice Instructions
  `## Objectif

Comprendre les objets AP et leur utilisation.

## Étapes

1. Jouez un mage (Lux ou Syndra)
2. Achetez Luden's Tempest et observez les procs
3. Achetez Rabadon et notez le boost d'AP
4. Utilisez Zhonya en combat pour survivre
5. Contre un ennemi qui stack la RM, achetez Void Staff

## Critère de réussite

Vous savez quels objets AP acheter et quand.`,

  // Questions
  [
    createQuestion(
      "Que signifie AP ?",
      "Attack Power",
      "Ability Power",
      "Armor Points",
      "Auto Power",
      'b',
      "AP = Ability Power, la puissance magique."
    ),
    createQuestion(
      "Rabadon's Deathcap est connu pour quoi ?",
      "Beaucoup de mana",
      "Énormément d'AP (+35% bonus)",
      "De l'armure",
      "Du lifesteal",
      'b',
      "Rabadon amplifie tout votre AP de 35%."
    ),
    createQuestion(
      "Zhonya's Hourglass fait quoi de spécial ?",
      "Augmente la vitesse",
      "Rend invulnérable pendant 2.5 secondes (stasis)",
      "Donne de l'invisibilité",
      "Soigne",
      'b',
      "Zhonya met en stasis : invulnérable mais ne peut rien faire."
    ),
    createQuestion(
      "Luden's Tempest est bon pour quels mages ?",
      "Les tanks AP",
      "Les mages qui veulent du mana et du burst",
      "Les supports",
      "Les ADC",
      'b',
      "Luden's donne mana, AP et un proc de dégâts en écho."
    ),
    createQuestion(
      "Void Staff ignore combien de RM ?",
      "20%",
      "35%",
      "45%",
      "60%",
      'c',
      "Void Staff ignore 45% de la résistance magique ennemie."
    ),
    createQuestion(
      "Contre un ennemi avec beaucoup de RM, que construire ?",
      "Plus d'AP pur",
      "Void Staff (pénétration %)",
      "Du mana",
      "De l'armure",
      'b',
      "La pénétration % est efficace contre les hautes RM."
    ),
    createQuestion(
      "L'Ability Haste fait quoi ?",
      "Plus de dégâts",
      "Réduit les temps de recharge des sorts",
      "Plus de mana",
      "Plus de vitesse",
      'b',
      "L'Ability Haste permet d'utiliser les sorts plus souvent."
    ),
    createQuestion(
      "Shadowflame donne quoi ?",
      "Seulement de l'AP",
      "AP et pénétration magique",
      "Mana et AP",
      "Défense et AP",
      'b',
      "Shadowflame combine AP et pénétration magique."
    ),
    createQuestion(
      "Un assassin AP comme Katarina préfère quoi ?",
      "Du mana",
      "Du burst (Hextech Rocketbelt, etc.)",
      "De la défense",
      "Du critique",
      'b',
      "Les assassins AP veulent du burst pour éliminer rapidement."
    ),
    createQuestion(
      "Archangel's Staff évolue en quoi ?",
      "Rabadon",
      "Seraph's Embrace",
      "Void Staff",
      "Zhonya",
      'b',
      "Archangel's devient Seraph's Embrace après avoir stacké du mana."
    ),
  ]
);
