# Implementation Plan: Slides Pedagogy V2

**Branch**: `004-slides-pedagogy-v2` | **Date**: 2026-01-22 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-slides-pedagogy-v2/spec.md`

## Summary

Cette feature transforme l'expérience d'apprentissage en introduisant une navigation par slides pédagogiques pour Théorie, Quiz et Pratique. L'approche technique consiste à ajouter une couche "Deck/Slides" au-dessus du modèle existant (Lesson), sans migration destructive, avec un flag `mode` permettant une activation progressive par leçon.

## Technical Context

**Language/Version**: TypeScript 5.x (Next.js 16.1.4, React 19)
**Primary Dependencies**: Prisma 7.3, NextAuth 4.24, TanStack Query 5.90, Tailwind 4
**Storage**: PostgreSQL via Prisma
**Testing**: Playwright (E2E)
**Target Platform**: Web (desktop + mobile), mobile-first
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Animation transitions 200-300ms, lazy loading slides
**Constraints**: Rétrocompatibilité avec lessons existantes, mobile-first, tokens Catppuccin uniquement
**Scale/Scope**: ~10-15 composants, 3-4 nouveaux modèles Prisma, ~20 endpoints API

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principe | Status | Notes |
|----------|--------|-------|
| I. Création intégrale | ✅ PASS | Aucun CMS externe, slides gérées en interne |
| II. Structure avant contenu | ✅ PASS | Le moteur slides est indépendant du contenu |
| III. Modularité absolue | ✅ PASS | Slides découpables, réutilisables, versionnables |
| IV. Pédagogie unifiée | ✅ PASS | Triptyque Théorie→Quiz→Pratique respecté |
| V. Cross-plateforme natif | ✅ PASS | Mobile-first, navigation clavier desktop |
| VI. Modernité et clarté | ✅ PASS | 1 slide = 1 idée, <3 clics pour naviguer |
| VII. Hiérarchie des concepts | ✅ PASS | Aucun concept ajouté, slides = extension de Lesson |
| VIII. Polymorphisme pratique | ✅ PASS | Types existants (IN_GAME, EXERCICES, etc.) conservés |
| IX. Règles de progression | ✅ PASS | Verrouillage quiz/pratique, feedback immédiat |
| X. Scalabilité | ✅ PASS | Extension sans refonte, flag mode per-lesson |
| XI. Clause de cohérence | ✅ PASS | Renforce le moteur, réduit charge cognitive |

**GATE PASSED** - Aucune violation détectée.

## Project Structure

### Documentation (this feature)

```text
specs/004-slides-pedagogy-v2/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── components/
│   └── lesson/
│       ├── slides/                  # NEW - Slide components
│       │   ├── SlideContainer.tsx   # Main deck container
│       │   ├── TheorySlide.tsx      # Theory slide template (refactor existing)
│       │   ├── QuizSlide.tsx        # Quiz slide template (refactor existing)
│       │   ├── PracticeSlide.tsx    # Practice slide template (refactor existing)
│       │   ├── FeedbackPanel.tsx    # Quiz feedback overlay
│       │   └── index.ts
│       ├── SlideNavigation.tsx      # EXISTING - Enhanced with keyboard
│       ├── SlideProgress.tsx        # NEW - Phase indicator + progress bar
│       └── GuidedModuleFlow.tsx     # EXISTING - Refactor to use decks
├── lib/
│   ├── hooks/
│   │   ├── useSlideNavigation.ts    # NEW - Slide state management
│   │   └── useKeyboardNavigation.ts # NEW - Keyboard shortcuts
│   ├── utils/
│   │   └── theory-parser.ts         # EXISTING - Already parses to slides
│   └── services/
│       └── progression-service.ts   # NEW - Slide-level progression
├── app/
│   └── api/
│       └── progression/
│           └── slide/
│               └── [moduleId]/
│                   └── route.ts     # NEW - Slide progression API
└── generated/
    └── prisma/                      # Prisma client

prisma/
└── schema.prisma                    # ADD: TheorySlide, linked questions
```

**Structure Decision**: Extension du layout existant Next.js App Router. Les nouveaux composants slides sont ajoutés dans `src/components/lesson/slides/`. Le modèle de données étend le schema Prisma existant sans casser les relations.

## Complexity Tracking

> Aucune violation de constitution nécessitant justification.

---

## Phase 0: Research Summary

### Decision 1: Stratégie de données pour les slides

**Decision**: Parser le markdown existant (theory-parser.ts) + enrichir le modèle Prisma avec des métadonnées optionnelles

**Rationale**: Le parser `theory-parser.ts` existe déjà et découpe le contenu par `##`. On peut l'utiliser comme source de slides côté client tout en ajoutant des champs optionnels en base pour les métadonnées (type de slide, lien question→slide).

**Alternatives considered**:
- Full database slides: Trop de migration, casse le contenu existant
- Pure client parsing: Impossible de lier questions→slides spécifiques

### Decision 2: Gestion de l'état de navigation

**Decision**: Hook React custom `useSlideNavigation` avec state local + sync API

**Rationale**: L'état de navigation (index courant, réponses) doit être réactif côté client pour les animations fluides. La persistance se fait via API après chaque action significative.

**Alternatives considered**:
- URL state (query params): Pollue l'URL, pas adapté aux animations
- Full server state: Latence trop élevée pour UX fluide

### Decision 3: Rétrocompatibilité

**Decision**: Champ `mode` sur Lesson (`legacy` | `slides`), défaut `legacy`

**Rationale**: Permet d'activer les slides progressivement par leçon. Les anciennes leçons continuent de fonctionner sans modification.

**Alternatives considered**:
- Migration forcée: Risque de casser le contenu existant
- Feature flag global: Pas assez granulaire

### Decision 4: Lien Question → Slide Théorie

**Decision**: Champ `linkedTheorySection` (string) sur QuizQuestion référençant le titre du `##` section

**Rationale**: Simple à implémenter, le parser peut retrouver la slide correspondante par matching de titre. Pas besoin de FK complexe.

**Alternatives considered**:
- FK vers TheorySlide table: Over-engineering, le parser gère déjà le découpage
- Index numérique: Fragile si l'ordre des sections change

---

## Phase 1: Design Artifacts

*Voir fichiers générés: `data-model.md`, `contracts/`, `quickstart.md`*
