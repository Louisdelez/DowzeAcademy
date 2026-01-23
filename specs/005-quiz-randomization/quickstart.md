# Quickstart: Quiz Randomization V1

**Feature**: 005-quiz-randomization
**Date**: 2026-01-23

## Overview

This guide provides a quick reference for implementing the quiz randomization feature. For detailed specifications, see the corresponding files in this directory.

## Key Files to Create/Modify

### New Files

| File | Purpose |
|------|---------|
| `src/lib/utils/shuffle.ts` | Fisher-Yates shuffle algorithm |
| `src/lib/services/quiz-randomization-service.ts` | Randomization engine |
| `src/lib/services/quiz-attempt-service.ts` | Attempt lifecycle management |
| `src/types/quiz.ts` | TypeScript types for quiz randomization |
| `src/app/api/lessons/[lessonId]/quiz-attempts/route.ts` | Create attempt endpoint |
| `src/app/api/quiz-attempts/[attemptId]/route.ts` | Get attempt endpoint |
| `src/app/api/quiz-attempts/[attemptId]/answers/route.ts` | Submit answer endpoint |
| `src/app/api/quiz-attempts/[attemptId]/submit/route.ts` | Finalize attempt endpoint |

### Modified Files

| File | Changes |
|------|---------|
| `prisma/schema.prisma` | Add new models and fields |
| `src/app/admin/modules/[id]/lesson/page.tsx` | Add randomization config UI |
| `src/app/api/admin/modules/[moduleId]/lesson/route.ts` | Handle new config fields |
| `src/components/lesson/slides/SlideContainer.tsx` | Integrate attempt-based quiz flow |
| `src/components/lesson/slides/QuizSlide.tsx` | Use randomized options with labels |
| `src/lib/services/quiz-service.ts` | Update grading to use option IDs |

## Implementation Steps

### Step 1: Database Schema

Run Prisma migration after updating schema:

```bash
npm run db:migrate
```

Key additions:
- `Lesson`: `questionsToShow`, `shuffleQuestions`, `shuffleAnswers`
- `QuizOption`: New model for answer options
- `QuizAttempt`: Enhanced with status and snapshots
- `QuizAttemptQuestion`: Track question order and choice mapping

### Step 2: Core Services

#### shuffle.ts
```typescript
export function fisherYatesShuffle<T>(array: T[], seed?: string): T[] {
  const result = [...array];
  const random = seed ? seededRandom(seed) : Math.random;

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
```

#### quiz-randomization-service.ts
```typescript
export function selectQuestions(
  pool: QuizQuestion[],
  questionsToShow: number | null,
  shuffle: boolean
): QuizQuestion[] {
  // If questionsToShow is null or >= pool size, use all
  const count = questionsToShow && questionsToShow < pool.length
    ? questionsToShow
    : pool.length;

  const source = shuffle ? fisherYatesShuffle(pool) : [...pool];
  return source.slice(0, count);
}

export function buildChoiceMapping(
  options: QuizOption[],
  shuffle: boolean
): Map<string, string> {
  const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
  const ordered = shuffle ? fisherYatesShuffle(options) : options;

  return new Map(
    ordered.map((opt, i) => [opt.id, labels[i]])
  );
}
```

### Step 3: API Endpoints

#### POST /lessons/{lessonId}/quiz-attempts
1. Verify user authentication
2. Check for existing in-progress attempt
3. Load lesson with questions and options
4. Apply randomization (selectQuestions, buildChoiceMapping)
5. Create QuizAttempt with snapshots
6. Create QuizAttemptQuestion records with mappings
7. Return attempt with randomized question order

#### POST /quiz-attempts/{attemptId}/answers
1. Verify attempt belongs to user
2. Verify attempt is IN_PROGRESS
3. Find question in attempt
4. Convert label to optionId using mapping
5. Update/create answer record
6. Return confirmation

