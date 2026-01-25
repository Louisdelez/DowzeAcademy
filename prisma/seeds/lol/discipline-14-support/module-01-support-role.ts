import { createModule, createQuestion } from '../utils';

export const module01SupportRole = createModule(
  'Rôle du support',
  'support-role',
  'Comprendre le rôle unique du support : assister sans farmer',
  1,
  // Theory Content (5+ slides)
  `## Le rôle unique du support

Le **support** est un rôle fondamental dans League of Legends. Contrairement aux autres positions, le support ne cherche pas à accumuler de l'or via les sbires. Sa mission principale est d'**assister son équipe**, en particulier l'ADC en début de partie.

## Assister sans farmer

Le support laisse **tous les last hits** à son ADC. Son or provient de son objet de soutien, des assists et de l'or passif. Cette approche permet à l'ADC d'atteindre plus rapidement ses pics de puissance tout en gardant le support utile grâce à ses sorts.

## Les responsabilités principales

En tant que support, vous devez :
- **Protéger l'ADC** contre les engagements ennemis
- **Contrôler la vision** avec vos wards
- **Harceler les ennemis** pour créer de la pression
- **Engager ou peel** selon votre champion
- **Communiquer** les informations importantes à l'équipe

## L'impact sans les ressources

Bien que le support ait moins d'or, son **impact** reste considérable. Les sorts de contrôle de foule (CC), les boucliers, les soins et la vision qu'il apporte peuvent faire la différence entre une victoire et une défaite.

## Le support en tant que leader de la vision

Le support est responsable de **60-70% de la vision** de l'équipe. Avec ses wards et son oracle, il éclaire les zones clés de la carte, permettant à son équipe de prendre des décisions éclairées et d'éviter les embuscades.

## Récapitulatif

- Le support **ne farm pas** les sbires
- Son or vient de l'**objet de soutien** et des **assists**
- Il **protège** l'ADC et **contrôle la vision**
- Son impact vient de ses **sorts utilitaires**, pas de ses dégâts
- C'est le **leader de la vision** de l'équipe`,

  // Practice Instructions
  `## Objectif

Jouer une partie en support en se concentrant sur l'assistance sans prendre de farm.

## Étapes

1. Lancez une partie normale ou classée en position support
2. Choisissez un support classique (Lulu, Thresh, Nautilus, etc.)
3. En lane, ne tuez AUCUN sbire (sauf avec l'objet de soutien si Targon)
4. Concentrez-vous sur le harcèlement des ennemis entre les vagues
5. Placez au minimum 10 wards dans les 15 premières minutes
6. Comptez vos assists à la fin de la partie

## Critère de réussite

Vous avez terminé la partie avec moins de 20 CS total et au moins 5 assists, tout en ayant placé plus de 15 wards.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la principale source d'or du support ?",
      "Le farm des sbires",
      "L'objet de soutien et les assists",
      "Les kills sur les champions",
      "Les monstres de la jungle",
      'b',
      "Le support génère son or via son objet de soutien à quête et les assists sur les kills de son équipe."
    ),
    createQuestion(
      "Pourquoi le support ne farm-t-il pas les sbires ?",
      "Parce qu'il n'a pas assez de dégâts",
      "Pour laisser tout l'or à l'ADC",
      "Parce que c'est interdit par les règles",
      "Pour économiser son mana",
      'b',
      "Le support laisse le farm à l'ADC pour qu'il atteigne plus rapidement ses pics de puissance."
    ),
    createQuestion(
      "Quel pourcentage de la vision le support fournit-il généralement ?",
      "20-30%",
      "40-50%",
      "60-70%",
      "80-90%",
      'c',
      "Le support est responsable de 60-70% de la vision de l'équipe grâce à ses wards et son oracle."
    ),
    createQuestion(
      "Quelle n'est PAS une responsabilité principale du support ?",
      "Protéger l'ADC",
      "Contrôler la vision",
      "Farmer les sbires pour avoir de l'or",
      "Harceler les ennemis",
      'c',
      "Le support ne farm pas les sbires, c'est la responsabilité de l'ADC."
    ),
    createQuestion(
      "Comment le support reste-t-il impactant malgré son manque d'or ?",
      "En farmant la jungle",
      "Grâce à ses sorts utilitaires (CC, boucliers, soins)",
      "En volant les kills de l'ADC",
      "En achetant des objets moins chers",
      'b',
      "L'impact du support vient de ses sorts de contrôle, boucliers et soins, pas de ses dégâts bruts."
    ),
    createQuestion(
      "Qui le support doit-il principalement protéger en début de partie ?",
      "Le jungler",
      "Le midlaner",
      "L'ADC",
      "Le toplaner",
      'c',
      "En début de partie, le support partage la lane avec l'ADC et doit le protéger."
    ),
    createQuestion(
      "Qu'est-ce que le 'peel' dans le contexte du support ?",
      "Engager sur les ennemis",
      "Protéger un allié des menaces",
      "Farmer les sbires",
      "Placer des wards",
      'b',
      "Le peel consiste à utiliser ses sorts pour éloigner les menaces de ses alliés fragiles."
    ),
    createQuestion(
      "Quel item permet au support de générer de l'or sans farmer ?",
      "Doran's Blade",
      "L'objet de soutien à quête",
      "Bottes de mobilité",
      "Gardien de contrôle",
      'b',
      "L'objet de soutien à quête (Spellthief ou Targon) génère de l'or via ses mécaniques spéciales."
    ),
    createQuestion(
      "Que doit faire le support entre les vagues de sbires ?",
      "Retourner à la base",
      "Harceler les ennemis",
      "Farmer la jungle",
      "Attendre passivement",
      'b',
      "Entre les vagues, le support doit exercer de la pression en harcelant les ennemis."
    ),
    createQuestion(
      "Quel est l'objectif principal d'un support en teamfight ?",
      "Faire le plus de dégâts possible",
      "Farmer les sbires à côté",
      "Protéger ses carries et utiliser ses CC efficacement",
      "Se cacher et survivre",
      'c',
      "En teamfight, le support doit protéger ses carries et placer ses contrôles de foule au bon moment."
    ),
  ]
);
