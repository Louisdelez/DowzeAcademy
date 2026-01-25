import { createModule, createQuestion } from '../utils';

export const module14SoloqVsTeamDraft = createModule(
  'Draft en soloQ vs en équipe',
  'soloq-vs-team-draft',
  'Comprendre les différences de priorités entre le jeu solo et le jeu organisé',
  14,
  // Theory Content (5+ slides)
  `## Deux mondes différents

La draft en **solo queue** et en **équipe organisée** sont fondamentalement différentes. Ce qui fonctionne dans un contexte peut être désastreux dans l'autre. Comprendre ces différences est crucial pour optimiser vos chances de victoire.

**Solo Queue** : 5 inconnus, communication limitée, exécution incertaine
**Équipe** : Communication vocale, stratégies préparées, confiance mutuelle

## La philosophie du solo queue

En solo queue, la **performance individuelle** prime souvent sur la synergie d'équipe :

**Pourquoi ?**
- Pas de coordination vocale fiable
- Coéquipiers inconnus avec niveaux variables
- Impossible de garantir l'exécution de stratégies complexes
- Vous ne pouvez contrôler que votre propre performance

**Priorités en solo queue** :
1. **Confort** : Jouez vos meilleurs champions
2. **Carry potential** : Champions pouvant 1v9 si nécessaire
3. **Indépendance** : Ne dépendez pas trop des coéquipiers
4. **Simplicité** : Évitez les compositions nécessitant une coordination parfaite

> "En solo queue, le meilleur champion est souvent celui que vous maîtrisez le mieux"

## Le cas du one-trick en solo queue

Les **one-tricks** (joueurs spécialisés sur un seul champion) réussissent souvent en solo queue :

**Avantages** :
- Maîtrise parfaite du champion
- Connaissance de tous les matchups
- Performances constantes
- Moins de réflexion en draft (toujours le même pick)

**Statistiques** :
- Les one-tricks ont souvent 1-2 divisions de plus que leur "vrai" niveau
- La profondeur > la largeur en solo queue

**Le compromis** :
- Vulnérable aux bans ciblés
- Parfois des matchups impossibles
- Moins flexible pour l'équipe

## La philosophie en équipe organisée

En équipe, la **synergie collective** devient prioritaire :

**Pourquoi ?**
- Communication vocale constante
- Stratégies préparées et pratiquées
- Confiance dans l'exécution des coéquipiers
- Objectifs d'équipe > performances individuelles

**Priorités en équipe** :
1. **Synergie de composition** : Champions qui fonctionnent ensemble
2. **Win condition claire** : Plan de jeu défini
3. **Rôles définis** : Chacun sait ce qu'il doit faire
4. **Contre-stratégie** : Adaptation à l'équipe adverse

> "En équipe, le meilleur champion est celui qui aide l'équipe à gagner"

## Les sacrifices en équipe

En équipe organisée, les joueurs doivent parfois **sacrifier leur confort** :

**Exemples de sacrifices** :
- Le top joue tank même s'il préfère les carries
- Le mid joue supportif pour enable l'ADC
- Le jungler joue un style qu'il n'aime pas pour la composition

**Le rôle du leader de draft** :
- Une personne coordonne la draft
- Décisions basées sur le plan de jeu
- Les joueurs acceptent les picks assignés

**Communication type** :
- "On joue wombo, j'ai besoin que tu pick Orianna"
- "On a besoin de frontline, peux-tu jouer Ornn ?"
- "Notre win con c'est protéger le Kog'Maw"

## Adapter sa mentalité

**En solo queue** :
- ✅ Pick votre main même si pas "optimal"
- ✅ Privilégiez les champions avec lesquels vous pouvez carry
- ✅ Soyez indépendant et autonome
- ❌ N'attendez pas une exécution parfaite de la composition

**En équipe** :
- ✅ Acceptez de jouer des champions pour l'équipe
- ✅ Faites confiance au plan collectif
- ✅ Communiquez pendant la draft
- ❌ Ne jouez pas égoïstement votre main si ça ne fit pas

**Le pont entre les deux** :
- Développez un pool de champions variés
- Apprenez à jouer supportif ET carry
- Adaptez votre mindset au contexte

## Récapitulatif

- Solo queue : privilégiez le confort personnel et le carry potential
- Les one-tricks réussissent en solo queue grâce à leur maîtrise
- Équipe organisée : la synergie collective prime sur le confort individuel
- En équipe, les joueurs sacrifient parfois leur préférence pour la composition
- Adaptez votre approche de draft selon le contexte (solo vs équipe)`,

  // Practice Instructions
  `## Objectif

Développer deux mindsets de draft distincts : un pour le solo queue et un pour le jeu en équipe.

## Étapes

1. En solo queue : identifiez vos 3 meilleurs champions et jouez-les prioritairement
2. Notez votre winrate sur vos mains vs les "picks méta" que vous ne maîtrisez pas
3. En flex ou clash : communiquez avec votre équipe sur les besoins de composition
4. Acceptez de jouer un champion moins confortable si l'équipe en a besoin
5. Comparez vos résultats entre les deux approches

## Critère de réussite

Vous avez un winrate supérieur de 10%+ sur vos mains en solo queue par rapport aux picks "méta" non maîtrisés, ET vous avez réussi au moins 3 parties en équipe où vous avez sacrifié votre confort pour la composition.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la priorité principale en draft solo queue ?",
      "La synergie d'équipe parfaite",
      "Le confort personnel et le carry potential",
      "Copier les drafts professionnelles",
      "Toujours pick les champions méta",
      'b',
      "En solo queue, jouer ses meilleurs champions maximise les chances de carry."
    ),
    createQuestion(
      "Pourquoi les one-tricks réussissent-ils souvent en solo queue ?",
      "Leurs champions sont OP",
      "La maîtrise parfaite compense le manque de flexibilité",
      "Ils ont plus de chance",
      "Le système les favorise",
      'b',
      "La connaissance approfondie d'un champion permet de gagner même des matchups défavorables."
    ),
    createQuestion(
      "Quelle est la priorité principale en draft d'équipe organisée ?",
      "Le confort individuel",
      "La synergie collective et la win condition claire",
      "Avoir les meilleurs skins",
      "Éviter les bans",
      'b',
      "En équipe, la composition cohérente et le plan de jeu priment sur les préférences individuelles."
    ),
    createQuestion(
      "Que doit parfois faire un joueur en équipe organisée ?",
      "Toujours jouer son main",
      "Sacrifier son confort pour les besoins de la composition",
      "Refuser de jouer tank",
      "Ignorer les demandes du team leader",
      'b',
      "Le succès collectif peut nécessiter de jouer des champions moins confortables."
    ),
    createQuestion(
      "Pourquoi la communication est-elle cruciale en draft d'équipe ?",
      "Pour se plaindre des picks",
      "Pour coordonner les picks selon le plan de jeu collectif",
      "Ce n'est pas vraiment important",
      "Uniquement pour les bans",
      'b',
      "La communication permet d'assigner les rôles et de construire une composition cohérente."
    ),
    createQuestion(
      "Quel type de champion éviter en solo queue ?",
      "Les champions avec du carry potential",
      "Les champions nécessitant une coordination d'équipe parfaite",
      "Les champions que vous maîtrisez",
      "Les champions avec de l'engage",
      'b',
      "Les compositions complexes nécessitant une coordination parfaite échouent souvent en solo queue."
    ),
    createQuestion(
      "Qu'est-ce qui différencie fondamentalement solo queue et équipe ?",
      "Les champions disponibles",
      "La communication et la confiance dans l'exécution",
      "La taille de la carte",
      "Le nombre de bans",
      'b',
      "La communication vocale et la confiance mutuelle changent complètement l'approche de la draft."
    ),
    createQuestion(
      "Quel conseil pour le one-trick en équipe organisée ?",
      "Toujours forcer son pick",
      "Développer un pool plus large pour s'adapter aux besoins",
      "Quitter l'équipe",
      "Ignorer les compositions",
      'b',
      "En équipe, la flexibilité devient importante pour contribuer aux différentes stratégies."
    ),
    createQuestion(
      "Quelle erreur éviter en solo queue ?",
      "Jouer ses meilleurs champions",
      "Attendre une exécution parfaite d'une composition complexe",
      "Essayer de carry",
      "Jouer de manière indépendante",
      'b',
      "En solo queue, les compositions nécessitant une coordination parfaite échouent souvent."
    ),
    createQuestion(
      "Comment adapter son mindset entre solo queue et équipe ?",
      "Garder toujours la même approche",
      "Solo : confort et carry | Équipe : synergie et sacrifice si nécessaire",
      "Ignorer les coéquipiers dans les deux cas",
      "Toujours copier les pros",
      'b',
      "Chaque contexte demande une approche différente pour maximiser les chances de victoire."
    ),
  ]
);
