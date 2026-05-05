import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { useTranslations } from "next-intl";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Doing business in France",
    alternates: pageAlternates(locale, "/resources/doing-business-in-france"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("labels");
  return (
    <PageShell
      eyebrow="Resources"
      title="Doing business in France"
      intro="A practical guide for Danish founders entering the French market."
    >
      <div className="prose max-w-prose text-brand-ink/80">
        <p>{t("placeholder")}</p>
        <ul>
          <li>Company forms (SAS, SARL) and Station F</li>
          <li>Tax incentives (CIR, JEI) and grants</li>
          <li>Hiring in France: contracts, social charges</li>
          <li>French Tech programs you can apply to</li>
          <li>Useful contacts: Business France, La French Tech regions</li>
        </ul>
      </div>
    </PageShell>
  );
}
