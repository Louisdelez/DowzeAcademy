# Tasks: Contenu Pédagogique Français L1 9CO

**Feature**: 007-francais-l1-content
**Generated**: 2026-01-26
**Plan**: [plan.md](./plan.md) | **Spec**: [spec.md](./spec.md)

---

## Task Format

```
- [ ] [TaskID] [Priority] [Story] Description — `file/path`
```

- **TaskID**: Unique identifier (e.g., T01, T02)
- **Priority**: P1 (critical), P2 (important), P3 (nice-to-have)
- **Story**: US1-US5 or SETUP/INFRA

---

## Phase 1: Setup & Infrastructure

### Setup Tasks

- [ ] [T01] [P1] [SETUP] Create feature branch `007-francais-l1-content` from main
- [ ] [T02] [P1] [SETUP] Create seed directory structure `prisma/seeds/francais-l1/` — `prisma/seeds/francais-l1/`
- [ ] [T03] [P1] [SETUP] Create utility helpers for module creation — `prisma/seeds/francais-l1/utils.ts`
- [ ] [T04] [P1] [SETUP] Create centralized export file — `prisma/seeds/francais-l1/index.ts`
- [ ] [T05] [P1] [SETUP] Create main seed script for Français 9CO — `prisma/seed-francais-9co.ts`
- [ ] [T06] [P1] [SETUP] Add npm script for seed execution — `package.json`

### Infrastructure Validation

- [ ] [T07] [P1] [INFRA] Verify Pack "Français L1" exists (ID: a3358a9d-3529-4d18-a1a7-8fd03407a600)
- [ ] [T08] [P1] [INFRA] Verify existing Chapter 1 modules structure
- [ ] [T09] [P2] [INFRA] Create validation script for content structure — `prisma/seeds/francais-l1/validate.ts`

---

## Phase 2: Chapter Content Creation (US1 + US2)

### Chapitre 1: Entrer au Cycle d'Orientation (6 modules)

- [ ] [T10] [P1] [US1] Create Chapter 1 content file with 6 modules — `prisma/seeds/francais-l1/chapter-01.ts`
  - Module 1.1: Le rôle du français au Cycle d'orientation
  - Module 1.2: Comprendre les consignes
  - Module 1.3: Prendre des notes efficacement
  - Module 1.4: Participer à l'oral en classe
  - Module 1.5: Organiser son travail personnel
  - Module 1.6: Utiliser les outils numériques pour le français
- [ ] [T11] [P1] [US1] Generate 15-25 slides per module for Chapter 1
- [ ] [T12] [P1] [US2] Create 25 quiz questions per module for Chapter 1 (150 questions total)
- [ ] [T13] [P2] [US3] Write practice exercise instructions for Chapter 1 modules

### Chapitre 2: Lecture - Texte Narratif (9 modules)

- [ ] [T14] [P1] [US1] Create Chapter 2 content file with 9 modules — `prisma/seeds/francais-l1/chapter-02.ts`
  - Module 2.1: Qu'est-ce qu'un texte narratif ?
  - Module 2.2: Le schéma narratif
  - Module 2.3: Les personnages dans un récit
  - Module 2.4: Le narrateur et les points de vue
  - Module 2.5: Le temps dans le récit
  - Module 2.6: Les lieux et l'espace narratif
  - Module 2.7: Le dialogue dans le récit
  - Module 2.8: Les procédés de description
  - Module 2.9: Analyser un texte narratif complet
- [ ] [T15] [P1] [US1] Generate 15-25 slides per module for Chapter 2
- [ ] [T16] [P1] [US2] Create 25 quiz questions per module for Chapter 2 (225 questions total)
- [ ] [T17] [P2] [US3] Write practice exercise instructions for Chapter 2 modules

### Chapitre 3: Lecture - Texte Informatif et Explicatif (8 modules)

