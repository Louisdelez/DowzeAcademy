import { createModule, createQuestion } from '../utils';

export const module04TeamScrims = createModule(
  'Entraînement en équipe (scrims)',
  'team-scrims',
  "Parties d'entraînement organisées contre d'autres équipes",
  4,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'une scrim ?

Une **scrim** (scrimmage) est une partie d'entraînement organisée entre deux équipes. Contrairement à la solo queue, les scrims permettent de pratiquer la **communication d'équipe**, les **compositions coordonnées** et les **stratégies spécifiques** dans un environnement compétitif mais sans enjeu de classement.

## Les avantages des scrims

Les scrims offrent plusieurs bénéfices uniques : pratiquer des **compositions spécifiques**, tester de nouvelles **stratégies sans risque**, développer la **synergie d'équipe**, et recevoir du feedback d'une équipe adverse de niveau similaire. C'est le mode d'entraînement privilégié des équipes professionnelles.

## Organiser des scrims efficaces

Pour des scrims productives : trouvez des équipes de **niveau similaire**, fixez un **horaire régulier** (2-3 sessions par semaine minimum), établissez des **règles claires** (champions autorisés, pauses, remakes), et faites une **review après chaque session**.

## Les règles courantes en scrim

Les équipes s'accordent généralement sur : le **nombre de parties** (best-of-3 ou 5), les **pauses** entre les games, les **remakes** acceptables (bugs, déconnexions), et parfois des **bans ciblés** pour pratiquer contre des compositions spécifiques.

## La review post-scrim

La valeur des scrims vient aussi de l'**analyse après-match**. Notez les erreurs de rotation, les fails de communication, les timings d'objectifs ratés. Discutez en équipe de ce qui a fonctionné et ce qui doit être amélioré. Enregistrez les parties pour les revoir.

## Récapitulatif

- Les **scrims** sont des parties d'entraînement entre équipes organisées
- Elles permettent de pratiquer **compositions et stratégies** en équipe
- Trouvez des équipes de **niveau similaire** et établissez un **calendrier régulier**
- Définissez des **règles claires** (pauses, remakes, format)
- La **review post-scrim** est essentielle pour progresser`,

  // Practice Instructions
  `## Objectif

Organiser votre première session de scrim ou simuler l'organisation si vous n'avez pas encore d'équipe.

## Étapes

1. Formez une équipe de 5 joueurs ou rejoignez une équipe existante
2. Identifiez 2-3 équipes de niveau similaire pour des scrims
3. Proposez un horaire de scrim régulier (jour et heure fixe)
4. Rédigez un document avec les règles de scrim (format, pauses, remakes)
5. Après une scrim (ou partie flex), faites une review de 15 minutes en équipe

## Critère de réussite

Vous avez une équipe formée, au moins un contact pour des scrims, et un document de règles prêt.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une scrim ?",
      "Une partie ranked solo",
      "Une partie d'entraînement organisée entre deux équipes",
      "Un tournoi officiel",
      "Une partie contre des bots",
      'b',
      "Les scrims sont des matchs d'entraînement entre équipes pour pratiquer dans un environnement compétitif."
    ),
    createQuestion(
      "Quel est un avantage unique des scrims par rapport à la solo queue ?",
      "On gagne plus de LP",
      "On peut pratiquer des compositions coordonnées",
      "Les parties sont plus courtes",
      "Il n'y a pas de flamers",
      'b',
      "Les scrims permettent de tester des stratégies d'équipe impossibles à pratiquer en solo queue."
    ),
    createQuestion(
      "Quelle fréquence minimum est recommandée pour les scrims ?",
      "1 session par mois",
      "2-3 sessions par semaine",
      "1 session par jour",
      "Seulement avant les tournois",
      'b',
      "2-3 sessions par semaine permettent de développer une vraie synergie d'équipe."
    ),
    createQuestion(
      "Contre quel type d'équipe faut-il faire des scrims ?",
      "Uniquement des équipes bien meilleures",
      "Des équipes de niveau similaire",
      "Uniquement des équipes plus faibles",
      "N'importe quelle équipe disponible",
      'b',
      "Les équipes de niveau similaire offrent le meilleur équilibre pour apprendre."
    ),
    createQuestion(
      "Quel format est courant pour les sessions de scrim ?",
      "Une seule partie",
      "Best-of-3 ou best-of-5",
      "Parties infinies jusqu'à épuisement",
      "Format ARAM uniquement",
      'b',
      "Les formats best-of permettent de jouer plusieurs compositions et de s'adapter."
    ),
    createQuestion(
      "Que faut-il faire après chaque session de scrim ?",
      "Passer immédiatement à la solo queue",
      "Faire une review et analyser les erreurs",
      "Supprimer les replays",
      "Changer d'équipe adverse",
      'b',
      "La review post-scrim est essentielle pour identifier les axes d'amélioration."
    ),
    createQuestion(
      "Quelle règle est souvent établie pour les scrims ?",
      "Interdiction de communiquer",
      "Les conditions de remake acceptables",
      "Obligation de surrend à 15 minutes",
      "Pas de jungler autorisé",
      'b',
      "Les règles de remake (déconnexions, bugs) sont définies à l'avance pour éviter les conflits."
    ),
    createQuestion(
      "Pourquoi enregistrer les parties de scrim ?",
      "Pour les poster sur YouTube",
      "Pour les revoir et analyser en détail",
      "C'est obligatoire par Riot",
      "Pour prouver qu'on a joué",
      'b',
      "Les enregistrements permettent une analyse approfondie des erreurs et bonnes actions."
    ),
    createQuestion(
      "Quel mode d'entraînement utilisent les équipes professionnelles ?",
      "Uniquement la solo queue",
      "Les scrims contre d'autres équipes pro",
      "Les parties contre bots",
      "Le mode ARAM",
      'b',
      "Les scrims sont le mode d'entraînement principal des équipes professionnelles."
    ),
    createQuestion(
      "Que permettent les scrims de développer principalement ?",
      "Le KDA individuel",
      "La synergie et communication d'équipe",
      "Le nombre de champions maîtrisés",
      "La vitesse de frappe au clavier",
      'b',
      "Les scrims développent la coordination et la communication entre coéquipiers."
    ),
  ]
);
