# Data Model: Hub Éducatif Modulaire MVP

**Branch**: `001-modular-edu-hub` | **Date**: 2026-01-21

## Entity Relationship Diagram

```
┌─────────────┐
│   Domain    │
├─────────────┤        ┌─────────────┐
│ id          │───────<│    Pack     │
│ name        │   1:N  ├─────────────┤        ┌─────────────┐
│ description │        │ id          │───────<│ Discipline  │
│ icon        │        │ domainId    │   1:N  ├─────────────┤        ┌─────────────┐
│ status      │        │ name        │        │ id          │───────<│   Module    │
│ order       │        │ description │        │ packId      │   1:N  ├─────────────┤
│ createdAt   │        │ status      │        │ name        │        │ id          │
│ updatedAt   │        │ order       │        │ description │        │ disciplineId│
│ deletedAt   │        │ createdAt   │        │ status      │        │ name        │
└─────────────┘        │ updatedAt   │        │ order       │        │ description │
                       │ deletedAt   │        │ createdAt   │        │ status      │
                       └─────────────┘        │ updatedAt   │        │ order       │
                                              │ deletedAt   │        │ prerequisites│
                                              └─────────────┘        │ createdAt   │
                                                                     │ updatedAt   │
                                                                     │ deletedAt   │
                                                                     └──────┬──────┘
                                                                            │ 1:1
                                                                     ┌──────┴──────┐
                                                                     │   Lesson    │
                                                                     ├─────────────┤
                                                                     │ id          │
                                                                     │ moduleId    │
                                                                     │ theoryContent│
                                                                     │ quizThreshold│
                                                                     │ practiceType│
                                                                     │ practiceInstr│
                                                                     │ practiceMode│
                                                                     │ createdAt   │
                                                                     │ updatedAt   │
                                                                     └──────┬──────┘
                                                                            │ 1:N
                                                                     ┌──────┴──────┐
                                                                     │QuizQuestion │
                                                                     ├─────────────┤
                                                                     │ id          │
                                                                     │ lessonId    │
                                                                     │ questionText│
                                                                     │ questionType│
                                                                     │ options     │
                                                                     │ correctAnswer│
                                                                     │ feedback    │
                                                                     │ order       │
                                                                     └─────────────┘

┌─────────────┐        ┌─────────────────┐
│    User     │───────<│ UserProgression │
├─────────────┤   1:N  ├─────────────────┤
│ id          │        │ id              │
│ email       │        │ userId          │
│ name        │        │ moduleId        │
│ createdAt   │        │ status          │
│ updatedAt   │        │ theoryViewedAt  │
└─────────────┘        │ quizPassedAt    │
                       │ practiceCompletedAt│
                       │ completedAt     │
                       │ createdAt       │
                       │ updatedAt       │
                       └────────┬────────┘
                                │ 1:N
                       ┌────────┴────────┐
                       │  QuizAttempt    │
                       ├─────────────────┤
                       │ id              │
                       │ progressionId   │
                       │ answers         │
                       │ score           │
                       │ passed          │
                       │ attemptedAt     │
                       └─────────────────┘

┌─────────────┐
│ AdminUser   │ (Separate from User for MVP)
├─────────────┤
│ id          │
│ username    │
│ passwordHash│
│ createdAt   │
│ updatedAt   │
└─────────────┘
```

## Entities

### Domain

Root category for educational content.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| name | String(100) | NOT NULL, UNIQUE | Display name |
| description | Text | NULL | Long description |
| icon | String(255) | NULL | Icon URL or emoji |
| status | Enum | NOT NULL, DEFAULT 'DRAFT' | DRAFT \| PUBLISHED |
| order | Integer | NOT NULL, DEFAULT 0 | Display order |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |
| deletedAt | DateTime | NULL | Soft delete timestamp |

**Indexes**: `(status, order)`, `(deletedAt)`

### Pack

