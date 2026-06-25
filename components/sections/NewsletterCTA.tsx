import { useTranslations } from "next-intl";

const FORM_URL = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_URL;

export function NewsletterCTA() {
  const t = useTranslations("home");
  return (
    <section className="container-page py-20">
      <div className="overflow-hidden rounded-3xl bg-brand-ink px-8 py-14 text-white sm:px-14">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t("newsletterTitle")}
            </h2>
            <p className="mt-3 max-w-prose text-white/70">
              {t("newsletterBody")}
            </p>
          </div>
          {FORM_URL ? (
            <form
              className="flex flex-col gap-2 sm:flex-row"
              action={FORM_URL}
              method="post"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                {t("newsletterCta")}
              </button>
            </form>
          ) : (
            <div className="flex justify-start md:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/60">
                <span
                  className="h-2 w-2 rounded-full bg-brand-red"
                  aria-hidden="true"
                />
                {t("newsletterComingSoon")}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
