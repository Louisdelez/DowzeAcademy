import { createModule, createQuestion } from '../utils';

export const module06EngageTeamfightComps = createModule(
  "Compositions d'engage et teamfight",
  'engage-teamfight-comps',
  'Maîtriser les compositions centrées sur l\'initiation et les combats d\'équipe 5v5',
  6,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'une composition d'engage ?

Une **composition d'engage** est construite autour de champions capables de **démarrer les combats** de manière fiable. L'objectif est d'initier des teamfights favorables en créant l'opportunité pour l'équipe d'unir ses dégâts.

Ce style de composition domine les **combats d'équipe 5v5** grâce à ses outils d'initiation.

## Champions d'engage typiques

Les champions d'engage ont des capacités qui leur permettent de **plonger sur l'ennemi** :

- **Top** : Ornn (R), Malphite (R), Sion (R), Kled (R)
- **Jungle** : Sejuani (R), Zac (E+R), Jarvan IV (E-Q-R), Amumu (R)
- **Mid** : Galio (R), Diana (R), Lissandra (R)
- **Support** : Leona (E+R), Nautilus (R), Rakan (W+R), Alistar (W-Q)

Ces champions partagent des **ultimates de zone** ou des **dashes d'engagement**.

## La win condition du teamfight

Pour réussir avec une composition d'engage, l'équipe doit :
1. **Forcer les combats** autour des objectifs (Drake, Baron)
2. **Regrouper** au bon moment
3. **Coordonner l'engage** avec les ultimates de follow-up
4. **Protéger les carries** après l'initiation

Le combat 5v5 est votre **terrain de jeu privilégié**.

## Les combos d'engage classiques

Une bonne initiation est souvent **enchaînée** avec d'autres capacités :

- **Malphite R + Yasuo R** : Knockup de masse pour l'ultime de Yasuo
- **Jarvan E-Q-R + Orianna R** : J4 plonge avec la balle d'Orianna
- **Amumu R + Miss Fortune R** : Immobilisation pour le bullet time
- **Rakan W+R + Xayah R** : Charm de masse pour setup Xayah

Le **timing** et la **communication** sont essentiels pour ces combos.

## Forces et faiblesses des comps d'engage

**Forces** :
- Contrôle les teamfights et les objectifs majeurs
- Peut forcer des combats même si l'ennemi ne veut pas
- Excellente pour tourner des situations défavorables
- S'améliore avec le nombre de personnes présentes

**Faiblesses** :
- Vulnérable au split-push (pas d'engage si l'ennemi n'est pas groupé)
- Peut être contré par le disengage (Janna, Gragas)
- Un engage raté = désastre
- Requiert une bonne coordination d'équipe

## Comment jouer une composition d'engage ?

**Stratégie** :
1. Wardez les objectifs et créez des situations 5v5
2. Attendez que l'ennemi se regroupe pour contester
3. Engagez quand un ou plusieurs ennemis sont mal positionnés
4. Enchaînez rapidement avec les ultimates de follow-up
5. Focus les carries après l'initiation

**Évitez** : D'engager quand votre équipe n'est pas prête ou splitté.

## Récapitulatif

- Les compositions d'engage forcent les combats d'équipe 5v5
- Malphite, Ornn, Leona, Amumu sont des engagers classiques
- Le combo d'initiation doit être suivi par l'équipe
- Forcez les combats autour des objectifs majeurs
- Évitez d'engager si l'équipe n'est pas regroupée`,

  // Practice Instructions
  `## Objectif

Pratiquer l'initiation de combats d'équipe avec un champion d'engage et la coordination avec les alliés.

## Étapes

1. Choisissez un champion d'engage (Malphite, Leona, Amumu, Jarvan)
2. En partie, concentrez-vous sur le timing de vos engages
3. Avant d'engager, vérifiez que vos coéquipiers sont prêts (ping, chat)
4. Engagez sur les carries ennemis mal positionnés
5. Après la partie, analysez vos 3 meilleurs et 3 pires engages

## Critère de réussite

Vous avez réussi au moins 3 engages qui ont mené à des combats gagnés, avec communication préalable avec l'équipe.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une composition d'engage ?",
      "Une équipe qui évite les combats",
      "Une équipe construite pour initier et gagner les combats 5v5",
      "Une équipe de split-push",
      "Une équipe full poke",
      'b',
      "Une composition d'engage repose sur des champions capables de démarrer les combats de manière fiable."
    ),
    createQuestion(
      "Quel champion est un engager emblématique ?",
      "Soraka",
      "Malphite",
      "Ezreal",
      "Teemo",
      'b',
      "Malphite est l'archétype de l'engager avec son ultime Unstoppable Force qui knockup toute une zone."
    ),
    createQuestion(
      "Pourquoi Malphite + Yasuo est-il un combo classique ?",
      "Ils ont tous les deux beaucoup de dégâts",
      "Le knockup de Malphite permet à Yasuo d'utiliser son ultime sur plusieurs cibles",
      "Malphite protège Yasuo",
      "Ils sont tous les deux des tanks",
      'b',
      "L'ultime de Yasuo nécessite un knockup, et Malphite peut knockup toute l'équipe ennemie."
    ),
    createQuestion(
      "Quelle est une faiblesse majeure des compositions d'engage ?",
      "Elles manquent de dégâts",
      "Elles sont vulnérables au split-push car elles ne peuvent pas engager un ennemi qui n'est pas là",
      "Elles ne peuvent pas prendre d'objectifs",
      "Elles perdent automatiquement en late game",
      'b',
      "Le split-push prive l'équipe d'engage de cibles groupées, annulant leur principale force."
    ),
    createQuestion(
      "Qu'est-ce que le 'disengage' et comment affecte-t-il les compositions d'engage ?",
      "C'est un type de CC",
      "Ce sont des capacités qui repoussent ou annulent les engages, contrant cette stratégie",
      "C'est une stratégie offensive",
      "Ça n'a aucun effet",
      'b',
      "Le disengage (Janna R, Gragas R) peut repousser l'engager et annuler l'initiation."
    ),
    createQuestion(
      "Quand une équipe d'engage doit-elle forcer les combats ?",
      "Dès que possible, même si l'équipe est splitée",
      "Autour des objectifs majeurs quand l'équipe est regroupée",
      "Uniquement en late game",
      "Jamais, il faut attendre que l'ennemi engage",
      'b',
      "Les objectifs majeurs (Drake, Baron) forcent l'ennemi à se regrouper, créant l'opportunité d'engage."
    ),
    createQuestion(
      "Que se passe-t-il si l'engage échoue ?",
      "Rien de grave",
      "C'est souvent un désastre car l'engager se retrouve seul au milieu de l'équipe ennemie",
      "L'équipe peut facilement se retirer",
      "On gagne quand même",
      'b',
      "Un engage raté laisse l'initiateur isolé et vulnérable, souvent menant à sa mort et un fight perdu."
    ),
    createQuestion(
      "Quelle composition illustre bien l'engage/teamfight ?",
      "Jayce, Nidalee, Xerath, Ezreal, Karma",
      "Ornn, Sejuani, Orianna, Miss Fortune, Leona",
      "Fiora, Kindred, Akali, Vayne, Yuumi",
      "Tryndamere, Master Yi, Zed, Draven, Senna",
      'b',
      "Ornn, Sejuani, Orianna, MF et Leona ont tous des ultimates de zone parfaits pour le teamfight."
    ),
    createQuestion(
      "Comment une équipe d'engage doit-elle utiliser la vision ?",
      "Uniquement pour farm la jungle",
      "Pour repérer quand l'ennemi se regroupe et trouver des opportunités d'engage",
      "La vision n'est pas importante pour cette stratégie",
      "Pour éviter tous les combats",
      'b',
      "La vision aide à identifier quand l'ennemi est regroupé et mal positionné pour un engage favorable."
    ),
    createQuestion(
      "Quelle est l'importance du follow-up après un engage ?",
      "Ce n'est pas vraiment important",
      "L'équipe doit immédiatement enchaîner avec ses dégâts et CC pour tuer les cibles",
      "Il faut attendre avant de réagir",
      "Seul l'engager doit faire des dégâts",
      'b',
      "Un engage sans follow-up laisse l'initiateur mourir sans valeur. L'équipe doit réagir instantanément."
    ),
  ]
);
