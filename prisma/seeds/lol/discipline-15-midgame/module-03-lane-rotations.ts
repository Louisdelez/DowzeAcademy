import { createModule, createQuestion } from '../utils';

export const module03LaneRotations = createModule(
  'Rotations de lanes',
  'lane-rotations',
  'Swap après T1',
  3,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'une rotation de lane ?

Une **rotation** est un déplacement d'un ou plusieurs joueurs d'une lane vers une autre pour créer un avantage numérique ou prendre un objectif. Après la chute des T1, les rotations deviennent essentielles pour continuer à générer de la pression.

## Pourquoi faire des rotations ?

Les rotations permettent de :
- **Créer un avantage numérique** : 2v1 ou 3v2 sur une lane
- **Prendre des tourelles** : pousser une lane avec plus de joueurs
- **Sécuriser des objectifs** : Dragon, Herald avec la pression de lane
- **Surprendre l'ennemi** : ganks depuis d'autres lanes
- **Aider un coéquipier en difficulté** : briser un freeze ennemi

## Le swap post-T1 : principes

Après avoir détruit votre T1, vous avez plusieurs options :
- **Rester et pousser T2** : risqué sans vision, vous êtes exposé aux ganks
- **Swap vers mid** : la mid est centrale, facilite les rotations
- **Swap vers la lane faible de votre équipe** : aider un coéquipier en difficulté
- **Roam vers un objectif** : si Dragon/Herald est disponible

Le swap classique : le bot lane qui gagne va souvent mid après T1 bot pour contrôler le centre de la carte.

## Timing et exécution des rotations

Pour une rotation efficace :
1. **Push la vague** avant de partir (ne pas perdre de farm)
2. **Vérifiez la vision** : évitez les embuscades
3. **Communiquez** : prévenez votre équipe avec des pings
4. **Arrivez en force** : coordonnez-vous pour arriver ensemble
5. **Objectif clair** : kill, tourelle, ou objectif neutre

Le timing est crucial : une rotation trop lente perd son effet de surprise.

## Récapitulatif

Les rotations de lanes sont essentielles au mid-game :
- Elles créent des avantages numériques locaux
- Le swap post-T1 permet de maintenir la pression
- La mid lane est souvent la cible principale (position centrale)
- Communication et timing sont les clés du succès
- Push toujours votre vague avant de rotate`,

  // Practice Instructions
  `## Objectif

Exécuter une rotation efficace après la destruction d'une tourelle T1 pour maintenir la pression sur la carte.

## Étapes

1. Concentrez-vous sur la destruction de votre T1 en lane
2. Une fois la T1 détruite, évaluez l'état de la carte (autres lanes, objectifs)
3. Push votre vague jusqu'à la T2 ennemie
4. Identifiez la meilleure lane pour rotater (mid ou lane en difficulté)
5. Pingez votre intention et déplacez-vous vers cette lane
6. Participez à un objectif (kill, tourelle) dans votre nouvelle position

## Critère de réussite

Vous avez exécuté une rotation après T1 qui a mené à un avantage (kill, tourelle ou pression significative).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une rotation dans League of Legends ?",
      "Tourner autour de son champion",
      "Un déplacement vers une autre lane pour créer un avantage",
      "Changer de champion en cours de partie",
      "Faire un tour complet de la carte",
      'b',
      "Une rotation est un déplacement stratégique vers une autre lane ou objectif pour créer un avantage."
    ),
    createQuestion(
      "Que devez-vous faire AVANT de quitter votre lane pour rotater ?",
      "Acheter tous vos items",
      "Push la vague de sbires",
      "Détruire l'inhibiteur",
      "Tuer le jungler ennemi",
      'b',
      "Toujours push la vague avant de partir pour ne pas perdre de farm et créer de la pression."
    ),
    createQuestion(
      "Pourquoi le swap vers mid est-il souvent recommandé après T1 ?",
      "La mid lane donne plus d'or",
      "La mid est centrale et facilite les rotations",
      "Les sbires mid sont plus faibles",
      "C'est obligatoire après T1",
      'b',
      "La position centrale de la mid permet de répondre rapidement aux situations des deux côtés de la carte."
    ),
    createQuestion(
      "Quel est le risque de rester push vers T2 après avoir détruit T1 ?",
      "Les sbires deviennent plus forts",
      "Vous êtes exposé aux ganks sans vision",
      "La T2 est indestructible",
      "Votre champion ralentit",
      'b',
      "Sans T1 pour vous protéger, vous jouez en territoire ennemi, vulnérable aux ganks."
    ),
    createQuestion(
      "Quelle action n'est PAS un objectif de rotation ?",
      "Créer un avantage numérique",
      "Prendre une tourelle",
      "Farmer les sbires ennemis",
      "Aider un coéquipier en difficulté",
      'c',
      "Les rotations visent des objectifs stratégiques, pas simplement le farm."
    ),
    createQuestion(
      "Comment communiquer une rotation à votre équipe ?",
      "Ne rien dire pour surprendre l'ennemi",
      "Utiliser des pings et/ou le chat",
      "Attendre que les autres vous suivent",
      "Envoyer un message privé au jungler",
      'b',
      "La communication par pings est essentielle pour coordonner les mouvements d'équipe."
    ),
    createQuestion(
      "Le 'swap bot-mid' après T1 bot signifie :",
      "Le mid va bot et le bot reste bot",
      "Le bot lane va mid et le mid peut aller bot",
      "Tout le monde va mid",
      "Le bot retourne à la base",
      'b',
      "Le swap classique implique que le duo bot prenne la mid pour contrôler le centre de la carte."
    ),
    createQuestion(
      "Pourquoi le timing est-il crucial pour une rotation ?",
      "Les rotations sont limitées à certains moments",
      "Une rotation lente perd son effet de surprise",
      "Le jeu pénalise les rotations tardives",
      "Les tourelles se régénèrent",
      'b',
      "Une rotation efficace repose sur la surprise et la rapidité d'exécution."
    ),
    createQuestion(
      "Quand devriez-vous rotater vers la lane d'un coéquipier en difficulté ?",
      "Jamais, chacun doit gérer sa lane",
      "Quand il peut perdre sa tourelle et que vous pouvez aider",
      "Uniquement si le jungler le demande",
      "Seulement en late-game",
      'b',
      "Aider un coéquipier à défendre sa tourelle ou briser un freeze ennemi peut sauver la partie."
    ),
    createQuestion(
      "Que vérifier avant d'exécuter une rotation ?",
      "Uniquement votre niveau",
      "La vision pour éviter les embuscades",
      "Le nombre de wards disponibles",
      "Le score de votre équipe",
      'b',
      "Vérifier la vision évite de se faire intercepter pendant la rotation."
    ),
  ]
);
