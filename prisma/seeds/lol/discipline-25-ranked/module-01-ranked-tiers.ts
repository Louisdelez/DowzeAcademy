import { createModule, createQuestion } from '../utils';

export const module01RankedTiers = createModule(
  'Mode Classe et paliers',
  'ranked-tiers',
  'Comprendre le systeme de classement de Iron a Challenger',
  1,
  // Theory Content (5+ slides)
  `## Introduction au Mode Classe

Le mode **Classe** (Ranked) est le coeur competitif de League of Legends. Contrairement aux parties normales, vos performances sont evaluees et vous progressez (ou regressez) dans un systeme de classement hierarchique. C'est ici que vous mesurez votre veritable niveau face a d'autres joueurs motives.

## Les 9 Paliers de Classement

League of Legends possede **9 paliers** distincts, du plus bas au plus eleve :
- **Iron** (Fer) - Debutants
- **Bronze** - Joueurs en apprentissage
- **Silver** (Argent) - Niveau intermediaire
- **Gold** (Or) - Bonne comprehension du jeu
- **Platinum** (Platine) - Mecaniques solides
- **Emerald** (Emeraude) - Niveau avance
- **Diamond** (Diamant) - Elite (~2% des joueurs)
- **Master** - Tres haute competence
- **Grandmaster** - Top 700 joueurs par region
- **Challenger** - Top 300 joueurs par region

## Les Divisions au sein des Paliers

Chaque palier (de Iron a Emerald) est divise en **4 divisions** : IV, III, II et I (du plus bas au plus haut). Vous commencez en division IV et montez vers I avant de passer au palier superieur. Diamond n'a que 4 divisions, tandis que Master, Grandmaster et Challenger n'en ont pas.

## Le Systeme de LP (League Points)

Pour progresser, vous gagnez des **LP** (League Points) en remportant des parties et en perdez en cas de defaite. Generalement :
- Victoire : +15 a +25 LP
- Defaite : -15 a -25 LP

A 100 LP, vous passez a la division suivante. A 0 LP avec plusieurs defaites, vous risquez de redescendre.

## Les Series de Promotion

Avant de passer a un nouveau **palier** (ex: Silver a Gold), vous devez gagner une **serie de promotion** : remporter 2 parties sur 3. Ces matchs sont cruciaux et determinent votre progression vers le palier superieur.

## Recapitulatif des Paliers

| Palier | Population approximative |
|--------|-------------------------|
| Iron-Bronze | ~25% |
| Silver | ~25% |
| Gold | ~25% |
| Platinum | ~15% |
| Emerald | ~7% |
| Diamond+ | ~3% |

Comprendre ou vous vous situez vous aide a fixer des objectifs realistes et a mesurer vos progres.`,

  // Practice Instructions
  `## Objectif

Decouvrir votre classement actuel et comprendre le systeme de progression en mode Classe.

## Etapes

1. Lancez League of Legends et connectez-vous
2. Allez dans l'onglet "Profil" puis "Classe"
3. Observez votre palier actuel, division et LP
4. Notez combien de LP vous avez et combien il vous en manque pour la prochaine division
5. Consultez le classement de vos amis pour comparer
6. Lancez une partie classee et observez les LP gagnes/perdus

## Critere de reussite

Vous pouvez identifier votre palier, division et LP actuels, et comprendre combien de victoires vous separent de la prochaine division.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Combien de paliers principaux existe-t-il dans le systeme de classement de LoL ?',
      '6 paliers',
      '7 paliers',
      '9 paliers',
      '10 paliers',
      'c',
      'Il existe 9 paliers : Iron, Bronze, Silver, Gold, Platinum, Emerald, Diamond, Master, Grandmaster et Challenger.'
    ),
    createQuestion(
      'Quel est le palier le plus bas dans League of Legends ?',
      'Bronze',
      'Iron',
      'Silver',
      'Wood',
      'b',
      'Iron (Fer) est le palier le plus bas, introduit pour mieux repartir les joueurs debutants.'
    ),
    createQuestion(
      'Combien de divisions contient chaque palier de Iron a Emerald ?',
      '3 divisions',
      '4 divisions',
      '5 divisions',
      '2 divisions',
      'b',
      'Chaque palier de Iron a Emerald contient 4 divisions : IV, III, II et I.'
    ),
    createQuestion(
      'Que signifie LP dans le contexte du mode Classe ?',
      'Level Points',
      'League Points',
      'Ladder Position',
      'Loss Prevention',
      'b',
      'LP signifie League Points, les points que vous gagnez ou perdez selon vos resultats.'
    ),
    createQuestion(
      'Combien de LP faut-il accumuler pour passer a la division suivante ?',
      '50 LP',
      '75 LP',
      '100 LP',
      '150 LP',
      'c',
      'Il faut atteindre 100 LP pour passer a la division superieure.'
    ),
    createQuestion(
      'Quelle est la particularite des rangs Master, Grandmaster et Challenger ?',
      'Ils ont 5 divisions chacun',
      'Ils n\'ont pas de divisions',
      'Ils sont reserves aux joueurs professionnels',
      'Ils ne perdent jamais de LP',
      'b',
      'Master, Grandmaster et Challenger n\'ont pas de divisions - les joueurs sont classes uniquement par LP.'
    ),
    createQuestion(
      'Combien de joueurs maximum peuvent etre Challenger par region ?',
      '100 joueurs',
      '200 joueurs',
      '300 joueurs',
      '500 joueurs',
      'c',
      'Challenger est limite aux 300 meilleurs joueurs de chaque region.'
    ),
    createQuestion(
      'Pour passer d\'un palier a l\'autre (ex: Silver a Gold), que devez-vous faire ?',
      'Atteindre 100 LP',
      'Gagner 5 parties consecutives',
      'Gagner une serie de promotion (2 sur 3)',
      'Avoir un ratio victoires/defaites positif',
      'c',
      'Pour changer de palier, vous devez remporter une serie de promotion en gagnant 2 parties sur 3.'
    ),
    createQuestion(
      'Quel pourcentage approximatif de joueurs se trouve en Diamond ou au-dessus ?',
      'Environ 10%',
      'Environ 5%',
      'Environ 3%',
      'Environ 1%',
      'c',
      'Seulement environ 3% des joueurs atteignent Diamond ou un rang superieur.'
    ),
    createQuestion(
      'Que se passe-t-il si vous perdez plusieurs parties a 0 LP ?',
      'Rien, vous restez a 0 LP',
      'Vous risquez de descendre de division',
      'Vous perdez votre compte',
      'Vous etes banni temporairement',
      'b',
      'Perdre plusieurs parties a 0 LP peut vous faire redescendre a la division inferieure.'
    ),
  ]
);
