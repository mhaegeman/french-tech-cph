import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { useTranslations } from "next-intl";

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
      title="Doing business in Denmark"
      intro="A practical guide for French founders setting up in Denmark."
    >
      <div className="prose max-w-prose text-brand-ink/80">
        <p>{t("placeholder")}</p>
        <ul>
          <li>Company forms (ApS, A/S) and incorporation costs</li>
          <li>Tax basics and VAT registration</li>
          <li>Hiring, work permits and residency</li>
          <li>Banking and payment infrastructure</li>
          <li>Accelerators, incubators and grants</li>
          <li>Useful contacts: Embassy, Business France, CCIF DK</li>
        </ul>
      </div>
    </PageShell>
  );
}
