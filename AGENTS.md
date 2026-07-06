# AGENTS.md

## Project

This is a Next.js App Router project using TypeScript, React, and Tailwind CSS.

* Source code lives in `src/`.
* Static assets live in `public/`.
* Use the `@/*` import alias for internal imports.

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

## Validation

Before completing a change, run:

```bash
npm run lint
npm run build
```

Do not consider the change complete until both commands pass, unless the failure is unrelated to the current change and is clearly documented.

## Git Workflow

* Never commit or push directly to `main`.
* Create a dedicated branch for every change.
* Keep changes focused and limited to the task at hand.
* Do not commit secrets, generated output, or unrelated changes.
* Push the branch and open a pull request for review.
* Merge into `main` only through an approved pull request.
* Repository branch protection should block direct pushes to `main`.

## Commit Convention

Use Conventional Commits for every commit:

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

Allowed commit types:

```text
feat      Add a new feature
fix       Fix a bug
docs      Documentation-only changes
style     Formatting changes that do not affect behavior
refactor  Restructure code without changing behavior
perf      Improve performance
test      Add or update tests
build     Change the build system or dependencies
ci        Change CI configuration or scripts
chore     Maintenance not covered by another type
revert    Revert a previous commit
```

Use a scope when it clarifies the affected area:

```text
feat(auth): add password reset flow
fix(payments): handle failed webhook retries
```

Mark breaking changes with `!` and explain them in a `BREAKING CHANGE:` footer when needed:

```text
refactor(api)!: change appointment response format

BREAKING CHANGE: appointment responses now return `startsAt` instead of `start_time`.
```

When changes contain logically independent work, split them into separate commits before pushing. Each commit should be coherent, reviewable, and valid on its own.

## Pull Request Convention

Every change should be reviewed through a pull request.

PR titles should follow the same style as Conventional Commits:

```text
<type>(<scope>): <short summary>
```

The `scope` is optional but recommended when the change affects a specific area of the codebase.

Examples:

```text
feat(auth): add password reset flow
fix(payments): handle failed webhook retries
docs(api): update endpoint examples
refactor(users): simplify profile service
test(checkout): add integration coverage
chore(deps): update package dependencies
```

PR title guidelines:

* Use lowercase for the type and scope.
* Write the summary in imperative mood, such as `add`, `fix`, `update`, `remove`, or `simplify`.
* Keep the title concise, specific, and focused on the change.
* Prefer a scope when the affected area is clear.
* Do not end the title with a period.
* Do not include the PR author’s name in the title.
* Avoid vague titles such as `updates`, `bug fixes`, `misc changes`, or `work in progress`.

Good:

```text
fix(auth): prevent expired sessions from redirecting incorrectly
```

Bad:

```text
Fixed some auth stuff.
john - fix(auth): prevent expired sessions from redirecting incorrectly
```

Use assignees, reviewers, or the PR description to clarify ownership when needed.
