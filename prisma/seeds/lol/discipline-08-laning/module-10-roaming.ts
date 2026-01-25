import { createModule, createQuestion } from '../utils';

export const module10Roaming = createModule(
  'Roaming',
  'roaming',
  'Quitter sa lane pour aider ailleurs',
  10,
  // Theory Content
  `## Le Roaming

Le **roaming** est l'action de quitter temporairement votre lane pour aider une autre lane ou votre jungler. C'est une compétence essentielle, surtout pour mid et support.

## Quand roam ?

Bons moments pour roam :
- Après avoir **push** votre vague
- Quand l'ennemi est **visible** autre part
- Quand une lane alliée est **gankable**
- Après avoir obtenu un **kill** en lane

## Conditions pour un bon roam

Checklist avant de roam :
- Vague **poussée** sous tourelle ennemie
- **Vision** du jungler ennemi ou le voir loin
- Lane cible avec une **opportunité** (low HP, no flash)
- **Communication** avec vos alliés (pings)

## Le coût du roam

Ce que vous perdez :
- **CS** pendant le déplacement
- **XP** de la lane
- Potentiellement des **plates**
- Risque de roam **raté** (rien gagné)

## Roam réussi vs raté

Comment évaluer :
- **Réussi** : Kill, assist, summoner forcé, objectif
- **Raté** : Rien obtenu et perdu du CS
- Un bon roam = gain > pertes
- Parfois forcer un **Flash** suffit

## Communication

Prévenir l'équipe :
- Ping **On my way** vers la lane cible
- Ping **danger** si votre laner suit
- Ping **missing** sur votre adversaire
- Coordonner avec le jungler`,

  // Practice Instructions
  `## Objectif

Apprendre à roam efficacement pour aider d'autres lanes.

## Étapes

1. Push votre vague sous la tourelle ennemie
2. Vérifiez la map pour des opportunités
3. Pingez "On my way" vers la lane cible
4. Déplacez-vous rapidement par la rivière ou jungle
5. Évaluez si le roam était profitable

## Critère de réussite

Vous réussissez un roam qui résulte en un kill, assist ou summoner forcé sans perdre trop de CS.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le roaming ?",
      "Rester en lane",
      "Quitter sa lane pour aider ailleurs",
      "Mourir",
      "Farm la jungle",
      'b',
      "Roaming = quitter temporairement sa lane pour aider une autre."
    ),
    createQuestion(
      "Quand est un bon moment pour roam ?",
      "Avec une grosse vague sous votre tourelle",
      "Après avoir push sous tourelle ennemie",
      "N'importe quand",
      "Jamais",
      'b',
      "Roam après avoir push pour ne pas perdre trop de CS."
    ),
    createQuestion(
      "Quel rôle roam le plus souvent ?",
      "ADC",
      "Mid et Support",
      "Jungler",
      "Personne",
      'b',
      "Mid et Support roam le plus car ils sont centraux ou mobiles."
    ),
    createQuestion(
      "Que faire avant de roam ?",
      "Rien",
      "Push la vague et ping 'On my way'",
      "Mourir",
      "AFK",
      'b',
      "Push puis ping pour prévenir vos alliés de votre arrivée."
    ),
    createQuestion(
      "Qu'est-ce qu'un roam raté ?",
      "Un roam qui donne un kill",
      "Un roam où on ne gagne rien et on perd du CS",
      "Un roam rapide",
      "Tous les roams sont réussis",
      'b',
      "Roam raté = aucun gain mais perte de CS et temps."
    ),
    createQuestion(
      "Forcer un Flash ennemi est-il un bon roam ?",
      "Non, c'est raté",
      "Oui, c'est déjà un avantage",
      "Ça dépend",
      "Seulement en ranked",
      'b',
      "Forcer un Flash = avantage pour le prochain gank."
    ),
    createQuestion(
      "Que perdez-vous en roaming ?",
      "Rien",
      "CS et XP de votre lane",
      "Votre champion",
      "Tout",
      'b',
      "Le roam coûte du CS et de l'XP de votre propre lane."
    ),
    createQuestion(
      "Comment prévenir que votre laner suit le roam ?",
      "Ne rien dire",
      "Ping 'danger' ou 'missing'",
      "Espérer",
      "AFK",
      'b',
      "Ping pour alerter que l'ennemi peut suivre votre roam."
    ),
    createQuestion(
      "Par où passer pour roam ?",
      "Par la base",
      "Par la rivière ou la jungle",
      "Par la lane adverse",
      "On ne peut pas roam",
      'b',
      "La rivière et la jungle sont les chemins de roam classiques."
    ),
    createQuestion(
      "Un bon roam crée quel type de gain ?",
      "Aucun",
      "Kill, assist, summoner forcé ou objectif",
      "Perte d'or",
      "Tilt",
      'b',
      "Un bon roam apporte des gains tangibles pour l'équipe."
    ),
  ]
);
