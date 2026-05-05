# French Tech Copenhagen

The website for **French Tech Copenhagen** — the local node of [La French Tech](https://lafrenchtech.gouv.fr/en/) connecting the French and Danish tech ecosystems.

## Stack

- **Next.js 15** (App Router, **static export**) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling
- **next-intl** for i18n (`en`, `da`)
- **Airtable** as the source of truth for directories (members, startups, mentors, partners)
- **Luma** for events (embedded calendar)
- **GitHub Pages** for hosting (no server, no API routes)
- **Sanity** planned for editorial content (pages, news, programs) — Phase 2

## Local development

```bash
npm install
cp .env.example .env.local   # fill what you have, others are optional
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/en/`. Switch language via the header switcher (`EN` / `DA`).

The site builds and runs **without any environment variables** — directories fall back to mock data in `lib/directories/mock.ts` and the events calendar shows a placeholder until `NEXT_PUBLIC_LUMA_CALENDAR_URL` is set.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `./out` |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript only |

## Deploying to GitHub Pages

The repo ships with `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages.

### One-time setup

1. **Repo → Settings → Pages → Source = "GitHub Actions"**.
2. Optional: add Actions **Variables** (Settings → Secrets and variables → Actions → Variables):
   - `NEXT_PUBLIC_LUMA_CALENDAR_URL`
   - `NEXT_PUBLIC_CONTACT_FORM_URL` (e.g. a Formspree endpoint)
   - `NEXT_PUBLIC_NEWSLETTER_FORM_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
3. Optional: add Actions **Secrets** for live Airtable data:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`

Without secrets the site still deploys — directories just use the mock data committed to `lib/directories/mock.ts`.

### Triggering a deploy

- Push to `main` → auto-deploy.
- Or run the workflow manually: **Actions → Deploy to GitHub Pages → Run workflow**.
- A scheduled rebuild runs daily at 06:00 UTC so Airtable edits show up within 24 h.

### Custom domain

Once a domain is registered, drop a `CNAME` file into `public/` containing the host (e.g. `frenchtechcph.dk`), point DNS at GitHub Pages, and clear `BASE_PATH` in the workflow (the site will then serve from `/` rather than `/<repo>/`).

## Architecture

```
app/
  layout.tsx                 Passthrough root
  page.tsx                   Root redirect to /en/ (meta-refresh)
  [locale]/
    layout.tsx               <html>/<body>, header, footer, NextIntlProvider
    page.tsx                 Home
    about/                   About + board
    community/               Community hub + sub-pages
      startups/              From Airtable
      members/               From Airtable
      mentors/               From Airtable
    events/                  Luma embed
    programs/                Local + national programs
      soft-landing/
    resources/               Doing-business guides + ecosystem map
    news/                    Sanity-driven (Phase 2)
    partners/                From Airtable
    contact/                 Form -> external endpoint (or mailto fallback)
    press/
    legal/                   Privacy / Cookies / Imprint
  sitemap.ts                 Sitemap with locale variants
  robots.ts
components/
  brand/Logo.tsx             Single source of truth — swap when final logo lands
  layout/                    Header, Footer, LocaleSwitcher, PageShell
  sections/                  Home-page sections
i18n/
  routing.ts navigation.ts request.ts
lib/
  cn.ts                      tiny class-name helper
  directories/               Airtable abstraction (with mock fallback)
messages/
  en.json da.json
```

### Editing directories (members, startups, mentors, partners)

Directories live in **Airtable**, not in the codebase. The board edits four tables (`Members`, `Startups`, `Mentors`, `Partners`); changes show up after the next deploy (push, manual workflow run, or the daily scheduled rebuild).

When `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` are not set, the site uses mock data so local dev and CI work without secrets.

To swap Airtable for Google Sheets later, only `lib/directories/airtable.ts` needs to be replaced.

### Forms (contact + newsletter)

GitHub Pages can't run server code, so forms post to an external endpoint via `NEXT_PUBLIC_CONTACT_FORM_URL` / `NEXT_PUBLIC_NEWSLETTER_FORM_URL`. Recommended options:

- [**Formspree**](https://formspree.io) — free tier, just paste the endpoint URL.
- [**Web3Forms**](https://web3forms.com) — free, no signup.
- **Mailchimp** embedded form for the newsletter (paste the action URL).

Without these set, the contact page shows a `mailto:` fallback button.

### Brand & logo

The placeholder logo lives in `components/brand/Logo.tsx`. When the final logo arrives, replace the JSX inside that single component — every header, footer, OG image and favicon usage flows through it.

### Labellisation feature flag

The "official La French Tech community in Copenhagen" wording is gated behind a `siteSettings.isOfficiallyLabelled` flag (to be added in Sanity once the CMS is wired). Until the label lands, copy uses the neutral "the French Tech community in Copenhagen" framing.

## Roadmap

- **Phase 1 (this branch)**: Project skeleton, layout, home, page stubs, directories with mock fallback, Luma slot, GitHub Pages deploy.
- **Phase 2**: Sanity Studio + content schemas (pages, news, board, programs, events). Move off GH Pages to Vercel/Netlify if/when dynamic features are needed.
- **Phase 3**: Wire Formspree (contact) + Mailchimp/Brevo (newsletter).
- **Phase 4**: Real content, Plausible analytics, OG images, Lighthouse passes.
