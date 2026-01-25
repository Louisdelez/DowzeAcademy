import { createModule, createQuestion } from '../utils';

export const module06LanePositioning = createModule(
  'Positionnement en lane',
  'lane-positioning',
  'Safe zones et danger zones',
  6,
  // Theory Content
  `## Le positionnement en lane

Votre **position** en lane détermine votre sécurité et vos opportunités. Un bon positionnement évite les ganks et crée des ouvertures.

## Les zones de la lane

Trois zones principales :
- **Safe zone** : Près de votre tourelle, très sûr
- **Neutral zone** : Milieu de lane, équilibré
- **Danger zone** : Près de la tourelle ennemie, risqué

## Quand rester safe ?

Situations pour reculer :
- Vous ne savez pas où est le **jungler ennemi**
- Vous êtes **low HP** ou sans **mana**
- Vos sorts **importants sont en CD**
- L'ennemi a son **ultime** et pas vous

## Quand avancer ?

Moments pour être agressif :
- Le jungler ennemi est **visible** ailleurs
- Vous avez un **avantage** clair
- Votre jungler est **proche** pour gank
- L'ennemi est **low** et vulnérable

## Le concept de lane priority

Lane prio = contrôle de la lane :
- Avoir **push** = avoir la prio
- Permet de **roam** ou **aider le jungler**
- L'ennemi doit choisir : perdre CS ou suivre
- Important pour les **objectifs**

## Les bushes

Utilisation des buissons :
- Cassent la **vision** ennemie
- Permettent des **embuscades**
- Contrôlez-les avec des **wards**
- Danger si non-wardés`,

  // Practice Instructions
  `## Objectif

Comprendre le positionnement optimal en lane selon la situation.

## Étapes

1. Identifiez les trois zones de votre lane
2. Restez en safe zone quand vous ne voyez pas le jungler
3. Avancez quand vous avez un avantage et la vision
4. Wardez les bushes latéraux
5. Observez comment la vague affecte votre position

## Critère de réussite

Vous ajustez votre position selon la situation et mourez moins aux ganks.`,

  // Questions
  [
    createQuestion(
      "Quelles sont les trois zones de lane ?",
      "Top, mid, bot",
      "Safe zone, neutral zone, danger zone",
      "Jungle, river, base",
      "Ward, no-ward, tourelle",
      'b',
      "Les trois zones sont safe (proche tourelle), neutral (milieu), danger (proche tourelle ennemie)."
    ),
    createQuestion(
      "Où est la safe zone ?",
      "Au milieu",
      "Près de votre tourelle",
      "Près de la tourelle ennemie",
      "Dans la jungle",
      'b',
      "La safe zone est proche de votre tourelle."
    ),
    createQuestion(
      "Quand rester en safe zone ?",
      "Toujours",
      "Quand le jungler ennemi est MIA",
      "Jamais",
      "Quand vous êtes fed",
      'b',
      "Restez safe si vous ne savez pas où est le jungler ennemi."
    ),
    createQuestion(
      "Qu'est-ce que la lane priority ?",
      "Avoir beaucoup de kills",
      "Avoir le contrôle/push de la lane",
      "Jouer top lane",
      "Avoir plus de CS",
      'b',
      "La lane prio = avoir poussé/contrôler la lane."
    ),
    createQuestion(
      "Avoir la lane prio permet de ?",
      "Perdre",
      "Roam et aider le jungler",
      "Rester AFK",
      "Rien",
      'b',
      "La prio permet de roam ou d'aider son jungler sans perdre de CS."
    ),
    createQuestion(
      "Que font les bushes en lane ?",
      "Donnent de l'or",
      "Cassent la vision ennemie",
      "Soignent",
      "Rien",
      'b',
      "Les bushes cachent votre position si l'ennemi n'a pas de ward dedans."
    ),
    createQuestion(
      "Quand avancer en danger zone ?",
      "Jamais",
      "Quand le jungler ennemi est visible ailleurs",
      "Toujours",
      "Quand vous avez peu de PV",
      'b',
      "Avancez quand vous savez où est le jungler et qu'il ne peut pas venir."
    ),
    createQuestion(
      "Pourquoi warder les bushes latéraux ?",
      "Pour l'or",
      "Pour détecter les ganks",
      "Pour faire joli",
      "Pas de raison",
      'b',
      "Les wards dans les bushes détectent les ganks du jungler."
    ),
    createQuestion(
      "Si l'ennemi a son ulti et pas vous, que faire ?",
      "All-in",
      "Rester plus safe",
      "Push fort",
      "AFK",
      'b',
      "Sans votre ulti contre un ennemi avec le sien, restez prudent."
    ),
    createQuestion(
      "La vague affecte-t-elle le positionnement ?",
      "Non",
      "Oui, on suit la vague pour farmer",
      "Seulement en ranked",
      "Seulement les canons",
      'b',
      "Votre position suit naturellement la vague pour farm et safety."
    ),
  ]
);
