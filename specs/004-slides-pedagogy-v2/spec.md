# Feature Specification: Slides Pedagogy V2

**Feature Branch**: `004-slides-pedagogy-v2`
**Created**: 2026-01-22
**Status**: Draft
**Input**: Refonte complète de la structure pédagogique des leçons avec une expérience 100% basée sur des slides modernes (Théorie, Quiz, Pratique)

## Clarifications

### Session 2026-01-22

- Q: La navigation au clavier doit-elle être supportée ? → A: Oui, flèches gauche/droite + Entrée pour valider
- Q: Quelle durée pour les animations de transition entre slides ? → A: Rapide (200-300ms)

---

## Overview

Cette feature transforme l'expérience d'apprentissage de Dowze Academy en introduisant une navigation par slides pédagogiques pour les trois piliers : Théorie, Quiz et Pratique. L'objectif est de réduire la surcharge cognitive, améliorer la rétention et créer une expérience fluide de type "Duolingo-like".

### Problèmes Résolus

1. Trop d'informations concentrées sur un même écran
2. Quiz perçus comme lourds ou fatigants
3. Pratique insuffisamment guidée
4. Rétention long terme perfectible

### Principes Pédagogiques

- **Charge cognitive maîtrisée** : 1 slide = 1 idée principale
- **Apprentissage actif** : Retrieval practice et guidage étape par étape
- **Feedback immédiat** : Explication après chaque réponse de quiz
- **Rétention long terme** : Possibilité de revoir la théorie ciblée après erreur

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Navigation Théorie en Slides (Priority: P1)

En tant qu'apprenant, je veux parcourir la théorie d'un module sous forme de slides courtes et claires, afin de comprendre les concepts sans surcharge cognitive.

**Why this priority**: La théorie est le premier pilier de l'apprentissage. Sans une présentation claire et aérée, l'apprenant ne peut pas assimiler les concepts avant le quiz.

**Independent Test**: Naviguer dans un module et vérifier que la théorie s'affiche en slides individuelles avec navigation Suivant/Précédent et indicateur de progression.

**Acceptance Scenarios**:

1. **Given** un apprenant accède à un module, **When** il commence la théorie, **Then** il voit la première slide avec un titre court et un contenu limité (2-5 lignes ou 3-5 bullets)
2. **Given** un apprenant est sur une slide de théorie, **When** il clique sur "Suivant", **Then** il passe à la slide suivante avec animation fluide (200-300ms)
3. **Given** un apprenant est sur une slide (pas la première), **When** il clique sur "Précédent", **Then** il revient à la slide précédente
4. **Given** un apprenant navigue dans la théorie, **When** il regarde l'indicateur de progression, **Then** il voit sa position (ex: "4/9")
5. **Given** un apprenant atteint la dernière slide de théorie, **When** il clique sur "Suivant", **Then** il passe automatiquement au quiz

---

### User Story 2 - Quiz Une Question Par Slide (Priority: P1)

En tant qu'apprenant, je veux répondre aux questions du quiz une par une sur des slides individuelles avec feedback immédiat, afin de valider ma compréhension sans me sentir submergé.

**Why this priority**: Le quiz est essentiel pour valider la compréhension. Présenter une question à la fois avec feedback immédiat est au cœur de l'expérience pédagogique.

**Independent Test**: Répondre à un quiz complet en vérifiant qu'une seule question s'affiche par slide avec feedback après chaque réponse.

**Acceptance Scenarios**:

1. **Given** un apprenant commence le quiz, **When** la première question s'affiche, **Then** seule cette question est visible (aucune liste de questions)
2. **Given** un apprenant répond correctement, **When** il valide sa réponse, **Then** il voit un feedback positif avec une explication courte
3. **Given** un apprenant répond incorrectement, **When** il valide sa réponse, **Then** il voit la correction, une explication, et un lien vers la slide de théorie liée
4. **Given** un apprenant a vu le feedback, **When** il clique sur "Continuer", **Then** il passe à la question suivante
5. **Given** un apprenant termine toutes les questions, **When** le score est calculé, **Then** il voit son résultat avec le seuil de réussite (ex: 70%)

---

### User Story 3 - Pratique Guidée en Étapes (Priority: P2)

