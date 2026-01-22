# API Contracts: Slides Pedagogy V2

**Feature**: 004-slides-pedagogy-v2
**Date**: 2026-01-22
**Base Path**: `/api`

## Overview

Cette feature ajoute de nouveaux endpoints pour la gestion de la progression par slides et modifie certains endpoints existants.

---

## New Endpoints

### POST /api/progression/slide/[moduleId]

Persiste l'état de navigation slide par slide.

**Authentication**: Required (NextAuth session)

**Path Parameters**:
| Param | Type | Description |
|-------|------|-------------|
| moduleId | string (UUID) | ID du module |

**Request Body**:
```typescript
interface SaveSlideProgressRequest {
  phase: 'theory' | 'quiz' | 'practice' | 'complete';
  index: number;
  quizAnswers?: Record<string, string | string[]>;
}
```

**Response** (200 OK):
```typescript
interface SaveSlideProgressResponse {
  success: true;
  slideState: SlideState;
}
```

**Response** (400 Bad Request):
```typescript
interface ErrorResponse {
  error: string;
  code: 'INVALID_PHASE' | 'INVALID_INDEX' | 'MODULE_NOT_FOUND';
}
```

**Example**:
```bash
POST /api/progression/slide/abc-123
Content-Type: application/json
Authorization: Bearer <token>

{
  "phase": "quiz",
  "index": 2,
  "quizAnswers": {
    "q1": "A",
    "q2": ["B", "C"]
  }
}
```

---

### GET /api/progression/slide/[moduleId]

Récupère l'état de navigation slide pour reprendre où l'apprenant s'est arrêté.

**Authentication**: Required (NextAuth session)

**Path Parameters**:
| Param | Type | Description |
|-------|------|-------------|
| moduleId | string (UUID) | ID du module |

**Response** (200 OK):
```typescript
interface GetSlideProgressResponse {
  slideState: SlideState | null;
  lesson: {
    mode: 'LEGACY' | 'SLIDES';
    theorySlideCount: number;
    quizQuestionCount: number;
    practiceSlideCount: number;
  };
}
```

**Response** (404 Not Found):
```typescript
interface ErrorResponse {
  error: string;
  code: 'MODULE_NOT_FOUND' | 'NO_LESSON';
}
```

---

## Modified Endpoints

### GET /api/content/modules/[moduleId]

**Changes**: Ajout du champ `lesson.mode` dans la réponse.

**Response** (modified):
```typescript
interface ModuleResponse {
  id: string;
  name: string;
  description: string | null;
  // ... existing fields
  lesson: {
    id: string;
    theoryContent: string;
    quizThreshold: number;
    practiceType: string;
    practiceInstructions: string;
    practiceValidationMode: string;
    mode: 'LEGACY' | 'SLIDES';  // NEW
    questions: QuizQuestion[];
  } | null;
}
```

---

### PUT /api/admin/modules/[moduleId]/lesson

**Changes**: Accepte le nouveau champ `mode` et `linkedTheorySection` sur les questions.

**Request Body** (modified):
```typescript
interface UpdateLessonRequest {
  theoryContent: string;
  quizThreshold?: number;
  practiceType: string;
  practiceInstructions: string;
  practiceValidationMode?: string;
  mode?: 'LEGACY' | 'SLIDES';  // NEW
  questions: Array<{
    id?: string;
    questionText: string;
    questionType: string;
    options?: string[];
    correctAnswer: string | string[];
    feedback?: string;
    linkedTheorySection?: string;  // NEW
    order: number;
  }>;
}
```

---

## TypeScript Interfaces

### SlideState

```typescript
interface SlideState {
  theoryIndex: number;
  quizIndex: number;
  practiceIndex: number;
  quizAnswers: Record<string, string | string[]>;
  lastPhase: 'theory' | 'quiz' | 'practice' | 'complete';
  updatedAt: string;
}
```

### QuizQuestion (extended)

```typescript
interface QuizQuestion {
  id: string;
  lessonId: string;
  questionText: string;
  questionType: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'SHORT_TEXT';
  options: string[] | null;
  correctAnswer: string | string[];
  feedback: string | null;
  linkedTheorySection: string | null;  // NEW
  order: number;
}
```

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `INVALID_PHASE` | 400 | Phase must be theory, quiz, practice, or complete |
| `INVALID_INDEX` | 400 | Index must be >= 0 |
| `MODULE_NOT_FOUND` | 404 | Module does not exist |
| `NO_LESSON` | 404 | Module has no lesson |
| `UNAUTHORIZED` | 401 | User not authenticated |
| `FORBIDDEN` | 403 | User not enrolled in this module |

---

## Rate Limiting

| Endpoint | Rate Limit |
|----------|------------|
| POST /api/progression/slide/* | 60 req/min per user |
| GET /api/progression/slide/* | 120 req/min per user |

---

## Caching

| Endpoint | Cache Strategy |
|----------|----------------|
| GET /api/content/modules/* | ETag + stale-while-revalidate |
| GET /api/progression/slide/* | No cache (always fresh) |
| POST /api/progression/slide/* | No cache |

---

## Webhook Events (future)

Reserved for future analytics integration:

```typescript
type SlideEvent = {
  type: 'slide.viewed' | 'slide.completed' | 'quiz.answered' | 'quiz.failed' | 'quiz.passed';
  moduleId: string;
  userId: string;
  phase: string;
  slideIndex: number;
  timestamp: string;
  metadata?: Record<string, unknown>;
};
```
