# Quickstart: Catppuccin Design System

**Date**: 2026-01-22
**Feature**: 002-catppuccin-design-system

## Prérequis

- Node.js 20+
- PostgreSQL avec base existante
- Projet cloné et dépendances installées

## Setup Initial

### 1. Appliquer la migration

```bash
# Générer la migration
npm run db:migrate

# Ou push direct (dev)
npm run db:push
```

### 2. Vérifier l'infrastructure thème

Les fichiers suivants existent déjà et seront étendus:
- `src/lib/theme/catppuccin.ts` - Palettes
- `src/lib/theme/ThemeProvider.tsx` - Context React

## Développement

### Lancer le serveur

```bash
npm run dev
```

### Tester les thèmes

1. Ouvrir http://localhost:3000
2. Ouvrir DevTools > Elements
3. Sur `<html>`, modifier `data-theme="latte"` / `"frappe"` / `"macchiato"` / `"mocha"`
4. L'interface doit changer instantanément

### Utiliser un token dans un composant

```tsx
// ✅ Correct - utilise les variables CSS
<div style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
  <p style={{ color: 'var(--color-text)' }}>Hello</p>
</div>

// ❌ Incorrect - couleur hardcodée
<div style={{ backgroundColor: '#1e1e2e' }}>
  <p style={{ color: '#cdd6f4' }}>Hello</p>
</div>
```

### Utiliser le hook useTheme

```tsx
import { useTheme } from '@/lib/theme/ThemeProvider';

function MyComponent() {
  const { theme, themeName, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme('latte')}>
      Mode clair
    </button>
  );
}
```

## Tests de Validation

### Checklist visuelle

Pour chaque page, vérifier sur les 4 thèmes:
- [ ] Texte lisible (contraste)
- [ ] États hover visibles
- [ ] États focus visibles (navigation clavier)
- [ ] États disabled distincts
- [ ] Pas de couleur hardcodée (inspecter les styles)

### Audit automatique

```bash
# Rechercher les couleurs hardcodées
grep -rn "#[0-9a-fA-F]\{6\}" src/components/ --include="*.tsx"

# Devrait retourner 0 résultats dans les composants finaux
```

## Tokens de Référence

| Token | Usage |
|-------|-------|
| `--color-bg` | Fond de page |
| `--color-bg-secondary` | Containers |
| `--color-bg-tertiary` | Cards |
| `--color-text` | Texte principal |
| `--color-text-secondary` | Texte secondaire |
| `--color-text-muted` | Placeholders |
| `--color-border` | Bordures |
| `--color-primary` | Actions principales |
| `--color-success` | Succès |
| `--color-warning` | Avertissements |
| `--color-error` | Erreurs |

## Troubleshooting

### Le thème ne change pas
1. Vérifier que `data-theme` est bien sur `<html>`
2. Vérifier que les CSS variables sont définies (DevTools > Computed)
3. Vérifier que le composant utilise `var(--color-*)` et non des hex

### Flash de thème au chargement
1. Vérifier que le script inline est dans `<head>` avant les styles
2. Vérifier que localStorage a une valeur valide

### Thème pas synchronisé après login
1. Vérifier l'appel à `/api/user/preferences`
2. Vérifier que le ThemeProvider gère la session
