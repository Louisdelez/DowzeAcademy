import { createModule, createQuestion } from '../utils';

export const module09DraftPhase = createModule(
  'Phase de draft compétitive',
  'draft-phase',
  'Maîtriser l\'ordre de pick, les bans stratégiques et les réponses en draft compétitive',
  9,
  // Theory Content (5+ slides)
  `## La phase de draft : un jeu avant le jeu

La **phase de draft** est souvent considérée comme le "premier combat" dans League of Legends compétitif. Une équipe peut gagner ou perdre des pourcentages significatifs de chances de victoire uniquement pendant cette phase. Comprendre les mécaniques de la draft est essentiel pour tout joueur sérieux.

## L'ordre de pick : Blue Side vs Red Side

L'ordre de draft suit un schéma précis :

**Blue Side (Bleu)** :
- Premier pick (avantage de sélection prioritaire)
- Picks : 1er, 4e-5e, 6e-7e, 10e
- Bans : 1er-3e, puis 4e-5e

**Red Side (Rouge)** :
- Dernier pick (avantage de contre-pick)
- Picks : 2e-3e, 5e-6e, 9e-10e
- Bans : 1er-3e (après blue), puis 4e-5e (après blue)

Le **last pick** est particulièrement puissant car il permet de counter-pick sans possibilité de réponse.

## Stratégie de bans

Les bans doivent être utilisés stratégiquement :

**Types de bans** :
1. **Bans OP** : Retirer les champions trop forts du patch actuel
2. **Bans ciblés** : Retirer les one-tricks adverses ou champions signature
3. **Bans de comfort** : Empêcher l'adversaire de jouer ses champions favoris
4. **Bans de protection** : Retirer les counters de vos picks prévus

**Phase 1 (3 bans)** : Généralement les champions OP ou ciblés
**Phase 2 (2 bans)** : Réponse aux premiers picks, protection de stratégie

## Réponses stratégiques en draft

La draft est un **échange dynamique** :

**Principes clés** :
- Ne révélez pas votre stratégie trop tôt
- Gardez des flex picks pour brouiller les pistes
- Adaptez vos picks aux choix adverses
- Réservez les picks vulnérables aux counters pour la fin

**Exemple de séquence** :
1. Blue pick Rell (support solide, peu contrable)
2. Red répond avec ADC + Jungle (picks sûrs)
3. Blue prend Mid + Top flex
4. Red analyse et choisit ses counters
5. Last picks révèlent les vraies lanes

## Adaptation en temps réel

Pendant la draft, vous devez **adapter votre plan** :

**Questions à se poser** :
- Quels sont les bans adverses ? (révèle leur stratégie)
- Quels picks peuvent aller où ? (flex potential)
- Quelle est leur win condition probable ?
- Ai-je besoin de contre-pick prioritairement ?

**Erreurs courantes** :
- Trop s'engager tôt dans une stratégie rigide
- Ignorer les signaux de l'adversaire
- Oublier les besoins de l'équipe (CC, waveclear, damage mix)

## Récapitulatif

- Blue Side a le premier pick, Red Side a le dernier pick (counter advantage)
- Les bans servent à retirer les champions OP, les one-tricks, ou les counters
- La draft est dynamique : adaptez-vous aux choix adverses
- Ne révélez pas votre stratégie trop tôt avec des picks vulnérables
- Le dernier pick est crucial pour counter sans réponse possible`,

  // Practice Instructions
  `## Objectif

Développer votre compréhension de la phase de draft en analysant des drafts professionnelles.

## Étapes

1. Regardez 3 parties de compétition professionnelle récentes
2. Notez l'ordre exact des picks et bans des deux équipes
3. Identifiez pour chaque ban : est-ce un ban OP, ciblé, ou de protection ?
4. Analysez quels picks ont été gardés pour la fin et pourquoi
5. Évaluez si les équipes ont bien utilisé leur side advantage

## Critère de réussite

Vous êtes capable d'expliquer la logique derrière au moins 80% des picks et bans d'une draft professionnelle, en identifiant les stratégies des deux équipes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est l'avantage principal du Blue Side ?",
      "Le dernier pick",
      "Le premier pick",
      "Plus de bans",
      "Meilleure vision de la carte",
      'b',
      "Blue Side a l'avantage du premier pick, permettant de sécuriser un champion prioritaire ou OP."
    ),
    createQuestion(
      "Quel est l'avantage principal du Red Side ?",
      "Le premier pick",
      "Deux bans de plus",
      "Le dernier pick pour counter",
      "Accès au Baron plus rapide",
      'c',
      "Red Side a le last pick, permettant de counter-pick sans possibilité de réponse adverse."
    ),
    createQuestion(
      "Combien de bans chaque équipe a-t-elle en phase 1 ?",
      "2",
      "3",
      "4",
      "5",
      'b',
      "Chaque équipe dispose de 3 bans en phase 1, puis 2 bans supplémentaires en phase 2."
    ),
    createQuestion(
      "Qu'est-ce qu'un ban 'ciblé' ?",
      "Un ban sur un champion OP du patch",
      "Un ban visant le one-trick ou champion signature d'un adversaire",
      "Un ban au hasard",
      "Un ban sur le champion le plus joué du serveur",
      'b',
      "Un ban ciblé vise spécifiquement un joueur adverse en retirant son champion de prédilection."
    ),
    createQuestion(
      "Pourquoi devrait-on garder certains picks pour la fin de draft ?",
      "Pour impressionner l'adversaire",
      "Pour éviter les counters sans possibilité de réponse",
      "Parce que c'est la règle",
      "Pour faire durer la draft plus longtemps",
      'b',
      "Les picks tardifs ne peuvent pas être counter-pick, protégeant les champions vulnérables aux counters."
    ),
    createQuestion(
      "Que révèlent souvent les bans de l'adversaire ?",
      "Rien d'utile",
      "Leur stratégie ou leurs craintes",
      "Le niveau de leur équipe",
      "Le nombre de parties jouées",
      'b',
      "Les bans adverses indiquent souvent ce qu'ils veulent jouer ou ce qu'ils craignent d'affronter."
    ),
    createQuestion(
      "Quel pick Blue Side fait-il en premier ?",
      "Le 2e pick",
      "Le 1er pick seul",
      "Les picks 1 et 2",
      "Le dernier pick",
      'b',
      "Blue Side fait uniquement le 1er pick, puis Red Side répond avec deux picks."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'ban de protection' ?",
      "Un ban pour protéger un coéquipier faible",
      "Un ban retirant un counter de votre pick prévu",
      "Un ban au hasard",
      "Un ban sur un champion peu joué",
      'b',
      "Un ban de protection retire un champion qui pourrait counter ce que vous prévoyez de jouer."
    ),
    createQuestion(
      "Quelle erreur de draft est courante ?",
      "Trop s'engager dans une stratégie rigide dès le début",
      "Adapter ses picks",
      "Utiliser des flex picks",
      "Regarder les bans adverses",
      'a',
      "S'enfermer dans un plan rigide empêche d'adapter sa draft aux révélations adverses."
    ),
    createQuestion(
      "Quel est l'ordre des picks pour Red Side après le premier pick Blue ?",
      "Pick 4 et 5",
      "Pick 2 et 3",
      "Pick 1 seulement",
      "Pick 9 et 10",
      'b',
      "Après le premier pick Blue, Red Side répond immédiatement avec les picks 2 et 3."
    ),
  ]
);
