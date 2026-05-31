import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { Link } from "@/i18n/navigation";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Soft-landing in Denmark",
    alternates: pageAlternates(locale, "/programs/soft-landing"),
  };
}

export default async function SoftLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      eyebrow="Programs"
      title="Soft-landing in Denmark"
      intro="A program to help French founders set up in Copenhagen — being built with the community."
    >
      <div className="max-w-2xl rounded-2xl border border-brand-ink/5 bg-white p-8">
        <p className="text-brand-ink/80">
          If you&apos;re a French founder considering Denmark, get in touch —
          we&apos;d love to hear what you&apos;re working on and connect you with
          the right people.
        </p>
        <Link href="/contact" className="btn-primary mt-6 inline-flex">
          Get in touch
        </Link>
      </div>
    </PageShell>
  );
}
