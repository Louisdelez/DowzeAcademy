# Research: Hub Éducatif Modulaire MVP

**Branch**: `001-modular-edu-hub` | **Date**: 2026-01-21

## Technology Stack Decisions

### 1. Framework: Next.js 14+ with App Router

**Decision**: Next.js 14+ with App Router, React 18, TypeScript

**Rationale**:
- Full-stack framework eliminates need for separate backend
- App Router provides modern React Server Components for performance
- Built-in API routes for Content Service and Progression endpoints
- Excellent mobile-first support with responsive design patterns
- Large ecosystem and community support
- Vercel deployment simplifies hosting

**Alternatives Considered**:
- **Remix**: Similar capabilities but smaller ecosystem
- **SvelteKit**: Excellent performance but smaller hiring pool
- **Separate React + Express**: More complexity, separate deployments
- **Nuxt (Vue)**: Good alternative but team prefers React ecosystem

### 2. Database: PostgreSQL with Prisma ORM

**Decision**: PostgreSQL (managed) with Prisma ORM

**Rationale**:
- Relational model fits hierarchical content structure perfectly
- ACID compliance ensures progression data integrity
- Prisma provides type-safe queries and migrations
- Easy seeding for development and demo content
- Scales to 1000+ concurrent users with proper indexing
- Managed options (Supabase, Neon, Railway) simplify operations

**Alternatives Considered**:
- **MongoDB**: Schema flexibility not needed; relational queries complex
- **SQLite**: Not suitable for concurrent writes in production
- **Planetscale (MySQL)**: Good but PostgreSQL has better JSON support

### 3. Styling: TailwindCSS

**Decision**: TailwindCSS with custom design system

**Rationale**:
- Mobile-first responsive utilities built-in
- Fast prototyping with consistent spacing/typography
- Small bundle size with purging
- Easy to create Duolingo-like visual design
- Component-based styling with @apply when needed

**Alternatives Considered**:
- **CSS Modules**: More boilerplate, slower iteration
- **Styled Components**: Runtime overhead
- **Chakra UI**: Good but less customizable for unique design

### 4. State Management: React Query (TanStack Query)

**Decision**: TanStack Query for server state, React Context for UI state

**Rationale**:
- Automatic caching and revalidation (supports staleness warning requirement)
- Optimistic updates for quiz submissions
- Built-in loading/error states
- Minimal boilerplate compared to Redux
- Works seamlessly with Next.js

**Alternatives Considered**:
- **Redux Toolkit**: Overkill for this app's complexity
- **Zustand**: Good for client state but less suited for server data
- **SWR**: Similar but TanStack Query has better devtools

### 5. Authentication: NextAuth.js (Auth.js)

**Decision**: NextAuth.js for learner auth, environment variable for admin credentials (MVP)

**Rationale**:
- Learner authentication: session-based, simple email/password or OAuth
- Admin authentication (MVP): shared credentials stored in environment
- Separates learner and admin auth as per clarification
- Easy to upgrade to individual admin accounts post-MVP

**Alternatives Considered**:
- **Clerk**: Excellent but adds external dependency
- **Supabase Auth**: Good if using Supabase for database
- **Custom JWT**: More implementation work, security risks

### 6. Testing Strategy

**Decision**: Vitest (unit), Playwright (e2e), React Testing Library (components)

**Rationale**:
- Vitest: Fast, Vite-native, excellent TypeScript support
- Playwright: Cross-browser e2e testing, mobile emulation
- RTL: Tests components as users interact with them
- Covers critical paths: navigation, quiz submission, progression

**Test Coverage Priorities**:
1. Quiz scoring logic (unit)
2. Progression unlock logic (unit)
3. User journey: home → module → complete (e2e)
4. Admin content creation flow (e2e)

## Best Practices Research

### Educational Platform Patterns (Duolingo/Khan Academy)

**Findings**:
- Progress visualization is critical for engagement
- Immediate feedback increases retention
- Chunked content (5-10 min modules) works best
- Visual hierarchy guides users naturally
- Celebration on completion (micro-animations)

**Implementation**:
- Progress bars at Pack and Discipline levels
- Instant pass/fail with score breakdown
- Module designed for single-session completion
- Card-based navigation with clear visual states

### Quiz Engine Best Practices

**Findings**:
- Randomize question order to prevent memorization
- Show correct answers after failed attempt (optional, configurable)
- Prevent back-navigation during quiz to avoid cheating
- Store attempt history for analytics

**Implementation**:
- Question order randomized on quiz start
- Feedback shows which answers were wrong
- Linear quiz flow (no back button during quiz)
- Store: timestamp, answers given, score, pass/fail

### Content Management Patterns

**Findings**:
- Draft/published is standard minimum
- Version history valuable but complex (defer)
- Soft delete preferred over hard delete
- Bulk operations improve admin efficiency

**Implementation (MVP)**:
- Status enum: DRAFT | PUBLISHED
- updatedAt timestamp for staleness detection
- Soft delete with deletedAt field
- Single-item CRUD only (bulk post-MVP)

### Caching Strategy

**Findings**:
- Stale-while-revalidate (SWR) pattern ideal for content
- HTTP cache headers (ETag, Cache-Control) for CDN
- Client-side cache with background refresh
- Clear cache on publish action

**Implementation**:
- TanStack Query with 5-minute stale time
- API returns ETag header
- "Data may be outdated" banner when offline or stale
- Manual cache invalidation on admin publish

### Mobile-First Implementation

**Findings**:
- Touch targets minimum 44x44px
- Swipe gestures enhance navigation
- Bottom navigation for primary actions
- Avoid hover-dependent interactions

**Implementation**:
- TailwindCSS breakpoints: mobile-first (sm:, md:, lg:)
- Large tap targets for cards and buttons
- Bottom nav for learner (Home, Progress, Profile)
- All interactions work with touch only

## Security Considerations

### Input Validation

- Sanitize all user input (quiz answers, admin content)
- Use Zod for runtime validation
- Prisma parameterized queries prevent SQL injection

### Authentication Security

- Learner sessions: httpOnly cookies, secure flag
- Admin: separate route group with middleware check
- Rate limiting on quiz submissions (prevent brute force)

### Content Security

- Admin-only write endpoints protected by middleware
- CSRF protection built into Next.js
- Content sanitization for rich text (DOMPurify)

## Performance Targets Verification

| Requirement | Target | Approach |
|-------------|--------|----------|
| SC-006: 1000 concurrent | Yes | Serverless scales automatically; DB connection pooling |
| SC-007: Quiz < 2s | Yes | Client-side scoring, async persistence |
| SC-001: 3 clicks | Yes | Home → Domain → Pack → Discipline → Module (3 clicks max) |
| SC-004: Progression accuracy | Yes | Immediate DB write, optimistic UI update |
| SC-010: Mobile touch | Yes | Touch-first design, no hover dependencies |

## Resolved Clarifications

All technical clarifications from the specification have been addressed:

1. **Quiz passing threshold**: 70% - implemented in scoring engine
2. **Admin authentication**: Shared credentials via environment variables for MVP
3. **Concurrent edit handling**: Last-write-wins with updatedAt comparison for staleness warning
