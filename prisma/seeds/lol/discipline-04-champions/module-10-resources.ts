import { createModule, createQuestion } from '../utils';

export const module10Resources = createModule(
  'Ressources de champion',
  'champion-resources',
  'Mana, énergie, rage et autres ressources',
  10,
  // Theory Content
  `## Les ressources des champions

Chaque champion utilise une **ressource** pour lancer ses sorts. Le type de ressource influence le style de jeu.

## Mana

La ressource la plus commune :
- **Régénère** lentement avec le temps
- Peut être augmenté avec des **objets** et le buff bleu
- Les sorts ont un **coût en mana** fixe
- Exemples : Lux, Ashe, la plupart des mages

## Énergie

Une ressource alternative rapide :
- **Maximum fixe** (200 énergie)
- Régénère **très vite**
- Limite le **spam** de sorts en burst
- Exemples : Lee Sin, Zed, Akali, Kennen

## Rage/Fury

Se charge en combattant :
- **Gagne** de la rage en attaquant/subissant des dégâts
- **Perd** de la rage hors combat
- Exemples : Tryndamere, Renekton

## Sans ressource

Certains champions n'ont aucune ressource :
- Sorts **gratuits** (cooldown uniquement)
- Très pratique en lane
- Exemples : Garen, Riven, Katarina

## Santé comme ressource

Certains utilisent leurs **PV** :
- Les sorts coûtent des points de vie
- Risqué mais puissant
- Exemples : Dr. Mundo, Vladimir

## Récapitulatif

- **Mana** : commun, régénère lentement
- **Énergie** : cap fixe, régénère vite
- **Rage** : charge en combat
- **Sans ressource** : sorts gratuits
- **Santé** : coûte des PV`,

  // Practice Instructions
  `## Objectif

Comprendre les différents types de ressources.

## Étapes

1. Jouez un champion à mana (Lux) et observez la barre bleue
2. Jouez un champion à énergie (Lee Sin) et notez la régénération rapide
3. Jouez Garen (sans ressource) et spammez les sorts
4. Jouez Tryndamere et observez la barre de rage
5. Comparez comment chaque ressource affecte le gameplay

## Critère de réussite

Vous pouvez identifier le type de ressource d'un champion et adapter votre jeu.`,

  // Questions
  [
    createQuestion(
      "Quelle est la ressource la plus commune ?",
      "Énergie",
      "Mana",
      "Rage",
      "Santé",
      'b',
      "Le Mana est la ressource utilisée par la majorité des champions."
    ),
    createQuestion(
      "Comment régénère-t-on le Mana ?",
      "En tuant des ennemis uniquement",
      "Lentement avec le temps, objets et buff bleu",
      "Jamais, c'est fixe",
      "En mourant",
      'b',
      "Le Mana régénère passivement et peut être amélioré par objets/buff."
    ),
    createQuestion(
      "Quelle est la particularité de l'Énergie ?",
      "Elle ne régénère jamais",
      "Elle régénère très vite mais a un cap fixe de 200",
      "Elle augmente avec le niveau",
      "Elle est infinie",
      'b',
      "L'Énergie régénère rapidement mais est plafonnée à 200."
    ),
    createQuestion(
      "Comment gagne-t-on de la Rage ?",
      "En restant immobile",
      "En attaquant et en subissant des dégâts",
      "En farmant les sbires",
      "En utilisant des sorts",
      'b',
      "La Rage s'accumule pendant les combats."
    ),
    createQuestion(
      "Garen utilise quelle ressource ?",
      "Mana",
      "Aucune ressource",
      "Énergie",
      "Rage",
      'b',
      "Garen n'a pas de ressource, ses sorts sont gratuits."
    ),
    createQuestion(
      "Zed utilise quelle ressource ?",
      "Mana",
      "Énergie",
      "Rage",
      "Aucune",
      'b',
      "Zed utilise l'Énergie comme Lee Sin et Akali."
    ),
    createQuestion(
      "Qu'est-ce qu'un champion qui utilise sa Santé ?",
      "Un champion qui se soigne",
      "Un champion dont les sorts coûtent des PV",
      "Un champion tank",
      "Un champion support",
      'b',
      "Certains champions comme Vladimir dépensent des PV pour leurs sorts."
    ),
    createQuestion(
      "Pourquoi les champions sans ressource sont forts en lane ?",
      "Ils font plus de dégâts",
      "Ils peuvent spammer leurs sorts sans limite de ressource",
      "Ils ont plus de PV",
      "Ils sont invisibles",
      'b',
      "Sans coût de ressource, ils peuvent utiliser leurs sorts librement."
    ),
    createQuestion(
      "Le buff bleu affecte quelle ressource ?",
      "Énergie",
      "Mana (régénération)",
      "Rage",
      "Santé",
      'b',
      "Le buff bleu augmente la régénération de mana et réduit les cooldowns."
    ),
    createQuestion(
      "La Rage disparaît-elle hors combat ?",
      "Non, elle reste",
      "Oui, elle décroît progressivement",
      "Seulement si on meurt",
      "Seulement en ranked",
      'b',
      "La Rage se perd graduellement quand on n'est pas en combat."
    ),
  ]
);
