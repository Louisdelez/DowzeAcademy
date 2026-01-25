import { createModule, createQuestion } from '../utils';

export const module03ElderDragon = createModule(
  'Dragon Ancien',
  'elder-dragon',
  'L objectif ultime du late game',
  3,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le Dragon Ancien (Elder Dragon) ?

Le **Dragon Ancien** (ou Elder Dragon) est le dragon le plus puissant du jeu. Il apparait dans la fosse du Dragon **apres qu'une equipe a obtenu le Dragon Soul** (4 dragons du meme element) ou apres 35 minutes si aucune equipe n'a le Soul.

C'est l'objectif neutre le plus decisif du late game.

## Conditions d'apparition de l'Elder Dragon

L'Elder Dragon spawn quand :

- Une equipe a obtenu le **Dragon Soul** (4 dragons)
- OU apres **35 minutes** de jeu si personne n'a le Soul
- Respawn : **6 minutes** apres avoir ete tue

Il remplace les dragons elementaires une fois apparu.

## Le buff Elder Dragon

Le buff Elder est extremement puissant :

- **Duree** : 150 secondes (2 minutes 30)
- **Execution** : Les ennemis sous un certain seuil de vie sont executes instantanement
- **Burn damage** : Vos attaques et competences infligent des degats brulants
- **Amplification** : Si vous avez le Dragon Soul, ses effets sont amplifies

Le seuil d'execution (environ 20% HP) rend les teamfights devastateurs.

## Pourquoi l'Elder est l'objectif ultime

L'Elder Dragon peut a lui seul gagner la partie :

- L'**execution** elimine les ennemis avant qu'ils puissent reagir
- Le **burst additionnel** rend les combats unilateraux
- La **pression psychologique** force l'ennemi a jouer defensivement
- Combine au Soul, c'est quasi-imbattable en teamfight

## Quand contester l'Elder Dragon

Situations ou contester l'Elder est justifie :

- Votre equipe a un **avantage numerique**
- Vous avez le **controle de vision** dans la fosse
- L'ennemi a **deja le Soul** (vous devez l'empecher d'avoir Elder)
- Votre jungler a **smite disponible** et peut steal

Si l'ennemi prend l'Elder, evitez les combats pendant la duree du buff !

## Strategies autour de l'Elder Dragon

Pour maximiser vos chances :

**Si vous etes en avance :**
- Preparez la vision 1-2 minutes avant le spawn
- Forcez l'ennemi a s'engager dans de mauvaises conditions
- Gardez les ults de zone pour proteger le pit

**Si vous etes en retard :**
- Cherchez le steal avec des competences longue portee
- Attendez que l'ennemi commence et engage sur eux
- Un seul membre peut tenter le steal pendant que l'equipe zone

## Recapitulatif

- Elder spawn apres le Dragon Soul ou a 35 minutes
- Le buff dure 2 minutes 30 avec execution et burn
- C'est l'objectif le plus decisif du late game
- Preparez la vision et le controle avant le spawn
- Si l'ennemi a l'Elder, evitez les combats jusqu'a expiration`,

  // Practice Instructions
  `## Objectif

Comprendre l'impact du Dragon Ancien et apprendre a jouer autour de cet objectif.

## Etapes

1. Jouez des parties jusqu'a ce que l'Elder Dragon apparaisse
2. Observez le timing d'apparition (apres Soul ou a 35 min)
3. Notez comment les teamfights changent avec le buff Elder actif
4. Experimentez le positionnement autour de la fosse avant le spawn
5. Analysez si votre equipe a bien prepare la vision

## Critere de reussite

Vous avez participe a au moins un combat pour l'Elder Dragon en ayant prealablement contribue au controle de vision autour de la fosse.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quand l'Elder Dragon apparait-il pour la premiere fois ?",
      "A 20 minutes",
      "A 25 minutes",
      "Apres qu'une equipe obtient le Dragon Soul ou a 35 minutes",
      "Des le debut de la partie",
      'c',
      "L'Elder spawn apres l'obtention du Dragon Soul par une equipe ou automatiquement a 35 minutes."
    ),
    createQuestion(
      "Combien de temps dure le buff Elder Dragon ?",
      "1 minute",
      "2 minutes 30",
      "3 minutes",
      "5 minutes",
      'b',
      "Le buff Elder Dragon dure 150 secondes, soit 2 minutes et 30 secondes."
    ),
    createQuestion(
      "Quel est l'effet signature du buff Elder Dragon ?",
      "Invisibilite permanente",
      "Execution des ennemis a faible vie",
      "Vitesse de deplacement doublee",
      "Or bonus sur les kills",
      'b',
      "Le buff Elder execute instantanement les ennemis sous un certain seuil de vie."
    ),
    createQuestion(
      "Combien de temps faut-il pour que l'Elder Dragon reapparaisse ?",
      "3 minutes",
      "5 minutes",
      "6 minutes",
      "8 minutes",
      'c',
      "L'Elder Dragon respawn 6 minutes apres avoir ete tue."
    ),
    createQuestion(
      "Pourquoi l'Elder Dragon est-il considere comme l'objectif ultime ?",
      "Il donne beaucoup d'or",
      "L'execution et le burst peuvent gagner la partie seuls",
      "Il est facile a tuer",
      "Il n'est pas tres important",
      'b',
      "L'execution et le burst massif du buff Elder peuvent decider l'issue de la partie."
    ),
    createQuestion(
      "Que faire si l'equipe ennemie obtient le buff Elder ?",
      "Les engager immediatement",
      "Eviter les combats jusqu'a expiration du buff",
      "Forcer Baron",
      "Aller farmer la jungle",
      'b',
      "Avec le buff Elder, l'ennemi a un avantage enorme en combat. Mieux vaut attendre son expiration."
    ),
    createQuestion(
      "Quel pourcentage de vie declenche approximativement l'execution Elder ?",
      "10%",
      "20%",
      "30%",
      "50%",
      'b',
      "L'execution Elder se declenche quand l'ennemi est a environ 20% de vie."
    ),
    createQuestion(
      "Quand devez-vous absolument contester l'Elder Dragon ?",
      "Quand vous etes en desavantage numerique",
      "Quand l'ennemi a deja le Dragon Soul",
      "Quand vous n'avez pas de vision",
      "Jamais, c'est trop risque",
      'b',
      "Si l'ennemi a le Soul et prend l'Elder, la partie sera quasi-impossible a gagner."
    ),
    createQuestion(
      "Que se passe-t-il avec le Dragon Soul si vous obtenez aussi l'Elder ?",
      "Le Soul est annule",
      "Les effets du Soul sont amplifies",
      "Rien de special",
      "Le Soul est transfere a l'ennemi",
      'b',
      "Le buff Elder amplifie les effets du Dragon Soul deja possede."
    ),
    createQuestion(
      "Combien de temps avant le spawn de l'Elder faut-il preparer la vision ?",
      "10 secondes",
      "30 secondes",
      "1-2 minutes",
      "5 minutes",
      'c',
      "Preparer la vision 1-2 minutes avant le spawn permet de controler la zone efficacement."
    ),
  ]
);
