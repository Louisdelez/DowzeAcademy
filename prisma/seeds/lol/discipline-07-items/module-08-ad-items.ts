import { createModule, createQuestion } from '../utils';

export const module08ADItems = createModule(
  'Objets AD offensifs',
  'ad-offensive-items',
  'Dégâts physiques et critiques',
  8,
  // Theory Content
  `## Les objets AD offensifs

Les objets **AD** (Attack Damage) augmentent les dégâts physiques. Ils sont essentiels pour les ADC, assassins AD et bruisers.

## Stats clés AD

Les statistiques offensives AD :
- **Attack Damage** : Dégâts de base des auto et certains sorts
- **Vitesse d'attaque** : Fréquence des auto-attaques
- **Coup critique** : Chance de faire des dégâts ×2
- **Dégâts critiques** : Multiplicateur des coups critiques

## Objets ADC classiques

Pour les tireurs :
- **Infinity Edge** : +80 AD, augmente les dégâts critiques
- **Kraken Slayer** : Dégâts vrais tous les 3 coups
- **Bloodthirster** : AD + Lifesteal + bouclier

## Objets Bruisers AD

Pour les combattants :
- **Goredrinker** : AD + PV + soin en zone
- **Stridebreaker** : AD + slow de zone
- **Trinity Force** : AD + AS + passif Spellblade

## Objets Assassins AD

Pour les assassins :
- Objets de **Létalité** (module suivant)
- **Youmuu's Ghostblade** : Létalité + vitesse active
- **Edge of Night** : Bouclier anti-sort

## Récapitulatif

- AD = dégâts physiques des auto et sorts
- ADC veulent critique + AS
- Bruisers veulent AD + durabilité
- Assassins veulent Létalité
- Choisir selon le style de jeu`,

  // Practice Instructions
  `## Objectif

Comprendre les objets AD selon le type de champion.

## Étapes

1. Jouez un ADC et achetez Kraken ou Infinity Edge
2. Observez vos dégâts d'auto-attaque
3. Jouez un bruiser et essayez Trinity Force
4. Comparez les sensations de jeu
5. Notez comment les critiques augmentent les dégâts

## Critère de réussite

Vous savez différencier les objets AD selon qu'ils sont pour ADC, bruiser ou assassin.`,

  // Questions
  [
    createQuestion(
      "Que signifie AD ?",
      "Ability Damage",
      "Attack Damage",
      "Armor Defense",
      "Auto Damage",
      'b',
      "AD = Attack Damage, les dégâts physiques."
    ),
    createQuestion(
      "Qu'est-ce qu'un coup critique ?",
      "Un coup qui rate",
      "Un coup qui fait des dégâts multipliés",
      "Un coup de grâce",
      "Un coup magique",
      'b',
      "Un critique multiplie les dégâts (généralement ×2)."
    ),
    createQuestion(
      "Infinity Edge est idéal pour qui ?",
      "Les mages",
      "Les ADC (augmente les dégâts critiques)",
      "Les tanks",
      "Les supports",
      'b',
      "Infinity Edge améliore les critiques, parfait pour les ADC."
    ),
    createQuestion(
      "Qu'est-ce que le Lifesteal ?",
      "Voler la vie des sbires",
      "Récupérer des PV basés sur les dégâts d'auto",
      "Tuer les ennemis plus vite",
      "Un sort de vampirisme",
      'b',
      "Lifesteal convertit une partie des dégâts d'auto en soins."
    ),
    createQuestion(
      "Trinity Force est bon pour quels champions ?",
      "Les ADC",
      "Les bruisers qui utilisent sorts et auto",
      "Les mages",
      "Les supports",
      'b',
      "Trinity est parfait pour les bruisers qui combinent sorts et auto."
    ),
    createQuestion(
      "Bloodthirster donne quoi en plus de l'AD ?",
      "De la vitesse",
      "Du Lifesteal et un bouclier",
      "De l'armure",
      "Du mana",
      'b',
      "Bloodthirster combine AD, lifesteal et un bouclier de survie."
    ),
    createQuestion(
      "Les objets de critique sont principalement pour qui ?",
      "Les tanks",
      "Les ADC et certains assassins",
      "Les mages",
      "Les supports",
      'b',
      "Les ADC construisent autour de la chance de critique."
    ),
    createQuestion(
      "Goredrinker est orienté vers quoi ?",
      "Le burst",
      "Le sustain et les combats prolongés",
      "Le poke",
      "La vitesse",
      'b',
      "Goredrinker soigne en zone, bon pour les longs combats."
    ),
    createQuestion(
      "Qu'est-ce que la vitesse d'attaque influence ?",
      "Les dégâts des sorts",
      "La fréquence des auto-attaques",
      "La vitesse de déplacement",
      "Le cooldown",
      'b',
      "La vitesse d'attaque détermine combien d'auto vous faites par seconde."
    ),
    createQuestion(
      "Un bruiser préfère quoi à du critique ?",
      "Plus de critique",
      "Un mix de dégâts et de résistance",
      "Uniquement des dégâts",
      "Uniquement de la défense",
      'b',
      "Les bruisers veulent survivre tout en faisant des dégâts."
    ),
  ]
);
