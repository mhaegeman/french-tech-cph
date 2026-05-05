import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Privacy policy",
    alternates: pageAlternates(locale, "/legal/privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy policy"
      intro="How we handle personal data on this site."
    >
      <p className="rounded-2xl border border-dashed border-brand-ink/15 bg-brand-mist p-8 text-sm text-brand-ink/60">
        Final GDPR-compliant copy pending legal review.
      </p>
    </PageShell>
  );
}
