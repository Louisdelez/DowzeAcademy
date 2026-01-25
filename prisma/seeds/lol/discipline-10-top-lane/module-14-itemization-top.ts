import { createModule, createQuestion } from '../utils';

export const module14ItemizationTop = createModule(
  'Itemisation Adaptative Top',
  'itemization-top',
  'Ajuster son build aux dégâts de l\'adversaire',
  14,
  // Theory Content
  `## Itemisation Adaptative

En top lane, votre **build** doit s'adapter à votre adversaire et à la composition ennemie. C'est crucial pour survivre et dominer.

## Contre un Champion AD

Items défensifs contre dégâts physiques :
- **Plated Steelcaps** (Tabis) : Réduction auto-attacks
- **Bramble Vest** : Armure + anti-heal
- **Warden's Mail** : Réduit l'attack speed ennemi
- Priorisez l'**armure** dans vos items

## Contre un Champion AP

Items défensifs contre dégâts magiques :
- **Mercury's Treads** : Résistance magique + ténacité
- **Spectre's Cowl** : MR + sustain
- **Hexdrinker** : Shield contre burst AP
- Priorisez la **résistance magique**

## Items Anti-Heal

Contre les champions avec sustain :
- **Bramble Vest** → Thornmail (tanks)
- **Executioner's Calling** → Mortal Reminder (AD)
- **Oblivion Orb** → Morellonomicon (AP)
- Réduit l'efficacité de leur **heal**

## Lire la Composition Ennemie

Adapter au-delà de la lane :
- Regardez **tous** les champions ennemis
- 3+ AD ? Stack **armure**
- 3+ AP ? Stack **MR**
- Mixte ? Build **équilibré**

## Erreurs Courantes d'Itemisation

Ce qu'il faut éviter :
- Build **full dégâts** contre burst
- Ignorer les **stats défensives**
- Ne pas adapter au **matchup**
- Finir les items **avant** d'adapter

## Timing d'Adaptation

Quand adapter votre build :
- **Premiers items** : adapter à votre lane
- **Mid game** : adapter à la comp ennemie
- Si vous **mourez** souvent : plus de défense
- Si vous **dominez** : plus de dégâts`,

  // Practice Instructions
  `## Objectif

Apprendre à adapter votre build selon les dégâts de l'adversaire en lane et de l'équipe ennemie.

## Étapes

1. Avant la partie, identifiez si votre lane opponent est AD ou AP
2. Adaptez vos premiers items défensifs en conséquence
3. Regardez la composition ennemie complète pour votre build mid/late
4. Achetez des items anti-heal si l'ennemi a du sustain
5. Comparez vos performances avec un build adapté vs un build standard

## Critère de réussite

Vous adaptez systématiquement votre build au type de dégâts de l'adversaire et survivez mieux en lane.`,

  // Questions
  [
    createQuestion(
      "Contre un champion AD, quelle stat prioriser ?",
      "Résistance magique",
      "Armure",
      "Mana",
      "Attack speed",
      'b',
      "L'armure réduit les dégâts physiques (AD)."
    ),
    createQuestion(
      "Contre un champion AP, quelle stat prioriser ?",
      "Armure",
      "Résistance magique",
      "Dégâts critiques",
      "Vitesse",
      'b',
      "La résistance magique réduit les dégâts magiques (AP)."
    ),
    createQuestion(
      "Les Plated Steelcaps sont efficaces contre ?",
      "Les mages",
      "Les champions qui auto-attack beaucoup",
      "Les tanks",
      "Les supports",
      'b',
      "Les Tabis réduisent les dégâts des auto-attacks."
    ),
    createQuestion(
      "Bramble Vest est utile contre ?",
      "Les mages burst",
      "Les champions AD avec du sustain",
      "Les tanks",
      "Personne",
      'b',
      "Bramble Vest donne armure et applique anti-heal."
    ),
    createQuestion(
      "Mercury's Treads donnent quelle stat bonus ?",
      "Armure",
      "Résistance magique et ténacité",
      "Dégâts",
      "Vitesse d'attaque",
      'b',
      "Les Mercs donnent MR et ténacité (réduit CC)."
    ),
    createQuestion(
      "Si l'équipe ennemie a 3+ champions AD, que faire ?",
      "Build AP",
      "Stack armure",
      "Ignorer et build dégâts",
      "Surrender",
      'b',
      "Contre beaucoup d'AD, stacker l'armure est efficace."
    ),
    createQuestion(
      "Hexdrinker est utile contre quoi ?",
      "Dégâts physiques",
      "Burst de dégâts magiques",
      "True damage",
      "Rien",
      'b',
      "Hexdrinker donne un shield contre les dégâts magiques."
    ),
    createQuestion(
      "Une erreur courante d'itemisation est ?",
      "Adapter son build",
      "Build full dégâts sans défense",
      "Acheter des bottes",
      "Regarder la composition ennemie",
      'b',
      "Ne pas prendre de stats défensives est une erreur courante."
    ),
    createQuestion(
      "Quand adapter son build à la lane ?",
      "Jamais",
      "Dès les premiers items",
      "Seulement en late game",
      "Après avoir fini le build",
      'b',
      "Adaptez dès les premiers achats contre votre lane opponent."
    ),
    createQuestion(
      "L'anti-heal (Grievous Wounds) est crucial contre ?",
      "Les tanks sans sustain",
      "Les champions avec beaucoup de heal",
      "Les ADC purs",
      "Les supports mages",
      'b',
      "L'anti-heal réduit l'efficacité des champions qui heal beaucoup."
    ),
  ]
);
