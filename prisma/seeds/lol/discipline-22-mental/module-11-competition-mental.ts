import { createModule, createQuestion } from '../utils';

export const module11CompetitionMental = createModule(
  'Mental en competition',
  'competition-mental',
  'Gerer la pression de jouer sous le regard public en tournois',
  11,
  // Theory Content (5+ slides)
  `## La pression du regard public

Jouer en **competition** (tournois, clash, showmatch) ajoute une dimension que la solo queue n'a pas : le **regard des autres**. Cette pression peut :
- Amplifier le **stress** et l'anxiete
- Creer la peur de **decevoir** (coequipiers, spectateurs)
- Provoquer le **choking** (sous-performer sous pression)
- Faire douter de **decisions** normalement automatiques

Meme les professionnels ressentent cette pression.

## Comprendre le "choking"

Le **choking** (etouffement) est le phenomene de sous-performance sous pression. Il se produit quand :
- Vous pensez trop a **comment** vous faites les choses
- L'anxiete **paralyse** votre prise de decision
- Vous jouez pour **eviter les erreurs** plutot que pour gagner
- Votre **cerveau conscient** interfere avec les automatismes

Des actions normalement naturelles deviennent soudainement difficiles.

## Techniques pour gerer la pression

1. **Preparation mentale** : visualisez-vous performer calmement avant le match
2. **Routines** : gardez vos routines pre-partie meme en tournoi
3. **Respiration** : utilisez la respiration profonde pendant les pauses
4. **Focus processus** : concentrez-vous sur votre jeu, pas sur le resultat
5. **Acceptation** : acceptez que la nervosité est normale
6. **Relativisation** : ce n'est qu'un jeu, meme en competition

## Jouer en equipe sous pression

En competition d'equipe (Clash, tournoi), la pression est partagee :
- **Communiquez** calmement - pas de panique dans les calls
- **Soutenez** vos coequipiers s'ils sont stresses
- **Ne blamez pas** en temps reel - ca amplifie la pression
- **Focusez** sur les solutions, pas les problemes
- **Gardez l'energie positive** meme en retard

Une equipe qui gere bien la pression ensemble a un avantage enorme.

## Transformer la pression en motivation

La pression peut etre votre **alliee** si vous la percevez correctement :
- Le stress est de l'**energie** - canalisez-la
- L'adrénaline **aiguise** les reflexes
- La pression signifie que **ca compte** pour vous
- Les meilleurs moments viennent souvent des situations de pression

Recadrez "je suis stresse" en "je suis pret et motive".

## Se preparer pour les competitions

Avant un evenement competitif :
- **Entrainez-vous** specifiquement pour l'environnement (stream, vocal)
- **Simulez** la pression dans vos entrainements
- **Dormez bien** les jours precedents
- **Mangez correctement** - evitez les nouveaux aliments
- **Arrivez tot** pour vous installer et vous detendre
- **Preparez un plan B** mental si les choses tournent mal

La preparation reduit l'incertitude, donc le stress.

## Recapitulatif

- Le **regard public** amplifie la pression en competition
- Le **choking** est la sous-performance causee par la pression excessive
- Utilisez des **techniques** : preparation, routines, respiration, focus processus
- En equipe, **soutenez-vous** mutuellement et restez positifs
- **Recadrez** la pression comme energie et motivation
- Une bonne **preparation** reduit significativement le stress`,

  // Practice Instructions
  `## Objectif

Vous preparer a gerer la pression de la competition en simulant des conditions de stress et en pratiquant les techniques de gestion.

## Étapes

1. Organisez ou rejoignez une session de jeu "importante" :
   - Partie de Clash
   - Tournoi communautaire
   - Ou simulez en jouant une ranked "decisive" avec des amis qui regardent
2. Avant l'evenement :
   - Faites votre routine pre-partie habituelle
   - Ajoutez 5 minutes de visualisation (imaginez-vous jouer calmement)
   - Preparez des phrases de recadrage ("je suis pret", "c'est de l'energie")
3. Pendant l'evenement :
   - Notez votre niveau de stress sur 10 au debut
   - Utilisez la respiration profonde entre les parties
   - Si vous sentez le choking, focusez sur UNE action simple
4. Apres l'evenement :
   - Evaluez comment vous avez gere la pression
   - Identifiez ce qui a fonctionne et ce qui peut etre ameliore

## Critère de reussite

Vous avez participe a un evenement competitif, utilise au moins 2 techniques de gestion de la pression, et note une amelioration par rapport a des experiences precedentes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qui amplifie la pression en competition par rapport a la solo queue ?",
      "Le matchmaking est different",
      "Le regard des autres (spectateurs, coequipiers)",
      "Les champions sont plus forts",
      "Les parties sont plus longues",
      'b',
      "Le regard public et la peur de decevoir amplifient la pression en competition."
    ),
    createQuestion(
      "Qu'est-ce que le 'choking' en competition ?",
      "Une technique de respiration",
      "La sous-performance causee par une pression excessive",
      "Un type de gank",
      "Une strategie d'equipe",
      'b',
      "Le choking est le phenomene de jouer moins bien que d'habitude a cause de la pression."
    ),
    createQuestion(
      "Pourquoi le choking se produit-il ?",
      "Les serveurs sont differents en tournoi",
      "Le cerveau conscient interfere avec les automatismes",
      "Les adversaires sont meilleurs",
      "Le materiel est different",
      'b',
      "Sous pression, on pense trop a comment faire les choses, perturbant les automatismes."
    ),
    createQuestion(
      "Comment recadrer positivement le stress ?",
      "L'ignorer completement",
      "Le voir comme de l'energie et de la motivation",
      "Le transformer en colere contre les adversaires",
      "Prendre des medicaments",
      'b',
      "Le stress peut etre recadre comme de l'energie utile plutot que comme un obstacle."
    ),
    createQuestion(
      "Que faire pour soutenir un coequipier stresse en competition ?",
      "Lui rappeler ses erreurs passees",
      "Rester calme et positif dans les communications",
      "L'ignorer et se concentrer sur soi",
      "Lui dire de se calmer agressivement",
      'b',
      "Des communications calmes et positives aident a reduire le stress collectif."
    ),
    createQuestion(
      "Pourquoi garder ses routines pre-partie meme en tournoi ?",
      "C'est une superstition",
      "Elles apportent de la familiarite et reduisent le stress",
      "Les regles du tournoi l'exigent",
      "Ce n'est pas necessaire",
      'b',
      "Les routines familieres apportent un sentiment de normalite qui reduit le stress."
    ),
    createQuestion(
      "Sur quoi se concentrer pour eviter le choking ?",
      "Sur les spectateurs",
      "Sur le processus de jeu, pas le resultat",
      "Sur les erreurs des coequipiers",
      "Sur le prix du tournoi",
      'b',
      "Se concentrer sur le processus plutot que le resultat reduit la pression paralysante."
    ),
    createQuestion(
      "Comment la preparation reduit-elle le stress en competition ?",
      "Elle ne le reduit pas",
      "Elle reduit l'incertitude, donc l'anxiete",
      "Elle fatigue avant le tournoi",
      "Elle augmente la pression",
      'b',
      "Une bonne preparation reduit l'incertitude, qui est une source majeure de stress."
    ),
    createQuestion(
      "Que signifie 'jouer pour eviter les erreurs' sous pression ?",
      "Une bonne strategie defensive",
      "Un signe de choking - on joue passivement par peur",
      "La meilleure facon de gagner",
      "Une technique pro",
      'b',
      "Jouer pour eviter les erreurs plutot que pour gagner est un signe de paralysie par la pression."
    ),
    createQuestion(
      "Que faire si vous sentez le choking arriver pendant une partie ?",
      "Paniquer et tout remettre en question",
      "Se concentrer sur une seule action simple a la fois",
      "Arreter de jouer",
      "Blamer la pression",
      'b',
      "Se recentrer sur une action simple permet de retrouver les automatismes."
    ),
  ]
);
