# Feature Specification: Contenu Pédagogique Français L1 9CO

**Feature Branch**: `007-francais-l1-content`
**Created**: 2026-01-26
**Status**: Draft
**Input**: User description: "Création des différents Chapitres (Disciplines) et différents modules pour Français L1 9CO. Tous les chapitres et points de chapitres doivent être créés. Un point de chapitre = un module. 15-25 slides par module, 25 questions quiz avec 15 affichées (rotation aléatoire), exercice pratique par module."

---

## Contexte

Cette feature consiste à créer le contenu pédagogique complet pour le cours de Français Langue 1 du Cycle d'Orientation Suisse (9CO). Le contenu est structuré selon le programme officiel comprenant 16 chapitres couvrant la lecture, l'écriture, l'expression orale, la grammaire, la conjugaison, l'orthographe, les méthodes de travail et la culture littéraire.

### Structure du Contenu Source

| Chapitre | Titre | Nombre de Modules |
|----------|-------|-------------------|
| 1 | Entrer au Cycle d'Orientation et dans la langue scolaire | 6 |
| 2 | Lecture : comprendre un texte narratif | 9 |
| 3 | Lecture : comprendre un texte informatif et explicatif | 8 |
| 4 | Lecture : comprendre un texte argumentatif (initiation) | 6 |
| 5 | Expression orale : s'exprimer clairement | 8 |
| 6 | Écriture : écrire un texte narratif | 8 |
| 7 | Écriture : écrire pour informer et expliquer | 7 |
| 8 | Écriture : exprimer son opinion | 5 |
| 9 | Grammaire : les bases de la phrase | 7 |
| 10 | Grammaire : les classes de mots | 8 |
| 11 | Conjugaison : temps et modes essentiels | 7 |
| 12 | Orthographe grammaticale | 6 |
| 13 | Orthographe lexicale et vocabulaire | 6 |
| 14 | Méthodes de travail en français | 6 |
| 15 | Culture littéraire (initiation) | 5 |
| 16 | Projet et synthèse de fin d'année | 5 |
| **Total** | | **107 modules** |

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Parcourir le Contenu Théorique (Priority: P1)

Un apprenant connecté accède à un module de Français L1 et parcourt le contenu théorique structuré en slides pédagogiques pour apprendre les concepts du programme 9CO.

**Why this priority**: C'est la fonctionnalité fondamentale - sans contenu théorique, aucun apprentissage n'est possible. Chaque module doit avoir un contenu riche et structuré.

**Independent Test**: Peut être testé en naviguant dans un module et en vérifiant que les 15-25 slides sont présentes, bien formatées et couvrent le sujet du point de chapitre.

**Acceptance Scenarios**:

1. **Given** un apprenant connecté sur un module du chapitre 1, **When** il accède au contenu théorique, **Then** il voit entre 15 et 25 slides couvrant le sujet "Le rôle du français au Cycle d'orientation"
2. **Given** un apprenant sur la théorie d'un module, **When** il navigue entre les slides, **Then** le contenu est progressif et cohérent (introduction → développement → synthèse)
3. **Given** un module de grammaire (ex: "La phrase simple et complexe"), **When** l'apprenant lit la théorie, **Then** le contenu inclut des définitions, exemples et exercices d'application

---

### User Story 2 - Compléter le Quiz avec Rotation Aléatoire (Priority: P1)

Un apprenant ayant terminé la théorie d'un module répond à un quiz de 15 questions sélectionnées aléatoirement parmi 25 questions disponibles, avec les réponses mélangées.

**Why this priority**: Le quiz est essentiel pour valider la compréhension. La rotation aléatoire permet des tentatives multiples sans mémorisation des réponses.

**Independent Test**: Peut être testé en complétant un quiz deux fois et en vérifiant que les questions et l'ordre des réponses diffèrent.

**Acceptance Scenarios**:

1. **Given** un apprenant ayant fini la théorie d'un module, **When** il accède au quiz, **Then** il voit exactement 15 questions à répondre
2. **Given** un module avec 25 questions définies, **When** l'apprenant relance le quiz, **Then** une sélection différente de 15 questions est présentée
3. **Given** une question à choix multiple, **When** elle est affichée, **Then** l'ordre des réponses (A, B, C, D) est aléatoire à chaque tentative
4. **Given** un apprenant qui répond aux 15 questions, **When** il soumet ses réponses, **Then** son score est calculé et affiché avec le seuil de réussite (70%)

---

### User Story 3 - Réaliser l'Exercice Pratique (Priority: P2)

Un apprenant ayant réussi le quiz accède à l'exercice pratique du module qui lui permet d'appliquer les concepts appris dans un contexte concret.

