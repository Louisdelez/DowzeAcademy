# Research: Quiz Randomization V1

**Feature**: 005-quiz-randomization
**Date**: 2026-01-23

## Research Tasks Completed

### 1. Existing Quiz Architecture Analysis

**Decision**: Extend existing `QuizQuestion` model rather than creating separate `Quiz` entity.

**Rationale**:
- Current architecture has `Lesson` → `QuizQuestion[]` relationship
- Questions already have stable UUIDs via Prisma's `@id @default(uuid())`
- Adding config fields to `Lesson` model is cleaner than introducing a new `Quiz` entity
- Backward compatibility preserved - no migration of existing data relationships needed

**Alternatives Considered**:
- Creating a separate `Quiz` entity: Rejected because it adds unnecessary indirection for 1:1 relationship with Lesson
- Embedding randomization config in questions: Rejected because it's lesson-level configuration

### 2. UUID Strategy for Questions and Choices

**Decision**: Use existing Prisma UUIDs as stable identifiers. Options stored in JSON currently - migrate to explicit `QuizOption` model.

**Rationale**:
- `QuizQuestion.id` is already a UUID - no migration needed for questions
- Options are currently stored as `Json?` field - this needs restructuring for stable choiceIds
- Explicit model enables proper relational queries and indexing

**Current State Analysis**:
```typescript
// Current schema
model QuizQuestion {
  id            String       @id @default(uuid())  // ✅ Already UUID
  options       Json?                               // ❌ Needs migration to model
  correctAnswer Json                                // ❌ Needs migration to use option IDs
}
```

**Migration Plan**:
1. Create `QuizOption` model with UUID
2. Migrate existing JSON options to new model
3. Update `correctAnswer` to reference option IDs

### 3. Fisher-Yates Shuffle Algorithm

**Decision**: Implement Fisher-Yates (Knuth) shuffle for both question and option randomization.

**Rationale**:
- O(n) time complexity, O(1) extra space
- Unbiased - every permutation equally likely
- Standard algorithm used by all major platforms
- Optional seed support for test reproducibility

**Implementation**:
```typescript
function fisherYatesShuffle<T>(array: T[], seed?: number): T[] {
  const result = [...array];
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
```

### 4. Question Pool Sampling Strategy

**Decision**: Fisher-Yates shuffle + take first N elements.

**Rationale**:
- Simpler than reservoir sampling for small pools
- Equivalent to random.sample() in Python
- No duplicates by design
- Edge cases handled: questionsToShow >= pool → return all

**Edge Case Handling**:
| Scenario | Behavior |
|----------|----------|
| `questionsToShow = null` | Show all questions |
| `questionsToShow = 0` | Show all questions (legacy fallback) |
| `questionsToShow > pool size` | Show all questions |
| `questionsToShow < pool size` | Random subset of N questions |

### 5. Attempt Persistence Strategy

**Decision**: Create comprehensive attempt tracking with three related tables.

**Rationale**:
- `QuizAttempt` already exists but needs enhancement
- Need to track: questions drawn, display order, choice mapping
- Enables review of any past attempt with exact state

**Tables**:
1. `QuizAttempt` (enhanced) - Attempt metadata + snapshots of config
2. `QuizAttemptQuestion` - Which questions were drawn and in what order
3. `QuizAttemptChoiceMapping` - For each QCM question, the label (A/B/C/D) → choiceId mapping

### 6. API Design Pattern

**Decision**: RESTful endpoints with attempt-based workflow.

**Rationale**:
- Follows existing API patterns in codebase
- Stateful attempt enables resumption
- Clear separation: create → answer → submit

**Endpoints**:
```
POST   /api/lessons/{lessonId}/quiz-attempts     # Create attempt with randomization
GET    /api/quiz-attempts/{attemptId}             # Get attempt state for resumption
POST   /api/quiz-attempts/{attemptId}/answers     # Submit answer(s)
POST   /api/quiz-attempts/{attemptId}/submit      # Finalize and score
```

### 7. Frontend Integration Approach

**Decision**: Minimal changes to existing `SlideContainer` and `QuizSlide` components.

**Rationale**:
- Current flow already works question-by-question
- Only need to: fetch randomized questions on quiz start, use label mapping for display
- Backend handles all randomization logic - frontend just renders

**Changes Required**:
1. `SlideContainer`: Call create-attempt API when entering quiz phase
2. `QuizSlide`: Display options with labels from API (A/B/C/D)
3. Answer submission: Send label or choiceId (backend maps either way)

### 8. Admin Interface Configuration

**Decision**: Add configuration fields to existing lesson editor.

**Rationale**:
- Lesson editor already exists at `/admin/modules/[id]/lesson`
- Quiz settings section already has `quizThreshold`
- Natural place for: `questionsToShow`, `shuffleQuestions`, `shuffleAnswers`

**UI Elements**:
- Number input: "Questions à afficher" (nullable = all)
- Toggle: "Mélanger l'ordre des questions" (default: ON)
- Toggle: "Mélanger les réponses (A/B/C/D)" (default: ON)
- Read-only UUID display per question with copy button

### 9. Backward Compatibility Strategy

**Decision**: Default to shuffle enabled, existing quizzes work unchanged.

**Rationale**:
- New fields have sensible defaults: `shuffleQuestions=true`, `shuffleAnswers=true`
- Existing quiz submissions still valid (scoring uses question IDs)
- Admin can disable shuffle for specific quizzes if needed

**Migration Safety**:
- No breaking changes to existing data
- New tables are additive
- Old QuizAttempt records remain valid

### 10. Performance Considerations

**Decision**: Compute randomization once at attempt creation, eager-load questions.

**Rationale**:
- Randomization is O(n) for n questions - negligible cost
- Questions and options loaded in single query with `include`
- Indexed queries for attempt lookups: `(progressionId, attemptedAt)`

**Optimization Targets**:
- Quiz load: < 2 seconds (SC-008)
- Answer submission: < 500ms
- Attempt creation: < 1 second

## Unresolved Items

None - all technical decisions resolved.

## References

- Fisher-Yates shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
- Prisma relations: https://www.prisma.io/docs/concepts/components/prisma-schema/relations
- Next.js API routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
