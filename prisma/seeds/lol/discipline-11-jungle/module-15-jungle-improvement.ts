import { createModule, createQuestion } from '../utils';

export const module15JungleImprovement = createModule(
  'Progression en jungle',
  'jungle-improvement',
  'Comment devenir meilleur jungler',
  15,
  // Theory Content
  `## Progression en Jungle

Devenir un bon **jungler** demande du temps et de la pratique délibérée. Voici comment progresser efficacement.

## Maîtriser un champion

La spécialisation :
- Choisissez **1-2 champions** à main
- Apprenez leurs **matchups** à fond
- Maîtrisez leurs **clears** optimaux
- Connaissez leurs **power spikes**

## Regarder des replays

Analyser ses parties :
- Regardez vos **défaites**
- Identifiez vos **erreurs**
- Notez les **décisions** alternatives
- Apprenez de chaque game

## Regarder des pros/streamers

Apprendre des meilleurs :
- Observez leur **pathing**
- Notez leurs **décisions** de gank
- Copiez leur **tempo** de jeu
- Posez-vous des questions : "Pourquoi fait-il ça ?"

## Pratiquer le tracking

S'améliorer au tracking :
- Notez mentalement où l'ennemi **commence**
- Suivez son **path** probable
- Vérifiez vos **prédictions**
- Alertez les lanes

## La mentalité de progression

État d'esprit :
- Acceptez les **erreurs** comme apprentissage
- Ne blâmez pas les **laners**
- Cherchez toujours à **vous améliorer**
- Restez **positif** même dans les défaites

## Objectifs concrets

Progression mesurable :
- Améliorer son **CS/min** en jungle
- Augmenter son **impact** sur les lanes
- Meilleur **contrôle** des objectifs
- Moins de **morts** inutiles`,

  // Practice Instructions
  `## Objectif

Mettre en place un plan de progression pour la jungle.

## Étapes

1. Choisissez 1-2 champions à maîtriser
2. Regardez un replay de défaite et identifiez 3 erreurs
3. Regardez un stream de haut niveau et notez des apprentissages
4. Fixez-vous un objectif (ex: 5 CS/min, 2 ganks réussis avant 6 min)
5. Évaluez votre progression après 10 parties

## Critère de réussite

Vous avez identifié des axes d'amélioration et constaté des progrès mesurables.`,

  // Questions
  [
    createQuestion(
      "Combien de champions maîtriser pour bien progresser ?",
      "Tous",
      "1-2 champions",
      "10 champions",
      "Aucun en particulier",
      'b',
      "Se spécialiser sur 1-2 champions aide à progresser plus vite."
    ),
    createQuestion(
      "Pourquoi regarder ses replays ?",
      "Pour se sentir bien",
      "Pour identifier et apprendre de ses erreurs",
      "Pour montrer aux autres",
      "Pas d'intérêt",
      'b',
      "Les replays aident à voir et corriger les erreurs."
    ),
    createQuestion(
      "Que regarder chez les pros/streamers ?",
      "Les skins",
      "Leur pathing, décisions et tempo",
      "Leur micro",
      "Leur webcam",
      'b',
      "Observez leurs décisions et essayez de comprendre pourquoi."
    ),
    createQuestion(
      "Comment améliorer le tracking ?",
      "Impossible",
      "Noter le start ennemi et suivre son path",
      "Deviner au hasard",
      "Ne pas s'en occuper",
      'b',
      "Pratiquez en notant les positions et vérifiant vos prédictions."
    ),
    createQuestion(
      "La bonne mentalité pour progresser est ?",
      "Blâmer les autres",
      "Accepter ses erreurs et chercher à s'améliorer",
      "Rage quit",
      "Jouer sans réfléchir",
      'b',
      "L'amélioration vient de l'acceptation de ses erreurs."
    ),
    createQuestion(
      "Blâmer les laners aide-t-il à progresser ?",
      "Oui",
      "Non, ça empêche de voir ses propres erreurs",
      "Parfois",
      "Toujours",
      'b',
      "Blâmer les autres vous empêche de vous améliorer."
    ),
    createQuestion(
      "Un objectif concret de progression est ?",
      "Gagner toutes les parties",
      "Améliorer son CS/min ou réussir X ganks",
      "Être le meilleur",
      "Rien de mesurable",
      'b',
      "Les objectifs mesurables permettent de constater la progression."
    ),
    createQuestion(
      "Regarder des défaites est plus utile car ?",
      "C'est plus fun",
      "On y voit mieux ses erreurs",
      "Les victoires sont ennuyeuses",
      "Ce n'est pas utile",
      'b',
      "Les défaites révèlent les erreurs à corriger."
    ),
    createQuestion(
      "Connaître les power spikes de son champion aide car ?",
      "Ça ne sert à rien",
      "Vous savez quand forcer et quand jouer safe",
      "Pour le style",
      "Pour les stats",
      'b',
      "Les power spikes indiquent quand vous êtes fort."
    ),
    createQuestion(
      "La patience est-elle importante pour progresser ?",
      "Non, ça vient vite",
      "Oui, la progression prend du temps",
      "Jamais",
      "Seulement en ranked",
      'b',
      "La progression en jungle demande du temps et de la pratique."
    ),
  ]
);
