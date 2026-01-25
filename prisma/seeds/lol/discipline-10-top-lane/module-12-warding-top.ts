import { createModule, createQuestion } from '../utils';

export const module12WardingTop = createModule(
  'Ward du Top Laner',
  'warding-top',
  'Sécuriser sa lane avec des wards stratégiques',
  12,
  // Theory Content
  `## L'Importance du Ward en Top

En top lane isolé, **ward** correctement peut faire la différence entre **vivre** ou mourir à un gank.

## Le Tribush

Position clé numéro 1 :
- Le **tribush** est le bush triangulaire près de votre lane
- Les junglers passent souvent par là
- Ward ici donne une **vision avancée**
- Permet d'anticiper les ganks **tôt**

## La Rivière

Position clé numéro 2 :
- Le **river bush** connecte mid et top
- Vision sur les **roams** du mid
- Alerte sur le jungler qui passe
- Combine avec le tribush pour couverture complète

## Ward Avancée vs Défensive

Deux approches :
- **Avancée** : ward profond dans leur jungle (si vous dominez)
- **Défensive** : ward tribush/river (si vous êtes poussé)
- Adaptez selon votre **position** en lane

## Timing des Wards

Quand placer vos wards :
- Vers **3:00-3:30** : premier clear jungle fini
- Après chaque **back** : rafraîchissez vos wards
- Quand vous **poussez** : vous êtes vulnérable
- Ward **avant** de faire un play agressif

## Control Wards

Valeur des **Control Wards** :
- Détruisent les wards ennemis
- Donnent une **vision permanente**
- Placez-les dans les bushes de lane ou tribush
- **Investissement** rentable pour votre sécurité`,

  // Practice Instructions
  `## Objectif

Maîtriser le placement de wards pour sécuriser votre lane top contre les ganks.

## Étapes

1. Identifiez le tribush et le river bush de votre côté
2. Placez votre première ward vers 3:00-3:30
3. Achetez des Control Wards à chaque back
4. Adaptez votre ward (avancée ou défensive) selon votre position
5. Observez combien de ganks vous évitez grâce à vos wards

## Critère de réussite

Vous évitez la majorité des ganks ennemis grâce à vos wards bien placées.`,

  // Questions
  [
    createQuestion(
      "Pourquoi le ward est crucial en top lane ?",
      "Pour voir les sbires",
      "Pour anticiper les ganks car vous êtes isolé",
      "Pour faire plus de dégâts",
      "Ce n'est pas important",
      'b',
      "L'isolement rend les ganks très dangereux, le ward vous protège."
    ),
    createQuestion(
      "Le tribush est situé où ?",
      "Au milieu de la lane",
      "Le bush triangulaire près de votre lane",
      "Dans la base ennemie",
      "Près du Dragon",
      'b',
      "Le tribush est le bush en triangle près de la tour."
    ),
    createQuestion(
      "Ward la rivière permet de voir quoi ?",
      "Uniquement les sbires",
      "Les roams du mid et le passage du jungler",
      "Les dragons",
      "Rien d'utile",
      'b',
      "Le river bush montre les mouvements mid et jungle."
    ),
    createQuestion(
      "Quand placer sa première ward en top ?",
      "Au niveau 1",
      "Vers 3:00-3:30 quand le jungler finit son clear",
      "À 10 minutes",
      "Jamais",
      'b',
      "Le jungler termine son premier clear vers 3:00-3:30."
    ),
    createQuestion(
      "Une ward avancée est placée quand vous ?",
      "Perdez la lane",
      "Dominez et pouvez aller dans leur jungle",
      "Êtes sous tour",
      "AFK farm",
      'b',
      "Ward avancée quand vous dominez et pouvez explorer."
    ),
    createQuestion(
      "Une Control Ward fait quoi de spécial ?",
      "Donne de l'or",
      "Détruit les wards ennemis et donne vision permanente",
      "Fait des dégâts",
      "Soigne",
      'b',
      "Les Control Wards révèlent et détruisent les wards ennemies."
    ),
    createQuestion(
      "Après chaque back, que devez-vous faire côté vision ?",
      "Ignorer les wards",
      "Rafraîchir vos wards et acheter une Control Ward",
      "Vendre vos wards",
      "Ward la base",
      'b',
      "Renouvelez vos wards et achetez des Control Wards régulièrement."
    ),
    createQuestion(
      "Quand êtes-vous le plus vulnérable aux ganks ?",
      "Sous votre tour",
      "Quand vous poussez vers leur tour",
      "À la fontaine",
      "En base",
      'b',
      "Pousser vous expose car vous êtes loin de votre tour."
    ),
    createQuestion(
      "Où placer une Control Ward en top ?",
      "Dans la base",
      "Dans le tribush ou les bushes de lane",
      "Près du Dragon",
      "Au milieu de la lane",
      'b',
      "Tribush et bushes de lane sont des spots de Control Ward."
    ),
    createQuestion(
      "Avant de faire un play agressif, que faire ?",
      "Foncer sans réfléchir",
      "Ward pour vous assurer qu'il n'y a pas d'ennemi caché",
      "Retourner en base",
      "Attendre 5 minutes",
      'b',
      "Ward avant les plays agressifs pour éviter les surprises."
    ),
  ]
);
