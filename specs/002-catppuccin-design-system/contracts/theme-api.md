# API Contract: Theme Preferences

**Date**: 2026-01-22
**Feature**: 002-catppuccin-design-system

## Endpoints

### GET /api/user/preferences

Récupère les préférences utilisateur (dont le thème).

**Auth**: Required (session)

**Response 200**:
```json
{
  "themePreference": "mocha"
}
```

**Response 401**: Non authentifié

---

### PATCH /api/user/preferences

Met à jour les préférences utilisateur.

**Auth**: Required (session)

**Request Body**:
```json
{
  "themePreference": "latte"
}
```

**Validation**:
- `themePreference`: enum `["latte", "frappe", "macchiato", "mocha"]`

**Response 200**:
```json
{
  "themePreference": "latte"
}
```

**Response 400**: Validation error
```json
{
  "error": "Invalid theme preference",
  "validValues": ["latte", "frappe", "macchiato", "mocha"]
}
```

**Response 401**: Non authentifié

---

## Flux d'utilisation

### Chargement initial (page load)

```
1. Script inline lit localStorage('dowze-academy-theme')
2. Applique data-theme immédiatement (avant paint)
3. React hydrate, ThemeProvider initialise
4. Si session active:
   a. GET /api/user/preferences
   b. Si différent de localStorage: appliquer préférence DB
   c. Sync localStorage
```

### Changement de thème

```
1. User clique sur thème dans sélecteur
2. Appliquer immédiatement (data-theme + CSS)
3. Sauvegarder localStorage
4. Si session active:
   a. Debounce 300ms
   b. PATCH /api/user/preferences
```

### Connexion utilisateur

```
1. Auth success
2. GET /api/user/preferences
3. Si themePreference DB != localStorage:
   a. Appliquer thème DB (prioritaire)
   b. Sync localStorage
```

---

## Rate Limiting

- PATCH /api/user/preferences: Max 10 requests/minute per user
- Debounce côté client (300ms) réduit naturellement le volume

---

## Erreurs

| Code | Description | Action client |
|------|-------------|---------------|
| 400 | Thème invalide | Afficher erreur, ne pas appliquer |
| 401 | Non authentifié | Ignorer sync, localStorage only |
| 429 | Rate limited | Retry après délai |
| 500 | Erreur serveur | Ignorer, localStorage continue à fonctionner |
