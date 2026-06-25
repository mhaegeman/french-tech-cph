import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { pageAlternates } from "@/lib/seo";
import { FEATURED_EVENTS, PAST_EVENTS } from "@/lib/events";
import { FeaturedEventCard } from "@/components/sections/FeaturedEventCard";
import type { Metadata } from "next";

const LUMA = process.env.NEXT_PUBLIC_LUMA_CALENDAR_URL;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: t("events"),
    alternates: pageAlternates(locale, "/events"),
  };
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      title={t("events")}
      intro="Breakfasts, panels, founder dinners and meet-ups for the French and Danish tech communities."
    >
      {FEATURED_EVENTS.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            Next up
          </h2>
          <div className="mt-6 space-y-6">
            {FEATURED_EVENTS.map((e) => (
              <FeaturedEventCard key={e.title} event={e} />
            ))}
          </div>
        </section>
      )}

      {LUMA && (
        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            Upcoming
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm">
            <iframe
              src={LUMA}
              title="Events calendar"
              className="h-[720px] w-full"
              loading="lazy"
            />
          </div>
        </section>
      )}

      {PAST_EVENTS.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            Past events
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PAST_EVENTS.map((e) => (
              <li
                key={e.url}
                className="flex flex-col overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm"
              >
                {e.image && (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${e.title} on Luma`}
                    className="relative block aspect-[4/3] w-full overflow-hidden bg-brand-mist"
                  >
                    <Image
                      src={e.image}
                      alt={`${e.title} invitation`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </a>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-lg font-semibold text-brand-ink">
                    {e.title}
                  </p>
                  <p className="mt-2 text-sm text-brand-ink/70">{e.date}</p>
                  {e.time && (
                    <p className="text-sm text-brand-ink/60">{e.time}</p>
                  )}
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-brand-red hover:underline"
                  >
                    View on Luma →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageShell>
  );
}