#### POST /quiz-attempts/{attemptId}/submit
1. Verify attempt belongs to user
2. Verify attempt is IN_PROGRESS
3. Score each question using optionIds
4. Calculate total score
5. Update attempt with score, passed, status=SUBMITTED
6. Return result with feedback

### Step 4: Admin UI

Add to lesson editor (Quiz tab):

```tsx
{/* Randomization Settings */}
<div className="space-y-4 border-t pt-4 mt-4">
  <h4 className="font-medium">Paramètres de randomisation</h4>

  <Input
    label="Questions à afficher"
    type="number"
    min={1}
    placeholder="Toutes"
    value={lessonData.questionsToShow ?? ''}
    onChange={(e) => setLessonData(prev => ({
      ...prev,
      questionsToShow: e.target.value ? parseInt(e.target.value) : null
    }))}
    helperText="Laisser vide pour afficher toutes les questions"
  />

  <Toggle
    label="Mélanger l'ordre des questions"
    checked={lessonData.shuffleQuestions ?? true}
    onChange={(checked) => setLessonData(prev => ({
      ...prev,
      shuffleQuestions: checked
    }))}
  />

  <Toggle
    label="Mélanger les réponses (A/B/C/D)"
    checked={lessonData.shuffleAnswers ?? true}
    onChange={(checked) => setLessonData(prev => ({
      ...prev,
      shuffleAnswers: checked
    }))}
  />
</div>
```

### Step 5: Frontend Integration

Update SlideContainer quiz flow:

```typescript
// When entering quiz phase
const startQuiz = async () => {
  const response = await fetch(`/api/lessons/${lesson.id}/quiz-attempts`, {
    method: 'POST'
  });
  const attempt = await response.json();

  // Store attempt in state
  setCurrentAttempt(attempt);

  // Questions are now randomized in attempt.questions
  setQuizQuestions(attempt.questions);
};

// When answering
const submitAnswer = async (questionId: string, selectedLabel: string) => {
  await fetch(`/api/quiz-attempts/${currentAttempt.id}/answers`, {
    method: 'POST',
    body: JSON.stringify({ questionId, selectedLabel })
  });
};

// When finishing
const finishQuiz = async () => {
  const result = await fetch(`/api/quiz-attempts/${currentAttempt.id}/submit`, {
    method: 'POST'
  });
  // Handle result...
};
```

## Testing Checklist

### Unit Tests
- [ ] `fisherYatesShuffle` produces valid permutations
- [ ] `selectQuestions` respects questionsToShow limit
- [ ] `selectQuestions` handles edge cases (null, 0, > pool size)
- [ ] `buildChoiceMapping` assigns unique labels
- [ ] Grading works with shuffled options

### Integration Tests
- [ ] Create attempt persists correct question count
- [ ] Answer submission maps labels to optionIds correctly
- [ ] Submit calculates score correctly
- [ ] Existing quizzes work unchanged

### E2E Tests
- [ ] Same quiz shows different order on retry
- [ ] Correct answers are scored correctly regardless of position
- [ ] Admin can configure randomization settings
- [ ] Quiz loads in < 2 seconds

## Migration Notes

### Existing Data

1. Run migration to add new fields with defaults
2. Run backfill script to migrate JSON options to QuizOption model
3. Verify existing quiz attempts still display correctly

### Rollback Plan

If issues arise:
1. `shuffleQuestions = false` and `shuffleAnswers = false` restores legacy behavior
2. Old QuizAttempt records remain valid (JSON answers field preserved)
3. New tables can be dropped without affecting existing functionality

## API Quick Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/lessons/{id}/quiz-attempts` | POST | Create randomized attempt |
| `/api/quiz-attempts/{id}` | GET | Get attempt state |
| `/api/quiz-attempts/{id}/answers` | POST | Submit answer |
| `/api/quiz-attempts/{id}/submit` | POST | Finalize and score |

## Related Documentation

- [spec.md](./spec.md) - Feature specification
- [data-model.md](./data-model.md) - Database schema details
- [contracts/quiz-randomization-api.yaml](./contracts/quiz-randomization-api.yaml) - OpenAPI spec
