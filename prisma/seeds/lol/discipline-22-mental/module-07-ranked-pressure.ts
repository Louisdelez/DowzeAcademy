import { createModule, createQuestion } from '../utils';

export const module07RankedPressure = createModule(
  'Gerer la pression en ranked',
  'ranked-pressure',
  'Jouer detendu et sans anxiete en parties classees',
  7,
  // Theory Content (5+ slides)
  `## Pourquoi la ranked stresse

La **ranked anxiety** (anxiete des parties classees) est un phenomene tres repandu. Les joueurs ressentent plus de pression en ranked qu'en normal car :
- Les **LP sont en jeu** - on peut perdre son rang
- Les parties "comptent" - on veut performer
- Le **jugement** - on a peur de decevoir
- La **permanence** - les resultats restent sur le profil

Cette pression peut paradoxalement vous faire **jouer moins bien** qu'en normal.

## L'illusion de l'importance des LP

Voici une verite liberatrice : **vos LP ne definissent pas votre valeur**. Que vous soyez Bronze ou Diamond :
- Vous restez la meme personne
- Votre skill reel ne change pas en une partie
- Le rang est un indicateur, pas une identite
- Une partie perdue n'efface pas vos progres

Les LP vont et viennent. Ce qui compte, c'est votre **progression sur le long terme**.

## Le paradoxe de la performance

Plus vous mettez de pression sur vous-meme, moins vous performez bien. C'est le **paradoxe de la performance** :
- La pression cree du stress
- Le stress reduit vos capacites cognitives
- Vous faites des erreurs que vous ne feriez pas normalement
- Vous perdez, ce qui augmente la pression

Le cercle vicieux ne se brise qu'en **reduisant la pression** que vous vous mettez.

## Techniques pour jouer detendu

1. **Traitez chaque partie comme un entrainement** - meme en ranked
2. **Focusez sur le processus, pas le resultat** - "Je vais pratiquer mon CS"
3. **Acceptez que perdre fait partie du jeu** - meme les pros perdent
4. **Limitez vos sessions ranked** - la fatigue augmente le stress
5. **Echauffez-vous** avec 1-2 normales avant de ranked
6. **Respirez** pendant le loading screen pour vous detendre

## Detacher son ego du rang

Le rang est un **outil de mesure**, pas votre identite. Conseils pour detacher votre ego :
- Ne vous presentez pas par votre rang ("Je suis Gold")
- Ne comparez pas votre rang a celui des autres
- Acceptez que le rang fluctue naturellement
- Celebrez vos bons plays, pas seulement les victoires
- Rappelez-vous pourquoi vous jouez : pour vous amuser

Quand gagner ou perdre ne change plus votre humeur, vous avez atteint une maturite mentale precieuse.

## Le warm-up mental

Avant une session ranked, preparez-vous mentalement :
- **Visualisez** une partie qui se passe bien
- **Rappellez-vous** que vous jouez pour progresser, pas pour prouver
- **Acceptez** que vous allez peut-etre perdre, et que c'est OK
- **Definissez** un objectif de processus ("Je vais focus ma vision")
- **Engagez-vous** a ne pas tilter, peu importe le resultat

## Recapitulatif

- La **ranked anxiety** est normale mais contre-productive
- **Les LP ne definissent pas votre valeur** - le rang est un indicateur
- **Plus vous mettez de pression**, moins vous performez
- **Traitez la ranked comme un entrainement** serieux mais detendu
- **Detachez votre ego** du resultat et focusez sur le processus`,

  // Practice Instructions
  `## Objectif

Jouer une session de ranked en restant detendu et en se concentrant sur le processus plutot que le resultat.

## Étapes

1. Avant de lancer la ranked, faites 1-2 parties normales pour vous echauffer
2. Pendant le loading screen, faites 5 respirations profondes
3. Definissez un objectif de PROCESSUS pour la partie (ex: "Je vais check la minimap toutes les 5 secondes")
4. Pendant la partie, concentrez-vous sur cet objectif, pas sur le score
5. Si vous perdez, notez si vous avez atteint votre objectif de processus
6. Evaluez votre niveau de stress sur 10 pendant et apres la partie
7. Jouez 3-5 parties en suivant ce protocole
8. Comparez votre experience avec vos sessions ranked habituelles

## Critère de reussite

Vous avez joue au moins 3 parties ranked avec un niveau de stress percu inferieur a vos sessions habituelles, en vous concentrant sur un objectif de processus.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que la 'ranked anxiety' ?",
      "Une strategie pour mieux jouer en ranked",
      "L'anxiete et le stress ressentis en parties classees",
      "Un bonus de LP pour les joueurs stresses",
      "Une regle speciale des ranked",
      'b',
      "La ranked anxiety est le stress supplementaire ressenti en ranked par rapport aux parties normales."
    ),
    createQuestion(
      "Pourquoi les LP ne definissent-ils pas votre valeur ?",
      "Les LP sont truques par Riot",
      "Le rang est un indicateur qui fluctue, pas votre identite",
      "Les LP n'existent pas vraiment",
      "Seul le rang final de saison compte",
      'b',
      "Le rang est un outil de mesure qui fluctue - il ne represente pas qui vous etes."
    ),
    createQuestion(
      "Qu'est-ce que le paradoxe de la performance ?",
      "Mieux on joue, plus on stresse",
      "Plus on met de pression, moins on performe",
      "Les mauvais joueurs gagnent plus",
      "Le stress ameliore les performances",
      'b',
      "La pression excessive cree du stress qui reduit nos capacites et nos performances."
    ),
    createQuestion(
      "Quelle approche aide a reduire la pression en ranked ?",
      "Traiter chaque partie comme un test decisif",
      "Traiter chaque partie comme un entrainement",
      "Jouer uniquement en promo",
      "Ne jamais jouer ranked",
      'b',
      "Voir la ranked comme un entrainement reduit la pression et ameliore les performances."
    ),
    createQuestion(
      "Sur quoi faut-il se concentrer plutot que le resultat ?",
      "Les statistiques de l'equipe",
      "Le processus et les objectifs d'amelioration",
      "Le rang des adversaires",
      "Le nombre de parties jouees",
      'b',
      "Se concentrer sur le processus (ce qu'on travaille) plutot que le resultat (victoire/defaite)."
    ),
    createQuestion(
      "Pourquoi faire un warm-up avant la ranked ?",
      "Pour gagner des LP bonus",
      "Pour se detendre et se mettre en condition",
      "Ce n'est pas necessaire",
      "Pour fatiguer les adversaires",
      'b',
      "Le warm-up permet de se mettre en condition et de reduire le stress de la premiere partie."
    ),
    createQuestion(
      "Que faire pendant le loading screen pour se detendre ?",
      "Regarder les statistiques des adversaires avec anxiete",
      "Faire des respirations profondes",
      "Planifier comment blame ses coequipiers",
      "Stresser sur le matchup",
      'b',
      "Les respirations profondes aident a calmer le systeme nerveux avant la partie."
    ),
    createQuestion(
      "Quand avez-vous atteint une maturite mentale en ranked ?",
      "Quand vous etes Challenger",
      "Quand gagner ou perdre ne change plus votre humeur",
      "Quand vous ne perdez plus jamais",
      "Quand vous arretez de jouer ranked",
      'b',
      "La maturite mentale, c'est quand le resultat n'affecte plus votre etat emotionnel."
    ),
    createQuestion(
      "Comment detacher son ego du rang ?",
      "Ne plus regarder son rang",
      "Se definir autrement que par son rang et celebrer les bons plays",
      "Jouer uniquement des champions faciles",
      "Arreter de jouer en solo",
      'b',
      "Ne pas se definir par son rang et apprecier le jeu independamment du resultat."
    ),
    createQuestion(
      "Quel est un bon objectif de processus pour une partie ?",
      "Gagner la partie",
      "Check la minimap toutes les 5 secondes",
      "Avoir le meilleur KDA",
      "Etre MVP de l'equipe",
      'b',
      "Un objectif de processus est une action concrete que vous controlez, pas un resultat."
    ),
  ]
);
