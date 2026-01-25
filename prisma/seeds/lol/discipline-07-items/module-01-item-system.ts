import { createModule, createQuestion } from '../utils';

export const module01ItemSystem = createModule(
  'Système d\'objets et boutique',
  'item-system',
  'Comprendre les 6 emplacements et la boutique',
  1,
  // Theory Content
  `## Le système d'objets

Les **objets** sont des équipements que vous achetez avec l'or pour améliorer votre champion. Ils sont essentiels pour devenir plus fort.

## Les 6 emplacements

Votre champion peut équiper **6 objets** maximum :
- Chaque objet prend un emplacement
- Les bottes comptent comme un objet
- Une fois plein, vous devez vendre pour changer

## La boutique

Accessible uniquement à la **base** (touche P) :
- Affiche tous les objets disponibles
- Recommandations adaptées à votre champion
- Possibilité de rechercher par nom
- Annuler un achat récent (pendant 10s)

## Composants et objets complets

Les objets se construisent :
- **Composants** : objets de base bon marché
- **Objets intermédiaires** : combinaisons de composants
- **Objets complets** : les plus puissants
- Construire par étapes est normal

## Coût et vente

Économie des objets :
- Le prix est affiché pour chaque objet
- **Vendre** = récupérer 70% du prix
- Garder l'or pour des objets clés est stratégique

## Récapitulatif

- 6 emplacements d'objets maximum
- Boutique accessible à la base (P)
- Construire composants → intermédiaires → complets
- Vendre rapporte 70%
- Adapter ses objets à la partie`,

  // Practice Instructions
  `## Objectif

Se familiariser avec la boutique et le système d'objets.

## Étapes

1. Lancez une partie d'entraînement
2. À la base, appuyez sur P pour ouvrir la boutique
3. Explorez les catégories d'objets
4. Achetez un objet de départ recommandé
5. Farmez pour de l'or puis achetez un composant
6. Observez comment les objets se combinent

## Critère de réussite

Vous savez naviguer dans la boutique et comprendre la construction d'objets.`,

  // Questions
  [
    createQuestion(
      "Combien d'emplacements d'objets a un champion ?",
      "4",
      "5",
      "6",
      "7",
      'c',
      "Un champion peut équiper 6 objets maximum."
    ),
    createQuestion(
      "Où peut-on acheter des objets ?",
      "N'importe où",
      "Uniquement à la base",
      "Dans la jungle",
      "Près des tourelles",
      'b',
      "La boutique n'est accessible que dans votre base."
    ),
    createQuestion(
      "Quelle touche ouvre la boutique ?",
      "B",
      "P",
      "O",
      "I",
      'b',
      "La touche P ouvre la boutique quand vous êtes à la base."
    ),
    createQuestion(
      "Combien récupère-t-on en vendant un objet ?",
      "50%",
      "70%",
      "90%",
      "100%",
      'b',
      "Vendre un objet rapporte 70% de son prix d'achat."
    ),
    createQuestion(
      "Qu'est-ce qu'un composant ?",
      "Un objet final",
      "Un objet de base qui sert à construire d'autres objets",
      "Un objet gratuit",
      "Un sort",
      'b',
      "Les composants sont des objets de base bon marché."
    ),
    createQuestion(
      "Les bottes comptent-elles comme un objet ?",
      "Non, elles sont à part",
      "Oui, elles prennent un emplacement",
      "Seulement en ranked",
      "Seulement certaines bottes",
      'b',
      "Les bottes prennent un des 6 emplacements d'objets."
    ),
    createQuestion(
      "Peut-on annuler un achat ?",
      "Non, jamais",
      "Oui, pendant quelques secondes après l'achat",
      "Seulement les composants",
      "Seulement en début de partie",
      'b',
      "Vous pouvez annuler un achat récent (environ 10 secondes)."
    ),
    createQuestion(
      "Que faire quand les 6 emplacements sont pleins ?",
      "Attendre",
      "Vendre un objet pour en acheter un autre",
      "Rien, c'est impossible",
      "Créer un 7e emplacement",
      'b',
      "Pour changer d'objet, il faut vendre un existant."
    ),
    createQuestion(
      "Les objets recommandés sont-ils toujours les meilleurs ?",
      "Oui, toujours",
      "Non, il faut parfois adapter selon la partie",
      "Ils n'existent pas",
      "Seulement pour les débutants",
      'b',
      "Les recommandations sont un guide, mais l'adaptation est importante."
    ),
    createQuestion(
      "Pourquoi construire par étapes (composants) ?",
      "C'est obligatoire",
      "Permet d'avoir des stats avant l'objet complet",
      "C'est moins cher",
      "C'est juste esthétique",
      'b',
      "Les composants donnent des stats pendant que vous économisez pour l'objet complet."
    ),
  ]
);
