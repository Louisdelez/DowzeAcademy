import { createModule, createQuestion } from '../utils';

export const module02Teleport = createModule(
  'Téléportation',
  'teleport-spell',
  'Sort de mobilité globale et macro play',
  2,
  // Theory Content
  `## Qu'est-ce que Téléportation ?

**Téléportation** (TP) permet de se téléporter vers une structure alliée ou une balise. C'est un sort de **macro** qui permet d'influencer toute la carte.

## Fonctionnement

Comment TP fonctionne :
- **Canalisation** de 4 secondes (visible par l'ennemi)
- Se téléporte vers une **tourelle alliée** ou **ward**
- **Cooldown** de 360 secondes (6 minutes)
- Peut être **interrompu** si on prend des dégâts

## Utilisations courantes

TP sert principalement à :
- **Retourner en lane** rapidement après un back
- **Rejoindre** un combat sur une autre lane
- **Défendre** une tourelle menacée
- **Flanquer** lors d'un teamfight

## Qui prend TP ?

TP est typiquement pris par :
- **Top Laners** : Pour compenser l'isolation
- **Mid Laners** : Parfois, pour la macro
- Plus rare sur ADC, Jungler et Support

## TP vs Ignite

Le dilemme Top Lane :
- **TP** = Impact global, moins de kill pressure
- **Ignite** = Plus de kill pressure, moins de macro
- Choix selon le matchup et le style de jeu

## Récapitulatif

- TP = téléportation vers structure/ward alliée
- Canalisation de 4 secondes
- Cooldown de 6 minutes
- Essentiel pour les Top Laners
- Permet d'influencer toute la carte`,

  // Practice Instructions
  `## Objectif

Comprendre comment et quand utiliser Téléportation.

## Étapes

1. Lancez une partie contre l'IA avec TP
2. Allez en lane, farmez un peu puis recall
3. Utilisez TP sur votre tourelle pour revenir vite
4. Plus tard, TP vers une autre lane pour aider
5. Placez une ward et TP dessus pour flanker

## Critère de réussite

Vous savez utiliser TP pour revenir en lane et rejoindre des combats.`,

  // Questions
  [
    createQuestion(
      "Combien de temps dure la canalisation de TP ?",
      "2 secondes",
      "4 secondes",
      "6 secondes",
      "Instantané",
      'b',
      "La téléportation nécessite 4 secondes de canalisation."
    ),
    createQuestion(
      "Vers quoi peut-on se téléporter ?",
      "N'importe où",
      "Tourelles alliées et wards",
      "Uniquement les tourelles",
      "Uniquement les champions",
      'b',
      "TP peut cibler les structures alliées et les balises de vision."
    ),
    createQuestion(
      "Quel est le cooldown de TP ?",
      "180 secondes",
      "300 secondes",
      "360 secondes (6 minutes)",
      "420 secondes",
      'c',
      "Téléportation a un cooldown de 360 secondes."
    ),
    createQuestion(
      "La canalisation de TP peut-elle être interrompue ?",
      "Non, jamais",
      "Oui, si vous prenez des dégâts",
      "Seulement par un ultime",
      "Seulement en ranked",
      'b',
      "Prendre des dégâts pendant la canalisation annule la TP."
    ),
    createQuestion(
      "Quel rôle prend TP le plus souvent ?",
      "ADC",
      "Top Laner",
      "Support",
      "Jungler",
      'b',
      "Les Top Laners prennent souvent TP pour compenser leur isolation."
    ),
    createQuestion(
      "Pourquoi TP est-il un sort de 'macro' ?",
      "Il fait des dégâts",
      "Il permet d'influencer toute la carte",
      "Il donne du mana",
      "Il régénère les PV",
      'b',
      "TP permet d'intervenir partout sur la carte, c'est de la macro."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'TP flank' ?",
      "Annuler une TP",
      "TP derrière l'équipe ennemie pour les surprendre",
      "TP vers sa base",
      "TP sur une tourelle",
      'b',
      "Un TP flank permet d'arriver derrière l'ennemi pour le prendre en sandwich."
    ),
    createQuestion(
      "L'ennemi peut-il voir quand vous utilisez TP ?",
      "Non, c'est invisible",
      "Oui, la canalisation est visible",
      "Seulement s'il a de la vision",
      "Seulement en teamfight",
      'b',
      "Une animation visible indique qu'un TP arrive."
    ),
    createQuestion(
      "Pourquoi TP est utile pour revenir en lane ?",
      "Il donne de l'or",
      "On ne perd pas de sbires pendant le trajet",
      "On gagne de l'XP bonus",
      "La tourelle est soignée",
      'b',
      "TP permet de ne pas perdre d'or et d'XP en marchant."
    ),
    createQuestion(
      "TP vs Ignite en Top : quel est l'avantage d'Ignite ?",
      "Meilleure macro",
      "Plus de kill pressure en 1v1",
      "Plus de résistance",
      "Plus de mana",
      'b',
      "Ignite donne plus de potentiel de kill en lane."
    ),
  ]
);
