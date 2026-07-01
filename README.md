# Nonprofit Operations Assistant

Prototype for a simple nonprofit operations assistant that helps teams draft grants and reports, build board materials, organize meeting follow-up, and reuse trusted internal knowledge.

## Current Status

This project is being reframed from a broad capacity-building hub into a narrower SaaS concept: a simple assistant for recurring nonprofit paperwork and documentation. The guiding product principle is "less is more."

The project now has two front doors:

- A public-facing marketing site that explains the nonprofit operations assistant concept.
- A working prototype for testing three product wedges: grant/report assistant, board packet assistant, and nonprofit knowledge desk.

The app is scaffolded for the usual Solution Studio stack:

- GitHub for source control and checks
- Railway for Node hosting
- Supabase for future auth and persistent project data

## Workspace

- `public/marketing.html` - public-facing marketing site
- `public/marketing.css` - marketing site styling
- `public/index.html` - prototype app UI
- `public/styles.css` - app styling
- `public/app.js` - local state, seeded project data, and draft helpers
- `server/index.js` - Express server for Railway deployment
- `supabase/migrations/` - initial Supabase schema draft
- `railway.json` - Railway deployment settings
- `.github/workflows/check.yml` - GitHub Actions syntax check
- `docs/project-brief.md` - working project brief
- `docs/context-notes.md` - raw context, assumptions, and questions
- `docs/decisions.md` - decision log
- `docs/roadmap.md` - phased roadmap draft

## Run the App

Install dependencies:

```sh
npm install
```

Start locally:

```sh
npm run dev
```

Then open `http://localhost:3000`.

Routes:

- `http://localhost:3000/` - marketing site
- `http://localhost:3000/hub` - working prototype hub

The current prototype stores edits in browser local storage. Supabase is scaffolded but not yet required for app usage.

## Environment

Copy `.env.example` to `.env` for local development and set Supabase values when ready:

```sh
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Railway sets `PORT` automatically.

## Deployment Path

1. Push this repo to GitHub.
2. Create a Supabase project and apply the migration in `supabase/migrations/`.
3. Create a Railway service from the GitHub repo.
4. Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to Railway variables.
5. Deploy with `npm start`.

## Next Step

Use the prototype with Barb to test which SaaS wedge is easiest to explain and most valuable: grant/report drafting, board packet creation, or nonprofit knowledge desk. Then replace local storage with Supabase-backed records once the first workflow stabilizes.
