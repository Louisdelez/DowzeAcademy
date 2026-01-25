import { createModule, createQuestion } from '../utils';

export const module07Boots = createModule(
  'Bottes (chaussures)',
  'boots',
  'Vitesse de déplacement et bottes améliorées',
  7,
  // Theory Content
  `## L'importance des bottes

Les **bottes** augmentent votre vitesse de déplacement. C'est l'un des premiers achats essentiels pour tous les champions.

## Bottes de base

Les **Bottes** de base :
- Coût : **300 or**
- +25 vitesse de déplacement
- Se mettent à niveau en bottes améliorées
- Premier achat souvent fait au premier back

## Bottes améliorées

6 types de bottes améliorées :
- **Bottes de Berserker** : +35% vitesse d'attaque (ADC)
- **Chaussures de sorcier** : +18 pénétration magique (mages)
- **Bottes de Mercure** : +25 RM + Tenacity (contre CC/AP)
- **Tabi ninja** : +20 Armure + réduction dégâts auto (contre AD)
- **Bottes de lucidité** : +20 Ability Haste (cooldown)
- **Bottes de mobilité** : Grande vitesse hors combat (roam)

## Quand acheter les bottes ?

Timing recommandé :
- Bottes de base : **Premier ou deuxième back**
- Bottes améliorées : Après le premier objet ou en priorité si matchup difficile

## Choix selon le rôle

Recommandations :
- **ADC** : Berserker
- **Mage** : Sorcier ou Lucidité
- **Tank** : Mercure ou Tabi selon l'ennemi
- **Roamer** : Mobilité

## Récapitulatif

- Bottes = vitesse de déplacement essentielle
- 6 types de bottes améliorées
- Choisir selon le rôle et le matchup
- Contre CC = Mercure, contre AD = Tabi
- Acheter tôt dans la partie`,

  // Practice Instructions
  `## Objectif

Choisir les bonnes bottes selon la situation.

## Étapes

1. Achetez les bottes de base au premier back
2. Jouez un ADC et achetez des Berserker
3. Jouez un mage et achetez des Sorcier
4. Contre une équipe CC, essayez les Mercure
5. Contre beaucoup d'AD, essayez les Tabi

## Critère de réussite

Vous savez quelles bottes acheter selon votre champion et l'ennemi.`,

  // Questions
  [
    createQuestion(
      "Combien coûtent les bottes de base ?",
      "200 or",
      "300 or",
      "400 or",
      "500 or",
      'b',
      "Les bottes de base coûtent 300 or."
    ),
    createQuestion(
      "Quelles bottes prend généralement un ADC ?",
      "Tabi ninja",
      "Bottes de Berserker",
      "Chaussures de sorcier",
      "Bottes de mobilité",
      'b',
      "Les ADC prennent Berserker pour la vitesse d'attaque."
    ),
    createQuestion(
      "Quelles bottes prend généralement un mage ?",
      "Berserker",
      "Chaussures de sorcier",
      "Tabi ninja",
      "Bottes de mobilité",
      'b',
      "Les mages prennent Sorcier pour la pénétration magique."
    ),
    createQuestion(
      "Contre beaucoup de CC, quelles bottes prendre ?",
      "Tabi ninja",
      "Bottes de Mercure",
      "Berserker",
      "Bottes de mobilité",
      'b',
      "Les Mercure donnent de la Tenacity qui réduit la durée des CC."
    ),
    createQuestion(
      "Contre beaucoup de dégâts AD, quelles bottes prendre ?",
      "Bottes de Mercure",
      "Tabi ninja",
      "Chaussures de sorcier",
      "Berserker",
      'b',
      "Les Tabi donnent de l'armure et réduisent les dégâts d'auto."
    ),
    createQuestion(
      "Que donne la Tenacity des Bottes de Mercure ?",
      "Plus de vitesse",
      "Réduction de la durée des CC",
      "Plus de dégâts",
      "Plus de PV",
      'b',
      "La Tenacity réduit la durée des effets de contrôle."
    ),
    createQuestion(
      "Les Bottes de mobilité sont bonnes pour quoi ?",
      "Les combats",
      "Le roam et les déplacements hors combat",
      "La défense",
      "Les dégâts",
      'b',
      "Mobilité donne beaucoup de vitesse hors combat pour roamer."
    ),
    createQuestion(
      "Quand acheter les bottes de base ?",
      "En dernier",
      "Au premier ou deuxième back",
      "Jamais",
      "Uniquement en late game",
      'b',
      "Les bottes se prennent tôt pour la mobilité."
    ),
    createQuestion(
      "Les Bottes de lucidité donnent quoi ?",
      "Plus de dégâts",
      "De l'Ability Haste (réduction cooldown)",
      "De la vitesse d'attaque",
      "De l'armure",
      'b',
      "Lucidité donne de l'AH pour utiliser les sorts plus souvent."
    ),
    createQuestion(
      "Combien y a-t-il de types de bottes améliorées ?",
      "4",
      "5",
      "6",
      "8",
      'c',
      "Il y a 6 types de bottes améliorées différentes."
    ),
  ]
);
