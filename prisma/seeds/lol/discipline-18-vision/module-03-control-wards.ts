import { createModule, createQuestion } from '../utils';

export const module03ControlWards = createModule(
  'Balises de contrôle (wards roses)',
  'control-wards',
  'Utiliser les Control Wards pour révéler et nier la vision ennemie',
  3,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'une Balise de contrôle ?

La **Balise de contrôle** (Control Ward ou "Pink Ward") est un type de ward achetable qui révèle et désactive les wards ennemies invisibles. Contrairement aux Stealth Wards, elle est **visible** par l'ennemi mais offre des avantages uniques.

## Caractéristiques de la Control Ward

- **Coût** : 75 pièces d'or
- **Durée** : Permanente (jusqu'à destruction)
- **Visibilité** : Visible par tous (peut être détruite)
- **Points de vie** : 4 points de vie (nécessite 4 auto-attaques pour détruire)
- **Limite** : 1 seule Control Ward active par joueur sur la carte

## Capacités spéciales

La Control Ward possède des **capacités uniques** :
- **Révèle** les wards invisibles ennemies dans sa zone
- **Désactive** les wards ennemies (elles ne donnent plus de vision)
- **Révèle** les champions invisibles (comme Evelynn, Shaco en camouflage)
- **Ne peut pas être désactivée** par les Control Wards ennemies

## Quand acheter des Control Wards ?

Achetez une Control Ward **à chaque retour à la base** si vous avez l'or disponible et que vous n'en avez pas déjà une posée. Les situations prioritaires :
- **Avant un objectif** (Dragon, Baron, Herald)
- **Pour sécuriser un bush** important (tribush, river)
- **Pour dénier la vision** ennemie dans une zone clé

## Placements stratégiques

Les meilleurs emplacements pour les Control Wards :
- **Pixel Bush** (entre mid et river)
- **Tribush** (près de votre lane)
- **Entrée de la jungle** ennemie
- **Bush du Baron/Dragon** avant de faire l'objectif

Une Control Ward bien placée peut rester active pendant plusieurs minutes et fournir une valeur énorme.`,

  // Practice Instructions
  `## Objectif

Intégrer l'achat régulier de Control Wards dans votre routine de jeu.

## Étapes

1. Lancez une partie normale ou classée
2. À chaque retour à la base, achetez une Control Ward si vous avez 75 or disponibles
3. Posez votre Control Ward dans un emplacement stratégique (tribush, river bush, pixel bush)
4. Notez combien de temps chaque Control Ward reste active avant d'être détruite
5. Comptez le nombre de wards ennemies que vous avez révélées avec vos Control Wards
6. En fin de partie, vérifiez combien de Control Wards vous avez achetées au total

## Critère de réussite

Vous avez acheté au moins 5 Control Wards pendant la partie et maintenu une présence constante de Control Ward sur la carte.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien coûte une Balise de contrôle (Control Ward) ?",
      "50 pièces d'or",
      "75 pièces d'or",
      "100 pièces d'or",
      "Gratuit",
      'b',
      "Les Control Wards coûtent 75 pièces d'or à l'achat dans la boutique."
    ),
    createQuestion(
      "Quelle est la durée de vie d'une Control Ward ?",
      "90 secondes",
      "120 secondes",
      "180 secondes",
      "Permanente jusqu'à destruction",
      'd',
      "Les Control Wards restent sur la carte indéfiniment tant qu'elles ne sont pas détruites."
    ),
    createQuestion(
      "Combien de Control Wards un joueur peut-il avoir actives sur la carte ?",
      "1 seule",
      "2 maximum",
      "3 maximum",
      "Illimité",
      'a',
      "Chaque joueur ne peut avoir qu'une seule Control Ward active à la fois sur la carte."
    ),
    createQuestion(
      "Les Control Wards sont-elles visibles par l'ennemi ?",
      "Non, elles sont invisibles",
      "Oui, elles sont visibles par tous",
      "Seulement avec un Oracle",
      "Seulement de nuit",
      'b',
      "Contrairement aux Stealth Wards, les Control Wards sont toujours visibles."
    ),
    createQuestion(
      "Combien de points de vie possède une Control Ward ?",
      "1 point de vie",
      "2 points de vie",
      "3 points de vie",
      "4 points de vie",
      'd',
      "Les Control Wards ont 4 points de vie et nécessitent 4 auto-attaques pour être détruites."
    ),
    createQuestion(
      "Que fait une Control Ward aux wards invisibles ennemies ?",
      "Elle les détruit instantanément",
      "Elle les révèle et les désactive",
      "Elle les convertit en wards alliées",
      "Rien du tout",
      'b',
      "Les Control Wards révèlent les wards ennemies et les désactivent tant qu'elles sont en zone."
    ),
    createQuestion(
      "Quand devriez-vous acheter une Control Ward idéalement ?",
      "Uniquement en fin de partie",
      "Seulement avant le Baron",
      "À chaque retour à la base si vous avez l'or",
      "Jamais en tant que carry",
      'c',
      "Tous les joueurs devraient acheter des Control Wards régulièrement, à chaque retour si possible."
    ),
    createQuestion(
      "Quel est un emplacement stratégique pour une Control Ward ?",
      "Sous votre propre tourelle",
      "Dans votre fontaine",
      "Dans le tribush ou pixel bush",
      "Au centre de la mid lane",
      'c',
      "Le tribush et le pixel bush sont des emplacements clés pour contrôler la vision."
    ),
    createQuestion(
      "Les Control Wards peuvent-elles révéler les champions invisibles ?",
      "Non, jamais",
      "Oui, les champions camouflés comme Evelynn",
      "Seulement Teemo",
      "Seulement en combat",
      'b',
      "Les Control Wards révèlent les champions en camouflage (mais pas ceux en invisibilité totale)."
    ),
    createQuestion(
      "Que se passe-t-il si vous posez une 2ème Control Ward ?",
      "Les deux restent actives",
      "La première disparaît automatiquement",
      "La nouvelle ne se pose pas",
      "Vous perdez de l'or",
      'b',
      "Vous ne pouvez avoir qu'une seule Control Ward active, la précédente disparaît si vous en posez une nouvelle."
    ),
  ]
);
