import { createModule, createQuestion } from '../utils';

export const module15MidObjectivePriority = createModule(
  "Priorité mid avant objectif",
  'mid-objective-priority',
  'Pousser sa lane avant Dragon ou Baron',
  15,
  // Theory Content (5+ slides)
  `## Le lien entre mid et les objectifs

La mid lane a une relation **directe** avec les objectifs majeurs de la partie (Dragon, Baron, Rift Herald). Un mid laner qui comprend cette connexion domine le rythme du jeu.

**Pourquoi le mid est crucial pour les objectifs** :
- Position **centrale** = accès rapide aux deux pits
- **Priorité mid** = votre équipe peut commencer l'objectif
- **Vision** de la rivière = contrôle de l'information

Sans le mid, votre équipe est souvent en désavantage pour contest.

## Push avant objectif : la règle d'or

**TOUJOURS** pousser votre vague avant de rejoindre un objectif :

**Pourquoi pousser** :
- L'ennemi mid doit **choisir** : farm ou objectif
- S'il farm → avantage numérique sur l'objectif
- S'il vient → perd des CS et de l'XP

**Comment bien push** :
1. Observez le **timer** de l'objectif (Dragon spawn dans 30s)
2. **Push agressivement** 15-20 secondes avant le spawn
3. Faites **crasher** la vague sous la tour ennemie
4. **Rejoignez** votre équipe immédiatement

## Timing des différents objectifs

Les objectifs spawn à des moments clés :

**Rift Herald** (8:00 - 13:45) :
- Push mid → aide top ou jungle à le prendre
- Souvent sous-estimé, excellent pour ouvrir la carte

**Dragon** (5:00, puis 5 min respawn) :
- Push mid → join bot + jungler
- Le premier Dragon donne un buff permanent

**Baron** (20:00, puis 6 min respawn) :
- Le plus important objectif
- Push mid est **CRUCIAL** - perdre Baron = souvent perdre la partie
- Communiquez et attendez votre équipe

## Les erreurs à éviter

**Erreurs courantes** autour des objectifs :

- **Arriver en retard** car vous farmez encore la lane
- **Ne pas push** et laisser l'ennemi libre de contester
- **Face-check** le pit sans vision
- **Commencer sans le mid** laner
- **Ignorer** l'objectif pour des CS

**La règle** : Les objectifs > quelques CS. Un Dragon ou Baron peut décider la partie.

## Récapitulatif

- Le mid a un **rôle clé** dans le contrôle des objectifs
- **Push avant** chaque objectif (15-20s avant spawn)
- Force l'ennemi à **choisir** entre farm et contest
- Connaissez les **timers** : Herald 8:00, Dragon 5:00, Baron 20:00
- **Baron** est l'objectif le plus important - ne le ratez jamais
- Un bon **timing** de push peut donner un objectif gratuit`,

  // Practice Instructions
  `## Objectif

Apprendre à pousser votre lane au bon timing avant les objectifs majeurs.

## Étapes

1. Lancez une partie normale
2. Gardez un oeil sur les timers des objectifs :
   - Rift Herald : 8:00
   - Dragon : 5:00 (premier spawn)
   - Baron : 20:00

3. Pratiquez le cycle "Push avant objectif" :

   **Avant le premier Dragon (vers 4:30)** :
   - Commencez à push agressivement
   - Faites crasher la vague
   - Rejoignez votre équipe dans la rivière bot
   - Observez si le mid ennemi suit ou farm

   **Avant le Rift Herald (vers 7:30)** :
   - Push la vague
   - Vérifiez si top ou jungle veulent le faire
   - Rejoignez pour aider

   **Avant Baron (vers 19:30)** :
   - C'est LE moment crucial
   - Push agressivement
   - Placez de la vision
   - Groupez avec votre équipe

4. Comptez combien d'objectifs vous avez pu contest grâce à votre timing

## Critère de réussite

Vous arrivez à temps (avant le début) sur au moins 80% des objectifs contestés et votre push pré-objectif force au moins une fois l'ennemi mid à rater l'objectif pour farmer.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi le mid laner est-il crucial pour les objectifs comme Dragon et Baron ?",
      "Il fait plus de dégâts aux objectifs",
      "Sa position centrale lui permet d'y accéder rapidement et sa priorité influence le contest",
      "Il peut smite les objectifs",
      "Il n'est pas important pour les objectifs",
      'b',
      "La position centrale du mid et sa capacité à créer la priorité impactent directement le contrôle des objectifs."
    ),
    createQuestion(
      "Que devez-vous faire AVANT de rejoindre votre équipe pour un objectif ?",
      "Recall au shop",
      "Pousser votre vague sous la tour ennemie",
      "Attaquer le mid ennemi",
      "Warder votre jungle",
      'b',
      "Push avant l'objectif force l'ennemi à choisir entre farm et contest."
    ),
    createQuestion(
      "Combien de temps avant le spawn d'un objectif devez-vous commencer à push ?",
      "1 minute avant",
      "15-20 secondes avant",
      "Au moment exact du spawn",
      "5 minutes avant",
      'b',
      "15-20 secondes permettent de push et crash la vague avant de rejoindre à temps."
    ),
    createQuestion(
      "À quelle heure spawn le premier Dragon ?",
      "3:00",
      "5:00",
      "8:00",
      "10:00",
      'b',
      "Le premier Dragon spawn à 5:00, les suivants toutes les 5 minutes après mort."
    ),
    createQuestion(
      "À quelle heure spawn le Rift Herald ?",
      "5:00",
      "8:00",
      "10:00",
      "15:00",
      'b',
      "Le Rift Herald spawn à 8:00 et disparaît à 13:45 quand le Baron apparaît."
    ),
    createQuestion(
      "À quelle heure spawn le Baron Nashor ?",
      "15:00",
      "18:00",
      "20:00",
      "25:00",
      'c',
      "Le Baron Nashor spawn à 20:00, c'est l'objectif le plus important du jeu."
    ),
    createQuestion(
      "Si vous push avant Dragon et le mid ennemi reste farmer, qu'avez-vous créé ?",
      "Rien de spécial",
      "Un avantage numérique pour votre équipe sur l'objectif",
      "Un désavantage",
      "Une freeze",
      'b',
      "L'ennemi qui farm ne peut pas contest = votre équipe fait l'objectif en avantage numérique."
    ),
    createQuestion(
      "Pourquoi le Baron est-il considéré comme l'objectif le plus important ?",
      "Il donne beaucoup d'or",
      "Son buff permet de push et souvent de finir la partie",
      "Il respawn très vite",
      "Il est facile à tuer",
      'b',
      "Le buff Baron améliore les sbires et permet des push très puissants, souvent décisifs."
    ),
    createQuestion(
      "Quelle est une erreur courante des mid laners autour des objectifs ?",
      "Arriver trop tôt",
      "Arriver en retard car ils finissent de farmer leur lane",
      "Push trop la vague",
      "Communiquer trop",
      'b',
      "Beaucoup de mid laners ratent des objectifs en voulant finir de clear leur vague."
    ),
    createQuestion(
      "Si vous devez choisir entre 3 CS et arriver à temps au Baron, que choisissez-vous ?",
      "Les 3 CS, l'or est plus important",
      "Arriver à temps au Baron, l'objectif est plus important que quelques CS",
      "Ni l'un ni l'autre",
      "Farm la jungle à la place",
      'b',
      "Un Baron peut décider la partie - quelques CS ne compensent jamais un Baron perdu."
    ),
  ]
);
