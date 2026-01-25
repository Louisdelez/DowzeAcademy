import { createModule, createQuestion } from '../utils';

export const module13TankVsCarry = createModule(
  'Jouer Tank vs Jouer Carry',
  'tank-vs-carry',
  'Adapter son style selon le type de champion',
  13,
  // Theory Content
  `## Deux Styles de Top Lane

En top, vous pouvez jouer **tank** (protecteur) ou **carry** (dégâts). Chaque style a un gameplay très différent.

## Le Style Tank

Caractéristiques du tank :
- Priorité à la **survie** et l'**utilité**
- **Engage** les combats pour l'équipe
- **Peel** pour protéger vos carries
- Absorbe les **dégâts** et le CC ennemi

## Le Style Carry

Caractéristiques du carry :
- Priorité aux **dégâts** et au kill
- Cherche les **duels** favorables
- **Split-push** pour créer de la pression
- Cible les carries ennemis

## Teamfight en Tank

Comment jouer les teamfights :
- **Engagez** quand votre équipe est prête
- **Absorbez** le maximum de dégâts et CC
- **Peeler** vos carries si menacés
- Ne cherchez pas les kills, cherchez l'**utilité**

## Teamfight en Carry

Comment jouer les teamfights :
- **Attendez** le bon moment pour entrer
- Cherchez les **flanks** sur leurs carries
- Évitez de prendre tout le focus
- **Sortez** et **rentrez** selon les cooldowns

## Side Lane Pressure

Différence en side :
- **Tank** : Groupez plus, split moins efficace
- **Carry** : Split pour forcer les 1v1 ou 1v2
- Le carry attire plusieurs ennemis
- Le tank veut rester avec l'équipe`,

  // Practice Instructions
  `## Objectif

Comprendre et adapter votre style de jeu selon que vous jouez tank ou carry.

## Étapes

1. Jouez plusieurs parties avec un tank (Malphite, Ornn)
2. Jouez plusieurs parties avec un carry (Fiora, Camille)
3. Observez comment vous teamfight différemment
4. Notez l'impact du split-push selon le type de champion
5. Identifiez quel style correspond le mieux à votre gameplay

## Critère de réussite

Vous adaptez votre comportement (teamfight, split, positioning) selon le type de champion.`,

  // Questions
  [
    createQuestion(
      "Un tank en teamfight doit principalement ?",
      "Chercher les kills",
      "Engager et protéger ses carries",
      "Fuir le combat",
      "Split-push",
      'b',
      "Le tank engage et peel pour son équipe."
    ),
    createQuestion(
      "Un carry top cherche quoi principalement ?",
      "Absorber les dégâts",
      "Duels favorables et pression side lane",
      "Rester sous tour",
      "Protéger le support",
      'b',
      "Les carries veulent des duels et la pression en split."
    ),
    createQuestion(
      "Le 'peel' c'est quoi ?",
      "Faire des dégâts",
      "Protéger ses carries des menaces",
      "Prendre des objectifs",
      "Ward la map",
      'b',
      "Peeler = protéger vos carries en CC/zoning les menaces."
    ),
    createQuestion(
      "En teamfight, un carry doit ?",
      "Entrer en premier",
      "Attendre le bon moment et chercher des flanks",
      "Rester au fond sans rien faire",
      "Toujours fuir",
      'b',
      "Les carries attendent et cherchent des angles favorables."
    ),
    createQuestion(
      "Quel type est meilleur pour le split-push ?",
      "Tank",
      "Carry/Dueliste",
      "Support",
      "Aucune différence",
      'b',
      "Les carries/duelistes excellent en split-push."
    ),
    createQuestion(
      "Un tank devrait passer plus de temps à ?",
      "Split-push seul",
      "Grouper avec l'équipe",
      "Farmer la jungle",
      "Rester en base",
      'b',
      "Les tanks sont plus utiles groupés avec leur équipe."
    ),
    createQuestion(
      "Absorber les dégâts et CC est le rôle de ?",
      "L'ADC",
      "Le tank",
      "Le support mage",
      "Le jungler",
      'b',
      "Les tanks sont conçus pour absorber dégâts et CC."
    ),
    createQuestion(
      "Pourquoi un carry attire plusieurs ennemis en split ?",
      "Pour mourir plus vite",
      "Car il menace de tuer quiconque vient seul",
      "Car il est tank",
      "Pour le fun",
      'b',
      "Un carry en split force plusieurs personnes à répondre."
    ),
    createQuestion(
      "L'engage d'un combat est souvent fait par ?",
      "L'ADC",
      "Le tank",
      "Le support enchanteresse",
      "Personne",
      'b',
      "Les tanks avec leurs CC et tankiness engagent souvent."
    ),
    createQuestion(
      "Chercher les kills est prioritaire pour ?",
      "Les tanks",
      "Les carries",
      "Les supports",
      "Personne",
      'b',
      "Les carries cherchent les kills, les tanks cherchent l'utilité."
    ),
  ]
);
