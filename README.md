Вот обновлённый README под твой проект:

````markdown
# Flora Backend

## Quick start

### Option A — Docker Postgres (recommended for local dev)

Requires Docker Desktop.

```bash
npm install
cp .env.example .env          # DATABASE_URL points at Docker on port 5433
npm run db:up                 # start PostgreSQL container
npx prisma migrate dev
npm run seed
npm run dev
```
````

Stop the database:

```bash
npm run db:down
```

### Option B — Postgres.app (no Docker)

```bash
npm install
cp .env.example .env          # uncomment the Postgres.app DATABASE_URL line
# create DB: psql -d postgres -c "CREATE DATABASE flora_backend;"
npx prisma migrate dev
npm run seed
npm run dev
```

Swagger UI: http://localhost:3001/api-docs

Run the frontend (`npm run dev` on port 3000) in a second terminal.

---

## API routes

Full CRUD is available for bouquet, feedback, order, and bestseller. See Swagger UI for request/response schemas.

### Bouquet

| Method | Path             | Description                              |
| ------ | ---------------- | ---------------------------------------- |
| GET    | /api/bouquet     | Paginated list (page, per-page)          |
| GET    | /api/bouquet/:id | Get one bouquet by id                    |
| POST   | /api/bouquet     | Create bouquet (img, title, desc, price) |
| PATCH  | /api/bouquet/:id | Partially update bouquet by id           |
| DELETE | /api/bouquet/:id | Delete bouquet by id                     |

### Feedback

| Method | Path              | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | /api/feedback     | Get all feedback                |
| GET    | /api/feedback/:id | Get one feedback by id          |
| POST   | /api/feedback     | Create feedback (text, author)  |
| PATCH  | /api/feedback/:id | Partially update feedback by id |
| DELETE | /api/feedback/:id | Delete feedback by id           |

### Order

| Method | Path           | Description                                             |
| ------ | -------------- | ------------------------------------------------------- |
| GET    | /api/order     | Get all orders                                          |
| GET    | /api/order/:id | Get one order by id                                     |
| POST   | /api/order     | Create order (name, phone, address, comment, bouquetId) |
| PATCH  | /api/order/:id | Partially update order by id                            |
| DELETE | /api/order/:id | Delete order by id                                      |

### Bestseller

| Method | Path            | Description         |
| ------ | --------------- | ------------------- |
| GET    | /api/bestseller | Get all bestsellers |

---

## Project structure

```
constants/          HTTP status codes
controllers/        Request handlers
helpers/            validation, pagination, Prisma client
middlewares/        404 and error handler
models/             Data access (Prisma)
prisma/             Schema and migrations
routes/api/         Route definitions via createRouter
schemas/            Joi validation
prisma/seed/        Database seed scripts (bouquet, feedback, order, bestseller)
```

---

## Environment

Copy `.env.example` to `.env`.

## Database

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `npm run db:up`          | Start PostgreSQL in Docker       |
| `npm run db:down`        | Stop PostgreSQL container        |
| `npm run db:logs`        | Follow Postgres container logs   |
| `npm run seed`           | Run seed scripts in prisma/seed/ |
| `npx prisma migrate dev` | Apply migrations (development)   |

Docker Postgres runs on `localhost:5433` (so it does not conflict with Postgres.app on 5432).

## Seed

```bash
npm run seed
```

Re-imports bouquets, bestsellers, and feedback from `prisma/seed/`. Clears existing orders, feedback, and bouquets first.

```

```
