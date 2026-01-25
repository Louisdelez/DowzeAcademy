import { createModule, createQuestion } from '../utils';

export const module05PeelVsEngage = createModule(
  'Peel vs engage',
  'peel-vs-engage',
  'Savoir quand protéger ses alliés et quand initier les combats',
  5,
  // Theory Content (5+ slides)
  `## Deux philosophies du support

En tant que support, vous avez deux approches fondamentales en combat : le **peel** (protection) et l'**engage** (initiation). Savoir quand utiliser chaque approche est ce qui différencie un bon support d'un excellent support.

## Qu'est-ce que le peel ?

Le **peel** consiste à utiliser vos sorts pour **protéger vos carries** des menaces. Cela inclut :
- Utiliser vos CC sur les assassins qui plongent
- Boucliers et soins sur les cibles focus
- Ralentissements sur les ennemis qui approchent
- Se positionner entre la menace et votre carry

## Qu'est-ce que l'engage ?

L'**engage** consiste à **initier le combat** en ciblant un ennemi prioritaire. Cela inclut :
- Utiliser vos CC offensivement sur une cible isolée
- Flash + CC pour surprendre
- Forcer un combat avantageux
- Créer une ouverture pour votre équipe

## Quand peel, quand engage ?

**Privilégiez le peel quand :**
- Votre ADC est fed et peut carry
- L'équipe ennemie a des assassins
- Vous avez déjà un engageur (jungler, top)
- Votre équipe gagne les fights si elle survit

**Privilégiez l'engage quand :**
- Vous avez un pick potentiel sur une cible isolée
- Votre ADC a besoin d'une ouverture
- L'équipe manque d'initiation
- L'ennemi est en désavantage numérique

## Adapter son style en temps réel

Même en plein combat, vous devez **adapter** votre approche :
- Si votre engage réussit mais un assassin dive votre ADC → passez au peel
- Si vous peelez mais une opportunité de pick se présente → engagez
- Communiquez vos intentions avec les pings

## Récapitulatif

- **Peel** = protéger vos carries des menaces
- **Engage** = initier le combat sur une cible ennemie
- Peel si votre ADC est fed ou face aux assassins
- Engage si cible isolée ou manque d'initiation
- **Adaptez-vous** en temps réel selon la situation`,

  // Practice Instructions
  `## Objectif

Pratiquer les deux approches (peel et engage) et savoir identifier la bonne situation pour chacune.

## Étapes

1. Jouez une partie avec Thresh ou Nautilus (capables des deux approches)
2. Identifiez avant chaque fight : peel ou engage ?
3. Si votre ADC est fed → peel en priorité
4. Si vous voyez une cible isolée → engage
5. Notez chaque décision et son résultat
6. Après la partie, analysez vos choix

## Critère de réussite

Vous avez consciemment choisi entre peel et engage dans au moins 5 teamfights, et vos choix étaient appropriés dans au moins 70% des cas.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Que signifie 'peel' dans le contexte du support ?",
      "Initier un combat",
      "Protéger ses carries des menaces",
      "Farmer les sbires",
      "Placer des wards",
      'b',
      "Le peel consiste à utiliser ses sorts pour protéger ses alliés fragiles des menaces ennemies."
    ),
    createQuestion(
      "Quand devez-vous privilégier le peel ?",
      "Quand vous avez une cible isolée",
      "Quand votre ADC est fed",
      "Quand l'équipe manque d'engage",
      "Toujours en début de partie",
      'b',
      "Si votre ADC est fed et peut carry, le protéger (peel) est la priorité."
    ),
    createQuestion(
      "Qu'est-ce qui caractérise un bon engage ?",
      "Utiliser ses sorts défensivement",
      "Cibler une cible prioritaire ou isolée",
      "Rester derrière son ADC",
      "Attendre que l'ennemi engage",
      'b',
      "Un bon engage cible une cible prioritaire ou isolée pour créer une opportunité pour l'équipe."
    ),
    createQuestion(
      "Face à un assassin qui dive votre ADC, que faites-vous ?",
      "Engage sur le carry ennemi",
      "Peel pour protéger votre ADC",
      "Ignorer et focus les sbires",
      "Fuir immédiatement",
      'b',
      "Face à un assassin qui dive, utiliser vos CC pour peel et protéger votre ADC est prioritaire."
    ),
    createQuestion(
      "Quand est-il approprié d'engager plutôt que de peel ?",
      "Quand votre ADC est très fed",
      "Quand l'ennemi a beaucoup d'assassins",
      "Quand vous avez un pick sur une cible isolée",
      "Jamais, toujours peel",
      'c',
      "Si une cible ennemie est isolée, c'est une opportunité d'engage pour créer un avantage numérique."
    ),
    createQuestion(
      "Quel type de sort est utilisé pour le peel ?",
      "Les sorts d'initiation longue portée",
      "Les CC défensifs, boucliers et soins",
      "Les sorts de dégâts purs",
      "Les sorts de mobilité offensive",
      'b',
      "Le peel utilise des CC défensifs, boucliers et soins pour protéger les alliés."
    ),
    createQuestion(
      "Si votre équipe a déjà un engageur (comme Malphite), que devez-vous faire ?",
      "Engager aussi",
      "Peel car l'engage est déjà couvert",
      "Ne pas participer aux fights",
      "Focus les sbires",
      'b',
      "Si l'équipe a déjà un engageur, le support peut se concentrer sur le peel."
    ),
    createQuestion(
      "Comment communiquer vos intentions d'engage ?",
      "Ne pas communiquer, surprendre l'équipe",
      "Utiliser les pings pour signaler",
      "Écrire un message détaillé",
      "Attendre que l'équipe devine",
      'b',
      "Les pings permettent de communiquer rapidement vos intentions d'engage à votre équipe."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'pick' ?",
      "Un champion fort en méta",
      "Attraper un ennemi isolé pour le tuer",
      "Un type de ward",
      "Un objectif neutre",
      'b',
      "Un pick consiste à attraper et éliminer un ennemi isolé de son équipe."
    ),
    createQuestion(
      "Comment adapter son style en plein combat ?",
      "Rester sur la même approche quoi qu'il arrive",
      "Changer selon les opportunités et menaces",
      "Toujours fuir si ça tourne mal",
      "Ne jamais changer de plan",
      'b',
      "Un bon support adapte son approche en temps réel selon les opportunités et les menaces qui émergent."
    ),
  ]
);