- [ ] [T18] [P1] [US1] Create Chapter 3 content file with 8 modules — `prisma/seeds/francais-l1/chapter-03.ts`
  - Module 3.1: Reconnaître un texte informatif
  - Module 3.2: La structure du texte explicatif
  - Module 3.3: Les connecteurs logiques
  - Module 3.4: Identifier les informations essentielles
  - Module 3.5: Lire un article de presse
  - Module 3.6: Lire un texte documentaire
  - Module 3.7: Les supports visuels (tableaux, schémas)
  - Module 3.8: Synthétiser l'information
- [ ] [T19] [P1] [US1] Generate 15-25 slides per module for Chapter 3
- [ ] [T20] [P1] [US2] Create 25 quiz questions per module for Chapter 3 (200 questions total)
- [ ] [T21] [P2] [US3] Write practice exercise instructions for Chapter 3 modules

### Chapitre 4: Lecture - Texte Argumentatif (6 modules)

- [ ] [T22] [P1] [US1] Create Chapter 4 content file with 6 modules — `prisma/seeds/francais-l1/chapter-04.ts`
  - Module 4.1: Introduction à l'argumentation
  - Module 4.2: Thèse, arguments et exemples
  - Module 4.3: Les connecteurs argumentatifs
  - Module 4.4: Identifier le point de vue de l'auteur
  - Module 4.5: Distinguer faits et opinions
  - Module 4.6: Analyser un texte argumentatif simple
- [ ] [T23] [P1] [US1] Generate 15-25 slides per module for Chapter 4
- [ ] [T24] [P1] [US2] Create 25 quiz questions per module for Chapter 4 (150 questions total)
- [ ] [T25] [P2] [US3] Write practice exercise instructions for Chapter 4 modules

### Chapitre 5: Expression Orale (8 modules)

- [ ] [T26] [P1] [US1] Create Chapter 5 content file with 8 modules — `prisma/seeds/francais-l1/chapter-05.ts`
  - Module 5.1: Les bases de la communication orale
  - Module 5.2: La voix et l'articulation
  - Module 5.3: Le langage non-verbal
  - Module 5.4: Préparer un exposé
  - Module 5.5: Structurer son discours
  - Module 5.6: Gérer le stress et le trac
  - Module 5.7: Répondre aux questions
  - Module 5.8: Participer à un débat
- [ ] [T27] [P1] [US1] Generate 15-25 slides per module for Chapter 5
- [ ] [T28] [P1] [US2] Create 25 quiz questions per module for Chapter 5 (200 questions total)
- [ ] [T29] [P2] [US3] Write practice exercise instructions for Chapter 5 modules

### Chapitre 6: Écriture - Texte Narratif (8 modules)

- [ ] [T30] [P1] [US1] Create Chapter 6 content file with 8 modules — `prisma/seeds/francais-l1/chapter-06.ts`
  - Module 6.1: Construire un récit
  - Module 6.2: Écrire le début d'un récit
  - Module 6.3: Développer l'intrigue
  - Module 6.4: Créer des personnages
  - Module 6.5: Écrire des dialogues
  - Module 6.6: Décrire un lieu ou un personnage
  - Module 6.7: Écrire la fin d'un récit
  - Module 6.8: Réviser et améliorer son texte narratif
- [ ] [T31] [P1] [US1] Generate 15-25 slides per module for Chapter 6
- [ ] [T32] [P1] [US2] Create 25 quiz questions per module for Chapter 6 (200 questions total)
- [ ] [T33] [P2] [US3] Write practice exercise instructions for Chapter 6 modules

### Chapitre 7: Écriture - Informer et Expliquer (7 modules)

- [ ] [T34] [P1] [US1] Create Chapter 7 content file with 7 modules — `prisma/seeds/francais-l1/chapter-07.ts`
  - Module 7.1: Écrire pour informer
  - Module 7.2: Structurer un texte explicatif
  - Module 7.3: Rédiger un compte-rendu
  - Module 7.4: Écrire un résumé
  - Module 7.5: Rédiger des consignes
  - Module 7.6: Présenter des informations visuellement
  - Module 7.7: Réviser un texte informatif
