import { createModule, createQuestion } from '../utils';

export const module06TopJungleSynergy = createModule(
  'Synergie avec le jungler',
  'top-jungle-synergy',
  'Coordonner avec son jungler en top',
  6,
  // Theory Content
  `## Synergie Top-Jungle

La **relation** entre le top laner et le jungler est cruciale. Une bonne coordination peut déterminer l'issue du match.

## Pourquoi c'est important

Impact de la synergie :
- Le **Herald** est un objectif top-side
- Les **ganks** top peuvent snowball dur
- **Aider** votre jungler dans les invades
- **Répondre** aux invades ennemies

## Setup de gank

Comment aider votre jungler :
- **Freeze** la vague pour exposer l'ennemi
- **Gardez** du CC pour quand le jungler arrive
- **Ne pas push** quand un gank est prévu
- **Ping** quand l'ennemi n'a pas Flash

## Communication

Ce qu'il faut communiquer :
- Flash ennemi **down** ou up
- Si le gank est **possible** ou pas
- Si vous avez besoin d'**aide**
- Quand vous êtes prêt pour le **Herald**

## Le Herald ensemble

Coordination pour Herald :
- Préparez la **vague** avant Herald
- Attendez que l'ennemi soit **visible** loin
- **Ping** quand vous voulez le faire
- Le jungler tank, vous DPS

## Répondre aux invades

Aider votre jungler :
- Ayez une **prio de lane** si possible
- Répondez rapidement aux **pings**
- Ne tardez pas, les invades sont **rapides**
- Parfois mieux de **ping off** si pas possible`,

  // Practice Instructions
  `## Objectif

Améliorer la coordination avec votre jungler.

## Étapes

1. Communiquez le statut du Flash ennemi
2. Freeze quand votre jungler ping qu'il vient
3. Gardez votre CC pour le gank
4. Coordonnez pour prendre Herald
5. Répondez aux invades si vous avez la prio

## Critère de réussite

Vous assistez votre jungler dans un gank réussi et/ou prenez Herald ensemble.`,

  // Questions
  [
    createQuestion(
      "Quel objectif est proche du top laner ?",
      "Dragon",
      "Rift Herald",
      "Baron (early)",
      "Aucun",
      'b',
      "Le Rift Herald spawn du côté du top lane."
    ),
    createQuestion(
      "Comment setup un gank pour le jungler ?",
      "Push fort",
      "Freeze et garder du CC",
      "Ignorer la vague",
      "AFK",
      'b',
      "Freeze et gardez votre CC pour quand le jungler arrive."
    ),
    createQuestion(
      "Que communiquer à votre jungler ?",
      "Rien",
      "Statut du Flash ennemi, possibilité de gank, besoin d'aide",
      "Seulement les insultes",
      "Votre build",
      'b',
      "Communiquez les informations utiles au jungler."
    ),
    createQuestion(
      "Quand faire le Herald ?",
      "N'importe quand",
      "Quand l'ennemi top/mid est visible ailleurs",
      "Jamais",
      "Seulement à 20 minutes",
      'b',
      "Faites Herald quand les ennemis proches sont occupés."
    ),
    createQuestion(
      "Qui doit tanker Herald ?",
      "Le top laner",
      "Le jungler généralement",
      "L'ADC",
      "Personne",
      'b',
      "Le jungler a généralement Smite et peut mieux tanker."
    ),
    createQuestion(
      "La prio de lane aide pour quoi ?",
      "Rien",
      "Répondre aux invades et contests",
      "Farm plus",
      "Mourir moins",
      'b',
      "Avec la prio, vous pouvez quitter la lane pour aider."
    ),
    createQuestion(
      "Faut-il toujours répondre aux invades ?",
      "Oui, toujours",
      "Non, parfois ping off si pas possible",
      "Jamais",
      "Seulement en ranked",
      'b',
      "Parfois vous ne pouvez pas y aller et devez ping off."
    ),
    createQuestion(
      "Ping le Flash ennemi aide car ?",
      "Ça ne sert à rien",
      "Le jungler sait si le gank sera plus facile",
      "C'est pour le style",
      "L'ennemi le voit",
      'b',
      "Sans Flash, l'ennemi est beaucoup plus vulnérable aux ganks."
    ),
    createQuestion(
      "Pourquoi ne pas push quand un gank arrive ?",
      "Pas de raison",
      "L'ennemi sera proche de sa tourelle et safe",
      "Pour le style",
      "Le jungler préfère",
      'b',
      "Une vague près de votre tourelle expose l'ennemi."
    ),
    createQuestion(
      "Un top laner qui aide bien son jungler crée quoi ?",
      "Rien",
      "Un avantage map et jungle control",
      "Des problèmes",
      "Du retard",
      'b',
      "Une bonne synergie crée des avantages pour toute l'équipe."
    ),
  ]
);
