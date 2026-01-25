import { createModule, createQuestion } from '../utils';

export const module07SupportItemQuest = createModule(
  'Objet de soutien à quête',
  'support-item-quest',
  'Comprendre les objets Targon et Spellthief et leurs quêtes',
  7,
  // Theory Content (5+ slides)
  `## Les objets de soutien à quête

Les supports commencent avec un **objet de soutien spécial** qui génère de l'or sans avoir besoin de farmer. Ces objets ont une **quête** qui, une fois complétée, offre des wards gratuites. Choisir le bon objet est essentiel.

## Spellthief's Edge (AP/Poke)

**Spellthief's Edge** génère de l'or quand vous **harcelez les champions** ou les structures avec vos sorts et auto-attaques. Idéal pour :
- Les enchanteurs (Lulu, Nami, Janna)
- Les mages supports (Zyra, Brand)
- Les supports qui poke fréquemment

## Relic Shield (Tank/Melee)

**Relic Shield** génère de l'or quand vous **exécutez des sbires** à basse vie. Le sbire tué donne aussi de l'or à votre ADC. Idéal pour :
- Les tanks (Nautilus, Leona, Alistar)
- Les supports mêlée
- Les lanes où le harcèlement est difficile

## La quête et ses récompenses

Quand vous générez **500 or** avec votre objet, la quête est complétée et :
- Votre objet s'améliore automatiquement
- Vous obtenez des **Stealth Wards rechargeables** (comme un trinket amélioré)
- Votre trinket jaune est remplacé
- Vous pouvez maintenant acheter **Oracle Lens**

## Optimiser la complétion de quête

Pour finir la quête rapidement :
- **Spellthief** : harcelez constamment (en sécurité)
- **Relic Shield** : exécutez les sbires de mêlée (plus d'or)
- Ne laissez pas vos stacks au maximum (perte d'or potentiel)
- Visez 10-12 minutes pour compléter la quête

## Récapitulatif

- **Spellthief** : pour le harcèlement (enchanteurs, mages)
- **Relic Shield** : pour l'exécution de sbires (tanks)
- Complétez la quête en générant **500 or**
- Récompense : **wards rechargeables** + trinket libre
- Optimisez en ne laissant jamais vos stacks au maximum`,

  // Practice Instructions
  `## Objectif

Compléter la quête de votre objet de soutien de manière optimale.

## Étapes

1. Choisissez l'objet approprié : Spellthief pour enchanteur/mage, Relic pour tank
2. En jeu, surveillez le compteur de stacks de votre objet
3. Pour Spellthief : harcelez dès que vous avez des stacks
4. Pour Relic Shield : exécutez en priorité les sbires de mêlée
5. Notez le temps quand vous complétez la quête
6. Après complétion, échangez votre trinket pour Oracle Lens

## Critère de réussite

Vous avez complété la quête de votre objet avant la 12ème minute et avez immédiatement échangé pour Oracle Lens.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel objet de soutien convient aux enchanteurs ?",
      "Relic Shield",
      "Spellthief's Edge",
      "Doran's Ring",
      "Long Sword",
      'b',
      "Spellthief's Edge convient aux enchanteurs car ils peuvent facilement harceler pour générer de l'or."
    ),
    createQuestion(
      "Comment Relic Shield génère-t-il de l'or ?",
      "En harcelant les champions",
      "En exécutant des sbires à basse vie",
      "En tuant des monstres de jungle",
      "En plaçant des wards",
      'b',
      "Relic Shield génère de l'or quand vous exécutez des sbires à basse vie avec une charge."
    ),
    createQuestion(
      "Combien d'or faut-il générer pour compléter la quête ?",
      "300 or",
      "400 or",
      "500 or",
      "1000 or",
      'c',
      "La quête de l'objet de soutien est complétée après avoir généré 500 or."
    ),
    createQuestion(
      "Quelle récompense recevez-vous en complétant la quête ?",
      "Un bonus de dégâts",
      "Des wards rechargeables",
      "Plus de mana",
      "Des bottes gratuites",
      'b',
      "Compléter la quête donne des wards rechargeables, libérant le slot trinket."
    ),
    createQuestion(
      "Quel objet choisir pour Nautilus ?",
      "Spellthief's Edge",
      "Relic Shield",
      "Doran's Blade",
      "Amplifying Tome",
      'b',
      "Nautilus est un tank mêlée, Relic Shield lui permet d'exécuter des sbires pour générer de l'or."
    ),
    createQuestion(
      "Que faire après avoir complété la quête de l'objet de soutien ?",
      "Vendre le trinket jaune",
      "Échanger pour Oracle Lens",
      "Garder le trinket jaune",
      "Acheter un autre objet de soutien",
      'b',
      "Après la quête, échangez le trinket jaune pour Oracle Lens afin de clear les wards ennemies."
    ),
    createQuestion(
      "Pourquoi ne pas laisser les stacks de Spellthief au maximum ?",
      "Ça bloque vos sorts",
      "Vous perdez du potentiel de génération d'or",
      "Votre ADC perd de l'expérience",
      "L'objet se détruit",
      'b',
      "Laisser les stacks au maximum signifie que vous ne générez plus d'or, ralentissant la quête."
    ),
    createQuestion(
      "À quelle minute devriez-vous idéalement compléter la quête ?",
      "5-7 minutes",
      "10-12 minutes",
      "15-18 minutes",
      "20+ minutes",
      'b',
      "Une complétion optimale de la quête se situe entre 10 et 12 minutes."
    ),
    createQuestion(
      "Quel type de sbire donne le plus d'or avec Relic Shield ?",
      "Les sbires caster",
      "Les sbires de mêlée",
      "Les super sbires",
      "Tous donnent le même or",
      'b',
      "Les sbires de mêlée donnent plus d'or que les casters, priorisez-les pour Relic Shield."
    ),
    createQuestion(
      "Qu'est-ce qui caractérise Spellthief's Edge ?",
      "Il exécute les sbires",
      "Il génère de l'or en harcelant",
      "Il donne des stats défensives",
      "Il soigne automatiquement",
      'b',
      "Spellthief génère de l'or quand vous touchez les champions ou structures avec vos attaques/sorts."
    ),
  ]
);
