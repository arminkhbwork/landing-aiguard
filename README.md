# Landing 02 — AIGuard

SEO-first startup landing page for an **AI governance / EU AI Act compliance** product.

## Local development (Node)

```bash
npm i
npm run dev
```

## Local development (Docker)

```bash
docker compose up --build
```

If port 3000 is already used (e.g. Dokploy), run:

```bash
HOST_PORT=3001 docker compose up --build
```

## Environment variables

Copy `.env.template` into `.env.local` and fill values as needed.

- `NEXT_PUBLIC_ALLOW_INDEXING`
  - `1`: allow indexing
  - `0`: disallow indexing via `robots.txt` (and “noindex” metadata)

## Project Details page

The top navigation’s last item is **Project Details**: `/project`.
