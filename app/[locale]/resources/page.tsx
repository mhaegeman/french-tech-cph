import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

const ITEMS = [
  {
    href: "/resources/doing-business-in-denmark",
    title: "Doing business in Denmark",
    body: "For French founders: company setup, tax, talent, banking, residency.",
  },
  {
    href: "/resources/doing-business-in-france",
    title: "Doing business in France",
    body: "For Danish founders: French market entry, hiring, French Tech programs.",
  },
  {
    href: "/resources/ecosystem-map",
    title: "FR ↔ DK ecosystem map",
    body: "Visual map of the actors connecting both ecosystems.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("resources") };
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      title={t("resources")}
      intro="Practical guides curated by the community."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {ITEMS.map((it) => (
          <li
            key={it.href}
            className="rounded-2xl border border-brand-ink/5 bg-white p-6"
          >
            <h2 className="font-display text-lg font-semibold text-brand-ink">
              {it.title}
            </h2>
            <p className="mt-2 text-sm text-brand-ink/70">{it.body}</p>
            <Link
              href={it.href}
              className="mt-4 inline-flex text-sm font-semibold text-brand-red hover:underline"
            >
              Read →
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
