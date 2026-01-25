import { createModule, createQuestion } from '../utils';

export const module14Lifesteal = createModule(
  'Objets de vol de vie et omnivamp',
  'lifesteal-omnivamp',
  'Sustain en combat',
  14,
  // Theory Content
  `## Le sustain par les objets

Le **Lifesteal** et l'**Omnivamp** permettent de récupérer des PV en faisant des dégâts. Essentiels pour durer en combat.

## Lifesteal

Le Lifesteal fonctionne sur les **auto-attaques** :
- Récupère X% des dégâts d'auto en PV
- Statistique clé pour les ADC
- Plus efficace avec beaucoup d'AD et AS

## Omnivamp

L'Omnivamp fonctionne sur **tous les dégâts** :
- Auto-attaques ET sorts
- Réduit contre les AoE (33% efficacité)
- Utile pour bruisers et certains mages

## Objets de Lifesteal

Pour les ADC et AD :
- **Bloodthirster** : +18% Lifesteal + bouclier
- **Blade of the Ruined King (BotRK)** : Lifesteal + % PV dégâts
- **Immortal Shieldbow** : Lifesteal + bouclier de survie

## Objets d'Omnivamp

Pour diverses classes :
- **Eclipse** : Omnivamp pour assassins AD
- **Riftmaker** : Omnivamp pour mages/AP bruisers
- **Goredrinker** : Soin en zone pour bruisers

## Récapitulatif

- **Lifesteal** = soins sur auto-attaques
- **Omnivamp** = soins sur tous les dégâts
- ADC = Bloodthirster, BotRK, Shieldbow
- Bruisers = Goredrinker, Eclipse
- Le sustain permet de durer en combat`,

  // Practice Instructions
  `## Objectif

Comprendre la différence entre Lifesteal et Omnivamp.

## Étapes

1. Jouez un ADC et achetez Bloodthirster
2. Attaquez des sbires et observez le soin
3. Jouez un bruiser avec Goredrinker
4. Utilisez l'actif et observez le soin de zone
5. Comparez l'efficacité selon le type de dégâts

## Critère de réussite

Vous comprenez quand utiliser Lifesteal vs Omnivamp.`,

  // Questions
  [
    createQuestion(
      "Le Lifesteal fonctionne sur quoi ?",
      "Les sorts uniquement",
      "Les auto-attaques",
      "Tous les dégâts",
      "Les dégâts de zone",
      'b',
      "Le Lifesteal soigne uniquement sur les dégâts d'auto-attaque."
    ),
    createQuestion(
      "L'Omnivamp fonctionne sur quoi ?",
      "Les auto-attaques uniquement",
      "Tous les dégâts (auto + sorts)",
      "Les sorts uniquement",
      "Les dégâts aux monstres",
      'b',
      "L'Omnivamp soigne sur tous les types de dégâts."
    ),
    createQuestion(
      "Bloodthirster donne combien de Lifesteal ?",
      "10%",
      "15%",
      "18%",
      "25%",
      'c',
      "Bloodthirster donne 18% de Lifesteal."
    ),
    createQuestion(
      "Blade of the Ruined King est bon contre qui ?",
      "Les squishies",
      "Les tanks (dégâts % PV)",
      "Les mages",
      "Les tourelles",
      'b',
      "BotRK fait des dégâts basés sur les PV max, excellent contre tanks."
    ),
    createQuestion(
      "L'Omnivamp est réduit sur les dégâts de zone à combien ?",
      "100%",
      "66%",
      "33%",
      "0%",
      'c',
      "L'Omnivamp est réduit à 33% d'efficacité sur les AoE."
    ),
    createQuestion(
      "Riftmaker est pour quels champions ?",
      "Les ADC",
      "Les mages et bruisers AP",
      "Les tanks",
      "Les supports",
      'b',
      "Riftmaker donne de l'Omnivamp pour les champions AP."
    ),
    createQuestion(
      "Goredrinker soigne comment ?",
      "Au fil du temps",
      "En zone avec son actif",
      "Sur les auto-attaques",
      "En prenant des dégâts",
      'b',
      "Goredrinker a un actif qui soigne basé sur les ennemis touchés."
    ),
    createQuestion(
      "Pourquoi le sustain est-il important en combat ?",
      "Pour faire plus de dégâts",
      "Pour durer plus longtemps et outlast l'ennemi",
      "Pour courir plus vite",
      "Pour avoir plus de mana",
      'b',
      "Le sustain permet de survivre plus longtemps dans les combats."
    ),
    createQuestion(
      "Un ADC prend généralement quoi pour le sustain ?",
      "Omnivamp",
      "Lifesteal (Bloodthirster, Shieldbow)",
      "Spirit Visage",
      "Rien",
      'b',
      "Les ADC auto-attaquent, donc le Lifesteal est optimal."
    ),
    createQuestion(
      "Immortal Shieldbow fait quoi de spécial ?",
      "Donne de l'invisibilité",
      "Donne un bouclier quand vous êtes low HP",
      "Augmente le critique",
      "Donne du mana",
      'b',
      "Shieldbow proc un bouclier de survie à faibles PV."
    ),
  ]
);
