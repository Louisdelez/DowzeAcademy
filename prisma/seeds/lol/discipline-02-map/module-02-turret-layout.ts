import { createModule, createQuestion } from '../utils';

export const module02TurretLayout = createModule(
  'Disposition des tourelles',
  'turret-layout',
  'T1, T2 et T3 : comprendre la hiérarchie des tourelles',
  2,
  // Theory Content
  `## Les tourelles par lane

Chaque lane possède **3 tourelles** par équipe, soit **9 tourelles** au total pour défendre la base. Elles sont numérotées de l'extérieur vers l'intérieur.

## Tourelle T1 (Outer Turret)

La **T1** est la tourelle extérieure :
- La **première** tourelle à détruire sur chaque lane
- La plus éloignée de la base
- Donne de l'or et des **plaques** pendant les 14 premières minutes
- Sa destruction ouvre la lane

## Tourelle T2 (Inner Turret)

La **T2** est la tourelle intérieure :
- Située entre la T1 et la T3
- Plus résistante que la T1
- Sa destruction permet d'accéder à l'inhibiteur
- Moins d'or que la T1 mais stratégiquement importante

## Tourelle T3 (Inhibitor Turret)

La **T3** protège l'inhibiteur :
- La dernière défense avant l'inhibiteur
- Régénère ses PV si elle n'est pas attaquée
- Doit être détruite pour attaquer l'inhibiteur
- Position très défensive

## Tourelles du Nexus

Après les inhibiteurs, **2 tourelles** protègent le Nexus :
- Ce sont les dernières défenses
- Elles ne se régénèrent pas
- Leur destruction permet d'attaquer le Nexus

## Récapitulatif

- **T1** = tourelle extérieure (avec plaques)
- **T2** = tourelle intérieure
- **T3** = tourelle d'inhibiteur (se régénère)
- 2 tourelles du Nexus = dernière défense
- Total : 11 tourelles par équipe`,

  // Practice Instructions
  `## Objectif

Identifier et localiser toutes les tourelles sur la carte.

## Étapes

1. Lancez une partie d'entraînement
2. Sur une lane (par exemple Mid), identifiez les 3 tourelles alliées
3. Traversez pour identifier les 3 tourelles ennemies
4. Localisez les 2 tourelles du Nexus de chaque équipe
5. Comptez le total des tourelles (22 sur la carte)

## Critère de réussite

Vous pouvez nommer chaque tourelle (T1, T2, T3) et comprendre l'ordre dans lequel elles doivent être détruites.`,

  // Questions
  [
    createQuestion(
      "Combien de tourelles protègent chaque lane par équipe ?",
      "2",
      "3",
      "4",
      "5",
      'b',
      "Chaque lane a 3 tourelles : T1, T2 et T3."
    ),
    createQuestion(
      "Comment s'appelle la tourelle extérieure ?",
      "T3",
      "Inner Turret",
      "T1 (Outer Turret)",
      "Nexus Turret",
      'c',
      "La T1 (Outer Turret) est la tourelle la plus éloignée de la base."
    ),
    createQuestion(
      "Quelle tourelle possède des plaques d'or ?",
      "T1",
      "T2",
      "T3",
      "Tourelles du Nexus",
      'a',
      "Les plaques de tourelle sont uniquement sur les T1, jusqu'à la 14e minute."
    ),
    createQuestion(
      "Quelle particularité a la T3 ?",
      "Elle donne plus d'or",
      "Elle se régénère si non attaquée",
      "Elle est invincible",
      "Elle peut bouger",
      'b',
      "La T3 (tourelle d'inhibiteur) régénère ses PV si on arrête de l'attaquer."
    ),
    createQuestion(
      "Combien de tourelles protègent directement le Nexus ?",
      "1",
      "2",
      "3",
      "4",
      'b',
      "Deux tourelles du Nexus constituent la dernière ligne de défense."
    ),
    createQuestion(
      "Dans quel ordre doit-on détruire les tourelles ?",
      "T3, T2, T1",
      "T1, T2, T3",
      "N'importe quel ordre",
      "T2, T1, T3",
      'b',
      "On doit détruire dans l'ordre : T1, puis T2, puis T3."
    ),
    createQuestion(
      "Que faut-il détruire avant d'attaquer l'inhibiteur ?",
      "La T1",
      "La T2",
      "La T3",
      "Les tourelles du Nexus",
      'c',
      "La T3 (tourelle d'inhibiteur) protège l'inhibiteur."
    ),
    createQuestion(
      "Combien de tourelles au total sur la carte ?",
      "18",
      "22",
      "24",
      "26",
      'b',
      "22 tourelles : 9 par lane (3×3) + 2 du Nexus = 11 par équipe × 2."
    ),
    createQuestion(
      "Jusqu'à quelle minute les plaques de tourelle existent-elles ?",
      "10 minutes",
      "14 minutes",
      "20 minutes",
      "Toute la partie",
      'b',
      "Les plaques de tourelle tombent à 14 minutes."
    ),
    createQuestion(
      "Quelle tourelle est la plus difficile à détruire seul ?",
      "T1",
      "T2",
      "T3 (car elle se régénère)",
      "Elles sont toutes pareilles",
      'c',
      "La T3 se régénère, rendant difficile de la détruire progressivement seul."
    ),
  ]
);
