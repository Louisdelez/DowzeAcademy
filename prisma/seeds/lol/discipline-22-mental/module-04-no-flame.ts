import { createModule, createQuestion } from '../utils';

export const module04NoFlame = createModule(
  'Ne pas flame',
  'no-flame',
  'Eviter la toxicite et muter les joueurs toxiques',
  4,
  // Theory Content (5+ slides)
  `## Pourquoi le flame est contre-productif

Le **flame** (insulter ou critiquer agressivement ses coequipiers) est l'une des pires choses que vous pouvez faire dans une partie. Pourquoi ?

- Cela **degrade l'ambiance** de l'equipe
- Le joueur vise jouera **encore plus mal** sous la pression
- Vous **perdez du temps** a taper au lieu de jouer
- Cela **vous tilte vous-meme** en plus de tilter les autres
- C'est tout simplement **inutile** - ca ne changera rien au passe

## L'impact du flame sur votre equipe

Quand vous flamer un coequipier, plusieurs choses se produisent :
1. Il se met sur la **defensive** et arrete de cooperer
2. Il peut **volontairement mal jouer** par vengeance
3. Les autres joueurs **perdent leur concentration**
4. L'ambiance devient **hostile** et tout le monde joue moins bien
5. Vos chances de **comeback** diminuent drastiquement

Une equipe qui se dispute a **beaucoup moins de chances de gagner** qu'une equipe qui reste concentree.

## La strategie du mute

Plutot que de repondre aux joueurs toxiques, **utilisez le mute**. Voici comment :
- **/mute [nom]** - mute un joueur specifique
- **/mute all** - mute tous les joueurs
- Tab + clic sur les icones - mute chat, pings, emotes individuellement

Le mute est votre **meilleur outil** pour preserver votre mental. Utilisez-le sans hesitation.

## Quand muter

Mutez **immediatement** des que :
- Un joueur commence a critiquer
- Quelqu'un blame apres une premiere erreur
- Le ton devient agressif ou sarcastique
- Les pings deviennent abusifs (spam ping "?")

N'attendez pas que ca degenere. Le mute preventif est toujours plus efficace.

## Remplacer le flame par la communication constructive

Au lieu de : "GG jungle diff, tu es nul"
Dites : Rien. Concentrez-vous sur votre jeu.

Si vous devez communiquer :
- "On focus baron apres ?" (proposition)
- "Je split top" (information)
- "Dragon dans 30 sec" (rappel objectif)

La communication doit etre **courte, factuelle et orientee objectifs**.

## Les consequences du flame

Le flame a des consequences reelles :
- **Sanctions Riot** : restrictions de chat, suspensions, bannissements
- **Perte de LP** : vous perdez plus de parties en tiltant vos coequipiers
- **Reputation** : les joueurs peuvent vous identifier comme toxique
- **Bien-etre** : le flame augmente votre propre stress et frustration

Statistiquement, les joueurs non-toxiques ont un **meilleur winrate** que les joueurs toxiques.

## Recapitulatif

- Le **flame ne sert jamais** a ameliorer la situation
- Il **degrade les performances** de toute l'equipe
- Utilisez le **mute immediatement** face a la toxicite
- Remplacez le flame par une **communication constructive** ou le silence
- Les joueurs **non-toxiques gagnent plus** de parties`,

  // Practice Instructions
  `## Objectif

Pratiquer l'utilisation du mute et maintenir une communication exclusivement constructive pendant une session de jeu.

## Étapes

1. Avant de lancer une partie, engagez-vous a ne rien ecrire de negatif
2. Des le debut de la partie, preparez-vous mentalement a utiliser le mute si necessaire
3. A la premiere critique ou commentaire toxique d'un joueur, mutez-le immediatement
4. Pendant toute la partie, limitez votre communication a :
   - Appels d'objectifs ("baron ?", "dragon up")
   - Informations ("je roam mid", "flash down bot")
   - Encouragements ("gj", "wp")
5. Si vous ressentez l'envie d'ecrire quelque chose de negatif, prenez une respiration et concentrez-vous sur la map
6. En fin de partie, notez combien de joueurs vous avez mute et si ca a aide

## Critère de reussite

Vous avez joue une partie entiere sans ecrire un seul message negatif, et vous avez utilise le mute de maniere proactive si necessaire.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi le flame est-il contre-productif ?",
      "Il motive le coequipier a mieux jouer",
      "Il degrade les performances de toute l'equipe",
      "Il est neutre sur le resultat",
      "Il aide a identifier les mauvais joueurs",
      'b',
      "Le flame tilte les coequipiers et degrade l'ambiance, reduisant les chances de victoire."
    ),
    createQuestion(
      "Que se passe-t-il quand vous flamer un coequipier ?",
      "Il joue mieux grace a la motivation",
      "Il se met sur la defensive et peut mal jouer volontairement",
      "Il vous remercie pour les conseils",
      "Rien de particulier",
      'b',
      "Un joueur flame se met sur la defensive et peut meme saboter la partie par vengeance."
    ),
    createQuestion(
      "Quelle commande mute tous les joueurs ?",
      "/muteall",
      "/mute all",
      "/silence",
      "/stopall",
      'b',
      "La commande /mute all mute tous les joueurs de la partie."
    ),
    createQuestion(
      "Quand faut-il utiliser le mute ?",
      "Uniquement apres des insultes graves",
      "Jamais, il faut repondre aux critiques",
      "Des les premiers signes de toxicite",
      "Seulement si le joueur est en ranked",
      'c',
      "Le mute preventif des les premiers signes de toxicite est plus efficace."
    ),
    createQuestion(
      "Quel type de communication est constructif ?",
      "'T'es nul, desinstalle'",
      "'Dragon dans 30 sec'",
      "'GG jungle diff'",
      "'Pourquoi tu feed ?'",
      'b',
      "Les communications courtes, factuelles et orientees objectifs sont constructives."
    ),
    createQuestion(
      "Quelle est une consequence possible du flame repetitif ?",
      "Monter en rang plus vite",
      "Restrictions de chat ou bannissement",
      "Obtenir de meilleurs coequipiers",
      "Ameliorer ses statistiques",
      'b',
      "Riot sanctionne les comportements toxiques par des restrictions, suspensions ou bannissements."
    ),
    createQuestion(
      "Que faire si vous ressentez l'envie de flame ?",
      "Ecrire le message puis l'effacer",
      "Respirer et se concentrer sur la map",
      "Faire une micro-agression indirecte",
      "Quitter la partie",
      'b',
      "Respirer et se recentrer sur le jeu est plus efficace que ceder a l'envie de flame."
    ),
    createQuestion(
      "Statistiquement, qui a le meilleur winrate ?",
      "Les joueurs qui flame pour motiver",
      "Les joueurs non-toxiques",
      "Les joueurs qui mute tout le monde en debut de partie",
      "Il n'y a pas de difference",
      'b',
      "Les etudes montrent que les joueurs non-toxiques ont un meilleur winrate."
    ),
    createQuestion(
      "Pourquoi repondre a un joueur toxique est-il une mauvaise idee ?",
      "C'est une bonne idee pour se defendre",
      "Cela escalade le conflit et vous fait perdre du temps et de la concentration",
      "Cela aide a resoudre le probleme",
      "Riot vous donnera raison",
      'b',
      "Repondre escalade le conflit et vous distrait du jeu - le mute est plus efficace."
    ),
    createQuestion(
      "Que peut-on muter individuellement via Tab ?",
      "Uniquement le chat",
      "Chat, pings et emotes",
      "Uniquement les pings",
      "On ne peut pas muter via Tab",
      'b',
      "En appuyant sur Tab, vous pouvez muter separement le chat, les pings et les emotes de chaque joueur."
    ),
  ]
);
