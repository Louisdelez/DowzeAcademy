# Feature Specification: League of Legends Training V2 (Full Rebuild)

**Feature Branch**: `006-lol-training-v2`
**Created**: 2026-01-23
**Status**: Draft
**Input**: Reconstruction complète de la formation League of Legends avec 26 DISCIPLINES (chapitres) contenant ~298 MODULES (bullet points). Chaque MODULE contient Théorie (min 5 slides), Quiz QCM strict (pool 10 questions, 5 affichées, randomisées), et Pratique (exercice en jeu).

## Structure Hiérarchique

```
Domain: Games
└── Pack: "League of Legends - Formation Complète"
    └── 26 Disciplines (= 26 Chapitres du PDF)
        └── ~298 Modules (= chaque bullet point du PDF)
            └── 1 Lesson par Module (Théorie + Quiz + Pratique)
```

**IMPORTANT**: Chaque BULLET POINT dans le PDF devient un MODULE distinct avec son propre contenu Théorie/Quiz/Pratique.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Parcourir la Formation Complète (Priority: P1)

Un apprenant souhaite suivre la formation complète League of Legends de A à Z pour progresser du niveau débutant au niveau professionnel. Il navigue à travers les 26 disciplines et leurs modules respectifs, en complétant chaque module (Théorie → Quiz → Pratique) avant de passer au suivant.

**Why this priority**: C'est le parcours principal de la formation. Sans cette capacité, la formation n'a pas de valeur.

**Independent Test**: Peut être testé en créant un compte, accédant à la formation LoL, et complétant au moins 3 modules consécutifs avec succès.

**Acceptance Scenarios**:

1. **Given** un apprenant connecté, **When** il accède à la formation League of Legends, **Then** il voit les 26 disciplines listées dans l'ordre exact des chapitres du PDF
2. **Given** une discipline sélectionnée, **When** l'apprenant la consulte, **Then** il voit tous les modules (bullet points) de cette discipline
3. **Given** un module complété, **When** l'apprenant revient à la liste, **Then** le module suivant est débloqué
4. **Given** un apprenant sur un module, **When** il consulte le contenu, **Then** il voit les 3 phases: Théorie, Quiz, Pratique

---

### User Story 2 - Apprendre via les Slides de Théorie (Priority: P1)

Un apprenant veut comprendre un concept spécifique du jeu (ex: le last-hit des sbires, le freeze de lane). Il parcourt les slides de théorie qui lui présentent le concept de manière pédagogique avec définition, utilité, exemples, erreurs fréquentes et récap.

**Why this priority**: La théorie est le fondement de l'apprentissage. Sans contenu théorique de qualité, la formation perd sa valeur éducative.

**Independent Test**: Peut être testé en ouvrant n'importe quel module et en naviguant à travers ses slides de théorie.

**Acceptance Scenarios**:

1. **Given** un apprenant sur un module, **When** il entre dans la section Théorie, **Then** il voit au minimum 5 slides pédagogiques
2. **Given** un apprenant sur une slide, **When** il consulte le contenu, **Then** la slide contient un concept bien segmenté (définition, utilité, exemple, erreurs, récap)
3. **Given** un apprenant ayant vu toutes les slides, **When** il termine la théorie, **Then** le Quiz devient accessible

---

### User Story 3 - Passer le Quiz QCM (Priority: P1)

Un apprenant veut valider ses connaissances après la théorie. Il répond à un quiz composé uniquement de questions à choix multiples (4 options A/B/C/D), avec des questions tirées aléatoirement d'un pool et des réponses mélangées.

**Why this priority**: Le quiz est essentiel pour valider l'acquisition des connaissances et permettre la progression.

**Independent Test**: Peut être testé en complétant le quiz d'un module, puis en le refaisant pour vérifier que les questions/réponses sont différentes.

**Acceptance Scenarios**:

1. **Given** un apprenant ayant terminé la théorie, **When** il accède au Quiz, **Then** il voit 5 questions tirées aléatoirement du pool de 10
2. **Given** une question affichée, **When** l'apprenant la lit, **Then** il voit exactement 4 options (A, B, C, D) avec l'ordre randomisé
3. **Given** un apprenant qui refait le quiz, **When** les questions s'affichent, **Then** l'ordre des questions ET des réponses est différent de la tentative précédente
4. **Given** un apprenant ayant réussi le quiz (score >= seuil), **When** il valide, **Then** la section Pratique devient accessible

---

### User Story 4 - Réaliser l'Exercice Pratique (Priority: P1)