**Why this priority**: L'exercice pratique consolide l'apprentissage mais dépend de la réussite du quiz. C'est la dernière étape avant la complétion du module.

**Independent Test**: Peut être testé en accédant à l'exercice pratique après le quiz et en vérifiant que les instructions sont claires et pertinentes au sujet du module.

**Acceptance Scenarios**:

1. **Given** un apprenant ayant réussi le quiz d'un module, **When** il accède à l'exercice pratique, **Then** il voit des instructions claires pour une activité liée au contenu du module
2. **Given** un exercice pratique en cours, **When** l'apprenant active le timer, **Then** le compte à rebours commence et il peut travailler sur l'exercice
3. **Given** un exercice pratique terminé, **When** l'apprenant valide, **Then** le module est marqué comme complété et le prochain module est débloqué

---

### User Story 4 - Naviguer dans la Structure des Chapitres (Priority: P2)

Un apprenant peut parcourir les 16 chapitres de Français L1 et voir sa progression dans chaque discipline.

**Why this priority**: La navigation claire dans le curriculum est essentielle pour l'orientation de l'apprenant dans son parcours.

**Independent Test**: Peut être testé en naviguant dans la liste des chapitres et en vérifiant que les 16 chapitres sont visibles avec leurs modules respectifs.

**Acceptance Scenarios**:

1. **Given** un apprenant sur la page du pack "Français L1", **When** il consulte la liste des chapitres, **Then** il voit les 16 chapitres ordonnés avec leur nombre de modules
2. **Given** un apprenant sur un chapitre, **When** il consulte les modules, **Then** il voit tous les points du chapitre comme modules individuels (ex: Chapitre 2 → 9 modules)
3. **Given** un apprenant avec des modules complétés, **When** il consulte un chapitre, **Then** sa progression est visible (modules complétés vs. total)

---

### User Story 5 - Progression Séquentielle avec Déblocage (Priority: P3)

Les modules d'un chapitre sont débloqués séquentiellement - l'apprenant doit compléter un module pour accéder au suivant.

**Why this priority**: Le système de déblocage assure un apprentissage progressif et structuré, mais c'est une amélioration de l'expérience utilisateur.

**Independent Test**: Peut être testé en vérifiant qu'un module verrouillé devient accessible après complétion du module précédent.

**Acceptance Scenarios**:

1. **Given** un apprenant sur le chapitre 1, **When** il n'a complété aucun module, **Then** seul le module 1 est accessible, les autres sont verrouillés
2. **Given** un apprenant ayant complété le module 1.1, **When** il retourne à la liste des modules, **Then** le module 1.2 est maintenant débloqué
3. **Given** un nouveau chapitre, **When** le chapitre précédent n'est pas complété, **Then** le premier module du nouveau chapitre reste verrouillé

---

### Edge Cases

