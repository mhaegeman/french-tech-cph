import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

import aepifdLogo from "@/public/brand/aepifd-logo.png";

const AEPIFD_JOIN_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfftyULnOv0xJFVuhNokyk7v_g3qUJThVVtSIkjDsjKqZZDaQ/viewform";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("about"), alternates: pageAlternates(locale, "/about") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  return (
    <PageShell
      eyebrow="French Tech Copenhagen"
      title={t("about")}
      intro={tHome("aboutBody")}
    >
      <section>
        <h2 className="font-display text-2xl font-semibold text-brand-ink">
          Mission
        </h2>
        <p className="mt-3 max-w-2xl text-brand-ink/70">
          Connect French and Danish tech ecosystems through events, mentoring,
          and a soft-landing for French startups crossing into the Nordics.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-brand-ink">
          In partnership with
        </h2>
        <div className="mt-6 grid gap-8 rounded-2xl border border-brand-ink/5 bg-white p-8 md:grid-cols-[200px_1fr] md:items-start md:gap-10">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src={aepifdLogo}
              alt="AEPIFD"
              className="h-auto w-40 max-w-full"
              placeholder="blur"
            />
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-brand-ink">
              AEPIFD
            </p>
            <p className="mt-1 text-sm text-brand-ink/60">
              Association des Entrepreneurs et Professionnels Indépendants
              Français du Danemark
            </p>
            <p className="mt-4 text-brand-ink/80">
              AEPIFD is the legal carrier of French Tech Copenhagen for the
              2026–2028 labellisation period, holding the convention, the
              CVR and the bank account, while French Tech Copenhagen runs its
              programs and community autonomously.
            </p>
            <p className="mt-3 text-brand-ink/80">
              AEPIFD also organises its own working groups, webinars and
              workshops for French entrepreneurs and independent professionals
              in Denmark, covering company setup, taxes, communication,
              customer relations, pitching, and regular networking evenings.
            </p>
            <a
              href={AEPIFD_JOIN_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-6 inline-flex"
            >
              Join AEPIFD →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
