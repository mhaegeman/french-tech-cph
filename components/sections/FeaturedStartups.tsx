import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Startup } from "@/lib/directories";

export function FeaturedStartups({ startups }: { startups: Startup[] }) {
  const t = useTranslations("home");
  const tLabels = useTranslations("labels");

  if (startups.length === 0) {
    return (
      <section className="border-y border-brand-ink/5 bg-white">
        <div className="container-page py-20">
          <p className="eyebrow">{t("startupsTitle")}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            {t("startupsTitle")}
          </h2>
          <p className="mt-6 rounded-2xl border border-dashed border-brand-ink/15 bg-brand-mist p-8 text-sm text-brand-ink/60">
            {tLabels("comingSoon")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-brand-ink/5 bg-white">
      <div className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{t("startupsTitle")}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              {t("startupsTitle")}
            </h2>
          </div>
          <Link href="/community/startups" className="btn-secondary">
            {t("startupsCta")} →
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {startups.map((s) => (
            <li
              key={s.id}
              className="rounded-2xl border border-brand-ink/5 bg-brand-mist/50 p-5"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold text-brand-ink">
                  {s.name}
                </p>
                <div className="flex gap-1">
                  {s.presence.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold tracking-wider text-brand-ink/60 ring-1 ring-brand-ink/10"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-brand-ink/70">{s.oneLiner}</p>
              {s.websiteUrl && (
                <a
                  href={s.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-xs font-semibold text-brand-red hover:underline"
                >
                  {s.websiteUrl.replace(/^https?:\/\//, "")} →
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
