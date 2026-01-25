import { createModule, createQuestion } from '../utils';

export const module09FatigueManagement = createModule(
  'Gestion de la fatigue',
  'fatigue-management',
  'Reconnaitre la fatigue et ne pas forcer quand on est epuise',
  9,
  // Theory Content (5+ slides)
  `## La fatigue affecte vos performances

La **fatigue** est l'un des plus grands ennemis de la performance dans LoL. Quand vous etes fatigue :
- Vos **temps de reaction** augmentent
- Votre **prise de decision** se degrade
- Votre **concentration** diminue
- Vous faites des **erreurs basiques**
- Vous etes plus susceptible de **tilter**

Jouer fatigue, c'est jouer avec un handicap.

## Reconnaitre les signes de fatigue

Apprenez a detecter quand vous etes fatigue :
- **Yeux** : fatigue oculaire, difficulte a fixer l'ecran
- **Corps** : tensions, envie de s'etirer constamment
- **Concentration** : vous "zappez" et ratez des informations evidentes
- **Decisions** : vous faites des plays que vous savez etre mauvais
- **Emotions** : irritabilite accrue, patience reduite
- **Baillements** frequents

Si vous remarquez ces signes, **il est temps de s'arreter**.

## Pourquoi forcer est contre-productif

Beaucoup de joueurs pensent : "Je vais faire une derniere partie pour finir sur une victoire." C'est une **erreur courante** car :
- La fatigue garantit quasi-certaines des performances degradees
- Vous risquez de **perdre des LP** que vous auriez gardes en vous arretant
- Vous accumulez de la **fatigue** pour les sessions suivantes
- Vous transformez le jeu en **corvee** plutot qu'en plaisir

Savoir s'arreter est une competence en soi.

## Gerer vos sessions de jeu

Recommandations pour des sessions saines :
- **Limitez vos sessions** a 2-3 heures maximum
- Faites une **pause de 10-15 min** toutes les heures
- **Arretez-vous** apres 2 defaites consecutives si vous etes fatigue
- Ne jouez **pas tard dans la nuit** si vous devez vous lever tot
- **Hydratez-vous** et mangez des snacks sains

La qualite des parties compte plus que la quantite.

## Le sommeil est crucial

Le **sommeil** affecte enormement vos performances :
- Un manque de sommeil reduit les capacites cognitives de 20-50%
- Les reflexes sont plus lents
- La memoire a court terme est affectee
- La regulation emotionnelle est compromise

Jouer bien repose > Jouer beaucoup fatigue. **Priorisez le sommeil**.

## Planifier intelligemment ses sessions

Pour optimiser vos performances :
- Jouez quand vous etes **le plus alerte** (souvent le matin ou debut d'apres-midi)
- Evitez de jouer **juste avant de dormir** (stimulation + emotions)
- Ne jouez pas **en compensation** ("Je n'ai pas joue hier, je dois rattraper")
- Ecoutez votre **corps** : s'il dit stop, arretez
- Privilegiez des **sessions regulieres courtes** plutot que des marathons occasionnels

## Recapitulatif

- La **fatigue degrade significativement** vos performances
- Apprenez a **reconnaitre les signes** de fatigue
- **Forcer quand on est fatigue** est contre-productif
- **Limitez vos sessions** et faites des pauses regulieres
- Le **sommeil est crucial** pour performer
- **La qualite** des parties compte plus que la **quantite**`,

  // Practice Instructions
  `## Objectif

Developper la conscience de votre niveau de fatigue et la discipline de s'arreter au bon moment.

## Étapes

1. Avant chaque partie, evaluez votre niveau de fatigue sur une echelle de 1 a 10
2. Notez l'heure de debut de votre session
3. Toutes les heures, reevaluez votre fatigue et faites une pause de 5-10 min
4. Apres chaque partie, notez votre score de fatigue et le resultat
5. Engagez-vous a arreter quand votre fatigue atteint 7/10
6. En fin de session, analysez :
   - Correlation entre fatigue et resultats
   - Moment ou vous auriez du vous arreter
7. Repetez pendant une semaine pour creer l'habitude

## Critère de reussite

Vous avez suivi le protocole pendant au moins 5 sessions et identifie votre seuil de fatigue optimal pour arreter de jouer.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Comment la fatigue affecte-t-elle vos performances ?",
      "Elle les ameliore grace a la relaxation",
      "Elle augmente les temps de reaction et degrade les decisions",
      "Elle n'a aucun impact mesurable",
      "Elle vous rend plus concentre",
      'b',
      "La fatigue augmente les temps de reaction, reduit la concentration et degrade la prise de decision."
    ),
    createQuestion(
      "Quel est un signe physique de fatigue pendant le jeu ?",
      "Des performances ameliorees",
      "Fatigue oculaire et envie de s'etirer constamment",
      "Plus d'energie que d'habitude",
      "Moins de stress",
      'b',
      "La fatigue oculaire et les tensions corporelles sont des signes physiques de fatigue."
    ),
    createQuestion(
      "Pourquoi 'faire une derniere partie pour finir sur une victoire' est-il risque ?",
      "C'est une excellente strategie",
      "La fatigue garantit des performances degradees",
      "Le matchmaking devient meilleur tard",
      "Ca n'a pas d'impact",
      'b',
      "Jouer fatigue degrade les performances, rendant la victoire moins probable."
    ),
    createQuestion(
      "Quelle duree de session est recommandee ?",
      "6-8 heures minimum",
      "2-3 heures maximum avec des pauses",
      "Toute la journee sans pause",
      "Jusqu'a la fatigue complete",
      'b',
      "Des sessions de 2-3 heures avec des pauses regulieres sont optimales."
    ),
    createQuestion(
      "A quelle frequence faire des pauses pendant une session ?",
      "Jamais, ca brise le rythme",
      "Toutes les heures pendant 10-15 minutes",
      "Uniquement quand on perd",
      "Une fois par semaine",
      'b',
      "Une pause de 10-15 minutes toutes les heures aide a maintenir la concentration."
    ),
    createQuestion(
      "De combien le manque de sommeil peut-il reduire les capacites cognitives ?",
      "1-5%",
      "20-50%",
      "Il les ameliore",
      "Pas d'impact mesurable",
      'b',
      "Le manque de sommeil peut reduire les capacites cognitives de 20 a 50%."
    ),
    createQuestion(
      "Quand est-il preferable de jouer pour de meilleures performances ?",
      "Tard dans la nuit",
      "Quand on est le plus alerte (souvent matin ou debut d'apres-midi)",
      "Juste avant de dormir",
      "Apres un repas copieux",
      'b',
      "Jouer quand on est naturellement le plus alerte optimise les performances."
    ),
    createQuestion(
      "Pourquoi eviter de jouer juste avant de dormir ?",
      "Le jeu est moins fun le soir",
      "La stimulation et les emotions peuvent affecter le sommeil",
      "Le matchmaking est truque la nuit",
      "Ce n'est pas un probleme",
      'b',
      "La stimulation du jeu et les emotions peuvent rendre l'endormissement difficile."
    ),
    createQuestion(
      "Quel principe est plus important : quantite ou qualite des parties ?",
      "Quantite - plus on joue, plus on s'ameliore",
      "Qualite - des parties concentrees valent mieux que beaucoup de parties fatiguees",
      "Les deux sont egaux",
      "Ni l'un ni l'autre n'a d'importance",
      'b',
      "La qualite prime - des parties concentrees apportent plus que des heures de jeu fatigue."
    ),
    createQuestion(
      "Que faire quand votre corps vous dit d'arreter ?",
      "Ignorer et continuer pour atteindre ses objectifs",
      "Ecouter et s'arreter de jouer",
      "Boire plus de cafeine",
      "Jouer des champions plus faciles",
      'b',
      "Ecouter son corps et s'arreter previent la fatigue excessive et les contre-performances."
    ),
  ]
);
