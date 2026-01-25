import { createModule, createQuestion } from '../utils';

export const module04TeleportUsage = createModule(
  'Utilisation de Teleport',
  'teleport-usage',
  'TP stratégique pour impacter la carte',
  4,
  // Theory Content
  `## Teleport (TP)

**Teleport** est le sort d'invocateur signature des top laners. Bien l'utiliser peut changer l'issue d'une partie.

## Cooldown et restrictions

Fonctionnement actuel :
- **Cooldown** : 360 secondes (6 minutes)
- Ne peut TP que sur les **tourelles alliées** avant 14 min
- Après 14 min : TP sur **wards** et sbires possible
- Temps de channel : **4 secondes**

## Utilisations principales

Quand utiliser TP :
- Revenir en **lane** après un back
- Rejoindre un **teamfight** (après 14 min)
- Défendre une **tourelle** sous pression
- Flanquer dans un **combat** pour surprise
- Sauver un **objectif** (dragon, baron)

## Le TP de retour en lane

Usage précoce :
- Si vous devez **back tôt** (mauvais trade, gank)
- Pour ne pas **perdre de CS**
- Si l'ennemi **freeze** et vous zone
- Attention : CD long, vous n'aurez pas de TP pour un fight

## Le TP offensif (après 14 min)

Pour impacter la carte :
- TP sur un **ward derrière** les ennemis
- Rejoindre un fight **en cours**
- TP pour un **dragon** ou **baron** contest
- Créer des supériorités **numériques**

## Erreurs courantes

Ce qu'il ne faut pas faire :
- TP sur un combat **déjà perdu**
- TP sans **impact** prévu
- Utiliser TP alors que vous pouviez **marcher**
- TP visible quand l'ennemi peut l'annuler`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser Teleport de façon stratégique.

## Étapes

1. Prenez Teleport en top lane
2. Utilisez-le pour revenir en lane si nécessaire
3. Après 14 min, cherchez des opportunités de TP flanking
4. Gardez un œil sur les combats qui éclatent ailleurs
5. Communiquez votre intention de TP

## Critère de réussite

Vous utilisez un TP pour rejoindre un combat et contribuer à une victoire de teamfight.`,

  // Questions
  [
    createQuestion(
      "Quel est le cooldown de Teleport ?",
      "3 minutes",
      "6 minutes",
      "10 minutes",
      "2 minutes",
      'b',
      "Teleport a un cooldown de 6 minutes (360 secondes)."
    ),
    createQuestion(
      "Avant 14 minutes, TP peut aller où ?",
      "N'importe où",
      "Seulement sur les tourelles alliées",
      "Seulement sur les wards",
      "Seulement sur les champions",
      'b',
      "Avant 14 min, TP ne fonctionne que sur les tourelles alliées."
    ),
    createQuestion(
      "Après 14 minutes, TP peut aller sur ?",
      "Seulement tourelles",
      "Tourelles, wards, sbires",
      "N'importe où sur la carte",
      "Champions alliés",
      'b',
      "Après 14 min, TP fonctionne sur les structures, wards et sbires."
    ),
    createQuestion(
      "Combien de temps dure le channel de TP ?",
      "2 secondes",
      "4 secondes",
      "6 secondes",
      "Instantané",
      'b',
      "Le channel de Teleport dure 4 secondes."
    ),
    createQuestion(
      "Pourquoi TP en lane après un back ?",
      "Pour le style",
      "Pour ne pas perdre de CS et d'XP",
      "Pas de raison",
      "Pour montrer le TP à l'ennemi",
      'b',
      "TP de retour évite de perdre des ressources de lane."
    ),
    createQuestion(
      "Un TP flanking consiste à ?",
      "TP sur votre tourelle",
      "TP derrière l'ennemi pour les surprendre",
      "TP en base",
      "Annuler le TP",
      'b',
      "TP flanking = TP sur un ward derrière les ennemis."
    ),
    createQuestion(
      "Faut-il TP sur un combat déjà perdu ?",
      "Oui, toujours",
      "Non, c'est gaspiller le TP",
      "Ça dépend",
      "Seulement en ranked",
      'b',
      "TP sur un combat perdu = mort + TP gaspillé."
    ),
    createQuestion(
      "L'ennemi peut-il voir votre TP ?",
      "Non",
      "Oui, l'animation est visible",
      "Seulement avec une ward",
      "Jamais",
      'b',
      "L'animation de TP est visible et peut être annulée par CC."
    ),
    createQuestion(
      "Quand vaut-il mieux marcher plutôt que TP ?",
      "Jamais",
      "Si vous pouvez arriver à temps sans TP",
      "Toujours marcher",
      "Seulement si TP en CD",
      'b',
      "Si vous pouvez arriver en marchant, gardez TP."
    ),
    createQuestion(
      "TP est utile pour quels objectifs ?",
      "Aucun",
      "Dragon, Baron, Herald",
      "Seulement les tourelles",
      "Seulement Baron",
      'b',
      "TP permet de rejoindre les contests d'objectifs importants."
    ),
  ]
);
