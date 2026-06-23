# AMPT Solution Building Hub

Internal project workspace and prototype app for the Solution Studio x AMPT Chicago AI capacity-building engagement.

## Current Status

This project is in kickoff mode. The first product slice is an internal hub for Nick and Barb to manage the AMPT discovery engagement, while the marketing front end frames the work as a repeatable nonprofit AI capacity-building model.

The project now has two front doors:

- A public-facing marketing site that explains the broader nonprofit capacity-building offer.
- A working project hub for Nick, Barb, AMPT, and Denis audience-specific demos.

The app is scaffolded for the usual Solution Studio stack:

- GitHub for source control and checks
- Railway for Node hosting
- Supabase for future auth and persistent project data

## Workspace

- `public/marketing.html` - public-facing marketing site
- `public/marketing.css` - marketing site styling
- `public/index.html` - AMPT AI project hub UI
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

Use the hub with Barb to refine action items, intake questions, and pilot concepts before bringing Angela back into the planning loop. Then replace local storage with Supabase-backed project records once the workflow stabilizes.
