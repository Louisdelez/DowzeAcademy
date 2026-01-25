import { createModule, createQuestion } from '../utils';

export const module09Lethality = createModule(
  'Objets de Létalité',
  'lethality-items',
  'Pénétration d\'armure pour assassins',
  9,
  // Theory Content
  `## Qu'est-ce que la Létalité ?

La **Létalité** est une statistique qui **ignore une partie de l'armure** ennemie. Elle est très efficace contre les cibles fragiles.

## Fonctionnement

Comment la Létalité fonctionne :
- Chaque point de Létalité = environ 1 point d'armure ignoré
- Efficace contre les champions **low armor**
- Moins efficace contre les **tanks** qui stack l'armure
- Les assassins AD l'adorent

## Objets de Létalité populaires

Les objets clés :
- **Youmuu's Ghostblade** : Létalité + active vitesse
- **Duskblade of Draktharr** : Létalité + invisibilité après kill
- **Edge of Night** : Létalité + bouclier anti-sort
- **Serylda's Grudge** : Pénétration % + slow

## Létalité vs Pénétration %

Deux façons d'ignorer l'armure :
- **Létalité** : Valeur fixe ignorée (meilleur contre squishies)
- **Pénétration %** : % de l'armure ignoré (meilleur contre tanks)

## Qui utilise la Létalité ?

Champions typiques :
- **Assassins AD** : Zed, Talon, Qiyana
- **ADC poke** : Varus, Miss Fortune (ult)
- Certains **mid laners AD** : Jayce

## Récapitulatif

- Létalité = ignore l'armure ennemie
- Meilleur contre les cibles fragiles
- Objets clés : Youmuu's, Duskblade, Edge of Night
- Assassins AD = build Létalité
- Contre tanks : préférer pénétration %`,

  // Practice Instructions
  `## Objectif

Comprendre la Létalité et quand la construire.

## Étapes

1. Jouez un assassin AD (Zed ou Talon)
2. Achetez un premier objet de Létalité (Youmuu's)
3. Ciblez les ennemis fragiles (ADC, mage)
4. Observez les dégâts contre les tanks (moins efficace)
5. Comparez avec un build AD classique sans Létalité

## Critère de réussite

Vous comprenez que la Létalité est idéale contre les squishies, pas les tanks.`,

  // Questions
  [
    createQuestion(
      "Que fait la Létalité ?",
      "Augmente les dégâts magiques",
      "Ignore une partie de l'armure ennemie",
      "Donne plus de PV",
      "Augmente la vitesse",
      'b',
      "La Létalité permet d'ignorer de l'armure ennemie."
    ),
    createQuestion(
      "Contre qui la Létalité est-elle la plus efficace ?",
      "Les tanks",
      "Les cibles fragiles (ADC, mages)",
      "Les sbires",
      "Les tourelles",
      'b',
      "La Létalité fonctionne mieux contre les champions avec peu d'armure."
    ),
    createQuestion(
      "Youmuu's Ghostblade donne quoi en plus de la Létalité ?",
      "Un bouclier",
      "Une active de vitesse de déplacement",
      "Du soin",
      "De l'invisibilité",
      'b',
      "Youmuu's a une active qui augmente la vitesse de déplacement."
    ),
    createQuestion(
      "Qui prend généralement des objets de Létalité ?",
      "Les tanks",
      "Les assassins AD",
      "Les mages",
      "Les supports enchanters",
      'b',
      "La Létalité est la stat préférée des assassins AD."
    ),
    createQuestion(
      "Quelle est la différence entre Létalité et Pénétration % ?",
      "Aucune",
      "Létalité = fixe, Pénétration % = pourcentage de l'armure",
      "Létalité est magique",
      "Pénétration % n'existe pas",
      'b',
      "La Létalité ignore une valeur fixe, le % ignore un pourcentage."
    ),
    createQuestion(
      "Contre un tank, la Létalité est-elle efficace ?",
      "Très efficace",
      "Moins efficace (mieux vaut pénétration %)",
      "Identique",
      "Impossible contre les tanks",
      'b',
      "Les tanks ont beaucoup d'armure, la Létalité est moins efficace."
    ),
    createQuestion(
      "Duskblade of Draktharr donne quoi de spécial ?",
      "Un bouclier",
      "Invisibilité après un kill",
      "Plus de vitesse d'attaque",
      "Du soin",
      'b',
      "Duskblade rend invisible après avoir éliminé un ennemi."
    ),
    createQuestion(
      "Edge of Night offre quelle protection ?",
      "Armure bonus",
      "Un bouclier qui bloque un sort",
      "De la régénération",
      "De la RM",
      'b',
      "Edge of Night peut bloquer un sort ennemi."
    ),
    createQuestion(
      "Zed build généralement quoi ?",
      "Tank",
      "Létalité",
      "Critique",
      "AP",
      'b',
      "Zed est un assassin AD qui construit Létalité."
    ),
    createQuestion(
      "Serylda's Grudge donne quoi en plus de la pénétration ?",
      "De la vitesse",
      "Un slow sur les sorts",
      "Du soin",
      "Un bouclier",
      'b',
      "Serylda's applique un slow quand vous touchez avec vos sorts."
    ),
  ]
);
