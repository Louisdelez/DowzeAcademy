# Quickstart: Curseurs et Icônes Catppuccin

**Feature**: 003-catppuccin-cursors-icons
**Date**: 2026-01-22

## Prérequis

- Node.js 18+
- Feature 002 (Catppuccin Design System) complétée
- Tokens CSS disponibles (`--ctp-*`, `--color-*`)

## Setup

Les curseurs et icônes sont déjà intégrés. Aucune installation supplémentaire n'est requise.

```bash
npm run dev
```

---

## Utilisation des Icônes

### Import

```tsx
import { Icon, type IconName, type IconColor } from '@/components/icons';
// ou
import Icon from '@/components/icons';
```

### Basique

```tsx
<Icon name="home" />
<Icon name="settings" />
<Icon name="user" />
```

### Avec taille

```tsx
<Icon name="search" size={16} />  {/* Petit */}
<Icon name="search" size={20} />  {/* Moyen */}
<Icon name="search" size={24} />  {/* Défaut */}
```

### Avec couleur

```tsx
{/* Couleurs sémantiques */}
<Icon name="check" color="success" />
<Icon name="warning" color="warning" />
<Icon name="error" color="error" />
<Icon name="info" color="info" />

{/* Couleurs Catppuccin */}
<Icon name="star" color="mauve" />
<Icon name="heart" color="red" />
<Icon name="book" color="sapphire" />
```

### Dans un bouton (avec accessibilité)

```tsx
<button aria-label="Supprimer">
  <Icon name="trash" color="error" />
</button>

{/* Ou avec texte visible */}
<button>
  <Icon name="plus" />
  <span>Ajouter</span>
</button>
```

### Avec hover via CSS parent

```tsx
<button className="group">
  <Icon
    name="edit"
    className="text-muted group-hover:text-mauve transition-colors"
  />
</button>
```

---

## Utilisation des Curseurs

Les curseurs sont appliqués automatiquement via CSS global.

### Automatique

| Élément | Curseur |
|---------|---------|
| `html` | default |
| `a`, `button`, `[role="button"]` | pointer |
| `input[type="text"]`, `textarea` | text |
| `[disabled]`, `[aria-disabled]` | not-allowed |
| `[draggable="true"]` | grab |
| `[aria-busy="true"]` | wait |

### Classes utilitaires

```tsx
<div className="cursor-wait">Chargement...</div>
<div className="cursor-progress">En cours...</div>
<div className="cursor-crosshair">Précision</div>
<div className="cursor-zoom-in">Zoom +</div>
<div className="cursor-zoom-out">Zoom -</div>
<div className="cursor-help">Aide</div>
```

---

## Liste des Icônes Disponibles

### Navigation
`home`, `user`, `settings`, `search`, `menu`, `close`, `chevron-left`, `chevron-right`, `chevron-up`, `chevron-down`, `arrow-left`, `arrow-right`

### Actions
`plus`, `minus`, `edit`, `trash`, `copy`, `save`, `download`, `upload`, `refresh`, `external-link`, `link`

### Visibility
`eye`, `eye-off`, `lock`, `unlock`

### Favorites
`star`, `star-filled`, `heart`, `heart-filled`, `bookmark`, `bookmark-filled`

### Notifications
`bell`, `bell-off`

### Time
`calendar`, `clock`

### Theme
`sun`, `moon`, `palette`

### Status
`info`, `warning`, `error`, `success`, `question`, `check`

### Education
`book`, `graduation`, `trophy`, `target`, `chart`

### Media
`play`, `pause`, `stop`, `skip-forward`, `skip-back`, `volume`, `volume-off`, `maximize`, `minimize`

### Data
`filter`, `sort`, `grid`, `list`, `folder`, `folder-open`, `file`, `image`, `code`, `terminal`, `database`, `server`, `cloud`

### Connectivity
`wifi`, `wifi-off`, `bluetooth`

### Communication
`send`, `mail`, `message`, `phone`, `video`, `camera`, `mic`, `mic-off`, `share`

### Auth
`logout`, `login`

---

## Couleurs Disponibles

### Sémantiques (recommandées)
`current`, `text`, `muted`, `primary`, `success`, `warning`, `error`, `info`

### Catppuccin (usage direct)
`rosewater`, `flamingo`, `pink`, `mauve`, `red`, `maroon`, `peach`, `yellow`, `green`, `teal`, `sky`, `sapphire`, `blue`, `lavender`

---

## Bonnes Pratiques

### DO ✅

```tsx
{/* Icône avec label accessible */}
<button aria-label="Modifier">
  <Icon name="edit" />
</button>

{/* Couleur sémantique pour le contexte */}
<Icon name="check" color="success" />
<Icon name="trash" color="error" />

{/* Taille cohérente */}
<Icon name="home" size={24} />
```

### DON'T ❌

```tsx
{/* Icône interactive sans label */}
<button>
  <Icon name="edit" />  {/* ❌ Pas de aria-label */}
</button>

{/* Couleur hardcodée */}
<svg stroke="#ff0000">...</svg>  {/* ❌ Utiliser Icon avec color="error" */}

{/* Taille arbitraire */}
<Icon name="home" size={17} />  {/* ❌ Utiliser 16, 20, ou 24 */}
```

---

## Troubleshooting

### L'icône n'apparaît pas
- Vérifier que le nom existe dans `IconName`
- Vérifier l'import: `import { Icon } from '@/components/icons'`

### La couleur ne change pas
- Vérifier que le token CSS existe (`--ctp-*` ou `--color-*`)
- Vérifier que le thème est actif (attribut `data-theme` sur `<html>`)

### Le curseur ne s'affiche pas
- Vérifier que `globals.css` importe `cursors.css`
- Tester sur un autre navigateur (certains bloquent les curseurs custom)
- Le fallback CSS natif s'affiche si le custom échoue
