import { createModule, createQuestion } from '../utils';

export const module03SeasonsSplits = createModule(
  'Saisons classees et splits',
  'seasons-splits',
  'Comprendre le cycle des saisons, les resets et les recompenses',
  3,
  // Theory Content (5+ slides)
  `## Le Cycle des Saisons Classees

League of Legends fonctionne par **saisons competitives** annuelles. Chaque saison dure environ **9 a 10 mois** (generalement de janvier a novembre). A la fin de chaque saison, votre rang est reinitialise et vous recevez des recompenses basees sur votre plus haut rang atteint.

## Les Splits : Mini-Saisons

Chaque saison est divisee en **3 splits** (environ 3 mois chacun). Les splits offrent :
- Des **objectifs intermediaires** pour rester motive
- Des **recompenses de split** exclusives
- Une opportunite de mesurer vos progres

A chaque nouveau split, votre rang subit un **soft reset** moins severe qu'en fin de saison.

## Le Soft Reset en Debut de Saison

Au debut d'une nouvelle saison :
- Votre rang est **partiellement reinitialise**
- Vous devez jouer **5 a 10 matchs de placement**
- Votre nouveau rang sera inferieur a celui de la saison precedente
- Votre MMR est aussi legerement reduit

Exemple : un joueur Platinum II peut commencer Silver I apres les placements.

## Les Recompenses de Fin de Saison

Les recompenses sont basees sur votre **rang le plus eleve** :
- **Tous rangs** : Icone et bordure de profil
- **Gold+** : Skin Victorious exclusif du champion de l'annee
- **Diamond+** : Chroma additionnel
- **Master+** : Emote exclusive
- **Challenger** : Veste physique (dans certaines regions)

Ces recompenses sont **uniques** et ne reviennent jamais.

## Les Restrictions pour les Recompenses

Pour recevoir vos recompenses :
- Pas de **bannissement actif** pour comportement toxique
- **Honneur niveau 2** minimum
- Avoir termine vos **matchs de placement**

Un comportement negatif peut vous faire perdre vos recompenses, meme si vous avez atteint un haut rang.

## Planifier sa Progression

Conseils pour optimiser votre saison :
1. **Debut de saison** : attendez 2 semaines que les rangs se stabilisent
2. **Mi-saison** : grindez activement pour atteindre vos objectifs
3. **Fin de saison** : securisez votre rang cible (evitez les risques)
4. **Derniers jours** : ne jouez que si necessaire (files tres volatiles)`,

  // Practice Instructions
  `## Objectif

Comprendre le calendrier de la saison actuelle et planifier vos objectifs de progression.

## Etapes

1. Verifiez la date de fin de la saison actuelle sur le site officiel de LoL
2. Notez le split actuel et quand il se termine
3. Regardez les recompenses annoncees pour cette saison
4. Definissez un objectif de rang realiste (ex: monter d'un palier)
5. Calculez combien de temps il vous reste et combien de parties par semaine
6. Creez un planning simple de progression

## Critere de reussite

Vous connaissez la date de fin de saison, les recompenses disponibles, et avez defini un objectif de rang avec un plan pour l'atteindre.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Combien de temps dure generalement une saison classee de LoL ?',
      '6 mois',
      '9 a 10 mois',
      '12 mois',
      '3 mois',
      'b',
      'Une saison dure generalement de janvier a novembre, soit environ 9 a 10 mois.'
    ),
    createQuestion(
      'En combien de splits une saison est-elle divisee ?',
      '2 splits',
      '3 splits',
      '4 splits',
      '5 splits',
      'b',
      'Chaque saison est divisee en 3 splits d\'environ 3 mois chacun.'
    ),
    createQuestion(
      'Que se passe-t-il avec votre rang au debut d\'une nouvelle saison ?',
      'Il reste identique',
      'Il est completement efface a Iron',
      'Il subit un soft reset (reinitialisation partielle)',
      'Il augmente automatiquement',
      'c',
      'Au debut de saison, votre rang subit un soft reset et vous devez refaire des placements.'
    ),
    createQuestion(
      'Combien de matchs de placement devez-vous jouer en debut de saison ?',
      '3 matchs',
      '5 a 10 matchs',
      '15 matchs',
      '20 matchs',
      'b',
      'Les placements consistent en 5 a 10 matchs qui determinent votre rang de depart.'
    ),
    createQuestion(
      'Quel rang minimum faut-il atteindre pour obtenir le skin Victorious ?',
      'Silver',
      'Gold',
      'Platinum',
      'Diamond',
      'b',
      'Le skin Victorious exclusif est reserve aux joueurs ayant atteint Gold ou au-dessus.'
    ),
    createQuestion(
      'Sur quoi sont basees les recompenses de fin de saison ?',
      'Votre rang au moment exact de la fin',
      'Votre rang le plus eleve atteint',
      'La moyenne de vos rangs',
      'Votre nombre total de parties',
      'b',
      'Les recompenses sont basees sur votre rang le plus eleve atteint pendant la saison.'
    ),
    createQuestion(
      'Quel niveau d\'honneur minimum faut-il pour recevoir ses recompenses ?',
      'Honneur niveau 1',
      'Honneur niveau 2',
      'Honneur niveau 3',
      'Honneur niveau 5',
      'b',
      'Il faut avoir au minimum l\'honneur niveau 2 pour recevoir les recompenses de saison.'
    ),
    createQuestion(
      'Que peut vous faire perdre vos recompenses de fin de saison ?',
      'Un mauvais winrate',
      'Trop peu de parties jouees',
      'Un bannissement pour comportement toxique',
      'Jouer trop de champions differents',
      'c',
      'Un bannissement actif pour comportement toxique peut vous faire perdre vos recompenses.'
    ),
    createQuestion(
      'Pourquoi est-il conseille d\'attendre quelques semaines avant de jouer en debut de saison ?',
      'Les serveurs sont instables',
      'Les rangs se stabilisent et les parties sont plus equilibrees',
      'Les recompenses ne comptent pas encore',
      'Il n\'y a pas de raison particuliere',
      'b',
      'Attendre permet aux rangs de se stabiliser, evitant des parties tres desequilibrees.'
    ),
    createQuestion(
      'Quelle est une recompense exclusive pour les joueurs Challenger dans certaines regions ?',
      'Un skin unique',
      'Une veste physique',
      'De l\'argent reel',
      'Un compte premium',
      'b',
      'Dans certaines regions, les joueurs Challenger recoivent une veste physique exclusive.'
    ),
  ]
);
