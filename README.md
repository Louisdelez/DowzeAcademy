# Dowze Academy - Hub Éducatif Modulaire

Une plateforme éducative universelle avec une structure de contenu hiérarchique et un triptyque pédagogique obligatoire (Théorie → Quiz → Pratique).

## Structure du Contenu

```
Domaine → Pack → Discipline → Module → Leçon
```

Chaque module contient :
- **Théorie** : Contenu en Markdown
- **Quiz** : Questions à choix unique/multiple ou texte court (seuil de réussite : 70%)
- **Pratique** : Instructions avec validation déclarative

## Prérequis

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

## Installation

1. **Cloner le repository**
```bash
git clone <repository-url>
cd DowzeAcademy
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env
```

Modifier `.env` avec vos valeurs :
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dowze_academy"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your-secure-password"
```

4. **Initialiser la base de données**
```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

5. **Lancer le serveur de développement**
```bash
npm run dev
```

L'application est accessible sur `http://localhost:3000`

## Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run typecheck` | Vérification TypeScript |
| `npm run lint` | Linting ESLint |
| `npm run format` | Formatage Prettier |
| `npm run db:generate` | Génération client Prisma |
| `npm run db:migrate` | Migrations Prisma |
| `npm run db:seed` | Données de démonstration |
| `npm run db:studio` | Interface Prisma Studio |
| `npm run test:e2e` | Tests Playwright |
| `npm run test:e2e:ui` | Tests Playwright avec UI |

## Architecture

```
src/
├── app/
│   ├── (learner)/          # Routes apprenant (public)
│   │   ├── domain/[id]/
│   │   ├── pack/[id]/
│   │   ├── discipline/[id]/
│   │   └── module/[id]/
│   ├── admin/              # Routes administration
│   │   ├── domains/
│   │   ├── packs/
│   │   ├── disciplines/
│   │   └── modules/
│   └── api/
│       ├── content/        # API contenu public
│       ├── progression/    # API progression utilisateur
│       ├── quiz/           # API quiz
│       └── admin/          # API administration
├── components/
│   ├── ui/                 # Composants design system
│   ├── cards/              # Cartes (Domain, Pack, etc.)
│   ├── lesson/             # Composants leçon
│   ├── progression/        # Composants progression
│   ├── admin/              # Composants admin
│   └── connectivity/       # Gestion offline
├── lib/
│   ├── auth/               # Authentification
│   ├── db/                 # Client Prisma
│   ├── hooks/              # Hooks React
│   ├── providers/          # Providers (Query, etc.)
│   ├── services/           # Services métier
│   └── utils/              # Utilitaires
└── types/                  # Types TypeScript
```

## Fonctionnalités

### Pour les Apprenants
- Navigation dans la hiérarchie de contenu
- Complétion de modules (Théorie → Quiz → Pratique)
- Suivi de progression persistant
- Interface responsive mobile-first

### Pour les Administrateurs
- Gestion complète du contenu (CRUD)
- Éditeur de leçons avec quiz
- Workflow brouillon/publié
- Détection des modifications concurrentes

### Gestion de la Connectivité
- Indicateur de statut réseau
- Blocage des actions critiques hors ligne
- Avertissements de données obsolètes
- Headers ETag pour le cache

## Technologies

- **Frontend** : Next.js 16, React 19, TailwindCSS 4
- **Backend** : Next.js App Router, API Routes
- **Base de données** : PostgreSQL, Prisma 7
- **Authentification** : NextAuth.js (apprenants), Cookie session (admin)
- **State Management** : TanStack Query 5
- **Tests** : Playwright

## Modèle de Données

```
Domain (1:N) → Pack (1:N) → Discipline (1:N) → Module (1:1) → Lesson (1:N) → QuizQuestion

User (1:N) → UserProgression (1:N) → QuizAttempt
```

## Licence

Propriétaire - Tous droits réservés
