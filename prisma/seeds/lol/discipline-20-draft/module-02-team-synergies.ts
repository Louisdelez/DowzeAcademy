import { createModule, createQuestion } from '../utils';

export const module02TeamSynergies = createModule(
  "Synergies d'équipe",
  'team-synergies',
  'Identifier les champions qui fonctionnent bien ensemble pour maximiser le potentiel de l\'équipe',
  2,
  // Theory Content (5+ slides)
  `## Introduction aux synergies d'équipe

Une **synergie** se produit lorsque deux ou plusieurs champions ont des kits qui se complètent parfaitement. L'effet combiné est supérieur à la somme des parties individuelles. Maîtriser les synergies est essentiel pour construire des compositions dominantes.

## Les types de synergies

Il existe plusieurs catégories de synergies :
- **Synergies de combo** : Deux ultimates qui se combinent (Yasuo + Malphite)
- **Synergies de lane** : Duo bot qui fonctionne bien ensemble (Lucian + Nami)
- **Synergies de scaling** : Champions qui protègent un hyper-carry (Lulu + Kog'Maw)
- **Synergies de CC** : Enchaînement de contrôle de foule (Leona + Yasuo)

## Les combos légendaires

Certaines combinaisons sont devenues iconiques :
- **Yasuo + Malphite** : Le knockup de Malphite permet à Yasuo d'ulter toute l'équipe
- **Orianna + Jarvan** : La balle sur J4 qui plonge = ultime dévastateur
- **Miss Fortune + Amumu** : L'ultime d'Amumu immobilise pour le bullet time
- **Kog'Maw + Lulu** : Lulu protège et boost le DPS de Kog'Maw

## Les synergies de protection

Certains champions sont conçus pour **protéger les hyper-carries** :
- **Lulu** : Polymorph, bouclier, ultime santé = parfait pour Kog'Maw, Twitch, Jinx
- **Janna** : Désengagement, boucliers, AD bonus = excellente avec les ADC immobiles
- **Taric** : Invulnérabilité = combo avec champions de dive (Yi, Kindred)

Cette stratégie s'appelle "Protect the Carry" et repose sur un ADC fed qui fait tous les dégâts.

## Les synergies de wombo-combo

Le **wombo-combo** est une combinaison d'ultimates qui anéantit l'équipe adverse :
- Amumu attrape 5 personnes
- Yasuo ultime sur le knockup
- Miss Fortune channel son ultime sur les cibles immobilisées
- Orianna shockwave au milieu

Pour réussir un wombo-combo, il faut une **excellente coordination** et le bon timing.

## Construire autour d'une synergie

Quand vous draft, pensez aux synergies naturelles :
1. Identifiez votre win condition (teamfight, pick, split)
2. Choisissez des champions qui amplifient cette stratégie
3. Assurez-vous que les kits se complètent (CC chain, protection, burst combiné)

Exemple : Si vous voulez teamfight -> Ornn, Sejuani, Orianna, Jinx, Thresh

## Récapitulatif

- Les synergies amplifient le potentiel de l'équipe
- Combos, protection et wombo-combo sont les principales catégories
- Yasuo + knockups, Lulu + hyper-carry sont des exemples classiques
- Construisez votre draft autour des synergies identifiées`,

  // Practice Instructions
  `## Objectif

Identifier et expérimenter les synergies entre champions en analysant les combos potentiels dans vos parties.

## Étapes

1. Allez sur un site comme u.gg ou op.gg et étudiez les duos bot populaires
2. Notez 5 synergies classiques (ex: Yasuo+Malphite, Lucian+Nami)
3. En partie normale, essayez de pick un champion qui a une synergie avec un allié
4. Pendant la partie, communiquez avec votre allié pour coordonner vos combos
5. Après la partie, notez les moments où la synergie a fonctionné

## Critère de réussite

Vous avez identifié au moins 5 synergies classiques et expérimenté avec succès au moins un combo coordonné en partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une synergie dans League of Legends ?",
      "Quand un champion est très fort individuellement",
      "Quand les kits de plusieurs champions se complètent pour un effet amplifié",
      "Une stratégie de split-push",
      "Le fait d'avoir beaucoup de CC",
      'b',
      "Une synergie se produit lorsque des champions ont des capacités qui se combinent pour créer un effet supérieur."
    ),
    createQuestion(
      "Pourquoi Yasuo et Malphite forment-ils une synergie classique ?",
      "Ils ont tous les deux beaucoup de dégâts AP",
      "Le knockup de Malphite permet à Yasuo d'utiliser son ultime sur plusieurs cibles",
      "Ils sont tous les deux des tanks",
      "Malphite donne de l'armure à Yasuo",
      'b',
      "L'ultime de Yasuo nécessite un knockup, et Malphite peut knockup toute l'équipe adverse avec son R."
    ),
    createQuestion(
      "Qu'est-ce que la stratégie 'Protect the Carry' ?",
      "Protéger les tourelles à tout prix",
      "Construire l'équipe autour de la protection d'un hyper-carry",
      "Éviter les combats d'équipe",
      "Choisir 5 champions tankys",
      'b',
      "Cette stratégie consiste à choisir des champions qui protègent et boost un ADC hyper-carry comme Kog'Maw ou Jinx."
    ),
    createQuestion(
      "Quel champion est idéal pour protéger Kog'Maw ?",
      "Zed",
      "Lulu",
      "Lee Sin",
      "Rengar",
      'b',
      "Lulu offre polymorph, bouclier, et son ultime qui donne de la vie, parfaits pour protéger un carry immobile comme Kog'Maw."
    ),
    createQuestion(
      "Qu'est-ce qu'un wombo-combo ?",
      "Un combo solo d'un seul champion",
      "Une combinaison d'ultimates qui anéantit l'équipe adverse",
      "Une stratégie de split-push",
      "Un type de ward",
      'b',
      "Le wombo-combo est l'enchaînement coordonné de plusieurs ultimates pour détruire l'équipe ennemie en teamfight."
    ),
    createQuestion(
      "Quelle synergie fonctionne avec Miss Fortune ultime ?",
      "Un champion avec beaucoup de mobilité",
      "Un champion avec CC de zone comme Amumu ou Leona",
      "Un assassin",
      "Un split-pusher",
      'b',
      "Miss Fortune a besoin que les ennemis restent immobiles pour maximiser les dégâts de son ultime channelé."
    ),
    createQuestion(
      "Pourquoi Orianna + Jarvan IV est une synergie efficace ?",
      "Jarvan donne de l'armure à Orianna",
      "Orianna peut mettre sa balle sur J4 qui plonge pour un ultime surprenant",
      "Ils ont tous les deux des dégâts physiques",
      "J4 peut protéger Orianna avec son ultime",
      'b',
      "Orianna attache sa balle à J4, qui engage avec E-Q, puis Orianna ultime au milieu des ennemis."
    ),
    createQuestion(
      "Quel type de synergie recherche-t-on avec Lucian + Nami ?",
      "Synergie de split-push",
      "Synergie de lane pour dominer en early game",
      "Synergie de late game scaling",
      "Synergie défensive",
      'b',
      "Lucian et Nami forment un duo lane agressif : le E de Nami applique des slows et dégâts supplémentaires sur les autos de Lucian."
    ),
    createQuestion(
      "Comment identifier une bonne synergie en draft ?",
      "Choisir les champions avec le meilleur winrate",
      "Vérifier si les kits se complètent (CC chain, protection, burst combiné)",
      "Prendre uniquement des champions méta",
      "Éviter de communiquer avec l'équipe",
      'b',
      "Une bonne synergie existe quand les capacités des champions se combinent naturellement pour amplifier leur efficacité."
    ),
    createQuestion(
      "Quelle composition illustre bien les synergies de teamfight ?",
      "Fiora, Nidalee, LeBlanc, Vayne, Yuumi",
      "Ornn, Sejuani, Orianna, Miss Fortune, Leona",
      "Tryndamere, Shaco, Zed, Draven, Pyke",
      "Shen, Nocturne, Twisted Fate, Tahm Kench, Galio",
      'b',
      "Cette composition a des ultimates qui se combinent en teamfight : knockups d'Ornn/Sejuani, zone d'Orianna, AoE de MF."
    ),
  ]
);
