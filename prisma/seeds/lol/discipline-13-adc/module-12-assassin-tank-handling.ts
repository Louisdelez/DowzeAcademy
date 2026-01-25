import { createModule, createQuestion } from '../utils';

export const module12AssassinTankHandling = createModule(
  'Gestion des assassins/tanks adverses',
  'assassin-tank-handling',
  'Sauvegarder Flash et gérer les menaces spécifiques',
  12,
  // Theory Content (5+ slides)
  `## Les deux menaces principales

En tant qu'ADC, vous affrontez deux types de menaces majeures :

**Les Assassins** :
- Objectif : vous one-shot
- Champions : Zed, Talon, Katarina, Kha'Zix, Rengar, Evelynn
- Danger : burst instantané, mobilité

**Les Tanks/Bruisers** :
- Objectif : vous zone ou vous CC
- Champions : Malphite, Ornn, Sett, Darius
- Danger : CC en chaîne, durabilité

La stratégie diffère pour chaque menace.

## Gérer les assassins

Face aux assassins, la **survie** est tout :

**Avant le fight** :
- Trackez leur position (sont-ils MIA ?)
- Restez **derrière** votre frontline
- Gardez Flash et votre dash

**Pendant le fight** :
- **Flash** leur combo initial
- Utilisez Heal/Barrière au bon moment
- Restez proche de votre support pour le peel

**Items défensifs** :
- Guardian Angel (résurrection)
- Immortal Shieldbow (bouclier)
- Edge of Night (spell shield)

## Gérer les tanks

Face aux tanks, c'est une **guerre d'usure** :

**Stratégie** :
- Ne paniquez pas, ils ne vous one-shot pas
- Kiting constant vers l'arrière
- Laissez-les venir à vous

**Items anti-tanks** :
- Lord Dominik's Regards (pénétration d'armure)
- Blade of the Ruined King (% PV)
- Cut Down (rune)

**Attention** : Même si les tanks ne vous tuent pas seuls, leur CC permet aux autres de vous atteindre.

## L'importance de Flash

**Flash** est votre outil de survie ultime :

**Quand le garder** :
- Assassin ennemi n'a pas utilisé son combo
- Engage important disponible (Malphite R)
- Vous n'avez pas de vision du danger

**Quand l'utiliser** :
- Pour esquiver un CC mortel
- Pour éviter un burst assassin
- Pour repositionner en urgence

**Erreur fatale** : Utiliser Flash agressivement et mourir au prochain engage.

## Récapitulatif

- **Assassins** : gardez vos escapes, flash leur burst, items défensifs
- **Tanks** : kiting constant, items anti-tanks, patience
- **Flash** = survie, ne l'utilisez pas agressivement
- Restez **derrière** votre frontline
- Demandez du **peel** à votre équipe`,

  // Practice Instructions
  `## Objectif

Apprendre à gérer les menaces assassins et tanks en gardant votre Flash.

## Étapes

1. Avant la partie, identifiez si l'équipe ennemie a des assassins ou tanks
2. Adaptez vos items en conséquence (défensif vs anti-tank)
3. En teamfight, gardez consciemment votre Flash pour les urgences
4. Notez chaque fois que vous mourez avec Flash disponible (erreur)
5. Analysez si vous auriez pu survivre avec un meilleur timing

## Critère de réussite

Vous avez survécu à au moins une attaque d'assassin en utilisant Flash au bon moment.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est l'objectif principal d'un assassin contre l'ADC ?",
      "Le zone hors du fight",
      "Le one-shot rapidement",
      "Le CC pendant longtemps",
      "Voler son farm",
      'b',
      "Les assassins cherchent à éliminer l'ADC avec leur burst rapide."
    ),
    createQuestion(
      "Comment se préparer face à un assassin avant le fight ?",
      "Aller devant le frontline",
      "Rester derrière le frontline et garder Flash",
      "Utiliser Flash pour s'approcher",
      "Ignorer sa position",
      'b',
      "Face aux assassins, restez en sécurité et conservez vos escapes."
    ),
    createQuestion(
      "Quel item offre une résurrection ?",
      "Immortal Shieldbow",
      "Guardian Angel",
      "Edge of Night",
      "Lord Dominik's Regards",
      'b',
      "Guardian Angel vous ressuscite après la mort, idéal contre les assassins."
    ),
    createQuestion(
      "Comment gérer les tanks en tant qu'ADC ?",
      "Les ignorer complètement",
      "Kiting constant vers l'arrière",
      "Plonger sur le carry derrière eux",
      "Les focus en premier à tout prix",
      'b',
      "Face aux tanks, le kiting permet de maintenir la distance tout en infligeant des dégâts."
    ),
    createQuestion(
      "Quel item est efficace contre les tanks ?",
      "Guardian Angel",
      "Lord Dominik's Regards",
      "Edge of Night",
      "Boots of Swiftness",
      'b',
      "Lord Dominik's Regards offre de la pénétration d'armure efficace contre les tanks."
    ),
    createQuestion(
      "Pourquoi les tanks sont-ils dangereux même s'ils ne one-shot pas ?",
      "Ils font beaucoup de dégâts",
      "Leur CC permet aux autres de vous atteindre",
      "Ils volent votre farm",
      "Ils détruisent les objectifs",
      'b',
      "Le CC des tanks ouvre la porte aux dégâts des carries ennemis."
    ),
    createQuestion(
      "Quand devez-vous garder votre Flash ?",
      "Quand vous gagnez facilement",
      "Quand l'assassin n'a pas utilisé son combo",
      "Jamais, utilisez-le toujours agressivement",
      "Quand vous êtes seul en lane",
      'b',
      "Gardez Flash tant que la menace d'assassin ou d'engage existe."
    ),
    createQuestion(
      "Quelle est une erreur fatale avec Flash ?",
      "L'utiliser pour esquiver",
      "L'utiliser agressivement et mourir au prochain engage",
      "Le garder trop longtemps",
      "L'utiliser pour fuir",
      'b',
      "Utiliser Flash agressivement vous laisse vulnérable aux prochaines menaces."
    ),
    createQuestion(
      "Quel sort d'invocateur aide contre le burst assassin ?",
      "Ignite",
      "Barrière",
      "Teleport",
      "Ghost",
      'b',
      "Barrière offre un bouclier temporaire qui peut absorber le burst d'un assassin."
    ),
    createQuestion(
      "Que devez-vous demander à votre équipe face aux assassins ?",
      "De vous ignorer",
      "Du peel (protection)",
      "De focus le tank",
      "De split push",
      'b',
      "Demander du peel aide votre équipe à vous protéger des assassins."
    ),
  ]
);