Complete learning pathway covering a defined scope.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| domainId | UUID | FK → Domain, NOT NULL | Parent domain |
| name | String(100) | NOT NULL | Display name |
| description | Text | NULL | Long description |
| status | Enum | NOT NULL, DEFAULT 'DRAFT' | DRAFT \| PUBLISHED |
| order | Integer | NOT NULL, DEFAULT 0 | Display order within domain |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |
| deletedAt | DateTime | NULL | Soft delete timestamp |

**Indexes**: `(domainId, status, order)`, `(deletedAt)`

### Discipline

Subject or specialty within a Pack.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| packId | UUID | FK → Pack, NOT NULL | Parent pack |
| name | String(100) | NOT NULL | Display name |
| description | Text | NULL | Long description |
| status | Enum | NOT NULL, DEFAULT 'DRAFT' | DRAFT \| PUBLISHED |
| order | Integer | NOT NULL, DEFAULT 0 | Display order within pack |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |
| deletedAt | DateTime | NULL | Soft delete timestamp |

**Indexes**: `(packId, status, order)`, `(deletedAt)`

### Module

Atomic pedagogical unit containing one Lesson.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| disciplineId | UUID | FK → Discipline, NOT NULL | Parent discipline |
| name | String(100) | NOT NULL | Display name |
| description | Text | NULL | Short description |
| status | Enum | NOT NULL, DEFAULT 'DRAFT' | DRAFT \| PUBLISHED |
| order | Integer | NOT NULL, DEFAULT 0 | Display order within discipline |
| prerequisites | UUID[] | NULL | Array of module IDs that must be completed first |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |
| deletedAt | DateTime | NULL | Soft delete timestamp |

**Indexes**: `(disciplineId, status, order)`, `(deletedAt)`

**Validation Rules**:
- Module cannot be published if Lesson is incomplete (missing theory, quiz, or practice)
- If prerequisites is NULL or empty, module is available by default (first in sequence)

### Lesson

Internal content of a Module (Theory + Quiz + Practice).

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| moduleId | UUID | FK → Module, NOT NULL, UNIQUE | Parent module (1:1) |
| theoryContent | Text | NOT NULL | Rich text/markdown theory content |
| quizThreshold | Integer | NOT NULL, DEFAULT 70 | Passing percentage (0-100) |
| practiceType | Enum | NOT NULL | IN_GAME \| EXERCICES \| PROJET \| AUTO_EVALUATION |
| practiceInstructions | Text | NOT NULL | Instructions for practice |
| practiceValidationMode | Enum | NOT NULL, DEFAULT 'DECLARATIVE' | DECLARATIVE \| AUTOMATIC \| MANUAL |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |

**Indexes**: `(moduleId)` UNIQUE

**Validation Rules**:
- theoryContent cannot be empty
- Must have at least 1 QuizQuestion
- practiceInstructions cannot be empty

### QuizQuestion

Question within a Lesson's quiz.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| lessonId | UUID | FK → Lesson, NOT NULL | Parent lesson |
| questionText | Text | NOT NULL | The question text |
| questionType | Enum | NOT NULL | SINGLE_CHOICE \| MULTIPLE_CHOICE \| SHORT_TEXT |
| options | JSON | NULL | Array of {id, text} for choice types |
| correctAnswer | JSON | NOT NULL | Single ID, array of IDs, or text pattern |
| feedback | Text | NULL | Explanation shown after answer |
| order | Integer | NOT NULL, DEFAULT 0 | Display order in quiz |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |

**Indexes**: `(lessonId, order)`

**Validation Rules**:
- For SINGLE_CHOICE/MULTIPLE_CHOICE: options required, correctAnswer must reference valid option IDs
- For SHORT_TEXT: options must be NULL, correctAnswer is text or regex pattern

### User

Learner account.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| email | String(255) | NOT NULL, UNIQUE | Email address |
| name | String(100) | NULL | Display name |
| passwordHash | String(255) | NOT NULL | Hashed password |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |

