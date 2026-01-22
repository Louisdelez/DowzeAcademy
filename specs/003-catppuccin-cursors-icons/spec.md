# Feature Specification: Intégration des Curseurs et Icônes Catppuccin

**Feature Branch**: `003-catppuccin-cursors-icons`
**Created**: 2026-01-22
**Status**: Draft
**Input**: User description: "Intégration complète de curseurs et d'icônes Catppuccin pour renforcer l'identité visuelle"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Curseurs Catppuccin dans l'Application (Priority: P1)

En tant qu'utilisateur de l'application, je vois des curseurs personnalisés cohérents avec le style Catppuccin lorsque j'interagis avec l'interface, ce qui renforce l'identité visuelle de l'application.

**Why this priority**: Les curseurs sont visibles en permanence et contribuent immédiatement à l'expérience utilisateur. C'est le premier élément visible de l'identité visuelle.

**Independent Test**: Naviguer sur n'importe quelle page et vérifier que le curseur change selon le contexte (default, pointer sur liens/boutons, text sur inputs, not-allowed sur éléments désactivés).

**Acceptance Scenarios**:

1. **Given** je suis sur n'importe quelle page, **When** je déplace la souris sur une zone neutre, **Then** je vois le curseur default Catppuccin
2. **Given** je suis sur une page avec des boutons, **When** je survole un bouton actif, **Then** le curseur change vers pointer Catppuccin
3. **Given** je suis sur une page avec un champ texte, **When** je survole le champ, **Then** le curseur change vers text Catppuccin
4. **Given** je suis sur une page avec un élément désactivé, **When** je survole cet élément, **Then** le curseur change vers not-allowed Catppuccin
5. **Given** je suis sur une page en chargement, **When** une opération est en cours, **Then** le curseur affiche l'état wait/loading Catppuccin

---

### User Story 2 - Icônes Harmonisées dans l'Interface Learner (Priority: P2)

En tant qu'apprenant, je vois des icônes cohérentes et harmonisées sur toutes les pages learner (navigation, progression, leçons), utilisant le style Catppuccin avec les couleurs appropriées selon le contexte.

**Why this priority**: L'interface learner est la plus utilisée. Des icônes cohérentes améliorent la lisibilité et l'expérience d'apprentissage.

**Independent Test**: Naviguer de la page d'accueil vers un module et vérifier que toutes les icônes suivent le même style visuel et utilisent les couleurs Catppuccin appropriées.

**Acceptance Scenarios**:

1. **Given** je suis sur la page d'accueil learner, **When** je regarde les icônes de navigation, **Then** elles sont toutes du même style (stroke uniforme, lignes arrondies)
2. **Given** je suis sur une page de progression, **When** je vois les statuts (succès, erreur), **Then** les icônes utilisent les couleurs sémantiques Catppuccin (green pour succès, red pour erreur)
3. **Given** je suis sur une page de module, **When** je survole une icône d'action, **Then** la couleur change vers l'accent mauve Catppuccin
4. **Given** je suis sur une page avec des icônes interactives, **When** je les inspecte, **Then** elles ont toutes un aria-label approprié

---

### User Story 3 - Icônes Harmonisées dans l'Interface Admin (Priority: P3)

En tant qu'administrateur, je vois des icônes cohérentes avec l'interface learner sur toutes les pages admin (sidebar, tables CRUD, éditeurs), garantissant une identité visuelle unifiée.

**Why this priority**: L'admin doit partager la même identité visuelle que le learner pour une cohérence globale de l'application.

**Independent Test**: Accéder au dashboard admin et naviguer dans les différentes sections pour vérifier que les icônes suivent le même style que l'interface learner.

**Acceptance Scenarios**:

1. **Given** je suis sur le dashboard admin, **When** je regarde la sidebar, **Then** les icônes sont identiques en style à celles de l'interface learner
2. **Given** je suis sur une table CRUD, **When** je vois les actions (edit, delete), **Then** les icônes utilisent les couleurs appropriées (delete en red)
3. **Given** je suis sur l'éditeur de leçon, **When** je vois les icônes d'outils, **Then** elles sont cohérentes avec le reste de l'application

---

### User Story 4 - Accessibilité des Icônes (Priority: P4)

En tant qu'utilisateur utilisant des technologies d'assistance, je peux comprendre la signification de toutes les icônes grâce aux labels accessibles et aux couleurs qui ne sont pas le seul moyen de transmettre l'information.

**Why this priority**: L'accessibilité est essentielle mais vient après l'implémentation de base des icônes.

**Independent Test**: Utiliser un lecteur d'écran et naviguer sur les pages pour vérifier que toutes les icônes interactives sont annoncées correctement.

**Acceptance Scenarios**:

1. **Given** j'utilise un lecteur d'écran, **When** je navigue sur une icône de bouton, **Then** son aria-label est annoncé
2. **Given** je vois une icône de statut (succès/erreur), **When** je l'inspecte, **Then** l'information est aussi transmise par du texte ou un label, pas uniquement la couleur

