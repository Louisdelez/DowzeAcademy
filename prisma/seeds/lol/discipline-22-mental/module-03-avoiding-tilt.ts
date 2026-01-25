import { createModule, createQuestion } from '../utils';

export const module03AvoidingTilt = createModule(
  'Eviter le tilt',
  'avoiding-tilt',
  'Reconnaitre les signes du tilt et savoir quand faire une pause',
  3,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le tilt ?

Le **tilt** est un etat emotionnel negatif qui affecte votre capacite a jouer correctement. Le terme vient du poker, ou un joueur "tilte" peut perdre beaucoup d'argent en prenant des decisions irrationnelles.

Dans LoL, le tilt se manifeste par :
- De la frustration intense
- Des decisions impulsives
- Une baisse de concentration
- Un comportement toxique
- L'envie de "prouver quelque chose"

## Les causes du tilt

Plusieurs facteurs peuvent declencher le tilt :
- **Series de defaites** - perdre plusieurs parties d'affilee
- **Coequipiers toxiques** - insultes et critiques constantes
- **Erreurs personnelles** - faire une erreur stupide et s'en vouloir
- **Jeu percu comme injuste** - "ce champion est broken"
- **Facteurs externes** - fatigue, faim, problemes personnels

Reconnaitre ce qui vous fait tilter est la premiere etape pour le prevenir.

## Reconnaitre les signes du tilt

Apprenez a detecter les **signaux d'alerte** :
- Vous serrez les dents ou les poings
- Votre rythme cardiaque s'accelere
- Vous commencez a blamer les autres a voix haute
- Vous prenez des risques inconsideres "pour montrer"
- Vous tapez des messages agressifs dans le chat
- Vous n'ecoutez plus les pings de votre equipe

Si vous ressentez ces signes, **vous etes probablement en train de tilter**.

## Techniques pour eviter le tilt

1. **Respiration profonde** - 4 secondes inspiration, 4 secondes expiration
2. **Pause physique** - levez-vous, etirez-vous, buvez de l'eau
3. **Muter les joueurs toxiques** immediatement
4. **Limiter vos sessions** - fixez un nombre maximum de parties
5. **Regle des 2 defaites** - arretez apres 2 defaites consecutives

La prevention est toujours plus efficace que la guerison.

## Quand faire une pause

Il faut **imperativement faire une pause** quand :
- Vous avez perdu 2-3 parties d'affilee et vous sentez frustre
- Vous avez insulte ou eu envie d'insulter quelqu'un
- Vous ne prenez plus de plaisir a jouer
- Vous jouez "pour vous rattraper" plutot que pour vous amuser
- Vous remarquez que vous faites des erreurs basiques

Une pause peut durer 15 minutes, quelques heures, ou meme une journee entiere.

## Le tilt affecte vos performances

Quand vous tiltez, votre **cerveau passe en mode survie**. La partie rationnelle de votre cerveau est court-circuitee par les emotions. Cela explique pourquoi :
- Vous prenez des decisions impulsives
- Vous oubliez les bases que vous maitrisez normalement
- Vous ne voyez plus clairement les opportunites
- Vous focalisez sur les erreurs des autres

Jouer en tilt, c'est **jouer avec un handicap** que vous vous infligez vous-meme.

## Recapitulatif

- Le **tilt** est un etat emotionnel qui degrade vos performances
- Apprenez a reconnaitre **vos signes personnels** de tilt
- Utilisez des **techniques de prevention** : respiration, pauses, mute
- Appliquez la **regle des 2 defaites** consecutives
- **Faire une pause** n'est pas un aveu de faiblesse, c'est une strategie intelligente`,

  // Practice Instructions
  `## Objectif

Developper votre capacite a reconnaitre le tilt et a prendre une pause avant qu'il n'affecte vos performances.

## Étapes

1. Avant votre prochaine session de jeu, notez comment vous vous sentez (calme, neutre, deja un peu frustre)
2. Pendant vos parties, surveillez les signes de tilt decrits dans la theorie
3. Apres chaque partie, evaluez votre niveau de frustration sur une echelle de 1 a 10
4. Si vous atteignez 6 ou plus, faites une pause de 10 minutes minimum
5. Pendant la pause, pratiquez 5 respirations profondes (4 sec in, 4 sec out)
6. Appliquez la regle des 2 defaites : arretez apres 2 defaites consecutives
7. En fin de session, notez combien de fois vous avez pris une pause preventive

## Critère de reussite

Vous avez identifie au moins un signe de tilt personnel et pris une pause preventive avant que la frustration n'affecte votre jeu.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "D'ou vient le terme 'tilt' ?",
      "Du football",
      "Du poker",
      "Des echecs",
      "De League of Legends",
      'b',
      "Le terme vient du poker, ou un joueur tilte quand il prend des decisions irrationnelles sous l'emotion."
    ),
    createQuestion(
      "Quel est un signe physique du tilt ?",
      "Sourire et rire",
      "Etre detendu et concentre",
      "Serrer les dents ou les poings",
      "Parler calmement",
      'c',
      "Les tensions physiques comme serrer les dents ou les poings sont des signes de tilt."
    ),
    createQuestion(
      "Quelle est la 'regle des 2 defaites' ?",
      "Jouer 2 parties supplementaires pour se rattraper",
      "S'arreter apres 2 defaites consecutives",
      "Changer de champion apres 2 defaites",
      "Blamer 2 coequipiers maximum",
      'b',
      "Cette regle recommande de faire une pause apres 2 defaites consecutives pour eviter le tilt."
    ),
    createQuestion(
      "Pourquoi le tilt affecte-t-il vos performances ?",
      "Il ameliore votre concentration",
      "Il vous rend plus prudent",
      "Il court-circuite la partie rationnelle de votre cerveau",
      "Il n'a aucun effet sur les performances",
      'c',
      "Le tilt met votre cerveau en mode survie, court-circuitant la pensee rationnelle."
    ),
    createQuestion(
      "Quelle technique aide a calmer le tilt ?",
      "Taper plus vite sur le clavier",
      "Respiration profonde (4 sec in, 4 sec out)",
      "Insulter les joueurs toxiques en retour",
      "Jouer plus agressivement",
      'b',
      "La respiration profonde aide a calmer le systeme nerveux et a sortir du tilt."
    ),
    createQuestion(
      "Que faire face a un coequipier toxique ?",
      "L'insulter en retour",
      "Le muter immediatement",
      "Arreter de jouer pour le punir",
      "Lui prouver qu'il a tort en jouant mieux",
      'b',
      "Muter les joueurs toxiques est la meilleure strategie pour preserver votre mental."
    ),
    createQuestion(
      "Quand est-il IMPERATIF de faire une pause ?",
      "Apres chaque victoire",
      "Quand vous avez insulte ou eu envie d'insulter quelqu'un",
      "Uniquement le week-end",
      "Jamais, il faut perseverer",
      'b',
      "L'envie d'insulter est un signe clair de tilt necessitant une pause immediate."
    ),
    createQuestion(
      "Combien de temps peut durer une pause anti-tilt ?",
      "Exactement 5 minutes",
      "Maximum 10 minutes",
      "De 15 minutes a une journee entiere selon le besoin",
      "Au moins 24 heures",
      'c',
      "La duree de la pause depend de l'intensite du tilt - de quelques minutes a une journee."
    ),
    createQuestion(
      "Pourquoi jouer 'pour se rattraper' apres des defaites est-il dangereux ?",
      "C'est une bonne motivation",
      "Cela indique un etat mental propice au tilt",
      "Cela garantit la victoire",
      "Ce n'est pas dangereux",
      'b',
      "Jouer pour se rattraper indique une frustration qui peut mener a plus de defaites."
    ),
    createQuestion(
      "Faire une pause est-il un signe de faiblesse ?",
      "Oui, les vrais joueurs jouent sans s'arreter",
      "Non, c'est une strategie intelligente de gestion du mental",
      "Seulement pour les debutants",
      "Oui, ca montre qu'on ne gere pas la pression",
      'b',
      "Faire une pause est une strategie intelligente utilisee meme par les professionnels."
    ),
  ]
);
