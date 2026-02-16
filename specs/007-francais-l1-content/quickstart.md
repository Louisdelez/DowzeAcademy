# Quickstart: Contenu Pédagogique Français L1 9CO

**Feature**: 007-francais-l1-content
**Date**: 2026-01-26

## Prérequis

- Node.js 22+
- PostgreSQL avec la base de données DowzeAcademy configurée
- Variables d'environnement `.env` configurées

## Structure des Fichiers

```
prisma/
├── seed-francais-9co.ts          # Script principal
└── seeds/
    └── francais-l1/
        ├── index.ts              # Export de tous les chapitres
        ├── utils.ts              # Helpers de création
        ├── chapter-01.ts         # Chapitre 1: Entrer au CO (6 modules)
        ├── chapter-02.ts         # Chapitre 2: Lecture narratif (9 modules)
        └── ...                   # Chapitres 3-16
```

## Création d'un Nouveau Chapitre

### 1. Créer le fichier du chapitre

```typescript
// prisma/seeds/francais-l1/chapter-02.ts
import { ChapterContent } from './utils';

export const chapter02: ChapterContent = {
  name: 'Lecture : comprendre un texte narratif',
  description: 'Apprendre à lire et analyser des textes narratifs',
  modules: [
    {
      name: "Qu'est-ce qu'un texte narratif ?",
      theory: `## Introduction au texte narratif

Un texte narratif raconte une histoire...

## Les caractéristiques du récit

Le récit se compose de:
- Un narrateur
- Des personnages
- Une intrigue

... (15-25 slides au total)`,
      questions: [
        {
          text: "Qu'est-ce qui caractérise un texte narratif?",
          options: [
            { text: 'Il raconte une histoire', isCorrect: true },
            { text: 'Il donne des instructions', isCorrect: false },
            { text: 'Il présente une opinion', isCorrect: false },
            { text: 'Il décrit un processus', isCorrect: false },
          ],
          feedback: 'Un texte narratif se caractérise par le fait qu\'il raconte une histoire avec des personnages et des événements.',
          linkedTheorySection: 'Introduction au texte narratif',
        },
        // ... 24 autres questions
      ],
      practiceInstructions: `## Exercice: Identifier les éléments narratifs

Lis le texte suivant et identifie:
1. Le narrateur
2. Les personnages principaux
3. L'intrigue principale`,
      practiceTimerDuration: 900, // 15 minutes
    },
    // ... autres modules du chapitre
  ],
};
```

### 2. Exporter depuis index.ts

```typescript
// prisma/seeds/francais-l1/index.ts
export { chapter01 } from './chapter-01';
export { chapter02 } from './chapter-02';
// ...
```

### 3. Mettre à jour le script de seed

```typescript
// prisma/seed-francais-9co.ts
import { chapter01, chapter02, ... } from './seeds/francais-l1';

const chapters = [chapter01, chapter02, ...];
```

## Exécuter le Seed

```bash
# Exécuter le seed complet
npx tsx prisma/seed-francais-9co.ts

# Ou via npm script (si configuré)
npm run seed:francais
```

## Validation du Contenu

### Vérifier la structure

```typescript
import { validateChapter } from './seeds/francais-l1/utils';

const result = validateChapter(chapter02);
if (!result.valid) {
  console.error('Erreurs de validation:', result.errors);
}
```

### Critères de validation

| Critère | Valeur attendue |
|---------|-----------------|
| Slides par module | 15-25 |
| Questions par module | 25 |
| Options par question | 4 |
| Réponses correctes | ≥1 par question |
| Durée pratique | 600-1200 secondes |

## Tester dans l'Application

1. Lancer le serveur de développement: `npm run dev`
2. Naviguer vers: `http://localhost:3000/pack/[pack-id]`
3. Sélectionner le chapitre créé
4. Vérifier:
   - Les slides s'affichent correctement
   - Le quiz fonctionne avec randomisation
   - L'exercice pratique s'affiche

## Dépannage

### Erreur: "Module not found"

Vérifier que le chapitre est bien exporté depuis `index.ts`.

### Erreur: "Foreign key constraint"

Le pack "Français L1" (ID: a3358a9d-3529-4d18-a1a7-8fd03407a600) doit exister.

### Quiz ne se randomise pas

Vérifier que `shuffleQuestions: true` et `shuffleAnswers: true` sont définis.

### Nombre de questions incorrect

S'assurer que chaque module a exactement 25 questions avec 4 options chacune.

## Ressources

- [spec.md](./spec.md) - Spécification complète
- [data-model.md](./data-model.md) - Structure des données
- [research.md](./research.md) - Décisions de conception
- [contracts/seed-module-format.ts](./contracts/seed-module-format.ts) - Interfaces TypeScript
