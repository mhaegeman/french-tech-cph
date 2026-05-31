import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/sections/ContactForm";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "frenchtechcopenhagen@gmail.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: t("contact"),
    alternates: pageAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      title={t("contact")}
      intro="Tell us what you're working on: joining the community, partnering, or press."
    >
      <ContactForm email={CONTACT_EMAIL} />
    </PageShell>
  );
}
