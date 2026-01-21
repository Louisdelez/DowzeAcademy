# Feature Specification: Hub Éducatif Modulaire MVP

**Feature Branch**: `001-modular-edu-hub`
**Created**: 2026-01-21
**Status**: Draft
**Input**: User description: Comprehensive MVP specification for a modular educational hub with hierarchical content structure, progression system, and internal content management.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Navigate and Browse Educational Content (Priority: P1)

As a learner, I want to browse available educational content organized by Domain, Pack, and Discipline so that I can find and select a learning path that matches my interests.

**Why this priority**: This is the core entry point for users. Without navigation, users cannot access any educational content. This story delivers the fundamental value proposition of the platform.

**Independent Test**: Can be fully tested by loading the application, viewing the list of Domains, clicking through to Packs and Disciplines, and verifying the hierarchical navigation works correctly.

**Acceptance Scenarios**:

1. **Given** I am on the application home page, **When** I load the page, **Then** I see a list of available Domains displayed as clickable cards.
2. **Given** I am viewing the Domain list, **When** I click on a Domain card, **Then** I see the list of Packs within that Domain.
3. **Given** I am viewing a Pack, **When** I click on it, **Then** I see the list of Disciplines within that Pack with their progress indicators.
4. **Given** I am viewing a Discipline, **When** I expand it, **Then** I see all Modules with their status (locked, available, in progress, completed).

---

### User Story 2 - Complete a Module with Theory, Quiz, and Practice (Priority: P1)

As a learner, I want to complete a Module by going through its Theory content, passing the Quiz, and completing the Practice exercise so that I can validate my learning and progress to the next module.

**Why this priority**: This is the core pedagogical loop. Without module completion capability, the platform cannot fulfill its educational purpose.

**Independent Test**: Can be fully tested by selecting an available module, reading the theory, answering quiz questions, completing the practice, and verifying the module is marked as completed.

**Acceptance Scenarios**:

1. **Given** I have selected an available Module, **When** I enter the Module, **Then** I see the Theory content which I can read freely without restrictions.
2. **Given** I have read the Theory, **When** I attempt the Quiz, **Then** I see questions of types: single choice, multiple choice, or short text answer.
3. **Given** I am taking the Quiz, **When** I submit my answers, **Then** I receive immediate feedback indicating pass or fail.
4. **Given** I failed the Quiz, **When** I try again, **Then** I can retake the Quiz without limits.
5. **Given** I passed the Quiz, **When** I access the Practice section, **Then** I see the practice exercise appropriate to the domain type (IN_GAME, EXERCICES, PROJET, or AUTO_EVALUATION).
6. **Given** I have completed all three parts (Theory viewed, Quiz passed, Practice completed), **When** the system validates completion, **Then** the Module status changes to "completed" and the next Module is unlocked.

---

### User Story 3 - Track Personal Progression (Priority: P2)

As a learner, I want to see my progression across all my learning paths so that I can understand what I have completed and what remains.

**Why this priority**: Progression visibility is a key motivator for learners. Without it, users lose track of their journey and may disengage.

**Independent Test**: Can be fully tested by completing several modules, navigating to different views, and verifying progression percentages and status indicators are accurate and persistent.

**Acceptance Scenarios**:

1. **Given** I have completed some Modules, **When** I view a Discipline, **Then** I see which Modules are completed, in progress, available, or locked.
2. **Given** I am viewing a Pack, **When** I look at the Pack summary, **Then** I see an overall progression percentage for the Pack.
3. **Given** I close and reopen the application, **When** I return to my learning path, **Then** my progression state is preserved exactly as I left it.
4. **Given** I have completed a Module, **When** I try to invalidate it, **Then** the system does not allow reversal of completion status.

---

### User Story 4 - Manage Educational Content (Admin) (Priority: P2)

As a content administrator, I want to create, edit, and publish educational content (Domains, Packs, Disciplines, Modules, Lessons, Quizzes) through an internal interface so that learners have access to structured educational material.

**Why this priority**: Without content management, the platform has no content to display. This enables the "A à Z" principle of internal content ownership.

**Independent Test**: Can be fully tested by logging into the admin interface, creating a complete Domain→Pack→Discipline→Module→Lesson hierarchy, adding quiz questions, publishing the content, and verifying it appears in the learner-facing hub.

