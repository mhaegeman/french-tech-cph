import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { Link } from "@/i18n/navigation";
import { pageAlternates } from "@/lib/seo";
import { PAST_EVENTS } from "@/lib/events";
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
      <section>
        <h2 className="font-display text-2xl font-semibold text-brand-ink">
          Upcoming
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm">
          {LUMA ? (
            <iframe
              src={LUMA}
              title="Events calendar"
              className="h-[720px] w-full"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
              <p className="max-w-md text-brand-ink/70">
                No upcoming events scheduled yet. Drop us a line if you&apos;d
                like to be first to hear about the next one.
              </p>
              <Link href="/contact" className="btn-primary">
                Get notified
              </Link>
            </div>
          )}
        </div>
      </section>

      {PAST_EVENTS.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            Past events
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAST_EVENTS.map((e) => (
              <li
                key={e.url}
                className="flex flex-col rounded-2xl border border-brand-ink/5 bg-white p-6 shadow-sm"
              >
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
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageShell>
  );
}
