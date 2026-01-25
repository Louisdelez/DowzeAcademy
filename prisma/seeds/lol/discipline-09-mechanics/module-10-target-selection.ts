import { createModule, createQuestion } from '../utils';

export const module10TargetSelection = createModule(
  'Target selection',
  'target-selection',
  'Choisir la bonne cible à attaquer',
  10,
  // Theory Content
  `## Target Selection

Le **target selection** (sélection de cible) est l'art de choisir qui attaquer dans un combat. Une bonne sélection gagne les fights.

## Pourquoi c'est important

Impact sur les combats :
- Attaquer la **bonne cible** = fight gagné
- Attaquer la **mauvaise** = dégâts gaspillés
- Chaque rôle a des **priorités** différentes
- Adaptation à la **situation**

## Priorité des cibles

Ordre général (situationnel) :
1. Cibles **low HP** qui peuvent mourir
2. **Carries** ennemis (ADC, Mid)
3. Cibles **dangereuses** et accessibles
4. Ce qui est **devant** si pas de choix

## Le concept de "Hit what's closest"

Pour les ADC :
- Attaquer le plus **proche** est souvent correct
- Ne pas **plonger** dans l'équipe ennemie
- Rester en vie = plus de DPS total
- Exception : opportunité de **kill** safe

## Target Selection par rôle

Objectifs différents :
- **ADC** : DPS safe, hit closest
- **Assassin** : Focus les carries
- **Bruiser/Tank** : Zoner ou focus selon
- **Support** : Peel ou engage

## Outils de ciblage

Aides dans le jeu :
- **Clic** précis sur la cible
- **Target Champions Only** (touche ~)
- **Portrait** clicking sur la minimap
- Éviter l'**attack move** aveugle en fight`,

  // Practice Instructions
  `## Objectif

Améliorer sa sélection de cibles en combat.

## Étapes

1. En teamfight, identifiez les cibles prioritaires
2. Si vous jouez ADC, focusez ce qui est proche et safe
3. Si vous jouez assassin, attendez une opportunité sur les carries
4. Activez "Target Champions Only" pour les fights serrés
5. Analysez vos morts : avez-vous focus la bonne cible ?

## Critère de réussite

Vous attaquez régulièrement les bonnes cibles et évitez de gaspiller vos dégâts sur des tanks.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le target selection ?",
      "Choisir son champion",
      "Choisir qui attaquer en combat",
      "Sélectionner des objets",
      "Choisir une lane",
      'b',
      "Target selection = choisir la bonne cible à attaquer."
    ),
    createQuestion(
      "Un ADC devrait généralement attaquer qui ?",
      "Toujours l'ADC ennemi",
      "Ce qui est proche et safe",
      "Le tank ennemi en premier",
      "Personne",
      'b',
      "Un ADC doit généralement attaquer ce qui est accessible et safe."
    ),
    createQuestion(
      "Un assassin devrait focus qui ?",
      "Les tanks",
      "Les carries ennemis",
      "Les sbires",
      "Personne",
      'b',
      "Les assassins doivent éliminer les carries (ADC, mid)."
    ),
    createQuestion(
      "Pourquoi ne pas toujours focus l'ADC ennemi ?",
      "Il est invincible",
      "Il peut être inaccessible et vous mourez en plongeant",
      "Il fait peu de dégâts",
      "C'est interdit",
      'b',
      "Plonger pour focus l'ADC peut résulter en votre mort."
    ),
    createQuestion(
      "Que fait la touche 'Target Champions Only' ?",
      "Rien",
      "Empêche d'attaquer les sbires/monstres",
      "Focus automatiquement le carry",
      "Désactive les attaques",
      'b',
      "Cette option empêche d'attaquer accidentellement les sbires."
    ),
    createQuestion(
      "Quelle touche active Target Champions Only par défaut ?",
      "Tab",
      "~ (tilde)",
      "Spacebar",
      "Y",
      'b',
      "La touche ~ active Target Champions Only."
    ),
    createQuestion(
      "Attaquer un tank en premier est souvent ?",
      "La meilleure idée",
      "Une perte de DPS",
      "Obligatoire",
      "Impossible",
      'b',
      "Sauf si c'est la seule option, les tanks sont des cibles inefficaces."
    ),
    createQuestion(
      "Si une cible ennemie est low HP, que faire ?",
      "L'ignorer",
      "La finir si c'est safe",
      "Fuir",
      "Attaquer le tank",
      'b',
      "Une cible low HP est une opportunité de kill si c'est safe."
    ),
    createQuestion(
      "Le rôle d'un tank en target selection ?",
      "Focus l'ADC ennemi",
      "Zoner ou focus selon la situation",
      "Ne rien faire",
      "Tuer les sbires",
      'b',
      "Les tanks zonent les carries ennemis ou protègent les leurs."
    ),
    createQuestion(
      "Le portrait clicking sert à ?",
      "Voir les stats",
      "Cibler un champion spécifique",
      "Rien",
      "Ouvrir le shop",
      'b',
      "Cliquer sur le portrait permet de cibler ce champion."
    ),
  ]
);
