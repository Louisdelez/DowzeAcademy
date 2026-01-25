import { createModule, createQuestion } from '../utils';

export const module05DeathTimers = createModule(
  'Mort tardive',
  'death-timers',
  'Gerer les timers de mort longs en late game',
  5,
  // Theory Content (5+ slides)
  `## Les timers de mort en late game

En late game, les **timers de mort** deviennent extremement longs. A niveau 18 et apres 30+ minutes, mourir peut signifier **50 a 70 secondes** hors du jeu. Cette duree est suffisante pour que l'ennemi prenne Baron, Elder, plusieurs tourelles, voire le Nexus.

## Comment sont calcules les timers de mort

Le timer de mort depend de plusieurs facteurs :

- **Niveau du champion** : Plus le niveau est haut, plus le timer est long
- **Duree de la partie** : Un multiplicateur augmente apres 15, 30 et 45 minutes
- **Formule simplifiee** : Timer = Niveau x 2.5 + (temps de jeu bonus)

A niveau 18 et 40 minutes, attendez-vous a 50-60 secondes de mort.

## L'impact d'une mort en late game

Une seule mort en late game peut :

- Permettre un **Baron** ou **Elder** gratuit a l'ennemi
- Mener a la perte de **2-3 tourelles** voire un inhibiteur
- Creer un avantage numerique pour un **siege du Nexus**
- **Finir la partie** directement si c'est un carry cle

## Valoriser sa vie

Pour eviter les morts couteuses :

- **Positionnement defensif** : Restez a portee de vos allies
- **Respect des menaces** : Ne sous-estimez pas les burst damage
- **Utiliser les escapes** : Flash, Zhonya, etc. sont precieux
- **Eviter l'isolement** : Ne vous aventurez jamais seul en late game
- **Patience** : Attendre le bon moment plutot que forcer

## Exploiter les morts ennemies

Quand un ennemi meurt en late game :

- **Evaluez le timer** : Combien de temps avant son retour ?
- **Priorisez les objectifs** : Baron > Elder > Inhibiteur > Tourelle
- **Calculez le timing** : Pouvez-vous finir l'objectif et plus ?
- **Ne surestimez pas** : Un 5v4 n'est pas un 5v0

Un timer de 50 secondes permet beaucoup, mais pas tout. Soyez realistes.

## Le respawn et le retour en jeu

Apres avoir respawn en late game :

- **Evaluez la situation** : Que se passe-t-il sur la carte ?
- **Decidez rapidement** : TP, courir, ou defendre la base ?
- **Communiquez** : Informez l'equipe de votre disponibilite
- **Priorisez** : Nexus menace > tourelles > objectifs

## Recapitulatif

- Les timers de mort atteignent 50-70 secondes en late game
- Une seule mort peut couter Baron, Elder, ou le Nexus
- Valorisez votre vie : positionnement, patience, evitez l'isolement
- Exploitez les morts ennemies pour prendre des objectifs
- Apres respawn, evaluez et reagissez rapidement`,

  // Practice Instructions
  `## Objectif

Prendre conscience de l'importance des timers de mort en late game et adapter votre style de jeu.

## Etapes

1. En partie, notez mentalement les timers de mort apres 30 minutes
2. Quand un ennemi meurt, regardez son timer et listez ce que vous pouvez faire
3. Quand vous mourez, observez ce que l'ennemi prend pendant votre absence
4. Adaptez votre positionnement pour eviter les morts inutiles
5. Apres la partie, reflechissez a l'impact de chaque mort

## Critere de reussite

Vous avez consciemment evite au moins une situation risquee en late game en pensant aux consequences d'une mort potentielle.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien de temps peut durer un timer de mort en late game (niveau 18, 40+ minutes) ?",
      "10-20 secondes",
      "30-40 secondes",
      "50-70 secondes",
      "2 minutes",
      'c',
      "Les timers de mort peuvent atteindre 50 a 70 secondes en late game."
    ),
    createQuestion(
      "Quels facteurs influencent le timer de mort ?",
      "Uniquement le nombre de kills",
      "Le niveau du champion et la duree de la partie",
      "Seulement les objets achetes",
      "Le nombre de morts precedentes uniquement",
      'b',
      "Le timer de mort depend principalement du niveau du champion et de la duree de la partie."
    ),
    createQuestion(
      "Que peut faire l'ennemi avec un timer de mort de 50+ secondes ?",
      "Presque rien",
      "Prendre Baron, Elder, tourelles, voire finir la partie",
      "Juste farmer",
      "Uniquement placer des balises",
      'b',
      "50 secondes permettent de prendre des objectifs majeurs ou meme de finir la partie."
    ),
    createQuestion(
      "Quel positionnement adopter en late game pour eviter de mourir ?",
      "Jouer agressivement seul",
      "Rester a portee de ses allies et eviter l'isolement",
      "Toujours etre en premiere ligne",
      "Se separer pour couvrir plus de terrain",
      'b',
      "Rester groupe et a portee de ses allies reduit les risques de se faire pick."
    ),
    createQuestion(
      "Pourquoi faut-il valoriser sa vie en late game ?",
      "Parce que les morts ne comptent pas",
      "Parce qu'une mort peut couter la partie",
      "Pour avoir plus de kills",
      "Cela n'a pas d'importance",
      'b',
      "En late game, une seule mort peut permettre a l'ennemi de gagner la partie."
    ),
    createQuestion(
      "Quelle est la priorite d'objectifs quand un ennemi meurt en late game ?",
      "Tourelle > Baron > Elder",
      "Baron > Elder > Inhibiteur > Tourelle",
      "Farm jungle > Tourelle > Baron",
      "Kills > Objectifs",
      'b',
      "Baron et Elder sont les objectifs les plus impactants, suivis des inhibiteurs et tourelles."
    ),
    createQuestion(
      "Un 5v4 apres un pick ennemi est-il equivalent a un 5v0 ?",
      "Oui, c'est pareil",
      "Non, les 4 ennemis restants peuvent encore vous tuer",
      "Le pick ne compte pas",
      "Oui, la partie est gagnee",
      'b',
      "Un 5v4 donne un avantage mais les 4 ennemis restants peuvent toujours contest ou vous tuer."
    ),
    createQuestion(
      "Que faire immediatement apres avoir respawn en late game ?",
      "Foncer vers l'ennemi",
      "Evaluer la situation et decider ou aller",
      "Farmer la jungle",
      "Attendre dans la base indefiniment",
      'b',
      "Apres respawn, il faut rapidement evaluer la situation et prendre la meilleure decision."
    ),
    createQuestion(
      "Quelle ressource faut-il particulierement preserver en late game ?",
      "Les balises",
      "Le Flash et les escapes defensives",
      "L'or accumule",
      "Les sbires",
      'b',
      "Flash, Zhonya et autres escapes sont precieux pour survivre en late game."
    ),
    createQuestion(
      "Pourquoi ne faut-il pas s'aventurer seul en late game ?",
      "C'est plus amusant en groupe",
      "Le risque de se faire pick est trop eleve",
      "Les monstres sont plus forts",
      "On gagne moins d'or",
      'b',
      "S'isoler en late game expose au risque de se faire pick, ce qui peut couter la partie."
    ),
  ]
);
