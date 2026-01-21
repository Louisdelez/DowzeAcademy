# Implementation Plan: Hub Éducatif Modulaire MVP

**Branch**: `001-modular-edu-hub` | **Date**: 2026-01-21 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-modular-edu-hub/spec.md`

## Summary

Build a modular educational hub that enables learners to navigate hierarchical content (Domain → Pack → Discipline → Module → Lesson), complete the pedagogical triptyque (Theory → Quiz → Practice), and track their progression. Includes an internal admin panel for content management following the "A à Z" principle (no external CMS). Web-only, online-only MVP with mobile-first responsive design.

## Technical Context

**Language/Version**: TypeScript 5.x (frontend + backend)
**Primary Dependencies**:
- Frontend: Next.js 14+ (App Router), React 18, TailwindCSS
- Backend: Next.js API Routes (serverless), Prisma ORM
**Storage**: PostgreSQL (managed, e.g., Supabase, Neon, or self-hosted)
**Testing**: Vitest (unit), Playwright (e2e), React Testing Library (components)
**Target Platform**: Web browsers (Chrome, Safari, Firefox, Edge), mobile-first responsive
**Project Type**: Web application (monorepo with frontend + backend in Next.js)
**Performance Goals**:
- 1000 concurrent learners (SC-006)
- Quiz feedback < 2 seconds (SC-007)
- Navigation < 3 clicks to any module (SC-001)
**Constraints**:
- Online-only (no offline mode)
- Mobile-first responsive
- No external CMS
**Scale/Scope**:
- MVP: ~15 screens (learner) + ~10 screens (admin)
- Initial content: 1 domain, 1 pack, 1 discipline, 5 modules

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Verification |
|-----------|--------|--------------|
| I. Création intégrale (A à Z) | ✅ PASS | No external CMS; internal Content Service and Admin panel |
| II. Structure avant contenu | ✅ PASS | Platform works with empty content; seed data optional |
| III. Modularité absolue | ✅ PASS | Each entity (Domain/Pack/Discipline/Module/Lesson) is independent and replaceable |
| IV. Pédagogie unifiée | ✅ PASS | Every Module requires Theory + Quiz + Practice (FR-004, FR-005) |
| V. Cross-plateforme natif | ✅ PASS | Web-first MVP; mobile-first responsive design |
| VI. Modernité et clarté | ✅ PASS | Max 3 clicks (FR-032), visual design system, Duolingo-inspired UX |
| VII. Hiérarchie des concepts | ✅ PASS | Exactly 6 concepts: Domain → Pack → Discipline → Module → Lesson → Progression |
| VIII. Polymorphisme de la pratique | ✅ PASS | 4 practice types supported (IN_GAME, EXERCICES, PROJET, AUTO_EVALUATION) |
| IX. Règles de progression | ✅ PASS | Module locking, visible progression, immediate feedback, no skipping |
| X. Scalabilité | ✅ PASS | Adding new domains requires no architecture changes |
| XI. Clause de cohérence | ✅ PASS | All features directly support pedagogical engine |

**Gate Status**: PASSED - Proceed to Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/001-modular-edu-hub/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (API specifications)
│   └── api.yaml         # OpenAPI 3.0 specification
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── app/                     # Next.js App Router
│   ├── (learner)/           # Learner-facing routes
│   │   ├── page.tsx         # Home - Domain cards
│   │   ├── domain/[id]/     # Domain → Packs
│   │   ├── pack/[id]/       # Pack → Disciplines
│   │   ├── discipline/[id]/ # Discipline → Modules
│   │   └── module/[id]/     # Module → Lesson (Theory/Quiz/Practice)
│   ├── admin/               # Admin panel routes
│   │   ├── login/           # Admin authentication
│   │   ├── domains/         # Domain CRUD
│   │   ├── packs/           # Pack CRUD
│   │   ├── disciplines/     # Discipline CRUD
│   │   ├── modules/         # Module CRUD
│   │   └── lessons/         # Lesson CRUD (Theory/Quiz/Practice)
│   └── api/                 # API routes
│       ├── content/         # Content Service endpoints
│       ├── progression/     # Progression endpoints
│       ├── quiz/            # Quiz submission/validation
│       └── admin/           # Admin-only endpoints
├── components/              # Reusable UI components
│   ├── ui/                  # Design system primitives
│   ├── cards/               # Domain/Pack/Module cards
│   ├── lesson/              # Theory/Quiz/Practice components
│   └── progression/         # Progress bars, status indicators
├── lib/                     # Shared utilities
│   ├── db/                  # Prisma client, queries
│   ├── auth/                # Authentication helpers
│   └── utils/               # General utilities
├── types/                   # TypeScript type definitions
└── styles/                  # Global styles, Tailwind config

prisma/
├── schema.prisma            # Database schema
└── seed.ts                  # Seed data script

tests/
├── e2e/                     # Playwright end-to-end tests
├── integration/             # API integration tests
└── unit/                    # Unit tests
```

**Structure Decision**: Next.js monorepo with App Router. Frontend and backend colocated for simpler deployment and development. Admin panel under `/admin` route group with separate authentication.

## Complexity Tracking

> No constitution violations requiring justification.

## Phase Breakdown (from user input)

### Phase 0 — Cadrage (Complete)
- ✅ Constitution defined
- ✅ Specification complete
- ✅ This plan

### Phase 1 — UX Foundation
- Design system (typography, spacing, buttons, cards, states)
- UI skeleton with mocked data
- All learner routes implemented
- Progress indicators

### Phase 2 — Data Model
- Prisma schema for all entities
- Relationships and constraints
- Draft/published status
- Version tracking (updatedAt)

### Phase 3 — Content Service (Read)
- API endpoints for published content
- Caching strategy (SWR/React Query + HTTP cache headers)
- Staleness warning banner
- Seed data (1 domain, 1 pack, 1 discipline, 5 modules)

### Phase 4 — Progression
- User progression CRUD
- Module status tracking
- Unlock logic (linear by default)
- Persistence across sessions

### Phase 5 — Quiz Engine
- 3 question types (single choice, multiple choice, short text)
- Scoring engine (70% threshold)
- Immediate feedback
- Retry support
- Attempt tracking

### Phase 6 — Practice
- 4 practice types
- Declarative validation (user marks complete)
- Module completion logic

### Phase 7 — Admin Panel
- Admin authentication (shared credentials MVP)
- Full CRUD for all entities
- Draft/publish workflow
- Stale data warning on save

### Phase 8 — Quality
- Error states standardized
- Basic logging
- Smoke tests

### Phase 9 — Release MVP
- Demo content pack
- Setup documentation
- Deployment
