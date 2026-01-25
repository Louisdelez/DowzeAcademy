import { createModule, createQuestion } from '../utils';

export const module09Sustain = createModule(
  'Effets de sustain',
  'sustain-effects',
  'Soins, vol de vie et boucliers',
  9,
  // Theory Content
  `## Qu'est-ce que le Sustain ?

Le **Sustain** désigne la capacité à **récupérer des PV** en combat ou en lane. C'est essentiel pour rester sur la carte sans avoir à recall.

## Types de Sustain

**Soins directs** :
- Sorts de **heal** (Soraka W, Yuumi E)
- Potions de vie
- Régénération passive

**Vol de vie (Lifesteal)** :
- Récupère des PV basés sur les **dégâts d'auto-attaque**
- Stat clé pour les ADC
- Vient des objets (Bloodthirster, etc.)

**Omnivamp** :
- Vol de vie sur **tous les dégâts** (sorts + auto)
- Plus polyvalent que le lifesteal
- Utilisé par mages et bruisers

**Boucliers** :
- Protection **temporaire** qui absorbe les dégâts
- Ne compte pas comme des PV
- Disparaît après un certain temps

## Importance du Sustain

Le sustain permet de :
- **Rester en lane** plus longtemps
- **Survivre** aux trades
- **Outlast** l'ennemi (l'user)
- Regagner des PV **entre les combats**

## Récapitulatif

- Sustain = capacité à regagner des PV
- Soins, lifesteal, omnivamp, boucliers
- Essentiel pour la durée en lane
- Les blessures graves (anti-heal) contrent le sustain
- Les boucliers sont temporaires`,

  // Practice Instructions
  `## Objectif

Comprendre les différentes formes de sustain et leur utilité.

## Étapes

1. Lancez une partie d'entraînement avec un champion à sustain (ex: Warwick)
2. Observez le vol de vie quand vous attaquez
3. Changez pour un support healer (Soraka)
4. Testez les soins sur un allié bot
5. Achetez un objet de lifesteal et observez la différence

## Critère de réussite

Vous comprenez les différentes sources de sustain et leur importance en jeu.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le Sustain ?",
      "Faire des dégâts",
      "La capacité à récupérer des PV",
      "Avoir plus d'armure",
      "Se déplacer plus vite",
      'b',
      "Le Sustain désigne les mécaniques de récupération de points de vie."
    ),
    createQuestion(
      "Qu'est-ce que le Lifesteal ?",
      "Voler l'or ennemi",
      "Récupérer des PV basés sur les dégâts d'auto-attaque",
      "Voler les sorts ennemis",
      "Voler les sbires",
      'b',
      "Lifesteal = un pourcentage des dégâts d'auto convertis en soins."
    ),
    createQuestion(
      "Quelle est la différence entre Lifesteal et Omnivamp ?",
      "Aucune différence",
      "Omnivamp fonctionne aussi sur les sorts",
      "Lifesteal est plus fort",
      "Omnivamp ne fonctionne pas sur les sorts",
      'b',
      "Omnivamp soigne sur tous les dégâts (sorts + auto), lifesteal uniquement sur auto."
    ),
    createQuestion(
      "Qu'est-ce qu'un bouclier ?",
      "Un soin permanent",
      "Une protection temporaire qui absorbe les dégâts",
      "Un buff d'armure",
      "Un sort offensif",
      'b',
      "Les boucliers absorbent les dégâts mais disparaissent avec le temps."
    ),
    createQuestion(
      "Pourquoi le sustain est-il important en lane ?",
      "Pour faire plus de dégâts",
      "Pour rester en lane plus longtemps sans recall",
      "Pour courir plus vite",
      "Pour avoir plus de mana",
      'b',
      "Le sustain permet de récupérer et de ne pas perdre d'XP/or en recall."
    ),
    createQuestion(
      "Comment contrer le sustain ennemi ?",
      "Acheter plus d'armure",
      "Acheter des objets anti-heal (Blessures Graves)",
      "Ne pas l'attaquer",
      "Fuir le combat",
      'b',
      "Les Blessures Graves réduisent l'efficacité des soins ennemis."
    ),
    createQuestion(
      "Soraka est connue pour quel type de sustain ?",
      "Lifesteal",
      "Soins directs à son équipe",
      "Boucliers",
      "Omnivamp",
      'b',
      "Soraka est une healer qui soigne directement ses alliés."
    ),
    createQuestion(
      "Les boucliers comptent-ils comme des PV ?",
      "Oui, complètement",
      "Non, ils absorbent mais disparaissent",
      "Seulement en combat",
      "Seulement pour les tanks",
      'b',
      "Les boucliers sont une protection temporaire, pas des PV permanents."
    ),
    createQuestion(
      "Quel objet est connu pour son lifesteal pour ADC ?",
      "Rabadon",
      "Bloodthirster",
      "Warmog",
      "Zhonya",
      'b',
      "Bloodthirster est l'objet classique de lifesteal pour les ADC."
    ),
    createQuestion(
      "Que signifie 'outlast' l'ennemi ?",
      "Le tuer rapidement",
      "Survivre plus longtemps grâce au sustain",
      "Le fuir",
      "L'ignorer",
      'b',
      "Outlast = gagner l'échange en durant plus longtemps grâce au sustain."
    ),
  ]
);
