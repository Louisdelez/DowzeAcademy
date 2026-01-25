import { createModule, createQuestion } from '../utils';

export const module07PracticeTool = createModule(
  "Mode d'entraînement (Practice Tool)",
  'practice-tool',
  "Utiliser le Practice Tool pour perfectionner ses mécaniques sans pression",
  7,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le Practice Tool ?

Le **Practice Tool** est un mode d'entraînement privé dans League of Legends. Il vous permet de vous exercer seul sur la carte de la Faille de l'Invocateur avec des outils spéciaux pour simuler différentes situations.

## Accéder au Practice Tool

Pour lancer une session d'entraînement :
1. Cliquez sur **Jouer** dans le client
2. Sélectionnez **Entraînement**
3. Choisissez **Outil d'entraînement**
4. Sélectionnez votre champion et lancez

Vous serez seul sur la carte avec accès à des commandes spéciales.

## Les outils disponibles

Le Practice Tool offre de nombreuses fonctionnalités :
- **Rafraîchir cooldowns** : Remet toutes vos compétences disponibles
- **Ajouter de l'or** : Pour tester différents builds
- **Niveau instantané** : Passer directement niveau 18
- **Spawn d'ennemis** : Faire apparaître des mannequins
- **Téléportation** : Se déplacer instantanément
- **Désactiver la régénération des tourelles** : Pour tester les dives

## Exercices recommandés

Voici des exercices efficaces à pratiquer :
1. **Last-hitting** : S'entraîner à 100 CS en 10 minutes sans objets
2. **Combos** : Répéter les combos de votre champion jusqu'à les maîtriser
3. **Flash-combos** : Pratiquer les combos incluant Flash
4. **Animation cancels** : Maîtriser les annulations d'animation
5. **Clear jungle** : Optimiser votre chemin de jungle

La répétition dans un environnement sans stress est la clé.

## Intégrer le Practice Tool dans sa routine

Pour progresser efficacement :
- **Avant une session** : 5-10 minutes de warm-up sur les combos
- **Nouveau champion** : Passer 30 minutes à explorer ses capacités
- **Après un tutoriel** : Pratiquer immédiatement ce que vous avez appris
- **Quand vous êtes tilt** : Une pause pour s'entraîner calmement

Le Practice Tool est sous-utilisé par la plupart des joueurs. Ceux qui l'utilisent régulièrement ont un avantage certain.`,

  // Practice Instructions
  `## Objectif

Découvrir et maîtriser les fonctionnalités du Practice Tool pour créer une routine d'échauffement.

## Étapes

1. Lancez League of Legends et accédez à Jouer > Entraînement > Outil d'entraînement
2. Choisissez votre champion principal
3. Explorez le menu d'options (en bas à gauche)
4. Testez la fonction "Ajouter de l'or" et achetez votre build complet
5. Testez "Rafraîchir les cooldowns" pour spam vos sorts
6. Faites apparaître un mannequin ennemi et pratiquez vos combos
7. Chronométrez-vous : essayez d'atteindre 50 CS en 5 minutes

## Critère de réussite

Vous connaissez les principales fonctions du Practice Tool et avez réussi à atteindre au moins 45 CS en 5 minutes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Où trouve-t-on le Practice Tool dans le client ?",
      "Dans Jouer > Ranked",
      "Dans Jouer > Entraînement > Outil d'entraînement",
      "Dans Collection > Champions",
      "Dans Profil > Statistiques",
      'b',
      "Le Practice Tool est accessible via Jouer > Entraînement > Outil d'entraînement."
    ),
    createQuestion(
      "Quelle fonctionnalité permet de tester un build complet rapidement ?",
      "Rafraîchir les cooldowns",
      "Ajouter de l'or instantanément",
      "Téléportation",
      "Désactiver les tourelles",
      'b',
      "L'ajout d'or permet d'acheter instantanément tous les objets souhaités."
    ),
    createQuestion(
      "Quel exercice est recommandé pour améliorer son CS ?",
      "Tuer le Baron",
      "S'entraîner à 100 CS en 10 minutes",
      "Détruire toutes les tourelles",
      "Jouer contre des bots",
      'b',
      "S'entraîner au last-hitting avec un objectif de CS est un excellent exercice."
    ),
    createQuestion(
      "Qu'est-ce qu'un animation cancel ?",
      "Un bug à éviter",
      "L'annulation d'une animation pour agir plus vite",
      "Une option graphique",
      "Un type de sort",
      'b',
      "L'animation cancel permet de raccourcir les animations pour enchaîner les actions plus vite."
    ),
    createQuestion(
      "Combien de temps de warm-up est recommandé avant une session ?",
      "0 minutes",
      "5-10 minutes",
      "1 heure",
      "30 secondes",
      'b',
      "5-10 minutes de warm-up permettent de se préparer efficacement."
    ),
    createQuestion(
      "Pour quoi le Practice Tool est-il particulièrement utile sur un nouveau champion ?",
      "Pour gagner de l'XP",
      "Pour explorer ses capacités et apprendre ses combos",
      "Pour débloquer des skins",
      "Pour améliorer son rang",
      'b',
      "Le Practice Tool permet d'apprendre les capacités d'un champion sans pression."
    ),
    createQuestion(
      "Que permet la fonction 'Spawn d'ennemis' ?",
      "Faire apparaître de vrais joueurs",
      "Faire apparaître des mannequins pour tester les dégâts",
      "Invoquer des monstres de jungle",
      "Créer des coéquipiers IA",
      'b',
      "Cette fonction crée des mannequins pour tester combos et dégâts."
    ),
    createQuestion(
      "Pourquoi le Practice Tool est-il sous-utilisé selon le cours ?",
      "Il est payant",
      "La plupart des joueurs ne réalisent pas ses bénéfices",
      "Il est trop compliqué",
      "Il n'existe pas vraiment",
      'b',
      "Beaucoup de joueurs ignorent l'avantage que procure un entraînement régulier."
    ),
    createQuestion(
      "Quand est-il conseillé d'utiliser le Practice Tool pour se calmer ?",
      "Jamais",
      "Quand on est tilt",
      "Uniquement le matin",
      "Avant chaque partie ranked",
      'b',
      "Le Practice Tool offre un environnement sans stress pour se calmer après des parties frustrantes."
    ),
    createQuestion(
      "Quel objectif de CS en 5 minutes est un bon benchmark ?",
      "20 CS",
      "50 CS",
      "100 CS",
      "10 CS",
      'b',
      "50 CS en 5 minutes est un bon objectif initial pour le last-hitting."
    ),
  ]
);
