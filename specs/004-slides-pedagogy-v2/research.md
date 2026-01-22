# Research: Slides Pedagogy V2

**Feature**: 004-slides-pedagogy-v2
**Date**: 2026-01-22
**Status**: Complete

## Research Questions

### RQ1: Comment structurer les données slides sans casser l'existant ?

**Context**: Le modèle actuel stocke `theoryContent` comme un seul champ Text dans `Lesson`. Le parser `theory-parser.ts` découpe déjà ce contenu par `##` en slides côté client.

**Decision**: Approche hybride - parsing client + métadonnées optionnelles en base

**Rationale**:
- Le parser existe et fonctionne → pas de refonte nécessaire
- Ajout d'un champ `mode` sur `Lesson` pour activation progressive
- Ajout d'un champ `linkedTheorySection` sur `QuizQuestion` pour le lien question→slide
- Aucune migration de données requise

**Implementation**:
```prisma
model Lesson {
  // ... existing fields
  mode LessonMode @default(LEGACY)  // NEW
}

model QuizQuestion {
  // ... existing fields
  linkedTheorySection String? @db.VarChar(255)  // NEW - matches ## title
}

enum LessonMode {
  LEGACY
  SLIDES
}
```

**Alternatives rejected**:
- Table `TheorySlide` séparée: Over-engineering, le parser gère déjà le découpage dynamiquement
- Migration complète: Risque de perte de données, temps d'implémentation x3

---

### RQ2: Quelle stratégie pour la navigation et les animations ?

**Context**: La spec exige des animations fluides (200-300ms) et une navigation clavier (flèches + Entrée).

**Decision**: Hook React `useSlideNavigation` + CSS transitions

**Rationale**:
- État local pour la réactivité (pas de latence serveur)
- CSS transitions pour les animations (performant, GPU-accelerated)
- Sync API en background pour la persistance

**Implementation**:
```typescript
interface SlideState {
  phase: 'theory' | 'quiz' | 'practice' | 'complete';
  currentIndex: number;
  totalSlides: number;
  answers: Record<string, string | string[]>;
  direction: 'forward' | 'backward';
}

function useSlideNavigation(moduleId: string) {
  const [state, dispatch] = useReducer(slideReducer, initialState);

  // Keyboard navigation
  useKeyboardNavigation({
    onNext: () => dispatch({ type: 'NEXT' }),
    onPrev: () => dispatch({ type: 'PREV' }),
    onSubmit: () => dispatch({ type: 'SUBMIT' }),
  });

  // Background sync
  useEffect(() => {
    syncProgressToServer(moduleId, state);
  }, [state.currentIndex, state.phase]);

  return { state, dispatch };
}
```

**Alternatives rejected**:
- URL query params: Pollue l'historique, pas adapté aux animations
- Server-driven navigation: Latence trop élevée, UX dégradée

---

### RQ3: Comment gérer le lien "Revoir la théorie" depuis le quiz ?

**Context**: FR-009 exige un lien vers la slide théorie spécifique quand l'apprenant fait une erreur.

**Decision**: Matching par titre de section `##`

**Rationale**:
- Le parser extrait déjà les titres des sections `##`
- Champ `linkedTheorySection` sur `QuizQuestion` stocke le titre exact
- Lors du feedback erreur, on cherche la slide avec ce titre

**Implementation**:
```typescript
// Dans QuizSlide feedback
function getLinkedTheorySlide(
  question: QuizQuestion,
  theorySlides: TheorySlide[]
): TheorySlide | null {
  if (!question.linkedTheorySection) return null;
  return theorySlides.find(
    slide => slide.title === question.linkedTheorySection
  );
}

// Navigation vers théorie
function handleReviewTheory(slideIndex: number) {
  dispatch({
    type: 'GO_TO_THEORY',
    payload: { slideIndex, returnToQuiz: true }
  });
}
```

**Edge cases**:
- Titre non trouvé: Fallback vers la première slide théorie
- Plusieurs slides avec même titre: Prendre la première occurrence
- Question sans lien: Ne pas afficher le bouton "Revoir la théorie"

---

### RQ4: Comment persister la progression slide par slide ?

**Context**: FR-018 exige la persistance de progression à chaque slide. Le modèle actuel ne suit que theory/quiz/practice au niveau module.

**Decision**: Nouveaux champs JSON sur `UserProgression` pour l'état détaillé

**Rationale**:
- Évite de créer une table séparée `SlideProgress`
- JSON flexible pour stocker l'index courant par phase
- Compatible avec le modèle existant

**Implementation**:
```prisma
model UserProgression {
  // ... existing fields
  slideState Json?  // NEW: { theoryIndex: 3, quizIndex: 1, answers: {...} }
}
```

```typescript
interface SlideProgressState {
  theoryIndex: number;
  quizIndex: number;
  practiceIndex: number;
  quizAnswers: Record<string, string | string[]>;
  lastPhase: 'theory' | 'quiz' | 'practice' | 'complete';
}
```

**API Endpoint**: `POST /api/progression/slide/[moduleId]`
- Body: `{ phase, index, answers? }`
- Response: `{ success: true }`

---

### RQ5: Comment gérer le retry quiz avec suggestions ?

**Context**: FR-012 exige un message motivant et des suggestions de slides à revoir après échec.

**Decision**: Calculer les slides liées aux questions ratées côté client

**Rationale**:
- Les réponses sont déjà en mémoire côté client
- Pas besoin d'API supplémentaire
- Affichage immédiat des suggestions

**Implementation**:
```typescript
function getReviewSuggestions(
  questions: QuizQuestion[],
  answers: Record<string, string | string[]>,
  theorySlides: TheorySlide[]
): TheorySlide[] {
  const wrongQuestions = questions.filter(
    q => !isCorrectAnswer(q, answers[q.id])
  );

  const linkedSections = wrongQuestions
    .map(q => q.linkedTheorySection)
    .filter(Boolean);

  return theorySlides.filter(
    slide => linkedSections.includes(slide.title)
  );
}
```

**UX**:
- Message: "Pas de panique ! Voici les concepts à revoir avant de réessayer."
- Liste des slides suggérées avec boutons cliquables
- Bouton "Réessayer le quiz" pour recommencer

---

## Best Practices Applied

### React Performance
- `useMemo` pour le parsing des slides (évite re-parsing)
- `useCallback` pour les handlers de navigation
- CSS transitions (pas de JS animations)

### Accessibilité
- Navigation clavier complète (flèches, Tab, Entrée, Escape)
- `aria-current="step"` sur l'indicateur de progression
- Focus management lors des transitions

### Mobile-First
- Touch gestures: swipe left/right pour navigation
- Boutons suffisamment grands (44x44px minimum)
- Indicateur de progression compact en mobile

---

## Dependencies Identified

| Dependency | Version | Purpose |
|------------|---------|---------|
| framer-motion | Optional | Si animations CSS insuffisantes |
| @radix-ui/react-progress | Optional | Progress bar accessible |

**Note**: Préférer les solutions natives CSS/React avant d'ajouter des dépendances.

---

## Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Performance avec beaucoup de slides | Low | Medium | Lazy loading, virtualization si >50 slides |
| Perte de progression offline | Medium | High | LocalStorage fallback + sync on reconnect |
| Contenu existant incompatible | Low | Medium | Mode legacy par défaut, migration optionnelle |
| Animations saccadées mobile | Medium | Medium | CSS transforms, reduce motion media query |
