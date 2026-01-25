import { createModule, createQuestion } from '../utils';

export const module08CrowdControl = createModule(
  'Effets de contrôle (CC)',
  'crowd-control',
  'Stuns, ralentissements, projections et autres CC',
  8,
  // Theory Content
  `## Qu'est-ce que le CC ?

Le **Crowd Control** (CC) désigne tous les effets qui **limitent les actions** d'un champion. Le CC est crucial pour contrôler les combats.

## Types de CC majeurs

**Hard CC** (CC dur - empêche toute action) :
- **Stun** : Immobilise totalement
- **Knock-up/Knock-back** : Projette en l'air/arrière
- **Suppression** : CC le plus fort, impossible à cleanse
- **Root/Snare** : Immobilise mais permet de lancer des sorts

**Soft CC** (CC léger) :
- **Slow** : Ralentit le déplacement
- **Silence** : Empêche de lancer des sorts
- **Blind** : Les auto-attaques ratent
- **Disarm** : Empêche d'auto-attaquer

## Importance du CC

Le CC est important pour :
- **Initier** les combats (engager)
- **Peel** (protéger ses carries)
- **Interrompre** les canalisations
- **Catch** (attraper un ennemi hors position)

## Contre-mesures

Comment gérer le CC :
- Achat de **Tenacity** (réduit la durée)
- Sort **Cleanse** (retire certains CC)
- Objet **Mercure** (bottes avec tenacity)
- **Esquiver** les skillshots de CC

## Récapitulatif

- CC = effets qui limitent les actions
- Hard CC : stun, knock-up, suppression, root
- Soft CC : slow, silence, blind
- Crucial pour initier et protéger
- Tenacity et Cleanse pour contrer`,

  // Practice Instructions
  `## Objectif

Comprendre les différents types de CC et leur impact.

## Étapes

1. Lancez une partie d'entraînement avec un champion à CC (ex: Leona)
2. Utilisez vos CC sur les mannequins et observez les effets
3. Essayez différents champions avec différents CC
4. Notez la durée de chaque CC
5. Achetez des bottes de Mercure et observez la réduction

## Critère de réussite

Vous pouvez identifier les différents types de CC et comprendre leur utilité.`,

  // Questions
  [
    createQuestion(
      "Que signifie CC ?",
      "Champion Counter",
      "Crowd Control",
      "Critical Chance",
      "Combat Capability",
      'b',
      "CC = Crowd Control, les effets qui limitent les actions ennemies."
    ),
    createQuestion(
      "Qu'est-ce qu'un Stun ?",
      "Un effet qui ralentit",
      "Un effet qui immobilise totalement",
      "Un effet qui augmente les dégâts",
      "Un effet qui soigne",
      'b',
      "Un stun empêche le champion de faire quoi que ce soit pendant sa durée."
    ),
    createQuestion(
      "Quelle est la différence entre Stun et Root ?",
      "Aucune différence",
      "Le Root permet de lancer des sorts, pas le Stun",
      "Le Stun dure plus longtemps",
      "Le Root fait des dégâts",
      'b',
      "Un root immobilise mais permet d'attaquer et lancer des sorts."
    ),
    createQuestion(
      "Qu'est-ce qu'un Knock-up ?",
      "Un bonus de dégâts",
      "Un effet qui projette en l'air",
      "Un effet de soin",
      "Un buff de vitesse",
      'b',
      "Un knock-up projette le champion en l'air, l'empêchant d'agir."
    ),
    createQuestion(
      "Qu'est-ce que la Tenacity ?",
      "Plus de dégâts",
      "Réduction de la durée des CC",
      "Plus de PV",
      "Plus de vitesse",
      'b',
      "La Tenacity réduit la durée des effets de CC subis."
    ),
    createQuestion(
      "Qu'est-ce qu'un Slow ?",
      "Un CC dur",
      "Un ralentissement",
      "Un stun",
      "Un bonus",
      'b',
      "Un slow réduit la vitesse de déplacement du champion."
    ),
    createQuestion(
      "Qu'est-ce que le 'Peel' ?",
      "Attaquer l'ennemi",
      "Utiliser ses CC pour protéger ses carries",
      "Farmer les sbires",
      "Détruire les tourelles",
      'b',
      "Peel = utiliser CC et sorts pour éloigner les menaces de vos carries."
    ),
    createQuestion(
      "Le sort Cleanse retire quels effets ?",
      "Tous les CC",
      "La plupart des CC sauf Suppression et Knock-up",
      "Uniquement les slows",
      "Aucun CC",
      'b',
      "Cleanse retire la plupart des CC mais pas Suppression ni Knock-up."
    ),
    createQuestion(
      "Qu'est-ce que la Suppression ?",
      "Un CC léger",
      "Le CC le plus fort, impossible à cleanse",
      "Un slow puissant",
      "Un silence",
      'b',
      "La Suppression est le CC ultime (ex: Malzahar R), seul le QSS peut le retirer."
    ),
    createQuestion(
      "Pourquoi le CC est-il important en teamfight ?",
      "Il fait plus de dégâts",
      "Il permet de contrôler les ennemis clés",
      "Il donne de l'or",
      "Il régénère les PV",
      'b',
      "Le CC permet d'immobiliser les cibles prioritaires et de protéger l'équipe."
    ),
  ]
);
