import { createModule, createQuestion } from '../utils';

export const module06DamageTypes = createModule(
  'Dégâts physiques vs magiques',
  'damage-types',
  'AD vs AP et comment les contrer',
  6,
  // Theory Content
  `## Les deux types de dégâts

Dans LoL, les dégâts sont principalement de deux types : **physiques** (AD) et **magiques** (AP). Comprendre cette distinction est crucial.

## Dégâts physiques (AD)

Les dégâts physiques viennent de :
- Les **auto-attaques** de base
- Certains **sorts** qui scalent avec l'AD
- Champions typiques : ADC, Assassins AD, Bruisers
- **Réduits par l'Armure**

## Dégâts magiques (AP)

Les dégâts magiques viennent de :
- La plupart des **sorts de mages**
- Certaines capacités de supports
- Champions typiques : Mages, Assassins AP
- **Réduits par la Résistance Magique (RM)**

## Dégâts vrais (True Damage)

Un troisième type existe :
- Les **dégâts vrais** ignorent toutes les résistances
- Plus rares mais très puissants
- Exemples : Vayne W, Ignite, certains passifs

## Importance en jeu

Comprendre les types de dégâts permet de :
- **Construire les bons objets** (armure vs RM)
- **Identifier** la menace principale ennemie
- **Adapter** sa défense selon la composition

## Récapitulatif

- **AD** = dégâts physiques, réduits par l'Armure
- **AP** = dégâts magiques, réduits par la RM
- **True Damage** = ignore les résistances
- Adapter ses objets défensifs selon l'ennemi
- Une équipe équilibrée a AD et AP`,

  // Practice Instructions
  `## Objectif

Comprendre la différence entre dégâts physiques et magiques.

## Étapes

1. Lancez une partie d'entraînement avec un mage (ex: Lux)
2. Utilisez vos sorts et observez les dégâts magiques (violet/bleu)
3. Changez pour un ADC (ex: Ashe)
4. Faites des auto-attaques et observez les dégâts physiques (orange)
5. Achetez de l'armure et notez la réduction de dégâts AD
6. Achetez de la RM et notez la réduction de dégâts AP

## Critère de réussite

Vous savez identifier les types de dégâts et comprendre quelles résistances les contrent.`,

  // Questions
  [
    createQuestion(
      "Quels sont les deux principaux types de dégâts ?",
      "Dégâts de base et dégâts bonus",
      "Dégâts physiques (AD) et magiques (AP)",
      "Dégâts de zone et dégâts ciblés",
      "Dégâts lents et dégâts rapides",
      'b',
      "Les deux types principaux sont physiques (AD) et magiques (AP)."
    ),
    createQuestion(
      "Que réduit l'Armure ?",
      "Les dégâts magiques",
      "Les dégâts physiques",
      "Les deux types",
      "Les dégâts vrais",
      'b',
      "L'Armure réduit les dégâts physiques (AD)."
    ),
    createQuestion(
      "Que réduit la Résistance Magique (RM) ?",
      "Les dégâts physiques",
      "Les dégâts magiques",
      "Les deux types",
      "Les dégâts vrais",
      'b',
      "La RM réduit les dégâts magiques (AP)."
    ),
    createQuestion(
      "De quel type sont les auto-attaques de base ?",
      "Dégâts magiques",
      "Dégâts physiques",
      "Dégâts vrais",
      "Ça dépend du champion",
      'b',
      "Les auto-attaques de base infligent des dégâts physiques."
    ),
    createQuestion(
      "Qu'est-ce que le True Damage ?",
      "Des dégâts très faibles",
      "Des dégâts qui ignorent toutes les résistances",
      "Des dégâts de zone",
      "Des dégâts magiques améliorés",
      'b',
      "Le True Damage (dégâts vrais) ignore l'armure et la RM."
    ),
    createQuestion(
      "Contre une équipe full AD, que devez-vous acheter ?",
      "De la Résistance Magique",
      "De l'Armure",
      "Plus de dégâts",
      "Des bottes uniquement",
      'b',
      "Contre des dégâts physiques, l'Armure est la résistance appropriée."
    ),
    createQuestion(
      "Contre une équipe full AP, que devez-vous acheter ?",
      "De l'Armure",
      "De la Résistance Magique",
      "Plus de PV uniquement",
      "Des objets offensifs",
      'b',
      "Contre des dégâts magiques, la RM est la résistance appropriée."
    ),
    createQuestion(
      "Les mages font principalement quel type de dégâts ?",
      "Physiques",
      "Magiques",
      "Vrais",
      "Ça varie",
      'b',
      "Les mages infligent principalement des dégâts magiques (AP)."
    ),
    createQuestion(
      "Pourquoi une équipe équilibrée (AD + AP) est-elle forte ?",
      "C'est plus joli",
      "L'ennemi ne peut pas stack qu'une seule résistance",
      "Ça donne plus d'or",
      "C'est obligatoire",
      'b',
      "Avoir les deux types force l'ennemi à acheter armure ET RM."
    ),
    createQuestion(
      "Le sort Ignite fait quel type de dégâts ?",
      "Physiques",
      "Magiques",
      "Vrais",
      "Aucun",
      'c',
      "Ignite inflige des dégâts vrais qui ignorent les résistances."
    ),
  ]
);
