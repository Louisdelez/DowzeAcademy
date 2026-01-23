# Feature Specification: Quiz Randomization V1

**Feature Branch**: `005-quiz-randomization`
**Created**: 2026-01-23
**Status**: Draft
**Input**: User description: "FEATURE 005 — QUIZ RANDOMIZATION V1 (QUESTION POOL + SHUFFLE + STABLE UUID) - Améliorer le système de Quiz de Dowze Academy pour qu'il devienne rejouable, anti-mémorisation par lettre (A/B/C/D) et plus efficace pour l'entraînement"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Learner Retakes Quiz with Randomized Experience (Priority: P1)

En tant qu'apprenant, je veux que chaque tentative de quiz présente les questions et les réponses dans un ordre différent, afin que je ne puisse pas mémoriser les patterns (ex: "la bonne réponse est toujours B") et que je sois obligé de vraiment comprendre le contenu.

**Why this priority**: C'est le coeur de la feature - sans randomisation, les quiz restent mémorisables par pattern et perdent leur valeur pédagogique. Cette fonctionnalité apporte la valeur principale demandée.

**Independent Test**: Peut être testé en faisant passer le même quiz 3 fois et en vérifiant que l'ordre des questions et des réponses change à chaque tentative.

**Acceptance Scenarios**:

1. **Given** un quiz avec 5 questions à choix multiple, **When** l'apprenant lance le quiz une première fois, **Then** les questions apparaissent dans un ordre aléatoire et les options A/B/C/D sont mélangées
2. **Given** le même quiz relancé, **When** l'apprenant le refait, **Then** l'ordre des questions est différent de la tentative précédente
3. **Given** le même quiz relancé, **When** l'apprenant le refait, **Then** les options de réponse (A/B/C/D) sont dans un ordre différent de la tentative précédente
4. **Given** une question où la bonne réponse était "A" à la tentative 1, **When** l'apprenant refait le quiz, **Then** la même réponse correcte peut apparaître sous une autre lettre (B, C, ou D)

---

### User Story 2 - Admin Configures Question Pool and Display Settings (Priority: P2)

En tant qu'administrateur, je veux pouvoir définir un pool de questions plus large que le nombre affiché et configurer les options de randomisation, afin de créer des quiz variés et contrôler le comportement du mélange.

**Why this priority**: Permet à l'admin de tirer parti de la randomisation avec des pools de questions, augmentant la variété des quiz. Essentiel pour maximiser l'impact pédagogique mais nécessite que P1 fonctionne d'abord.

**Independent Test**: Peut être testé en créant un quiz avec 10 questions et en configurant l'affichage de seulement 5, puis en vérifiant que différentes tentatives montrent différents sous-ensembles.

**Acceptance Scenarios**:

1. **Given** l'éditeur de leçon dans le panel admin, **When** je configure un quiz, **Then** je peux définir le nombre de questions à afficher (`questionsToShow`)
2. **Given** un pool de 10 questions avec `questionsToShow = 5`, **When** un apprenant lance le quiz, **Then** seulement 5 questions distinctes sont sélectionnées aléatoirement
3. **Given** le même quiz relancé plusieurs fois, **When** je compare les questions affichées, **Then** des sous-ensembles différents de questions apparaissent
4. **Given** l'éditeur de quiz, **When** je configure les options, **Then** je peux activer/désactiver le shuffle des réponses (ON par défaut)
5. **Given** l'éditeur de quiz, **When** je configure les options, **Then** je peux activer/désactiver le shuffle de l'ordre des questions (ON par défaut)

---

### User Story 3 - System Correctly Scores Randomized Quizzes (Priority: P1)

En tant que système, je dois évaluer correctement les réponses de l'apprenant même si les lettres A/B/C/D ont été mélangées, en utilisant les identifiants stables des choix.

**Why this priority**: Critique pour l'intégrité du système - sans scoring correct, la feature entière est inutilisable. Doit être implémentée en parallèle avec P1.

**Independent Test**: Peut être testé en soumettant des réponses correctes sur un quiz randomisé et en vérifiant que le score est 100% indépendamment de l'ordre d'affichage.

