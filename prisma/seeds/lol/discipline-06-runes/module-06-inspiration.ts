import { createModule, createQuestion } from '../utils';

export const module06Inspiration = createModule(
  'Arbre Inspiration',
  'inspiration-tree',
  'Utilité et créativité',
  6,
  // Theory Content
  `## L'arbre Inspiration

L'arbre **Inspiration** est orienté vers l'**utilité** et la **créativité**. Il offre des effets uniques qui brisent les règles normales.

## Champions typiques

Inspiration est populaire sur :
- **Supports utilitaires** : Bard, Zilean
- **Champions atypiques** : Ezreal, Zoe
- Comme **arbre secondaire** sur beaucoup de champions

## Keystones principales

**Pillage glacial** :
- Fait apparaître des rayons de glace en attaquant
- Slow de zone puissant

**Bouclier transcendant** :
- Bouclier basé sur le premier coup de l'ennemi
- Anti-burst

**Première frappe** :
- Or et dégâts bonus sur le premier coup
- Pour les champions qui initient les trades

## Runes secondaires populaires

Dans Inspiration :
- **Chaussures magiques** : Bottes gratuites à 12 min
- **Marché du futur** : Emprunter de l'or
- **Livraison de biscuits** : Biscuits de sustain
- **Perspicacité cosmique** : Réduction des cooldowns des sorts d'invocateur

## Récapitulatif

- Inspiration = utilité, effets uniques
- Keystones : Glacial, Bouclier, Première frappe
- Souvent pris en secondaire
- Runes d'économie et de sustain
- Casse les règles du jeu de façon créative`,

  // Practice Instructions
  `## Objectif

Comprendre les runes Inspiration et leurs usages variés.

## Étapes

1. Créez une page avec Inspiration en secondaire
2. Prenez Chaussures magiques + Livraison de biscuits
3. Jouez une partie et observez les bottes gratuites
4. Essayez Première frappe sur un champion poke
5. Notez les économies d'or réalisées

## Critère de réussite

Vous comprenez les avantages uniques d'Inspiration, surtout en secondaire.`,

  // Questions
  [
    createQuestion(
      "L'arbre Inspiration est orienté vers quoi ?",
      "Le burst",
      "L'utilité et la créativité",
      "La défense pure",
      "Le DPS",
      'b',
      "Inspiration offre des effets uniques et de l'utilité."
    ),
    createQuestion(
      "Chaussures magiques fait quoi ?",
      "Augmente la vitesse immédiatement",
      "Donne des bottes gratuites après un certain temps",
      "Permet de voler",
      "Réduit les dégâts",
      'b',
      "Chaussures magiques donne des bottes gratuites vers 12 minutes."
    ),
    createQuestion(
      "Marché du futur permet quoi ?",
      "De vendre des objets plus cher",
      "D'emprunter de l'or pour acheter en avance",
      "De gagner de l'or gratuit",
      "De voler l'or ennemi",
      'b',
      "Marché du futur permet d'acheter des objets même sans avoir tout l'or."
    ),
    createQuestion(
      "Livraison de biscuits donne quoi ?",
      "Des dégâts",
      "Des biscuits qui restaurent vie et mana",
      "De la vitesse",
      "De l'armure",
      'b',
      "Vous recevez des biscuits de sustain pendant la partie."
    ),
    createQuestion(
      "Première frappe fait quoi ?",
      "Réduit les cooldowns",
      "Donne de l'or et des dégâts bonus sur le premier coup",
      "Soigne",
      "Donne un bouclier",
      'b',
      "Première frappe récompense le fait d'initier les trades."
    ),
    createQuestion(
      "Pourquoi Inspiration est souvent pris en secondaire ?",
      "Ses Keystones sont faibles",
      "Ses runes secondaires sont très utiles (bottes, biscuits)",
      "C'est obligatoire",
      "Ça donne plus de dégâts",
      'b',
      "Chaussures magiques et Biscuits sont très populaires en secondaire."
    ),
    createQuestion(
      "Pillage glacial crée quoi ?",
      "De la chaleur",
      "Des rayons de glace qui ralentissent",
      "Des dégâts de feu",
      "Des soins",
      'b',
      "Pillage glacial crée des lignes de glace qui slow en zone."
    ),
    createQuestion(
      "Perspicacité cosmique réduit quoi ?",
      "Les dégâts",
      "Les cooldowns des sorts d'invocateur et objets",
      "L'armure ennemie",
      "Le temps de respawn",
      'b',
      "Perspicacité cosmique réduit les CD des sorts d'invocateur et objets actifs."
    ),
    createQuestion(
      "Bouclier transcendant protège contre quoi ?",
      "Tous les dégâts",
      "Le premier gros coup reçu (anti-burst)",
      "Les CC",
      "Les monstres",
      'b',
      "Bouclier transcendant absorbe le premier coup de l'ennemi."
    ),
    createQuestion(
      "Quel champion utilise souvent Première frappe ?",
      "Les tanks",
      "Les champions qui initient les trades (GP, Ezreal)",
      "Les supports",
      "Les junglers tanks",
      'b',
      "Champions qui peuvent toucher en premier bénéficient de Première frappe."
    ),
  ]
);
