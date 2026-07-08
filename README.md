# Wellness App

A wellness application with a PostgreSQL database managed through Prisma.

## Requirements

* Node.js
* Docker Compose or Podman Compose
* PostgreSQL container managed by `docker-compose.yaml`

## Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://wellness:wellness@localhost:5433/wellness?schema=public"
```

Start the database:

```bash
docker compose up -d postgres
```

Run Prisma setup:

```bash
npx prisma validate
npx prisma format
npx prisma generate
npx prisma migrate dev
```

## Database

PostgreSQL runs through Docker Compose.

Local connection:

```text
localhost:5433
```

Container connection:

```text
postgres:5432
```

Database credentials:

```text
User: wellness
Password: wellness
Database: wellness
```

## Prisma

This project uses Prisma 7.

Prisma schema:

```text
packages/db/prisma/schema.prisma
```

Prisma config:

```text
prisma.config.ts
```

Do not add `url = env("DATABASE_URL")` inside `schema.prisma`. The database URL is configured in `prisma.config.ts`.

## Useful Commands

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Open Prisma Studio:

```bash
npx prisma studio
```

Start Postgres:

```bash
docker compose up -d postgres
```

Stop services:

```bash
docker compose down
```
