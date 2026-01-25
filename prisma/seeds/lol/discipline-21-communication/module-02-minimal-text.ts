import { createModule, createQuestion } from '../utils';

export const module02MinimalText = createModule(
  'Communication texte minimale',
  'minimal-text',
  'Transmettre les informations clés efficacement via le chat',
  2,
  // Theory Content (5+ slides)
  `## Pourquoi la communication texte minimale ?

Dans League of Legends, chaque seconde compte. Taper de longs messages vous empêche de jouer et peut vous coûter des CS, des trades ou même votre vie. La communication texte doit être **concise, claire et pertinente**.

## Les informations essentielles à partager

Certaines informations méritent d'être écrites :
- **Timers** : "drag 22:30", "flash mid 14:00"
- **Appels simples** : "baron now", "group mid"
- **Alertes rapides** : "care jungle", "ss top"
- **Stratégie** : "split bot", "peel adc"
Ces messages courts transmettent l'essentiel sans vous distraire.

## Les abréviations courantes

Maîtrisez le vocabulaire rapide :
- **ss/mia** : missing (ennemi absent)
- **gj** : good job (bien joué)
- **mb** : my bad (mon erreur)
- **oom** : out of mana (plus de mana)
- **b** : back (je recule)
- **omw** : on my way (j'arrive)
- **ff** : forfeit/surrender (abandonner)
- **wp** : well played (bien joué)

## Ce qu'il faut éviter

Évitez absolument :
- Les **longs paragraphes** qui vous font perdre du temps
- Les **accusations** et reproches envers les coéquipiers
- Les **discussions** non liées à la partie
- Les **explications complexes** pendant les teamfights
- Le **all chat** inutile avec les ennemis

## Timing de la communication écrite

Le meilleur moment pour écrire :
- **Pendant le recall** : vous êtes en sécurité à la base
- **En attendant le respawn** : aucune action possible
- **En marchant vers la lane** : attention aux embuscades
- **Pendant les temps morts** : entre les objectifs
Évitez d'écrire pendant les combats ou quand un danger est proche.`,

  // Practice Instructions
  `## Objectif

Apprendre à communiquer efficacement par le texte en utilisant des messages courts et des abréviations.

## Étapes

1. Lancez une partie normale
2. Préparez une liste des abréviations courantes (ss, gj, mb, oom, b)
3. Utilisez uniquement des messages de 5 mots maximum
4. Partagez les timers importants via le chat (flash, ulti, objectifs)
5. Écrivez uniquement pendant les temps morts (recall, respawn)
6. Évitez toute discussion non pertinente pendant la partie

## Critère de réussite

Vous avez partagé au moins 5 informations utiles via le chat (timers, calls) sans jamais écrire de message de plus de 5 mots.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Que signifie l'abréviation 'ss' ou 'mia' ?",
      "Super strong (très fort)",
      "Missing in action (ennemi absent)",
      "Stay safe (reste prudent)",
      "Summoner spell (sort d'invocateur)",
      'b',
      "'ss' ou 'mia' signifie qu'un ennemi a disparu de sa lane."
    ),
    createQuestion(
      "Quel est le meilleur moment pour écrire dans le chat ?",
      "Pendant un teamfight",
      "En farmant sous tourelle",
      "Pendant le recall ou le respawn",
      "En fuyant un ennemi",
      'c',
      "Le recall et le respawn sont des moments sûrs pour écrire sans risque."
    ),
    createQuestion(
      "Comment annoncer efficacement le timer du Dragon ?",
      "Le dragon va respawn dans environ 5 minutes",
      "drag 22:30",
      "Attention le dragon va bientôt être disponible les amis",
      "???",
      'b',
      "Un message court avec le timer exact ('drag 22:30') est idéal."
    ),
    createQuestion(
      "Que signifie 'oom' ?",
      "Out of map (hors de la carte)",
      "On our mark (à notre signal)",
      "Out of mana (plus de mana)",
      "Object on me (objectif sur moi)",
      'c',
      "'oom' signifie 'out of mana', indiquant que vous n'avez plus de mana."
    ),
    createQuestion(
      "Pourquoi faut-il éviter les longs messages ?",
      "Le chat a une limite de caractères",
      "Ils vous empêchent de jouer efficacement",
      "Les coéquipiers ne les lisent jamais",
      "Ils augmentent votre ping",
      'b',
      "Écrire de longs messages vous distrait et vous empêche de farm ou réagir."
    ),
    createQuestion(
      "Que signifie 'mb' ?",
      "Move back (recule)",
      "My bad (mon erreur)",
      "Maybe (peut-être)",
      "Main base (base principale)",
      'b',
      "'mb' signifie 'my bad' pour reconnaître une erreur."
    ),
    createQuestion(
      "Quel message est inapproprié pendant une partie ?",
      "gj bot",
      "flash mid 14:00",
      "C'est vraiment nul de ta part de rater ce skillshot",
      "baron now",
      'c',
      "Les accusations et critiques nuisent à l'ambiance et n'apportent rien de constructif."
    ),
    createQuestion(
      "Que signifie 'wp' ?",
      "Wrong position (mauvais positionnement)",
      "Watch ping (regarde le ping)",
      "Well played (bien joué)",
      "Wait please (attends s'il te plaît)",
      'c',
      "'wp' signifie 'well played' pour féliciter un bon jeu."
    ),
    createQuestion(
      "Comment annoncer que le Flash ennemi est down ?",
      "Le flash du mid a été utilisé il y a 5 minutes",
      "flash mid down",
      "Attention les amis, le joueur adverse en mid lane n'a plus son flash",
      "!!!!",
      'b',
      "Un message court comme 'flash mid down' est clair et efficace."
    ),
    createQuestion(
      "Que signifie 'b' dans le chat ?",
      "Baron",
      "Back (je recule)",
      "Bot lane",
      "Buy (acheter)",
      'b',
      "'b' signifie 'back', indiquant que vous vous repliez ou recallez."
    ),
  ]
);
