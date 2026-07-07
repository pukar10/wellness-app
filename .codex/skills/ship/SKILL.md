---
name: ship
description: Prepare local work for review and open a pull request to main. Use when the user asks to ship changes, create a PR, publish a branch, or otherwise move completed local work toward review. Handles creating a new conventional branch when currently on main, syncing non-main branches with main, committing intended changes, pushing the branch, and opening a PR to main.
---

# Ship

## Overview

Use this workflow to move completed local work into a reviewable pull request targeting `main`.

Follow the repository standards in `AGENTS.md`. Preserve user work, avoid direct pushes to `main`, and make the branch, commit, and PR names consistent with the repository’s Conventional Commit style.

## Workflow

1. Inspect repository state:

   * Run `git status --short --branch`.
   * Run `git remote -v`.
   * Confirm the current branch with `git branch --show-current`.
   * Identify the default upstream remote, preferring `origin`.

2. Classify local changes:

   * Do not discard, reset, checkout over, overwrite, or rewrite user changes unless explicitly requested.
   * Inspect every modified, staged, and untracked path before shipping. Use `git diff`, `git diff --cached`, and targeted file reads for untracked files.
   * Do not leave untracked files behind silently. Decide whether each untracked path is part of the current shipment, belongs in a separate logical commit on the same branch, should move to a more appropriate branch, or is unsafe to classify without user input.
   * Categorize unrelated work by the actual change type using the repository’s Conventional Commit rules. Examples: new docs or Codex instructions use `docs(...)` or `chore(...)`; build tooling uses `build(...)`; tests use `test(...)`; app behavior uses `feat(...)` or `fix(...)`.
   * If unrelated local changes are coherent and reviewable with the current branch, include them as a separate commit and mention that scope in the PR body.
   * If unrelated local changes clearly do not belong with the current branch or PR, create or switch to an appropriate branch before committing them, then ship that branch or ask the user which branch to prioritize when multiple shipments would be created.
   * Stop and ask the user only when a path appears secret, destructive, generated, too ambiguous to classify, or would require rewriting/discarding work.
   * Commit only files that have been inspected and intentionally classified.

3. Ensure there is a working branch:

   * If on `main`, create a new branch before committing or pushing.
   * Name branches with a conventional, lowercase, hyphenated pattern:

     * `feat/<short-description>`
     * `fix/<short-description>`
     * `docs/<short-description>`
     * `refactor/<short-description>`
     * `test/<short-description>`
     * `chore/<short-description>`
   * Choose the type from the actual change.
   * Use `chore/ship-<topic>` only when no better type applies.
   * If already on a non-main branch, keep using it unless its name is clearly wrong and the user asked for a rename.

4. Sync with `main`:

   * Fetch the upstream remote.
   * Update local knowledge of `main` using a non-destructive command such as `git fetch origin main`.
   * If on a non-main branch, bring it up to date with `origin/main` before opening the PR.
   * Prefer merge or rebase based on repository convention.
   * If no convention is evident, use a normal merge to avoid rewriting shared branch history.
   * If conflicts occur, stop and report the conflicted files. Do not invent conflict resolutions without inspecting the code.

5. Validate before shipping:

   * Run the validation commands required by `AGENTS.md`.
   * Also run any task-specific checks discovered in README, package scripts, or related docs.
   * If validation fails for an unrelated or environmental reason, document the failure clearly in the final response and, when appropriate, in the PR body.

6. Commit:

   * Follow the repository’s Conventional Commit rules from `AGENTS.md`.
   * Keep each commit coherent and reviewable.
   * Split logically independent work into separate commits when practical.
   * Commit only intended files.
   * Do not include secrets, generated output, or unrelated changes.

7. Push and open the PR:

   * Push the working branch to the upstream remote.
   * Open a pull request targeting `main`.
   * Use a PR title in Conventional Commit style, usually matching the main commit title.
   * Write a concise PR body with a summary and validation results.
   * Prefer draft PRs when the user asks for a draft, validation is incomplete, or the branch is not ready for final review.
   * If this workflow created a new local branch, switch back to `main` after the PR is created and delete that local branch.

## Command Preferences

* Prefer GitHub connector tools for PR creation when available.
* Use `gh pr create` when connector coverage is insufficient and `gh` is installed.
* Request network or GitHub approval when fetching, pushing, or creating a PR requires it.
* Avoid interactive git commands; use explicit non-interactive commands.

## PR Body Template

```markdown
## Summary
-

## Validation
-
```

## Final Response

Report:

* Branch name
* PR URL
* Commit title or titles
* Validation status

If any step was blocked, state the exact blocker and the safest next action.
