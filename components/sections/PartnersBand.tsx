import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Partner } from "@/lib/directories";

export function PartnersBand({ partners }: { partners: Partner[] }) {
  const t = useTranslations("home");
  return (
    <section className="container-page py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("partnersTitle")}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            {t("partnersTitle")}
          </h2>
          <p className="mt-3 text-brand-ink/70">{t("partnersBody")}</p>
        </div>
        <Link href="/partners" className="btn-secondary">
          {t("partnersCta")} →
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {partners.slice(0, 12).map((p) => (
          <li
            key={p.id}
            className="flex h-20 items-center justify-center rounded-xl border border-brand-ink/5 bg-white px-3 text-center text-xs font-medium text-brand-ink/70"
          >
            {p.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
