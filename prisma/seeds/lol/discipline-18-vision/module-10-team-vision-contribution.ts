import { createModule, createQuestion } from '../utils';

export const module10TeamVisionContribution = createModule(
  'Contribution de toute l\'équipe',
  'team-vision-contribution',
  'Comprendre que la vision est une responsabilité partagée par tous les joueurs, pas seulement le support',
  10,
  // Theory Content (5+ slides)
  `## La vision : une responsabilité collective

Contrairement à une idée reçue, **la vision n'est pas uniquement le travail du support**. Chaque membre de l'équipe doit contribuer au contrôle de vision pour maximiser les chances de victoire. Une équipe où seul le support pose des wards sera toujours en désavantage face à une équipe où tout le monde participe.

## Le coût minimal des Pink Wards

Les **Control Wards (Pink Wards)** coûtent seulement **75 pièces d'or**. C'est moins qu'un canon minion ! Ce petit investissement peut :
- Révéler un gank et sauver votre vie (300+ or)
- Permettre un pick sur un ennemi mal positionné
- Sécuriser un objectif majeur (Dragon, Baron)
- Détecter les wards ennemies pour les détruire

## Qui doit acheter des Pink Wards ?

**Tous les rôles** doivent acheter régulièrement des Control Wards :
- **Top** : Pour contrôler la river et les ganks du jungler
- **Jungle** : Pour sécuriser les objectifs et les invades
- **Mid** : Pour protéger les roams et surveiller la river
- **ADC** : Pour la sécurité en lane et les teamfights
- **Support** : En complément de son item de support

## Le refresh constant de la vision

La vision n'est pas un achat ponctuel, c'est un **processus continu** :
- Les Stealth Wards expirent après 90-120 secondes
- Les Control Wards peuvent être détruites par l'ennemi
- Le brouillard de guerre change selon les mouvements

Vous devez **constamment renouveler** vos wards tout au long de la partie. À chaque back, achetez une Pink Ward si vous n'en avez pas.

## L'impact d'une vision collective

Quand **toute l'équipe** contribue à la vision :
- La carte est couverte en permanence
- Les rotations ennemies sont détectées plus tôt
- Les embuscades deviennent impossibles pour l'adversaire
- Les objectifs sont sécurisés plus facilement
- Le jungler ennemi est suivi et contré efficacement

Une équipe avec 15+ wards actives domine une équipe avec seulement 5.`,

  // Practice Instructions
  `## Objectif

Développer le réflexe d'acheter des Control Wards sur tous les rôles et maintenir une vision collective constante.

## Étapes

1. Lancez une partie classique ou rankée sur n'importe quel rôle (sauf support)
2. À votre premier back, achetez une Control Ward (75 or) en plus de vos items
3. Placez cette ward dans un endroit stratégique (tribush, river, entrée de jungle)
4. Répétez ce processus à chaque back : toujours avoir une Pink Ward en inventaire
5. Communiquez avec votre équipe en pingeant les wards ennemies détectées
6. Comptez le nombre de Control Wards que vous achetez pendant la partie
7. Observez l'impact sur votre sécurité et celle de votre équipe

## Critère de réussite

Vous avez acheté et posé au moins 4 Control Wards pendant la partie (sur un rôle autre que support), et vous avez maintenu une vision active dans votre zone de jeu tout au long de la partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le coût d'une Control Ward (Pink Ward) ?",
      "50 or",
      "75 or",
      "100 or",
      "125 or",
      'b',
      "Une Control Ward coûte 75 or, un investissement minimal pour la sécurité qu'elle apporte."
    ),
    createQuestion(
      "Qui devrait acheter des Control Wards régulièrement ?",
      "Uniquement le support",
      "Le support et le jungler",
      "Tous les membres de l'équipe",
      "Uniquement ceux qui ont de la place dans l'inventaire",
      'c',
      "La vision est une responsabilité collective : tous les joueurs doivent contribuer."
    ),
    createQuestion(
      "Pourquoi le Top laner devrait-il acheter des Pink Wards ?",
      "Pour impressionner son support",
      "Pour contrôler la river et détecter les ganks",
      "Ce n'est pas nécessaire en top lane",
      "Uniquement pour les teamfights",
      'b',
      "Le Top est isolé et vulnérable aux ganks, une Pink Ward dans la river peut sauver sa vie."
    ),
    createQuestion(
      "À quelle fréquence devriez-vous renouveler votre vision ?",
      "Une fois en début de partie suffit",
      "Uniquement quand votre ward est détruite",
      "Constamment, car les wards expirent et sont détruites",
      "Jamais, c'est le travail du support",
      'c',
      "La vision doit être constamment renouvelée car les wards expirent et peuvent être détruites."
    ),
    createQuestion(
      "Quel est un bon réflexe à chaque back ?",
      "Acheter uniquement des items offensifs",
      "Vérifier si vous avez une Control Ward et en acheter une si nécessaire",
      "Ignorer les wards jusqu'à la fin de partie",
      "Attendre que le support achète les wards",
      'b',
      "À chaque back, vérifiez que vous avez une Pink Ward en inventaire."
    ),
    createQuestion(
      "Combien coûte un canon minion comparé à une Pink Ward ?",
      "Moins cher qu'une Pink Ward",
      "Le même prix qu'une Pink Ward",
      "Plus cher qu'une Pink Ward",
      "Les canons ne donnent pas d'or",
      'c',
      "Un canon minion vaut plus de 75 or, donc une Pink Ward est un très petit investissement."
    ),
    createQuestion(
      "Quel avantage a une équipe où tous contribuent à la vision ?",
      "Aucun avantage particulier",
      "La carte est constamment couverte et les rotations détectées",
      "Le support peut jouer plus agressif",
      "Les items sont moins chers",
      'b',
      "Une vision collective signifie une couverture permanente et une détection rapide des mouvements ennemis."
    ),
    createQuestion(
      "Pourquoi l'ADC devrait-il aussi acheter des Pink Wards ?",
      "L'ADC ne devrait jamais acheter de wards",
      "Pour sa sécurité en lane et pendant les teamfights",
      "Uniquement en late game",
      "Pour remplacer le support",
      'b',
      "L'ADC est une cible prioritaire, une Pink Ward peut révéler les assassins ou embuscades."
    ),
    createQuestion(
      "Que se passe-t-il si seul le support pose des wards ?",
      "C'est suffisant pour l'équipe",
      "L'équipe aura une vision limitée et des zones non couvertes",
      "Le support gagne plus d'or",
      "Les wards durent plus longtemps",
      'b',
      "Un seul joueur ne peut pas couvrir toute la carte, laissant des zones dangereuses non wardées."
    ),
    createQuestion(
      "Combien de wards actives une équipe bien coordonnée peut-elle avoir ?",
      "Maximum 5",
      "Entre 5 et 10",
      "15 ou plus",
      "C'est limité à 3 par équipe",
      'c',
      "Avec 5 joueurs contribuant, une équipe peut facilement maintenir 15+ wards sur la carte."
    ),
  ]
);
