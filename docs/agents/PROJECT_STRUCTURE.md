# Project Structure

Recommended monorepo layout:

```text
WELLNESS-APP/
├─ apps/
│  └─ web/
│     ├─ src/
│     │  ├─ app/
│     │  │  ├─ api/
│     │  │  ├─ layout.tsx
│     │  │  └─ page.tsx
│     │  ├─ components/
│     │  ├─ features/
│     │  ├─ hooks/
│     │  ├─ server/
│     │  ├─ lib/
│     │  ├─ styles/
│     │  └─ types/
│     ├─ public/
│     ├─ next.config.js
│     ├─ package.json
│     └─ tsconfig.json
│
├─ packages/
│  ├─ db/
│  ├─ auth/
│  ├─ ui/
│  └─ config/
│
├─ docker/
│  ├─ postgres/
│  └─ redis/
│
├─ docker-compose.yaml
├─ docker-compose-dev.yaml
├─ .env.example
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ AGENTS.md
└─ README.md
```

## Boundaries

- `apps/web/src/app/`: Next.js routes, layouts, pages, loading states, error boundaries, and route handlers.
- `apps/web/src/components/`: reusable UI used by the web app.
- `apps/web/src/features/`: feature modules such as auth, onboarding, check-ins, goals, habits, dashboards, and user settings.
- `apps/web/src/hooks/`: client-side React hooks only.
- `apps/web/src/server/`: server-only code for database access, Redis clients, auth helpers, services, jobs, and integrations.
- `apps/web/src/lib/`: safe shared utilities that can be imported by server or client code.
- `packages/db/`: shared database schema, migrations, Prisma client, or repositories only if used outside the web app.
- `packages/auth/`: shared auth helpers only if needed by multiple apps or services.
- `packages/ui/`: shared design system components only if reused by multiple apps.
- `packages/config/`: shared ESLint, TypeScript, or other config.

## Rule of thumb

- If code belongs only to the Next.js app, keep it under `apps/web/src/`.
- If code is shared across multiple apps or services, move it to `packages/*`.
- Do not place source modules (lib, styles, types, etc.) directly under the `apps/` root
  (e.g. `apps/lib/`, `apps/styles/`). These belong in one of the two locations above.
