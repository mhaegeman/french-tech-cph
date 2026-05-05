import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageShell eyebrow="Legal" title="Imprint" intro="Legal notice.">
      <p className="rounded-2xl border border-dashed border-brand-ink/15 bg-brand-mist p-8 text-sm text-brand-ink/60">
        Entity, registered address and contact will appear here once the
        association is formally registered.
      </p>
    </PageShell>
  );
}
