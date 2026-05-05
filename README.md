# French Tech Copenhagen

The website for **French Tech Copenhagen** — the local node of [La French Tech](https://lafrenchtech.gouv.fr/en/) connecting the French and Danish tech ecosystems.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling
- **next-intl** for i18n (`en`, `da`)
- **Airtable** as the source of truth for directories (members, startups, mentors, partners)
- **Luma** for events (embedded calendar)
- **Sanity** planned for editorial content (pages, news, programs)
- **Vercel** for hosting

## Local development

```bash
npm install
cp .env.example .env.local   # fill what you have, others are optional
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/en`. Switch language via the header switcher (`EN` / `DA`).

The site builds and runs **without any environment variables** — directories fall back to mock data in `lib/directories/mock.ts` and the events calendar shows a placeholder until `NEXT_PUBLIC_LUMA_CALENDAR_URL` is set.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript only |

## Architecture

```
app/
  layout.tsx                 Passthrough root
  [locale]/
    layout.tsx               <html>/<body>, header, footer, NextIntlProvider
    page.tsx                 Home
    about/                   About + board
    community/               Community hub + sub-pages
      startups/
      members/               Pulled from Airtable
      mentors/
    events/                  Luma embed
    programs/                Local + national programs
      soft-landing/
    resources/               Doing-business guides + ecosystem map
    news/                    Sanity-driven (TBD)
    partners/                Pulled from Airtable
    contact/                 Form -> /api/contact
    press/
    legal/                   Privacy / Cookies / Imprint
  api/
    contact/                 Form handler (TODO: Resend)
    newsletter/              Newsletter signup (TODO: Mailchimp/Brevo)
    revalidate/              Airtable webhook -> revalidateTag()
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

Directories live in **Airtable**, not in the codebase. The board edits four tables (`Members`, `Startups`, `Mentors`, `Partners`) and the site picks up changes within an hour (or instantly via the revalidate webhook).

When `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` are not set, the site uses mock data so local dev and CI work without secrets.

To swap Airtable for Google Sheets later, only `lib/directories/airtable.ts` needs to be replaced.

### Brand & logo

The placeholder logo lives in `components/brand/Logo.tsx`. When the final logo arrives, replace the JSX inside that single component — every header, footer, OG image and favicon usage flows through it.

### Labellisation feature flag

The "official La French Tech community in Copenhagen" wording is gated behind a `siteSettings.isOfficiallyLabelled` flag (to be added in Sanity once the CMS is wired). Until the label lands, copy uses the neutral "the French Tech community in Copenhagen" framing.

## Roadmap

- **Phase 1 (this PR)**: Project skeleton, layout, home, page stubs, directories with mock fallback, Luma slot.
- **Phase 2**: Sanity Studio + content schemas (pages, news, board, programs, events).
- **Phase 3**: Wire Resend (contact) + Mailchimp/Brevo (newsletter).
- **Phase 4**: Real content, Plausible analytics, OG images, Lighthouse passes.
