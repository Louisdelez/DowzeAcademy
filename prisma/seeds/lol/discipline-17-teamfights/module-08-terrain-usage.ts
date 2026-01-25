import { createModule, createQuestion } from '../utils';

export const module08TerrainUsage = createModule(
  'Terrain de jeu',
  'terrain-usage',
  "Exploiter les différences entre combattre en jungle et en lane ouverte",
  8,
  // Theory Content (5+ slides)
  `## L'impact du terrain sur les teamfights

Où vous combattez est **aussi important** que comment vous combattez. Un combat dans la jungle étroite est radicalement différent d'un combat en lane ouverte. Le terrain avantage certaines compositions.

## Combat en jungle : avantages et inconvénients

**Avantages de la jungle :**
- Couloirs étroits = skillshots faciles à toucher
- Murs = limites la mobilité ennemie
- Choke points = parfaits pour les ultis de zone
- Buissons = embuscades possibles

**Inconvénients :**
- Difficile de kiter pour les ADC
- Peu d'espace pour éviter les CC de zone

## Combat en lane : avantages et inconvénients

**Avantages de la lane :**
- Espace pour kiter et esquiver
- Pas de murs pour bloquer les retraites
- Visibilité totale (pas de buissons)
- Meilleur pour les compositions poke

**Inconvénients :**
- Skillshots plus faciles à esquiver
- Les flanks sont plus visibles

## Champions favorisés par le terrain

**Jungle fighters :**
- Rumble, Miss Fortune, Kennen (ultis de zone)
- Jarvan, Orianna (control de zone)
- Varus, Cho'Gath (skillshots en ligne)

**Lane fighters :**
- Jinx, Ezreal (mobilité et kiting)
- Xerath, Lux (poke à distance)
- Vayne, Kalista (espace pour manoeuvrer)

## Forcer le combat sur votre terrain

Stratégies :
- Si vous êtes forts en jungle : wardez et forcez les fights dans la river/jungle
- Si vous êtes forts en lane : poussez et combattez près des tourelles
- Contestez les objectifs selon votre composition
- Évitez les combats sur le terrain adverse

## Le "choke point"

Un **choke point** est un passage étroit où l'équipe adverse est obligée de passer :
- Parfait pour les embuscades
- Idéal pour les ultis de zone
- Force l'ennemi à se regrouper
- Exemples : entrées de jungle, river, pits de Dragon/Baron`,

  // Practice Instructions
  `## Objectif

Apprendre à choisir et exploiter le terrain favorable pour vos teamfights.

## Étapes

1. En draft, identifiez si votre composition préfère la jungle ou la lane
2. Pendant la partie, choisissez consciemment où vous voulez combattre
3. Wardez les zones où vous voulez forcer le combat
4. Si vous êtes forts en jungle : contrôlez les choke points
5. Si vous êtes forts en lane : évitez les combats dans les couloirs
6. Après chaque fight, analysez : le terrain vous a-t-il favorisé ?

## Critère de réussite

Vous avez consciemment choisi le terrain d'au moins 3 combats et gagné au moins 2 d'entre eux en exploitant correctement l'environnement.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi le terrain est-il important en teamfight ?",
      "Il n'a aucune importance",
      "Différents terrains favorisent différentes compositions et playstyles",
      "Il affecte uniquement la vision",
      "Il change les statistiques des champions",
      'b',
      "Le terrain influence la capacité de kiter, de toucher les skillshots, et l'efficacité des ultis de zone."
    ),
    createQuestion(
      "Quel type de composition excelle dans les combats en jungle ?",
      "Les compositions poke à longue portée",
      "Les compositions avec des ultis de zone et du CC",
      "Les compositions split-push",
      "Les compositions avec beaucoup d'ADC",
      'b',
      "Les couloirs étroits de la jungle rendent les ultis de zone (Rumble, MF) et les CC beaucoup plus efficaces."
    ),
    createQuestion(
      "Quel est l'avantage principal de combattre en lane ouverte ?",
      "Plus de minions à farm",
      "Plus d'espace pour kiter, esquiver et manoeuvrer",
      "Plus de buissons pour se cacher",
      "Les tourelles font des dégâts bonus",
      'b',
      "L'espace ouvert permet aux ADC de kiter efficacement et aux joueurs d'esquiver les skillshots."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'choke point' ?",
      "Un point de respawn",
      "Un passage étroit où l'ennemi est obligé de passer",
      "La fontaine ennemie",
      "Le centre de la map",
      'b',
      "Les choke points sont des couloirs étroits parfaits pour les embuscades et les ultis de zone."
    ),
    createQuestion(
      "Quel champion est favorisé par les combats en jungle grâce à son ulti ?",
      "Ezreal",
      "Rumble avec son Equalizer",
      "Vayne",
      "Soraka",
      'b',
      "L'ultime de Rumble (Equalizer) est beaucoup plus efficace dans les couloirs étroits de la jungle."
    ),
    createQuestion(
      "Quel type de carry préfère généralement les combats en lane ouverte ?",
      "Les tanks",
      "Les ADC mobiles comme Jinx, Ezreal ou Vayne",
      "Les mages de zone",
      "Les assassins",
      'b',
      "Les ADC mobiles ont besoin d'espace pour kiter et esquiver, ce que la lane ouverte fournit."
    ),
    createQuestion(
      "Pourquoi les skillshots sont-ils plus efficaces en jungle ?",
      "Ils font plus de dégâts",
      "Les couloirs étroits rendent l'esquive plus difficile",
      "La jungle donne des buffs aux skillshots",
      "Ils ne sont pas plus efficaces",
      'b',
      "L'espace limité en jungle rend les skillshots plus faciles à toucher car l'ennemi a moins de place pour esquiver."
    ),
    createQuestion(
      "Si votre composition est forte en poke, où devriez-vous combattre ?",
      "Dans la jungle pour le burst",
      "En lane ouverte pour avoir de la distance et du temps",
      "Près du Nexus ennemi",
      "N'importe où",
      'b',
      "Les compositions poke ont besoin d'espace et de temps pour harceler, ce que la lane ouverte fournit."
    ),
    createQuestion(
      "Quel est le risque principal de combattre en jungle pour un ADC ?",
      "Moins de gold",
      "Difficulté à kiter et risque d'être pris au piège contre les murs",
      "Les monstres de jungle attaquent",
      "Moins de vision",
      'b',
      "Les couloirs étroits et les murs limitent la capacité de l'ADC à maintenir sa distance et à fuir."
    ),
    createQuestion(
      "Comment forcer un combat sur votre terrain favorable ?",
      "Attendre que l'ennemi vienne",
      "Warder et contrôler la zone où vous voulez combattre, puis y forcer un objectif",
      "Combattre n'importe où",
      "Uniquement attaquer les minions",
      'b',
      "Contrôler la vision et forcer des objectifs dans votre zone favorise permet de dicter où les combats ont lieu."
    ),
  ]
);
