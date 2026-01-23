# Implementation Plan: Quiz Randomization V1

**Branch**: `005-quiz-randomization` | **Date**: 2026-01-23 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/005-quiz-randomization/spec.md`

## Summary

Implement a quiz randomization engine that, at each attempt launch:
1. Selects a random subset of questions from a pool (if pool > questionsToShow)
2. Shuffles question order
3. Shuffles answer options (A/B/C/D) for MCQ questions
4. Scores and persists results reliably using stable IDs (UUID question + choiceId)

**Architecture Principle**: Truth source = stable IDs, never A/B/C/D letters. Randomization is computed per attempt. Backend persists the selection, order, and mapping for exact scoring and review.

## Technical Context

**Language/Version**: TypeScript 5.x (Next.js 16.1.4, React 19)
**Primary Dependencies**: Prisma 7.3, NextAuth 4.24, TanStack Query 5.90, Tailwind 4
**Storage**: PostgreSQL via Prisma
**Testing**: Playwright (E2E), Jest (unit - to add)
**Target Platform**: Web (mobile-first responsive)
**Project Type**: Web application (Next.js monorepo)
**Performance Goals**: < 2 seconds quiz load time (SC-008)
**Constraints**: 100% backward compatibility with existing quizzes
**Scale/Scope**: Existing quiz system with ~10-20 questions per lesson

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Création intégrale | ✅ PASS | No external CMS - randomization is built internally |
| II. Structure avant contenu | ✅ PASS | Enhances engine without content dependency |
| III. Modularité absolue | ✅ PASS | Randomization service is isolated and reusable |
| IV. Pédagogie unifiée | ✅ PASS | Quiz phase preserved in triptyque |
| V. Cross-plateforme natif | ✅ PASS | Works on all platforms via API |
| VI. Modernité et clarté | ✅ PASS | No UX complexity added for learner |
| VII. Hiérarchie des concepts | ✅ PASS | Operates within Module > Lesson structure |
| VIII. Polymorphisme pratique | N/A | Feature doesn't impact practice types |
| IX. Règles de progression | ✅ PASS | Scoring and feedback remain immediate |
| X. Scalabilité | ✅ PASS | Designed for arbitrary pool sizes |
| XI. Clause de cohérence | ✅ PASS | Strengthens engine pedagogically |

**Gate Result**: PASS - All applicable principles satisfied.

## Project Structure

### Documentation (this feature)

```text
specs/005-quiz-randomization/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── quiz-randomization-api.yaml
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── api/
│   │   ├── admin/modules/[moduleId]/lesson/route.ts  # Update for shuffle settings
│   │   └── quizzes/                                   # NEW: Quiz attempt endpoints
│   │       ├── [quizId]/attempts/route.ts            # POST create attempt
│   │       └── attempts/[attemptId]/
│   │           ├── route.ts                          # GET attempt state
│   │           ├── answer/route.ts                   # POST submit answer
│   │           └── submit/route.ts                   # POST finalize attempt
│   └── admin/modules/[id]/lesson/page.tsx            # Update for shuffle toggles
├── components/
│   └── lesson/
│       └── slides/
│           ├── SlideContainer.tsx                     # Update for randomized quiz
│           └── QuizSlide.tsx                          # Update for label mapping
├── lib/
│   ├── services/
│   │   ├── quiz-service.ts                           # Update grading logic
│   │   ├── quiz-randomization-service.ts             # NEW: Randomization engine
│   │   └── quiz-attempt-service.ts                   # NEW: Attempt management
│   └── utils/
│       └── shuffle.ts                                 # NEW: Fisher-Yates shuffle
└── types/
    └── quiz.ts                                        # NEW: Quiz randomization types

prisma/
├── schema.prisma                                      # Update with new models
└── migrations/                                        # Migration for new tables
```

**Structure Decision**: Extending existing Next.js monorepo structure. New services isolated in `lib/services/`, new API routes under `app/api/quizzes/`.

## Complexity Tracking

> No Constitution violations requiring justification.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | - | - |
