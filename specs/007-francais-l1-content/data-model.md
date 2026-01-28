# Data Model: Contenu Pédagogique Français L1 9CO

**Feature**: 007-francais-l1-content
**Date**: 2026-01-26

## Overview

Cette feature utilise les entités existantes du modèle de données. Aucune modification du schéma Prisma n'est nécessaire.

## Entités Utilisées

### Discipline (Chapitre)

Représente un chapitre du curriculum Français L1.

| Champ | Type | Description |
|-------|------|-------------|
| id | UUID | Identifiant unique |
| packId | UUID | Référence au pack "Français L1" |
| name | String | Nom du chapitre (ex: "Lecture : comprendre un texte narratif") |
| description | String | Description du chapitre |
| order | Int | Ordre d'affichage (1-16) |
| status | ContentStatus | PUBLISHED |

**Données à créer**: 16 disciplines (chapitres 1-16)

### Module (Point de chapitre)

Représente un point d'apprentissage au sein d'un chapitre.

| Champ | Type | Description |
|-------|------|-------------|
| id | UUID | Identifiant unique |
| disciplineId | UUID | Référence à la discipline parente |
| name | String | Nom du module (ex: "Qu'est-ce qu'un texte narratif ?") |
| description | String | Description courte |
| order | Int | Ordre au sein du chapitre (1, 2, 3...) |
| status | ContentStatus | PUBLISHED |

**Données à créer**: 107 modules (répartis selon le curriculum)

### Lesson

Contient le contenu pédagogique d'un module.

| Champ | Type | Description |
|-------|------|-------------|
| id | UUID | Identifiant unique |
| moduleId | UUID | Référence au module |
| theoryContent | Text | Contenu Markdown (15-25 slides) |
| quizThreshold | Int | 70 (seuil de réussite) |
| practiceType | PracticeType | TIMED |
| practiceInstructions | Text | Instructions de l'exercice |
| practiceTimerDuration | Int | 600-1200 (10-20 minutes) |
| mode | LessonMode | SLIDES |
| shuffleQuestions | Boolean | true |
| shuffleAnswers | Boolean | true |
| questionsToShow | Int | 15 |

**Données à créer**: 107 lessons (1 par module)

### QuizQuestion

Question de quiz avec ses métadonnées.

| Champ | Type | Description |
|-------|------|-------------|
| id | UUID | Identifiant unique |
| lessonId | UUID | Référence à la lesson |
| questionText | Text | Texte de la question |
| questionType | QuestionType | SINGLE_CHOICE |
| feedback | Text | Explication de la bonne réponse |
| linkedTheorySection | String | Titre de la slide liée |
| order | Int | Ordre de la question (1-25) |

**Données à créer**: 2675 questions (107 × 25)

### QuizOption

Option de réponse pour une question.

| Champ | Type | Description |
|-------|------|-------------|
| id | UUID | Identifiant unique |
| questionId | UUID | Référence à la question |
| text | String | Texte de l'option |
| isCorrect | Boolean | true si bonne réponse |
| order | Int | Ordre d'affichage original (1-4) |

**Données à créer**: 10700 options (2675 × 4)

## Relations

```
Pack (Français L1)
└── Discipline (Chapitre) [1-16]
    └── Module (Point) [1-N par chapitre]
        └── Lesson [1:1]
            └── QuizQuestion [25 par lesson]
                └── QuizOption [4 par question]
```

## Répartition par Chapitre

| Chapitre | Modules | Questions | Options |
|----------|---------|-----------|---------|
| 1. Entrer au CO | 6 | 150 | 600 |
| 2. Lecture narratif | 9 | 225 | 900 |
| 3. Lecture informatif | 8 | 200 | 800 |
| 4. Lecture argumentatif | 6 | 150 | 600 |
| 5. Expression orale | 8 | 200 | 800 |
| 6. Écriture narratif | 8 | 200 | 800 |
| 7. Écriture informatif | 7 | 175 | 700 |
| 8. Écriture opinion | 5 | 125 | 500 |
| 9. Grammaire phrase | 7 | 175 | 700 |
| 10. Grammaire mots | 8 | 200 | 800 |
| 11. Conjugaison | 7 | 175 | 700 |
| 12. Orthographe gramm. | 6 | 150 | 600 |
| 13. Orthographe lexicale | 6 | 150 | 600 |
| 14. Méthodes de travail | 6 | 150 | 600 |
| 15. Culture littéraire | 5 | 125 | 500 |
| 16. Projet synthèse | 5 | 125 | 500 |
| **TOTAL** | **107** | **2675** | **10700** |

## Identifiants Existants

| Entité | ID | Description |
|--------|----|----|
| Domain | (à récupérer) | "Éducation" ou "9CO Suisse" |
| Pack | a3358a9d-3529-4d18-a1a7-8fd03407a600 | "Français (L1)" |

## Contraintes de Données

1. **Unicité**: Chaque module a un nom unique au sein de sa discipline
2. **Ordre**: Les modules sont ordonnés séquentiellement (1, 2, 3...)
3. **Complétude**: Chaque module a exactement 1 lesson avec 25 questions de 4 options
4. **Cohérence**: Le linkedTheorySection référence un titre de slide existant dans la théorie
