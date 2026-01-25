import { createModule, createQuestion } from '../utils';

export const module04Resolve = createModule(
  'Arbre Volonté (Résolution)',
  'resolve-tree',
  'Durabilité et contrôle',
  4,
  // Theory Content
  `## L'arbre Résolution (Volonté)

L'arbre **Résolution** est orienté vers la **durabilité** et le **contrôle**. Parfait pour les tanks et champions qui veulent survivre.

## Champions typiques

Résolution est populaire sur :
- **Tanks** : Ornn, Malphite, Sion
- **Supports tanks** : Leona, Nautilus, Thresh
- **Bruisers tanky** : Sett, Darius (parfois)

## Keystones principales

**Emprise implacable (Grasp)** :
- Dégâts et soin en auto-attaquant après 4s en combat
- Stacke des PV permanents
- Bon pour les trades en Top

**Après-coup (Aftershock)** :
- Résistances bonus après un CC
- Explosion de dégâts après 2.5s
- Pour supports/tanks engage

**Gardien** :
- Bouclier pour vous et un allié proche
- Pour supports protecteurs

## Runes secondaires populaires

Dans Résolution :
- **Démolition** : Dégâts bonus aux tourelles
- **Second souffle** : Régénération après avoir pris des dégâts
- **Revitalisation** : Soins et boucliers améliorés

## Récapitulatif

- Résolution = durabilité, survie, CC
- Keystones : Grasp, Aftershock, Gardien
- Pour tanks et supports engage
- Runes de régénération et résistance
- Idéal pour rester en vie longtemps`,

  // Practice Instructions
  `## Objectif

Comprendre les runes Résolution et leur utilisation.

## Étapes

1. Créez une page avec Résolution en principal
2. Prenez Grasp of the Undying
3. Jouez un tank en Top (Malphite)
4. Observez les procs de Grasp (4s en combat puis auto)
5. Essayez Aftershock sur un support engage (Leona)

## Critère de réussite

Vous comprenez quand utiliser Résolution et comment proc Grasp.`,

  // Questions
  [
    createQuestion(
      "L'arbre Résolution est orienté vers quoi ?",
      "Le burst",
      "La durabilité et le contrôle",
      "Les dégâts magiques",
      "La vitesse",
      'b',
      "Résolution favorise la survie et la résistance."
    ),
    createQuestion(
      "Comment proc Grasp of the Undying ?",
      "En utilisant un sort",
      "Après 4 secondes en combat, avec une auto",
      "En prenant des dégâts",
      "En tuant un sbire",
      'b',
      "Grasp se charge en 4 secondes de combat puis proc sur la prochaine auto."
    ),
    createQuestion(
      "Que donne Grasp en plus des dégâts ?",
      "Du mana",
      "Du soin et des PV permanents",
      "De la vitesse",
      "Du cooldown",
      'b',
      "Grasp soigne et ajoute des PV permanents à chaque proc."
    ),
    createQuestion(
      "Quand Aftershock se déclenche-t-il ?",
      "En auto-attaquant",
      "Après avoir CC un ennemi",
      "En prenant des dégâts",
      "En mourant",
      'b',
      "Aftershock se déclenche quand vous immobilisez un ennemi."
    ),
    createQuestion(
      "Gardien est bon pour qui ?",
      "Les assassins",
      "Les supports protecteurs",
      "Les ADC",
      "Les mages",
      'b',
      "Gardien protège vous et un allié proche avec un bouclier."
    ),
    createQuestion(
      "Démolition fait quoi ?",
      "Détruit les ennemis",
      "Donne des dégâts bonus aux tourelles",
      "Soigne",
      "Donne de l'armure",
      'b',
      "Démolition augmente les dégâts infligés aux tourelles."
    ),
    createQuestion(
      "Second souffle aide avec quoi ?",
      "Les dégâts",
      "La régénération après avoir pris des dégâts",
      "La vitesse",
      "Le mana",
      'b',
      "Second souffle régénère des PV après avoir subi des dégâts."
    ),
    createQuestion(
      "Malphite prend souvent quelle Keystone ?",
      "Électrocute",
      "Grasp ou Comète",
      "Conquérant",
      "Fleet",
      'b',
      "Malphite utilise Grasp pour le sustain ou Comète pour le poke."
    ),
    createQuestion(
      "Leona prend souvent quelle Keystone ?",
      "Conquérant",
      "Aftershock",
      "Électrocute",
      "Comète",
      'b',
      "Leona bénéficie d'Aftershock car elle engage avec du CC."
    ),
    createQuestion(
      "Revitalisation améliore quoi ?",
      "Les dégâts",
      "Les soins et boucliers reçus",
      "La vitesse",
      "L'armure",
      'b',
      "Revitalisation augmente l'efficacité des soins et boucliers."
    ),
  ]
);
