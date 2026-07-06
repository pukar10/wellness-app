# AGENTS.md

## Project

Next.js App Router project using TypeScript, React, and Tailwind CSS. Source
code lives in `src/`; static assets live in `public/`.

## Development

- Use Server Components by default. Add `"use client"` only when browser APIs,
  state, effects, or event handlers require it.
- Keep data fetching on the server when possible.
- Use Server Actions or Route Handlers for mutations and APIs.
- Validate untrusted input and never expose secrets to client code.
- Use `next/image`, `next/font`, and `next/link` where appropriate.
- Keep components focused, accessible, and colocated with related code.
- Use TypeScript and the `@/*` import alias.
- Follow existing Tailwind CSS and project conventions.
- Consult `node_modules/next/dist/docs/` for version-specific Next.js behavior.

## Validation

Before completing a change, run:

```bash
npm run lint
npm run build
```

## Git

- Use Conventional Commits for every commit:
  `<type>[optional scope][!]: <description>`.
- Allowed commit types:
  - `feat`: add a new feature.
  - `fix`: correct a bug.
  - `docs`: change documentation only.
  - `style`: change formatting without affecting behavior.
  - `refactor`: restructure code without adding a feature or fixing a bug.
  - `perf`: improve performance.
  - `test`: add or update tests.
  - `build`: change the build system or dependencies.
  - `ci`: change CI configuration or scripts.
  - `chore`: perform maintenance not covered by another type.
  - `revert`: revert a previous commit.
- Use an optional scope to identify the affected area, such as
  `feat(auth): add sign-in form`.
- Mark breaking changes with `!`, such as
  `refactor(api)!: change appointment response format`, and explain them in a
  `BREAKING CHANGE:` footer when needed.
- When changes contain logically independent work, split them into separate,
  focused commits before pushing. Each commit should be coherent, reviewable,
  and valid on its own.
- Keep commits focused and do not push commits that do not follow the
  Conventional Commits specification.
- Do not commit secrets, generated output, or unrelated changes.

## Pull Requests

- Never commit or push directly to `main`.
- Create a dedicated branch for every change.
- Push the branch and open a pull request for all new changes.
- Merge changes into `main` only through an approved pull request.
- Repository branch protection should block direct pushes to `main`.
