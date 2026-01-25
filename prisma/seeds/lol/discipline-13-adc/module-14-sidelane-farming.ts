import { createModule, createQuestion } from '../utils';

export const module14SidelaneFarming = createModule(
  'Farm latéral en mid-game',
  'sidelane-farming',
  'Prendre les waves latérales de façon sécurisée en mid-game',
  14,
  // Theory Content (5+ slides)
  `## Pourquoi farmer les sidelanes ?

En mid-game, la **mid lane** devient contestée par toute l'équipe. L'ADC doit souvent aller **farmer les sidelanes** pour :

- Continuer à **accumuler de l'or**
- Atteindre ses **power spikes** plus vite
- Créer de la **pression** sur les côtés de la carte
- Éviter de partager le farm mid

Mais attention : les sidelanes sont **dangereuses** pour un ADC seul.

## Quand aller en sidelane

Choisissez le bon moment :

**Bon moment pour sidelane** :
- Votre équipe n'a pas besoin de vous (pas d'objectif imminent)
- Les ennemis dangereux sont **visibles** sur la carte
- La wave push vers vous (plus sûr)
- Vous avez vos cooldowns (Flash, dash)

**Mauvais moment** :
- Dragon/Baron spawn dans 1-2 minutes
- L'assassin ennemi est MIA
- La wave est deep dans le territoire ennemi
- Votre équipe engage mid

## Comment farmer en sécurité

Pour farmer les sidelanes en sécurité :

**Vision** :
- Demandez des wards dans la jungle adjacente
- Utilisez votre ward trinket
- Regardez constamment la **minimap**

**Positionnement** :
- Ne dépassez **jamais** la rivière sans vision
- Restez du côté de votre jungle
- Ayez un **chemin de fuite** planifié

**Timing** :
- Push vite et partez
- Ne restez pas pour la wave suivante
- Rejoignez l'équipe pour les objectifs

## Le concept de "catch waves"

**Catch waves** = récupérer les waves qui arrivent vers vous :

- Laissez la wave **slow push** vers vous
- Attendez qu'elle arrive à un endroit sûr
- Farmez-la rapidement
- Retournez avec l'équipe

C'est plus sûr que d'aller **chercher** les waves profondément.

## Récapitulatif

- **Sidelane** farming est nécessaire pour continuer à scale
- Choisissez le **bon moment** (pas d'objectifs, ennemis visibles)
- Gardez de la **vision** et surveillez la minimap
- Ne dépassez pas la **rivière** sans vision
- **Catch** les waves plutôt que d'aller les chercher
- Rejoignez l'équipe pour les **objectifs importants**`,

  // Practice Instructions
  `## Objectif

Apprendre à farmer les sidelanes de façon sécurisée en mid-game.

## Étapes

1. En mid-game, identifiez quand une sidelane a une wave à récupérer
2. Vérifiez que les menaces ennemies sont visibles sur la carte
3. Allez farmer la wave en restant de votre côté de la rivière
4. Push rapidement et retournez vers votre équipe
5. Ne mourez PAS pour du farm (priorité survie)

## Critère de réussite

Vous avez farmé au moins 3 waves en sidelane en mid-game sans mourir et sans manquer d'objectif d'équipe.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi l'ADC doit-il farmer les sidelanes en mid-game ?",
      "Pour éviter les teamfights",
      "Pour continuer à accumuler de l'or sans partager",
      "Pour aider le top laner",
      "Pour détruire les tourelles",
      'b',
      "Les sidelanes offrent du farm non contesté pour atteindre les power spikes."
    ),
    createQuestion(
      "Quand est-il sûr d'aller en sidelane ?",
      "Quand le Dragon spawn dans 30 secondes",
      "Quand les ennemis dangereux sont visibles sur la carte",
      "Quand l'assassin est MIA",
      "Quand votre équipe fight mid",
      'b',
      "Allez en sidelane quand vous pouvez voir les menaces et qu'aucun objectif n'est imminent."
    ),
    createQuestion(
      "Quelle limite ne devez-vous pas dépasser sans vision ?",
      "La tourelle T2",
      "La rivière",
      "La base ennemie",
      "Votre propre base",
      'b',
      "Ne dépassez jamais la rivière sans vision des environs."
    ),
    createQuestion(
      "Qu'est-ce que le 'catch waves' ?",
      "Pousser profondément la lane",
      "Récupérer les waves qui arrivent vers vous",
      "Voler le farm des alliés",
      "Ignorer les sbires",
      'b',
      "Catch waves consiste à laisser la wave venir vers vous plutôt que d'aller la chercher."
    ),
    createQuestion(
      "Que devez-vous demander avant d'aller en sidelane ?",
      "La permission du jungler",
      "Des wards dans la jungle adjacente",
      "De l'or supplémentaire",
      "Un buff",
      'b',
      "La vision dans la jungle vous permet de voir les rotations ennemies."
    ),
    createQuestion(
      "Que faire après avoir farmé une wave en sidelane ?",
      "Attendre la wave suivante",
      "Push rapidement et retourner vers l'équipe",
      "Commencer à split push",
      "Aller en jungle ennemie",
      'b',
      "Après avoir farmé, rejoignez votre équipe pour les objectifs et teamfights."
    ),
    createQuestion(
      "Pourquoi surveiller constamment la minimap en sidelane ?",
      "Pour voir le farm",
      "Pour détecter les rotations ennemies vers vous",
      "Pour voir vos coéquipiers",
      "Ce n'est pas nécessaire",
      'b',
      "La minimap vous avertit si des ennemis se dirigent vers votre position."
    ),
    createQuestion(
      "Quelle est la priorité si un objectif spawn et que vous êtes en sidelane ?",
      "Finir de farm la wave",
      "Rejoindre l'équipe pour l'objectif",
      "Continuer le split push",
      "Rappeler à la base",
      'b',
      "Les objectifs d'équipe sont prioritaires sur le farm en sidelane."
    ),
    createQuestion(
      "Pourquoi le sidelane farming est-il dangereux pour l'ADC ?",
      "Les sbires font trop de dégâts",
      "L'ADC seul est vulnérable aux collapses",
      "Il n'y a pas de tourelle",
      "Ce n'est pas dangereux",
      'b',
      "Un ADC isolé en sidelane peut facilement se faire tuer par plusieurs ennemis."
    ),
    createQuestion(
      "Quel est le meilleur côté de la lane pour se positionner ?",
      "Le côté ennemi",
      "Le côté de votre jungle",
      "Le milieu exact",
      "Peu importe",
      'b',
      "Restez du côté de votre jungle pour avoir un chemin de fuite sécurisé."
    ),
  ]
);