**Acceptance Scenarios**:

1. **Given** I am logged into the admin interface, **When** I create a new Domain with name and description, **Then** it is saved in draft status.
2. **Given** I have a Domain, **When** I create Packs within it containing Disciplines, Modules, and Lessons, **Then** the hierarchical structure is maintained.
3. **Given** I am creating a Lesson, **When** I add Theory content, Quiz questions (single choice, multiple choice, short text), and Practice definition, **Then** the lesson includes all three mandatory parts.
4. **Given** I have draft content, **When** I publish it, **Then** it becomes visible to learners in the hub.
5. **Given** published content exists, **When** I edit it, **Then** learners continue to see the published version until I publish the changes.

---

### User Story 5 - Handle Connectivity Issues Gracefully (Priority: P3)

As a learner, I want to be informed when the connection is lost or the content service is unavailable so that I understand why certain actions are blocked.

**Why this priority**: Graceful degradation improves user experience and prevents confusion during technical issues.

**Independent Test**: Can be fully tested by simulating network disconnection, verifying warning messages appear, and confirming that progression validation is blocked while read-only content remains accessible if cached.

**Acceptance Scenarios**:

1. **Given** I lose internet connection, **When** I try to interact with the application, **Then** I see a clear message indicating connection is required.
2. **Given** the connection is lost, **When** I try to validate quiz answers or complete practice, **Then** the action is blocked with an explanation.
3. **Given** the Content Service is temporarily unavailable but cached content exists, **When** I browse, **Then** I see cached content with a warning that data may be outdated.
4. **Given** the Content Service is unavailable, **When** I try to perform write actions (as admin), **Then** the actions are blocked.

---

### Edge Cases

- What happens when a user tries to access a locked Module directly via URL? System redirects to the Discipline view with the locked status visible.
- What happens when a Module has no prerequisites defined? Module is available by default.
- What happens when a Quiz has no questions? Module cannot be published; validation error in admin interface.
- What happens when a user refreshes during a Quiz? Quiz state is preserved; user can continue.
- What happens when the Content Service returns after unavailability? System refreshes content automatically; user is notified if content changed.
- What happens when a Module is deleted while a user is in progress? User sees an error message and is redirected; progression for that module is invalidated.

## Requirements *(mandatory)*

### Functional Requirements

**Navigation & Structure**

- **FR-001**: System MUST display Domains as clickable cards on the home page.
- **FR-002**: System MUST enforce the strict hierarchy: Domain → Pack → Discipline → Module → Lesson.
- **FR-003**: System MUST NOT allow transversal navigation between unrelated content items in MVP.

**Module & Lesson**

- **FR-004**: Every Module MUST contain exactly three parts: Theory, Quiz, and Practice.
- **FR-005**: System MUST NOT allow a Module to exist without all three parts defined.
- **FR-006**: Theory content MUST be viewable without restrictions or validation requirements.
- **FR-007**: Quiz MUST support three question types: single choice, multiple choice, and short text answer.
- **FR-008**: Quiz MUST provide immediate feedback (pass/fail) upon submission; passing requires 70% or more correct answers.
- **FR-009**: Quiz MUST allow unlimited retakes until passed.
- **FR-010**: Practice MUST support at minimum four types: IN_GAME, EXERCICES, PROJET, AUTO_EVALUATION.
- **FR-011**: Practice validation MUST support three modes: declarative (user confirms), automatic (system checks), manual (admin reviews).

**Progression**

- **FR-012**: Module status MUST be one of: locked, available, in progress, completed.
- **FR-013**: Module completion MUST require: Theory accessed, Quiz passed, Practice completed.
- **FR-014**: Completed Modules MUST NOT be invalidated or reversed.
- **FR-015**: Module ordering MUST be enforced by default within a Discipline.
- **FR-016**: Locked Modules MUST NOT be accessible until prerequisites are met.
- **FR-017**: Progression MUST be persistent across sessions.
- **FR-018**: Progression MUST be visible at all hierarchy levels (Pack, Discipline, Module).
- **FR-019**: Progression MUST be user-specific (each user has their own progression state).

**Content Management (Admin)**