En tant qu'apprenant ayant réussi le quiz, je veux suivre la pratique sous forme d'étapes guidées progressives, afin de mettre en application mes connaissances de manière structurée.

**Why this priority**: La pratique consolide l'apprentissage mais n'est accessible qu'après le quiz. C'est une amélioration importante mais pas bloquante pour le MVP.

**Independent Test**: Compléter une pratique en vérifiant que chaque étape s'affiche sur une slide distincte avec un guidage clair du simple vers le complexe.

**Acceptance Scenarios**:

1. **Given** un apprenant a réussi le quiz, **When** il accède à la pratique, **Then** il voit la première slide "Brief" avec l'objectif concret
2. **Given** un apprenant est sur une slide de pratique, **When** il clique sur "Étape suivante", **Then** il passe à l'étape suivante
3. **Given** un apprenant est sur la dernière étape, **When** il la complète, **Then** il voit une slide d'auto-évaluation avec checklist
4. **Given** un apprenant termine l'auto-évaluation, **When** il valide, **Then** il voit l'écran de complétion avec suggestions "Next action"

---

### User Story 4 - Lien Théorie-Quiz Pour Révision (Priority: P2)

En tant qu'apprenant ayant fait une erreur au quiz, je veux pouvoir accéder directement à la slide de théorie correspondante, afin de comprendre mon erreur et réviser le concept.

**Why this priority**: Cette fonctionnalité améliore la rétention mais dépend de l'implémentation des liens entre questions et slides théoriques.

**Independent Test**: Faire une erreur au quiz et vérifier que le lien vers la théorie correspondante fonctionne et ramène à la bonne slide.

**Acceptance Scenarios**:

1. **Given** un apprenant fait une erreur au quiz, **When** le feedback s'affiche, **Then** un bouton "Revoir la théorie" est visible
2. **Given** un apprenant clique sur "Revoir la théorie", **When** la slide s'affiche, **Then** c'est la slide spécifiquement liée à cette question
3. **Given** un apprenant a revu la théorie, **When** il clique sur "Retour au quiz", **Then** il revient à la question où il était

---

### User Story 5 - Retry Quiz Avec Suggestions (Priority: P3)

En tant qu'apprenant ayant échoué au quiz, je veux recevoir un message motivant et des suggestions de slides à revoir, afin de mieux me préparer pour ma prochaine tentative.

**Why this priority**: Améliore l'expérience mais n'est pas critique pour le flux de base.

**Independent Test**: Échouer au quiz et vérifier que les suggestions de révision s'affichent avec un message motivant.

**Acceptance Scenarios**:

1. **Given** un apprenant échoue au quiz (score < seuil), **When** le résultat s'affiche, **Then** il voit un message motivant (pas culpabilisant)
2. **Given** un apprenant a échoué, **When** les suggestions s'affichent, **Then** les slides liées aux questions ratées sont mises en avant
3. **Given** un apprenant veut réessayer, **When** il clique sur "Réessayer", **Then** le quiz recommence depuis la première question

---

### Edge Cases

- **Slide vide** : Si une slide n'a pas de contenu, elle est automatiquement ignorée dans la navigation
- **Quiz sans questions** : Afficher un message d'erreur et permettre de passer directement à la pratique
- **Pratique sans étapes** : Afficher les instructions en une seule slide avec bouton de complétion
- **Connexion perdue** : Sauvegarder la progression locale et synchroniser à la reconnexion
- **Navigation arrière depuis quiz** : Permettre de revoir la théorie sans perdre les réponses données
- **Slide théorie trop longue** : L'admin est averti lors de la création que la slide dépasse les limites recommandées

---

## Requirements *(mandatory)*

### Functional Requirements

#### Théorie (Theory Deck)

- **FR-001**: Le système DOIT afficher la théorie sous forme de slides individuelles navigables
- **FR-002**: Chaque slide DOIT avoir un titre court obligatoire
- **FR-003**: Chaque slide DOIT respecter la limite de densité : 2-5 lignes ou 3-5 bullets maximum
- **FR-004**: Le système DOIT afficher un indicateur de progression (ex: "4/9")
- **FR-005**: L'apprenant DOIT pouvoir naviguer avec les boutons Suivant/Précédent
- **FR-005b**: L'apprenant DOIT pouvoir naviguer au clavier (flèches gauche/droite) et valider avec Entrée
- **FR-006**: Le système DOIT supporter les types de slides : Concept clé, Pourquoi important, Exemple, Erreurs fréquentes, Mini-récap

