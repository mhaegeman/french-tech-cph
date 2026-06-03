import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FEATURED_EVENTS } from "@/lib/events";
import { FeaturedEventCard } from "@/components/sections/FeaturedEventCard";

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

        {FEATURED_EVENTS.length > 0 && (
          <div className="mt-10 space-y-6">
            {FEATURED_EVENTS.map((e) => (
              <FeaturedEventCard key={e.title} event={e} />
            ))}
          </div>
        )}

        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm">
          {LUMA_CALENDAR_EMBED_URL ? (
            <iframe
              src={LUMA_CALENDAR_EMBED_URL}
              title="Upcoming events"
              className="h-[520px] w-full"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
              <p className="max-w-md text-brand-ink/70">
                No upcoming events on the calendar yet. See past events or get
                in touch to be first to hear about the next one.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/events" className="btn-secondary">
                  See past events →
                </Link>
                <Link href="/contact" className="btn-primary">
                  Get notified
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
