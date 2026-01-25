import { createModule, createQuestion } from '../utils';

export const module01ChampionClasses = createModule(
  'Classes de champions',
  'champion-classes',
  'Tanks, Combattants, Mages, Assassins, Tireurs, Supports',
  1,
  // Theory Content
  `## Les classes de champions

League of Legends compte plus de 160 champions, répartis en **6 classes principales**. Chaque classe a un rôle et un style de jeu distinct.

## Tanks

Les **Tanks** sont des champions très résistants :
- Énormément de **PV** et de résistances
- Peu de dégâts mais beaucoup de **CC** (contrôle)
- Rôle : absorber les dégâts et protéger l'équipe
- Exemples : Malphite, Ornn, Sion

## Combattants (Fighters/Bruisers)

Les **Combattants** mélangent dégâts et résistance :
- Équilibre entre **offense et défense**
- Efficaces dans les longs combats
- Rôle : duel et mêlée prolongée
- Exemples : Darius, Garen, Riven

## Mages

Les **Mages** infligent des dégâts magiques :
- Dégâts **AP** (Ability Power) à distance
- Utilisent leurs **sorts** principalement
- Rôle : burst ou contrôle de zone
- Exemples : Lux, Syndra, Viktor

## Assassins

Les **Assassins** éliminent les cibles fragiles :
- Très **mobiles** et dangereux
- Burst extrêmement élevé
- Rôle : tuer l'ADC ou le mage ennemi
- Exemples : Zed, Katarina, Akali

## Tireurs (Marksmen/ADC)

Les **Tireurs** sont les damage dealers à distance :
- Dégâts constants via **auto-attaques**
- Fragiles mais DPS énorme en late
- Rôle : carry avec les dégâts
- Exemples : Jinx, Caitlyn, Vayne

## Récapitulatif

- **Tanks** : Résistants, CC, protection
- **Combattants** : Équilibrés, duels
- **Mages** : Dégâts magiques, sorts
- **Assassins** : Burst, mobilité, élimination
- **Tireurs** : DPS à distance, auto-attaques
- **Supports** : Utilitaires, protection, vision`,

  // Practice Instructions
  `## Objectif

Identifier les différentes classes de champions dans le jeu.

## Étapes

1. Ouvrez le client LoL et allez dans la collection de champions
2. Filtrez par classe (utilisez les filtres)
3. Observez 2-3 champions par classe
4. Notez les différences visuelles (tank = gros, assassin = agile)
5. En partie d'entraînement, essayez un champion de chaque classe

## Critère de réussite

Vous pouvez identifier la classe d'un champion en regardant son apparence et ses capacités.`,

  // Questions
  [
    createQuestion(
      "Combien de classes principales de champions existe-t-il ?",
      "4 classes",
      "5 classes",
      "6 classes",
      "8 classes",
      'c',
      "Il y a 6 classes principales : Tanks, Combattants, Mages, Assassins, Tireurs, Supports."
    ),
    createQuestion(
      "Quel est le rôle principal d'un Tank ?",
      "Faire des dégâts",
      "Absorber les dégâts et protéger l'équipe",
      "Soigner les alliés",
      "Détruire les tourelles",
      'b',
      "Les Tanks encaissent les dégâts pour protéger leurs coéquipiers."
    ),
    createQuestion(
      "Qu'est-ce qui caractérise un Assassin ?",
      "Beaucoup de PV",
      "Mobilité élevée et burst",
      "Soins puissants",
      "Dégâts constants lents",
      'b',
      "Les Assassins sont mobiles et infligent des dégâts rapides et élevés."
    ),
    createQuestion(
      "D'où viennent les dégâts d'un Mage ?",
      "Des auto-attaques",
      "De ses sorts (Ability Power)",
      "De son armure",
      "Des sbires",
      'b',
      "Les Mages utilisent principalement leurs sorts pour infliger des dégâts AP."
    ),
    createQuestion(
      "Qu'est-ce qu'un Bruiser ?",
      "Un autre nom pour Assassin",
      "Un champion équilibré entre dégâts et résistance",
      "Un champion de support",
      "Un monstre de jungle",
      'b',
      "Les Bruisers (Combattants) mélangent dégâts et durabilité."
    ),
    createQuestion(
      "Quel est le point faible des Tireurs (ADC) ?",
      "Pas de dégâts",
      "Très fragiles",
      "Trop lents",
      "Pas de portée",
      'b',
      "Les Tireurs sont fragiles malgré leurs dégâts élevés."
    ),
    createQuestion(
      "Qui les Assassins ciblent-ils en priorité ?",
      "Les Tanks",
      "Les cibles fragiles (ADC, Mages)",
      "Les sbires",
      "Les tourelles",
      'b',
      "Les Assassins cherchent à éliminer les carries ennemis fragiles."
    ),
    createQuestion(
      "Quelle classe utilise principalement les auto-attaques ?",
      "Mages",
      "Tireurs (Marksmen)",
      "Tanks",
      "Supports",
      'b',
      "Les Tireurs font leurs dégâts principalement via les auto-attaques."
    ),
    createQuestion(
      "Malphite est un exemple de quelle classe ?",
      "Assassin",
      "Tank",
      "Tireur",
      "Mage",
      'b',
      "Malphite est un Tank avec beaucoup de résistances et du CC."
    ),
    createQuestion(
      "Quelle est la différence entre un Tank et un Combattant ?",
      "Aucune différence",
      "Le Combattant fait plus de dégâts mais résiste moins",
      "Le Tank fait plus de dégâts",
      "Le Combattant a plus de CC",
      'b',
      "Les Combattants sacrifient de la résistance pour plus de dégâts."
    ),
  ]
);
