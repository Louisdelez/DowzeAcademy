import { createModule, createQuestion } from '../utils';

export const module01AdcRole = createModule(
  "Rôle de l'ADC",
  'adc-role',
  "Comprendre le rôle de l'ADC : dégâts physiques continus et carry potentiel",
  1,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un ADC ?

L'**ADC** (Attack Damage Carry) est le rôle dédié aux **dégâts physiques continus** dans League of Legends. Positionné en **bot lane** avec un support, l'ADC est responsable de fournir la majorité des dégâts physiques de l'équipe en fin de partie.

Le terme "Carry" signifie que ce rôle a le potentiel de **porter son équipe vers la victoire** grâce à ses dégâts soutenus.

## La mécanique des auto-attaques

Contrairement aux autres rôles qui dépendent principalement de leurs compétences, l'ADC tire sa puissance de ses **auto-attaques**. Les champions ADC ont généralement :

- Une **portée d'attaque élevée** (550+ unités)
- Un **scaling AD** (dégâts d'attaque) important
- Des compétences qui **amplifient leurs auto-attaques**
- Une vitesse d'attaque qui augmente avec les objets

## Le scaling et le late game

L'ADC est un rôle de **scaling** : faible en début de partie, il devient extrêmement puissant avec les objets. C'est pourquoi :

- Le **farm** est prioritaire en early game
- L'ADC évite les combats risqués avant d'avoir ses objets clés
- En late game, l'ADC peut **fondre** les tanks et structures rapidement
- Le positionnement devient crucial car l'ADC est fragile

## Les responsabilités de l'ADC

En tant qu'ADC, vos responsabilités principales sont :

1. **Farmer efficacement** pour atteindre vos pics de puissance
2. **Infliger des dégâts soutenus** en teamfight
3. **Détruire les objectifs** (tourelles, Dragon, Baron, Nexus)
4. **Rester en vie** pour maximiser votre impact
5. **Coordonner avec votre support** en phase de lane

## Récapitulatif

- **ADC** = Attack Damage Carry, dégâts physiques continus
- Rôle basé sur les **auto-attaques** et le **scaling**
- Faible en early, très fort en **late game**
- Priorité au **farm** et au **positionnement**
- Dépendant du **support** pour survivre en lane`,

  // Practice Instructions
  `## Objectif

Comprendre les bases du rôle ADC en observant et pratiquant les auto-attaques sur les sbires.

## Étapes

1. Lancez une partie d'entraînement avec un champion ADC (Ashe recommandée)
2. Allez en bot lane et concentrez-vous sur le last-hit des sbires
3. Observez la portée de vos auto-attaques par rapport aux sbires
4. Pratiquez le timing des auto-attaques pour obtenir les derniers coups
5. Notez combien d'or vous gagnez après 5 minutes de farm

## Critère de réussite

Vous comprenez que l'ADC dépend des auto-attaques pour ses dégâts et avez réussi à last-hit au moins 30 sbires en 5 minutes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Que signifie l'acronyme ADC ?",
      "Attack Damage Champion",
      "Attack Damage Carry",
      "Ability Damage Carry",
      "Advanced Damage Character",
      'b',
      "ADC signifie Attack Damage Carry, un rôle qui porte l'équipe grâce aux dégâts physiques."
    ),
    createQuestion(
      "Quelle est la principale source de dégâts d'un ADC ?",
      "Les compétences magiques",
      "Les invocations d'alliés",
      "Les auto-attaques",
      "Les objets actifs",
      'c',
      "L'ADC tire sa puissance principalement de ses auto-attaques continues."
    ),
    createQuestion(
      "À quel moment de la partie l'ADC est-il généralement le plus fort ?",
      "En early game (0-10 min)",
      "En mid game (10-20 min)",
      "En late game (30+ min)",
      "Dès le niveau 1",
      'c',
      "L'ADC est un rôle de scaling qui devient très puissant en late game avec ses objets."
    ),
    createQuestion(
      "Avec qui l'ADC partage-t-il la bot lane ?",
      "Le jungler",
      "Le mid laner",
      "Le top laner",
      "Le support",
      'd',
      "L'ADC joue en duo avec le support en bot lane."
    ),
    createQuestion(
      "Pourquoi le farm est-il si important pour l'ADC ?",
      "Pour gagner de l'expérience rapidement",
      "Pour acheter des objets et devenir puissant",
      "Pour pousser les lanes",
      "Pour aider le jungler",
      'b',
      "Le farm permet à l'ADC d'accumuler l'or nécessaire pour ses objets de scaling."
    ),
    createQuestion(
      "Quelle caractéristique différencie les champions ADC des autres rôles ?",
      "Ils ont plus de points de vie",
      "Ils ont une grande portée d'attaque",
      "Ils sont plus résistants",
      "Ils ont plus de contrôle de foule",
      'b',
      "Les ADC ont généralement une grande portée d'attaque (550+ unités) pour attaquer à distance."
    ),
    createQuestion(
      "Que signifie 'scaling' pour un ADC ?",
      "Monter en niveau rapidement",
      "Devenir plus fort avec le temps et les objets",
      "Gagner de la vitesse de déplacement",
      "Améliorer ses compétences",
      'b',
      "Le scaling signifie que l'ADC devient progressivement plus puissant au fil de la partie."
    ),
    createQuestion(
      "Pourquoi l'ADC est-il considéré comme fragile ?",
      "Il a peu de points de vie et d'armure",
      "Ses compétences sont faibles",
      "Il ne peut pas attaquer",
      "Il est lent",
      'a',
      "Les ADC ont peu de résistances et de PV, les rendant vulnérables aux assassins et burst."
    ),
    createQuestion(
      "Quel objectif l'ADC peut-il détruire rapidement grâce à ses dégâts ?",
      "Les wards uniquement",
      "Les tourelles et le Nexus",
      "Uniquement les sbires",
      "Le Baron Nashor seul",
      'b',
      "Grâce à ses dégâts physiques soutenus, l'ADC est efficace pour détruire les structures."
    ),
    createQuestion(
      "Quelle est la priorité principale d'un ADC en early game ?",
      "Tuer l'ADC ennemi à tout prix",
      "Aider le jungler dans sa jungle",
      "Farmer et éviter les combats risqués",
      "Roamer sur les autres lanes",
      'c',
      "En early game, l'ADC doit farmer efficacement et éviter de mourir pour atteindre ses pics de puissance."
    ),
  ]
);
