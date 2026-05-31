# French Tech Copenhagen

**The bridge between the French and Danish tech ecosystems.**

French Tech Copenhagen is a volunteer-run community connecting French and Danish founders, operators, investors, mentors and partners. We're the local Copenhagen node of [La French Tech](https://lafrenchtech.gouv.fr/en/), the worldwide network of French tech communities backed by the French government.

This repository hosts the source code of our website: **[frenchtechcopenhagen.com](https://frenchtechcopenhagen.com)**.

## What we do

- **Events**: breakfasts, panels, founder dinners and bigger conferences across Copenhagen.
- **Soft-landing**: a step-by-step path for French startups setting up in Denmark.
- **Mentorship**: pairing founders with experienced operators on both sides of the bridge.
- **Community**: a directory of French startups in Denmark, members, mentors and partners.
- **Programs**: local initiatives plus the national programs run by La Mission French Tech (Next40/120, French Tech 2030, Tremplin).

## Focus areas

- **Climate & Energy**: wind, hydrogen, energy efficiency, sustainable mobility.
- **Fintech & Payments**: open banking, payments, B2B SaaS for finance.
- **Health & Life Sciences**: medtech, digital health, biotech, with strong ties to Medicon Valley.

## Get involved

- **Join the community** → the [contact page](https://frenchtechcopenhagen.com/en/contact) on the site.
- **Come to an event** → see the [events page](https://frenchtechcopenhagen.com/en/events).
- **Become a partner** → reach out via the contact form.
- **Follow us on LinkedIn** for updates between newsletters.

## Our partners

We work with the **French Embassy in Denmark**, **Business France**, the **French Chamber of Commerce in Denmark**, and a growing roster of corporate and ecosystem partners.

French Tech Copenhagen operates in partnership with **AEPIFD** (Association des Entrepreneurs et Professionnels Indépendants Français du Danemark), which acts as the legal carrier for the 2026–2028 labellisation period.

---

## For developers

The site is built with **Next.js**, **React** and **TypeScript**, styled with **Tailwind CSS**, translated with **next-intl** (English and Danish), and deployed as a static export to **GitHub Pages**. Community directories are powered by **Airtable**; events by **Luma**.

### Run it locally

```bash
npm install
cp .env.example .env.local   # optional, the site runs with empty values
npm run dev
```

Then open <http://localhost:3000>. The site works without any environment variables: directories fall back to mock data and the events calendar shows a placeholder.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `./out` |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

### Deployment

Pushes to `main` auto-deploy via GitHub Actions (`.github/workflows/deploy.yml`). A scheduled rebuild runs daily so Airtable edits show up within 24 hours.

Optional Actions variables for live data and forms:

- `NEXT_PUBLIC_LUMA_CALENDAR_URL`: embedded events calendar
- `NEXT_PUBLIC_CONTACT_FORM_URL` / `NEXT_PUBLIC_NEWSLETTER_FORM_URL`: Formspree / Mailchimp endpoints
- `NEXT_PUBLIC_CONTACT_EMAIL`: fallback contact address
- `AIRTABLE_API_KEY` / `AIRTABLE_BASE_ID`: live community directories

### Contributing

Found a typo, a broken link, or want to suggest a feature? Open an issue or a pull request. Contributions from the community are welcome.

## License

Built by the community, for the community.
