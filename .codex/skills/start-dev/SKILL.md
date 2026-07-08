---
name: start-dev-server
description: Start the wellness-app local Next.js development server and report the URL to the user.
---

# Start Dev Server

Use this skill when the user asks to start, run, launch, or check the local development server for this project.

## Workflow

1. Work from the project root: `/home/psubedi/projects/wellness-app`.
2. Check whether dependencies are installed. If `node_modules/` is missing, run `npm install`.
3. Start the dev server with:

   ```bash
   npm run dev
   ```

   This delegates to the `web` workspace in `apps/web/`.

4. Keep the command running in a long-lived shell session.
5. Watch the output for the local URL, usually `http://localhost:3000`.
6. If port `3000` is already in use and Next.js selects another port, report the actual URL from the server output.
7. Tell the user the server is running and provide the URL.

## Notes

- Do not run `npm run build` just to start the dev server.
- If startup fails, report the relevant error and the command that failed.
- Do not stop an existing dev server unless the user asks.
