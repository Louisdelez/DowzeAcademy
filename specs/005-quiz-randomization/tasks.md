# Tasks: Quiz Randomization V1

**Input**: Design documents from `/specs/005-quiz-randomization/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and database schema changes

- [x] T001 Update Prisma schema with randomization fields in `prisma/schema.prisma` (Lesson: questionsToShow, shuffleQuestions, shuffleAnswers)
- [x] T002 Add QuizOption model to Prisma schema in `prisma/schema.prisma`
- [x] T003 Add QuizAttemptStatus enum to Prisma schema in `prisma/schema.prisma`
- [x] T004 Update QuizAttempt model with new fields in `prisma/schema.prisma` (lessonId, status, snapshots)
- [x] T005 Add QuizAttemptQuestion model to Prisma schema in `prisma/schema.prisma`
- [x] T006 Run Prisma migration to apply schema changes via `npm run db:migrate`
- [x] T007 [P] Create quiz randomization TypeScript types in `src/types/quiz.ts`
- [x] T008 [P] Create Fisher-Yates shuffle utility in `src/lib/utils/shuffle.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core services and data migration that MUST be complete before user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T009 Create quiz-randomization-service.ts with selectQuestions() and buildChoiceMapping() in `src/lib/services/quiz-randomization-service.ts`
- [x] T010 Create quiz-attempt-service.ts with createAttempt(), loadAttempt() in `src/lib/services/quiz-attempt-service.ts`
- [x] T011 Create data migration script to convert existing JSON options to QuizOption model in `prisma/migrations/migrate-quiz-options.ts`
- [x] T012 Run data migration to populate QuizOption records from existing questions
- [x] T013 Update quiz-service.ts grading functions to support optionId-based scoring in `src/lib/services/quiz-service.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Learner Retakes Quiz with Randomized Experience (Priority: P1) 🎯 MVP

**Goal**: Learners experience different question and answer order on each quiz attempt

**Independent Test**: Launch same quiz 3 times, verify question order and answer options change each time

### Implementation for User Story 1

- [x] T014 [P] [US1] Create POST endpoint to create quiz attempt in `src/app/api/lessons/[lessonId]/quiz-attempts/route.ts`
- [x] T015 [P] [US1] Create GET endpoint to retrieve attempt state in `src/app/api/quiz-attempts/[attemptId]/route.ts`
- [x] T016 [P] [US1] Create POST endpoint for answer submission in `src/app/api/quiz-attempts/[attemptId]/answers/route.ts`
- [x] T017 [P] [US1] Create POST endpoint to finalize attempt in `src/app/api/quiz-attempts/[attemptId]/submit/route.ts`
- [x] T018 [US1] Update SlideContainer.tsx to use attempt-based quiz flow in `src/components/lesson/slides/SlideContainer.tsx`
- [x] T019 [US1] Update QuizSlide.tsx to display randomized options with A/B/C/D labels in `src/components/lesson/slides/QuizSlide.tsx`
- [x] T020 [US1] Update useSlideNavigation hook to integrate with quiz attempts in `src/lib/hooks/useSlideNavigation.ts`
- [x] T021 [US1] Handle edge case: SHORT_TEXT questions skip answer shuffle in `src/lib/services/quiz-randomization-service.ts`

**Checkpoint**: User Story 1 complete - learners see randomized quiz on each attempt

---

## Phase 4: User Story 3 - System Correctly Scores Randomized Quizzes (Priority: P1)

**Goal**: Quiz scoring works correctly regardless of answer display order

**Independent Test**: Submit correct answers on randomized quiz, verify 100% score

### Implementation for User Story 3

- [x] T022 [US3] Implement label-to-optionId conversion in answer submission endpoint in `src/app/api/quiz-attempts/[attemptId]/answers/route.ts`
- [x] T023 [US3] Implement scoring logic using optionIds in submit endpoint in `src/app/api/quiz-attempts/[attemptId]/submit/route.ts`
- [x] T024 [US3] Add MULTIPLE_CHOICE scoring support (array comparison) in `src/lib/services/quiz-service.ts`
- [x] T025 [US3] Update QuizResultSlide to show correct answers with original mapping in `src/components/lesson/slides/QuizResultSlide.tsx`

**Checkpoint**: User Story 3 complete - scoring is accurate with randomization

---

## Phase 5: User Story 2 - Admin Configures Question Pool and Display Settings (Priority: P2)

**Goal**: Admin can configure questionsToShow and shuffle toggles

**Independent Test**: Set pool=10, questionsToShow=5, verify 5 different questions appear

### Implementation for User Story 2

- [x] T026 [US2] Add randomization settings UI to lesson editor (questionsToShow input) in `src/app/admin/modules/[id]/lesson/page.tsx`
- [x] T027 [US2] Add shuffleQuestions toggle to lesson editor in `src/app/admin/modules/[id]/lesson/page.tsx`
- [x] T028 [US2] Add shuffleAnswers toggle to lesson editor in `src/app/admin/modules/[id]/lesson/page.tsx`
- [x] T029 [US2] Update admin lesson API to handle new fields in `src/app/api/admin/modules/[moduleId]/lesson/route.ts`
- [x] T030 [US2] Implement questionsToShow selection logic in randomization service in `src/lib/services/quiz-randomization-service.ts`
- [x] T031 [US2] Handle edge cases: questionsToShow > pool, = 0, = null in `src/lib/services/quiz-randomization-service.ts`

**Checkpoint**: User Story 2 complete - admin can configure randomization

---

## Phase 6: User Story 4 - Quiz Attempt Data is Persisted for Review (Priority: P3)

**Goal**: Attempt history shows questions drawn, order, and mapping

**Independent Test**: Complete quiz, view attempt details showing all randomization info

### Implementation for User Story 4

- [x] T032 [US4] Add attempt detail endpoint with full mapping data in `src/app/api/quiz-attempts/[attemptId]/route.ts`
- [x] T033 [US4] Store question prompt snapshots in QuizAttemptQuestion (optional feature) in `src/lib/services/quiz-attempt-service.ts`
- [x] T034 [US4] Create attempt history view component showing questions/order/mapping in `src/components/lesson/QuizAttemptHistory.tsx`
- [x] T035 [US4] Integrate attempt history in user progression page in `src/app/(learner)/profile/page.tsx`

**Checkpoint**: User Story 4 complete - attempt details are reviewable

---

## Phase 7: User Story 5 - Questions Display UUID for Admin Reference (Priority: P3)

**Goal**: Admin sees question UUIDs in editor with copy functionality

**Independent Test**: Open question in admin, see UUID, click to copy

### Implementation for User Story 5

- [x] T036 [US5] Display question UUID (read-only) in question card in `src/app/admin/modules/[id]/lesson/page.tsx`
- [x] T037 [US5] Add click-to-copy functionality for question UUID in `src/app/admin/modules/[id]/lesson/page.tsx`
- [x] T038 [US5] Remove fixed A/B/C/D labels from admin option display (show only "correct" indicator) in `src/app/admin/modules/[id]/lesson/page.tsx`
- [x] T039 [US5] Display option UUIDs with copy functionality in admin in `src/app/admin/modules/[id]/lesson/page.tsx`

**Checkpoint**: User Story 5 complete - admin has UUID reference tools

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T040 [P] Add backward compatibility handling for existing quizzes without new fields in `src/lib/services/quiz-randomization-service.ts`
- [x] T041 [P] Add input validation with Zod for all quiz attempt endpoints in `src/app/api/quiz-attempts/`
- [x] T042 [P] Add error handling for edge cases (attempt not found, already submitted, etc.) in `src/app/api/quiz-attempts/`
- [ ] T043 Verify existing quizzes continue working (SC-006) - manual testing
- [ ] T044 Performance verification: quiz loads in < 2 seconds (SC-008) - manual testing
- [x] T045 [P] Add logging for quiz randomization operations in `src/lib/services/quiz-randomization-service.ts`
- [ ] T046 Run quickstart.md validation scenarios

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - US1 and US3 are both P1 - implement together as they share scoring logic
  - US2 (P2) can start after US1/US3
  - US4, US5 (P3) can run in parallel after US1/US3
- **Polish (Phase 8)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: Can start after Foundational - Core randomization
- **US3 (P1)**: Can start after Foundational - Depends on US1 attempt structure
- **US2 (P2)**: Can start after Foundational - Independent admin UI, integrates with US1 service
- **US4 (P3)**: Can start after US1/US3 complete - Uses attempt data structure
- **US5 (P3)**: Can start after Foundational - Independent admin UI enhancement

### Parallel Opportunities

**Within Phase 1:**
- T007 and T008 can run in parallel (different files)

**Within Phase 3 (US1):**
- T014, T015, T016, T017 can run in parallel (different endpoint files)

**Within Phase 4 (US3):**
- Can run immediately after US1 endpoints exist

**Within Phase 5 (US2):**
- T026, T027, T028 modify same file - run sequentially
- T030, T031 can run in parallel with UI tasks

**Phase 6 and 7 (US4, US5):**
- These two user stories can run in parallel (different concerns)

---

## Parallel Example: Phase 1 Setup

```bash
# Run schema tasks sequentially (same file):
T001 → T002 → T003 → T004 → T005 → T006

