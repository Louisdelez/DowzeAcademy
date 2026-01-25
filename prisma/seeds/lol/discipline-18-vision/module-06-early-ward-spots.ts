import { createModule, createQuestion } from '../utils';

export const module06EarlyWardSpots = createModule(
  'Emplacements clés de ward en early',
  'early-ward-spots',
  'Connaître les positions stratégiques pour warder la rivière et la jungle en début de partie',
  6,
  // Theory Content (5+ slides)
  `## L'importance du warding en early game

En début de partie, la **vision est critique** pour survivre aux ganks du jungler ennemi. Les premières minutes établissent le tempo de la partie. Une bonne vision early vous permet de jouer agressivement en toute sécurité ou de vous replier à temps.

## La rivière : zone prioritaire

La **rivière** (river) est la zone la plus importante à warder en early :
- C'est le chemin principal du jungler entre les lanes
- Elle connecte les deux côtés de la jungle
- Le **Scuttle Crab** (crabe) y apparaît à 3:30

Wardez toujours les entrées de rivière près de votre lane.

## Emplacements clés pour la Top lane

En **Top lane**, les spots de ward essentiels sont :
- **River bush** : Couvre l'entrée principale de gank
- **Tribush** : Selon si vous êtes côté bleu ou rouge
- **Entrée de la jungle** ennemie : Pour voir le jungler tôt

Côté bleu, priorité au river bush. Côté rouge, le tribush est crucial.

## Emplacements clés pour la Mid lane

En **Mid lane**, vous êtes exposé des deux côtés :
- **Pixel bush** : Le petit bush entre mid et river (très important)
- **Raptor camp** ennemi : Pour track le jungler
- **River des deux côtés** : Alternez selon le jungler ennemi

Les deux côtés de la river sont vulnérables, adaptez vos wards selon la menace.

## Emplacements clés pour la Bot lane

En **Bot lane** (ADC + Support) :
- **River bush** : Protection contre les ganks
- **Tribush** : Selon votre côté
- **Dragon pit** : Dès que possible pour surveiller l'objectif

Le Support doit gérer la majorité du warding early pour protéger l'ADC.`,

  // Practice Instructions
  `## Objectif

Mémoriser et utiliser les emplacements de ward essentiels en début de partie.

## Étapes

1. Lancez une partie en choisissant votre lane habituelle
2. Posez votre première ward entre 2:30 et 3:00 dans l'emplacement clé de votre lane
3. Top lane : River bush ou tribush selon votre côté
4. Mid lane : Pixel bush d'un côté de la river
5. Bot lane : River bush ou tribush pour le support
6. Maintenez la vision sur ces spots pendant les 10 premières minutes
7. Notez chaque gank que vous avez pu anticiper grâce à vos wards

## Critère de réussite

Vous avez maintenu une vision constante sur les emplacements clés pendant le early game et évité au moins 1 gank grâce à cette vision.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle zone est prioritaire à warder en début de partie ?",
      "La base ennemie",
      "La rivière (river)",
      "Votre propre jungle",
      "Le Nexus ennemi",
      'b',
      "La rivière est le chemin principal du jungler et doit être wardée en priorité pour éviter les ganks."
    ),
    createQuestion(
      "À quelle minute le Scuttle Crab apparaît-il pour la première fois ?",
      "1:30",
      "2:30",
      "3:30",
      "4:30",
      'c',
      "Le Scuttle Crab (crabe de rivière) spawn à 3:30, rendant la rivière encore plus importante."
    ),
    createQuestion(
      "Qu'est-ce que le 'Pixel bush' ?",
      "Un bush invisible",
      "Le petit bush entre mid et river",
      "Le bush du Baron",
      "Un bush dans la base",
      'b',
      "Le Pixel bush est le petit bush situé entre la mid lane et la rivière, spot de ward très populaire."
    ),
    createQuestion(
      "Qui doit gérer la majorité du warding en Bot lane ?",
      "L'ADC",
      "Le Support",
      "Le Jungler allié",
      "Le Mid laner",
      'b',
      "Le Support est responsable de la vision en bot lane pour permettre à l'ADC de farm en sécurité."
    ),
    createQuestion(
      "Quand devriez-vous poser votre première ward en début de partie ?",
      "Dès le spawn à 0:00",
      "Entre 2:30 et 3:00",
      "Après 10 minutes",
      "Seulement avant le Dragon",
      'b',
      "La première ward devrait être posée vers 2:30-3:00 quand le jungler peut commencer à ganker."
    ),
    createQuestion(
      "En Top lane côté bleu, quel est l'emplacement de ward prioritaire ?",
      "Tribush",
      "River bush",
      "Bush du Baron",
      "Votre propre base",
      'b',
      "Côté bleu en Top, le river bush couvre l'entrée de gank principale du jungler."
    ),
    createQuestion(
      "Pourquoi la Mid lane est-elle particulièrement vulnérable aux ganks ?",
      "Elle a plus d'ennemis",
      "Elle est exposée des deux côtés de la river",
      "Elle a moins de tourelles",
      "Le jungler y spawn",
      'b',
      "Le Mid laner peut être ganké des deux côtés, nécessitant une vision sur les deux entrées de river."
    ),
    createQuestion(
      "Quel objectif la Bot lane doit-elle surveiller avec ses wards ?",
      "Le Baron Nashor",
      "Le Rift Herald",
      "Le Dragon",
      "Les Gromp",
      'c',
      "Le Dragon est proche de la Bot lane et doit être surveillé dès le début de la partie."
    ),
    createQuestion(
      "Qu'est-ce que le 'tribush' ?",
      "Un bush à trois entrées",
      "Un type de ward",
      "Un monstre neutre",
      "Une compétence de champion",
      'a',
      "Le tribush est un bush triangulaire avec trois entrées, situé près des lanes latérales."
    ),
    createQuestion(
      "Pourquoi warder l'entrée de la jungle ennemie est-il utile ?",
      "Pour voler les camps",
      "Pour voir le jungler ennemi tôt et prédire ses mouvements",
      "Pour augmenter vos dégâts",
      "Pour gagner de l'or",
      'b',
      "Voir le jungler sortir de sa jungle vous informe de sa direction et de ses intentions de gank."
    ),
  ]
);
