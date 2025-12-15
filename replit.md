# QuantumCusp

## Overview

QuantumCusp is a professional marketing website for a technology company focused on helping businesses grow using digital solutions, scalable technology, and AI-enabled tools. The site features a modern, single-page layout with sections for hero, services, value proposition, solutions, about, and contact. The design follows enterprise SaaS aesthetics inspired by Stripe, Linear, and Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Build Tool**: esbuild for server bundling, Vite for client

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Current Storage**: In-memory storage class (`MemStorage`) - designed to be swapped for database implementation
- **Database Ready**: Drizzle config present for PostgreSQL when provisioned

### Project Structure
```
├── client/src/          # React frontend
│   ├── components/      # UI components (shadcn + custom)
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utilities and query client
├── server/              # Express backend
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Data persistence layer
│   └── index.ts         # Server entry point
├── shared/              # Shared code between client/server
│   └── schema.ts        # Drizzle schema and Zod types
└── attached_assets/     # Static assets and brand guidelines
```

### Key Design Decisions
1. **Monorepo Structure**: Client and server in single repository with shared types
2. **Type Safety**: Drizzle-Zod integration for automatic schema-to-validation sync
3. **Component Library**: shadcn/ui provides accessible, customizable primitives
4. **Path Aliases**: `@/` for client source, `@shared/` for shared code

## External Dependencies

### UI Framework
- Radix UI primitives (dialog, dropdown, tabs, etc.)
- Lucide React icons
- React Icons (social media icons)

### Data & Forms
- TanStack React Query for data fetching
- React Hook Form for form handling
- Zod for runtime validation

### Database
- Drizzle ORM (PostgreSQL dialect configured)
- `connect-pg-simple` for session storage when database is provisioned

### Build & Development
- Vite with React plugin
- esbuild for production server builds
- Replit-specific plugins for development (error overlay, cartographer)