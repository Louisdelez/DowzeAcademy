import { createModule, createQuestion } from '../utils';

export const module08BaseFountain = createModule(
  'La base et la fontaine',
  'base-fountain',
  'Point de départ, régénération et boutique',
  8,
  // Theory Content
  `## La base

La **base** est votre zone de départ et votre sanctuaire. Elle contient :
- La **fontaine** : zone de régénération
- La **boutique** : pour acheter des objets
- Le **Nexus** : le coeur à protéger
- Les **tourelles du Nexus** : dernière défense

## La fontaine

La **fontaine** est la plateforme au coeur de votre base :
- **Régénération très rapide** de vie et mana
- Zone **invulnérable** pour vous
- Le **laser de fontaine** tue les ennemis qui y entrent
- Point de **spawn** au début et après chaque mort

## La boutique

La boutique vous permet d'acheter des objets :
- Accessible avec la touche **P**
- Vous ne pouvez acheter que **dans votre base**
- Les objets améliorent les stats de votre champion
- Vous pouvez **vendre** des objets (70% du prix)

## Fonctions de la base

Votre base sert à :
- **Se soigner** rapidement entre les combats
- **Acheter** et améliorer votre équipement
- **Protéger** le Nexus de l'ennemi
- Se mettre en **sécurité** en cas de danger

## Récapitulatif

- Base = zone de départ avec fontaine et boutique
- Fontaine = régénération instantanée + laser défensif
- Boutique = achat d'objets (touche P)
- Le Nexus et ses 2 tourelles sont dans la base
- Retour à la base avec le Recall (B)`,

  // Practice Instructions
  `## Objectif

Se familiariser avec la base, la fontaine et la boutique.

## Étapes

1. Lancez une partie d'entraînement
2. Observez votre position de départ (fontaine)
3. Bougez-vous et notez la zone de régénération
4. Appuyez sur P pour ouvrir la boutique
5. Achetez un objet de départ
6. Sortez de la base, puis utilisez B pour revenir
7. Observez les 2 tourelles du Nexus et le Nexus

## Critère de réussite

Vous savez utiliser la boutique, comprendre la régénération de la fontaine et localiser le Nexus.`,

  // Questions
  [
    createQuestion(
      "Que fait la fontaine ?",
      "Elle donne de l'or",
      "Elle régénère vie et mana rapidement",
      "Elle améliore vos compétences",
      "Elle invoque des sbires",
      'b',
      "La fontaine régénère votre vie et votre mana très rapidement."
    ),
    createQuestion(
      "Qu'est-ce que le laser de fontaine ?",
      "Une compétence de champion",
      "Une défense qui tue les ennemis dans votre base",
      "Un bonus d'attaque",
      "Une décoration",
      'b',
      "Le laser de fontaine inflige d'énormes dégâts aux ennemis qui entrent dans votre base."
    ),
    createQuestion(
      "Comment ouvre-t-on la boutique ?",
      "Touche B",
      "Touche P",
      "Touche S",
      "Clic droit sur la fontaine",
      'b',
      "La touche P ouvre la boutique quand vous êtes dans la base."
    ),
    createQuestion(
      "Peut-on acheter des objets n'importe où sur la carte ?",
      "Oui, partout",
      "Non, uniquement dans la base",
      "Seulement près des tourelles",
      "Seulement dans la jungle",
      'b',
      "La boutique n'est accessible que dans votre base."
    ),
    createQuestion(
      "Combien récupère-t-on en vendant un objet ?",
      "100% du prix",
      "70% du prix",
      "50% du prix",
      "0%, on ne peut pas vendre",
      'b',
      "Vendre un objet rapporte 70% de son prix d'achat."
    ),
    createQuestion(
      "Où se trouve le Nexus ?",
      "Au milieu de la carte",
      "Dans votre base",
      "Dans la rivière",
      "Dans la jungle",
      'b',
      "Le Nexus est au coeur de votre base, protégé par deux tourelles."
    ),
    createQuestion(
      "Comment retourne-t-on à la base depuis la carte ?",
      "En mourant uniquement",
      "Avec le Recall (touche B)",
      "Automatiquement après 5 minutes",
      "Avec la touche P",
      'b',
      "Le Recall (B) vous téléporte à la base après 8 secondes."
    ),
    createQuestion(
      "Où réapparaissez-vous après être mort ?",
      "Là où vous êtes mort",
      "À la fontaine de votre base",
      "Au milieu de la carte",
      "Dans la jungle",
      'b',
      "Après la mort, vous réapparaissez à votre fontaine."
    ),
    createQuestion(
      "Combien de tourelles protègent directement le Nexus ?",
      "1",
      "2",
      "3",
      "4",
      'b',
      "Deux tourelles du Nexus sont la dernière défense."
    ),
    createQuestion(
      "La régénération à la fontaine est-elle instantanée ?",
      "Non, elle est normale",
      "Oui, elle est très rapide",
      "Elle n'existe pas",
      "Seulement pour la vie",
      'b',
      "La fontaine offre une régénération extrêmement rapide de vie et mana."
    ),
  ]
);
