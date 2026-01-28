/**
 * Seed Module Format Contract
 * Feature: 006-lol-training-v2
 *
 * Ce fichier définit le format exact des données pour chaque module
 * de la formation League of Legends.
 */

import { QuestionType, PracticeType, ContentStatus, LessonMode } from '@prisma/client';

/**
 * Format d'une option de question QCM
 */
export interface QuestionOption {
  /** Identifiant de l'option: 'a', 'b', 'c', ou 'd' */
  id: 'a' | 'b' | 'c' | 'd';
  /** Texte de l'option */
  text: string;
}

/**
 * Format d'une question QCM
 */
export interface QuestionData {
  /** Texte de la question */
  text: string;
  /** Type: SINGLE_CHOICE ou MULTIPLE_CHOICE */
  type: QuestionType;
  /** Exactement 4 options (A, B, C, D) */
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  /** ID de la/des bonne(s) réponse(s): 'a', 'b', 'c', 'd' ou tableau */
  correctAnswer: string | string[];
  /** Feedback explicatif après réponse */
  feedback: string;
  /** Titre de la slide liée (optionnel) */
  linkedTheorySection?: string;
}

/**
 * Format d'un module complet
 */
export interface ModuleData {
  /** Nom du module: "Chapitre X: Titre" */
  name: string;
  /** Description courte du module */
  description: string;
  /** Ordre du module (1-26) */
  order: number;
  /** Prérequis: noms des modules requis */
  prerequisites: string[];
  /** Contenu de la leçon */
  lesson: {
    /** Contenu théorique en Markdown avec 5+ sections ## */
    theoryContent: string;
    /** Type de pratique: toujours IN_GAME pour LoL */
    practiceType: PracticeType;
    /** Instructions de pratique en Markdown */
    practiceInstructions: string;
    /** Durée du timer pratique en secondes (défaut: 300) */
    practiceTimerDuration?: number;
    /** Seuil de réussite du quiz en % (défaut: 70) */
    quizThreshold?: number;
    /** Mode de la leçon: toujours SLIDES */
    mode: LessonMode;
    /** Nombre de questions à afficher (défaut: 5) */
    questionsToShow: number;
    /** Randomiser l'ordre des questions */
    shuffleQuestions: boolean;
    /** Randomiser l'ordre des réponses */
    shuffleAnswers: boolean;
    /** Pool de 10 questions QCM */
    questions: QuestionData[];
  };
}

/**
 * Exemple de module conforme au format
 */
