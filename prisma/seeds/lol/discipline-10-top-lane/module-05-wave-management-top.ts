import { createModule, createQuestion } from '../utils';

export const module05WaveManagementTop = createModule(
  'Wave management en top',
  'wave-management-top',
  'Gestion des vagues spécifique au top',
  5,
  // Theory Content
  `## Wave Management au Top Lane

La gestion des vagues est **encore plus importante** au top car la lane est longue et l'isolement amplifie les erreurs.

## Pourquoi c'est crucial en top

Impact amplifié :
- Lane **longue** = plus de distance à parcourir si mal placé
- **Freeze** peut complètement zone l'ennemi
- **Gank** plus dangereux si mal positionné
- Le contrôle de vague = contrôle de la lane

## Le freeze top lane

Particulièrement puissant :
- Freeze près de **votre tourelle**
- L'ennemi doit s'**exposer** pour farm
- Parfait pour setup un **gank**
- Peut complètement **deny** l'ennemi

## Le slow push top

Utilisations :
- Avant de **TP** ou roam
- Pour setup un **dive** avec le jungler
- Avant le spawn du **Herald**
- Pour créer une grosse vague crash

## Quand push en top ?

Situations appropriées :
- Avant de **back**
- Après un **kill**
- Pour prendre des **plates**
- Pour **roam** vers mid ou jungle

## Gérer les vagues adverses

Réponses aux techniques ennemies :
- Si l'ennemi **freeze** : Demander un gank pour break
- Si l'ennemi **slow push** : Préparer à farm sous tourelle
- Si l'ennemi **push** constamment : Freezer ou call ganks`,

  // Practice Instructions
  `## Objectif

Maîtriser la gestion des vagues spécifique au top lane.

## Étapes

1. Pratiquez le freeze près de votre tourelle
2. Observez comment l'ennemi doit s'exposer pour farm
3. Apprenez à slow push avant un roam ou TP
4. Communiquez avec votre jungler pour les ganks
5. Adaptez selon ce que fait l'ennemi

## Critère de réussite

Vous utilisez le freeze pour setup des ganks et contrôlez la lane avec la wave management.`,

  // Questions
  [
    createQuestion(
      "Pourquoi la wave management est cruciale en top ?",
      "Pas important",
      "Lane longue qui amplifie les conséquences",
      "Seulement pour les pros",
      "Le jungler gère ça",
      'b',
      "La longueur de la lane rend le contrôle des vagues plus important."
    ),
    createQuestion(
      "Où freeze en top lane ?",
      "Au milieu",
      "Près de votre tourelle",
      "Sous tourelle ennemie",
      "Dans la rivière",
      'b',
      "Freeze près de votre tourelle pour maximiser la sécurité."
    ),
    createQuestion(
      "Le freeze permet de setup quoi ?",
      "Rien",
      "Des ganks car l'ennemi est exposé",
      "Des backs",
      "Des roams",
      'b',
      "Le freeze expose l'ennemi et rend les ganks plus faciles."
    ),
    createQuestion(
      "Quand slow push en top ?",
      "Jamais",
      "Avant de TP, roam, ou pour setup un dive",
      "Toujours",
      "Seulement level 1",
      'b',
      "Slow push avant les actions où vous quittez la lane."
    ),
    createQuestion(
      "Que faire si l'ennemi vous freeze ?",
      "Attendre indéfiniment",
      "Demander un gank pour break le freeze",
      "All-in",
      "AFK",
      'b',
      "Un gank peut casser un freeze et reset la lane."
    ),
    createQuestion(
      "Quand push en top lane ?",
      "Tout le temps",
      "Avant back, après kill, pour plates, pour roam",
      "Jamais",
      "Seulement après 20 minutes",
      'b',
      "Push dans des situations spécifiques pour maximiser les gains."
    ),
    createQuestion(
      "La lane longue rend les ganks comment ?",
      "Moins dangereux",
      "Plus dangereux car plus de distance à fuir",
      "Pas d'effet",
      "Impossibles",
      'b',
      "Plus de distance signifie plus de temps d'exposition aux ganks."
    ),
    createQuestion(
      "Slow push avant Herald est utile car ?",
      "Pas utile",
      "Crée de la pression et vous permet de prendre Herald",
      "Pour le farm",
      "Pour fuir",
      'b',
      "La vague crash pendant que vous prenez Herald."
    ),
    createQuestion(
      "Si l'ennemi push constamment, que faire ?",
      "Push aussi",
      "Freeze ou call des ganks",
      "Ignorer",
      "Quitter la lane",
      'b',
      "Freezer punit le push constant de l'ennemi."
    ),
    createQuestion(
      "Le contrôle de vague en top équivaut à ?",
      "Rien",
      "Contrôle de la lane",
      "Plus de dégâts",
      "Plus de vitesse",
      'b',
      "Qui contrôle les vagues contrôle la lane."
    ),
  ]
);