# Then run utility tasks in parallel:
Task T007: "Create quiz types in src/types/quiz.ts"
Task T008: "Create shuffle utility in src/lib/utils/shuffle.ts"
```

## Parallel Example: User Story 1 Endpoints

```bash
# Launch all API endpoints in parallel (different files):
Task T014: "POST /lessons/[lessonId]/quiz-attempts"
Task T015: "GET /quiz-attempts/[attemptId]"
Task T016: "POST /quiz-attempts/[attemptId]/answers"
Task T017: "POST /quiz-attempts/[attemptId]/submit"
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 3 Only)

1. Complete Phase 1: Setup (schema + utilities)
2. Complete Phase 2: Foundational (services + migration)
3. Complete Phase 3: User Story 1 (randomized quiz display)
4. Complete Phase 4: User Story 3 (correct scoring)
5. **STOP and VALIDATE**: Test quiz randomization end-to-end
6. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. US1 + US3 → Randomized quizzes work end-to-end (MVP!)
3. US2 → Admin can configure pools/shuffles
4. US4 → Attempt history available
5. US5 → Admin has UUID tools
6. Polish → Production ready

### Single Developer Strategy

1. Complete phases sequentially: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
2. Within each phase, maximize parallel tasks on different files
3. Test each user story before moving to next

---

## Notes

- [P] tasks = different files, no dependencies on pending tasks
- [Story] label maps task to specific user story for traceability
- US1 and US3 are both P1 and should be implemented together
- Tests not included (not explicitly requested in spec)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