Un apprenant veut mettre en pratique ce qu'il a appris. Il lit les consignes de l'exercice pratique, réalise l'exercice en jeu, puis valide sa complétion.

**Why this priority**: La pratique consolide l'apprentissage et prépare l'apprenant à appliquer ses connaissances en conditions réelles.

**Independent Test**: Peut être testé en accédant à la section pratique d'un module après le quiz et en validant l'exercice.

**Acceptance Scenarios**:

1. **Given** un apprenant ayant réussi le quiz, **When** il accède à la Pratique, **Then** il voit les consignes claires de l'exercice
2. **Given** les consignes affichées, **When** l'apprenant les lit, **Then** il voit les étapes à suivre et les critères de réussite
3. **Given** un apprenant ayant réalisé l'exercice, **When** il valide sa complétion, **Then** le module est marqué comme terminé

---

### User Story 5 - Suivre sa Progression Globale (Priority: P2)

Un apprenant veut voir sa progression dans la formation. Il consulte son tableau de bord qui affiche les disciplines et modules complétés, en cours, et à venir.

**Why this priority**: Le suivi de progression motive l'apprenant et l'aide à planifier son apprentissage.

**Independent Test**: Peut être testé en complétant quelques modules puis en vérifiant que le tableau de bord reflète correctement l'état.

**Acceptance Scenarios**:

1. **Given** un apprenant avec plusieurs modules complétés, **When** il consulte sa progression, **Then** il voit le pourcentage de complétion par discipline et global
2. **Given** un apprenant sur la page de formation, **When** il regarde la liste des disciplines, **Then** chaque discipline affiche son statut et le nombre de modules complétés

---

### Edge Cases

- Que se passe-t-il si l'apprenant quitte en plein milieu d'un quiz ? → Sa progression dans le quiz est sauvegardée, il peut reprendre
- Que se passe-t-il si le pool de questions contient moins de 10 questions ? → Le système affiche toutes les questions disponibles (minimum requis: 10)
- Que se passe-t-il si l'apprenant échoue au quiz ? → Il peut le refaire immédiatement avec de nouvelles questions randomisées
- Que se passe-t-il si l'apprenant veut revoir un module déjà complété ? → Il peut y accéder librement pour révision

## Requirements *(mandatory)*

### Functional Requirements

#### Structure de la Formation

- **FR-001**: Le système DOIT afficher exactement 26 disciplines correspondant aux 26 chapitres de la table des matières PDF
- **FR-002**: Chaque discipline DOIT contenir autant de modules qu'il y a de bullet points dans le chapitre correspondant du PDF (~298 modules au total)
- **FR-003**: Le système DOIT conserver l'ordre exact et les intitulés des chapitres et bullet points du PDF
- **FR-004**: Chaque module DOIT contenir obligatoirement les 3 phases: Théorie, Quiz, Pratique
- **FR-005**: Les modules DOIVENT être débloqués de manière séquentielle au sein d'une discipline

#### Théorie

- **FR-006**: Chaque module DOIT contenir un minimum de 5 slides de théorie
- **FR-007**: Chaque slide DOIT être pédagogique, courte et segmentée
- **FR-008**: Le contenu théorique DOIT couvrir: définition du concept, utilité en jeu, exemple concret, erreurs fréquentes, mini-récap

#### Quiz

- **FR-009**: Le quiz DOIT être composé uniquement de questions à choix multiples (QCM)
- **FR-010**: Chaque question DOIT proposer exactement 4 réponses: A, B, C, D
- **FR-011**: Une question PEUT avoir une ou plusieurs bonnes réponses
- **FR-012**: Aucun autre format de question n'est autorisé (pas de vrai/faux, pas de réponse libre)
- **FR-013**: Chaque module DOIT posséder un pool minimum de 10 questions
- **FR-014**: À chaque tentative, le système DOIT afficher exactement 5 questions tirées aléatoirement du pool
- **FR-015**: L'ordre des questions DOIT être randomisé à chaque tentative
- **FR-016**: L'ordre des 4 réponses (A, B, C, D) DOIT être randomisé à chaque tentative
- **FR-017**: Le quiz DOIT être rejouable sans limite
- **FR-018**: Deux tentatives consécutives NE DOIVENT JAMAIS être identiques (questions et ordre des réponses)

#### Pratique

- **FR-019**: Chaque module DOIT contenir une partie pratique
- **FR-020**: L'exercice pratique DOIT être un exercice concret à réaliser en jeu
- **FR-021**: L'exercice DOIT être directement lié au contenu du module (le bullet point spécifique)
- **FR-022**: Chaque exercice DOIT inclure: consignes claires, étapes à suivre, critère de vérification de réussite

