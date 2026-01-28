# Implementation Plan: League of Legends Training V2 (Full Rebuild)

**Branch**: `006-lol-training-v2` | **Date**: 2026-01-23 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/006-lol-training-v2/spec.md`

## Summary

Reconstruction complète de la formation League of Legends avec:
- **1 Pack**: "League of Legends - Formation Complète"
- **26 Disciplines** (= 26 Chapitres du PDF)
- **~298 Modules** (= chaque bullet point du PDF)

Chaque Module contient:
- Théorie: minimum 5 slides (~1490 slides au total)
- Quiz: pool de 10 questions par module, 5 affichées (~2980 questions au total)
- Pratique: 1 exercice in-game par module (~298 exercices)

## Technical Context

**Language/Version**: TypeScript 5.x (Next.js 16.x, React 19.x)
**Primary Dependencies**: Prisma 7.x, NextAuth 4.24, TailwindCSS 4.x
**Storage**: PostgreSQL via Prisma
**Testing**: Vitest (unit), Playwright (e2e)
**Target Platform**: Web (desktop + mobile responsive)
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Standard web app (<3s page load)
**Constraints**: Compatible Features 004 (Slides) et 005 (Quiz Randomization)
**Scale/Scope**: 26 disciplines, ~298 modules, ~1490 slides, ~2980 questions QCM

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principe | Statut | Justification |
|----------|--------|---------------|
| I. Création intégrale (A à Z) | PASS | Contenu créé nativement, aucun CMS externe |
| II. Structure avant contenu | PASS | Utilise l'infrastructure existante (Features 004/005), seul le contenu change |
| III. Modularité absolue | PASS | ~298 modules indépendants, réutilisables, versionnables |
| IV. Pédagogie unifiée | PASS | Triptyque Théorie -> Quiz -> Pratique respecté pour chaque module |
| V. Cross-plateforme natif | PASS | Interface responsive existante (mobile-first) |
| VI. Modernité et clarté | PASS | Slides pédagogiques, navigation simple |
| VII. Hiérarchie des concepts | PASS | Domain > Pack > Discipline > Module > Leçon respectée |
| VIII. Polymorphisme pratique | PASS | Type IN_GAME pour exercices LoL |
| IX. Règles de progression | PASS | Modules séquentiels, feedback immédiat |
| X. Scalabilité | PASS | Aucune modification architecturale requise |
| XI. Clause de cohérence | PASS | Renforce le moteur avec du contenu de qualité |

**Résultat**: Tous les principes sont respectés. Aucune violation.

## Project Structure

### Documentation (this feature)

```text
specs/006-lol-training-v2/
├── plan.md              # This file
├── spec.md              # Feature specification
├── Table-des-matieres.pdf # Source de vérité (26 chapitres, ~298 bullet points)
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
# Next.js App Router structure (existing)
src/
├── app/
│   ├── (learner)/       # Learner-facing pages
│   ├── admin/           # Admin panel
│   └── api/             # API routes
├── components/
│   ├── lesson/          # Lesson components (slides, quiz, practice)
│   └── ui/              # UI primitives
├── lib/
│   ├── services/        # Business logic
│   └── utils/           # Utilities
└── types/               # TypeScript types

prisma/
├── schema.prisma        # Database schema
├── seed.ts              # Main seed file
└── seeds/
    └── lol/             # LoL training seed data (NEW)
        ├── index.ts
        ├── utils.ts
        ├── discipline-01-fundamentals/
        │   ├── index.ts
        │   ├── module-01-what-is-lol.ts
        │   ├── module-02-victory-condition.ts
        │   └── ... (10 modules)
        ├── discipline-02-map/
        │   ├── index.ts
        │   └── ... (9 modules)
        └── ... (26 disciplines total)
