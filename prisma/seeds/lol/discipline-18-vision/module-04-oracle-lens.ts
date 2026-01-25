import { createModule, createQuestion } from '../utils';

export const module04OracleLens = createModule(
  'Altération oraculaire (trinket rouge)',
  'oracle-lens',
  'Maîtriser le Sweeper pour détecter et détruire les wards ennemies',
  4,
  // Theory Content (5+ slides)
  `## Qu'est-ce que l'Altération oraculaire ?

L'**Altération oraculaire** (Oracle Lens ou "Sweeper/Trinket rouge") est un trinket alternatif qui remplace le Totem furtif. Il permet de détecter les wards invisibles ennemies dans une zone autour de votre champion pendant quelques secondes.

## Caractéristiques de l'Oracle Lens

- **Coût** : Gratuit (échange contre le Totem furtif)
- **Temps de recharge** : ~90-60 secondes (diminue avec le niveau)
- **Durée d'activation** : 6 secondes
- **Effet** : Révèle et désactive les wards invisibles dans un rayon autour de vous
- **Disponibilité** : Peut être obtenu dès le niveau 1

## Comment utiliser l'Oracle Lens

Activez l'Oracle Lens avec la touche **4** (par défaut). Pendant 6 secondes, une zone rouge se déplace avec votre champion et :
- **Révèle** les wards invisibles (Stealth Wards)
- **Désactive** temporairement ces wards
- **Montre** les pièges invisibles (comme ceux de Teemo, Shaco)

Vous pouvez alors **détruire** les wards révélées en les attaquant.

## Qui devrait utiliser l'Oracle Lens ?

L'Oracle Lens est particulièrement recommandé pour :
- **Supports** : Dès le niveau 1 ou après avoir posé leurs wards initiales
- **Junglers** : Pour ganker sans être repérés
- **Roamers** : Midlaners qui bougent beaucoup (Twisted Fate, Katarina)

Les carries (ADC, Top) gardent généralement le Totem furtif plus longtemps.

## Quand activer le Sweeper ?

Utilisez votre Sweeper dans des situations précises :
- **Avant un gank** : Pour ne pas être vu arriver
- **Autour des objectifs** : Pour nettoyer la vision avant Dragon/Baron
- **Dans les bushes clés** : River, tribush, entrées de jungle
- **Après avoir vu l'ennemi warder** : Pour immédiatement détruire leur ward`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser efficacement l'Altération oraculaire pour nettoyer la vision ennemie.

## Étapes

1. Lancez une partie en tant que Support ou Jungler
2. Échangez votre Totem furtif contre l'Altération oraculaire dès le niveau 1 (Support) ou niveau 4 (Jungler)
3. Utilisez le Sweeper dans les bushes clés : river, tribush, entrées de jungle
4. Comptez le nombre de wards ennemies que vous détectez et détruisez
5. Avant chaque gank ou objectif, activez votre Sweeper pour sécuriser la zone
6. Notez combien de fois le Sweeper vous a permis de ganker sans être repéré

## Critère de réussite

Vous avez détruit au moins 5 wards ennemies grâce à l'Oracle Lens et réussi au moins 2 ganks facilités par le nettoyage de vision.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le nom français de l'Oracle Lens ?",
      "Totem furtif",
      "Altération oraculaire",
      "Orbe de clairvoyance",
      "Balise de contrôle",
      'b',
      "L'Oracle Lens se nomme Altération oraculaire en français."
    ),
    createQuestion(
      "Combien de temps dure l'effet de l'Oracle Lens une fois activé ?",
      "3 secondes",
      "6 secondes",
      "10 secondes",
      "15 secondes",
      'b',
      "L'Oracle Lens révèle les wards pendant 6 secondes après activation."
    ),
    createQuestion(
      "Que fait l'Oracle Lens aux wards invisibles ennemies ?",
      "Il les détruit instantanément",
      "Il les révèle et les désactive temporairement",
      "Il les convertit en wards alliées",
      "Il les déplace",
      'b',
      "L'Oracle Lens révèle et désactive les wards, vous permettant ensuite de les détruire manuellement."
    ),
    createQuestion(
      "Quel rôle devrait généralement utiliser l'Oracle Lens en premier ?",
      "ADC",
      "Top laner",
      "Support",
      "Mid mage",
      'c',
      "Les Supports échangent souvent leur trinket contre l'Oracle Lens très tôt pour contrôler la vision."
    ),
    createQuestion(
      "Quand est-il idéal d'activer l'Oracle Lens avant un gank ?",
      "Après avoir été repéré",
      "Avant d'entrer dans la zone de gank potentiellement wardée",
      "Seulement en fin de partie",
      "Jamais, c'est inutile pour les ganks",
      'b',
      "Activer le Sweeper avant d'entrer dans une zone permet de nettoyer les wards et ganker sans être vu."
    ),
    createQuestion(
      "L'Oracle Lens peut-il révéler les pièges de Teemo ?",
      "Non, jamais",
      "Oui, il révèle aussi les pièges invisibles",
      "Seulement les gros champignons",
      "Seulement en équipe",
      'b',
      "L'Oracle Lens révèle tous les objets invisibles incluant les pièges de Teemo et Shaco."
    ),
    createQuestion(
      "Que devez-vous faire après que l'Oracle Lens révèle une ward ?",
      "Rien, elle est déjà détruite",
      "L'attaquer manuellement pour la détruire",
      "Poser une ward dessus",
      "Fuir la zone",
      'b',
      "L'Oracle Lens ne détruit pas les wards, vous devez les attaquer vous-même."
    ),
    createQuestion(
      "Quel est le temps de recharge approximatif de l'Oracle Lens ?",
      "30-20 secondes",
      "60-50 secondes",
      "90-60 secondes",
      "120-90 secondes",
      'c',
      "L'Oracle Lens a un cooldown de 90 à 60 secondes selon votre niveau."
    ),
    createQuestion(
      "Pourquoi les junglers utilisent-ils souvent l'Oracle Lens ?",
      "Pour poser plus de wards",
      "Pour ganker sans être repérés par les wards",
      "Pour voir les monstres neutres",
      "Pour augmenter leurs dégâts",
      'b',
      "Les junglers veulent nettoyer la vision pour que leurs ganks soient des surprises."
    ),
    createQuestion(
      "L'Oracle Lens coûte-t-il de l'or pour l'obtenir ?",
      "50 pièces d'or",
      "75 pièces d'or",
      "Gratuit, échange contre le trinket actuel",
      "100 pièces d'or",
      'c',
      "L'échange de trinket est gratuit mais vous perdez votre Totem furtif."
    ),
  ]
);