**Acceptance Scenarios**:

1. **Given** une question où la bonne réponse "Paris" s'affiche en position "C" (au lieu de "A" originalement), **When** l'apprenant sélectionne "C", **Then** la réponse est comptée comme correcte
2. **Given** un quiz complété, **When** le système calcule le score, **Then** il utilise les choiceIds stables et non les lettres A/B/C/D
3. **Given** un quiz à choix multiples (plusieurs bonnes réponses), **When** les réponses sont mélangées, **Then** le système identifie correctement toutes les bonnes réponses sélectionnées

---

### User Story 4 - Quiz Attempt Data is Persisted for Review (Priority: P3)

En tant qu'administrateur ou apprenant, je veux pouvoir revoir les détails d'une tentative de quiz passée, incluant quelles questions ont été tirées, dans quel ordre, et quel mapping a été utilisé.

**Why this priority**: Fonctionnalité de suivi et analytics. Utile mais pas bloquante pour l'expérience principale de quiz randomisé.

**Independent Test**: Peut être testé en complétant un quiz randomisé puis en consultant l'historique des tentatives pour vérifier que toutes les informations sont enregistrées.

**Acceptance Scenarios**:

1. **Given** un quiz complété, **When** je consulte les détails de la tentative, **Then** je vois la liste des questions tirées (par UUID)
2. **Given** un quiz complété, **When** je consulte les détails de la tentative, **Then** je vois l'ordre dans lequel les questions ont été présentées
3. **Given** un quiz QCM complété, **When** je consulte les détails de la tentative, **Then** je vois le mapping choiceId vers lettre (A/B/C/D) utilisé
4. **Given** un quiz complété, **When** je consulte les détails de la tentative, **Then** je vois les réponses de l'utilisateur identifiées par choiceId (pas par lettre)

---

### User Story 5 - Questions Display UUID for Admin Reference (Priority: P3)

En tant qu'administrateur, je veux voir l'UUID stable de chaque question dans le panel admin, afin de pouvoir référencer les questions de manière unique pour l'analytics et le debugging.

**Why this priority**: Amélioration de l'expérience admin. Utile pour le suivi mais pas essentielle pour le fonctionnement de base.

**Independent Test**: Peut être testé en ouvrant l'éditeur de quiz et en vérifiant que chaque question affiche son UUID de manière visible/copiable.

**Acceptance Scenarios**:

