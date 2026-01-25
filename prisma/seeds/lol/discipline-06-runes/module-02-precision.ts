import { createModule, createQuestion } from '../utils';

export const module02Precision = createModule(
  'Arbre Précision',
  'precision-tree',
  'DPS constant et Conquérant',
  2,
  // Theory Content
  `## L'arbre Précision

L'arbre **Précision** est orienté vers les dégâts **constants** et **soutenus**. Idéal pour les champions qui auto-attaquent beaucoup.

## Champions typiques

Précision est populaire sur :
- **ADC** : Jinx, Caitlyn, Vayne
- **Bruisers** : Jax, Irelia, Fiora
- **Certains junglers** : Master Yi

## Keystones principales

**Conquérant** :
- Stack des buffs en combat prolongé
- Donne de l'AD/AP et du soin
- Idéal pour les longs combats

**Precision - Tempo mortel (Lethal Tempo)** :
- Augmente la vitesse d'attaque
- Excellent pour les ADC

**Appétit de combat (Fleet Footwork)** :
- Soin et vitesse à intervalles
- Bon pour le sustain en lane

## Runes secondaires populaires

Dans Précision :
- **Triomphe** : Soin après un kill
- **Légende: Alacrité** : Vitesse d'attaque
- **Coup de grâce** : Dégâts bonus sur cibles low HP

## Récapitulatif

- Précision = DPS constant, auto-attaques
- Keystones : Conquérant, Lethal Tempo, Fleet
- Pour ADC, bruisers et certains junglers
- Runes de sustain et de scaling
- Idéal pour les longs combats`,

  // Practice Instructions
  `## Objectif

Comprendre les runes Précision et quand les utiliser.

## Étapes

1. Créez une page avec Précision en principal
2. Lisez les descriptions de chaque Keystone
3. Essayez Conquérant sur un bruiser (Darius)
4. Essayez Lethal Tempo sur un ADC (Jinx)
5. Notez la différence de style de jeu

## Critère de réussite

Vous savez quand choisir Précision et quelle Keystone prendre.`,

  // Questions
  [
    createQuestion(
      "L'arbre Précision est orienté vers quoi ?",
      "Le burst rapide",
      "Les dégâts constants et soutenus",
      "La défense",
      "L'utilité",
      'b',
      "Précision favorise le DPS constant et les combats prolongés."
    ),
    createQuestion(
      "Conquérant est bon pour quel type de combat ?",
      "Les combats très courts",
      "Les combats prolongés",
      "Le poke",
      "La défense",
      'b',
      "Conquérant stack des bonus pendant les longs combats."
    ),
    createQuestion(
      "Quels champions prennent souvent Précision ?",
      "Les mages",
      "Les ADC et bruisers",
      "Les supports",
      "Les tanks",
      'b',
      "ADC et bruisers bénéficient du DPS de Précision."
    ),
    createQuestion(
      "Que donne Lethal Tempo ?",
      "Du soin",
      "De la vitesse d'attaque",
      "De l'armure",
      "Du mana",
      'b',
      "Lethal Tempo augmente la vitesse d'attaque."
    ),
    createQuestion(
      "Triomphe fait quoi ?",
      "Donne de l'or",
      "Soigne après un kill ou assist",
      "Augmente les dégâts",
      "Réduit les cooldowns",
      'b',
      "Triomphe restaure de la vie quand vous participez à un kill."
    ),
    createQuestion(
      "Fleet Footwork est bon pour quoi ?",
      "Le burst",
      "Le sustain en lane",
      "Le tank",
      "L'invisibilité",
      'b',
      "Fleet Footwork donne du soin et de la vitesse, bon pour le sustain."
    ),
    createQuestion(
      "Coup de grâce fait des dégâts bonus contre qui ?",
      "Les champions full HP",
      "Les champions low HP",
      "Les monstres",
      "Les tourelles",
      'b',
      "Coup de grâce augmente les dégâts contre les cibles basses en vie."
    ),
    createQuestion(
      "Master Yi prend souvent quelle Keystone ?",
      "Électrocute",
      "Conquérant ou Lethal Tempo",
      "Comète",
      "Gardien",
      'b',
      "Master Yi bénéficie du DPS de Conquérant ou Lethal Tempo."
    ),
    createQuestion(
      "Légende: Alacrité donne quoi ?",
      "Du soin",
      "De la vitesse d'attaque",
      "De l'AP",
      "De l'armure",
      'b',
      "Légende: Alacrité augmente la vitesse d'attaque de façon permanente."
    ),
    createQuestion(
      "Précision est moins bon pour quel type de champion ?",
      "Les ADC",
      "Les mages burst",
      "Les bruisers",
      "Les duellistes",
      'b',
      "Les mages burst préfèrent généralement Domination ou Sorcellerie."
    ),
  ]
);
