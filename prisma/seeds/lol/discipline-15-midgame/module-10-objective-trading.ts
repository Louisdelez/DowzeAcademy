import { createModule, createQuestion } from '../utils';

export const module10ObjectiveTrading = createModule(
  'Échange d\'objectifs (trading)',
  'objective-trading',
  'Donner pour prendre',
  10,
  // Theory Content (5+ slides)
  `## Qu'est-ce que l'échange d'objectifs ?

L'**échange d'objectifs** (ou objective trading) est une stratégie où vous cédez un objectif à l'ennemi pour en prendre un autre de valeur égale ou supérieure. C'est une approche pragmatique qui évite les combats désavantageux.

## Principe du trading

Le principe est simple : si vous ne pouvez pas contester un objectif sans perdre, prenez quelque chose ailleurs. Exemples :
- **Ils font Dragon → Vous prenez Herald ou tourelle**
- **Ils font Baron → Vous prenez des tourelles ou l'Elder**
- **Ils push bot → Vous push top**

L'objectif est de ne jamais être en "déficit net" : toujours récupérer de la valeur.

## Évaluer la valeur des objectifs

Hiérarchie approximative des objectifs :
1. **Baron Nashor** : buff de siège, très haute valeur
2. **Elder Dragon** : buff de combat, game-changing
3. **Dragon Soul** : buff permanent puissant
4. **Tourelle T1/T2** : or + contrôle de carte
5. **Dragon** : stack vers l'âme
6. **Herald** : potentiel de tourelles

Un Dragon early vaut moins qu'une tourelle. Un Dragon soul point vaut plus qu'une tourelle.

## Quand faire un échange ?

Optez pour l'échange quand :
- **Vous êtes désavantagés** : vous perdriez le fight
- **L'ennemi est déjà engagé** : pas le temps de contester
- **L'objectif adverse n'est pas critique** : 1er Dragon vs tourelle
- **Vous avez un objectif accessible** : quelque chose à prendre

Évitez l'échange si l'objectif adverse est critique (4ème Dragon, Baron en late).

## Récapitulatif

L'échange d'objectifs est une compétence macro essentielle :
- Céder un objectif pour en prendre un autre de valeur
- Évaluez la hiérarchie des objectifs avant d'échanger
- Utile quand vous ne pouvez pas contester
- Évite les teamfights perdus d'avance
- Ne jamais rester passif : toujours prendre quelque chose`,

  // Practice Instructions
  `## Objectif

Exécuter un échange d'objectif avantageux en cédant un objectif pour en prendre un autre de valeur équivalente ou supérieure.

## Étapes

1. Identifiez une situation où l'ennemi fait un objectif (Dragon, tourelle)
2. Évaluez si vous pouvez contester : avez-vous l'avantage ?
3. Si non, identifiez un objectif que vous pouvez prendre (Herald, tourelle, autre Dragon)
4. Communiquez à votre équipe : "Ils font Dragon, on prend top T1"
5. Exécutez rapidement la prise de votre objectif
6. Évaluez l'échange : avez-vous récupéré de la valeur équivalente ?

## Critère de réussite

Vous avez réalisé un échange d'objectif où la valeur obtenue était égale ou supérieure à ce que l'ennemi a pris.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que l'échange d'objectifs ?",
      "Échanger des items avec l'ennemi",
      "Céder un objectif pour en prendre un autre",
      "Faire tous les objectifs en même temps",
      "Ignorer tous les objectifs",
      'b',
      "L'échange d'objectifs consiste à donner quelque chose à l'ennemi pour prendre autre chose de valeur."
    ),
    createQuestion(
      "Quand l'échange d'objectifs est-il recommandé ?",
      "Quand vous avez l'avantage",
      "Quand vous êtes désavantagés et perdriez le fight",
      "Dès le début de la partie",
      "Uniquement en late-game",
      'b',
      "L'échange permet d'éviter un fight perdu d'avance tout en récupérant de la valeur."
    ),
    createQuestion(
      "Quel objectif a généralement la plus haute valeur ?",
      "Premier Dragon",
      "Tourelle T1",
      "Baron Nashor",
      "Rift Herald",
      'c',
      "Le Baron donne un buff de siège puissant qui peut mener à la victoire."
    ),
    createQuestion(
      "Un premier Dragon vaut généralement :",
      "Plus qu'une tourelle T1",
      "Moins qu'une tourelle T1",
      "Exactement pareil qu'une tourelle T1",
      "Plus que le Baron",
      'b',
      "Un premier Dragon (sans être proche de l'âme) vaut généralement moins qu'une tourelle T1."
    ),
    createQuestion(
      "Que devez-vous éviter de faire pendant que l'ennemi prend un objectif ?",
      "Prendre un objectif ailleurs",
      "Rester passif sans rien faire",
      "Push une lane",
      "Placer de la vision",
      'b',
      "Ne jamais rester passif : si vous ne pouvez pas contester, prenez quelque chose ailleurs."
    ),
    createQuestion(
      "Si l'ennemi fait le Dragon et vous êtes désavantagés, que pouvez-vous faire ?",
      "Contester quand même",
      "Prendre le Herald ou une tourelle",
      "Retourner à la base",
      "Arrêter de jouer",
      'b',
      "Prendre un objectif alternatif permet de récupérer de la valeur sans combat perdu."
    ),
    createQuestion(
      "Quand devriez-vous NE PAS faire d'échange ?",
      "Quand c'est un Dragon early",
      "Quand l'objectif adverse est critique (4ème Dragon, Baron late)",
      "Quand vous êtes légèrement derrière",
      "Quand l'ennemi est déjà engagé",
      'b',
      "Certains objectifs comme le Dragon soul point ou le Baron late sont trop importants pour être échangés."
    ),
    createQuestion(
      "Que signifie 'ne jamais être en déficit net' ?",
      "Avoir plus d'or que l'ennemi",
      "Toujours récupérer de la valeur quand vous cédez quelque chose",
      "Ne jamais mourir",
      "Toujours gagner les fights",
      'b',
      "L'idée est de ne pas céder d'objectif sans prendre quelque chose d'équivalent en retour."
    ),
    createQuestion(
      "Un Dragon soul point vaut-il plus qu'une tourelle ?",
      "Non, les tourelles valent toujours plus",
      "Oui, car l'âme donne un buff permanent puissant",
      "Ils ont la même valeur",
      "Ça dépend du type de tourelle uniquement",
      'b',
      "Un Dragon qui rapproche de l'âme a beaucoup plus de valeur qu'un stack early."
    ),
    createQuestion(
      "Comment communiquer un échange d'objectif à votre équipe ?",
      "Ne rien dire et agir",
      "Expliquer l'échange : 'Ils font X, on prend Y'",
      "Demander un vote",
      "Attendre que l'équipe décide",
      'b',
      "Une communication claire assure que tout le monde comprend le plan et agit ensemble."
    ),
  ]
);