- **FR-020**: System MUST provide an internal admin interface for content management, secured by separate admin credentials (shared login for MVP, distinct from learner authentication).
- **FR-021**: Admin MUST be able to create, edit, and delete: Domains, Packs, Disciplines, Modules, Lessons, Quiz questions.
- **FR-022**: Content MUST support two states: draft and published.
- **FR-023**: Only published content MUST be visible to learners.
- **FR-024**: System MUST NOT use any external CMS or third-party content management service.
- **FR-025**: Admin interface MUST use last-write-wins for concurrent edits, displaying a warning if content changed since the admin loaded it.

**Connectivity & Availability**

- **FR-026**: System MUST require an active internet connection to function.
- **FR-027**: System MUST inform users when connection is lost.
- **FR-028**: Progression validation MUST be blocked when offline.
- **FR-029**: If Content Service is unavailable, cached content MUST be displayed with a staleness warning.
- **FR-030**: Write operations MUST be blocked when Content Service is unavailable.

**UX**

- **FR-031**: Interface MUST follow mobile-first design principles.
- **FR-032**: No user action MUST require more than 3 clicks to accomplish.
- **FR-033**: Interface MUST be usable without keyboard (touch-only support).

### Key Entities

- **Domain**: Root category for educational content (e.g., Games, Education, Professional). Contains multiple Packs. Has name, description, icon.
- **Pack**: Complete learning pathway covering a defined scope (e.g., "LoL Complete Journey", "French Middle School"). Contains multiple Disciplines. Has name, description, progression indicator.
- **Discipline**: Subject or specialty within a Pack (e.g., Math, Jungle, Support). Contains multiple Modules. Has name, description, unlocking rules.
- **Module**: Atomic pedagogical unit. Contains exactly one Lesson. Has name, description, status (locked/available/in_progress/completed), prerequisites, order position.
- **Lesson**: Internal content of a Module. Contains Theory (rich text/media), Quiz (questions), Practice (definition and type). All three parts mandatory.
- **Quiz Question**: Question within a Lesson's quiz. Has question text, question type (single_choice/multiple_choice/short_text), answer options (for choice types), correct answer(s), feedback text.
- **Practice**: Practical exercise component. Has type (IN_GAME/EXERCICES/PROJET/AUTO_EVALUATION), instructions, validation mode (declarative/automatic/manual), completion criteria.
- **User Progression**: User-specific progress tracking. Tracks module status per user, quiz attempts and results, practice completion, timestamps.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can navigate from home to a specific Module in 3 clicks or fewer.
- **SC-002**: Users can complete a full Module (theory + quiz + practice) in a single session without confusion.
- **SC-003**: 90% of users successfully complete their first Module on first attempt (excluding quiz retakes).
- **SC-004**: Progression state is 100% accurate after browser refresh, session timeout, and device change.
- **SC-005**: Content administrators can create and publish a complete Domain→Pack→Discipline→Module→Lesson structure in under 30 minutes.
- **SC-006**: System handles 1000 concurrent learners without noticeable degradation in navigation speed.
- **SC-007**: Quiz feedback is displayed within 2 seconds of submission.
- **SC-008**: When connection is lost, user notification appears within 5 seconds.
- **SC-009**: 100% of published Modules contain all three mandatory parts (enforced by system).
- **SC-010**: Platform functions correctly on mobile devices (iOS Safari, Android Chrome) with touch-only interaction.

## Clarifications

### Session 2026-01-21

- Q: What is the quiz passing threshold? → A: 70% or more correct answers required to pass
- Q: How is admin access controlled? → A: Separate admin credentials (shared admin login for MVP)
- Q: How are concurrent admin edits handled? → A: Last write wins (with warning if data changed since load)

## Assumptions

- Users have a stable internet connection for most of their learning sessions.
- Content will be primarily in French for MVP; internationalization is out of scope.
- User authentication exists (method not specified in MVP scope, but progression requires user identification).
- The platform targets web browsers as the primary interface; native mobile apps are out of scope for MVP.
- Practice validation in "automatic" mode will be defined per practice type implementation.
- No payment or subscription system in MVP; all content is accessible to authenticated users.

## Out of Scope (MVP)

- Social features (comments, sharing, forums)
- Leaderboards and rankings
- Monetization and payments
- Certificates and diplomas
- Advanced notifications (email, push)
- AI-powered pedagogy
- Advanced multilingual support
- Offline mode
- Native mobile applications
- Gamification beyond basic progression (badges, streaks, achievements)
