import { createModule, createQuestion } from '../utils';

export const module02MmrMatchmaking = createModule(
  'MMR et matchmaking',
  'mmr-matchmaking',
  'Comprendre le systeme de matchmaking et le MMR cache',
  2,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le MMR ?

Le **MMR** (Matchmaking Rating) est une valeur numerique **cachee** qui represente votre niveau reel de competence. Contrairement a votre rang visible (Gold, Platinum, etc.), le MMR est calcule uniquement sur vos performances et determine contre qui vous jouez.

## Comment le MMR est-il calcule ?

Le systeme prend en compte plusieurs facteurs :
- **Victoires et defaites** : le facteur principal
- **MMR des adversaires** : battre des joueurs mieux classes rapporte plus
- **Historique recent** : une serie de victoires augmente votre MMR plus rapidement
- **Performances en series de promotion** : les victoires comptent davantage

Le MMR n'est **jamais revele** directement par Riot Games.

## MMR vs Rang Visible

Votre rang visible peut differer de votre MMR :
- **MMR > Rang** : vous gagnez plus de LP (+20-25) et en perdez moins
- **MMR < Rang** : vous gagnez moins de LP (+12-15) et en perdez plus
- **MMR = Rang** : gains et pertes equilibres (~18-20 LP)

Cette difference explique pourquoi certains joueurs "grindent" malgre un bon winrate.

## Le Matchmaking Equilibre

L'algorithme de matchmaking cherche a creer des parties **equilibrees** ou chaque equipe a 50% de chances de gagner. Il assemble des joueurs de MMR similaire, pas necessairement du meme rang visible. C'est pourquoi vous pouvez affronter des joueurs d'un rang different du votre.

## Les Files d'Attente et leur MMR

Chaque file d'attente possede son **propre MMR** :
- Solo/Duo Queue : votre MMR principal
- Flex Queue : MMR separe
- Parties normales : encore un autre MMR

Votre performance en normale n'affecte pas votre classement.

## Ameliorer son MMR

Pour ameliorer votre MMR :
1. **Maintenez un winrate superieur a 50%**
2. **Gagnez contre des adversaires plus forts**
3. **Evitez les longues series de defaites**
4. **Jouez regulierement** pour stabiliser votre MMR

Un bon MMR facilite grandement la montee en rang.`,

  // Practice Instructions
  `## Objectif

Analyser vos gains et pertes de LP pour estimer votre MMR par rapport a votre rang visible.

## Etapes

1. Jouez 5 parties classees en notant les LP gagnes et perdus
2. Calculez la moyenne de LP gagnes en victoire
3. Calculez la moyenne de LP perdus en defaite
4. Comparez : si gains > pertes, votre MMR est bon
5. Utilisez un site comme op.gg pour voir le rang moyen de vos parties
6. Comparez le rang moyen de vos lobbies a votre rang actuel

## Critere de reussite

Vous comprenez si votre MMR est superieur, egal ou inferieur a votre rang visible en analysant vos gains/pertes de LP.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Que signifie MMR ?',
      'Matchmaking Ranking',
      'Matchmaking Rating',
      'Master Match Rating',
      'Multiplayer Match Ratio',
      'b',
      'MMR signifie Matchmaking Rating, votre niveau de competence cache.'
    ),
    createQuestion(
      'Le MMR est-il visible directement dans le client LoL ?',
      'Oui, dans l\'onglet Profil',
      'Oui, mais seulement apres 100 parties',
      'Non, c\'est une valeur cachee',
      'Oui, dans les statistiques avancees',
      'c',
      'Le MMR est une valeur cachee que Riot Games ne revele jamais directement.'
    ),
    createQuestion(
      'Si vous gagnez beaucoup plus de LP que vous n\'en perdez, que cela indique-t-il ?',
      'Votre MMR est inferieur a votre rang',
      'Votre MMR est superieur a votre rang',
      'Le systeme est casse',
      'Vous avez un boost',
      'b',
      'Des gains eleves de LP indiquent que votre MMR est superieur a votre rang visible.'
    ),
    createQuestion(
      'Quel facteur principal determine votre MMR ?',
      'Votre KDA',
      'Vos victoires et defaites',
      'Votre temps de jeu',
      'Le nombre de champions maitrises',
      'b',
      'Le MMR est principalement base sur vos victoires et defaites.'
    ),
    createQuestion(
      'Le MMR de la Flex Queue est-il le meme que celui de la Solo Queue ?',
      'Oui, c\'est le meme MMR',
      'Non, chaque file a son propre MMR',
      'Seulement pour les rangs Diamond+',
      'Cela depend de la region',
      'b',
      'Chaque file d\'attente (Solo, Flex, Normales) possede son propre MMR.'
    ),
    createQuestion(
      'Pourquoi pouvez-vous affronter des joueurs d\'un rang different du votre ?',
      'C\'est un bug du matchmaking',
      'Le matchmaking utilise le MMR, pas le rang visible',
      'Certains joueurs ont des privileges speciaux',
      'Le rang n\'existe pas vraiment',
      'b',
      'Le matchmaking assemble les joueurs par MMR, pas par rang visible.'
    ),
    createQuestion(
      'Que cherche a accomplir l\'algorithme de matchmaking ?',
      'Creer des parties rapides',
      'Favoriser les joueurs veterants',
      'Creer des parties equilibrees a 50/50',
      'Punir les joueurs en serie de victoires',
      'c',
      'L\'algorithme vise a creer des parties ou chaque equipe a environ 50% de chances de gagner.'
    ),
    createQuestion(
      'Comment pouvez-vous ameliorer votre MMR ?',
      'En achetant des skins',
      'En jouant plus de champions',
      'En maintenant un winrate superieur a 50%',
      'En ajoutant des amis',
      'c',
      'Un winrate superieur a 50% sur le long terme ameliore progressivement votre MMR.'
    ),
    createQuestion(
      'Si vous gagnez seulement 12-15 LP par victoire, que cela suggere-t-il ?',
      'Votre MMR est superieur a votre rang',
      'Votre MMR est inferieur a votre rang',
      'C\'est normal pour tous les joueurs',
      'Vous etes en periode de placements',
      'b',
      'Des gains faibles de LP indiquent que votre MMR est inferieur a votre rang visible.'
    ),
    createQuestion(
      'Battre des joueurs avec un MMR plus eleve que le votre a quel effet ?',
      'Aucun effet special',
      'Vous gagnez plus de MMR que d\'habitude',
      'Vous perdez des LP bonus',
      'Vous etes signale pour tricherie',
      'b',
      'Vaincre des adversaires mieux classes que vous rapporte plus de MMR.'
    ),
  ]
);
