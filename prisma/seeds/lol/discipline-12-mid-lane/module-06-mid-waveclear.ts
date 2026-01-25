import { createModule, createQuestion } from '../utils';

export const module06MidWaveclear = createModule(
  "Waveclear mid",
  'mid-waveclear',
  'Nettoyer la vague efficacement',
  6,
  // Theory Content (5+ slides)
  `## L'importance du waveclear en mid

Le **waveclear** est la capacité à éliminer rapidement une vague de sbires. En mid lane, c'est une compétence essentielle car :

- Il vous donne la **priorité** pour roamer
- Il vous permet de **défendre** votre tourelle
- Il **libère du temps** pour d'autres actions
- Il **maintient la pression** sur l'adversaire

Un bon waveclear est souvent ce qui distingue un mid efficace d'un mid passif.

## Les techniques de waveclear

Chaque champion a sa méthode optimale de waveclear :

**Mages burst** (Lux, Syndra) :
- Combo Q+E ou abilities AoE sur les casters
- Un sort pour les melees

**Control mages** (Orianna, Viktor) :
- Ability principale sur toute la vague
- Auto-attaques pour finir

**Assassins** (Talon, Zed) :
- Combo rapide pour clear
- Utilisation des passifs (Talon bleed, Zed ombre)

**Clé** : Apprenez le combo de clear optimal de votre champion.

## Gestion de la mana pour le waveclear

Le waveclear coûte de la **mana**. Gérez cette ressource :

**En early game** :
- Utilisez les auto-attaques en priorité
- Un seul sort pour aider le clear
- Gardez de la mana pour les trades

**En mid game** (Lost Chapter/Mana item) :
- Vous pouvez spam vos sorts
- Clear rapide devient possible
- Focus sur l'efficacité

**Conseil** : Le Lost Chapter change totalement votre waveclear au niveau 1 item.

## Optimisation du clear selon le timing

Le **timing** de votre clear dépend de vos intentions :

**Slow push** (clear lent) :
- Ne last-hit que les sbires
- Accumule une grosse vague
- Idéal avant un dive ou crash sous tour

**Fast push** (clear rapide) :
- Utilisez tous vos sorts
- Poussez vite sous tour ennemie
- Idéal avant un roam ou objectif

**Freeze** (geler la vague) :
- Ne tuez pas plus de sbires que nécessaire
- Garde la vague de votre côté
- Idéal pour deny l'adversaire

## Récapitulatif

- Le **waveclear** = éliminer rapidement les vagues de sbires
- Chaque champion a son **combo optimal** de clear
- Gérez votre **mana** surtout en early game
- **Slow push** pour accumulator, **fast push** pour roamer
- Le **Lost Chapter** améliore drastiquement votre waveclear
- Adaptez votre style de push à la situation`,

  // Practice Instructions
  `## Objectif

Maîtriser le waveclear de votre champion mid et apprendre à gérer la mana.

## Étapes

1. Allez dans l'outil d'entraînement (Practice Tool)
2. Choisissez votre champion mid principal
3. Testez le clear SANS items :
   - Combien de temps pour clear une vague ?
   - Combien de mana utilisée ?
   - Notez le combo le plus efficace
4. Achetez Lost Chapter et refaites le test :
   - Temps de clear ?
   - La mana est-elle un problème ?
5. Lancez une partie contre des bots
6. Pratiquez ces 3 situations :
   - Fast push : clear le plus vite possible
   - Slow push : clear lentement pour accumuler
   - Freeze : maintenir la vague au milieu
7. Observez comment chaque méthode affecte la position de la vague

## Critère de réussite

Vous pouvez clear une vague complète en moins de 5 secondes avec votre champion (après Lost Chapter) et expliquer quand utiliser fast push, slow push et freeze.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le 'waveclear' en mid lane ?",
      "Attaquer la tourelle",
      "Éliminer rapidement une vague de sbires",
      "Tuer le champion ennemi",
      "Placer des wards",
      'b',
      "Le waveclear est la capacité à éliminer rapidement les sbires ennemis."
    ),
    createQuestion(
      "Pourquoi un bon waveclear est-il important en mid ?",
      "Il n'est pas vraiment important",
      "Il donne la priorité et libère du temps pour roamer ou aider",
      "Il fait gagner plus de ranked points",
      "Il rend le champion plus tanky",
      'b',
      "Un bon waveclear permet d'avoir la priorité et de libérer du temps pour d'autres actions."
    ),
    createQuestion(
      "Quel item améliore drastiquement le waveclear des mages en early game ?",
      "Boots",
      "Lost Chapter (composant de Luden's)",
      "Long Sword",
      "Refillable Potion",
      'b',
      "Lost Chapter donne de la mana et du regen, permettant de spam les sorts pour clear."
    ),
    createQuestion(
      "En early game (avant Lost Chapter), comment devez-vous gérer votre waveclear ?",
      "Utiliser tous vos sorts sur chaque vague",
      "Privilégier les auto-attaques et économiser la mana",
      "Ne jamais toucher aux sbires",
      "Utiliser uniquement votre ultime",
      'b',
      "Sans régénération de mana suffisante, il faut économiser en utilisant les auto-attaques."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'slow push' ?",
      "Tuer tous les sbires le plus vite possible",
      "Laisser la vague s'accumuler lentement en ne last-hit que les sbires",
      "Ne jamais toucher la vague",
      "Push uniquement avec les auto-attaques",
      'b',
      "Le slow push crée une grosse vague en ne tuant que les sbires au dernier moment."
    ),
    createQuestion(
      "Quand utiliser un 'fast push' ?",
      "Quand vous voulez freeze",
      "Avant un roam ou un objectif pour libérer du temps",
      "Quand vous manquez de mana",
      "En début de partie toujours",
      'b',
      "Le fast push permet de push rapidement sous tour pour avoir le temps de roamer ou faire un objectif."
    ),
    createQuestion(
      "Qu'est-ce qu'une 'freeze' de la vague ?",
      "Pousser la vague le plus vite possible",
      "Maintenir la vague de votre côté en ne tuant que le minimum de sbires",
      "Laisser tous les sbires mourir",
      "Attaquer la tourelle",
      'b',
      "La freeze maintient la vague près de votre tour, forçant l'ennemi à se sur-étendre."
    ),
    createQuestion(
      "Pour un assassin comme Talon, quel est généralement le meilleur pattern de waveclear ?",
      "Auto-attaques uniquement",
      "W (Rake) sur la vague puis Q pour finir les sbires",
      "Ultime sur chaque vague",
      "Ne jamais clear, uniquement roam",
      'b',
      "Le W de Talon touche toute la vague et son bleed aide à finir les sbires."
    ),
    createQuestion(
      "Pourquoi créer un slow push avant un dive sous tour ?",
      "Ce n'est pas utile",
      "Une grosse vague vous aide à tanker les dégâts de la tourelle",
      "La tour fait moins de dégâts",
      "Les sbires donnent plus d'or",
      'b',
      "Une grosse vague de sbires tankera plusieurs coups de tourelle, permettant un dive plus safe."
    ),
    createQuestion(
      "Si vous êtes low mana mais devez défendre votre tour, que faites-vous ?",
      "Abandonner la tour",
      "Utiliser les auto-attaques et les sorts uniquement sur les sbires cannon",
      "Spam tous les sorts disponibles",
      "Recall immédiatement",
      'b',
      "Économisez en ciblant les sbires importants (cannon) avec vos sorts limités."
    ),
  ]
);
