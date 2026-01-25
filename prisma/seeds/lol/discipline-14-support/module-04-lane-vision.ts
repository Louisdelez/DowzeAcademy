import { createModule, createQuestion } from '../utils';

export const module04LaneVision = createModule(
  'Placer la vision en lane',
  'lane-vision',
  'Maîtriser le placement des wards : buisson rivière et tribush',
  4,
  // Theory Content (5+ slides)
  `## L'importance de la vision en lane

La **vision** est votre meilleure défense contre les ganks. En tant que support, vous êtes le principal responsable des wards en phase de lane. Un bon placement de ward peut sauver votre lane d'un gank du jungler ennemi et vous permettre de jouer agressivement.

## Le buisson de la rivière

Le **buisson de la rivière** est le spot de ward le plus important en début de partie. Il couvre le chemin principal des ganks venant de la jungle. Placez votre première ward ici vers **2:45-3:00** (avant le premier timing de gank potentiel).

## Le tribush

Le **tribush** (buisson triangulaire) est crucial pour détecter les ganks venant de derrière. Côté bleu, il se situe près de votre tourelle. Côté rouge, il donne vision sur les ganks par le chemin de la jungle. Wardez-le quand vous jouez du côté correspondant.

## Les buissons de lane

Les **buissons de la lane** sont importants pour le contrôle de la zone. Wardez-les pour :
- Voir les mouvements de harcèlement du support ennemi
- Empêcher les embuscades
- Faciliter vos propres trades depuis les buissons

## La rotation des wards

Votre **Stealth Ward** a un cooldown. Gérez efficacement vos charges :
- **Minute 2-3** : Buisson rivière (protection gank)
- **Après premier back** : Achetez un Control Ward
- **Control Ward** : Tribush ou buisson de rivière pour vision permanente
- Renouvelez avant l'expiration de vos wards

## Récapitulatif

- **Buisson rivière** : ward prioritaire contre les ganks (2:45-3:00)
- **Tribush** : protection contre les ganks par derrière
- **Buissons de lane** : contrôle de zone et trades
- Achetez toujours un **Control Ward** après le premier back
- **Renouvelez** vos wards avant leur expiration`,

  // Practice Instructions
  `## Objectif

Maîtriser le placement des wards en phase de lane pour prévenir les ganks.

## Étapes

1. Lancez une partie en support
2. Placez votre première ward dans le buisson rivière avant 3:00
3. Achetez un Control Ward lors de votre premier back
4. Placez le Control Ward dans le tribush
5. Renouvelez la ward du buisson rivière toutes les 2 minutes
6. Notez chaque gank que vous avez vu venir grâce à vos wards

## Critère de réussite

Vous avez maintenu une vision constante sur au moins 2 des 3 spots clés (rivière, tribush, buisson lane) pendant toute la phase de lane, et vous n'avez pas été surpris par un gank.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le spot de ward prioritaire en début de partie ?",
      "Le tribush",
      "Le buisson de la rivière",
      "Le buisson de lane",
      "La jungle ennemie",
      'b',
      "Le buisson de la rivière couvre le chemin principal des ganks et doit être wardé en priorité."
    ),
    createQuestion(
      "À quelle minute devez-vous placer votre première ward rivière ?",
      "1:00-1:30",
      "2:45-3:00",
      "4:00-4:30",
      "5:00-5:30",
      'b',
      "La première ward rivière doit être placée vers 2:45-3:00, avant le premier timing de gank potentiel."
    ),
    createQuestion(
      "Que devez-vous acheter lors de votre premier back ?",
      "Un deuxième objet de soutien",
      "Un Control Ward",
      "Des bottes niveau 2",
      "Un composant AP/AD",
      'b',
      "Un Control Ward est essentiel pour maintenir une vision permanente sur un spot clé."
    ),
    createQuestion(
      "Pourquoi le tribush est-il important à warder ?",
      "Pour voir le dragon",
      "Pour détecter les ganks venant de derrière",
      "Pour voir le midlaner",
      "Pour compter les sbires",
      'b',
      "Le tribush révèle les ganks qui contournent la lane par l'arrière, une trajectoire commune des junglers."
    ),
    createQuestion(
      "Combien de temps dure une Stealth Ward ?",
      "60 secondes",
      "90 secondes",
      "120 secondes",
      "150 secondes",
      'b',
      "Une Stealth Ward dure 90 secondes avant de disparaître."
    ),
    createQuestion(
      "Où est-il recommandé de placer le Control Ward en lane ?",
      "Dans la base ennemie",
      "Dans le tribush ou buisson rivière",
      "Sous votre tourelle",
      "Dans la jungle alliée",
      'b',
      "Le Control Ward offre une vision permanente et doit être placé dans le tribush ou le buisson rivière."
    ),
    createQuestion(
      "Pourquoi warder les buissons de la lane ?",
      "Pour voir le jungler",
      "Pour contrôler la zone et les trades",
      "Pour compter les sbires",
      "Pour voir le dragon",
      'b',
      "Les buissons de lane wardés permettent de voir les mouvements ennemis et faciliter vos trades."
    ),
    createQuestion(
      "Que faire quand votre ward rivière est sur le point d'expirer ?",
      "Attendre qu'elle disparaisse",
      "Recall immédiatement",
      "La renouveler avant expiration",
      "Ignorer et jouer défensif",
      'c',
      "Renouvelez vos wards avant leur expiration pour maintenir une vision constante."
    ),
    createQuestion(
      "Quelle est la différence entre Control Ward et Stealth Ward ?",
      "La Control Ward est invisible",
      "La Control Ward est permanente et révèle les wards invisibles",
      "La Stealth Ward dure plus longtemps",
      "Elles sont identiques",
      'b',
      "La Control Ward est visible mais permanente et peut détecter les wards et champions invisibles."
    ),
    createQuestion(
      "Combien de charges de Stealth Ward pouvez-vous stocker maximum ?",
      "1 charge",
      "2 charges",
      "3 charges",
      "4 charges",
      'b',
      "Le trinket jaune (Stealth Ward) peut stocker jusqu'à 2 charges."
    ),
  ]
);
