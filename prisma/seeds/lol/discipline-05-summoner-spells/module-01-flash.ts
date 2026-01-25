import { createModule, createQuestion } from '../utils';

export const module01Flash = createModule(
  'Flash',
  'flash-spell',
  'Le sort d\'invocateur universel de mobilité',
  1,
  // Theory Content
  `## Le sort le plus important

**Flash** est considéré comme le sort d'invocateur le plus important du jeu. Quasiment tous les joueurs le prennent sur tous les champions.

## Fonctionnement

Flash téléporte instantanément votre champion :
- **400 unités** dans la direction visée
- Passe à travers les **murs fins**
- **Instantané** (pas d'animation)
- **Cooldown** de 300 secondes (5 minutes)

## Utilisations offensives

Flash peut servir à attaquer :
- **Engager** une cible hors de portée
- **Surprendre** l'ennemi avec un combo
- Combiner avec un CC : Flash + Stun
- Exemples : Flash + Malphite R, Flash + Annie Stun

## Utilisations défensives

Flash sauve des vies :
- **Fuir** un ennemi ou un gank
- **Esquiver** un skillshot mortel
- Passer un **mur** pour s'échapper
- Éviter une situation de mort certaine

## Importance du Flash

Pourquoi Flash est-il si crucial :
- Extrêmement **polyvalent**
- Crée des **opportunités** offensives
- **Filet de sécurité** défensif
- Un joueur sans Flash est **vulnérable**

## Récapitulatif

- Flash = téléportation de 400 unités
- Cooldown de 5 minutes
- Pris par 99% des joueurs
- Offensif (engage, surprise) et défensif (fuite)
- Un joueur sans Flash est une cible facile`,

  // Practice Instructions
  `## Objectif

Maîtriser l'utilisation de Flash en situations offensives et défensives.

## Étapes

1. Lancez une partie d'entraînement avec Flash en D ou F
2. Pratiquez le Flash basique (téléportation simple)
3. Trouvez des murs fins et flashez à travers
4. Pratiquez un Flash offensif sur mannequin + combo
5. Simulez une fuite en flashant par-dessus un mur

## Critère de réussite

Vous savez utiliser Flash pour engager, esquiver et fuir par-dessus les murs.`,

  // Questions
  [
    createQuestion(
      "Quelle distance parcourt Flash ?",
      "200 unités",
      "400 unités",
      "600 unités",
      "1000 unités",
      'b',
      "Flash téléporte de 400 unités dans la direction visée."
    ),
    createQuestion(
      "Quel est le cooldown de Flash ?",
      "180 secondes",
      "240 secondes",
      "300 secondes (5 minutes)",
      "400 secondes",
      'c',
      "Flash a un cooldown de 300 secondes, soit 5 minutes."
    ),
    createQuestion(
      "Peut-on traverser les murs avec Flash ?",
      "Non, jamais",
      "Oui, les murs fins",
      "Seulement en ranked",
      "Seulement certains murs",
      'b',
      "Flash peut traverser les murs suffisamment fins."
    ),
    createQuestion(
      "Pourquoi presque tout le monde prend Flash ?",
      "C'est obligatoire",
      "Il est extrêmement polyvalent (engage et fuite)",
      "Il fait des dégâts",
      "Il soigne",
      'b',
      "Flash offre des options offensives et défensives que rien ne peut remplacer."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'Flash engage' ?",
      "Utiliser Flash pour fuir",
      "Utiliser Flash pour attaquer/surprendre",
      "Gagner Flash",
      "Perdre Flash",
      'b',
      "Flash engage = utiliser Flash pour surprendre et attaquer l'ennemi."
    ),
    createQuestion(
      "Pourquoi un joueur sans Flash est-il vulnérable ?",
      "Il fait moins de dégâts",
      "Il ne peut pas échapper facilement aux ganks",
      "Il perd de l'or",
      "Il est ralenti",
      'b',
      "Sans Flash, il est beaucoup plus facile de tuer ce joueur."
    ),
    createQuestion(
      "Flash + Malphite R est un exemple de ?",
      "Combo défensif",
      "Combo offensif de surprise/engage",
      "Combo de farm",
      "Combo de heal",
      'b',
      "Flash R de Malphite est un engage surprise dévastateur."
    ),
    createQuestion(
      "Peut-on utiliser Flash pendant un CC ?",
      "Oui, toujours",
      "Non, on ne peut rien faire pendant un CC",
      "Seulement pendant les slows",
      "Seulement avec certains champions",
      'b',
      "Flash ne peut pas être utilisé si vous êtes stunned ou CC."
    ),
    createQuestion(
      "Pourquoi tracker le Flash ennemi ?",
      "Pour le voler",
      "Pour savoir quand l'ennemi est vulnérable pendant 5 min",
      "C'est inutile",
      "Pour gagner de l'or",
      'b',
      "Un ennemi sans Flash pendant 5 minutes est une cible prioritaire."
    ),
    createQuestion(
      "Sur quelle touche Flash est-il généralement mis ?",
      "Seulement D",
      "Seulement F",
      "D ou F selon les joueurs",
      "R",
      'c',
      "Les joueurs mettent Flash en D ou F selon leur préférence."
    ),
  ]
);
