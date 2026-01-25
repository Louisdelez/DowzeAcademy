import { createModule, createQuestion } from '../utils';

export const module06CooldownTracking = createModule(
  'Gestion des cooldowns',
  'cooldown-tracking',
  "Apprendre à suivre et exploiter les cooldowns importants des ultimates ennemis",
  6,
  // Theory Content (5+ slides)
  `## L'importance du tracking de cooldowns

Savoir quelles capacités ennemies sont **disponibles ou en cooldown** change complètement vos décisions. Engager sur un ADC **sans Flash** est très différent d'engager sur un ADC avec Flash et Heal.

## Les ultimates à tracker en priorité

Certains ultis changent complètement les fights :
- **Engage** : Malphite R, Amumu R, Ornn R
- **Survie** : Tryndamere R, Zilean R, Kindred R
- **Peel** : Janna R, Gragas R
- **Zone** : Miss Fortune R, Rumble R, Kennen R
- **Burst** : Zed R, Syndra R, Veigar R

## Comment tracker les cooldowns

Méthodes de tracking :
1. **Observer les combats** : Notez quand l'ennemi utilise son ulti
2. **Timer mental** : La plupart des ultis sont 60-120 secondes
3. **Chat timestamp** : Tapez "mf r 1:30" pour vous rappeler
4. **Communiquer** : Informez votre équipe "Malph no R"

## Les cooldowns qui permettent d'engager

Quand l'ennemi n'a pas :
- **Flash** : Beaucoup plus facile à atteindre
- **Ulti défensif** : Zilean R, Kindred R = engage plus sûr
- **Zhonya** : Les mages sont vulnérables
- **Ulti de peel** : Les carries ne sont plus protégés

## Exploiter les fenêtres de cooldown

Une **fenêtre de cooldown** est le moment où l'ennemi n'a pas ses capacités clés :
- Forcez un fight immédiatement après qu'ils aient utilisé leurs ultis
- Prenez un objectif quand leurs engage sont down
- Dive un carry sans son Flash/ulti défensif

## Les cooldowns à gérer pour votre équipe

Pensez aussi à vos propres cooldowns :
- Ne pas engage quand vos ultis clés sont down
- Attendre le retour de Flash pour le carry
- Garder un ulti de peel pour protéger
- Communiquer vos propres cooldowns`,

  // Practice Instructions
  `## Objectif

Développer l'habitude de tracker les cooldowns importants des ultimates ennemis.

## Étapes

1. En début de partie, identifiez 3 ultimates ennemis cruciaux à tracker
2. Quand vous voyez un ennemi utiliser son ulti, notez-le (mentalement ou dans le chat)
3. Après chaque teamfight, faites un bilan : "Malph R down, MF R down"
4. Proposez des engagements quand les ultis ennemis sont en cooldown
5. Évitez les fights quand les ultis adverses sont up et les vôtres down
6. Utilisez Tab régulièrement pour vérifier les sorts d'invocateur

## Critère de réussite

Vous avez correctement identifié au moins 5 fenêtres de cooldown dans une partie et avez communiqué au moins 3 d'entre elles à votre équipe.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi est-il important de tracker les cooldowns ennemis ?",
      "Pour savoir combien d'or ils ont",
      "Pour identifier les fenêtres où l'ennemi est vulnérable",
      "Pour connaître leur build",
      "Ce n'est pas vraiment important",
      'b',
      "Tracker les cooldowns permet de savoir quand engager ou prendre des objectifs en exploitant les moments de faiblesse."
    ),
    createQuestion(
      "Quelle est la durée approximative de la plupart des ultimates ?",
      "10-20 secondes",
      "30-45 secondes",
      "60-120 secondes",
      "5 minutes",
      'c',
      "La plupart des ultimates ont des cooldowns entre 60 et 120 secondes au niveau 1, réduisant avec le niveau."
    ),
    createQuestion(
      "Comment noter le cooldown d'un ultime ennemi ?",
      "Mémoriser sans rien noter",
      "Écrire dans le chat avec un timestamp (ex: 'mf r 1:30')",
      "Demander à l'ennemi",
      "Regarder dans les paramètres",
      'b',
      "Noter dans le chat avec le temps permet de retrouver facilement l'information et de calculer quand l'ulti revient."
    ),
    createQuestion(
      "Quel type d'ultime rend un engage beaucoup plus sûr quand il est en cooldown ?",
      "Un ultime de dégâts",
      "Un ultime défensif/de survie comme Zilean R ou Kindred R",
      "Un ultime de mobilité",
      "Un ultime de vision",
      'b',
      "Sans ulti défensif, le carry ne peut pas être sauvé et devient une cible beaucoup plus facile."
    ),
    createQuestion(
      "Qu'est-ce qu'une 'fenêtre de cooldown' ?",
      "Un menu dans l'interface du jeu",
      "Le moment où l'ennemi n'a pas ses capacités clés disponibles",
      "Un type de ward",
      "Une zone sur la carte",
      'b',
      "Une fenêtre de cooldown est une opportunité d'agir pendant que l'ennemi n'a pas ses capacités importantes."
    ),
    createQuestion(
      "Quel sort d'invocateur est crucial à tracker sur les carries ?",
      "Smite",
      "Flash",
      "Teleport",
      "Clarity",
      'b',
      "Un carry sans Flash est beaucoup plus vulnérable aux engages et aux assassins."
    ),
    createQuestion(
      "Quand devriez-vous forcer un objectif en fonction des cooldowns ?",
      "Quand vous avez vos ultis mais pas eux",
      "Quand personne n'a d'ulti",
      "Quand l'ennemi a tous ses ultis",
      "Les cooldowns n'affectent pas les objectifs",
      'a',
      "Avoir vos ultis quand l'ennemi n'a pas les siens vous donne un avantage énorme pour contest les objectifs."
    ),
    createQuestion(
      "Comment communiquer un cooldown à votre équipe efficacement ?",
      "Écrire un paragraphe détaillé",
      "Dire simplement 'Malph no R' ou utiliser des pings",
      "Ne pas communiquer du tout",
      "Attendre la fin de la partie",
      'b',
      "Des messages courts et clairs ('Malph no R', 'ADC no flash') sont efficaces et rapides à communiquer."
    ),
    createQuestion(
      "Pourquoi Zhonya est-il un cooldown important à tracker sur les mages ?",
      "Il augmente leurs dégâts",
      "La stase les protège du burst, sans elle ils sont vulnérables",
      "Il leur donne de la vitesse",
      "Il n'est pas important",
      'b',
      "Sans Zhonya, les mages ne peuvent pas éviter le burst et deviennent des cibles faciles pour les assassins."
    ),
    createQuestion(
      "Que devez-vous faire quand vos propres ultis clés sont en cooldown ?",
      "Engager quand même agressivement",
      "Éviter les fights majeurs et jouer plus passivement",
      "Quitter la partie",
      "Ignorer cette information",
      'b',
      "Sans vos ultis clés, vous êtes plus faibles ; il vaut mieux attendre leur retour avant de forcer un combat majeur."
    ),
  ]
);
