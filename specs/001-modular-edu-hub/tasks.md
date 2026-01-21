# Tasks: Hub Éducatif Modulaire MVP

**Input**: Design documents from `/specs/001-modular-edu-hub/`
**Prerequisites**: plan.md (required), spec.md (required), data-model.md, contracts/api.yaml

**Tests**: Tests are included as smoke tests in the final polish phase.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4, US5)

## Path Conventions

- **Web app (Next.js monorepo)**: `src/app/`, `src/components/`, `src/lib/`, `prisma/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Next.js 14+ project with App Router in repository root
- [ ] T002 Configure TypeScript 5.x with strict mode in tsconfig.json
- [ ] T003 [P] Install and configure TailwindCSS in tailwind.config.ts and src/styles/globals.css
- [ ] T004 [P] Install Prisma ORM and initialize with PostgreSQL provider in prisma/schema.prisma
- [ ] T005 [P] Create .env.example with DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, ADMIN_USERNAME, ADMIN_PASSWORD_HASH
- [ ] T006 [P] Configure ESLint and Prettier with Next.js recommended rules in .eslintrc.json
- [ ] T007 Create TypeScript types for all enums in src/types/enums.ts (ContentStatus, ModuleProgressStatus, QuestionType, PracticeType, PracticeValidationMode)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**CRITICAL**: No user story work can begin until this phase is complete

- [ ] T008 Create Prisma schema with all entities per data-model.md in prisma/schema.prisma
- [ ] T009 Run initial Prisma migration to create database schema
- [ ] T010 [P] Create Prisma client singleton in src/lib/db/client.ts
- [ ] T011 [P] Create base TypeScript types from Prisma models in src/types/models.ts
- [ ] T012 [P] Create design system primitives (Button, Card, Input, Badge) in src/components/ui/
- [ ] T013 [P] Create global layout component with mobile-first responsive container in src/app/layout.tsx
- [ ] T014 [P] Configure TanStack Query provider for data fetching in src/lib/providers/query-provider.tsx
- [ ] T015 Create learner authentication with NextAuth.js in src/lib/auth/learner-auth.ts and src/app/api/auth/[...nextauth]/route.ts
- [ ] T016 Create admin authentication middleware in src/lib/auth/admin-auth.ts (environment variable based for MVP)
- [ ] T017 Create seed script structure in prisma/seed.ts with 1 domain, 1 pack, 1 discipline, 5 modules

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Navigate and Browse Educational Content (Priority: P1)

**Goal**: Learners can browse content hierarchy: Home → Domain → Pack → Discipline → Modules

**Independent Test**: Load app, see Domain cards, click through hierarchy to see Modules with status indicators

### Implementation for User Story 1

- [ ] T018 [P] [US1] Create DomainCard component in src/components/cards/DomainCard.tsx
- [ ] T019 [P] [US1] Create PackCard component in src/components/cards/PackCard.tsx
- [ ] T020 [P] [US1] Create DisciplineCard component in src/components/cards/DisciplineCard.tsx
- [ ] T021 [P] [US1] Create ModuleCard component with status indicator (locked/available/in_progress/completed) in src/components/cards/ModuleCard.tsx
- [ ] T022 [US1] Create content service for fetching published domains in src/lib/services/content-service.ts
- [ ] T023 [US1] Implement GET /api/content/domains endpoint in src/app/api/content/domains/route.ts
- [ ] T024 [US1] Implement GET /api/content/domains/[domainId] endpoint in src/app/api/content/domains/[domainId]/route.ts
- [ ] T025 [US1] Implement GET /api/content/packs/[packId] endpoint in src/app/api/content/packs/[packId]/route.ts
- [ ] T026 [US1] Implement GET /api/content/disciplines/[disciplineId] endpoint in src/app/api/content/disciplines/[disciplineId]/route.ts
- [ ] T027 [US1] Implement GET /api/content/modules/[moduleId] endpoint in src/app/api/content/modules/[moduleId]/route.ts
- [ ] T028 [US1] Create Home page displaying Domain cards in src/app/(learner)/page.tsx
- [ ] T029 [US1] Create Domain detail page showing Packs in src/app/(learner)/domain/[id]/page.tsx
- [ ] T030 [US1] Create Pack detail page showing Disciplines in src/app/(learner)/pack/[id]/page.tsx
- [ ] T031 [US1] Create Discipline detail page showing Modules with status in src/app/(learner)/discipline/[id]/page.tsx
- [ ] T032 [US1] Add breadcrumb navigation component in src/components/ui/Breadcrumb.tsx
- [ ] T033 [US1] Integrate breadcrumbs in all learner pages for navigation context

**Checkpoint**: User Story 1 complete - learners can browse Domain → Pack → Discipline → Module hierarchy

---

## Phase 4: User Story 2 - Complete a Module (Theory, Quiz, Practice) (Priority: P1)

**Goal**: Learners can enter a module, view theory, take quiz (pass/fail), complete practice, and finish module

**Independent Test**: Select available module, read theory, answer quiz, see pass/fail feedback, complete practice, verify module marked completed

### Implementation for User Story 2

- [ ] T034 [P] [US2] Create TheoryViewer component for displaying markdown/rich text in src/components/lesson/TheoryViewer.tsx
- [ ] T035 [P] [US2] Create QuizQuestion component supporting 3 types (single/multiple/short) in src/components/lesson/QuizQuestion.tsx
- [ ] T036 [P] [US2] Create QuizContainer component managing quiz state and submission in src/components/lesson/QuizContainer.tsx
- [ ] T037 [P] [US2] Create QuizResult component showing pass/fail with feedback in src/components/lesson/QuizResult.tsx
- [ ] T038 [P] [US2] Create PracticeInstructions component for 4 practice types in src/components/lesson/PracticeInstructions.tsx
- [ ] T039 [P] [US2] Create PracticeCompletion component with declarative validation button in src/components/lesson/PracticeCompletion.tsx
- [ ] T040 [US2] Create quiz scoring service with 70% threshold in src/lib/services/quiz-service.ts
- [ ] T041 [US2] Create progression service for tracking module progress in src/lib/services/progression-service.ts
- [ ] T042 [US2] Implement POST /api/progression/module/[moduleId]/theory endpoint in src/app/api/progression/module/[moduleId]/theory/route.ts
- [ ] T043 [US2] Implement POST /api/quiz/[moduleId]/submit endpoint in src/app/api/quiz/[moduleId]/submit/route.ts
- [ ] T044 [US2] Implement POST /api/progression/module/[moduleId]/practice endpoint in src/app/api/progression/module/[moduleId]/practice/route.ts
- [ ] T045 [US2] Create Module detail page with tabs (Theory/Quiz/Practice) in src/app/(learner)/module/[id]/page.tsx
- [ ] T046 [US2] Implement module completion logic (quiz passed + practice completed → COMPLETED status) in progression-service.ts
- [ ] T047 [US2] Implement module unlock logic (completed module unlocks next in sequence) in progression-service.ts
- [ ] T048 [US2] Add quiz retry functionality (unlimited retakes until passed)
- [ ] T049 [US2] Implement GET /api/quiz/[moduleId]/attempts endpoint in src/app/api/quiz/[moduleId]/attempts/route.ts

**Checkpoint**: User Story 2 complete - learners can complete full Theory → Quiz → Practice flow

---

## Phase 5: User Story 3 - Track Personal Progression (Priority: P2)

**Goal**: Learners see progression indicators at all levels, progression persists across sessions

**Independent Test**: Complete modules, verify percentages shown at Pack/Discipline level, refresh and verify state preserved

### Implementation for User Story 3

- [ ] T050 [P] [US3] Create ProgressBar component in src/components/progression/ProgressBar.tsx
- [ ] T051 [P] [US3] Create ProgressStats component (completed/total/percentage) in src/components/progression/ProgressStats.tsx
- [ ] T052 [P] [US3] Create ModuleStatusBadge component in src/components/progression/ModuleStatusBadge.tsx
- [ ] T053 [US3] Implement GET /api/progression endpoint for all user progression in src/app/api/progression/route.ts
- [ ] T054 [US3] Implement GET /api/progression/discipline/[disciplineId] endpoint in src/app/api/progression/discipline/[disciplineId]/route.ts
- [ ] T055 [US3] Add progression stats calculation to progression-service.ts (total, completed, percentage)
- [ ] T056 [US3] Integrate ProgressBar in PackCard showing pack-level progression
- [ ] T057 [US3] Integrate ProgressStats in Discipline page showing discipline completion
- [ ] T058 [US3] Update ModuleCard to show dynamic status from user progression
- [ ] T059 [US3] Add session persistence verification (progression survives refresh/logout)
- [ ] T060 [US3] Implement locked module redirect logic (locked module URL → discipline view with message)

**Checkpoint**: User Story 3 complete - progression visible at all levels, persists across sessions

---

## Phase 6: User Story 4 - Manage Educational Content (Admin) (Priority: P2)

**Goal**: Admin can login, create/edit/publish content (Domain/Pack/Discipline/Module/Lesson/Quiz)

**Independent Test**: Login as admin, create full hierarchy, add quiz questions, publish, verify visible to learners

### Implementation for User Story 4

- [ ] T061 [P] [US4] Create AdminLayout component with sidebar navigation in src/app/admin/layout.tsx
- [ ] T062 [P] [US4] Create ContentForm component for entity CRUD in src/components/admin/ContentForm.tsx
- [ ] T063 [P] [US4] Create QuizQuestionEditor component in src/components/admin/QuizQuestionEditor.tsx
- [ ] T064 [P] [US4] Create LessonEditor component (theory + quiz + practice) in src/components/admin/LessonEditor.tsx
- [ ] T065 [P] [US4] Create PublishButton component with validation check in src/components/admin/PublishButton.tsx
- [ ] T066 [P] [US4] Create StaleDataWarning component for concurrent edit detection in src/components/admin/StaleDataWarning.tsx
- [ ] T067 [US4] Create admin service for content CRUD operations in src/lib/services/admin-service.ts
- [ ] T068 [US4] Implement POST /api/admin/auth/login endpoint in src/app/api/admin/auth/login/route.ts
- [ ] T069 [US4] Implement POST /api/admin/auth/logout endpoint in src/app/api/admin/auth/logout/route.ts
- [ ] T070 [US4] Implement admin auth middleware protecting /api/admin/* and /admin/* routes in src/middleware.ts
- [ ] T071 [US4] Implement GET/POST /api/admin/domains endpoints in src/app/api/admin/domains/route.ts
- [ ] T072 [US4] Implement GET/PUT/DELETE /api/admin/domains/[domainId] endpoints in src/app/api/admin/domains/[domainId]/route.ts
- [ ] T073 [US4] Implement POST /api/admin/domains/[domainId]/publish endpoint in src/app/api/admin/domains/[domainId]/publish/route.ts
- [ ] T074 [US4] Implement CRUD endpoints for packs in src/app/api/admin/packs/
- [ ] T075 [US4] Implement CRUD endpoints for disciplines in src/app/api/admin/disciplines/
- [ ] T076 [US4] Implement CRUD endpoints for modules in src/app/api/admin/modules/
- [ ] T077 [US4] Implement PUT /api/admin/modules/[moduleId]/lesson endpoint in src/app/api/admin/modules/[moduleId]/lesson/route.ts
- [ ] T078 [US4] Create Admin Login page in src/app/admin/login/page.tsx
- [ ] T079 [US4] Create Admin Dashboard page in src/app/admin/page.tsx
- [ ] T080 [US4] Create Domains list/create page in src/app/admin/domains/page.tsx
- [ ] T081 [US4] Create Domain edit page in src/app/admin/domains/[id]/page.tsx
- [ ] T082 [US4] Create Packs management pages in src/app/admin/packs/
- [ ] T083 [US4] Create Disciplines management pages in src/app/admin/disciplines/
- [ ] T084 [US4] Create Modules management pages in src/app/admin/modules/
- [ ] T085 [US4] Create Lesson editor page (theory/quiz/practice) in src/app/admin/modules/[id]/lesson/page.tsx
- [ ] T086 [US4] Implement staleness check (X-If-Unmodified-Since header, 409 on conflict)
- [ ] T087 [US4] Implement module publish validation (must have theory, quiz questions, practice)

**Checkpoint**: User Story 4 complete - admin can manage all content with draft/publish workflow

---

## Phase 7: User Story 5 - Handle Connectivity Issues (Priority: P3)

**Goal**: Users see clear messages when offline, actions blocked appropriately, cached content shown when available

**Independent Test**: Disconnect network, verify warning appears, attempt quiz submit blocked, verify cached content shown

### Implementation for User Story 5

- [ ] T088 [P] [US5] Create ConnectionStatus component in src/components/ui/ConnectionStatus.tsx
- [ ] T089 [P] [US5] Create StalenessWarning component in src/components/ui/StalenessWarning.tsx
- [ ] T090 [P] [US5] Create OfflineBlocker component for blocking write actions in src/components/ui/OfflineBlocker.tsx
- [ ] T091 [US5] Create connection monitoring hook in src/lib/hooks/useConnectionStatus.ts
- [ ] T092 [US5] Configure TanStack Query stale time and cache policies in query-provider.tsx
- [ ] T093 [US5] Add ETag headers to content API responses for cache validation
- [ ] T094 [US5] Integrate ConnectionStatus in main layout (shows banner when offline)
- [ ] T095 [US5] Wrap quiz submit and practice complete with offline check
- [ ] T096 [US5] Add staleness warning to content pages when data may be outdated
- [ ] T097 [US5] Block admin write operations when offline with user feedback

**Checkpoint**: User Story 5 complete - graceful degradation for connectivity issues

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Quality, error handling, testing, and final polish

- [ ] T098 [P] Create standardized error page in src/app/error.tsx
- [ ] T099 [P] Create not-found page in src/app/not-found.tsx
- [ ] T100 [P] Create loading skeletons for all pages in src/components/ui/Skeleton.tsx
- [ ] T101 Add loading.tsx files for all route groups
- [ ] T102 Add consistent error handling to all API routes with proper status codes
- [ ] T103 Complete seed script with demo content (1 domain, 1 pack, 1 discipline, 5 modules with lessons)
- [ ] T104 Create Playwright e2e test for learner navigation flow in tests/e2e/learner-navigation.spec.ts
- [ ] T105 Create Playwright e2e test for module completion flow in tests/e2e/module-completion.spec.ts
- [ ] T106 Create Playwright e2e test for admin content creation in tests/e2e/admin-content.spec.ts
- [ ] T107 Verify mobile responsiveness on all pages (touch targets, layout)
- [ ] T108 Add basic console logging for key user actions
- [ ] T109 Run quickstart.md verification checklist
- [ ] T110 Update README with setup instructions

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - US1 and US2 can proceed in parallel (both P1)
  - US3 depends on US1 (needs navigation) and US2 (needs module completion for progression)
  - US4 can proceed in parallel with US1-US3 (independent admin interface)
  - US5 can start after US1 (needs pages to add offline handling)
- **Polish (Phase 8)**: Depends on all user stories being complete

### User Story Dependencies

```
Phase 1: Setup
    ↓
