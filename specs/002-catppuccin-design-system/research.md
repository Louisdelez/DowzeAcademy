# Research: Catppuccin Design System

**Date**: 2026-01-22
**Feature**: 002-catppuccin-design-system

## État actuel du projet

### Infrastructure Thème Existante

**Décision**: Le projet possède déjà une infrastructure de thèmes Catppuccin partielle.

**Constat**:
- `src/lib/theme/catppuccin.ts`: Définit les 4 thèmes (Latte, Frappé, Macchiato, Mocha) avec toutes les couleurs
- `src/lib/theme/ThemeProvider.tsx`: Context React pour la gestion du thème avec localStorage
- Variables CSS déjà exposées via `--ctp-*` et `--color-*`

**Lacunes identifiées**:
- Pas de persistance en base de données
- Pas de synchronisation avec le compte utilisateur
- Utilisation incohérente des variables CSS (mix inline styles + variables)
- Pas de sélecteur de thème dans le profil
- Script anti-flash absent

**Rationale**: Réutiliser l'existant et l'étendre plutôt que recréer.

---

## Recherches Techniques

### 1. Anti-flash de thème (No FOUC)

**Décision**: Utiliser un script inline dans `<head>` pour appliquer le thème avant le premier paint.

**Approche**:
```html
<script>
  (function() {
    const theme = localStorage.getItem('dowze-academy-theme') || 'mocha';
    document.documentElement.setAttribute('data-theme', theme);
  })();
</script>
```

**Rationale**: Le script s'exécute avant le parsing du CSS, évitant tout flash.

**Alternatives rejetées**:
- Cookie côté serveur: Ajoute de la complexité SSR
- CSS prefers-color-scheme uniquement: Ne supporte pas 4 thèmes

---

### 2. Persistance Base de Données

**Décision**: Ajouter un champ `themePreference` au modèle `User` dans Prisma.

**Implémentation**:
```prisma
model User {
  // ... existing fields
  themePreference String @default("mocha") @db.VarChar(20)
}
```

**Rationale**: Simple, performant, pas de table supplémentaire.

**Alternatives rejetées**:
- Table `UserPreferences` séparée: Overhead pour un seul champ
- JSON settings blob: Sérialization inutile

---

### 3. Synchronisation avec Debounce

**Décision**: Utiliser un debounce de 300ms côté client avant appel API.

**Implémentation**:
- Hook `useTheme()` étendu avec fonction `setTheme(theme)` débounced
- Endpoint `PATCH /api/user/preferences` pour la mise à jour

**Rationale**: Évite les appels multiples si l'utilisateur clique rapidement entre thèmes.

---

### 4. Architecture Variables CSS

**Décision**: Utiliser `data-theme` attribute selector plutôt que classes.

**Structure**:
```css
:root[data-theme="latte"] {
  --ctp-base: #eff1f5;
  /* ... all colors */
  --color-bg: var(--ctp-base);
  --color-text: var(--ctp-text);
  /* ... role mappings */
}
```

**Rationale**:
- Un seul point de vérité
- Pas de conflits avec classes Tailwind
- Facile à débugger (visible dans DevTools)

---

### 5. Intégration Tailwind v4

**Décision**: Tailwind v4 utilise CSS natif, les tokens sont définis dans CSS.

**Approche**:
- Définir les couleurs via CSS custom properties
- Tailwind les consomme automatiquement via `theme()` ou directement
- Pas besoin de config JS complexe

**Rationale**: Tailwind v4 est CSS-first, aligne avec notre approche variables CSS.

---

### 6. Composants Existants

**Audit**:
| Composant | État | Action |
|-----------|------|--------|
| Button | Partiellement migré | Standardiser variants |
| Card | Partiellement migré | Vérifier états |
| Input | Partiellement migré | Focus/error states |
| Badge | Migré | Vérifier cohérence |
| Modal | À créer | Nouveau composant |
| Toast | À créer | Nouveau composant |
| Tooltip | À créer | Nouveau composant |
| Table | Admin seulement | Migrer vers tokens |

---

## Décisions Architecturales

### Structure Fichiers Thème

```
src/lib/theme/
├── catppuccin.ts       # Palettes (existant)
├── ThemeProvider.tsx   # Context (à étendre)
├── theme.css           # Variables CSS (nouveau)
└── useTheme.ts         # Hook avec sync (nouveau)
```

### Flux de Données Thème

```
1. Page Load → Script inline lit localStorage → Applique data-theme
2. React hydrate → ThemeProvider initialise
3. Si user connecté → Fetch préférence DB → Sync localStorage
4. User change thème → Update DOM + localStorage + debounce API
```

---

## Risques et Mitigations

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Flash de thème | Moyenne | UX | Script inline dans head |
| Désync localStorage/DB | Faible | Confus | DB prioritaire à login |
| Régression visuelle | Moyenne | UX | Tests visuels par thème |
| Performance debounce | Faible | Perf | 300ms suffisant |

---

## Questions Résolues

1. ✅ Méthode de persistance: `User.themePreference` + localStorage fallback
2. ✅ Moment de sync: Debounce 300ms après changement
3. ✅ Priorité conflit: DB > localStorage à la connexion
4. ✅ Anti-flash: Script inline dans `<head>`
5. ✅ Architecture CSS: `data-theme` attribute + CSS variables
