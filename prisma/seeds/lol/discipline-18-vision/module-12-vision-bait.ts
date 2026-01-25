import { createModule, createQuestion } from '../utils';

export const module12VisionBait = createModule(
  'Bait de vision',
  'vision-bait',
  'Exploiter les zones non wardées de l\'ennemi pour tendre des pièges et créer des embuscades',
  12,
  // Theory Content (5+ slides)
  `## Le concept du Bait de vision

Le **Bait de vision** consiste à exploiter le **manque de vision de l'ennemi** pour créer des situations avantageuses. Si l'ennemi n'a pas de ward dans une zone, vous pouvez :
- **Tendre un piège** en vous cachant dans un bush non wardé
- **Feindre l'ignorance** quand vous savez qu'un ennemi approche
- **Attirer l'adversaire** dans une embuscade préparée

C'est l'art de transformer le brouillard de guerre en arme.

## Identifier les zones non wardées

Pour réussir un bait de vision, vous devez identifier où l'ennemi n'a **pas de vision** :
- **Observez** les placements de wards ennemies (les Control Wards sont visibles)
- **Utilisez** votre Sweeper pour détecter les Stealth Wards
- **Mémorisez** les endroits où vous avez détruit des wards récemment
- **Analysez** le comportement ennemi : s'ils facecheckent, ils n'ont pas de vision

Une équipe qui ne pose pas de wards offre de nombreuses opportunités de bait.

## L'embuscade à 5 dans un bush

L'une des formes les plus puissantes de bait de vision :
1. **Identifiez** un bush que l'ennemi n'a pas wardé (souvent en jungle ennemie)
2. **Regroupez** toute votre équipe (ou plusieurs joueurs) dans ce bush
3. **Attendez** qu'un ennemi passe à proximité
4. **Surgissez** ensemble pour un kill instantané ou un engage favorable

Cette technique est particulièrement efficace près des objectifs ou dans les rotations.

## Feindre l'ignorance

Parfois, vous **savez** qu'un ennemi est proche (grâce à une ward) mais l'ennemi ne sait pas que vous le savez :
- **Faites semblant** de farmer normalement
- **Attirez** l'ennemi à s'engager sur vous
- **Révélez** votre équipe cachée pour le contre-engage
- **Retournez** la situation en votre faveur

Cette technique demande de la coordination et du sang-froid.

## Précautions et timing

Le bait de vision comporte des risques :
- **Ne restez pas trop longtemps** : l'ennemi peut finir par warder
- **Communiquez** : toute l'équipe doit connaître le plan
- **Ayez un plan B** : si le bait échoue, sachez vous replier
- **Choisissez le bon moment** : quand l'ennemi va naturellement passer par cette zone
- **Évitez les zones évidentes** : les bushes trop prévisibles sont souvent wardés`,

  // Practice Instructions
  `## Objectif

Apprendre à exploiter les zones non wardées de l'ennemi pour créer des embuscades et des opportunités de picks.

## Étapes

1. Lancez une partie classique avec des amis ou en solo queue
2. Utilisez votre Sweeper pour identifier les zones où l'ennemi n'a pas de vision
3. Avec au moins 2 coéquipiers, cachez-vous dans un bush que l'ennemi n'a pas wardé
4. Attendez qu'un ennemi passe à proximité sans vous voir
5. Surgissez ensemble pour obtenir un kill ou forcer un fight avantageux
6. Variante : si vous avez une ward sur un ennemi qui approche, faites semblant de ne pas le voir et préparez une contre-embuscade
7. Communiquez avec votre équipe avant chaque tentative de bait

## Critère de réussite

Vous avez réussi au moins une embuscade en vous cachant dans une zone non wardée par l'ennemi, obtenant un kill ou un avantage significatif de fight.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un bait de vision ?",
      "Poser une ward pour attirer l'ennemi",
      "Exploiter le manque de vision de l'ennemi pour tendre des pièges",
      "Détruire toutes les wards ennemies",
      "Acheter des Control Wards en masse",
      'b',
      "Le bait de vision consiste à utiliser les zones non wardées par l'ennemi pour créer des embuscades."
    ),
    createQuestion(
      "Comment identifier une zone non wardée par l'ennemi ?",
      "C'est impossible à savoir",
      "En utilisant le Sweeper et en observant le comportement ennemi",
      "En posant une ward dans cette zone",
      "En demandant à l'ennemi dans le chat",
      'b',
      "Le Sweeper révèle les wards et le comportement ennemi (facecheck) indique l'absence de vision."
    ),
    createQuestion(
      "Que signifie 'feindre l'ignorance' dans le contexte du bait de vision ?",
      "Faire semblant de ne pas savoir jouer",
      "Prétendre ne pas voir un ennemi qu'on a détecté pour l'attirer dans un piège",
      "Ignorer les wards ennemies",
      "Ne pas utiliser son Sweeper",
      'b',
      "Feindre l'ignorance c'est faire semblant de ne pas voir un ennemi pour l'attirer dans une embuscade."
    ),
    createQuestion(
      "Combien de joueurs sont idéalement impliqués dans une embuscade de bush ?",
      "Un seul suffit",
      "Deux joueurs maximum",
      "Toute l'équipe ou plusieurs joueurs (3-5)",
      "Aucun, c'est une technique solo",
      'c',
      "Une embuscade à plusieurs joueurs (3-5) garantit un kill rapide et un engage favorable."
    ),
    createQuestion(
      "Quel est le risque principal d'attendre trop longtemps dans un bush pour un bait ?",
      "Vous perdez de l'expérience",
      "L'ennemi peut finir par warder la zone et vous repérer",
      "Vos wards expirent",
      "Votre Sweeper disparaît",
      'b',
      "Plus vous attendez, plus il y a de chances que l'ennemi ward et découvre votre embuscade."
    ),
    createQuestion(
      "Où sont les meilleurs endroits pour tendre une embuscade ?",
      "Dans votre propre base",
      "Près des objectifs ou sur les chemins de rotation en jungle",
      "Sous les tourelles ennemies",
      "Au milieu des lanes",
      'b',
      "Les zones près des objectifs et les chemins de rotation sont des passages obligés."
    ),
    createQuestion(
      "Que faire si l'ennemi facecheck régulièrement les bushes ?",
      "Éviter les baits de vision",
      "C'est une opportunité parfaite pour des embuscades",
      "Warder tous les bushes",
      "Recall immédiatement",
      'b',
      "Un ennemi qui facecheck n'a pas de vision, c'est l'opportunité idéale pour une embuscade."
    ),
    createQuestion(
      "Quelle est l'importance de la communication dans un bait de vision ?",
      "Pas importante du tout",
      "Cruciale : toute l'équipe doit connaître le plan",
      "Seulement pour le support",
      "Uniquement en ranked",
      'b',
      "La coordination est essentielle pour que tous surgissent au bon moment."
    ),
    createQuestion(
      "Que faire si le bait de vision échoue ?",
      "Rester dans le bush indéfiniment",
      "Avoir un plan B et savoir se replier",
      "Forcer le fight même si vous êtes repérés",
      "Surrender",
      'b',
      "Prévoyez toujours une sortie de secours si l'embuscade est découverte ou échoue."
    ),
    createQuestion(
      "Comment transformer une ward alliée en opportunité de bait ?",
      "La détruire",
      "Voir l'ennemi approcher et préparer une contre-embuscade en feignant l'ignorance",
      "Ping la ward pour alerter l'ennemi",
      "Fuir immédiatement",
      'b',
      "Si vous voyez un ennemi sur votre ward et qu'il ne le sait pas, vous pouvez préparer un piège."
    ),
  ]
);
