import { createModule, createQuestion } from '../utils';

export const module05Support = createModule(
  'Support',
  'support-role',
  "Champion utilitaire qui protège et aide l'équipe",
  5,
  // Theory Content
  `## Le rôle du Support

Le **Support** joue en Bot Lane avec l'ADC. Son rôle est d'**aider son équipe** plutôt que de faire des dégâts. Il protège l'ADC et apporte de l'**utilité**.

## Caractéristiques du rôle

Le Support se distingue par :
- Ne farm **pas** les sbires (laisse l'or à l'ADC)
- Achète des **objets de support** qui génèrent de l'or
- Responsable de la **vision** (wards)
- Protège l'ADC pendant la phase de lane
- Initie ou peel en teamfight

## Types de supports

On trouve plusieurs styles :
- **Enchanters** : Soins et boucliers (Lulu, Nami, Soraka)
- **Tanks/Engage** : Initiation et CC (Leona, Nautilus, Thresh)
- **Mages** : Dégâts et poke (Brand, Zyra, Xerath)
- **Catchers** : Attrapent les ennemis (Blitzcrank, Pyke)

## Responsabilités en jeu

Le Support doit :
- **Protéger** l'ADC pendant le farm
- **Warder** pour la vision de l'équipe
- **Zoner** l'ennemi pour permettre le farm
- **Roamer** pour aider Mid ou le Jungler
- **Peel** pour protéger les carries en teamfight

## Récapitulatif

- Support = rôle utilitaire, pas de farm
- Joue avec l'ADC en Bot Lane
- Responsable principal de la vision
- Protège, soigne, CC ou initie selon le champion
- Impact énorme sur la carte malgré peu d'or`,

  // Practice Instructions
  `## Objectif

Comprendre le rôle du Support et ses responsabilités.

## Étapes

1. Lancez une partie contre l'IA en choisissant Support
2. Prenez un support simple (Soraka ou Leona recommandé)
3. Allez en Bot Lane avec l'ADC IA
4. Ne last-hit PAS les sbires, laissez-les à l'ADC
5. Placez des wards dans les buissons de la rivière
6. Protégez votre ADC si l'ennemi l'attaque

## Critère de réussite

Vous comprenez que le Support ne farm pas, place la vision et protège l'ADC.`,

  // Questions
  [
    createQuestion(
      "Où joue le Support ?",
      "Top Lane",
      "Mid Lane",
      "Bot Lane avec l'ADC",
      "Dans la jungle",
      'c',
      "Le Support accompagne l'ADC en Bot Lane."
    ),
    createQuestion(
      "Le Support doit-il farmer les sbires ?",
      "Oui, autant que possible",
      "Non, il laisse l'or à l'ADC",
      "Seulement les canons",
      "Seulement en début de partie",
      'b',
      "Le Support ne farm pas pour laisser tout l'or à l'ADC."
    ),
    createQuestion(
      "Comment le Support gagne-t-il de l'or ?",
      "En volant les sbires",
      "Avec des objets de support qui génèrent de l'or",
      "Il n'en gagne pas",
      "En tuant des monstres de jungle",
      'b',
      "Les objets de support (Lame du voleur, etc.) génèrent de l'or passivement."
    ),
    createQuestion(
      "Qu'est-ce qu'un Enchanter ?",
      "Un support qui tank",
      "Un support qui soigne et donne des boucliers",
      "Un support qui fait des dégâts",
      "Un support qui initie",
      'b',
      "Les Enchanters comme Lulu ou Soraka protègent avec soins et boucliers."
    ),
    createQuestion(
      "Que signifie 'peel' pour un Support ?",
      "Initier les combats",
      "Protéger ses carries des menaces",
      "Farmer les sbires",
      "Placer des wards",
      'b',
      "Peel = utiliser ses sorts pour empêcher les ennemis d'atteindre vos carries."
    ),
    createQuestion(
      "Qui est le principal responsable de la vision dans l'équipe ?",
      "L'ADC",
      "Le Mid Laner",
      "Le Support",
      "Le Jungler",
      'c',
      "Le Support achète des wards et est responsable de la vision de l'équipe."
    ),
    createQuestion(
      "Qu'est-ce qu'un Support Engage/Tank ?",
      "Un support qui soigne",
      "Un support qui initie les combats avec du CC",
      "Un support qui fait des dégâts",
      "Un support qui farm",
      'b',
      "Les Engage supports comme Leona initient avec leur CC."
    ),
    createQuestion(
      "Pourquoi le Support roam-t-il parfois ?",
      "Pour voler le farm mid",
      "Pour aider d'autres lanes ou le jungler",
      "Pour éviter l'ADC",
      "C'est interdit",
      'b',
      "Le Support peut roam pour créer des avantages sur d'autres parties de la carte."
    ),
    createQuestion(
      "Qu'est-ce que 'zoner' en tant que Support ?",
      "Créer des zones de feu",
      "Menacer l'ennemi pour qu'il n'approche pas de l'ADC",
      "Détruire des zones de la carte",
      "Placer des wards en zone",
      'b',
      "Zoner = créer une menace qui empêche l'ennemi d'approcher pour trade."
    ),
    createQuestion(
      "Quel est l'impact du Support malgré son faible or ?",
      "Aucun impact",
      "Énorme grâce à la vision, CC et protection",
      "Impact uniquement en late game",
      "Impact négatif",
      'b',
      "Le Support a un impact majeur via la vision et l'utilité de ses sorts."
    ),
  ]
);
