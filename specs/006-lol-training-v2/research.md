# Research: League of Legends Training V2 (Full Rebuild)

**Feature**: 006-lol-training-v2
**Date**: 2026-01-23
**Status**: Complete

## Research Questions

### RQ-001: Compatibilité avec Feature 004 (Slides Pedagogy V2)

**Question**: Comment la théorie doit-elle être formatée pour être compatible avec le parser de slides existant ?

**Finding**: Le parser `parseTheorySlides` dans `src/lib/utils/theory-parser.ts` attend un format Markdown avec des headings `##` pour délimiter les slides. Chaque heading `##` devient une slide distincte.

**Format requis**:
```markdown
## Titre de la slide 1

Contenu de la slide 1...

## Titre de la slide 2

Contenu de la slide 2...
```

**Types de slides supportés** (extraits automatiquement du titre):
- `concept` - Mots-clés: "concept", "définition", "clé"
- `why` - Mots-clés: "pourquoi", "important"
- `example` - Mots-clés: "exemple", "cas"
- `mistakes` - Mots-clés: "erreur", "piège", "éviter"
- `recap` - Mots-clés: "récap", "résumé", "synthèse"

**Decision**: Utiliser le format Markdown existant avec 5+ headings `##` par module.

---

### RQ-002: Compatibilité avec Feature 005 (Quiz Randomization V1)

**Question**: Comment configurer les quiz pour utiliser le pool de 10 questions avec 5 affichées ?

**Finding**: La Feature 005 ajoute les champs suivants au modèle `Lesson`:
- `questionsToShow: Int?` - Nombre de questions à afficher (défaut: toutes)
- `shuffleQuestions: Boolean @default(true)` - Randomiser l'ordre des questions
- `shuffleAnswers: Boolean @default(true)` - Randomiser l'ordre des réponses

Le système crée automatiquement des `QuizOption` records lors du seed si on utilise la structure correcte.

**Configuration requise pour chaque module**:
```typescript
{
  questionsToShow: 5,
  shuffleQuestions: true,
  shuffleAnswers: true,
}
```

**Decision**: Configurer chaque leçon avec ces 3 paramètres.

---

### RQ-003: Format des questions QCM

**Question**: Quel format utiliser pour les questions à choix multiples ?

**Finding**: Le seed existant utilise ce format:
```typescript
{
  text: "Question ?",
  type: QuestionType.SINGLE_CHOICE, // ou MULTIPLE_CHOICE
  options: [
    { id: 'a', text: 'Option A' },
    { id: 'b', text: 'Option B' },
    { id: 'c', text: 'Option C' },
    { id: 'd', text: 'Option D' },
  ],
  correctAnswer: 'b', // ou ['a', 'c'] pour MULTIPLE_CHOICE
  feedback: "Explication...",
  linkedTheorySection: "Titre de la slide liée",
}
```

**Contrainte FR-009**: Exactement 4 options (A, B, C, D) par question.

**Decision**: Utiliser ce format exact avec 4 options par question.

---

### RQ-004: Format de la pratique

**Question**: Comment formater les instructions de pratique ?

**Finding**: Le parser `parsePracticeSlides` attend un format Markdown avec des headings `##`. Types de slides pratiques:
- `brief` - Objectif de l'exercice
- `setup` - Préparation
- `step` - Étape d'action
- `evaluation` - Auto-évaluation
- `next` - Prochaine action

**Format recommandé**:
```markdown
## Objectif

Description de ce que l'apprenant doit accomplir.

## Préparation

Ce qu'il faut faire avant de commencer.

## Étapes

1. Première étape
2. Deuxième étape
3. Troisième étape

## Critère de réussite

Comment vérifier que l'exercice est réussi.
```

**Decision**: Utiliser ce format avec au minimum Objectif, Étapes, et Critère de réussite.

---

### RQ-005: Organisation du seed

**Question**: Comment organiser le fichier seed pour 26 modules sans le rendre ingérable ?

**Finding**: Le seed actuel crée déjà 5 modules dans un seul fichier. Pour 26 modules, le fichier deviendrait très long (~5000+ lignes).

**Options évaluées**:
1. Un seul fichier seed.ts (simple mais long)
2. Fichiers séparés par module (26 fichiers)
3. Fichiers par groupe de chapitres (5-6 fichiers thématiques)

**Decision**: Option 3 - Créer des fichiers séparés par groupe thématique:
- `seed-lol-fundamentals.ts` (Chapitres 1-7: Bases du jeu)
- `seed-lol-laning.ts` (Chapitres 8-9: Phase de laning)
- `seed-lol-roles.ts` (Chapitres 10-14: Maîtrise des rôles)
- `seed-lol-macro.ts` (Chapitres 15-19: Macro et objectifs)
- `seed-lol-team.ts` (Chapitres 20-24: Équipe et mental)
- `seed-lol-progression.ts` (Chapitres 25-26: Classé et ressources)

Le fichier `seed.ts` principal importera ces fichiers.

---

### RQ-006: Suppression de l'ancien contenu

**Question**: Comment supprimer l'ancien contenu "Jungle Fundamentals" ?

**Finding**: L'ancien contenu est créé dans `prisma/seed.ts`. Il vérifie si le domaine "Gaming" existe déjà avant de créer du contenu.

**Approche**:
1. Modifier le seed pour NE PAS créer l'ancien contenu
2. Exécuter une migration pour nettoyer la DB si nécessaire
3. Recréer avec le nouveau contenu

**Decision**: Modifier le seed existant et réinitialiser la DB avec `prisma db push --force-reset` suivi de `npx tsx prisma/seed.ts`.

---

## Summary

| Question | Decision |
|----------|----------|
| RQ-001 | Format Markdown avec `##` pour les slides |
| RQ-002 | questionsToShow=5, shuffleQuestions=true, shuffleAnswers=true |
| RQ-003 | 4 options (a,b,c,d) par question, SINGLE_CHOICE ou MULTIPLE_CHOICE |
| RQ-004 | Format Markdown avec Objectif, Étapes, Critère de réussite |
| RQ-005 | Fichiers seed séparés par groupe thématique (6 fichiers) |
| RQ-006 | Modifier le seed et réinitialiser la DB |

## Unresolved Items

Aucun item non résolu. Toutes les questions techniques ont une réponse.
