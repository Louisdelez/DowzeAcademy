import { createModule, createQuestion } from '../utils';

export const module09OneTrickVsVersatile = createModule(
  'One-trick vs polyvalent',
  'one-trick-vs-versatile',
  'Choisir entre se spécialiser sur un champion ou développer la polyvalence',
  9,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un One-Trick Pony (OTP) ?

Un **One-Trick Pony** (OTP) est un joueur qui se spécialise sur un seul champion, le jouant dans la grande majorité de ses parties. Exemples célèbres : BoxBox (Riven), Tyler1 (Draven), Yassuo (Yasuo).

**Caractéristiques d'un OTP** :
- Plus de 70-80% des parties sur un champion
- Connaissance encyclopédique de tous les matchups
- Maîtrise mécanique proche du maximum
- Capable de gagner même des matchups "impossibles" grâce à l'expérience

L'opposé est le joueur **polyvalent** qui peut jouer efficacement plusieurs champions selon les besoins de l'équipe ou du matchup.

## Avantages d'être One-Trick

**Maîtrise maximale** :
- Vous connaissez les limites exactes de votre champion
- Les mécaniques sont parfaitement automatisées
- Vous pouvez vous concentrer sur le macro et les décisions

**Climb plus rapide** :
- Moins de variables, plus de consistance
- Vous ne perdez jamais à cause de la méconnaissance du champion
- Les stats montrent que les OTP ont généralement un meilleur winrate

**Identité de joueur** :
- Vous devenez "le joueur de X champion"
- Communauté et ressources spécialisées disponibles

## Inconvénients d'être One-Trick

**Dépendance aux bans** :
- Si votre champion est ban, vous êtes fortement affaibli
- Certains champions sont fréquemment ban (Yasuo, Zed, etc.)

**Vulnérabilité aux nerfs** :
- Un nerf majeur peut ruiner des mois de travail
- Riot peut modifier fondamentalement le gameplay

**Matchups impossibles** :
- Certains matchups restent très difficiles même avec l'expérience
- L'adversaire sait exactement ce que vous allez jouer

**Plafond potentiel** :
- À très haut niveau, les adversaires savent counter votre pick
- Moins de flexibilité en compétition organisée

## Avantages de la polyvalence

**Adaptabilité** :
- Vous pouvez vous adapter à n'importe quelle composition d'équipe
- Vous avez toujours une réponse aux picks adverses
- Vous n'êtes jamais "ban out"

**Compréhension plus large** :
- Jouer différents champions aide à comprendre leurs faiblesses
- Meilleure connaissance du jeu global

**Potentiel compétitif** :
- Indispensable pour le jeu en équipe organisée
- Les coachs apprécient les joueurs flexibles

## Comment choisir votre approche

**OTP recommandé si** :
- Vous adorez un champion en particulier
- Vous visez un climb rapide en solo queue
- Votre champion n'est pas fréquemment ban
- Vous n'aspirez pas à la compétition organisée

**Polyvalence recommandée si** :
- Vous aimez la variété
- Vous visez la compétition en équipe
- Vous êtes déjà à haut niveau et comprenez le macro
- Votre pool actuel est trop facilement contré

**L'approche hybride** (recommandée pour la plupart) :
- 1 champion principal que vous maîtrisez parfaitement
- 2-3 champions secondaires que vous connaissez bien
- Cette approche combine les avantages des deux philosophies

## Évoluer avec le temps

Votre approche peut (et devrait) évoluer :

**En début de climb** :
- Favorisez l'OTP ou semi-OTP pour développer rapidement la maîtrise
- Concentrez-vous sur 1-2 champions maximum

**En milieu de ladder** :
- Élargissez légèrement pour couvrir les faiblesses
- Ajoutez un backup solide

**À haut niveau** :
- La méta-connaissance devient plus importante
- Plus de flexibilité peut être nécessaire
- Mais certains Challengers restent OTP

Il n'y a pas de bonne ou mauvaise approche. Choisissez celle qui correspond à vos objectifs et à votre personnalité.`,

  // Practice Instructions
  `## Objectif

Analyser votre profil de joueur actuel et déterminer si une approche OTP, polyvalente ou hybride vous convient le mieux.

## Étapes

1. Consultez vos statistiques sur op.gg pour les 2 derniers mois
2. Calculez le pourcentage de parties jouées sur votre champion le plus joué
3. Comptez combien de champions différents vous avez joués en ranked
4. Évaluez votre winrate sur votre champion le plus joué vs les autres
5. Réfléchissez à ce qui vous motive : climb rapide, variété, compétition ?
6. Déterminez si votre champion principal est souvent ban
7. Décidez de votre approche (OTP, hybride, polyvalent) et justifiez

## Critère de réussite

Vous avez analysé vos données et choisi une approche (OTP/hybride/polyvalent) avec une justification basée sur vos statistiques et vos objectifs personnels.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un One-Trick Pony (OTP) ?",
      "Un joueur débutant",
      "Un joueur spécialisé sur un seul champion",
      "Un joueur qui change de champion chaque partie",
      "Un joueur de haut niveau",
      'b',
      "Un OTP est un joueur qui se spécialise sur un seul champion dans la grande majorité de ses parties."
    ),
    createQuestion(
      "Quel pourcentage de parties sur un champion caractérise généralement un OTP ?",
      "30-40%",
      "50-60%",
      "70-80% ou plus",
      "100%",
      'c',
      "Un OTP joue généralement 70-80% ou plus de ses parties sur son champion principal."
    ),
    createQuestion(
      "Quel est un avantage majeur d'être OTP ?",
      "Ne jamais être ban",
      "Maîtrise maximale et climb plus rapide",
      "Pouvoir jouer tous les rôles",
      "Être immunisé aux nerfs",
      'b',
      "La maîtrise maximale d'un champion permet un climb plus rapide et plus consistant."
    ),
    createQuestion(
      "Quel est le principal inconvénient d'être OTP ?",
      "C'est trop facile",
      "Dépendance aux bans et vulnérabilité aux nerfs",
      "On ne peut pas jouer en ranked",
      "Les autres joueurs sont jaloux",
      'b',
      "Si votre champion unique est ban ou fortement nerf, vous êtes très affaibli."
    ),
    createQuestion(
      "Pourquoi la polyvalence est-elle importante pour la compétition organisée ?",
      "Elle n'est pas importante",
      "Les équipes ont besoin de joueurs qui peuvent s'adapter aux stratégies",
      "Pour impressionner les fans",
      "Pour gagner plus d'argent",
      'b',
      "En compétition, la flexibilité permet de s'adapter aux différentes stratégies et compositions."
    ),
    createQuestion(
      "Quelle approche est recommandée pour la plupart des joueurs ?",
      "OTP strict",
      "Jouer tous les champions",
      "Approche hybride : 1 main + 2-3 secondaires",
      "Changer de champion chaque partie",
      'c',
      "L'approche hybride combine les avantages de la maîtrise profonde et de la flexibilité."
    ),
    createQuestion(
      "À quel moment du climb est-il recommandé de favoriser l'OTP ?",
      "Uniquement en Challenger",
      "En début de climb pour développer rapidement la maîtrise",
      "Jamais",
      "Uniquement après avoir tout essayé",
      'b',
      "En début de climb, se concentrer sur peu de champions permet de développer rapidement la maîtrise."
    ),
    createQuestion(
      "Quel est un avantage de jouer plusieurs champions ?",
      "Moins de temps de queue",
      "Comprendre les faiblesses des différents champions en les jouant",
      "Avoir plus de skins",
      "Être plus populaire",
      'b',
      "Jouer différents champions aide à comprendre leurs faiblesses quand vous les affrontez."
    ),
    createQuestion(
      "Que se passe-t-il si un OTP voit son champion fortement nerf ?",
      "Rien, les nerfs n'affectent pas les OTP",
      "Cela peut ruiner des mois de travail et forcer un changement",
      "Le champion est automatiquement buff pour compenser",
      "Riot offre une compensation",
      'b',
      "Un nerf majeur peut rendre des mois de spécialisation moins rentables."
    ),
    createQuestion(
      "Comment devrait évoluer votre approche au fil du temps ?",
      "Toujours rester la même",
      "S'adapter selon votre niveau et vos objectifs",
      "Toujours devenir plus OTP",
      "Toujours devenir plus polyvalent",
      'b',
      "Votre approche devrait évoluer selon votre niveau, vos objectifs et vos expériences."
    ),
  ]
);
