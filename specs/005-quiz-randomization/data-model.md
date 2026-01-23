# Data Model: Quiz Randomization V1

**Feature**: 005-quiz-randomization
**Date**: 2026-01-23

## Overview

This document describes the database schema changes required for quiz randomization. The design extends the existing `Lesson` and `QuizQuestion` models while adding new models for options and attempt tracking.

## Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CONTENT MODELS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐         ┌──────────────────┐         ┌──────────────────┐ │
│  │   Lesson    │ 1    N  │   QuizQuestion   │ 1    N  │    QuizOption    │ │
│  │─────────────│────────▶│──────────────────│────────▶│──────────────────│ │
│  │ + questionsToShow     │ id (UUID)        │         │ id (UUID)        │ │
│  │ + shuffleQuestions    │ questionText     │         │ text             │ │
│  │ + shuffleAnswers      │ questionType     │         │ isCorrect        │ │
│  └─────────────┘         │ correctOptionIds │         │ order            │ │
│                          └──────────────────┘         └──────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                             ATTEMPT MODELS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────┐     ┌─────────────────────────┐                   │
│  │    QuizAttempt      │ 1 N │  QuizAttemptQuestion    │                   │
│  │─────────────────────│────▶│─────────────────────────│                   │
│  │ id (UUID)           │     │ id                       │                   │
│  │ progressionId       │     │ attemptId                │                   │
│  │ lessonId            │     │ questionId               │                   │
│  │ status              │     │ position                 │                   │
│  │ questionsToShowSnap │     │ choiceMappingJson        │                   │
│  │ shuffleQuestionsSnap│     │ userAnswer               │                   │
│  │ shuffleAnswersSnap  │     │ isCorrect                │                   │
│  │ score               │     └─────────────────────────┘                   │
│  │ passed              │                                                    │
│  │ startedAt           │                                                    │
│  │ submittedAt         │                                                    │
│  └─────────────────────┘                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Schema Changes

### 1. Updated: Lesson Model

Add randomization configuration fields:

```prisma
model Lesson {
  id                     String                 @id @default(uuid())
  moduleId               String                 @unique
  theoryContent          String                 @db.Text
  quizThreshold          Int                    @default(70)
  practiceType           PracticeType
  practiceInstructions   String                 @db.Text
  practiceValidationMode PracticeValidationMode @default(DECLARATIVE)
  practiceTimerDuration  Int                    @default(300)
  mode                   LessonMode             @default(LEGACY)

  // NEW: Randomization settings
  questionsToShow        Int?                   // null = show all questions
  shuffleQuestions       Boolean                @default(true)
  shuffleAnswers         Boolean                @default(true)

  createdAt              DateTime               @default(now())
  updatedAt              DateTime               @updatedAt

  module    Module         @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  questions QuizQuestion[]
  attempts  QuizAttempt[]
}
```

### 2. Updated: QuizQuestion Model

Keep existing structure but add relation to options:

```prisma
model QuizQuestion {
  id                  String       @id @default(uuid())
  lessonId            String
  questionText        String       @db.Text
  questionType        QuestionType
  feedback            String?      @db.Text
  linkedTheorySection String?      @db.VarChar(255)
  order               Int          @default(0)
  createdAt           DateTime     @default(now())
  updatedAt           DateTime     @updatedAt

  // DEPRECATED: Will be migrated to QuizOption model
  options             Json?
  correctAnswer       Json

  lesson  Lesson       @relation(fields: [lessonId], references: [id], onDelete: Cascade)
  choices QuizOption[] // NEW: Explicit options relation

  @@index([lessonId, order])
}
```

### 3. NEW: QuizOption Model

Explicit model for answer options with stable UUIDs:

```prisma
model QuizOption {
  id         String   @id @default(uuid())
  questionId String
  text       String   @db.Text
  isCorrect  Boolean  @default(false)
  order      Int      @default(0) // Legacy stable order when shuffle disabled
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  question QuizQuestion @relation(fields: [questionId], references: [id], onDelete: Cascade)

  @@index([questionId, order])
}
```

### 4. NEW: QuizAttemptStatus Enum

```prisma
enum QuizAttemptStatus {
  IN_PROGRESS
  SUBMITTED
  ABANDONED
}
```

### 5. Updated: QuizAttempt Model

Enhanced to track randomization state:

```prisma
model QuizAttempt {
  id            String            @id @default(uuid())
  progressionId String
  lessonId      String            // NEW: Direct lesson reference

  // Attempt status
  status        QuizAttemptStatus @default(IN_PROGRESS)
  startedAt     DateTime          @default(now())
  submittedAt   DateTime?

  // Score (computed on submit)
  score         Int?
  passed        Boolean?

  // Configuration snapshots (frozen at attempt creation)
  questionsToShowSnapshot   Int?
  shuffleQuestionsSnapshot  Boolean @default(true)
  shuffleAnswersSnapshot    Boolean @default(true)

  // Optional: Debug/reproducibility seed
  seed          String?           @db.VarChar(50)

  // DEPRECATED: Old JSON answers field (kept for backward compatibility)
  answers       Json?

  progression UserProgression       @relation(fields: [progressionId], references: [id], onDelete: Cascade)
  lesson      Lesson                @relation(fields: [lessonId], references: [id])
  questions   QuizAttemptQuestion[]

  @@index([progressionId, startedAt(sort: Desc)])
  @@index([lessonId, status])
}
```