Phase 2: Foundational (BLOCKING)
    ↓
    ├── Phase 3: US1 (Navigate) ────────┬── Phase 4: US2 (Module Complete)
    │                                   │
    │                                   ↓
    │                              Phase 5: US3 (Progression)
    │                                   │
    └── Phase 6: US4 (Admin) ──────────┴── Phase 7: US5 (Connectivity)
                                        │
                                        ↓
                                   Phase 8: Polish
```

### Within Each User Story

- Components marked [P] can run in parallel
- Services before endpoints
- Endpoints before pages
- Core implementation before integration

### Parallel Opportunities

**Phase 1 (Setup)**:
```bash
# All [P] tasks can run in parallel:
T003, T004, T005, T006
```

**Phase 2 (Foundational)**:
```bash
# After T008, T009:
T010, T011, T012, T013, T014
```

**Phase 3 (US1)**:
```bash
# Card components in parallel:
T018, T019, T020, T021
```

**Phase 4 (US2)**:
```bash
# Lesson components in parallel:
T034, T035, T036, T037, T038, T039
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: User Story 1 (Navigation)
4. Complete Phase 4: User Story 2 (Module Completion)
5. **STOP and VALIDATE**: Test basic learner flow end-to-end
6. Deploy/demo MVP

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 (Navigation) → Learners can browse content
3. Add US2 (Module Complete) → Learners can learn (MVP!)
4. Add US3 (Progression) → Learners see progress
5. Add US4 (Admin) → Content management enabled
6. Add US5 (Connectivity) → Robustness improved
7. Polish → Production ready

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Total tasks: 110
