import { createModule, createQuestion } from '../utils';

export const module03MidPriority = createModule(
  "Priorité mid lane",
  'mid-priority',
  'Pousser la vague pour prendre l\'initiative',
  3,
  // Theory Content (5+ slides)
  `## Qu'est-ce que la priorité mid ?

La **priorité** (ou "prio") en mid lane signifie avoir le **contrôle de la vague de sbires** et pouvoir quitter sa lane avant l'adversaire. Un mid laner avec la priorité peut :

- **Roamer** en premier vers les escarmouches
- **Aider son jungler** dans les invades ou contests
- **Arriver premier** aux objectifs

C'est un concept fondamental qui différencie un bon mid d'un excellent mid.

## Comment obtenir la priorité ?

Pour avoir la priorité, vous devez **pousser votre vague** plus vite que l'adversaire :

1. **Utilisez vos sorts** pour clear rapidement les sbires
2. **Auto-attaquez** les sbires entre vos sorts
3. **Positionnez-vous** de manière agressive une fois la vague poussée
4. **Maintenez la pression** sur votre adversaire

**Attention** : Pousser consomme de la mana et vous expose aux ganks !

## Quand utiliser la priorité ?

La priorité doit être utilisée **stratégiquement** :

- **Avant un objectif** (Dragon, Rift Herald) : push et rejoins ton équipe
- **Quand ton jungler invade** : sois prêt à l'aider
- **Pour un roam bot/top** : push rapidement et décale
- **En anticipation d'un fight** : sois le premier sur place

Ne poussez pas inutilement si vous ne comptez pas utiliser votre avantage.

## Les dangers de la priorité

Pousser pour avoir la priorité comporte des **risques** :

- **Ganks** : vous êtes exposé quand la vague est sous la tour ennemie
- **Consommation de mana** : vous pourriez manquer de ressources
- **Contre-attaque** : certains champions punissent les agressions

**Solution** : Wardez la rivière et gardez un oeil sur la minimap avant de push.

## Récapitulatif

- La **priorité** = contrôle de la vague permettant de bouger en premier
- On l'obtient en **poussant la vague** rapidement
- Utilisez-la pour **roamer, aider le jungler, ou contester les objectifs**
- **Risques** : ganks, mana, contre-attaque
- Toujours **warder** avant de push agressivement
- La priorité inutilisée est une priorité gaspillée`,

  // Practice Instructions
  `## Objectif

Apprendre à créer et utiliser la priorité mid lane en poussant efficacement.

## Étapes

1. Lancez une partie personnalisée avec des bots (difficulté intermédiaire)
2. Choisissez un champion avec bon waveclear (Lux, Ahri, ou Annie)
3. En early game, observez le comportement de la vague :
   - Comment les sbires s'affrontent
   - Qui pousse naturellement
4. Utilisez vos sorts pour pousser la vague sous la tour ennemie
5. Une fois la vague poussée, observez :
   - Le bot ennemi doit farmer sous tour
   - Vous êtes libre de bouger
6. Pratiquez 3 fois ce cycle : push -> avoir la prio -> retour à la lane
7. Wardez la rivière avant chaque push agressif

## Critère de réussite

Vous pouvez pousser votre vague sous la tour ennemie en moins de 15 secondes et expliquer pourquoi cela vous donne un avantage.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que la 'priorité' en mid lane ?",
      "Avoir le plus de kills",
      "Contrôler la vague et pouvoir bouger avant l'adversaire",
      "Être le premier à mourir",
      "Avoir le meilleur champion",
      'b',
      "La priorité signifie avoir le contrôle de la vague et la liberté de quitter sa lane en premier."
    ),
    createQuestion(
      "Comment obtient-on la priorité mid ?",
      "En restant sous sa tourelle",
      "En poussant sa vague plus vite que l'adversaire",
      "En tuant l'adversaire uniquement",
      "En ne farmant pas",
      'b',
      "On obtient la priorité en poussant la vague rapidement, forçant l'adversaire à farmer."
    ),
    createQuestion(
      "Pourquoi la priorité mid est-elle importante avant un objectif comme le Dragon ?",
      "Elle n'est pas importante",
      "Elle permet d'arriver premier au fight et d'aider son équipe",
      "Elle fait spawn plus de dragons",
      "Elle donne plus d'or",
      'b',
      "Avec la priorité, vous pouvez rejoindre votre équipe au Dragon avant votre adversaire."
    ),
    createQuestion(
      "Quel est le principal risque quand on pousse pour avoir la priorité ?",
      "Perdre de l'or",
      "S'exposer aux ganks du jungler ennemi",
      "Le champion adverse devient plus fort",
      "La tourelle se régénère",
      'b',
      "Pousser vous place loin de votre tourelle, vous rendant vulnérable aux ganks."
    ),
    createQuestion(
      "Que devez-vous faire AVANT de pousser agressivement pour la priorité ?",
      "Acheter des items",
      "Warder la rivière pour éviter les ganks",
      "Attendre niveau 18",
      "Demander une pause",
      'b',
      "Warder la rivière vous protège des ganks quand vous êtes en position avancée."
    ),
    createQuestion(
      "Si vous avez la priorité mais ne l'utilisez pas, que se passe-t-il ?",
      "Vous gagnez automatiquement",
      "C'est une priorité gaspillée - l'avantage est perdu",
      "La priorité s'accumule",
      "Rien de spécial",
      'b',
      "Une priorité non utilisée est perdue - il faut roamer ou aider son jungler quand on l'a."
    ),
    createQuestion(
      "Quand votre jungler fait une invade, pourquoi la priorité mid est-elle cruciale ?",
      "Elle ne l'est pas",
      "Vous pouvez arriver en premier pour l'aider si un fight éclate",
      "Le jungler ennemi disparaît",
      "Les camps respawn plus vite",
      'b',
      "Avec la priorité, vous pouvez aider votre jungler avant que le mid adverse n'arrive."
    ),
    createQuestion(
      "Quel inconvénient survient quand on utilise ses sorts pour pousser ?",
      "Les sorts deviennent plus forts",
      "On consomme de la mana et on pourrait en manquer",
      "Le cooldown disparaît",
      "Les sbires deviennent plus forts",
      'b',
      "Utiliser des sorts pour push consomme de la mana qui pourrait manquer pour un fight."
    ),
    createQuestion(
      "Que signifie 'avoir la prio' dans le jargon LoL ?",
      "Être prioritaire pour le prochain patch",
      "Avoir la priorité - contrôler la vague et pouvoir roam",
      "Avoir le premier pick en champion select",
      "Être le joueur le plus ancien",
      'b',
      "'Prio' est l'abréviation de priorité, signifiant le contrôle de la lane."
    ),
    createQuestion(
      "Face à un champion avec meilleur waveclear, comment gérer la priorité ?",
      "Abandonner la lane",
      "Accepter de ne pas toujours avoir la prio et pinguer les rotations ennemies",
      "Ignorer complètement la vague",
      "Attaquer la tour directement",
      'b',
      "Si vous ne pouvez pas avoir la prio, prévenez votre équipe quand l'adversaire roam."
    ),
  ]
);
