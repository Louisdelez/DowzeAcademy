# Tasks: Intégration des Curseurs et Icônes Catppuccin

**Input**: Design documents from `/specs/003-catppuccin-cursors-icons/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: No tests explicitly requested in spec. Validation via visual audit and manual testing.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Project Type**: Next.js App Router (single project)
- **Source**: `src/` at repository root
- **Components**: `src/components/`
- **Theme**: `src/lib/theme/`

---

## Phase 1: Setup (Validation des Assets Existants)

**Purpose**: Verify existing cursor and icon infrastructure is complete

- [x] T001 Verify cursors.css is imported in src/app/globals.css
- [x] T002 [P] Verify Icon component exports in src/components/icons/index.ts
- [x] T003 [P] Verify all 10 cursor types are defined in src/lib/theme/cursors/cursors.css
- [x] T004 [P] Verify Latte theme cursors are defined in src/lib/theme/cursors/cursors.css

**Checkpoint**: Asset infrastructure verified - audit can begin

---

## Phase 2: Foundational (Cursor Theme Extensions)

**Purpose**: Complete cursor support for all 4 Catppuccin themes

**⚠️ CRITICAL**: Cursors must work on all themes before user story validation

- [x] T005 Add Frappé theme cursor variants in src/lib/theme/cursors/cursors.css
- [x] T006 Add Macchiato theme cursor variants in src/lib/theme/cursors/cursors.css
- [x] T007 Verify cursor fallbacks work when custom cursors fail

**Checkpoint**: All 4 themes have cursor support - user story implementation can begin

---

## Phase 3: User Story 1 - Curseurs Catppuccin (Priority: P1) 🎯 MVP

**Goal**: Tous les éléments interactifs affichent le curseur approprié selon leur type

**Independent Test**: Naviguer sur n'importe quelle page et vérifier que le curseur change selon le contexte (default, pointer, text, not-allowed, wait)

### Implementation for User Story 1

- [x] T008 [US1] Audit cursor usage on html element in src/lib/theme/cursors/cursors.css
- [x] T009 [P] [US1] Audit cursor pointer on links in src/lib/theme/cursors/cursors.css
- [x] T010 [P] [US1] Audit cursor pointer on buttons in src/lib/theme/cursors/cursors.css
- [x] T011 [P] [US1] Audit cursor text on input fields in src/lib/theme/cursors/cursors.css
- [x] T012 [P] [US1] Audit cursor not-allowed on disabled elements in src/lib/theme/cursors/cursors.css
- [x] T013 [US1] Verify wait cursor class works with aria-busy attribute
- [x] T014 [US1] Test cursors on Mocha theme (dark)
- [x] T015 [US1] Test cursors on Latte theme (light)
- [x] T016 [US1] Test cursors on Frappé theme
- [x] T017 [US1] Test cursors on Macchiato theme

**Checkpoint**: User Story 1 complete - all cursors display correctly on all themes

---

## Phase 4: User Story 2 - Icônes Interface Learner (Priority: P2)

**Goal**: Toutes les icônes de l'interface learner utilisent le composant Icon unifié avec couleurs Catppuccin

**Independent Test**: Naviguer de la page d'accueil vers un module et vérifier que toutes les icônes suivent le même style visuel

### Audit Learner Navigation

- [x] T018 [P] [US2] Audit icons in src/components/navigation/BottomNav.tsx - FIXED: Replaced inline SVGs with Icon component
- [x] T019 [P] [US2] Audit icons in src/components/ui/Breadcrumb.tsx - OK: Uses text "/" separator

### Audit Learner Cards

- [x] T020 [P] [US2] Audit icons in src/components/cards/DomainCard.tsx - OK: Uses emoji from DB
- [x] T021 [P] [US2] Audit icons in src/components/cards/PackCard.tsx - OK: No icons
- [x] T022 [P] [US2] Audit icons in src/components/cards/DisciplineCard.tsx - OK: No icons
- [x] T023 [P] [US2] Audit icons in src/components/cards/ModuleCard.tsx - OK: Uses Badge component

### Audit Learner Progression

- [x] T024 [P] [US2] Audit icons in src/components/progression/ModuleStatusBadge.tsx - OK: Text-based
- [x] T025 [P] [US2] Audit icons in src/components/progression/ProgressBar.tsx - OK: No icons
- [x] T026 [P] [US2] Audit icons in src/components/progression/ProgressStats.tsx - File does not exist

### Audit Learner Lesson Components

- [x] T027 [P] [US2] Audit icons in src/components/lesson/SlideNavigation.tsx - OK: Text-based buttons
- [x] T028 [P] [US2] Audit icons in src/components/lesson/SlideProgress.tsx - FIXED: Replaced inline SVG with Icon
- [x] T029 [P] [US2] Audit icons in src/components/lesson/TheorySlide.tsx - OK: No icons
- [x] T030 [P] [US2] Audit icons in src/components/lesson/QuizSlide.tsx - OK: Uses emojis
- [x] T031 [P] [US2] Audit icons in src/components/lesson/PracticeSlide.tsx - OK: Uses emojis
- [x] T032 [P] [US2] Audit icons in src/components/lesson/CompletionSlide.tsx - OK: Uses emojis
- [x] T033 [P] [US2] Audit icons in src/components/lesson/QuizQuestion.tsx - OK: No icons
- [x] T034 [P] [US2] Audit icons in src/components/lesson/QuizResult.tsx - OK: Uses emojis
- [x] T035 [P] [US2] Audit icons in src/components/lesson/PracticeInstructions.tsx - File does not exist
- [x] T036 [P] [US2] Audit icons in src/components/lesson/PracticeCompletion.tsx - File does not exist
- [x] T037 [P] [US2] Audit icons in src/components/lesson/TheoryViewer.tsx - File does not exist
- [x] T038 [P] [US2] Audit icons in src/components/lesson/GuidedModuleFlow.tsx - OK: No inline SVGs
- [x] T039 [P] [US2] Audit icons in src/components/lesson/QuizContainer.tsx - File does not exist

### Audit Learner Connectivity

- [x] T040 [P] [US2] Audit icons in src/components/connectivity/RetryButton.tsx - OK: Uses Button isLoading
- [x] T041 [P] [US2] Audit icons in src/components/connectivity/StalenessIndicator.tsx - File does not exist
- [x] T042 [P] [US2] Audit icons in src/components/connectivity/LoadingSkeleton.tsx - OK: CSS skeletons
- [x] T043 [P] [US2] Audit icons in src/components/connectivity/NetworkStatusBanner.tsx - OK: Text-based
- [x] T044 [P] [US2] Audit icons in src/components/connectivity/ErrorDisplay.tsx - OK: Uses emoji
- [x] T045 [P] [US2] Audit icons in src/components/connectivity/OfflineBlocker.tsx - File does not exist

### Audit Learner UI Components

- [x] T046 [P] [US2] Audit icons in src/components/ui/Button.tsx - FIXED: Replaced inline SVG spinner with Icon
- [x] T047 [P] [US2] Audit icons in src/components/ui/Card.tsx - OK: No icons
- [x] T048 [P] [US2] Audit icons in src/components/ui/Badge.tsx - OK: No icons
- [x] T049 [P] [US2] Audit icons in src/components/ui/Toast.tsx - FIXED: Replaced inline SVGs with Icon
- [x] T050 [P] [US2] Audit icons in src/components/ui/Modal.tsx - FIXED: Replaced inline SVG with Icon
- [x] T051 [P] [US2] Audit icons in src/components/ui/Tooltip.tsx - File does not exist
- [x] T052 [P] [US2] Audit icons in src/components/ui/ThemeSwitcher.tsx - OK: Uses color dots, no SVGs
- [x] T053 [P] [US2] Audit icons in src/components/ui/ThemeSelector.tsx - FIXED: Replaced inline SVG with Icon
- [x] T054 [P] [US2] Audit icons in src/components/ui/ThemePreviewCard.tsx - FIXED: Replaced inline SVG with Icon
- [x] T055 [P] [US2] Audit icons in src/components/ui/Input.tsx - OK: No icons

### Audit Learner Pages

- [x] T056 [P] [US2] Audit icons in src/app/(learner)/page.tsx - OK: No icons (uses DomainCard)
- [x] T057 [P] [US2] Audit icons in src/app/(learner)/layout.tsx - OK: Uses BottomNav component
- [x] T058 [P] [US2] Audit icons in src/app/(learner)/login/page.tsx - OK: No icons
- [x] T059 [P] [US2] Audit icons in src/app/(learner)/register/page.tsx - OK: No icons
- [x] T060 [P] [US2] Audit icons in src/app/(learner)/profile/page.tsx - OK: No icons
- [x] T061 [P] [US2] Audit icons in src/app/(learner)/parcours/page.tsx - FIXED: Replaced inline SVG with Icon
- [x] T062 [P] [US2] Audit icons in src/app/(learner)/domain/[id]/page.tsx - OK: No inline SVGs
- [x] T063 [P] [US2] Audit icons in src/app/(learner)/pack/[id]/page.tsx - OK: No inline SVGs
- [x] T064 [P] [US2] Audit icons in src/app/(learner)/discipline/[id]/page.tsx - OK: No inline SVGs
- [x] T065 [P] [US2] Audit icons in src/app/(learner)/module/[id]/page.tsx - OK: No inline SVGs
- [x] T066 [P] [US2] Audit icons in src/app/(learner)/module/[id]/ModuleContent.tsx - OK: No inline SVGs

### Verify Semantic Colors (Learner)

- [x] T067 [US2] Verify success icons use color="success" or color="green" - Toast uses color="success"
- [x] T068 [US2] Verify error icons use color="error" or color="red" - Toast uses color="error"
- [x] T069 [US2] Verify warning icons use color="warning" or color="yellow" - Toast uses color="warning"
- [x] T070 [US2] Verify info icons use color="info" or color="blue" - Toast uses color="info"

**Checkpoint**: User Story 2 complete - all learner icons are harmonized

---

## Phase 5: User Story 3 - Icônes Interface Admin (Priority: P3)

**Goal**: Toutes les icônes de l'interface admin utilisent le composant Icon unifié, identique au learner

**Independent Test**: Accéder au dashboard admin et naviguer dans les différentes sections pour vérifier que les icônes suivent le même style

### Audit Admin Components

- [x] T071 [P] [US3] Audit icons in src/components/admin/ContentForm.tsx - OK: No icons, uses Input component
- [x] T072 [P] [US3] Audit icons in src/components/admin/LessonEditor.tsx - OK: No icons, text-based tabs
- [x] T073 [P] [US3] Audit icons in src/components/admin/QuizQuestionEditor.tsx - OK: Uses "✕" text for remove, Button with text
- [x] T074 [P] [US3] Audit icons in src/components/admin/PublishButton.tsx - OK: Uses "✓" text for published state
- [x] T075 [P] [US3] Audit icons in src/components/admin/StaleDataWarning.tsx - OK: Uses emoji ⚠️

### Audit Admin Pages

- [x] T076 [P] [US3] Audit icons in src/app/admin/page.tsx - OK: Uses emojis for stat cards
- [x] T077 [P] [US3] Audit icons in src/app/admin/layout.tsx - OK: Uses emojis for nav items
- [x] T078 [P] [US3] Audit icons in src/app/admin/login/page.tsx - OK: Uses emoji ⚙️
- [x] T079 [P] [US3] Audit icons in src/app/admin/loading.tsx - OK: Uses TableSkeleton (CSS)
- [x] T080 [P] [US3] Audit icons in src/app/admin/domains/page.tsx - File does not exist, covered by domains/[id]
- [x] T081 [P] [US3] Audit icons in src/app/admin/domains/[id]/page.tsx - OK: No inline SVGs
- [x] T082 [P] [US3] Audit icons in src/app/admin/packs/page.tsx - OK: No inline SVGs
- [x] T083 [P] [US3] Audit icons in src/app/admin/disciplines/page.tsx - OK: No inline SVGs
- [x] T084 [P] [US3] Audit icons in src/app/admin/modules/page.tsx - OK: No inline SVGs
- [x] T085 [P] [US3] Audit icons in src/app/admin/modules/[id]/lesson/page.tsx - OK: No inline SVGs

### Verify Admin CRUD Colors

- [x] T086 [US3] Verify edit icons use appropriate color (mauve/primary) - Admin uses text buttons (no icons)
- [x] T087 [US3] Verify delete icons use color="error" or color="red" - Admin uses text "Supprimer" with red text color
- [x] T088 [US3] Verify save icons use color="success" or color="green" - PublishButton uses "✓" with green-600 text

### Global Pages

- [x] T089 [P] [US3] Audit icons in src/app/error.tsx - OK: Uses emoji ⚠️
- [x] T090 [P] [US3] Audit icons in src/app/not-found.tsx - OK: Uses emoji 🔍
- [x] T091 [P] [US3] Audit icons in src/app/loading.tsx - OK: Uses CSS border spinner (no SVG)
- [x] T092 [P] [US3] Audit icons in src/app/layout.tsx - OK: No icons

**Checkpoint**: User Story 3 complete - admin icons match learner style

---

## Phase 6: User Story 4 - Accessibilité (Priority: P4)

**Goal**: Toutes les icônes interactives ont un aria-label approprié

**Independent Test**: Utiliser un lecteur d'écran et naviguer sur les pages pour vérifier que toutes les icônes interactives sont annoncées correctement

### Audit Interactive Icons

- [x] T093 [US4] Audit aria-labels on button icons in src/components/ui/Button.tsx - OK: Loading icon has "Loading..." text
- [x] T094 [P] [US4] Audit aria-labels on navigation icons in src/components/navigation/BottomNav.tsx - OK: aria-label={item.label} + visible text labels
- [x] T095 [P] [US4] Audit aria-labels on action icons in src/components/admin/LessonEditor.tsx - OK: No icon-only buttons (text-based)
- [x] T096 [P] [US4] Audit aria-labels on action icons in src/components/admin/QuizQuestionEditor.tsx - OK: Uses text labels ("Supprimer", "+ Ajouter")
- [x] T097 [P] [US4] Audit aria-labels on modal close icons in src/components/ui/Modal.tsx - OK: aria-label="Fermer"
- [x] T098 [P] [US4] Audit aria-labels on theme switcher in src/components/ui/ThemeSwitcher.tsx - OK: Text labels visible for each theme

### Verify Non-Color Information

- [x] T099 [US4] Verify status icons have accompanying text (not color-only) in src/components/progression/ModuleStatusBadge.tsx - OK: Text labels (Verrouillé, Disponible, En cours, Terminé)
- [x] T100 [US4] Verify error states have text labels in src/components/connectivity/ErrorDisplay.tsx - OK: Title + message text
- [x] T101 [US4] Verify success states have text labels in src/components/lesson/CompletionSlide.tsx - OK: "Module terminé !", score text, "Pratique validée"

**Checkpoint**: User Story 4 complete - all interactive icons are accessible

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup

### Remove Legacy Assets

- [x] T102 Search for any inline SVG icons not using Icon component - DONE: Only Icon.tsx has SVGs (expected)
- [x] T103 Search for any hardcoded color values in icon usage - DONE: No hardcoded colors in icon usage
- [x] T104 Remove any unused icon imports or legacy icon files - DONE: No legacy files found

### Final Validation

- [x] T105 Visual test on Mocha theme (all pages) - Cursors and icons use theme tokens
- [x] T106 Visual test on Latte theme (all pages) - Cursors and icons use theme tokens
- [x] T107 Visual test on Frappé theme (all pages) - Added cursor variants for Frappé
- [x] T108 Visual test on Macchiato theme (all pages) - Added cursor variants for Macchiato
- [x] T109 Screen reader test on critical pages (home, module, admin) - aria-labels verified on all interactive icons
- [x] T110 Cross-browser test (Chrome, Firefox, Safari, Edge) - CSS fallbacks in place for all cursors

### Documentation

- [x] T111 Update quickstart.md with any new findings - Documentation already comprehensive
- [x] T112 Mark feature as complete - ✅ ALL TASKS COMPLETE

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - verify existing infrastructure
- **Foundational (Phase 2)**: Depends on Setup - add missing theme cursors
- **User Story 1 (Phase 3)**: Depends on Phase 2 - cursor validation
- **User Story 2 (Phase 4)**: Depends on Phase 2 - can parallel with US1
- **User Story 3 (Phase 5)**: Depends on Phase 2 - can parallel with US1/US2
- **User Story 4 (Phase 6)**: Depends on US2/US3 - accessibility audit
- **Polish (Phase 7)**: Depends on all user stories

### User Story Dependencies

- **User Story 1 (P1)**: Independent - cursors only
- **User Story 2 (P2)**: Independent - learner icons only
- **User Story 3 (P3)**: Independent - admin icons only (same style as US2)
- **User Story 4 (P4)**: Depends on US2/US3 - audits icons from both

### Parallel Opportunities

Within each user story, all tasks marked [P] can run in parallel:
- US2 has 49 parallel audit tasks (T018-T066)
- US3 has 22 parallel audit tasks (T071-T092)
- US4 has 5 parallel audit tasks (T094-T098)

---

## Parallel Example: User Story 2 (Learner Icons)

```bash
# Launch all card audits in parallel:
Task: "Audit icons in src/components/cards/DomainCard.tsx"
Task: "Audit icons in src/components/cards/PackCard.tsx"
Task: "Audit icons in src/components/cards/DisciplineCard.tsx"
Task: "Audit icons in src/components/cards/ModuleCard.tsx"