- [ ] [T35] [P1] [US1] Generate 15-25 slides per module for Chapter 7
- [ ] [T36] [P1] [US2] Create 25 quiz questions per module for Chapter 7 (175 questions total)
- [ ] [T37] [P2] [US3] Write practice exercise instructions for Chapter 7 modules

### Chapitre 8: Écriture - Exprimer son Opinion (5 modules)

- [ ] [T38] [P1] [US1] Create Chapter 8 content file with 5 modules — `prisma/seeds/francais-l1/chapter-08.ts`
  - Module 8.1: Donner son avis
  - Module 8.2: Justifier son opinion
  - Module 8.3: Utiliser des arguments convaincants
  - Module 8.4: Structurer un texte d'opinion
  - Module 8.5: Réviser un texte argumentatif
- [ ] [T39] [P1] [US1] Generate 15-25 slides per module for Chapter 8
- [ ] [T40] [P1] [US2] Create 25 quiz questions per module for Chapter 8 (125 questions total)
- [ ] [T41] [P2] [US3] Write practice exercise instructions for Chapter 8 modules

### Chapitre 9: Grammaire - Bases de la Phrase (7 modules)

- [ ] [T42] [P1] [US1] Create Chapter 9 content file with 7 modules — `prisma/seeds/francais-l1/chapter-09.ts`
  - Module 9.1: La phrase simple et complexe
  - Module 9.2: Les types de phrases
  - Module 9.3: Les formes de phrases
  - Module 9.4: Le sujet et le verbe
  - Module 9.5: Les compléments essentiels
  - Module 9.6: Les compléments circonstanciels
  - Module 9.7: L'analyse de la phrase
- [ ] [T43] [P1] [US1] Generate 15-25 slides per module for Chapter 9
- [ ] [T44] [P1] [US2] Create 25 quiz questions per module for Chapter 9 (175 questions total)
- [ ] [T45] [P2] [US3] Write practice exercise instructions for Chapter 9 modules

### Chapitre 10: Grammaire - Classes de Mots (8 modules)

- [ ] [T46] [P1] [US1] Create Chapter 10 content file with 8 modules — `prisma/seeds/francais-l1/chapter-10.ts`
  - Module 10.1: Les noms et les déterminants
  - Module 10.2: Les adjectifs
  - Module 10.3: Les pronoms
  - Module 10.4: Les verbes
  - Module 10.5: Les adverbes
  - Module 10.6: Les prépositions
  - Module 10.7: Les conjonctions
  - Module 10.8: Révision des classes de mots
- [ ] [T47] [P1] [US1] Generate 15-25 slides per module for Chapter 10
- [ ] [T48] [P1] [US2] Create 25 quiz questions per module for Chapter 10 (200 questions total)
- [ ] [T49] [P2] [US3] Write practice exercise instructions for Chapter 10 modules

### Chapitre 11: Conjugaison (7 modules)

- [ ] [T50] [P1] [US1] Create Chapter 11 content file with 7 modules — `prisma/seeds/francais-l1/chapter-11.ts`
  - Module 11.1: Le présent de l'indicatif
  - Module 11.2: L'imparfait et le passé simple
  - Module 11.3: Le passé composé
  - Module 11.4: Le futur simple et le conditionnel
  - Module 11.5: L'impératif
  - Module 11.6: Le subjonctif présent
  - Module 11.7: Révision générale de la conjugaison
- [ ] [T51] [P1] [US1] Generate 15-25 slides per module for Chapter 11
- [ ] [T52] [P1] [US2] Create 25 quiz questions per module for Chapter 11 (175 questions total)
- [ ] [T53] [P2] [US3] Write practice exercise instructions for Chapter 11 modules

### Chapitre 12: Orthographe Grammaticale (6 modules)

