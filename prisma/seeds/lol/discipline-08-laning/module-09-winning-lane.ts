import { createModule, createQuestion } from '../utils';

export const module09WinningLane = createModule(
  'Capitaliser sur une avance',
  'winning-lane',
  "Transformer un avantage de lane en victoire",
  9,
  // Theory Content
  `## Exploiter un avantage

Gagner sa lane ne suffit pas, il faut **capitaliser** sur cet avantage pour gagner la partie. Beaucoup de joueurs perdent leurs avances.

## Reconnaître qu'on gagne

Signes d'avantage :
- Vous avez plus d'**objets**
- Vous êtes **ahead en niveaux**
- Vous gagnez les **trades**
- L'ennemi **joue passif** et recule

## Étendre l'avantage

Comment snowball :
- **Freeze** pour deny plus de CS
- **Dive** sous tourelle si possible
- Prendre les **plates** (tourelle)
- Contrôler la lane avec **pression**

## Répandre l'avantage

Aider les autres lanes :
- **Roam** vers les autres lanes
- Aider le **jungler** sur les objectifs
- Prendre le **Herald** pour plus de plates
- Pinger avant de roam

## Ne pas jeter son avantage

Erreurs à éviter :
- **Overconfidence** : mourir en jouant trop agressif
- **Mauvais dives** qui donnent shutdown
- **Ignorer** les objectifs pour farm
- Ne pas **partager** l'avantage avec l'équipe

## Fermer la partie

Comment convertir en victoire :
- Prenez les **objectifs** (Dragon, Baron)
- Forcez des **fights** avec votre avantage
- **Groupez** avec l'équipe
- Ne laissez pas l'ennemi **scale** gratuitement`,

  // Practice Instructions
  `## Objectif

Apprendre à transformer une avance de lane en victoire.

## Étapes

1. Quand vous gagnez votre lane, identifiez-le
2. Prenez les plates de tourelle
3. Roam pour aider les autres lanes
4. Aidez sur les objectifs (dragon, herald)
5. Évitez les morts gratuites

## Critère de réussite

Vous convertissez une lane gagnée en victoire en répandant votre avantage sur la map.`,

  // Questions
  [
    createQuestion(
      "Que faire quand on gagne sa lane ?",
      "Rester en lane indéfiniment",
      "Capitaliser et répandre l'avantage",
      "AFK",
      "Attendre",
      'b',
      "Quand ahead, il faut capitaliser et étendre l'avantage à la map."
    ),
    createQuestion(
      "Comment reconnaître qu'on gagne ?",
      "L'ennemi vous tue",
      "Vous avez plus d'objets et gagnez les trades",
      "Vous perdez du CS",
      "L'ennemi push",
      'b',
      "Ahead = plus d'objets/niveaux et trades gagnants."
    ),
    createQuestion(
      "Qu'est-ce qu'un dive ?",
      "Se noyer",
      "Attaquer sous la tourelle ennemie",
      "Fuir",
      "Un type de sort",
      'b',
      "Dive = tuer l'ennemi sous sa propre tourelle."
    ),
    createQuestion(
      "Pourquoi roam quand on est ahead ?",
      "Pour perdre l'avantage",
      "Pour répandre l'avantage aux autres lanes",
      "Pas de raison",
      "C'est interdit",
      'b',
      "Roamer ahead aide vos coéquipiers et propage votre avantage."
    ),
    createQuestion(
      "Qu'est-ce que les plates de tourelle donnent ?",
      "Rien",
      "De l'or bonus (160 par plate)",
      "De l'XP bonus",
      "Des kills",
      'b',
      "Les plates donnent 160 or chacune (5 plates par tourelle)."
    ),
    createQuestion(
      "Qu'est-ce que l'overconfidence ?",
      "Bien jouer",
      "Prendre trop de risques car on se croit invincible",
      "Être prudent",
      "Un buff",
      'b',
      "L'overconfidence = prendre des risques inutiles car on est ahead."
    ),
    createQuestion(
      "Pourquoi éviter les morts quand ahead ?",
      "Ça n'a pas d'importance",
      "On donne un shutdown (or bonus) à l'ennemi",
      "On perd son champion",
      "C'est impossible de mourir",
      'b',
      "Mourir ahead donne un shutdown bonus à l'ennemi."
    ),
    createQuestion(
      "Quel objectif prendre avec une avance top ?",
      "Dragon",
      "Rift Herald",
      "Baron",
      "Aucun",
      'b',
      "Le Herald est proche de top et aide à prendre des plates."
    ),
    createQuestion(
      "Faut-il laisser l'ennemi scale ?",
      "Oui, c'est poli",
      "Non, forcer des plays avec son avantage",
      "Ça dépend de la lune",
      "Toujours",
      'b',
      "Ne laissez pas l'ennemi scale, utilisez votre avantage."
    ),
    createQuestion(
      "Comment fermer une partie quand ahead ?",
      "Farm la jungle",
      "Prendre objectifs et forcer des fights groupés",
      "Attendre 60 minutes",
      "Se laisser tuer",
      'b',
      "Prenez les objectifs et forcez des combats d'équipe favorables."
    ),
  ]
);