- **Module avec contenu minimal**: Si un point de chapitre est très simple, le module doit quand même avoir au moins 15 slides de qualité (avec plus d'exemples et exercices)
- **Questions insuffisantes**: Si un sujet ne permet pas 25 questions variées, les questions doivent être diversifiées (reformulations, cas pratiques différents)
- **Exercice pratique non adapté**: Certains modules théoriques (ex: grammaire) doivent avoir des exercices pratiques créatifs (rédaction de phrases, correction de textes)
- **Chapitre 16 (Synthèse)**: Les 5 modules de synthèse doivent être transversaux et réinvestir les compétences des chapitres précédents

---

## Requirements *(mandatory)*

### Functional Requirements

#### Structure du Contenu

- **FR-001**: Le système DOIT créer 16 disciplines (chapitres) pour le pack "Français L1" avec les noms et descriptions définis dans le curriculum
- **FR-002**: Le système DOIT créer exactement 107 modules correspondant aux points de chaque chapitre (1 point = 1 module)
- **FR-003**: Chaque module DOIT être ordonné séquentiellement au sein de son chapitre (order: 1, 2, 3...)
- **FR-004**: Les chapitres DOIVENT être ordonnés de 1 à 16 selon le curriculum officiel

#### Contenu Théorique

- **FR-005**: Chaque module DOIT contenir entre 15 et 25 slides de théorie
- **FR-006**: Le contenu théorique DOIT utiliser le format Markdown avec la structure slides existante (## pour les titres de slides)
- **FR-007**: Chaque slide DOIT contenir du contenu pédagogique pertinent au sujet du module (définitions, exemples, explications)
- **FR-008**: Le contenu DOIT être adapté au niveau 9CO (élèves de 12-13 ans)
- **FR-009**: Le contenu DOIT inclure des exemples concrets et des illustrations textuelles

#### Quiz

- **FR-010**: Chaque module DOIT contenir exactement 25 questions de quiz
- **FR-011**: Le système DOIT afficher 15 questions sélectionnées aléatoirement parmi les 25 (questionsToShow: 15)
- **FR-012**: Chaque question DOIT avoir 4 options de réponse (choix unique ou multiple selon le type)
- **FR-013**: L'ordre des réponses DOIT être aléatoire à chaque tentative (shuffleAnswers: true)
- **FR-014**: L'ordre des questions DOIT être aléatoire à chaque tentative (shuffleQuestions: true)
- **FR-015**: Les questions DOIVENT être variées: compréhension, application, analyse
- **FR-016**: Chaque question DOIT avoir une explication de la bonne réponse (feedback)

#### Exercice Pratique

- **FR-017**: Chaque module DOIT contenir un exercice pratique avec des instructions claires
- **FR-018**: L'exercice pratique DOIT être en lien direct avec le contenu théorique du module
- **FR-019**: L'exercice DOIT inclure une durée recommandée (practiceTimerDuration)
- **FR-020**: Les exercices DOIVENT varier selon le type de compétence: rédaction, analyse, création, correction

#### Configuration

- **FR-021**: Tous les modules DOIVENT utiliser le mode "SLIDES" (lessonMode: SLIDES)
- **FR-022**: Le seuil de réussite du quiz DOIT être de 70% (quizThreshold: 70)
- **FR-023**: Chaque question DOIT être liée à une section théorique pour permettre la révision ciblée (linkedTheorySection)

### Key Entities

- **Discipline (Chapitre)**: Représente un chapitre du curriculum. Contient: nom, description, ordre (1-16), référence au pack "Français L1"
- **Module (Point de chapitre)**: Représente un point d'apprentissage. Contient: nom du point, référence à la discipline parente, ordre séquentiel
- **Lesson**: Contient le contenu pédagogique d'un module. Comprend: théorie (Markdown), paramètres quiz (shuffleQuestions, shuffleAnswers, questionsToShow), instructions pratiques
- **QuizQuestion**: Question de quiz avec texte, type (SINGLE_CHOICE/MULTIPLE_CHOICE), feedback, lien vers section théorique
- **QuizOption**: Option de réponse avec texte, indicateur isCorrect, ordre

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Les 16 chapitres et 107 modules sont créés et accessibles dans l'application
- **SC-002**: Chaque module contient entre 15 et 25 slides de théorie couvrant le sujet du point de chapitre
- **SC-003**: Chaque module contient exactement 25 questions de quiz avec 4 options chacune
- **SC-004**: Le quiz affiche 15 questions aléatoires sur les 25 disponibles
- **SC-005**: L'ordre des questions et des réponses est différent à chaque nouvelle tentative de quiz
- **SC-006**: Chaque module contient un exercice pratique avec des instructions pertinentes
- **SC-007**: Un apprenant peut compléter un module complet (théorie → quiz → pratique) en 30-45 minutes
- **SC-008**: 100% des questions de quiz ont un feedback explicatif de la bonne réponse
- **SC-009**: Le contenu est adapté au niveau 9CO et utilise un vocabulaire approprié pour des élèves de 12-13 ans
- **SC-010**: La progression des apprenants est sauvegardée correctement entre les sessions

---

## Assumptions

1. Le pack "Français L1" existe déjà dans la base de données (ID: a3358a9d-3529-4d18-a1a7-8fd03407a600)
2. Le chapitre 1 existe déjà avec ses 6 modules (à conserver et compléter si nécessaire)
3. Le système de randomisation des quiz (Feature 005) est fonctionnel
4. Le mode SLIDES (Feature 004) est fonctionnel pour l'affichage du contenu
5. Le contenu sera généré en français, adapté au système éducatif suisse romand
6. Les exercices pratiques utilisent le type "TIMED" avec validation par timer

---

## Constraints

1. Le contenu doit respecter le curriculum officiel du Cycle d'Orientation Suisse
2. Le nombre de modules par chapitre est fixé par le document source (FrancaisL1.md)
3. Le contenu doit être créé via un script de seed Prisma pour la reproductibilité
4. Les modules doivent suivre le format existant établi par les features précédentes

---

## Out of Scope

- Traduction du contenu dans d'autres langues
- Création de contenu pour d'autres niveaux (10CO, 11CO)
- Système d'évaluation par notes (seul le pourcentage de réussite est utilisé)
- Contenu multimédia (images, vidéos, audio) - uniquement texte/Markdown
- Personnalisation du parcours par l'apprenant (l'ordre est fixé par le curriculum)
