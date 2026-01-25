import { createModule, createQuestion } from '../utils';

export const module09FinalBuild = createModule(
  'Optimisation du build final',
  'final-build',
  'Sixieme item, elixirs et ajustements de fin de partie',
  9,
  // Theory Content (5+ slides)
  `## Le build complet : 6 items

En late game, les champions atteignent leur **build complet** de 6 items. A ce stade, chaque slot est precieux et les choix deviennent strategiques. Un mauvais 6e item peut couter cher face a un ennemi optimise.

## Choisir le 6e item

Le **sixieme item** doit repondre a la situation actuelle :

- **Item defensif** : Ange Gardien, Gargouille, Zhonyas (si vous etes focus)
- **Item offensif** : Plus de degats si vous etes safe
- **Anti-heal** : Si l'ennemi a beaucoup de sustain
- **Armure/RM** : Selon la source de degats principale ennemie
- **QSS/Mercure** : Si les CCs ennemis vous condamnent

Analysez les threats ennemis avant de finaliser votre build.

## Vendre les bottes en late game

En **tres late game** (45+ minutes, build full), certains joueurs vendent leurs bottes pour un 7e item :

**Avantages :**
- Plus de stats ou de degats
- Le combat decide tout, la mobilite compte moins

**Inconvenients :**
- Perte de vitesse de deplacement
- Rotations plus lentes
- Escapes plus difficiles

A considerer uniquement si le prochain fight decide la partie.

## Les elixirs

Les **elixirs** sont des consommables puissants disponibles apres niveau 9 :

- **Elixir de Sorcellerie** : +50 AP, vos competences brulent (mages)
- **Elixir de Rage** : +30 AD, attaques soignent (ADC, fighters)
- **Elixir de Fer** : +300 HP, tenacite et taille (tanks)
- **Elixir de Competence** : +Haste, +dommages aux tours (utilite)

En late game, **achetez toujours un elixir** avant les fights importants !

## Actualiser le build

Le build doit **evoluer** au cours de la partie :

- L'ennemi stack l'armure ? Achetez de la penetration
- Leur ADC est fed ? Considerez de la protection anti-AD
- Ils ont beaucoup de heal ? Integrez de l'anti-heal
- Vous avez des problemes de mana ? Ajoutez un item de mana

N'hesitez pas a **vendre et racheter** des items si necessaire.

## Optimisations finales

Avant le combat decisif :

- **Verifiez votre elixir** : En avez-vous un actif ?
- **Utilisez vos consommables** : Balises de controle placees ?
- **Completez les stacks** : Items a stacker (Mejais, etc.) sont-ils full ?
- **Vendez les components** : Pas de place pour des fragments inutiles
- **Ajustez les runes** : Certaines (Gathering Storm) sont plus fortes en late

## Recapitulatif

- Le build complet de 6 items est crucial en late game
- Le 6e item doit repondre a la situation (defensif, anti-heal, etc.)
- Vendre les bottes est risque mais possible en tres late game
- Achetez toujours un elixir avant les fights importants
- Actualisez votre build selon l'evolution de la partie`,

  // Practice Instructions
  `## Objectif

Apprendre a optimiser votre build pour le late game et utiliser les elixirs efficacement.

## Etapes

1. En partie, une fois votre build proche de 6 items, analysez les menaces ennemies
2. Choisissez votre 6e item en fonction de la situation (pas juste le build standard)
3. Achetez un elixir avant chaque combat important apres niveau 9
4. Si vous avez 3000+ or en late game, considerez de vendre les bottes
5. Apres la partie, evaluez si vos choix d'items etaient optimaux

## Critere de reussite

Vous avez achete un elixir avant un fight important et choisi un 6e item adapte a la situation plutot que de suivre un build pre-fait aveuglement.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien d'items peut contenir un build complet ?",
      "4 items",
      "5 items",
      "6 items",
      "7 items",
      'c',
      "Le build complet comporte 6 items, c'est la limite d'inventaire pour les items complets."
    ),
    createQuestion(
      "Comment choisir le 6e item ?",
      "Toujours le meme item peu importe la situation",
      "En analysant les menaces ennemies et la situation",
      "Au hasard",
      "Toujours offensif",
      'b',
      "Le 6e item doit repondre aux besoins specifiques de la partie : defense, anti-heal, etc."
    ),
    createQuestion(
      "Quand peut-on envisager de vendre ses bottes ?",
      "Des le debut de partie",
      "En tres late game (45+ min) quand le prochain fight decide tout",
      "A 20 minutes",
      "Jamais",
      'b',
      "Vendre les bottes pour un 7e item n'est viable qu'en tres late game quand un fight decide la partie."
    ),
    createQuestion(
      "Quel elixir est recommande pour les mages ?",
      "Elixir de Rage",
      "Elixir de Sorcellerie",
      "Elixir de Fer",
      "Elixir de Competence",
      'b',
      "L'Elixir de Sorcellerie donne de l'AP et fait bruler les ennemis, ideal pour les mages."
    ),
    createQuestion(
      "A partir de quel niveau peut-on acheter des elixirs ?",
      "Niveau 1",
      "Niveau 6",
      "Niveau 9",
      "Niveau 18",
      'c',
      "Les elixirs deviennent disponibles a l'achat a partir du niveau 9."
    ),
    createQuestion(
      "Que faire si l'equipe ennemie a beaucoup de sustain/heal ?",
      "Ignorer le heal",
      "Integrer de l'anti-heal dans le build",
      "Acheter plus de degats",
      "Fuir les combats",
      'b',
      "L'anti-heal (Grievous Wounds) reduit l'efficacite de leur sustain."
    ),
    createQuestion(
      "Peut-on vendre et racheter des items en late game ?",
      "Non, c'est impossible",
      "Oui, si un meilleur item est necessaire pour la situation",
      "Seulement les bottes",
      "Seulement les elixirs",
      'b',
      "Vendre un item pour en acheter un plus adapte est une strategie valide en late game."
    ),
    createQuestion(
      "Quel elixir convient aux tanks ?",
      "Elixir de Rage",
      "Elixir de Sorcellerie",
      "Elixir de Fer",
      "Elixir de Competence",
      'c',
      "L'Elixir de Fer donne de la vie, de la tenacite et augmente la taille, parfait pour les tanks."
    ),
    createQuestion(
      "Pourquoi l'Ange Gardien est-il populaire comme item defensif late game ?",
      "Il donne beaucoup de degats",
      "Il ressuscite le champion apres la mort",
      "Il augmente la vitesse",
      "Il donne de l'invisibilite",
      'b',
      "L'Ange Gardien ressuscite le champion, tres precieux en late game ou chaque mort compte."
    ),
    createQuestion(
      "Que verifier avant un combat decisif en late game ?",
      "Uniquement le kill score",
      "Elixir actif, build optimal, consommables utilises",
      "Le nombre de sbires",
      "La meteo sur la carte",
      'b',
      "Avant un fight decisif, assurez-vous d'avoir un elixir, un build adapte et d'avoir utilise vos consommables."
    ),
  ]
);