#### Quiz (Quiz Deck)

- **FR-007**: Le système DOIT afficher strictement 1 question par slide
- **FR-008**: Le système DOIT afficher un feedback immédiat après chaque réponse
- **FR-009**: Le feedback DOIT inclure : correcte/incorrecte, explication courte, lien vers théorie (si erreur)
- **FR-010**: Le système DOIT supporter les types de questions : Choix unique, Choix multiple, Texte court
- **FR-011**: Le système DOIT calculer le score et comparer au seuil de réussite (défaut: 70%)
- **FR-012**: En cas d'échec, le système DOIT afficher un message motivant et suggérer les slides à revoir

#### Pratique (Practice Deck)

- **FR-013**: Le système DOIT afficher la pratique sous forme de slides d'étapes progressives
- **FR-014**: Chaque slide de pratique DOIT représenter une étape claire et actionnable
- **FR-015**: Le système DOIT supporter les types de pratique : IN_GAME, EXERCICES, PROJET, AUTO_EVALUATION
- **FR-016**: La dernière slide DOIT proposer une auto-évaluation (checklist)
- **FR-017**: Le système DOIT afficher une slide "Next action" après complétion

#### Navigation et Progression

- **FR-018**: Le système DOIT persister la progression de l'apprenant à chaque slide
- **FR-019**: Le système DOIT permettre de reprendre là où l'apprenant s'est arrêté
- **FR-020**: Le système DOIT bloquer l'accès au quiz tant que la théorie n'est pas terminée
- **FR-021**: Le système DOIT bloquer l'accès à la pratique tant que le quiz n'est pas réussi

### Key Entities

- **TheorySlide**: Représente une slide de théorie avec type (concept, example, recap...), titre, contenu, ordre
- **QuizQuestion**: Question de quiz liée à une ou plusieurs TheorySlides pour le feedback ciblé
- **PracticeStep**: Étape de pratique avec type (brief, setup, step, evaluation, next-action), titre, contenu, ordre
- **LessonProgress**: Progression de l'apprenant incluant théorie complétée, réponses quiz, pratique complétée

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% des leçons sont navigables uniquement via des slides (aucun écran "mur de texte")
- **SC-002**: Les apprenants complètent la théorie 30% plus rapidement qu'avec l'ancien format
- **SC-003**: Le taux de réussite au premier essai du quiz augmente de 20%
- **SC-004**: 90% des apprenants qui font une erreur consultent le lien "Revoir la théorie"
- **SC-005**: Le temps moyen par slide de théorie est inférieur à 30 secondes (contenu digeste)
- **SC-006**: 95% des apprenants qui échouent au quiz réessaient (message motivant efficace)
- **SC-007**: Le taux de complétion des modules augmente de 25%

---

## Scope Boundaries

### In Scope

- Navigation par slides pour Théorie, Quiz et Pratique
- Feedback immédiat sur les réponses de quiz
- Lien entre questions de quiz et slides de théorie
- Indicateurs de progression visuels
- Persistance de la progression
- Types de slides et templates définis
- Limite de densité par slide

### Out of Scope

- Mode offline
- Génération automatique de contenu
- Vidéos longues obligatoires
- Gamification avancée (streaks, shop, badges, etc.)
- Mini-quiz de rappel à long terme (feature future)
- Micro-interactions dans la théorie (feature future)

---

## Assumptions

- Le contenu existant sera migré ou reformaté pour respecter les nouvelles règles de densité
- Les administrateurs seront responsables de découper le contenu en slides appropriées
- Le seuil de réussite du quiz par défaut est de 70% (configurable par module)
- La progression existante reste compatible avec le nouveau système de slides
- L'interface actuelle GuidedModuleFlow sera refactorisée pour supporter les slides

---

## Dependencies

- Feature 001 (Modular Edu Hub) : Structure de base des modules et leçons
- Feature 002 (Catppuccin Design System) : Tokens de design pour les slides
- Feature 003 (Catppuccin Cursors & Icons) : Icônes pour la navigation
