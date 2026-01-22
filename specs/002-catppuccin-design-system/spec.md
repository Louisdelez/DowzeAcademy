# Feature Specification: Refonte UI/UX Intégrale Catppuccin

**Feature Branch**: `002-catppuccin-design-system`
**Created**: 2026-01-22
**Status**: Draft
**Input**: User description: "Refonte graphique et ergonomique complète de l'application basée sur Catppuccin"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Sélection et Persistance du Thème (Priority: P1)

Un utilisateur connecté souhaite personnaliser l'apparence de l'application en choisissant parmi les 4 thèmes Catppuccin disponibles (Latte, Frappé, Macchiato, Mocha). Le thème choisi doit être immédiatement appliqué et conservé entre les sessions.

**Why this priority**: L'expérience utilisateur personnalisable est au coeur de cette feature. Sans la possibilité de changer et persister le thème, la refonte n'a pas de valeur pour l'utilisateur.

**Independent Test**: Peut être testé indépendamment en vérifiant qu'un utilisateur peut sélectionner un thème et le retrouver après déconnexion/reconnexion.

**Acceptance Scenarios**:

1. **Given** un utilisateur connecté sur la page profil, **When** il sélectionne le thème "Latte", **Then** l'interface passe instantanément au thème clair Latte
2. **Given** un utilisateur ayant choisi le thème "Mocha", **When** il se déconnecte puis se reconnecte, **Then** le thème Mocha est automatiquement appliqué
3. **Given** un nouvel utilisateur sans préférence enregistrée, **When** il accède à l'application, **Then** le thème par défaut (Mocha) est appliqué sans flash visuel
4. **Given** un utilisateur non connecté, **When** il change de thème, **Then** le choix est conservé localement jusqu'à sa prochaine visite

---

### User Story 2 - Interface Learner Cohérente (Priority: P2)

Un apprenant parcourt l'application (domaines, packs, modules, leçons) avec une interface visuellement cohérente utilisant exclusivement les couleurs Catppuccin, offrant une expérience moderne et agréable.

**Why this priority**: L'interface learner est le coeur de l'application et doit refléter la nouvelle identité visuelle pour que la refonte soit perçue par les utilisateurs principaux.

**Independent Test**: Peut être testé en naviguant dans l'application learner et vérifiant que tous les composants utilisent les couleurs du thème actif.

**Acceptance Scenarios**:

1. **Given** un apprenant sur la page d'accueil, **When** il navigue vers un domaine, **Then** toutes les cartes, textes et éléments interactifs utilisent les couleurs Catppuccin du thème actif
2. **Given** un apprenant dans un module de théorie, **When** il lit le contenu, **Then** la typographie et les couleurs offrent un contraste lisible et agréable
3. **Given** un apprenant passant un quiz, **When** il sélectionne une réponse, **Then** les états (sélectionné, correct, incorrect) utilisent les couleurs d'accent Catppuccin appropriées

---

### User Story 3 - Interface Admin Cohérente (Priority: P3)

Un administrateur gère le contenu pédagogique via une interface admin utilisant le même design system Catppuccin, garantissant une cohérence visuelle entre toutes les parties de l'application.

**Why this priority**: L'interface admin est utilisée par moins d'utilisateurs mais doit partager le même langage visuel pour une expérience produit unifiée.

**Independent Test**: Peut être testé en accédant à l'interface admin et vérifiant que tous les composants (tables, formulaires, sidebar) respectent le thème.

**Acceptance Scenarios**:

1. **Given** un admin sur le dashboard, **When** il consulte une table de données, **Then** les lignes, headers et actions utilisent les couleurs Catppuccin
2. **Given** un admin éditant une leçon, **When** il utilise le formulaire, **Then** les champs, boutons et messages utilisent le design system partagé
3. **Given** un admin avec un avertissement de données obsolètes, **When** le warning s'affiche, **Then** il utilise la couleur d'avertissement Catppuccin (yellow)

---

### User Story 4 - Accessibilité et Lisibilité (Priority: P4)

Tous les utilisateurs, y compris ceux avec des sensibilités visuelles, peuvent utiliser l'application confortablement grâce aux options de thème clair (Latte) et sombre (Mocha), avec des contrastes appropriés.

**Why this priority**: L'accessibilité est essentielle mais dépend de l'implémentation correcte des thèmes (P1-P3).

**Independent Test**: Peut être testé avec des outils d'audit d'accessibilité sur chaque thème.

**Acceptance Scenarios**:

1. **Given** le thème Latte actif, **When** un utilisateur lit le texte principal, **Then** le ratio de contraste respecte les normes WCAG AA
2. **Given** le thème Mocha actif, **When** un utilisateur navigue avec le clavier, **Then** les états focus sont clairement visibles
3. **Given** un composant désactivé, **When** l'utilisateur le survole, **Then** l'état disabled est visuellement distinct

---

### Edge Cases