### 6. NEW: QuizAttemptQuestion Model

Tracks which questions were drawn and their display order:

```prisma
model QuizAttemptQuestion {
  id                String   @id @default(uuid())
  attemptId         String
  questionId        String   // Reference to QuizQuestion.id

  // Display information
  position          Int      // 1-indexed display order

  // Choice mapping for MCQ (JSON object: { "optionId": "A", ... })
  // Example: {"abc-123": "A", "def-456": "B", "ghi-789": "C", "jkl-012": "D"}
  choiceMappingJson Json?

  // User's answer
  userAnswerJson    Json?    // Single optionId for SINGLE_CHOICE, array for MULTIPLE_CHOICE, string for SHORT_TEXT
  isCorrect         Boolean?

  answeredAt        DateTime?
  createdAt         DateTime @default(now())

  attempt  QuizAttempt  @relation(fields: [attemptId], references: [id], onDelete: Cascade)

  @@unique([attemptId, questionId])
  @@index([attemptId, position])
}
```

## Field Specifications

### Lesson Randomization Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `questionsToShow` | Int? | null | Number of questions to display. null = show all |
| `shuffleQuestions` | Boolean | true | Whether to randomize question order |
| `shuffleAnswers` | Boolean | true | Whether to randomize answer options order |

### QuizOption Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Stable identifier for scoring |
| `questionId` | UUID | Parent question reference |
| `text` | String | Option text displayed to user |
| `isCorrect` | Boolean | Whether this is a correct answer |
| `order` | Int | Legacy stable order (used when shuffle disabled) |

### QuizAttempt Snapshot Fields

| Field | Type | Description |
|-------|------|-------------|
| `questionsToShowSnapshot` | Int? | Frozen value from lesson at attempt creation |
| `shuffleQuestionsSnapshot` | Boolean | Frozen value from lesson |
| `shuffleAnswersSnapshot` | Boolean | Frozen value from lesson |

### QuizAttemptQuestion Mapping

The `choiceMappingJson` field stores the shuffle mapping as JSON:

```json
{
  "option-uuid-1": "A",
  "option-uuid-2": "B",
  "option-uuid-3": "C",
  "option-uuid-4": "D"
}
```

This allows:
- Reconstructing exact display for attempt review
- Converting user's label selection (e.g., "B") to option ID
- Verifying correctness independent of display order

## Validation Rules

### Lesson Validation

| Rule | Constraint |
|------|------------|
| questionsToShow range | 0 < questionsToShow <= question count (if set) |
| questionsToShow null handling | null means show all questions |

### QuizOption Validation

| Rule | Constraint |
|------|------------|
| SINGLE_CHOICE | Exactly one option with `isCorrect = true` |
| MULTIPLE_CHOICE | At least one option with `isCorrect = true` |
| Minimum options | At least 2 options per MCQ question |

### QuizAttempt Validation

| Rule | Constraint |
|------|------------|
| Answer submission | Only allowed when status = IN_PROGRESS |
| Submit | Only allowed when status = IN_PROGRESS |
| Score calculation | Computed only on submit |

## Migration Strategy

### Phase 1: Add New Fields (Non-Breaking)

```sql
-- Add randomization config to Lesson
ALTER TABLE "Lesson" ADD COLUMN "questionsToShow" INTEGER;
ALTER TABLE "Lesson" ADD COLUMN "shuffleQuestions" BOOLEAN DEFAULT true;
ALTER TABLE "Lesson" ADD COLUMN "shuffleAnswers" BOOLEAN DEFAULT true;

-- Add new columns to QuizAttempt
ALTER TABLE "QuizAttempt" ADD COLUMN "lessonId" TEXT;
ALTER TABLE "QuizAttempt" ADD COLUMN "status" TEXT DEFAULT 'SUBMITTED';
ALTER TABLE "QuizAttempt" ADD COLUMN "submittedAt" TIMESTAMP;
-- ... etc
```

### Phase 2: Create New Tables

```sql
-- Create QuizOption table
CREATE TABLE "QuizOption" (...);

-- Create QuizAttemptQuestion table
CREATE TABLE "QuizAttemptQuestion" (...);
```

### Phase 3: Migrate Existing Data

```typescript
// Migration script to convert JSON options to QuizOption model
async function migrateOptionsToModel() {
  const questions = await prisma.quizQuestion.findMany({
    where: { options: { not: null } }
  });

  for (const question of questions) {
    const options = question.options as Array<{id: string; text: string}>;
    const correctAnswer = question.correctAnswer;

    for (const [index, option] of options.entries()) {
      await prisma.quizOption.create({
        data: {
          questionId: question.id,
          text: option.text,
          isCorrect: Array.isArray(correctAnswer)
            ? correctAnswer.includes(option.id)
            : correctAnswer === option.id,
          order: index,
        }
      });
    }
  }
}
```

## Indexes

### Performance-Critical Indexes

| Table | Index | Purpose |
|-------|-------|---------|
| QuizOption | (questionId, order) | Fetch options in stable order |
| QuizAttempt | (progressionId, startedAt DESC) | User's recent attempts |
| QuizAttempt | (lessonId, status) | Find in-progress attempts |
| QuizAttemptQuestion | (attemptId, position) | Fetch questions in display order |
| QuizAttemptQuestion | (attemptId, questionId) UNIQUE | Prevent duplicate answers |
