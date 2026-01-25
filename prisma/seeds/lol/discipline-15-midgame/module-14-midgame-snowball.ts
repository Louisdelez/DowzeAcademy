import { createModule, createQuestion } from '../utils';

export const module14MidgameSnowball = createModule(
  'Snowball mid-game',
  'midgame-snowball',
  'Appuyer son avantage',
  14,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le snowball ?

Le **snowball** est le processus de transformer un petit avantage en un avantage insurmontable. En mid-game, c'est le moment idéal pour snowball car les objectifs sont disponibles et les erreurs ennemies sont punissables.

## Convertir un avantage en lead

Quand vous êtes en avance, vous devez :
- **Prendre des objectifs** : ne pas laisser l'ennemi "turtle"
- **Forcer des fights avantageux** : profitez de votre supériorité
- **Contrôler la vision** : envahissez leur jungle
- **Refuser le farm à l'ennemi** : créez de la pression constante
- **Accélérer le tempo** : ne leur laissez pas le temps de scale

L'erreur classique : avoir un avantage mais jouer passivement.

## Les clés du snowball en mid-game

Stratégies pour snowball efficacement :
1. **Prenez tous les Dragons** : progression vers l'âme
2. **Détruisez les T1/T2** : ouvrez la carte
3. **Envahissez la jungle** : volez camps et buffs
4. **Étouffez l'économie** : ils ne peuvent pas farmer si vous contrôlez tout
5. **Forcez le Baron early** : menacez-le pour forcer des erreurs

## Éviter de "throw" (perdre l'avantage)

Erreurs qui font perdre un snowball :
- **Overstaying** : rester trop longtemps après un objectif
- **Fights inutiles** : engager sans raison
- **Négliger la vision** : se faire surprendre
- **Diviser sans communication** : se faire picker un par un
- **Arrogance** : sous-estimer l'ennemi

Gardez votre avantage en jouant "propre" sans risques inutiles.

## Récapitulatif

Snowball en mid-game demande :
- Convertir activement votre avantage en objectifs
- Contrôler la vision et la carte ennemie
- Forcer des fights quand vous êtes avantagés
- Éviter les erreurs qui permettent un comeback
- Maintenir un tempo élevé sans laisser l'ennemi respirer`,

  // Practice Instructions
  `## Objectif

Transformer un avantage de mid-game en victoire en prenant des objectifs et en empêchant l'ennemi de revenir dans la partie.

## Étapes

1. Identifiez une partie où vous avez un avantage clair (2k+ or, plus de tourelles)
2. Après chaque fight gagné, prenez immédiatement un objectif
3. Placez de la vision agressive dans la jungle ennemie
4. Contestez chaque Dragon et Herald disponible
5. Push les lanes pour créer de la pression constante
6. Ne prenez PAS de fights risqués ou non nécessaires

## Critère de réussite

Avec un avantage de mid-game, vous avez pris au moins 3 objectifs (Dragons, tourelles) en 10 minutes sans donner de comeback à l'ennemi.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le 'snowball' ?",
      "Une technique de skill-shot",
      "Transformer un petit avantage en un lead insurmontable",
      "Un type d'objectif neutre",
      "Une stratégie défensive",
      'b',
      "Le snowball consiste à faire grossir son avantage comme une boule de neige."
    ),
    createQuestion(
      "Quelle erreur classique fait-on quand on a un avantage ?",
      "Prendre trop d'objectifs",
      "Jouer passivement au lieu de presser",
      "Trop communiquer",
      "Placer trop de vision",
      'b',
      "Jouer passivement avec un avantage laisse l'ennemi scale et revenir dans la partie."
    ),
    createQuestion(
      "Que devez-vous contrôler pour snowball efficacement ?",
      "Uniquement votre lane",
      "La vision et la jungle ennemie",
      "Seulement les Dragons",
      "Votre propre base",
      'b',
      "Contrôler la vision et envahir la jungle ennemie étouffe leur économie et leurs options."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'throw' ?",
      "Lancer un skill-shot",
      "Perdre son avantage par des erreurs",
      "Gagner un fight",
      "Prendre un objectif",
      'b',
      "Un 'throw' est quand une équipe en avance perd cet avantage par des erreurs évitables."
    ),
    createQuestion(
      "Quelle action aide à snowball en mid-game ?",
      "Farmer passivement sa lane",
      "Prendre tous les Dragons et forcer des objectifs",
      "Attendre le late-game",
      "Éviter tous les fights",
      'b',
      "Prendre activement les objectifs et forcer l'action maintient et amplifie votre avantage."
    ),
    createQuestion(
      "Qu'est-ce que 'overstaying' ?",
      "Rester trop longtemps après un objectif",
      "Partir trop tôt d'un fight",
      "Farmer trop de sbires",
      "Placer trop de wards",
      'a',
      "L'overstaying vous expose à des contre-attaques quand l'ennemi respawn ou rotatent."
    ),
    createQuestion(
      "Pourquoi menacer le Baron en snowball ?",
      "Le Baron n'est pas important",
      "Pour forcer des erreurs ou le prendre",
      "Pour éviter les fights",
      "Pour donner du temps à l'ennemi",
      'b',
      "Menacer le Baron force l'ennemi à réagir, créant des opportunités de fight ou de prise d'objectif."
    ),
    createQuestion(
      "Comment 'étouffer l'économie' ennemie ?",
      "En ignorant leur jungle",
      "En volant leurs camps et en les empêchant de farmer",
      "En restant dans votre base",
      "En évitant les interactions",
      'b',
      "Envahir la jungle et créer de la pression sur les lanes empêche l'ennemi de récupérer de l'or."
    ),
    createQuestion(
      "Quelle erreur mène souvent à un throw ?",
      "Prendre des objectifs",
      "Engager un fight inutile et le perdre",
      "Placer de la vision",
      "Communiquer avec l'équipe",
      'b',
      "Les fights inutiles ou mal préparés peuvent retourner une partie en donnant du shutdown gold."
    ),
    createQuestion(
      "Que signifie 'maintenir un tempo élevé' ?",
      "Jouer très lentement",
      "Ne pas laisser l'ennemi respirer en forçant constamment l'action",
      "Attendre les power spikes",
      "Farm pendant 10 minutes",
      'b',
      "Un tempo élevé maintient la pression et ne laisse pas l'ennemi reprendre le contrôle."
    ),
  ]
);
