import { createModule, createQuestion } from '../utils';

export const module08PreGameRoutine = createModule(
  'Routines pre-partie',
  'pre-game-routine',
  'Preparer son corps et son esprit avant de jouer',
  8,
  // Theory Content (5+ slides)
  `## L'importance de la preparation

Les athletes professionnels ne commencent jamais une competition sans **preparation**. Les joueurs de LoL devraient faire de meme. Une bonne routine pre-partie :
- Met votre **corps** en condition
- Prepare votre **esprit** a la concentration
- Reduit le **stress** et l'anxiete
- Ameliore vos **performances** des la premiere partie

## L'echauffement physique

Meme pour un jeu video, votre corps a besoin d'etre prepare :
- **Etirements des mains et poignets** - evite les douleurs et ameliore la precision
- **Etirements du cou et des epaules** - reduit les tensions
- **Mouvements des yeux** - prepare a suivre l'action sur l'ecran
- **Quelques minutes debout** - active la circulation sanguine

Un corps detendu = un esprit plus clair.

## L'echauffement mental

Avant de lancer une partie classee, preparez votre esprit :
- **Respirations profondes** - 5-10 respirations pour se centrer
- **Visualisation** - imaginez-vous faire de bons plays
- **Intention** - definissez ce sur quoi vous allez vous concentrer
- **Acceptation** - acceptez que le resultat est incertain

Cet echauffement ne prend que 2-3 minutes et fait une vraie difference.

## L'echauffement en jeu

Avant la ranked, faites un **echauffement en jeu** :
- **1-2 parties normales** ou ARAM - pour chauffer vos reflexes
- **Mode entrainement** - pour pratiquer les combos et le CS
- **Custom game** - pour revoir les mecaniques du champion

Ne faites jamais votre premiere partie du jour en ranked directement.

## Creer votre routine personnelle

Une bonne routine pre-partie pourrait ressembler a :
1. **5 min** : Etirements (mains, poignets, cou)
2. **2 min** : Respirations profondes et visualisation
3. **1 min** : Definition de l'objectif de la session
4. **15-20 min** : Partie normale ou entrainement
5. **Pret** pour la ranked !

Adaptez cette routine a vos besoins et votre emploi du temps.

## Les erreurs a eviter avant de jouer

Ne faites **PAS** ces choses juste avant de jouer :
- **Regarder des streams/videos** qui vous hype trop - ca peut vous frustrer si vous ne faites pas les memes plays
- **Manger un gros repas** - ca rend somnolent
- **Consommer trop de cafeine** - ca peut rendre nerveux et imprecis
- **Lire les patchnotes** juste avant - ca peut creer de la confusion
- **Jouer immediatement apres un evenement stressant** - laissez-vous le temps de decompresser

## Recapitulatif

- La **preparation** est essentielle pour performer
- L'**echauffement physique** (mains, poignets, cou) previent les douleurs
- L'**echauffement mental** (respiration, visualisation) prepare a la concentration
- L'**echauffement en jeu** (normales, entrainement) active les reflexes
- Creez une **routine personnalisee** de 20-30 minutes
- **Evitez** les facteurs qui perturbent votre preparation`,

  // Practice Instructions
  `## Objectif

Creer et tester votre propre routine pre-partie pour ameliorer votre preparation avant les parties classees.

## Étapes

1. Creez une routine pre-partie de 20-30 minutes incluant :
   - Echauffement physique (mains, poignets, cou) - 3-5 min
   - Echauffement mental (respiration, intention) - 2-3 min
   - Echauffement en jeu (normale ou entrainement) - 15-20 min
2. Ecrivez cette routine sur papier ou dans un fichier
3. Testez cette routine avant votre prochaine session ranked
4. Pendant la premiere partie ranked, notez comment vous vous sentez
5. Comparez avec les sessions ou vous jouez sans preparation
6. Ajustez la routine selon vos observations
7. Repetez pendant une semaine

## Critère de reussite

Vous avez cree une routine ecrite, l'avez testee au moins 3 fois, et avez note une amelioration dans votre etat de preparation.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi les joueurs devraient-ils avoir une routine pre-partie ?",
      "C'est une perte de temps",
      "Pour preparer le corps et l'esprit et ameliorer les performances",
      "Pour impressionner les coequipiers",
      "Uniquement les pros en ont besoin",
      'b',
      "Une routine prepare le corps et l'esprit, reduisant le stress et ameliorant les performances."
    ),
    createQuestion(
      "Que comprend l'echauffement physique pour LoL ?",
      "Courir un marathon",
      "Etirements des mains, poignets, cou et epaules",
      "Soulever des poids",
      "Aucun echauffement physique n'est necessaire",
      'b',
      "Les etirements des mains, poignets, cou et epaules preparent le corps a jouer."
    ),
    createQuestion(
      "Que comprend l'echauffement mental ?",
      "Regarder des videos de rage",
      "Respirations profondes, visualisation et definition d'intention",
      "Lire les forums de plaintes",
      "Stresser sur la partie a venir",
      'b',
      "L'echauffement mental inclut respiration, visualisation et preparation mentale."
    ),
    createQuestion(
      "Que faire comme echauffement en jeu ?",
      "Directement lancer une ranked",
      "1-2 normales ou mode entrainement",
      "Regarder un stream",
      "Lire les patchnotes",
      'b',
      "Des parties normales ou le mode entrainement preparent les reflexes avant la ranked."
    ),
    createQuestion(
      "Combien de temps devrait durer une routine pre-partie complete ?",
      "5 minutes maximum",
      "20-30 minutes",
      "Au moins 2 heures",
      "Aucune duree specifique",
      'b',
      "Une routine complete prend environ 20-30 minutes, incluant tous les echauffements."
    ),
    createQuestion(
      "Pourquoi eviter un gros repas juste avant de jouer ?",
      "Ca donne des superpouvoirs",
      "Ca rend somnolent et reduit la concentration",
      "Ca ameliore les reflexes",
      "Ca n'a aucun impact",
      'b',
      "La digestion d'un gros repas rend somnolent et affecte negativement la concentration."
    ),
    createQuestion(
      "Pourquoi les etirements des mains sont-ils importants ?",
      "Pour avoir de plus belles mains",
      "Pour prevenir les douleurs et ameliorer la precision",
      "Ce n'est pas important pour jouer",
      "Pour impressionner sur stream",
      'b',
      "Les etirements previennent les douleurs (comme le syndrome du canal carpien) et ameliorent la precision."
    ),
    createQuestion(
      "Que faire apres un evenement stressant de la vie reelle ?",
      "Jouer immediatement pour se defouler",
      "Se laisser le temps de decompresser avant de jouer",
      "Jouer en ranked pour se prouver quelque chose",
      "Ca n'a pas d'impact sur le jeu",
      'b',
      "Jouer stresse affecte negativement les performances - mieux vaut decompresser d'abord."
    ),
    createQuestion(
      "Pourquoi eviter de regarder des streams qui vous hype trop avant de jouer ?",
      "Les streams sont interdits",
      "Ca peut vous frustrer si vous ne reproduisez pas les memes plays",
      "Ca ameliore toujours les performances",
      "Les streamers trichent",
      'b',
      "Etre trop hype peut mener a la frustration si vous ne faites pas les memes plays."
    ),
    createQuestion(
      "Pourquoi ne pas faire sa premiere partie du jour directement en ranked ?",
      "C'est une superstition",
      "Les reflexes et la concentration ne sont pas encore optimaux",
      "Le matchmaking est pire le matin",
      "Ca n'a pas d'importance",
      'b',
      "Sans echauffement, vos reflexes et votre concentration ne sont pas a leur maximum."
    ),
  ]
);
