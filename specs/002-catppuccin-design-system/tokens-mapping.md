# Tokens Mapping: Catppuccin Design System

**Date**: 2026-01-22
**Feature**: 002-catppuccin-design-system

## Audit Results

### Couleurs Hardcodées
- **Résultat**: 0 couleurs hex hardcodées trouvées dans `src/components/`
- **Note**: Le projet utilise déjà des variables CSS (`var(--color-*)`)

### Styles Inline
- **Total**: 131 occurrences de `style={{` dans les composants
- **Status**: Tous utilisent des variables CSS

## Token Mapping (Catppuccin → Rôles UI)

### Couleurs de Fond

| Token CSS | Catppuccin | Usage |
|-----------|------------|-------|
| `--color-bg` | base | Fond principal de page |
| `--color-bg-secondary` | mantle | Conteneurs, sidebars, cards secondaires |
| `--color-bg-tertiary` | surface0 | Cards, sections élevées |
| `--color-bg-elevated` | surface0 | Modals, dropdowns, popovers |

### Couleurs de Texte

| Token CSS | Catppuccin | Usage |
|-----------|------------|-------|
| `--color-text` | text | Texte principal, titres |
| `--color-text-secondary` | subtext1 | Texte secondaire, descriptions |
| `--color-text-muted` | subtext0 | Placeholders, texte désactivé |

### Bordures

| Token CSS | Catppuccin | Usage |
|-----------|------------|-------|
| `--color-border` | surface2 | Bordures standard |
| `--color-border-light` | surface1 | Bordures légères, séparateurs |

### Actions & États

| Token CSS | Catppuccin | Usage |
|-----------|------------|-------|
| `--color-primary` | mauve | Action principale, liens, boutons primaires |
| `--color-primary-hover` | lavender | Hover sur actions primaires |
| `--color-success` | green | Succès, validation, correct |
| `--color-warning` | yellow | Avertissement, attention |
| `--color-error` | red | Erreur, incorrect, danger |
| `--color-info` | blue | Information, aide |

### Accents Catppuccin (Disponibles)

| Token CSS | Usage suggéré |
|-----------|---------------|
| `--ctp-rosewater` | Accent doux |
| `--ctp-flamingo` | Accent chaud |
| `--ctp-pink` | Accent rose |
| `--ctp-mauve` | Action primaire (défaut) |
| `--ctp-red` | Erreur, danger |
| `--ctp-maroon` | Erreur douce |
| `--ctp-peach` | Accent orange |
| `--ctp-yellow` | Warning |
| `--ctp-green` | Succès |
| `--ctp-teal` | Accent turquoise |
| `--ctp-sky` | Info légère |
| `--ctp-sapphire` | Info |
| `--ctp-blue` | Info, liens |
| `--ctp-lavender` | Accent violet clair |

## Composants à Migrer

### `src/components/ui/` (Design System Primitives)
- [x] Button.tsx - Utilise déjà var(--color-*)
- [x] Card.tsx - Utilise déjà var(--color-*)
- [x] Input.tsx - Utilise déjà var(--color-*)
- [x] Badge.tsx - Utilise déjà var(--color-*)
- [x] Breadcrumb.tsx - À vérifier
- [ ] Modal.tsx - À créer
- [ ] Toast.tsx - À créer
- [ ] Tooltip.tsx - À créer
- [x] ThemeSwitcher.tsx - Existe, à étendre vers ThemeSelector

### `src/components/cards/` (Entity Cards)
- [x] DomainCard.tsx
- [x] PackCard.tsx
- [x] DisciplineCard.tsx
- [x] ModuleCard.tsx

### `src/components/progression/` (Progress UI)
- [x] ProgressBar.tsx
- [x] ProgressStats.tsx
- [x] ModuleStatusBadge.tsx

### `src/components/lesson/` (Lesson Components)
- [x] TheoryViewer.tsx
- [x] TheorySlide.tsx
- [x] QuizContainer.tsx
- [x] QuizSlide.tsx
- [x] QuizQuestion.tsx
- [x] QuizResult.tsx
- [x] PracticeSlide.tsx
- [x] PracticeInstructions.tsx
- [x] PracticeCompletion.tsx
- [x] CompletionSlide.tsx
- [x] SlideNavigation.tsx
- [x] SlideProgress.tsx
- [x] GuidedModuleFlow.tsx

### `src/components/connectivity/` (States)
- [x] LoadingSkeleton.tsx
- [x] NetworkStatusBanner.tsx
- [x] ErrorDisplay.tsx
- [x] OfflineBlocker.tsx
- [x] StalenessIndicator.tsx
- [x] RetryButton.tsx

### `src/components/admin/` (Admin)
- [x] ContentForm.tsx
- [x] LessonEditor.tsx
- [x] QuizQuestionEditor.tsx
- [x] PublishButton.tsx
- [x] StaleDataWarning.tsx

### `src/components/navigation/`
- [x] BottomNav.tsx

## Notes

- La plupart des composants utilisent déjà `var(--color-*)`
- Focus: Créer les composants manquants (Modal, Toast, Tooltip)
- Focus: Créer le ThemeSelector avec aperçu des 4 thèmes
- Focus: Infrastructure de persistance DB
