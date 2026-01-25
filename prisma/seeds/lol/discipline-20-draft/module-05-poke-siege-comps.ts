import { createModule, createQuestion } from '../utils';

export const module05PokeSiegeComps = createModule(
  'Compositions poke & siège',
  'poke-siege-comps',
  'Maîtriser les stratégies de harcèlement à longue portée et de siège de tourelles',
  5,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'une composition poke ?

Une **composition poke** repose sur des champions capables de **harceler à distance** sans s'engager directement. L'objectif est de diminuer progressivement la santé des ennemis jusqu'à créer une opportunité de combat favorable ou de prise d'objectif.

## Champions typiques de poke

Les champions de poke ont des **compétences à longue portée** et à faible cooldown :

- **Mid** : Xerath, Ziggs, Lux, Vel'Koz, Jayce
- **ADC** : Ezreal, Varus, Caitlyn, Jhin
- **Support** : Karma, Zyra, Xerath
- **Top** : Jayce, Gangplank (barrels)
- **Jungle** : Nidalee (spears)

Ces champions partagent la capacité d'infliger des dégâts **sans prendre de risque**.

## La stratégie de siège

Le **siège** est l'application du poke aux tourelles :
1. L'équipe se regroupe devant une tourelle ennemie
2. Les champions de poke harcèlent les défenseurs
3. Quand les ennemis sont trop low pour défendre, on prend la tourelle
4. On avance vers la prochaine tourelle

**Clés du succès** :
- Vision dans la jungle ennemie pour éviter les flancs
- Baron buff = siège ultime (bonus de dégâts sur les structures)

## Forces et faiblesses du poke

**Forces** :
- Peut gagner sans jamais engager un vrai combat
- Contrôle le tempo et les objectifs
- Excellente avec Baron buff
- Force l'ennemi à s'engager dans de mauvaises conditions

**Faiblesses** :
- Vulnérable aux engages durs (Malphite, Leona)
- Difficile si l'ennemi a beaucoup de sustain (Soraka, Yuumi)
- Requiert une excellente gestion de la vision
- Les skillshots doivent toucher pour être efficaces

## Comment jouer une composition poke/siège ?

**En phase de lane** :
- Harcelez constamment, accumulez des avantages de CS et pression

**En mid-game** :
- Regroupez-vous pour faire tomber les tourelles
- Utilisez le Rift Herald pour créer de la pression

**En late-game** :
- Baron + siège = combo dévastateur
- Continuez à poke jusqu'à ce qu'ils soient trop faibles pour défendre
- Si l'ennemi engage, kite vers l'arrière

## Comment contrer une composition poke ?

**Contre-stratégies** :
1. **Engage dur** : Malphite, Ornn, Leona peuvent forcer le combat
2. **Sustain** : Soraka, Yuumi annulent les dégâts de poke
3. **Flanks** : Contournez et attaquez par derrière
4. **Split-push** : Ne leur donnez pas une cible groupée à poke
5. **Disengage propre** : Janna, Gragas peuvent repousser les engages

## Récapitulatif

- Le poke consiste à harceler à distance sans s'engager
- Le siège utilise le poke pour prendre des tourelles
- Xerath, Ziggs, Jayce, Ezreal sont des champions de poke classiques
- Baron buff amplifie massivement le siège
- Contrez avec engage, sustain ou split-push`,

  // Practice Instructions
  `## Objectif

Expérimenter une composition poke/siège pour comprendre le rythme et les décisions de cette stratégie.

## Étapes

1. En normale, choisissez un champion de poke (Xerath, Ziggs, Ezreal, Varus)
2. Pendant la lane, concentrez-vous sur le harcèlement avec vos skillshots
3. Après 15 minutes, essayez de regrouper votre équipe pour siéger une tourelle
4. Pendant le siège, continuez à poke pour affaiblir les défenseurs
5. Notez les moments où vous avez réussi à prendre une tourelle grâce au poke

## Critère de réussite

Vous avez participé à au moins un siège réussi où le poke a forcé l'ennemi à céder une tourelle.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le poke dans League of Legends ?",
      "Une stratégie d'assassinat",
      "Le harcèlement à distance sans engagement direct",
      "Un type de contrôle de foule",
      "Une technique de farm",
      'b',
      "Le poke consiste à infliger des dégâts à distance avec des compétences à longue portée sans prendre de risque."
    ),
    createQuestion(
      "Quel champion est le plus emblématique du poke ?",
      "Zed",
      "Xerath",
      "Garen",
      "Master Yi",
      'b',
      "Xerath est l'archétype du mage poke avec ses compétences à très longue portée et son ultime global."
    ),
    createQuestion(
      "Qu'est-ce qu'un siège dans le contexte du poke ?",
      "Une stratégie défensive",
      "L'utilisation du poke pour prendre des tourelles en affaiblissant les défenseurs",
      "Une technique de jungle",
      "Un type de combat d'équipe",
      'b',
      "Le siège combine poke et pression sur les tourelles pour progresser sur la carte."
    ),
    createQuestion(
      "Pourquoi le Baron buff est-il particulièrement efficace avec une composition poke ?",
      "Il donne plus de dégâts de poke",
      "Il renforce le siège avec des bonus de dégâts sur les structures",
      "Il permet de prendre des risques",
      "Il augmente la portée des compétences",
      'b',
      "Le Baron buff donne des bonus de dégâts sur les structures, rendant le siège encore plus efficace."
    ),
    createQuestion(
      "Quelle est une faiblesse majeure des compositions poke ?",
      "Elles manquent de dégâts",
      "Elles sont vulnérables aux engages durs comme Malphite ou Leona",
      "Elles ne peuvent pas prendre d'objectifs",
      "Elles sont faibles en late game",
      'b',
      "Une composition poke peut être détruite si l'ennemi réussit à forcer un combat avec un engage puissant."
    ),
    createQuestion(
      "Comment contrer une composition poke ?",
      "En fuyant constamment",
      "Avec des engages durs ou des champions de sustain",
      "En jouant passivement",
      "En farmant la jungle",
      'b',
      "Les engages (Malphite, Ornn) forcent le combat, et le sustain (Soraka) annule les dégâts de poke."
    ),
    createQuestion(
      "Quelle composition représente bien le poke/siège ?",
      "Ornn, Jarvan, Galio, Kai'Sa, Rakan",
      "Jayce, Nidalee, Xerath, Ezreal, Karma",
      "Fiora, Lee Sin, Zed, Vayne, Thresh",
      "Malphite, Sejuani, Orianna, Miss Fortune, Leona",
      'b',
      "Jayce, Nidalee, Xerath, Ezreal et Karma ont tous des compétences de harcèlement à longue portée."
    ),
    createQuestion(
      "Pourquoi la vision est-elle cruciale pour une composition poke ?",
      "Pour farm les camps neutres",
      "Pour éviter les flanks et les engages surprises pendant le siège",
      "Pour voir les skillshots ennemis",
      "Ce n'est pas vraiment important",
      'b',
      "Pendant un siège, une bonne vision empêche l'ennemi de flanquer et de surprendre l'équipe de poke."
    ),
    createQuestion(
      "Que doit faire une équipe poke si l'ennemi engage ?",
      "Contre-engager immédiatement",
      "Kite vers l'arrière tout en continuant à poke",
      "Se disperser",
      "Forcer le Baron",
      'b',
      "Une équipe poke doit reculer tout en continuant à infliger des dégâts, utilisant sa portée supérieure."
    ),
    createQuestion(
      "Pourquoi le split-push est-il efficace contre le poke ?",
      "Il permet de faire plus de dégâts",
      "Il ne donne pas de cible groupée à harceler",
      "Il augmente la portée",
      "Il contrecarre le Baron",
      'b',
      "Le split-push force l'équipe de poke à se séparer, annulant leur capacité à siéger ensemble."
    ),
  ]
);
