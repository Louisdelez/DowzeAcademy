import { createModule, createQuestion } from '../utils';

export const module12MidTeamfights = createModule(
  "Teamfights en mid/late depuis la mid",
  'mid-teamfights',
  'Porter les combats d\'équipe selon votre type de champion',
  12,
  // Theory Content (5+ slides)
  `## Le rôle du mid en teamfight

En mid et late game, les **teamfights** (combats 5v5) déterminent souvent l'issue de la partie. Le mid laner y joue un rôle central :

**Mages** : Source principale de dégâts AoE et de CC
**Assassins** : Élimination des carries ennemis
**Control mages** : Zone denial et peel pour l'équipe

Votre rôle en teamfight dépend de votre type de champion.

## Teamfight en tant que mage

Si vous jouez un **mage** (Orianna, Syndra, Viktor...) :

**Positionnement** :
- Restez **derrière** votre frontline (tanks, bruisers)
- Gardez une **distance de sécurité** des assassins ennemis
- Utilisez le **terrain** pour vous protéger

**Priorités** :
1. **Survivre** - un mage mort = 0 dégâts
2. **DPS constant** - touchez qui vous pouvez en sécurité
3. **Ultime impactant** - attendez le bon moment
4. **Peel** si nécessaire - CC les menaces sur votre ADC

## Teamfight en tant qu'assassin

Si vous jouez un **assassin** (Zed, Katarina, Akali...) :

**Timing d'entrée** :
- **N'entrez PAS en premier** - vous mourrez
- Attendez que les **CC majeurs** soient utilisés
- Cherchez un **angle de flank**

**Ciblage** :
1. **ADC ennemi** - cible prioritaire
2. **Mid mage** - deuxième priorité
3. **Support** - si les carries sont inaccessibles

**Après le kill** :
- Évaluez : pouvez-vous continuer ou devez-vous sortir ?
- Utilisez vos resets si vous en avez (Katarina)

## Erreurs courantes en teamfight

**À éviter absolument** :

- **Engager seul** sans votre équipe
- **Utiliser votre ultime trop tôt** sur des mauvaises cibles
- **Chaser** un ennemi low HP en abandonnant le fight
- **Mal positionné** : trop devant (mage) ou trop loin (assassin)
- **Focus le tank** au lieu des carries

**Conseil** : Parfois, ne rien faire et attendre le bon moment est la meilleure décision.

## Récapitulatif

- Votre **rôle** en teamfight dépend de votre type de champion
- **Mages** : restez derrière, DPS safe, ultime impactant
- **Assassins** : attendez, flanker, éliminez les carries, sortez
- Évitez les erreurs courantes : **engager seul, focus tank, mauvais timing**
- **Patience** et **positionnement** sont les clés du succès
- Un bon teamfight gagné peut **décider la partie**`,

  // Practice Instructions
  `## Objectif

Apprendre à vous positionner et exécuter votre rôle correctement en teamfight selon votre type de champion.

## Étapes

1. Identifiez si votre champion mid est un mage ou un assassin
2. Lancez une partie normale et jouez jusqu'aux teamfights (15-20 min)

**Si vous êtes un MAGE** :
3. En teamfight, restez derrière vos tanks
4. N'attaquez QUE les cibles que vous pouvez toucher en sécurité
5. Gardez votre ultime pour un moment impactant (3+ ennemis)
6. Si un assassin vous focus, utilisez vos CC pour le peel

**Si vous êtes un ASSASSIN** :
3. Ne soyez PAS le premier à entrer
4. Observez où sont l'ADC et le mage ennemis
5. Attendez que les CC majeurs soient utilisés
6. Flanquez et éliminez un carry
7. Évaluez : continuer ou sortir ?

8. Après chaque teamfight, analysez votre performance :
   - Ai-je survécu assez longtemps ?
   - Ai-je touché les bonnes cibles ?
   - Mon timing était-il bon ?

## Critère de réussite

Vous participez à 3+ teamfights en appliquant consciemment les principes de votre rôle (positionnement pour mage, timing pour assassin) et avez un impact positif (kills/assists) dans au moins 2 d'entre eux.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le rôle principal d'un mage mid en teamfight ?",
      "Tanker les dégâts",
      "Infliger des dégâts constants et utiliser son ultime au bon moment",
      "Engager le combat",
      "Focus uniquement le tank",
      'b',
      "Les mages doivent survivre et infliger des dégâts de manière constante et sécurisée."
    ),
    createQuestion(
      "Où un mage doit-il se positionner en teamfight ?",
      "En première ligne",
      "Derrière la frontline, à distance de sécurité",
      "Isolé loin de l'équipe",
      "Au milieu des ennemis",
      'b',
      "Les mages restent derrière les tanks pour infliger des dégâts en sécurité."
    ),
    createQuestion(
      "Un assassin doit-il entrer en premier dans un teamfight ?",
      "Oui, toujours",
      "Non, il doit attendre que les CC soient utilisés",
      "Seulement s'il est fed",
      "Oui, pour surprendre",
      'b',
      "Entrer trop tôt en tant qu'assassin signifie mourir avant de faire des dégâts."
    ),
    createQuestion(
      "Quelle est la cible prioritaire d'un assassin en teamfight ?",
      "Le tank ennemi",
      "L'ADC ou le mage ennemi (les carries)",
      "Les sbires",
      "La tour",
      'b',
      "Les assassins doivent éliminer les sources de dégâts principales de l'équipe adverse."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'flank' en teamfight ?",
      "Attaquer de front",
      "Contourner pour attaquer par le côté ou l'arrière",
      "Fuir le combat",
      "Tanker les dégâts",
      'b',
      "Flanquer permet aux assassins d'atteindre les carries sans passer par la frontline."
    ),
    createQuestion(
      "Pourquoi 'focus le tank' est-il généralement une erreur ?",
      "Les tanks n'ont pas de HP",
      "Les tanks sont difficiles à tuer et pendant ce temps les carries vous tuent",
      "C'est toujours la bonne décision",
      "Les tanks font trop de dégâts",
      'b',
      "Tuer un tank prend trop de temps pendant lequel les carries ennemis font leur travail."
    ),
    createQuestion(
      "Quand un mage doit-il utiliser son ultime en teamfight ?",
      "Dès le début sur n'importe qui",
      "Quand il peut toucher plusieurs cibles importantes",
      "Jamais",
      "Uniquement sur les tanks",
      'b',
      "L'ultime doit être gardé pour un moment impactant touchant idéalement plusieurs ennemis."
    ),
    createQuestion(
      "Après avoir tué un carry, que doit faire un assassin ?",
      "Toujours all-in le reste",
      "Évaluer s'il peut continuer ou s'il doit sortir du fight",
      "Mourir",
      "Recall immédiatement",
      'b',
      "Après un kill, l'assassin doit juger s'il peut continuer ou s'il risque de mourir inutilement."
    ),
    createQuestion(
      "Qu'est-ce que le 'peel' pour un mage ?",
      "Fuir le combat",
      "Utiliser ses CC pour protéger un allié des menaces",
      "Attaquer la tour",
      "Farm les sbires",
      'b',
      "Le peel consiste à utiliser ses sorts pour empêcher les ennemis d'atteindre un allié."
    ),
    createQuestion(
      "Parfois en teamfight, la meilleure action est :",
      "All-in immédiatement",
      "Attendre et observer le bon moment pour agir",
      "Fuir sans rien faire",
      "AFK",
      'b',
      "La patience permet d'attendre le moment optimal pour avoir un impact maximum."
    ),
  ]
);
