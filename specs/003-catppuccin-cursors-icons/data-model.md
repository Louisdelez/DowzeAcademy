# Data Model: Curseurs et Icônes Catppuccin

**Feature**: 003-catppuccin-cursors-icons
**Date**: 2026-01-22

## Overview

Cette feature est purement visuelle (CSS + React components). Il n'y a pas de données persistées en base. Ce document décrit les "entités" conceptuelles utilisées dans le code.

---

## 1. Cursor (CSS Entity)

Les curseurs sont définis comme des CSS custom properties contenant des data URIs SVG.

### Structure

```css
:root {
  --cursor-{type}: url("data:image/svg+xml,...") {hotspot-x} {hotspot-y}, {fallback};
}
```

### Types de Curseurs

| Type | Hotspot | Fallback | Usage |
|------|---------|----------|-------|
| default | 0 0 | default | Zones neutres |
| pointer | 10 0 | pointer | Éléments cliquables |
| text | 12 12 | text | Champs de saisie |
| grab | 12 12 | grab | Éléments déplaçables |
| grabbing | 12 12 | grabbing | Élément en cours de déplacement |
| not-allowed | 12 12 | not-allowed | Éléments désactivés |
| wait | 12 12 | wait | Opérations en cours |
| progress | 0 0 | progress | Chargement partiel |
| crosshair | 12 12 | crosshair | Sélection précise |
| zoom-in | 10 10 | zoom-in | Agrandir |
| zoom-out | 10 10 | zoom-out | Réduire |
| help | 0 0 | help | Aide contextuelle |

### Thèmes

| Thème | Sélecteur CSS | Couleur texte | Couleur fond |
|-------|---------------|---------------|--------------|
| Mocha | `:root` (default) | #cdd6f4 | #1e1e2e |
| Latte | `[data-theme="latte"]` | #4c4f69 | #eff1f5 |

---

## 2. Icon (React Component Entity)

### Props Interface

```typescript
interface IconProps {
  name: IconName;           // Nom de l'icône (obligatoire)
  size?: number | string;   // Taille en pixels (défaut: 24)
  color?: IconColor;        // Couleur via token (défaut: 'current')
  strokeWidth?: number;     // Épaisseur du trait (défaut: 2)
  className?: string;       // Classes CSS additionnelles
}
```

### IconName (88 valeurs)

```typescript
type IconName =
  // Navigation
  | 'home' | 'user' | 'settings' | 'search' | 'menu' | 'close'
  | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevron-down'
  | 'arrow-left' | 'arrow-right'
  // Actions
  | 'plus' | 'minus' | 'edit' | 'trash' | 'copy' | 'save'
  | 'download' | 'upload' | 'refresh' | 'external-link' | 'link'
  // Visibility
  | 'eye' | 'eye-off' | 'lock' | 'unlock'
  // Favorites
  | 'star' | 'star-filled' | 'heart' | 'heart-filled'
  | 'bookmark' | 'bookmark-filled'
  // Notifications
  | 'bell' | 'bell-off'
  // Time
  | 'calendar' | 'clock'
  // Theme
  | 'sun' | 'moon' | 'palette'
  // Status
  | 'info' | 'warning' | 'error' | 'success' | 'question' | 'check'
  // Education
  | 'book' | 'graduation' | 'trophy' | 'target' | 'chart'
  // Media
  | 'play' | 'pause' | 'stop' | 'skip-forward' | 'skip-back'
  | 'volume' | 'volume-off' | 'maximize' | 'minimize'
  // Data
  | 'filter' | 'sort' | 'grid' | 'list'
  | 'folder' | 'folder-open' | 'file' | 'image'
  | 'code' | 'terminal' | 'database' | 'server' | 'cloud'
  // Connectivity
  | 'wifi' | 'wifi-off' | 'bluetooth'
  // Communication
  | 'send' | 'mail' | 'message' | 'phone' | 'video'
  | 'camera' | 'mic' | 'mic-off' | 'share'
  // Auth
  | 'logout' | 'login';
```

### IconColor (22 valeurs)

```typescript
type IconColor =
  // Semantic
  | 'current'   // currentColor (hérite du parent)
  | 'text'      // var(--color-text)
  | 'muted'     // var(--color-text-muted)
  | 'primary'   // var(--color-primary)
  | 'success'   // var(--color-success)
  | 'warning'   // var(--color-warning)
  | 'error'     // var(--color-error)
  | 'info'      // var(--color-info)
  // Catppuccin direct
  | 'rosewater' | 'flamingo' | 'pink' | 'mauve'
  | 'red' | 'maroon' | 'peach' | 'yellow'
  | 'green' | 'teal' | 'sky' | 'sapphire'
  | 'blue' | 'lavender';
```

### Tailles Autorisées

| Taille | Usage |
|--------|-------|
| 16px | Inline text, badges, petits boutons |
| 20px | Boutons moyens, navigation mobile |
| 24px | Défaut, boutons principaux, headers |

---

## 3. Relations

```
┌─────────────────────────────────────────────────────────────┐
│                    CSS Custom Properties                     │
│  (theme.css)                                                │
├─────────────────────────────────────────────────────────────┤
│  --ctp-{color}        →  IconColor mapping                  │
│  --color-{semantic}   →  IconColor semantic mapping         │
│  --cursor-{type}      →  Cursor definitions                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    React Components                          │
├─────────────────────────────────────────────────────────────┤
│  Icon.tsx             →  Uses colorMap[color] → CSS var     │
│  Button.tsx           →  Contains <Icon> with aria-label    │
│  Card.tsx             →  Contains <Icon> decorative         │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Browser Rendering                         │
├─────────────────────────────────────────────────────────────┤
│  cursor: var(--cursor-pointer)  →  SVG data URI             │
│  stroke: var(--ctp-mauve)       →  Theme color              │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Validation Rules

### Curseurs

- ✅ Tous les curseurs DOIVENT avoir un fallback CSS natif
- ✅ Les hotspots DOIVENT être dans les limites de l'image (0-23)
- ✅ Les SVG DOIVENT être URL-encoded dans les data URIs

### Icônes

- ✅ Toutes les icônes DOIVENT utiliser les paths définis dans `iconPaths`
- ✅ Les couleurs DOIVENT provenir de `IconColor` (pas de hex hardcodé)
- ✅ Les tailles DOIVENT être 16, 20, ou 24px (ou custom pour cas spéciaux)
- ✅ `strokeWidth` DOIT être 2 par défaut pour cohérence
- ✅ `aria-hidden="true"` est appliqué par défaut

### Accessibilité

- ✅ Icônes interactives (boutons) DOIVENT avoir un `aria-label` sur le parent
- ✅ Icônes décoratives DOIVENT rester `aria-hidden`
- ✅ L'information NE DOIT PAS être transmise uniquement par la couleur

---

## 5. Extension Points

### Ajouter une nouvelle icône

1. Ajouter le nom au type `IconName`
2. Ajouter le path SVG dans `iconPaths`
3. Si remplie (non stroke), ajouter au tableau `filledIcons`

### Ajouter une nouvelle couleur

1. Ajouter au type `IconColor`
2. Ajouter le mapping dans `colorMap` avec la CSS variable correspondante

### Ajouter un nouveau curseur

1. Créer le SVG 24x24px
2. URL-encoder le SVG
3. Ajouter la CSS custom property avec hotspot et fallback
4. Ajouter le sélecteur CSS pour les éléments concernés
