# Implementation Plan: Intégration des Curseurs et Icônes Catppuccin

**Branch**: `003-catppuccin-cursors-icons` | **Date**: 2026-01-22 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/003-catppuccin-cursors-icons/spec.md`

## Summary

Intégrer des curseurs CSS personnalisés et un système d'icônes unifié basé sur le style Catppuccin pour renforcer l'identité visuelle de l'application. Cette feature est purement visuelle et n'impacte pas la logique métier. Les curseurs et icônes existent déjà partiellement dans la codebase, ce plan formalise l'audit et la complétion pour garantir 100% de conformité.

## Technical Context

**Language/Version**: TypeScript 5.x (Next.js 16.1.4, React 19)
**Primary Dependencies**: Next.js, React, TailwindCSS 4, CSS custom properties
**Storage**: N/A (feature visuelle uniquement)
**Testing**: Playwright E2E, audit visuel manuel
**Target Platform**: Web (Chrome, Firefox, Safari, Edge)
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Aucun impact sur les performances (CSS statique)
**Constraints**: Curseurs via CSS `cursor: url()`, tailles d'icônes limitées à 16/20/24px
**Scale/Scope**: ~70 composants TSX, 2 interfaces (learner + admin)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Création intégrale (A à Z) | ✅ Pass | Icônes et curseurs créés en interne, aucun CMS externe |
| II. Structure avant contenu | ✅ Pass | Feature visuelle, n'impacte pas l'architecture |
| III. Modularité absolue | ✅ Pass | Composant Icon réutilisable et modulaire |
| IV. Pédagogie unifiée | ✅ N/A | Feature non pédagogique |
| V. Cross-plateforme natif | ✅ Pass | CSS fonctionne sur web desktop/mobile |
| VI. Modernité et clarté | ✅ Pass | Renforce l'identité visuelle moderne |
| VII. Hiérarchie des concepts | ✅ N/A | Aucun impact sur Domain/Pack/Discipline/Module |
| VIII. Polymorphisme pratique | ✅ N/A | Feature non pédagogique |
| IX. Règles de progression | ✅ N/A | Feature non pédagogique |
| X. Scalabilité | ✅ Pass | Système extensible (nouveaux icônes/thèmes) |
| XI. Clause de cohérence | ✅ Pass | Renforce le moteur (identité visuelle) sans complexifier |

**Gate Status**: PASSED - Aucune violation de la constitution.

## Project Structure

### Documentation (this feature)

```text
specs/003-catppuccin-cursors-icons/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (minimal - CSS entities)
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (empty - no API)
├── checklists/          # Validation checklists
│   └── requirements.md
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── app/
│   └── globals.css              # Import cursors.css
├── components/
│   ├── icons/
│   │   ├── Icon.tsx             # Composant Icon unifié (existe)
│   │   └── index.ts             # Exports
│   ├── ui/                      # Composants utilisant des icônes
│   ├── lesson/                  # Composants leçon
│   ├── cards/                   # Cartes (Domain, Pack, etc.)
│   ├── admin/                   # Composants admin
│   └── navigation/              # Navigation
└── lib/
    └── theme/
        ├── theme.css            # Tokens Catppuccin (feature 002)
        └── cursors/
            └── cursors.css      # Curseurs CSS (existe)
```

**Structure Decision**: Structure existante conservée. Le composant Icon et les curseurs CSS sont déjà en place depuis l'implémentation initiale. Cette feature formalise l'audit et garantit 100% de conformité sur toutes les pages.

## Complexity Tracking

> Aucune violation de la constitution - section non applicable.

## Implementation Phases

### Phase 0: Audit & Cadrage (déjà complété dans spec)

- ✅ Curseurs Catppuccin définis (default, pointer, text, not-allowed, wait)
- ✅ Composant Icon avec 88 icônes
- ✅ Tokens couleurs Catppuccin disponibles

### Phase 1: Validation des Assets Existants

**Curseurs** (`src/lib/theme/cursors/cursors.css`):
- ✅ 10 types de curseurs définis en SVG data URI
- ✅ Support des 2 thèmes principaux (Mocha dark, Latte light)
- ✅ Fallback automatique vers curseurs natifs
- ⚠️ À vérifier: adaptation aux 4 thèmes (Frappé, Macchiato)

**Icônes** (`src/components/icons/Icon.tsx`):
- ✅ 88 icônes avec paths SVG
- ✅ Support des tailles 16/20/24px via prop `size`
- ✅ Couleurs via tokens Catppuccin
- ✅ Support des états (color prop pour hover/active via CSS parent)
- ⚠️ À vérifier: aria-label sur icônes interactives

### Phase 2: Audit des Usages

Composants à auditer pour conformité icônes:
1. `src/components/ui/` - Button, Badge, Toast, Modal, Tooltip
2. `src/components/cards/` - DomainCard, PackCard, DisciplineCard, ModuleCard
3. `src/components/navigation/` - BottomNav
4. `src/components/admin/` - LessonEditor, QuizQuestionEditor, PublishButton
5. `src/components/lesson/` - QuizSlide, PracticeSlide, CompletionSlide
6. `src/components/progression/` - ModuleStatusBadge, ProgressBar

### Phase 3: Corrections & Harmonisation

- Remplacer icônes inline par composant Icon
- Ajouter aria-label sur icônes de boutons
- Vérifier couleurs sémantiques (red pour delete, green pour success)

### Phase 4: QA Visuelle

- Test sur tous les thèmes (Latte, Frappé, Macchiato, Mocha)
- Vérification curseurs par type d'élément
- Accessibilité lecteur d'écran

## Key Decisions

| Decision | Rationale | Alternatives Rejected |
|----------|-----------|----------------------|
| SVG inline via data URI pour curseurs | Pas de requêtes HTTP, support theme via variables | Fichiers .cur (pas cross-browser), PNG (pas scalable) |
| Composant Icon avec path data | Tree-shaking, pas de sprite, facile à maintenir | Icon fonts (lourd), sprite SVG (complexe) |
| Tailles fixes 16/20/24px | Cohérence visuelle, couvre tous les cas d'usage | Tailles arbitraires (incohérence) |
| Couleurs via CSS custom properties | Adaptation automatique au thème | Couleurs hardcodées (pas de dark mode) |

## Dependencies

- **Feature 002**: Catppuccin Design System (tokens CSS) - ✅ Complété
- Tokens CSS: `--ctp-*`, `--color-*` - ✅ Disponibles
