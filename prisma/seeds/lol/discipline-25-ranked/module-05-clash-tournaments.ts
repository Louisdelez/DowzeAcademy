import { createModule, createQuestion } from '../utils';

export const module05ClashTournaments = createModule(
  'Tournois Clash et amateurs',
  'clash-tournaments',
  'Decouvrir la competition integree et les tournois amateurs',
  5,
  // Theory Content (5+ slides)
  `## Qu'est-ce que Clash ?

**Clash** est le mode tournoi integre de League of Legends. Il permet aux joueurs de former des equipes de 5 et de participer a des tournois competitifs directement dans le client. C'est l'experience la plus proche de l'esport pour les joueurs amateurs.

## Format des Tournois Clash

Chaque tournoi Clash se deroule ainsi :
- **Equipes de 5** joueurs obligatoire
- Format **elimination simple** ou double selon l'evenement
- **3 a 4 matchs** maximum par soir
- Duree : environ **2-3 heures**
- Se deroule generalement le **week-end**

Les equipes sont divisees en **tiers** (I a IV) selon le niveau moyen.

## Inscription et Preparation

Pour participer a Clash :
1. **Verifier l'eligibilite** : compte verifie par SMS, honneur 2+
2. **Former une equipe** : inviter 4 amis ou rejoindre une equipe
3. **Acheter un ticket** : avec de l'essence bleue ou des RP
4. **Lock-in** : confirmer sa presence avant le tournoi
5. **Scouting** : etudier les adversaires avant les matchs

La phase de **ban/pick** est plus strategique qu'en ranked.

## Les Recompenses Clash

Gagner en Clash offre des recompenses exclusives :
- **Trophees** : affiches sur votre profil
- **Capsules** : contenant des fragments de skin
- **Logos d'equipe** : banniere et icone personnalisees
- **Prestige** : reconnaissance dans votre communaute

Plus vous gagnez de matchs, meilleures sont les recompenses.

## Tournois Amateurs Externes

Au-dela de Clash, de nombreux tournois amateurs existent :
- **Tournois communautaires** : organises par des streamers
- **Ligues universitaires** : competitions etudiantes
- **Tournois Discord** : serveurs dedies aux competitions
- **Sites specialises** : Challengermode, Battlefy, Toornament

Ces tournois sont souvent gratuits et ouverts a tous les niveaux.

## Pourquoi Participer aux Tournois ?

Les tournois apportent des benefices uniques :
- **Experience competitive** : pression et enjeux reels
- **Travail d'equipe** : communication et coordination
- **Analyse strategique** : phase de draft serieuse
- **Networking** : rencontrer d'autres joueurs competitifs
- **Progression** : identifier ses faiblesses en environnement structure`,

  // Practice Instructions
  `## Objectif

S'inscrire a un tournoi Clash ou amateur pour vivre l'experience competitive en equipe.

## Etapes

1. Verifiez que votre compte est eligible pour Clash (SMS, honneur 2+)
2. Formez une equipe de 5 joueurs avec des amis ou via Discord
3. Consultez le calendrier Clash dans le client LoL
4. Achetez un ticket Clash avec de l'essence bleue
5. Faites le lock-in avec votre equipe avant le tournoi
6. Participez au tournoi et analysez vos matchs apres

## Critere de reussite

Vous avez participe a au moins un tournoi (Clash ou amateur) avec une equipe complete et pouvez decrire ce qui differencie cette experience du ranked normal.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Combien de joueurs faut-il pour former une equipe Clash ?',
      '3 joueurs',
      '4 joueurs',
      '5 joueurs',
      '6 joueurs avec un remplacant',
      'c',
      'Une equipe Clash necessite exactement 5 joueurs.'
    ),
    createQuestion(
      'Quel est le format typique d\'un tournoi Clash ?',
      'Round robin (tous contre tous)',
      'Elimination simple ou double',
      'Meilleur de 5 matchs',
      'Points accumules sur plusieurs semaines',
      'b',
      'Les tournois Clash utilisent generalement un format d\'elimination simple ou double.'
    ),
    createQuestion(
      'Qu\'est-ce qui est necessaire pour participer a Clash ?',
      'Etre Diamond ou plus',
      'Avoir un compte verifie par SMS et honneur 2+',
      'Payer un abonnement mensuel',
      'Avoir joue 500 parties ranked',
      'b',
      'L\'eligibilite requiert un compte verifie par SMS et un niveau d\'honneur 2 minimum.'
    ),
    createQuestion(
      'Comment les equipes sont-elles divisees en Clash ?',
      'Par rang Solo Queue uniquement',
      'Aleatoirement',
      'En tiers (I a IV) selon le niveau moyen',
      'Par anciennete du compte',
      'c',
      'Les equipes sont reparties en tiers bases sur le niveau moyen des joueurs.'
    ),
    createQuestion(
      'Quelle recompense unique peut-on obtenir en Clash ?',
      'Des LP bonus',
      'Des trophees affiches sur le profil',
      'Un boost de MMR',
      'Un skin Victorious supplementaire',
      'b',
      'Les trophees Clash sont affiches sur votre profil et montrent vos victoires en tournoi.'
    ),
    createQuestion(
      'Combien de temps dure generalement une soiree Clash ?',
      '30 minutes',
      '1 heure',
      '2-3 heures',
      '5-6 heures',
      'c',
      'Une soiree Clash dure environ 2 a 3 heures avec 3-4 matchs maximum.'
    ),
    createQuestion(
      'Qu\'est-ce que le "scouting" en Clash ?',
      'Recruter de nouveaux joueurs',
      'Etudier les adversaires avant les matchs',
      'Choisir la carte de jeu',
      'Entrainer de nouveaux champions',
      'b',
      'Le scouting permet d\'analyser l\'historique et les preferences de vos adversaires.'
    ),
    createQuestion(
      'Quels sont des exemples de tournois amateurs externes a Clash ?',
      'LCS et LEC',
      'Worlds et MSI',
      'Challengermode, Battlefy, tournois Discord',
      'ARAM et URF',
      'c',
      'Des plateformes comme Challengermode, Battlefy et les serveurs Discord organisent des tournois amateurs.'
    ),
    createQuestion(
      'Pourquoi la phase de ban/pick est-elle plus importante en Clash ?',
      'Elle dure plus longtemps',
      'Vous pouvez scouter et cibler les picks des adversaires',
      'Il n\'y a pas de bans en Clash',
      'Elle donne des LP bonus',
      'b',
      'Le scouting permet de connaitre les champions favoris des adversaires et d\'adapter vos bans.'
    ),
    createQuestion(
      'Quel benefice les tournois apportent-ils pour devenir pro ?',
      'Aucun, seul le rang Solo Queue compte',
      'Experience competitive et networking avec d\'autres joueurs serieux',
      'Des points bonus pour le classement',
      'Un acces direct aux equipes LEC',
      'b',
      'Les tournois offrent une experience competitive reelle et permettent de rencontrer d\'autres joueurs ambitieux.'
    ),
  ]
);
