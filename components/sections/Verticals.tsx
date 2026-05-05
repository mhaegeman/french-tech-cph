import { useTranslations } from "next-intl";

const KEYS = ["climate", "fintech", "health"] as const;

export function Verticals() {
  const t = useTranslations("home");
  return (
    <section className="container-page py-20">
      <p className="eyebrow">{t("verticalsTitle")}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
        {t("verticalsTitle")}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {KEYS.map((k) => (
          <article
            key={k}
            className="rounded-2xl border border-brand-ink/5 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="h-10 w-10 rounded-full bg-brand-red/10 ring-1 ring-brand-red/30" />
            <h3 className="mt-5 font-display text-xl font-semibold text-brand-ink">
              {t(`verticals.${k}.title`)}
            </h3>
            <p className="mt-2 text-sm text-brand-ink/70">
              {t(`verticals.${k}.body`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
