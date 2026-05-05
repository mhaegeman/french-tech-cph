import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("news") };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      title={t("news")}
      intro="Press releases, founder stories, recaps. Sourced from the CMS."
    >
      <p className="rounded-2xl border border-dashed border-brand-ink/15 bg-brand-mist p-8 text-sm text-brand-ink/60">
        News posts will be powered by Sanity. The CMS isn&apos;t wired yet —
        once it is, this page lists posts with cover images and excerpts.
      </p>
    </PageShell>
  );
}
