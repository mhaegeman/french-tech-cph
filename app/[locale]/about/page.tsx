import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("about"), alternates: pageAlternates(locale, "/about") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  return (
    <PageShell
      eyebrow="French Tech Copenhagen"
      title={t("about")}
      intro={tHome("aboutBody")}
    >
      <section>
        <h2 className="font-display text-2xl font-semibold text-brand-ink">
          Mission
        </h2>
        <p className="mt-3 max-w-2xl text-brand-ink/70">
          Connect French and Danish tech ecosystems through events, mentoring,
          and a soft-landing for French startups crossing into the Nordics.
        </p>
      </section>
    </PageShell>
  );
}
