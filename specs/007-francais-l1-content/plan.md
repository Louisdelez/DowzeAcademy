# Implementation Plan: Contenu Pédagogique Français L1 9CO

**Branch**: `007-francais-l1-content` | **Date**: 2026-01-26 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/007-francais-l1-content/spec.md`

## Summary

Création du contenu pédagogique complet pour Français L1 9CO: 16 chapitres (disciplines), 107 modules avec 15-25 slides de théorie, 25 questions quiz (15 affichées avec rotation aléatoire), et un exercice pratique par module. Le contenu sera généré via un script de seed Prisma utilisant l'infrastructure existante (Features 004-006).

## Technical Context

**Language/Version**: TypeScript 5.x (Next.js 16.1.4, Node.js 22)
**Primary Dependencies**: Prisma 7.3, pg adapter (existants)
**Storage**: PostgreSQL (existant)
**Testing**: Vérification manuelle du contenu généré
**Target Platform**: Web (Next.js, React 19)
**Project Type**: Web application (monorepo existant)
**Performance Goals**: N/A (seed one-time execution)
**Constraints**: Contenu conforme au curriculum 9CO suisse romand
**Scale/Scope**: 16 disciplines, 107 modules, ~2675 questions (107 × 25)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principe | Statut | Conformité |
|----------|--------|------------|
| I. Création intégrale | ✅ PASS | Contenu créé en interne via seed, aucun CMS externe |
| II. Structure avant contenu | ✅ PASS | Utilise l'architecture existante sans modification |
| III. Modularité absolue | ✅ PASS | Chaque module est indépendant et réutilisable |
| IV. Pédagogie unifiée | ✅ PASS | Triptyque théorie → quiz → pratique respecté |
| V. Cross-plateforme natif | ✅ PASS | Contenu texte/Markdown, mobile-first ready |
| VI. Modernité et clarté | ✅ PASS | Slides structurées, navigation simple |
| VII. Hiérarchie des concepts | ✅ PASS | Domain > Pack > Discipline > Module > Lesson |
| VIII. Polymorphisme pratique | ✅ PASS | Exercices TIMED adaptés au contexte scolaire |
| IX. Règles de progression | ✅ PASS | Déblocage séquentiel, feedback immédiat |
| X. Scalabilité | ✅ PASS | Format reproductible pour autres matières/niveaux |
| XI. Clause de cohérence | ✅ PASS | Renforce le moteur sans complexité ajoutée |

**Résultat**: Tous les principes sont respectés. Aucune violation.

## Project Structure

### Documentation (this feature)

```text
specs/007-francais-l1-content/
├── plan.md              # This file
├── research.md          # Phase 0: Stratégie de génération de contenu
├── data-model.md        # Phase 1: Structure des données de seed
├── quickstart.md        # Phase 1: Guide de démarrage rapide
├── contracts/           # Phase 1: Format des fichiers de contenu
│   └── seed-module-format.ts
└── tasks.md             # Phase 2: Tâches d'implémentation
```

### Source Code (repository root)

```text
prisma/
├── seed-francais-9co.ts          # Script de seed principal (à modifier/remplacer)
└── seeds/
    └── francais-l1/              # Contenu par chapitre
        ├── chapter-01.ts         # Chapitre 1 (6 modules)
        ├── chapter-02.ts         # Chapitre 2 (9 modules)
        ├── chapter-03.ts         # Chapitre 3 (8 modules)
        ├── chapter-04.ts         # Chapitre 4 (6 modules)
        ├── chapter-05.ts         # Chapitre 5 (8 modules)
        ├── chapter-06.ts         # Chapitre 6 (8 modules)
        ├── chapter-07.ts         # Chapitre 7 (7 modules)
        ├── chapter-08.ts         # Chapitre 8 (5 modules)
        ├── chapter-09.ts         # Chapitre 9 (7 modules)
        ├── chapter-10.ts         # Chapitre 10 (8 modules)
        ├── chapter-11.ts         # Chapitre 11 (7 modules)
        ├── chapter-12.ts         # Chapitre 12 (6 modules)
        ├── chapter-13.ts         # Chapitre 13 (6 modules)
        ├── chapter-14.ts         # Chapitre 14 (6 modules)
        ├── chapter-15.ts         # Chapitre 15 (5 modules)
        ├── chapter-16.ts         # Chapitre 16 (5 modules)
        ├── index.ts              # Export centralisé
        └── utils.ts              # Helpers de génération
```

**Structure Decision**: Contenu organisé par chapitre dans des fichiers TypeScript séparés pour maintenir la lisibilité et permettre la génération/modification incrémentale.

## Complexity Tracking

> Aucune violation de la Constitution. Pas de justification requise.

---

## Phase 0: Research Completed

Voir [research.md](./research.md) pour les détails sur:
- Stratégie de génération de contenu (AI-assisted)
- Format des slides Markdown
- Structure des questions de quiz
- Types d'exercices pratiques par domaine

## Phase 1: Design Completed

Voir:
- [data-model.md](./data-model.md) - Structure des entités de contenu
- [contracts/seed-module-format.ts](./contracts/seed-module-format.ts) - Format TypeScript pour les modules
- [quickstart.md](./quickstart.md) - Guide de démarrage
