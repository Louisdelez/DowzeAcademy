# Quickstart: Slides Pedagogy V2

**Feature**: 004-slides-pedagogy-v2
**Date**: 2026-01-22

## Prerequisites

- Node.js 20+
- PostgreSQL running
- Project setup completed (`npm install`)
- Database seeded with test data

## Getting Started

### 1. Apply Database Migration

```bash
# Generate Prisma client with new types
npm run db:generate

# Apply migration
npm run db:migrate
```

This adds:
- `LessonMode` enum (`LEGACY` | `SLIDES`)
- `mode` field on `Lesson` (default: `LEGACY`)
- `linkedTheorySection` field on `QuizQuestion`
- `slideState` JSON field on `UserProgression`

### 2. Enable Slides Mode on a Lesson

Via Prisma Studio:
```bash
npm run db:studio
```

Or via API:
```bash
curl -X PUT http://localhost:3000/api/admin/modules/{moduleId}/lesson \
  -H "Content-Type: application/json" \
  -d '{"mode": "SLIDES"}'
```

### 3. Test the Flow

1. Login as learner: `demo@dowze.academy` / `demo123`
2. Navigate to a module with `mode: SLIDES`
3. Verify:
   - Theory displays as individual slides
   - Quiz shows 1 question per slide with feedback
   - Practice shows step-by-step slides
   - Keyboard navigation works (arrows + Enter)

---

## Development Workflow

### File Structure

```
src/components/lesson/
├── slides/
│   ├── SlideContainer.tsx      # Main orchestrator
│   ├── TheorySlide.tsx         # Theory template
│   ├── QuizSlide.tsx           # Quiz template
│   ├── PracticeSlide.tsx       # Practice template
│   ├── FeedbackPanel.tsx       # Quiz feedback
│   └── index.ts
├── SlideNavigation.tsx         # Navigation footer
├── SlideProgress.tsx           # Progress indicator
└── GuidedModuleFlow.tsx        # Updated to support slides

src/lib/hooks/
├── useSlideNavigation.ts       # Navigation state
└── useKeyboardNavigation.ts    # Keyboard shortcuts

src/lib/utils/
└── theory-parser.ts            # Already exists, parses ## sections

src/app/api/progression/slide/
└── [moduleId]/
    └── route.ts                # Slide progress API
```

### Key Implementation Steps

1. **Start with hooks**: `useSlideNavigation` is the core
2. **Build slide components**: TheorySlide, QuizSlide, PracticeSlide
3. **Add navigation**: SlideNavigation with keyboard support
4. **Wire up container**: SlideContainer orchestrates everything
5. **Update GuidedModuleFlow**: Switch between legacy/slides based on mode
6. **Add API endpoint**: Persist slide progress
7. **Test with real content**: Verify with existing lessons

---

## Testing

### Manual Testing Checklist

- [ ] Theory slides navigate forward/backward
- [ ] Progress indicator shows correct position
- [ ] Keyboard arrows work for navigation
- [ ] Enter key submits quiz answers
- [ ] Quiz feedback shows for correct/incorrect
- [ ] "Revoir la théorie" link works
- [ ] Quiz result shows suggestions on failure
- [ ] Retry quiz resets to first question
- [ ] Practice steps display correctly
- [ ] Auto-evaluation checklist works
- [ ] Completion screen appears at end
- [ ] Progress persists on page refresh

### E2E Test

```bash
npm run test:e2e -- --grep "slides"
```

Test file: `tests/e2e/slides-flow.spec.ts`

---

## Common Issues

### Slides not displaying

**Cause**: Lesson mode is `LEGACY`

**Fix**: Update lesson mode to `SLIDES`:
```sql
UPDATE "Lesson" SET mode = 'SLIDES' WHERE id = '{lessonId}';
```

### Theory not parsing into slides

**Cause**: Content doesn't use `## ` headings

**Fix**: Ensure theory content has markdown headings:
```markdown
## Concept 1
Content here...

## Concept 2
More content...
```

### Linked theory slide not found

**Cause**: `linkedTheorySection` doesn't match any `## ` title

**Fix**: Update question with exact section title:
```sql
UPDATE "QuizQuestion"
SET "linkedTheorySection" = 'Concept 1'
WHERE id = '{questionId}';
```

### Progress not saving

**Cause**: API error or network issue

**Debug**: Check browser console and network tab for `/api/progression/slide/*` requests.

---

## API Quick Reference

### Save progress
```bash
POST /api/progression/slide/{moduleId}
{
  "phase": "quiz",
  "index": 2,
  "quizAnswers": { "q1": "A" }
}
```

### Get progress
```bash
GET /api/progression/slide/{moduleId}
```

### Enable slides mode (admin)
```bash
PUT /api/admin/modules/{moduleId}/lesson
{
  "mode": "SLIDES"
}
```

---

## Design Tokens (Catppuccin)

Use these CSS variables for slides styling:

```css
/* Backgrounds */
--color-bg: var(--ctp-base);
--color-bg-secondary: var(--ctp-surface0);
--color-bg-tertiary: var(--ctp-surface1);

/* Text */
--color-text: var(--ctp-text);
--color-text-muted: var(--ctp-subtext0);

/* Feedback */
--color-success: var(--ctp-green);
--color-error: var(--ctp-red);
--color-warning: var(--ctp-yellow);

/* Accent */
--color-primary: var(--ctp-mauve);
```

---

## Next Steps After Implementation

1. **Migrate existing lessons**: Enable `SLIDES` mode progressively
2. **Link questions to theory**: Add `linkedTheorySection` to all questions
3. **Add practice parsing**: Implement `## ` parsing for practice content
4. **Analytics**: Track slide completion rates
5. **Mobile optimization**: Test swipe gestures
