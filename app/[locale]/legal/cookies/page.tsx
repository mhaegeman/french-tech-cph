import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";

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
      intro="We use Plausible for privacy-friendly analytics — no cookies, no personal data."
    >
      <p className="rounded-2xl border border-dashed border-brand-ink/15 bg-brand-mist p-8 text-sm text-brand-ink/60">
        Detailed cookie list pending — only embedded third-parties (Luma,
        Mailchimp) may set cookies on their respective iframes.
      </p>
    </PageShell>
  );
}
