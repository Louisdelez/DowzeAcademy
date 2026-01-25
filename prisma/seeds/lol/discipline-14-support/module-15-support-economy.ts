import { createModule, createQuestion } from '../utils';

export const module15SupportEconomy = createModule(
  "Maintien de l'économie",
  'support-economy',
  "Générer de l'or sans farmer : assists, objectifs et efficacité",
  15,
  // Theory Content (5+ slides)
  `## L'économie unique du support

Le support a une **économie différente** des autres rôles. Sans farm de sbires, vous devez maximiser vos autres sources de revenus pour rester pertinent en termes d'items.

## Sources d'or du support

Vos revenus viennent de :
- **Objet de soutien** : 500 or de quête + génération continue
- **Assists** : Participation aux kills (or partagé)
- **Or passif** : Tous les joueurs gagnent de l'or passivement
- **Objectifs** : Dragon, Baron, tourelles donnent de l'or à l'équipe
- **Plates de tourelle** : Petites quantités si vous êtes à proximité

## Maximiser les assists

Les **assists** sont cruciales pour votre économie :
- Participez à un **maximum de kills** sur la carte
- Même un **petit dégât ou CC** suffit pour l'assist
- Le roaming augmente vos **opportunités** d'assists
- En teamfight, **touchez tout le monde** pour garantir les assists

## Efficacité des achats

Avec moins d'or, vous devez être **efficace** :
- Priorisez les items **support** moins chers et utilitaires
- Achetez toujours des **Control Wards** (vision = économie indirecte)
- Complétez votre quête de support **rapidement**
- Ne gaspillez pas d'or sur des items de dégâts

## Ne pas voler les ressources

Évitez de nuire à l'économie de vos carries :
- Ne prenez **pas les kills** si le carry peut les avoir
- Ne **farmez pas** les waves (sauf si personne d'autre ne peut)
- Ne prenez pas les **camps de jungle** sans accord
- Les ressources de l'équipe vont aux **carries en priorité**

## Récapitulatif

- Or du support = objet de soutien + assists + passif + objectifs
- Maximisez les **assists** en participant aux kills
- Achetez des items **support efficaces**
- Ne volez **pas** les ressources des carries
- Les **Control Wards** sont toujours un bon investissement`,

  // Practice Instructions
  `## Objectif

Optimiser votre économie de support pour rester pertinent sans voler les ressources.

## Étapes

1. Complétez la quête de votre objet de soutien avant 12 minutes
2. Participez à un maximum de kills pour les assists
3. Achetez une Control Ward à chaque back (si vous n'en avez pas)
4. Évitez de prendre les kills si le carry peut les avoir
5. Ne farmez pas les waves ni les camps jungle
6. À la fin de la partie, comparez votre or aux autres supports de la partie

## Critère de réussite

Vous avez au moins 60% de participation aux kills de votre équipe et avez acheté au moins 5 Control Wards pendant la partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la principale source d'or du support après l'objet de soutien ?",
      "Le farm de sbires",
      "Les assists sur les kills",
      "Les camps de jungle",
      "Les kills en solo",
      'b',
      "Les assists représentent une part significative de l'économie du support."
    ),
    createQuestion(
      "Pourquoi le roaming aide-t-il l'économie du support ?",
      "Pour farmer d'autres lanes",
      "Pour augmenter les opportunités d'assists",
      "Pour voler des camps",
      "Ça n'aide pas l'économie",
      'b',
      "Roamer permet de participer à des kills sur d'autres lanes, augmentant vos assists."
    ),
    createQuestion(
      "Quel item devez-vous acheter à chaque back ?",
      "Des composants de Mythique",
      "Une Control Ward si vous n'en avez pas",
      "Des potions",
      "Une épée longue",
      'b',
      "Les Control Wards sont essentielles pour la vision et doivent être achetées régulièrement."
    ),
    createQuestion(
      "Que devez-vous éviter de faire pour ne pas nuire à votre équipe ?",
      "Participer aux fights",
      "Voler les kills et le farm des carries",
      "Placer des wards",
      "Roamer",
      'b',
      "Voler les ressources des carries les empêche d'atteindre leurs pics de puissance."
    ),
    createQuestion(
      "Comment garantir l'assist en teamfight ?",
      "Ne rien faire",
      "Toucher un maximum d'ennemis avec vos sorts",
      "Rester loin du fight",
      "Focus uniquement le carry",
      'b',
      "Toucher plusieurs ennemis garantit que vous recevez l'assist sur leurs morts."
    ),
    createQuestion(
      "Quel type d'items le support doit-il prioriser ?",
      "Items de dégâts purs",
      "Items support moins chers et utilitaires",
      "Items les plus chers",
      "Uniquement des wards",
      'b',
      "Les items support utilitaires sont moins chers et offrent plus de valeur pour le rôle."
    ),
    createQuestion(
      "Quand est-il acceptable de farmer une wave en tant que support ?",
      "Tout le temps",
      "Quand personne d'autre ne peut la prendre",
      "Jamais",
      "Quand vous avez besoin d'or",
      'b',
      "Farmez uniquement si la wave serait perdue autrement (pas de carry à proximité)."
    ),
    createQuestion(
      "Combien d'or la quête de l'objet de soutien génère-t-elle ?",
      "300 or",
      "500 or",
      "1000 or",
      "750 or",
      'b',
      "La quête de l'objet de soutien génère 500 or avant de se compléter."
    ),
    createQuestion(
      "Pourquoi les Control Wards sont-elles un bon investissement ?",
      "Elles donnent de l'or",
      "La vision aide à éviter les morts et prendre des objectifs",
      "Elles font des dégâts",
      "Elles soignent",
      'b',
      "La vision prévient les morts (qui coûtent de l'or) et permet de sécuriser des objectifs lucratifs."
    ),
    createQuestion(
      "Quel pourcentage de participation aux kills devez-vous viser ?",
      "20-30%",
      "40-50%",
      "60%+ (idéalement)",
      "100% (tous les kills)",
      'c',
      "Un bon support vise 60%+ de participation aux kills de son équipe via les assists."
    ),
  ]
);
