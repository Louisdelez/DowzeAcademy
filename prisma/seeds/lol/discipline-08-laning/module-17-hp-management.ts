import { createModule, createQuestion } from '../utils';

export const module17HPManagement = createModule(
  'Gestion des PV',
  'hp-management',
  'Quand utiliser potions et garder sa santé',
  17,
  // Theory Content
  `## La gestion des PV

Gérer ses **PV** (points de vie) est aussi important que gérer le mana. Vos PV déterminent votre présence et votre sécurité en lane.

## Pourquoi c'est crucial

Impact des PV :
- **Low HP** = vulnérable aux all-in et ganks
- **High HP** = pression et confiance
- Les PV sont une **ressource** à utiliser intelligemment
- Parfois échanger des PV contre du **CS** vaut le coup

## Utilisation des potions

Quand utiliser les pots :
- Après un **trade** pour remonter
- Pas quand vous êtes **full HP**
- Pendant le **combat** pour l'avantage
- Avant que ça devienne **critique**

## Timing des potions

Conseils d'utilisation :
- Les potions restaurent **sur la durée**
- Commencer tôt pour max d'efficacité
- Ne pas gaspiller en étant full HP
- Corrupting Potion a **3 charges**

## Health bar comme ressource

Utilisation stratégique :
- Trader des PV contre du **CS** sous pression
- Perdre des PV pour **zoner** l'ennemi
- Garder assez pour **survivre** aux ganks
- Les **supports** doivent tank pour l'ADC

## Les limites de santé

Seuils dangereux :
- **30-40%** : Zone de kill potential
- **50%** : Zone d'alerte
- **En dessous de 30%** : Critique, envisager le back
- Connaître le **burst** ennemi est crucial

## Sustain en lane

Sources de sustain :
- **Potions** de vie
- **Doran's Blade/Shield** : Regen passive
- **Life steal** : Vol de vie sur auto
- Capacités de **soin** du champion
- **Fleet Footwork** : Rune de sustain`,

  // Practice Instructions
  `## Objectif

Apprendre à gérer ses PV et utiliser les potions efficacement.

## Étapes

1. Achetez des potions en début de partie
2. Après un trade défavorable, utilisez une potion
3. Ne gaspillez pas de potion si vous êtes full HP
4. Notez votre seuil de danger (30-40% HP)
5. Back avant d'être trop low pour être tué

## Critère de réussite

Vous utilisez vos potions efficacement et ne mourez pas à cause d'une mauvaise gestion des PV.`,

  // Questions
  [
    createQuestion(
      "Pourquoi gérer ses PV ?",
      "Pas important",
      "Pour rester safe et avoir de la pression",
      "Pour faire joli",
      "Pour le mana",
      'b',
      "Les PV déterminent votre sécurité et votre pression en lane."
    ),
    createQuestion(
      "Quand utiliser une potion de vie ?",
      "Quand full HP",
      "Après un trade pour remonter",
      "Jamais",
      "Seulement au niveau 18",
      'b',
      "Utilisez les potions après avoir perdu des PV."
    ),
    createQuestion(
      "Les potions restaurent les PV comment ?",
      "Instantanément",
      "Sur la durée (over time)",
      "Jamais",
      "Seulement hors combat",
      'b',
      "Les potions restaurent progressivement sur plusieurs secondes."
    ),
    createQuestion(
      "Combien de charges a Corrupting Potion ?",
      "1 charge",
      "3 charges",
      "5 charges",
      "Illimité",
      'b',
      "Corrupting Potion a 3 charges qui se rechargent à la base."
    ),
    createQuestion(
      "À quel % de PV êtes-vous en danger ?",
      "90%",
      "30-40%",
      "10%",
      "50%",
      'b',
      "À 30-40% HP, vous êtes en zone de kill potential."
    ),
    createQuestion(
      "Est-ce qu'échanger des PV contre du CS peut valoir le coup ?",
      "Jamais",
      "Oui, parfois c'est nécessaire",
      "Toujours",
      "Seulement en ARAM",
      'b',
      "Parfois perdre des PV pour farm est un trade acceptable."
    ),
    createQuestion(
      "Qu'est-ce que le sustain ?",
      "Les dégâts",
      "La capacité à récupérer des PV",
      "La mobilité",
      "Les CC",
      'b',
      "Le sustain est la capacité à régénérer sa vie en lane."
    ),
    createQuestion(
      "Fleet Footwork est quoi ?",
      "Un sort",
      "Une rune de sustain",
      "Un objet",
      "Un buff",
      'b',
      "Fleet Footwork est une rune qui donne du sustain."
    ),
    createQuestion(
      "Doran's Shield aide avec ?",
      "Les dégâts",
      "La régénération de vie",
      "Le mana",
      "La vitesse",
      'b',
      "Doran's Shield donne de la régénération passive de PV."
    ),
    createQuestion(
      "Quand back si on est low HP ?",
      "Jamais",
      "Avant d'être en zone de kill pour l'ennemi",
      "Après être mort",
      "Seulement en ranked",
      'b',
      "Back avant que l'ennemi puisse vous kill."
    ),
  ]
);
