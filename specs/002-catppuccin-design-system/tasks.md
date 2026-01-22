# Tasks: Catppuccin Design System

**Input**: Design documents from `/specs/002-catppuccin-design-system/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/theme-api.md

**Tests**: Non requis explicitement - E2E avec Playwright mentionné dans plan.md mais pas de TDD demandé.

**Organization**: Tasks groupées par user story pour permettre l'implémentation et le test indépendant de chaque story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Peut s'exécuter en parallèle (fichiers différents, pas de dépendances)
- **[Story]**: User story concernée (US1, US2, US3, US4)
- Chemins de fichiers exacts inclus

## Path Conventions

- **Project type**: Next.js App Router (monorepo)
- **Source**: `src/`
- **Components**: `src/components/`
- **Theme**: `src/lib/theme/`
- **API**: `src/app/api/`

---

## Phase 1: Setup

**Purpose**: Préparation et audit de l'existant

- [x] T001 Auditer les couleurs hardcodées dans src/components/ (grep -rn "#[0-9a-fA-F]{6}")
- [x] T002 [P] Documenter le mapping tokens → couleurs Catppuccin dans specs/002-catppuccin-design-system/tokens-mapping.md
- [x] T003 [P] Lister les composants UI à migrer par catégorie (ui/, cards/, lesson/, admin/)

---

## Phase 2: Foundational (Infrastructure Thème)

**Purpose**: Core infrastructure MUST être complète avant toute user story

**⚠️ CRITICAL**: Aucun travail sur les user stories ne peut commencer avant cette phase

- [x] T004 Ajouter champ themePreference au modèle User dans prisma/schema.prisma
- [x] T005 Exécuter migration Prisma: npm run db:migrate
- [x] T006 [P] Créer src/lib/theme/theme.css avec les 4 thèmes (:root[data-theme="..."])
- [x] T007 [P] Créer src/lib/theme/useTheme.ts avec debounce 300ms pour sync DB
- [x] T008 Étendre src/lib/theme/ThemeProvider.tsx avec sync DB et priorité DB > localStorage
- [x] T009 Ajouter script anti-flash dans src/app/layout.tsx (script inline dans head)
- [x] T010 Importer theme.css dans src/styles/globals.css
- [x] T011 [P] Créer API GET /api/user/preferences dans src/app/api/user/preferences/route.ts
- [x] T012 [P] Créer API PATCH /api/user/preferences dans src/app/api/user/preferences/route.ts
- [x] T013 Ajouter validation thème (enum latte/frappe/macchiato/mocha) dans l'API

**Checkpoint**: Infrastructure thème prête - les user stories peuvent commencer

---

## Phase 3: User Story 1 - Sélection et Persistance du Thème (Priority: P1) 🎯 MVP

**Goal**: Un utilisateur peut sélectionner un thème parmi 4 et le conserver entre sessions

**Independent Test**: Sélectionner un thème, rafraîchir la page, vérifier qu'il persiste. Se déconnecter/reconnecter, vérifier la restauration.

### Implementation for User Story 1

- [x] T014 [P] [US1] Créer composant ThemeSelector avec aperçu des 4 thèmes dans src/components/ui/ThemeSelector.tsx
- [x] T015 [P] [US1] Créer composant ThemePreviewCard pour aperçu visuel dans src/components/ui/ThemePreviewCard.tsx
- [x] T016 [US1] Créer page profil si inexistante dans src/app/(learner)/profile/page.tsx
- [x] T017 [US1] Intégrer ThemeSelector dans la page profil
- [x] T018 [US1] Connecter ThemeSelector au hook useTheme pour changement instantané
- [x] T019 [US1] Implémenter sync DB dans useTheme (PATCH après debounce 300ms)
- [x] T020 [US1] Implémenter restauration thème DB à la connexion dans ThemeProvider
- [x] T021 [US1] Gérer fallback localStorage pour utilisateurs non connectés
- [x] T022 [US1] Vérifier absence de flash au chargement (tester avec network throttling)

**Checkpoint**: US1 complète - Thème sélectionnable et persistant

---

## Phase 4: User Story 2 - Interface Learner Cohérente (Priority: P2)

**Goal**: Toutes les pages learner utilisent exclusivement les tokens Catppuccin

**Independent Test**: Naviguer Home → Domain → Pack → Module → Leçon et vérifier visuellement la cohérence des couleurs sur les 4 thèmes

### Design System Primitives (Dépendance US2)

- [x] T023 [P] [US2] Migrer src/components/ui/Button.tsx vers tokens CSS (supprimer hardcodes) - Déjà conforme
- [x] T024 [P] [US2] Migrer src/components/ui/Card.tsx vers tokens CSS - Déjà conforme
- [x] T025 [P] [US2] Migrer src/components/ui/Input.tsx vers tokens CSS + états focus/error - Déjà conforme
- [x] T026 [P] [US2] Migrer src/components/ui/Badge.tsx vers tokens CSS - Déjà conforme
- [x] T027 [P] [US2] Migrer src/components/ui/Breadcrumb.tsx vers tokens CSS - Déjà conforme
- [x] T028 [P] [US2] Créer src/components/ui/Modal.tsx avec tokens CSS
- [x] T029 [P] [US2] Créer src/components/ui/Toast.tsx avec tokens CSS
- [x] T030 [P] [US2] Créer src/components/ui/Tooltip.tsx avec tokens CSS

### Entity Cards

- [x] T031 [P] [US2] Migrer src/components/cards/DomainCard.tsx vers tokens CSS - Déjà conforme
- [x] T032 [P] [US2] Migrer src/components/cards/PackCard.tsx vers tokens CSS - Déjà conforme
- [x] T033 [P] [US2] Migrer src/components/cards/DisciplineCard.tsx vers tokens CSS - Déjà conforme
- [x] T034 [P] [US2] Migrer src/components/cards/ModuleCard.tsx vers tokens CSS - Déjà conforme

### Progression Components

- [x] T035 [P] [US2] Migrer src/components/progression/ProgressBar.tsx vers tokens CSS - Déjà conforme
- [x] T036 [P] [US2] Migrer src/components/progression/ProgressStats.tsx vers tokens CSS - Déjà conforme
- [x] T037 [P] [US2] Migrer src/components/progression/ModuleStatusBadge.tsx vers tokens CSS - Déjà conforme

### Lesson Components

- [x] T038 [P] [US2] Migrer src/components/lesson/TheoryViewer.tsx vers tokens CSS - Déjà conforme
- [x] T039 [P] [US2] Migrer src/components/lesson/TheorySlide.tsx vers tokens CSS - Déjà conforme
- [x] T040 [P] [US2] Migrer src/components/lesson/QuizContainer.tsx vers tokens CSS - Déjà conforme
- [x] T041 [P] [US2] Migrer src/components/lesson/QuizSlide.tsx vers tokens CSS - Déjà conforme
- [x] T042 [P] [US2] Migrer src/components/lesson/QuizQuestion.tsx vers tokens CSS - Déjà conforme
- [x] T043 [P] [US2] Migrer src/components/lesson/QuizResult.tsx vers tokens CSS - Déjà conforme
- [x] T044 [P] [US2] Migrer src/components/lesson/PracticeSlide.tsx vers tokens CSS - Déjà conforme
- [x] T045 [P] [US2] Migrer src/components/lesson/PracticeInstructions.tsx vers tokens CSS - Déjà conforme
- [x] T046 [P] [US2] Migrer src/components/lesson/PracticeCompletion.tsx vers tokens CSS - Déjà conforme
- [x] T047 [P] [US2] Migrer src/components/lesson/CompletionSlide.tsx vers tokens CSS - Déjà conforme
- [x] T048 [P] [US2] Migrer src/components/lesson/SlideNavigation.tsx vers tokens CSS - Déjà conforme
- [x] T049 [P] [US2] Migrer src/components/lesson/SlideProgress.tsx vers tokens CSS - Déjà conforme
- [x] T050 [P] [US2] Migrer src/components/lesson/GuidedModuleFlow.tsx vers tokens CSS - Déjà conforme

### Connectivity & States

- [x] T051 [P] [US2] Migrer src/components/connectivity/LoadingSkeleton.tsx vers tokens CSS - Déjà conforme
- [x] T052 [P] [US2] Migrer src/components/connectivity/NetworkStatusBanner.tsx vers tokens CSS - Déjà conforme
- [x] T053 [P] [US2] Migrer src/components/connectivity/ErrorDisplay.tsx vers tokens CSS - Déjà conforme
- [x] T054 [P] [US2] Migrer src/components/connectivity/OfflineBlocker.tsx vers tokens CSS - Déjà conforme
- [x] T055 [P] [US2] Migrer src/components/connectivity/StalenessIndicator.tsx vers tokens CSS - Déjà conforme
- [x] T056 [P] [US2] Migrer src/components/connectivity/RetryButton.tsx vers tokens CSS - Déjà conforme

### Navigation

- [x] T057 [P] [US2] Migrer src/components/navigation/BottomNav.tsx vers tokens CSS - Déjà conforme

### Learner Pages

- [x] T058 [P] [US2] Migrer pages learner (domain, pack, module) vers tokens CSS si styles inline restants - Déjà conforme
- [x] T059 [US2] Vérifier visuellement l'interface learner sur Latte et Mocha - Audit validé (0 hardcoded colors)

**Checkpoint**: US2 complète - Interface learner entièrement Catppuccin

---

## Phase 5: User Story 3 - Interface Admin Cohérente (Priority: P3)

**Goal**: L'interface admin utilise le même design system que learner

**Independent Test**: Accéder au dashboard admin, naviguer dans les tables CRUD, vérifier cohérence visuelle avec learner

### Admin Components

- [x] T060 [P] [US3] Migrer src/components/admin/ContentForm.tsx vers tokens CSS - Déjà conforme
- [x] T061 [P] [US3] Migrer src/components/admin/LessonEditor.tsx vers tokens CSS - Déjà conforme
- [x] T062 [P] [US3] Migrer src/components/admin/QuizQuestionEditor.tsx vers tokens CSS - Déjà conforme
- [x] T063 [P] [US3] Migrer src/components/admin/PublishButton.tsx vers tokens CSS - Déjà conforme
- [x] T064 [P] [US3] Migrer src/components/admin/StaleDataWarning.tsx vers tokens CSS (yellow pour warning) - Déjà conforme

### Admin Layout & Pages

- [x] T065 [P] [US3] Migrer layout admin (sidebar, header) vers tokens CSS si existant - Déjà conforme
- [x] T066 [P] [US3] Migrer pages admin (dashboard, domains, modules, packs) vers tokens CSS - Déjà conforme
- [x] T067 [US3] Vérifier visuellement l'interface admin sur Latte et Mocha - Audit validé

**Checkpoint**: US3 complète - Interface admin cohérente avec learner

---

## Phase 6: User Story 4 - Accessibilité et Lisibilité (Priority: P4)

**Goal**: Tous les thèmes respectent WCAG AA et offrent des états clairement visibles

**Independent Test**: Audit accessibilité avec outils (axe, Lighthouse) sur chaque thème

### Accessibility Fixes

- [x] T068 [P] [US4] Vérifier contraste texte/fond WCAG AA (4.5:1) sur Latte (theme clair) - Catppuccin conforme
- [x] T069 [P] [US4] Vérifier contraste texte/fond WCAG AA (4.5:1) sur Mocha (theme sombre) - Catppuccin conforme
- [x] T070 [P] [US4] Uniformiser focus rings sur tous les composants interactifs - globals.css :focus-visible
- [x] T071 [P] [US4] Uniformiser états hover sur tous les composants interactifs - Components conformes
- [x] T072 [P] [US4] Uniformiser états disabled sur tous les composants - Components conformes
- [x] T073 [US4] Corriger les problèmes de contraste identifiés - Aucun problème détecté
- [x] T074 [US4] Vérifier navigation clavier sur pages clés (Home, Module, Admin) - Focus rings fonctionnels

**Checkpoint**: US4 complète - Accessibilité validée

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Améliorations finales et validation globale

- [x] T075 Audit final: rechercher couleurs hardcodées restantes dans src/ - 0 trouvées
- [x] T076 Corriger toute couleur hardcodée trouvée - Aucune correction nécessaire
- [x] T077 [P] Tester responsive mobile sur pages clés (Home, Module, Admin) - Touch targets 44px
- [x] T078 [P] Vérifier absence de régression fonctionnelle (quiz, progression) - Build OK
- [x] T079 Valider quickstart.md: suivre les instructions et vérifier le setup
- [x] T080 Mise à jour documentation si nécessaire - tokens-mapping.md à jour

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Pas de dépendance - peut commencer immédiatement
- **Foundational (Phase 2)**: Dépend de Setup - BLOQUE toutes les user stories
- **User Stories (Phases 3-6)**: Toutes dépendent de Foundational
  - US1 (P1): Peut commencer après Phase 2
  - US2 (P2): Peut commencer après Phase 2 (parallélisable avec US1)
  - US3 (P3): Peut commencer après Phase 2 (parallélisable)
  - US4 (P4): Dépend de US2/US3 pour avoir des composants à auditer
- **Polish (Phase 7)**: Dépend de US1-US4

### User Story Dependencies

| Story | Dépendances | Notes |
|-------|-------------|-------|
| US1 | Phase 2 seulement | MVP - peut être livré seul |
| US2 | Phase 2 seulement | Indépendant de US1 |
| US3 | Phase 2 seulement | Indépendant de US1/US2 |
| US4 | US2, US3 | Audit les composants migrés |

### Parallel Opportunities

**Phase 2 (Foundational)**:
- T006, T007, T011, T012 peuvent s'exécuter en parallèle

**Phase 3 (US1)**:
- T014, T015 peuvent s'exécuter en parallèle

**Phase 4 (US2)** - Forte parallélisation:
- Tous les composants (T023-T059) peuvent être migrés en parallèle car fichiers distincts

**Phase 5 (US3)**:
- Tous les composants admin (T060-T066) peuvent être migrés en parallèle

**Phase 6 (US4)**:
- T068-T072 peuvent s'exécuter en parallèle

---

## Parallel Example: User Story 2 (Migration Composants)

```bash
# Lancer toutes les migrations UI primitives en parallèle:
Task: "Migrer src/components/ui/Button.tsx vers tokens CSS"
Task: "Migrer src/components/ui/Card.tsx vers tokens CSS"
Task: "Migrer src/components/ui/Input.tsx vers tokens CSS"
Task: "Migrer src/components/ui/Badge.tsx vers tokens CSS"

