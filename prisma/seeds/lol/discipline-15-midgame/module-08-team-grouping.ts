import { createModule, createQuestion } from '../utils';

export const module08TeamGrouping = createModule(
  'Groupement d\'équipe',
  'team-grouping',
  'Quand regrouper en 5',
  8,
  // Theory Content (5+ slides)
  `## Quand se regrouper en équipe ?

Le **groupement** (ou grouping) consiste à rassembler plusieurs joueurs pour prendre des objectifs ou forcer des combats. Savoir quand regrouper en 5 est une compétence macro essentielle qui détermine souvent l'issue des parties.

## Situations favorables au groupement

Regroupez-vous en équipe quand :
- **Objectif majeur disponible** : Dragon soul, Baron, Elder
- **Avantage numérique** : après un pick ou un kill
- **Votre composition excelle en teamfight** : AOE, engage
- **Push des vagues terminé** : priorité établie
- **Vision en place** : vous savez où sont les ennemis

## Situations défavorables au groupement

Évitez de grouper si :
- **Composition de split-push** : vous êtes plus forts séparés
- **Retard en items** : vous perdrez le teamfight
- **Vagues non pushées** : vous perdez du farm
- **Vision insuffisante** : risque d'embuscade
- **Cooldowns importants down** : ulti clé pas disponible

Parfois, rester séparé et créer de la pression sur plusieurs lanes est plus efficace.

## Le timing du groupement

Le timing est crucial pour un groupement efficace :
1. **Avant un objectif** : 30-45 sec avant spawn
2. **Après un pick** : capitaliser sur l'avantage 5v4
3. **Avec un power spike** : après un item clé pour votre équipe
4. **Zone de vision contrôlée** : quand vous avez wardé
5. **Vagues sous tourelles ennemies** : rien à perdre en groupant

## Communication du groupement

Pour un groupement réussi :
- **Ping "On my way"** vers l'objectif
- **Ping "Assist me"** si vous avez besoin d'aide
- **Annoncez les timers** : "Dragon in 30, group bot"
- **Identifiez le leader** : quelqu'un doit initier
- **Respectez le call** : même si vous n'êtes pas d'accord

La désorganisation est la première cause d'échec des groupements.

## Récapitulatif

Le groupement d'équipe est une décision stratégique majeure :
- Groupez pour les objectifs majeurs avec vision et priorité
- Évitez de grouper si vous perdrez le fight ou perdez du farm
- Le timing est crucial : trop tôt ou trop tard ruine le play
- La communication assure que tout le monde est prêt
- Parfois, rester séparé est la meilleure stratégie`,

  // Practice Instructions
  `## Objectif

Participer à un groupement d'équipe réussi pour prendre un objectif majeur ou gagner un teamfight.

## Étapes

1. Identifiez une situation favorable au groupement (Dragon, Baron, avantage)
2. Push votre vague avant de rejoindre l'équipe
3. Pingez votre intention de rejoindre le groupe
4. Rejoignez votre équipe dans la zone de l'objectif
5. Vérifiez que tout le monde est présent avant d'engager
6. Participez au teamfight ou à la prise d'objectif

## Critère de réussite

Vous avez participé à un groupement qui a mené à la prise d'un objectif ou à un teamfight gagné.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le 'groupement' ou 'grouping' ?",
      "Séparer l'équipe sur différentes lanes",
      "Rassembler plusieurs joueurs pour un objectif ou combat",
      "Former un nouveau groupe de joueurs",
      "Voter pour une décision d'équipe",
      'b',
      "Le groupement consiste à réunir les joueurs pour prendre un objectif ou forcer un combat."
    ),
    createQuestion(
      "Quand est-il favorable de se regrouper en 5 ?",
      "Quand un objectif majeur est disponible",
      "Dès le début de la partie",
      "Quand vous êtes en retard",
      "Quand vos ultimates sont en cooldown",
      'a',
      "Les objectifs majeurs comme le Baron ou l'âme du Dragon justifient un groupement en 5."
    ),
    createQuestion(
      "Quelle situation rend le groupement défavorable ?",
      "Avoir l'avantage numérique",
      "Avoir une composition de split-push",
      "Avoir la vision en place",
      "Les vagues sont pushées",
      'b',
      "Une composition de split-push est plus efficace séparée qu'en teamfight."
    ),
    createQuestion(
      "Que devez-vous faire avant de rejoindre votre équipe pour grouper ?",
      "Attendre que l'ennemi attaque",
      "Push votre vague de lane",
      "Acheter plus de wards",
      "Retourner à la base",
      'b',
      "Push la vague évite de perdre du farm pendant que vous êtes avec l'équipe."
    ),
    createQuestion(
      "Combien de temps avant un objectif devez-vous commencer à vous regrouper ?",
      "5-10 secondes avant",
      "30-45 secondes avant",
      "2 minutes avant",
      "Juste au moment du spawn",
      'b',
      "Se regrouper 30-45 secondes avant permet de préparer la vision et les positions."
    ),
    createQuestion(
      "Pourquoi éviter de grouper sans vision ?",
      "Vous perdez du farm",
      "Risque d'embuscade",
      "L'objectif disparaît",
      "Les sbires deviennent plus forts",
      'b',
      "Sans vision, vous risquez de tomber dans une embuscade en vous déplaçant en groupe."
    ),
    createQuestion(
      "Quelle est une cause majeure d'échec des groupements ?",
      "Avoir trop de vision",
      "La désorganisation et le manque de communication",
      "Être trop nombreux",
      "Push les vagues trop loin",
      'b',
      "Sans coordination, les joueurs arrivent à des moments différents ou ne suivent pas le call."
    ),
    createQuestion(
      "Quand est-il judicieux de rester séparé plutôt que de grouper ?",
      "Quand vous avez une composition de teamfight",
      "Quand vous êtes en avantage numérique",
      "Quand vous êtes en retard en items et perdriez le teamfight",
      "Quand un objectif majeur spawn",
      'c',
      "Si vous perdriez le teamfight, créer de la pression sur plusieurs lanes est préférable."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'power spike' en relation avec le groupement ?",
      "Un moment où un champion est particulièrement fort",
      "Une tourelle qui tombe",
      "Un dragon qui spawn",
      "Un nouveau patch du jeu",
      'a',
      "Un power spike (après un item clé, niveau d'ulti) est un bon moment pour forcer un fight."
    ),
    createQuestion(
      "Comment communiquer efficacement pour un groupement ?",
      "Écrire de longs messages dans le chat",
      "Utiliser des pings et annoncer les timers",
      "Attendre que les autres décident",
      "Ne rien dire et espérer",
      'b',
      "Des pings clairs et l'annonce des timers aident à coordonner le groupement."
    ),
  ]
);
