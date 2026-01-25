import { createModule, createQuestion } from '../utils';

export const module10AvoidingThrow = createModule(
  'Ne pas throw',
  'avoiding-throw',
  'Eviter de forcer Baron ou Dragon et gerer l avance',
  10,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un throw ?

Un **throw** designe le fait de perdre une partie qu'on etait en train de gagner a cause d'une mauvaise decision. En late game, les throws sont particulierement douloureux car une seule erreur peut couter des dizaines de minutes d'efforts.

Les throws les plus courants impliquent Baron, Elder Dragon, ou des decisions risquees inutiles.

## Les throws classiques autour de Baron

Les erreurs les plus frequentes :

- **Forcer Baron en 5v5** sans avantage clair
- **Commencer Baron** sans savoir ou est l'ennemi
- **Baron low health** quand le jungler ennemi est en vie (steal)
- **Se faire engage** pendant le DPS sur Baron
- **Greedy Baron** apres un fight gagne (parfois mieux de push)

Le Baron "desesperee" est la cause de nombreuses defaites.

## Les throws autour de l'Elder Dragon

Similaire a Baron, mais encore plus risque :

- Forcer Elder quand l'ennemi peut contester
- Ignorer que l'ennemi a le Soul et est plus fort
- Mauvaise coordination sur le DPS et le smite
- Se faire ace pendant la tentative

L'Elder peut retourner une partie, donc le risque est double.

## Comment eviter les throws

Regles d'or pour ne pas throw :

1. **Avantage = patience** : Quand vous gagnez, vous n'avez pas besoin de forcer
2. **Ne pas etre greedy** : Prenez l'objectif sur, pas le risque
3. **Controler la vision** avant tout objectif major
4. **Compter les ennemis** : Ou sont-ils tous les 5 ?
5. **Respecter le smite** : Un steal peut tout changer

## La mentalite "Close the game safely"

Quand vous etes en avance :

- **Etouffez l'ennemi** plutot que de forcer les fights
- **Prenez les objectifs garantis** : Tourelles, inhibiteurs
- **Creez de la pression** via les waves
- **Forcez les erreurs** plutot que d'en commettre
- **Attendez les picks** au lieu d'engager 5v5

L'equipe en retard doit prendre des risques. Vous non.

## Reconnaitre le moment de closer

Il y a des moments ou il faut finir :

- L'ennemi **scale mieux** que vous en late game
- Vous avez **Baron + plusieurs kills** : poussez le Nexus
- Un **inhibiteur est down** et vous avez le controle
- L'ennemi est en **respawn timer long**

Ne laissez pas l'ennemi revenir dans la partie par passivite excessive.

## Recapitulatif

- Un throw = perdre une partie qu'on gagnait par une mauvaise decision
- Baron et Elder forces sont les throws les plus courants
- Quand vous gagnez, soyez patient et ne forcez pas
- Controlez la vision et comptez les ennemis avant les objectifs
- Fermez la partie quand les conditions sont reunies`,

  // Practice Instructions
  `## Objectif

Apprendre a gerer une avance sans la gaspiller par des decisions risquees.

## Etapes

1. En partie, quand votre equipe est en avance, identifiez les objectifs surs vs risques
2. Avant chaque Baron/Elder, demandez-vous : "Est-ce que je force ou est-ce garanti ?"
3. Privilegiez les tourelles et inhibiteurs plutot que les objectifs contests
4. Observez si vos coequipiers veulent forcer des objectifs risques et communiquez
5. Apres la partie, analysez si vous avez evite ou commis des throws

## Critere de reussite

Vous avez evite de forcer un Baron ou Elder risque alors que vous etiez en avance, preferant des objectifs surs comme des tourelles.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un throw ?",
      "Lancer un sort",
      "Perdre une partie qu'on gagnait a cause d'une mauvaise decision",
      "Gagner un fight",
      "Prendre un objectif",
      'b',
      "Un throw est une defaite causee par une erreur alors qu'on etait en position de gagner."
    ),
    createQuestion(
      "Quel est le throw le plus courant en late game ?",
      "Perdre un fight mid",
      "Forcer Baron sans avantage clair",
      "Rater un last hit",
      "Mauvais recall",
      'b',
      "Forcer Baron en 5v5 sans avantage est l'une des erreurs les plus couteuses du jeu."
    ),
    createQuestion(
      "Que faire quand vous etes en avance ?",
      "Forcer Baron immediatement",
      "Etre patient et prendre des objectifs surs",
      "Engager tous les fights 5v5",
      "Ignorer les objectifs",
      'b',
      "Quand on gagne, on n'a pas besoin de prendre des risques. La patience est payante."
    ),
    createQuestion(
      "Pourquoi le jungler ennemi vivant rend Baron risque ?",
      "Il ne peut rien faire",
      "Il peut steal le Baron avec smite",
      "Il farm la jungle",
      "Il est trop faible",
      'b',
      "Un jungler ennemi avec smite peut voler le Baron, retournant potentiellement la partie."
    ),
    createQuestion(
      "Que signifie 'Close the game safely' ?",
      "Prendre des risques pour finir vite",
      "Etouffer l'ennemi et prendre des objectifs garantis",
      "Attendre indefiniment",
      "Forcer tous les fights",
      'b',
      "Closer safely signifie finir la partie sans prendre de risques inutiles quand on est en avance."
    ),
    createQuestion(
      "Quelle equipe devrait prendre des risques en late game ?",
      "L'equipe en avance",
      "L'equipe en retard",
      "Les deux equipes",
      "Aucune equipe",
      'b',
      "L'equipe en retard doit prendre des risques pour revenir. L'equipe en avance doit jouer safe."
    ),
    createQuestion(
      "Que verifier avant de commencer Baron ?",
      "Rien de special",
      "Ou sont les 5 ennemis et si la vision est controlee",
      "Uniquement le timer",
      "Le nombre de kills",
      'b',
      "Savoir ou sont tous les ennemis et avoir le controle de vision reduit les risques de throw."
    ),
    createQuestion(
      "Quand faut-il forcer la cloture de la partie ?",
      "Jamais",
      "Quand l'ennemi scale mieux ou apres un gros avantage",
      "Toujours le plus vite possible",
      "Uniquement si on a 30 kills d'avance",
      'b',
      "Si l'ennemi scale mieux ou si vous avez un gros avantage (Baron + kills), il faut closer."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'greedy Baron' ?",
      "Un Baron facile",
      "Tenter Baron quand c'est risque juste pour l'avoir",
      "Un Baron rapide",
      "Un Baron avec buff",
      'b',
      "Un greedy Baron est une tentative risquee motivee par l'envie d'avoir le buff plutot que par la logique."
    ),
    createQuestion(
      "Comment forcer les erreurs de l'ennemi sans en commettre soi-meme ?",
      "Engager tous les combats",
      "Creer de la pression via les waves et attendre les picks",
      "Ignorer les objectifs",
      "Rester dans la base",
      'b',
      "La pression via les waves force l'ennemi a reagir et potentiellement a faire des erreurs."
    ),
  ]
);
