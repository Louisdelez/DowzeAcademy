# Implementation Plan: Catppuccin Design System

**Branch**: `002-catppuccin-design-system` | **Date**: 2026-01-22 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-catppuccin-design-system/spec.md`

## Summary

Refonte UI/UX complète de l'application Dowze Academy basée sur le design system Catppuccin. L'implémentation étend l'infrastructure thème existante pour ajouter la persistance en base de données, un sélecteur de thème dans le profil, et migre tous les composants vers l'utilisation exclusive des tokens CSS Catppuccin.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Next.js 16.x, React 19.x, Tailwind CSS 4.x, Prisma 7.x
**Storage**: PostgreSQL (via Prisma)
**Testing**: Playwright (E2E)
**Target Platform**: Web (navigateurs desktop et mobile)
**Project Type**: Web application (Next.js monorepo)
**Performance Goals**: Changement de thème < 100ms, aucun flash au chargement
**Constraints**: Mobile-first, WCAG AA (contraste 4.5:1)
**Scale/Scope**: ~40 composants à migrer, 4 thèmes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principe | Statut | Notes |
|----------|--------|-------|
| I. Création intégrale | ✅ Pass | Design system interne, aucune dépendance externe |
| II. Structure avant contenu | ✅ Pass | Ne modifie pas l'architecture pédagogique |
| III. Modularité absolue | ✅ Pass | Composants UI réutilisables et remplaçables |
| IV. Pédagogie unifiée | ✅ Pass | N/A - feature UI uniquement |
| V. Cross-plateforme natif | ✅ Pass | Mobile-first respecté |
| VI. Modernité et clarté | ✅ Pass | Interface visuelle et engageante |
| VII. Hiérarchie des concepts | ✅ Pass | Aucun nouveau concept structurant |
| VIII. Polymorphisme pratique | ✅ Pass | N/A - feature UI uniquement |
| IX. Règles de progression | ✅ Pass | N/A - feature UI uniquement |
| X. Scalabilité | ✅ Pass | Extensible à de nouveaux thèmes/tokens |
| XI. Clause de cohérence | ✅ Pass | Renforce le moteur sans complexité inutile |

**Verdict**: Aucune violation. Feature alignée avec la constitution.

## Project Structure

### Documentation (this feature)

```text
specs/002-catppuccin-design-system/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/
│   └── theme-api.md     # API contract
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx                    # Anti-flash script injection
│   ├── (learner)/
│   │   └── profile/                  # Theme selector UI
│   └── api/
│       └── user/
│           └── preferences/
│               └── route.ts          # Theme API endpoint
├── components/
│   ├── ui/                           # Design system primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx                 # NEW
│   │   ├── Toast.tsx                 # NEW
│   │   ├── Tooltip.tsx               # NEW
│   │   └── ThemeSelector.tsx         # NEW
│   ├── cards/                        # Entity cards (migrated)
│   ├── lesson/                       # Lesson components (migrated)
│   ├── progression/                  # Progress UI (migrated)
│   └── admin/                        # Admin components (migrated)
├── lib/
│   └── theme/
│       ├── catppuccin.ts             # Theme definitions (existing)
│       ├── ThemeProvider.tsx         # Extended with DB sync
│       ├── useTheme.ts               # NEW - Hook with debounce
│       └── theme.css                 # NEW - CSS variables
└── styles/
    └── globals.css                   # Import theme.css

prisma/
└── schema.prisma                     # User.themePreference field
```

**Structure Decision**: Web application avec Next.js App Router. Extension de la structure existante sans changement architectural.

## Complexity Tracking

> Aucune violation de constitution à justifier.

## Phases d'Implémentation

### Phase 0 — Préparation & Audit

**Objectifs**:
- Auditer les couleurs hardcodées existantes
- Finaliser la convention des tokens CSS
- Créer le backlog de migration par zone

**Livrables**:
- Liste des fichiers avec couleurs hardcodées
- Mapping tokens → couleurs Catppuccin finalisé

### Phase 1 — Tokens & Theming Engine

**Objectifs**:
- Créer `src/lib/theme/theme.css` avec les 4 thèmes
- Étendre `ThemeProvider` avec sync DB + debounce
- Ajouter script anti-flash dans `layout.tsx`
- Migration Prisma: `User.themePreference`

**Livrables**:
- CSS variables pour les 4 thèmes
- API endpoint `/api/user/preferences`
- ThemeProvider avec persistance DB

### Phase 2 — Intégration Tailwind

**Objectifs**:
- Configurer Tailwind pour utiliser les tokens CSS
- Créer classes utilitaires role-based si nécessaire

**Livrables**:
- Tailwind config aligné avec tokens
- Documentation interne "no hardcoded colors"

### Phase 3 — Design System Primitives

**Objectifs**:
- Migrer tous les composants UI vers tokens
- Créer Modal, Toast, Tooltip manquants
- Uniformiser les états (hover, focus, disabled, error)

**Livrables**:
- Composants UI refondus
- Aucune couleur hardcodée dans `/components/ui/`

### Phase 4 — Migration Learner UI

**Objectifs**:
- Migrer toutes les pages learner
- Harmoniser progression, badges, barres
- Migrer empty/error/loading states

**Livrables**:
- Learner UI entièrement sur tokens

### Phase 5 — Migration Admin UI

**Objectifs**:
- Migrer layout admin (sidebar, header)
- Migrer tables CRUD et formulaires
- Migrer lesson editor

**Livrables**:
- Admin UI entièrement sur tokens

### Phase 6 — Sélecteur de Thème

**Objectifs**:
- Créer `ThemeSelector` component
- Intégrer dans page profil
- Tester persistance (refresh, logout/login)

**Livrables**:
- UI theme picker fonctionnel
- Persistance validée

### Phase 7 — QA & Accessibilité

**Objectifs**:
- Tester les 4 thèmes sur pages clés
- Valider responsive mobile
- Valider contraste WCAG AA
- Audit final couleurs hardcodées

**Livrables**:
- Checklist QA validée
- Zero hardcoded colors

## Definition of Done

- [ ] 4 thèmes Catppuccin disponibles et sélectionnables dans Profil
- [ ] Thème persistant (DB + localStorage fallback)
- [ ] Aucun flash de thème au chargement
- [ ] Learner + Admin entièrement sur tokens Catppuccin
- [ ] Composants UI standardisés (Button, Card, Input, Modal, Toast, Tooltip)
- [ ] Contraste WCAG AA sur tous les thèmes
- [ ] Aucune couleur hardcodée dans les composants
- [ ] Tests E2E passent sur les 4 thèmes
- [ ] Aucune régression fonctionnelle

## Références

- [Spec](./spec.md)
- [Research](./research.md)
- [Data Model](./data-model.md)
- [API Contract](./contracts/theme-api.md)
- [Quickstart](./quickstart.md)
- [Catppuccin Official](https://github.com/catppuccin/catppuccin)
