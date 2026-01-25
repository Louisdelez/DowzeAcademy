import { createModule, createQuestion } from '../utils';

export const module07CursorControl = createModule(
  'Contrôle du curseur',
  'cursor-control',
  'Précision et rapidité avec la souris',
  7,
  // Theory Content
  `## Contrôle du curseur

La **précision** et la **vitesse** de votre curseur impactent directement votre performance. Un bon contrôle est fondamental.

## Importance du curseur

Pourquoi c'est crucial :
- **Viser** les skill shots avec précision
- **Cliquer** sur les bonnes cibles
- **Kiter** efficacement
- Réagir **rapidement** aux situations

## Sensibilité de la souris

Réglages importants :
- Trouver SA sensibilité **personnelle**
- Pas trop haute (imprécis) ni trop basse (lent)
- Cohérence avec les **autres jeux**
- Ajuster selon le **DPI** de la souris

## Position du curseur

Où garder le curseur :
- Près de là où l'**action** va se passer
- Sur les cibles **potentielles**
- Pas trop loin de votre champion
- Anticiper les **mouvements**

## Clics précis vs rapides

Équilibrer les deux :
- Certaines situations demandent de la **précision**
- D'autres demandent de la **rapidité**
- Le **kiting** demande les deux
- Le **targeting** en teamfight demande de la précision

## Améliorer le contrôle

Exercices et conseils :
- Utiliser un **aim trainer** (Aim Lab, Kovaaks)
- Pratiquer le **last-hit** pour la précision
- Jouer des champions demandant du **skill**
- Éviter de **bouger** le poignet inutilement`,

  // Practice Instructions
  `## Objectif

Améliorer la précision et la rapidité de votre contrôle de curseur.

## Étapes

1. Vérifiez vos paramètres de sensibilité
2. Jouez quelques parties en vous concentrant sur le curseur
3. Pratiquez le last-hit en visant précisément
4. Essayez un aim trainer comme Aim Lab (gratuit)
5. Observez où vous gardez votre curseur habituellement

## Critère de réussite

Vous cliquez régulièrement sur les bonnes cibles sans erreur de clic.`,

  // Questions
  [
    createQuestion(
      "Pourquoi le contrôle du curseur est important ?",
      "Pas important",
      "Pour viser, cliquer et kiter efficacement",
      "Seulement pour les pros",
      "Pour le farm uniquement",
      'b',
      "Le contrôle du curseur impacte toutes les mécaniques du jeu."
    ),
    createQuestion(
      "Une sensibilité trop haute cause quoi ?",
      "Plus de précision",
      "Mouvements imprécis et overshoots",
      "Rien",
      "Meilleur kiting",
      'b',
      "Une sensibilité trop haute rend les mouvements imprécis."
    ),
    createQuestion(
      "Où garder le curseur pendant le laning ?",
      "Sur son champion",
      "Près de l'action et des cibles potentielles",
      "Au coin de l'écran",
      "Sur la minimap",
      'b',
      "Gardez le curseur près de là où l'action se passe."
    ),
    createQuestion(
      "Qu'est-ce qu'un aim trainer ?",
      "Un champion",
      "Un logiciel pour améliorer la précision",
      "Un objet",
      "Un mode de jeu",
      'b',
      "Les aim trainers sont des logiciels pour pratiquer la visée."
    ),
    createQuestion(
      "Le DPI de la souris affecte-t-il le jeu ?",
      "Non",
      "Oui, combiné avec la sensibilité in-game",
      "Seulement les FPS",
      "Jamais",
      'b',
      "Le DPI et la sensibilité in-game déterminent la réactivité du curseur."
    ),
    createQuestion(
      "Quel exercice améliore la précision du curseur ?",
      "Ne rien faire",
      "Pratiquer le last-hit",
      "Regarder des streams",
      "Jouer AFK",
      'b',
      "Le last-hit nécessite des clics précis et aide à s'améliorer."
    ),
    createQuestion(
      "En teamfight, le curseur doit être où ?",
      "N'importe où",
      "Sur ou près des cibles prioritaires",
      "Sur soi-même",
      "Au centre de l'écran",
      'b',
      "Gardez le curseur près des cibles que vous voulez attaquer."
    ),
    createQuestion(
      "Le kiting demande quel type de contrôle ?",
      "Seulement précision",
      "Précision ET rapidité",
      "Seulement rapidité",
      "Aucun",
      'b',
      "Le kiting nécessite des clics rapides et précis."
    ),
    createQuestion(
      "Aim Lab est quoi ?",
      "Un champion",
      "Un aim trainer gratuit",
      "Un mode de LoL",
      "Un objet",
      'b',
      "Aim Lab est un aim trainer gratuit pour pratiquer."
    ),
    createQuestion(
      "Faut-il changer sa sensibilité souvent ?",
      "Oui, tout le temps",
      "Non, trouver la sienne et rester cohérent",
      "Chaque partie",
      "Jamais ajuster",
      'b',
      "Trouvez votre sensibilité et gardez-la pour la cohérence."
    ),
  ]
);
