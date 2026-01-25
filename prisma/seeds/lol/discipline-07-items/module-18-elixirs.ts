import { createModule, createQuestion } from '../utils';

export const module18Elixirs = createModule(
  'Élixirs de fin de partie',
  'elixirs',
  'Boosts temporaires pour le late game',
  18,
  // Theory Content
  `## Les élixirs

Les **élixirs** sont des consommables de **fin de partie** qui donnent des buffs temporaires puissants. Ils s'achètent quand on a tous ses objets ou beaucoup d'or.

## Quand acheter un élixir ?

Timing des élixirs :
- Quand vous avez **6 objets complets**
- Avant un **combat décisif** (Baron, Dragon, teamfight)
- Quand vous avez de l'**or en surplus**
- Niveau **9 minimum** pour les acheter

## Les différents élixirs

Il existe 4 élixirs :
- **Élixir de Colère** : +30 AD, 12% Lifesteal physique
- **Élixir de Sorcellerie** : +50 AP, True damage bonus
- **Élixir de Fer** : +300 PV, ralentit les ennemis
- **Élixir de la Peste** : +25% Tenacity, effets de mort

## Durée et coût

Caractéristiques :
- Coût : **500 or** chacun
- Durée : **3 minutes**
- Un seul élixir actif à la fois
- Se consomme à l'achat

## Quelle élixir choisir ?

Recommandations :
- **ADC/AD** : Élixir de Colère
- **Mage/AP** : Élixir de Sorcellerie
- **Tank** : Élixir de Fer
- Contre beaucoup de CC : Élixir de la Peste (tenacity)

## Récapitulatif

- Élixirs = buffs temporaires de late game
- Coûtent 500 or, durent 3 minutes
- Acheter quand full build ou avant fights importants
- Choisir selon votre champion
- Un seul actif à la fois`,

  // Practice Instructions
  `## Objectif

Savoir quand et quel élixir acheter.

## Étapes

1. Jouez une partie jusqu'au late game (full build)
2. Achetez l'élixir approprié à votre champion
3. Observez le buff temporaire (3 minutes)
4. Rachetez un élixir avant chaque combat majeur
5. Notez l'impact des stats bonus

## Critère de réussite

Vous pensez à acheter un élixir en late game et choisissez le bon.`,

  // Questions
  [
    createQuestion(
      "Quand devrait-on acheter un élixir ?",
      "En début de partie",
      "Quand on est full build ou avant un fight important",
      "Jamais",
      "Seulement en ranked",
      'b',
      "Les élixirs sont des achats de fin de partie quand on a de l'or en surplus."
    ),
    createQuestion(
      "Combien coûte un élixir ?",
      "250 or",
      "500 or",
      "750 or",
      "1000 or",
      'b',
      "Tous les élixirs coûtent 500 or."
    ),
    createQuestion(
      "Combien de temps dure un élixir ?",
      "1 minute",
      "3 minutes",
      "5 minutes",
      "Jusqu'à la mort",
      'b',
      "Les élixirs durent 3 minutes."
    ),
    createQuestion(
      "Quel élixir pour un ADC ?",
      "Élixir de Sorcellerie",
      "Élixir de Colère",
      "Élixir de Fer",
      "Élixir de la Peste",
      'b',
      "L'Élixir de Colère donne AD et lifesteal, parfait pour ADC."
    ),
    createQuestion(
      "Quel élixir pour un mage ?",
      "Élixir de Colère",
      "Élixir de Sorcellerie",
      "Élixir de Fer",
      "Élixir de la Peste",
      'b',
      "L'Élixir de Sorcellerie donne AP et dégâts vrais bonus."
    ),
    createQuestion(
      "Peut-on avoir plusieurs élixirs actifs ?",
      "Oui, tous",
      "Non, un seul à la fois",
      "Deux maximum",
      "Trois maximum",
      'b',
      "Un seul élixir peut être actif à la fois."
    ),
    createQuestion(
      "À partir de quel niveau peut-on acheter des élixirs ?",
      "Niveau 1",
      "Niveau 6",
      "Niveau 9",
      "Niveau 18",
      'c',
      "Les élixirs sont disponibles à partir du niveau 9."
    ),
    createQuestion(
      "L'Élixir de Fer est pour qui ?",
      "Les ADC",
      "Les Tanks",
      "Les Mages",
      "Les Assassins",
      'b',
      "L'Élixir de Fer donne des PV et un slow, idéal pour tanks."
    ),
    createQuestion(
      "Que donne l'Élixir de la Peste ?",
      "Du lifesteal",
      "De la Tenacity",
      "De l'AP",
      "De l'AD",
      'b',
      "L'Élixir de la Peste donne de la Tenacity contre les CC."
    ),
    createQuestion(
      "Les élixirs sont-ils remboursables ?",
      "Oui, 70%",
      "Non, ils se consomment à l'achat",
      "Oui, 100%",
      "Seulement avant de quitter la base",
      'b',
      "Les élixirs sont consommés immédiatement à l'achat."
    ),
  ]
);
