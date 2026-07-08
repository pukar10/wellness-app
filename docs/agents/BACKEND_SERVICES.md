# Backend Services

This project uses Docker Compose for local backend services.

Expected services:

- `web`: Next.js app
- `postgres`: primary relational database
- `redis`: cache, sessions, rate limits, queues, or background job coordination
- auth provider or auth service, depending on implementation

## Docker Compose

Keep Compose files at the repo root:

```text
docker-compose.yml
docker-compose.dev.yml
```

Keep service-specific config under `docker/`:

```text
docker/
├─ postgres/
│  └─ init.sql
└─ redis/
   └─ redis.conf
```

Use Compose service names inside containers:

```env
DATABASE_URL="postgresql://postgres:postgres@postgres:5432/wellness_app"
REDIS_URL="redis://redis:6379"
```

Use localhost only from the host machine:

```text
localhost:5432
localhost:6379
```

## Postgres

- Keep database access server-only.
- Do not import database clients into Client Components.
- Prefer migrations over manual schema edits.
- Keep seed scripts explicit and safe to rerun when possible.
- Never commit real user data, database dumps, or production credentials.

## Redis

- Keep Redis clients in server-only code.
- Use Redis for caching, sessions, rate limiting, queues, or short-lived state.
- Do not use Redis as the source of truth for important wellness data.
- Add clear key prefixes, for example `wellness:sessions:*` or `wellness:rate-limit:*`.

## Authentication

- Keep auth secrets server-only.
- Prefer secure, HTTP-only cookies for sessions when applicable.
- Validate authorization on the server for every protected resource.
- Do not trust client-provided user IDs, roles, or ownership fields.
- Ensure users can only access their own wellness data unless an explicit permission model allows otherwise.

## Environment Variables

- Store local secrets in `.env.local` or an ignored environment file.
- Document required variables in `.env.example` with safe placeholder values.
- Public browser variables must use the proper Next.js public prefix and must never contain secrets.
