import { createModule, createQuestion } from '../utils';

export const module10AdvancedKiting = createModule(
  'Kiting avancé pour ADC',
  'advanced-kiting',
  'Maîtriser le stutter step et le attack move',
  10,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le kiting ?

Le **kiting** (ou orb walking) est la technique de mouvement entre les auto-attaques. C'est LA mécanique fondamentale de tout ADC. Elle permet de :

- **Maintenir la distance** avec les ennemis
- **Infliger des dégâts** tout en bougeant
- **Esquiver** les compétences
- **Poursuivre** les ennemis qui fuient

Un ADC qui ne kite pas correctement perdra énormément de DPS ou mourra inutilement.

## Le stutter step (pas chassé)

Le **stutter step** est le mouvement de base du kiting :

**La technique** :
1. Lancez une auto-attaque
2. Immédiatement après que le projectile part, **cliquez pour bouger**
3. Dès que l'auto est prête, **cliquez sur l'ennemi**
4. Répétez

**L'objectif** : Annuler l'animation de retour d'attaque pour bouger pendant ce temps.

**Erreur courante** : Bouger AVANT que le projectile parte = annulation de l'auto.

## L'Attack Move (A + clic)

L'**Attack Move** facilite le kiting :

**Comment l'utiliser** :
- Appuyez sur **A** puis cliquez au sol
- Votre champion attaquera la cible la plus proche
- Ou utilisez **Shift + clic droit** (Attack Move Click)

**Avantages** :
- Impossible de mal cliquer et walk vers l'ennemi
- Plus facile de target dans un teamfight chaotique
- Permet de kite en arrière sans regarder l'ennemi

**Inconvénient** : Attaque la cible la plus proche, pas forcément la bonne.

## Kiting vers l'arrière vs vers l'avant

**Kiting arrière** (le plus commun) :
- Utilisé quand l'ennemi avance vers vous
- Maintenez la distance de sécurité
- Crucial contre les bruisers et tanks

**Kiting avant** (chasing) :
- Quand l'ennemi fuit
- Avancez entre les auto-attaques
- Attention à ne pas vous surexposer

La direction dépend de la **situation tactique**.

## Récapitulatif

- Le **kiting** = bouger entre les auto-attaques
- **Stutter step** : auto → mouvement → auto
- **Attack Move** (A+clic) : facilite le targeting
- Kiting **arrière** pour maintenir la distance
- Kiting **avant** pour poursuivre
- **Pratiquez** cette mécanique quotidiennement`,

  // Practice Instructions
  `## Objectif

Maîtriser le stutter step et l'attack move en partie d'entraînement.

## Étapes

1. Lancez une partie d'entraînement avec Ashe (pas de dash)
2. Allez dans la jungle et pratiquez le kiting sur les camps
3. Utilisez A + clic gauche pour l'attack move
4. Essayez de tuer un camp sans prendre de dégâts en kiting
5. Augmentez la difficulté avec des champions plus rapides en attaque

## Critère de réussite

Vous pouvez tuer un camp de jungle (Gromp ou Wolves) en prenant moins de 2 coups grâce au kiting.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le kiting ?",
      "Une technique de farming",
      "Le mouvement entre les auto-attaques",
      "Un type de compétence",
      "Une stratégie d'équipe",
      'b',
      "Le kiting consiste à bouger entre les auto-attaques pour maintenir la distance."
    ),
    createQuestion(
      "Quel est le bon ordre pour le stutter step ?",
      "Bouger → Auto → Bouger",
      "Auto → Bouger → Auto",
      "Auto → Auto → Bouger",
      "Bouger → Bouger → Auto",
      'b',
      "Le stutter step : lancez l'auto, bougez, puis relancez l'auto."
    ),
    createQuestion(
      "Que se passe-t-il si vous bougez avant que le projectile parte ?",
      "Plus de dégâts",
      "L'auto-attaque est annulée",
      "Vitesse de mouvement augmentée",
      "Rien de particulier",
      'b',
      "Bouger trop tôt annule l'auto-attaque, vous perdez du DPS."
    ),
    createQuestion(
      "Quelle touche active l'Attack Move ?",
      "Q",
      "W",
      "A",
      "S",
      'c',
      "Par défaut, A + clic active l'Attack Move."
    ),
    createQuestion(
      "Quel est l'avantage de l'Attack Move ?",
      "Plus de dégâts",
      "Impossible de mal cliquer et marcher vers l'ennemi",
      "Vitesse d'attaque augmentée",
      "Régénération de mana",
      'b',
      "L'Attack Move évite le misclick qui vous ferait marcher vers le danger."
    ),
    createQuestion(
      "Quel est l'inconvénient de l'Attack Move ?",
      "Il est trop lent",
      "Il attaque la cible la plus proche, pas forcément la bonne",
      "Il utilise du mana",
      "Il a un cooldown",
      'b',
      "L'Attack Move cible automatiquement la cible la plus proche, ce qui peut être incorrect."
    ),
    createQuestion(
      "Quand utiliser le kiting arrière ?",
      "Quand vous chassez",
      "Quand l'ennemi avance vers vous",
      "Pendant le farm",
      "Au rappel",
      'b',
      "Le kiting arrière maintient la distance quand un ennemi (tank, bruiser) avance vers vous."
    ),
    createQuestion(
      "Quand utiliser le kiting avant ?",
      "Quand l'ennemi fuit",
      "Quand vous êtes en danger",
      "Pendant la phase de lane",
      "Jamais",
      'a',
      "Le kiting avant permet de poursuivre et finir les ennemis qui fuient."
    ),
    createQuestion(
      "Quelle est la mécanique fondamentale de tout ADC ?",
      "Le last-hit",
      "Le kiting",
      "Le roaming",
      "Le warding",
      'b',
      "Le kiting est LA mécanique fondamentale qui définit un bon ADC."
    ),
    createQuestion(
      "Pourquoi pratiquer le kiting sur les camps de jungle ?",
      "Pour gagner de l'XP",
      "Pour s'entraîner sans pression de combat",
      "Pour voler la jungle de l'ennemi",
      "Ce n'est pas recommandé",
      'b',
      "Les camps de jungle permettent de pratiquer le kiting dans un environnement contrôlé."
    ),
  ]
);