```

**Structure Decision**: Chaque discipline a son propre dossier contenant ses modules. Cela permet une organisation claire et une parallélisation de l'implémentation.

## Implementation Approach

### Nature de la Feature

Cette feature est une **feature de contenu massive**, pas une feature technique. Elle consiste à:

1. **Organiser** le contenu en 26 disciplines (dossiers)
2. **Créer** ~298 modules avec le contenu complet basé sur chaque bullet point du PDF
3. **Configurer** chaque module avec les bons paramètres (questionsToShow=5, shuffleQuestions=true, etc.)

### Structure d'un Module

```typescript
// Exemple: discipline-01-fundamentals/module-01-what-is-lol.ts
export const module01WhatIsLoL = {
  name: "Qu'est-ce que League of Legends ?",
  slug: "what-is-lol",
  description: "Principe MOBA en 5v5, objectif Nexus",
  order: 1,

  theoryContent: `
## Qu'est-ce que League of Legends ?

League of Legends (LoL) est un jeu vidéo compétitif de type MOBA (Multiplayer Online Battle Arena).

## Le principe du 5v5

Deux équipes de 5 joueurs s'affrontent sur une carte appelée la Faille de l'Invocateur.

## L'objectif : le Nexus

Le but ultime est de détruire le Nexus ennemi, le coeur de la base adverse.

## Comment se déroule une partie ?

Chaque joueur contrôle un champion unique avec des capacités spéciales.

## Récapitulatif

- MOBA = arène de combat multijoueur en ligne
- 5 joueurs par équipe
- Objectif = détruire le Nexus ennemi
  `,

  questions: [
    {
      text: "Quel est le type de jeu de League of Legends ?",
      options: [
        { id: 'a', text: 'FPS (First Person Shooter)' },
        { id: 'b', text: 'MOBA (Multiplayer Online Battle Arena)' },
        { id: 'c', text: 'RPG (Role Playing Game)' },
        { id: 'd', text: 'RTS (Real Time Strategy)' },
      ],
      correctAnswer: 'b',
    },
    // ... 9 autres questions
  ],

  practiceInstructions: `
## Objectif

Lancer votre première partie d'entraînement pour découvrir l'interface du jeu.

## Étapes

1. Ouvrez League of Legends et connectez-vous
2. Allez dans "Entraînement" > "Tutoriel"
3. Complétez le tutoriel de base

## Critère de réussite

Vous avez terminé le tutoriel d'introduction et compris que l'objectif est de détruire le Nexus.
  `,

  // Configuration quiz (Feature 005)
  questionsToShow: 5,
  shuffleQuestions: true,
  shuffleAnswers: true,
  practiceType: 'IN_GAME',
}
```

### Phases d'Implémentation

1. **Phase 1 - Setup**: Créer la structure des dossiers et fichiers utilitaires
2. **Phase 2 - Disciplines 1-7 (Fondamentaux)**: 67 modules - bases obligatoires
3. **Phase 3 - Disciplines 8-14 (Laning & Rôles)**: 104 modules - gameplay par rôle
4. **Phase 4 - Disciplines 15-21 (Macro & Équipe)**: 83 modules - stratégie avancée
5. **Phase 5 - Disciplines 22-26 (Progression)**: 53 modules - mental et compétition
6. **Phase 6 - Intégration**: Seed principal et validation

## Répartition des Disciplines par Phase

### Phase 2: Fondamentaux (67 modules)

| Discipline | Titre | Modules |
|------------|-------|---------|
| 1 | Introduction et fondamentaux du jeu | 10 |
| 2 | La carte de la Faille de l'invocateur | 9 |
| 3 | Présentation des cinq rôles | 5 |
| 4 | Les champions et leurs capacités | 12 |
| 5 | Les sorts d'invocateur | 5 |
| 6 | Les runes reforgées | 7 |
| 7 | Les objets et l'équipement | 19 |
| **Total** | | **67** |

### Phase 3: Laning & Rôles (104 modules)

| Discipline | Titre | Modules |
|------------|-------|---------|
| 8 | Phase de laning | 17 |
| 9 | Compétences individuelles et micro | 10 |
| 10 | Maîtrise de la Top lane | 14 |
| 11 | Maîtrise de la Jungle | 17 |
| 12 | Maîtrise de la Mid lane | 15 |
| 13 | Maîtrise de la Bot lane - ADC | 16 |
| 14 | Maîtrise du Support | 15 |
| **Total** | | **104** |

### Phase 4: Macro & Équipe (83 modules)

| Discipline | Titre | Modules |
|------------|-------|---------|
| 15 | Mid game et macro-stratégie | 15 |
| 16 | Late game et clôture | 10 |
| 17 | Teamfights et escarmouches | 12 |
| 18 | Vision de jeu et contrôle de la map | 12 |
| 19 | Objectifs neutres majeurs | 11 |
| 20 | Stratégie d'équipe et draft | 14 |
| 21 | Communication et travail d'équipe | 10 |
| **Total** | | **84** |

### Phase 5: Progression (53 modules)

| Discipline | Titre | Modules |
|------------|-------|---------|
| 22 | Mental du joueur | 11 |
| 23 | Analyse personnelle et progression | 11 |
| 24 | Coaching et entraînement | 9 |
| 25 | Progression en classé | 11 |
| 26 | Outils externes et méta | 11 |
| **Total** | | **53** |

## Dependencies

| Feature | Statut | Utilisation |
|---------|--------|-------------|
| Feature 004 - Slides Pedagogy V2 | Implémentée | Parser de théorie, composants de slides |
| Feature 005 - Quiz Randomization V1 | Implémentée | Pool de questions, randomisation, QuizOption |

## Risks & Mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Volume de contenu (~2980 questions) | Élevé | Créer le contenu discipline par discipline, valider au fur et à mesure |
| Cohérence du contenu | Moyen | Utiliser le PDF comme référence stricte, chaque module = 1 bullet point exact |
| Erreurs dans les réponses correctes | Élevé | Revue systématique de chaque question avant commit |
| Temps de développement | Élevé | Paralléliser: plusieurs développeurs peuvent travailler sur différentes disciplines |

## Statistiques Totales

| Élément | Quantité |
|---------|----------|
| Disciplines | 26 |
| Modules | ~298 |
| Slides de théorie | ~1490 (5 par module) |
| Questions QCM | ~2980 (10 par module) |
| Options de réponse | ~11920 (4 par question) |
| Exercices pratiques | ~298 |
