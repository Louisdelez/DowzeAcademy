import { createModule, createQuestion } from '../utils';

export const module11MidMapInfluence = createModule(
  "Influence sur la carte",
  'mid-map-influence',
  'Impacter le jeu au-delà de sa lane',
  11,
  // Theory Content (5+ slides)
  `## Le mid laner comme playmaker

Le mid laner a une **influence unique** sur la carte grâce à sa position centrale. Un bon mid ne se contente pas de gagner sa lane - il **fait gagner la partie** à son équipe.

Votre influence s'exerce à travers :
- Le **roaming** vers les autres lanes
- Le **contrôle de la vision**
- La **communication** des informations
- La **présence** sur les objectifs

## Pinger les déplacements ennemis

L'une de vos responsabilités les plus importantes est de **communiquer** les mouvements du mid adverse :

**Quand pinger** :
- Quand le mid ennemi disparaît de lane (MIA)
- Quand vous le voyez partir vers une direction
- Quand vous suspectez un roam imminent

**Types de pings** :
- **?** (MIA) : L'ennemi a disparu
- **!** (Danger) : Je le vois partir vers vous
- **Ping sur le chemin** : Direction précise du roam

**Timing** : Pingez IMMÉDIATEMENT, même si vous n'êtes pas sûr à 100%.

## Créer de la pression passive

Même sans roamer, vous pouvez exercer une **pression passive** :

**Comment créer de la pression** :
- **Gardez l'ennemi en lane** : S'il doit farmer, il ne peut pas roam
- **Poussez les vagues** : L'adversaire perd des CS s'il roam
- **Threatenez le roam** : Disparaissez dans le fog parfois
- **Contrôlez la vision** : L'ennemi ne sait pas où vous êtes

Cette pression force l'équipe adverse à jouer prudemment sur toute la carte.

## Synchroniser avec votre jungler

La **synergie mid-jungle** est l'une des plus importantes du jeu :

**Comment synchroniser** :
- Communiquez votre état (prio, mana, cooldowns)
- Suivez ses invades quand vous avez la prio
- Setup les ganks avec votre CC
- Aidez-le à contester les objectifs

**Exemple de synergie** :
- Jungler ping qu'il va invade
- Vous push votre vague
- Vous le rejoignez pour le 2v1
- Vous prenez un kill et un camp

## Récapitulatif

- Le mid laner a une **influence majeure** sur toute la carte
- **Pingez toujours** quand le mid adverse disparaît
- Créez de la **pression passive** même sans roamer
- **Synchronisez** vos actions avec votre jungler
- La **vision** et la **communication** sont vos meilleurs outils
- Un bon mid **fait gagner son équipe**, pas juste sa lane`,

  // Practice Instructions
  `## Objectif

Développer votre influence sur la carte en communiquant efficacement et en créant de la pression.

## Étapes

1. Lancez une partie normale
2. Objectif principal : communiquer TOUS les mouvements du mid adverse
3. À chaque fois que le mid ennemi disparaît :
   - Ping MIA immédiatement
   - Ping la direction si vous la connaissez
   - Ping danger sur la lane concernée
4. Observez la synchronisation avec votre jungler :
   - Quand va-t-il faire le scuttle ?
   - Planifie-t-il un invade ?
   - Peut-il ganker votre lane ?
5. Pratiquez la pression passive :
   - Poussez quand l'adversaire veut roam
   - Disparaissez dans le fog pour créer de l'incertitude
   - Prenez des plaques quand l'ennemi quitte la lane
6. Comptez combien de fois vos pings ont aidé votre équipe

## Critère de réussite

Vous pingez au moins 90% des disparitions du mid ennemi et votre équipe vous remercie ou évite au moins 2 ganks grâce à vos informations.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi le mid laner a-t-il autant d'influence sur la carte ?",
      "Il a plus de HP que les autres",
      "Sa position centrale lui permet d'accéder rapidement à toutes les zones",
      "Il a des sorts plus forts",
      "Il ne peut pas mourir",
      'b',
      "La position centrale de la mid lane permet au mid d'influencer toutes les parties de la carte."
    ),
    createQuestion(
      "Que devez-vous faire IMMÉDIATEMENT quand le mid ennemi disparaît ?",
      "Ignorer et continuer à farm",
      "Pinger MIA et la direction potentielle du roam",
      "Le suivre sans regarder",
      "Recall au shop",
      'b',
      "Pinger immédiatement permet à vos coéquipiers de se préparer à un gank potentiel."
    ),
    createQuestion(
      "Qu'est-ce que la 'pression passive' ?",
      "Ne rien faire sur la carte",
      "Influencer le jeu ennemi sans nécessairement roamer (push, vision, menace)",
      "Farmer uniquement la jungle",
      "Rester AFK",
      'b',
      "La pression passive force les ennemis à jouer prudemment même si vous ne roamez pas."
    ),
    createQuestion(
      "Pourquoi garder le mid ennemi en lane crée-t-il de la pression ?",
      "Ça ne crée pas de pression",
      "S'il farm, il ne peut pas roamer et aider son équipe",
      "Ça le rend plus fort",
      "Ça donne plus d'or",
      'b',
      "Un mid coincé sur sa lane ne peut pas créer d'avantages ailleurs sur la carte."
    ),
    createQuestion(
      "Quelle est l'importance de la synergie mid-jungle ?",
      "Elle n'est pas importante",
      "C'est l'une des synergies les plus impactantes pour contrôler la carte",
      "Elle est utile uniquement en late game",
      "Seul le jungler en bénéficie",
      'b',
      "La coordination mid-jungle permet des invades, des 2v2, et un meilleur contrôle du jeu."
    ),
    createQuestion(
      "Si votre jungler ping qu'il va invade, que devez-vous faire ?",
      "Ignorer",
      "Vérifier si vous avez la prio et le rejoindre si possible",
      "Recall",
      "Ping back sans raison",
      'b',
      "Évaluez votre état de lane et rejoignez si vous pouvez pour un avantage numérique."
    ),
    createQuestion(
      "Disparaître dans le brouillard de guerre (fog) peut être utile car :",
      "Cela ne sert à rien",
      "Cela crée de l'incertitude chez l'ennemi sur votre position",
      "Cela vous rend invisible",
      "Cela donne de l'or",
      'b',
      "L'incertitude force les ennemis à jouer prudemment, créant de la pression sans action."
    ),
    createQuestion(
      "Quel type de ping utilisez-vous pour indiquer 'l'ennemi a disparu' ?",
      "On my way",
      "Missing (? jaune)",
      "Assist me",
      "Enemy has vision",
      'b',
      "Le ping Missing (?) indique que vous avez perdu la trace de l'adversaire."
    ),
    createQuestion(
      "Si le mid ennemi roam et vous ne pouvez pas le suivre, que faites-vous ?",
      "Rien",
      "Ping, push la vague et prenez des plaques/ressources",
      "Roamez quand même",
      "AFK",
      'b',
      "Punissez son roam en prenant des avantages sur sa lane (plaques, CS, vision)."
    ),
    createQuestion(
      "Un bon mid laner fait gagner :",
      "Uniquement sa lane",
      "La partie entière en influençant toute la carte",
      "Rien, c'est le jungler qui décide",
      "Que les teamfights",
      'b',
      "Un excellent mid utilise son influence pour créer des avantages pour toute l'équipe."
    ),
  ]
);
