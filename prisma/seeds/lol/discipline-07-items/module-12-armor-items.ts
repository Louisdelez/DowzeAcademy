import { createModule, createQuestion } from '../utils';

export const module12ArmorItems = createModule(
  'Objets défensifs armure/PV',
  'armor-hp-items',
  'Anti-AD et résistance physique',
  12,
  // Theory Content
  `## Les objets d'armure

Les objets d'**armure** réduisent les dégâts physiques (AD). Ils sont essentiels contre les équipes avec des ADC et bruisers forts.

## Stats défensives

Les statistiques clés :
- **Armure** : Réduit les dégâts physiques
- **PV** : Plus de vie = plus difficile à tuer
- La combinaison des deux est idéale

## Objets d'armure populaires

Les objets anti-AD :
- **Plated Steelcaps (Tabi)** : Bottes + réduction dégâts auto
- **Thornmail** : Armure + dégâts de réflexion + anti-heal
- **Randuin's Omen** : Armure + PV + réduction critique
- **Frozen Heart** : Armure + mana + réduction AS ennemie
- **Dead Man's Plate** : Armure + vitesse de déplacement

## Quand construire de l'armure ?

Situations où l'armure est prioritaire :
- Contre **ADC** fed ou en late game
- Contre **bruisers AD** (Darius, Riven)
- Contre équipe **full AD**
- Quand vous prenez beaucoup de dégâts physiques

## PV vs Armure

Comment choisir :
- **Armure** : Spécifiquement contre AD
- **PV** : Efficace contre tout type de dégâts
- **Les deux** : La combinaison est optimale

## Récapitulatif

- Armure = réduit les dégâts physiques
- Tabi, Thornmail, Randuin's = objets clés
- À construire contre les menaces AD
- Combiner armure + PV est idéal
- PV seuls sont moins efficaces que armure + PV`,

  // Practice Instructions
  `## Objectif

Savoir quand et quels objets d'armure construire.

## Étapes

1. Jouez un tank contre un ADC ennemi
2. Achetez Tabi ninja pour réduire les dégâts d'auto
3. Achetez Thornmail et observez les dégâts de réflexion
4. Notez la différence de résistance avec et sans armure
5. Testez Randuin contre un ennemi qui fait des critiques

## Critère de réussite

Vous savez quel objet d'armure choisir selon la menace AD.`,

  // Questions
  [
    createQuestion(
      "L'armure réduit quel type de dégâts ?",
      "Magiques",
      "Physiques (AD)",
      "Vrais",
      "Tous les types",
      'b',
      "L'armure ne réduit que les dégâts physiques."
    ),
    createQuestion(
      "Tabi ninja (Plated Steelcaps) réduisent quoi ?",
      "Les dégâts de sorts",
      "Les dégâts des auto-attaques",
      "Les CC",
      "Le temps de respawn",
      'b',
      "Les Tabi réduisent les dégâts subis des auto-attaques."
    ),
    createQuestion(
      "Thornmail fait quoi de spécial ?",
      "Soigne quand attaqué",
      "Renvoie des dégâts et applique anti-heal",
      "Donne de l'invisibilité",
      "Augmente la vitesse",
      'b',
      "Thornmail inflige des dégâts à ceux qui vous auto-attaquent."
    ),
    createQuestion(
      "Randuin's Omen est particulièrement bon contre quoi ?",
      "Les mages",
      "Les critiques et l'AS ennemis",
      "Les tanks",
      "Les supports",
      'b',
      "Randuin's réduit les dégâts critiques et a une active qui slow."
    ),
    createQuestion(
      "Frozen Heart réduit quoi chez les ennemis proches ?",
      "Leur AP",
      "Leur vitesse d'attaque",
      "Leurs PV",
      "Leur armure",
      'b',
      "L'aura de Frozen Heart réduit l'AS des ennemis proches."
    ),
    createQuestion(
      "Dead Man's Plate donne quoi en plus de l'armure ?",
      "De l'AP",
      "De la vitesse de déplacement",
      "Du mana",
      "Du lifesteal",
      'b',
      "Dead Man's augmente la vitesse de déplacement en marchant."
    ),
    createQuestion(
      "Contre un ADC fed, que construire en priorité ?",
      "De la RM",
      "De l'armure (Tabi, Randuin's)",
      "Du mana",
      "De l'AP",
      'b',
      "L'armure réduit les dégâts de l'ADC qui fait des dégâts physiques."
    ),
    createQuestion(
      "Pourquoi combiner Armure + PV est optimal ?",
      "C'est moins cher",
      "L'armure est plus efficace avec plus de PV",
      "C'est obligatoire",
      "Ça donne des dégâts",
      'b',
      "Plus de PV signifie plus de dégâts absorbés par l'armure."
    ),
    createQuestion(
      "Contre une équipe full AD, que faire ?",
      "Construire de la RM",
      "Stack beaucoup d'armure",
      "Ignorer la défense",
      "Ne rien changer",
      'b',
      "Contre full AD, l'armure est extrêmement efficace."
    ),
    createQuestion(
      "Les PV seuls sont-ils suffisants contre AD ?",
      "Oui, c'est pareil",
      "Non, armure + PV est plus efficace",
      "Oui, mieux que l'armure",
      "Les PV ne servent à rien",
      'b',
      "L'armure réduit les dégâts, les PV seuls ne le font pas."
    ),
  ]
);