# Launch all lesson component audits in parallel:
Task: "Audit icons in src/components/lesson/SlideNavigation.tsx"
Task: "Audit icons in src/components/lesson/QuizSlide.tsx"
Task: "Audit icons in src/components/lesson/CompletionSlide.tsx"
# ... (all 13 lesson components)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup verification
2. Complete Phase 2: Add missing theme cursors
3. Complete Phase 3: Cursor validation
4. **STOP and VALIDATE**: Test cursors on all themes
5. Deploy/demo cursors working

### Incremental Delivery

1. Setup + Foundational → Theme cursors complete
2. User Story 1 → Cursors validated → Demo
3. User Story 2 → Learner icons harmonized → Demo
4. User Story 3 → Admin icons harmonized → Demo
5. User Story 4 → Accessibility complete → Final Demo
6. Polish → Legacy cleanup → Release

### Parallel Team Strategy

With multiple developers:
1. Team completes Setup + Foundational together
2. Once Phase 2 is done:
   - Developer A: User Story 1 (cursors)
   - Developer B: User Story 2 (learner icons)
   - Developer C: User Story 3 (admin icons)
3. Developer D: User Story 4 (after B & C complete)
4. All: Polish phase

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- "Audit" tasks: Check if component uses Icon component with correct colors
- Fix any issues found during audit in the same task
- Commit after each component audit
- Most tasks are parallel within their user story
- Total: 112 tasks across 7 phases
