# AGENTS.md

## Project

This is a wellness-focused npm workspaces monorepo using Next.js App Router, Docker Compose, Postgres, Redis, and authentication.

Assume the main web app lives in `apps/web/`:

- Next.js source: `apps/web/src/`
- Routes, layouts, pages, and route handlers: `apps/web/src/app/`
- UI components: `apps/web/src/components/`
- Feature code: `apps/web/src/features/`
- React hooks: `apps/web/src/hooks/`
- Server-only app code: `apps/web/src/server/`
- Shared utilities: `apps/web/src/lib/`
- Static assets: `apps/web/public/`
- Docker files and service config: root `docker-compose*.yml` and `docker/`

Use the `@/*` alias for imports inside `apps/web`. Do not mix root-level `src/` with `apps/web/src/`.

For more structure and service details, see:

- `docs/agents/PROJECT_STRUCTURE.md`
- `docs/agents/BACKEND_SERVICES.md`

## Development Guidelines

- Use Server Components by default.
- Add `"use client"` only for browser APIs, state, effects, refs, or event handlers.
- Keep database, Redis, auth, secrets, and privileged logic in server-only code.
- Put backend-only app logic in `apps/web/src/server/`.
- Use Route Handlers in `apps/web/src/app/api/` for HTTP endpoints.
- Use Server Actions or Route Handlers for mutations.
- Validate all untrusted input at server boundaries.
- Treat wellness data as sensitive. Do not log private user health, mood, habit, journal, or profile data unless explicitly required and sanitized.
- Never expose secrets, credentials, tokens, private environment variables, or service URLs to client code.
- Use `next/image`, `next/font`, and `next/link` where appropriate.
- Keep components focused, accessible, typed, and consistent with existing TypeScript and styling conventions.

## Monorepo Guidelines

- Prefer root scripts such as `npm run lint`, `npm run build`, and `npm run test`.
- If a workspace-specific command is needed, run it through npm workspaces from the repo root.
- Keep shared code in `packages/*` only when it is used by more than one app or service.
- Do not create shared packages prematurely. App-specific code should stay in `apps/web/src/`.
- Keep infrastructure config at the repo root or under `docker/`.

## Repository Safety

- Do not discard, reset, overwrite, or rewrite user changes unless explicitly requested.
- Leave unrelated local changes untouched.
- Keep changes focused and limited to the task.
- Do not commit secrets, generated output, `node_modules/`, `.next/`, build artifacts, or `.env.local`.
- Update `.env.example` when adding required environment variables.

## Validation

Before completing a change, run the relevant checks from the repo root:

```bash
npm run lint
npm run build
```

When applicable, also run:

```bash
npm run test
docker compose config
```

Do not consider a change complete until required checks pass, unless a failure is unrelated and clearly documented.

## Git Policy

- Never commit or push directly to `main`.
- Create a dedicated branch for each change when starting from `main`.
- Use pull requests before merging into `main`.
- Keep PRs focused, reviewable, and limited to one logical change.

## Commits

Use Conventional Commits:

```text
<type>[optional scope][!]: <description>
```

Examples:

```text
feat(auth): add sign-in flow
fix(api): validate wellness check-in input
docs(setup): add docker compose instructions
refactor(db)!: rename wellness entry fields
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

Use clear scopes such as `web`, `auth`, `api`, `db`, `redis`, `docker`, `ui`, `wellness`, or `deps`.