#### Contenu

- **FR-023**: Le système NE DOIT PAS contenir de contenu hors du périmètre défini par la table des matières PDF
- **FR-024**: La formation DOIT être accessible depuis le domaine "Games" de Dowze Academy

### Key Entities

- **Formation (Pack)**: La formation "League of Legends" regroupant toutes les disciplines, appartenant au domaine "Games"
- **Discipline**: Un chapitre de la formation contenant plusieurs modules (26 disciplines au total)
- **Module**: Un sujet spécifique (bullet point) contenant Théorie, Quiz et Pratique (~298 modules au total)
- **Slide de Théorie**: Une unité de contenu pédagogique (minimum 5 par module = ~1490 slides)
- **Question de Quiz**: Une question QCM avec 4 options et une ou plusieurs bonnes réponses (10 par module = ~2980 questions)
- **Exercice Pratique**: Instructions pour un exercice en jeu avec critères de réussite (~298 exercices)
- **Progression Apprenant**: État de complétion de chaque module pour un apprenant

### Liste des 26 Disciplines avec leur nombre de Modules

| # | Discipline (Chapitre) | Modules |
|---|----------------------|---------|
| 1 | Introduction et fondamentaux du jeu | 10 |
| 2 | La carte de la Faille de l'invocateur et son environnement | 9 |
| 3 | Présentation des cinq rôles et positions | 5 |
| 4 | Les champions et leurs capacités | 12 |
| 5 | Les sorts d'invocateur | 5 |
| 6 | Les runes reforgées et la préparation avant-match | 7 |
| 7 | Les objets et l'équipement en jeu | 19 |
| 8 | Phase de laning - début de partie en lane | 17 |
| 9 | Compétences individuelles et micro | 10 |
| 10 | Maîtrise de la Top lane | 14 |
| 11 | Maîtrise de la Jungle | 17 |
| 12 | Maîtrise de la Mid lane | 15 |
| 13 | Maîtrise de la Bot lane - ADC | 16 |
| 14 | Maîtrise du Support | 15 |
| 15 | Mid game et macro-stratégie | 15 |
| 16 | Late game et clôture | 10 |
| 17 | Teamfights et escarmouches | 12 |
| 18 | Vision de jeu et contrôle de la map | 12 |
| 19 | Objectifs neutres majeurs et gestion | 11 |
| 20 | Stratégie d'équipe et draft | 14 |
| 21 | Communication et travail d'équipe | 10 |
| 22 | Mental du joueur et psychologie compétitive | 11 |
| 23 | Analyse personnelle et progression | 11 |
| 24 | Coaching, entraînement et jeu d'équipe | 9 |
| 25 | Progression en classé et accès au haut niveau | 11 |
| 26 | Outils externes, ressources et méta | 11 |
| **TOTAL** | | **~298** |

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: La formation contient exactement 26 disciplines avec les intitulés exacts des chapitres du PDF
- **SC-002**: Chaque discipline contient le nombre exact de modules correspondant aux bullet points du PDF (~298 au total)
- **SC-003**: 100% des modules contiennent au minimum 5 slides de théorie (~1490 slides)
- **SC-004**: 100% des modules possèdent un pool d'au moins 10 questions QCM (~2980 questions)
- **SC-005**: 100% des quiz affichent exactement 5 questions par tentative
- **SC-006**: 100% des questions ont exactement 4 options de réponse (A, B, C, D)
- **SC-007**: Le taux de randomisation est vérifié: 95% des tentatives consécutives présentent des ordres différents
- **SC-008**: 100% des modules contiennent un exercice pratique avec consignes et critères de réussite (~298 exercices)
- **SC-009**: Un apprenant peut compléter un module (Théorie + Quiz + Pratique) en moins de 15 minutes
- **SC-010**: La formation est accessible depuis le domaine "Games" sans erreur

## Assumptions

- La fonctionnalité de randomisation des quiz (Feature 005) est déjà implémentée et fonctionnelle
- Le système de slides pédagogiques (Feature 004) est déjà en place
- L'infrastructure de Dowze Academy (domaines, packs, disciplines, modules, leçons) existe déjà
- Le contenu détaillé de chaque module sera créé dans les fichiers seed
- Le seuil de réussite du quiz reste à 70% comme configuré par défaut
- Le timer d'exercice pratique est optionnel par module

## Out of Scope

- Création de contenu pour d'autres jeux que League of Legends
- Modification de la mécanique de randomisation des quiz (utilise Feature 005)
- Système de certification ou de badges
- Fonctionnalités de coaching en direct
- Intégration avec l'API Riot Games