1. **Given** l'éditeur de quiz dans le panel admin, **When** je consulte une question, **Then** je vois son UUID affiché (lecture seule)
2. **Given** l'UUID d'une question affiché, **When** je clique dessus, **Then** il est copié dans le presse-papier
3. **Given** les choix de réponse d'une question, **When** je les consulte dans l'admin, **Then** ils sont affichés sans lettre A/B/C/D fixe (seule l'indication "correct" est visible)

---

### Edge Cases

- Que se passe-t-il si `questionsToShow` est supérieur au nombre de questions dans le pool? Le système affiche toutes les questions disponibles
- Que se passe-t-il si `questionsToShow` = 0 ou non défini? Le système affiche toutes les questions (comportement legacy)
- Que se passe-t-il pour les questions de type "texte court"? Seul le shuffle de l'ordre des questions s'applique, pas le shuffle A/B/C/D
- Que se passe-t-il si les options de shuffle sont désactivées? Le quiz utilise un ordre stable (fallback legacy)
- Que se passe-t-il si une question n'a qu'une seule option de réponse? Le shuffle n'a pas d'effet visible mais fonctionne
- Que se passe-t-il avec les quiz existants sans les nouvelles options? Comportement par défaut: shuffle activé

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Le système DOIT attribuer un UUID stable et immutable à chaque question lors de sa création
- **FR-002**: Le système DOIT mélanger aléatoirement l'ordre des options de réponse (A/B/C/D) à chaque lancement de quiz pour les questions à choix
- **FR-003**: Le système DOIT mélanger aléatoirement l'ordre des questions à chaque lancement de quiz
- **FR-004**: Le système DOIT permettre de configurer le nombre de questions à afficher (`questionsToShow`) par quiz
- **FR-005**: Le système DOIT sélectionner aléatoirement un sous-ensemble distinct de questions si `questionsToShow` < taille du pool
- **FR-006**: Le système DOIT évaluer les réponses en utilisant les choiceIds stables, pas les lettres A/B/C/D
- **FR-007**: Le système DOIT stocker pour chaque tentative: les questions tirées (UUIDs), l'ordre d'affichage, et le mapping choiceId vers lettre
- **FR-008**: Le système DOIT permettre à l'admin d'activer/désactiver le shuffle des réponses par quiz (défaut: ON)
- **FR-009**: Le système DOIT permettre à l'admin d'activer/désactiver le shuffle de l'ordre des questions par quiz (défaut: ON)
- **FR-010**: Le système DOIT afficher l'UUID de chaque question dans l'interface admin (lecture seule, copiable)
- **FR-011**: Le système DOIT garantir qu'aucune question en doublon n'apparaît dans une même tentative
- **FR-012**: Le système DOIT maintenir la compatibilité avec les quiz existants (fallback si options non configurées)
- **FR-013**: Le système NE DOIT PAS appliquer le shuffle A/B/C/D aux questions de type "texte court"

### Key Entities

- **Question**: Identifiant UUID stable, texte de la question, type (SINGLE_CHOICE, MULTIPLE_CHOICE, SHORT_TEXT), liste de choix, section théorique liée, feedback/explication
- **QuestionChoice**: Identifiant UUID stable (choiceId), texte du choix, indicateur "correct" (booléen), rattachement à une Question
- **Lesson/Quiz Settings**: questionsToShow (entier, nullable), shuffleAnswers (booléen, défaut true), shuffleQuestions (booléen, défaut true)
- **QuizAttempt**: Identifiant de tentative, référence au quiz, horodatage, score final, statut (réussi/échoué)
- **QuizAttemptQuestion**: Référence à la tentative, questionId (UUID), ordre d'affichage dans cette tentative, mapping des choiceIds vers les lettres A/B/C/D utilisées
- **QuizAttemptAnswer**: Référence à la question de tentative, choiceId(s) sélectionné(s) par l'utilisateur, indicateur correct/incorrect

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un même quiz relancé 10 fois par le même utilisateur présente au moins 8 ordres de questions différents
- **SC-002**: Un même quiz relancé 10 fois présente au moins 8 ordres de réponses A/B/C/D différents pour chaque question QCM
- **SC-003**: 100% des réponses correctes sont comptabilisées comme correctes, indépendamment de la position A/B/C/D affichée
- **SC-004**: Si pool = 10 et questionsToShow = 5, sur 10 tentatives, au moins 3 sous-ensembles de questions différents sont générés
- **SC-005**: L'admin peut configurer les paramètres de randomisation (questionsToShow, shuffles) en moins de 30 secondes par quiz
- **SC-006**: 100% des quiz existants continuent de fonctionner sans modification requise de l'admin
- **SC-007**: Les détails de chaque tentative (questions tirées, ordre, mapping) sont consultables après complétion
- **SC-008**: Aucune régression sur le temps de chargement d'un quiz (moins de 2 secondes pour afficher la première question)

## Assumptions

- Les UUIDs existants sur les questions actuelles dans la base de données seront conservés (pas de migration destructive)
- Le shuffle utilise un algorithme pseudo-aléatoire standard (Fisher-Yates ou équivalent)
- La configuration de randomisation est stockée au niveau de la Lesson (pas au niveau global)
- Les analytics existantes continuent de fonctionner avec les données de tentatives enrichies
- Le mode SLIDES et le mode LEGACY supportent tous deux la randomisation

## Out of Scope

- Anti-triche avancée (timers stricts, proctoring, détection de tab-switching)
- Génération automatique de nouvelles questions par IA
- Mode offline / synchronisation hors-ligne des quiz
- Randomisation pondérée basée sur les performances passées
- Banque de questions partagée entre plusieurs quiz
