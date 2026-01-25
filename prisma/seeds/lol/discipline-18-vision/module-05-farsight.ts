import { createModule, createQuestion } from '../utils';

export const module05Farsight = createModule(
  'Orbe de clairvoyance (trinket bleu)',
  'farsight',
  'Utiliser le Farsight Alteration pour placer des wards à longue distance',
  5,
  // Theory Content (5+ slides)
  `## Qu'est-ce que l'Orbe de clairvoyance ?

L'**Orbe de clairvoyance** (Farsight Alteration ou "Trinket bleu") est un trinket qui permet de poser une ward visible à **très longue distance**. C'est l'outil idéal pour obtenir de la vision dans des zones dangereuses sans y aller physiquement.

## Caractéristiques du Farsight

- **Coût** : Gratuit (échange contre le Totem furtif)
- **Disponibilité** : Niveau 9 minimum requis
- **Portée** : Très longue (4000 unités)
- **Durée de la ward** : Permanente jusqu'à destruction
- **Visibilité** : La ward est visible par l'ennemi
- **Points de vie** : 1 seul (détruite en une attaque)

## Avantages du Farsight

Le principal avantage est la **sécurité** :
- Pas besoin de vous exposer pour warder
- Vérifiez si Baron/Dragon est en cours depuis loin
- Scouter la jungle ennemie sans risque
- Garder un oeil sur les objectifs depuis votre lane

La ward posée dure **indéfiniment** tant qu'elle n'est pas détruite.

## Inconvénients du Farsight

En contrepartie, les wards de Farsight sont **fragiles** :
- Visibles par l'ennemi (peuvent être facilement détruites)
- Seulement 1 point de vie
- Ne compte pas dans la limite de 3 Stealth Wards
- Vous ne pouvez plus poser de wards invisibles

## Qui devrait utiliser le Farsight ?

Le Farsight est recommandé pour :
- **ADC** : Trop fragiles pour warder des zones dangereuses
- **Midlaners mages** : Pour scout avant de s'aventurer
- **Toplaners** : En late game quand les splitpush sont risqués

Les Supports et Junglers préfèrent généralement l'Oracle Lens pour nettoyer la vision.`,

  // Practice Instructions
  `## Objectif

Apprendre à utiliser le Farsight pour obtenir de la vision en toute sécurité.

## Étapes

1. Lancez une partie en tant qu'ADC ou Midlaner
2. Au niveau 9, échangez votre Totem furtif contre l'Orbe de clairvoyance
3. Utilisez le Farsight pour vérifier le Baron ou le Dragon depuis loin
4. Placez des wards dans la jungle ennemie sans vous y aventurer
5. Avant de pousser une lane, wardez les bushes au loin avec le Farsight
6. Comptez combien de fois le Farsight vous a informé d'une présence ennemie

## Critère de réussite

Vous avez utilisé le Farsight au moins 8 fois pendant la partie pour obtenir de l'information sans vous mettre en danger, et évité au moins 2 situations dangereuses grâce à cette vision.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "À partir de quel niveau peut-on obtenir l'Orbe de clairvoyance ?",
      "Niveau 1",
      "Niveau 6",
      "Niveau 9",
      "Niveau 11",
      'c',
      "Le Farsight Alteration (Orbe de clairvoyance) n'est disponible qu'à partir du niveau 9."
    ),
    createQuestion(
      "Quelle est la particularité principale du Farsight ?",
      "Il révèle les champions invisibles",
      "Il permet de poser des wards à très longue distance",
      "Il détruit les wards ennemies",
      "Il donne des stats bonus",
      'b',
      "Le Farsight permet de poser une ward à 4000 unités de distance, bien plus loin que les autres trinkets."
    ),
    createQuestion(
      "Les wards posées par le Farsight sont-elles invisibles ?",
      "Oui, comme les Stealth Wards",
      "Non, elles sont visibles par l'ennemi",
      "Seulement pendant 30 secondes",
      "Cela dépend de la position",
      'b',
      "Les wards de Farsight sont toujours visibles par l'ennemi et peuvent être facilement détruites."
    ),
    createQuestion(
      "Combien de points de vie a une ward de Farsight ?",
      "1 point de vie",
      "2 points de vie",
      "3 points de vie",
      "4 points de vie",
      'a',
      "Les wards de Farsight n'ont qu'un seul point de vie et sont détruites en une seule attaque."
    ),
    createQuestion(
      "Quelle est la durée d'une ward posée par Farsight ?",
      "90 secondes",
      "120 secondes",
      "180 secondes",
      "Permanente jusqu'à destruction",
      'd',
      "Les wards de Farsight restent sur la carte indéfiniment tant qu'elles ne sont pas détruites."
    ),
    createQuestion(
      "Quel rôle bénéficie le plus du Farsight ?",
      "Support",
      "Jungler",
      "ADC",
      "Tank",
      'c',
      "Les ADC sont fragiles et le Farsight leur permet de warder sans s'exposer au danger."
    ),
    createQuestion(
      "Pourquoi le Farsight est-il utile pour vérifier le Baron ?",
      "Il détruit le Baron plus vite",
      "Il permet de voir si l'ennemi fait le Baron depuis loin",
      "Il donne un buff au Baron",
      "Il ralentit le Baron",
      'b',
      "Le Farsight permet de vérifier si l'ennemi tente le Baron sans s'approcher dangereusement."
    ),
    createQuestion(
      "Quel est le principal inconvénient du Farsight ?",
      "Il coûte cher",
      "Les wards sont visibles et facilement détruites",
      "Il a un très long cooldown",
      "Il ne donne pas de vision",
      'b',
      "Les wards de Farsight sont visibles avec 1 seul PV, donc très faciles à détruire pour l'ennemi."
    ),
    createQuestion(
      "Les wards de Farsight comptent-elles dans la limite de 3 Stealth Wards ?",
      "Oui, comme toutes les wards",
      "Non, elles ont leur propre limite",
      "Seulement après 60 secondes",
      "Cela dépend du champion",
      'b',
      "Les wards de Farsight ne comptent pas dans la limite de Stealth Wards car elles sont différentes."
    ),
    createQuestion(
      "Quand un ADC devrait-il échanger son trinket contre le Farsight ?",
      "Dès le niveau 1",
      "Au niveau 6",
      "Au niveau 9 quand il devient disponible",
      "Jamais",
      'c',
      "Les ADC échangent généralement leur trinket contre le Farsight dès le niveau 9."
    ),
  ]
);
