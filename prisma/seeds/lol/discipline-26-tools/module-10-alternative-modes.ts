import { createModule, createQuestion } from '../utils';

export const module10AlternativeModes = createModule(
  'Modes de jeu alternatifs',
  'alternative-modes',
  "Découvrir ARAM, URF et autres modes pour varier l'expérience",
  10,
  // Theory Content (5+ slides)
  `## Au-delà de la Faille de l'Invocateur

League of Legends propose plusieurs modes de jeu alternatifs. Ces modes offrent des expériences différentes et peuvent compléter votre entraînement sur la Faille de l'Invocateur.

## ARAM - All Random All Mid

L'**ARAM** (All Random All Mid) se joue sur les Abysses Hurlantes :
- **Champion aléatoire** : Vous ne choisissez pas votre champion
- **Une seule lane** : Tout le monde au milieu
- **Combat constant** : Teamfights permanents
- **Pas de recall** : Vous ne pouvez pas rentrer à la base

Idéal pour : pratiquer les teamfights et découvrir de nouveaux champions.

## Modes rotatifs temporaires

Riot propose régulièrement des modes spéciaux :
- **URF (Ultra Rapid Fire)** : Cooldowns réduits de 80%, mana infini
- **One for All** : 5 fois le même champion par équipe
- **Nexus Blitz** : Parties rapides avec événements aléatoires
- **Arena** : Mode 2v2v2v2 récent et populaire

Ces modes reviennent périodiquement selon un calendrier rotatif.

## Ce que les modes alternatifs apportent

Chaque mode développe des compétences différentes :
- **ARAM** : Teamfighting, positioning, builds situationnels
- **URF** : Mécaniques, combos, limites des champions
- **Arena** : 2v2, synergies de duo
- **One for All** : Coordination d'équipe

Ils permettent aussi de décompresser entre les ranked.

## Utiliser les modes alternatifs intelligemment

Ces modes sont utiles pour :
1. **Découvrir des champions** : Tester sans engagement
2. **Détente** : Jouer sans pression après des ranked
3. **Pratiquer les fights** : ARAM pour les teamfights
4. **Warm-up fun** : Commencer une session détendu

Attention à ne pas y passer trop de temps si votre objectif est de progresser en ranked.

## Les modes permanents vs temporaires

- **Permanents** : Faille de l'Invocateur (Normal/Ranked), ARAM
- **Temporaires/Rotatifs** : URF, One for All, Arena, etc.

Consultez le client régulièrement pour voir quels modes sont disponibles.`,

  // Practice Instructions
  `## Objectif

Découvrir les modes de jeu alternatifs et comprendre comment ils peuvent compléter votre entraînement.

## Étapes

1. Lancez une partie d'ARAM et jouez-la entièrement
2. Notez 3 choses que vous avez apprises ou pratiquées (teamfight, nouveau champion, etc.)
3. Vérifiez dans le client si un mode rotatif est actuellement disponible
4. Si oui, jouez une partie de ce mode
5. Comparez l'expérience : qu'est-ce qui était différent de la Faille de l'Invocateur ?
6. Identifiez quel mode vous semble le plus utile pour votre progression

## Critère de réussite

Vous avez joué au moins une partie d'ARAM et identifié les compétences que ce mode permet de pratiquer.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Que signifie ARAM ?",
      "All Random All Maps",
      "All Random All Mid",
      "Always Rush And Move",
      "Attack Random Attack Mid",
      'b',
      "ARAM signifie All Random All Mid : champion aléatoire, une seule lane."
    ),
    createQuestion(
      "Quelle particularité de l'ARAM n'existe pas sur la Faille ?",
      "Les teamfights",
      "L'impossibilité de retourner à la base volontairement",
      "Les objets",
      "Les niveaux",
      'b',
      "En ARAM, vous ne pouvez pas recall, vous devez mourir pour acheter."
    ),
    createQuestion(
      "Qu'est-ce qui caractérise le mode URF ?",
      "Des parties plus longues",
      "Des cooldowns réduits de 80% et mana infini",
      "Des champions plus faibles",
      "Pas de niveau",
      'b',
      "URF permet de spammer les sorts grâce aux cooldowns très réduits et au mana infini."
    ),
    createQuestion(
      "Quel mode permet d'avoir 5 fois le même champion dans une équipe ?",
      "ARAM",
      "One for All",
      "URF",
      "Ranked",
      'b',
      "One for All permet à toute l'équipe de jouer le même champion."
    ),
    createQuestion(
      "Pourquoi l'ARAM est-il utile pour s'entraîner ?",
      "Il améliore le CS",
      "Il permet de pratiquer les teamfights et le positioning",
      "Il enseigne le wave management",
      "Il améliore le jungle pathing",
      'b',
      "L'ARAM offre des teamfights constants pour pratiquer le combat en groupe."
    ),
    createQuestion(
      "Quel mode de jeu récent se joue en 2v2v2v2 ?",
      "URF",
      "Arena",
      "One for All",
      "Nexus Blitz",
      'b',
      "Arena est le mode récent où 4 duos s'affrontent."
    ),
    createQuestion(
      "Quels modes sont disponibles en permanence ?",
      "URF et One for All",
      "Faille de l'Invocateur et ARAM",
      "Arena et Nexus Blitz",
      "Tous les modes",
      'b',
      "La Faille de l'Invocateur (Normal/Ranked) et l'ARAM sont les modes permanents."
    ),
    createQuestion(
      "Quel est un bon usage des modes alternatifs ?",
      "Y jouer exclusivement",
      "Décompresser après des ranked ou découvrir des champions",
      "Les éviter complètement",
      "Les utiliser pour monter en ranked",
      'b',
      "Ces modes sont parfaits pour la détente et la découverte."
    ),
    createQuestion(
      "Que permet de pratiquer le mode URF particulièrement bien ?",
      "Le last-hitting",
      "Les mécaniques et combos des champions",
      "La gestion de la vision",
      "Les objectifs neutres",
      'b',
      "Les cooldowns réduits permettent de pratiquer intensivement les combos."
    ),
    createQuestion(
      "Quel risque y a-t-il à trop jouer aux modes alternatifs ?",
      "Aucun risque",
      "Moins de temps pour progresser en ranked/mode principal",
      "Être banni du jeu",
      "Perdre son rang",
      'b',
      "Trop de temps en modes alternatifs peut freiner la progression en mode principal."
    ),
  ]
);
