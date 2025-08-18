# Auth Server (Node + Express + TypeScript)

A minimal Express server written in TypeScript, using Yarn.

## Scripts

- `yarn dev` - Run in watch mode with ts-node-dev
- `yarn build` - Compile TypeScript to `dist/`
- `yarn start` - Start compiled server
- `yarn test` - Run unit tests with Vitest

## Endpoints

- `GET /health` -> `{ "status": "ok" }`

## Setup

1. Install dependencies
2. Copy `.env.example` to `.env` and adjust if needed
3. Run dev server

## Try it

```bash
# 1) Install deps
yarn

# 2) Optional: env
cp .env.example .env

# 3) Start dev server
yarn dev

# In another terminal, test
curl http://localhost:3000/health
```