export const exampleModule: ModuleData = {
  name: "Chapitre 1: Introduction et fondamentaux du jeu",
  description: "Découvrez les bases de League of Legends: objectif, déroulement d'une partie, et principes fondamentaux.",
  order: 1,
  prerequisites: [],
  lesson: {
    theoryContent: `## Concept clé

League of Legends est un jeu d'arène de bataille en ligne multijoueur (MOBA) où deux équipes de 5 joueurs s'affrontent. L'objectif principal est de détruire le Nexus adverse, structure centrale de la base ennemie.

## Pourquoi c'est important

Comprendre l'objectif fondamental du jeu permet de prendre de meilleures décisions à chaque instant. Chaque action doit contribuer directement ou indirectement à la destruction du Nexus ennemi.

## Exemple concret

Imaginez que vous êtes en train de farmer des sbires. Chaque sbire tué vous rapporte de l'or, qui vous permet d'acheter des objets, qui vous rendent plus fort, ce qui vous aide à gagner des combats, ce qui vous permet de pousser vers le Nexus.

## Erreurs fréquentes

- Se concentrer uniquement sur les kills sans objectifs
- Ignorer les structures (tours, inhibiteurs)
- Ne pas coordonner avec son équipe
- Perdre de vue l'objectif principal du jeu

## Mini-récap

LoL = Détruire le Nexus ennemi. Tout le reste (farm, kills, objectifs) n'est qu'un moyen pour atteindre cet objectif. Gardez toujours cette vision macro en tête.`,

    practiceType: 'IN_GAME' as PracticeType,

    practiceInstructions: `## Objectif

Lancer votre première partie d'entraînement pour vous familiariser avec l'interface et les contrôles de base.

## Préparation

1. Lancez League of Legends
2. Sélectionnez "Entraînement" dans le menu
3. Choisissez "Entraînement" (partie contre bots niveau intro)

## Étapes

1. Sélectionnez un champion facile à jouer (Garen, Ashe, ou Annie recommandés)
2. Une fois en jeu, familiarisez-vous avec le déplacement (clic droit)
3. Testez vos capacités (touches Q, W, E, R)
4. Tuez au moins 20 sbires (minions)
5. Détruisez au moins une tour ennemie

## Critère de réussite

Vous avez réussi l'exercice si vous avez:
- Joué une partie complète sans quitter
- Tué au moins 20 sbires
- Détruit au moins une tour`,

    practiceTimerDuration: 300,
    quizThreshold: 70,
    mode: 'SLIDES' as LessonMode,
    questionsToShow: 5,
    shuffleQuestions: true,
    shuffleAnswers: true,

    questions: [
      {
        text: "Quel est l'objectif principal d'une partie de League of Legends ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Avoir le plus de kills de l'équipe" },
          { id: 'b', text: "Détruire le Nexus ennemi" },
          { id: 'c', text: "Farmer le plus de sbires possible" },
          { id: 'd', text: "Atteindre le niveau 18 en premier" },
        ],
        correctAnswer: 'b',
        feedback: "Le Nexus est la structure centrale de chaque base. Le détruire met fin à la partie et donne la victoire à votre équipe.",
        linkedTheorySection: "Concept clé",
      },
      {
        text: "Combien de joueurs composent chaque équipe dans une partie standard ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "3 joueurs" },
          { id: 'b', text: "4 joueurs" },
          { id: 'c', text: "5 joueurs" },
          { id: 'd', text: "6 joueurs" },
        ],
        correctAnswer: 'c',
        feedback: "Une équipe standard de League of Legends est composée de 5 joueurs, chacun occupant un rôle spécifique.",
        linkedTheorySection: "Concept clé",
      },
      // ... 8 autres questions pour atteindre 10 au total
      {
        text: "Qu'est-ce qu'un MOBA ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Multiplayer Online Battle Arena" },
          { id: 'b', text: "Massive Online Base Attack" },
          { id: 'c', text: "Multi Objective Battle Action" },
          { id: 'd', text: "Mobile Online Browser Application" },
        ],
        correctAnswer: 'a',
        feedback: "MOBA signifie Multiplayer Online Battle Arena. C'est le genre de jeu auquel appartient League of Legends.",
        linkedTheorySection: "Concept clé",
      },
      {
        text: "Parmi ces actions, laquelle contribue directement à l'objectif principal ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Accumuler des kills sans pousser les lanes" },
          { id: 'b', text: "Farmer des sbires toute la partie" },
          { id: 'c', text: "Détruire les tours pour accéder au Nexus" },
          { id: 'd', text: "Rester dans la jungle en permanence" },
        ],
        correctAnswer: 'c',
        feedback: "Les tours protègent le chemin vers le Nexus. Les détruire est nécessaire pour atteindre et détruire le Nexus ennemi.",
        linkedTheorySection: "Pourquoi c'est important",
      },
      {
        text: "Qu'est-ce que le 'farm' dans League of Legends ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Cultiver des plantes dans la jungle" },
          { id: 'b', text: "Tuer des sbires pour gagner de l'or" },
          { id: 'c', text: "Rester AFK à la base" },
          { id: 'd', text: "Acheter des objets au magasin" },
        ],
        correctAnswer: 'b',
        feedback: "Le farm consiste à tuer les sbires (minions) pour accumuler de l'or, qui permet ensuite d'acheter des objets.",
        linkedTheorySection: "Exemple concret",
      },
      {
        text: "Quelle erreur fréquente peut empêcher de gagner une partie ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Détruire trop de tours" },
          { id: 'b', text: "Se concentrer uniquement sur les kills sans prendre d'objectifs" },
          { id: 'c', text: "Coordonner avec son équipe" },
          { id: 'd', text: "Garder une vision macro du jeu" },
        ],
        correctAnswer: 'b',
        feedback: "Les kills ne font pas gagner directement. Il faut convertir ces avantages en objectifs (tours, dragons, Nexus).",
        linkedTheorySection: "Erreurs fréquentes",
      },
      {
        text: "Que représente l'or dans League of Legends ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Un indicateur de niveau" },
          { id: 'b', text: "La ressource pour acheter des objets" },
          { id: 'c', text: "Les points de vie du champion" },
          { id: 'd', text: "L'expérience accumulée" },
        ],
        correctAnswer: 'b',
        feedback: "L'or est la ressource principale qui permet d'acheter des objets au magasin pour renforcer votre champion.",
        linkedTheorySection: "Exemple concret",
      },
      {
        text: "Qu'est-ce qu'un inhibiteur ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Un champion qui empêche les ennemis d'avancer" },
          { id: 'b', text: "Une structure qui protège le Nexus" },
          { id: 'c', text: "Un monstre de la jungle" },
          { id: 'd', text: "Un objet défensif" },
        ],
        correctAnswer: 'b',
        feedback: "L'inhibiteur est une structure située devant le Nexus. Sa destruction permet à vos sbires de devenir plus puissants dans cette lane.",
        linkedTheorySection: "Erreurs fréquentes",
      },
      {
        text: "Pourquoi est-il important de coordonner avec son équipe ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Pour avoir plus de fun" },
          { id: 'b', text: "Parce que le jeu l'oblige" },
          { id: 'c', text: "Pour maximiser les chances de prendre des objectifs et gagner" },
          { id: 'd', text: "Pour impressionner les spectateurs" },
        ],
        correctAnswer: 'c',
        feedback: "La coordination permet de combiner les forces de l'équipe pour prendre des objectifs et progresser vers la victoire.",
        linkedTheorySection: "Erreurs fréquentes",
      },
      {
        text: "Quelle affirmation résume le mieux la philosophie du jeu ?",
        type: 'SINGLE_CHOICE' as QuestionType,
        options: [
          { id: 'a', text: "Le joueur avec le plus de kills gagne" },
          { id: 'b', text: "Tout contribue à l'objectif final: détruire le Nexus" },
          { id: 'c', text: "Il faut éviter les combats à tout prix" },
          { id: 'd', text: "Seul le niveau du champion compte" },
        ],
        correctAnswer: 'b',
        feedback: "Farm, kills, objectifs... tout doit servir l'objectif principal: détruire le Nexus ennemi pour gagner.",
        linkedTheorySection: "Mini-récap",
      },
    ],
  },
};

