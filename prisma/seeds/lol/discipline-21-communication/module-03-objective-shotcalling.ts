import { createModule, createQuestion } from '../utils';

export const module03ObjectiveShotcalling = createModule(
  'Shotcalling des objectifs',
  'objective-shotcalling',
  'Annoncer et coordonner la prise du Dragon, du Baron et des tourelles',
  3,
  // Theory Content (5+ slides)
  `## L'importance du shotcalling

Le **shotcalling** est l'art d'appeler les objectifs et de guider l'équipe vers la victoire. Un bon shotcaller identifie les opportunités, communique clairement et coordonne les actions de l'équipe. C'est souvent ce qui distingue les équipes gagnantes des perdantes.

## Les objectifs majeurs à appeler

Les objectifs prioritaires à shotcall :
- **Dragon** : avantages permanents (infernal, ocean, mountain, cloud)
- **Baron Nashor** : buff puissant pour push les lanes
- **Rift Herald** : outil de siège pour détruire les tourelles
- **Tourelles** : contrôle de carte et or pour l'équipe
- **Inhibiteurs** : pression constante avec les super minions

## Comment appeler un objectif

Un bon appel d'objectif comprend :
1. **Le timing** : "drag in 30", "baron up"
2. **L'état de l'équipe** : "we're 5, they're 4"
3. **La décision** : "let's do baron", "group for drag"
4. **La confirmation** : "everyone here?", "jg smite ready?"
Soyez clair et direct dans vos appels.

## Quand appeler un objectif

Les meilleurs moments pour prendre un objectif :
- Après avoir **tué un ou plusieurs ennemis**
- Quand les ennemis sont **visibles de l'autre côté** de la carte
- Avec un **avantage numérique** (4v3, 5v4)
- Après avoir **repoussé les lanes** pour éviter de perdre des CS
- Quand votre **jungler a le smite** disponible

## Gérer les désaccords

Quand l'équipe n'est pas d'accord :
- **Restez calme** : pas de rage ni d'accusations
- **Expliquez brièvement** : "no vision, too risky"
- **Suivez la majorité** : mieux vaut faire une mauvaise décision ensemble
- **Apprenez** : analysez après la partie ce qui aurait été mieux
Un shotcall suivi par tous est meilleur qu'un shotcall parfait ignoré par la moitié de l'équipe.`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier les opportunités d'objectifs et à les communiquer efficacement à votre équipe.

## Étapes

1. Lancez une partie normale ou classée
2. Notez les timers des Dragons et du Baron sur un papier ou mentalement
3. 30 secondes avant chaque objectif, pingez et écrivez "drag 30" ou "baron 30"
4. Évaluez si les conditions sont réunies avant d'appeler (nombre, vision, cooldowns)
5. Faites un appel clair : "do drag" ou "skip, no vision"
6. Après chaque objectif pris ou raté, analysez si l'appel était bon

## Critère de réussite

Vous avez appelé au moins 3 objectifs pendant la partie avec un timing approprié et une communication claire.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le rôle principal d'un shotcaller ?",
      "Faire le plus de dégâts possible",
      "Appeler les objectifs et coordonner l'équipe",
      "Warder toute la carte",
      "Critiquer les erreurs des coéquipiers",
      'b',
      "Le shotcaller guide l'équipe vers les objectifs et coordonne les actions."
    ),
    createQuestion(
      "Quand est le meilleur moment pour faire le Baron ?",
      "Dès qu'il spawn",
      "Quand l'équipe ennemie est en nombre réduit ou loin",
      "En début de partie",
      "Quand on perd la partie",
      'b',
      "Le Baron se fait idéalement avec un avantage numérique ou quand les ennemis sont loin."
    ),
    createQuestion(
      "Comment prévenir l'équipe qu'un Dragon arrive bientôt ?",
      "Ne rien dire, ils verront",
      "Pinger et écrire 'drag in 30' environ 30 secondes avant",
      "L'appeler uniquement quand il spawn",
      "Écrire un long message expliquant l'importance du Dragon",
      'b',
      "Prévenir 30 secondes à l'avance permet à l'équipe de se préparer."
    ),
    createQuestion(
      "Pourquoi vérifier que le smite du jungler est disponible avant Baron ?",
      "Le smite donne plus de dégâts au jungler",
      "Pour sécuriser l'objectif contre un steal ennemi",
      "Le Baron ne peut être tué sans smite",
      "Pour augmenter l'or gagné",
      'b',
      "Le smite permet de sécuriser le dernier hit et éviter un steal."
    ),
    createQuestion(
      "Que faire si l'équipe n'est pas d'accord avec votre appel ?",
      "Ignorer l'équipe et y aller seul",
      "Insulter ceux qui ne suivent pas",
      "Suivre la majorité et rester calme",
      "Abandonner la partie",
      'c',
      "Il vaut mieux suivre une décision de groupe que de diviser l'équipe."
    ),
    createQuestion(
      "Quel objectif permet de détruire rapidement les tourelles ?",
      "Dragon Infernal",
      "Baron Nashor",
      "Rift Herald",
      "Dragon Cloud",
      'c',
      "Le Rift Herald charge les tourelles et les détruit efficacement."
    ),
    createQuestion(
      "Pourquoi repousser les lanes avant de faire Baron ?",
      "Pour avoir plus de minions alliés",
      "Pour éviter de perdre des CS et structures pendant l'objectif",
      "Le Baron est plus faible quand les lanes sont repoussées",
      "Pour augmenter les dégâts de l'équipe",
      'b',
      "Des lanes repoussées empêchent l'ennemi de prendre des structures pendant que vous faites Baron."
    ),
    createQuestion(
      "Quel dragon donne de la vitesse de mouvement ?",
      "Dragon Infernal",
      "Dragon Ocean",
      "Dragon Mountain",
      "Dragon Cloud",
      'd',
      "Le Dragon Cloud (nuage) donne de la vitesse de mouvement."
    ),
    createQuestion(
      "Combien d'ennemis morts faut-il idéalement pour faire Baron en sécurité ?",
      "Aucun, on peut toujours le faire",
      "Au moins 1-2 ennemis morts ou très loin",
      "Les 5 ennemis doivent être morts",
      "Exactement 3",
      'b',
      "Avoir 1-2 ennemis morts ou loin réduit considérablement le risque de contest."
    ),
    createQuestion(
      "Quel avantage donne la destruction d'un inhibiteur ?",
      "De l'or pour toute l'équipe",
      "Des super minions qui poussent constamment",
      "Un buff pour les champions alliés",
      "La victoire automatique",
      'b',
      "Un inhibiteur détruit génère des super minions qui mettent la pression sur cette lane."
    ),
  ]
);
