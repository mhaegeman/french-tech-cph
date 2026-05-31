import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { Link } from "@/i18n/navigation";
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
    title: t("community"),
    alternates: pageAlternates(locale, "/community"),
  };
}

const SUBPAGES = [
  { href: "/community/startups", labelKey: "startups", body: "Filterable directory of French startups in or with Denmark." },
  { href: "/community/mentors", labelKey: "mentors", body: "Volunteer mentors offering office hours and intros." },
] as const;

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      title={t("community")}
      intro="A volunteer-run community of founders, operators, investors and mentors building bridges between France and Denmark."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {SUBPAGES.map((p) => (
          <li
            key={p.href}
            className="rounded-2xl border border-brand-ink/5 bg-white p-6"
          >
            <h2 className="font-display text-xl font-semibold text-brand-ink">
              {t(p.labelKey)}
            </h2>
            <p className="mt-2 text-sm text-brand-ink/70">{p.body}</p>
            <Link
              href={p.href}
              className="mt-4 inline-flex text-sm font-semibold text-brand-red hover:underline"
            >
              {t(p.labelKey)} →
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
