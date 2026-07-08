# AGENTS.md

## Project

This is an npm workspaces monorepo. The Next.js App Router project lives in `apps/web/`.

* Source code lives in `apps/web/src/`.
* Static assets live in `apps/web/public/`.
* Use the `@/*` import alias for internal imports within `apps/web`.
* Run app scripts from the repo root via `npm run <script>` (delegates to the `web` workspace), or `cd apps/web` and run them directly.

## Development Guidelines

* Use Server Components by default.
* Add `"use client"` only when browser APIs, state, effects, refs, or event handlers are required.
* Keep data fetching on the server whenever possible.
* Use Server Actions or Route Handlers for mutations and API endpoints.
* Validate all untrusted input.
* Never expose secrets, credentials, tokens, or private environment variables to client code.
* Use `next/image`, `next/font`, and `next/link` where appropriate.
* Keep components focused, accessible, and colocated with related code.
* Follow existing TypeScript, Tailwind CSS, formatting, and project conventions.
* Consult `node_modules/next/dist/docs/` for version-specific Next.js behavior when needed.

## Repository Safety

* Do not discard, reset, overwrite, or rewrite user changes unless explicitly requested.
* If unrelated local changes are present, leave them untouched.
* Keep changes focused and limited to the task.
* Do not commit secrets, generated output, or unrelated changes.

## Validation

Before completing a change, run:

```bash
npm run lint
npm run build
```

Do not consider the change complete until both commands pass, unless a failure is unrelated to the current change and is clearly documented.

## Git Policy

* Never commit or push directly to `main`.
* Create a dedicated branch for each change when starting from `main`.
* Use pull requests for review before merging into `main`.
* Branch protection should block direct pushes to `main`.

## Commits

Use Conventional Commits:

```text
<type>[optional scope][!]: <description>
```

Examples:

```text
feat(auth): add sign-in form
fix(api): handle missing appointment data
docs(readme): update setup instructions
refactor(api)!: change appointment response format
```

Allowed types:

```text
feat      Add a feature
fix       Fix a bug
docs      Documentation-only changes
style     Formatting changes that do not affect behavior
refactor  Restructure code without changing behavior
perf      Improve performance
test      Add or update tests
build     Change build system or dependencies
ci        Change CI configuration or scripts
chore     Maintenance not covered by another type
revert    Revert a previous commit
```

Use a scope when it clarifies the affected area:

```text
feat(auth): add password reset flow
fix(payments): handle failed webhook retries
```

Mark breaking changes with `!` and include a `BREAKING CHANGE:` footer when needed:

```text
refactor(api)!: change appointment response format

BREAKING CHANGE: appointment responses now return `startsAt` instead of `start_time`.
```

Split logically independent changes into separate commits when practical. Each commit should be coherent, reviewable, and valid on its own.

## Pull Requests

PR titles should follow Conventional Commit style:

```text
<type>[optional scope]: <short summary>
```

Examples:

```text
feat(auth): add password reset flow
fix(payments): handle failed webhook retries
docs(api): update endpoint examples
test(checkout): add integration coverage
chore(deps): update package dependencies
```

PR titles should be concise, specific, and focused. Use lowercase for the type and scope, prefer imperative mood, and avoid vague titles such as `updates`, `bug fixes`, `misc changes`, or `work in progress`.

## Prisma / Database Notes

* This project uses Prisma 7.
* Do not add `url = env("DATABASE_URL")` inside `schema.prisma`.
* The database URL is configured in the root `prisma.config.ts`.
* The Prisma schema is located at `packages/db/prisma/schema.prisma`.
* Run Prisma commands from the project root.
* Local Postgres runs through Docker Compose/Podman Compose.
* Host connection uses port `5433`, while the container uses port `5432`.

Common commands:

```bash
docker compose up -d postgres
npx prisma validate
npx prisma format
npx prisma generate
npx prisma migrate dev
```
