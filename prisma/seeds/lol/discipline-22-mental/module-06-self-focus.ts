import { createModule, createQuestion } from '../utils';

export const module06SelfFocus = createModule(
  'Se concentrer sur soi',
  'self-focus',
  'Ne pas blamer les autres et se focaliser sur sa propre progression',
  6,
  // Theory Content (5+ slides)
  `## Le seul facteur que vous controlez

Dans chaque partie de League of Legends, vous ne controlez qu'une seule chose : **votre propre performance**. Vous ne pouvez pas :
- Controler vos coequipiers
- Choisir contre qui vous jouez
- Empecher les erreurs des autres
- Forcer quelqu'un a bien jouer

La seule constante dans toutes vos parties, c'est **vous**. Si vous voulez monter en rang, concentrez-vous sur ce que VOUS pouvez ameliorer.

## Pourquoi blamer les autres est inutile

Blamer ses coequipiers :
- **Ne change pas le passe** - l'erreur est deja faite
- **Ne les fait pas mieux jouer** - au contraire
- **Vous distrait** de votre propre jeu
- **Cache vos propres erreurs** - vous ne progressez pas
- **Cree un biais** - vous ne voyez que les fautes des autres

Meme si votre coequipier a fait une erreur grave, le signaler ne sert a rien.

## Vous faites aussi des erreurs

Une verite difficile a accepter : **vous faites autant d'erreurs que vos coequipiers**. La difference est que vous ne les voyez pas toujours.

Quand vous blamez votre jungler pour un gank rate, avez-vous :
- Mis de la vision pour lui ?
- Prepare la vague de minions ?
- Poke l'ennemi pour le mettre a portee de kill ?
- Communique le timing de vos cooldowns ?

Chercher vos propres erreurs est plus utile que pointer celles des autres.

## La mentalite "Je suis le probleme"

Cette mentalite peut sembler negative, mais elle est **liberatrice** :
- Si je suis le probleme, je suis aussi **la solution**
- Je peux **changer mes actions**, pas celles des autres
- Chaque partie est une **opportunite d'amelioration**
- Je ne depends pas de la "chance" d'avoir de bons coequipiers

Les joueurs qui adoptent cette mentalite **montent plus vite** car ils progressent reellement.

## Comment se concentrer sur soi

Pendant et apres chaque partie, posez-vous ces questions :
- "Qu'aurais-je pu faire differemment ?"
- "Comment aurais-je pu aider mon coequipier en difficulte ?"
- "Ai-je fait des erreurs que j'aurais pu eviter ?"
- "Ai-je pris les bonnes decisions avec les informations disponibles ?"

Ne vous demandez JAMAIS "Pourquoi mon equipe est-elle si mauvaise ?"

## L'effet de la vision tunnel sur les autres

Quand vous focalisez sur les erreurs de vos coequipiers, vous developpez une **vision tunnel**. Vous remarquez chaque fois que le support rate un hook, mais pas les 10 fois ou il l'a reussi.

Cette vision selective vous empeche de voir :
- Vos propres erreurs
- Les bons plays de vos coequipiers
- Les opportunites sur la carte
- Les patterns a exploiter chez l'ennemi

## Recapitulatif

- Vous ne **controlez que vous-meme** - pas vos coequipiers
- **Blamer les autres** est contre-productif et vous empeche de progresser
- Vous faites **autant d'erreurs** que vos coequipiers
- La mentalite **"je suis le probleme"** vous donne le pouvoir de progresser
- **Cherchez vos propres erreurs** plutot que celles des autres`,

  // Practice Instructions
  `## Objectif

Developper l'habitude de se concentrer sur sa propre performance plutot que sur les erreurs des coequipiers.

## Étapes

1. Pendant votre prochaine partie, interdisez-vous de penser aux erreurs de vos coequipiers
2. A chaque fois que vous mourez ou que quelque chose tourne mal, posez-vous : "Qu'aurais-JE pu faire differemment ?"
3. Notez mentalement 3 de vos propres erreurs pendant la partie
4. Apres la partie, regardez le replay en vous concentrant UNIQUEMENT sur votre champion
5. Pour chaque situation problematique, ecrivez une alternative que VOUS auriez pu prendre
6. Ne regardez pas les statistiques de vos coequipiers - uniquement les votres
7. Identifiez UN aspect de votre jeu a travailler pour les prochaines parties

## Critère de reussite

Vous avez identifie au moins 3 erreurs personnelles et un axe d'amelioration concret, sans avoir blame vos coequipiers une seule fois.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la seule constante dans toutes vos parties de LoL ?",
      "Le matchmaking",
      "Vos coequipiers",
      "Vous-meme",
      "Les champions adverses",
      'c',
      "Vous etes le seul facteur constant dans toutes vos parties - le seul sur lequel vous pouvez agir."
    ),
    createQuestion(
      "Pourquoi blamer les autres est-il inutile pour progresser ?",
      "Ca motive les coequipiers a s'ameliorer",
      "Ca cache vos propres erreurs et vous empeche de progresser",
      "C'est une bonne strategie de communication",
      "Ca n'a aucun impact negatif",
      'b',
      "Blamer les autres detourne votre attention de vos propres erreurs, bloquant votre progression."
    ),
    createQuestion(
      "Quelle verite est difficile a accepter pour progresser ?",
      "Le jeu est trop difficile",
      "Vous faites autant d'erreurs que vos coequipiers",
      "Les coequipiers sont toujours le probleme",
      "Le matchmaking est truque",
      'b',
      "Accepter qu'on fait autant d'erreurs que les autres permet de se concentrer sur sa progression."
    ),
    createQuestion(
      "Que signifie la mentalite 'Je suis le probleme' ?",
      "Se devaloriser constamment",
      "Comprendre qu'on peut agir sur sa propre performance",
      "Accepter qu'on ne peut pas progresser",
      "Arreter de jouer",
      'b',
      "Cette mentalite signifie que si vous etes le probleme, vous etes aussi la solution."
    ),
    createQuestion(
      "Quelle question est UTILE a se poser apres une partie ?",
      "Pourquoi mes coequipiers sont-ils si mauvais ?",
      "Qu'aurais-je pu faire differemment ?",
      "Qui dois-je report ?",
      "Pourquoi le matchmaking me deteste ?",
      'b',
      "Se demander ce qu'on aurait pu faire differemment permet d'identifier des axes d'amelioration."
    ),
    createQuestion(
      "Qu'est-ce que la 'vision tunnel' sur les erreurs des autres ?",
      "Une technique de vision avancee",
      "Un focus selectif qui fait ignorer vos propres erreurs",
      "Une strategie de ward",
      "Un bug du jeu",
      'b',
      "La vision tunnel sur les autres vous fait voir toutes leurs erreurs tout en ignorant les votres."
    ),
    createQuestion(
      "Quand votre jungler rate un gank, que devriez-vous vous demander ?",
      "Pourquoi il est si nul",
      "Comment j'aurais pu preparer la situation pour aider",
      "Quel autre jungler aurait mieux fait",
      "Comment lui expliquer son erreur",
      'b',
      "Demandez-vous si vous avez mis la vision, prepare la vague, poke l'ennemi, etc."
    ),
    createQuestion(
      "Pourquoi les joueurs avec la mentalite 'self-focus' montent plus vite ?",
      "Ils ont plus de chance avec les coequipiers",
      "Ils progressent reellement sur leurs propres erreurs",
      "Le matchmaking les favorise",
      "Ils jouent plus de parties",
      'b',
      "Se concentrer sur soi permet une progression reelle et constante."
    ),
    createQuestion(
      "Que regarder dans le replay pour progresser ?",
      "Toutes les erreurs de vos coequipiers",
      "Uniquement votre propre champion et vos decisions",
      "Les statistiques de l'equipe adverse",
      "Le chat de la partie",
      'b',
      "Analyser son propre jeu dans les replays est la cle de la progression."
    ),
    createQuestion(
      "Quelle est la consequence de blamer les autres sur votre progression ?",
      "Vous progressez plus vite",
      "Vous stagnez car vous ne voyez pas vos erreurs",
      "Vos coequipiers jouent mieux",
      "Pas d'impact particulier",
      'b',
      "Blamer les autres vous empeche de voir vos propres erreurs et donc de progresser."
    ),
  ]
);
