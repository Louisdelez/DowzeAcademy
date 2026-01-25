import { createModule, createQuestion } from '../utils';

export const module07MidVision = createModule(
  "Vision pour le mid",
  'mid-vision',
  'Warder les buissons et contrôler l\'information',
  7,
  // Theory Content (5+ slides)
  `## L'importance de la vision en mid

En mid lane, la **vision** est votre meilleur outil de survie. Contrairement aux lanes latérales qui n'ont qu'un angle de gank, le mid peut être attaqué des **deux côtés**.

Une bonne vision vous permet de :
- **Éviter les ganks** du jungler
- **Tracker** les rotations ennemies
- **Jouer agressivement** en sécurité
- **Informer votre équipe** des mouvements ennemis

## Les spots de ward essentiels

Il existe plusieurs **spots de ward** importants pour le mid :

**Côté rivière (priorité)** :
- Buisson pixel (près du mur Dragon/Baron)
- Entrée de la rivière des deux côtés

**Côté jungle ennemie** :
- Entrée des raptors
- Bush près du blue buff ennemi

**Côté jungle alliée** :
- Quand vous êtes pushed
- Pour protéger votre jungler

**Règle** : Wardez toujours le côté d'où le jungler ennemi est susceptible de venir.

## Quand placer ses wards

Le **timing** des wards est crucial :

- **2:30-3:00** : Le jungler ennemi peut commencer à gank
- **Après un back** : Reposez votre ward si elle a expiré
- **Avant de push** : Wardez avant de jouer agressivement
- **Quand vous avez la prio** : Profitez pour placer des wards profonds

**Conseil** : Regardez votre minimap toutes les 2-3 secondes pour exploiter votre vision.

## Les control wards en mid

Les **control wards** (wards roses) sont essentielles en mid :

**Emplacements recommandés** :
- Buisson pixel de votre côté
- Entrée de votre jungle
- Dans un bush de la rivière

**Avantages** :
- Durée illimitée (jusqu'à destruction)
- Révèle les wards ennemies
- Deny la vision adverse

**Investissement** : Achetez une control ward à chaque back si possible.

## Récapitulatif

- La **vision** protège des ganks venant des deux côtés
- Wardez la **rivière** et les **entrées de jungle**
- Placez des wards vers **2:30-3:00** (premiers ganks possibles)
- Les **control wards** sont un investissement crucial
- Regardez votre **minimap** régulièrement
- Wardez le côté où le **jungler ennemi** est probable`,

  // Practice Instructions
  `## Objectif

Apprendre les spots de ward essentiels en mid lane et développer l'habitude de warder.

## Étapes

1. Lancez une partie personnalisée sans bots
2. Allez en mid lane avec des wards
3. Identifiez et wardez ces 6 spots essentiels :
   - Pixel bush côté Dragon
   - Pixel bush côté Baron
   - Entrée rivière sud
   - Entrée rivière nord
   - Entrée raptors côté bleu
   - Entrée raptors côté rouge
4. Prenez une screenshot ou notez les positions
5. Lancez une partie contre des bots
6. Pratiquez ce cycle :
   - Ward la rivière au 2:30
   - Renouvelez après chaque back
   - Posez une control ward au pixel bush de votre côté
7. Regardez la minimap toutes les 3 secondes (utilisez un timer mental)

## Critère de réussite

Vous pouvez nommer et placer correctement au moins 4 spots de ward essentiels en mid et avez développé l'habitude de renouveler vos wards après chaque back.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la vision est-elle particulièrement importante en mid lane ?",
      "Elle n'est pas plus importante qu'ailleurs",
      "Parce que le mid peut être ganké des deux côtés de la rivière",
      "Parce que le mid n'a pas de tourelle",
      "Parce que le jungler ne peut pas ganker mid",
      'b',
      "Le mid lane a deux angles de gank (nord et sud), rendant la vision doublement importante."
    ),
    createQuestion(
      "À partir de quand devez-vous commencer à warder en mid lane ?",
      "Dès le niveau 1",
      "Vers 2:30-3:00, quand le jungler ennemi peut commencer à gank",
      "Seulement en late game",
      "Jamais, c'est le job du support",
      'b',
      "Les premiers ganks mid sont possibles vers 2:30-3:00 selon le clear du jungler."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'pixel bush' ?",
      "Un bug visuel du jeu",
      "Le petit buisson près du mur de la rivière, spot de ward populaire",
      "Un élément de décor sans importance",
      "Un buisson dans la base",
      'b',
      "Le pixel bush est un spot de ward stratégique près des murs de la rivière."
    ),
    createQuestion(
      "Quel avantage unique offrent les control wards ?",
      "Elles durent 60 secondes",
      "Elles sont invisibles",
      "Elles durent indéfiniment et révèlent les wards ennemies",
      "Elles donnent de la vision sur toute la carte",
      'c',
      "Les control wards durent jusqu'à leur destruction et désactivent/révèlent les wards ennemies."
    ),
    createQuestion(
      "Où placer généralement votre control ward en mid lane ?",
      "Sous votre tour",
      "Dans le pixel bush de votre côté de la rivière",
      "Dans la base ennemie",
      "Nulle part, ce n'est pas utile",
      'b',
      "Le pixel bush de votre côté est sécurisé et fournit une vision durable de la rivière."
    ),
    createQuestion(
      "À quelle fréquence devez-vous regarder votre minimap ?",
      "Une fois par minute",
      "Toutes les 2-3 secondes",
      "Jamais pendant le laning",
      "Uniquement après un kill",
      'b',
      "Regarder la minimap toutes les 2-3 secondes permet de réagir rapidement aux mouvements ennemis."
    ),
    createQuestion(
      "Quand devez-vous renouveler votre ward en mid ?",
      "Jamais",
      "Après chaque back si elle a expiré",
      "Uniquement quand vous mourez",
      "Une fois par partie",
      'b',
      "Après chaque retour à la base, vérifiez si votre ward a expiré et replacez-en une."
    ),
    createQuestion(
      "Si vous êtes pushed sous votre tour, où devriez-vous warder ?",
      "Dans la jungle ennemie",
      "L'entrée de votre propre jungle pour éviter les dives",
      "Nulle part",
      "Sous la tour ennemie",
      'b',
      "Quand vous êtes pushed, wardez votre jungle pour voir les dives potentiels."
    ),
    createQuestion(
      "Pourquoi warder avant de jouer agressivement ?",
      "Ce n'est pas nécessaire",
      "Pour s'assurer qu'aucun ennemi ne vient vous punir pendant votre agression",
      "Pour faire plus de dégâts",
      "Pour avoir plus de mana",
      'b',
      "La vision vous assure que vous êtes safe avant de prendre des trades agressifs."
    ),
    createQuestion(
      "Qu'est-ce qu'une 'ward profonde' ?",
      "Une ward dans votre base",
      "Une ward placée loin dans la jungle ennemie pour tracker",
      "Une ward enterrée",
      "Une ward invisible",
      'b',
      "Une ward profonde est placée dans le territoire ennemi pour obtenir des informations sur leurs mouvements."
    ),
  ]
);
