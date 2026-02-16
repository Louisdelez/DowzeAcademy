# Data Model: League of Legends Training V2

**Feature**: 006-lol-training-v2
**Date**: 2026-01-23

## Overview

Cette feature utilise le modèle de données existant de Dowze Academy. Aucune modification de schéma n'est requise. Ce document décrit comment les données de contenu seront structurées.

## Existing Entities (No Changes)

### Domain
```prisma
model Domain {
  id          String   @id @default(uuid())
  name        String   @unique
  description String?
  icon        String?
  status      ContentStatus
  order       Int      @default(0)
  packs       Pack[]
}
```

**Usage**: Un Domain "Gaming" existe déjà.

### Pack
```prisma
model Pack {
  id          String   @id @default(uuid())
  domainId    String
  name        String
  description String?
  status      ContentStatus
  order       Int      @default(0)
  disciplines Discipline[]
}
```

**Usage**: Un Pack "League of Legends - Complete Journey" sera créé (remplace "League of Legends - Complete Journey" existant).

### Discipline
```prisma
model Discipline {
  id          String   @id @default(uuid())
  packId      String
  name        String
  description String?
  status      ContentStatus
  order       Int      @default(0)
  modules     Module[]
}
```

**Usage**: Une Discipline "Formation Complète" sera créée avec les 26 modules.

### Module
```prisma
model Module {
  id            String   @id @default(uuid())
  disciplineId  String
  name          String
  description   String?
  status        ContentStatus
  order         Int      @default(0)
  prerequisites String[] // Module names
  lesson        Lesson?
}
```

**Usage**: 26 Modules seront créés, un par chapitre du PDF.

### Lesson
```prisma
model Lesson {
  id                    String   @id @default(uuid())
  moduleId              String   @unique
  theoryContent         String   @db.Text
  quizThreshold         Int      @default(70)
  practiceType          PracticeType
  practiceInstructions  String   @db.Text
  practiceTimerDuration Int?     @default(300)
  mode                  LessonMode @default(SLIDES)
  // Feature 005 fields
  questionsToShow       Int?
  shuffleQuestions      Boolean  @default(true)
  shuffleAnswers        Boolean  @default(true)
  questions             QuizQuestion[]
}
```

**Usage**: 26 Lessons avec theoryContent (5+ slides), questions (10 QCM), practiceInstructions.

### QuizQuestion
```prisma
model QuizQuestion {
  id                  String       @id @default(uuid())
  lessonId            String
  questionText        String       @db.Text
  questionType        QuestionType
  options             Json?        // Legacy - still used for seed
  correctAnswer       Json         // Legacy - still used for seed
  feedback            String?      @db.Text
  linkedTheorySection String?
  order               Int          @default(0)
  choices             QuizOption[] // Feature 005
}
```

**Usage**: 260 QuizQuestions (10 par module).

### QuizOption
```prisma
model QuizOption {
  id         String   @id @default(uuid())
  questionId String
  text       String   @db.Text
  isCorrect  Boolean  @default(false)
  order      Int      @default(0)
}
```

**Usage**: 1040 QuizOptions (4 par question × 260 questions). Créées automatiquement par le seed.

## Content Structure

### Module Data Format

Chaque module suit cette structure:

```typescript
interface ModuleData {
  name: string;           // "Chapitre X: Titre du PDF"
  description: string;    // Description courte
  theoryContent: string;  // Markdown avec 5+ sections ##
  practiceType: 'IN_GAME';
  practiceInstructions: string; // Markdown avec Objectif, Étapes, Critère
  questions: QuestionData[];    // 10 questions QCM
}

interface QuestionData {
  text: string;
  type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
  options: Array<{ id: string; text: string }>;
  correctAnswer: string | string[];
  feedback: string;
  linkedTheorySection?: string;
}
```

### Theory Content Format

```markdown
## Concept clé

[Définition du concept principal du chapitre]

## Pourquoi c'est important

[Explication de l'utilité en jeu]

## Exemple concret

[Situation de jeu illustrant le concept]

## Erreurs fréquentes

[Les pièges à éviter]

## Mini-récap

[Résumé synthétique du chapitre]
```

### Practice Content Format

```markdown
## Objectif

[Ce que l'apprenant doit accomplir]

## Préparation

[Configuration nécessaire (mode Entraînement, champion, etc.)]

## Étapes

1. [Première action à réaliser]
2. [Deuxième action]
3. [Troisième action]
4. [Action finale]

## Critère de réussite

[Comment l'apprenant sait qu'il a réussi l'exercice]
```

## Data Volume

| Entity | Count | Notes |
|--------|-------|-------|
| Domain | 1 | "Gaming" (existant) |
| Pack | 1 | "League of Legends" (remplace existant) |
| Discipline | 1 | "Formation Complète" |
| Module | 26 | 1 par chapitre PDF |
| Lesson | 26 | 1 par module |
| QuizQuestion | 260 | 10 par module |
| QuizOption | 1040 | 4 par question |
| Slides (parsed) | 130+ | 5+ par module |

## Relationships

```
Domain (Gaming)
└── Pack (League of Legends)
    └── Discipline (Formation Complète)
        ├── Module 1 (Introduction et fondamentaux)
        │   └── Lesson
        │       ├── theoryContent (5+ slides)
        │       ├── QuizQuestions (10)
        │       │   └── QuizOptions (4 each)
        │       └── practiceInstructions
        ├── Module 2 (La carte de la Faille)
        │   └── Lesson...
        └── ... (26 modules total)
```

## Validation Rules

1. **Module**: Doit avoir exactement 1 Lesson
2. **Lesson.theoryContent**: Doit contenir au moins 5 sections `##`
3. **Lesson.questions**: Doit avoir exactement 10 QuizQuestions
4. **Lesson.questionsToShow**: Doit être 5
5. **QuizQuestion.options**: Doit avoir exactement 4 options (a, b, c, d)
6. **Lesson.practiceInstructions**: Doit contenir Objectif, Étapes, Critère de réussite
