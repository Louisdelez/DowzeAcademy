import { createModule, createQuestion } from '../utils';

export const module03WinCondition = createModule(
  'Condition de victoire (win condition)',
  'win-condition',
  'Identifier et jouer autour du plan de victoire de votre composition',
  3,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'une win condition ?

La **win condition** est le plan de jeu principal qui mènera votre équipe à la victoire. C'est la réponse à la question : "Comment cette composition gagne-t-elle la partie ?"

Chaque composition a une ou plusieurs win conditions, et les identifier permet de prendre les bonnes décisions.

## Les différentes win conditions

Les principales win conditions dans League of Legends :
- **Teamfight** : Gagner les combats d'équipe 5v5
- **Split-push** : Créer une pression latérale impossible à contenir
- **Pick** : Attraper et éliminer des cibles isolées
- **Scaling** : Survivre au early-game et dominer en late
- **Snowball** : Prendre l'avantage tôt et ne jamais le lâcher

## Identifier sa win condition

Pour identifier la win condition de votre équipe :

1. **Regardez les power spikes** : À quel moment votre équipe est-elle la plus forte ?
2. **Analysez les ultimates** : Sont-ils faits pour le teamfight ou le 1v1 ?
3. **Évaluez le scaling** : Qui scale le mieux en late game ?
4. **Considérez les synergies** : Quelles combinaisons avez-vous ?

Exemple : Ornn, Sejuani, Orianna, Jinx, Thresh = Win condition **teamfight**

## Jouer autour de sa win condition

Une fois identifiée, **toutes vos décisions** doivent servir cette win condition :

- Si teamfight : Forcez des combats aux objectifs majeurs
- Si split-push : Assurez-vous que le split-pusher est fed
- Si scaling : Évitez les risques inutiles en early
- Si snowball : Jouez agressivement dès le niveau 1

**Erreur courante** : Forcer des fights alors que votre win condition est le scaling.

## Reconnaître la win condition adverse

Tout aussi important : identifier **comment l'ennemi veut gagner** pour le contrer.

- Contre une équipe de teamfight : Évitez les fights groupés, splittez
- Contre une équipe de split : Forcez des objectifs à 5v4
- Contre une équipe qui scale : Accélérez le tempo, finissez tôt
- Contre une équipe de pick : Restez groupés, wardez bien

## Adapter sa stratégie en cours de partie

Les win conditions peuvent **évoluer** pendant la partie :
- Votre hyper-carry est 0/5 ? Cherchez une autre source de dégâts
- Votre split-pusher domine ? Jouez autour de lui
- L'ennemi a pris le Baron ? Défendez et attendez la fenêtre

**Flexibilité** et **communication** sont essentielles.

## Récapitulatif

- La win condition est le plan de victoire de votre composition
- Teamfight, split-push, pick, scaling et snowball sont les principales
- Identifiez-la en analysant power spikes, ultimates et synergies
- Toutes vos décisions doivent servir cette win condition
- Reconnaissez aussi la win condition adverse pour la contrer`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier et communiquer la win condition de votre équipe en début de partie.

## Étapes

1. En champion select, analysez votre composition et celle de l'ennemi
2. Identifiez votre win condition principale (teamfight, split, pick, scaling, snowball)
3. Communiquez-la à votre équipe dans le chat (ex: "On scale, jouons safe early")
4. Pendant la partie, notez si les décisions de l'équipe servent cette win condition
5. Après la partie, évaluez si vous avez joué correctement autour de votre plan

## Critère de réussite

Vous identifiez correctement la win condition avant le début de la partie et prenez des décisions cohérentes avec ce plan.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une win condition ?",
      "Le champion le plus fort de l'équipe",
      "Le plan de jeu principal qui mènera l'équipe à la victoire",
      "Le nombre de kills nécessaires pour gagner",
      "L'objectif le plus important de la carte",
      'b',
      "La win condition répond à la question 'Comment cette composition gagne-t-elle la partie ?'"
    ),
    createQuestion(
      "Quelle est la win condition d'une équipe avec Ornn, Malphite, Orianna, Miss Fortune et Leona ?",
      "Split-push",
      "Teamfight",
      "Pick",
      "Snowball early game",
      'b',
      "Cette composition a d'énormes ultimates de zone et CC - elle est faite pour les combats d'équipe 5v5."
    ),
    createQuestion(
      "Comment joue-t-on quand la win condition est le scaling ?",
      "On force des fights constants",
      "On évite les risques inutiles et on farm pour atteindre le late game",
      "On split-push agressivement",
      "On cherche des picks en early",
      'b',
      "Si l'équipe scale bien, il faut éviter les combats risqués en early et attendre d'atteindre le power spike du late game."
    ),
    createQuestion(
      "Quelle est la meilleure réponse contre une équipe qui veut teamfight ?",
      "Forcer des combats 5v5",
      "Éviter les combats groupés et split-push",
      "Se regrouper constamment",
      "Défendre sous les tourelles",
      'b',
      "Contre une équipe de teamfight, on évite de leur donner ce qu'ils veulent et on crée de la pression latérale."
    ),
    createQuestion(
      "Pourquoi est-il important d'identifier la win condition adverse ?",
      "Pour copier leur stratégie",
      "Pour la contrer et l'empêcher de se réaliser",
      "Ce n'est pas vraiment important",
      "Pour avoir une meilleure composition",
      'b',
      "Comprendre comment l'ennemi veut gagner permet de prendre des décisions qui contrecarrent leur plan."
    ),
    createQuestion(
      "Quelle composition a une win condition de snowball early game ?",
      "Kayle, Kassadin, Kog'Maw, Vayne, Yuumi",
      "Renekton, Lee Sin, LeBlanc, Draven, Leona",
      "Ornn, Zac, Orianna, Jinx, Thresh",
      "Nasus, Karthus, Veigar, Twitch, Sona",
      'b',
      "Renekton, Lee Sin, LeBlanc, Draven et Leona sont tous des champions early game qui doivent snowball."
    ),
    createQuestion(
      "Comment identifier le power spike de son équipe ?",
      "Regarder uniquement le niveau 6",
      "Analyser quand les champions et objets clés sont les plus forts",
      "Attendre la fin de la partie",
      "Se baser sur les statistiques op.gg",
      'b',
      "Le power spike dépend des champions (certains peak early, d'autres late) et des objets clés de la composition."
    ),
    createQuestion(
      "Quelle erreur commune est liée aux win conditions ?",
      "Jouer trop passivement",
      "Forcer des fights alors que la win condition est le scaling",
      "Trop farmer",
      "Acheter trop de wards",
      'b',
      "Une erreur fréquente est de ne pas adapter ses décisions à la win condition et de jouer contre le plan de l'équipe."
    ),
    createQuestion(
      "Comment les win conditions peuvent-elles évoluer en partie ?",
      "Elles ne changent jamais",
      "Si un joueur clé est en difficulté, l'équipe doit trouver une alternative",
      "Uniquement après le Baron",
      "Seulement si l'équipe est en retard",
      'b',
      "Si l'hyper-carry est 0/5, l'équipe doit s'adapter et chercher une autre source de victoire."
    ),
    createQuestion(
      "Quelle est la meilleure approche contre une équipe qui scale ?",
      "Attendre le late game",
      "Accélérer le tempo et forcer des objectifs rapidement",
      "Farmer passivement",
      "Éviter tous les combats",
      'b',
      "Contre une équipe qui scale, il faut prendre l'avantage tôt et finir la partie avant qu'ils n'atteignent leur power spike."
    ),
  ]
);