- [ ] [T54] [P1] [US1] Create Chapter 12 content file with 6 modules — `prisma/seeds/francais-l1/chapter-12.ts`
  - Module 12.1: Les accords dans le groupe nominal
  - Module 12.2: L'accord sujet-verbe
  - Module 12.3: L'accord du participe passé (être)
  - Module 12.4: L'accord du participe passé (avoir)
  - Module 12.5: Les homophones grammaticaux
  - Module 12.6: Révision de l'orthographe grammaticale
- [ ] [T55] [P1] [US1] Generate 15-25 slides per module for Chapter 12
- [ ] [T56] [P1] [US2] Create 25 quiz questions per module for Chapter 12 (150 questions total)
- [ ] [T57] [P2] [US3] Write practice exercise instructions for Chapter 12 modules

### Chapitre 13: Orthographe Lexicale et Vocabulaire (6 modules)

- [ ] [T58] [P1] [US1] Create Chapter 13 content file with 6 modules — `prisma/seeds/francais-l1/chapter-13.ts`
  - Module 13.1: Les familles de mots
  - Module 13.2: Les préfixes et suffixes
  - Module 13.3: Les synonymes et antonymes
  - Module 13.4: Le sens propre et le sens figuré
  - Module 13.5: Les difficultés orthographiques courantes
  - Module 13.6: Utiliser le dictionnaire
- [ ] [T59] [P1] [US1] Generate 15-25 slides per module for Chapter 13
- [ ] [T60] [P1] [US2] Create 25 quiz questions per module for Chapter 13 (150 questions total)
- [ ] [T61] [P2] [US3] Write practice exercise instructions for Chapter 13 modules

### Chapitre 14: Méthodes de Travail (6 modules)

- [ ] [T62] [P1] [US1] Create Chapter 14 content file with 6 modules — `prisma/seeds/francais-l1/chapter-14.ts`
  - Module 14.1: Organiser son espace de travail
  - Module 14.2: Planifier ses révisions
  - Module 14.3: Prendre des notes efficaces
  - Module 14.4: Mémoriser le vocabulaire
  - Module 14.5: Se préparer à un contrôle
  - Module 14.6: Gérer son temps d'écriture
- [ ] [T63] [P1] [US1] Generate 15-25 slides per module for Chapter 14
- [ ] [T64] [P1] [US2] Create 25 quiz questions per module for Chapter 14 (150 questions total)
- [ ] [T65] [P2] [US3] Write practice exercise instructions for Chapter 14 modules

### Chapitre 15: Culture Littéraire (5 modules)

- [ ] [T66] [P1] [US1] Create Chapter 15 content file with 5 modules — `prisma/seeds/francais-l1/chapter-15.ts`
  - Module 15.1: Découvrir les genres littéraires
  - Module 15.2: La poésie
  - Module 15.3: Le conte et la fable
  - Module 15.4: Le théâtre
  - Module 15.5: Exprimer ses impressions de lecture
- [ ] [T67] [P1] [US1] Generate 15-25 slides per module for Chapter 15
- [ ] [T68] [P1] [US2] Create 25 quiz questions per module for Chapter 15 (125 questions total)
- [ ] [T69] [P2] [US3] Write practice exercise instructions for Chapter 15 modules

### Chapitre 16: Projet et Synthèse (5 modules)

- [ ] [T70] [P1] [US1] Create Chapter 16 content file with 5 modules — `prisma/seeds/francais-l1/chapter-16.ts`
  - Module 16.1: Bilan des compétences de lecture
  - Module 16.2: Bilan des compétences d'écriture
  - Module 16.3: Bilan des compétences orales
  - Module 16.4: Bilan des compétences linguistiques
  - Module 16.5: Projet final intégrateur
- [ ] [T71] [P1] [US1] Generate 15-25 slides per module for Chapter 16
- [ ] [T72] [P1] [US2] Create 25 quiz questions per module for Chapter 16 (125 questions total)
- [ ] [T73] [P2] [US3] Write practice exercise instructions for Chapter 16 modules

---

## Phase 3: Seed Execution & Validation (US4 + US5)

### Seed Execution

