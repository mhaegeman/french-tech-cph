# French Tech Copenhagen

## For developers

The site is built with **Next.js**, **React** and **TypeScript**, styled with **Tailwind CSS**, translated with **next-intl** (English and Danish), and deployed as a static export to **GitHub Pages**. Events are powered by **Luma**.

### Run it locally

```bash
npm install
cp .env.example .env.local   # optional, the site runs with empty values
npm run dev
```

Then open <http://localhost:3000>. The site works without any environment variables: the events calendar shows a placeholder until one is configured.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `./out` |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

### Deployment

Pushes to `main` auto-deploy via GitHub Actions (`.github/workflows/deploy.yml`).

Optional Actions variables for live data and forms:

- `NEXT_PUBLIC_LUMA_CALENDAR_URL`: embedded events calendar
- `NEXT_PUBLIC_CONTACT_FORM_URL` / `NEXT_PUBLIC_NEWSLETTER_FORM_URL`: Formspree / Mailchimp endpoints
- `NEXT_PUBLIC_CONTACT_EMAIL`: fallback contact address

### Contributing

Found a typo, a broken link, or want to suggest a feature? Open an issue or a pull request. Contributions from the community are welcome.

## License

Built by the community, for the community.
