# Tasks: Slides Pedagogy V2

**Input**: Design documents from `/specs/004-slides-pedagogy-v2/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Tests not explicitly requested. E2E tests included in Polish phase for validation.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1-US5)
- Include exact file paths in descriptions

## Path Conventions

- **Project type**: Next.js App Router
- **Source**: `src/` at repository root
- **Components**: `src/components/lesson/slides/`
- **Hooks**: `src/lib/hooks/`
- **API**: `src/app/api/`
- **Schema**: `prisma/schema.prisma`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Database migration and TypeScript types setup

- [x] T001 Add LessonMode enum to prisma/schema.prisma
- [x] T002 Add mode field to Lesson model in prisma/schema.prisma
- [x] T003 Add linkedTheorySection field to QuizQuestion model in prisma/schema.prisma
- [x] T004 Add slideState JSON field to UserProgression model in prisma/schema.prisma
- [x] T005 Run Prisma migration: `npm run db:migrate`
- [x] T006 Regenerate Prisma client: `npm run db:generate`
- [x] T007 [P] Create TypeScript types for SlideState in src/types/slides.ts
- [x] T008 [P] Create TypeScript types for TheorySlide, QuizSlide, PracticeSlide in src/types/slides.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core hooks and utilities that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T009 Create useKeyboardNavigation hook in src/lib/hooks/useKeyboardNavigation.ts
- [x] T010 Extend theory-parser.ts to return TheorySlide[] with type detection in src/lib/utils/theory-parser.ts
- [x] T011 Create practice-parser utility function in src/lib/utils/practice-parser.ts
- [x] T012 Create useSlideNavigation hook skeleton in src/lib/hooks/useSlideNavigation.ts
- [x] T013 Implement useSlideNavigation state reducer in src/lib/hooks/useSlideNavigation.ts
- [x] T014 Add navigation actions (goNext, goPrevious, goToSlide) to useSlideNavigation in src/lib/hooks/useSlideNavigation.ts
- [x] T015 [P] Create slide CSS animations in src/app/globals.css
- [x] T016 [P] Create slides barrel export in src/components/lesson/slides/index.ts

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Navigation Théorie en Slides (Priority: P1) 🎯 MVP

**Goal**: Parcourir la théorie sous forme de slides avec navigation Suivant/Précédent et indicateur de progression

**Independent Test**: Navigate through theory slides with keyboard/buttons, verify progress indicator shows "X/Y"

### Implementation for User Story 1

- [x] T017 [P] [US1] Create SlideProgress component in src/components/lesson/slides/SlideProgress.tsx
- [x] T018 [P] [US1] Create SlideNavigation component with keyboard support in src/components/lesson/SlideNavigation.tsx (refactor existing)
- [x] T019 [US1] Create TheorySlide component with animation support in src/components/lesson/slides/TheorySlide.tsx
- [x] T020 [US1] Add slide transition animations to TheorySlide in src/components/lesson/slides/TheorySlide.tsx
- [x] T021 [US1] Create SlideContainer skeleton (theory phase only) in src/components/lesson/slides/SlideContainer.tsx
- [x] T022 [US1] Integrate keyboard navigation in SlideContainer in src/components/lesson/slides/SlideContainer.tsx
- [x] T023 [US1] Wire SlideProgress to SlideContainer in src/components/lesson/slides/SlideContainer.tsx
- [x] T024 [US1] Add theory-to-quiz transition logic in src/components/lesson/slides/SlideContainer.tsx
- [x] T025 [US1] Update GuidedModuleFlow to detect lesson.mode in src/components/lesson/GuidedModuleFlow.tsx
- [x] T026 [US1] Conditionally render SlideContainer when mode=SLIDES in src/components/lesson/GuidedModuleFlow.tsx
- [x] T027 [US1] Update module API to include lesson.mode in src/app/api/content/modules/[moduleId]/route.ts

**Checkpoint**: Theory slides navigable with progress indicator. Keyboard arrows work.

---

## Phase 4: User Story 2 - Quiz Une Question Par Slide (Priority: P1)

**Goal**: Répondre aux questions du quiz une par une avec feedback immédiat

**Independent Test**: Answer quiz questions one by one, verify feedback appears after each answer

### Implementation for User Story 2

- [x] T028 [P] [US2] Create FeedbackPanel component in src/components/lesson/slides/FeedbackPanel.tsx
- [x] T029 [US2] Create QuizSlide component with answer selection in src/components/lesson/slides/QuizSlide.tsx
- [x] T030 [US2] Add feedback state to QuizSlide in src/components/lesson/slides/QuizSlide.tsx
- [x] T031 [US2] Integrate FeedbackPanel into QuizSlide in src/components/lesson/slides/QuizSlide.tsx
- [x] T032 [US2] Add quiz actions (setAnswer, submitAnswer) to useSlideNavigation in src/lib/hooks/useSlideNavigation.ts
- [x] T033 [US2] Add quiz phase handling to SlideContainer in src/components/lesson/slides/SlideContainer.tsx
- [x] T034 [US2] Create QuizResultSlide component in src/components/lesson/slides/QuizResultSlide.tsx
- [x] T035 [US2] Add score calculation logic to useSlideNavigation in src/lib/hooks/useSlideNavigation.ts
- [x] T036 [US2] Handle quiz completion and show QuizResultSlide in src/components/lesson/slides/SlideContainer.tsx
- [x] T037 [US2] Add quiz-to-practice transition (when passed) in src/components/lesson/slides/SlideContainer.tsx

**Checkpoint**: Quiz works one question per slide with immediate feedback and score display.

---

## Phase 5: User Story 3 - Pratique Guidée en Étapes (Priority: P2)

**Goal**: Suivre la pratique sous forme d'étapes progressives avec auto-évaluation

**Independent Test**: Complete practice steps one by one, verify checklist appears at end

### Implementation for User Story 3

- [x] T038 [P] [US3] Create PracticeSlide component in src/components/lesson/slides/PracticeSlide.tsx
- [x] T039 [US3] Add checklist support to PracticeSlide in src/components/lesson/slides/PracticeSlide.tsx
- [x] T040 [US3] Create CompletionSlide component in src/components/lesson/slides/CompletionSlide.tsx
- [x] T041 [US3] Add practice phase handling to SlideContainer in src/components/lesson/slides/SlideContainer.tsx
- [x] T042 [US3] Integrate practice-parser in SlideContainer in src/components/lesson/slides/SlideContainer.tsx
- [x] T043 [US3] Add practice completion and CompletionSlide transition in src/components/lesson/slides/SlideContainer.tsx
- [x] T044 [US3] Add next module suggestion to CompletionSlide in src/components/lesson/slides/CompletionSlide.tsx

**Checkpoint**: Practice steps navigable with checklist, completion screen shows next action.

---

## Phase 6: User Story 4 - Lien Théorie-Quiz Pour Révision (Priority: P2)

**Goal**: Accéder directement à la slide de théorie correspondante après erreur au quiz

**Independent Test**: Make a quiz mistake, click "Revoir la théorie", verify it goes to correct slide

### Implementation for User Story 4

- [x] T045 [US4] Add linkedTheorySlide resolution logic in src/lib/hooks/useSlideNavigation.ts
- [x] T046 [US4] Add goToTheorySlide action to useSlideNavigation in src/lib/hooks/useSlideNavigation.ts
- [x] T047 [US4] Add "Revoir la théorie" button to FeedbackPanel in src/components/lesson/slides/FeedbackPanel.tsx
- [x] T048 [US4] Add returnToQuiz state to track quiz return position in src/lib/hooks/useSlideNavigation.ts
- [x] T049 [US4] Add "Retour au quiz" button when reviewing theory in src/components/lesson/slides/TheorySlide.tsx
- [x] T050 [US4] Update admin lesson API to accept linkedTheorySection in src/app/api/admin/modules/[moduleId]/lesson/route.ts
- [x] T051 [US4] Update LessonEditor to allow linking questions to theory sections in src/components/admin/LessonEditor.tsx

**Checkpoint**: Theory-quiz link works bidirectionally. Admin can configure links.

---

## Phase 7: User Story 5 - Retry Quiz Avec Suggestions (Priority: P3)

**Goal**: Afficher message motivant et suggestions de révision après échec au quiz

**Independent Test**: Fail quiz, verify motivating message and suggested slides appear

### Implementation for User Story 5

- [x] T052 [US5] Add wrongQuestions calculation to useSlideNavigation in src/lib/hooks/useSlideNavigation.ts
- [x] T053 [US5] Add suggestedSlides calculation in QuizResultSlide in src/components/lesson/slides/QuizResultSlide.tsx
- [x] T054 [US5] Add motivating failure message to QuizResultSlide in src/components/lesson/slides/QuizResultSlide.tsx
- [x] T055 [US5] Add retry quiz action (retryQuiz) to useSlideNavigation in src/lib/hooks/useSlideNavigation.ts
- [x] T056 [US5] Add "Réessayer" button to QuizResultSlide in src/components/lesson/slides/QuizResultSlide.tsx
- [x] T057 [US5] Add suggested slides links to QuizResultSlide in src/components/lesson/slides/QuizResultSlide.tsx

**Checkpoint**: Quiz failure shows motivating message, suggestions, and retry option.

---

## Phase 8: Progression Persistence (Cross-Cutting)

**Purpose**: API endpoints for saving and restoring slide progress

- [x] T058 Create GET /api/progression/slide/[moduleId] endpoint in src/app/api/progression/slide/[moduleId]/route.ts
- [x] T059 Create POST /api/progression/slide/[moduleId] endpoint in src/app/api/progression/slide/[moduleId]/route.ts
- [x] T060 Add API sync to useSlideNavigation (save on phase/index change) in src/lib/hooks/useSlideNavigation.ts
- [x] T061 Load initial progress in SlideContainer from API in src/components/lesson/slides/SlideContainer.tsx
- [x] T062 Add localStorage fallback for offline resilience in src/lib/hooks/useSlideNavigation.ts

**Checkpoint**: Progress persists across page refreshes and sessions.

---

## Phase 9: Admin Configuration (Cross-Cutting)

**Purpose**: Allow admins to enable slides mode and configure lessons

- [x] T063 Add mode toggle to LessonEditor in src/components/admin/LessonEditor.tsx
- [x] T064 Update admin lesson API to save mode field in src/app/api/admin/modules/[moduleId]/lesson/route.ts
- [x] T065 Add linkedTheorySection dropdown to QuizQuestionEditor in src/components/admin/QuizQuestionEditor.tsx
- [x] T066 Parse theory content to populate section dropdown in QuizQuestionEditor in src/components/admin/QuizQuestionEditor.tsx

**Checkpoint**: Admin can enable slides mode and link questions to theory sections.

---

## Phase 10: Polish & Edge Cases

**Purpose**: Handle edge cases, accessibility, and final polish

- [x] T067 [P] Add empty slide handling (skip slides with no content) in src/lib/utils/theory-parser.ts
- [x] T068 [P] Add quiz without questions fallback in src/components/lesson/slides/SlideContainer.tsx
- [x] T069 [P] Add practice without steps fallback in src/components/lesson/slides/SlideContainer.tsx
- [x] T070 Add aria-labels and roles for accessibility in src/components/lesson/slides/SlideProgress.tsx
- [x] T071 Add aria-labels to navigation buttons in src/components/lesson/SlideNavigation.tsx
- [x] T072 Add role="radiogroup" to quiz options in src/components/lesson/slides/QuizSlide.tsx
- [x] T073 Add role="alert" to FeedbackPanel in src/components/lesson/slides/FeedbackPanel.tsx
- [x] T074 Add prefers-reduced-motion support to animations in src/app/globals.css
- [x] T075 [P] Mobile touch gesture support (swipe) in src/lib/hooks/useSwipeNavigation.ts
- [x] T076 Run manual testing per quickstart.md checklist

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup)
    ↓
Phase 2 (Foundational) ⚠️ BLOCKS ALL STORIES
    ↓
┌───────────────────────────────────────────────────────┐
│  Phase 3 (US1: Theory) ─→ Phase 4 (US2: Quiz)         │
│            ↓                      ↓                    │
│  Phase 5 (US3: Practice)   Phase 6 (US4: Theory Link) │
│                                   ↓                    │
│                        Phase 7 (US5: Retry)            │
└───────────────────────────────────────────────────────┘
    ↓
Phase 8 (Progression) - After US1+US2 at minimum
    ↓
Phase 9 (Admin) - After Phase 8
    ↓
Phase 10 (Polish) - After all user stories
```

