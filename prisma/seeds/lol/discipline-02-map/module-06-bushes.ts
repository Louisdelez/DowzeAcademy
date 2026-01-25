import { createModule, createQuestion } from '../utils';

export const module06Bushes = createModule(
  'Les buissons (brush)',
  'bushes',
  'Utiliser les hautes herbes pour la dissimulation',
  6,
  // Theory Content
  `## Qu'est-ce qu'un buisson ?

Les **buissons** (ou brush) sont des zones d'**herbes hautes** présentes sur toute la carte. Ils permettent de se **cacher** des ennemis qui n'ont pas de vision dessus.

## Fonctionnement des buissons

Quand vous êtes dans un buisson :
- Vous êtes **invisible** pour les ennemis hors du buisson
- Vous pouvez voir **à l'extérieur** du buisson
- Un ennemi qui **entre** dans le buisson vous verra
- Une **ward** dans le buisson révèle les occupants

## Emplacements des buissons

On trouve des buissons à plusieurs endroits :
- Dans les **lanes** (2-3 buissons par lane)
- Dans la **jungle** (multiples buissons)
- Dans la **rivière** (aux entrées uniquement)
- Près des **objectifs** (Dragon, Baron)

## Utilisation tactique

Les buissons servent à :
- **Embusquer** les ennemis qui passent
- **Se cacher** pour éviter d'être repéré
- **Zoner** l'adversaire (menace invisible)
- **Warder** pour surveiller les passages

## Récapitulatif

- Buissons = herbes hautes qui cachent les champions
- Invisible de l'extérieur, visible de l'intérieur
- Présents dans les lanes, jungle et rivière
- Permettent les embuscades et la dissimulation
- Les wards révèlent le contenu des buissons`,

  // Practice Instructions
  `## Objectif

Comprendre le fonctionnement des buissons et leur utilisation.

## Étapes

1. Lancez une partie d'entraînement contre l'IA
2. Trouvez un buisson dans votre lane
3. Entrez dans le buisson et observez : vous êtes caché
4. Demandez à un bot de passer près du buisson (il ne vous voit pas)
5. Placez une ward dans un buisson et observez l'effet
6. Explorez les buissons de la jungle et de la rivière

## Critère de réussite

Vous comprenez comment les buissons cachent les champions et pouvez les localiser sur la carte.`,

  // Questions
  [
    createQuestion(
      "Que permettent les buissons ?",
      "De régénérer des PV",
      "De se cacher des ennemis",
      "De gagner de l'or",
      "De se téléporter",
      'b',
      "Les buissons permettent de se dissimuler des ennemis extérieurs."
    ),
    createQuestion(
      "Peut-on voir l'extérieur depuis l'intérieur d'un buisson ?",
      "Non, on est aveugle",
      "Oui, on voit normalement",
      "Seulement avec une compétence",
      "Seulement de jour",
      'b',
      "Depuis un buisson, vous voyez normalement l'extérieur."
    ),
    createQuestion(
      "Que se passe-t-il si un ennemi entre dans votre buisson ?",
      "Vous devenez invisible",
      "Vous vous voyez mutuellement",
      "Il est éjecté",
      "Rien ne change",
      'b',
      "Si un ennemi entre dans le buisson, vous vous voyez tous les deux."
    ),
    createQuestion(
      "Comment révéler un ennemi caché dans un buisson ?",
      "Impossible",
      "En plaçant une ward dedans",
      "En criant dans le chat",
      "En attendant",
      'b',
      "Une ward placée dans le buisson révèle tous les champions à l'intérieur."
    ),
    createQuestion(
      "Où trouve-t-on des buissons sur la carte ?",
      "Uniquement dans la jungle",
      "Dans les lanes, jungle et aux bords de la rivière",
      "Seulement dans les bases",
      "Nulle part",
      'b',
      "Les buissons sont présents dans les lanes, la jungle et aux entrées de la rivière."
    ),
    createQuestion(
      "Qu'est-ce qu'une embuscade (bush check) ?",
      "Détruire un buisson",
      "Se cacher dans un buisson pour attaquer par surprise",
      "Courir à travers les buissons",
      "Planter des fleurs",
      'b',
      "Une embuscade consiste à attendre dans un buisson pour surprendre l'ennemi."
    ),
    createQuestion(
      "Pourquoi warder les buissons de la rivière ?",
      "C'est obligatoire",
      "Pour détecter les ennemis qui s'y cachent avant un gank",
      "Pour faire pousser des plantes",
      "Pour gagner de l'or",
      'b',
      "Les ennemis utilisent souvent ces buissons pour préparer des ganks."
    ),
    createQuestion(
      "Le tribush, c'est quoi ?",
      "Un buisson avec trois entrées",
      "Un buisson magique",
      "Un monstre de jungle",
      "Une tourelle cachée",
      'a',
      "Le tribush est un grand buisson avec trois entrées, situé près des lanes."
    ),
    createQuestion(
      "Peut-on attaquer depuis un buisson sans être vu ?",
      "Non, on devient visible en attaquant",
      "Oui, tant qu'on reste dans le buisson",
      "Seulement avec certains champions",
      "Seulement de nuit",
      'a',
      "Attaquer révèle votre position, même depuis un buisson."
    ),
    createQuestion(
      "Pourquoi zoner depuis un buisson est efficace ?",
      "On régénère plus vite",
      "L'ennemi ne sait pas si vous y êtes, créant une menace",
      "On gagne de l'XP bonus",
      "Les sbires fuient",
      'b',
      "L'incertitude force l'ennemi à respecter le buisson ou à risquer une embuscade."
    ),
  ]
);
