import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { getPartners } from "@/lib/directories";
import type { Partner } from "@/lib/directories";
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
    title: t("partners"),
    alternates: pageAlternates(locale, "/partners"),
  };
}

const TIERS: { id: Partner["tier"]; label: string; body: string }[] = [
  {
    id: "institutional",
    label: "Institutional",
    body: "Government, embassy and chamber-of-commerce partners.",
  },
  {
    id: "corporate",
    label: "Corporate",
    body: "Companies supporting the community financially or in-kind.",
  },
  {
    id: "ecosystem",
    label: "Ecosystem",
    body: "Accelerators, VCs, hubs and other community organisations.",
  },
];

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  const partners = await getPartners();

  return (
    <PageShell
      title={t("partners")}
      intro="A growing roster of partners supporting the FR ↔ DK tech bridge."
    >
      <div className="space-y-12">
        {TIERS.map((tier) => {
          const list = partners.filter((p) => p.tier === tier.id);
          if (list.length === 0) return null;
          return (
            <section key={tier.id}>
              <h2 className="font-display text-2xl font-semibold text-brand-ink">
                {tier.label}
              </h2>
              <p className="mt-1 text-sm text-brand-ink/60">{tier.body}</p>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {list.map((p) => (
                  <li
                    key={p.id}
                    className="flex h-24 items-center justify-center rounded-xl border border-brand-ink/5 bg-white px-4 text-center text-sm font-medium text-brand-ink/80"
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