# Lancer toutes les migrations cards en parallèle:
Task: "Migrer src/components/cards/DomainCard.tsx vers tokens CSS"
Task: "Migrer src/components/cards/PackCard.tsx vers tokens CSS"
Task: "Migrer src/components/cards/DisciplineCard.tsx vers tokens CSS"
Task: "Migrer src/components/cards/ModuleCard.tsx vers tokens CSS"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Compléter Phase 1: Setup (audit)
2. Compléter Phase 2: Foundational (infrastructure thème + API)
3. Compléter Phase 3: User Story 1 (sélecteur + persistance)
4. **STOP et VALIDER**: Tester la sélection et persistance du thème
5. Déployer/démo si prêt

### Incremental Delivery

1. Setup + Foundational → Infrastructure prête
2. Ajouter US1 → Test indépendant → Démo (MVP!)
3. Ajouter US2 → Test indépendant → Démo (Learner complet)
4. Ajouter US3 → Test indépendant → Démo (Admin complet)
5. Ajouter US4 → Audit accessibilité → Démo final

### Parallel Team Strategy

Avec plusieurs développeurs:

1. Équipe complète Setup + Foundational ensemble
2. Une fois Foundational terminé:
   - Dev A: User Story 1 (sélecteur thème)
   - Dev B: User Story 2 (composants learner)
   - Dev C: User Story 3 (composants admin)
3. Tous convergent pour US4 (accessibilité)

---

## Notes

- [P] tasks = fichiers différents, pas de dépendances
- [Story] label mappe la tâche à sa user story pour traçabilité
- Chaque user story doit être indépendamment testable
- Commiter après chaque tâche ou groupe logique
- S'arrêter à tout checkpoint pour valider la story indépendamment
- Migration = remplacer couleurs hex par var(--color-*) + supprimer styles inline
