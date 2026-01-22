# Data Model: Slides Pedagogy V2

**Feature**: 004-slides-pedagogy-v2
**Date**: 2026-01-22
**Base Schema**: `prisma/schema.prisma`

## Overview

Cette feature étend le modèle de données existant sans le casser. Les modifications sont additives et rétrocompatibles.

## Schema Changes

### New Enum: LessonMode

```prisma
enum LessonMode {
  LEGACY   // Mode actuel avec onglets
  SLIDES   // Nouveau mode navigation par slides
}
```

### Modified Model: Lesson

```prisma
model Lesson {
  id                     String                 @id @default(uuid())
  moduleId               String                 @unique
  theoryContent          String                 @db.Text
  quizThreshold          Int                    @default(70)
  practiceType           PracticeType
  practiceInstructions   String                 @db.Text
  practiceValidationMode PracticeValidationMode @default(DECLARATIVE)
  mode                   LessonMode             @default(LEGACY)  // NEW
  createdAt              DateTime               @default(now())
  updatedAt              DateTime               @updatedAt

  module    Module         @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  questions QuizQuestion[]
}
```

**Changes**:
- Added `mode` field with default `LEGACY` for backwards compatibility

### Modified Model: QuizQuestion

```prisma
model QuizQuestion {
  id                  String       @id @default(uuid())
  lessonId            String
  questionText        String       @db.Text
  questionType        QuestionType
  options             Json?
  correctAnswer       Json
  feedback            String?      @db.Text
  linkedTheorySection String?      @db.VarChar(255)  // NEW - matches ## title
  order               Int          @default(0)
  createdAt           DateTime     @default(now())
  updatedAt           DateTime     @updatedAt

  lesson Lesson @relation(fields: [lessonId], references: [id], onDelete: Cascade)

  @@index([lessonId, order])
}
```

**Changes**:
- Added `linkedTheorySection` optional field to link question to theory slide title

### Modified Model: UserProgression

```prisma
model UserProgression {
  id                  String               @id @default(uuid())
  userId              String
  moduleId            String
  status              ModuleProgressStatus @default(LOCKED)
  theoryViewedAt      DateTime?
  quizPassedAt        DateTime?
  practiceCompletedAt DateTime?
  completedAt         DateTime?
  slideState          Json?                // NEW - slide navigation state
  createdAt           DateTime             @default(now())
  updatedAt           DateTime             @updatedAt

  user     User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  module   Module        @relation(fields: [moduleId], references: [id])
  attempts QuizAttempt[]

  @@unique([userId, moduleId])
  @@index([userId, status])
}
```

**Changes**:
- Added `slideState` JSON field to persist slide navigation progress

---

## TypeScript Types

### SlideState (JSON stored in UserProgression.slideState)

```typescript
interface SlideState {
  theoryIndex: number;
  quizIndex: number;
  practiceIndex: number;
  quizAnswers: Record<string, string | string[]>;
  lastPhase: 'theory' | 'quiz' | 'practice' | 'complete';
  updatedAt: string; // ISO timestamp
}
```

### TheorySlide (parsed from theoryContent)

```typescript
interface TheorySlide {
  id: string;           // Generated: `slide-${index}`
  title: string;        // Extracted from ## heading
  content: string;      // Markdown content under heading
  slideNumber: number;  // 1-based index
  type: TheorySlideType;
}

type TheorySlideType =
  | 'concept'       // Concept clé
  | 'why'           // Pourquoi important
  | 'example'       // Exemple
  | 'mistakes'      // Erreurs fréquentes
  | 'recap';        // Mini-récap
```

### QuizSlide (derived from QuizQuestion)

```typescript
interface QuizSlide {
  id: string;
  question: QuizQuestion;
  slideNumber: number;
  totalQuestions: number;
  linkedTheorySlide?: TheorySlide;
}
```

### PracticeSlide (parsed from practiceInstructions)

```typescript
interface PracticeSlide {
  id: string;
  title: string;
  content: string;
  slideNumber: number;
  type: PracticeSlideType;
  checklist?: string[];
}

type PracticeSlideType =
  | 'brief'       // Objectif
  | 'setup'       // Préparation
  | 'step'        // Étape d'action
  | 'evaluation'  // Auto-évaluation
  | 'next';       // Next action
```

---

## Entity Relationships

```
┌─────────────┐
│   Lesson    │
│─────────────│
│ mode        │──────────────────────────────────────────┐
│ theoryContent│                                          │
│ quizThreshold│                                          │
└──────┬──────┘                                          │
       │                                                  │
       │ 1:N                                              │
       ▼                                                  │
┌──────────────┐                                         │
│ QuizQuestion │                                         │
│──────────────│                                         │
│ linkedTheory │──── matches ──── TheorySlide.title      │
│   Section    │                  (parsed from content)  │
└──────────────┘                                         │
                                                         │
┌─────────────────┐                                      │
│ UserProgression │                                      │
│─────────────────│                                      │
│ slideState      │──── JSON ──── SlideState             │
│ (JSON)          │               (navigation progress)  │
└─────────────────┘                                      │
```

---

## Validation Rules

### Lesson.mode

- Must be `LEGACY` or `SLIDES`
- Default: `LEGACY`
- No validation on theoryContent format (parser handles gracefully)

### QuizQuestion.linkedTheorySection

- Optional (nullable)
- Max length: 255 characters
- Should match a `## ` heading in Lesson.theoryContent
- If not found during rendering, fallback to first theory slide

### UserProgression.slideState

- Optional (nullable for legacy progressions)
- JSON schema validated on write:
  ```json
  {
    "theoryIndex": { "type": "integer", "minimum": 0 },
    "quizIndex": { "type": "integer", "minimum": 0 },
    "practiceIndex": { "type": "integer", "minimum": 0 },
    "quizAnswers": { "type": "object" },
    "lastPhase": { "enum": ["theory", "quiz", "practice", "complete"] },
    "updatedAt": { "type": "string", "format": "date-time" }
  }
  ```

---

## Migration

### Prisma Migration

```bash
npx prisma migrate dev --name add-slides-pedagogy-v2
```

**Generated SQL**:
```sql
-- CreateEnum
CREATE TYPE "LessonMode" AS ENUM ('LEGACY', 'SLIDES');

-- AlterTable: Lesson
ALTER TABLE "Lesson" ADD COLUMN "mode" "LessonMode" NOT NULL DEFAULT 'LEGACY';

-- AlterTable: QuizQuestion
ALTER TABLE "QuizQuestion" ADD COLUMN "linkedTheorySection" VARCHAR(255);

-- AlterTable: UserProgression
ALTER TABLE "UserProgression" ADD COLUMN "slideState" JSONB;
```

### Data Migration (none required)

- All existing lessons default to `LEGACY` mode
- Existing progressions continue to work (slideState is optional)
- No data transformation needed

---

## Indexes

No new indexes required. Existing indexes on `QuizQuestion(lessonId, order)` and `UserProgression(userId, status)` are sufficient.

---

## Backwards Compatibility

| Scenario | Behavior |
|----------|----------|
| Existing lesson | `mode = LEGACY`, renders with tabs |
| Existing progression | `slideState = null`, continues normally |
| New lesson created | `mode = LEGACY` by default |
| Admin enables slides | Sets `mode = SLIDES`, lesson renders with slides |
| User with old client | Falls back to legacy mode |
