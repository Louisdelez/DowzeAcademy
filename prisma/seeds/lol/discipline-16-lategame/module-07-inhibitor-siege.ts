import { createModule, createQuestion } from '../utils';

export const module07InhibitorSiege = createModule(
  'Siege des inhibiteurs',
  'inhibitor-siege',
  'Approcher et detruire les inhibiteurs ennemis',
  7,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un siege d'inhibiteur ?

Le **siege d'inhibiteur** est l'action de positionner votre equipe devant la base ennemie pour detruire les tourelles d'inhibiteur puis l'inhibiteur lui-meme. C'est l'etape cruciale avant d'attaquer le Nexus.

Cette phase requiert **patience**, **coordination** et une **bonne gestion des waves**.

## Les tourelles d'inhibiteur

Avant d'atteindre l'inhibiteur, vous devez detruire la **tourelle d'inhibiteur** :

- Plus resistante que les tourelles exterieures
- Protegee par la fontaine proche (regen et danger)
- L'ennemi peut se replier facilement pour defendre
- Necessaire a detruire pour acceder a l'inhibiteur

## Preparer le siege

Avant de sieger un inhibiteur :

1. **Etablir le controle de vision** autour de la base ennemie
2. **Pousser les lanes laterales** pour creer de la pression
3. **S'assurer que Baron/Elder n'est pas contestable** par l'ennemi
4. **Avoir les cooldowns prets** (ults, sorts invocateurs)
5. **Attendre une grosse wave** ou le buff Baron

Le buff Baron est ideal pour sieger grace aux sbires renforces.

## Strategies de siege

Plusieurs approches sont possibles :

**Siege avec poke :**
- Champions avec competences longue portee (Xerath, Jayce, Ziggs)
- Affaiblir l'ennemi avant l'engagement
- Forcer les backs pour attaquer la tourelle

**Siege avec engage :**
- Attendre une erreur de positionnement ennemi
- Engager avec un tank ou initiateur
- Forcer le 5v5 sous leur tourelle

**Siege avec split :**
- Un champion push une autre lane
- Force l'ennemi a se separer
- Attaquer quand ils rotent

## Les dangers du siege

Le siege comporte des risques :

- **Contre-engage** : L'ennemi peut engager sur vous
- **Poke retour** : Subir des degats sans progresser
- **Flancs** : Un ennemi peut vous contourner
- **Baron/Elder flip** : L'ennemi peut tenter un objectif pendant le siege
- **Overstay** : Rester trop longtemps sous pression

## Quand dive sous tourelle

Parfois, il faut **dive** (attaquer sous tourelle) :

- L'ennemi est tres affaibli (low HP)
- Vous avez un **avantage numerique clair**
- Vos tanks peuvent **absorber les tirs** de tourelle
- Les **cooldowns defensifs** ennemis sont utilises

Un dive rate peut retourner la situation, soyez prudents !

## Recapitulatif

- Le siege d'inhibiteur est l'etape avant le Nexus
- Preparez avec vision, waves laterales et cooldowns
- Le buff Baron facilite grandement le siege
- Choisissez entre poke, engage, ou split
- Attention aux contre-engages et aux flancs`,

  // Practice Instructions
  `## Objectif

Apprendre a sieger efficacement les inhibiteurs ennemis en equipe.

## Etapes

1. Apres un avantage (Baron, kill), groupez-vous pour sieger
2. Avant d'approcher la tourelle d'inhib, posez des balises defensives
3. Attendez une grosse wave avant d'avancer
4. Poke ou attendez une erreur ennemie pour engager
5. Si le siege echoue, reculez et recommencez avec une meilleure preparation

## Critere de reussite

Vous avez participe a un siege d'inhibiteur ou votre equipe a detruit la tourelle ou l'inhibiteur sans subir de wipe.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un siege d'inhibiteur ?",
      "Attaquer le Nexus directement",
      "Se positionner pour detruire la tourelle d'inhib puis l'inhibiteur",
      "Defendre son propre inhibiteur",
      "Prendre Baron",
      'b',
      "Le siege d'inhibiteur consiste a detruire la tourelle d'inhibiteur puis l'inhibiteur ennemi."
    ),
    createQuestion(
      "Que faut-il detruire avant d'attaquer l'inhibiteur ?",
      "Le Nexus",
      "La tourelle d'inhibiteur",
      "La fontaine",
      "Rien, on peut attaquer directement",
      'b',
      "La tourelle d'inhibiteur protege l'inhibiteur et doit etre detruite en premier."
    ),
    createQuestion(
      "Quel buff facilite grandement le siege ?",
      "Le buff rouge",
      "Le buff Baron",
      "Le buff bleu",
      "Aucun buff n'aide",
      'b',
      "Le buff Baron renforce les sbires, les rendant ideaux pour sieger les tourelles."
    ),
    createQuestion(
      "Que faut-il faire avant de commencer un siege ?",
      "Foncer directement",
      "Etablir la vision, pousser les autres lanes, avoir les cooldowns",
      "Ignorer les sbires",
      "Se separer de l'equipe",
      'b',
      "Une bonne preparation inclut la vision, les waves laterales et les cooldowns prets."
    ),
    createQuestion(
      "Quelle strategie de siege utilise des champions a longue portee ?",
      "Siege avec engage",
      "Siege avec poke",
      "Siege avec split",
      "Siege sans strategie",
      'b',
      "Le siege avec poke utilise des champions longue portee pour affaiblir l'ennemi de loin."
    ),
    createQuestion(
      "Quel est un danger majeur pendant un siege ?",
      "Gagner trop facilement",
      "Le contre-engage de l'ennemi",
      "Avoir trop de vision",
      "Les sbires trop forts",
      'b',
      "L'ennemi peut contre-engager et retourner le fight si le siege est mal execute."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'dive' sous tourelle ?",
      "Eviter la tourelle",
      "Attaquer l'ennemi sous sa tourelle en prenant les tirs",
      "Detruire la tourelle",
      "Fuir la tourelle",
      'b',
      "Dive signifie attaquer les ennemis sous leur tourelle en acceptant de prendre des degats de celle-ci."
    ),
    createQuestion(
      "Quand est-il justifie de dive sous tourelle ?",
      "Toujours",
      "Quand l'ennemi est affaibli et qu'on a un avantage numerique",
      "Jamais",
      "Quand on est seul",
      'b',
      "Un dive est justifie quand les conditions sont favorables : ennemi low HP, avantage numerique, tanks disponibles."
    ),
    createQuestion(
      "Qu'est-ce que l'overstay pendant un siege ?",
      "Partir trop tot",
      "Rester trop longtemps sous pression sans progresser",
      "Avancer trop vite",
      "Avoir trop de sbires",
      'b',
      "L'overstay signifie rester trop longtemps devant la base ennemie sans resultat, risquant un contre."
    ),
    createQuestion(
      "Que peut faire l'ennemi pendant que vous siegez leur inhib ?",
      "Rien",
      "Tenter Baron ou Elder, flanquer, contre-engager",
      "Seulement defendre",
      "Abandonner la partie",
      'b',
      "L'ennemi peut chercher des objectifs ailleurs, flanquer votre equipe, ou contre-engager."
    ),
  ]
);
