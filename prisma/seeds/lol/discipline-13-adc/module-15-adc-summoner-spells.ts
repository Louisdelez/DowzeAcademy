import { createModule, createQuestion } from '../utils';

export const module15AdcSummonerSpells = createModule(
  "Choix du sort d'ADC",
  'adc-summoner-spells',
  'Choisir entre Heal, Barrière et Cleanse selon la situation',
  15,
  // Theory Content (5+ slides)
  `## Les sorts d'invocateur pour ADC

Les ADC prennent toujours **Flash** + un deuxième sort défensif. Les options principales :

- **Heal** : Le choix standard (souvent partagé avec le support)
- **Barrière** : Protection personnelle contre le burst
- **Cleanse** : Contre les équipes à fort CC
- **Exhaust** : Rare, contre les assassins

Le bon choix dépend de la composition ennemie.

## Heal : le choix par défaut

**Heal** est le sort le plus commun pour l'ADC :

**Avantages** :
- Soigne vous ET un allié proche
- Donne un petit boost de vitesse
- Peut sauver votre support aussi

**Inconvénients** :
- Réduit par Ignite (40% de réduction)
- Moins efficace contre le burst one-shot
- Partage souvent avec le support (un seul efficace)

**Quand le prendre** : Par défaut, quand rien ne justifie autre chose.

## Barrière : contre le burst

**Barrière** offre un bouclier personnel :

**Avantages** :
- Bouclier plus gros que le heal sur une personne
- Non affecté par Ignite
- Meilleur contre le burst instantané

**Inconvénients** :
- Ne protège que vous (pas le support)
- Pas de vitesse de mouvement
- Dure seulement 2.5 secondes

**Quand le prendre** : Contre Zed, Talon, burst mages, ou si le support a déjà Heal.

## Cleanse : contre le CC

**Cleanse** retire les CC et effets d'invocateur :

**Avantages** :
- Retire stuns, roots, slows, blinds
- Retire aussi Ignite et Exhaust
- Indispensable contre certaines compositions

**Inconvénients** :
- N'offre aucune protection contre les dégâts
- Inutile si mal timé
- Ne retire pas les suppressions (Malzahar R, Warwick R)

**Quand le prendre** : Contre Ashe, Leona, Morgana, TF, Lissandra.

## Récapitulatif

- **Heal** : choix par défaut, soigne et boost
- **Barrière** : contre le burst (Zed, assassins)
- **Cleanse** : contre le CC (Ashe R, Leona)
- **Flash** : toujours obligatoire
- Adaptez votre choix à la **composition ennemie**
- Coordonnez avec votre **support** (évitez double Heal)`,

  // Practice Instructions
  `## Objectif

Apprendre à choisir le bon sort d'invocateur selon la composition ennemie.

## Étapes

1. Pendant le champ select, analysez l'équipe ennemie
2. Identifiez la principale menace (burst ? CC ?)
3. Choisissez Heal (défaut), Barrière (burst), ou Cleanse (CC)
4. Communiquez avec votre support pour éviter le double Heal
5. En jeu, utilisez le sort au moment approprié

## Critère de réussite

Vous avez choisi un sort adapté à la composition ennemie et l'avez utilisé efficacement au moins une fois.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel sort d'invocateur est toujours obligatoire pour l'ADC ?",
      "Heal",
      "Flash",
      "Barrier",
      "Teleport",
      'b',
      "Flash est indispensable pour l'ADC, c'est son principal outil d'évasion."
    ),
    createQuestion(
      "Quel est le sort par défaut pour l'ADC ?",
      "Barrière",
      "Cleanse",
      "Heal",
      "Exhaust",
      'c',
      "Heal est le choix standard qui offre soin et vitesse de mouvement."
    ),
    createQuestion(
      "Quel est l'avantage de Barrière sur Heal ?",
      "Il soigne un allié",
      "Il offre un bouclier plus gros non affecté par Ignite",
      "Il dure plus longtemps",
      "Il donne plus de vitesse",
      'b',
      "Barrière donne un bouclier plus important et n'est pas réduit par Ignite."
    ),
    createQuestion(
      "Quand prendre Cleanse ?",
      "Contre les assassins",
      "Contre les équipes avec beaucoup de CC",
      "Contre les tanks",
      "Toujours",
      'b',
      "Cleanse est essentiel contre les compositions riches en CC (Ashe, Leona, etc.)."
    ),
    createQuestion(
      "Que NE retire PAS Cleanse ?",
      "Les stuns",
      "Les roots",
      "Les suppressions (Malzahar R)",
      "Ignite",
      'c',
      "Cleanse ne peut pas retirer les suppressions comme l'ultime de Malzahar."
    ),
    createQuestion(
      "Pourquoi éviter le double Heal avec le support ?",
      "C'est illégal",
      "Le deuxième Heal est significativement réduit",
      "Ça utilise trop de mana",
      "Ce n'est pas vraiment un problème",
      'b',
      "Deux Heals utilisés coup sur coup voient le second fortement réduit."
    ),
    createQuestion(
      "Contre quel champion Barrière est-elle recommandée ?",
      "Soraka",
      "Zed",
      "Nami",
      "Janna",
      'b',
      "Barrière est efficace contre le burst instantané de Zed."
    ),
    createQuestion(
      "Combien de temps dure le bouclier de Barrière ?",
      "1 seconde",
      "2.5 secondes",
      "5 secondes",
      "10 secondes",
      'b',
      "Le bouclier de Barrière dure 2.5 secondes."
    ),
    createQuestion(
      "Quel avantage supplémentaire offre Heal ?",
      "Un bouclier",
      "Un boost de vitesse de mouvement",
      "De la résistance magique",
      "Du vol de vie",
      'b',
      "Heal offre un petit boost de vitesse de mouvement en plus du soin."
    ),
    createQuestion(
      "Contre quelle composition Cleanse est-il inutile ?",
      "Équipe full AD sans CC",
      "Équipe avec Ashe et Leona",
      "Équipe avec Morgana",
      "Équipe avec Twisted Fate",
      'a',
      "Sans CC significatif, Cleanse n'a pas de valeur et Heal/Barrière sont meilleurs."
    ),
  ]
);
