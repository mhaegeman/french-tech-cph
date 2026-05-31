import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { getStartups } from "@/lib/directories";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: t("startups"),
    alternates: pageAlternates(locale, "/community/startups"),
  };
}

export default async function StartupsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  const startups = await getStartups();

  return (
    <PageShell
      eyebrow={t("community")}
      title={t("startups")}
      intro="French startups operating in Denmark, or Danish startups with strong French ties."
    >
      {startups.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {startups.map((s) => (
            <li
              key={s.id}
              className="rounded-2xl border border-brand-ink/5 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold text-brand-ink">
                  {s.name}
                </p>
                <div className="flex gap-1">
                  {s.presence.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-brand-mist px-2 py-0.5 text-[10px] font-bold tracking-wider text-brand-ink/60"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-brand-ink/70">{s.oneLiner}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-brand-ink/50">
                <span className="capitalize">{s.vertical}</span>
                {s.stage && <span className="uppercase tracking-wider">{s.stage}</span>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-2xl border border-dashed border-brand-ink/15 bg-brand-mist p-8 text-sm text-brand-ink/60">
          Coming soon. The startup directory will be populated once the community database is connected.
        </p>
      )}
    </PageShell>
  );
}