/**
 * Validation des données d'un module
 */
export function validateModuleData(module: ModuleData): string[] {
  const errors: string[] = [];

  // Valider le nom
  if (!module.name.startsWith('Chapitre')) {
    errors.push('Le nom doit commencer par "Chapitre"');
  }

  // Valider le théorie content (minimum 5 sections ##)
  const theoryHeadings = module.lesson.theoryContent.match(/^## /gm) || [];
  if (theoryHeadings.length < 5) {
    errors.push(`Théorie: ${theoryHeadings.length} sections trouvées, minimum 5 requises`);
  }

  // Valider les questions (exactement 10)
  if (module.lesson.questions.length !== 10) {
    errors.push(`Questions: ${module.lesson.questions.length} trouvées, exactement 10 requises`);
  }

  // Valider chaque question (4 options)
  module.lesson.questions.forEach((q, i) => {
    if (q.options.length !== 4) {
      errors.push(`Question ${i + 1}: ${q.options.length} options, exactement 4 requises`);
    }
    const validIds = ['a', 'b', 'c', 'd'];
    q.options.forEach((opt, j) => {
      if (opt.id !== validIds[j]) {
        errors.push(`Question ${i + 1}, option ${j + 1}: id "${opt.id}" invalide, attendu "${validIds[j]}"`);
      }
    });
  });

  // Valider la pratique (Objectif, Étapes, Critère)
  const practiceContent = module.lesson.practiceInstructions;
  if (!practiceContent.includes('## Objectif')) {
    errors.push('Pratique: section "## Objectif" manquante');
  }
  if (!practiceContent.includes('## Étapes')) {
    errors.push('Pratique: section "## Étapes" manquante');
  }
  if (!practiceContent.includes('## Critère')) {
    errors.push('Pratique: section "## Critère" manquante');
  }

  // Valider questionsToShow
  if (module.lesson.questionsToShow !== 5) {
    errors.push(`questionsToShow: ${module.lesson.questionsToShow}, doit être 5`);
  }

  return errors;
}
