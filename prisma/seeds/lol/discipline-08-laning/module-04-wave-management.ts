import { createModule, createQuestion } from '../utils';

export const module04WaveManagement = createModule(
  'Gestion des vagues',
  'wave-management',
  'Push, freeze et slow push expliqués',
  4,
  // Theory Content
  `## La gestion des vagues

La **wave management** (gestion des vagues) est l'art de contrôler où et comment les sbires se rencontrent. C'est une compétence avancée très puissante.

## Le Push (pousser)

Pousser la vague :
- Tuer les sbires **rapidement**
- La vague avance vers la tourelle ennemie
- Bon pour : **roam**, **back**, **pression**
- Risque : vulnérable aux **ganks**

## Le Freeze (geler)

Maintenir la vague au même endroit :
- Laisser **4 sbires ennemis** en plus
- Last-hit au dernier moment
- Bon pour : **zone l'ennemi**, sécurité
- Force l'ennemi à **s'exposer** pour farm

## Le Slow Push

Construire une grosse vague :
- Tuer seulement les **casters ennemis**
- Laisser les mêlée taper
- Crée une vague de **2-3 waves**
- Parfait avant un **objectif** ou un **dive**

## Quand utiliser quoi ?

Situations :
- **Push** : Avant de back, avant de roam
- **Freeze** : Quand en avance, pour deny
- **Slow push** : Avant dragon/baron, avant dive

## Importance en ranked

Maîtriser les vagues :
- Contrôle total de la lane
- Créer des avantages de **CS**
- Permettre des plays ailleurs sur la map
- Frustrer et mettre l'ennemi en danger`,

  // Practice Instructions
  `## Objectif

Comprendre et pratiquer les trois techniques de gestion de vague.

## Étapes

1. En Practice Tool, pratiquez le push (tuez tout rapidement)
2. Observez où la vague va mourir
3. Pratiquez le freeze (gardez la vague proche de votre tourelle)
4. Pratiquez le slow push (tuez seulement les casters)
5. Essayez en normale contre un vrai adversaire

## Critère de réussite

Vous pouvez intentionnellement push, freeze ou slow push selon votre choix.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le 'push' ?",
      "Rester immobile",
      "Tuer les sbires rapidement pour avancer la vague",
      "Fuir la lane",
      "Attaquer le champion ennemi",
      'b',
      "Push = tuer rapidement les sbires pour que la vague avance."
    ),
    createQuestion(
      "Qu'est-ce que le 'freeze' ?",
      "Tuer tout rapidement",
      "Maintenir la vague au même endroit",
      "Quitter la lane",
      "Une technique de combat",
      'b',
      "Freeze = maintenir la vague dans une position fixe."
    ),
    createQuestion(
      "Combien de sbires ennemis en plus faut-il pour un freeze ?",
      "1-2 sbires",
      "4 sbires environ",
      "10 sbires",
      "Aucun",
      'b',
      "Il faut environ 4 sbires ennemis en surplus pour freeze."
    ),
    createQuestion(
      "Qu'est-ce que le slow push ?",
      "Pousser très vite",
      "Construire une grosse vague en tuant les casters",
      "Geler la vague",
      "Ignorer les sbires",
      'b',
      "Le slow push = tuer les casters pour construire une grosse vague."
    ),
    createQuestion(
      "Quand faire un push ?",
      "Jamais",
      "Avant de back ou de roam",
      "Toujours",
      "Quand on est behind",
      'b',
      "On push avant de quitter la lane pour back ou roam."
    ),
    createQuestion(
      "Quel est le risque du push ?",
      "Perdre de l'or",
      "Être vulnérable aux ganks",
      "Perdre de l'XP",
      "Aucun risque",
      'b',
      "En poussant, on s'éloigne de sa tourelle et on s'expose aux ganks."
    ),
    createQuestion(
      "Pourquoi freeze quand on est en avance ?",
      "Pour perdre du CS",
      "Pour deny et zoner l'ennemi",
      "Pour aider le jungler ennemi",
      "Aucune raison",
      'b',
      "Le freeze force l'ennemi à s'exposer et permet de le zone."
    ),
    createQuestion(
      "Quand faire un slow push ?",
      "Tout le temps",
      "Avant un objectif ou un dive",
      "Jamais",
      "Quand on perd",
      'b',
      "Le slow push crée de la pression pour prendre des objectifs."
    ),
    createQuestion(
      "Le slow push crée combien de vagues combinées ?",
      "1 vague",
      "2-3 vagues",
      "10 vagues",
      "Aucune",
      'b',
      "Un slow push bien fait crée une vague de 2-3 waves."
    ),
    createQuestion(
      "La wave management est importante pour ?",
      "Seulement les pros",
      "Créer des avantages et contrôler la lane",
      "Rien",
      "Les supports",
      'b',
      "La wave management permet de contrôler la lane et créer des avantages."
    ),
  ]
);
