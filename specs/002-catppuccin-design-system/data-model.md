# Data Model: Catppuccin Design System

**Date**: 2026-01-22
**Feature**: 002-catppuccin-design-system

## Modifications au Schéma Existant

### User Model Extension

Le modèle `User` existant doit être étendu avec un champ pour la préférence de thème.

```prisma
model User {
  id              String   @id @default(uuid())
  email           String   @unique @db.VarChar(255)
  name            String?  @db.VarChar(100)
  passwordHash    String   @db.VarChar(255)
  themePreference String   @default("mocha") @db.VarChar(20)  // NEW
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  progressions UserProgression[]
}
```

**Nouveau champ**:
| Champ | Type | Default | Description |
|-------|------|---------|-------------|
| `themePreference` | String(20) | "mocha" | Nom du thème Catppuccin choisi |

**Valeurs valides**: `latte`, `frappe`, `macchiato`, `mocha`

**Validation**: Le service doit valider que la valeur fait partie des thèmes supportés.

---

## Entités Logiques (Non-DB)

### Theme

Représentation TypeScript d'un thème (déjà existant dans `catppuccin.ts`).

```typescript
interface Theme {
  name: ThemeName;        // 'latte' | 'frappe' | 'macchiato' | 'mocha'
  label: string;          // Display name
  isDark: boolean;        // For system preference matching
  colors: ThemeColors;    // Full color palette
}
```

### ThemeColors

Les 26 couleurs Catppuccin (14 accents + 12 neutres).

```typescript
interface ThemeColors {
  // Accents
  rosewater: string;
  flamingo: string;
  pink: string;
  mauve: string;
  red: string;
  maroon: string;
  peach: string;
  yellow: string;
  green: string;
  teal: string;
  sky: string;
  sapphire: string;
  blue: string;
  lavender: string;

  // Neutres
  text: string;
  subtext1: string;
  subtext0: string;
  overlay2: string;
  overlay1: string;
  overlay0: string;
  surface2: string;
  surface1: string;
  surface0: string;
  base: string;
  mantle: string;
  crust: string;
}
```

---

## Design Tokens (Rôles UI)

Mapping sémantique des couleurs vers des rôles UI.

| Token | Couleur Catppuccin | Usage |
|-------|-------------------|-------|
| `--color-bg` | base | Fond principal de page |
| `--color-bg-secondary` | mantle | Conteneurs, sidebars |
| `--color-bg-tertiary` | surface0 | Cards, sections élevées |
| `--color-bg-elevated` | surface0 | Modals, dropdowns |
| `--color-text` | text | Texte principal |
| `--color-text-secondary` | subtext1 | Texte secondaire |
| `--color-text-muted` | subtext0 | Texte atténué, placeholders |
| `--color-border` | surface2 | Bordures standard |
| `--color-border-light` | surface1 | Bordures légères |
| `--color-primary` | mauve | Action principale |
| `--color-primary-hover` | lavender | Hover sur action principale |
| `--color-success` | green | Succès, validation |
| `--color-warning` | yellow | Avertissement |
| `--color-error` | red | Erreur |
| `--color-info` | blue | Information |

---

## Migration Database

### Migration Prisma

```sql
-- AlterTable
ALTER TABLE "User" ADD COLUMN "themePreference" VARCHAR(20) NOT NULL DEFAULT 'mocha';
```

### Script de migration

Aucune migration de données nécessaire - les utilisateurs existants auront le thème par défaut "mocha".

---

## Invariants

1. `themePreference` DOIT toujours contenir une valeur valide (`latte`, `frappe`, `macchiato`, `mocha`)
2. La valeur par défaut "mocha" est appliquée au niveau DB et application
3. Aucune table supplémentaire n'est créée - extension du modèle User uniquement
