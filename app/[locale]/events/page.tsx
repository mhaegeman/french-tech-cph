import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { pageAlternates } from "@/lib/seo";
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
      intro="Breakfasts, panels, founder dinners and conferences — RSVP via Luma."
    >
      <div className="overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm">
        {LUMA ? (
          <iframe
            src={LUMA}
            title="Events calendar"
            className="h-[720px] w-full"
            loading="lazy"
          />
        ) : (
          <div className="flex h-[320px] items-center justify-center px-6 text-center text-sm text-brand-ink/60">
            <p>
              Events calendar coming soon — check back shortly.
            </p>
          </div>
        )}
      </div>
    </PageShell>
  );
}
