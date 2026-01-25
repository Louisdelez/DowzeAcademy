import { createModule, createQuestion } from '../utils';

export const module02SupportTypes = createModule(
  'Types de supports',
  'support-types',
  'Différencier les enchanteurs des engageurs et leurs styles de jeu',
  2,
  // Theory Content (5+ slides)
  `## Les grandes familles de supports

Les supports se divisent en plusieurs catégories, chacune avec un style de jeu distinct. Les deux principales sont les **enchanteurs** et les **engageurs**. Comprendre ces catégories vous aidera à choisir le bon champion selon la composition de votre équipe.

## Les enchanteurs

Les **enchanteurs** sont des supports qui renforcent leurs alliés. Ils possèdent des soins, des boucliers et des buffs. Exemples : **Lulu, Janna, Soraka, Nami, Yuumi**. Leur style est plus défensif et orienté vers la protection de l'ADC.

## Les engageurs (Tanks/CC)

Les **engageurs** initient les combats avec leurs contrôles de foule puissants. Ils sont souvent tankys et capables de supporter les dégâts. Exemples : **Nautilus, Leona, Thresh, Alistar, Rell**. Leur style est agressif et orienté vers la création d'opportunités.

## Les mages supports

Certains mages peuvent jouer support avec leurs dégâts et leur CC. Exemples : **Lux, Zyra, Brand, Xerath, Vel'Koz**. Ils offrent du poke et des dégâts supplémentaires mais sont plus fragiles.

## Choisir selon la composition

Le choix du type de support dépend de plusieurs facteurs :
- **ADC agressif** (Draven, Lucian) → Engageur pour capitaliser
- **ADC scaling** (Jinx, Kog'Maw) → Enchanteur pour survivre
- **Équipe sans engage** → Engageur nécessaire
- **Équipe sans peel** → Enchanteur recommandé

## Récapitulatif

- **Enchanteurs** : soins, boucliers, buffs (Lulu, Soraka, Janna)
- **Engageurs** : tanks avec CC fort (Nautilus, Leona, Thresh)
- **Mages** : dégâts et poke (Zyra, Brand, Lux)
- Le choix dépend de l'ADC et de la composition d'équipe
- Chaque type a ses forces et faiblesses`,

  // Practice Instructions
  `## Objectif

Expérimenter les deux types principaux de supports pour comprendre leurs différences.

## Étapes

1. Jouez une partie avec un **enchanteur** (Lulu, Nami ou Janna)
2. Notez combien de fois vous avez sauvé votre ADC avec un bouclier/soin
3. Jouez ensuite une partie avec un **engageur** (Nautilus, Leona ou Thresh)
4. Notez combien d'engagements vous avez initiés avec succès
5. Comparez votre expérience entre les deux styles

## Critère de réussite

Vous avez joué au moins une partie de chaque type et pouvez expliquer les différences de gameplay entre un enchanteur et un engageur.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel champion est un enchanteur ?",
      "Nautilus",
      "Lulu",
      "Leona",
      "Thresh",
      'b',
      "Lulu est une enchanteresse avec des boucliers, polymorphe et buffs pour ses alliés."
    ),
    createQuestion(
      "Quelle est la caractéristique principale d'un engageur ?",
      "Des soins puissants",
      "Des contrôles de foule pour initier",
      "Des boucliers pour l'équipe",
      "Du poke à longue distance",
      'b',
      "Les engageurs possèdent des CC puissants pour initier les combats et créer des opportunités."
    ),
    createQuestion(
      "Quel support choisir avec un ADC scaling comme Jinx ?",
      "Brand pour les dégâts",
      "Un enchanteur pour la protection",
      "Blitzcrank pour l'engage",
      "Zyra pour le poke",
      'b',
      "Un ADC scaling a besoin de protection pour atteindre son pic de puissance, d'où le choix d'un enchanteur."
    ),
    createQuestion(
      "Quel champion est un engageur tank ?",
      "Soraka",
      "Janna",
      "Nautilus",
      "Yuumi",
      'c',
      "Nautilus est un tank avec un excellent kit d'engagement (hook, root passive, ulti knockup)."
    ),
    createQuestion(
      "Qu'est-ce qui caractérise un mage support ?",
      "Des soins importants",
      "Une grande tankiness",
      "Du poke et des dégâts",
      "Des boucliers puissants",
      'c',
      "Les mages supports comme Zyra ou Brand apportent des dégâts supplémentaires et du poke."
    ),
    createQuestion(
      "Avec un ADC agressif comme Draven, quel type de support est recommandé ?",
      "Un enchanteur passif",
      "Un engageur pour capitaliser",
      "Un mage pour le poke",
      "N'importe quel support",
      'b',
      "Un ADC agressif comme Draven bénéficie d'un engageur pour transformer son agressivité en kills."
    ),
    createQuestion(
      "Quelle est la faiblesse principale des enchanteurs ?",
      "Ils n'ont pas de CC",
      "Ils sont fragiles et manquent d'engage",
      "Ils ne peuvent pas soigner",
      "Ils sont trop lents",
      'b',
      "Les enchanteurs sont généralement fragiles et dépendent de leurs alliés pour engager les combats."
    ),
    createQuestion(
      "Quel support choisir si votre équipe manque d'initiation ?",
      "Soraka",
      "Yuumi",
      "Leona",
      "Janna",
      'c',
      "Si l'équipe manque d'engage, Leona avec son ulti et ses CC multiples peut combler ce manque."
    ),
    createQuestion(
      "Quel est l'avantage principal des enchanteurs ?",
      "Ils font beaucoup de dégâts",
      "Ils renforcent et protègent leurs alliés",
      "Ils sont très tankys",
      "Ils ont le meilleur waveclear",
      'b',
      "Les enchanteurs excellent dans la protection et le renforcement de leurs alliés avec soins et boucliers."
    ),
    createQuestion(
      "Brand et Zyra sont classés dans quelle catégorie ?",
      "Enchanteurs",
      "Engageurs",
      "Mages supports",
      "Tanks",
      'c',
      "Brand et Zyra sont des mages joués en support pour leurs dégâts et leur contrôle de zone."
    ),
  ]
);
