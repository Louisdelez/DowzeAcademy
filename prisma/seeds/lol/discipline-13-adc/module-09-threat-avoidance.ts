import { createModule, createQuestion } from '../utils';

export const module09ThreatAvoidance = createModule(
  'Contourner les menaces',
  'threat-avoidance',
  'Éviter les hooks, engages et compétences dangereuses',
  9,
  // Theory Content (5+ slides)
  `## Identifier les menaces

En tant qu'ADC, vous êtes la cible prioritaire. Vous devez **identifier** toutes les menaces :

**Compétences à éviter absolument** :
- **Hooks** : Blitzcrank Q, Thresh Q, Nautilus Q, Pyke Q
- **Engages** : Leona E, Alistar W+Q, Rakan W
- **Stuns** : Morgana Q, Lux Q, Ashe R
- **Zones dangereuses** : Zyra E, Nami Q

**Champions assassins** :
- Zed, Talon, Katarina (mid lane)
- Kha'Zix, Rengar, Evelynn (jungle)

## La technique de l'esquive

Pour esquiver efficacement :

**Mouvement imprévisible** :
- Ne marchez pas en **ligne droite**
- Changez de direction **aléatoirement**
- Utilisez les **jukes** (faux mouvements)

**Lecture des animations** :
- Observez les **animations de sort** ennemies
- Anticipez quand ils vont cast (positionnement, cooldowns)
- Réagissez au **début** de l'animation, pas à la fin

## Utiliser le terrain

Le terrain est votre **allié** :

**Les sbires** :
- Restez derrière eux pour bloquer les skillshots
- Attention aux espaces dans la wave

**Les murs** :
- Longez les murs pour réduire les angles d'attaque
- Certains hooks peuvent passer par-dessus (Thresh lantern)

**Les buissons** :
- Utilisez-les pour cacher vos mouvements
- Attention aux wards ennemis

## Gérer les Flash et dashes

Vos outils d'évasion sont **précieux** :

**Quand utiliser Flash** :
- Pour esquiver un CC mortel (hook, stun)
- Pour survivre à un gank
- En dernier recours, pas en premier

**Quand utiliser votre dash (E de Vayne, E d'Ezreal)** :
- Pour repositionner pendant un fight
- Pour esquiver une compétence clé
- Gardez-le si un assassin est MIA

## Récapitulatif

- **Identifiez** toutes les menaces avant le fight
- Pratiquez l'**esquive** avec des mouvements imprévisibles
- Utilisez le **terrain** (sbires, murs, buissons)
- Gérez vos **outils d'évasion** (Flash, dash) avec parcimonie
- L'**anticipation** vaut mieux que la réaction`,

  // Practice Instructions
  `## Objectif

Pratiquer l'esquive des skillshots en observant les animations ennemies.

## Étapes

1. Jouez une partie contre une équipe avec des skillshots (Blitz, Morgana, Lux)
2. Concentrez-vous sur l'observation des animations de cast
3. Bougez de façon imprévisible, jamais en ligne droite
4. Comptez combien de skillshots vous évitez vs combien vous touchent
5. Essayez d'améliorer votre ratio à chaque partie

## Critère de réussite

Vous avez esquivé plus de 50% des skillshots ciblés pendant la phase de lane.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle compétence doit être évitée à tout prix ?",
      "Les auto-attaques",
      "Les hooks (Blitzcrank Q, Thresh Q)",
      "Les sorts de heal",
      "Les buffs alliés",
      'b',
      "Les hooks peuvent vous repositionner dans l'équipe ennemie et causer votre mort."
    ),
    createQuestion(
      "Comment bouger pour éviter les skillshots ?",
      "En ligne droite",
      "De façon imprévisible avec des changements de direction",
      "Rester immobile",
      "Toujours vers l'arrière",
      'b',
      "Les mouvements imprévisibles rendent plus difficile pour l'ennemi de viser."
    ),
    createQuestion(
      "Que pouvez-vous utiliser pour bloquer les hooks ?",
      "Votre support uniquement",
      "Les sbires",
      "La tourelle ennemie",
      "Rien ne peut les bloquer",
      'b',
      "Les sbires bloquent la plupart des hooks (Blitz Q, Thresh Q, Morgana Q)."
    ),
    createQuestion(
      "Quand devez-vous utiliser Flash ?",
      "Pour chaque trade",
      "Pour esquiver un CC mortel en dernier recours",
      "Au début de chaque fight",
      "Pour farm plus vite",
      'b',
      "Flash doit être gardé pour les situations critiques où votre vie est en danger."
    ),
    createQuestion(
      "Quel type de champion cible prioritairement l'ADC ?",
      "Les tanks",
      "Les assassins",
      "Les supports",
      "Les autres ADC",
      'b',
      "Les assassins (Zed, Talon, Rengar) cherchent à éliminer l'ADC en priorité."
    ),
    createQuestion(
      "Comment lire les animations ennemies ?",
      "Ignorer les animations",
      "Observer le début de l'animation et réagir immédiatement",
      "Attendre que le sort soit lancé",
      "Fermer les yeux",
      'b',
      "Réagir au début de l'animation vous donne plus de temps pour esquiver."
    ),
    createQuestion(
      "Pourquoi garder votre dash si un assassin est MIA ?",
      "Pour le style",
      "Pour vous échapper s'il apparaît",
      "Ce n'est pas nécessaire",
      "Pour farm plus vite",
      'b',
      "Garder votre dash vous permet de survivre à une apparition surprise d'un assassin."
    ),
    createQuestion(
      "Quel est l'avantage d'utiliser les murs ?",
      "Ils donnent de l'armure",
      "Ils réduisent les angles d'attaque possibles",
      "Ils bloquent la vision",
      "Ils augmentent vos dégâts",
      'b',
      "Longer les murs limite les directions d'où peuvent venir les menaces."
    ),
    createQuestion(
      "Que vaut-il mieux : anticiper ou réagir ?",
      "Toujours réagir",
      "L'anticipation vaut mieux que la réaction",
      "Ni l'un ni l'autre",
      "Ignorer les menaces",
      'b',
      "Anticiper les compétences vous donne plus de temps pour vous positionner."
    ),
    createQuestion(
      "Quelle compétence traverse les sbires ?",
      "Blitzcrank Q",
      "Thresh Q",
      "Leona E",
      "Morgana Q",
      'c',
      "Leona E (Zenith Blade) traverse les sbires contrairement aux hooks classiques."
    ),
  ]
);
