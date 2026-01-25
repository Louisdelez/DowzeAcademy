import { createModule, createQuestion } from '../utils';

export const module01RuneSystem = createModule(
  'Système de runes reforgées',
  'rune-system',
  'Page de runes, arbre principal et secondaire',
  1,
  // Theory Content
  `## Le système de runes

Les **runes** sont des bonus que vous choisissez avant la partie pour personnaliser votre champion. Elles sont gratuites et modifiables à volonté.

## Structure d'une page de runes

Une page de runes comprend :
- Un **arbre principal** : 4 runes (1 Keystone + 3 runes)
- Un **arbre secondaire** : 2 runes
- **3 fragments** : petits bonus de stats

## Les 5 arbres de runes

Chaque arbre a un thème :
- **Précision** : DPS, attaques soutenues
- **Domination** : Burst, assassinats
- **Sorcellerie** : Puissance des sorts, poke
- **Résolution** : Durabilité, résistance
- **Inspiration** : Utilité, créativité

## La Keystone (rune principale)

La **Keystone** est la rune la plus puissante :
- Première rune de l'arbre principal
- Définit souvent le style de jeu
- Exemples : Conquérant, Électrocute, Phase Rush

## Créer une page de runes

Pour créer vos runes :
- Allez dans la collection > Runes
- Sélectionnez un arbre principal
- Choisissez Keystone + 3 runes
- Sélectionnez arbre secondaire + 2 runes
- Ajoutez les 3 fragments

## Récapitulatif

- Runes = bonus gratuits personnalisables
- Arbre principal (4 runes) + secondaire (2 runes)
- 5 arbres avec thèmes différents
- Keystone = rune la plus importante
- Fragments = petits bonus de stats`,

  // Practice Instructions
  `## Objectif

Comprendre comment créer et modifier une page de runes.

## Étapes

1. Ouvrez le client LoL, allez dans Collection > Runes
2. Créez une nouvelle page de runes
3. Explorez les 5 arbres et lisez les descriptions
4. Sélectionnez un arbre principal et choisissez 4 runes
5. Ajoutez un arbre secondaire avec 2 runes
6. Complétez avec les 3 fragments de stats

## Critère de réussite

Vous pouvez créer une page de runes complète en comprenant chaque choix.`,

  // Questions
  [
    createQuestion(
      "Combien d'arbres de runes existe-t-il ?",
      "3 arbres",
      "4 arbres",
      "5 arbres",
      "6 arbres",
      'c',
      "Il existe 5 arbres : Précision, Domination, Sorcellerie, Résolution, Inspiration."
    ),
    createQuestion(
      "Qu'est-ce que la Keystone ?",
      "Un objet",
      "La rune principale la plus puissante",
      "Un sort d'invocateur",
      "Une compétence",
      'b',
      "La Keystone est la première rune de l'arbre principal, la plus impactante."
    ),
    createQuestion(
      "Combien de runes prend-on dans l'arbre principal ?",
      "2 runes",
      "3 runes",
      "4 runes (Keystone + 3)",
      "5 runes",
      'c',
      "L'arbre principal contient 4 runes : 1 Keystone + 3 runes."
    ),
    createQuestion(
      "Combien de runes prend-on dans l'arbre secondaire ?",
      "1 rune",
      "2 runes",
      "3 runes",
      "4 runes",
      'b',
      "L'arbre secondaire permet de choisir 2 runes."
    ),
    createQuestion(
      "Les runes coûtent-elles de l'or ou des points ?",
      "Oui, elles coûtent de l'or",
      "Non, elles sont gratuites",
      "Seulement en ranked",
      "Elles coûtent des points",
      'b',
      "Les runes sont entièrement gratuites et modifiables à volonté."
    ),
    createQuestion(
      "Peut-on modifier ses runes en partie ?",
      "Oui, à tout moment",
      "Non, on les choisit avant la partie",
      "Seulement en début de partie",
      "Seulement à la base",
      'b',
      "Les runes sont choisies dans le lobby avant que la partie commence."
    ),
    createQuestion(
      "Que sont les fragments ?",
      "Des morceaux de runes cassées",
      "Des petits bonus de stats à ajouter",
      "Des objets",
      "Des sorts",
      'b',
      "Les fragments sont 3 petits bonus de stats (attaque, défense, etc.)."
    ),
    createQuestion(
      "Combien de fragments choisit-on ?",
      "1",
      "2",
      "3",
      "4",
      'c',
      "On sélectionne 3 fragments pour compléter la page de runes."
    ),
    createQuestion(
      "Où crée-t-on les pages de runes ?",
      "En partie",
      "Dans Collection > Runes du client",
      "Sur le site de Riot",
      "Dans les paramètres",
      'b',
      "Les pages de runes se créent dans la section Collection du client."
    ),
    createQuestion(
      "L'arbre Domination est orienté vers quoi ?",
      "La défense",
      "Le burst et les assassinats",
      "Le sustain",
      "L'utilité",
      'b',
      "Domination est l'arbre du burst et des assassins."
    ),
  ]
);
