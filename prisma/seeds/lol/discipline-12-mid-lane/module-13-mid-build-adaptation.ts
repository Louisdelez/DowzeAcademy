import { createModule, createQuestion } from '../utils';

export const module13MidBuildAdaptation = createModule(
  "Adaptation de build mid",
  'mid-build-adaptation',
  'Choisir ses items selon la situation',
  13,
  // Theory Content (5+ slides)
  `## L'importance de l'adaptation du build

Un **build** n'est pas figé. Les meilleurs mid laners adaptent leurs items en fonction de :

- La **composition ennemie** (AP/AD heavy, tanks)
- L'**état de la partie** (en avance, en retard)
- Les **menaces spécifiques** (assassin fed, carry à shutdown)
- Les **besoins de l'équipe** (plus de dégâts, plus de survie)

Suivre aveuglément un guide sans adapter = perdre des games.

## Les items mythiques et leur choix

Le premier item majeur définit votre **direction** :

**Pour les mages** :
- **Luden's Companion** : Burst et waveclear
- **Liandry's Torment** : DPS contre les tanks
- **Rod of Ages** : Sustain et scaling

**Pour les assassins AP** :
- **Hextech Rocketbelt** : Gap close et burst
- **Night Harvester** : Burst AoE

**Pour les assassins AD** :
- **Youmuu's Ghostblade** : Mobilité et burst
- **Eclipse** : Sustain et burst

## Les items défensifs

Savoir quand acheter **défensif** est crucial :

**Contre les AP** :
- **Banshee's Veil** : Shield anti-CC
- **Mercury's Treads** : Ténacité et MR

**Contre les AD** :
- **Zhonya's Hourglass** : ESSENTIEL contre les assassins AD
- **Seeker's Armguard** : Composant early efficace

**Conseil** : Zhonya's est souvent le 2ème ou 3ème item contre une équipe AD heavy ou un assassin fed.

## Adapter selon l'état de la partie

**Quand vous êtes en avance** :
- Items de **pur dégâts** pour snowball
- **Mejai's Soulstealer** si vous êtes très en avance
- Items de **pénétration** pour one-shot

**Quand vous êtes en retard** :
- Items **utilitaires** (CC, zone)
- Items **défensifs** pour survivre
- Évitez les items de stacking (Mejai's)

## Récapitulatif

- **Adaptez** votre build à chaque partie
- Le **premier item** définit votre direction
- **Zhonya's Hourglass** est vital contre les assassins AD
- **Banshee's Veil** contre les CC AP
- En **avance** : plus de dégâts, en **retard** : plus d'utilité
- Observez le **tab** (scoreboard) pour voir les items ennemis`,

  // Practice Instructions
  `## Objectif

Apprendre à adapter votre build mid en fonction de la composition ennemie et de l'état de la partie.

## Étapes

1. Avant de lancer une partie, notez votre build "par défaut"
2. En champ select, analysez la composition ennemie :
   - Combien de sources AP ? Combien AD ?
   - Y a-t-il des assassins ? Des tanks ?
   - Quelles sont les menaces principales ?
3. Planifiez votre build en conséquence :
   - Premier item : standard ou adapté ?
   - Deuxième item : offensif ou défensif ?
   - Bottes : Sorc shoes ou Mercury's/Plated ?
4. En partie, vérifiez le scoreboard (Tab) régulièrement :
   - Qui est fed chez l'ennemi ?
   - Qui build quoi ?
5. Adaptez votre build en temps réel :
   - Zed 5/0 ? Rush Zhonya's
   - Équipe full tank ? Liandry's + Void Staff
   - Vous êtes 5/0 ? Considérez Mejai's
6. Après la partie, analysez si vos choix étaient corrects

## Critère de réussite

Vous pouvez justifier chaque item acheté dans une partie par rapport à la composition ennemie et l'état de la partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi ne pas suivre le même build à chaque partie ?",
      "Les builds sont toujours identiques",
      "Chaque partie a des compositions et situations différentes nécessitant des adaptations",
      "Les items ne changent rien",
      "Le build est décidé avant la partie",
      'b',
      "Adapter son build permet de répondre aux menaces spécifiques de chaque partie."
    ),
    createQuestion(
      "Quel item est ESSENTIEL pour un mage contre un Zed ou Talon fed ?",
      "Rabadon's Deathcap",
      "Zhonya's Hourglass",
      "Void Staff",
      "Mejai's Soulstealer",
      'b',
      "Zhonya's permet de devenir invulnérable pendant les combos d'assassins AD."
    ),
    createQuestion(
      "Contre une équipe avec beaucoup de tanks, quel item mage est recommandé ?",
      "Luden's Companion",
      "Liandry's Torment",
      "Hextech Rocketbelt",
      "Mejai's Soulstealer",
      'b',
      "Liandry's inflige des dégâts basés sur le % de vie max, excellent contre les tanks."
    ),
    createQuestion(
      "Quand devriez-vous acheter Mejai's Soulstealer ?",
      "Toujours en premier item",
      "Quand vous êtes très en avance et confiant de ne pas mourir",
      "Quand vous êtes en retard",
      "Jamais",
      'b',
      "Mejai's est un item de snowball qui devient mauvais si vous mourez (perte de stacks)."
    ),
    createQuestion(
      "Quel item offre un bouclier contre les sorts et CC ?",
      "Zhonya's Hourglass",
      "Banshee's Veil",
      "Rabadon's Deathcap",
      "Void Staff",
      'b',
      "Banshee's Veil donne un bouclier qui bloque le premier sort ennemi."
    ),
    createQuestion(
      "Si vous êtes en retard dans la partie, quel type d'items prioriser ?",
      "Items de pur dégâts",
      "Items utilitaires et défensifs pour survivre",
      "Items de stacking",
      "Aucun item",
      'b',
      "En retard, survivre et être utile est plus important que maximiser les dégâts."
    ),
    createQuestion(
      "Quel composant défensif peut être acheté early contre les AD ?",
      "Needlessly Large Rod",
      "Seeker's Armguard",
      "Lost Chapter",
      "Blasting Wand",
      'b',
      "Seeker's Armguard donne de l'armure et build vers Zhonya's, efficace early."
    ),
    createQuestion(
      "Comment savoir si un ennemi est 'fed' et représente une menace ?",
      "On ne peut pas savoir",
      "En regardant le scoreboard (Tab) pour voir ses kills et items",
      "En lui demandant",
      "En regardant son skin",
      'b',
      "Le Tab affiche les KDA et items de tous les joueurs pour évaluer les menaces."
    ),
    createQuestion(
      "Contre une équipe 4 AP + 1 AD, quelles bottes choisir ?",
      "Sorcerer's Shoes",
      "Mercury's Treads",
      "Berserker's Greaves",
      "Boots of Swiftness",
      'b',
      "Mercury's Treads offrent de la résistance magique et de la ténacité contre les équipes AP."
    ),
    createQuestion(
      "Quel item offre de la pénétration magique contre les ennemis avec beaucoup de MR ?",
      "Rabadon's Deathcap",
      "Void Staff",
      "Zhonya's Hourglass",
      "Mejai's Soulstealer",
      'b',
      "Void Staff offre un pourcentage de pénétration magique contre les cibles avec de la MR."
    ),
  ]
);
