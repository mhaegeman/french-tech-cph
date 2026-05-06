import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";

export function Hero() {
  const t = useTranslations("home");
  const tSite = useTranslations("site");

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-mist via-white to-white"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-40 -z-10 h-96 w-96 rounded-full bg-brand-nordic/10 blur-3xl"
      />

      <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">{t("heroEyebrow")}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-ink sm:text-6xl">
            {tSite("tagline")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-ink/70">
            {tSite("description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              {t("heroCtaPrimary")}
            </Link>
            <Link href="/events" className="btn-secondary">
              {t("heroCtaSecondary")} →
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <Logo className="h-56 sm:h-72 lg:h-[22rem]" />
        </div>
      </div>
    </section>
  );
}
