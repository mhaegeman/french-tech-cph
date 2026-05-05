import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * Replace the iframe `src` with the community Luma calendar URL when available
 * (e.g. https://lu.ma/embed/calendar/<id>/events). Until then we render a
 * placeholder card so the section still ships.
 */
const LUMA_CALENDAR_EMBED_URL = process.env.NEXT_PUBLIC_LUMA_CALENDAR_URL;

export function UpcomingEvents() {
  const t = useTranslations("home");
  return (
    <section className="bg-brand-mist">
      <div className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{t("upcomingTitle")}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              {t("upcomingTitle")}
            </h2>
            <p className="mt-3 max-w-prose text-brand-ink/70">
              {t("upcomingBody")}
            </p>
          </div>
          <Link href="/events" className="btn-secondary">
            {t("upcomingCta")} →
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm">
          {LUMA_CALENDAR_EMBED_URL ? (
            <iframe
              src={LUMA_CALENDAR_EMBED_URL}
              title="Upcoming events"
              className="h-[520px] w-full"
              loading="lazy"
            />
          ) : (
            <div className="flex h-[320px] items-center justify-center px-6 text-center text-sm text-brand-ink/60">
              <p>
                Luma calendar will appear here once{" "}
                <code className="rounded bg-brand-mist px-1.5 py-0.5 text-xs">
                  NEXT_PUBLIC_LUMA_CALENDAR_URL
                </code>{" "}
                is set.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
