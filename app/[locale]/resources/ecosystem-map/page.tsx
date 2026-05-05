import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageShell
      eyebrow="Resources"
      title="FR ↔ DK ecosystem map"
      intro="A visual overview of the actors building bridges between France and Denmark."
    >
      <div className="grid place-items-center rounded-2xl border border-dashed border-brand-ink/15 bg-brand-mist py-24 text-sm text-brand-ink/60">
        Map illustration coming soon.
      </div>
    </PageShell>
  );
}
