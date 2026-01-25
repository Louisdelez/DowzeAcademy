import { createModule, createQuestion } from '../utils';

export const module10ConfidenceVsArrogance = createModule(
  'Confiance vs arrogance',
  'confidence-vs-arrogance',
  'Cultiver la confiance tout en restant humble et ouvert a l\'apprentissage',
  10,
  // Theory Content (5+ slides)
  `## La difference entre confiance et arrogance

La **confiance** et l'**arrogance** peuvent sembler similaires, mais elles sont fondamentalement differentes :

**Confiance** :
- Croire en ses capacites tout en reconnaissant ses limites
- Etre ouvert aux critiques constructives
- Apprendre de ses erreurs et de celles des autres
- Respecter ses adversaires

**Arrogance** :
- Surestimer ses capacites et sous-estimer les autres
- Rejeter toute critique
- Blamer les autres pour ses echecs
- Mepriser ses adversaires

## Pourquoi l'arrogance est un piege

L'arrogance bloque votre progression de plusieurs facons :
- Vous **ne voyez plus vos erreurs** - elles sont toujours la faute des autres
- Vous **sous-estimez les adversaires** - et vous vous faites punir
- Vous **refusez d'apprendre** - pourquoi apprendre si vous etes deja le meilleur ?
- Vous **prenez des risques stupides** - "Je suis meilleur, ca va passer"
- Vous **alienez vos coequipiers** - personne n'aime un arrogant

## Cultiver une saine confiance

La confiance saine se construit sur :
- **Competences reelles** - vous savez ce que vous pouvez faire
- **Humilite** - vous savez aussi ce que vous ne pouvez pas faire
- **Adaptabilite** - vous ajustez votre jeu selon la situation
- **Respect** - vous respectez adversaires et coequipiers
- **Apprentissage continu** - vous cherchez toujours a progresser

La vraie confiance dit : "Je peux reussir" sans dire "Je suis superieur aux autres".

## Rester humble meme en gagnant

Apres une victoire :
- **Ne pavoisez pas** - un "ggwp" suffit
- **Cherchez vos erreurs** - meme dans une victoire
- **Reconnaissez le merite** de vos coequipiers
- **Ne meprisez pas** les adversaires
- **Restez concentre** sur la prochaine partie

La facon dont vous gagnez revele votre caractere.

## Rester confiant meme en perdant

Apres une defaite :
- **Ne doutez pas** de toutes vos capacites
- **Analysez objectivement** sans vous devaloriser
- **Separez** cette partie de votre valeur globale
- **Gardez confiance** en votre capacite a progresser
- **Apprenez** la lecon et passez a la suite

La vraie confiance survit aux echecs.

## L'equilibre parfait

Le joueur mentalement fort :
- **Croit en lui** sans se croire superieur
- **Apprend** des meilleurs sans se comparer negativement
- **Accepte** les critiques sans perdre confiance
- **Respecte** tous les joueurs quel que soit leur rang
- **Progresse** constamment grace a cette humilite

Cet equilibre est difficile mais c'est la cle d'une progression saine.

## Recapitulatif

- La **confiance** croit en soi tout en reconnaissant ses limites
- L'**arrogance** surestime et bloque la progression
- Cultivez la confiance par les **competences reelles et l'humilite**
- Restez **humble en victoire** et **confiant en defaite**
- L'**equilibre** entre confiance et humilite permet une progression saine`,

  // Practice Instructions
  `## Objectif

Developper une confiance saine en pratiquant l'humilite apres les victoires et la resilience apres les defaites.

## Étapes

1. Pendant votre prochaine session, apres chaque VICTOIRE :
   - Ecrivez "ggwp" et rien de plus dans le chat
   - Identifiez 2 erreurs que vous avez commises malgre la victoire
   - Remerciez mentalement un coequipier pour son apport
2. Apres chaque DEFAITE :
   - Ecrivez "ggwp" sans excuses ni blame
   - Identifiez 1 chose que vous avez bien faite malgre la defaite
   - Rappelez-vous que cette partie ne definit pas votre skill
3. En fin de session, notez :
   - Votre niveau de confiance sur 10
   - Si vous avez ressenti de l'arrogance ou du doute excessif
4. Repetez pendant une semaine

## Critère de reussite

Vous maintenez un niveau de confiance stable (ni trop haut apres victoire, ni trop bas apres defaite) et identifiez des erreurs meme en gagnant.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la difference principale entre confiance et arrogance ?",
      "Il n'y a pas de difference",
      "La confiance reconnait ses limites, l'arrogance les ignore",
      "L'arrogance est meilleure pour gagner",
      "La confiance signifie douter de soi",
      'b',
      "La confiance croit en ses capacites tout en reconnaissant ses limites, contrairement a l'arrogance."
    ),
    createQuestion(
      "Pourquoi l'arrogance bloque-t-elle la progression ?",
      "Elle accelere l'apprentissage",
      "Elle empeche de voir ses erreurs et d'apprendre",
      "Elle n'a pas d'impact sur la progression",
      "Elle motive a travailler plus dur",
      'b',
      "L'arrogance empeche de voir ses erreurs car elles sont toujours attribuees aux autres."
    ),
    createQuestion(
      "Que dit la vraie confiance ?",
      "'Je suis meilleur que les autres'",
      "'Je peux reussir' sans pretendre etre superieur",
      "'Je n'ai plus rien a apprendre'",
      "'Les autres sont nuls'",
      'b',
      "La vraie confiance croit en sa capacite a reussir sans mepriser les autres."
    ),
    createQuestion(
      "Que faire apres une victoire pour rester humble ?",
      "Se vanter dans le chat",
      "Chercher ses erreurs meme dans la victoire",
      "Insulter les adversaires",
      "Ignorer ses coequipiers",
      'b',
      "Chercher ses erreurs meme en gagnant maintient l'humilite et la progression."
    ),
    createQuestion(
      "Comment maintenir la confiance apres une defaite ?",
      "Blamer les coequipiers",
      "Analyser objectivement sans se devaloriser globalement",
      "Arreter de jouer pendant longtemps",
      "Douter de toutes ses capacites",
      'b',
      "Analyser la defaite objectivement sans remettre en question toute sa valeur."
    ),
    createQuestion(
      "Pourquoi respecter ses adversaires est-il important ?",
      "Ce n'est pas important",
      "Ca evite de les sous-estimer et de se faire punir",
      "Pour recevoir des recompenses",
      "Uniquement en professionnel",
      'b',
      "Respecter les adversaires evite de les sous-estimer, ce qui peut couter des parties."
    ),
    createQuestion(
      "Quelle attitude revele un joueur mentalement fort ?",
      "Se croire superieur aux autres",
      "Croire en soi tout en restant ouvert a l'apprentissage",
      "Ne jamais accepter la critique",
      "Mepriser les joueurs de rang inferieur",
      'b',
      "L'equilibre entre confiance et humilite caracterise la force mentale."
    ),
    createQuestion(
      "Que signifie 'ggwp' a la fin d'une partie ?",
      "Une insulte deguisee",
      "Good game, well played - un signe de respect sportif",
      "Une obligation du jeu",
      "Get good, weak player",
      'b',
      "GGWP signifie 'Good game, well played' et montre le respect sportif."
    ),
    createQuestion(
      "Pourquoi chercher ses erreurs meme en gagnant ?",
      "C'est inutile si on a gagne",
      "Pour continuer a progresser et ne pas developper de mauvaises habitudes",
      "Pour se sentir mal",
      "Les victoires n'ont pas d'erreurs",
      'b',
      "Meme les victoires contiennent des erreurs - les identifier permet de continuer a progresser."
    ),
    createQuestion(
      "Qu'est-ce qui survit aux echecs ?",
      "L'arrogance",
      "La vraie confiance",
      "Le tilt",
      "Le blame des autres",
      'b',
      "La vraie confiance, basee sur des competences reelles et l'humilite, survit aux echecs."
    ),
  ]
);