**Indexes**: `(email)` UNIQUE

### AdminUser

Admin account (separate from learners for MVP).

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| username | String(50) | NOT NULL, UNIQUE | Admin username |
| passwordHash | String(255) | NOT NULL | Hashed password |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |

**Note**: For MVP, a single shared admin account is created via environment variables.

### UserProgression

User-specific progress tracking per module.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| userId | UUID | FK → User, NOT NULL | User reference |
| moduleId | UUID | FK → Module, NOT NULL | Module reference |
| status | Enum | NOT NULL, DEFAULT 'LOCKED' | LOCKED \| AVAILABLE \| IN_PROGRESS \| COMPLETED |
| theoryViewedAt | DateTime | NULL | When theory was first viewed |
| quizPassedAt | DateTime | NULL | When quiz was first passed |
| practiceCompletedAt | DateTime | NULL | When practice was completed |
| completedAt | DateTime | NULL | When module was fully completed |
| createdAt | DateTime | NOT NULL | Creation timestamp |
| updatedAt | DateTime | NOT NULL | Last modification |

**Indexes**: `(userId, moduleId)` UNIQUE, `(userId, status)`

**State Transitions**:
```
LOCKED → AVAILABLE (when prerequisites met)
AVAILABLE → IN_PROGRESS (when theory first viewed)
IN_PROGRESS → COMPLETED (when quiz passed AND practice completed)
COMPLETED → (no further transitions - FR-014)
```

### QuizAttempt

Record of each quiz attempt.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| progressionId | UUID | FK → UserProgression, NOT NULL | Progression reference |
| answers | JSON | NOT NULL | Array of {questionId, answer} |
| score | Integer | NOT NULL | Percentage score (0-100) |
| passed | Boolean | NOT NULL | Whether attempt passed |
| attemptedAt | DateTime | NOT NULL | When attempt was made |

**Indexes**: `(progressionId, attemptedAt)`

## Enums

### ContentStatus
```
DRAFT     - Content is being edited, not visible to learners
PUBLISHED - Content is live and visible to learners
```

### ModuleProgressStatus
```
LOCKED      - Prerequisites not met
AVAILABLE   - Ready to start
IN_PROGRESS - Theory viewed, quiz/practice not complete
COMPLETED   - All parts finished
```

### QuestionType
```
SINGLE_CHOICE   - One correct answer from options
MULTIPLE_CHOICE - Multiple correct answers from options
SHORT_TEXT      - Free text answer matched against pattern
```

### PracticeType
```
IN_GAME         - Exercise in a game environment
EXERCICES       - Traditional exercises (paper, digital)
PROJET          - Concrete project work
AUTO_EVALUATION - Self-assessment guided by criteria
```

### PracticeValidationMode
```
DECLARATIVE - User confirms completion
AUTOMATIC   - System validates (future)
MANUAL      - Admin reviews (future)
```

## Relationships Summary

| Parent | Child | Relationship | Cascade |
|--------|-------|--------------|---------|
| Domain | Pack | 1:N | Soft delete cascade |
| Pack | Discipline | 1:N | Soft delete cascade |
| Discipline | Module | 1:N | Soft delete cascade |
| Module | Lesson | 1:1 | Hard delete cascade |
| Lesson | QuizQuestion | 1:N | Hard delete cascade |
| User | UserProgression | 1:N | Hard delete cascade |
| UserProgression | QuizAttempt | 1:N | Hard delete cascade |

## Prisma Schema (Reference)

