import { createModule, createQuestion } from '../utils';

export const module02ChampionStats = createModule(
  'Stats des champions',
  'champion-stats',
  'PV, mana, AD, AP, armure, résistance magique',
  2,
  // Theory Content
  `## Les statistiques de base

Chaque champion possède des **statistiques** qui définissent ses capacités. Ces stats augmentent avec le niveau et les objets.

## Points de Vie (PV/HP)

Les **PV** (Health Points) représentent votre vie :
- Quand les PV tombent à 0, vous mourrez
- Régénération passive de PV avec le temps
- Les Tanks ont plus de PV que les autres classes

## Mana et Ressources

Le **Mana** permet de lancer des sorts :
- Chaque sort coûte du mana
- Se régénère passivement
- Certains champions utilisent d'autres ressources (énergie, rage, etc.)

## Attack Damage (AD)

L'**AD** détermine les dégâts physiques :
- Dégâts des auto-attaques
- Certains sorts scalent avec l'AD
- Les Tireurs et Combattants ont beaucoup d'AD

## Ability Power (AP)

L'**AP** augmente les dégâts magiques :
- La plupart des sorts de mages scalent avec l'AP
- N'affecte pas les auto-attaques de base
- Les Mages stackent l'AP

## Résistances (Armure et RM)

L'**Armure** réduit les dégâts physiques
La **RM** (Résistance Magique) réduit les dégâts magiques

## Récapitulatif

- **PV** : Points de vie, tomber à 0 = mort
- **Mana** : Ressource pour lancer les sorts
- **AD** : Dégâts physiques (auto + certains sorts)
- **AP** : Dégâts magiques (sorts)
- **Armure** : Réduit les dégâts AD
- **RM** : Réduit les dégâts AP`,

  // Practice Instructions
  `## Objectif

Comprendre les statistiques de votre champion.

## Étapes

1. Lancez une partie d'entraînement
2. Appuyez sur C pour voir les stats de votre champion
3. Identifiez : PV, Mana, AD, Armure, RM
4. Montez de niveau et observez l'augmentation des stats
5. Achetez un objet d'AD et observez le changement
6. Achetez un objet d'armure et observez la réduction de dégâts

## Critère de réussite

Vous pouvez lire et comprendre toutes les stats affichées dans le panneau de statistiques (C).`,

  // Questions
  [
    createQuestion(
      "Que représentent les PV ?",
      "Les points de victoire",
      "Les points de vie",
      "La puissance du champion",
      "Les points de vision",
      'b',
      "PV = Points de Vie (Health Points), votre vie."
    ),
    createQuestion(
      "Que se passe-t-il quand vos PV tombent à 0 ?",
      "Vous gagnez",
      "Vous mourrez",
      "Vous retournez à la base",
      "Rien",
      'b',
      "À 0 PV, votre champion meurt et doit attendre le respawn."
    ),
    createQuestion(
      "À quoi sert le Mana ?",
      "À augmenter les dégâts",
      "À lancer des sorts",
      "À se déplacer plus vite",
      "À régénérer les PV",
      'b',
      "Le Mana est la ressource consommée pour utiliser les sorts."
    ),
    createQuestion(
      "Que signifie AD ?",
      "Ability Damage",
      "Attack Damage",
      "Armor Defense",
      "Advanced Damage",
      'b',
      "AD = Attack Damage, les dégâts physiques."
    ),
    createQuestion(
      "Que signifie AP ?",
      "Attack Power",
      "Ability Power",
      "Armor Points",
      "Advanced Power",
      'b',
      "AP = Ability Power, la puissance magique des sorts."
    ),
    createQuestion(
      "Que réduit l'Armure ?",
      "Les dégâts magiques",
      "Les dégâts physiques (AD)",
      "Le mana utilisé",
      "Le temps de respawn",
      'b',
      "L'Armure réduit les dégâts physiques reçus."
    ),
    createQuestion(
      "Que signifie RM ?",
      "Ressource Magique",
      "Résistance Magique",
      "Régénération de Mana",
      "Ratio Magique",
      'b',
      "RM = Résistance Magique, réduit les dégâts AP."
    ),
    createQuestion(
      "Les stats augmentent-elles avec le niveau ?",
      "Non, elles sont fixes",
      "Oui, automatiquement",
      "Seulement avec les objets",
      "Seulement en ranked",
      'b',
      "Les stats de base augmentent à chaque niveau gagné."
    ),
    createQuestion(
      "Certains champions n'utilisent pas de mana. Vrai ou faux ?",
      "Faux, tous utilisent du mana",
      "Vrai, certains utilisent énergie, rage, etc.",
      "Faux, c'est impossible",
      "Vrai, mais c'est rare",
      'b',
      "Des champions comme Garen (aucune ressource) ou Lee Sin (énergie) n'ont pas de mana."
    ),
    createQuestion(
      "Quelle touche affiche les stats détaillées du champion ?",
      "TAB",
      "C",
      "P",
      "S",
      'b',
      "La touche C ouvre le panneau de statistiques détaillées."
    ),
  ]
);