- [ ] [T74] [P1] [US4] Update main seed script to import all chapters — `prisma/seed-francais-9co.ts`
- [ ] [T75] [P1] [US4] Execute seed script and verify database population
- [ ] [T76] [P1] [US4] Verify all 16 disciplines are created with correct order

### Content Validation

- [ ] [T77] [P1] [US1] Validate slide count (15-25) for all 107 modules
- [ ] [T78] [P1] [US2] Validate question count (25) for all 107 modules
- [ ] [T79] [P1] [US2] Validate option count (4) for all 2675 questions
- [ ] [T80] [P2] [US2] Verify quiz randomization works correctly for new content

### Application Testing

- [ ] [T81] [P1] [US4] Test chapter navigation in application UI
- [ ] [T82] [P1] [US1] Test slide rendering for each chapter (spot check)
- [ ] [T83] [P1] [US2] Test quiz functionality for new modules
- [ ] [T84] [P2] [US3] Test practice exercises display correctly
- [ ] [T85] [P2] [US5] Test module unlocking progression

---

## Phase 4: Polish & Documentation

- [ ] [T86] [P3] [INFRA] Add content statistics to seed output (total slides, questions, etc.)
- [ ] [T87] [P3] [INFRA] Create validation report for all content
- [ ] [T88] [P3] [INFRA] Update quickstart.md with final instructions
- [ ] [T89] [P3] [SETUP] Merge feature branch to main

---

## Dependency Graph

```
T01 → T02 → T03 → T04 → T05 → T06
                              ↓
                         T07, T08
                              ↓
T10-T13 (Ch.1) ─────────┬─────┤
T14-T17 (Ch.2) ─────────┤     │
T18-T21 (Ch.3) ─────────┤     │
T22-T25 (Ch.4) ─────────┤     │
T26-T29 (Ch.5) ─────────┤     │
T30-T33 (Ch.6) ─────────┤     │
T34-T37 (Ch.7) ─────────┤     │ (Can be parallelized)
T38-T41 (Ch.8) ─────────┤     │
T42-T45 (Ch.9) ─────────┤     │
T46-T49 (Ch.10) ────────┤     │
T50-T53 (Ch.11) ────────┤     │
T54-T57 (Ch.12) ────────┤     │
T58-T61 (Ch.13) ────────┤     │
T62-T65 (Ch.14) ────────┤     │
T66-T69 (Ch.15) ────────┤     │
T70-T73 (Ch.16) ────────┘     │
                              ↓
                    T74 → T75 → T76
                              ↓
                    T77 → T78 → T79 → T80
                              ↓
                    T81 → T82 → T83 → T84 → T85
                              ↓
                    T86 → T87 → T88 → T89
```

---

## Parallel Execution Examples

### Content Creation (Chapters can be created in parallel)

```bash
# All chapter files can be created simultaneously
# Example: Create chapters 1-4 in parallel
npx tsx prisma/seeds/francais-l1/chapter-01.ts &
npx tsx prisma/seeds/francais-l1/chapter-02.ts &
npx tsx prisma/seeds/francais-l1/chapter-03.ts &
npx tsx prisma/seeds/francais-l1/chapter-04.ts &
wait
```

### Validation (Independent checks can run in parallel)

```bash
# Validate structure and content simultaneously
npm run validate:slides &
npm run validate:questions &
wait
```

---

## Summary Statistics

| Category | Count |
|----------|-------|
| Total Tasks | 89 |
| P1 (Critical) | 68 |
| P2 (Important) | 17 |
| P3 (Nice-to-have) | 4 |
| Setup Tasks | 9 |
| Content Tasks | 64 (4 per chapter × 16 chapters) |
| Validation Tasks | 12 |
| Polish Tasks | 4 |

### Content Totals

| Entity | Count |
|--------|-------|
| Chapters (Disciplines) | 16 |
| Modules | 107 |
| Slides (estimated) | 1,605 - 2,675 |
| Quiz Questions | 2,675 |
| Quiz Options | 10,700 |
| Practice Exercises | 107 |
