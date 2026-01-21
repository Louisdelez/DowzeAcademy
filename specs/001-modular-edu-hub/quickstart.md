# Quickstart: Hub Éducatif Modulaire MVP

**Branch**: `001-modular-edu-hub` | **Date**: 2026-01-21

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (or pnpm/yarn)
- PostgreSQL 15+ (or Docker)
- Git

## Initial Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd DowzeAcademy
npm install
```

### 2. Environment Configuration

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dowze_academy?schema=public"

# Auth (NextAuth.js)
NEXTAUTH_SECRET="your-secret-key-here"  # Generate with: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# Admin Credentials (MVP - shared login)
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your-admin-password"
```

### 3. Database Setup

**Option A: Local PostgreSQL**

```bash
# Create database
createdb dowze_academy

# Generate Prisma client and run migrations
npm run db:generate
npm run db:migrate
```

**Option B: Docker**

```bash
# Start PostgreSQL container
docker run --name dowze-db -e POSTGRES_PASSWORD=password -e POSTGRES_DB=dowze_academy -p 5432:5432 -d postgres:15

# Update DATABASE_URL in .env
DATABASE_URL="postgresql://postgres:password@localhost:5432/dowze_academy?schema=public"

# Generate Prisma client and run migrations
npm run db:generate
npm run db:migrate
```

### 4. Seed Demo Data

```bash
npm run db:seed
```

This creates:
- 1 Domain: "Gaming"
- 1 Pack: "League of Legends - Complete Journey"
- 1 Discipline: "Jungle Fundamentals"
- 5 Modules with lessons, quizzes, and practice exercises
- 1 Demo User (email: demo@example.com, password: demo123)

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Verification Checklist

### Learner Flow

- [ ] Home page displays Domain cards
- [ ] Click Domain → see Packs
- [ ] Click Pack → see Disciplines with progress
- [ ] Click Discipline → see Modules with status indicators
- [ ] First module is AVAILABLE, others are LOCKED
- [ ] Enter module → see Theory content
- [ ] Navigate to Quiz → answer questions
- [ ] Submit Quiz → see pass/fail feedback
- [ ] On pass → Practice section unlocked
- [ ] Complete Practice → Module marked COMPLETED
- [ ] Next module is now AVAILABLE

### Admin Flow

- [ ] Navigate to `/admin/login`
- [ ] Login with configured credentials
- [ ] Create new Domain (saved as DRAFT)
- [ ] Create Pack within Domain
- [ ] Create Discipline within Pack
- [ ] Create Module within Discipline
- [ ] Add Lesson with Theory, Quiz questions, Practice
- [ ] Publish Domain → visible to learners
- [ ] Edit published content → staleness warning on concurrent edit

### Error Handling

- [ ] Disconnect network → offline warning appears
- [ ] Attempt quiz submit offline → blocked with message
- [ ] Navigate to locked module URL → redirected with message

## Common Commands

```bash
# Development
npm run dev           # Start dev server
npm run build         # Production build
npm run start         # Start production server

# Database
npm run db:studio     # Open Prisma Studio (DB GUI)
npm run db:migrate    # Run migrations
npm run db:seed       # Seed demo data
npm run db:generate   # Regenerate Prisma client

# Testing
npm run test:e2e      # Run e2e tests (Playwright)
npm run test:e2e:ui   # Run e2e tests with UI

# Code Quality
npm run lint          # ESLint
npm run format        # Prettier
npm run typecheck     # TypeScript check
```

## Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── (learner)/           # Learner routes (home, domain, pack, discipline, module)
│   ├── admin/               # Admin panel routes
│   └── api/                 # API routes
├── components/              # React components
│   ├── ui/                  # Design system primitives
│   ├── cards/               # Content cards
│   ├── lesson/              # Theory/Quiz/Practice components
│   └── progression/         # Progress indicators
├── lib/                     # Utilities
│   ├── db/                  # Prisma client and queries
│   ├── auth/                # Authentication helpers
│   └── utils/               # General utilities
└── types/                   # TypeScript types

prisma/
├── schema.prisma            # Database schema
└── seed.ts                  # Seed data

tests/
├── e2e/                     # Playwright tests
├── integration/             # API tests
└── unit/                    # Unit tests
```

## Troubleshooting

### Database Connection Failed

```
Error: P1001: Can't reach database server
```

- Check PostgreSQL is running
- Verify DATABASE_URL in `.env`
- Check firewall/port settings

### Prisma Migration Error

```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset
```

### Admin Login Fails

1. Verify ADMIN_USERNAME and ADMIN_PASSWORD are set in `.env`
2. Check credentials match login input
3. Restart dev server after changing `.env`

### Quiz Not Passing at 70%

- Quiz threshold is configurable per lesson (default 70%)
- Check `quizThreshold` in lesson data
- Score calculation: (correct / total) * 100

## Next Steps

After verifying the quickstart:

1. Run `/speckit.tasks` to generate implementation tasks
2. Follow task list for systematic implementation
3. Run smoke tests after each phase completion

## Support

- Specification: `specs/001-modular-edu-hub/spec.md`
- Data Model: `specs/001-modular-edu-hub/data-model.md`
- API Contracts: `specs/001-modular-edu-hub/contracts/api.yaml`
- Constitution: `.specify/memory/constitution.md`
