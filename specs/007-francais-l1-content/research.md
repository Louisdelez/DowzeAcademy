# Research: Contenu Pédagogique Français L1 9CO

**Feature**: 007-francais-l1-content
**Date**: 2026-01-26

## 1. Stratégie de Génération de Contenu

### Decision: Génération AI-Assisted par Chapitre

**Rationale**: Avec 107 modules à créer, chacun nécessitant 15-25 slides et 25 questions, la génération manuelle serait prohibitive. Une approche AI-assisted permet de:
- Générer du contenu pédagogique cohérent et adapté au niveau 9CO
- Maintenir une structure uniforme entre les modules
- Faciliter les révisions et corrections

**Alternatives considérées**:
- Rédaction manuelle complète: Rejetée (trop long, ~500+ heures de travail)
- Import depuis ressources existantes: Rejetée (problèmes de format et droits)
- Génération automatique pure: Rejetée (nécessite validation humaine)

### Workflow de Génération

1. **Préparation**: Définir le format TypeScript des modules (contract)
2. **Génération**: Créer le contenu par chapitre avec validation
3. **Seed**: Exécuter le script pour insérer en base
4. **Validation**: Vérifier le rendu dans l'application

## 2. Format des Slides Markdown

### Decision: Structure Markdown avec délimiteurs `##`

**Format adopté** (conforme aux Features 004-006):
```markdown
## Titre de la Slide 1

Contenu de la slide avec:
- Points clés en liste
- **Termes importants** en gras
- Exemples concrets

## Titre de la Slide 2

Suite du contenu...
```

**Rationale**: Ce format est déjà supporté par le parser `parseTheorySlides` existant et permet une génération facile.

**Structure type d'un module (15-25 slides)**:
1. Introduction (1-2 slides)
2. Définitions et concepts (3-5 slides)
3. Explications détaillées (4-8 slides)
4. Exemples et illustrations (3-5 slides)
5. Exercices d'application (2-3 slides)
6. Synthèse (1-2 slides)

## 3. Structure des Questions de Quiz

### Decision: Questions SINGLE_CHOICE avec 4 options

**Format adopté**:
```typescript
{
  text: "Question claire et précise?",
  options: [
    { text: "Réponse correcte", isCorrect: true },
    { text: "Distracteur plausible 1", isCorrect: false },
    { text: "Distracteur plausible 2", isCorrect: false },
    { text: "Distracteur plausible 3", isCorrect: false },
  ],
  feedback: "Explication de pourquoi la bonne réponse est correcte.",
  linkedTheorySection: "Titre de la slide concernée"
}
```

**Types de questions par catégorie**:

| Catégorie | Types de questions | Proportion |
|-----------|-------------------|------------|
| Compréhension | Définitions, identification | 40% (10/25) |
| Application | Mise en pratique, exemples | 40% (10/25) |
| Analyse | Comparaison, évaluation | 20% (5/25) |

**Rationale**: Répartition équilibrée permettant de tester différents niveaux cognitifs (taxonomie de Bloom simplifiée pour 9CO).

## 4. Types d'Exercices Pratiques par Domaine

### Decision: Exercices TIMED adaptés au chapitre

| Chapitres | Type d'exercice | Durée | Description |
|-----------|-----------------|-------|-------------|
| 1 (Introduction) | Auto-évaluation | 10 min | Réflexion sur ses objectifs |
| 2-4 (Lecture) | Analyse de texte | 15 min | Lire et répondre à des questions |
| 5 (Oral) | Préparation orale | 10 min | Préparer une prise de parole |
| 6-8 (Écriture) | Rédaction | 20 min | Écrire un court texte |
| 9-10 (Grammaire) | Exercices de repérage | 15 min | Identifier des éléments grammaticaux |
| 11 (Conjugaison) | Conjugaison | 10 min | Conjuguer des verbes |
| 12-13 (Orthographe) | Dictée/correction | 15 min | Corriger des erreurs |
| 14 (Méthodes) | Organisation | 10 min | Planifier un travail |
| 15 (Littérature) | Analyse littéraire | 15 min | Réagir à un extrait |
| 16 (Synthèse) | Projet intégrateur | 20 min | Exercice combinant plusieurs compétences |

**Rationale**: Les durées et types sont adaptés à la nature de chaque chapitre et au niveau 9CO.

## 5. Configuration des Modules

### Decision: Configuration uniforme

```typescript
{
  lessonMode: 'SLIDES',
  quizThreshold: 70,
  shuffleQuestions: true,
  shuffleAnswers: true,
  questionsToShow: 15,
  practiceType: 'TIMED',
  practiceTimerDuration: [10-20], // selon le chapitre
  practiceValidationMode: 'TIMER'
}
```

**Rationale**: Configuration cohérente avec les Features 004-006 existantes.

## 6. Gestion du Chapitre 1 Existant

### Decision: Remplacer le chapitre 1 existant

**Rationale**: Le chapitre 1 actuel a été créé comme prototype avec un contenu incomplet. Le nouveau contenu sera plus complet et cohérent avec les 15 autres chapitres.

**Action**:
1. Supprimer les modules existants du chapitre 1 (déjà fait)
2. Créer les 6 nouveaux modules avec le format complet

## 7. Ordre de Création

### Decision: Création séquentielle par chapitre

**Ordre recommandé**:
1. Chapitre 1 (fondamental, sert de template)
2. Chapitres 9-13 (grammaire/orthographe - règles claires)
3. Chapitres 2-4 (lecture - structure narrative)
4. Chapitres 6-8 (écriture - créativité guidée)
5. Chapitre 5 (oral)
6. Chapitres 14-15 (méthodes et culture)
7. Chapitre 16 (synthèse - après tous les autres)

**Rationale**: Commencer par les chapitres les plus structurés permet d'établir un modèle solide, puis progresser vers les contenus plus créatifs.

## 8. Validation du Contenu

### Decision: Validation en 3 étapes

1. **Validation technique**: Script de seed s'exécute sans erreur
2. **Validation structurelle**: Nombre de slides (15-25), questions (25), options (4)
3. **Validation pédagogique**: Revue du contenu pour cohérence et niveau

**Critères de validation automatique**:
```typescript
// Validation structurelle
assert(slides.length >= 15 && slides.length <= 25);
assert(questions.length === 25);
questions.forEach(q => assert(q.options.length === 4));
questions.forEach(q => assert(q.options.filter(o => o.isCorrect).length >= 1));
```