### User Story Dependencies

| Story | Depends On | Can Start After |
|-------|------------|-----------------|
| US1 (Theory) | Foundational | Phase 2 complete |
| US2 (Quiz) | US1 | Phase 3 complete |
| US3 (Practice) | US1, US2 | Phase 4 complete |
| US4 (Theory-Quiz Link) | US2 | Phase 4 complete |
| US5 (Retry) | US2 | Phase 4 complete |

### Parallel Opportunities

**Within Phase 1** (can run in parallel):
- T007, T008 (TypeScript types)

**Within Phase 2** (can run in parallel):
- T015, T016 (CSS, barrel export)

**Within User Stories** (marked [P]):
- T017, T018 (SlideProgress, SlideNavigation)
- T028 (FeedbackPanel - independent of QuizSlide)
- T038 (PracticeSlide)

**Across Stories** (if team capacity):
- US4 and US5 can run in parallel (both depend on US2)
- US3 can run in parallel with US4/US5 (all depend on US2)

---

## Parallel Example: Phase 3 (User Story 1)

```bash
# First: parallel component creation
Task: "T017 Create SlideProgress component"
Task: "T018 Create SlideNavigation component"

# Then: sequential integration
Task: "T019 Create TheorySlide component"
Task: "T020 Add slide transition animations"
Task: "T021 Create SlideContainer skeleton"
...
```