- Que se passe-t-il si le localStorage est indisponible ? Le système utilise le thème par défaut sans erreur
- Comment le système gère-t-il un thème invalide stocké en base ? Il revient au thème par défaut (Mocha)
- Que se passe-t-il si l'utilisateur change de thème pendant un chargement ? Le nouveau thème est appliqué dès que possible
- Comment éviter le flash de thème incorrect au chargement initial ? Le thème est injecté avant le premier rendu via un script inline
- Que se passe-t-il si le thème localStorage diffère du thème en base à la connexion ? Le thème en base de données est prioritaire et écrase le localStorage

## Requirements *(mandatory)*

### Functional Requirements

#### Système de Thèmes
- **FR-001**: Le système DOIT exposer exactement 4 thèmes Catppuccin : Latte (clair), Frappé (sombre doux), Macchiato (sombre intermédiaire), Mocha (sombre profond)
- **FR-002**: Chaque thème DOIT exposer l'intégralité de la palette Catppuccin (14 couleurs d'accent + 12 couleurs neutres)
- **FR-003**: Le système DOIT appliquer le thème instantanément sans rechargement de page
- **FR-004**: Le système DOIT éviter tout flash de thème incorrect au chargement initial

#### Persistance
- **FR-005**: Le système DOIT persister le thème choisi dans la base de données pour les utilisateurs connectés, avec synchronisation immédiate (debounce 300ms)
- **FR-006**: Le système DOIT utiliser le localStorage comme fallback pour les utilisateurs non connectés
- **FR-007**: Le système DOIT restaurer le thème de l'utilisateur depuis la base de données à sa connexion (priorité sur localStorage)

#### Sélecteur de Thème
- **FR-008**: Les utilisateurs DOIVENT pouvoir changer de thème depuis leur page profil
- **FR-009**: Le sélecteur DOIT afficher un aperçu visuel de chaque thème
- **FR-010**: Le changement de thème DOIT être reflété immédiatement dans toute l'interface

#### Design System
- **FR-011**: Tous les composants UI DOIVENT utiliser exclusivement les variables de couleur du design system
- **FR-012**: Aucune couleur ne DOIT être codée en dur dans les composants
- **FR-013**: Les rôles UI DOIVENT être définis sémantiquement (fond principal, texte, accent, succès, erreur, etc.)

#### Composants
- **FR-014**: Le design system DOIT inclure les composants suivants : Button, Card, Input, Select, Textarea, Badge, Tabs, Breadcrumb, Modal, Toast, Tooltip, Table, Skeleton
- **FR-015**: Tous les composants existants (learner et admin) DOIVENT être refondus pour utiliser le design system

#### Accessibilité
- **FR-016**: Le système DOIT garantir un contraste lisible sur tous les thèmes
- **FR-017**: Les états focus DOIVENT être clairement visibles
- **FR-018**: Les états disabled DOIVENT être visuellement distincts

### Key Entities

- **Theme**: Représente un thème Catppuccin avec son nom, sa palette de couleurs, et son indicateur clair/sombre
- **UserPreference**: Stocke la préférence de thème d'un utilisateur (lié à l'entité User existante)
- **DesignToken**: Définit un token de design (couleur, espacement, typographie) avec sa valeur par thème

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% des composants UI utilisent les variables du design system (aucun hardcode couleur)
- **SC-002**: Le changement de thème est perçu comme instantané par l'utilisateur (moins de 100ms)
- **SC-003**: Les 4 thèmes sont disponibles et fonctionnels sur toutes les pages
- **SC-004**: Le thème est conservé après refresh et reconnexion dans 100% des cas
- **SC-005**: Le ratio de contraste texte/fond respecte WCAG AA (4.5:1 minimum) sur tous les thèmes
- **SC-006**: Aucun flash de thème incorrect n'est visible au chargement (thème appliqué avant premier rendu)
- **SC-007**: L'interface learner et admin partage le même design system (0 composant dupliqué avec styles différents)

## Clarifications

### Session 2026-01-22

- Q: Quand un utilisateur connecté change de thème, à quel moment la préférence doit-elle être synchronisée avec la base de données ? → A: Immédiat avec debounce (300ms après dernier changement)
- Q: Si un utilisateur non connecté choisit un thème (localStorage), puis se connecte avec un compte ayant un thème différent en base, quel thème prend la priorité ? → A: Base de données prioritaire (restaurer le thème du compte)

## Assumptions

- La palette Catppuccin officielle est la source de vérité pour toutes les couleurs
- Le thème par défaut pour les nouveaux utilisateurs est Mocha (sombre profond)
- L'application utilise déjà un système de variables CSS qui peut être étendu
- Les composants existants peuvent être refondus sans impact sur leur comportement fonctionnel

## Out of Scope

- Aucun changement fonctionnel (quiz, progression, admin, APIs)
- Aucun redesign des flows pédagogiques
- Aucun thème personnalisé hors Catppuccin
- Aucun contrôle du curseur OS (hors navigateur)
- Curseur personnalisé in-app (reporté à une future itération)
