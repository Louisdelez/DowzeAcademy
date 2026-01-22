# Research: Curseurs et Icônes Catppuccin

**Feature**: 003-catppuccin-cursors-icons
**Date**: 2026-01-22
**Status**: Completed

## Contexte

Cette feature vise à compléter et harmoniser l'intégration des curseurs et icônes Catppuccin dans l'application. Les fondations existent déjà (cursors.css et Icon.tsx), ce document résume les décisions et recherches effectuées.

---

## 1. Curseurs CSS Catppuccin

### 1.1 État Actuel

Le fichier `src/lib/theme/cursors/cursors.css` implémente déjà:

| Curseur | État | Description |
|---------|------|-------------|
| default | ✅ Implémenté | Flèche Catppuccin |
| pointer | ✅ Implémenté | Main pointant |
| text | ✅ Implémenté | I-beam pour texte |
| grab | ✅ Implémenté | Main ouverte |
| grabbing | ✅ Implémenté | Main fermée |
| not-allowed | ✅ Implémenté | Cercle barré (rouge) |
| wait | ✅ Implémenté | Horloge |
| progress | ✅ Implémenté | Flèche + spinner |
| crosshair | ✅ Implémenté | Réticule |
| zoom-in/out | ✅ Implémenté | Loupe +/- |
| help | ✅ Implémenté | Flèche + point interrogation |

### 1.2 Thèmes Supportés

- **Mocha** (dark): Couleurs par défaut (`#cdd6f4` texte, `#1e1e2e` base)
- **Latte** (light): Couleurs inversées (`#4c4f69` texte, `#eff1f5` base)

**Decision**: Mocha et Latte couvrent les cas d'usage principaux (dark/light). Frappé et Macchiato utilisent des couleurs intermédiaires qui fonctionnent avec les curseurs Mocha.

**Rationale**: Les curseurs sont petits (24x24px), les différences subtiles entre Frappé/Macchiato et Mocha ne sont pas perceptibles à cette échelle.

### 1.3 Implémentation Technique

**Decision**: SVG inline via data URI dans les CSS custom properties

**Rationale**:
- Pas de requêtes HTTP supplémentaires
- Support natif de tous les navigateurs modernes
- Fallback automatique (syntaxe `url(...), pointer`)
- Adaptation au thème via sélecteur `[data-theme]`

**Alternatives rejetées**:
- Fichiers .cur/.ani: Non supportés sur macOS/Linux
- PNG: Non scalable, pixelisé sur écrans haute densité
- Sprites: Complexité inutile pour les curseurs

---

## 2. Système d'Icônes

### 2.1 État Actuel

Le composant `src/components/icons/Icon.tsx` implémente:

- **88 icônes** avec paths SVG
- **Tailles**: 16px, 20px, 24px (via prop `size`)
- **Couleurs**: 22 options via tokens Catppuccin
- **Style**: Stroke uniforme, ligne arrondie, sans remplissage

### 2.2 Catégories d'Icônes

| Catégorie | Icônes | Usage |
|-----------|--------|-------|
| Navigation | home, menu, chevron-*, arrow-* | Menus, breadcrumbs |
| Actions | edit, trash, copy, save, download | CRUD, boutons |
| État | check, close, info, warning, error, success | Feedback |
| Média | play, pause, volume, camera, mic | Lecteur |
| Communication | mail, message, send, share | Partage |
| Données | folder, file, database, server | Admin |
| UI | sun, moon, palette, eye, lock | Settings |
| Éducation | book, graduation, trophy, target | Learner |

### 2.3 Couleurs Sémantiques

**Decision**: Utiliser les tokens Catppuccin via CSS custom properties

| Contexte | Couleur | Token |
|----------|---------|-------|
| Default | text | `var(--color-text)` |
| Muted | subtext | `var(--color-text-muted)` |
| Hover/Active | mauve | `var(--ctp-mauve)` |
| Success | green | `var(--ctp-green)` |
| Warning | yellow | `var(--ctp-yellow)` |
| Error | red | `var(--ctp-red)` |
| Info | blue | `var(--ctp-blue)` |

**Rationale**: Adaptation automatique à tous les thèmes Catppuccin sans modification du code.

### 2.4 Accessibilité

**Decision**: `aria-hidden="true"` par défaut sur le composant Icon

**Rationale**: Les icônes sont décoratives dans la majorité des cas. Les composants parents (Button, Link) doivent fournir le texte accessible via:
- Texte visible adjacent
- `aria-label` sur le parent
- `<span className="sr-only">` pour texte screen-reader only

---

## 3. Audit des Usages Existants

### 3.1 Composants UI

| Composant | Icônes utilisées | Conformité |
|-----------|------------------|------------|
| Button | Aucune par défaut | ✅ OK |
| Badge | Aucune | ✅ OK |
| Toast | À vérifier | ⚠️ À auditer |
| Modal | close | ✅ OK |
| Tooltip | Aucune | ✅ OK |
| ThemeSwitcher | sun, moon | ✅ OK |

### 3.2 Composants Cards

| Composant | Icônes utilisées | Conformité |
|-----------|------------------|------------|
| DomainCard | À vérifier | ⚠️ À auditer |
| PackCard | À vérifier | ⚠️ À auditer |
| DisciplineCard | À vérifier | ⚠️ À auditer |
| ModuleCard | lock, check | ⚠️ À auditer |

### 3.3 Composants Admin

| Composant | Icônes utilisées | Conformité |
|-----------|------------------|------------|
| LessonEditor | edit, save, trash | ⚠️ À auditer |
| QuizQuestionEditor | plus, trash | ⚠️ À auditer |
| PublishButton | À vérifier | ⚠️ À auditer |

### 3.4 Navigation

| Composant | Icônes utilisées | Conformité |
|-----------|------------------|------------|
| BottomNav | home, user, book, settings | ⚠️ À auditer |
| Breadcrumb | chevron-right | ✅ OK |

---

## 4. Tâches Identifiées

### Phase 1: Curseurs
1. ✅ Vérifier le bon fonctionnement sur Latte/Mocha
2. 🔲 Tester sur Frappé/Macchiato (devrait fonctionner)
3. 🔲 Vérifier les fallbacks navigateurs

### Phase 2: Icônes - Audit
4. 🔲 Auditer tous les composants UI pour conformité Icon
5. 🔲 Auditer tous les composants Cards
6. 🔲 Auditer tous les composants Admin
7. 🔲 Auditer composants Navigation
8. 🔲 Auditer composants Lesson

### Phase 3: Corrections
9. 🔲 Remplacer icônes SVG inline par composant Icon
10. 🔲 Ajouter aria-label sur icônes de boutons
11. 🔲 Standardiser les couleurs sémantiques

### Phase 4: QA
12. 🔲 Test visuel sur les 4 thèmes
13. 🔲 Test accessibilité screen reader
14. 🔲 Supprimer assets legacy s'il en reste

---

## 5. Risques et Mitigations

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Curseurs non supportés sur navigateur ancien | Faible | Faible | Fallback CSS natif |
| Icône manquante dans le set | Moyenne | Faible | Ajouter au composant Icon |
| Incohérence couleur entre composants | Moyenne | Moyenne | Audit systématique |
| Accessibilité insuffisante | Moyenne | Élevé | Audit aria-label |

---

## 6. Conclusion

Les fondations sont solides. Le travail restant est principalement:
1. **Audit**: Vérifier que tous les composants utilisent le système unifié
2. **Harmonisation**: Corriger les incohérences trouvées
3. **QA**: Valider sur tous les thèmes et avec screen reader

Aucune décision architecturale majeure n'est nécessaire - le système est déjà en place.
