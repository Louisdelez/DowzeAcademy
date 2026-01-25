import { createModule, createQuestion } from '../utils';

export const module11ObjectivePriority = createModule(
  'Priorisation des objectifs',
  'objective-priority',
  "Comprendre quel objectif vaut le plus selon le contexte de la partie",
  11,
  // Theory Content (5+ slides)
  `## La hiérarchie des objectifs

Tous les objectifs n'ont pas la même valeur. Savoir **prioriser** les objectifs selon le contexte de la partie est une compétence clé pour grimper en rang. La priorité change selon le timing et l'état du jeu.

## Priorité générale (du plus au moins important)

1. **Nexus** - Gagner la partie est toujours la priorité #1
2. **Inhibiteur** - Crée une pression énorme avec les super sbires
3. **Baron/Âme du dragon** - Buffs game-changing
4. **Tourelles (surtout T3 et inhib)** - Ouvrent la base
5. **Dragons élémentaires** - Buffs permanents
6. **Héraut** - Bon pour les tourelles
7. **Tourelles extérieures** - Or et map control

## La priorité change selon le timing

**Early game (0-14 min)** :
- Tourelles > Dragons (sauf si gratuit)
- First Tower = priorité haute
- Héraut très précieux

**Mid game (14-25 min)** :
- Outer tourelles = Dragons
- Baron devient disponible (20 min)
- 3ème/4ème dragon = priorité croissante

**Late game (25+ min)** :
- Baron/Âme > tout le reste
- Inhibiteurs = très précieux
- Elder Dragon = win condition

## Contexte de composition

Votre **composition d'équipe** influence la priorité :
- Comp teamfight → Baron pour forcer les fights
- Comp split-push → Tourelles et Héraut
- Comp scale → Dragons et objectifs sécurisés

## Le concept de 'win condition'

Identifiez ce dont votre équipe a besoin pour gagner :
- En retard ? Vous avez besoin de staller et scale
- En avance ? Prenez des objectifs pour snowball
- Comp tardive ? Ne forcez pas Baron risqué

## Erreurs communes de priorisation

- Chasser des kills au lieu de prendre le Nexus
- Faire Baron quand vous pouvez finir
- Ignorer les dragons jusqu'à ce qu'il soit trop tard
- Prendre un camp jungle au lieu d'un objectif gratuit

## Le principe 'Objectif > Kill'

Un kill ne vaut que si vous en faites quelque chose. Après un fight gagné :
1. Quel objectif pouvons-nous prendre ?
2. Avons-nous le temps et les ressources ?
3. Est-ce le bon play ou devons-nous recall ?`,

  // Practice Instructions
  `## Objectif

Développer votre sens de la priorisation des objectifs selon le contexte de la partie.

## Étapes

1. Regardez un VOD commenté de partie pro (LEC, LCK, Worlds)
2. À chaque prise d'objectif, notez pourquoi cette équipe l'a choisi
3. Identifiez les moments où une équipe a mal priorisé
4. Pour 5 situations différentes, classez les objectifs disponibles par ordre de priorité
5. Comparez votre classement avec les choix faits par les pros
6. Analysez les différences et comprenez le raisonnement

## Critère de réussite

Vous pouvez évaluer et classer les objectifs disponibles par ordre de priorité selon le timing et le contexte d'une partie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est toujours l'objectif de priorité maximale ?",
      "Le Baron Nashor",
      "L'Âme du dragon",
      "Le Nexus ennemi",
      "La First Tower",
      'c',
      "Le Nexus est toujours la priorité #1 car le détruire gagne la partie."
    ),
    createQuestion(
      "En early game, que prioriser généralement ?",
      "Dragons à tout prix",
      "Baron Nashor",
      "Tourelles et Héraut",
      "Attendre en jungle",
      'c',
      "En early game, les tourelles et le Héraut permettent d'ouvrir la carte et de snowball."
    ),
    createQuestion(
      "Pourquoi les inhibiteurs sont-ils si précieux ?",
      "Ils donnent beaucoup d'or",
      "Ils créent des super sbires qui pressent constamment",
      "Ils buffent votre équipe",
      "Ils désactivent les tourelles",
      'b',
      "Un inhibiteur détruit génère des super sbires qui forcent l'ennemi à défendre."
    ),
    createQuestion(
      "Le 4ème dragon devient priorité maximale car...",
      "Il spawn le Baron",
      "Il donne l'Âme du dragon",
      "Il donne plus d'or",
      "Il détruit une tourelle",
      'b',
      "Le 4ème dragon confère l'Âme, un buff permanent extrêmement puissant."
    ),
    createQuestion(
      "Après avoir gagné un teamfight 5v0, que devriez-vous faire ?",
      "Recall pour acheter",
      "Prendre l'objectif le plus impactant disponible",
      "Farmer la jungle",
      "Attendre que l'ennemi respawn",
      'b',
      "Après un ace, vous devez convertir en prenant des objectifs majeurs (Baron, inhibs, Nexus)."
    ),
    createQuestion(
      "Quelle erreur de priorisation est très commune en low elo ?",
      "Faire trop de Baron",
      "Chasser les kills au lieu de prendre des objectifs",
      "Prendre trop de dragons",
      "Focus trop les tourelles",
      'b',
      "Beaucoup de joueurs chassent les kills au lieu de convertir en objectifs concrets."
    ),
    createQuestion(
      "Pour une composition split-push, quel objectif prioriser ?",
      "Baron pour teamfight",
      "Dragons pour scale",
      "Tourelles et Héraut",
      "Seulement les kills",
      'c',
      "Une comp split-push veut des tourelles pour ouvrir la map et pressurer les lanes."
    ),
    createQuestion(
      "En late game, Baron ou Âme du dragon ?",
      "Baron toujours",
      "Âme toujours",
      "Ça dépend du contexte (les deux sont très importants)",
      "Aucun des deux",
      'c',
      "Les deux sont game-changing en late game ; le choix dépend de la situation et du dragon count."
    ),
    createQuestion(
      "Vous pouvez finir le Nexus ou faire Baron. Que choisir ?",
      "Baron pour être sûr",
      "Le Nexus pour gagner immédiatement",
      "Faire les deux",
      "Recall d'abord",
      'b',
      "Si vous pouvez finir, finissez ! Le Nexus gagne la partie, le Baron ne fait que vous y aider."
    ),
    createQuestion(
      "Le principe 'Objectif > Kill' signifie...",
      "Ne jamais tuer les ennemis",
      "Toujours ignorer les kills",
      "Un kill ne vaut que si vous le convertissez en objectif",
      "Les objectifs tuent les ennemis",
      'c',
      "Les kills sont des opportunités pour prendre des objectifs - c'est la conversion qui compte."
    ),
  ]
);
