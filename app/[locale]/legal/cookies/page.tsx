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
    title: "Cookie policy",
    alternates: pageAlternates(locale, "/legal/cookies"),
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageShell
      eyebrow="Legal"
      title="Cookie policy"
      intro="This site does not use cookies and does not run analytics."
    >
      <div className="prose max-w-prose text-brand-ink/80">
        <p>
          We don&apos;t set cookies and we don&apos;t track visitors. If we
          ever add analytics or embed third-party services that do set cookies,
          this page will be updated and you&apos;ll be asked for consent first.
        </p>
      </div>
    </PageShell>
  );
}