---

## Implementation Strategy

### MVP First (User Stories 1+2 Only)

1. Complete Phase 1: Setup (T001-T008)
2. Complete Phase 2: Foundational (T009-T016)
3. Complete Phase 3: US1 Theory Slides (T017-T027)
4. **VALIDATE**: Theory navigation works
5. Complete Phase 4: US2 Quiz Slides (T028-T037)
6. **VALIDATE**: Quiz works with feedback
7. Complete Phase 8: Progression (T058-T062)
8. **MVP READY**: Theory + Quiz + Persistence

### Incremental Delivery

| Increment | Stories | Deliverable |
|-----------|---------|-------------|
| MVP | US1 + US2 | Theory slides + Quiz slides |
| +Practice | US3 | Practice steps + Completion |
| +Deep Link | US4 | Theory review from quiz |
| +Retry | US5 | Motivating retry experience |
| +Admin | Admin | Full admin configuration |
| +Polish | Edge cases | Production-ready |

### Task Summary

| Phase | Task Count | Parallel Tasks |
|-------|------------|----------------|
| Setup | 8 | 2 |
| Foundational | 8 | 2 |
| US1 (Theory) | 11 | 2 |
| US2 (Quiz) | 10 | 1 |
| US3 (Practice) | 7 | 1 |
| US4 (Link) | 7 | 0 |
| US5 (Retry) | 6 | 0 |
| Progression | 5 | 0 |
| Admin | 4 | 0 |
| Polish | 10 | 5 |
| **TOTAL** | **76** | **13** |

---

## Completion Status

**Phase 1-10 Implementation: 76/76 tasks complete (100%)**

All tasks complete! The slides pedagogy feature has been fully implemented and tested.

---

## Notes

- All tasks include exact file paths
- [P] = parallelizable within same phase
- [US#] = maps to user story for traceability
- Commit after each task or logical group
- Stop at any checkpoint to validate story
- MVP = US1 + US2 + Progression (43 tasks)