---

### Edge Cases

- Que se passe-t-il si le navigateur ne supporte pas les curseurs personnalisés ? → Fallback automatique vers les curseurs natifs
- Que se passe-t-il si une icône n'existe pas dans le set ? → Afficher une icône par défaut générique
- Comment gérer les tailles d'icônes non standard ? → Rejeter et utiliser la taille la plus proche (16px, 20px, ou 24px)
- Que se passe-t-il sur les appareils tactiles ? → Les curseurs ne s'appliquent pas, comportement natif
- Comment gérer les thèmes Catppuccin différents (Latte vs Mocha) ? → Les curseurs et icônes s'adaptent automatiquement au thème actif

## Requirements *(mandatory)*

### Functional Requirements

**Curseurs:**
- **FR-001**: Le système DOIT afficher un curseur default Catppuccin sur toutes les zones neutres
- **FR-002**: Le système DOIT afficher un curseur pointer Catppuccin sur les éléments cliquables (liens, boutons)
- **FR-003**: Le système DOIT afficher un curseur text Catppuccin sur les champs de saisie
- **FR-004**: Le système DOIT afficher un curseur not-allowed Catppuccin sur les éléments désactivés
- **FR-005**: Le système DOIT afficher un curseur wait Catppuccin pendant les opérations de chargement
- **FR-006**: Le système DOIT fournir un fallback vers les curseurs natifs si les curseurs personnalisés ne sont pas supportés
- **FR-007**: Les curseurs DOIVENT s'adapter au thème Catppuccin actif (couleurs différentes pour Latte vs Mocha)

**Icônes:**
- **FR-008**: Le système DOIT utiliser un set unique d'icônes avec un style uniforme (stroke, lignes arrondies)
- **FR-009**: Les icônes DOIVENT exister uniquement en tailles 16px, 20px, et 24px
- **FR-010**: Les icônes DOIVENT utiliser les couleurs des tokens Catppuccin (aucune couleur codée en dur)
- **FR-011**: Les icônes de statut DOIVENT utiliser les couleurs sémantiques : green (succès), yellow (warning), red (erreur), blue/teal (info)
- **FR-012**: Les icônes DOIVENT supporter les états : default, hover, active, disabled
- **FR-013**: Les icônes d'action DOIVENT être accompagnées d'un label ou tooltip
- **FR-014**: Les icônes interactives DOIVENT avoir un aria-label approprié

**Intégration:**
- **FR-015**: Les icônes et curseurs DOIVENT être cohérents entre l'interface learner et admin
- **FR-016**: Le système DOIT supprimer tous les assets legacy non conformes après migration
- **FR-017**: Aucune icône ou image hors du set validé ne DOIT subsister dans l'application

### Key Entities

- **Cursor**: Type de curseur (default, pointer, text, not-allowed, wait), couleur selon thème, format SVG
- **Icon**: Nom, taille (16/20/24), couleur (token Catppuccin), état (default/hover/active/disabled)
- **IconSet**: Collection d'icônes validées, style uniforme, règles d'usage

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% des éléments interactifs affichent le curseur approprié selon leur type
- **SC-002**: 100% des icônes de l'application utilisent le set d'icônes Catppuccin unifié
- **SC-003**: 0 asset legacy (icônes ou images non conformes) reste dans l'application après migration
- **SC-004**: 100% des icônes interactives ont un aria-label ou texte associé
- **SC-005**: Les curseurs et icônes s'adaptent correctement aux 4 thèmes Catppuccin (Latte, Frappé, Macchiato, Mocha)
- **SC-006**: Aucun utilisateur ne rapporte d'incohérence visuelle entre les sections learner et admin
- **SC-007**: Les utilisateurs avec des technologies d'assistance peuvent comprendre 100% des icônes interactives

## Assumptions

- Le système de thèmes Catppuccin (feature 002) est déjà implémenté et fonctionnel
- Les curseurs CSS sont supportés par tous les navigateurs modernes ciblés (Chrome, Firefox, Safari, Edge)
- Les appareils tactiles n'affichent pas de curseur (comportement natif)
- Le style d'icône choisi est : lignes arrondies, stroke uniforme de 2px, sans remplissage par défaut
- Les couleurs de curseur par défaut sont : text (--ctp-text) pour le corps, base (--ctp-base) pour le contour

## Out of Scope

- Aucun contrôle du curseur système (OS)
- Aucun changement de logique produit ou fonctionnalités métier
- Aucun support hors navigateur (applications desktop/mobile natives)
- Aucun thème d'icônes personnalisé hors Catppuccin
- Animation des curseurs ou icônes (peut être ajouté dans une future itération)

## Dependencies

- **Feature 002**: Catppuccin Design System (thèmes et tokens CSS)
- Tokens CSS Catppuccin existants (--ctp-*, --color-*)
