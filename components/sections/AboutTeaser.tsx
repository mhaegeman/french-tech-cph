import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function AboutTeaser() {
  const t = useTranslations("home");
  return (
    <section className="container-page py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow">{t("aboutTitle")}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            {t("aboutTitle")}
          </h2>
        </div>
        <div>
          <p className="text-lg text-brand-ink/80">{t("aboutBody")}</p>
          <Link
            href="/about"
            className="mt-5 inline-flex text-sm font-semibold text-brand-red hover:underline"
          >
            {t("aboutCta")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
