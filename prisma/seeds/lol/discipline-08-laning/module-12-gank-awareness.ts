import { createModule, createQuestion } from '../utils';

export const module12GankAwareness = createModule(
  'Conscience des ganks',
  'gank-awareness',
  'Détecter et éviter les ganks du jungler',
  12,
  // Theory Content
  `## Conscience des ganks

Un **gank** est quand le jungler vient vous attaquer en lane. Savoir les **anticiper** et les **éviter** est crucial pour survivre.

## Quand les ganks arrivent-ils ?

Moments à risque :
- Après le **premier clear** du jungler (~3:00-3:30)
- Quand vous êtes **poussé** loin de votre tourelle
- Quand vous n'avez **pas de ward**
- Après que l'ennemi ait **ping** ou regardé vers la jungle

## Les signaux d'alerte

Indices d'un gank imminent :
- L'ennemi devient soudain **agressif**
- L'ennemi **avance** sans raison
- Le jungler ennemi n'est **pas visible** depuis longtemps
- Votre laner **cache** ses intentions

## Se protéger des ganks

Mesures préventives :
- **Ward** les entrées de la jungle
- **Tracker** le jungler ennemi mentalement
- **Respecter** quand pas de vision
- Rester du **côté wardé** de la lane

## Où placer ses wards ?

Positions clés :
- **Tribush** (bush en triangle)
- **River bush** (bush de la rivière)
- **Pixel brush** (petit bush rivière)
- Derrière le **mur du dragon/baron**

## Réagir à un gank

Quand le gank arrive :
- Ne **paniquez** pas
- Fuyez vers votre **tourelle**
- Utilisez vos **sorts d'échappement** (flash, dash)
- Ne gaspillez pas flash si vous êtes mort de toute façon`,

  // Practice Instructions
  `## Objectif

Développer la conscience des ganks pour mourir moins.

## Étapes

1. Au début de partie, notez où le jungler ennemi commence
2. Placez des wards dans les entrées de jungle
3. Quand vous n'avez pas de vision, restez prudent
4. Observez le comportement de votre adversaire
5. Si le jungler est MIA depuis longtemps, jouez safe

## Critère de réussite

Vous évitez 80% des ganks en les anticipant grâce à la vision et au tracking.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un gank ?",
      "Un type de sbire",
      "Une attaque du jungler sur votre lane",
      "Une technique de last-hit",
      "Un objectif",
      'b',
      "Un gank est quand le jungler vient attaquer une lane."
    ),
    createQuestion(
      "Quand arrive le premier gank potentiel ?",
      "1:00",
      "3:00-3:30 environ",
      "10:00",
      "Jamais en early",
      'b',
      "Le premier gank peut arriver vers 3:00-3:30 après le clear initial."
    ),
    createQuestion(
      "Quel indice montre qu'un gank arrive ?",
      "L'ennemi recule",
      "L'ennemi devient agressif soudainement",
      "L'ennemi farm sous tourelle",
      "L'ennemi back",
      'b',
      "Une agressivité soudaine peut signaler l'arrivée du jungler."
    ),
    createQuestion(
      "Comment se protéger des ganks ?",
      "Ignorer la map",
      "Warder les entrées de jungle",
      "Pousser fort",
      "Ne jamais farm",
      'b',
      "Les wards dans les entrées de jungle détectent les ganks."
    ),
    createQuestion(
      "Qu'est-ce que le tribush ?",
      "Un objectif",
      "Le bush en forme de triangle",
      "Un champion",
      "Un objet",
      'b',
      "Le tribush est le buisson en triangle, spot clé pour les ganks."
    ),
    createQuestion(
      "Que faire si le jungler est MIA depuis longtemps ?",
      "Push fort",
      "Jouer plus safe et respecter",
      "All-in l'ennemi",
      "AFK",
      'b',
      "Jungler MIA = danger potentiel, jouer prudemment."
    ),
    createQuestion(
      "Faut-il flash si on est mort de toute façon ?",
      "Oui, toujours",
      "Non, garder le flash pour une meilleure opportunité",
      "Ça dépend du champion",
      "Flash n'existe pas",
      'b',
      "Ne gaspillez pas flash si vous mourrez quand même."
    ),
    createQuestion(
      "De quel côté de la lane rester ?",
      "N'importe lequel",
      "Du côté wardé",
      "Du côté sans ward",
      "Au milieu",
      'b',
      "Restez du côté où vous avez de la vision."
    ),
    createQuestion(
      "Tracker le jungler signifie quoi ?",
      "Le suivre physiquement",
      "Savoir mentalement où il peut être",
      "Lui parler",
      "L'ignorer",
      'b',
      "Tracker = garder une idée de la position probable du jungler."
    ),
    createQuestion(
      "Où fuir quand ganké ?",
      "Vers l'ennemi",
      "Vers votre tourelle",
      "Dans la jungle ennemie",
      "AFK",
      'b',
      "Fuyez vers votre tourelle pour vous mettre en sécurité."
    ),
  ]
);
