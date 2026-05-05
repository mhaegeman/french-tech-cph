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
  return { title: t("press"), alternates: pageAlternates(locale, "/press") };
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      title={t("press")}
      intro="Logo pack, one-pager and media contact."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-brand-ink/5 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-brand-ink">
            Brand kit
          </h2>
          <p className="mt-2 text-sm text-brand-ink/70">
            Logo, color palette and usage guidelines. Available once the final
            logo is delivered.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-ink/5 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-brand-ink">
            Media contact
          </h2>
          <p className="mt-2 text-sm text-brand-ink/70">
            For press inquiries, write to{" "}
            <a
              href="mailto:press@frenchtechcph.dk"
              className="font-semibold text-brand-red hover:underline"
            >
              press@frenchtechcph.dk
            </a>
            .
          </p>
        </div>
      </div>
    </PageShell>
  );
}
