import { createModule, createQuestion } from '../utils';

export const module08RelicSpellthief = createModule(
  'Gestion des reliques/spellthief',
  'relic-spellthief-management',
  'Optimiser les stacks de vos objets de soutien',
  8,
  // Theory Content (5+ slides)
  `## Maximiser l'efficacité de votre objet

Bien gérer les **stacks** de votre objet de soutien est crucial pour compléter la quête rapidement et maximiser votre génération d'or. Chaque stack mal utilisé est de l'or perdu.

## Gestion de Relic Shield

Avec **Relic Shield**, les stacks se rechargent lentement (une toutes les ~35 secondes). Pour optimiser :
- **Priorisez les sbires de mêlée** (plus d'or)
- **Ne ratez pas l'exécution** (si le sbire meurt sans vous, pas d'or)
- **Coordonnez avec votre ADC** - il doit vous laisser le last hit
- **Utilisez vos stacks** avant d'en perdre au cap maximum

## Gestion de Spellthief

**Spellthief** génère des stacks avec le temps (une toutes les ~10 secondes). Pour optimiser :
- **Harcelez régulièrement** sans vous mettre en danger
- **Auto-attaque + sort** pour consommer 2 stacks rapidement
- **Ne perdez pas de stack** au cap maximum
- **Profitez des trades** où l'ennemi ne peut riposter

## Timing et patterns

Développez des **patterns** efficaces :
- Relic : Chaque vague, exécutez 1-2 sbires maximum
- Spellthief : Harcelez à chaque stack disponible
- Les deux : Ne gardez **jamais** 3 stacks (le maximum)
- Surveillez le **timer de respawn** des stacks

## Erreurs communes à éviter

Les erreurs qui ralentissent votre quête :
- **Relic** : Attaquer trop tôt et rater l'exécution
- **Spellthief** : Être trop passif et gaspiller des stacks
- Les deux : Atteindre le cap de 3 stacks
- **Relic** : Exécuter les casters au lieu des mêlées
- **Spellthief** : Se faire punir trop fort en harcelant

## Récapitulatif

- **Relic Shield** : exécutez les mêlées, ne ratez pas les last hits
- **Spellthief** : harcelez constamment mais en sécurité
- Ne laissez **jamais** vos stacks au maximum (3)
- Développez des **patterns réguliers** de consommation
- Coordonnez avec votre ADC pour Relic Shield`,

  // Practice Instructions
  `## Objectif

Optimiser la gestion de vos stacks pour compléter la quête le plus rapidement possible.

## Étapes

1. Choisissez un support approprié à l'objet (enchanteur pour Spellthief, tank pour Relic)
2. Surveillez constamment le compteur de stacks (en haut de votre barre de sorts)
3. Pour Relic : exécutez un sbire de mêlée par vague minimum
4. Pour Spellthief : harcelez dès que vous avez une stack
5. Ne laissez JAMAIS atteindre 3 stacks
6. Chronométrez votre complétion de quête

## Critère de réussite

Vous avez complété la quête avant 11 minutes sans jamais avoir gardé 3 stacks pendant plus de 5 secondes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien de stacks maximum peut stocker votre objet de soutien ?",
      "2 stacks",
      "3 stacks",
      "4 stacks",
      "5 stacks",
      'b',
      "Les objets de soutien peuvent stocker un maximum de 3 stacks."
    ),
    createQuestion(
      "Pourquoi prioriser les sbires de mêlée avec Relic Shield ?",
      "Ils sont plus faciles à toucher",
      "Ils donnent plus d'or",
      "Ils meurent plus vite",
      "L'ADC ne les veut pas",
      'b',
      "Les sbires de mêlée valent plus d'or que les casters, optimisant votre génération."
    ),
    createQuestion(
      "Que se passe-t-il si vous atteignez 3 stacks avec Spellthief ?",
      "Vous gagnez un bonus",
      "Vous arrêtez de générer de nouvelles stacks",
      "L'objet se détruit",
      "Vous perdez une stack",
      'b',
      "À 3 stacks, vous ne générez plus de nouvelles stacks, perdant du potentiel d'or."
    ),
    createQuestion(
      "Comment consommer efficacement les stacks Spellthief ?",
      "Uniquement avec les sorts",
      "Auto-attaque + sort pour 2 stacks",
      "En tuant des sbires",
      "En plaçant des wards",
      'b',
      "Combiner auto-attaque et sort permet de consommer 2 stacks rapidement sur un seul trade."
    ),
    createQuestion(
      "Quelle erreur commune ralentit la quête Relic Shield ?",
      "Exécuter trop de sbires",
      "Rater l'exécution en attaquant trop tôt",
      "Tuer les sbires de mêlée",
      "Ne pas avoir d'auto-attaques",
      'b',
      "Attaquer un sbire trop tôt sans qu'il soit dans la zone d'exécution fait rater le bonus."
    ),
    createQuestion(
      "Environ combien de temps faut-il pour régénérer une stack Relic ?",
      "10 secondes",
      "20 secondes",
      "35 secondes",
      "60 secondes",
      'c',
      "Une stack de Relic Shield se régénère environ toutes les 35 secondes."
    ),
    createQuestion(
      "Que devez-vous coordonner avec votre ADC pour Relic Shield ?",
      "Rien, c'est solo",
      "Qu'il vous laisse exécuter certains sbires",
      "Qu'il ne harcèle jamais",
      "Qu'il reste sous tourelle",
      'b',
      "L'ADC doit vous laisser le last hit sur les sbires ciblés pour l'exécution Relic."
    ),
    createQuestion(
      "Quand est-il acceptable d'avoir 3 stacks Spellthief ?",
      "Jamais, c'est toujours du gaspillage",
      "Uniquement si vous recall",
      "Tout le temps",
      "Quand vous êtes dead",
      'b',
      "Avoir 3 stacks est acceptable uniquement pendant le recall, sinon c'est de l'or perdu."
    ),
    createQuestion(
      "Quelle est la meilleure pratique de harcèlement avec Spellthief ?",
      "Spam tous les sorts d'un coup",
      "Harceler régulièrement quand l'ennemi ne peut riposter",
      "Ne jamais harceler pour économiser le mana",
      "Attendre d'avoir 3 stacks",
      'b',
      "Harceler régulièrement et intelligemment optimise la génération d'or sans vous mettre en danger."
    ),
    createQuestion(
      "Comment savoir combien de stacks vous avez ?",
      "Dans le chat",
      "Sur l'icône de l'objet/barre de sorts",
      "Sur la minimap",
      "Impossible à savoir",
      'b',
      "Le compteur de stacks est visible sur l'icône de votre objet de soutien."
    ),
  ]
);