```prisma
enum ContentStatus {
  DRAFT
  PUBLISHED
}

enum ModuleProgressStatus {
  LOCKED
  AVAILABLE
  IN_PROGRESS
  COMPLETED
}

enum QuestionType {
  SINGLE_CHOICE
  MULTIPLE_CHOICE
  SHORT_TEXT
}

enum PracticeType {
  IN_GAME
  EXERCICES
  PROJET
  AUTO_EVALUATION
}

enum PracticeValidationMode {
  DECLARATIVE
  AUTOMATIC
  MANUAL
}

model Domain {
  id          String   @id @default(uuid())
  name        String   @unique @db.VarChar(100)
  description String?  @db.Text
  icon        String?  @db.VarChar(255)
  status      ContentStatus @default(DRAFT)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  deletedAt   DateTime?

  packs       Pack[]

  @@index([status, order])
  @@index([deletedAt])
}

model Pack {
  id          String   @id @default(uuid())
  domainId    String
  name        String   @db.VarChar(100)
  description String?  @db.Text
  status      ContentStatus @default(DRAFT)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  deletedAt   DateTime?

  domain      Domain   @relation(fields: [domainId], references: [id])
  disciplines Discipline[]

  @@index([domainId, status, order])
  @@index([deletedAt])
}

model Discipline {
  id          String   @id @default(uuid())
  packId      String
  name        String   @db.VarChar(100)
  description String?  @db.Text
  status      ContentStatus @default(DRAFT)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  deletedAt   DateTime?

  pack        Pack     @relation(fields: [packId], references: [id])
  modules     Module[]

  @@index([packId, status, order])
  @@index([deletedAt])
}

model Module {
  id            String   @id @default(uuid())
  disciplineId  String
  name          String   @db.VarChar(100)
  description   String?  @db.Text
  status        ContentStatus @default(DRAFT)
  order         Int      @default(0)
  prerequisites String[] @default([])
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  deletedAt     DateTime?

  discipline    Discipline @relation(fields: [disciplineId], references: [id])
  lesson        Lesson?
  progressions  UserProgression[]

  @@index([disciplineId, status, order])
  @@index([deletedAt])
}

model Lesson {
  id                      String   @id @default(uuid())
  moduleId                String   @unique
  theoryContent           String   @db.Text
  quizThreshold           Int      @default(70)
  practiceType            PracticeType
  practiceInstructions    String   @db.Text
  practiceValidationMode  PracticeValidationMode @default(DECLARATIVE)
  createdAt               DateTime @default(now())
  updatedAt               DateTime @updatedAt

  module                  Module   @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  questions               QuizQuestion[]
}

model QuizQuestion {
  id            String   @id @default(uuid())
  lessonId      String
  questionText  String   @db.Text
  questionType  QuestionType
  options       Json?
  correctAnswer Json
  feedback      String?  @db.Text
  order         Int      @default(0)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  lesson        Lesson   @relation(fields: [lessonId], references: [id], onDelete: Cascade)

  @@index([lessonId, order])
}

model User {
  id           String   @id @default(uuid())
  email        String   @unique @db.VarChar(255)
  name         String?  @db.VarChar(100)
  passwordHash String   @db.VarChar(255)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  progressions UserProgression[]
}

model AdminUser {
  id           String   @id @default(uuid())
  username     String   @unique @db.VarChar(50)
  passwordHash String   @db.VarChar(255)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model UserProgression {
  id                   String   @id @default(uuid())
  userId               String
  moduleId             String
  status               ModuleProgressStatus @default(LOCKED)
  theoryViewedAt       DateTime?
  quizPassedAt         DateTime?
  practiceCompletedAt  DateTime?
  completedAt          DateTime?
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt

  user                 User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  module               Module   @relation(fields: [moduleId], references: [id])
  attempts             QuizAttempt[]

  @@unique([userId, moduleId])
  @@index([userId, status])
}

model QuizAttempt {
  id            String   @id @default(uuid())
  progressionId String
  answers       Json
  score         Int
  passed        Boolean
  attemptedAt   DateTime @default(now())

  progression   UserProgression @relation(fields: [progressionId], references: [id], onDelete: Cascade)

  @@index([progressionId, attemptedAt])
}
```
